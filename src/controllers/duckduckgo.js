const _ = require('lodash')
const { getDuckDuck } = require('../services/duckduckgo')

module.exports = {
  getDuckDuckData: async (req, res, next) => {
    try {
      const query = _.get(req, 'query.q')
      if (!query) {
        throw new Error('Missing params')
      }
      const qResult = await getDuckDuck(query)
      res.status(200).send(qResult)
    } catch (e) {
      res.status(500).send(e)
    }
  },
}
