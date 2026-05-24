#!/usr/bin/env node
/* eslint-disable no-console */
/**
 * Force a full Jikan re-fetch for every entry, ignoring the existing cache.
 * Use this when cover art or genre data looks stale.
 *
 * It works by deleting anime-cache.json so that fetch-anime.js sees no cache
 * hits and calls Jikan for every entry.
 */

const { execFileSync } = require('child_process')
const fs = require('fs')
const path = require('path')

const CACHE = path.join(__dirname, '..', 'static', 'anime-cache.json')

if (fs.existsSync(CACHE)) {
  fs.unlinkSync(CACHE)
  console.log('Cleared existing cache — forcing full Jikan re-fetch...\n')
} else {
  console.log('No existing cache found — proceeding with full fetch...\n')
}

execFileSync('node', [path.join(__dirname, 'fetch-anime.js')], { stdio: 'inherit' })
