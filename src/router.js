import VueRouter from "vue-router";
import LandingPage from './components/LandingPage'

export default new VueRouter({
    routes: [
        {
            path: '/', component: LandingPage
        }
        // TODO: UserDashboard, RestaurantDashboard, CreateReservation, ViewReservation, UserSignup, OwnerSignup
    ]
})