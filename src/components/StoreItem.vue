<template>
  <v-card>
    <v-card-media
    :src="product.pictureUrl"
    height="300px"
    contain
    @click="$router.push('/store/smartphone/'+product.barCode)">
    </v-card-media>
    <v-card-text>
      <router-link tag="h1" class="headline" :to="'/store/smartphone/'+product.barCode">
        {{ product.name }}
      </router-link>

      <v-layout row>
        <v-flex>
          <v-icon color="yellow" style="font-size: 16px; line-height: 32px">star</v-icon>
          <v-icon color="yellow" style="font-size: 16px; line-height: 32px">star</v-icon>
          <v-icon color="yellow" style="font-size: 16px; line-height: 32px">star</v-icon>
          <v-icon color="yellow" style="font-size: 16px; line-height: 32px">star_half</v-icon>
          <v-icon color="yellow" style="font-size: 16px; line-height: 32px">star_border</v-icon>
        </v-flex>
        <v-flex>
          <h2 class="text-xs-right">$229</h2>
        </v-flex>
      </v-layout>

      <v-layout row>
        <v-flex>
          {{ product.description | truncate(100) }}
        </v-flex>
      </v-layout>
    </v-card-text>

    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn flat primary>Add to cart</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: 'StoreItem',
  props: {
    product: { type: Object }
  },
  computed: {
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
