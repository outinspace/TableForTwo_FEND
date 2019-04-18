<template>
  <v-container fill-height>
    <v-layout row wrap>
      <v-flex>
        <div class="display-1 mb-5">My Restaurant</div>

        <v-card flat class="v-card--round my-3">
          <v-card-text>
            <div>
              <h3 class="headline">Restaurant Information</h3>
              
              <v-layout>
                <v-flex xs-12 sm-6>
                  
                </v-flex>
                <v-flex xs-12 sm-6></v-flex>
              </v-layout>
            </div>
            </v-card-text>
        </v-card>   
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>

export default {
  name: 'my-restaurant-page',
  //components: { ViewReservation },
  data() {
    return {
      
    }
  },
  async created() {
    
  }
}
</script>

<style scoped>

</style>
