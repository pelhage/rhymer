import * as fromPairs from 'lodash.frompairs'

const VALID_OPTION_FLAGS = ['rhyme', 'nearRhyme', 'synonym']

// takes config and will use this as the
// basis of flags it accepts
const pullValuesFromCommand = (program: Record<any, any>, flags: Array<string>) => {
  return fromPairs(
    flags.filter(flag => program[flag]).map(flag => [flag, program[flag]])
  )
}

export default pullValuesFromCommand
