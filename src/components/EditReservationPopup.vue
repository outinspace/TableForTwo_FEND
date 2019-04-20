<template>
    <v-dialog v-model="state.editReservationVisible" max-width="500px">
    <v-card>
      <v-card-text>
        <div class="headline">Edit Reservation</div>
        <v-form>
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
        </v-form>
      </v-card-text>

      <v-divider></v-divider>

      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn flat @click="state.closeEditReservation()">Cancel</v-btn>
        <v-btn flat color="error">Edit</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import ReservationPopupService from '../services/ReservationPopupService'
//import ReservationService from '../services/ReservationService'

export default {
    name: "edit-popup",
    data() {
        return {
            state: ReservationPopupService,
            datePicker: false
        }
    },

    methods: {

    }
}
</script>

<style>

</style>
