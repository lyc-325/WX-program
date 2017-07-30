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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoYXRyb29tLmpzIl0sIm5hbWVzIjpbIlJFRlJFU0hfTVNHUyIsInJlZnJlc2hNc2dzIiwicm9vbUlkIiwibXNncyJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUNPLElBQU1BLHNDQUFlLHVCQUFyQjs7QUFFQSxJQUFNQyxvQ0FBYyxnQ0FBYUQsWUFBYixFQUEyQixVQUFDRSxNQUFELEVBQVNDLElBQVQ7QUFBQSxTQUFtQjtBQUN2RUQsa0JBRHVFO0FBRXZFQztBQUZ1RSxHQUFuQjtBQUFBLENBQTNCLENBQXBCIiwiZmlsZSI6ImNoYXRyb29tLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlQWN0aW9uIH0gZnJvbSAncmVkdXgtYWN0aW9ucydcclxuZXhwb3J0IGNvbnN0IFJFRlJFU0hfTVNHUyA9ICdDSEFUUk9PTV9SRUZSRVNIX01TR1MnXHJcblxyXG5leHBvcnQgY29uc3QgcmVmcmVzaE1zZ3MgPSBjcmVhdGVBY3Rpb24oUkVGUkVTSF9NU0dTLCAocm9vbUlkLCBtc2dzKSA9PiAoe1xyXG4gIHJvb21JZCxcclxuICBtc2dzXHJcbn0pKVxyXG4iXX0=