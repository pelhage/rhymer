import CLIProgram from './program'
import pullValuesFromCommand from './pullValuesFromCommand'
import { logWordSearchResults } from './pretty-print'
/**
 * This is the core CLI interface that is used
 * to parse user inputs and display results
 *
 * Right now the CLI + API client are separate and
 * instantiated at the project's root index.js, but
 * it'll make sense to have the CLI interface
 * directly with the API
 */
const CLI = ({ process }) => {
  const command = CLIProgram(process.argv)
  const VALID_OPTION_FLAGS = ['rhyme', 'nearRhyme', 'synonym']

  return {
    /**
     * Converts what is passed to the CLI -> commander into a more
     * readable object
     */
    getUserInput: () => pullValuesFromCommand(command, VALID_OPTION_FLAGS),
    /**
     * Logs data returned by data muse API into something nice + readable in
     * the terminal
     */
    logWordSearchResults
  }
}

export default CLI
