<template>
  <div class="max-w-[720px] mx-auto px-4 py-6">

    <!-- Terminal frame -->
    <div
      ref="animeWindow"
      class="anime-window rounded-xl overflow-hidden shadow-2xl border-2 border-gray-500 dark:border-gray-600"
      @mousemove="onMouseMove"
      @mouseenter="glowVisible = true"
      @mouseleave="glowVisible = false"
    >
      <div v-if="glowVisible" class="cursor-glow" :style="{ left: glowX + 'px', top: glowY + 'px' }"></div>

      <!-- Title bar -->
      <div class="bg-gray-700 dark:bg-gray-800 px-4 py-2 flex items-center gap-2 select-none">
        <span class="w-3 h-3 rounded-full bg-red-500 flex-shrink-0"></span>
        <span class="w-3 h-3 rounded-full bg-yellow-400 flex-shrink-0"></span>
        <span class="w-3 h-3 rounded-full bg-green-500 flex-shrink-0"></span>
        <span class="ml-3 text-gray-300 text-xs font-mono tracking-wide">anime-hall-of-fame.exe</span>
      </div>

      <!-- Terminal body -->
      <div class="bg-gray-950 px-5 py-6 font-mono text-sm leading-relaxed">

        <!-- Header -->
        <div class="text-center mb-5">
          <div class="vt323 text-3xl text-green-400 tracking-widest">★ ANIME HALL OF FAME ★</div>
          <div class="text-green-600 text-xs tracking-widest mt-1">BRADEN'S TOP PICKS — RATED 8/10 AND ABOVE</div>
          <div class="text-green-800 text-xs mt-0.5">
            SHOWING: {{ visibleCount }} / {{ totalCount }} ENTRIES<span class="blink-cursor">_</span>
          </div>
          <div v-if="fetchedAt" class="text-green-900 text-xs mt-0.5">
            CACHE: {{ fetchedAt }}
          </div>
        </div>

        <!-- Genre filter -->
        <div class="mb-5">
          <div class="text-green-800 text-xs mb-2 tracking-widest">FILTER BY GENRE:</div>
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

        <div class="border-t border-green-900 mb-5"></div>

        <!-- No results -->
        <div v-if="visibleCount === 0" class="text-green-800 text-xs text-center py-6 tracking-widest">
          NO ENTRIES FOUND FOR THIS GENRE
        </div>

        <!-- Tier 10 — cover art cards -->
        <div v-if="filteredTier10.length > 0" class="mb-6">
          <div class="vt323 text-xl text-[#e84060] mb-3 tracking-wider tier-title-ruby">[ LEGENDARY — 10/10 ]</div>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-2">
            <div
              v-for="anime in filteredTier10"
              :key="anime.title"
              class="tier-10-card flex items-center gap-3 p-3 rounded-lg"
            >
              <img
                :src="anime.img"
                :alt="anime.title"
                class="cover-art flex-shrink-0 rounded object-cover"
                width="48"
                height="68"
                loading="lazy"
              />
              <div class="flex-1 min-w-0">
                <div class="vt323 text-[#f9aabb] text-lg leading-tight">{{ anime.title }}</div>
                <div class="genre-tag mt-1">{{ anime.genres.join(' · ') }}</div>
              </div>
            </div>
          </div>
        </div>

        <div v-if="filteredTier10.length > 0 && (filteredTier9.length > 0 || filteredTier8.length > 0)" class="border-t border-green-900 mb-5"></div>

        <!-- Tier 9 — cards -->
        <div v-if="filteredTier9.length > 0" class="mb-6">
          <div class="vt323 text-xl text-amber-400 mb-3 tracking-wider tier-title-gold">[ EXCELLENT — 9/10 ]</div>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-2">
            <div
              v-for="anime in filteredTier9"
              :key="anime.title"
              class="tier-9-card flex items-center gap-3 p-3 rounded-lg"
            >
              <img
                v-if="anime.img"
                :src="anime.img"
                :alt="anime.title"
                class="cover-art flex-shrink-0 rounded object-cover"
                width="48"
                height="68"
                loading="lazy"
              />
              <div class="flex-1 min-w-0">
                <div class="vt323 text-amber-200 text-lg leading-tight">{{ anime.title }}</div>
                <div class="genre-tag mt-1">{{ anime.genres.join(' · ') }}</div>
              </div>
            </div>
          </div>
        </div>

        <div v-if="filteredTier9.length > 0 && filteredTier8.length > 0" class="border-t border-green-900 mb-5"></div>

        <!-- Tier 8 -->
        <div v-if="filteredTier8.length > 0" class="mb-4">
          <div class="vt323 text-xl text-slate-400 mb-3 tracking-wider tier-title-silver">[ GREAT — 8/10 ]</div>

          <!-- Scrolling ticker (only when showing all) -->
          <template v-if="selectedGenre === 'all'">
            <div class="overflow-hidden border border-slate-600/40 rounded bg-black/40 py-2 mb-3">
              <div class="ticker-track text-slate-400 text-xs whitespace-nowrap">
                <span v-for="(anime, i) in tier8Doubled" :key="i" class="inline-block px-3">
                  {{ anime.title }}&nbsp;·
                </span>
              </div>
            </div>
            <details class="group">
              <summary class="text-slate-500 text-xs cursor-pointer hover:text-slate-300 transition-colors select-none py-1">
                ▶ SHOW FULL LIST ({{ filteredTier8.length }} entries)
              </summary>
              <div class="mt-2 grid grid-cols-1 sm:grid-cols-2 gap-x-6">
                <div
                  v-for="anime in filteredTier8"
                  :key="anime.title"
                  class="flex items-center gap-2 py-0.5 px-1 rounded text-slate-400 text-xs cursor-default"
                >
                  <span class="text-slate-600 flex-shrink-0">▶</span>
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
                class="flex items-center gap-2 py-1 px-1 rounded text-slate-400 text-xs cursor-default"
              >
                <span class="text-slate-600 flex-shrink-0">▶</span>
                <span>{{ anime.title }}</span>
              </div>
            </div>
          </template>
        </div>

        <div class="border-t border-green-900 mt-5 mb-3"></div>
        <div class="text-green-800 text-xs text-center tracking-widest">
          PRESS START TO WATCH ANIME<span class="blink-cursor ml-1">█</span>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
