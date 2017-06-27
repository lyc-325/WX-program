'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.refreshSessions = exports.REFRESH_SESSIONS = undefined;

var _reduxActions = require('./../npm/redux-actions/lib/index.js');

var REFRESH_SESSIONS = exports.REFRESH_SESSIONS = 'SESSIONS_REFRESH_SESSION';
var refreshSessions = exports.refreshSessions = (0, _reduxActions.createAction)(REFRESH_SESSIONS, function (sessions) {
  return sessions;
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlc3Npb25zLmpzIl0sIm5hbWVzIjpbIlJFRlJFU0hfU0VTU0lPTlMiLCJyZWZyZXNoU2Vzc2lvbnMiLCJzZXNzaW9ucyJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUNPLElBQU1BLDhDQUFtQiwwQkFBekI7QUFDQSxJQUFNQyw0Q0FBa0IsZ0NBQWFELGdCQUFiLEVBQStCO0FBQUEsU0FBWUUsUUFBWjtBQUFBLENBQS9CLENBQXhCIiwiZmlsZSI6InNlc3Npb25zLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlQWN0aW9uIH0gZnJvbSAncmVkdXgtYWN0aW9ucydcbmV4cG9ydCBjb25zdCBSRUZSRVNIX1NFU1NJT05TID0gJ1NFU1NJT05TX1JFRlJFU0hfU0VTU0lPTidcbmV4cG9ydCBjb25zdCByZWZyZXNoU2Vzc2lvbnMgPSBjcmVhdGVBY3Rpb24oUkVGUkVTSF9TRVNTSU9OUywgc2Vzc2lvbnMgPT4gc2Vzc2lvbnMpXG4iXX0=