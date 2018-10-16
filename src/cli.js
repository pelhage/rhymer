const program = require('commander')

const packageVersion = require('../package.json').version

program
  .version(packageVersion)
  .usage('[options] <file ...>')
  .option('-r, --rhyme [value]', 'Find rhymes')
  .option('-R, --related [value]', 'Find words related to [value]')
  .option('-n, --nearRhyme [value]', 'Find near rhymes')
  .option('-s, --synonym [value]', 'Find synonym for word')
  .parse(process.argv);

module.exports = program
