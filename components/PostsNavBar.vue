<template>
  <div
    class="absolute-left sticky z-20 left-0 top-9 w-[19ch] h-[90px] hidden lg:flex flex-col bg-slate-400 bg-opacity-50 text-white p-2"
  >
    <nuxt-link
      to="/posts"
      class="link flex flex-row items-center"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="w-6 h-6"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M11.25 9l-3 3m0 0l3 3m-3-3h7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
      <div>Main Menu</div>
    </nuxt-link>
    <nuxt-link
      to="/posts/cancer"
      class="link flex flex-row items-center"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="w-6 h-6"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M11.25 9l-3 3m0 0l3 3m-3-3h7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
      <div>Cancer Journey</div>
    </nuxt-link>
    <nuxt-link
      to="/posts/lifehacks"
      class="link flex flex-row items-center"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="w-6 h-6"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M11.25 9l-3 3m0 0l3 3m-3-3h7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
      <div>LifeHacks</div>
    </nuxt-link>
  </div>
</template>

<script>
export default {
  name: 'PostsNavBar',
}
</script>

<style scoped>
.link {
  transition: color 0.15s;
}

.link:hover {
  color: #000;
  text-decoration: underline;
  text-underline-offset: 3px;
}

.link.nuxt-link-exact-active {
  color: #000;
  font-weight: bold;
}
</style>
