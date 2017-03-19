import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '@/pages/Home'
import Video from '@/pages/Video'
import About from '@/pages/About'

Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/video',
      component: Video
    },
    {
      path: '/about',
      component: About
    }
  ]
})
