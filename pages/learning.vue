<template>
  <div>
    <header>
      <Title :title="title" />
    </header>

    <div
      class="max-w-[680px] mx-auto text-center pt-[64px] pb-[56px] px-[24px]"
    >
      <p>
        I don't know what your preconceptions of <b>web development</b> are, but
        if you were like me and are thinking that it should be pretty easy to
        pick up, think again. It'll be a long journey, as you start out with the
        basics (HTML, CSS, Javascript), and then move on to frameworks like
        Vue.js and utilities like Tailwind CSS. While you trawl through courses
        and documentation, you'll most definitely forget most of the things you
        thought you had learnt already... There are many suggested "frontend
        development roadmaps" online that you can try to follow, but they are
        pretty intimidating to say the least. Just look at this one:
      </p>

      <div
        class="max-w-[250px] mx-auto text-center"
        @mouseover="hover = true"
        @mouseleave="hover = false"
      >
        <h2 class="bg-teal-100">Hover over me to see the montrosity</h2>
        <img
          v-if="hover"
          class="w-[300px] mx-auto"
          src="~/assets/images/learning/frontend-roadmap.png"
        />
      </div>

      Link to website:
      <a
        href="https://roadmap.sh/frontend"
        class="bg-green-300"
        target="_blank "
        >https://roadmap.sh/frontend</a
      ><br /><br />

      Did that scare you?<br /><br />
      Well, it should hahaha.<br /><br />
      Personally, I'm still a total noob in all this, but I'm hoping to get a
      better hang of things as I code more.<br /><br />
      <div class="max-w-[400px] mx-auto">
        <p class="text-left">The only advise I can give you is to:</p>
        <ul class="list-disc text-left">
          <li>take things one step at a time when you are learning,</li>
          <li>have a goal/product in mind you want to create,</li>
          <li>and to learn from others!</li>
        </ul>
      </div>
      <br /><br />

      Anyway, I'll be recommending some resources down below, but they might not
      the best of their types
    </div>

    <div class="w-[375px] md:w-[680px] mx-auto">
      <h2>Here's how to set up a new Vue project:</h2>
      <iframe
        src="https://www.youtube.com/embed/CBwq_TUL5Fg"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; 
        clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      >
      </iframe>

      https://tailwindcss.com/docs/guides/nuxtjs
      https://medium.com/hackernoon/create-and-publish-a-nuxt-powered-website-on-github-pages-3e922dfa7372
      Here's the project on Github: https://github.com/BradenTeo/blog-project
    </div>

    <div>
      <p
        class="max-w-[680px] mx-auto text-center pt-[64px] pb-[56px] px-[24px]"
      >
        I've just finished learning
        <span style="color: blue; font-weight: bold">HTML</span> and will soon
        be starting
        <span style="color: darkolivegreen; font-weight: bold">CSS</span>. Will
        be interspersing all of this with some
        <span style="color: purple; font-weight: bold">Nuxt.js</span> /
        <span style="color: brown; font-weight: bold">Vue.js</span> tutorials
        coz this is all very new to me.<br /><br />
        To be honest, I'm not totally thrilled, as I've dabbled in learning HTML
        and CSS last year and I pretty much forgot 90% of the stuff. Now though,
        because I have a goal of finishing this website, I am more 'motivated'.
        One thing I have to concede is that I can't remember most stuff so I
        have to google a lot... Well, I guess that's coding/programming in a
        nutshell. &#128517; <br /><br />

        I'm following the roadmap recommended by this
        <a
          href="https://roadmap.sh/frontend"
          title="frontend dev roadmap"
          target="_blank "
          >website</a
        >
        <i
          >(but I'm following it loosely; only utilising the recommended
          resources</i
        >
        &#128514;<i>)</i>.
      </p>

      <img
        class="h-[240px] mx-auto"
        src="~/assets/images/learning/success_quote.jpg"
        alt="Quote about Success"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'LearningPage',
  layout: 'default',
  data() {
    return {
      title: 'Learning',
      hover: false,
    }
  },
}
</script>
