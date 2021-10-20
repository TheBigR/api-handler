const rp = require('request-promise')
const CronModel = require('../models/cronModel')

module.exports = {
  updateExcCurrenciesCron: () => {
    return new Promise(async (resolve, reject) => {
      try {
        const refreshIntervalId = setInterval(updateCurrency, 300000)
        const options = {
          method: 'GET',
          uri: process.env.SERVER_UPDATE_URL,
          json: true,
          gzip: true,
        }

        async function updateCurrency() {
          const filter = { name: process.env.CURRENCY_CRON_JOB_NAME }
          const doc = await CronModel.findOne(filter)
          if (!doc.active) {
            clearInterval(refreshIntervalId)
            console.log('stopped')
          }
          rp(options).then((res) => {
            console.log(res)
          })
        }

        resolve('triggred')
      } catch (e) {
        reject(e)
      }
    })
  },
}
