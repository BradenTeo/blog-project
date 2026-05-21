<template>
  <teleport to="body">
    <div>
      <div class="fixed inset-0 z-[150] backdrop-blur-sm bg-black/30" @click="tryClose"></div>
      <dialog open class="dialog-root">
      <h2 class="bg-slate-500 dark:bg-slate-700 text-white font-bold w-full p-[5px] m-0 text-center">
        <slot name="header"></slot>
      </h2>

      <div class="bg-white dark:bg-slate-800 dark:text-gray-100">
        <div>
          <slot></slot>
        </div>
        <div class="flex justify-end pb-3 pr-4">
          <button
            class="px-3 py-1 text-sm text-gray-500 dark:text-gray-400 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-150"
            autofocus
            @click="tryClose"
          >Close</button>
        </div>
      </div>
    </dialog>
    </div>
  </teleport>
</template>

<script>
export default {
  name: 'BaseDialogVue',
  props: {},
  emits: ['close'],
  methods: {
    tryClose() {
      this.$emit('close')
    },
  },
}
</script>

<style scoped>
dialog {
  position: fixed;
  top: 20vh;
  left: 10%;
  width: 80%;
  z-index: 200;
  border-radius: 12px;
  border: none;
  box-shadow: 20px 20px 50px 15px grey;
  padding: 0;
  margin: 0;
  overflow: hidden;
  background-color: transparent;
}


@media (min-width: 768px) {
  dialog {
    left: calc(50% - 20rem);
    width: 40rem;
  }
}

</style>
