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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbmZpZ3VyZVN0b3JlLmpzIl0sIm5hbWVzIjpbImNvbmZpZ3VyZVN0b3JlIl0sIm1hcHBpbmdzIjoiOzs7OztrQkFJd0JBLGM7O0FBSnhCOztBQUNBOzs7O0FBQ0E7Ozs7OztBQUVlLFNBQVNBLGNBQVQsR0FBMkI7QUFDeEMsU0FBTyw0Q0FBcUIsbURBQXJCLENBQVA7QUFDRCIsImZpbGUiOiJjb25maWd1cmVTdG9yZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZVN0b3JlLCBhcHBseU1pZGRsZXdhcmUgfSBmcm9tICdyZWR1eCdcclxuaW1wb3J0IHByb21pc2VNaWRkbGV3YXJlIGZyb20gJ3JlZHV4LXByb21pc2UnXHJcbmltcG9ydCByZWR1Y2VyIGZyb20gJy4vcmVkdWNlcnMnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjb25maWd1cmVTdG9yZSAoKSB7XHJcbiAgcmV0dXJuIGNyZWF0ZVN0b3JlKHJlZHVjZXIsIGFwcGx5TWlkZGxld2FyZShwcm9taXNlTWlkZGxld2FyZSkpXHJcbn1cclxuIl19