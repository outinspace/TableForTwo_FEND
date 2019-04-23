<template>
  <v-app>
    <v-toolbar app flat id="app-toolbar">
      <img class="title-logo" src="./assets/logo.png" @click="$router.push({name: 'landing'})"/>
      <v-toolbar-title id="app-toolbar-title" class="hidden-xs-only" @click="$router.push({name: 'landing'})">
        <b>Table</b> <i> For </i> <b>Two</b>
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

    <v-content>
      <router-view></router-view>
    </v-content>

    <login-popup></login-popup>
    <restaurant-popup></restaurant-popup>
  </v-app>
</template>

<script>
import AuthService from './services/AuthService'
import UserService from './services/UserService'
import LoginPopup from './components/LoginPopup'
import RestaurantPopup from './components/RestaurantPopup'
import AuthPopupService from './services/AuthPopupService'

export default {
  name: 'app',
  components: { LoginPopup, RestaurantPopup },
  data() {
    return {
      AuthService,
      RestaurantPopup
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
      AuthPopupService.open()
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

.title-logo {
  max-height: 35px;
  max-width: 35px;
  cursor: pointer;
}
</style>
