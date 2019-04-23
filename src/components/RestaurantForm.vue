<template>
  <div>
    <v-text-field label="Name" :autofocus="autofocus" required v-model="formData.name" :counter="255" :rules="[rules.notBlank]"></v-text-field>
    <v-textarea label="Description" required v-model="formData.description" :counter="1500" :rules="[rules.notBlank]"></v-textarea>
    <v-text-field label="Address" required v-model="formData.address" :counter="255" :rules="[rules.notBlank]"></v-text-field>
    <v-text-field label="Capacity" required v-model="formData.capacity" suffix="People" mask="###" :rules="[rules.greaterThanZero]"></v-text-field>
    <v-text-field label="Image URL" required v-model="formData.imageUrl" :counter="255" :rules="[rules.notBlank]"></v-text-field>
    <div>
      <v-img v-if="formData.imageUrl" :max-height="300" :max-width="500" class="v-card--round" :src="formData.imageUrl"></v-img>
    </div>
  </div>
</template>

<script>
export default {
  name: 'restaurant-form',
  props: ['formData', 'autofocus'],
  data() {
    return {
      rules: {
        notBlank: v => v == null || !!v.replace(' ', '') || "Cannot be blank",
        greaterThanZero: v => (v > 0 && v <= 999) || "Must be between 1 and 999",
      }
    }
  }
}
</script>

<style>

</style>
