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

  it('should log words that rhyme with cat to the console', async () => {
    await __main({ process, API })
    expect(consoleOutput).toMatchSnapshot()
  })
})
