<template>
  <div class="px-4 md:px-0">
    <section>
      <Title title="Home" class="text-xl" />
    </section>

    <div
      class="max-w-[680px] mx-auto text-center pt-[64px] pb-[56px] px-[24px] font-bold"
    >
      <i class="text-2xl">
        Welcome to my personal site! &#128513;<br /><br />
      </i>
      <i class="text-xl">
        Its main purpose is to help me archive important stuff that happens from
        time to time~<br />
      </i>
    </div>

    <div
      class="max-w-[460px] md:max-w-[680px] mx-auto text-justify py-[10px] px-[10px] border-4 rounded-md border-white dark:border-gray-600 bg-slate-200 dark:bg-gray-800 bg-opacity-50 dark:bg-opacity-80 backdrop-blur-md mb-4"
    >
      <b>Update (May 2026):</b><br />
      <div class="pb-2">
        Did a UI/UX overhaul with the help of AI (Claude Code) &#129302; Here's what's new:
        <ul class="list-disc list-inside marker:font-bold mt-1">
          <li>Dark / light mode toggle — give it a try! :)</li>
          <li>Redesigned nav bar and content tabs</li>
          <li>Added a scroll-to-top button on long pages</li>
          <li>Blurred backdrop when the feedback dialog is open</li>
          <li>Improved mobile layout</li>
          <li>Redesigned the Posts sidebar and improved color consistency on the Cancer Journey page</li>
          <li>Fixed the favicon and a bunch of other bugs</li>
        </ul>
      </div>
    </div>

    <div
      class="max-w-[460px] md:max-w-[680px] mx-auto text-justify py-[10px] px-[10px] border-4 rounded-md border-white dark:border-gray-600 bg-slate-200 dark:bg-gray-800 bg-opacity-50 dark:bg-opacity-80 backdrop-blur-md"
    >
      <b>Update (May 2024):</b><br />
      <div class="pb-2">
        <ul class="list-disc list-inside marker:font-bold">
          <li>
            Edited the styling on the website and made things a bit more
            user-friendly.
          </li>
          <!-- <li>Added a new page in the Perspectives section</li> -->
        </ul>
      </div>

      <!-- <b>Some reasons why I created this site:</b>
      <div class="pb-2">
        <ol class="list-decimal list-inside marker:font-bold">
          <li>
            I've always wanted a place to pen down my thoughts and experiences
            in a purposeful way
          </li>
          <li>To practise web development</li>
          <li>
            And I hope my experiences help others in some shape or form :)
          </li>
        </ol>
      </div> -->
    </div>

    <div
      class="max-w-[680px] mx-auto text-center pt-[64px] pb-[56px] px-[24px] font-bold"
    >
      <i class="text-2xl">Feel free to explore the site! &#128522;</i>
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
