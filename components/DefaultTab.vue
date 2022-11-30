<template>
  <div
    class="m-2 border-4 p-4 rounded-lg hover:border-blue-800"
    :class="{
      'border-blue-800': clicked,
      'border-gray-200': !clicked,
      'bg-orange-100': clicked,
    }"
    @mousedown="clicked = !clicked"
  >
    <div class="flex justify-between">
      <h1 class="font-bold w-100">
        <slot name="title"></slot>
      </h1>
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
    </div>
    <p v-if="clicked" class="pt-3 text-justify">
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
