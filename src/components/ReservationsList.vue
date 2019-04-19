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
          <v-card class="v-card--round" elevation="0">
            <v-img height="200px" width="400px" :src="res.restaurant.imageUrl"></v-img>
          </v-card>
        </v-list-tile>
        <v-list-tile>
          <v-list-tile-content>
            <v-list-tile-title>{{res.restaurant.address}}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        
        <v-list-tile class="button-style">
          <v-list-tile-content>
            <v-btn flat right @click="openEditReservation()">Edit Reservation</v-btn>
          </v-list-tile-content>
          <v-list-tile-content>
            <v-btn flat right color="error" @click="openDeleteReservation()">Delete Reservation</v-btn>
          </v-list-tile-content>
        </v-list-tile>
        <delete-popup :deleteForm="res"></delete-popup>
      </v-list-group>
    </v-list>
  </div>
</template>

<script>
import PopupService from '../services/PopupService'
import DeletePopup from './DeleteReservationPopup'


export default {
  name: "reservations-list",
  props: [ "reservations" ],
  components: { DeletePopup },
  data() {
    return {
      
    }
  },
  updated() {

  },

  methods: {
    openDeleteReservation() {
      PopupService.openDeleteReservation()
    },

    openEditReservation() {
      PopupService.openEditReservation()
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
      
      var retDate = month + " " + day + ", " + year
      return retDate
    }
  }


  // formatTime: function(date) {
  //   var ret = date.toString()
  // }
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
</style>
