<template>
  <div>
    <div v-if="!submitted">
      <p class="pb-2">
        Give me any kind of feedback you like :) <br />
        It can be related to the website features or the content itself.
      </p>

      <form
        class="border-2 m-2 p-2 rounded-md dark:border-slate-500"
        @submit.prevent="submitForm"
      >
        <div class="flex flex-col md:flex-row md:mb-4">
          <p class="text-left">Name:</p>
          <input
            v-model.trim="name"
            class="border-2 md:ml-2 w-full dark:bg-[#054078] dark:bg-opacity-50 dark:border-slate-500"
            type="text"
            placeholder="optional"
          />
        </div>

        <div
          class="flex flex-col md:flex-row mt-2"
          :class="{ invalid: feedbackValidity === 'invalid' }"
        >
          <p class="text-left">Feedback:</p>
          <textarea
            v-model.trim="feedback"
            class="border-2 md:ml-2 w-full h-32 dark:bg-[#054078] dark:bg-opacity-50 dark:border-slate-500"
            placeholder="What do you think of the website? Or what do you think of the content? Feel free to give suggestions! You can also write a normal message here, I'll read it all :)"
          ></textarea>
        </div>

        <p v-if="feedbackValidity === 'invalid'" class="italic mx-auto">
          Please enter your feedback before submitting~
        </p>

        <img
          class="h-40 absolute left-0 bottom-0"
          src="~/assets/images/default/peeking-small.png"
        />

        <input
          class="mx-auto border-2 p-1 rounded-md w-[250px] hover:bg-slate-300 hover:text-black hover:font-bold hover:border-black mt-4"
          type="submit"
          value="Submit"
        />
      </form>
    </div>

    <div v-else>
      <p>Thank you for your feedback!</p>
      <img
        class="mx-auto w-[50%] max-w-[200px]"
        src="~/assets/images/default/cat.gif"
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
        'https://blog-project-e9428-default-rtdb.asia-southeast1.firebasedatabase.app/feedback.json',
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
