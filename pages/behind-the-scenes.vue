<template>
  <div>
    <header>
      <Title :title="title" />
    </header>

    <div class="max-w-[680px] mx-auto text-justify py-[24px] px-[24px]">

      <p class="text-sm text-slate-500 dark:text-gray-400 mb-5 -mt-2 italic">BTS — Behind the Scenes</p>

      <!-- INTRO -->
      <h2 class="font-bold text-xl">What's here?</h2>
      <div class="pb-5 border-b-2">
        On this page you'll find a log of updates I've made to the site over the
        years, as well as the steps I took to build it back in 2022 — in case
        you want to follow along. But if you manage to find better ways of
        creating such a website online, do let me know! :)
      </div>

      <!-- SITE UPDATES -->
      <h2 class="font-bold text-xl pt-5">Site Updates</h2>
      <div class="space-y-3 pb-5 border-b-2">
        <div class="text-justify py-[10px] px-[10px] border-4 rounded-md border-white dark:border-gray-600 bg-slate-200 dark:bg-gray-800 bg-opacity-50 dark:bg-opacity-80 backdrop-blur-md">
          <b>May 2026:</b><br />
          <div class="pb-1">
            In 2026, I used <a href="https://claude.ai/code" target="_blank">Claude Code</a>
            (Anthropic's AI coding assistant) to revisit and improve the website. It was a fun experience —
            I mostly just described what I wanted in plain English and the AI handled the implementation.
            Here's what changed:
            <ul class="list-disc list-inside marker:font-bold mt-1">
              <li>Added a dark / light mode toggle</li>
              <li>Fixed the favicon not showing on GitHub Pages</li>
              <li>Added a scroll-to-top button on long pages</li>
              <li>Revamped the homepage with a personal intro, profile photo, and "Currently" section</li>
              <li>Added an Anime Hall of Fame page — all series rated 8/10+ with cover art, genre tags, episode count, and MAL links</li>
              <li>Anime page auto-updates weekly: pulls the rated list from MyAnimeList and cover art from the Jikan API automatically — no manual updates needed</li>
              <li>Anime entries are searchable by title and filterable by genre</li>
              <li>Clicking an anime card opens a popup with the full synopsis, genres, and episode info; use ← / → to browse entries, ↑ / ↓ to scroll, or Escape / tap outside to close</li>
              <li>Renamed the nav link "Behind the Scenes" to "BTS"</li>
            </ul>
          </div>
        </div>
        <div class="text-justify py-[10px] px-[10px] border-4 rounded-md border-white dark:border-gray-600 bg-slate-200 dark:bg-gray-800 bg-opacity-50 dark:bg-opacity-80 backdrop-blur-md">
          <b>May 2024:</b><br />
          <div class="pb-1">
            <ul class="list-disc list-inside marker:font-bold">
              <li>Edited the styling on the website and made things a bit more user-friendly.</li>
            </ul>
          </div>
        </div>
      </div>

      <!-- BUILDING THE SITE (2022) -->
      <h2 class="font-bold text-xl pt-5">Building the Site (2022)</h2>
      <div class="pb-3">
        I studied these various languages step-by-step:
        <ol class="list-decimal list-inside marker:font-bold mt-1">
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript (just the surface)</li>
          <li>Nuxt.js</li>
        </ol>
      </div>

      <AccordionSection class="pb-5" :open="true" @click.native="showPara = !showPara">
        <template #title>Details of my experience</template>
        <template #content>
          Web development probably seems pretty simple and straightforward at
          first, and well, I think that's not wrong. After all, any average Joe
          can write a few lines of HTML and CSS to create a simple website.
          However, I think the hard part comes when you want your app to do
          more. There's a ton of stuff that you can do with a website, and I
          think it's fun yet intimidating for beginners like me. Especially when
          you see roadmaps like
          <a
            href="https://roadmap.sh/frontend"
            class="border-2 hover:border-slate-600 border-slate-600 hover:bg-slate-600 hover:text-white rounded-md px-[2px] py-[1px]"
            target="_blank"
            >this</a
          >. Nevertheless, I think if you put in the grind, you'll have a lot of
          fun building stuff online. :) <br /><br />

          Personally, I'm still a newbie in all this, but I'm hoping to get a
          better hang of things as I code more. This website is still very
          bare-bones, with very little animations and having minimal back-end.
          No comment section too. I might work on these features more in the
          future, but don't hold me to it, lol.<br /><br />

          Here's some tips I have though:
          <ol class="list-decimal list-inside marker:font-bold">
            <li>Take things one step at a time when you are learning</li>
            <li>Develop a product while you are learning</li>
            <li>Learn from others! -- Udemy, Youtube videos etc.</li>
          </ol>
        </template>
      </AccordionSection>

      <h2 class="font-bold text-xl pt-2 border-t-2">Resources I used</h2>
      <div class="pb-5 pt-1">
        <ul class="list-disc list-inside">
          <li>
            <a
              href="https://medium.com/hackernoon/create-and-publish-a-nuxt-powered-website-on-github-pages-3e922dfa7372"
              target="_blank"
              >Create and publish a Nuxt powered website on Github Pages</a
            >
          </li>
          <li>
            <a href="https://www.youtube.com/watch?v=CBwq_TUL5Fg" target="_blank">
              Setting up a new Vue project
            </a>
          </li>
          <li>
            <a href="https://tailwindcss.com/docs/guides/nuxtjs" target="_blank"
              >Tailwind CSS guide</a
            >
          </li>
          <li>
            <a
              href="https://www.udemy.com/course/vuejs-2-the-complete-guide/"
              target="_blank"
              >Vue JS 2 - The Complete Guide</a
            >
          </li>
        </ul>
        <br />
        And for good measure, here's
        <a href="https://github.com/BradenTeo/blog-project" target="_blank">
          my project's repo on Github
        </a>
      </div>

      <AccordionSection class="pb-5" :open="true">
        <template #title>How I set up this Project</template>
        <template #content>
          <ol class="list-decimal list-inside marker:font-bold">
            <li>Follow the video shown above to the 7:12 min mark</li>
            <li>
              In the guide for publishing on gh pages, follow the steps starting
              from this line:<br />
              <div class="bg-slate-300/50 dark:bg-slate-700 italic ml-4">
                Update nuxt.config.js to add a base URL (replace my-project by
                your project name): <br />
                router: { base: '/my-project/' },
              </div>
            </li>
            <li>Follow the guide to setup Tailwind CSS</li>
          </ol>
        </template>
      </AccordionSection>

      <AccordionSection class="pb-5" :open="true">
        <template #title>Shortcomings</template>
        <template #content>
          <ul class="list-disc list-inside marker:font-bold">
            <li><s>I was not able to get my favicon to show...</s> ✅ Fixed in 2026</li>
            <li><s>Was not able to blur the backdrop for the feedback dialog pop-up</s> ✅ Fixed in 2026</li>
            <li><s>Some parts of the website looks a bit wonky on my phone.</s> ✅ Fixed in 2026</li>
          </ul>
        </template>
      </AccordionSection>

      <div class="p-5">
        <img
          class="h-[240px] mx-auto shadow-2xl"
          src="~/assets/images/behind-the-scenes/success_quote.jpg"
          alt="Quote about Success"
        />
      </div>

    </div>
  </div>
</template>

<script>
import AccordionSection from '~/components/AccordionSection.vue'
export default {
  name: 'BuildProcessPage',
  components: {
    AccordionSection,
  },
  layout: 'default',
  data() {
    return {
      title: 'Behind the Scenes',
      hover: false,
      showPara: false,
    }
  },
  head() {
    return {
      title: "Behind the Scenes | Braden's Journal",
      meta: [
        { hid: 'description', name: 'description', content: 'How I built this site — learning HTML, CSS, JavaScript, and Nuxt.js step by step.' },
        { hid: 'og:title', property: 'og:title', content: "Behind the Scenes | Braden's Journal" },
      ],
    }
  },
}
</script>

<style scoped>
a {
  color: #2b6cb0;
}

a:hover {
  color: #1a4a8a;
}
</style>
