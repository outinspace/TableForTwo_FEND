import client from '../$http'
import AuthService from './AuthService'

class UserService {

  constructor($http) {
    this.$http = $http
  }

  async createAndLogin(email, password, firstName, lastName, isOwner) {
    let res = await this.$http.post(`/users/create?isOwner=${isOwner}`, {
      email,
      password,
      firstName,
      lastName
    })
    AuthService.currentUser = res.data
  }

  async update(changes) {
    let userId = AuthService.currentUser.id
    let mergedUser = {...AuthService.currentUser, ...changes}
    let res = await this.$http.post(`/users/update/${userId}`, mergedUser)
    AuthService.currentUser = res.data
  }

  async delete(passwordCheck) {
    await this.$http.post('/users/delete', {
      password: passwordCheck
    })
  }
}

export default new UserService(client)
