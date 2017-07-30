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

var _handleActions;

var _reduxActions = require('./../npm/redux-actions/lib/index.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _require = require('./../actions/chat.js'),
    REFRESH_MSGS = _require.REFRESH_MSGS,
    REFRESH_MSGS_BY_TO = _require.REFRESH_MSGS_BY_TO;

exports.default = (0, _reduxActions.handleActions)((_handleActions = {}, (0, _defineProperty3.default)(_handleActions, REFRESH_MSGS, function (state, action) {
  return (0, _extends5.default)({}, state, {
    msgs: (0, _extends5.default)({}, state.msgs, (0, _defineProperty3.default)({}, action.payload.sessionId, [].concat((0, _toConsumableArray3.default)(action.payload.msgs))))
  });
}), (0, _defineProperty3.default)(_handleActions, REFRESH_MSGS_BY_TO, function (state, action) {
  return (0, _extends5.default)({}, state, {
    msgs: (0, _extends5.default)({}, state.msgs, (0, _defineProperty3.default)({}, action.payload.to, [].concat((0, _toConsumableArray3.default)(action.payload.msgs))))
  });
}), _handleActions), {
  msgs: {}
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoYXQuanMiXSwibmFtZXMiOlsicmVxdWlyZSIsIlJFRlJFU0hfTVNHUyIsIlJFRlJFU0hfTVNHU19CWV9UTyIsInN0YXRlIiwiYWN0aW9uIiwibXNncyIsInBheWxvYWQiLCJzZXNzaW9uSWQiLCJ0byJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztlQUlJQSxRQUFRLGlCQUFSLEM7SUFGRkMsWSxZQUFBQSxZO0lBQ0FDLGtCLFlBQUFBLGtCOztrQkFHYSxxR0FDWkQsWUFEWSxZQUNFRSxLQURGLEVBQ1NDLE1BRFQsRUFDaUI7QUFDNUIsb0NBQ0tELEtBREw7QUFFRUUscUNBQ0tGLE1BQU1FLElBRFgsb0NBRUdELE9BQU9FLE9BQVAsQ0FBZUMsU0FGbEIsNkNBRWtDSCxPQUFPRSxPQUFQLENBQWVELElBRmpEO0FBRkY7QUFPRCxDQVRZLGlEQVVaSCxrQkFWWSxZQVVRQyxLQVZSLEVBVWVDLE1BVmYsRUFVdUI7QUFDbEMsb0NBQ0tELEtBREw7QUFFRUUscUNBQ0tGLE1BQU1FLElBRFgsb0NBRUdELE9BQU9FLE9BQVAsQ0FBZUUsRUFGbEIsNkNBRTJCSixPQUFPRSxPQUFQLENBQWVELElBRjFDO0FBRkY7QUFPRCxDQWxCWSxvQkFtQlo7QUFDREEsUUFBTTtBQURMLENBbkJZLEMiLCJmaWxlIjoiY2hhdC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGhhbmRsZUFjdGlvbnMgfSBmcm9tICdyZWR1eC1hY3Rpb25zJ1xyXG5jb25zdCB7XHJcbiAgUkVGUkVTSF9NU0dTLFxyXG4gIFJFRlJFU0hfTVNHU19CWV9UT1xyXG59ID0gcmVxdWlyZSgnLi4vYWN0aW9ucy9jaGF0JylcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGhhbmRsZUFjdGlvbnMoe1xyXG4gIFtSRUZSRVNIX01TR1NdKHN0YXRlLCBhY3Rpb24pIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIC4uLnN0YXRlLFxyXG4gICAgICBtc2dzOiB7XHJcbiAgICAgICAgLi4uc3RhdGUubXNncyxcclxuICAgICAgICBbYWN0aW9uLnBheWxvYWQuc2Vzc2lvbklkXTogWy4uLmFjdGlvbi5wYXlsb2FkLm1zZ3NdXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9LFxyXG4gIFtSRUZSRVNIX01TR1NfQllfVE9dKHN0YXRlLCBhY3Rpb24pIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIC4uLnN0YXRlLFxyXG4gICAgICBtc2dzOiB7XHJcbiAgICAgICAgLi4uc3RhdGUubXNncyxcclxuICAgICAgICBbYWN0aW9uLnBheWxvYWQudG9dOiBbLi4uYWN0aW9uLnBheWxvYWQubXNnc11cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufSwge1xyXG4gIG1zZ3M6IHt9XHJcbn0pXHJcbiJdfQ==