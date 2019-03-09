<template>
  <v-app>
    <v-toolbar app flat>
      <v-toolbar-side-icon></v-toolbar-side-icon>
      <v-toolbar-title>Reservations Application</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn round primary color="success">
        <v-icon>access_time</v-icon>
        My Reservations
      </v-btn>
    </v-toolbar>
    <v-content class="grey lighten-4">
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>

export default {
  name: 'app',
  components: {
  }
}
</script>

<style>
body {
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow: hidden;
}
</style>
