const createQueryString = require('../createQueryString')

describe('createQueryString', () => {
  it('should map an object with key value pairs to a query string', () => {
    const actual = createQueryString({
      'abc': 123,
      'xyz': 987,
      'foo': 'bar'
    })
    const expected = 'abc=123&xyz=987&foo=bar'

    expect(actual).toEqual(expected)
  })
  it('should return a blank string if query object is empty', () => {
    const actual = createQueryString({})
    const expected = ''

    expect(actual).toEqual(expected)
  })
})
