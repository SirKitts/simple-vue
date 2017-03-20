<template>
  <div class="video-layout">
    <h1>{{ msg }} {{$route.params.id}}</h1>
    <top-nav/>
    <video-item/>
  </div>
</template>

<script>
import TopNav from '@/components/TopNav.vue'
import VideoItem from '@/components/VideoItem.vue'

export default {
  name: 'video-layout',
  data () {
    return {
      msg: 'called from VideoLayout'
    }
  },
  components: {
    TopNav,
    VideoItem
  }
}
</script>
