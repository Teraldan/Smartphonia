<template>
  <v-container grid-list-md>
    <v-layout row>
      <v-container grid-list-md class="my-0">
        <v-layout row wrap>
          <v-flex sm6 lg4 xl3 v-for="item in smartphones" :key="JSON.stringify(item)">
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
                    <v-select label="Brand" :items="brands"></v-select>
                  </v-flex>
                  <v-flex xs12>
                    <v-select label="Screen" :items="screens"></v-select>
                  </v-flex>
                  <v-flex xs12>
                    <v-select label="Color" :items="colors"></v-select>
                  </v-flex>
                  <v-flex xs12>
                    <v-select
                      label="Features"
                      :items="features"
                      multiple
                      chips
                      persistent-hint
                    ></v-select>
                  </v-flex>
                </v-layout>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn flat>Reset</v-btn>
                <v-btn flat>Filter</v-btn>
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
      brands: ['Somsong', 'Syno', 'THC', 'Acus', 'Aser'],
      screens: ['Yes', 'No'],
      colors: ['Red', 'Blue', 'Black', 'White', 'Grey', 'Sideral'],
      features: ['WiFi', 'Bluetooth', 'NFC']
    }
  },
  computed: {
    smartphones () { return this.$store.getters.smartphones }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
