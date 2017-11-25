<template>
  <v-container grid-list-md>

    <v-layout row wrap>
      <v-flex xs12>
        <v-card>
          <v-card-text>
            <h1 class="headline">Filters</h1>
            <v-layout row wrap>
              <v-flex xs12 sm3>
                <v-select label="Brand" :items="brands"></v-select>
              </v-flex>
              <v-flex xs12 sm3>
                <v-select label="Screen" :items="screens"></v-select>
              </v-flex>
              <v-flex xs12 sm3>
                <v-select label="Color" :items="colors"></v-select>
              </v-flex>
              <v-flex xs12 sm3>
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
    </v-layout>


    <v-layout row>
      <v-container grid-list-md>
        <v-layout row wrap>
          <v-flex md4 v-for="item in items" :key="item">
            <v-card>
              <v-card-media
              src="http://consumer-img.huawei.com/content/dam/huawei-cbg-site/common/mkt/list-image/phones/p10/p10-listimage-black.png"
              height="300px"
              contain
              @click="$router.push('/store/smartphone/Nice-phone')">
              </v-card-media>
              <v-card-text>
                <router-link tag="h1" class="headline" to="/store/smartphone/Nice-phone">
                  Nice phone
                </router-link>

                <v-layout row>
                  <v-flex>
                    <v-icon>star</v-icon>
                    <v-icon>star</v-icon>
                    <v-icon>star</v-icon>
                    <v-icon>star_half</v-icon>
                    <v-icon>star_border</v-icon>
                  </v-flex>
                  <v-flex>
                    <h2 class="titletext-xs-right">$229</h2>
                  </v-flex>
                </v-layout>
              </v-card-text>

              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn flat primary>Add to cart</v-btn>
              </v-card-actions>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>

      <v-flex sm4>
        <v-layout column>
          <v-flex>
            <v-card>
              <v-card-text>
                <h1 class="headline">Your cart</h1>
                <v-list two-line>
                  <v-list-tile>
                    <v-list-tile-content>
                      <v-list-tile-title>
                          1x Somsong S10
                      </v-list-tile-title>
                      <v-list-tile-sub-title>
                        $249
                      </v-list-tile-sub-title>
                    </v-list-tile-content>
                    <v-list-tile-action>
                      <v-btn icon ripple>
                        <v-icon color="grey lighten-1">delete</v-icon>
                      </v-btn>
                    </v-list-tile-action>
                  </v-list-tile>
                </v-list>
              </v-card-text>

              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn primary flat>Checkout</v-btn>
              </v-card-actions>
            </v-card>
          </v-flex>

          <v-flex>
            <v-card>
              <v-card-text>
                <h1 class="headline">My account</h1>
                <br>
                M. BARTHES Pierre
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn flat>Profile</v-btn>
                <v-btn error flat>Logout</v-btn>
              </v-card-actions>
            </v-card>
          </v-flex>
        </v-layout>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: 'Store',
  data () {
    return {
      items: [0, 1, 2, 3, 4, 5, 6, 7],
      brands: ['Somsong', 'Syno', 'THC', 'Acus', 'Aser'],
      screens: ['Yes', 'No'],
      colors: ['Red', 'Blue', 'Black', 'White', 'Grey', 'Sideral'],
      features: ['WiFi', 'Bluetooth', 'NFC']
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
