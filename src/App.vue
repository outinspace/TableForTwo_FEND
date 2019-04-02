<template>
  <v-app>
    <v-toolbar app flat id="app-toolbar">
      <v-toolbar-side-icon @click="drawerState = !drawerState"></v-toolbar-side-icon>
      <v-toolbar-title id="app-toolbar-title" @click="$router.push({name: 'landing'})">
        Reservations Application
      </v-toolbar-title>
      <v-spacer></v-spacer>

      <template v-if="AuthService.currentUser != null">
        <v-btn round flat>
          <v-icon>person</v-icon>
          {{ AuthService.currentUser.firstName }}
        </v-btn>
        <v-btn v-if="AuthService.currentUser.restaurant == null" round primary color="success" @click="$router.push({name: 'my-reservations'})">
          <v-icon>access_time</v-icon>
          My Reservations
        </v-btn>
        <v-btn v-else round primary color="success" @click="$router.push({name: 'my-restaurant'})">
          <v-icon>access_time</v-icon>
          My Restaurant
        </v-btn>
      </template>
      <v-dialog v-else v-model="dialog" persistent max-width="600px">
        <v-btn round flat slot="activator">
          <v-icon>person</v-icon>
          Sign In
        </v-btn>
        <v-card>
          <v-card-title>
            <span class="headline">User Login</span>
          </v-card-title>
          <v-card-text>
            <v-container grid-list-md>
              <v-layout wrap>
                <v-flex sm12>
                  <v-text-field label="Email" required v-model="login.email"></v-text-field>
                </v-flex>
                <v-flex sm12>
                  <v-text-field label="Password" type="password" required v-model="login.password"></v-text-field>
                </v-flex>
              </v-layout>
            </v-container>
          </v-card-text>
          <v-card-actions>
            <v-btn flat small @click="acctCreateDialog = !acctCreateDialog">Create New Account</v-btn>
            <v-spacer></v-spacer>
            <v-btn @click="dialog = false">Cancel</v-btn>
            <v-btn @click="login()">Login</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
      <v-dialog v-model="acctCreateDialog" persistent max-width="600px">
        <v-card>
          <v-card-title>
            <span class="headline">Create New Account</span>
          </v-card-title>
          <v-card-text>
            <v-container grid-list-md>
              <v-layout wrap>
                <v-flex sm12>
                  <v-text-field label="Email" required v-model="createUser.email"></v-text-field>
                </v-flex>
                <v-flex sm12>
                  <v-text-field label="Password" type="password" required v-model="createUser.password"></v-text-field>
                </v-flex>
                <v-flex sm12>
                  <v-text-field label="First Name" required v-model="createUser.firstName"></v-text-field>
                </v-flex>
                <v-flex sm12>
                  <v-text-field label="Last Name" required v-model="createUser.lastName"></v-text-field>
                </v-flex>
              </v-layout>
            </v-container>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn @click="acctCreateDialog = false">Cancel</v-btn>
            <v-btn @click="createUser()">Create</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-toolbar>

    <v-navigation-drawer app temporary v-model="drawerState">
      <v-list>
        <v-list-tile to="backend-testing">
          <v-list-tile-action>
            <v-icon>child_care</v-icon>
          </v-list-tile-action>

          <v-list-tile-content>
            <v-list-tile-title>Backend Testing</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>

    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
import AuthService from './services/AuthService'
import UserService from './services/UserService'

export default {
  name: 'app',
  data() {
    return {
      dialog: false,
      acctCreateDialog: false,
      drawerState: false,
      AuthService
    }
  },

  methods: {
    async createUser() {
      await UserService.createAndLogin(
        this.createUser.email,
        this.createUser.password,
        this.createUser.firstName,
        this.createUser.lastName
        )
    },

    async login() {
      this.loginResponse = await AuthService.login(
        this.login.email, 
        this.login.password
      )
    }
  }
}
</script>

<style>
body {
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow: hidden;
  background-color: #fafafa;
}

#app-toolbar {
  background-color: #fafafa;
}

#app-toolbar-title {
  cursor: pointer;
}
</style>
