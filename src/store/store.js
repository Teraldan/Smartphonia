import Vue from 'vue'
import Vuex from 'vuex'

import axios from 'axios'

Vue.use(Vuex)

const state = {
  loading: [],
  client: {
    firstname: 'Pierre',
    lastname: 'BARTHES',
    email: 'pierre.barthes@etu.univ-amu.fr',
    birthDate: new Date(),
    orders: [
      {
        id: 12345,
        billingName: 'BARTHES Pierre',
        date: new Date(),
        deliveryAddress: '45 chemin des ormes',
        billingAddress: '676 boulevard de la fête 57412 Bibiche',
        products: [
          { name: 'Somsong S10', price: 259, count: 2 },
          { name: 'Forfait CROUS', price: 12, count: 1 }
        ]
      },
      {
        id: 321,
        billingName: 'BARTHES Pierre',
        date: 'Sun Jan 01 2017 21:20:40 GMT+0100 (Paris, Madrid)',
        deliveryAddress: '45 chemin des ormes',
        billingAddress: '676 boulevard de la fête 57412 Bibiche',
        products: [
          { name: 'Crumble 9', price: 984, count: 1 },
          { name: 'Forfait SHEAL', price: 45, count: 1 }
        ]
      }
    ]
  },
  cart: [
    { name: 'Somsong S10', price: 259, count: 2 },
    { name: 'Forfait CROUS', price: 12, count: 1 }
  ],
  smartphones: [
    /*
    {
      barCode: 1,
      name: 'Somsong S10',
      pictureUrl: 'http://consumer-img.huawei.com/content/dam/huawei-cbg-site/common/mkt/list-image/phones/p10/p10-listimage-black.png',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed lorem efficitur, dignissim mi a, malesuada risus. Nam ut finibus augue. Maecenas nibh dui, malesuada nec nulla ut, ultricies viverra tellus. Mauris erat lorem, finibus non congue vitae, sollicitudin in sem. Mauris commodo pretium purus, eu pellentesque ex placerat in. Aliquam felis magna, efficitur non leo tincidunt, posuere tincidunt ante. In congue nibh in magna lobortis, sit amet luctus mi sollicitudin.',
      stars: 1.6584725,
      price: 275.0,
      viewedCount: 20,
      caracteristics: {
        brand: 'Somsong', screen: 'Yes', color: 'Black', features: { wifi: true, bluetooth: true }
      }
    }
    */
  ]
}

const mutations = {
  PUSH_LOADING (state, payload) {
    if (payload === undefined) {
      payload = true
    }
    state.loading.push(payload)
  },
  SHIFT_LOADING (state, payload) {
    let index = state.loading.indexOf(payload)
    if (index === -1) {
      state.loading.shift()
    } else {
      state.loading.splice(index, 1)
    }
  },
  SET_SMARTPHONES (state, payload) {
    state.smartphones = payload
  }
}

const actions = {
  pushLoading ({ commit }, payload) {
    commit('PUSH_LOADING', payload)
  },
  shiftLoading ({ commit }, payload) {
    commit('SHIFT_LOADING', payload)
  },
  loadSmartphones ({ commit }) {
    commit('PUSH_LOADING', 'smartphones')
    axios.get(`http://teraldan.ddns.net/smartphonia/api/get/smartphones.php`)
    .then(response => {
      commit('SET_SMARTPHONES', response.data)
      console.log(response.data)
      commit('SHIFT_LOADING', 'smartphones')
    })
    .catch(e => {
      console.log(e)
      commit('SHIFT_LOADING', 'smartphones')
    })
  }
}

const getters = {
  loading (state) {
    return state.loading
  },
  isLoadingType (state) {
    return type => {
      let isLoading = state.loading.length !== 0
      if (isLoading) {
        return state.loading.filter(loadType => {
          return loadType === type
        }).length !== 0
      }

      return false
    }
  },
  client: state => state.client,
  orders: state => state.client.orders,
  order (state) {
    return idOrder => state.client.orders.filter(order => order.id === parseInt(idOrder))[0]
  },
  cart: state => state.cart,
  smartphones: state => state.smartphones,
  smartphone (state) {
    return code_barre => state.smartphones.filter(smartphone => {
      console.log('filter smartphone')
      console.log(smartphone.code_barre === code_barre)
      return smartphone.code_barre === code_barre
    })[0]
  }
}

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})
