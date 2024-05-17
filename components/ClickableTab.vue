<template>
  <div
    class="m-2 border-4 p-4 rounded-lg border-gray-200 hover:border-slate-600"
    :class="{
      'border-slate-600': tabOpened,
      'border-gray-200': !tabOpened,
      'bg-orange-100': tabOpened,
      'cursor-pointer': !tabOpened,
    }"
    @mouseover="hoveredTab = true"
    @mouseleave="hoveredTab = false"
    @mousedown="
      tabOpened = true
      hoveredButton = false
    "
  >
    <div>
      <h1
        class="sticky top-9 z-50 font-bold w-100 inline-block"
        :class="{
          'border-slate-600': tabOpened,
          'border-transparent': !tabOpened,
          'border-b-2': tabOpened,
          'border-b-0': !tabOpened,
          'bg-orange-100': tabOpened,
        }"
      >
        <slot name="title"></slot>
      </h1>
      <button
        v-if="tabOpened"
        class="sticky top-9 z-50 float-right inline-block border-2 hover:border-slate-600 rounded-lg flex flex-row items-center justify-center p-1"
        :style="{
          'background-color': tabOpened ? 'slate-600' : 'transparent',
        }"
        @mouseover="hoveredButton = true"
        @mouseleave="hoveredButton = false"
        @click.stop="
          tabOpened = false
          hoveredTab = false
        "
      >
        <div
          class="text-center mr-1"
          :class="{
            'text-gray-300': !hoveredButton,
            'text-black': hoveredButton,
          }"
        >
          Hide
        </div>

        <!-- This is the SVG that will be displayed when the button is tabOpened -->
        <svg
          v-if="tabOpened && !hoveredButton"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-5 h-5 text-gray-300"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M4.5 12.75l7.5-7.5 7.5 7.5m-15 6l7.5-7.5 7.5 7.5"
          />
        </svg>
        <svg
          v-if="tabOpened && hoveredButton"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-5 h-5"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M4.5 12.75l7.5-7.5 7.5 7.5m-15 6l7.5-7.5 7.5 7.5"
          />
        </svg>
      </button>

      <!-- This is the SVG that will be displayed when the tab is not open -->
      <svg
        v-else
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="w-6 h-6 sticky top-9 z-50 float-right inline-block"
        :class="{
          'text-white': !hoveredTab,
          'text-slate-600': hoveredTab,
        }"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M19.5 5.25l-7.5 7.5-7.5-7.5m15 6l-7.5 7.5-7.5-7.5"
        />
      </svg>

      <p v-if="tabOpened" class="text-justify block mt-4">
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
  },
  data() {
    return {
      tabOpened: this.open,
      hoveredButton: false,
      hoveredTab: false,
    }
  },
}
</script>
