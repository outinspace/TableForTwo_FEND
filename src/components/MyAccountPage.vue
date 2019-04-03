<template>
  <v-container fill-height>
    <v-layout row wrap>
      <v-flex>
        <div class="display-1 mb-5">My Account</div>

        <v-card flat>
          <v-card-title primary-title>
            <div>
              <h3 class="headline">Profile</h3>
              <v-flex xs-12 sm-6>
              <p>Update your profile information that will appear in reservations.</p>
              </v-flex>
              <v-layout>
                <user-form :formData="updateProfileData" :formValid="updateProfileValid"></user-form>
              </v-layout>
            </div>
          </v-card-title>
        </v-card>
        <v-divider class="my-4"></v-divider>
        <v-card flat>
          <v-card-title>
            <div>
              <h3 class="headline">Delete Account</h3>
              <v-flex xs-12 sm-6>
              <p>Deleting your account will cancel your reservations and user data. Enter your password below to confirm this action.</p>
              </v-flex>
              <v-layout>
                <v-text-field class="mr-3" label="Password" type="password" required v-model="deleteCheckPassword"></v-text-field>
                <v-btn color="error" flat>Delete</v-btn>
              </v-layout>
            </div>
          </v-card-title>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import UserForm from './UserForm'

export default {
  name: 'my-account-page',
  components: { UserForm },
  data() {
    return {
      updateProfileData: {},
      updateProfileValid: false,
      deleteCheckPassword: ''
    }
  },
  created() {
  
  }
}
</script>

<style scoped>

</style>
