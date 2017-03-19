import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/components/Home'
import Video from '@/components/Video'

Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/video',
      name: 'Video',
      component: Video
    }
  ]
})
