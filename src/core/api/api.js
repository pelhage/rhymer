const axios = require('axios')
const querystring = require('querystring')
const mapOptionsToQuery = require('./mapOptionsToQuery')

function makeApiClient({ api }) {
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
    console.log({userInput})
    const query = querystring.stringify(
      mapOptionsToQuery(userInput, QUERY_PARAMS)
    )

    return api.get(`${API.base}/words?${query}`).then(res => {
      return res.data
    })
  }

  return {
    fetchWords
  }
}

module.exports = makeApiClient({ api: axios })
