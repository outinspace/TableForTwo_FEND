<template>
  <v-app>
    <v-toolbar app flat id="app-toolbar">
      <v-toolbar-side-icon @click="drawerState = !drawerState"></v-toolbar-side-icon>
      <v-toolbar-title id="app-toolbar-title" @click="$router.push({name: 'landing'})">
        Reservations Application
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn v-if="AuthService.currentUser != null" round flat>
        <v-icon>person</v-icon>
        {{ AuthService.currentUser.firstName }}
      </v-btn>
      <v-btn round primary color="success">
        <v-icon>access_time</v-icon>
        My Reservations
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
      </v-list>
    </v-navigation-drawer>

    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
import AuthService from './services/AuthService'

export default {
  name: 'app',
  data() {
    return {
      drawerState: false,
      AuthService
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
