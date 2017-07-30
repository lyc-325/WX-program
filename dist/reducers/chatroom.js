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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoYXRyb29tLmpzIl0sIm5hbWVzIjpbInJlcXVpcmUiLCJSRUZSRVNIX01TR1MiLCJzdGF0ZSIsImFjdGlvbiIsImNvbnNvbGUiLCJsb2ciLCJtc2dzIiwicGF5bG9hZCIsInJvb21JZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7ZUFHSUEsUUFBUSxxQkFBUixDO0lBREZDLFksWUFBQUEsWTs7a0JBR2EsbUVBQ1pBLFlBRFksWUFDRUMsS0FERixFQUNTQyxNQURULEVBQ2lCO0FBQzVCQyxVQUFRQyxHQUFSLDRCQUNLSCxNQUFNSSxJQURYLG9DQUVHSCxPQUFPSSxPQUFQLENBQWVDLE1BRmxCLDZDQUUrQkwsT0FBT0ksT0FBUCxDQUFlRCxJQUY5QztBQUlBLG9DQUNLSixLQURMO0FBRUVJLHFDQUNLSixNQUFNSSxJQURYLG9DQUVHSCxPQUFPSSxPQUFQLENBQWVDLE1BRmxCLDZDQUUrQkwsT0FBT0ksT0FBUCxDQUFlRCxJQUY5QztBQUZGO0FBT0QsQ0FiWSxHQWNaO0FBQ0RBLFFBQU07QUFETCxDQWRZLEMiLCJmaWxlIjoiY2hhdHJvb20uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBoYW5kbGVBY3Rpb25zIH0gZnJvbSAncmVkdXgtYWN0aW9ucydcclxuY29uc3Qge1xyXG4gIFJFRlJFU0hfTVNHU1xyXG59ID0gcmVxdWlyZSgnLi4vYWN0aW9ucy9jaGF0cm9vbScpXHJcblxyXG5leHBvcnQgZGVmYXVsdCBoYW5kbGVBY3Rpb25zKHtcclxuICBbUkVGUkVTSF9NU0dTXShzdGF0ZSwgYWN0aW9uKSB7XHJcbiAgICBjb25zb2xlLmxvZyh7XHJcbiAgICAgIC4uLnN0YXRlLm1zZ3MsXHJcbiAgICAgIFthY3Rpb24ucGF5bG9hZC5yb29tSWRdOiBbLi4uYWN0aW9uLnBheWxvYWQubXNnc11cclxuICAgIH0pXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAuLi5zdGF0ZSxcclxuICAgICAgbXNnczoge1xyXG4gICAgICAgIC4uLnN0YXRlLm1zZ3MsXHJcbiAgICAgICAgW2FjdGlvbi5wYXlsb2FkLnJvb21JZF06IFsuLi5hY3Rpb24ucGF5bG9hZC5tc2dzXVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59LCB7XHJcbiAgbXNnczoge31cclxufSlcclxuIl19