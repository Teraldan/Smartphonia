import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  accountName: 'M. BARTHES Pierre',
  cart: [
    { name: 'Somsong S10', price: 259, count: 2 },
    { name: 'Forfait CROUS', price: 12, count: 1 }
  ],
  smartphones: [
    {
      barCode: '123123',
      pictureUrl: 'http://consumer-img.huawei.com/content/dam/huawei-cbg-site/common/mkt/list-image/phones/p10/p10-listimage-black.png',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed lorem efficitur, dignissim mi a, malesuada risus. Nam ut finibus augue. Maecenas nibh dui, malesuada nec nulla ut, ultricies viverra tellus. Mauris erat lorem, finibus non congue vitae, sollicitudin in sem. Mauris commodo pretium purus, eu pellentesque ex placerat in. Aliquam felis magna, efficitur non leo tincidunt, posuere tincidunt ante. In congue nibh in magna lobortis, sit amet luctus mi sollicitudin.',
      stars: 3.5,
      price: 275,
      caracteristics: {
        brand: 'Somsong', screen: 'Yes', color: 'Black', features: ['Wifi', 'Bluetooth']
      }
    }
  ]
}

const mutations = {
}

const actions = {
}

const getters = {
  accountName (state) { return state.accountName },
  cart (state) { return state.cart },
  smartphones (state) { return state.smartphones },
  smartphone (state) {
    return barCode => state.smartphones.filter(smartphone => smartphone.barCode === parseInt(barCode))[0]
  }
}

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})
