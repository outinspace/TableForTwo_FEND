class PopupService {
  loginVisible = false
  signupVisible = false
  deleteReservationVisible = false
  editReservationVisible = false
  formData = {}

  constructor() {
    this.resetFormData()
  }

  resetFormData() {
    this.formData.email = ''
    this.formData.password = ''
    this.formData.firstName = ''
    this.formData.lastName = ''
  }

  openLogin() {
    this.loginVisible = true
  }

  closeLogin() {
    this.loginVisible = false
  }

  openSignup() {
    this.signupVisible = true
  }

  closeSignup() {
    this.signupVisible = false
  }

  openDeleteReservation() {
    this.deleteReservationVisible = true
  }

  closeDeleteReservation() {
    this.deleteReservationVisible = false
  }

  openEditReservation() {
    this.editReservationVisible = true
  }

  closeEditReservation() {
    this.editReservationVisible = false
  }
}

export default new PopupService()