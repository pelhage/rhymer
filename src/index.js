const CLI = require('./cli/program')

const { fetchWords } = require('./core/api/api')
const pullValuesFromCommand = require('./cli/pullValuesFromCommand')
const { logWordSearchResults } = require('./cli/pretty-print')

const VALID_OPTION_FLAGS = ['rhyme', 'nearRhyme', 'synonym']

const userInput = pullValuesFromCommand(CLI, VALID_OPTION_FLAGS)

fetchWords(userInput)
  .then(data => logWordSearchResults(data, { isVerbose: true, isSorted: true }))
  .catch(console.error)
