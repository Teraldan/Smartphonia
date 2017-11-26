// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import store from '@/store/store'

import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.css'

import Vue2Filters from 'vue2-filters'

import App from './App'
import router from './router'

Vue.use(Vuetify)
Vue.use(Vue2Filters)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
