module.exports = {
    devServer: {
      proxy: {
        "/api/reservations-application/*": {
          // target: "https://csci4830.outin.space/",
          target: "http://localhost:8083/",
          secure: true
        }
      }
    },
    publicPath: '/reservations/'
  };