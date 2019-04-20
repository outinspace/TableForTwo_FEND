class AuthPopupService {
  visible = false
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

}

export default new AuthPopupService()