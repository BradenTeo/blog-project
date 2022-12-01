<template>
  <div
    class="absolute-left sticky z-20 left-0 top-[28px] w-[19ch] h-[90px] hidden lg:flex flex-col bg-slate-400 bg-opacity-50 text-white p-2"
  >
    <nuxt-link
      to="/perspectives"
      class="link flex flex-row hover:animate-bounce"
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
      to="/perspectives/cancer"
      class="link flex flex-row hover:animate-bounce"
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
      to="/perspectives/lifehacks"
      class="link flex flex-row hover:animate-bounce"
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
  name: 'PerspectivesNavBar',
}
</script>

<style scoped>
.link.nuxt-link-exact-active {
  color: #000;
  font-weight: bold;
}
</style>
