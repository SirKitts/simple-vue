<template>
  <div class="collections">
    {{msg}} {{selectedVideo.store.video.id}}
    <pre>{{$data | json}}</pre>
  </div>
</template>

<script>
import store from '@/js/store'

export default {
  name: 'collections',
  data () {
    return {
      msg: 'Collections',
      selectedVideo: store
    }
  }
}
</script>
