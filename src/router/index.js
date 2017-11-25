import Vue from 'vue'
import Router from 'vue-router'
import Smartphones from '@/components/Smartphones'
import Product from '@/components/Product'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/store/smartphones',
      name: 'Smartphones',
      component: Smartphones
    },
    {
      path: '/store/smartphone/:id',
      name: 'Smartphone',
      component: Product
    }
  ],
  mode: 'history'
})
