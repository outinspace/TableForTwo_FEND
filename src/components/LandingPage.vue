<template>
  <v-container fluid ref="mainContainer">
    <div v-if="favoriteRestaurants" class="display-1 mb-4 pa-2">My Favorites</div>
    <v-layout v-if="favoriteRestaurants" row class="v-layout--favorites" 
      :style="{
        'marginRight': '-' + containerPadding, 
        'marginLeft': '-' + containerPadding,
        'paddingRight': containerPadding,
        'paddingLeft': containerPadding
      }" 
      v-resize="updateFavoritesMargins"
    >
      <v-flex class="pa-2 restaurant-card--size mb-3" v-for="(r, i) in favoriteRestaurants" :key="i">
        <restaurant-card :restaurant="r"></restaurant-card>
      </v-flex>
    </v-layout>
    <v-layout row wrap class="pa-2 flex--justify-between">
      <v-flex  class="display-1 mb-4">Trending Restaurants</v-flex>
      <v-spacer></v-spacer>
      <v-flex class="flex--shrink">
        <v-layout>
          <v-text-field label="Filter" clearable @keypress.enter="filterRestaurants" v-model="filterValue" @click:clear="restaurants = allRestaurants"></v-text-field>
          <v-btn fab flat @click="filterRestaurants">
            <v-icon>search</v-icon>
          </v-btn>
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
import AuthService from '../services/AuthService';

export default {
  name: 'landing-page',
  components: { RestaurantCard },
  data() {
    return {
      allRestaurants: [],
      favoriteRestaurants: null,
      restaurants: [],
      filterValue: '',
      containerPadding: '0px'
    }
  },
  created() {
    this.fetchAllRestaurants()
    AuthService.subscribe(() => {
      if (AuthService.currentUser != null && AuthService.currentUser.restaurant == null) {
        this.fetchFavoriteRestaurants()
      } else {
        this.favoriteRestaurants = null
      }
    })
  },
  mounted() {
    this.updateFavoritesMargins()
  },
  methods: {
    async fetchAllRestaurants() {
      this.allRestaurants = await RestaurantService.getAll()
      this.restaurants = this.allRestaurants
    },

    async fetchFavoriteRestaurants() {
      this.favoriteRestaurants = await RestaurantService.getFavorites()
    },

    filterRestaurants() {
      this.restaurants = this.allRestaurants.filter(r => r.name.toLowerCase().includes(this.filterValue.toLowerCase()))
    },

    updateFavoritesMargins() {
      const style = window.getComputedStyle(this.$refs.mainContainer)
      this.containerPadding = style.paddingRight
    }
  }
}
</script>

<style scoped>
.v-layout--favorites {
  overflow-x: scroll;
  scroll-behavior: smooth;
  -webkit-overflow-scrolling: touch;
}
.restaurant-card--size {
  width: 400px;
  max-width: 400px;
  flex: 0 0 auto;
}
.flex--shrink {
  flex: 1 1 auto;
}
.flex--justify-between {
  justify-content: space-between;
}
</style>
