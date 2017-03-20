<template>
  <div class="video">
  	<h1>{{ msg }} {{$route.params.id}}</h1>
    <video-layout/>
  </div>
</template>

<script>
import VideoLayout from '@/pages/layout/VideoLayout.vue'

export default {
  name: 'video',
  data () {
    return {
      msg: 'called from Video'
    }
  },
  components: {
    VideoLayout
  }
}
</script>
