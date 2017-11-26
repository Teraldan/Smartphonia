import Vue from 'vue'
import Router from 'vue-router'
import Smartphones from '@/components/Smartphones'
import Product from '@/components/Product'
import Account from '@/components/Account'

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
    },
    {
      path: '/myaccount',
      name: 'Account',
      component: Account
    }
  ],
  mode: 'history'
})
