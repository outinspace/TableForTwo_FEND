<template>
  <div>
    <v-expansion-panel
        v-model="panel"
        expand
      >
        <v-expansion-panel-content
          v-for="(item,i) in items"
          :key="i"
        >
          <template v-slot:header>
            <div>Restaurant of Reservation</div>
            <div>Date of Reservation</div>
          </template>
          <v-card>
            <v-card-text>Restaurant Name</v-card-text>
            <v-card-text>Restaurant Address</v-card-text>
            <v-card-text>Date and Time of Reservations</v-card-text>
            <v-card-text>Restaurant Image</v-card-text>
            <v-card-text><v-btn flat color="error">Delete Reservation</v-btn></v-card-text>
          </v-card>
        </v-expansion-panel-content>
      </v-expansion-panel>
  </div>
</template>

<script>
export default {
  name: "reservations-list",
  data() {
    return {
        panel: [],
        items: 5
    }
  },
  updated() {

  },
    methods: {
        all() {
            //eslint-disable-next-line
            this.panel = [...Array(this.items).keys()].map(_ => true)
        },
        none() {
            this.panel = []
        }
    }
} 
</script>

<style>
</style>
