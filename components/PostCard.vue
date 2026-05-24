<template>
  <nuxt-link :to="`/posts/${weblink}`" class="card-link">
    <div
      class="w-[350px] h-[215px] m-2 border-4 p-2 rounded-lg border-gray-300 dark:border-gray-600 hover:border-slate-600 dark:hover:border-gray-400 relative overflow-hidden transition-colors duration-150"
      @mouseover="hovered = true"
      @mouseleave="hovered = false"
    >
      <div
        class="absolute inset-0 image z-0 bg-cover bg-center"
        :style="{ backgroundImage: `url(${backgroundUrl})` }"
        :class="{ 'blur-effect': hovered, 'dim-effect': hovered }"
      ></div>

      <div class="absolute inset-0 rounded-lg p-2 z-10">
        <div
          class="w-full font-bold p-2 flex justify-center items-center text-gray-100 bg-white/20 backdrop-blur-md border border-white/40 rounded-lg [text-shadow:0_2px_8px_rgba(0,0,0,0.95),0_1px_3px_rgba(0,0,0,0.8)]"
        >
          {{ title }}
        </div>
        <div
          v-if="hovered"
          class="mt-2 italic p-2 text-white text-sm rounded-lg [text-shadow:0_1px_4px_rgba(0,0,0,0.9)]"
        >
          {{ description }}
        </div>
      </div>
    </div>
  </nuxt-link>
</template>

<script>
export default {
  name: 'PostCard',
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

.dim-effect {
  filter: blur(8px) brightness(0.45);
}
</style>
