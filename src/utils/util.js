import R from '../libs/ramda'

function isFunction(obj) {
  return typeof obj === 'function'
}

const functions = R.compose(
  R.keys,
  R.pickBy(isFunction)
)

module.exports = {
  isFunction,
  functions
}
