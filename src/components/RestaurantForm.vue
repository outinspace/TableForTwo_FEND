<template>
  <div>
    <v-text-field label="Name" autofocus required v-model="formData.name"></v-text-field>
    <v-text-field label="Description" required v-model="formData.description"></v-text-field>
    <v-text-field label="Address" required v-model="formData.address"></v-text-field>
    <v-text-field label="Capacity" required v-model="formData.capacity"></v-text-field>
  </div>
</template>

<script>
export default {
  name: 'restaurant-form',
  props: ['formData'],
  data() {
    return {}
  },
  updated() {

  }
}
</script>

<style>

</style>
