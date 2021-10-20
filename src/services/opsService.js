const CronModel = require('../models/cronModel')

module.exports = {
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
