'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.refreshMsgsByTo = exports.refreshMsgs = exports.REFRESH_MSGS_BY_TO = exports.REFRESH_MSGS = undefined;

var _reduxActions = require('./../npm/redux-actions/lib/index.js');

var REFRESH_MSGS = exports.REFRESH_MSGS = 'CHAT_REFRESH_MSGS';
var REFRESH_MSGS_BY_TO = exports.REFRESH_MSGS_BY_TO = 'CHAT_REFRESH_MSGS_BY_TO';

var refreshMsgs = exports.refreshMsgs = (0, _reduxActions.createAction)(REFRESH_MSGS, function (sessionId, msgs) {
  return {
    sessionId: sessionId,
    msgs: msgs
  };
});

var refreshMsgsByTo = exports.refreshMsgsByTo = (0, _reduxActions.createAction)(REFRESH_MSGS_BY_TO, function (to, msgs) {
  return {
    to: to,
    msgs: msgs
  };
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoYXQuanMiXSwibmFtZXMiOlsiUkVGUkVTSF9NU0dTIiwiUkVGUkVTSF9NU0dTX0JZX1RPIiwicmVmcmVzaE1zZ3MiLCJzZXNzaW9uSWQiLCJtc2dzIiwicmVmcmVzaE1zZ3NCeVRvIiwidG8iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFDTyxJQUFNQSxzQ0FBZSxtQkFBckI7QUFDQSxJQUFNQyxrREFBcUIseUJBQTNCOztBQUVBLElBQU1DLG9DQUFjLGdDQUFhRixZQUFiLEVBQTJCLFVBQUNHLFNBQUQsRUFBWUMsSUFBWjtBQUFBLFNBQXNCO0FBQzFFRCx3QkFEMEU7QUFFMUVDO0FBRjBFLEdBQXRCO0FBQUEsQ0FBM0IsQ0FBcEI7O0FBS0EsSUFBTUMsNENBQWtCLGdDQUFhSixrQkFBYixFQUFpQyxVQUFDSyxFQUFELEVBQUtGLElBQUw7QUFBQSxTQUFlO0FBQzdFRSxVQUQ2RTtBQUU3RUY7QUFGNkUsR0FBZjtBQUFBLENBQWpDLENBQXhCIiwiZmlsZSI6ImNoYXQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVBY3Rpb24gfSBmcm9tICdyZWR1eC1hY3Rpb25zJ1xuZXhwb3J0IGNvbnN0IFJFRlJFU0hfTVNHUyA9ICdDSEFUX1JFRlJFU0hfTVNHUydcbmV4cG9ydCBjb25zdCBSRUZSRVNIX01TR1NfQllfVE8gPSAnQ0hBVF9SRUZSRVNIX01TR1NfQllfVE8nXG5cbmV4cG9ydCBjb25zdCByZWZyZXNoTXNncyA9IGNyZWF0ZUFjdGlvbihSRUZSRVNIX01TR1MsIChzZXNzaW9uSWQsIG1zZ3MpID0+ICh7XG4gIHNlc3Npb25JZCxcbiAgbXNnc1xufSkpXG5cbmV4cG9ydCBjb25zdCByZWZyZXNoTXNnc0J5VG8gPSBjcmVhdGVBY3Rpb24oUkVGUkVTSF9NU0dTX0JZX1RPLCAodG8sIG1zZ3MpID0+ICh7XG4gIHRvLFxuICBtc2dzXG59KSlcbiJdfQ==