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

  async getAll() {
    let res = await this.$http.get('/restaurants/all')
    return res.data
  }

  async getFavorites() {
    let res = await this.$http.get('/restaurants/favorites')
    return res.data
  }

  async getById(id) {
    let res = await this.$http.get(`/restaurants/get/${id}`, id)
    return res.data
  }

  async getReservations() {
    let res = await this.$http.get('/restaurants/reservations')
    return res.data
  }

  async unpublish() {
    let res = await this.$http.post('/restaurants/unpublish', {})
    return res.data
  }

  async publish() {
    let res = await this.$http.post('/restaurants/publish', {})
    return res.data
  }
}

export default new RestaurantService(client)
