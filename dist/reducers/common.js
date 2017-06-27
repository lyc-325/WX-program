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
    INIT_USER = _require.INIT_USER,
    INIT_NIM = _require.INIT_NIM;

exports.default = (0, _reduxActions.handleActions)((_handleActions = {}, (0, _defineProperty3.default)(_handleActions, INIT_USER, function (state, action) {
  return (0, _extends3.default)({}, state, {
    user: action.payload
  });
}), (0, _defineProperty3.default)(_handleActions, INIT_NIM, function (state, action) {
  return (0, _extends3.default)({}, state, {
    nim: action.payload
  });
}), _handleActions), {
  user: null,
  nim: null
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbW1vbi5qcyJdLCJuYW1lcyI6WyJyZXF1aXJlIiwiSU5JVF9VU0VSIiwiSU5JVF9OSU0iLCJzdGF0ZSIsImFjdGlvbiIsInVzZXIiLCJwYXlsb2FkIiwibmltIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7ZUFLSUEsUUFBUSxtQkFBUixDO0lBRkZDLFMsWUFBQUEsUztJQUNBQyxRLFlBQUFBLFE7O2tCQUdhLHFHQUNaRCxTQURZLFlBQ0RFLEtBREMsRUFDTUMsTUFETixFQUNjO0FBQ3pCLG9DQUNLRCxLQURMO0FBRUVFLFVBQU1ELE9BQU9FO0FBRmY7QUFJRCxDQU5ZLGlEQU9aSixRQVBZLFlBT0ZDLEtBUEUsRUFPS0MsTUFQTCxFQU9hO0FBQ3hCLG9DQUNLRCxLQURMO0FBRUVJLFNBQUtILE9BQU9FO0FBRmQ7QUFJRCxDQVpZLG9CQWFaO0FBQ0RELFFBQU0sSUFETDtBQUVERSxPQUFLO0FBRkosQ0FiWSxDIiwiZmlsZSI6ImNvbW1vbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGhhbmRsZUFjdGlvbnMgfSBmcm9tICdyZWR1eC1hY3Rpb25zJ1xuXG5jb25zdCB7XG4gIElOSVRfVVNFUixcbiAgSU5JVF9OSU1cbn0gPSByZXF1aXJlKCcuLi9hY3Rpb25zL2NvbW1vbicpXG5cbmV4cG9ydCBkZWZhdWx0IGhhbmRsZUFjdGlvbnMoe1xuICBbSU5JVF9VU0VSXShzdGF0ZSwgYWN0aW9uKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIC4uLnN0YXRlLFxuICAgICAgdXNlcjogYWN0aW9uLnBheWxvYWRcbiAgICB9XG4gIH0sXG4gIFtJTklUX05JTV0oc3RhdGUsIGFjdGlvbikge1xuICAgIHJldHVybiB7XG4gICAgICAuLi5zdGF0ZSxcbiAgICAgIG5pbTogYWN0aW9uLnBheWxvYWRcbiAgICB9XG4gIH1cbn0sIHtcbiAgdXNlcjogbnVsbCxcbiAgbmltOiBudWxsXG59KVxuIl19