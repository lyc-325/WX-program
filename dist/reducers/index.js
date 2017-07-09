'use strict';

var _redux = require('./../npm/redux/lib/index.js');

var _common = require('./common.js');

var _common2 = _interopRequireDefault(_common);

var _sessions = require('./sessions.js');

var _sessions2 = _interopRequireDefault(_sessions);

var _friends = require('./friends.js');

var _friends2 = _interopRequireDefault(_friends);

var _chat = require('./chat.js');

var _chat2 = _interopRequireDefault(_chat);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = (0, _redux.combineReducers)({
  common: _common2.default,
  sessions: _sessions2.default,
  friends: _friends2.default,
  chat: _chat2.default
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIm1vZHVsZSIsImV4cG9ydHMiLCJjb21tb24iLCJzZXNzaW9ucyIsImZyaWVuZHMiLCJjaGF0Il0sIm1hcHBpbmdzIjoiOztBQUFBOztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7QUFFQUEsT0FBT0MsT0FBUCxHQUFpQiw0QkFBZ0I7QUFDL0JDLDBCQUQrQjtBQUUvQkMsOEJBRitCO0FBRy9CQyw0QkFIK0I7QUFJL0JDO0FBSitCLENBQWhCLENBQWpCIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY29tYmluZVJlZHVjZXJzIH0gZnJvbSAncmVkdXgnXG5pbXBvcnQgY29tbW9uIGZyb20gJy4vY29tbW9uJ1xuaW1wb3J0IHNlc3Npb25zIGZyb20gJy4vc2Vzc2lvbnMnXG5pbXBvcnQgZnJpZW5kcyBmcm9tICcuL2ZyaWVuZHMnXG5pbXBvcnQgY2hhdCBmcm9tICcuL2NoYXQnXG5cbm1vZHVsZS5leHBvcnRzID0gY29tYmluZVJlZHVjZXJzKHtcbiAgY29tbW9uLFxuICBzZXNzaW9ucyxcbiAgZnJpZW5kcyxcbiAgY2hhdFxufSlcbiJdfQ==