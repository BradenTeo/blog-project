<template>
  <div
    class="group m-2 border-4 p-4 rounded-lg transition-colors duration-150"
    :class="{
      'border-slate-600 dark:border-gray-400 bg-orange-100 dark:bg-gray-700': tabOpened,
      'border-gray-200 dark:border-gray-600 dark:bg-gray-800 hover:border-slate-600 dark:hover:border-gray-400': !tabOpened,
    }"
  >
    <div
      class="flex items-center justify-between cursor-pointer select-none"
      :class="{
        'sticky top-9 z-10 bg-orange-100 dark:bg-gray-700 pb-2 mb-2 border-b-2 border-slate-300 dark:border-gray-600': tabOpened,
      }"
      @click="tabOpened = !tabOpened"
    >
      <h1 class="font-bold dark:text-gray-100">
        <slot name="title"></slot>
      </h1>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="w-5 h-5 flex-shrink-0 ml-2 text-slate-400 dark:text-gray-500 transition-all duration-200"
        :class="{
          'rotate-180 text-slate-600 dark:text-gray-300': tabOpened,
          'group-hover:text-slate-600 dark:group-hover:text-gray-300': !tabOpened,
        }"
      >
        <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 5.25l-7.5 7.5-7.5-7.5m15 6l-7.5 7.5-7.5-7.5" />
      </svg>
    </div>

    <p v-if="tabOpened" class="text-justify block dark:text-gray-100">
      <slot name="content"></slot>
    </p>
  </div>
</template>

<script>
export default {
  props: {
    open: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  data() {
    return {
      tabOpened: this.open,
    }
  },
}
</script>
