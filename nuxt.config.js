// require('dotenv').config()

export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  publicRuntimeConfig: {
    firebaseUrl: process.env.FIREBASE_URL || 'https://blog-project-e9428-default-rtdb.asia-southeast1.firebasedatabase.app/feedback.json',
  },

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "Braden's Journal",
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: "Braden's personal journal — archiving experiences, perspectives, and things worth sharing." },
      { name: 'format-detection', content: 'telephone=no' },
      { hid: 'og:title', property: 'og:title', content: "Braden's Journal" },
      { hid: 'og:description', property: 'og:description', content: "A personal journal archiving important experiences and perspectives." },
      { hid: 'og:type', property: 'og:type', content: 'website' },
    ],
    link: [
      {
        rel: 'icon',
        type: 'image/x-icon',
        href: `/blog-project/favicon.ico`,
      },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['@/assets/css/main.css'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    // '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/stylelint
    // '@nuxtjs/stylelint-module',
    // '@nuxt/postcss8',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    postcss: {
      postcssOptions: {
        plugins: {
          tailwindcss: {},
          autoprefixer: {},
        },
      },
    },
  },

  router: {
    base: '/blog-project/',
  },
}
