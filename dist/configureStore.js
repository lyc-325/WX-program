'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = configureStore;

var _redux = require('./npm/redux/lib/index.js');

var _reduxPromise = require('./npm/redux-promise/lib/index.js');

var _reduxPromise2 = _interopRequireDefault(_reduxPromise);

var _reducers = require('./reducers/index.js');

var _reducers2 = _interopRequireDefault(_reducers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function configureStore() {
  return (0, _redux.createStore)(_reducers2.default, (0, _redux.applyMiddleware)(_reduxPromise2.default));
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbmZpZ3VyZVN0b3JlLmpzIl0sIm5hbWVzIjpbImNvbmZpZ3VyZVN0b3JlIl0sIm1hcHBpbmdzIjoiOzs7OztrQkFJd0JBLGM7O0FBSnhCOztBQUNBOzs7O0FBQ0E7Ozs7OztBQUVlLFNBQVNBLGNBQVQsR0FBMkI7QUFDeEMsU0FBTyw0Q0FBcUIsbURBQXJCLENBQVA7QUFDRCIsImZpbGUiOiJjb25maWd1cmVTdG9yZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZVN0b3JlLCBhcHBseU1pZGRsZXdhcmUgfSBmcm9tICdyZWR1eCdcbmltcG9ydCBwcm9taXNlTWlkZGxld2FyZSBmcm9tICdyZWR1eC1wcm9taXNlJ1xuaW1wb3J0IHJlZHVjZXIgZnJvbSAnLi9yZWR1Y2VycydcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY29uZmlndXJlU3RvcmUgKCkge1xuICByZXR1cm4gY3JlYXRlU3RvcmUocmVkdWNlciwgYXBwbHlNaWRkbGV3YXJlKHByb21pc2VNaWRkbGV3YXJlKSlcbn1cbiJdfQ==