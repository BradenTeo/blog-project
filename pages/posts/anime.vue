<template>
  <div class="max-w-[720px] mx-auto px-4 py-6">

    <!-- Terminal frame -->
    <div
      ref="animeWindow"
      class="anime-window rounded-xl overflow-hidden shadow-2xl border-2 border-gray-300 dark:border-gray-600"
      @mousemove="onMouseMove"
      @mouseenter="glowVisible = true"
      @mouseleave="glowVisible = false"
    >
      <div v-if="glowVisible" class="cursor-glow" :style="{ left: glowX + 'px', top: glowY + 'px' }"></div>

      <!-- Title bar -->
      <div class="bg-gray-200 dark:bg-gray-800 px-4 py-2 flex items-center gap-2 select-none">
        <span class="w-3 h-3 rounded-full bg-red-500 flex-shrink-0"></span>
        <span class="w-3 h-3 rounded-full bg-yellow-400 flex-shrink-0"></span>
        <span class="w-3 h-3 rounded-full bg-green-500 flex-shrink-0"></span>
        <span class="ml-3 text-gray-500 dark:text-gray-300 text-xs font-mono tracking-wide">anime-hall-of-fame.exe</span>
      </div>

      <!-- Terminal body -->
      <div class="bg-gray-50 dark:bg-gray-950 px-5 py-6 font-mono text-sm leading-relaxed">

        <!-- Header -->
        <div class="text-center mb-5">
          <div class="vt323 text-3xl text-green-700 dark:text-green-400 tracking-widest">★ ANIME HALL OF FAME ★</div>
          <div class="text-green-800 dark:text-green-600 text-xs tracking-widest mt-1">BRADEN'S TOP PICKS — RATED 8/10 AND ABOVE</div>
          <div class="text-green-700 dark:text-green-800 text-xs mt-0.5">
            SHOWING: {{ visibleCount }} / {{ totalCount }} ENTRIES<span class="blink-cursor">_</span>
          </div>
          <div v-if="fetchedAt" class="text-green-600 dark:text-green-900 text-xs mt-0.5">
            CACHE: {{ fetchedAt }}
          </div>
        </div>

        <!-- Genre filter -->
        <div class="mb-5">
          <div class="text-green-700 dark:text-green-800 text-xs mb-2 tracking-widest">FILTER BY GENRE:</div>
          <div class="flex flex-wrap gap-1.5">
            <button
              v-for="g in genres"
              :key="g"
              class="filter-btn vt323 text-sm px-2 py-0.5 rounded border transition-colors duration-100"
              :class="selectedGenre === g ? 'filter-btn-active' : 'filter-btn-idle'"
              @click="selectedGenre = g"
            >
              {{ g === 'all' ? 'ALL' : g.toUpperCase() }}
              <span v-if="g !== 'all'" class="opacity-60">({{ genreCount(g) }})</span>
            </button>
          </div>
        </div>

        <div class="border-t border-green-200 dark:border-green-900 mb-5"></div>

        <!-- Loading -->
        <div v-if="loading" class="text-green-600 dark:text-green-700 text-xs text-center py-8 tracking-widest">
          LOADING DATA<span class="blink-cursor">_</span>
        </div>

        <!-- No results -->
        <div v-if="!loading && visibleCount === 0" class="text-green-700 dark:text-green-800 text-xs text-center py-6 tracking-widest">
          NO ENTRIES FOUND FOR THIS GENRE
        </div>

        <!-- Lightbox -->
        <transition name="lb">
          <div v-if="lightbox" class="lightbox-overlay" @click="lightbox = null">
            <img :src="lightbox.img" :alt="lightbox.title" class="lightbox-img" @click.stop />
            <div class="lightbox-title vt323">{{ lightbox.title }}</div>
          </div>
        </transition>

        <!-- Tier 10 — cover art cards -->
        <div v-if="filteredTier10.length > 0" class="mb-6">
          <div class="vt323 text-xl text-[#e84060] mb-3 tracking-wider tier-title-ruby">[ LEGENDARY — 10/10 ]</div>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-2">
            <div
              v-for="anime in filteredTier10"
              :key="anime.title"
              class="tier-10-card flex items-center gap-3 p-3 rounded-lg"
              @click="lightbox = anime"
            >
              <div class="img-wrap">
                <img
                  :src="anime.img"
                  :alt="anime.title"
                  class="cover-art object-cover"
                  width="48"
                  height="68"
                  loading="lazy"
                />
              </div>
              <div class="flex-1 min-w-0">
                <div class="vt323 text-rose-700 dark:text-[#f9aabb] text-lg leading-tight">{{ anime.title }}</div>
                <div class="genre-tag mt-1">{{ anime.genres.join(' · ') }}</div>
              </div>
            </div>
          </div>
        </div>

        <div v-if="filteredTier10.length > 0 && (filteredTier9.length > 0 || filteredTier8.length > 0)" class="border-t border-green-200 dark:border-green-900 mb-5"></div>

        <!-- Tier 9 — cards -->
        <div v-if="filteredTier9.length > 0" class="mb-6">
          <div class="vt323 text-xl text-amber-600 dark:text-amber-400 mb-3 tracking-wider tier-title-gold">[ EXCELLENT — 9/10 ]</div>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-2">
            <div
              v-for="anime in filteredTier9"
              :key="anime.title"
              class="tier-9-card flex items-center gap-3 p-3 rounded-lg"
              @click="lightbox = anime"
            >
              <div v-if="anime.img" class="img-wrap">
                <img
                  :src="anime.img"
                  :alt="anime.title"
                  class="cover-art object-cover"
                  width="48"
                  height="68"
                  loading="lazy"
                />
              </div>
              <div class="flex-1 min-w-0">
                <div class="vt323 text-amber-700 dark:text-amber-200 text-lg leading-tight">{{ anime.title }}</div>
                <div class="genre-tag mt-1">{{ anime.genres.join(' · ') }}</div>
              </div>
            </div>
          </div>
        </div>

        <div v-if="filteredTier9.length > 0 && filteredTier8.length > 0" class="border-t border-green-200 dark:border-green-900 mb-5"></div>

        <!-- Tier 8 -->
        <div v-if="filteredTier8.length > 0" class="mb-4">
          <div class="vt323 text-xl text-slate-600 dark:text-slate-400 mb-3 tracking-wider tier-title-silver">[ GREAT — 8/10 ]</div>

          <!-- Scrolling ticker (only when showing all) -->
          <template v-if="selectedGenre === 'all'">
            <div class="overflow-hidden border border-slate-300 dark:border-slate-600/40 rounded bg-slate-100 dark:bg-black/40 py-2 mb-3">
              <div class="ticker-track text-slate-500 dark:text-slate-400 text-xs whitespace-nowrap">
                <span v-for="(anime, i) in tier8Doubled" :key="i" class="inline-block px-3">
                  {{ anime.title }}&nbsp;·
                </span>
              </div>
            </div>
            <details class="group">
              <summary class="text-slate-500 text-xs cursor-pointer hover:text-slate-800 dark:hover:text-slate-300 transition-colors select-none py-1">
                ▶ SHOW FULL LIST ({{ filteredTier8.length }} entries)
              </summary>
              <div class="mt-2 grid grid-cols-1 sm:grid-cols-2 gap-x-6">
                <div
                  v-for="anime in filteredTier8"
                  :key="anime.title"
                  class="flex items-center gap-2 py-0.5 px-1 rounded text-slate-600 dark:text-slate-400 text-xs cursor-default"
                >
                  <span class="text-slate-400 dark:text-slate-600 flex-shrink-0">▶</span>
                  <span>{{ anime.title }}</span>
                  <span class="genre-tag ml-auto flex-shrink-0">{{ anime.genres.join(' · ') }}</span>
                </div>
              </div>
            </details>
          </template>

          <!-- Static list (when a genre is selected) -->
          <template v-else>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-x-6">
              <div
                v-for="anime in filteredTier8"
                :key="anime.title"
                class="flex items-center gap-2 py-1 px-1 rounded text-slate-600 dark:text-slate-400 text-xs cursor-default"
              >
                <span class="text-slate-400 dark:text-slate-600 flex-shrink-0">▶</span>
                <span>{{ anime.title }}</span>
              </div>
            </div>
          </template>
        </div>

        <div class="border-t border-green-200 dark:border-green-900 mt-5 mb-3"></div>
        <div class="text-green-700 dark:text-green-800 text-xs text-center tracking-widest">
          PRESS START TO WATCH ANIME<span class="blink-cursor ml-1">█</span>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
