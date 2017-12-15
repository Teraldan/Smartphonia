<template>
  <v-container grid-list-md>
    <v-layout column>
      <v-flex>
        <v-card>
          <v-card-media
          src="/static/abstract.jpg"
          height="100px">
            <v-container fill-height fluid>
              <v-layout flex align-center justify-center>
                <v-flex xs12 align-end flexbox class="white--text">
                  <h1 class="text-xs-left display-1">Smartphones</h1>
                </v-flex>
              </v-layout>
            </v-container>
          </v-card-media>
        </v-card>
      </v-flex>
    </v-layout>

    <v-layout row>
      <v-container grid-list-md class="my-0">
        <v-layout row wrap>
          <v-flex d-flex sm6 lg4 xl3 v-for="item in smartphones" :key="JSON.stringify(item)">
            <store-item :product="item"></store-item>
          </v-flex>
        </v-layout>
      </v-container>

      <v-flex sm4>
        <v-layout column>
          <v-flex>
            <v-card>
              <v-card-text>
                <h1 class="headline">Filters</h1>
                <v-layout column wrap>
                  <v-flex xs12>
                    <v-select label="Brand" v-model="filters.brand" :items="brands"></v-select>
                  </v-flex>
                  <v-flex xs12>
                    <v-select label="Screen" v-model="filters.screen" :items="screens"></v-select>
                  </v-flex>
                  <v-flex xs12>
                    <v-select label="Color" v-model="filters.color" :items="colors"></v-select>
                  </v-flex>
                  <v-flex xs12>
                    <v-select
                      label="Features"
                      :items="features"
                      v-model="filters.features"
                      multiple
                      chips
                      persistent-hint
                    ></v-select>
                  </v-flex>
                </v-layout>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn flat @click="resetFilters()">Reset</v-btn>
              </v-card-actions>
            </v-card>
          </v-flex>

          <v-flex>
            <app-cart></app-cart>
          </v-flex>

          <v-flex>
            <app-account></app-account>
          </v-flex>
        </v-layout>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import AppCart from '@/components/AppCart'
import AppAccount from '@/components/AppAccount'
import StoreItem from '@/components/StoreItem'

export default {
  name: 'Store',
  components: {
    AppCart, AppAccount, StoreItem
  },
  data () {
    return {
      features: ['WiFi', 'Bluetooth', 'IR'],
      filters: {
        brand: '',
        screen: '',
        color: '',
        features: []
      }
    }
  },
  computed: {
    smartphones () {
      let smartphones = this.$store.getters.smartphones
      let brand = this.filters.brand
      let screen = this.filters.screen
      let color = this.filters.color
      let features = this.filters.features

      if (brand !== '') {
        smartphones = smartphones.filter(smartphone => smartphone.nom_marque === brand)
      }

      if (screen !== '') {
        smartphones = smartphones.filter(smartphone => smartphone.taille_ecran === screen)
      }

      if (color !== '') {
        smartphones = smartphones.filter(smartphone => smartphone.couleur === color)
      }

      if (features.length !== 0) {
        smartphones = smartphones.filter(smartphone => {
          var r = true

          features.forEach(feature => {
            feature = feature.toLowerCase()
            // eslint-disable-next-line
            if (smartphone[feature] == false) {
              r = false
            }
          })

          return r
        })
      }

      return smartphones
    },
    brands () {
      let brands = this.$store.getters.brands
      return brands.map(brand => brand.nom_marque)
    },
    screens () {
      let screens = this.$store.getters.screens
      return screens.map(screen => screen.taille_ecran).sort((a, b) => a > b)
    },
    colors () {
      let colors = this.$store.getters.colors
      return colors.map(color => color.couleur)
    }
  },
  methods: {
    resetFilters () {
      this.filters.brand = ''
      this.filters.screen = ''
      this.filters.color = ''
      this.filters.features = []
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.fade-slow-enter-active, .fade-slow-leave-active {
  transition: all 0.5s
}
.fade-slow-enter, .fade-slow-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0
}
</style>
