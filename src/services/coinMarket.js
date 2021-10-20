const _ = require('lodash')
const rp = require('request-promise')
const Currency = require('../models/currency')
const currencies = require('../consts/currencies')

module.exports = {
  getRates: () => {
    const options = {
      method: 'GET',
      uri: 'https://pro-api.coinmarketcap.com/v1/cryptocurrency/quotes/latest',
      qs: {
        id: `${currencies.btc},${currencies.eth},${currencies.ltc}`,
        convert: 'USD',
      },
      headers: {
        'X-CMC_PRO_API_KEY': `${process.env.COINMARKETKEY}`,
      },
      json: true,
      gzip: true,
    }
    return rp(options)
      .then((res) => {
        const rates = Object.entries(res.data).map((currentRate) => {
          return {
            symbol: currentRate[1].symbol,
            rate: currentRate[1].quote.USD.price,
          }
        })
        return rates
      })
      .catch((e) => {
        return reject(e)
      })
  },
  saveRate: (rate) => {
    return new Promise(async (resolve, reject) => {
      try {
        //save rates to DB
        const rateModel = new Currency(rate)
        const res = await rateModel.save()
        resolve(res)
      } catch (e) {
        reject(e)
      }
    })

    return
  },
  saveRatesBulk: async (rates) => {
    //save a bulk of rates
    const savedRates = await Currency.collection.insertMany(rates)
    return savedRates
  },
  fetchSavedRated: async () => {
    const rates = await Currency.find()
    return rates
  },
  getCurrencyRateBySymbol: (symbol) => {
    const options = {
      method: 'GET',
      uri: `https://pro-api.coinmarketcap.com/v1/cryptocurrency/quotes/latest`,
      qs: {
        symbol,
        convert: 'USD',
      },
      headers: {
        'X-CMC_PRO_API_KEY': `${process.env.COINMARKETKEY}`,
      },
      json: true,
      gzip: true,
    }
    return rp(options)
      .then((res) => {
        const rate = Object.entries(res.data).map((currentRate) => {
          return {
            symbol: currentRate[1].symbol,
            rate: currentRate[1].quote.USD.price,
          }
        })
        return rate[0]
      })
      .catch((e) => {
        return e
      })
  },
}
