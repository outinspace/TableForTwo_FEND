<template>
    <v-dialog v-model="state.deleteReservationVisible" max-width="500px">
    <v-card>
      <v-card-text>
        <div class="headline">Are you sure you would like to delete the following reservation?</div>
        <v-form>
            <v-flex sm12>
              <v-text-field label="Restaurant" readonly v-model="state.reservation.restaurant.name"></v-text-field>
            </v-flex>
            <v-flex sm12>
              <v-text-field label="Date" readonly v-model="state.reservation.date"></v-text-field>
            </v-flex>
            <v-flex sm12>
              <v-text-field label="People" readonly v-model="state.reservation.people"></v-text-field>
            </v-flex>
            <v-flex sm12>
              <v-text-field label="Notes" readonly v-model="state.reservation.notes"></v-text-field>
            </v-flex>
        </v-form>
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

export default {
    name: "delete-popup",
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
