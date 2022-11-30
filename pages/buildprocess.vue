<template>
  <div>
    <header>
      <Title :title="title" />
    </header>

    <div class="max-w-[680px] mx-auto text-justify py-[24px] px-[24px]">
      <h2 class="font-bold text-xl">What's on here?</h2>
      <div class="pb-5 border-b-2">
        On this page, I'll be documenting the steps I took to build this site,
        so that you can follow along if you want to. But if you manage to find
        better ways of creating such a website online, do let me know! :)
      </div>

      <h2 class="font-bold text-xl pt-5">Baby Steps</h2>
      I studied these various languages step-by-step:
      <div class="pb-3">
        <ol class="list-decimal list-inside marker:font-bold">
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript (just the surface)</li>
          <li>Nuxt.js</li>
        </ol>
      </div>

      <ClickableTabVue class="pb-5">
        <template #title>
          <span v-if="!showPara">Show</span>
          <span v-else>Hide</span>
          details of my experience
        </template>
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
          bare-bones, with no back-end and having very little animations. I
          might work on these features more in the future, but don't hold me to
          it, lol.<br /><br />

          Here's some tips I have though:
          <ol class="list-decimal list-inside marker:font-bold">
            <li>Take things one step at a time when you are learning</li>
            <li>Develop a product while you are learning</li>
            <li>Learn from others! -- Udemy, Youtube videos etc.</li>
          </ol>
        </template>
      </ClickableTabVue>

      <h2 class="font-bold text-xl pt-5 border-t-2">Resources I used</h2>
      <div class="pb-5">
        <ul class="list-disc list-inside">
          <li>
            <a
              href="https://medium.com/hackernoon/create-and-publish-a-nuxt-powered-website-on-github-pages-3e922dfa7372"
              target="_blank"
              >Create and publish a Nuxt powered website on Github Pages</a
            >
          </li>
          <li>
            Setting up a new Vue project:
            <iframe
              class="pl-5"
              src="https://www.youtube.com/embed/CBwq_TUL5Fg"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            >
            </iframe>
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

      <div class="p-5">
        <img
          class="h-[240px] mx-auto shadow-2xl"
          src="~/assets/images/learning/success_quote.jpg"
          alt="Quote about Success"
        />
      </div>
    </div>
  </div>
</template>

<script>
import ClickableTabVue from '~/components/ClickableTab.vue'
export default {
  name: 'BuildProcessPage',
  components: {
    ClickableTabVue,
  },
  layout: 'default',
  data() {
    return {
      title: 'Build Process',
      hover: false,
      showPara: false,
    }
  },
}
</script>

<style scoped>
a {
  color: #2b6cb0;
}
</style>
