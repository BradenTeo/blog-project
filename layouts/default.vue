<template>
  <div class="bg-gradient-to-br from-orange-200 to-slate-400">
    <div>
      <div class="text-3xl text-white bg-slate-700 font-bold text-center py-4">
        Braden's Journal &#9997;
      </div>

      <nav
        class="inline-block sticky top-0 z-[100] h-[28px] flex justify-center space-x-4 bg-slate-600"
      >
        <nuxt-link to="/" class="link"> Home </nuxt-link>
        <nuxt-link to="/buildprocess" class="link"> Build Process </nuxt-link>
        <nuxt-link to="/perspectives" class="link"> Perspectives </nuxt-link>
      </nav>

      <nuxt class="flex flex-col min-h-screen" />
    </div>

    <div class="relative bottom-0 flex justify-end text-xs italic">
      <p class="mr-[2px]">Website last updated: 17/05/24</p>
    </div>

    <footer
      class="relative mt-auto bottom-0 text-center bg-slate-600 text-white py-3 bg-opacity-50"
    >
      <img
        class="absolute bottom-0 left-[5%] md:left-[25%] lg:left-[30%] xl:left-[35%] 2xl:left-[40%] h-[60px]"
        src="~/assets/images/default/footer-img.gif"
      />
      <button
        class="mx-auto border-2 p-1 rounded-md w-[250px] hover:bg-slate-300 hover:text-black hover:font-bold hover:border-black"
        @click="openDialog"
      >
        Send me some feedback!
      </button>

      <BaseDialogVue v-if="showDialog" @close="closeDialog">
        <template #header>Feedback</template>
        <FeedbackForm />
      </BaseDialogVue>
    </footer>
  </div>
</template>

<script>
import BaseDialogVue from '~/components/BaseDialog.vue'
import FeedbackForm from '~/components/FeedbackForm.vue'
export default {
  name: 'DefaultTemplate',
  components: {
    BaseDialogVue,
    FeedbackForm,
  },
  data() {
    return {
      showDialog: false,
    }
  },
  methods: {
    openDialog() {
      this.showDialog = true
    },
    closeDialog() {
      this.showDialog = false
    },
  },
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
