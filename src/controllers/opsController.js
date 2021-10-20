const _ = require('lodash')
const { toggleCronJob, getCronJobStatus } = require('../services/opsService')

module.exports = {
  toggleCronJob: async (req, res, next) => {
    try {
      const name = process.env.CURRENCY_CRON_JOB_NAME
      if (!name) {
        throw new Error('Missing params')
      }
      const currentCronJob = await getCronJobStatus(name)
      const toggle = await toggleCronJob(currentCronJob)
      res.status(200).send(toggle.active)
    } catch (e) {
      res.status(500).send(e)
    }
  },
  getCronJobStatus: async (req, res, next) => {
    try {
      const name = process.env.CURRENCY_CRON_JOB_NAME
      if (!name) {
        throw new Error('Missing params')
      }
      const currentCronJob = await getCronJobStatus(name)
      res.status(200).send(currentCronJob.active)
    } catch (e) {
      res.status(500).send(e)
    }
  },
}
