module.exports = {
    devServer: {
      proxy: {
        "/api/reservations-application/*": {
          target: "https://csci4830.outin.space/",
          secure: true
        }
      }
    }
  };