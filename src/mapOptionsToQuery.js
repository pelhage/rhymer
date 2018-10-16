// TODO: Do not pass in the Program object directly. Pull out the CLI options beforehand
/**
 * Return all of `program`'s values matching `availableOptions` as keys
 * @param {Object} program 
 * @param {Array} availableOptions 
 */
const getProgramOptionValues = (program, availableOptions) => 
  availableOptions.reduce((acc, option) =>
    program[option]
      ? Object.assign({}, acc, { [option]: program[option] })
      : acc,
  {})

/**
 * Return a new object that uses the values of `keyMap` that
 * correspond to `oldObject`'s keys. This is used to convert arguments into query params
 * @param {Object} oldObject - Key value pairs of options and their values
 * @param {Object} keyMap - A map with new keys that are to replace each respective key
 */
const mapObjectToNewKeys = (oldObject, keyMap) =>
  Object.keys(oldObject).reduce((acc, oldKey) => {
    const newKey = keyMap[oldKey]
    return Object.assign({}, acc, {[newKey]: oldObject[oldKey]})
  }, {})

 /**
 * Given a CLI Program object and a list of options that map to query param values to be
 * sent to the API, we pull out all passed in values and create a query string out of it
 * @param {Object} program - The God program object for the cli (TODO: should probably not be passing this in..)
 * @param {Object} queryOptions - the map of CLI options and their query param values for the API
 */
const mapOptionsToQuery = (program, queryOptions) => {
  const programOptionValues = getProgramOptionValues(program, Object.keys(queryOptions))
  const objectWithQueryParamsAsKeys = mapObjectToNewKeys(programOptionValues, queryOptions)
  
  return objectWithQueryParamsAsKeys
}

module.exports = mapOptionsToQuery
