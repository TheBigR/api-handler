const _ = require('lodash')
const {
  getRates,
  saveRate,
  saveRatesBulk,
  fetchSavedRated,
  getCurrencyRateBySymbol,
} = require('../services/coinMarket')

module.exports = {
  getCurrencyRateBySymbol: async (req, res, next) => {
    try {
      const symbol = _.get(req, 'query.symbol')
      if (!symbol) {
        throw new Error('Missing params')
      }
      const rate = await getCurrencyRateBySymbol(symbol)
      const saved = await saveRate(rate)
      res.status(200).send(saved)
    } catch (e) {
      res.status(500).send(e)
    }
  },
  getExCurrencyRates: async (req, res, next) => {
    try {
      const rates = await getRates()
      const SavedRates = await saveRatesBulk(rates)
      res.status(200).send(SavedRates)
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
