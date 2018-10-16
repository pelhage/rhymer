const querystring = require('querystring')
const CLI = require('./cli')
const mapOptionsToQuery = require('./mapOptionsToQuery')
const getWords = require('./api').getWords
const QUERY_PARAMS = require('./api').QUERY_PARAMS
const outputWords = require('./console/pretty-print').outputWords
  
const query = querystring.stringify(mapOptionsToQuery(CLI, QUERY_PARAMS))
console.log('suu')

getWords(query).then(data => outputWords(data, { isVerbose: true, isSorted: true }))