const GENRES = ['all', 'Action', 'Fantasy', 'Sci-Fi', 'Slice of Life', 'Drama', 'Sports', 'Comedy', 'Thriller', 'Music', 'Horror']


const CACHE_URL =
  'https://raw.githubusercontent.com/BradenTeo/blog-project/main/static/anime-cache.json'

export default {
  name: 'AnimeHallOfFame',
  layout: 'default',
  data() {
    return {
      selectedGenre: 'all',
      genres: GENRES,
      loading: true,
      lightbox: null,
      tier10Data: [],
      tier9: [],
      tier8: [],
      fetchedAt: null,
      glowX: 0,
      glowY: 0,
      glowVisible: false,
    }
  },
  head() {
    return {
      title: "Anime Hall of Fame | Braden's Journal",
      link: [
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=VT323&display=swap' },
      ],
      meta: [
        { hid: 'description', name: 'description', content: "Braden's anime hall of fame — every series rated 8/10 and above, filterable by genre." },
        { hid: 'og:title', property: 'og:title', content: "Anime Hall of Fame | Braden's Journal" },
      ],
    }
  },
  computed: {
    totalCount() {
      return this.tier10Data.length + this.tier9.length + this.tier8.length
    },
    filteredTier10() {
      if (this.selectedGenre === 'all') return this.tier10Data
      return this.tier10Data.filter(a => a.genres.includes(this.selectedGenre))
    },
    filteredTier9() {
      if (this.selectedGenre === 'all') return this.tier9
      return this.tier9.filter(a => a.genres.includes(this.selectedGenre))
    },
    filteredTier8() {
      if (this.selectedGenre === 'all') return this.tier8
      return this.tier8.filter(a => a.genres.includes(this.selectedGenre))
    },
    visibleCount() {
      return this.filteredTier10.length + this.filteredTier9.length + this.filteredTier8.length
    },
    tier8Doubled() {
      return [...this.tier8, ...this.tier8]
    },
  },
  mounted() {
    this._escHandler = (e) => { if (e.key === 'Escape') this.lightbox = null }
    window.addEventListener('keydown', this._escHandler)
    fetch(CACHE_URL)
      .then(res => (res.ok ? res.json() : null))
      .then((cache) => {
        if (!cache || !Array.isArray(cache.entries) || cache.entries.length === 0) return
        this.tier10Data = cache.entries
          .filter(e => e.score === 10)
          .map(e => ({ ...e, img: e.imageUrl }))
        this.tier9 = cache.entries
          .filter(e => e.score === 9)
          .map(e => ({ ...e, img: e.imageUrl }))
        this.tier8 = cache.entries.filter(e => e.score === 8)
        this.fetchedAt = new Date(cache.fetchedAt).toLocaleDateString('en-GB', {
          day: '2-digit', month: 'short', year: 'numeric',
        })
      })
      .catch(() => {})
      .finally(() => { this.loading = false })
  },
  beforeDestroy() {
    window.removeEventListener('keydown', this._escHandler)
  },
  methods: {
    genreCount(genre) {
      return [...this.tier10Data, ...this.tier9, ...this.tier8]
        .filter(a => a.genres.includes(genre)).length
    },
    onMouseMove(e) {
      const rect = this.$refs.animeWindow.getBoundingClientRect()
      this.glowX = e.clientX - rect.left
      this.glowY = e.clientY - rect.top
    },
  },
}
</script>

