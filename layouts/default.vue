<template>
  <div class="min-h-screen flex flex-col bg-gradient-to-br from-orange-200 to-slate-400 dark:from-gray-900 dark:to-gray-950 dark:text-gray-100">
    <div class="text-3xl text-white bg-slate-700 dark:bg-gray-950 font-bold text-center py-4">
      Braden's Journal &#9997;
    </div>

    <nav
      class="sticky top-0 z-[100] h-9 flex items-center bg-slate-600 dark:bg-gray-900 px-3 relative"
    >
      <div class="absolute left-1/2 -translate-x-1/2 flex items-center space-x-1">
        <nuxt-link to="/" class="link" exact> Home </nuxt-link>
        <nuxt-link to="/buildprocess" class="link"> Build Process </nuxt-link>
        <nuxt-link to="/posts" class="link"> Posts </nuxt-link>
      </div>
      <div class="ml-auto flex items-center space-x-1 flex-none">
        <span class="text-xs text-white hidden sm:inline">Light</span>
        <div class="cursor-pointer" aria-label="Toggle dark mode" @click="toggleDarkMode">
          <div class="w-9 h-5 flex items-center bg-gray-400 dark:bg-gray-600 rounded-full px-0.5">
            <div
              :class="darkMode ? 'translate-x-4' : ''"
              class="w-4 h-4 bg-white rounded-full shadow transition-transform duration-300"
            ></div>
          </div>
        </div>
        <span class="text-xs text-white hidden sm:inline">Dark</span>
      </div>
    </nav>

    <nuxt class="flex-1 dark:text-gray-100 pb-20" />

    <ScrollToTop />

    <footer
      class="fixed bottom-0 left-0 right-0 z-50 text-center bg-slate-600 dark:bg-gray-900 text-white py-2 bg-opacity-90 dark:bg-opacity-90"
    >
      <img
        class="absolute bottom-0 left-[5%] md:left-[25%] lg:left-[30%] xl:left-[35%] 2xl:left-[40%] h-[60px]"
        src="~/assets/images/default/footer-img.gif"
        alt=""
        aria-hidden="true"
        loading="lazy"
      />
      <p class="text-xs italic text-gray-300 mb-1">Website last updated: 22/05/26</p>
      <button
        class="mx-auto border-2 p-1 rounded-md w-[250px] hover:bg-slate-300 hover:text-black hover:border-black dark:border-gray-400 dark:hover:bg-gray-700 dark:hover:text-white transition-colors duration-150"
        @click="openDialog"
      >
        Send me some feedback!
      </button>

    </footer>

    <BaseDialogVue v-if="showDialog" @close="closeDialog">
      <template #header>Feedback</template>
      <FeedbackForm />
    </BaseDialogVue>
  </div>
</template>

<script>
import BaseDialogVue from '~/components/BaseDialog.vue'
import FeedbackForm from '~/components/FeedbackForm.vue'
export default {
  name: 'DefaultTemplate',
  components: {
    BaseDialogVue,
    FeedbackForm,
  },
  data() {
    return {
      showDialog: false,
      darkMode: false,
    }
  },
  mounted() {
    this.darkMode = localStorage.getItem('darkMode') === 'true'
    if (this.darkMode) {
      document.documentElement.classList.add('dark')
    }
  },
  methods: {
    openDialog() {
      this.showDialog = true
    },
    closeDialog() {
      this.showDialog = false
    },
    toggleDarkMode() {
      this.darkMode = !this.darkMode
      document.documentElement.classList.toggle('dark')
      localStorage.setItem('darkMode', this.darkMode)
    },
  },
}
</script>

<style scoped>
h1 {
  font-size: 2em;
  font-weight: bold;
}

html {
  background-color: rgb(51 65 85);
}

.link {
  text-decoration-line: none;
  color: rgba(255, 255, 255, 0.65);
  font-weight: bold;
  font-size: 0.875rem;
  padding: 3px 12px;
  border-radius: 6px;
  transition: color 0.15s ease, background-color 0.15s ease;
}

.link:hover {
  color: white;
  background-color: rgba(255, 255, 255, 0.12);
}

.link.nuxt-link-active {
  color: white;
  background-color: rgba(255, 255, 255, 0.2);
}
</style>
