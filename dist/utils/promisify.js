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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb21pc2lmeS5qcyJdLCJuYW1lcyI6WyJtb2R1bGUiLCJleHBvcnRzIiwiY3VycnkiLCJmdW5jIiwib3B0aW9ucyIsInJlc29sdmUiLCJyZWplY3QiLCJkb25lIiwiZXJyb3IiLCJvYmoiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBOzs7Ozs7QUFFQUEsT0FBT0MsT0FBUCxHQUFpQixnQkFBRUMsS0FBRixDQUFRLFVBQVVDLElBQVYsRUFBZ0JDLE9BQWhCLEVBQXlCO0FBQ2hELFNBQU8sc0JBQVksVUFBQ0MsT0FBRCxFQUFVQyxNQUFWLEVBQXFCO0FBQ3RDRixjQUFVQSxXQUFXLEVBQXJCO0FBQ0FBLFlBQVFHLElBQVIsR0FBZSxVQUFVQyxLQUFWLEVBQWlCQyxHQUFqQixFQUFzQjtBQUNuQyxVQUFJRCxLQUFKLEVBQVc7QUFDVEYsZUFBT0UsS0FBUDtBQUNELE9BRkQsTUFFTztBQUNMSCxnQkFBUUksR0FBUjtBQUNEO0FBQ0YsS0FORDtBQU9BTixTQUFLQyxPQUFMO0FBQ0QsR0FWTSxDQUFQO0FBV0QsQ0FaZ0IsQ0FBakIiLCJmaWxlIjoicHJvbWlzaWZ5LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFIgZnJvbSAnLi4vbGlicy9yYW1kYSdcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gUi5jdXJyeShmdW5jdGlvbiAoZnVuYywgb3B0aW9ucykge1xyXG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fVxyXG4gICAgb3B0aW9ucy5kb25lID0gZnVuY3Rpb24gKGVycm9yLCBvYmopIHtcclxuICAgICAgaWYgKGVycm9yKSB7XHJcbiAgICAgICAgcmVqZWN0KGVycm9yKVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHJlc29sdmUob2JqKVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBmdW5jKG9wdGlvbnMpXHJcbiAgfSlcclxufSlcclxuIl19