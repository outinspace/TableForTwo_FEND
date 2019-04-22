<template>
  <div>
    <v-text-field label="Name" :autofocus="autofocus" required v-model="formData.name"></v-text-field>
    <v-textarea label="Description" required v-model="formData.description"></v-textarea>
    <v-text-field label="Address" required v-model="formData.address"></v-text-field>
    <v-text-field label="Capacity" required v-model="formData.capacity" suffix="People" mask="###"></v-text-field>
    <v-text-field label="Image URL" required v-model="formData.imageUrl"></v-text-field>
    <div>
      <v-img v-if="formData.imageUrl" :max-height="300" :max-width="500" class="v-card--round" :src="formData.imageUrl"></v-img>
    </div>
  </div>
</template>

<script>
export default {
  name: 'restaurant-form',
  props: ['formData', 'autofocus']
}
</script>

<style>

</style>
