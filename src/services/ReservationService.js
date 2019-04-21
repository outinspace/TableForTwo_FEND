import client from '../$http'


class ReservationService {

  constructor($http) {
    this.$http = $http
  }

  async getMy() {
    let res = await this.$http.get(`/reservations/my`)
    return res.data
  }

  async createReservation(restaurantId, people, date, time, notes) {
    let res = await this.$http.post(`/reservations/create/${restaurantId}`, {
      people,
      date: `${date}T${time}`,
      notes
    })
    return res.data
  }
  
  async deleteReservation(reservationId) {
    await this.$http.post(`/reservations/delete/${reservationId}`)
  }

  async editReservation(reservationId, changes) {
    let res = await this.$http.post(`/reservations/update/${reservationId}`, changes)
    return res.data
  }
}

export default new ReservationService(client)
