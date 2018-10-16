const program = require('commander')

program
  .version('0.1.0')
  .usage('[options] <file ...>')
  .option('-r, --rhyme [value]', 'Find rhymes')
  .option('-R, --related [value]', 'Find words related to [value]')
  .option('-n, --nearRhyme [value]', 'Find near rhymes')
  .option('-s, --synonym [value]', 'Find synonym for word')
  .parse(process.argv);

module.exports = program
