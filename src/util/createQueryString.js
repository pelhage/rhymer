const querystring = require('querystring')

const createQueryString = (query) => querystring.stringify(query)

module.exports = createQueryString
