<template>
  <v-container>
    <v-layout row>
      <v-flex>
        <v-card>
          <v-card-media
          src="https://cdn.pixabay.com/photo/2015/02/15/05/36/abstract-636901_960_720.jpg"
          height="120px">
            <v-container fill-height fluid>
              <v-layout flex align-center justify-center>
                <v-flex xs12 align-end flexbox class="white--text">
                  <h1 class="text-xs-left display-1">Welcome back, {{ $store.getters.accountName }} !</h1>
                </v-flex>
              </v-layout>
            </v-container>
          </v-card-media>
          <v-card-text>

            <v-container grid-list-lg>
              <v-layout row>
                <v-flex md3>
                  <v-list>
                    <v-list-tile @click="">
                      My informations
                    </v-list-tile>
                    <v-list-tile @click="">
                      My orders
                    </v-list-tile>
                    <v-list-tile @click="">
                      My settings
                    </v-list-tile>
                  </v-list>
                </v-flex>

                <v-flex md9>
                  <h1 class="title">My orders</h1>

                  <v-radio-group row>
                    <v-checkbox label="Awaiting approuval" value="approuval"></v-checkbox>
                    <v-checkbox label="Awaiting shipment" value="shipping"></v-checkbox>
                  </v-radio-group>

                  <v-list avatar two-line>
                    <v-list-tile @click="">
                      <v-list-tile-action>
                        <v-icon>assignment</v-icon>
                      </v-list-tile-action>
                      <v-list-tile-content>
                        <v-list-tile-title>Order n°325972</v-list-tile-title>
                        <v-list-tile-sub-title>$564 1x Somsong S10, 2x Forfait CROUS</v-list-tile-sub-title>
                      </v-list-tile-content>
                    </v-list-tile>
                  </v-list>
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
}
</script>
