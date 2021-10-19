const _ = require('lodash')
const rp = require('request-promise')

module.exports = {
    getDuckDuck: (query) => {
        const options = {
            method: 'GET',
            uri: `http://api.duckduckgo.com/?q=x&format=json`
        }
        return rp(options).then((res) => {
            return res
        }).catch( e => {
           return reject (e) 
        })
    }
}