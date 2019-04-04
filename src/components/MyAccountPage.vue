<template>
  <v-container>
    <v-layout row wrap>
      <v-flex>
        <div class="display-1 mb-5">My Account</div>
        <v-card flat>
          <v-card-text>
            <div>
              <h3 class="headline">Profile</h3>
              <p>Update your profile information that will appear in reservations.</p>
              <v-layout>
                <v-flex xs-12 sm-6>
                  <user-form :formData="updateProfileData" v-model="updateProfileValid"></user-form>
                </v-flex>
                <v-flex xs-12 sm-6></v-flex>
              </v-layout>
            </div>
          </v-card-text>
        </v-card>
        <v-divider class="my-4"></v-divider>
        <v-card flat>
          <v-card-text>
              <h3 class="headline">Delete Account</h3>
              <div>
                <p>Deleting your account will cancel your reservations and user data. Enter your password below to confirm this action.</p>
              </div>
              <v-layout class="delete-layout">
                <v-text-field class="mr-3" label="Password" type="password" required v-model="deleteCheckPassword"></v-text-field>
                <v-btn color="error" flat @click="deleteAccount()">Delete</v-btn>
              </v-layout>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import UserForm from './UserForm'
import AuthService from '../services/AuthService'
import UserService from '../services/UserService'

export default {
  name: 'my-account-page',
  components: { UserForm },
  data() {
    return {
      updateProfileData: {},
      updateProfileValid: false,
      deleteCheckPassword: null
    }
  },
  async created() {
    await AuthService.hydratePromise
    if (AuthService.currentUser) {
      this.updateProfileData = {
        email: AuthService.currentUser.email,
        firstName: AuthService.currentUser.firstName,
        lastName: AuthService.currentUser.lastName,
        password: '',
        repassword: ''
      } 
    } else {
      this.$router.push({name: 'landing'})
    }
  },
  methods: {
    async deleteAccount() {
      await UserService.delete(this.deleteCheckPassword)
      AuthService.currentUser = null
      this.$router.push({name: 'landing'})
    }
  }
}
</script>

<style scoped>
.delete-layout {
  max-width: 400px;
}
</style>
