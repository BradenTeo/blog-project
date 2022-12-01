<template>
  <div class="relative">
    <header>
      <Title :title="title" />
    </header>
    <div class="max-w-[680px] mx-auto py-[24px] px-[24px]">
      <p class="text-center border-4 border-white/50 m-2 p-4 rounded-lg">
        I'm a Year 3 Computer Engineering student (NUS).<br /><br />
        During the recent Summer break, I started learning Web Dev because I was
        stuck at home
        <i
          >(more info
          <nuxt-link
            to="/perspectives/cancer"
            class="link font-bold hover:bg-teal-100 hover:text-black"
            >here</nuxt-link
          >).</i
        >
      </p>
      <br />

      <div
        class="text-justify border-4 border-white/50 m-2 p-4 rounded-lg overflow-hidden"
      >
        <b>Interests:</b>
        <p>
          A short section here, but I like anime (and manga), since my Secondary
          School days. It's probably the easiest (a.k.a cheapest) form of
          entertainment/hobby to get into, if you think about it 😂.<br />
          Here's my
          <a
            href="https://myanimelist.net/profile/brainaden"
            target="_blank"
            class="border-2 hover:border-slate-600 border-slate-600 hover:bg-slate-600 hover:text-white rounded-md px-[1px] py-[1px]"
            >MAL</a
          >.
        </p>
        <img
          src="~/assets/images/aboutme/yuru-yuri.gif"
          class="w-2/3 mx-auto"
        />
        <!-- <img
          src="~/assets/images/aboutme/ryougishiki.png"
          class="w-1/3 float-right"
        /> -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AboutMe',
  layout: 'default',
  data() {
    return {
      title: 'About Me',
    }
  },
}
</script>
