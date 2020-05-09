describe('api client', () => {
  beforeEach(() => {
    // since the STATS configuration is handled at the file level
    // and the api client isn't configured more than once per
    // session, we can reset modules in between tests
    // to test whether environment variables set before running
    // `rhymer` will lead to desired stats logging
    jest.resetModules()
  })
  describe('fetchWords', () => {
    it('should successfully fetch words', async () => {
      const api = require('../core/api').default
      const result = await api.fetchWords({
        rhyme: 'cat'
      })
      expect(result.length).toBeGreaterThan(0)
    })
  })
  describe('stats logging interceptors', () => {
    const originalProcess = process
    const originalLog = console.log
    let newLog = []
    console.log = str => newLog.push(str)
    afterEach(() => {
      console.log = originalLog
      process = originalProcess
      newLog = []
    })

    it('should enable logging if process.env.STATS is set', async () => {
      process.env.STATS = 'true'
      const api = require('../core/api').default
      await api.fetchWords({
        rhyme: 'cat'
      })
      // not the best match, but avoids complications of chalk and other
      // dynamic values that can break tests. What I really care about testing
      // is that something is/isn't logged when STATS true/false
      const includesString = newLog
        .join(' ')
        .includes('=====response: =============')
      expect(includesString).toBe(true)
    })
    it('should disable logging if process.env.STATS is not set', async () => {
      process.env.STATS = ''
      const api = require('../core/api').default
      await api.fetchWords({
        rhyme: 'cat'
      })
      // not the best match, but avoids complications of chalk and other
      // dynamic values that can break tests. What I really care about testing
      // is that something is/isn't logged when STATS true/false
      const includesString = newLog
        .join(' ')
        .includes('=====response: =============')
      expect(includesString).toBe(false)
    })
  })
})
