<template>
    <v-dialog v-model="state.editReservationVisible" max-width="500px">
    <v-card>
      <v-card-text>
        <div class="headline">Edit Reservation</div>
        <v-form>
            <v-date-picker no-title scrollable v-model="date">
              <v-spacer></v-spacer>
              <v-btn flat color="primary" @click="datePicker = false">Cancel</v-btn>
              <v-btn flat color="primary" @click="$refs.datePicker.save(date)">OK</v-btn>
            </v-date-picker>
            <v-flex sm12>
              <v-text-field label="People" v-model="editReservationForm.people" suffix="People" mask="###"></v-text-field>
            </v-flex>
            <v-flex sm12>
              <v-text-field label="Notes" v-model="editReservationForm.notes"></v-text-field>
            </v-flex>
        </v-form>
      </v-card-text>

      <v-divider></v-divider>

      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn flat @click="state.closeEditReservation()">Cancel</v-btn>
        <v-btn flat color="error" @click="editReservation(editForm.id)">Delete</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import PopupService from '../services/PopupService'
//import ReservationService from '../services/ReservationService'

export default {
    name: "editres-popup",
    props: ['editForm'],
    data() {
        return {
            state: PopupService,
            datePicker: false,
            date: new Date().toISOString().substr(0,10)
        }
    },

    methods: {

    }
}
</script>

<style>

</style>
