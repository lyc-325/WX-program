import R from '../libs/ramda'

module.exports = R.curry(function (func, options) {
  return new Promise((resolve, reject) => {
    options = options || {}
    options.done = function (error, obj) {
      if (error) {
        reject(error)
      } else {
        resolve(obj)
      }
    }
    func(options)
  })
})
