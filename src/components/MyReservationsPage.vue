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
                  <reservations-list :reservations="reservationsData"></reservations-list>
                </v-flex>
              </v-layout>
            </div>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import ReservationsList from './ReservationsList'
import AuthService from '../services/AuthService'
import ReservationService from '../services/ReservationService'

export default {
  name: 'my-reservations-page',
  components: { ReservationsList },

  data() {
    return {
      reservationData: {}
      
    }
  },
  async created() {
    await AuthService.hydratePromise
    if (AuthService.currentUser) {
      this.reservationData = {
        ...ReservationService.getReservations()
      } 
    } else {
      this.$router.push({name: 'landing'})
    }
  }
}
</script>

<style scoped>

</style>
