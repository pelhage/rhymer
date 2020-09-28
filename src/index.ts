import API from './core/api'
import CLI from './rhymer-cli'
import { makeCache } from './core/cache'

const Cache = makeCache()
// this can probably be simplified further
// by merging rhymer-cli itself
const rhymer = ({ process, API, Cache }) => {
  const cliInstance = CLI({ process })
  const userInput = cliInstance.getUserInput()
  const cachedValue = Cache.get(userInput)
  if (cachedValue) {
    return cliInstance.logWordSearchResults(cachedValue)
  }

  return API.fetchWords(userInput)
    .then(cliInstance.logWordSearchResults)
    .catch(console.error)
}

export default () => rhymer({ process, API, Cache })

/* for unit testing purposes */
const __main = rhymer
export { __main }
