import Vue from 'vue'
import Vuex from 'vuex'

import axios from 'axios'

Vue.use(Vuex)

let apiUrl = 'http://teraldan.000webhostapp.com/smartphonia/api'
let clientEmail = 'pierre.barthes@etu.univ-amu.fr'

const state = {
  loading: [],
  client: {
    email: '',
    mot_de_passe: '',
    prenom: '',
    nom: '',
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
      }
    ]
  },
  cart: [
    { name: 'Somsong S10', price: 259, count: 2 },
    { name: 'Forfait CROUS', price: 12, count: 1 }
  ],
  smartphones: [
  ],
  brands: [],
  screens: [],
  colors: []
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
  },
  SET_BRANDS (state, payload) {
    state.brands = payload
  },
  SET_SCREENS (state, payload) {
    state.screens = payload
  },
  SET_COLORS (state, payload) {
    state.colors = payload
  },
  SET_CLIENT (state, payload) {
    state.client = payload
  },
  SET_CLIENT_ORDERS (state, payload) {
    state.client.orders = payload
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
    axios.get(apiUrl + `/get/smartphones.php`)
    .then(response => {
      commit('SET_SMARTPHONES', response.data)
      commit('SHIFT_LOADING', 'smartphones')
    })
    .catch(e => {
      console.log(e)
      commit('SHIFT_LOADING', 'smartphones')
    })
  },
  loadBrands ({ commit }) {
    commit('PUSH_LOADING', 'brands')
    axios.get(apiUrl + `/get/brands.php`)
    .then(response => {
      commit('SET_BRANDS', response.data)
      commit('SHIFT_LOADING', 'brands')
    })
    .catch(e => {
      console.log(e)
      commit('SHIFT_LOADING', 'brands')
    })
  },
  loadScreens ({ commit }) {
    commit('PUSH_LOADING', 'screens')
    axios.get(apiUrl + `/get/screens.php`)
    .then(response => {
      commit('SET_SCREENS', response.data)
      commit('SHIFT_LOADING', 'screens')
    })
    .catch(e => {
      console.log(e)
      commit('SHIFT_LOADING', 'screens')
    })
  },
  loadColors ({ commit }) {
    commit('PUSH_LOADING', 'colors')
    axios.get(apiUrl + `/get/colors.php`)
    .then(response => {
      commit('SET_COLORS', response.data)
      commit('SHIFT_LOADING', 'colors')
    })
    .catch(e => {
      console.log(e)
      commit('SHIFT_LOADING', 'colors')
    })
  },
  loadClient ({ commit }) {
    commit('PUSH_LOADING', 'client')
    axios.get(apiUrl + `/get/client.php?client_email=` + clientEmail)
    .then(response => {
      commit('SET_CLIENT', response.data[0])
      commit('SHIFT_LOADING', 'client')
    })
    .catch(e => {
      console.log(e)
      commit('SHIFT_LOADING', 'client')
    })
  },
  loadClientOrders ({ commit, state }) {
    commit('PUSH_LOADING', 'client_orders')
    axios.get(apiUrl + `/get/orders.php?client_email=` + state.client.email)
    .then(response => {
      commit('SET_CLIENT_ORDERS', response.data)
      commit('SHIFT_LOADING', 'client_orders')
    })
    .catch(e => {
      console.log(e)
      commit('SHIFT_LOADING', 'client_orders')
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
  brands: state => state.brands,
  screens: state => state.screens,
  colors: state => state.colors,
  smartphone (state) {
    return code_barre => state.smartphones.filter(smartphone => {
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
