<template>
  <v-container fluid>
    <div class="display-1 mb-4">My Favorites</div>
    <v-layout row class="v-layout--favorites">
      <v-flex class="pa-2 restaurant-card--size mb-3" v-for="(r, i) in restaurants" :key="i">
        <restaurant-card :restaurant="r"></restaurant-card>
      </v-flex>
    </v-layout>
    <v-layout>
      <v-flex xs12 sm12 class="display-1 mb-4">Trending Restaurants</v-flex>
      <v-flex xs12 sm12>
        <v-layout>
          <v-text-field label="Filter"></v-text-field>
          <v-btn round flat>Filter</v-btn>
        </v-layout>
      </v-flex>
    </v-layout>
    <v-layout row wrap>
      <v-flex xs12 sm6 md6 lg4 class="pa-2" v-for="(r, i) in restaurants" :key="i">
        <restaurant-card :restaurant="r"></restaurant-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import RestaurantService from '../services/RestaurantService'
import RestaurantCard from './RestaurantCard'

export default {
  name: 'landing-page',
  components: { RestaurantCard },
  data() {
    return {
      restaurants: []
    }
  },

  async created() {
    this.restaurants = await RestaurantService.getAll()
  }
}
</script>

<style scoped>
.v-layout--favorites {
  overflow-x: scroll;
  scroll-behavior: smooth;

}
.restaurant-card--size {
  width: 400px;
  max-width: 400px;
  flex: 0 0 auto;
}
</style>
