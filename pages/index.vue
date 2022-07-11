<template>
  <div>
    <section>
      <Title title="Home" class="text-xl" />
    </section>

    <div class="max-w-[680px] mx-auto text-center pt-[64px] pb-[56px] px-[24px]">
      <p class="text-gray-600">
        Welcome to my personal site! This is where I document important things in my life.<br>
      </p>
    </div>

    <div class="w-[375px] md:w-[680px] mx-auto rounded-md bg-gradient-to-r from-purple-300 to-pink-300">
      <div class="w-[300px] md:w-[580px] p-2 mx-auto text-left"> 
        
        <p class="font-bold">Here are some reasons why I created this blog:</p>
        <ol class="list-decimal marker:text-white marker:font-bold">
          <li>I've always wanted a place to pen down my thoughts and experiences in a purposeful way</li>
          <li>To practise web development</li>
          <li>And I hope my experiences help others in some shape or form :)</li>
        </ol>

      </div>
    </div>

  </div>

  
  <!--
    {{ $store.state.title }}

    <button @click="increment">Increment Me! {{ $store.state.counter }}</button>    
  </section>
  -->
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'HomePage',
  components: {
    // HelloWorld
  },
  layout: 'default',  
  methods: {
    increment() {
      this.$store.commit('increment')
    }
  }
}
</script>

