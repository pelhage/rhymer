const CLI = require('./cli')
const VALID_OPTION_FLAGS = require('./constants/valid-flags')
const pullValuesFromCommand = require('./pullValuesFromCommand')
const fetchWords = require('./api/api')
const logWordSearchResults = require('./console/pretty-print').logWordSearchResults

const userInput = pullValuesFromCommand(CLI, VALID_OPTION_FLAGS)

fetchWords(userInput).then(data => logWordSearchResults(data, { isVerbose: true, isSorted: true }))
