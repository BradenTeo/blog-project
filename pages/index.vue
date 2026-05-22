<template>
  <div class="px-4 md:px-0">
    <section>
      <Title title="Home" class="text-xl" />
    </section>

    <!-- Hero -->
    <div class="max-w-[680px] mx-auto pt-10 pb-8 px-6 flex flex-col sm:flex-row items-center gap-6">
      <img
        class="w-32 h-32 rounded-full object-cover shadow-lg border-4 border-white dark:border-gray-600 flex-shrink-0"
        :src="require('~/assets/images/home/profile.jpg')"
        alt="Braden"
      />
      <div class="text-center sm:text-left">
        <h1 class="text-2xl font-bold mb-2">Hi, I'm Braden! ✏️</h1>
        <p class="text-base leading-relaxed">
          This is my little corner of the internet — a place to archive experiences,
          share perspectives, and keep track of things worth remembering.
        </p>
      </div>
    </div>

    <!-- Currently -->
    <div class="max-w-[460px] md:max-w-[680px] mx-auto px-[10px] mb-6">
      <div
        class="border-4 rounded-md border-white dark:border-gray-600 bg-slate-200 dark:bg-gray-800 bg-opacity-50 dark:bg-opacity-80 backdrop-blur-md p-4"
      >
        <b class="text-lg block mb-3">Currently</b>
        <div class="flex items-end justify-between">
          <ul class="space-y-1">
            <li>📺 Bingeing <em>Naruto</em></li>
            <li>🎸 Learning guitar</li>
            <li>🏃 Running more</li>
          </ul>
          <img
            class="h-24 rounded ml-2 flex-shrink-0"
            :src="require('~/assets/images/home/naruto.gif')"
            alt=""
            aria-hidden="true"
          />
        </div>
      </div>
    </div>

    <div
      class="max-w-[680px] mx-auto text-center pt-8 pb-16 px-[24px] font-bold"
    >
      <i class="text-xl">Feel free to explore the site! 😊</i>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomePage',
  layout: 'default',
  head() {
    return {
      title: "Home | Braden's Journal",
      meta: [
        { hid: 'description', name: 'description', content: "Braden's personal journal — archiving experiences, perspectives, and things worth sharing." },
        { hid: 'og:title', property: 'og:title', content: "Home | Braden's Journal" },
      ],
    }
  },
}
</script>
