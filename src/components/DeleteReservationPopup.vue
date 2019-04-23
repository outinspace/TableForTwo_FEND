<template>
    <v-dialog v-model="state.deleteReservationVisible" max-width="500px">
    <v-card>
      <v-card-title>
        <div class="headline">Delete Reservation</div>
        <div class="subheading">Are you sure you would like to delete the following reservation?</div>
      </v-card-title>

      <v-card-text>
        <reservation-form v-if="state.reservation" v-model="state.reservation" disabled></reservation-form>
        <api-alerts v-if="apiError" :error="apiError"></api-alerts>
      </v-card-text>

      <v-divider></v-divider>

      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn flat @click="state.closeDeleteReservation()">Cancel</v-btn>
        <v-btn flat color="error" @click="deleteReservation(state.reservation.id)" :loading="loading">Delete</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import ReservationService from '../services/ReservationService'
import ReservationPopupService from '../services/ReservationPopupService'
import ReservationForm from './ReservationForm'
import ApiAlerts from './ApiAlerts'

export default {
  name: "delete-reservation-popup",
  components: { ReservationForm, ApiAlerts },
  data() {
    return {
      state: ReservationPopupService,
      apiError: null,
      loading: false
    }
  },

  methods: {
    deleteReservation(id) {
      this.apiError = null
      this.loading = true
      try {
        ReservationService.deleteReservation(id)
        ReservationPopupService.closeDeleteReservation()
        this.$emit('deleted', true)
      } catch (err) {
        this.apiError = err
      }
      this.loading = false
    }
  }
}
</script>

<style>

</style>
