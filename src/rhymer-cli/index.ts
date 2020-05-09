import CLIProgram from './program'
import * as fromPairs from 'lodash.frompairs'
import logger from './logger'

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
  const command = CLIProgram(process)
  const VALID_OPTION_FLAGS = ['rhyme', 'nearRhyme', 'synonym', 'related']
  // takes config and will use this as the
  // basis of flags it accepts
  const pullValuesFromCommand = (
    command: Record<any, any>,
    flags: Array<string>
  ) =>
    fromPairs(
      flags.filter(flag => command[flag]).map(flag => [flag, command[flag]])
    )

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
    logWordSearchResults: logger.logWordSearchResults
  }
}

export default CLI
