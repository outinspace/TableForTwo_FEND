import client from '../$http'

/**
 * Contains global state of what the current user is, if logged in.
 * Do not directly modify properties in this class.
 */
class AuthService {
  currentUser = null
  hydratePromise = null
  callbacks = []

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
    this.executeCallbacks()
    return this.currentUser
  }

  async logout() {
    try {
      await this.$http.get('/auth/logout')
    } catch (err) {
      // todo
    }
    this.currentUser = null
    this.executeCallbacks()
  }

  async checkAndHydrateSession() {
    try {
      let res = await this.$http.get('/auth/hydrate')
      this.currentUser = res.data
    } catch (err) {
      this.currentUser = null
    }
    this.executeCallbacks()
  }

  subscribe(callback) {
    this.callbacks.push(callback)
  }

  executeCallbacks() {
    for (let callback of this.callbacks) {
      callback()
    }
  }
}

export default new AuthService(client)
