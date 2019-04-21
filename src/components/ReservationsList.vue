<template>
  <div>
    <v-list>
      <v-list-group v-for="res in reservations" :key="res.id" v-model="res.active" no-action>
        <template v-slot:activator>
          <v-list-tile-content>
            <v-list-tile-title>{{ res.restaurant.name }}</v-list-tile-title>
            <v-list-tile-title>{{ res.date | formatDate }}</v-list-tile-title>
          </v-list-tile-content>
        </template>

        <v-list-tile class="list-element--size">
          <v-list-tile-content>
            <v-list-tile-title>{{"People: " + res.people}}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile class="list-element--size">
          <v-list-tile-content >
            <v-list-tile-title>{{"Notes: " + res.notes}}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile>
          <v-list-tile-content>
            <v-list-tile-title>{{ res.date | formatDate2 }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile class="list-element--size">
          <v-list-tile-content>
            <v-list-tile-title>{{res.restaurant.name}}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile>
          <v-list-tile-content>
            <v-list-tile-title>{{res.restaurant.address}}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-card class="v-card--round card-style" elevation="0">
          <v-img max-height="200px" max-width="400px" :src="res.restaurant.imageUrl"></v-img>
        </v-card>
        
        <v-list-tile class="button-style">
          <v-list-tile-content>
            <v-btn flat right @click="openEditReservation(res)">Edit Reservation</v-btn>
          </v-list-tile-content>
          <v-list-tile-content>
            <v-btn flat right color="error" @click="openDeleteReservation(res)">Delete Reservation</v-btn>
          </v-list-tile-content>
        </v-list-tile>
      </v-list-group>
    </v-list>
  </div>
</template>

<script>
import ReservationPopupService from '../services/ReservationPopupService'

export default {
  name: "reservations-list",
  props: [ "reservations" ],
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
    formatDate: function (date) {
      var ret = date.toString()

      return ret.substring(5, 7) + "/" + ret.substring(8, 10) + "/" + ret.substring(0, 4)
    },

    formatDate2: function(date) {
      var ret = date.toString()

      var day = ret.substring(8, 10)
      var monthIndex = ret.substring(5, 7)
      var year = ret.substring(0, 4)
      var months = ["January", "February", "March", "April", "May", "June", 
      "July", "August", "September", "October", "November", "December"]
      var month = months[monthIndex-1]
      var hour = ret.substring(11, 13)
      var minute = ret.substring(14, 16)
      
      var retDate = month + " " + day + ", " + year + " at " + hour + ":" + minute
      return retDate
    }
  }
} 
</script>

<style>
.list-element--size {
  max-height: 100px;
  height: 25px;
}

.button-style {
  padding-top: 50px
}

.card-style {
  padding-left: 50px
}
</style>
