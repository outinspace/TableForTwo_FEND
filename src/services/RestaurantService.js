import client from '../$http'
import AuthService from './AuthService'

class RestaurantService {

  constructor($http) {
    this.$http = $http
  }

  async update(changes) {
    let res = await this.$http.post(`/restaurants/update`, changes)
    AuthService.currentUser.restaurant = res.data
  }
}

export default new RestaurantService(client)
