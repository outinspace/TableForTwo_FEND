<template>
  <v-dialog persistent v-model="state.signupVisible" max-width="600px">
    <v-card>
      <v-card-text>
        <div class="headline">Create New Account</div>
        <user-form :formData="userFormData" autofocus></user-form>
        <v-checkbox v-model="isOwner" label="I am a restaurant owner"></v-checkbox>
        <api-alerts v-if="apiError" :error="apiError"></api-alerts>
      </v-card-text>

      <v-divider></v-divider>

      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn flat @click="state.closeSignup()">Cancel</v-btn>
        <v-btn flat color="primary" @click="createUser()" :loading="loading">Create</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import UserService from '../services/UserService'
import AuthPopupService from '../services/AuthPopupService'
import UserForm from './UserForm'
import ApiAlerts from './ApiAlerts'

export default {
  name: 'signup-popup',
  components: { UserForm, ApiAlerts },
  data() {
    return {
      userFormData: AuthPopupService.formData,
      restaurantFormData: {},
      state: AuthPopupService,
      isOwner: false,
      apiError: null,
      loading: false
    }
  },
  methods: {
    async createUser() {
      this.loading = true
      this.apiError = null
      try {
        await UserService.createAndLogin(
          this.userFormData.email,
          this.userFormData.password,
          this.userFormData.firstName,
          this.userFormData.lastName,
          this.isOwner
        )
        AuthPopupService.closeSignup()
        AuthPopupService.resetFormData()
      } catch (err) {
        this.apiError = err
      }
      this.loading = false
    }
  }
}
</script>

<style>

</style>
