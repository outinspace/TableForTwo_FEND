<template>
  <v-container fill-height>
    <v-layout row wrap>
      <v-flex>
        <div class="display-1 mb-4">My Restaurant</div>
        <v-alert v-if="state.currentUser && !state.currentUser.restaurant.published" :value="true" type="warning" outline>
          Your restaurant is not visible to customers. Go to <router-link :to="{'name': 'my-account'}">your account</router-link> page to publish it.
        </v-alert>

        <v-card flat class="v-card--round my-3">
          <v-card-text>
            <div>
              <h3 class="headline">Upcoming Reservations</h3>
              <v-layout>
                <v-flex xs-12 sm-6>
                <reservations-list-for-restaurant :reservations="reservations"></reservations-list-for-restaurant>  
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
import AuthService from '../services/AuthService'
import RestaurantService from '../services/RestaurantService'
import ReservationsListForRestaurant from './ReservationsListForRestaurant'

export default {
  name: 'my-restaurant-page',
  components: { ReservationsListForRestaurant },
  data() {
    return {
      reservations: [],
      state: AuthService
    }
  },
  async created() {
    await AuthService.hydratePromise
    this.reservations = await RestaurantService.getReservations()
    //this.fetchAllReservations()
  },
  //methods: {
    //async fetchAllReservations() {
      //this.allreservations = await RestaurantService.getReservations()
      //this.reservations = this.allreservations
    //},
  //}

}
</script>

<style scoped>

</style>
