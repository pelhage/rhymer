import { makeCache } from '../core/cache'

describe('local cache', () => {
  describe('make cache', () => {
    it('instantiates an object to access the cache', () => {
      const cacheInstance = makeCache()
      expect(cacheInstance).toHaveProperty('getRhyme')
    })
  })
})
