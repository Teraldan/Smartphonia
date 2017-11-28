import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
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
    },
    {
      barCode: 2,
      name: 'Aser V8',
      pictureUrl: 'http://consumer-img.huawei.com/content/dam/huawei-cbg-site/common/mkt/list-image/phones/mate-9/mate-9-listimage-gold.png',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed lorem efficitur, dignissim mi a, malesuada risus. Nam ut finibus augue. Maecenas nibh dui, malesuada nec nulla ut, ultricies viverra tellus. Mauris erat lorem, finibus non congue vitae, sollicitudin in sem. Mauris commodo pretium purus, eu pellentesque ex placerat in. Aliquam felis magna, efficitur non leo tincidunt, posuere tincidunt ante. In congue nibh in magna lobortis, sit amet luctus mi sollicitudin.',
      stars: 3.7,
      price: 187,
      viewedCount: 50,
      caracteristics: {
        brand: 'Aser', screen: 'Yes', color: 'Black', features: { nfc: true, bluetooth: true }
      }
    },
    {
      barCode: 3,
      name: 'Acus Mo',
      pictureUrl: 'http://consumer-img.huawei.com/content/dam/huawei-cbg-site/common/mkt/list-image/phones/mate10-pro/mate10pro-listimage-bule.png',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed lorem efficitur, dignissim mi a, malesuada risus. Nam ut finibus augue. Maecenas nibh dui, malesuada nec nulla ut, ultricies viverra tellus. Mauris erat lorem, finibus non congue vitae, sollicitudin in sem. Mauris commodo pretium purus, eu pellentesque ex placerat in. Aliquam felis magna, efficitur non leo tincidunt, posuere tincidunt ante. In congue nibh in magna lobortis, sit amet luctus mi sollicitudin.',
      stars: 3.8,
      price: 645,
      viewedCount: 15,
      caracteristics: {
        brand: 'Acus', screen: 'No', color: 'Blue', features: { wifi: true, nfc: true }
      }
    }
  ]
}

const mutations = {
}

const actions = {
}

const getters = {
  client: state => state.client,
  orders: state => state.client.orders,
  order (state) {
    return idOrder => state.client.orders.filter(order => order.id === parseInt(idOrder))[0]
  },
  cart: state => state.cart,
  smartphones: state => state.smartphones,
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
