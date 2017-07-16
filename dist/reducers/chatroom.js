'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defineProperty2 = require('./../npm/babel-runtime/helpers/defineProperty.js');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _toConsumableArray2 = require('./../npm/babel-runtime/helpers/toConsumableArray.js');

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _extends4 = require('./../npm/babel-runtime/helpers/extends.js');

var _extends5 = _interopRequireDefault(_extends4);

var _reduxActions = require('./../npm/redux-actions/lib/index.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _require = require('./../actions/chatroom.js'),
    REFRESH_MSGS = _require.REFRESH_MSGS;

exports.default = (0, _reduxActions.handleActions)((0, _defineProperty3.default)({}, REFRESH_MSGS, function (state, action) {
  console.log((0, _extends5.default)({}, state.msgs, (0, _defineProperty3.default)({}, action.payload.roomId, [].concat((0, _toConsumableArray3.default)(action.payload.msgs)))));
  return (0, _extends5.default)({}, state, {
    msgs: (0, _extends5.default)({}, state.msgs, (0, _defineProperty3.default)({}, action.payload.roomId, [].concat((0, _toConsumableArray3.default)(action.payload.msgs))))
  });
}), {
  msgs: {}
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoYXRyb29tLmpzIl0sIm5hbWVzIjpbInJlcXVpcmUiLCJSRUZSRVNIX01TR1MiLCJzdGF0ZSIsImFjdGlvbiIsImNvbnNvbGUiLCJsb2ciLCJtc2dzIiwicGF5bG9hZCIsInJvb21JZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7ZUFHSUEsUUFBUSxxQkFBUixDO0lBREZDLFksWUFBQUEsWTs7a0JBR2EsbUVBQ1pBLFlBRFksWUFDRUMsS0FERixFQUNTQyxNQURULEVBQ2lCO0FBQzVCQyxVQUFRQyxHQUFSLDRCQUNLSCxNQUFNSSxJQURYLG9DQUVHSCxPQUFPSSxPQUFQLENBQWVDLE1BRmxCLDZDQUUrQkwsT0FBT0ksT0FBUCxDQUFlRCxJQUY5QztBQUlBLG9DQUNLSixLQURMO0FBRUVJLHFDQUNLSixNQUFNSSxJQURYLG9DQUVHSCxPQUFPSSxPQUFQLENBQWVDLE1BRmxCLDZDQUUrQkwsT0FBT0ksT0FBUCxDQUFlRCxJQUY5QztBQUZGO0FBT0QsQ0FiWSxHQWNaO0FBQ0RBLFFBQU07QUFETCxDQWRZLEMiLCJmaWxlIjoiY2hhdHJvb20uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBoYW5kbGVBY3Rpb25zIH0gZnJvbSAncmVkdXgtYWN0aW9ucydcbmNvbnN0IHtcbiAgUkVGUkVTSF9NU0dTXG59ID0gcmVxdWlyZSgnLi4vYWN0aW9ucy9jaGF0cm9vbScpXG5cbmV4cG9ydCBkZWZhdWx0IGhhbmRsZUFjdGlvbnMoe1xuICBbUkVGUkVTSF9NU0dTXShzdGF0ZSwgYWN0aW9uKSB7XG4gICAgY29uc29sZS5sb2coe1xuICAgICAgLi4uc3RhdGUubXNncyxcbiAgICAgIFthY3Rpb24ucGF5bG9hZC5yb29tSWRdOiBbLi4uYWN0aW9uLnBheWxvYWQubXNnc11cbiAgICB9KVxuICAgIHJldHVybiB7XG4gICAgICAuLi5zdGF0ZSxcbiAgICAgIG1zZ3M6IHtcbiAgICAgICAgLi4uc3RhdGUubXNncyxcbiAgICAgICAgW2FjdGlvbi5wYXlsb2FkLnJvb21JZF06IFsuLi5hY3Rpb24ucGF5bG9hZC5tc2dzXVxuICAgICAgfVxuICAgIH1cbiAgfVxufSwge1xuICBtc2dzOiB7fVxufSlcbiJdfQ==