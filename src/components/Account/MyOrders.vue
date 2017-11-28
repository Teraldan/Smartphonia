<template>
  <div>
    <h1 class="title">My orders</h1>

    <v-radio-group row>
      <v-checkbox label="Awaiting approuval" value="approuval"></v-checkbox>
      <v-checkbox label="Awaiting shipment" value="shipping"></v-checkbox>
    </v-radio-group>

    <v-list avatar two-line>
      <v-subheader>Latest orders</v-subheader>
      <v-list-tile v-for="order in ordersByDate" :key="JSON.stringify(order)" @click="$router.push('/my/order/'+order.id)">
        <v-list-tile-action>
          <v-icon>assignment</v-icon>
        </v-list-tile-action>
        <v-list-tile-content>
          <v-list-tile-title>
            <span class="body-2">#{{ order.id }}</span> 
            <span class="body-1">
              {{ order.products
                  | map((product) => product.price * product.count) 
                  | sum
                  | currency('$')
              }}
            </span>
          </v-list-tile-title>
          <v-list-tile-sub-title>
            {{ order.products
              | map(product => product.count + 'x ' + product.name)
              | join(', ')
            }}
          </v-list-tile-sub-title>
        </v-list-tile-content>

        <v-list-tile-action>
          <v-list-tile-action-text>
            {{ order.date | moment('MM/DD/YYYY h:mm A') }}
          </v-list-tile-action-text>
        </v-list-tile-action>
      </v-list-tile>
    </v-list>
  </div>
</template>

<script>
export default {
  name: 'Order',
  computed: {
    orders () {
      return this.$store.getters.orders
    },
    ordersByDate () {
      let orders = JSON.parse(JSON.stringify(this.orders))
      orders.sort((a, b) => a.date > b.date)
      return orders
    }
  }
}
</script>
