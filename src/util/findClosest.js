// Taken from https://stackoverflow.com/questions/8584902/get-closest-number-out-of-array
const findClosest = (x, arr) => {
  const indexArr = arr.map(k => Math.abs(k - x))
  const min = Math.min.apply(Math, indexArr)

  return arr[indexArr.indexOf(min)]
}

module.exports = findClosest
