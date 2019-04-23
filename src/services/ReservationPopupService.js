class ReservationPopupService {
  deleteReservationVisible = false
  editReservationVisible = false
  viewReservationVisible = false
  formData = {}
  reservation = null

  constructor() {}

  openDeleteReservation(reservation) {
    this.reservation = reservation
    this.deleteReservationVisible = true
  }

  closeDeleteReservation() {
    this.deleteReservationVisible = false
  }

  openEditReservation(reservation) {
    this.reservation = reservation
    this.formData = reservation
    this.editReservationVisible = true
  }

  closeEditReservation() {
    this.formData = {}
    this.editReservationVisible = false
  }

  openViewReservation(reservation) {
    this.reservation = reservation
    this.viewReservationVisible = true
  }

  closeViewReservation() {
    this.viewReservationVisible = false
  }
}

export default new ReservationPopupService()