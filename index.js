const program = require('commander')
const createQueryString = require('./src/util/createQueryString')
const mapOptionsToQuery = require('./src/mapOptionsToQuery')
const makeRequest = require('./src/api')
const QUERY_OPTIONS = require('./constants/queryOptions')

const PrettyPrint = require('./src/pretty-print')

program
  .version('0.1.0')
  .usage('[options] <file ...>')
  .option('-r, --rhyme [value]', 'Find rhymes')
  .option('-R, --related [value]', 'Find words related to [value]')
  .option('-n, --nearRhyme [value]', 'Find near rhymes')
  .option('-s, --synonym [value]', 'Find synonym for word')
  .parse(process.argv);

const query = mapOptionsToQuery(program, QUERY_OPTIONS)
const queryString = createQueryString(query)

const logRequest = (data) => {
    // sort the data by lowest syllables to highest
    const sortedData = data.sort((a, b) => a.numSyllables - b.numSyllables)
    // Make it beautiful
    const prettyData = sortedData.map(data => {
      if (data.score > 3000) {
        return PrettyPrint.strong(data.word)
      } else if (data.score > 2000) {
        return PrettyPrint.normal(data.word)
      }
      return PrettyPrint.weak(data.word)
    })
    // Finally, output the data as words
    console.log(prettyData.join(' '))
}

makeRequest(queryString).then(logRequest)
