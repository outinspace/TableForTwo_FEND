<template>
  <v-dialog v-model="state.signupVisible" max-width="600px">
    <v-card>
      <v-card-title>
        <span class="headline">Create New Account</span>
      </v-card-title>
      <v-card-text>
        <v-container grid-list-md>
          <v-layout wrap>
            <v-flex sm12>
              <v-text-field label="Email" required v-model="formData.email"></v-text-field>
            </v-flex>
            <v-flex sm12>
              <v-text-field label="Password" type="password" required v-model="formData.password"></v-text-field>
            </v-flex>
            <v-flex sm12>
              <v-text-field label="First Name" required v-model="formData.firstName"></v-text-field>
            </v-flex>
            <v-flex sm12>
              <v-text-field label="Last Name" required v-model="formData.lastName"></v-text-field>
            </v-flex>
          </v-layout>
        </v-container>
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

export default {
  name: 'signup-popup',
  data() {
    return {
      formData: {
        email: '',
        password: '',
        firstName: '',
        lastName: ''
      },
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
    }
  }
}
</script>

<style>

</style>
