<template>
  <div>
    <v-text-field label="Email" :autofocus="autofocus" required v-model="formData.email"></v-text-field>
    <v-text-field label="Password" type="password" required v-model="formData.password"></v-text-field>
    <v-text-field label="First Name" required v-model="formData.firstName"></v-text-field>
    <v-text-field label="Last Name" required v-model="formData.lastName"></v-text-field>
  </div>
</template>

<script>
export default {
  name: 'user-form',
  props: ['formData', 'autofocus'],
  data() {
    return {}
  },
  updated() {

  }
}
</script>

<style>

</style>
