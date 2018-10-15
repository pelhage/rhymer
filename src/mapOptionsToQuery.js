const pullValue = (obj, key) => obj[key]

const getProgramOptionValues = (program, availableOptions) => 
  availableOptions.reduce((acc, option) =>
    program[option]
      ? Object.assign({}, acc, { [option]: program[option] })
      : acc,
  {})

// Will create a new object that uses the values
// of `keyMap` that correspond to `oldObject`'s keys
// This is used to convert arguments into query params
const mapObjectToNewKeys = (oldObject, keyMap) =>
  Object.keys(oldObject).reduce((acc, oldKey) => {
    const newKey = keyMap[oldKey]
    return Object.assign({}, acc, {[newKey]: oldObject[oldKey]})
  }, {})

 /**
 * Return 
 * @param {object} program 
 * @param {object} queryMap 
 */
const mapOptionsToQuery = (program, queryMap) => {
  const programOptionValues = getProgramOptionValues(program, Object.keys(queryMap))
  const objectWithQueryParamsAsKeys = mapObjectToNewKeys(programOptionValues, queryMap)
  
  return objectWithQueryParamsAsKeys
}

module.exports = mapOptionsToQuery