<style scoped>
.anime-window,
.anime-window * {
  cursor: url('/blog-project/naruto-cursor-32.png') 12 16, auto;
}

.anime-window {
  position: relative;
}

.lightbox-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.82);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 14px;
  z-index: 999;
}

.lightbox-img {
  max-width: min(320px, 90vw);
  max-height: 80vh;
  border-radius: 8px;
  box-shadow: 0 8px 40px rgba(0, 0, 0, 0.6);
  object-fit: contain;
}

.lightbox-title {
  color: #e2e8f0;
  font-size: 1.25rem;
  letter-spacing: 0.05em;
  text-align: center;
  max-width: 90vw;
}

.lb-enter-active, .lb-leave-active { transition: opacity 0.2s ease; }
.lb-enter, .lb-leave-to { opacity: 0; }

.cursor-glow {
  position: absolute;
  width: 160px;
  height: 160px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(0, 0, 0, 0.04) 0%, transparent 70%);
  transform: translate(-50%, -50%);
  pointer-events: none;
  z-index: 50;
}
.dark .cursor-glow {
  background: radial-gradient(circle, rgba(255, 255, 255, 0.07) 0%, transparent 70%);
}

.vt323 {
  font-family: 'VT323', monospace;
}

.blink-cursor {
  animation: blink 1.1s step-end infinite;
}

