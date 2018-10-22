const CLI = require('./cli')
const getWords = require('./api').getWords
const pullValuesFromCommand = require('./pullValuesFromCommand')
const outputWords = require('./console/pretty-print').outputWords
const VALID_FLAGS = require('./constants/valid-flags')

const userInput = pullValuesFromCommand(CLI, VALID_FLAGS)

getWords(userInput).then(data => outputWords(data, { isVerbose: true, isSorted: true }))
