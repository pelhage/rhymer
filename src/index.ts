import API from './core/api'
import CLI from './rhymer-cli'

const rhymer = ({ process, API }) => {
  const cliInstance = CLI({ process })
  const userInput = cliInstance.getUserInput()

  return API.fetchWords(userInput)
    .then(cliInstance.logWordSearchResults)
    .catch(console.error)
}

export default () => rhymer({ process, API }) 
  
/* for unit testing purposes */
const __main = rhymer
export { __main }
