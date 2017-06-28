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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbW1vbi5qcyJdLCJuYW1lcyI6WyJyZXF1aXJlIiwiU0VUX1VTRVIiLCJTRVRfTklNIiwic3RhdGUiLCJhY3Rpb24iLCJ1c2VyIiwicGF5bG9hZCIsIm5pbSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7O2VBS0lBLFFBQVEsbUJBQVIsQztJQUZGQyxRLFlBQUFBLFE7SUFDQUMsTyxZQUFBQSxPOztrQkFHYSxxR0FDWkQsUUFEWSxZQUNGRSxLQURFLEVBQ0tDLE1BREwsRUFDYTtBQUN4QixvQ0FDS0QsS0FETDtBQUVFRSxxQ0FDS0QsT0FBT0UsT0FEWjtBQUZGO0FBTUQsQ0FSWSxpREFTWkosT0FUWSxZQVNIQyxLQVRHLEVBU0lDLE1BVEosRUFTWTtBQUN2QixvQ0FDS0QsS0FETDtBQUVFSSxvQ0FDS0gsT0FBT0UsT0FEWjtBQUZGO0FBTUQsQ0FoQlksb0JBaUJaO0FBQ0RELFFBQU0sSUFETDtBQUVERSxPQUFLO0FBRkosQ0FqQlksQyIsImZpbGUiOiJjb21tb24uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBoYW5kbGVBY3Rpb25zIH0gZnJvbSAncmVkdXgtYWN0aW9ucydcblxuY29uc3Qge1xuICBTRVRfVVNFUixcbiAgU0VUX05JTVxufSA9IHJlcXVpcmUoJy4uL2FjdGlvbnMvY29tbW9uJylcblxuZXhwb3J0IGRlZmF1bHQgaGFuZGxlQWN0aW9ucyh7XG4gIFtTRVRfVVNFUl0oc3RhdGUsIGFjdGlvbikge1xuICAgIHJldHVybiB7XG4gICAgICAuLi5zdGF0ZSxcbiAgICAgIHVzZXI6IHtcbiAgICAgICAgLi4uYWN0aW9uLnBheWxvYWRcbiAgICAgIH1cbiAgICB9XG4gIH0sXG4gIFtTRVRfTklNXShzdGF0ZSwgYWN0aW9uKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIC4uLnN0YXRlLFxuICAgICAgbmltOiB7XG4gICAgICAgIC4uLmFjdGlvbi5wYXlsb2FkXG4gICAgICB9XG4gICAgfVxuICB9XG59LCB7XG4gIHVzZXI6IG51bGwsXG4gIG5pbTogbnVsbFxufSlcbiJdfQ==