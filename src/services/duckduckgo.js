const _ = require('lodash')
const rp = require('request-promise')

module.exports = {
  getDuckDuck: (query) => {
    const options = {
      method: 'GET',
      uri: `http://api.duckduckgo.com/?q=${query}&format=json`,
      json: true,
    }
    return rp(options)
      .then((res) => {
        // console.log(res)
        const dd = _.map(res.RelatedTopics, (currentResult) => {
          console.log(currentResult.toString() + ' current')
          return {
            url: currentResult.FirstURL,
            Title: currentResult.Text,
          }
        })
        console.log(dd.length)
        return res
      })
      .catch((e) => {
        return reject(e)
      })
  },
}
