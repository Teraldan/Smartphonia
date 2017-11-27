<template>
  <v-card>
    <v-card-text>
      <h1 class="headline">Your cart</h1>
      <v-list two-line>
        <v-list-tile v-for="item in cart" :key="JSON.stringify(item)">
          <v-list-tile-content>
            <v-list-tile-title>
                  {{ item.count}}x {{ item.name }}
            </v-list-tile-title>
            <v-list-tile-sub-title>
            ${{ item.price }}
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
      <v-btn color="primary" flat>Checkout</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: 'AppCart',
  computed: {
    cart () { return this.$store.getters.cart }
  }
}
</script>
