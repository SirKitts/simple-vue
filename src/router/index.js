import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '@/pages/Home'
import Parent from '@/pages/Parent'
import Emit from '@/pages/Emit'
import Form from '@/pages/Form'
import Search from '@/pages/Search'
import Tree from '@/pages/Tree'
import Omit from '@/pages/Omit'
import Upload from '@/pages/Upload'

Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/form',
      name: 'form',
      component: Form
    },
    {
      path: '/form',
      name: 'emit',
      component: Emit
    },
    {
      path: '/parent',
      name: 'parent',
      component: Parent
    },
    {
      path: '/search',
      name: 'search',
      component: Search
    },
    {
      path: '/tree',
      name: 'tree',
      component: Tree
    },
    {
      path: '/omit',
      name: 'omit',
      component: Omit
    },
    {
      path: '/upload',
      name: 'upload',
      component: Upload
    }
  ]
})
