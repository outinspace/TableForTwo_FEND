<template>
  <v-dialog persistent v-model="state.signupVisible" max-width="600px">
    <v-card>
      <v-card-text>
        <div class="headline">Create New Account</div>
        <user-form :formData="userFormData" autofocus></user-form>
        <v-checkbox v-model="isOwner" label="I am a restaurant owner"></v-checkbox>
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
      userFormData: PopupService.formData,
      restaurantFormData: {},
      state: PopupService,
      isOwner: false
    }
  },
  methods: {
    async createUser() {
      await UserService.createAndLogin(
        this.userFormData.email,
        this.userFormData.password,
        this.userFormData.firstName,
        this.userFormData.lastName,
        this.isOwner
        )
      PopupService.closeSignup()
      PopupService.resetFormData()
    }
  }
}
</script>

<style>

</style>
