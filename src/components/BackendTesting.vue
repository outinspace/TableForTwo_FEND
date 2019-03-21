<template>
  <v-container>
    <h1>BackendTesting</h1>
    <h2>AuthController</h2>
    <v-card class="mb-3">
      <v-card-text>
        <v-form>
          <h3>/auth/login</h3>
          <v-text-field label="Email" v-model="loginForm.email"></v-text-field>
          <v-text-field label="Password" type="password" v-model="loginForm.password"></v-text-field>
          <v-btn @click="login()">Login</v-btn>
        </v-form>
        <h3>Response</h3>
        {{loginFormResponse}}
      </v-card-text>
    </v-card>

    <v-card class="mb-3">
      <v-card-text>
        <v-form>
          <h3>/auth/logout</h3>
          <v-btn @click="logout()">Logout</v-btn>
        </v-form>
      </v-card-text>
    </v-card>

    <v-divider></v-divider>

    <h2>UsersController</h2>
    <v-card class="mb-3">
      <v-card-text>
        <v-form>
          <h3>/users/create</h3>
          <v-text-field label="Email" v-model="registrationForm.email"></v-text-field>
          <v-text-field label="Password" type="password" v-model="registrationForm.password"></v-text-field>
          <v-text-field label="First Name" v-model="registrationForm.firstName"></v-text-field>
          <v-text-field label="Last Name" v-model="registrationForm.lastName"></v-text-field>
          <v-btn @click="createUser()">Create</v-btn>
        </v-form>
        <h3>Response</h3>
        {{registrationFormResponse}}
      </v-card-text>
    </v-card>

    <v-card class="mb-3">
      <v-card-text>
        <v-form>
          <h3>/users/delete</h3>
          <v-btn @click="deleteCurrentUser()">Delete Current User</v-btn>
        </v-form>
      </v-card-text>
    </v-card>
    <v-divider></v-divider>
  </v-container>
</template>

<script>
import AuthService from '../services/AuthService'

export default {
  name: 'backend-testing',
  data() {
    return {
      loginFormResponse: {},
      loginForm: {},
      registrationFormResponse: {},
      registrationForm: {}
    }
  },
  methods: {
    async login() {
      this.loginFormResponse = await AuthService.login(
        this.loginForm.email, 
        this.loginForm.password
      )
    },

    async createUser() {
      let res = await this.$http.post('/users/create', this.registrationForm)
      this.registrationFormResponse = res.data
    },

    async deleteCurrentUser() {
      await this.$http.post('/users/delete', {})
    },

    async logout() {
      await AuthService.logout()
    }
  }
}
</script>

<style>

</style>
