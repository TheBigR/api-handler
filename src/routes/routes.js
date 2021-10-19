const duckController = require('../controllers/duckduckgo')
const weatherController = require('../controllers/weather')
const currencyController = require('../controllers/currency')

module.exports = (app) => {
  app.get('/up-time-check', (req, res, next) => {
    res.send('working')
  })
  //Weather
  app.post(
    '/weather/weather-by-location-key',
    weatherController.getWeatherBylocationKey,
  )
  app.post('/weather/weather-by-city', weatherController.getWeatherByCity)

  //duckduckgo
  app.get('/duckduck/api', duckController.getDuckDuckData)

  //currency **BTC-USD**, **ETH-USD** and **LTC-USD**
  app.get('/currecny/ltc-usd')
}
