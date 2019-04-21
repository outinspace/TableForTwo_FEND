class ReservationPopupService {
    deleteReservationVisible = false
    editReservationVisible = false
    formData = {}
    reservation = null
  
    constructor() {
    }
  
    openDeleteReservation(reservation) {
        this.reservation = reservation
        this.deleteReservationVisible = true
      }
    
      closeDeleteReservation() {
        this.deleteReservationVisible = false
      }
    
      openEditReservation(reservation) {
        this.reservation = reservation
        this.formData = {
          date: reservation.date,
          time: reservation.time,
          people: reservation.people,
          notes: reservation.notes
        }
        this.editReservationVisible = true
      }
    
      closeEditReservation() {
        this.formData = {}
        this.editReservationVisible = false
      }
  }
  
  export default new ReservationPopupService()