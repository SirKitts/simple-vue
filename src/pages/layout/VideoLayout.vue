<template>
  <div class="video-layout">
    <top-nav/>
    <video-item/>
  </div>
</template>

<script>
import TopNav from '@/components/TopNav.vue'
import VideoItem from '@/components/VideoItem.vue'

export default {
  name: 'video-layout',
  data: '',
  components: {
    TopNav,
    VideoItem
  }
}
</script>
