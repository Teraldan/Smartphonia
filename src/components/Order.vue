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
                  <h1 class="text-xs-left display-1">Order N°{{ id }}</h1>
                </v-flex>
              </v-layout>
            </v-container>
          </v-card-media>
          <v-card-text>
            <v-layout column>
              <v-flex>
                <h1>Order informations</h1>

                <v-list>
                  <v-list-tile>
                    <v-layout row>
                      <v-flex sm4><h4>Name</h4></v-flex>
                      <v-flex sm8>{{ order.billingName }}</v-flex>
                    </v-layout>
                  </v-list-tile>

                  
                  <v-list-tile>
                    <v-layout row>
                      <v-flex sm4><h4>Date</h4></v-flex>
                      <v-flex sm8>{{ $moment(order.billingDate).format('MMMM Do YYYY, h:mm:ss a') }}</v-flex>
                    </v-layout>
                  </v-list-tile>

                  <v-list-tile>
                    <v-layout row>
                      <v-flex sm4><h4>Delivery address</h4></v-flex>
                      <v-flex sm8>{{ order.deliveryAddress }}</v-flex>
                    </v-layout>
                  </v-list-tile>

                  <v-list-tile>
                    <v-layout row>
                      <v-flex sm4><h4>Billing address</h4></v-flex>
                      <v-flex sm8>{{ order.billingAddress }}</v-flex>
                    </v-layout>
                  </v-list-tile>
                </v-list>
              </v-flex>

              <v-flex>
                <h1>Order details</h1>

                <v-list two-line>
                  <v-list-tile @click="">
                    <v-list-tile-content>
                      <v-list-tile-title>
                        1x Somsong S10
                      </v-list-tile-title>

                      <v-list-tile-sub-title>
                        {{ product.description | truncate(40) }}
                      </v-list-tile-sub-title>
                    </v-list-tile-content>

                    <v-list-tile-content>
                      <v-list-tile-title class="text-xs-right">
                        {{ 229 | currency('$') }}
                      </v-list-tile-title>
                    </v-list-tile-content>
                  </v-list-tile>


                  <v-list-tile @click="">
                    <v-list-tile-content>
                      <v-list-tile-title>
                        2x Forfait CROUS
                      </v-list-tile-title>

                      <v-list-tile-sub-title>
                        {{ product.description | truncate(40) }}
                      </v-list-tile-sub-title>
                    </v-list-tile-content>

                    <v-list-tile-content>
                      <v-list-tile-title class="text-xs-right">
                        {{ 12 | currency('$') }}
                      </v-list-tile-title>
                    </v-list-tile-content>
                  </v-list-tile>


                  <v-list-tile>
                    <v-list-tile-content>
                      <v-list-tile-title>
                        <h4 class="title">Summary</h4>
                      </v-list-tile-title>
                    </v-list-tile-content>

                    <v-list-tile-content>
                      <v-list-tile-title class="text-xs-right">
                        {{ 229+12 | currency('$') }}
                      </v-list-tile-title>
                    </v-list-tile-content>
                  </v-list-tile>
                </v-list>
              </v-flex>


            </v-layout>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>


<script>
export default {
  name: 'Order',
  props: {
    id: String
  },
  data () {
    return {
      order: {
        billingName: 'BARTHES Pierre',
        billingDate: new Date(),
        deliveryAddress: '45 chemin des ormes 78421 Fourqueux',
        billingAddress: '494 boulevard de la fête 57462 Bibiche'
      },
      product: {
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum purus diam, feugiat vitae neque id, pretium congue ipsum. Morbi vel fringilla odio. Nullam suscipit, felis ut dapibus consectetur, libero est egestas augue, sed facilisis augue est non massa. Praesent faucibus fringilla scelerisque. In hac habitasse platea dictumst. Phasellus laoreet ex sit amet enim euismod posuere. Duis tincidunt nisl eget sem hendrerit efficitur.'
      }
    }
  },
  computed: {
    order () {
      let order = this.$store.getters.order(this.id)
      return order
    }
  }
}
</script>
