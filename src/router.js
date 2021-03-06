import VueRouter from "vue-router";
import LandingPage from './components/LandingPage'
import BackendTesting from './components/BackendTesting'
import MyReservationsPage from './components/MyReservationsPage'
import MyRestaurantPage from './components/MyRestaurantPage'
import MyAccountPage from './components/MyAccountPage'

export default new VueRouter({
  routes: [
    {
      name: 'landing', path: '/', component: LandingPage
    },
    {
      path: '/backend-testing', component: BackendTesting
    },
    {
      name: 'my-reservations', path: '/reservations', component: MyReservationsPage
    },
    {
      name: 'my-restaurant', path: '/restaurant', component: MyRestaurantPage
    },
    {
      name: 'my-account', path: '/account', component: MyAccountPage
    }
    // TODO: UserDashboard, RestaurantDashboard, CreateReservation, ViewReservation, UserSignup, OwnerSignup
  ]
})