const querystring = require('querystring')

function createQueryString(query) {
  return querystring.stringify(query)
}

module.exports = createQueryString
