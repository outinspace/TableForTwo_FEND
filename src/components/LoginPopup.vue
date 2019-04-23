<template>
  <v-dialog persistent v-model="state.visible" max-width="500px">
    <v-card>
      <v-card-text v-if="isLoginMode">
        <div class="headline">Login</div>
        <v-form v-model="loginFormValid">
            <v-flex sm12>
              <v-text-field label="Email" autofocus required v-model="formData.email" :rules="[rules.email]"></v-text-field>
            </v-flex>
            <v-flex sm12>
              <v-text-field label="Password" type="password" required v-model="formData.password" @keypress.enter="login()" :rules="[rules.notBlank]"></v-text-field>
            </v-flex>
            <api-alerts v-if="apiError" :error="apiError"></api-alerts>
        </v-form>
      </v-card-text>

      <v-card-text v-else>
        <div class="headline">Create New Account</div>
        <user-form :formData="formData" autofocus></user-form>
        <v-checkbox v-model="isOwner" label="I am a restaurant owner"></v-checkbox>
        <api-alerts v-if="apiError" :error="apiError"></api-alerts>
      </v-card-text>

      <v-divider></v-divider>
      
      <v-card-actions v-if="isLoginMode">
        <v-btn flat color="primary" @click="switchMode()">Sign Up</v-btn>
        <v-spacer></v-spacer>
        <v-btn flat @click="closePopup()">Close</v-btn>
        <v-btn flat color="primary" @click="login()" :loading="loading" :disabled="!loginFormValid">Log In</v-btn>
      </v-card-actions>

      <v-card-actions v-else>
        <v-spacer></v-spacer>
        <v-btn flat @click="switchMode()">Back</v-btn>
        <v-btn flat color="primary" @click="createUser()" :loading="loading">Create</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import AuthService from '../services/AuthService'
import AuthPopupService from '../services/AuthPopupService'
import ApiAlerts from './ApiAlerts'
import UserService from '../services/UserService'
import UserForm from './UserForm'

export default {
  name: 'login-popup',
  components: { ApiAlerts, UserForm },
  data() {
    return {
      state: AuthPopupService,
      apiError: null,
      loading: false,
      isLoginMode: true,
      formData: AuthPopupService.formData,
      isOwner: false,
      loginFormValid: false,
      rules: {
        email: v => /.+@.+/.test(v) || "Must enter a valid email address",
        notBlank: v => v == null || !!v.replace(' ', '') || "Cannot be blank",
      }
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
        AuthPopupService.close()
        AuthPopupService.resetFormData()
      } catch (err) {
        this.apiError = err
      }
      this.loading = false
    },

    async createUser() {
      this.loading = true
      this.apiError = null
      try {
        await UserService.createAndLogin(
          this.formData.email,
          this.formData.password,
          this.formData.firstName,
          this.formData.lastName,
          this.isOwner
        )
        AuthPopupService.close()
        if (this.isOwner) {
          this.$router.push({'name': 'my-account'})
        }
        AuthPopupService.resetFormData()
        this.isOwner = false
        this.isLoginMode = true
      } catch (err) {
        this.apiError = err
      }
      this.loading = false
    },

    switchMode() {
      this.apiError = null
      this.isLoginMode = !this.isLoginMode
    },

    closePopup() {
      this.apiError = null
      this.state.close()
    }
  }
}
</script>

<style>

</style>
