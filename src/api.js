const axios = require('axios')

// https://www.datamuse.com/api/
const API = { base: 'https://api.datamuse.com/' }
/*
  `/words` endpoint
  This endpoint returns a list of words (and multiword expressions)
  from a given vocabulary that match a given set of constraints. 
*/
function getWords(query) {
  return axios.get(`${API.base}/words?${query}`).then(res => res.data)
}

const QUERY_PARAMS = {
  rhyme: 'rel_rhy',
  nearRhyme: 'rel_nry',
  synonym: 'rel_syn'
}

module.exports = { getWords, QUERY_PARAMS }
