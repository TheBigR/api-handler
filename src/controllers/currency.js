const _ = require('lodash')
const {
  getRates,
  saveRates,
  fetchSavedRated,
  getCurrencyRateBySymbol
} = require('../services/coinMarket')

module.exports = {
  getCurrencyRateBySymbol: async (req, res, next) => {
    try {
      const symbol = _.get(req, 'body.locationKey')
      if (!symbol) {
        throw new Error('Missing params')
      }
      const rate = await getCurrencyRateBySymbol(symbol)
      res.status(200).send(rate)
    } catch (e) {
      res.status(500).send(e)
    }
  },
  getExCurrencyRates: async (req, res, next) => {
    try {     
      const rate = await getRates()
      res.status(200).send(rate)
    } catch (e) {
      res.status(500).send(e)
    }
  },
  fetchAllHistoricalRates: async (req, res, next) => {
    try {      
      const rates = await fetchSavedRated()
      res.status(200).send(rates)
    } catch (e) {
      res.status(500).send(e)
    }
  },
}
