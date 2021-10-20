const express = require('express')
const port = process.env.PORT
const app = express()
require('./db/mongoose')

app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Credentials', true)
  res.header(
    'Access-Control-Allow-Methods',
    'GET,HEAD,OPTIONS,POST,PUT, DELETE, PATCH',
  )
  res.header(
    'Access-Control-Allow-Headers',
    'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers, Authorization',
  )

  next()
})

require('./routes/routes')(app)

app.listen(port, () => {
  console.log('Cron-job is up on port ' + port)
})

module.exports = app
