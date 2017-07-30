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

var _require = require('./../actions/sessions.js'),
    REFRESH_SESSIONS = _require.REFRESH_SESSIONS;

exports.default = (0, _reduxActions.handleActions)((0, _defineProperty3.default)({}, REFRESH_SESSIONS, function (state, action) {
  return (0, _extends3.default)({}, state, {
    sessions: action.payload
  });
}), {
  sessions: []
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlc3Npb25zLmpzIl0sIm5hbWVzIjpbInJlcXVpcmUiLCJSRUZSRVNIX1NFU1NJT05TIiwic3RhdGUiLCJhY3Rpb24iLCJzZXNzaW9ucyIsInBheWxvYWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7ZUFHSUEsUUFBUSxxQkFBUixDO0lBREZDLGdCLFlBQUFBLGdCOztrQkFHYSxtRUFDWkEsZ0JBRFksWUFDTUMsS0FETixFQUNhQyxNQURiLEVBQ3FCO0FBQ2hDLG9DQUNLRCxLQURMO0FBRUVFLGNBQVVELE9BQU9FO0FBRm5CO0FBSUQsQ0FOWSxHQU9aO0FBQ0RELFlBQVU7QUFEVCxDQVBZLEMiLCJmaWxlIjoic2Vzc2lvbnMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBoYW5kbGVBY3Rpb25zIH0gZnJvbSAncmVkdXgtYWN0aW9ucydcclxuY29uc3Qge1xyXG4gIFJFRlJFU0hfU0VTU0lPTlNcclxufSA9IHJlcXVpcmUoJy4uL2FjdGlvbnMvc2Vzc2lvbnMnKVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgaGFuZGxlQWN0aW9ucyh7XHJcbiAgW1JFRlJFU0hfU0VTU0lPTlNdKHN0YXRlLCBhY3Rpb24pIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIC4uLnN0YXRlLFxyXG4gICAgICBzZXNzaW9uczogYWN0aW9uLnBheWxvYWRcclxuICAgIH1cclxuICB9XHJcbn0sIHtcclxuICBzZXNzaW9uczogW11cclxufSlcclxuIl19