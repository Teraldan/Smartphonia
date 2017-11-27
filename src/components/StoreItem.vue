<template>
  <v-card>
    <v-card-media
    :src="product.pictureUrl"
    :height="height"
    contain
    @click="$router.push('/store/smartphone/'+product.barCode)">
    </v-card-media>
    <v-card-text>
      <router-link tag="h1" class="headline" :to="'/store/smartphone/'+product.barCode">
        {{ product.name }}
      </router-link>

      <v-layout row>
        <v-flex>
          <v-icon color="yellow" class="star-icon" v-for="starI in starsFillCount" :key="starI">star</v-icon>
          <v-icon color="yellow" class="star-icon" v-for="starI in starsHalfCount" :key="starI">star_half</v-icon>
          <v-icon color="yellow" class="star-icon" v-for="starI in starsEmptyCount" :key="starI">star_border</v-icon>
        </v-flex>
        <v-flex>
          <h2 class="text-xs-right">{{ product.price | currency('$') }}</h2>
        </v-flex>
      </v-layout>

      <v-layout row>
        <v-flex>
          {{ product.description | truncate(150) }}
        </v-flex>
      </v-layout>
    </v-card-text>

    <v-card-actions v-if="cart">
      <v-spacer></v-spacer>
      <v-btn flat color="primary">Add to cart</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: 'StoreItem',
  props: {
    product: { type: Object },
    height: { type: String, default: '300' },
    cart: { type: Boolean, default: true }
  },
  computed: {
    starsFillCount () {
      return Math.floor(
        this.product.stars % 5 === 0 ? 5 : this.product.stars % 5
      )
    },
    starsHalfCount () {
      return this.product.stars - this.starsFillCount > 0 ? 1 : 0
    },
    starsEmptyCount () {
      return Math.floor(5 - this.product.stars)
    }
  }
}
</script>

<style>
.star-icon {
  font-size: 16px; line-height: 32px;
}
</style>
