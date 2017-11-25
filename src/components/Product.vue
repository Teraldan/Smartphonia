<template>
    <v-container grid-list-md>
        <v-layout row>
            <v-flex>
                <v-card>
                    <v-card-media
                        src="http://consumer-img.huawei.com/content/dam/huawei-cbg-site/common/mkt/list-image/phones/p10/p10-listimage-black.png"
                        height="400px"
                        contain
                    >
                    </v-card-media>


                    <v-card-text>
                        <h1 class="headline">Nice phone</h1>

                        <div class="my-2">
                          <v-icon v-for="starI in starsFillCount" :key="starI">star</v-icon>
                          <v-icon v-for="starI in starsStrokeCount" :key="starI">star_half</v-icon>
                          <v-icon v-for="starI in starsEmptyCount" :key="starI">star_border</v-icon>
                        </div>

                        <h3>Description</h3>
                        <p>
                          {{ product.description }}
                        </p>


                        <h3>Specifications</h3>
                        <v-layout row>
                          <v-flex xs12>
                            <v-list>
                              <v-list-tile>
                                <v-layout row>
                                  <v-flex xs4>Brand</v-flex>
                                  <v-flex xs8>{{ product.caracteristics.brand }}</v-flex>
                                </v-layout>
                              </v-list-tile>
                              <v-list-tile>
                                <v-layout row>
                                  <v-flex xs4>Color</v-flex>
                                  <v-flex xs8>{{ product.caracteristics.color }}</v-flex>
                                </v-layout>
                              </v-list-tile>
                              <v-list-tile>
                                <v-layout row>
                                  <v-flex xs4>Screen</v-flex>
                                  <v-flex xs8>{{ product.caracteristics.screen }}</v-flex>
                                </v-layout>
                              </v-list-tile>
                              <v-list-tile>
                                <v-layout row>
                                  <v-flex xs4>Features</v-flex>
                                  <v-flex xs8>
                                    <v-chip v-for="(val, prop) in product.caracteristics.features" :key="val">{{ prop }}</v-chip>
                                  </v-flex>
                                </v-layout>
                              </v-list-tile>
                            </v-list>
                          </v-flex>
                        </v-layout>



                    </v-card-text>
                </v-card>
            </v-flex>


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
        </v-layout>
    </v-container>  
</template>

<script>
export default {
  name: 'Product',
  data () {
    return {
      product: {
        name: 'Nice phone',
        imgUrl:
        'http://consumer-img.huawei.com/content/dam/huawei-cbg-site/common/mkt/list-image/phones/p10/p10-listimage-black.png',
        stars: 3,
        price: 229,
        description: 'Smartphone J3 Noir débloqué/Design compact/Ecran 5" Super Amoled HD/Reseau 4G(catégorie 4),Wifi/Android Lollipop 5.1/Processeur Quad Core 1,5Ghz/Appareil Photo 8MP',
        caracteristics: {
          brand: 'Aser',
          color: 'Black',
          screen: 'Yes',
          features: {
            wifi: true,
            bluetooth: true,
            nfc: false
          }
        }
      }
    }
  },
  computed: {
    starsFillCount () {
      return Math.floor(this.product.stars % 5 === 0 ? 5 : this.product.stars % 5)
    },
    starsStrokeCount () {
      return this.product.stars - this.starsFillCount > 0 ? 1 : 0
    },
    starsEmptyCount () {
      return Math.floor(5 - this.product.stars)
    }
  }
}
</script>


<style scoped>

</style>
