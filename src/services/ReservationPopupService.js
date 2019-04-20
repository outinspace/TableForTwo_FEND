class ReservationPopupService {
    deleteReservationVisible = false
    editReservationVisible = false
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
        this.editReservationVisible = true
      }
    
      closeEditReservation() {
        this.editReservationVisible = false
      }
  }
  
  export default new ReservationPopupService()