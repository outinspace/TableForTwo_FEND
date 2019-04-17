import client from '../$http'


class ReservationService {

  constructor($http) {
    this.$http = $http
  }

  async getMy() {
    let res = await this.$http.get(`/reservations/my`)
    return res.data
  }

  async createReservation(restaurantId, people, date, notes) {
    let res = await this.$http.post(`/reservations/create/${restaurantId}`, {
      people,
      date,
      notes
    })
    return res.data
}
  
}

export default new ReservationService(client)
