const duckController = require('../controllers/duckduckgo')

module.exports = (app) => {
  app.get('/up-time-check', (req, res, next) => {
    res.send('working')
  })

  //duckduckgo
  app.get('/duckduck/api', duckController.getDuckDuckData)
}
