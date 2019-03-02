import VueRouter from "vue-router";
import LoginPage from './components/LoginPage'

export default new VueRouter({
    routes: [
        {
            path: '/', component: LoginPage
        }
        // TODO: UserDashboard, RestaurantDashboard, CreateReservation, ViewReservation, UserSignup, OwnerSignup
    ]
})