const cronController = require('../controllers/cronController')

module.exports = (app) => {
  app.get('/up-time-check', (req, res, next) => {
    res.send('working')
  })
  //ops
  //toggles a cron job by its name in the db
  app.get('/toggle-cron-job', cronController.toggleCronJob)
  //get a cron job status by its name
  app.get('/cron-job-status', cronController.getCronJobStatus)
}
