const duckController = require('../controllers/duckduckgo')
const weatherController = require('../controllers/weather')
const currencyController = require('../controllers/currency')

module.exports = (app) => {
  app.get('/up-time-check', (req, res, next) => {
    res.send('working')
  })
  //Weather
  //gets weather of a location according to its key.
  app.post(
    '/weather/weather-by-location-key',
    weatherController.getWeatherBylocationKey,
  )

  //gets weather of a city.
  app.post('/weather/weather-by-city', weatherController.getWeatherByCity)

  //duckduckgo
  app.get('/duckduck/api', duckController.getDuckDuckData)

  //currency

  //gets bitcoin, etherium and litecoin rates from coinmarketcap and saves them to db.
  app.get('/currecny/excersize', currencyController.getExCurrencyRates)
  //gets all saved currencies from the db.
  app.get('/currency/all-history', currencyController.fetchAllHistoricalRates)
  //gets a currency from coinmarketcap according to a symbol provided and saves it to the db.
  app.get('/currency/by-symbol', currencyController.getCurrencyRateBySymbol)
}
