<template>
  <v-container>
    <v-layout row wrap>
      <v-flex>
        <div class="display-1 mb-4">My Account</div>

        <v-card flat class="v-card--round my-3">
          <v-card-text>
            <div>
              <h3 class="headline">User Profile</h3>
              <p>Update your user profile information</p>
              <v-layout>
                <v-flex>
                  <v-form v-model="userFormValid">
                    <user-form :formData="userProfileData"></user-form>
                  </v-form>
                </v-flex>
              </v-layout>
              <api-alerts v-if="userProfileError" :error="userProfileError"></api-alerts>
              <v-btn flat color="primary" @click="updateUser()" :loading="updateUserLoading" :disabled="!userFormValid">Save</v-btn>
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
                  <v-form v-model="restaurantFormValid">
                    <restaurant-form :formData="restaurantProfileData"></restaurant-form>
                  </v-form>
                </v-flex>
              </v-layout>
              <api-alerts v-if="restaurantProfileError" :error="restaurantProfileError"></api-alerts>
              <v-btn flat color="primary" @click="updateRestaurant()" :loading="updateRestaurantLoading" :disabled="!restaurantFormValid">Save</v-btn>
            </div>
          </v-card-text>
        </v-card>

        <v-card v-if="restaurantProfileData && !restaurantProfileData.published" flat class="v-card--round my-3">
          <v-card-text>
              <h3 class="headline">Publish Restaurant</h3>
              <div>
                <p>Publishing your restaurant will make it visible to customers in searches.</p>
              </div>
              <api-alerts v-if="publishRestaurantError" :error="publishRestaurantError"></api-alerts>
              <v-btn color="success" flat @click="publishRestaurant()" :loading="publishRestaurantLoading">Publish</v-btn>
          </v-card-text>
        </v-card>

        <v-card v-if="restaurantProfileData && restaurantProfileData.published" flat class="v-card--round my-3">
          <v-card-text>
              <h3 class="headline">Unpublish Restaurant</h3>
              <div>
                <p>Unpublishing your restaurant will hide it from appearing in searches, but it will not cancel existing reservations.</p>
              </div>
              <api-alerts v-if="unpublishRestaurantError" :error="unpublishRestaurantError"></api-alerts>
              <v-btn color="warning" flat @click="unpublishRestaurant()" :loading="unpublishRestaurantLoading">Unpublish</v-btn>
          </v-card-text>
        </v-card>

        <v-card flat class="v-card--round my-3">
          <v-card-text>
              <h3 class="headline">Delete Account</h3>
              <div>
                <p>Deleting your account will cancel your reservations and user data. Enter your password below to confirm this action.</p>
              </div>
              <api-alerts v-if="deleteUserError" :error="deleteUserError"></api-alerts>
              <v-layout class="delete-layout">
                <v-form v-model="deleteFormValid">
                  <v-text-field class="mr-3"
                   label="Password"
                    type="password"
                    required
                    v-model="deleteCheckPassword"
                    :rules="[v => !!v || 'Cannot be blank']"
                  ></v-text-field>
                </v-form>
                <v-btn color="error" flat @click="deleteAccount()" :loading="deleteUserLoading" :disabled="!deleteFormValid">Delete</v-btn>
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
import ApiAlerts from './ApiAlerts'

export default {
  name: 'my-account-page',
  components: { UserForm, RestaurantForm, ApiAlerts },
  data() {
    return {
      userProfileData: {},
      updateUserLoading: false,
      userProfileError: null,
      userFormValid: true,

      restaurantProfileData: null,
      restaurantProfileError: null,
      updateRestaurantLoading: false,
      restaurantFormValid: false,

      deleteCheckPassword: null,
      deleteUserError: null,
      deleteUserLoading: false,
      deleteFormValid: false,

      unpublishRestaurantLoading: false,
      unpublishRestaurantError: null,

      publishRestaurantLoading: false,
      publishRestaurantError: null,
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
      this.userProfileError = null
      try {
        await UserService.update(this.userProfileData)
      } catch (err) {
        this.userProfileError = err
      }
      this.updateUserLoading = false
    },

    async updateRestaurant() {
      this.updateRestaurantLoading = true
      this.restaurantProfileError = null
      try {
        await RestaurantService.update(this.restaurantProfileData)
      } catch (err) {
        this.restaurantProfileError = err
      }
      this.updateRestaurantLoading = false
    },

    async publishRestaurant() {
      this.publishRestaurantLoading = true
      this.publishRestaurantError = null
      try {
        let changedRestaurant = await RestaurantService.publish()
        AuthService.currentUser.restaurant = changedRestaurant
        this.restaurantProfileData = AuthService.currentUser.restaurant
      } catch (err) {
        this.publishRestaurantError = err
      }
      this.publishRestaurantLoading = false
    },

    async unpublishRestaurant() {
      this.unpublishRestaurantLoading = true
      this.unpublishRestaurantError = null
      try {
        let changedRestaurant = await RestaurantService.unpublish()
        AuthService.currentUser.restaurant = changedRestaurant
        this.restaurantProfileData = AuthService.currentUser.restaurant
      } catch (err) {
        this.unpublishRestaurantError = err
      }
      this.unpublishRestaurantLoading = false
    },

    async deleteAccount() {
      this.deleteUserLoading = true
      this.deleteUserError = null
      try {
        await UserService.delete(this.deleteCheckPassword)
        AuthService.currentUser = null
        this.$router.push({name: 'landing'})
      } catch (err) {
        this.deleteUserError = err
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
