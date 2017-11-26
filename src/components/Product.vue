<template>
  <v-container grid-list-md>
    <v-layout row>
      <v-flex>
        {{ barCode }}
        <v-card v-if="product">
          <v-card-media
              src="http://consumer-img.huawei.com/content/dam/huawei-cbg-site/common/mkt/list-image/phones/p10/p10-listimage-black.png"
              height="400px"
              contain
          >
          </v-card-media>


          <v-card-text>
              <h1 class="headline">Nice phone</h1>



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

              <h3>Evaluations</h3>
              <div class="mb-3">

                <v-layout column>
                  <v-flex>
                    <v-icon color="yellow" v-for="starI in starsFillCount" :key="starI">star</v-icon>
                    <v-icon color="yellow" v-for="starI in starsStrokeCount" :key="starI">star_half</v-icon>
                    <v-icon color="yellow" v-for="starI in starsEmptyCount" :key="starI">star_border</v-icon>
                    (344 votes)
                  </v-flex>

                  <v-flex>
                    {{ product.stars }} stars on 5
                  </v-flex>
                </v-layout>

                <v-layout row wrap>
                  <v-flex md4 v-for="i in 4" :key="i">
                    <v-card>
                      <v-card-text>
                        <v-layout row>
                          <v-flex>
                            <h4>Anonymous</h4>
                          </v-flex>
                          <v-spacer></v-spacer>
                          <v-flex class="text-xs-right">
                            29/02/18
                          </v-flex>
                        </v-layout>

                        <v-icon color="yellow" v-for="starI in starsFillCount" :key="starI">star</v-icon>
                        <v-icon color="yellow" v-for="starI in starsStrokeCount" :key="starI">star_half</v-icon>
                        <v-icon color="yellow" v-for="starI in starsEmptyCount" :key="starI">star_border</v-icon>
                        <br>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc nec ex orci. Curabitur consequat in est ac sodales. Interdum et malesuada fames ac ante ipsum primis in faucibus.
                      </v-card-text>
                    </v-card>
                  </v-flex>
                </v-layout>
              </div>


            </v-card-text>
          </v-card>
        </v-flex>


        <v-flex sm4>
          <v-layout column>
            <v-flex>
              <v-card>
                <v-card-text>
                  <h1 class="headline">$229 </h1>
                  <h2 class="subheading">Shipping: $9.95</h2>
                </v-card-text>

                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn primary flat>Add to cart</v-btn>
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
    </v-layout>
  </v-container>  
</template>

<script>
import AppCart from '@/components/AppCart'
import AppAccount from '@/components/AppAccount'

export default {
  name: 'Product',
  components: {
    AppCart, AppAccount
  },
  data () {
    return {
    }
  },
  props: {
    barCode: { type: Number }
  },
  computed: {
    product () {
      this.$store.getters.smartphone(this.barCode)
    },
    starsFillCount () {
      return Math.floor(
        this.product.stars % 5 === 0 ? 5 : this.product.stars % 5
      )
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
