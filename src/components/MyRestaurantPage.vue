<template>
  <v-container fill-height>
    <v-layout row wrap>
      <v-flex>
        <div class="display-1 mb-4">My Restaurant</div>
        <v-alert v-if="state.currentUser && !state.currentUser.restaurant.published" :value="true" type="warning" outline>
          Your restaurant is not visible to customers. Go to <router-link :to="{'name': 'my-account'}">your account</router-link> page to publish it.
        </v-alert>

        <api-alerts v-if="apiError" :error="apiError"></api-alerts>

        <restaurant-reservations-list 
          :reservations="todaysReservations"
          :loading="loading"
          title="Today's Reservations"
          :checkbox="true"
          @checkbox="saveReservationState"
          @view="viewReservation"
          @delete="deleteReservation"
        ></restaurant-reservations-list>  

        <restaurant-reservations-list
          :reservations="upcomingReservations"
          :loading="loading"
          title="Upcoming Reservations"
          @view="viewReservation"
          @delete="deleteReservation"
        ></restaurant-reservations-list>  

        <restaurant-reservations-list
          :reservations="pastReservations"
          :loading="loading"
          title="Past Reservations"
          @view="viewReservation"
          @delete="deleteReservation"
        ></restaurant-reservations-list>  
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import AuthService from '../services/AuthService'
import RestaurantService from '../services/RestaurantService'
import RestaurantReservationsList from './RestaurantReservationsList'
import moment from 'moment'
import ApiAlerts from './ApiAlerts'
import ReservationService from '../services/ReservationService'
import ReservationPopupService from '../services/ReservationPopupService'

export default {
  name: 'my-restaurant-page',
  components: { RestaurantReservationsList, ApiAlerts },
  data() {
    return {
      loading: false,
      apiError: null,
      allReservations: [],
      todaysReservations: [],
      upcomingReservations: [],
      pastReservations: [],
      state: AuthService
    }
  },
  async created() {
    await AuthService.hydratePromise
    await this.fetchReservations()
  },
  methods: {
    async fetchReservations() {
      this.loading = true
      this.apiError = null
      try {
        this.allReservations = await RestaurantService.getReservations()
      } catch (err) {
        this.apiError = err
      }
      this.loading = false
      this.divideReservationsByTime()
    },

    divideReservationsByTime() {
      this.todaysReservations = this.allReservations.filter(r => 
        moment(r.date).isBetween(moment().startOf('day'), moment().endOf('day'))
      )
      this.upcomingReservations = this.allReservations.filter(r => 
        moment(r.date).isAfter(moment().endOf('day'))
      )
      this.pastReservations = this.allReservations.filter(r =>
        moment(r.date).isBefore(moment().startOf('day'))
      )
    },

    async saveReservationState(completed, id) {
      /* eslint-disable */
      console.log(completed, id)
      let updatedReservation = await ReservationService.markCompleted(completed, id)
      let indexToChange = this.allReservations.findIndex(r => r.id == id)
      this.allReservations[indexToChange] = updatedReservation
      this.divideReservationsByTime()
    },

    viewReservation(id) {
      let reservation = this.allReservations.find(r => r.id == id)
      ReservationPopupService.openViewReservation(reservation)
    },

    deleteReservation(id) {
      let reservation = this.allReservations.find(r => r.id == id)
      ReservationPopupService.openDeleteReservation(reservation)
    }
  }
}
</script>

<style scoped>

</style>
