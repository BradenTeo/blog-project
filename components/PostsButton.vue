<template>
  <nuxt-link :to="`/posts/${weblink}`" class="card-link">
    <div
      class="w-[350px] h-[215px] m-2 border-4 p-2 rounded-lg hover:border-black relative overflow-hidden transition-colors duration-150"
      @mouseover="hovered = true"
      @mouseleave="hovered = false"
    >
      <div
        class="absolute inset-0 image z-0 bg-cover bg-center"
        :style="{ backgroundImage: `url(${backgroundUrl})` }"
        :class="{ 'blur-effect': hovered }"
      ></div>

      <div class="absolute h-auto inset-0 rounded-lg p-2 z-10">
        <div
          class="bg-slate-300 dark:bg-slate-700 dark:text-gray-100 font-bold rounded-lg p-2 bg-opacity-90 dark:bg-opacity-90 flex justify-center items-center"
          :style="{ width: 'full', height: 'fit-content' }"
        >
          {{ title }}
        </div>
        <div
          v-if="hovered"
          class="font-semibold mt-2 italic p-2 justify-center text-gray-900"
          :style="{ width: 'fit-content' }"
        >
          {{ description }}
        </div>
      </div>
    </div>
  </nuxt-link>
</template>

<script>
export default {
  name: 'PostsButtonVue',
  props: {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    backgroundUrl: {
      type: String,
      required: true,
    },
    weblink: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      hovered: false,
    }
  },
}
</script>

<style scoped>
.image {
  transition: filter 0.25s ease;
}

.blur-effect {
  filter: blur(8px);
}
</style>
