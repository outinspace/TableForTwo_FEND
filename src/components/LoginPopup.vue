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
            <api-alerts v-if="apiError" :error="apiError"></api-alerts>
        </v-form>
      </v-card-text>

      <v-divider></v-divider>
      
      <v-card-actions>
        <v-btn flat color="primary" @click="openCreatePopup()">Create New Account</v-btn>
        <v-spacer></v-spacer>
        <v-btn flat @click="state.closeLogin()">Cancel</v-btn>
        <v-btn flat color="primary" @click="login()" :loading="loading">Login</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import AuthService from '../services/AuthService'
import PopupService from '../services/PopupService'
import ApiAlerts from './ApiAlerts'

export default {
  name: 'login-popup',
  components: { ApiAlerts },
  data() {
    return {
      formData: PopupService.formData,
      state: PopupService,
      apiError: null,
      loading: false
    }
  },
  methods: {
    async login() {
      this.apiError = null
      this.loading = true
      try {
        this.loginResponse = await AuthService.login(
          this.formData.email, 
          this.formData.password
        )
        PopupService.closeLogin()
        PopupService.resetFormData()
      } catch (err) {
        this.apiError = err
      }
      this.loading = false
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
