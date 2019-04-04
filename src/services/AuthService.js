import client from '../$http'

/**
 * Contains global state of what the current user is, if logged in.
 * Do not directly modify properties in this class.
 */
class AuthService {
  currentUser = null
  hydratePromise = null

  constructor($http) {
    this.$http = $http
    this.hydratePromise = this.checkAndHydrateSession()
  }

  async login(email, password) {
    let res = await this.$http.post('/auth/login', {
      email,
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

  async checkAndHydrateSession() {
    try {
      let res = await this.$http.get('/auth/hydrate')
      this.currentUser = res.data
    } catch (err) {
      this.currentUser = null
    }
  }
}

export default new AuthService(client)
