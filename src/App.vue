<template>
  <v-app>
    <v-toolbar app flat id="app-toolbar">
      <v-toolbar-side-icon @click="drawerState = !drawerState"></v-toolbar-side-icon>
      <v-toolbar-title id="app-toolbar-title" @click="$router.push({name: 'landing'})">
        Reservations Application
      </v-toolbar-title>
      <v-spacer></v-spacer>

      <v-menu v-if="AuthService.currentUser != null" offset-y class="v-menu--round">
        <template v-slot:activator="{ on }">
          <v-btn round flat v-on="on">
            <v-icon>person</v-icon>
            {{ 
              AuthService.currentUser.restaurant && AuthService.currentUser.restaurant.name ? 
                AuthService.currentUser.restaurant.name :
                AuthService.currentUser.firstName 
            }}
          </v-btn>
        </template>
        <v-list>
          <v-list-tile @click="$router.push({name: 'my-account'})">
            <v-list-tile-title>Account</v-list-tile-title>
          </v-list-tile>
          <v-list-tile @click="logout()">
            <v-list-tile-title>Logout</v-list-tile-title>
          </v-list-tile>
        </v-list>
      </v-menu>

      <template v-if="AuthService.currentUser != null">
        <v-btn v-if="AuthService.currentUser.restaurant == null" round primary color="success" @click="$router.push({name: 'my-reservations'})">
          <v-icon>access_time</v-icon>
          My Reservations
        </v-btn>
        <v-btn v-else round primary color="success" @click="$router.push({name: 'my-restaurant'})">
          <v-icon>access_time</v-icon>
          My Restaurant
        </v-btn>
      </template>

      <v-btn v-else round flat @click="openLoginPopup()">
        <v-icon>person</v-icon>
        Sign In
      </v-btn>
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

        <v-list-tile @click="logout()">
          <v-list-tile-action>
            <v-icon>child_care</v-icon>
          </v-list-tile-action>

          <v-list-tile-content>
            <v-list-tile-title>Logout</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>

    <v-content>
      <router-view></router-view>
    </v-content>

    <login-popup></login-popup>
    <signup-popup></signup-popup>
  </v-app>
</template>

<script>
import AuthService from './services/AuthService'
import UserService from './services/UserService'
import LoginPopup from './components/LoginPopup'
import SignupPopup from './components/SignupPopup'
import PopupService from './services/PopupService'

export default {
  name: 'app',
  components: { LoginPopup, SignupPopup },
  data() {
    return {
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

    openLoginPopup() {
      PopupService.openLogin()
    },

    logout() {
      AuthService.logout()
      this.$router.push({name: 'landing'})
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

.v-menu__content {
  border-radius: 18px !important;
}
</style>
