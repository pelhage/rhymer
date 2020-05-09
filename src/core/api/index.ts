import axios from 'axios'
import * as querystring from 'querystring'
import chalk from 'chalk'

interface IFetchWordsOptions {
  nearRhyme?: string
  rhyme?: string
}
declare module 'axios' {
  export interface AxiosRequestConfig {
    metadata: {
      startTime: Date
    }
  }
}

if (process.env.STATS) {
  axios.interceptors.request.use((config) => {
    config.metadata = { startTime: new Date() }
  
    return config;
  })
  
  axios.interceptors.response.use((response) => {
    const { method, url, metadata } = response.config
    const duration = new Date().getTime() - metadata.startTime.getTime() + 'ms'
  
    console.log(
      `${chalk.green(duration + ' ' + method.toUpperCase())} ${chalk.dim(url)}`
      + '\n=====response: ============='
    )
    console.log(response.data)
  
    return response;
  })
}



function makeApiClient({ api }) {
  const API = { base: 'https://api.datamuse.com' }
  const QUERY_PARAMS = {
    // Rhymes ("perfect" rhymes, per RhymeZone)	
    // spade → aid
    rhyme: 'rel_rhy',
    // Approximate rhymes (per RhymeZone)	
    // forest → chorus
    nearRhyme: 'rel_nry',
    //Synonyms (words contained within the same WordNet synset)	
    // ocean → sea
    synonym: 'rel_syn',
    related: 'rel_spc'
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
