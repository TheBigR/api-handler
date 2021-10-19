const _ = require('lodash')
const {
  getLocationKeyByCity,
  getWeatherByLocationKey,
} = require('../services/weather')

module.exports = {
  getWeatherBylocationKey: async (req, res, next) => {
    try {
      const locationKey = _.get(req, 'body.locationKey')
      if (!location) {
        throw new Error('Missing params')
      }
      const weather = await getWeatherByLocationKey(locationKey)
      res.status(200).send(weather)
    } catch (e) {
      res.status(500).send(e)
    }
  },
  getWeatherByCity: async (req, res, next) => {
    try {
      const city = _.get(req, 'body.city')
      if (!city) {
        throw new Error('Missing params')
      }
      const locationKey = await getLocationKeyByCity(city)
      const weather = await getWeatherByLocationKey(locationKey)
      res.status(200).send(weather)
    } catch (e) {
      res.status(500).send(e)
    }
  },
}
