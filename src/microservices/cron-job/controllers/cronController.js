const { updateExcCurrenciesCron } = require('../services/cronService')

module.exports = {
  activateCurrencyCronJob: async (req, res, next) => {
    try {
      const active = await updateExcCurrenciesCron()
      res.status(200).send(active)
    } catch (e) {
      res.status(500).send(e)
    }
  },
}
