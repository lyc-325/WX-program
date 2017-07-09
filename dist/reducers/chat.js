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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoYXQuanMiXSwibmFtZXMiOlsicmVxdWlyZSIsIlJFRlJFU0hfTVNHUyIsIlJFRlJFU0hfTVNHU19CWV9UTyIsInN0YXRlIiwiYWN0aW9uIiwibXNncyIsInBheWxvYWQiLCJzZXNzaW9uSWQiLCJ0byJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztlQUlJQSxRQUFRLGlCQUFSLEM7SUFGRkMsWSxZQUFBQSxZO0lBQ0FDLGtCLFlBQUFBLGtCOztrQkFHYSxxR0FDWkQsWUFEWSxZQUNFRSxLQURGLEVBQ1NDLE1BRFQsRUFDaUI7QUFDNUIsb0NBQ0tELEtBREw7QUFFRUUscUNBQ0tGLE1BQU1FLElBRFgsb0NBRUdELE9BQU9FLE9BQVAsQ0FBZUMsU0FGbEIsNkNBRWtDSCxPQUFPRSxPQUFQLENBQWVELElBRmpEO0FBRkY7QUFPRCxDQVRZLGlEQVVaSCxrQkFWWSxZQVVRQyxLQVZSLEVBVWVDLE1BVmYsRUFVdUI7QUFDbEMsb0NBQ0tELEtBREw7QUFFRUUscUNBQ0tGLE1BQU1FLElBRFgsb0NBRUdELE9BQU9FLE9BQVAsQ0FBZUUsRUFGbEIsNkNBRTJCSixPQUFPRSxPQUFQLENBQWVELElBRjFDO0FBRkY7QUFPRCxDQWxCWSxvQkFtQlo7QUFDREEsUUFBTTtBQURMLENBbkJZLEMiLCJmaWxlIjoiY2hhdC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGhhbmRsZUFjdGlvbnMgfSBmcm9tICdyZWR1eC1hY3Rpb25zJ1xuY29uc3Qge1xuICBSRUZSRVNIX01TR1MsXG4gIFJFRlJFU0hfTVNHU19CWV9UT1xufSA9IHJlcXVpcmUoJy4uL2FjdGlvbnMvY2hhdCcpXG5cbmV4cG9ydCBkZWZhdWx0IGhhbmRsZUFjdGlvbnMoe1xuICBbUkVGUkVTSF9NU0dTXShzdGF0ZSwgYWN0aW9uKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIC4uLnN0YXRlLFxuICAgICAgbXNnczoge1xuICAgICAgICAuLi5zdGF0ZS5tc2dzLFxuICAgICAgICBbYWN0aW9uLnBheWxvYWQuc2Vzc2lvbklkXTogWy4uLmFjdGlvbi5wYXlsb2FkLm1zZ3NdXG4gICAgICB9XG4gICAgfVxuICB9LFxuICBbUkVGUkVTSF9NU0dTX0JZX1RPXShzdGF0ZSwgYWN0aW9uKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIC4uLnN0YXRlLFxuICAgICAgbXNnczoge1xuICAgICAgICAuLi5zdGF0ZS5tc2dzLFxuICAgICAgICBbYWN0aW9uLnBheWxvYWQudG9dOiBbLi4uYWN0aW9uLnBheWxvYWQubXNnc11cbiAgICAgIH1cbiAgICB9XG4gIH1cbn0sIHtcbiAgbXNnczoge31cbn0pXG4iXX0=