const API = require('./core/api')
const CLI = require('./rhymer-cli')

const rhymer = ({ process, API }) => {
  const cliInstance = CLI({ process })
  const userInput = cliInstance.getUserInput()

  return API.fetchWords(userInput)
    .then(data =>
      cliInstance.logWordSearchResults(data, {
        isVerbose: true,
        isSorted: true
      })
    )
    .catch(console.error)
}

module.exports = {
  /* for testing purposes */
  __main: rhymer,
  default: () => rhymer({ process, API })
}
