<template>
  <v-container grid-list-md>
    <v-layout column>
      <v-flex>
        <v-card>
          <v-card-media
          src="/static/abstract.jpg"
          height="300px">
            <v-container fill-height fluid>
              <v-layout flex align-center justify-center>
                <v-flex xs12 align-end flexbox class="white--text">
                  <h1 class="text-xs-center display-3">Smartphonia.com</h1>
                  <h2 class="text-xs-center display-1">N°1 Leader of smartphones and phone plans</h2>
                </v-flex>
              </v-layout>
            </v-container>
          </v-card-media>
        </v-card>
      </v-flex>

      <v-flex>
        <v-layout align-center justify-center>
          <v-flex xs12>
            <h1 class="headtitle">Most viewed</h1>
          </v-flex>
          <v-flex>
            <a class="subheading">More...</a>
          </v-flex>
        </v-layout>
        <v-layout row>
          <v-flex
          v-for="smartphone in limitBy(orderBy(smartphones, 'viewedCount', -1), 3)"
          md4
          :key="JSON.stringify(smartphone)">
            <store-item height="200" :cart="false" :product="smartphone"></store-item>
          </v-flex>
        </v-layout>
      </v-flex>


      <v-flex>
        <v-layout align-center justify-center>
          <v-flex xs12>
            <h1 class="headtitle">Best evaluations</h1>
          </v-flex>
          <v-flex>
            <a class="subheading">More...</a>
          </v-flex>
        </v-layout>
        <v-layout row>
          <v-flex
          v-for="smartphone in limitBy(orderBy(smartphones, 'stars', -1), 3)"
          md4
          :key="JSON.stringify(smartphone)">
            <store-item height="200" :cart="false" :product="smartphone"></store-item>
          </v-flex>
        </v-layout>
      </v-flex>
    </v-layout>
  </v-container>
</template>


<script>
import StoreItem from '@/components/StoreItem'

export default {
  name: 'Home',
  components: {
    StoreItem
  },
  computed: {
    smartphones () {
      return this.$store.getters.smartphones
    }
  }
}
</script>
