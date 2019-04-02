<template>
  <v-dialog>
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
</template>

<script>
export default {

}
</script>

<style>

</style>
