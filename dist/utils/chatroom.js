'use strict';

var _extends2 = require('./../npm/babel-runtime/helpers/extends.js');

var _extends3 = _interopRequireDefault(_extends2);

var _NIM_Web_Chatroom_v = require('./../libs/NIM_Web_Chatroom_v3.8.0.js');

var _NIM_Web_Chatroom_v2 = _interopRequireDefault(_NIM_Web_Chatroom_v);

var _promisify = require('./promisify.js');

var _promisify2 = _interopRequireDefault(_promisify);

var _config = require('./../config.js');

var _ramda = require('./../libs/ramda.js');

var _ramda2 = _interopRequireDefault(_ramda);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * getInstance
 */
function getInstance(options) {
  var chatroom = _NIM_Web_Chatroom_v2.default.getInstance((0, _extends3.default)({
    appKey: _config.nim.appKey,
    account: options.account,
    token: options.token,
    chatroomId: options.chatroomId,
    chatroomAddresses: options.chatroomAddresses,
    onconnect: function onconnect() {
      console.log('[NIM Chatroom connect]');
    },
    onerror: function onerror(error) {
      console.error('[NIM Chatroom] error', error);
    },
    ondisconnect: function ondisconnect() {
      console.log('[NIM Chatroom] disconnect');
    },
    onwillreconnect: function onwillreconnect(obj) {
      console.log('[NIM Chatroom] will reconnect');
    },
    onsyncdone: function onsyncdone() {
      console.log('[NIM Chatroom] sync done');
    }
  }, options));
  var chatroomPromised = {};
  // Promisify chatroom functions
  _ramda2.default.forEach(function (key) {
    chatroomPromised[key] = (0, _promisify2.default)(chatroom[key].bind(chatroom));
  }, promisedFunctions);
  // bind other functions
  _ramda2.default.forEach(function (key) {
    chatroomPromised[key] = chatroom[key].bind(chatroom);
  }, needFunctions);
  return chatroomPromised;
}

var needFunctions = [
  // 'mergeMsgs'
];

var promisedFunctions = ['sendText', 'previewFile', 'sendFile'];

