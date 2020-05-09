import axios from 'axios'
import * as querystring from 'querystring'

interface IFetchWordsOptions {
  nearRhyme?: string
  rhyme?: string
}

function makeApiClient({ api }) {
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
    fetchWords(userInput: IFetchWordsOptions) {
      const options = Object.keys(userInput).map(type => ({
        [QUERY_PARAMS[type]]: userInput[type]
      })).reduce((mergedObj, currObj) => ({
          ...mergedObj,
          ...currObj
        }), {})
      const query = querystring.stringify(options)

      return api.get(`${API.base}/words?${query}`).then(res => res.data)
    }
  }
}

export default makeApiClient({ api: axios })
