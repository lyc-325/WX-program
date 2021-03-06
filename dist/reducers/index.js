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

var _chatroom = require('./chatroom.js');

var _chatroom2 = _interopRequireDefault(_chatroom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = (0, _redux.combineReducers)({
    common: _common2.default,
    sessions: _sessions2.default,
    friends: _friends2.default,
    chat: _chat2.default,
    chatroom: _chatroom2.default
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIm1vZHVsZSIsImV4cG9ydHMiLCJjb21tb24iLCJzZXNzaW9ucyIsImZyaWVuZHMiLCJjaGF0IiwiY2hhdHJvb20iXSwibWFwcGluZ3MiOiI7O0FBQUE7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7O0FBRUFBLE9BQU9DLE9BQVAsR0FBaUIsNEJBQWdCO0FBQzdCQyw0QkFENkI7QUFFN0JDLGdDQUY2QjtBQUc3QkMsOEJBSDZCO0FBSTdCQyx3QkFKNkI7QUFLN0JDO0FBTDZCLENBQWhCLENBQWpCIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY29tYmluZVJlZHVjZXJzIH0gZnJvbSAncmVkdXgnXHJcbmltcG9ydCBjb21tb24gZnJvbSAnLi9jb21tb24nXHJcbmltcG9ydCBzZXNzaW9ucyBmcm9tICcuL3Nlc3Npb25zJ1xyXG5pbXBvcnQgZnJpZW5kcyBmcm9tICcuL2ZyaWVuZHMnXHJcbmltcG9ydCBjaGF0IGZyb20gJy4vY2hhdCdcclxuaW1wb3J0IGNoYXRyb29tIGZyb20gJy4vY2hhdHJvb20nXHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IGNvbWJpbmVSZWR1Y2Vycyh7XHJcbiAgICBjb21tb24sXHJcbiAgICBzZXNzaW9ucyxcclxuICAgIGZyaWVuZHMsXHJcbiAgICBjaGF0LFxyXG4gICAgY2hhdHJvb21cclxufSkiXX0=