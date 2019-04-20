class AuthPopupService {
<<<<<<< HEAD
  loginVisible = false
  signupVisible = false
  deleteReservationVisible = false
  editReservationVisible = false
=======
  visible = false
>>>>>>> dd2ec140fae6846530355f88b6a1aa28a45ff874
  formData = {}

  closeCallback = null

  constructor() {
    this.resetFormData()
  }

  resetFormData() {
    this.formData.email = ''
    this.formData.password = ''
    this.formData.firstName = ''
    this.formData.lastName = ''
  }

  open() {
    this.visible = true
  }

  openWithCloseCallback(callback) {
    this.open()
    this.closeCallback = callback
  }

  close() {
    this.visible = false
    this.resetFormData()
    if (this.closeCallback) {
      this.closeCallback()
    }
  }
<<<<<<< HEAD
=======

>>>>>>> dd2ec140fae6846530355f88b6a1aa28a45ff874
}

export default new AuthPopupService()