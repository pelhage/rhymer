import api from '../core/api'

describe('api client', () => {
  describe('fetchWords', () => {
    it('should successfully fetch words', async () => {
      const result = await api.fetchWords({
        rhyme: 'cat'
      })
      expect(result.length).toBeGreaterThan(0)
    })
  })
})
