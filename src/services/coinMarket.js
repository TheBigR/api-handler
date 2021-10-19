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
        console.log(_.get(res, `data.${currencies.btc}.name`))
        return res
      })
      .catch((e) => {
        console.log(e)
        return reject(e)
      })
  },
  saveRates: (rates) => {
    //save rates to DB
    console.log(currencies.btc)
  },
  fetchSavedRated: async (days) => {
    const tasks = await Task.findAll()
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
        console.log(res)
        return res
      })
      .catch((e) => {
        return reject(e)
      })
  },
}
