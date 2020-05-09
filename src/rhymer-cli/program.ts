import { createCommand } from 'commander'
const packageVersion = require('../../package.json').version

export default (process) => {
  const program = createCommand()
  program
    .version(packageVersion)
    .usage('[options] <file ...>')
    .option('-r, --rhyme [value]', 'Find rhymes')
    .option('-R, --related [value]', 'Find words related to [value]')
    .option('-n, --nearRhyme [value]', 'Find near rhymes')
    .option('-s, --synonym [value]', 'Find synonym for word')
    
  program.on('--help', () => {
    console.log('')
    console.log('Examples:')
    console.log('  $ rhymer --rhyme purple')
    console.log('  $ rhymer -r purple')
  })

  return program.parse(process.argv)
}