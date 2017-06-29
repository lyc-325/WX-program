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
      return error ? reject(error) : resolve(obj);
    };
    func(options);
  });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb21pc2lmeS5qcyJdLCJuYW1lcyI6WyJtb2R1bGUiLCJleHBvcnRzIiwiY3VycnkiLCJmdW5jIiwib3B0aW9ucyIsInJlc29sdmUiLCJyZWplY3QiLCJkb25lIiwiZXJyb3IiLCJvYmoiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBOzs7Ozs7QUFFQUEsT0FBT0MsT0FBUCxHQUFpQixnQkFBRUMsS0FBRixDQUFRLFVBQVVDLElBQVYsRUFBZ0JDLE9BQWhCLEVBQXlCO0FBQ2hELFNBQU8sc0JBQVksVUFBQ0MsT0FBRCxFQUFVQyxNQUFWLEVBQXFCO0FBQ3RDRixjQUFVQSxXQUFXLEVBQXJCO0FBQ0FBLFlBQVFHLElBQVIsR0FBZSxVQUFVQyxLQUFWLEVBQWlCQyxHQUFqQixFQUFzQjtBQUNuQyxhQUFPRCxRQUFRRixPQUFPRSxLQUFQLENBQVIsR0FBd0JILFFBQVFJLEdBQVIsQ0FBL0I7QUFDRCxLQUZEO0FBR0FOLFNBQUtDLE9BQUw7QUFDRCxHQU5NLENBQVA7QUFPRCxDQVJnQixDQUFqQiIsImZpbGUiOiJwcm9taXNpZnkuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUiBmcm9tICcuLi9saWJzL3JhbWRhJ1xuXG5tb2R1bGUuZXhwb3J0cyA9IFIuY3VycnkoZnVuY3Rpb24gKGZ1bmMsIG9wdGlvbnMpIHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fVxuICAgIG9wdGlvbnMuZG9uZSA9IGZ1bmN0aW9uIChlcnJvciwgb2JqKSB7XG4gICAgICByZXR1cm4gZXJyb3IgPyByZWplY3QoZXJyb3IpIDogcmVzb2x2ZShvYmopXG4gICAgfVxuICAgIGZ1bmMob3B0aW9ucylcbiAgfSlcbn0pXG4iXX0=