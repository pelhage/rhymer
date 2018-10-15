const program = require('commander')
const createQueryString = require('./src/createQueryString')
const mapOptionsToQuery = require('./src/mapOptionsToQuery')
const makeRequest = require('./src/api')

const QUERY_OPTIONS = require('./constants/queryOptions')

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
makeRequest(queryString)
