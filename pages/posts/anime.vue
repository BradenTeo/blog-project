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

        <!-- Search -->
        <div class="mb-4">
          <input
            v-model="searchQuery"
            type="text"
            placeholder="SEARCH TITLES..."
            class="anime-search w-full"
          />
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
          NO ENTRIES FOUND
        </div>

        <!-- Lightbox -->
        <transition name="lb">
          <div v-if="lightbox" class="lightbox-overlay" @click="lightbox = null">
            <div class="lightbox-card" @click.stop>
              <img :src="lightbox.img" :alt="lightbox.title" class="lightbox-img" />
              <div class="lightbox-body">
                <div class="flex items-start justify-between gap-2">
                  <div class="lightbox-title vt323">{{ lightbox.title }}</div>
                  <a :href="`https://myanimelist.net/anime/${lightbox.malId}`" target="_blank" rel="noopener" class="mal-link flex-shrink-0 mt-1">MAL ↗</a>
                </div>
                <div class="lightbox-meta">
                  <span class="ep-label">{{ episodeLabel(lightbox) }}</span>
                  <div class="flex flex-wrap gap-1">
                    <span v-for="genre in lightbox.genres" :key="genre" class="genre-tag">{{ genre }}</span>
                  </div>
                </div>
                <p v-if="lightbox.synopsis" class="lightbox-synopsis">{{ lightbox.synopsis }}</p>
              </div>
              <div class="lightbox-nav">
                <button class="lb-nav-btn" :disabled="lightboxIndex <= 0" @click="navigateLightbox(-1)">‹ PREV</button>
                <span class="lb-nav-count">{{ lightboxIndex + 1 }} / {{ allVisibleAnime.length }}</span>
                <button class="lb-nav-btn" :disabled="lightboxIndex >= allVisibleAnime.length - 1" @click="navigateLightbox(1)">NEXT ›</button>
              </div>
            </div>
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
                <div class="flex flex-wrap gap-1 mt-1">
                  <span v-for="genre in anime.genres" :key="genre" class="genre-tag">{{ genre }}</span>
                </div>
                <div class="flex items-center justify-between mt-1">
                  <div class="ep-label">{{ episodeLabel(anime) }}</div>
                  <a :href="`https://myanimelist.net/anime/${anime.malId}`" target="_blank" rel="noopener" class="mal-link" @click.stop>MAL ↗</a>
                </div>
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
                <div class="flex flex-wrap gap-1 mt-1">
                  <span v-for="genre in anime.genres" :key="genre" class="genre-tag">{{ genre }}</span>
                </div>
                <div class="flex items-center justify-between mt-1">
                  <div class="ep-label">{{ episodeLabel(anime) }}</div>
                  <a :href="`https://myanimelist.net/anime/${anime.malId}`" target="_blank" rel="noopener" class="mal-link" @click.stop>MAL ↗</a>
                </div>
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
              <div class="ticker-track text-slate-500 dark:text-slate-400 text-xs whitespace-nowrap" :style="{ animationDuration: tickerDuration }">
                <span v-for="(anime, i) in tier8Doubled" :key="i" class="inline-block px-3">
                  {{ anime.title }}&nbsp;·
                </span>
              </div>
            </div>
            <details class="group">
              <summary class="text-slate-500 text-xs cursor-pointer hover:text-slate-800 dark:hover:text-slate-300 transition-colors select-none py-1">
                ▶ SHOW FULL LIST ({{ filteredTier8.length }} entries)
              </summary>
              <div class="mt-2 grid grid-cols-1 sm:grid-cols-2 gap-2">
                <div
                  v-for="anime in filteredTier8"
                  :key="anime.title"
                  class="tier-8-card flex items-center gap-3 p-3 rounded-lg"
                  @click="lightbox = anime"
                >
                  <div v-if="anime.img" class="img-wrap">
                    <img :src="anime.img" :alt="anime.title" class="cover-art object-cover" width="48" height="68" loading="lazy" />
                  </div>
                  <div class="flex-1 min-w-0">
                    <div class="vt323 text-slate-600 dark:text-slate-300 text-lg leading-tight">{{ anime.title }}</div>
                    <div class="flex flex-wrap gap-1 mt-1">
                      <span v-for="genre in anime.genres" :key="genre" class="genre-tag">{{ genre }}</span>
                    </div>
                    <div class="flex items-center justify-between mt-1">
                      <div class="ep-label">{{ episodeLabel(anime) }}</div>
                      <a :href="`https://myanimelist.net/anime/${anime.malId}`" target="_blank" rel="noopener" class="mal-link" @click.stop>MAL ↗</a>
                    </div>
                  </div>
                </div>
              </div>
            </details>
          </template>

          <!-- Card grid (when a genre is selected) -->
          <template v-else>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-2">
              <div
                v-for="anime in filteredTier8"
                :key="anime.title"
                class="tier-8-card flex items-center gap-3 p-3 rounded-lg"
                @click="lightbox = anime"
              >
                <div v-if="anime.img" class="img-wrap">
                  <img :src="anime.img" :alt="anime.title" class="cover-art object-cover" width="48" height="68" loading="lazy" />
                </div>
                <div class="flex-1 min-w-0">
                  <div class="vt323 text-slate-600 dark:text-slate-300 text-lg leading-tight">{{ anime.title }}</div>
                  <div class="flex flex-wrap gap-1 mt-1">
                    <span v-for="genre in anime.genres" :key="genre" class="genre-tag">{{ genre }}</span>
                  </div>
                </div>
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
      searchQuery: '',
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
      let list = this.selectedGenre === 'all' ? this.tier10Data : this.tier10Data.filter(a => a.genres.includes(this.selectedGenre))
      if (this.searchQuery) list = list.filter(a => a.title.toLowerCase().includes(this.searchQuery.toLowerCase()))
      return list
    },
    filteredTier9() {
      let list = this.selectedGenre === 'all' ? this.tier9 : this.tier9.filter(a => a.genres.includes(this.selectedGenre))
      if (this.searchQuery) list = list.filter(a => a.title.toLowerCase().includes(this.searchQuery.toLowerCase()))
      return list
    },
    filteredTier8() {
      let list = this.selectedGenre === 'all' ? this.tier8 : this.tier8.filter(a => a.genres.includes(this.selectedGenre))
      if (this.searchQuery) list = list.filter(a => a.title.toLowerCase().includes(this.searchQuery.toLowerCase()))
      return list
    },
    visibleCount() {
      return this.filteredTier10.length + this.filteredTier9.length + this.filteredTier8.length
    },
    allVisibleAnime() {
      return [...this.filteredTier10, ...this.filteredTier9, ...this.filteredTier8]
    },
    lightboxIndex() {
      if (!this.lightbox) return -1
      return this.allVisibleAnime.findIndex(a => a.malId === this.lightbox.malId)
    },
    tier8Doubled() {
      return [...this.tier8, ...this.tier8]
    },
    tickerDuration() {
      return `${Math.max(60, this.tier8.length * 2)}s`
    },
  },
  mounted() {
    this._escHandler = (e) => {
      if (!this.lightbox) return
      if (e.key === 'Escape') this.lightbox = null
      if (e.key === 'ArrowRight') this.navigateLightbox(1)
      if (e.key === 'ArrowLeft') this.navigateLightbox(-1)
    }
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
        this.tier8 = cache.entries
          .filter(e => e.score === 8)
          .map(e => ({ ...e, img: e.imageUrl }))
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
    episodeLabel(anime) {
      if (anime.type === 'Movie') return 'Movie'
      if (anime.episodes) return `${anime.episodes} ep${anime.episodes === 1 ? '' : 's'}`
      return '? eps'
    },
    navigateLightbox(dir) {
      const next = this.allVisibleAnime[this.lightboxIndex + dir]
      if (next) this.lightbox = next
    },
  },
}
</script>

