const axios = require('axios')
const querystring = require('querystring')
const mapOptionsToQuery = require('./mapOptionsToQuery')

// https://www.datamuse.com/api/
const API = { base: 'https://api.datamuse.com/' }

const QUERY_PARAMS = {
  rhyme: 'rel_rhy',
  nearRhyme: 'rel_nry',
  synonym: 'rel_syn'
}

/*
  `/words` endpoint
  This endpoint returns a list of words (and multiword expressions)
  from a given vocabulary that match a given set of constraints. 
*/
function fetchWords(userInput) {
  const query = querystring.stringify(
    mapOptionsToQuery(userInput, QUERY_PARAMS)
  )
  return axios.get(`${API.base}/words?${query}`).then(res => res.data)
}

module.exports = fetchWords
