<template>
  <div>
    <header>
      <Title :title="title" />
    </header>
    
    <div class="flex flex-wrap justify-center">
      <PerspectivesMenuVue 
        title="Cancer Journey" 
        description="I was diagnosed with Stage 2 Hodgkin's Lymphoma earlier this year, and I'm currently 
                    undergoing radiotherapy treatment."
        :background-url="require('~/assets/images/perspectives/cancer-cell.jpg')"
        weblink="cancer" 
      />
      
      <PerspectivesMenuVue 
        title="Blog" 
        description="Whatever comes to mind (and of some importance?)" 
        
        :background-url="require('~/assets/images/perspectives/cancer-cell.jpg')"

        weblink="cancer" 
      />

      <PerspectivesMenuVue 
        title="Favourite stuff" 
        description="Miscellaneous stuff?"
        
        :background-url="require('~/assets/images/perspectives/cancer-cell.jpg')"
 
        weblink="cancer" 
      />

    </div>

  </div>
</template>

<script>
import PerspectivesMenuVue from '~/components/PerspectivesMenu.vue'
export default {
  name: 'PerspectivesPage',
  components: {
    PerspectivesMenuVue
  },
  layout: 'default',
  data () {
    return {
      title: "Perspectives",
    }
  }
}
</script>

