<template>
  <v-dialog persistent v-model="state.signupVisible" max-width="600px">
    <v-card>
      <v-card-text>
        <div class="headline">Create New Account</div>
        <user-form :formData="formData"></user-form>
      </v-card-text>

      <v-divider></v-divider>

      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn flat @click="state.closeSignup()">Cancel</v-btn>
        <v-btn flat color="primary" @click="createUser()">Create</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import UserService from '../services/UserService'
import PopupService from '../services/PopupService'
import UserForm from './UserForm'

export default {
  name: 'signup-popup',
  components: { UserForm },
  data() {
    return {
      formData: PopupService.formData,
      state: PopupService
    }
  },
  methods: {
    async createUser() {
      await UserService.createAndLogin(
        this.formData.email,
        this.formData.password,
        this.formData.firstName,
        this.formData.lastName
        )
      PopupService.closeSignup()
      PopupService.resetFormData()
    }
  }
}
</script>

<style>

</style>
