// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import vuemoment from 'vue-moment'
import store from '@/store/store'

import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.css'

import vuefilters from 'vue-filter'
import vue2filters from 'vue2-filters'

import App from './App'
import router from './router'

Vue.use(Vuetify)
Vue.use(vuefilters)
Vue.use(vue2filters)
Vue.use(vuemoment)

Vue.config.productionTip = false

// eslint-disable-next-line
Array.prototype.groupBy = (prop) => {
  return this.reduce((groups, item) => {
    var val = item[prop]
    groups[val] = groups[val] || []
    groups[val].push(item)
    return groups
  }, {})
}

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App },
  created () {
    this.$store.dispatch('loadDatas').then(() => {
      console.log('data loaded')
    }).catch((err) => {
      console.log('Error : ' + err)
    })
  }
})