module.exports = {
  getInstance: getInstance
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoYXRyb29tLmpzIl0sIm5hbWVzIjpbImdldEluc3RhbmNlIiwib3B0aW9ucyIsImNoYXRyb29tIiwiYXBwS2V5IiwiYWNjb3VudCIsInRva2VuIiwiY2hhdHJvb21JZCIsImNoYXRyb29tQWRkcmVzc2VzIiwib25jb25uZWN0IiwiY29uc29sZSIsImxvZyIsIm9uZXJyb3IiLCJlcnJvciIsIm9uZGlzY29ubmVjdCIsIm9ud2lsbHJlY29ubmVjdCIsIm9iaiIsIm9uc3luY2RvbmUiLCJjaGF0cm9vbVByb21pc2VkIiwiZm9yRWFjaCIsImtleSIsImJpbmQiLCJwcm9taXNlZEZ1bmN0aW9ucyIsIm5lZWRGdW5jdGlvbnMiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7O0FBQ0E7Ozs7OztBQUVBOzs7QUFHQSxTQUFTQSxXQUFULENBQXFCQyxPQUFyQixFQUE4QjtBQUM1QixNQUFNQyxXQUFXLDZCQUFTRixXQUFUO0FBQ2ZHLFlBQVEsWUFBT0EsTUFEQTtBQUVmQyxhQUFTSCxRQUFRRyxPQUZGO0FBR2ZDLFdBQU9KLFFBQVFJLEtBSEE7QUFJZkMsZ0JBQVlMLFFBQVFLLFVBSkw7QUFLZkMsdUJBQW1CTixRQUFRTSxpQkFMWjtBQU1mQyxhQU5lLHVCQU1IO0FBQ1ZDLGNBQVFDLEdBQVIsQ0FBWSx3QkFBWjtBQUNELEtBUmM7QUFTZkMsV0FUZSxtQkFTUEMsS0FUTyxFQVNBO0FBQ2JILGNBQVFHLEtBQVIsQ0FBYyxzQkFBZCxFQUFzQ0EsS0FBdEM7QUFDRCxLQVhjO0FBWWZDLGdCQVplLDBCQVlBO0FBQ2JKLGNBQVFDLEdBQVIsQ0FBWSwyQkFBWjtBQUNELEtBZGM7QUFlZkksbUJBZmUsMkJBZUNDLEdBZkQsRUFlTTtBQUNuQk4sY0FBUUMsR0FBUixDQUFZLCtCQUFaO0FBQ0QsS0FqQmM7QUFrQmZNLGNBbEJlLHdCQWtCRjtBQUNYUCxjQUFRQyxHQUFSLENBQVksMEJBQVo7QUFDRDtBQXBCYyxLQXFCWlQsT0FyQlksRUFBakI7QUF1QkEsTUFBTWdCLG1CQUFtQixFQUF6QjtBQUNBO0FBQ0Esa0JBQUVDLE9BQUYsQ0FBVSxVQUFDQyxHQUFELEVBQVM7QUFDakJGLHFCQUFpQkUsR0FBakIsSUFBd0IseUJBQVVqQixTQUFTaUIsR0FBVCxFQUFjQyxJQUFkLENBQW1CbEIsUUFBbkIsQ0FBVixDQUF4QjtBQUNELEdBRkQsRUFFR21CLGlCQUZIO0FBR0E7QUFDQSxrQkFBRUgsT0FBRixDQUFVLFVBQUNDLEdBQUQsRUFBUztBQUNqQkYscUJBQWlCRSxHQUFqQixJQUF3QmpCLFNBQVNpQixHQUFULEVBQWNDLElBQWQsQ0FBbUJsQixRQUFuQixDQUF4QjtBQUNELEdBRkQsRUFFR29CLGFBRkg7QUFHQSxTQUFPTCxnQkFBUDtBQUNEOztBQUVELElBQU1LLGdCQUFnQjtBQUNwQjtBQURvQixDQUF0Qjs7QUFJQSxJQUFNRCxvQkFBb0IsQ0FDeEIsVUFEd0IsRUFFeEIsYUFGd0IsRUFHeEIsVUFId0IsQ0FBMUI7O0FBTUFFLE9BQU9DLE9BQVAsR0FBaUI7QUFDZnhCO0FBRGUsQ0FBakIiLCJmaWxlIjoiY2hhdHJvb20uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQ2hhdHJvb20gZnJvbSAnLi4vbGlicy9OSU1fV2ViX0NoYXRyb29tX3YzLjguMCdcbmltcG9ydCBwcm9taXNpZnkgZnJvbSAnLi9wcm9taXNpZnknXG5pbXBvcnQgeyBuaW0gYXMgY29uZmlnIH0gZnJvbSAnLi4vY29uZmlnJ1xuaW1wb3J0IFIgZnJvbSAnLi4vbGlicy9yYW1kYSdcblxuLyoqXG4gKiBnZXRJbnN0YW5jZVxuICovXG5mdW5jdGlvbiBnZXRJbnN0YW5jZShvcHRpb25zKSB7XG4gIGNvbnN0IGNoYXRyb29tID0gQ2hhdHJvb20uZ2V0SW5zdGFuY2Uoe1xuICAgIGFwcEtleTogY29uZmlnLmFwcEtleSxcbiAgICBhY2NvdW50OiBvcHRpb25zLmFjY291bnQsXG4gICAgdG9rZW46IG9wdGlvbnMudG9rZW4sXG4gICAgY2hhdHJvb21JZDogb3B0aW9ucy5jaGF0cm9vbUlkLFxuICAgIGNoYXRyb29tQWRkcmVzc2VzOiBvcHRpb25zLmNoYXRyb29tQWRkcmVzc2VzLFxuICAgIG9uY29ubmVjdCgpIHtcbiAgICAgIGNvbnNvbGUubG9nKCdbTklNIENoYXRyb29tIGNvbm5lY3RdJylcbiAgICB9LFxuICAgIG9uZXJyb3IoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ1tOSU0gQ2hhdHJvb21dIGVycm9yJywgZXJyb3IpXG4gICAgfSxcbiAgICBvbmRpc2Nvbm5lY3QoKSB7XG4gICAgICBjb25zb2xlLmxvZygnW05JTSBDaGF0cm9vbV0gZGlzY29ubmVjdCcpXG4gICAgfSxcbiAgICBvbndpbGxyZWNvbm5lY3Qob2JqKSB7XG4gICAgICBjb25zb2xlLmxvZygnW05JTSBDaGF0cm9vbV0gd2lsbCByZWNvbm5lY3QnKVxuICAgIH0sXG4gICAgb25zeW5jZG9uZSgpIHtcbiAgICAgIGNvbnNvbGUubG9nKCdbTklNIENoYXRyb29tXSBzeW5jIGRvbmUnKVxuICAgIH0sXG4gICAgLi4ub3B0aW9uc1xuICB9KVxuICBjb25zdCBjaGF0cm9vbVByb21pc2VkID0ge31cbiAgLy8gUHJvbWlzaWZ5IGNoYXRyb29tIGZ1bmN0aW9uc1xuICBSLmZvckVhY2goKGtleSkgPT4ge1xuICAgIGNoYXRyb29tUHJvbWlzZWRba2V5XSA9IHByb21pc2lmeShjaGF0cm9vbVtrZXldLmJpbmQoY2hhdHJvb20pKVxuICB9LCBwcm9taXNlZEZ1bmN0aW9ucylcbiAgLy8gYmluZCBvdGhlciBmdW5jdGlvbnNcbiAgUi5mb3JFYWNoKChrZXkpID0+IHtcbiAgICBjaGF0cm9vbVByb21pc2VkW2tleV0gPSBjaGF0cm9vbVtrZXldLmJpbmQoY2hhdHJvb20pXG4gIH0sIG5lZWRGdW5jdGlvbnMpXG4gIHJldHVybiBjaGF0cm9vbVByb21pc2VkXG59XG5cbmNvbnN0IG5lZWRGdW5jdGlvbnMgPSBbXG4gIC8vICdtZXJnZU1zZ3MnXG5dXG5cbmNvbnN0IHByb21pc2VkRnVuY3Rpb25zID0gW1xuICAnc2VuZFRleHQnLFxuICAncHJldmlld0ZpbGUnLFxuICAnc2VuZEZpbGUnXG5dXG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBnZXRJbnN0YW5jZVxufVxuIl19