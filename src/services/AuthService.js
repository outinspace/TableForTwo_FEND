import client from '../$http'

/**
 * Contains global state of what the current user is, if logged in.
 * Do not directly modify properties in this class.
 */
class AuthService {
  currentUser = null

  constructor($http) {
    this.$http = $http
  }

  async login(username, password) {
    let res = await this.$http.post('/auth/login', {
      username,
      password
    })
    this.currentUser = res.data
    return this.currentUser
  }

  async logout() {
    try {
      await this.$http.get('/auth/logout')
    } catch (err) {
      // todo
    }
    this.currentUser = null
  }
}

export default new AuthService(client)
