<template>
  <div>
    <header>
      <Title :title="title" />
    </header>
    <div>
      <h2>Libby</h2>
      <p>
        Thousands of public libraries offer ebooks and audiobooks (for free!) in
        Libby! All you need is your library account!
      </p>
    </div>
    <div>
      <h2>Online courses</h2>
      <p>
        https://lnkd.in/g9uQiUyh?trk=public_post_share-update_update-text Get
        access to tons of Udemy courses for free by again, using your library
        account!
      </p>
    </div>
    <div>
      <h2>Reducing iPhone screen brightness</h2>
      <p>
        https://www.macrumors.com/how-to/make-iphone-display-dimmer-than-low-brightness/
      </p>
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
