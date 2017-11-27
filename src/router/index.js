import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Smartphones from '@/components/Smartphones'
import Product from '@/components/Product'
import Account from '@/components/Account'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/store/smartphones',
      name: 'Smartphones',
      component: Smartphones
    },
    {
      path: '/store/smartphone/:barCode',
      name: 'Smartphone',
      props: true,
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
