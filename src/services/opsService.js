const rp = require('request-promise')

module.exports = {
  toggleCronJob: () => {
    const options = {
      method: 'GET',
      uri: process.env.CRON_JOB_TOGGLE_URL,
      json: true,
      gzip: true,
    }
    return rp(options)
      .then((res) => {
        return res
      })
      .catch((e) => {
        return e
      })
  },
  getCronJobStatus: () => {
    const options = {
      method: 'GET',
      uri: process.env.CRON_JOB_STATUS_URL,
      json: true,
      gzip: true,
    }
    return rp(options)
      .then((res) => {
        return res
      })
      .catch((e) => {
        return e
      })
  },
}
