const _ = require('lodash')
const { toggleCronJob, getCronJobStatus } = require('../services/opsService')

module.exports = {
  toggleCronJob: async (req, res, next) => {
    try {
      const toggle = await toggleCronJob()
      res.status(200).send(toggle)
    } catch (e) {
      res.status(500).send(e)
    }
  },
  getCronJobStatus: async (req, res, next) => {
    try {
      const currentCronJob = await getCronJobStatus()
      res.status(200).send(currentCronJob)
    } catch (e) {
      res.status(500).send(e)
    }
  },
}
