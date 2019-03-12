import VueRouter from "vue-router";
import LandingPage from './components/LandingPage'
import BackendTesting from './components/BackendTesting'

export default new VueRouter({
    routes: [
        {
            path: '/', component: LandingPage
        },
        {
            path: '/backend-testing', component: BackendTesting
        }
        // TODO: UserDashboard, RestaurantDashboard, CreateReservation, ViewReservation, UserSignup, OwnerSignup
    ]
})