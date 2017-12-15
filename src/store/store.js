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
    orders: []
  },
  cart: [
    { name: 'Somsong S10', price: 259, count: 2 },
    { name: 'Forfait CROUS', price: 12, count: 1 }
  ],
  smartphones: [],
  plans: [],
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
  SET_PLANS (state, payload) {
    state.plans = payload
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
  },
  SET_CLIENT_BILLINGS (state, payload) {
    payload.order.billing = payload.billing
  }
}

const actions = {
  pushLoading ({ commit }, payload) {
    commit('PUSH_LOADING', payload)
  },
  shiftLoading ({ commit }, payload) {
    commit('SHIFT_LOADING', payload)
  },
  async loadPlans ({ commit }) {
    commit('PUSH_LOADING', 'plans')
    await axios.get(apiUrl + `/get/plans.php`)
    .then(response => {
      commit('SET_PLANS', response.data)
      commit('SHIFT_LOADING', 'plans')
    })
    .catch(e => {
      console.log(e)
      commit('SHIFT_LOADING', 'smartphones')
    })
  },
  async loadSmartphones ({ commit }) {
    console.log('loadSmartphones')
    commit('PUSH_LOADING', 'smartphones')
    await axios.get(apiUrl + `/get/smartphones.php`)
    .then(response => {
      commit('SET_SMARTPHONES', response.data)
      commit('SHIFT_LOADING', 'smartphones')
    })
    .catch(e => {
      console.log(e)
      commit('SHIFT_LOADING', 'smartphones')
    })
  },
  async loadBrands ({ commit }) {
    console.log('loadBrands')
    commit('PUSH_LOADING', 'brands')
    await axios.get(apiUrl + `/get/brands.php`)
    .then(response => {
      commit('SET_BRANDS', response.data)
      commit('SHIFT_LOADING', 'brands')
    })
    .catch(e => {
      console.log(e)
      commit('SHIFT_LOADING', 'brands')
    })
  },
  async loadScreens ({ commit }) {
    console.log('loadScreens')
    commit('PUSH_LOADING', 'screens')
    await axios.get(apiUrl + `/get/screens.php`)
    .then(response => {
      commit('SET_SCREENS', response.data)
      commit('SHIFT_LOADING', 'screens')
    })
    .catch(e => {
      console.log(e)
      commit('SHIFT_LOADING', 'screens')
    })
  },
  async loadColors ({ commit }) {
    console.log('loadColors')
    commit('PUSH_LOADING', 'colors')
    await axios.get(apiUrl + `/get/colors.php`)
    .then(response => {
      commit('SET_COLORS', response.data)
      commit('SHIFT_LOADING', 'colors')
    })
    .catch(e => {
      console.log(e)
      commit('SHIFT_LOADING', 'colors')
    })
  },
  async loadClient ({ commit }) {
    console.log('loadClient')
    commit('PUSH_LOADING', 'client')
    await axios.get(apiUrl + `/get/client.php?client_email=` + clientEmail)
    .then(response => {
      commit('SET_CLIENT', response.data[0])
      commit('SHIFT_LOADING', 'client')
    })
    .catch(e => {
      console.log(e)
      commit('SHIFT_LOADING', 'client')
    })
  },
  async loadClientOrders ({ commit }) {
    console.log('loadClientOrders')
    commit('PUSH_LOADING', 'client_orders')
    await axios.get(apiUrl + `/get/orders.php?client_email=` + clientEmail)
    .then(response => {
      commit('SET_CLIENT_ORDERS', response.data)
      commit('SHIFT_LOADING', 'client_orders')
    })
    .catch(e => {
      console.log(e)
      commit('SHIFT_LOADING', 'client_orders')
    })
  },
  async loadClientBillings ({ commit, getters }) {
    console.log('loadClientBillings')
    console.log(getters.client)
    getters.client.orders.forEach(order => {
      commit('PUSH_LOADING', 'client_billings')
      axios.get(apiUrl + '/get/billings.php?num_order=' + order.num_commande)
      .then(response => {
        commit('SET_CLIENT_BILLINGS', {
          order: order,
          billing: response.data[0]
        })
        commit('SHIFT_LOADING', 'client_billings')
      })
      .catch(e => {
        console.log(e)
        commit('SHIFT_LOADING', 'client_billings')
      })
    })
  },
  async loadDatas ({ dispatch, commit }) {
    await dispatch('loadBrands')
    await dispatch('loadScreens')
    await dispatch('loadColors')
    await dispatch('loadSmartphones')
    await dispatch('loadClient')
    await dispatch('loadClientOrders')
    await dispatch('loadClientBillings')
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
