export const makeCache = () => {
  const cache = {
    cash: 'cache'
  }
  return {
    get(key) {
      if (cache[key]) {
        return cache[key]
      }
    },
    set(key, value) {
      cache[key] = value
    },
    getRhyme() {
      return 'hi'
    }
  }
}
