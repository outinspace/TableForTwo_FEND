<template>
  <v-dialog persistent v-model="state.loginVisible" max-width="500px">
    <v-card>
      <v-card-text>
        <div class="headline">Login</div>
        <v-form>
            <v-flex sm12>
              <v-text-field label="Email" autofocus required v-model="formData.email"></v-text-field>
            </v-flex>
            <v-flex sm12>
              <v-text-field label="Password" type="password" required v-model="formData.password" @keypress.enter="login()"></v-text-field>
            </v-flex>
        </v-form>
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
