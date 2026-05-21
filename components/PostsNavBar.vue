<template>
  <div class="hidden lg:flex flex-col w-40 shrink-0 sticky top-9 pt-6 px-2">
    <p class="text-[10px] font-bold uppercase tracking-widest text-slate-400 dark:text-white/40 mb-2 px-2">
      Posts
    </p>

    <nuxt-link to="/posts" class="sidebar-link mb-1">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="2.5"
        stroke="currentColor"
        class="w-3.5 h-3.5 shrink-0"
      >
        <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
      </svg>
      All Posts
    </nuxt-link>

    <div class="border-t border-slate-300 dark:border-white/20 my-1 mx-2"></div>

    <nuxt-link to="/posts/cancer" class="sidebar-link">Cancer Journey</nuxt-link>
    <nuxt-link to="/posts/lifehacks" class="sidebar-link">LifeHacks</nuxt-link>
  </div>
</template>

<script>
export default {
  name: 'PostsNavBar',
}
</script>

<style scoped>
.sidebar-link {
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 5px 10px;
  border-radius: 6px;
  font-size: 0.8rem;
  font-weight: 500;
  color: rgb(71, 85, 105); /* slate-600 */
  text-decoration: none;
  white-space: nowrap;
  transition: color 0.15s ease, background-color 0.15s ease;
}

:global(.dark) .sidebar-link {
  color: rgba(255, 255, 255, 0.65);
}

.sidebar-link:hover {
  color: rgb(15, 23, 42); /* slate-900 */
  background-color: rgba(0, 0, 0, 0.07);
}

:global(.dark) .sidebar-link:hover {
  color: white;
  background-color: rgba(255, 255, 255, 0.12);
}

.sidebar-link.nuxt-link-exact-active {
  color: rgb(15, 23, 42); /* slate-900 */
  font-weight: 700;
  background-color: rgba(0, 0, 0, 0.1);
}

:global(.dark) .sidebar-link.nuxt-link-exact-active {
  color: white;
  background-color: rgba(255, 255, 255, 0.18);
}
</style>
