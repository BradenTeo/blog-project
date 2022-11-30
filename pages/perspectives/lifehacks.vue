<template>
  <div>
    <header>
      <Title :title="title" />
    </header>
    <div class="max-w-[680px] mx-auto px-[24px]">
      <section>
        <div>
          <img
            class="h-[1.5rem] float-left mt-[5px] mr-[8px]"
            src="~/assets/images/lifehacks/libby.png"
          />
          <h2>Libby</h2>
        </div>
        <p>
          Thousands of public libraries offer ebooks and audiobooks (for free!)
          in
          <a href="https://libbyapp.com/shelf" target="_blank">Libby</a>
          ! All you need is your library account!
        </p>
      </section>

      <section>
        <h2>&#128214; Online courses</h2>
        <p>
          Get access to tons of Udemy courses for free, by again, using your
          library account!
        </p>
        <a
          href="https://lnkd.in/g9uQiUyh?trk=public_post_share-update_update-text"
          target="_blank"
        >
          Check out this guide
        </a>
      </section>

      <section>
        <h2>&#128241; Reducing iPhone screen brightness</h2>
        This is useful for when you're in a dark room.
        <a
          href="https://www.macrumors.com/how-to/make-iphone-display-dimmer-than-low-brightness/"
          target="_blank"
        >
          Check it out here
        </a>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LifehacksPage',
  layout: 'default',
  data() {
    return {
      title: 'Life Hacks',
    }
  },
}
</script>

<style scoped>
h2 {
  font-size: 1.5rem;
  font-weight: 600;
  margin: 1rem 0;
}

a {
  color: #1a73e8;
  text-decoration: none;
}

section {
  margin-bottom: 2rem;
}
</style>
