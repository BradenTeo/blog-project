<template>
  <div
    class="m-2 border-4 p-4 rounded-lg hover:border-blue-800"
    :class="{
      'border-blue-800': clicked,
      'border-gray-200': !clicked,
      'bg-orange-100': clicked,
    }"
  >
    <div>
      <h1
        class="sticky top-9 z-50 font-bold w-100 inline-block"
        :style="{
          'background-color': clicked ? 'rgb(255 237 213)' : 'transparent',
          'border-color': clicked ? 'rgb(30 64 175)' : 'transparent',
          'border-bottom-width': clicked ? '2px' : '0px',
        }"
      >
        <slot name="title"></slot>
      </h1>
      <button
        class="sticky top-9 z-50 float-right inline-block border-2 hover:border-blue-800 rounded-lg"
        :style="{
          'background-color': clicked ? 'rgb(255 237 213)' : 'transparent',
        }"
        @mousedown="clicked = !clicked"
      >
        <svg
          v-if="!clicked"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-6 h-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M19.5 5.25l-7.5 7.5-7.5-7.5m15 6l-7.5 7.5-7.5-7.5"
          />
        </svg>
        <svg
          v-else
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-6 h-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M4.5 12.75l7.5-7.5 7.5 7.5m-15 6l7.5-7.5 7.5 7.5"
          />
        </svg>
      </button>
      <p v-if="clicked" class="pt-3 text-justify block">
        <slot name="content"></slot>
      </p>
    </div>
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
    title: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      clicked: this.open,
    }
  },
}
</script>
