<template>
  <v-dialog v-model="state.visible" max-width="500px">
    <v-card v-if="state.restaurant">
      <v-img height="200px" :src="state.restaurant.imageUrl"></v-img>
      
      <v-card-title primary-title>
        <div class="headline">{{state.restaurant.name}}</div>
      </v-card-title>

      <v-card-text v-if="modeIsViewing">
        <div :class="{'paragraph--truncated': !descriptionExpanded}">
          {{state.restaurant.description}}
          <div v-if="!descriptionExpanded" class="truncate-paragraph">
            <div class="truncate-paragraph-cover"></div>
            <div class="truncate-paragraph-button subheading" @click="descriptionExpanded = true">Read More</div>
          </div>
        </div>

        <v-divider class="my-3"></v-divider>

        <restaurant-map :address="state.restaurant.address"></restaurant-map>
      </v-card-text>

      <v-card-text v-else>
        <reservation-form :formData="reservationForm"></reservation-form>
        <api-alerts v-if="apiError" :error="apiError"></api-alerts>
      </v-card-text>

      <v-divider></v-divider>
      
      <v-card-actions v-if="modeIsViewing">
        <v-spacer></v-spacer>
        <v-btn flat @click="state.close()">Close</v-btn>
        <v-btn v-if="authService.currentUser" flat color="primary" @click="modeIsViewing = false">Reserve</v-btn>
        <v-btn v-else flat color="primary" @click="openSignInPopup">Sign In</v-btn>
      </v-card-actions>
      <v-card-actions v-else>
        <v-spacer></v-spacer>
        <v-btn flat @click="modeIsViewing = true">Cancel</v-btn>
        <v-btn flat color="primary" @click="submitReservation" :loading="loading">Submit</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import AuthPopupService from '../services/AuthPopupService'
import RestaurantPopupService from '../services/RestaurantPopupService'
import ReservationService from '../services/ReservationService'
import AuthService from '../services/AuthService'
import ReservationForm from './ReservationForm'
import ApiAlerts from './ApiAlerts'
import RestaurantMap from './RestaurantMap'

export default {
  name: 'restaurant-popup',
  components: { ReservationForm, ApiAlerts, RestaurantMap },
  data() {
    return {
      state: RestaurantPopupService,
      authService: AuthService,
      modeIsViewing: true,
      descriptionExpanded: false,
      loading: false,
      reservationForm: {
        people: 2,
        date: new Date().toISOString().substr(0,10),
        time: '',
        notes: ''
      },
      apiError: null
    }
  },
  methods: {
    async submitReservation() {
      try {
        this.loading = true
        this.apiError = null
        await ReservationService.createReservation(
          this.state.restaurant.id,
          this.reservationForm.people,
          this.reservationForm.date,
          this.reservationForm.time,
          this.reservationForm.notes
        )
      } catch (err) {
        this.apiError = err
      }
      this.loading = false
    },

    openSignInPopup() {
      RestaurantPopupService.close()
      AuthPopupService.openWithCloseCallback(() => RestaurantPopupService.open())
    }
  }
}
</script>

<style>
.paragraph--truncated {
  overflow: hidden;
  max-height: 200px;
  position: relative;
}

.truncate-paragraph {
  position: absolute;
  width: 100%;
  bottom: 0;
}

.truncate-paragraph-cover {
  max-height: 50px;
  height: 50px;
  background-image: linear-gradient(rgba(255, 255, 255, 0), white);
}

.truncate-paragraph-button {
  text-align: center;
  background-color: white;
  cursor: pointer;
  text-decoration-line: underline;
}
</style>
