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

    <v-card class="mb-3">
      <v-card-text>
        <v-form>
          <h3>/users/update</h3>
          <v-text-field label="Email" v-model="userUpdateForm.email"></v-text-field>
          <v-text-field label="Password" type="password" v-model="userUpdateForm.password"></v-text-field>
          <v-text-field label="First Name" v-model="userUpdateForm.firstName"></v-text-field>
          <v-text-field label="Last Name" v-model="userUpdateForm.lastName"></v-text-field>
          <v-btn @click="updateUser()">Update Current User</v-btn>
        </v-form>
      </v-card-text>
    </v-card>

    <v-divider></v-divider>

    <h2>ReservationsController</h2>
    <v-card class="mb-3">
      <v-card-text>
        <v-form>
          <h3>/reservations/save</h3>
          <v-menu ref="datePicker" v-model="datePicker" :close-on-content-click="false" 
          :nudge-right="40" :return-value.sync="date" lazy transition="scale-transition" offset-y full-widith min-width="290px">
            <template v-slot:activator="{on}">
              <v-text-field v-model="date" label="Date of Reservation" prepend-icon="event" readonly v-on="on"></v-text-field>
            </template>
            <v-date-picker no-title scrollable v-model="date">
              <v-spacer></v-spacer>
              <v-btn flat color="primary" @click="datePicker = false">Cancel</v-btn>
              <v-btn flat color="primary" @click="$refs.datePicker.save(date)">OK</v-btn>
            </v-date-picker>
          </v-menu>
          <v-text-field label="People" v-model="reservationsCreateForm.people" suffix="People" mask="###"></v-text-field>
          <v-text-field label="Notes" v-model="reservationsCreateForm.notes"></v-text-field>
          <v-btn @click="createReservation()">Create New Reservation</v-btn>
        </v-form>
        <h3>Response</h3>
        {{createReservationResponse}}
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
import AuthService from '../services/AuthService'
import UserService from '../services/UserService'
import ReservationService from '../services/ReservationService'
import RestaurantService from '../services/RestaurantService'

export default {
  name: 'backend-testing',
  data() {
    return {
      loginFormResponse: {},
      loginForm: {},
      registrationFormResponse: {},
      registrationForm: {},
      userUpdateForm: {

      },
      createReservationResponse: {},
      reservationsCreateForm: {},
      datePicker: false,
      date: new Date().toISOString().substr(0,10)
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
      await UserService.createAndLogin(
        this.registrationForm.email,
        this.registrationForm.password,
        this.registrationForm.firstName,
        this.registrationForm.lastName
        )
    },

    async createReservation() {
      this.createReservationResponse = RestaurantService.getById(4)
      await ReservationService.createReservation(
         4,
         this.reservationsCreateForm.people,
         this.date,
         this.reservationsCreateForm.notes
         )
    },

    async updateUser() {
      await UserService.update(this.userUpdateForm)
    },

    async deleteCurrentUser() {
      await UserService.delete()
    },

    async logout() {
      await AuthService.logout()
    }
  }
}
</script>

<style>

</style>
