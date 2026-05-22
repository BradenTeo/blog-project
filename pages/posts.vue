<template>
  <div class="relative">
    <header>
      <Title :title="title" />
    </header>

    <div v-if="isParent" class="flex flex-wrap justify-center mt-4">
      <PostsButtonVue
        title="Cancer Journey (2022) 🩺"
        description="I was diagnosed with Stage 2 Hodgkin's Lymphoma in 2022 😲...
                    But I'm currently in remission :)"
        :background-url="
          require('~/assets/images/posts/hospital.jpg')
        "
        weblink="cancer"
      />

      <PostsButtonVue
        title="LifeHacks 🛠️"
        description="Random tips"
        :background-url="
          require('~/assets/images/posts/random-stuff.png')
        "
        weblink="lifehacks"
      />
    </div>
    <div v-if="isParent" class="italic text-sm mt-10 text-center text-slate-600">
      (Stay tuned for more...)
    </div>
    <div v-if="isParent" class="flex justify-center mt-4">
      <img
        class="h-28 rounded"
        :src="require('~/assets/images/posts/yuru-yuri-slow.gif')"
        alt=""
        aria-hidden="true"
      />
    </div>

    <div
      v-if="!isParent"
      class="lg:flex lg:flex-row lg:justify-between sticky z-20 left-0 top-9"
    >
      <PostsNavBar />
      <nuxt-child class="static" />
      <div class="absolute-right sticky z-20 right-0 top-9 w-40"></div>
    </div>
  </div>
</template>

<script>
import PostsButtonVue from '~/components/PostsButton.vue'
import PostsNavBar from '~/components/PostsNavBar.vue'
export default {
  name: 'PostsPage',
  components: {
    PostsButtonVue,
    PostsNavBar,
  },
  layout: 'default',
  data() {
    return {
      title: 'Posts',
    }
  },
  head() {
    return {
      title: "Posts | Braden's Journal",
      meta: [
        { hid: 'description', name: 'description', content: 'Personal perspectives and stories — from a cancer journey to everyday life hacks.' },
        { hid: 'og:title', property: 'og:title', content: "Posts | Braden's Journal" },
      ],
    }
  },
  computed: {
    isParent() {
      return this.$route.path === '/posts'
    },
  },
}
</script>
