<template>
  <div>
    <v-list two-line> 
      <v-list-group v-for="res in reservations" :key="res.id" v-model="res.active" no-action>
        <template v-slot:activator>
          <v-list-tile-content>
            <v-list-tile-title>{{ res.restaurant.name }}</v-list-tile-title>
            <v-list-tile-title>{{ res.date | formatTitleDate }}</v-list-tile-title>
          </v-list-tile-content>
        </template>

        <v-list-tile class="button-style">
          <v-list-tile-content>
            <v-list-tile-title>{{ "Reservation Time: " }}</v-list-tile-title>
            <v-list-tile-sub-title class="text--primary">{{ res.date | formatCountdown }}</v-list-tile-sub-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile>
          <v-list-tile-content>
            <v-list-tile-title>{{"People: " + res.people}}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile>
          <v-list-tile-content>
            <v-list-tile-title>{{"Notes: "}}</v-list-tile-title>
            <v-list-tile-sub-title class="text--primary">{{ res.notes}}</v-list-tile-sub-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile>
          <v-list-tile-content>
            <v-list-tile-title>{{res.restaurant.name}}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-card class="v-card--round card-style" elevation="0">
          <v-img max-height="200px" max-width="400px" :src="res.restaurant.imageUrl"></v-img>
          <v-divider width="500px" class="my-3"></v-divider>
        </v-card>

        <v-card class="v-card--round card-style map-style" elevation="0">
           <restaurant-map :address="res.restaurant.address"></restaurant-map>
        </v-card>

        

        <v-card class="card-style button-style" elevation="0">
          <v-card-actions>
              <v-btn flat right @click="openEditReservation(res)">Edit</v-btn>
              <v-btn flat right color="error" @click="openDeleteReservation(res)">Delete</v-btn>
          </v-card-actions>
        </v-card>
      </v-list-group>
    </v-list>
  </div>
</template>

<script>
import ReservationPopupService from '../services/ReservationPopupService'
import moment from 'moment'
import RestaurantMap from './RestaurantMap'

export default {
  name: "reservations-list",
  props: [ "reservations" ],
  components: { RestaurantMap },
  data() {
    return {
      
    }
  },
  updated() {
    
  },

  methods: {
    openDeleteReservation(reservation) {
      ReservationPopupService.openDeleteReservation(reservation)
    },

    openEditReservation(reservation) {
      ReservationPopupService.openEditReservation(reservation)
    }
  },

  filters: {
    formatTitleDate: function (date) {
      return moment(date).calendar()
    },

    formatCountdown: function(date) {
      return moment(date).calendar()
    }
  }
} 
</script>

<style>
.button-style {
  padding-top: 10px
}

.card-style {
  padding-left: 70px
}

.map-style {
  max-width: 600px
}
</style>
