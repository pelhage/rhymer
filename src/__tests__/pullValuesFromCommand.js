const pullValuesFromCommand = require('../pullValuesFromCommand')

// Make flags constants to avoid typos
const KENDRICK_FLAG = 'kendrick'
const KENDRICK_VAL = 'lamar'
const J_FLAG = 'j'
const J_VAL = 'J.I.D'
const JID_FLAG = 'jid'
const JID_VAL = 'J.I.D'
const NASIR_FLAG = 'nasir'
const NASIR_VAL = 'jones'

// The acceptable flags which are the only available
// option-value pairs to pull from
const PROGRAM_FLAGS = [KENDRICK_FLAG, J_FLAG, JID_FLAG, NASIR_FLAG]
// Fake program object
const PROGRAM_STUB = {
  [KENDRICK_FLAG]: KENDRICK_VAL,
  [J_FLAG]: J_VAL,
  nonFlagKey: 'nonFlagVal', // we should ignore these; only care about flags
  nonFlagKey2: 'nonFlagVal2'
}

describe('pullValuesFromProgram', () => {
  it('should return an object mapping the list of flags to any supplied values', () => {
    console.log(PROGRAM_STUB, PROGRAM_FLAGS)
    const actual = pullValuesFromCommand(PROGRAM_STUB, PROGRAM_FLAGS)
    const expected = { [KENDRICK_FLAG]: KENDRICK_VAL, [J_FLAG]: J_VAL }
    expect(actual).toEqual(expected)
  })
  it('should return an empty object if no options were passed to commander', () => {
    const actual = pullValuesFromCommand({ hello: 'world' }, PROGRAM_FLAGS)
    const expected = {}
    expect(actual).toEqual(expected)
  })
})
