const mapOptionsToQuery = require('../mapOptionsToQuery')

// Map potential option to its respective query param
const MOCK_OPTIONS = {
  hello: 'hlo',
  foobar: 'fb',
  kendrick: 'kdot',
  unused: 'option' 
}

const FAKE_PROGRAM = {
  another: 'randomOption',
  hello: 'world',
  foobar: 'baz',
  kendrick: 'lamar'
}

describe('mapOptionsToQuery', () => {
  it('should map program options to query params', () => {
    const actual = mapOptionsToQuery(FAKE_PROGRAM, MOCK_OPTIONS)
    const expected = { hlo: 'world', fb: 'baz', kdot: 'lamar' }
  
    expect(actual).toEqual(expected)
  })
  
  it('should return an empty object if no matches found', () => {
    const actual = mapOptionsToQuery({}, MOCK_OPTIONS)
    const expected = {}
  
    expect(actual).toEqual(expected)
  })
})
