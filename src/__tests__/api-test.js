const { fetchWords } = require('../core/api/api')

describe('api client', () => {
  describe('fetchWords', () => {
    it('should successfully fetch words', async () => {
      const result = await fetchWords({
        rhyme: 'cat'
      })
      expect(result.length).toBeGreaterThan(0)
    })
  })
})
