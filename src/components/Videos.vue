<template>
  <div class="videos">
    {{msg}} <input v-model="selectedVideo.store.video.id">
    <br/>
    <input 
      type="range" 
      min="12345" 
      max="98765" 
      step="1" 
      v-model="videoSelector"
      @change="updateMe" />
    <pre>{{$data | json}}</pre>
  </div>
</template>

<script>
import store from '@/js/store'

export default {
  name: 'videos',
  data () {
    return {
      msg: 'Videos',
      selectedVideo: store,
      videoSelector: '12345'
    }
  },
  methods: {
    updateMe () {
      // this.$emit('updateMe', this.videoSelector)
      this.selectedVideo.store.video.id = this.videoSelector
    }
  }
}
</script>
