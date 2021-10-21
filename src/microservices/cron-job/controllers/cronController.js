const { updateExcCurrenciesCron, getCronJobStatus, toggleCronJob } = require('../services/cronService')

module.exports = {
  activateCurrencyCronJob: async (req, res, next) => {
    try {
      const active = await updateExcCurrenciesCron()
      res.status(200).send(active)
    } catch (e) {
      res.status(500).send(e)
    }
  },
  toggleCronJob: async (req, res, next) => {
    try {
      const name = process.env.CURRENCY_CRON_JOB_NAME
      if (!name) {
        throw new Error('Missing params')
      }
      const currentCronJob = await getCronJobStatus(name)
      if(!currentCronJob.active) {
        const toggle = await toggleCronJob(currentCronJob)
        if (toggle) {
        const active = await updateExcCurrenciesCron()
        }
      }
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
