class PopupService {
  loginVisible = false
  signupVisible = false
  formData

  constructor() {
    this.resetFormData()
  }

  resetFormData() {
    this.formData = {
      email: '',
      password: '',
      firstName: '',
      lastName: ''
    }
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
}

export default new PopupService()