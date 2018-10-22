const fromPairs = require('lodash/fromPairs')

// takes config and will use this as the
// basis of flags it accepts
function pullValuesFromCommand(program, flags) {
  return fromPairs(
    flags.filter(flag => program[flag]).map(flag => [flag, program[flag]])
  )
}

module.exports = pullValuesFromCommand
