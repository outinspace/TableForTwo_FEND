<template>
    <v-dialog v-model="state.editReservationVisible" max-width="500px">
    <v-card>
      <v-card-text>
        <div class="headline">Edit Reservation</div>
        <reservation-form v-if="state.reservation" v-model="state.formData"></reservation-form>
        <api-alerts v-if="apiError" :error="apiError"></api-alerts>
      </v-card-text>

      <v-divider></v-divider>

      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn flat @click="state.closeEditReservation()">Cancel</v-btn>
        <v-btn flat @click="editReservation()" :loading="loading">Save</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import ReservationPopupService from '../services/ReservationPopupService'
import ReservationService from '../services/ReservationService'
import ApiAlerts from './ApiAlerts'
import ReservationForm from './ReservationForm'

export default {
    name: "edit-reservation-popup",
    components: { ApiAlerts, ReservationForm },
    data() {
        return {
            state: ReservationPopupService,
            loading: false,
            apiError: null
        }
    },

    methods: {
      async editReservation() {
        this.loading = true
        this.apiError = null
        try {
           await ReservationService.editReservation(this.state.reservation.id, this.state.formData)
           this.state.closeEditReservation()
           this.$emit('updated', true)
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
