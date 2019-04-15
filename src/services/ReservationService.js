import client from '../$http'

class ReservationService {

    constructor($http) {
      this.$http = $http
    }
  
    async getReservations() {
      let res = await this.$http.post('/reservations/my')
      return res
    }

    async createReservation(user, restaurant, people, date, notes) {
        let res = await this.$http.post('/reservations/save', {
            user,
            restaurant,
            people,
            date,
            notes
        })
        return res
    }
  }
  
  export default new ReservationService(client)