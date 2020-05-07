const nock = require('nock')
const { __main } = require('../index')
const API = require('../core/api')

describe('rhymer CLI', () => {
  const originalLog = console.log
  const originalProcess = process
  let consoleOutput = []
  const mockedLog = output => {
    consoleOutput.push(output)
  }
  let mockedProcess = {}
  beforeEach(() => {
    consoleOutput = []
    mockedProcess = {
      argv: originalProcess.argv.slice()
    }
    console.log = mockedLog
  })
  afterEach(() => {
    consoleOutput = []
    console.log = originalLog
  })
  describe('integration test', () => {
    it.skip('should log words that rhyme with cat to the console', async () => {
      mockedProcess.argv.push('--rhyme', 'cat')
      await __main({ process: mockedProcess, API })
      expect(consoleOutput).toMatchSnapshot()
    })
    it('should log words that nearly rhyme with cat to the console', async () => {
      mockedProcess.argv.push('--nearRhyme', 'cat')
      await __main({ process: mockedProcess, API })
      expect(consoleOutput).toMatchSnapshot()
    })
  })
  describe('mocked API', () => {
    it('should log words that rhyme with cat to the console', async () => {
      // nock.activate()
      mockedProcess.argv.push('--rhyme', 'cat')
      const scope = nock('https://api.datamuse.com')
        .log(originalLog)
        .get('/words')
        .query({ rel_rhy: 'cat' })
        .reply(200, [
          { word: 'at', score: 5475, numSyllables: 1 },
          { word: 'caveat', score: 4418, numSyllables: 3 },
          { word: 'that', score: 3776, numSyllables: 1 },
          { word: 'hat', score: 3092, numSyllables: 1 },
          { word: 'rat', score: 2723, numSyllables: 1 }
        ])
      await __main({ process: mockedProcess, API })
      nock.restore()
      expect(consoleOutput).toMatchSnapshot()
    })
  })
})
