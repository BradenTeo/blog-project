<template>
  <div>
    <header>
      <div class="text-3xl text-blue-800 bg-teal-100 font-bold text-center py-4">Braden's Journal</div>
      <div class="sticky top-0 flex justify-center space-x-4 bg-orange-100">
        <nuxt-link to="/" class="link">Home</nuxt-link>
        <nuxt-link to="/aboutme" class="link">About Me</nuxt-link>
        <nuxt-link to="/learning" class="link">Learning</nuxt-link>
        <nuxt-link to="/perspectives" class="link">Perspectives</nuxt-link>
      </div>
    </header>
    <nuxt />
  </div>
</template>

<script>
export default {
  name: 'DefaultTemplate'
}
</script>

<style scoped>
  h1 {
    font-size: 2em;
    font-weight: bold;
  }

  .link {
   text-decoration-line: none;
   color: slateblue; 
  }

  .link.nuxt-link-exact-active {
    color: indigo;    
    background-color: white;
  }
</style>
