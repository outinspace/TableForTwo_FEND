<template>
  <div>
    <v-list>
      <v-list-group v-for="res in reservations" :key = "res.restaurant" 
      v-model="res.active" no-action>
        <template v-slot:activator>
          <v-list-tile-content>
            <v-list-tile-title>{{ res.restaurant }}</v-list-tile-title>
            <v-list-tile-title>{{ res.date }}</v-list-tile-title>
          </v-list-tile-content>
        </template>

        <v-list-tile>
          <v-list-tile-content>
            <v-list-tile-title>{{res.restaurant}}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile>
          <v-list-tile-content>
            <v-list-tile-title>{{res.address}}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile>
          <v-list-tile-content>
            <v-list-tile-title>{{res.date}}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile>
          <v-list-tile-content>
            <v-list-tile-title>{{res.imageUrl}}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile>
          <v-list-tile-content>
            <v-btn flat right color="error">Delete Reservation</v-btn>
          </v-list-tile-content>
        </v-list-tile>
      </v-list-group>
    </v-list>
  </div>
</template>

<script>
export default {
  name: "reservations-list",
  props: ["reservations"],
  data() {
    return {
      
    }
  },
  updated() {

  }
} 
</script>

<style>
</style>
