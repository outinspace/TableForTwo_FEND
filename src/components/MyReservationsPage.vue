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
                  <reservations-list></reservations-list>
                </v-flex>
              </v-layout>
            </div>
            <div>
              <v-btn top>Create new reservation</v-btn>
            </div>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import ReservationService from '../services/ReservationService'
import ReservationsList from './ReservationsList'

export default {
  name: 'my-reservations-page',
  components: { ReservationsList },

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
