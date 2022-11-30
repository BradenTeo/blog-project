<template>
  <div
    class="w-[350px] h-[215px] m-2 border-4 p-4 rounded-lg hover:border-black bg-cover relative"
    :style="{ backgroundImage: `url(${backgroundUrl})` }"
    @mouseover="hovered = true"
    @mouseleave="hovered = false"
  >
    <div
      class="bg-slate-300 font-bold bg-opacity-50 rounded-lg p-2"
      :style="{ width: titleLength + 1 + 'ch' }"
    >
      {{ title }}
    </div>

    <div
      v-if="hovered"
      class="backdrop-blur-md mt-2 p-2 italic"
      :style="{ width: descriptionLength + 1 + 'ch' }"
    >
      {{ description }}
    </div>

    <br /><br />

    <div
      v-if="hovered"
      class="absolute bottom-1 right-1 border-[3px] bg-slate-300 bg-opacity-50 hover:border-black border-slate-500 hover:bg-slate-600 hover:text-white rounded-md px-[2px] py-[1px]"
    >
      <nuxt-link :to="`/perspectives/${weblink}`" class="link">
        Click to learn more
      </nuxt-link>
    </div>
  </div>
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
  computed: {
    titleLength() {
      return this.title.length
    },
    descriptionLength() {
      return this.description.length > 35 ? 35 : this.description.length
    },
  },
}
</script>
