'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.refreshMsgs = exports.REFRESH_MSGS = undefined;

var _reduxActions = require('./../npm/redux-actions/lib/index.js');

var REFRESH_MSGS = exports.REFRESH_MSGS = 'CHATROOM_REFRESH_MSGS';

var refreshMsgs = exports.refreshMsgs = (0, _reduxActions.createAction)(REFRESH_MSGS, function (roomId, msgs) {
  return {
    roomId: roomId,
    msgs: msgs
  };
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoYXRyb29tLmpzIl0sIm5hbWVzIjpbIlJFRlJFU0hfTVNHUyIsInJlZnJlc2hNc2dzIiwicm9vbUlkIiwibXNncyJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUNPLElBQU1BLHNDQUFlLHVCQUFyQjs7QUFFQSxJQUFNQyxvQ0FBYyxnQ0FBYUQsWUFBYixFQUEyQixVQUFDRSxNQUFELEVBQVNDLElBQVQ7QUFBQSxTQUFtQjtBQUN2RUQsa0JBRHVFO0FBRXZFQztBQUZ1RSxHQUFuQjtBQUFBLENBQTNCLENBQXBCIiwiZmlsZSI6ImNoYXRyb29tLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlQWN0aW9uIH0gZnJvbSAncmVkdXgtYWN0aW9ucydcbmV4cG9ydCBjb25zdCBSRUZSRVNIX01TR1MgPSAnQ0hBVFJPT01fUkVGUkVTSF9NU0dTJ1xuXG5leHBvcnQgY29uc3QgcmVmcmVzaE1zZ3MgPSBjcmVhdGVBY3Rpb24oUkVGUkVTSF9NU0dTLCAocm9vbUlkLCBtc2dzKSA9PiAoe1xuICByb29tSWQsXG4gIG1zZ3Ncbn0pKVxuIl19