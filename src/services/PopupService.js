class PopupService {
  loginVisible = false
  signupVisible = false

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