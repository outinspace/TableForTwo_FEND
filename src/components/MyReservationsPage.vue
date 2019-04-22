<template>
  <v-container fill-height>
    <v-layout row wrap>
      <v-flex>
        <div class="display-1 mb-5">My Reservations</div>

        <v-card flat class="v-card--round my-3">
          <v-card-text>
            <div>
              <h3 class="headline">Current Reservations</h3>
              <p>View or cancel existing reservations</p>
              <v-layout>
                <v-flex xs-12 sm-6>
                  <reservations-list :reservations="reservations"></reservations-list>
                </v-flex>
              </v-layout>
            </div>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>

    <delete-reservation-popup></delete-reservation-popup>
    <edit-reservation-popup></edit-reservation-popup>

  </v-container>
</template>

<script>
import ReservationService from '../services/ReservationService'
import ReservationsList from './ReservationsList'
import DeleteReservationPopup from './DeleteReservationPopup'
import EditReservationPopup from './EditReservationPopup'
import AuthService from '../services/AuthService';

export default {
  name: 'my-reservations-page',
  components: { ReservationsList, DeleteReservationPopup, EditReservationPopup },

  data() {
    return {
      reservations: []
    }
  },
  async created() {
    await AuthService.hydratePromise
    this.reservations = await ReservationService.getMy()
  }
}
</script>

<style scoped>

</style>
