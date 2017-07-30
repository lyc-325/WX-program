'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defineProperty2 = require('./../npm/babel-runtime/helpers/defineProperty.js');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _extends2 = require('./../npm/babel-runtime/helpers/extends.js');

var _extends3 = _interopRequireDefault(_extends2);

var _handleActions;

var _reduxActions = require('./../npm/redux-actions/lib/index.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _require = require('./../actions/common.js'),
    SET_USER = _require.SET_USER,
    SET_NIM = _require.SET_NIM;

exports.default = (0, _reduxActions.handleActions)((_handleActions = {}, (0, _defineProperty3.default)(_handleActions, SET_USER, function (state, action) {
  return (0, _extends3.default)({}, state, {
    user: (0, _extends3.default)({}, action.payload)
  });
}), (0, _defineProperty3.default)(_handleActions, SET_NIM, function (state, action) {
  return (0, _extends3.default)({}, state, {
    nim: (0, _extends3.default)({}, action.payload)
  });
}), _handleActions), {
  user: null,
  nim: null
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbW1vbi5qcyJdLCJuYW1lcyI6WyJyZXF1aXJlIiwiU0VUX1VTRVIiLCJTRVRfTklNIiwic3RhdGUiLCJhY3Rpb24iLCJ1c2VyIiwicGF5bG9hZCIsIm5pbSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7O2VBS0lBLFFBQVEsbUJBQVIsQztJQUZGQyxRLFlBQUFBLFE7SUFDQUMsTyxZQUFBQSxPOztrQkFHYSxxR0FDWkQsUUFEWSxZQUNGRSxLQURFLEVBQ0tDLE1BREwsRUFDYTtBQUN4QixvQ0FDS0QsS0FETDtBQUVFRSxxQ0FDS0QsT0FBT0UsT0FEWjtBQUZGO0FBTUQsQ0FSWSxpREFTWkosT0FUWSxZQVNIQyxLQVRHLEVBU0lDLE1BVEosRUFTWTtBQUN2QixvQ0FDS0QsS0FETDtBQUVFSSxvQ0FDS0gsT0FBT0UsT0FEWjtBQUZGO0FBTUQsQ0FoQlksb0JBaUJaO0FBQ0RELFFBQU0sSUFETDtBQUVERSxPQUFLO0FBRkosQ0FqQlksQyIsImZpbGUiOiJjb21tb24uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBoYW5kbGVBY3Rpb25zIH0gZnJvbSAncmVkdXgtYWN0aW9ucydcclxuXHJcbmNvbnN0IHtcclxuICBTRVRfVVNFUixcclxuICBTRVRfTklNXHJcbn0gPSByZXF1aXJlKCcuLi9hY3Rpb25zL2NvbW1vbicpXHJcblxyXG5leHBvcnQgZGVmYXVsdCBoYW5kbGVBY3Rpb25zKHtcclxuICBbU0VUX1VTRVJdKHN0YXRlLCBhY3Rpb24pIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIC4uLnN0YXRlLFxyXG4gICAgICB1c2VyOiB7XHJcbiAgICAgICAgLi4uYWN0aW9uLnBheWxvYWRcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0sXHJcbiAgW1NFVF9OSU1dKHN0YXRlLCBhY3Rpb24pIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIC4uLnN0YXRlLFxyXG4gICAgICBuaW06IHtcclxuICAgICAgICAuLi5hY3Rpb24ucGF5bG9hZFxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59LCB7XHJcbiAgdXNlcjogbnVsbCxcclxuICBuaW06IG51bGxcclxufSlcclxuIl19