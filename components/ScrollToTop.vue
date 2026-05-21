<template>
  <transition name="fade">
    <button
      v-if="visible"
      class="fixed bottom-4 md:bottom-[76px] right-4 z-40 bg-slate-600 dark:bg-gray-700 text-white p-2 rounded-full shadow-lg hover:bg-slate-800 dark:hover:bg-gray-500 transition-colors"
      aria-label="Back to top"
      @click="scrollToTop"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="2.5"
        stroke="currentColor"
        class="w-5 h-5"
      >
        <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
      </svg>
    </button>
  </transition>
</template>

<script>
export default {
  name: 'ScrollToTop',
  data() {
    return {
      visible: false,
    }
  },
  mounted() {
    window.addEventListener('scroll', this.onScroll, { passive: true })
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.onScroll)
  },
  methods: {
    onScroll() {
      this.visible = window.scrollY > 200
    },
    scrollToTop() {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    },
  },
}
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
