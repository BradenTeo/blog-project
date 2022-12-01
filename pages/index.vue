<template>
  <div>
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
      class="max-w-[460px] md:max-w-[680px] mx-auto text-justify py-[10px] px-[10px] border-4 rounded-md border-white bg-slate-200 bg-opacity-50 backdrop-blur-md"
    >
      <b>Some reasons why I created this site:</b>
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
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomePage',
  layout: 'default',
}
</script>
