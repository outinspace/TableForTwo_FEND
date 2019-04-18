<template>
  <v-dialog v-model="state.visible" max-width="500px">
    <v-card v-if="state.restaurant">
      <v-img height="200px" :src="state.restaurant.imageUrl"></v-img>
      <v-card-title primary-title>
        <div class="headline">{{state.restaurant.name}}</div>
      </v-card-title>
      <v-card-text>
        <div>{{state.restaurant.description}}</div>
        <v-divider class="my-3"></v-divider>

        <gmap-autocomplete
          @place_changed="setPlace">
        </gmap-autocomplete>
        <gmap-map
          :center="center"
          :zoom="12"
          style="width:100%;  height: 400px;"
        >
          <gmap-marker
            :key="index"
            v-for="(m, index) in markers"
            :position="m.position"
            @click="center=m.position"
          ></gmap-marker>
        </gmap-map>

      </v-card-text>

      <v-divider></v-divider>
      
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn flat @click="state.close()">Close</v-btn>
        <v-btn flat color="primary" @click="login()">Reserve</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import RestaurantPopupService from '../services/RestaurantPopupService'
import { gmapApi } from 'vue2-google-maps'
// import ApiAlerts from './ApiAlerts'

export default {
  name: 'restaurant-popup',
  // components: { ApiAlerts },
  data() {
    return {
      state: RestaurantPopupService,
      center: { lat: 45.508, lng: -73.587 },
      markers: [],
      places: [],
      currentPlace: null,
      gmapApi: null
    }
  },
  mounted() {
    this.geolocate();
    this.gmapApi = gmapApi().maps.places
  },
  methods: {
    // receives a place object via the autocomplete component
    setPlace(place) {
      this.currentPlace = place;
    },
    addMarker() {
      if (this.currentPlace) {
        const marker = {
          lat: this.currentPlace.geometry.location.lat(),
          lng: this.currentPlace.geometry.location.lng()
        };
        this.markers.push({ position: marker });
        this.places.push(this.currentPlace);
        this.center = marker;
        this.currentPlace = null;
      }
    },
    geolocate: function() {
      navigator.geolocation.getCurrentPosition(position => {
        this.center = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };
      });
    }
  }
}
</script>

<style>

</style>
