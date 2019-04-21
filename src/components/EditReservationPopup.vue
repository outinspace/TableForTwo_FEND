<template>
    <v-dialog v-model="state.editReservationVisible" max-width="500px">
    <v-card>
      <v-card-text>
        <div class="headline">Edit Reservation</div>
        <reservation-form :formData="state.formData"></reservation-form>
        <!-- <v-form>
            <v-menu ref="datePicker" v-model="datePicker" :close-on-content-click="false" 
            :nudge-right="40" :return-value.sync="state.reservation.date" lazy transition="scale-transition" offset-y full-widith min-width="290px">
              <template v-slot:activator="{on}">
                <v-text-field v-model="state.reservation.date" label="Date of Reservation" prepend-icon="event" readonly v-on="on"></v-text-field>
              </template>
              <v-date-picker no-title scrollable v-model="state.reservation.date">
                <v-spacer></v-spacer>
                <v-btn flat color="primary" @click="datePicker = false">Cancel</v-btn>
                <v-btn flat color="primary" @click="$refs.datePicker.save(state.reservation.date)">OK</v-btn>
              </v-date-picker>
          </v-menu>
            <v-flex sm12>
              <v-text-field label="People" v-model="state.reservation.people" suffix="People" mask="###"></v-text-field>
            </v-flex>
            <v-flex sm12>
              <v-text-field label="Notes" v-model="state.reservation.notes"></v-text-field>
            </v-flex>
        </v-form> -->
      </v-card-text>

      <v-divider></v-divider>

      <v-card-actions>
        <v-spacer></v-spacer>
        <api-alerts v-if="updateReservationError" :error="updateReservationError"></api-alerts>
        <v-btn flat @click="state.closeEditReservation()">Cancel</v-btn>
        <v-btn flat @click="editReservation()" :loading="updateReservationLoading">Save</v-btn>
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
    name: "edit-popup",
    components: { ApiAlerts, ReservationForm },
    data() {
        return {
            state: ReservationPopupService,
            updateReservationLoading: false,
            updateReservationError: null
        }
    },

    methods: {
      async editReservation() {
        this.updateReservationLoading = true
        this.updateReservationError = null
        try {
           await ReservationService.editReservation(this.state.reservation.id, this.state.formData)
         } catch (err) {
           this.userProfileError = err
         }
         this.updateReservationLoading = false
         this.state.closeEditReservation()
      }
    }
}
</script>

<style>

</style>
