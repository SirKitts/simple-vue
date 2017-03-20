<template>
  <div class="video-layout">
    <h1>{{ msg }} {{$route.params.id}}</h1>
    <top-nav/>
    <li v-for="(item, index) in items">
      <router-link exact to="/video/1">{{index}} {{ item.message }}</router-link>
    </li>
    <video-item/>
  </div>
</template>

<script>
import TopNav from '@/components/TopNav.vue'
import VideoItem from '@/components/VideoItem.vue'

export default {
  name: 'video-layout',
  components: {
    TopNav,
    VideoItem
  },
  props: {
    id: String
  },
  data () {
    return {
      msg: 'called from VideoLayout',
      items: [
        { message: 'Foo' },
        { message: 'Bar' }
      ],
      videos: []
    }
  },
  ready () {
    this.$http.get('api/videos').success(function (data) {
      this.$set('videos', data)
    }).error(function (error) {
      console.log(error)
    })
  }
}
</script>
