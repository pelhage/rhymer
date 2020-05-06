const nock = require('nock')
process.argv.push('--rhyme', 'cat')
const { __main } = require('../index')
const API = require('../core/api')

describe('rhymer CLI', () => {
  const originalLog = console.log
  let consoleOutput = []
  const mockedLog = output => {
    consoleOutput.push(output)
  }
  beforeEach(() => {
    consoleOutput = []
    console.log = mockedLog
  })
  afterEach(() => {
    consoleOutput = []
    console.log = originalLog
  })
  describe('integration test', () => {
    it('should log words that rhyme with cat to the console', async () => {
      await __main({ process, API })
      expect(consoleOutput).toMatchSnapshot()
    })
  })
  describe('mocked API', () => {
    it('should log words that rhyme with cat to the console', async () => {
      nock('https://api.datamuse.com')
        .get('/words')
        .query({ rel_rhy: 'cat' })
        .reply(200, [
          { word: 'at', score: 5475, numSyllables: 1 },
          { word: 'caveat', score: 4418, numSyllables: 3 },
          { word: 'that', score: 3776, numSyllables: 1 },
          { word: 'hat', score: 3092, numSyllables: 1 },
          { word: 'rat', score: 2723, numSyllables: 1 }
        ])
      await __main({ process, API })
      expect(consoleOutput).toMatchSnapshot()
    })
  })
})
