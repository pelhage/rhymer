export const makeCache = (
  cache: Record<string, string> = {
    cash: 'cache'
  }
) => {
  return {
    get(key) {
      if (typeof key !== 'string') {
        throw Error()
      }
      if (cache[key]) {
        return cache[key]
      }
    },
    set(key, value) {
      if (typeof key !== 'string') {
        throw Error()
      }
      cache[key] = value
    },
    getRhyme() {
      return 'hi'
    }
  }
}
