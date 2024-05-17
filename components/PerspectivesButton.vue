<template>
  <nuxt-link :to="`/perspectives/${weblink}`" class="link">
    <div
      class="w-[350px] h-[215px] m-2 border-4 p-2 rounded-lg hover:border-black relative overflow-hidden"
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
          class="bg-slate-300 font-bold rounded-lg p-2 bg-opacity-90 flex justify-center items-center"
          :style="{ width: 'full', height: 'fit-content' }"
        >
          {{ title }}
        </div>
        <div
          v-if="hovered"
          class="font-semibold mt-2 italic p-2 justify-center"
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
  name: 'PerspectivesButtonVue',
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
.blur-effect {
  filter: blur(8px);
}
</style>
