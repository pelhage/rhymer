import { wordStyler as PrettyPrint } from '../rhymer-cli/pretty-print'

let outputData = ''
const storeLog = inputs => (outputData = inputs)
console.log = jest.fn(storeLog)

describe('PrettyPrint', () => {
  it('should log dim output', () => {
    const word = 'earth'
    const expected = `\u001b[2m${word}\u001b[22m`
    console.log(PrettyPrint.weak(word))

    expect(outputData).toBe(expected)
  })
  it('should log medium (blue) output', () => {
    const word = 'mars'
    const expected = `\u001b[34m${word}\u001b[39m`
    console.log(PrettyPrint.normal(word))

    expect(outputData).toBe(expected)
  })
  it('should log bold output', () => {
    const word = 'venus'
    const expected = `\u001b[34m\u001b[1m${word}\u001b[22m\u001b[39m`
    console.log(PrettyPrint.strong(word))

    expect(outputData).toBe(expected)
  })
})
