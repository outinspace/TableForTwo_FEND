<template>
  <div>
    <v-flex xs12>
      <v-text-field label="Restaurant Name" autofocus required v-model="formData.name"></v-text-field>
    </v-flex>
    <v-flex xs12>
      <v-text-field label="Description" required v-model="formData.description"></v-text-field>
    </v-flex>
    <v-flex xs12>
      <v-text-field label="Address" required v-model="formData.address"></v-text-field>
    </v-flex>
    <v-flex xs12>
      <v-text-field label="Capacity" required v-model="formData.capacity"></v-text-field>
    </v-flex>
    <v-flex xs12>
      <v-text-field label="Image URL" required v-model="formData.imageUrl"></v-text-field>
    </v-flex>
  </div>
</template>

<script>
export default {
  name: 'restaurant-form',
  props: ['formData'],
  data() {
    return {
      
    }
  }
}
</script>

<style>

</style>
