<template>
  <v-container>
    <v-layout row>
      <v-flex>
        <v-card>
          <v-card-media
          src="/static/abstract.jpg"
          height="120px">
            <v-container fill-height fluid>
              <v-layout flex align-center justify-center>
                <v-flex xs12 align-end flexbox class="white--text">
                  <h1 class="text-xs-left display-1">Welcome back, {{ client.firstname }} !</h1>
                </v-flex>
              </v-layout>
            </v-container>
          </v-card-media>
          <v-card-text>

            <v-container grid-list-lg>
              <v-layout row>
                <v-flex md3>
                  <v-list>
                    <v-list-tile router to="/my/" exact>
                      My informations
                    </v-list-tile>
                    <v-list-tile router to="/my/orders">
                      My orders
                    </v-list-tile>
                    <v-list-tile router to="/my/settings">
                      My settings
                    </v-list-tile>
                  </v-list>
                </v-flex>

                <v-flex md9>
                  <transition name="slide-x-fade" mode="out-in">
                    <router-view></router-view>
                  </transition>
                </v-flex>
              </v-layout>
            </v-container>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: 'Account',
  computed: {
    client () {
      return this.$store.getters.client
    }
  }
}
</script>
