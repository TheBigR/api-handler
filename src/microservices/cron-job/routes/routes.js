const cronController = require('../controllers/cronController')

module.exports = (app) => {
  app.get('/up-time-check', (req, res, next) => {
    res.send('working')
  })

  app.get('/activate-currency-updater', cronController.activateCurrencyCronJob)
}
