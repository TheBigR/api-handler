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

  //currency 
  app.get('/currecny/excersize', currencyController.getExCurrencyRates)
  app.get('/currency/all-history', currencyController.fetchAllHistoricalRates)
  app.get('/currency/by-symbol', currencyController.getCurrencyRateBySymbol)
}
