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
      name: 'home',
      component: Home
    },
    {
      path: '/video',
      name: 'video',
      component: Video
    },
    {
      path: '/video/:id',
      name: 'videoById',
      component: Video
    },
    {
      path: '/about',
      name: 'about',
      component: About
    }
  ]
})
