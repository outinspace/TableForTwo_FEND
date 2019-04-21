class RestaurantPopupService {
  visible = false
  restaurant = null

  open() {
    this.visible = true
  }

  openWithRestaurant(restaurant) {
    this.restaurant = restaurant
    this.visible = true
  }

  close() {
    this.visible = false
  }
}

export default new RestaurantPopupService()