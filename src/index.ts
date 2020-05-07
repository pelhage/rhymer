import API from './core/api'
import CLI from './rhymer-cli'

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

export default () => rhymer({ process, API }) 
  
/* for testing purposes */
const __main = rhymer
export { __main }
