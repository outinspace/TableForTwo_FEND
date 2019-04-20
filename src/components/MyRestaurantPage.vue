<template>
  <v-container fill-height>
    <v-layout row wrap>
      <v-flex>
        <div class="display-1 mb-5">My Restaurant</div>

        <v-card flat class="v-card--round my-3">
          <v-card-text>
            <div>
              <h3 class="headline">Reservation details</h3>
              <p>View Reservations</p>
              <v-layout>
                <v-flex xs-12 sm-6>
                <reservations-list-for-restaurant :reservations="this.reservations"></reservations-list-for-restaurant>  
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
import ReservationService from '../services/ReservationService'
import ReservationsListForRestaurant from './ReservationsListForRestaurant'

export default {
  name: 'my-restaurant-page',
  components: { ReservationsListForRestaurant },
  data() {
    return {
      reservations: []
    }
  },
  async created() {
    this.reservations = await ReservationService.getMy()
  }
}
</script>

<style scoped>

</style>
