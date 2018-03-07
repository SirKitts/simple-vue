// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import axios from 'axios'
import lodash from 'lodash'
import VueAxios from 'vue-axios'

import App from './App'
import router from './router'

import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.css'

import Vuetify from 'vuetify'
import Demo from './plugins/demo'

Vue.use(VueAxios, axios, lodash)
Vue.use(VueMaterial)
Vue.use(Vuetify)
Vue.use(Demo)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
