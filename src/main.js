import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import * as VueGoogleMaps from "vue2-google-maps";

import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'

import './globals.css'

import router from './router'
import $http from './$http'


// Setup Vue
Vue.config.productionTip = false
Vue.prototype.$http = $http
Vue.use(Vuetify)
Vue.use(VueRouter)

Vue.use(VueGoogleMaps, {
  load: {
    key: "AIzaSyCyEcG1UocuXDpB8howrOhBsEXORqe7ETI",
    libraries: "places"
  }
});

// Create app instance
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