<style scoped>
.anime-window,
.anime-window * {
  cursor: url('/blog-project/naruto-cursor-32.png') 6 2, auto;
}

.anime-window {
  position: relative;
}

.lightbox-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.82);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999;
  padding: 24px;
}

.lightbox-card {
  display: flex;
  flex-direction: column;
  gap: 14px;
  background: #1a1a2e;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  padding: 20px;
  width: min(380px, 92vw);
  max-height: 88vh;
  overflow-y: auto;
  box-shadow: 0 12px 48px rgba(0, 0, 0, 0.7);
}

.lightbox-img {
  width: 100%;
  border-radius: 8px;
  object-fit: contain;
}

.lightbox-body {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.lightbox-title {
  color: #e2e8f0;
  font-size: 1.4rem;
  letter-spacing: 0.05em;
}

.lightbox-meta {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 6px;
}

.lightbox-synopsis {
  font-size: 0.82rem;
  line-height: 1.65;
  color: #94a3b8;
}

.lb-enter-active, .lb-leave-active { transition: opacity 0.2s ease; }
.lb-enter, .lb-leave-to { opacity: 0; }

.anime-search {
  background: transparent;
  border: 1px solid rgba(74, 222, 128, 0.3);
  border-radius: 4px;
  padding: 5px 10px;
  font-family: inherit;
  font-size: 0.7rem;
  letter-spacing: 0.08em;
  color: #166534;
  outline: none;
  transition: border-color 0.15s ease;
}
.anime-search::placeholder { color: rgba(74, 222, 128, 0.4); }
.anime-search:focus { border-color: rgba(74, 222, 128, 0.7); }
.dark .anime-search { color: #4ade80; border-color: rgba(74, 222, 128, 0.2); }
.dark .anime-search::placeholder { color: rgba(74, 222, 128, 0.25); }
.dark .anime-search:focus { border-color: rgba(74, 222, 128, 0.5); }

.mal-link {
  display: inline-block;
  margin-top: 4px;
  font-size: 0.55rem;
  letter-spacing: 0.06em;
  color: #94a3b8;
  text-decoration: none;
  text-transform: uppercase;
  transition: color 0.15s ease;
}
.mal-link:hover { color: #3b82f6; }

.lightbox-nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 12px;
  border-top: 1px solid rgba(255, 255, 255, 0.08);
  margin-top: 4px;
}
.lb-nav-btn {
  font-family: inherit;
  font-size: 0.65rem;
  letter-spacing: 0.08em;
  background: transparent;
  border: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: 4px;
  color: #94a3b8;
  padding: 3px 10px;
  cursor: pointer;
  transition: color 0.15s ease, border-color 0.15s ease;
}
.lb-nav-btn:hover:not(:disabled) { color: #e2e8f0; border-color: rgba(255, 255, 255, 0.35); }
.lb-nav-btn:disabled { opacity: 0.25; cursor: default; }
.lb-nav-count {
  font-size: 0.6rem;
  letter-spacing: 0.08em;
  color: #475569;
}

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
}
.dark .genre-tag {
  background-color: rgba(74, 222, 128, 0.08);
  border-color: rgba(74, 222, 128, 0.2);
  color: #166534;
}

.ep-label {
  font-size: 0.6rem;
  color: #94a3b8;
  letter-spacing: 0.04em;
  text-transform: uppercase;
}
.dark .ep-label {
  color: #475569;
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

.tier-10-card,
.tier-9-card,
.tier-8-card {
  position: relative;
  overflow: hidden;
  cursor: pointer;
  transition: box-shadow 0.2s ease, border-color 0.2s ease;
}

.tier-10-card {
  border: 1px solid rgba(232, 64, 96, 0.22);
}
.tier-10-card:hover {
  box-shadow: 0 0 14px rgba(232, 64, 96, 0.35);
  border-color: rgba(232, 64, 96, 0.55);
}

.tier-9-card {
  border: 1px solid rgba(245, 158, 11, 0.22);
}
.tier-9-card:hover {
  box-shadow: 0 0 14px rgba(245, 158, 11, 0.35);
  border-color: rgba(245, 158, 11, 0.55);
}

.tier-8-card {
  border: 1px solid rgba(148, 163, 184, 0.2);
}
.tier-8-card:hover {
  box-shadow: 0 0 14px rgba(148, 163, 184, 0.3);
  border-color: rgba(148, 163, 184, 0.5);
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


.ticker-track {
  width: max-content;
  animation: ticker linear infinite;
}

@keyframes ticker {
  0%   { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}

details summary::-webkit-details-marker {
  display: none;
}
</style>
