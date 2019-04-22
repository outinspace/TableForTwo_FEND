<template>
    <v-dialog v-model="state.deleteReservationVisible" max-width="500px">
    <v-card>
      <v-card-title>
        <div class="headline">Delete Reservation</div>
        <div class="subheading">Are you sure you would like to delete the following reservation?</div>
      </v-card-title>

      <v-card-text>
        <reservation-form v-if="state.reservation" v-model="state.reservation" disabled></reservation-form>
      </v-card-text>

      <v-divider></v-divider>

      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn flat @click="state.closeDeleteReservation()">Cancel</v-btn>
        <v-btn flat color="error" @click="deleteReservation(state.reservation.id)">Delete</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import ReservationService from '../services/ReservationService'
import ReservationPopupService from '../services/ReservationPopupService'
import ReservationForm from './ReservationForm'

export default {
    name: "delete-reservation-popup",
    components: { ReservationForm },
    data() {
        return {
            state: ReservationPopupService,
            apiError: null
        }
    },

    methods: {
      deleteReservation(id) {
        ReservationService.deleteReservation(id)
        ReservationPopupService.closeDeleteReservation()
      }
    }
}
</script>

<style>

</style>
