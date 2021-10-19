const _ = require('lodash')
const rp = require('request-promise')

module.exports = {
    getWeatherByLocationKey: (locationKey) => {
        const options = {
            method: 'GET',
            uri: `http://dataservice.accuweather.com/forecasts/v1/daily/1day`
        }
        return rp(options).then((res) => {
            return res
        }).catch( e => {
           return reject (e) 
        })
    },

    getLocationKeyByCity: (city => {
        const options = {
            method: 'GET',
            uri: `http://dataservice.accuweather.com/locations/v1/cities/search`
        }
        return rp(options).then((res) => {
            return res
        }).catch(e => {
            return reject (e)
        })
    })

}