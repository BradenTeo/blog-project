<template>
  <div class="max-w-[300px] m-2 border-4 p-4 rounded-lg hover:border-orange-100">
    <div class="bg-cover" :style="{ backgroundImage: `url(${backgroundUrl})` }">
      <b>{{ title }}</b><br>
      {{ description }}<br><br>
      <div class="text-right">
        <nuxt-link :to="`/${weblink}`" class="link border-4 p-2 hover:bg-teal-100">Learn more</nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    backgroundUrl: {
      type: String,
      required: true
    },
    weblink: {
      type: String,
      required: true
    }
  }
}
</script>
