<template>
  <v-form v-model="formValid">
    <v-flex xs12>
      <v-text-field label="Email" required v-model="formData.email"></v-text-field>
    </v-flex>
    <v-flex xs12>
      <v-text-field label="Password" type="password" required v-model="formData.password"></v-text-field>
    </v-flex>
    <v-flex xs12>
      <v-text-field label="First Name" required v-model="formData.firstName"></v-text-field>
    </v-flex>
    <v-flex xs12>
      <v-text-field label="Last Name" required v-model="formData.lastName" @keypress.enter="$emit('keypress.enter')"></v-text-field>
    </v-flex>
  </v-form>
</template>

<script>
export default {
  name: 'user-form',
  props: ['formData', 'formValid']
}
</script>

<style>

</style>
