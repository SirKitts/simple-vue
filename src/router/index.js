import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '@/pages/Home'
import Search from '@/pages/Search'

Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/search',
      name: 'search',
      component: Search
    }
  ]
})
