<template>
  <v-dialog v-model="state.loginVisible" max-width="600px">
    <v-card>
      <v-card-title>
        <span class="headline">Login</span>
      </v-card-title>
      <v-card-text>
        <v-container grid-list-md>
          <v-layout wrap>
            <v-flex sm12>
              <v-text-field label="Email" required v-model="formData.email"></v-text-field>
            </v-flex>
            <v-flex sm12>
              <v-text-field label="Password" type="password" required v-model="formData.password" @keypress.enter="login()"></v-text-field>
            </v-flex>
          </v-layout>
        </v-container>
      </v-card-text>

      <v-divider></v-divider>
      
      <v-card-actions>
        <v-btn flat color="primary" @click="openCreatePopup()">Create New Account</v-btn>
        <v-spacer></v-spacer>
        <v-btn flat @click="state.closeLogin()">Cancel</v-btn>
        <v-btn flat color="primary" @click="login()">Login</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import AuthService from '../services/AuthService'
import PopupService from '../services/PopupService'

export default {
  name: 'login-popup',
  data() {
    return {
      formData: PopupService.formData,
      state: PopupService
    }
  },
  methods: {
    async login() {
      this.loginResponse = await AuthService.login(
        this.formData.email, 
        this.formData.password
      )
      PopupService.closeLogin()
      PopupService.resetFormData()
    },

    openCreatePopup() {
      PopupService.closeLogin()
      PopupService.openSignup()
    }
  }
}
</script>

<style>

</style>
