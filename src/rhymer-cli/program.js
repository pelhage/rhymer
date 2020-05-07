const { createCommand } = require('commander')
const packageVersion = require('../../package.json').version

module.exports = argv => {
  const program = createCommand()
  program
    .version(packageVersion)
    .usage('[options] <file ...>')
    .option('-r, --rhyme [value]', 'Find rhymes')
    .option('-R, --related [value]', 'Find words related to [value]')
    .option('-n, --nearRhyme [value]', 'Find near rhymes')
    .option('-s, --synonym [value]', 'Find synonym for word')

  // Help
  program.on('--help', function() {
    console.log('')
    console.log('Examples:')
    console.log('  $ rhymer --rhyme purple') // potential package name???
    console.log('  $ rhymer -r purple')
  })
  return program.parse(argv)
}