const GENRES = ['all', 'Action', 'Fantasy', 'Sci-Fi', 'Slice of Life', 'Drama', 'Sports', 'Comedy', 'Thriller', 'Music', 'Horror']

const TIER_10_DATA = [
  { title: 'Aria the Origination',                 genres: ['Slice of Life', 'Fantasy'],          img: require('~/assets/images/posts/anime/aria-the-origination.jpg') },
  { title: "Fate/stay night: Heaven's Feel III",   genres: ['Fantasy', 'Action'],                 img: require('~/assets/images/posts/anime/heavens-feel-iii.jpg') },
  { title: 'K-On!!',                               genres: ['Music', 'Slice of Life', 'Comedy'],  img: require('~/assets/images/posts/anime/k-on.jpg') },
  { title: 'Puella Magi Madoka Magica: Rebellion', genres: ['Fantasy', 'Thriller'],               img: require('~/assets/images/posts/anime/madoka-rebellion.jpg') },
  { title: 'Wolf Children',                        genres: ['Drama', 'Fantasy'],                  img: require('~/assets/images/posts/anime/wolf-children.jpg') },
]

const TIER_9 = [
  { title: 'Amanchu!',                                         genres: ['Slice of Life', 'Comedy']         },
  { title: 'Arakawa Under the Bridge x Bridge',                genres: ['Comedy', 'Slice of Life']         },
  { title: 'Aria the Avvenire',                                genres: ['Slice of Life', 'Fantasy']        },
  { title: 'Bakemonogatari',                                   genres: ['Fantasy', 'Thriller']             },
  { title: 'Barakamon',                                        genres: ['Slice of Life', 'Comedy']         },
  { title: 'Bocchi the Rock!',                                 genres: ['Music', 'Slice of Life', 'Comedy']},
  { title: 'Chainsaw Man: Reze Arc',                           genres: ['Action', 'Thriller']              },
  { title: 'Chihayafuru 2',                                    genres: ['Sports', 'Drama']                 },
  { title: 'Cyberpunk: Edgerunners',                           genres: ['Sci-Fi', 'Action']                },
  { title: 'Dandadan 2nd Season',                              genres: ['Action', 'Comedy']                },
  { title: 'Deca-Dence',                                       genres: ['Sci-Fi', 'Action']                },
  { title: 'Demon Slayer: Mugen Train',                        genres: ['Action', 'Fantasy']               },
  { title: 'Demon Slayer: Swordsmith Village Arc',             genres: ['Action', 'Fantasy']               },
  { title: 'Fate/Zero',                                        genres: ['Fantasy', 'Action']               },
  { title: 'Fate/Zero 2nd Season',                             genres: ['Fantasy', 'Action']               },
  { title: 'Gintama: The Final Chapter — Yorozuya Forever',    genres: ['Comedy', 'Action']                },
  { title: 'Haikyuu!! To the Top Part 2',                      genres: ['Sports']                          },
  { title: 'Haikyuu!! vs. Shiratorizawa',                      genres: ['Sports']                          },
  { title: 'Hajime no Ippo: New Challenger',                   genres: ['Sports', 'Action']                },
  { title: 'Hunter x Hunter (2011)',                           genres: ['Action', 'Fantasy']               },
  { title: 'Jujutsu Kaisen',                                   genres: ['Action', 'Fantasy']               },
  { title: 'Kekkai Sensen & Beyond',                           genres: ['Action', 'Comedy']                },
  { title: 'Kill la Kill',                                     genres: ['Action', 'Comedy']                },
  { title: 'Knights of Sidonia: Love Woven in the Stars',      genres: ['Sci-Fi', 'Action']                },
  { title: 'Liz and the Blue Bird',                            genres: ['Music', 'Drama']                  },
  { title: 'Look Back',                                        genres: ['Drama']                           },
  { title: 'Made in Abyss: Dawn of the Deep Soul',             genres: ['Fantasy', 'Action']               },
  { title: 'Maquia: When the Promised Flower Blooms',          genres: ['Drama', 'Fantasy']                },
  { title: 'March Comes in Like a Lion Season 2',              genres: ['Drama', 'Sports']                 },
  { title: 'Mawaru Penguindrum',                               genres: ['Drama', 'Fantasy']                },
  { title: 'Mob Psycho 100 III',                               genres: ['Action', 'Comedy']                },
  { title: 'Monogatari Series: Second Season',                 genres: ['Fantasy', 'Thriller']             },
  { title: 'Mushishi: Hihamukage',                             genres: ['Fantasy', 'Slice of Life']        },
  { title: 'My Hero Academia: Final Season',                   genres: ['Action', 'Fantasy']               },
  { title: 'O Maidens in Your Savage Season',                  genres: ['Drama', 'Slice of Life']          },
  { title: 'Owarimonogatari 2nd Season',                       genres: ['Fantasy', 'Thriller']             },
  { title: 'Ping Pong the Animation',                          genres: ['Sports', 'Drama']                 },
  { title: 'Ponyo',                                            genres: ['Fantasy', 'Drama']                },
  { title: 'Puella Magi Madoka Magica',                        genres: ['Fantasy', 'Thriller']             },
  { title: 'Ranking of Kings',                                 genres: ['Fantasy', 'Drama']                },
  { title: 'Silver Spoon 2nd Season',                          genres: ['Slice of Life', 'Drama']          },
  { title: 'Sound! Euphonium',                                 genres: ['Music', 'Slice of Life']          },
  { title: 'Sound of the Sky Specials',                        genres: ['Slice of Life', 'Sci-Fi']         },
  { title: 'Steins;Gate',                                      genres: ['Sci-Fi', 'Thriller']              },
  { title: 'Suzume',                                           genres: ['Fantasy', 'Drama']                },
  { title: "Takopii's Original Sin",                           genres: ['Horror', 'Drama']                 },
  { title: 'The Apothecary Diaries',                           genres: ['Thriller', 'Drama']               },
  { title: 'The Disappearance of Haruhi Suzumiya',             genres: ['Sci-Fi', 'Thriller']              },
  { title: 'The Garden of Words',                              genres: ['Drama', 'Slice of Life']          },
  { title: 'The Secret World of Arrietty',                     genres: ['Fantasy', 'Drama']                },
  { title: 'The Tatami Galaxy',                                genres: ['Drama', 'Comedy']                 },
  { title: 'When Marnie Was There',                            genres: ['Drama', 'Fantasy']                },
  { title: 'Yuru Yuri Nachuyachumi!+',                         genres: ['Comedy', 'Slice of Life']         },
]

