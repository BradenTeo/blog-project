<template>
  <teleport to="body">
    <dialog open>
      <!--Light/Dark mode toggle-->
      <div
        class="float-right flex flex-row items-center space-x-2 mx-auto relative mt-[7px] mr-[10px]"
      >
        <span class="text-xs text-white font-extralight">Light </span>
        <!--Switch ball-->
        <div>
          <input
            id="checkbox"
            type="checkbox"
            class="hidden"
            @click="toggleDarkMode"
          />
          <label for="checkbox" class="cursor-pointer">
            <div class="w-9 h-5 flex items-center bg-gray-300 rounded-full p2">
              <div
                class="switch-ball w-4 h-4 bg-white rounded-full shadow"
              ></div>
            </div>
          </label>
        </div>
        <span class="text-xs text-white font-semibold">Dark</span>
      </div>

      <!--empty space-->
      <div class="float-left w-[94.5px] h-[30px] ml-[10px]"></div>

      <h2 class="bg-slate-500 text-white font-bold w-full p-[5px] m-0">
        <slot name="header"></slot>
      </h2>

      <content>
        <div class="p-[5px] dark:bg-[#054078] dark:text-white">
          <slot></slot>
        </div>
        <div
          class="flex justify-end pb-[5px] pr-[10px] dark:bg-[#054078] dark:text-white"
        >
          <button autofocus @click="tryClose">Close</button>
        </div>
      </content>
    </dialog>
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
    toggleDarkMode() {
      const html = document.querySelector('content')
      html.classList.toggle('dark')
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
  z-index: 100;
  border-radius: 12px;
  border: none;
  box-shadow: 20px 20px 50px 15px grey;
  padding: 0;
  margin: 0;
  overflow: hidden;
  background-color: white;
}

/* hide the "scrim", it's pointless */
dialog-overlay--active dialog-overlay__scrim {
  display: none;
}

/* style the overlay container as required */
dialog-overlay--active {
  backdrop-filter: blur(2px);
  background: black/80%;
}

@media (min-width: 768px) {
  dialog {
    left: calc(50% - 20rem);
    width: 40rem;
  }
}

#checkbox:checked + label .switch-ball {
  background-color: white;
  transform: translateX(20px);
  transition: transform 0.3s linear;
}
</style>
