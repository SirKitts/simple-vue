<template>
  <div class="home">
    {{msg}}
    <Slider :id="selectedVideo.store.video.id" @change-id="changeMe"></Slider>
    <Videos/>
    <Collections/>
  </div>
</template>

<script>
import store from '@/js/store'
import Videos from '@/components/Videos.vue'
import Collections from '@/components/Collections.vue'
import Slider from '@/components/Slider.vue'

export default {
  name: 'home',
  components: {
    Videos,
    Collections,
    Slider
  },
  data () {
    return {
      msg: 'Home',
      selectedVideo: store
    }
  },
  methods: {
    changeMe (id) {
      console.log('change!', id)
    }
  }
}
</script>
