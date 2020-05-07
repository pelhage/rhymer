import axios from 'axios'
import * as querystring from 'querystring'
import mapOptionsToQuery from './mapOptionsToQuery'

function makeApiClient({ api }) {
  // https://www.datamuse.com/api/
  const API = { base: 'https://api.datamuse.com' }

  const QUERY_PARAMS = {
    rhyme: 'rel_rhy',
    nearRhyme: 'rel_nry',
    synonym: 'rel_syn'
  }

  return {
    /*
      `/words` endpoint
      This endpoint returns a list of words (and multiword expressions)
      from a given vocabulary that match a given set of constraints.
    */
    fetchWords(userInput) {
      const query = querystring.stringify(
        mapOptionsToQuery(userInput, QUERY_PARAMS)
      )

      return api.get(`${API.base}/words?${query}`).then(res => res.data)
    }
  }
}

export default makeApiClient({ api: axios })
