

module.exports = {
    ensureAuth: function (req, res, next) {

      if (req.isAuthenticated()) {
        return true
      } else {
        return false
      }
    }
  }

  // module.exports = {
  //   ensureAuth: function (req, res, next) {

  //     console.log(req.isAuthenticated())

  //     if (req.isAuthenticated()) {
  //       return next()
  //     } else {
  //       res.redirect('/')
  //     }
  //   }
  // }