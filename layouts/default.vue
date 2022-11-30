<template>
  <div class="bg-gradient-to-br from-orange-200 to-slate-400">
    <div>
      <div class="text-3xl text-white bg-slate-700 font-bold text-center py-4">
        &#127833; Braden's Journal &#9997;
      </div>

      <nav
        class="inline-block sticky top-0 z-[100] h-[28px] flex justify-center space-x-4 bg-slate-600"
      >
        <nuxt-link to="/" class="link"> Home </nuxt-link>
        <nuxt-link to="/aboutme" class="link"> About Me </nuxt-link>
        <nuxt-link to="/buildprocess" class="link"> Build Process </nuxt-link>
        <nuxt-link to="/perspectives" class="link"> Perspectives </nuxt-link>
      </nav>

      <nuxt class="flex flex-col min-h-screen" />
    </div>

    <footer class="mt-auto bottom-0 text-center bg-slate-700 text-white">
      <div class="my-3">
        <b> Contact Me! </b>
      </div>

      <a
        href="mailto: bteowr@hotmail.com"
        target="_blank"
        class="border-2 p-1 rounded-md hover:bg-teal-100 hover:text-black hover:font-bold"
        >Shoot me a quick Email</a
      >

      <div class="text-gray-500 p-5">
        (I'm not comfortable with disclosing my socials, but I would love to
        hear how you feel about my site!)
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'DefaultTemplate',
}
</script>

<style scoped>
h1 {
  font-size: 2em;
  font-weight: bold;
}

html {
  background-color: rgb(51 65 85);
}

.link {
  text-decoration-line: none;
  color: white;
}

.link:hover {
  transform: scale(1.1);
  transition: transform 0.05s;
}

.link.nuxt-link-exact-active {
  font-weight: bold;
  color: black;
  background-color: rgb(148 163 184);
  border-radius: 4px;
  padding: 1px;
  border-style: outset;
  border-width: 2px;
}
</style>
