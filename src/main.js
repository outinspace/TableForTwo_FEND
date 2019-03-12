import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'

import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'

import router from './router'
import $http from './$http'

Vue.config.productionTip = false

Vue.prototype.$http = $http

Vue.use(Vuetify)
Vue.use(VueRouter)

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
