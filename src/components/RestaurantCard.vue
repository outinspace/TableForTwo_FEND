<template>
  <v-card  hover class="v-card--round">
    <v-img height="200px" :src="restaurant.imageUrl"></v-img>
    <v-card-title>
        <h4 class="headline">{{restaurant.name}}</h4>
        <v-spacer></v-spacer>
        <v-btn round flat>
          <v-icon>date_range</v-icon>
          Reserve
        </v-btn>
    </v-card-title>
  </v-card>
</template>

<script>
export default {
  name: 'restaurant-card',
  props: ['restaurant']
}
</script>

<style>

</style>
