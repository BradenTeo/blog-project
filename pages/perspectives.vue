<template>
  <div class="relative">
    <header>
      <Title :title="title" />
    </header>

    <div v-if="isParent" class="flex flex-wrap justify-center mt-4">
      <PerspectivesButtonVue
        title="Cancer Journey"
        description="I was diagnosed with Stage 2 Hodgkin's Lymphoma earlier this year, and 
                    am currently in remission :)"
        :background-url="
          require('~/assets/images/perspectives/cancer-cell.jpg')
        "
        weblink="cancer"
      />

      <PerspectivesButtonVue
        title="LifeHacks"
        description="Random tips"
        :background-url="
          require('~/assets/images/perspectives/random-stuff.png')
        "
        weblink="lifehacks"
      />
    </div>
    <div v-if="isParent" class="italic text-sm mt-10 mx-auto text-slate-600">
      (I'll probably be adding more stuff down the road...)
    </div>

    <div
      v-if="!isParent"
      class="lg:flex lg:flex-row lg:justify-between sticky z-20 left-0 top-[28px]"
    >
      <PerspectivesNavBar />
      <nuxt-child class="static" />
      <div class="absolute-right sticky z-20 right-0 top-[28px] w-[19ch]"></div>
    </div>
  </div>
</template>

<script>
import PerspectivesButtonVue from '~/components/PerspectivesButton.vue'
import PerspectivesNavBar from '~/components/PerspectivesNavBar.vue'
export default {
  name: 'PerspectivesPage',
  components: {
    PerspectivesButtonVue,
    PerspectivesNavBar,
  },
  layout: 'default',
  data() {
    return {
      title: 'Perspectives',
    }
  },
  computed: {
    isParent() {
      return this.$route.path === '/perspectives'
    },
  },
}
</script>