const TIER_8 = [
  { title: 'A Silent Voice',                           genres: ['Drama']                          },
  { title: 'Akira',                                    genres: ['Sci-Fi', 'Action']               },
  { title: 'Akudama Drive',                            genres: ['Sci-Fi', 'Action']               },
  { title: 'Aria the Animation',                       genres: ['Slice of Life', 'Fantasy']       },
  { title: 'Ascendance of a Bookworm',                 genres: ['Fantasy', 'Slice of Life']       },
  { title: 'Astra Lost in Space',                      genres: ['Sci-Fi', 'Action']               },
  { title: 'Attack on Titan: The Final Season',        genres: ['Action', 'Fantasy']              },
  { title: 'Blue Lock',                                genres: ['Sports']                         },
  { title: 'Castle in the Sky',                        genres: ['Fantasy', 'Action']              },
  { title: 'Chainsaw Man',                             genres: ['Action', 'Horror']               },
  { title: 'Chihayafuru',                              genres: ['Sports', 'Drama']                },
  { title: 'Cowboy Bebop',                             genres: ['Sci-Fi', 'Action']               },
  { title: 'Dandadan',                                 genres: ['Action', 'Comedy']               },
  { title: 'Darker than Black: Gemini of the Meteor',  genres: ['Action', 'Sci-Fi']              },
  { title: 'Death Parade',                             genres: ['Thriller', 'Drama']              },
  { title: 'Demon Slayer',                             genres: ['Action', 'Fantasy']              },
  { title: 'Dr. Stone',                                genres: ['Sci-Fi', 'Action']               },
  { title: 'Dungeon Meshi',                            genres: ['Fantasy', 'Comedy']              },
  { title: 'Durarara!!',                               genres: ['Thriller', 'Action']             },
  { title: 'FLCL',                                     genres: ['Sci-Fi', 'Comedy']               },
  { title: 'Food Wars!',                               genres: ['Slice of Life', 'Comedy']        },
  { title: "Frieren: Beyond Journey's End",            genres: ['Fantasy', 'Slice of Life']       },
  { title: 'From the New World',                       genres: ['Sci-Fi', 'Thriller']             },
  { title: 'Fullmetal Alchemist: Brotherhood',         genres: ['Action', 'Fantasy']              },
  { title: 'Ga-Rei: Zero',                             genres: ['Action', 'Thriller']             },
  { title: 'Ghost in the Shell',                       genres: ['Sci-Fi', 'Thriller']             },
  { title: 'Ghost in the Shell: SAC',                  genres: ['Sci-Fi', 'Thriller']             },
  { title: "Gintama'",                                 genres: ['Comedy', 'Action']               },
  { title: "Girls' Last Tour",                         genres: ['Sci-Fi', 'Slice of Life']        },
  { title: 'Grave of the Fireflies',                   genres: ['Drama']                          },
  { title: 'Gurren Lagann: Lagann-hen',                genres: ['Action', 'Sci-Fi']               },
  { title: 'Haikyuu!!',                                genres: ['Sports']                         },
  { title: 'Hajime no Ippo',                           genres: ['Sports', 'Action']               },
  { title: 'Heavenly Delusion',                        genres: ['Sci-Fi', 'Thriller']             },
  { title: 'Hinamatsuri',                              genres: ['Comedy', 'Slice of Life']        },
  { title: 'Humanity Has Declined',                    genres: ['Comedy', 'Sci-Fi']               },
  { title: 'Hyouka',                                   genres: ['Thriller', 'Slice of Life']      },
  { title: 'I Want to Eat Your Pancreas',              genres: ['Drama']                          },
  { title: "JoJo's Bizarre Adventure: Golden Wind",    genres: ['Action']                         },
  { title: 'Jujutsu Kaisen 2nd Season',                genres: ['Action', 'Fantasy']              },
  { title: 'K-On!',                                    genres: ['Music', 'Slice of Life', 'Comedy']},
  { title: 'Kaiju No. 8',                              genres: ['Action', 'Sci-Fi']               },
  { title: 'Laid-Back Camp',                           genres: ['Slice of Life']                  },
  { title: 'Land of the Lustrous',                     genres: ['Fantasy', 'Sci-Fi']              },
  { title: 'Little Witch Academia',                    genres: ['Fantasy', 'Comedy']              },
  { title: 'Lycoris Recoil',                           genres: ['Action']                         },
  { title: 'Made in Abyss',                            genres: ['Fantasy', 'Action']              },
  { title: 'Mashle',                                   genres: ['Comedy', 'Fantasy']              },
  { title: 'Mob Psycho 100 II',                        genres: ['Action', 'Comedy']               },
  { title: "Monthly Girls' Nozaki-kun",                genres: ['Comedy', 'Slice of Life']        },
  { title: 'Mushishi',                                 genres: ['Fantasy', 'Slice of Life']       },
  { title: 'Mushoku Tensei',                           genres: ['Fantasy']                        },
  { title: "Natsume's Book of Friends",                genres: ['Fantasy', 'Slice of Life']       },
  { title: 'Nausicaä of the Valley of the Wind',       genres: ['Fantasy', 'Sci-Fi']              },
  { title: 'Neon Genesis Evangelion',                  genres: ['Sci-Fi', 'Drama']                },
  { title: 'Odd Taxi',                                 genres: ['Thriller']                       },
  { title: 'Oshi no Ko',                               genres: ['Drama', 'Thriller']              },
  { title: 'Perfect Blue',                             genres: ['Thriller', 'Horror']             },
  { title: 'Planetes',                                 genres: ['Sci-Fi', 'Drama']                },
  { title: 'Princess Mononoke',                        genres: ['Fantasy', 'Action']              },
  { title: 'Psycho-Pass',                              genres: ['Sci-Fi', 'Thriller']             },
  { title: 'Rainbow',                                  genres: ['Drama']                          },
  { title: 'ReLIFE',                                   genres: ['Drama', 'Slice of Life']         },
  { title: 'Revolutionary Girl Utena',                 genres: ['Fantasy', 'Drama']               },
  { title: 'Samurai Champloo',                         genres: ['Action']                         },
  { title: 'School-Live!',                             genres: ['Horror', 'Slice of Life']        },
  { title: 'Shadows House',                            genres: ['Thriller', 'Fantasy']            },
  { title: 'Shirobako',                                genres: ['Slice of Life', 'Drama']         },
  { title: 'Showa Genroku Rakugo Shinju',              genres: ['Drama']                          },
  { title: 'Sound of the Sky',                         genres: ['Slice of Life', 'Sci-Fi']        },
  { title: 'Spice and Wolf II',                        genres: ['Fantasy', 'Drama']               },
  { title: 'Spirited Away',                            genres: ['Fantasy', 'Drama']               },
  { title: 'Spy x Family Season 2',                    genres: ['Action', 'Comedy']               },
  { title: 'Summer Wars',                              genres: ['Sci-Fi', 'Drama']                },
  { title: 'The Tale of the Princess Kaguya',          genres: ['Drama', 'Fantasy']               },
  { title: 'Tiger & Bunny',                            genres: ['Action', 'Sci-Fi']               },
  { title: 'To Your Eternity',                         genres: ['Fantasy', 'Drama']               },
  { title: 'Toradora!',                                genres: ['Drama', 'Comedy']                },
  { title: 'Trigun Stampede',                          genres: ['Action', 'Sci-Fi']               },
  { title: 'Vinland Saga Season 2',                    genres: ['Drama', 'Action']                },
  { title: 'Violet Evergarden',                        genres: ['Drama', 'Fantasy']               },
  { title: 'Wandering Son',                            genres: ['Drama', 'Slice of Life']         },
  { title: 'Yuki Yuna is a Hero',                      genres: ['Fantasy', 'Drama']               },
  { title: 'Yuru Yuri',                                genres: ['Comedy', 'Slice of Life']        },
]

const CACHE_URL =
  'https://raw.githubusercontent.com/BradenTeo/blog-project/main/static/anime-cache.json'

export default {
  name: 'AnimeHallOfFame',
  layout: 'default',
  data() {
    return {
      selectedGenre: 'all',
      genres: GENRES,
      tier10Data: TIER_10_DATA,
      tier9: TIER_9,
      tier8: TIER_8,
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

.cursor-glow {
  position: absolute;
  width: 160px;
  height: 160px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(255, 255, 255, 0.07) 0%, transparent 70%);
  transform: translate(-50%, -50%);
  pointer-events: none;
  z-index: 50;
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
  border-color: #14532d;
  color: #166534;
}
.filter-btn-idle:hover {
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
  background-color: rgba(74, 222, 128, 0.08);
  border: 1px solid rgba(74, 222, 128, 0.2);
  color: #166534;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  white-space: nowrap;
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

.cover-art {
  filter: brightness(0.92) saturate(0.9);
  transition: filter 0.2s ease;
}

.tier-10-card:hover .cover-art {
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
