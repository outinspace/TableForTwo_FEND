<template>
  <v-app>
    <v-toolbar app flat>
      <v-toolbar-side-icon></v-toolbar-side-icon>
      <v-toolbar-title>Reservations Application</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon>
        <v-icon>search</v-icon>
      </v-btn>
    </v-toolbar>
    <v-content class="grey lighten-4">
      <v-container fluid fill-height>
        <v-layout align-center justify-center>
          <v-flex xs12 sm8 md4>
            <v-card :elevation="12">
              This is where we might display trending restaurants
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: 'login-page',
  data() {
    return {
      message: ''
    }
  },
  async created() {
    const res = await this.$http.get('/reservations/hello')
    this.message = res.data
  }
}
</script>

<style scoped>
.logo {
}
</style>
