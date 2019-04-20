<template>
  <v-card hover class="v-card--round" @click="openRestaurant">
    <v-img height="200px" :src="restaurant.imageUrl">
      <v-container class="container--dim" fill-height>
        <v-layout class="white--text" fill-height align-center justify-center>
          <span class="display-2 title--center">{{restaurant.name}}</span>
        </v-layout>
      </v-container>
    </v-img>
  </v-card>
</template>

<script>
import RestaurantPopupService from '../services/RestaurantPopupService'

export default {
  name: 'restaurant-card',
  props: ['restaurant'],
  methods: {
    openRestaurant() {
      RestaurantPopupService.openWithRestaurant(this.restaurant)
    }
  }
}
</script>

<style>
.container--dim {
  background-color: rgba(0, 0, 0, 0.3);
}

.container--dim:hover {
  opacity: 0;
}

.title--center {
  text-align: center;
}
</style>
