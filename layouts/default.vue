<template>
  <div class="min-h-screen flex flex-col bg-gradient-to-br from-orange-200 to-slate-400 dark:from-gray-900 dark:to-gray-950 dark:text-gray-100">
    <div id="site-header" class="text-3xl text-white bg-slate-700 dark:bg-gray-950 font-bold text-center py-4">
      Braden's Journal &#9997;
    </div>

    <nav
      class="sticky top-0 z-[100] h-9 flex items-center bg-slate-600 dark:bg-gray-900 px-3 relative"
    >
      <div class="absolute left-1/2 -translate-x-1/2 flex items-center space-x-1">
        <nuxt-link to="/" class="link whitespace-nowrap" exact> Home </nuxt-link>
        <nuxt-link to="/posts" class="link whitespace-nowrap"> Posts </nuxt-link>
        <nuxt-link to="/behind-the-scenes" class="link whitespace-nowrap"> BTS </nuxt-link>
      </div>
      <div class="ml-auto flex items-center flex-none">
        <button
          class="relative w-14 h-7 rounded-full transition-colors duration-300 focus:outline-none overflow-hidden"
          :class="darkMode ? 'bg-indigo-950' : 'bg-slate-400'"
          aria-label="Toggle dark mode"
          @click="toggleDarkMode"
        >
          <!-- Stars (visible in dark mode) -->
          <span class="absolute top-1 right-2 w-1 h-1 bg-white rounded-full transition-opacity duration-300" :class="darkMode ? 'opacity-80' : 'opacity-0'"></span>
          <span class="absolute top-3.5 right-4 w-0.5 h-0.5 bg-white rounded-full transition-opacity duration-300" :class="darkMode ? 'opacity-60' : 'opacity-0'"></span>
          <span class="absolute top-1.5 right-6 w-0.5 h-0.5 bg-white rounded-full transition-opacity duration-300" :class="darkMode ? 'opacity-70' : 'opacity-0'"></span>
          <!-- Knob -->
          <span
            class="absolute top-0.5 left-0.5 w-6 h-6 rounded-full shadow-md flex items-center justify-center transition-all duration-300"
            :class="darkMode ? 'translate-x-7 bg-slate-200' : 'translate-x-0 bg-amber-100'"
          >
            <!-- Sun -->
            <svg v-if="!darkMode" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-4 h-4 text-amber-400">
              <path d="M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM18.894 6.166a.75.75 0 00-1.06-1.06l-1.591 1.59a.75.75 0 101.06 1.061l1.591-1.59zM21.75 12a.75.75 0 01-.75.75h-2.25a.75.75 0 010-1.5H21a.75.75 0 01.75.75zM17.834 18.894a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 10-1.061 1.06l1.59 1.591zM12 18a.75.75 0 01.75.75V21a.75.75 0 01-1.5 0v-2.25A.75.75 0 0112 18zM7.758 17.303a.75.75 0 00-1.061-1.06l-1.591 1.59a.75.75 0 001.06 1.061l1.591-1.59zM6 12a.75.75 0 01-.75.75H3a.75.75 0 010-1.5h2.25A.75.75 0 016 12zM6.697 7.757a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 00-1.061 1.06l1.59 1.591z" />
            </svg>
            <!-- Moon -->
            <svg v-if="darkMode" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-3.5 h-3.5 text-indigo-400">
              <path fill-rule="evenodd" d="M9.528 1.718a.75.75 0 01.162.819A8.97 8.97 0 009 6a9 9 0 009 9 8.97 8.97 0 003.463-.69.75.75 0 01.981.98 10.503 10.503 0 01-9.694 6.46c-5.799 0-10.5-4.701-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 01.818.162z" clip-rule="evenodd" />
            </svg>
          </span>
        </button>
      </div>
    </nav>

    <nuxt class="flex-1 dark:text-gray-100 md:pb-20" />

    <ScrollToTop />

    <footer
      class="md:fixed md:bottom-0 md:left-0 md:right-0 z-50 text-center bg-slate-600 dark:bg-gray-900 text-white py-2 bg-opacity-90 dark:bg-opacity-90"
    >
      <img
        class="hidden md:block absolute bottom-0 left-[5%] md:left-[25%] lg:left-[30%] xl:left-[35%] 2xl:left-[40%] h-[60px]"
        src="~/assets/images/layout/footer-img.gif"
        alt=""
        aria-hidden="true"
        loading="lazy"
      />
      <p class="text-xs italic text-gray-300 mb-1">Website last updated: 24/05/26</p>
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
  font-size: 0.75rem;
  padding: 3px 8px;
  border-radius: 6px;
  white-space: nowrap;
  transition: color 0.15s ease, background-color 0.15s ease;
}

@media (min-width: 640px) {
  .link {
    font-size: 0.875rem;
    padding: 3px 12px;
  }
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
