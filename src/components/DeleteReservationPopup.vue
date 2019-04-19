<template>
    <v-dialog v-model="state.deleteReservationVisible" max-width="500px">
    <v-card>
      <v-card-text>
        <div class="headline">Are you sure you would like to delete the following reservation?</div>
        <v-form>
            <v-flex sm12>
              <v-text-field label="Restaurant" disabled v-model="deleteForm.restaurant.name"></v-text-field>
            </v-flex>
            <v-flex sm12>
              <v-text-field label="Date" disabled v-model="deleteForm.date"></v-text-field>
            </v-flex>
            <v-flex sm12>
              <v-text-field label="People" disabled v-model="deleteForm.people"></v-text-field>
            </v-flex>
            <v-flex sm12>
              <v-text-field label="Notes" disabled v-model="deleteForm.notes"></v-text-field>
            </v-flex>
        </v-form>
      </v-card-text>

      <v-divider></v-divider>

      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn flat @click="state.closeDeleteReservation()">Cancel</v-btn>
        <v-btn flat color="error" @click="deleteReservation(deleteForm.id)">Delete</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import PopupService from '../services/AuthPopupService'
import ReservationService from '../services/ReservationService'

export default {
    name: "delete-popup",
    props: ['deleteForm'],
    data() {
        return {
            state: PopupService,
            apiError: null
        }
    },

    methods: {
      deleteReservation(id) {
        ReservationService.deleteReservation(id)
        PopupService.closeDeleteReservation()
      }
    }
}
</script>

<style>

</style>
