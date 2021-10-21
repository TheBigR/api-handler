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
  toggleCronJob: (cronJob) => {
    return new Promise(async (resolve, reject) => {
      try {
        const filter = { name: cronJob.name }
        const update = { active: !cronJob.active }
        const doc = await CronModel.findOneAndUpdate(filter, update, {
          new: true,
          upsert: true,
        })
        resolve(doc)
      } catch (e) {
        reject(e)
      }
    })
  },
  getCronJobStatus: (name) => {
    return new Promise(async (resolve, reject) => {
      try {
        const filter = { name }
        const update = {}
        const doc = await CronModel.findOneAndUpdate(filter, update, {
          new: true,
          upsert: true,
        })
        resolve(doc)
      } catch (e) {
        reject(e)
      }
    })
  },
}
