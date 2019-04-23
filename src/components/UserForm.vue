<template>
  <div>
    <v-text-field label="Email" :autofocus="autofocus" required v-model="formData.email" :rules="[rules.email]"></v-text-field>
    <v-text-field label="Password (At least 8 characters)" type="password" v-model="formData.password" :rules="[rules.passwordLength]"></v-text-field>
    <v-text-field label="First Name" required v-model="formData.firstName" :rules="[rules.notBlank]"></v-text-field>
    <v-text-field label="Last Name" required v-model="formData.lastName" :rules="[rules.notBlank]"></v-text-field>
  </div>
</template>

<script>
export default {
  name: 'user-form',
  props: ['formData', 'autofocus'],
  data() {
    return {
      rules: {
        email: v => /.+@.+/.test(v) || "Must enter a valid email address",
        notBlank: v => v == null || !!v.replace(' ', '') || "Cannot be blank",
        passwordLength: v => v == null || v.length >= 8 || "Must be at least 8 characters"
      }
    }
  }
}
</script>

<style>

</style>