@keyframes blink {
  0%, 100% { opacity: 1; }
  50% { opacity: 0; }
}

.filter-btn-idle {
  border-color: #16a34a;
  color: #15803d;
}
.filter-btn-idle:hover {
  border-color: #15803d;
  color: #14532d;
}
.dark .filter-btn-idle {
  border-color: #14532d;
  color: #166534;
}
.dark .filter-btn-idle:hover {
  border-color: #16a34a;
  color: #4ade80;
}
.filter-btn-active {
  background-color: #4ade80;
  border-color: #4ade80;
  color: #052e16;
  font-weight: 700;
}

.genre-tag {
  font-size: 0.6rem;
  padding: 1px 5px;
  border-radius: 3px;
  background-color: rgba(74, 222, 128, 0.15);
  border: 1px solid rgba(74, 222, 128, 0.4);
  color: #15803d;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  white-space: nowrap;
}
.dark .genre-tag {
  background-color: rgba(74, 222, 128, 0.08);
  border-color: rgba(74, 222, 128, 0.2);
  color: #166534;
}

.tier-title-ruby {
  text-shadow: 0 0 8px rgba(232, 64, 96, 0.6), 0 0 24px rgba(232, 64, 96, 0.25);
}
.tier-title-gold {
  text-shadow: 0 0 8px rgba(245, 158, 11, 0.6), 0 0 24px rgba(245, 158, 11, 0.25);
}
.tier-title-silver {
  text-shadow: 0 0 8px rgba(148, 163, 184, 0.5), 0 0 22px rgba(148, 163, 184, 0.2);
}

.tier-10-card {
  position: relative;
  border: 1px solid rgba(232, 64, 96, 0.22);
  overflow: hidden;
}

.tier-9-card {
  position: relative;
  border: 1px solid rgba(245, 158, 11, 0.22);
  background: linear-gradient(135deg, rgba(148, 163, 184, 0.07) 0%, rgba(226, 232, 240, 0.02) 100%);
  overflow: hidden;
}

.tier-10-card::after,
.tier-9-card::after {
  content: '';
  position: absolute;
  left: -10%;
  top: 0;
  width: 120%;
  height: 65%;
  pointer-events: none;
  transform: translateY(-100%);
}

.tier-10-card::after {
  background: radial-gradient(ellipse 55% 100% at 50% 0%, rgba(232, 64, 96, 0.09) 0%, transparent 100%);
  animation: rubySwipe 3.5s ease-in-out infinite;
}

.tier-9-card::after {
  background: radial-gradient(ellipse 55% 100% at 50% 0%, rgba(245, 158, 11, 0.09) 0%, transparent 100%);
  animation: goldSwipe 3.5s ease-in-out infinite;
}

@keyframes rubySwipe {
  0%   { transform: translateY(-100%); opacity: 0; }
  12%  { opacity: 1; }
  88%  { opacity: 0.7; }
  100% { transform: translateY(260%); opacity: 0; }
}

@keyframes goldSwipe {
  0%   { transform: translateY(-100%); opacity: 0; }
  12%  { opacity: 1; }
  88%  { opacity: 0.7; }
  100% { transform: translateY(260%); opacity: 0; }
}

.img-wrap {
  flex-shrink: 0;
  width: 48px;
  height: 68px;
  overflow: hidden;
  border-radius: 4px;
}

.cover-art {
  width: 48px;
  height: 68px;
  filter: brightness(0.92) saturate(0.9);
  transition: transform 0.3s ease, filter 0.2s ease;
}

.tier-10-card:hover .cover-art,
.tier-9-card:hover .cover-art {
  transform: scale(1.15);
  filter: brightness(1.05) saturate(1.05);
}

.ticker-track {
  width: max-content;
  animation: ticker 60s linear infinite;
}

@keyframes ticker {
  0%   { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}

details summary::-webkit-details-marker {
  display: none;
}
</style>
