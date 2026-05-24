#!/usr/bin/env node
/* eslint-disable no-console */
/**
 * Fetches Braden's completed MAL list (score >= 8) and writes
 * static/anime-cache.json. Run manually or via GitHub Actions.
 *
 * Uses no npm dependencies — only Node.js built-ins.
 */

const https = require('https')
const fs = require('fs')
const path = require('path')

const MAL_USER = 'brainaden'
const OUT = path.join(__dirname, '..', 'static', 'anime-cache.json')

// Maps MAL genre names → site genre categories. null = ignore.
const GENRE_MAP = {
  Action: 'Action',
  Adventure: null,
  'Avant Garde': null,
  'Award Winning': null,
  Comedy: 'Comedy',
  Drama: 'Drama',
  Ecchi: null,
  Fantasy: 'Fantasy',
  Gourmet: 'Slice of Life',
  Harem: null,
  Historical: 'Drama',
  Horror: 'Horror',
  Isekai: 'Fantasy',
  'Martial Arts': 'Action',
  Mecha: 'Sci-Fi',
  Military: 'Action',
  Music: 'Music',
  Mystery: 'Thriller',
  Psychological: 'Thriller',
  Romance: 'Drama',
  'Sci-Fi': 'Sci-Fi',
  'Slice of Life': 'Slice of Life',
  'Space': 'Sci-Fi',
  Sports: 'Sports',
  Supernatural: 'Fantasy',
  Suspense: 'Thriller',
  Thriller: 'Thriller',
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

function get(url) {
  return new Promise((resolve, reject) => {
    https
      .get(url, { headers: { 'User-Agent': 'anime-blog-updater/1.0' } }, (res) => {
        const chunks = []
        res.on('data', (c) => chunks.push(c))
        res.on('end', () => {
          try {
            resolve({ status: res.statusCode, body: JSON.parse(Buffer.concat(chunks).toString()) })
          } catch (e) {
            reject(new Error(`JSON parse error for ${url}: ${e.message}`))
          }
        })
      })
      .on('error', reject)
  })
}

async function getWithRetry(url, retries = 3) {
  for (let i = 0; i < retries; i++) {
    const { status, body } = await get(url)
    if (status === 429) {
      console.warn('  Rate limited — waiting 2s...')
      await sleep(2000)
      continue
    }
    if (status !== 200) throw new Error(`HTTP ${status} for ${url}`)
    return body
  }
  throw new Error(`Failed after ${retries} retries: ${url}`)
}

async function fetchMalList() {
  const all = []
  // order=1 (alphabetical) is stable — no ties that cause duplicate pages.
  // status=7 fetches all statuses; we filter to completed (status===2) in code.
  for (let offset = 0; ; offset += 100) {
    const url = `https://myanimelist.net/animelist/${MAL_USER}/load.json?status=7&order=1&offset=${offset}`
    const batch = await get(url)
    if (!Array.isArray(batch.body) || batch.body.length === 0) break
    all.push(...batch.body)
    if (batch.body.length < 100) break
    await sleep(500)
  }
  // Deduplicate by anime_id as a safety net against any remaining pagination issues
  const unique = [...new Map(all.map((e) => [e.anime_id, e])).values()]
  return unique.filter((e) => e.status === 2 && e.score >= 8)
}

async function fetchAnimeDetails(malId) {
  try {
    const data = await getWithRetry(`https://api.jikan.moe/v4/anime/${malId}`)
    return {
      genres: (data.data?.genres || []).map((g) => g.name),
      imageUrl: data.data?.images?.jpg?.large_image_url || '',
    }
  } catch (e) {
    console.warn(`  Could not fetch details for id ${malId}: ${e.message}`)
    return { genres: [], imageUrl: '' }
  }
}

function mapGenres(malGenres) {
  return [...new Set(malGenres.map((g) => GENRE_MAP[g]).filter(Boolean))]
}

async function main() {
  console.log(`Fetching MAL list for ${MAL_USER}...`)
  const list = await fetchMalList()
  console.log(`Found ${list.length} entries rated 8+\n`)

  const entries = []
  for (let i = 0; i < list.length; i++) {
    const e = list[i]
    process.stdout.write(`[${i + 1}/${list.length}] ${e.anime_title} (score: ${e.score})\n`)
    const details = await fetchAnimeDetails(e.anime_id)
    await sleep(400) // stay under Jikan's 3 req/s limit
    entries.push({
      title: e.anime_title,
      score: e.score,
      malId: e.anime_id,
      imageUrl: details.imageUrl || e.anime_image_path || '',
      genres: mapGenres(details.genres),
    })
  }

  // Sort: score desc, then title asc
  entries.sort((a, b) => b.score - a.score || a.title.localeCompare(b.title))

  const cache = { fetchedAt: new Date().toISOString(), entries }
  fs.writeFileSync(OUT, JSON.stringify(cache, null, 2))
  console.log(`\nWrote ${entries.length} entries to ${OUT}`)
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
