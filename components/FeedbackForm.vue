<template>
  <div class="px-4 pt-3 pb-2">
    <div v-if="!submitted">
      <p class="text-sm text-gray-500 dark:text-gray-400 mb-4">
        Any kind of feedback is welcome — website, content, or just a message. I'll read it all :)
      </p>

      <form @submit.prevent="submitForm" class="space-y-3">
        <div>
          <label class="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1">
            Name <span class="font-normal text-gray-400">(optional)</span>
          </label>
          <input
            v-model.trim="name"
            type="text"
            placeholder="Your name"
            class="w-full px-3 py-2 text-sm border border-gray-300 dark:border-slate-500 rounded-lg bg-white dark:bg-slate-700 text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-slate-400 dark:focus:ring-slate-500 transition"
          />
        </div>

        <div>
          <label class="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1">
            Feedback <span class="text-red-400">*</span>
          </label>
          <textarea
            v-model.trim="feedback"
            rows="4"
            placeholder="What do you think? Suggestions, thoughts, or anything on your mind..."
            class="w-full px-3 py-2 text-sm border rounded-lg bg-white dark:bg-slate-700 text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-slate-400 dark:focus:ring-slate-500 transition resize-none"
            :class="feedbackValidity === 'invalid'
              ? 'border-red-400 dark:border-red-400'
              : 'border-gray-300 dark:border-slate-500'"
          ></textarea>
          <p v-if="feedbackValidity === 'invalid'" class="mt-1 text-xs text-red-500">
            Please enter some feedback before submitting.
          </p>
        </div>

        <div class="flex justify-end mt-4">
          <button
            type="submit"
            class="px-5 py-2 bg-slate-600 hover:bg-slate-700 dark:bg-slate-600 dark:hover:bg-slate-500 text-white text-sm font-semibold rounded-lg transition-colors duration-150"
          >
            Submit
          </button>
        </div>

        <img
          class="absolute bottom-0 left-0 h-36 max-h-[52%] w-auto pointer-events-none select-none"
          src="~/assets/images/default/peeking-small.png"
          alt=""
          aria-hidden="true"
        />
      </form>
    </div>

    <div v-else class="text-center py-6">
      <p class="font-semibold text-lg mb-1">Thank you! 🙏</p>
      <p class="text-sm text-gray-500 dark:text-gray-400 mb-4">Your feedback means a lot.</p>
      <img
        class="mx-auto w-[50%] max-w-[180px]"
        src="~/assets/images/default/cat.gif"
        alt="Thank you cat animation"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'FeedbackForm',
  data() {
    return {
      name: '',
      feedback: '',
      submitted: false,
      feedbackValidity: 'pending',
    }
  },
  methods: {
    submitForm() {
      if (this.feedback.length === 0) {
        this.feedbackValidity = 'invalid'
        return
      }

      fetch(
        this.$config.firebaseUrl,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            name: this.name,
            feedback: this.feedback,
            time: new Date().toUTCString(),
          }),
        }
      )

      this.name = ''
      this.feedback = ''
      this.submitted = true
    },
  },
}
</script>
