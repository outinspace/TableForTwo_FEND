<template>
  <v-container>
    <v-layout row wrap>
      <v-flex>
        <div class="display-1 mb-5">My Account</div>

        <v-card flat class="v-card--round my-3">
          <v-card-text>
            <div>
              <h3 class="headline">User Profile</h3>
              <p>Update your user profile information</p>
              <v-layout>
                <v-flex xs-12 sm-6>
                  <user-form :formData="userProfileData"></user-form>
                </v-flex>
              </v-layout>
              <v-btn flat color="primary" @click="updateUser()" :loading="updateUserLoading">Save</v-btn>
            </div>
          </v-card-text>
        </v-card>

        <v-card v-if="restaurantProfileData" flat class="v-card--round my-3">
          <v-card-text>
            <div>
              <h3 class="headline">Restaurant Profile</h3>
              <p>Update your restaurant profile information. Other users will see this information when they search for your restaurant.</p>
              <v-layout>
                <v-flex xs-12 sm-6>
                  <restaurant-form :formData="restaurantProfileData"></restaurant-form>
                </v-flex>
              </v-layout>
              <v-btn flat color="primary" @click="updateRestaurant()" :loading="updateRestaurantLoading">Save</v-btn>
            </div>
          </v-card-text>
        </v-card>

        <v-card flat class="v-card--round my-3">
          <v-card-text>
              <h3 class="headline">Delete Account</h3>
              <div>
                <p>Deleting your account will cancel your reservations and user data. Enter your password below to confirm this action.</p>
              </div>
              <v-layout class="delete-layout">
                <v-text-field class="mr-3" label="Password" type="password" required v-model="deleteCheckPassword"></v-text-field>
                <v-btn color="error" flat @click="deleteAccount()" :loading="deleteUserLoading">Delete</v-btn>
              </v-layout>
          </v-card-text>
        </v-card>

      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import UserForm from './UserForm'
import RestaurantForm from './RestaurantForm'
import AuthService from '../services/AuthService'
import UserService from '../services/UserService'
import RestaurantService from '../services/RestaurantService'

export default {
  name: 'my-account-page',
  components: { UserForm, RestaurantForm },
  data() {
    return {
      userProfileData: {},
      restaurantProfileData: null,
      deleteCheckPassword: null,
      updateUserLoading: false,
      updateRestaurantLoading: false,
      deleteUserLoading: false
    }
  },
  async created() {
    await AuthService.hydratePromise
    if (AuthService.currentUser) {
      this.userProfileData = {
        ...AuthService.currentUser,
        password: null
      } 
      this.restaurantProfileData = AuthService.currentUser.restaurant
    } else {
      this.$router.push({name: 'landing'})
    }
  },
  methods: {
    async updateUser() {
      this.updateUserLoading = true
      try {
        await UserService.update(this.userProfileData)
      } catch (err) {
        // TODO:
      }
      this.updateUserLoading = false
    },

    async updateRestaurant() {
      this.updateRestaurantLoading = true
      try {
        await RestaurantService.update(this.restaurantProfileData)
      } catch (err) {
        // TODO:
      }
      this.updateRestaurantLoading = false
    },

    async deleteAccount() {
      this.deleteUserLoading = true
      try {
        await UserService.delete(this.deleteCheckPassword)
        AuthService.currentUser = null
        this.$router.push({name: 'landing'})
      } catch (err) {
        // TODO:
      }
      this.deleteUserLoading = false
    }
  }
}
</script>

<style scoped>
.delete-layout {
  max-width: 400px;
}
</style>
