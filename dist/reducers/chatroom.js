'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defineProperty2 = require('./../npm/babel-runtime/helpers/defineProperty.js');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _toConsumableArray2 = require('./../npm/babel-runtime/helpers/toConsumableArray.js');

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _extends3 = require('./../npm/babel-runtime/helpers/extends.js');

var _extends4 = _interopRequireDefault(_extends3);

var _reduxActions = require('./../npm/redux-actions/lib/index.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _require = require('./../actions/chatroom.js'),
    REFRESH_MSGS = _require.REFRESH_MSGS;

exports.default = (0, _reduxActions.handleActions)((0, _defineProperty3.default)({}, REFRESH_MSGS, function (state, action) {
  return (0, _extends4.default)({}, state, {
    msgs: (0, _extends4.default)({}, state.msgs, (0, _defineProperty3.default)({}, action.payload.roomId, [].concat((0, _toConsumableArray3.default)(action.payload.msgs))))
  });
}), {
  msgs: {}
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoYXRyb29tLmpzIl0sIm5hbWVzIjpbInJlcXVpcmUiLCJSRUZSRVNIX01TR1MiLCJzdGF0ZSIsImFjdGlvbiIsIm1zZ3MiLCJwYXlsb2FkIiwicm9vbUlkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTs7OztlQUdJQSxRQUFRLHFCQUFSLEM7SUFERkMsWSxZQUFBQSxZOztrQkFFYSxtRUFDWkEsWUFEWSxZQUNFQyxLQURGLEVBQ1NDLE1BRFQsRUFDaUI7QUFDNUIsb0NBQ0tELEtBREw7QUFFRUUscUNBQ0tGLE1BQU1FLElBRFgsb0NBRUdELE9BQU9FLE9BQVAsQ0FBZUMsTUFGbEIsNkNBRStCSCxPQUFPRSxPQUFQLENBQWVELElBRjlDO0FBRkY7QUFPRCxDQVRZLEdBVVo7QUFDREEsUUFBTTtBQURMLENBVlksQyIsImZpbGUiOiJjaGF0cm9vbS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5pbXBvcnQgeyBoYW5kbGVBY3Rpb25zIH0gZnJvbSAncmVkdXgtYWN0aW9ucydcclxuY29uc3Qge1xyXG4gIFJFRlJFU0hfTVNHU1xyXG59ID0gcmVxdWlyZSgnLi4vYWN0aW9ucy9jaGF0cm9vbScpXHJcbmV4cG9ydCBkZWZhdWx0IGhhbmRsZUFjdGlvbnMoe1xyXG4gIFtSRUZSRVNIX01TR1NdKHN0YXRlLCBhY3Rpb24pIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIC4uLnN0YXRlLFxyXG4gICAgICBtc2dzOiB7XHJcbiAgICAgICAgLi4uc3RhdGUubXNncyxcclxuICAgICAgICBbYWN0aW9uLnBheWxvYWQucm9vbUlkXTogWy4uLmFjdGlvbi5wYXlsb2FkLm1zZ3NdXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn0sIHtcclxuICBtc2dzOiB7fVxyXG59KSJdfQ==