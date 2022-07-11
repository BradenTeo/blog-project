<template>
  <div>
    <header>
      <Title :title="title" />
    </header>
    
    <div class="max-w-[680px] mx-auto py-[24px] px-[24px]">

      <p class="text-center">
        I'm a 23-year-old Uni student, about to enter Year 3 of my Computer Engineering course in NUS.<br><br>
        During the recent Summer break, I started learning Web Dev because I was stuck at home (more info 
        <nuxt-link to="/cancer" class="link font-bold hover:bg-teal-100">here</nuxt-link>).
      </p><br><br>

      <div class="text-left">
        <b>Interests:</b>
        <p>      
          A short section here, but I like anime (and manga), since my Secondary School days.<br>
          It's probably the easiest (a.k.a cheapest) form of entertainment/hobby to get into, if you think about it 😂.<br>
          Here's my <a href="https://myanimelist.net/profile/brainaden" target="_blank" class="border-2 rounded-md">MAL account</a> if you're interested.
        </p>
      </div><br><br>

      <div class="text-center">
        <b>Contact Me!</b><br>
        <a href = "mailto: bteowr@hotmail.com" target="_blank" class="border-2 rounded-md">Shoot me a quick Email</a><br>
        <p class="text-gray-500">(I'm not comfortable with disclosing my socials, but I would love to hear how you feel about my site!)</p>
      </div>

    </div>
      
  </div>
</template>

<script>
export default {
  name: 'AboutMe',
  layout: 'default',
  data () {
    return {
      title: "About Me",
    }
  }
}
</script>
