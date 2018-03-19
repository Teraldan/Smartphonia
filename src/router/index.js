import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Store from '@/components/Store/Store'
import Smartphones from '@/components/Smartphones'
import Smartphone from '@/components/Smartphone'
import Account from '@/components/Account'
import MyAccount from '@/components/Account/MyAccount'
import MyOrders from '@/components/Account/MyOrders'
import MySettings from '@/components/Account/MySettings'
import Order from '@/components/Order'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/store',
      name: 'Store',
      component: Store,
      redirect: { path: '/store/smartphones' },
      children: [
        {
          path: 'smartphones',
          name: 'Smartphones',
          component: Smartphones
        },
        {
          path: 'smartphone/:barCode',
          name: 'Smartphone',
          props: true,
          component: Smartphone
        }
      ]
    },
    {
      path: '/my/order/:id',
      name: 'Order',
      props: true,
      component: Order
    },
    {
      path: '/my',
      name: 'Account',
      component: Account,
      children: [
        {
          path: 'orders',
          component: MyOrders
        },
        {
          path: 'settings',
          component: MySettings
        },
        {
          path: '*',
          component: MyAccount
        }
      ]
    }
  ],
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  }
})
