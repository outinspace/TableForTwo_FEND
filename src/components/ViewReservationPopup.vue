<template>
    <v-dialog v-model="state.viewReservationVisible" max-width="500px">
    <v-card>
      <v-card-title>
        <div class="headline">View Reservation</div>
      </v-card-title>

      <v-card-text>
        <reservation-form v-if="state.reservation" v-model="state.reservation" disabled></reservation-form>
      </v-card-text>

      <v-divider></v-divider>

      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn flat @click="state.closeViewReservation()">Close</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import ReservationPopupService from '../services/ReservationPopupService'
import ReservationForm from './ReservationForm'

export default {
    name: "view-reservation-popup",
    components: { ReservationForm },
    data() {
        return {
            state: ReservationPopupService
        }
    }
}
</script>

<style>

</style>
