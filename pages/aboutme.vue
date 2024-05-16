<template>
  <div class="relative">
    <header>
      <Title :title="title" />
    </header>
    <div class="max-w-[680px] mx-auto py-[24px] px-[24px]">
      <p class="text-center border-4 border-white/50 m-2 p-4 rounded-lg">
        I'm a Year 3 Computer Engineering student (NUS).<br /><br />
        During my Summer'22 break, I started learning Web Dev because I was
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
        <b><u>Interests:</u></b>
        <ul class="list-disc list-inside">
          <li class="mb-2 pb-2 border-b-2">
            <b>Anime (and manga)</b><br />
            <p class="ml-6">
              It's like the easiest and cheapest form of entertainment/hobby to
              get into... lol 😂. Here's my
              <a
                href="https://myanimelist.net/profile/brainaden"
                target="_blank"
                class="border-2 hover:border-slate-600 border-slate-600 hover:bg-slate-600 hover:text-white rounded-md px-[1px] py-[1px]"
                >MAL</a
              >.

              <img
                src="~/assets/images/aboutme/yuru-yuri.gif"
                class="w-1/3 mx-auto"
              />
            </p>
          </li>
          <li class="mb-2 pb-2 border-b-2">
            <b>Running</b><br />
            <p class="ml-6">
              Recently started running during the Winter'22 break, and it's
              been going great. I'm still pretty slow, but I just find
              myself yearning to go run every single day. Guess it's a good kind of addiction :))<br /><br />

              <i>If you've not started running/exercising often, I urge you to!</i><br />
              Over the first 1.5 months of running almost daily, I've come upon these benefits:
              <ol class="list-decimal list-inside marker:font-bold">
                <li>Runner's high - you feel great after each run (most of the time)</li>
                <li>During fun (more relaxed) runs, you feel great when you go into a state of flow and find your rhythm</li>
                <li>Clears your Mind (esp. after a long day at work/school)</li>
                <li>Burns calories! Sometimes you feel fat after a large meal, right? Run!</li>
                <li>Get fitter (invest in your body now!)</li>
              </ol>
              <br />

              Also, I think the perfect running form is so beautiful, and I'll continue trying to achieve it :)
            </p>

            Running journey:
            ...insert pics...
            Jan'23: Longest dist - 8.3k, Fastest 5k - 29:15min

            <b>Running Tips/Hacks:</b>
            <ul>
              <li>
                Tie the runner's loop on your shoelace
              </li>
              <li>

              </li>
            </ul>
          </li>
        </ul>

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
