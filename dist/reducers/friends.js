'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defineProperty2 = require('./../npm/babel-runtime/helpers/defineProperty.js');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _extends2 = require('./../npm/babel-runtime/helpers/extends.js');

var _extends3 = _interopRequireDefault(_extends2);

var _reduxActions = require('./../npm/redux-actions/lib/index.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _require = require('./../actions/friends.js'),
    REFRESH_FRIENDS = _require.REFRESH_FRIENDS;

exports.default = (0, _reduxActions.handleActions)((0, _defineProperty3.default)({}, REFRESH_FRIENDS, function (state, action) {
  return (0, _extends3.default)({}, state, {
    friends: action.payload
  });
}), {
  friends: []
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZyaWVuZHMuanMiXSwibmFtZXMiOlsicmVxdWlyZSIsIlJFRlJFU0hfRlJJRU5EUyIsInN0YXRlIiwiYWN0aW9uIiwiZnJpZW5kcyIsInBheWxvYWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7ZUFHSUEsUUFBUSxvQkFBUixDO0lBREZDLGUsWUFBQUEsZTs7a0JBR2EsbUVBQ1pBLGVBRFksWUFDS0MsS0FETCxFQUNZQyxNQURaLEVBQ29CO0FBQy9CLG9DQUNLRCxLQURMO0FBRUVFLGFBQVNELE9BQU9FO0FBRmxCO0FBSUQsQ0FOWSxHQU9aO0FBQ0RELFdBQVM7QUFEUixDQVBZLEMiLCJmaWxlIjoiZnJpZW5kcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGhhbmRsZUFjdGlvbnMgfSBmcm9tICdyZWR1eC1hY3Rpb25zJ1xyXG5jb25zdCB7XHJcbiAgUkVGUkVTSF9GUklFTkRTXHJcbn0gPSByZXF1aXJlKCcuLi9hY3Rpb25zL2ZyaWVuZHMnKVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgaGFuZGxlQWN0aW9ucyh7XHJcbiAgW1JFRlJFU0hfRlJJRU5EU10oc3RhdGUsIGFjdGlvbikge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgLi4uc3RhdGUsXHJcbiAgICAgIGZyaWVuZHM6IGFjdGlvbi5wYXlsb2FkXHJcbiAgICB9XHJcbiAgfVxyXG59LCB7XHJcbiAgZnJpZW5kczogW11cclxufSlcclxuIl19