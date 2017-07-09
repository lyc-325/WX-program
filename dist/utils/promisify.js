'use strict';

var _promise = require('./../npm/babel-runtime/core-js/promise.js');

var _promise2 = _interopRequireDefault(_promise);

var _ramda = require('./../libs/ramda.js');

var _ramda2 = _interopRequireDefault(_ramda);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = _ramda2.default.curry(function (func, options) {
  return new _promise2.default(function (resolve, reject) {
    options = options || {};
    options.done = function (error, obj) {
      if (error) {
        reject(error);
      } else {
        resolve(obj);
      }
    };
    func(options);
  });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb21pc2lmeS5qcyJdLCJuYW1lcyI6WyJtb2R1bGUiLCJleHBvcnRzIiwiY3VycnkiLCJmdW5jIiwib3B0aW9ucyIsInJlc29sdmUiLCJyZWplY3QiLCJkb25lIiwiZXJyb3IiLCJvYmoiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBOzs7Ozs7QUFFQUEsT0FBT0MsT0FBUCxHQUFpQixnQkFBRUMsS0FBRixDQUFRLFVBQVVDLElBQVYsRUFBZ0JDLE9BQWhCLEVBQXlCO0FBQ2hELFNBQU8sc0JBQVksVUFBQ0MsT0FBRCxFQUFVQyxNQUFWLEVBQXFCO0FBQ3RDRixjQUFVQSxXQUFXLEVBQXJCO0FBQ0FBLFlBQVFHLElBQVIsR0FBZSxVQUFVQyxLQUFWLEVBQWlCQyxHQUFqQixFQUFzQjtBQUNuQyxVQUFJRCxLQUFKLEVBQVc7QUFDVEYsZUFBT0UsS0FBUDtBQUNELE9BRkQsTUFFTztBQUNMSCxnQkFBUUksR0FBUjtBQUNEO0FBQ0YsS0FORDtBQU9BTixTQUFLQyxPQUFMO0FBQ0QsR0FWTSxDQUFQO0FBV0QsQ0FaZ0IsQ0FBakIiLCJmaWxlIjoicHJvbWlzaWZ5LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFIgZnJvbSAnLi4vbGlicy9yYW1kYSdcblxubW9kdWxlLmV4cG9ydHMgPSBSLmN1cnJ5KGZ1bmN0aW9uIChmdW5jLCBvcHRpb25zKSB7XG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge31cbiAgICBvcHRpb25zLmRvbmUgPSBmdW5jdGlvbiAoZXJyb3IsIG9iaikge1xuICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgIHJlamVjdChlcnJvcilcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJlc29sdmUob2JqKVxuICAgICAgfVxuICAgIH1cbiAgICBmdW5jKG9wdGlvbnMpXG4gIH0pXG59KVxuIl19