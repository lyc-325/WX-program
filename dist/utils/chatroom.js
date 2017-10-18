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
      console.log('聊天室断开');
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
  return [chatroom, chatroomPromised];
}

var needFunctions = [
  // 'mergeMsgs'
];

var promisedFunctions = ['sendText', 'previewFile', 'sendFile', 'getHistoryMsgs'];

module.exports = {
  getInstance: getInstance
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoYXRyb29tLmpzIl0sIm5hbWVzIjpbImdldEluc3RhbmNlIiwib3B0aW9ucyIsImNoYXRyb29tIiwiYXBwS2V5IiwiYWNjb3VudCIsInRva2VuIiwiY2hhdHJvb21JZCIsImNoYXRyb29tQWRkcmVzc2VzIiwib25jb25uZWN0IiwiY29uc29sZSIsImxvZyIsIm9uZXJyb3IiLCJlcnJvciIsIm9uZGlzY29ubmVjdCIsIm9ud2lsbHJlY29ubmVjdCIsIm9iaiIsIm9uc3luY2RvbmUiLCJjaGF0cm9vbVByb21pc2VkIiwiZm9yRWFjaCIsImtleSIsImJpbmQiLCJwcm9taXNlZEZ1bmN0aW9ucyIsIm5lZWRGdW5jdGlvbnMiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7O0FBQ0E7Ozs7OztBQUVBOzs7QUFHQSxTQUFTQSxXQUFULENBQXFCQyxPQUFyQixFQUE4QjtBQUM1QixNQUFNQyxXQUFXLDZCQUFTRixXQUFUO0FBQ2ZHLFlBQVEsWUFBT0EsTUFEQTtBQUVmQyxhQUFTSCxRQUFRRyxPQUZGO0FBR2ZDLFdBQU9KLFFBQVFJLEtBSEE7QUFJZkMsZ0JBQVlMLFFBQVFLLFVBSkw7QUFLZkMsdUJBQW1CTixRQUFRTSxpQkFMWjtBQU1mQyxhQU5lLHVCQU1IO0FBQ1ZDLGNBQVFDLEdBQVIsQ0FBWSx3QkFBWjtBQUNELEtBUmM7QUFTZkMsV0FUZSxtQkFTUEMsS0FUTyxFQVNBO0FBQ2JILGNBQVFHLEtBQVIsQ0FBYyxzQkFBZCxFQUFzQ0EsS0FBdEM7QUFDRCxLQVhjO0FBWWZDLGdCQVplLDBCQVlBO0FBQ2JKLGNBQVFDLEdBQVIsQ0FBWSxPQUFaO0FBQ0QsS0FkYztBQWVmSSxtQkFmZSwyQkFlQ0MsR0FmRCxFQWVNO0FBQ25CTixjQUFRQyxHQUFSLENBQVksK0JBQVo7QUFDRCxLQWpCYztBQWtCZk0sY0FsQmUsd0JBa0JGO0FBQ1hQLGNBQVFDLEdBQVIsQ0FBWSwwQkFBWjtBQUNEO0FBcEJjLEtBcUJaVCxPQXJCWSxFQUFqQjtBQXVCQSxNQUFNZ0IsbUJBQW1CLEVBQXpCO0FBQ0E7QUFDQSxrQkFBRUMsT0FBRixDQUFVLFVBQUNDLEdBQUQsRUFBUztBQUNqQkYscUJBQWlCRSxHQUFqQixJQUF3Qix5QkFBVWpCLFNBQVNpQixHQUFULEVBQWNDLElBQWQsQ0FBbUJsQixRQUFuQixDQUFWLENBQXhCO0FBQ0QsR0FGRCxFQUVHbUIsaUJBRkg7QUFHQTtBQUNBLGtCQUFFSCxPQUFGLENBQVUsVUFBQ0MsR0FBRCxFQUFTO0FBQ2pCRixxQkFBaUJFLEdBQWpCLElBQXdCakIsU0FBU2lCLEdBQVQsRUFBY0MsSUFBZCxDQUFtQmxCLFFBQW5CLENBQXhCO0FBQ0QsR0FGRCxFQUVHb0IsYUFGSDtBQUdBLFNBQU8sQ0FBQ3BCLFFBQUQsRUFBVWUsZ0JBQVYsQ0FBUDtBQUNEOztBQUVELElBQU1LLGdCQUFnQjtBQUNwQjtBQURvQixDQUF0Qjs7QUFJQSxJQUFNRCxvQkFBb0IsQ0FDeEIsVUFEd0IsRUFFeEIsYUFGd0IsRUFHeEIsVUFId0IsRUFJeEIsZ0JBSndCLENBQTFCOztBQU9BRSxPQUFPQyxPQUFQLEdBQWlCO0FBQ2Z4QjtBQURlLENBQWpCIiwiZmlsZSI6ImNoYXRyb29tLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IENoYXRyb29tIGZyb20gJy4uL2xpYnMvTklNX1dlYl9DaGF0cm9vbV92My44LjAnXHJcbmltcG9ydCBwcm9taXNpZnkgZnJvbSAnLi9wcm9taXNpZnknXHJcbmltcG9ydCB7IG5pbSBhcyBjb25maWcgfSBmcm9tICcuLi9jb25maWcnXHJcbmltcG9ydCBSIGZyb20gJy4uL2xpYnMvcmFtZGEnXHJcblxyXG4vKipcclxuICogZ2V0SW5zdGFuY2VcclxuICovXHJcbmZ1bmN0aW9uIGdldEluc3RhbmNlKG9wdGlvbnMpIHtcclxuICBjb25zdCBjaGF0cm9vbSA9IENoYXRyb29tLmdldEluc3RhbmNlKHtcclxuICAgIGFwcEtleTogY29uZmlnLmFwcEtleSxcclxuICAgIGFjY291bnQ6IG9wdGlvbnMuYWNjb3VudCxcclxuICAgIHRva2VuOiBvcHRpb25zLnRva2VuLFxyXG4gICAgY2hhdHJvb21JZDogb3B0aW9ucy5jaGF0cm9vbUlkLFxyXG4gICAgY2hhdHJvb21BZGRyZXNzZXM6IG9wdGlvbnMuY2hhdHJvb21BZGRyZXNzZXMsXHJcbiAgICBvbmNvbm5lY3QoKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKCdbTklNIENoYXRyb29tIGNvbm5lY3RdJylcclxuICAgIH0sXHJcbiAgICBvbmVycm9yKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ1tOSU0gQ2hhdHJvb21dIGVycm9yJywgZXJyb3IpXHJcbiAgICB9LFxyXG4gICAgb25kaXNjb25uZWN0KCkge1xyXG4gICAgICBjb25zb2xlLmxvZygn6IGK5aSp5a6k5pat5byAJylcclxuICAgIH0sXHJcbiAgICBvbndpbGxyZWNvbm5lY3Qob2JqKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKCdbTklNIENoYXRyb29tXSB3aWxsIHJlY29ubmVjdCcpXHJcbiAgICB9LFxyXG4gICAgb25zeW5jZG9uZSgpIHtcclxuICAgICAgY29uc29sZS5sb2coJ1tOSU0gQ2hhdHJvb21dIHN5bmMgZG9uZScpXHJcbiAgICB9LFxyXG4gICAgLi4ub3B0aW9uc1xyXG4gIH0pXHJcbiAgY29uc3QgY2hhdHJvb21Qcm9taXNlZCA9IHt9XHJcbiAgLy8gUHJvbWlzaWZ5IGNoYXRyb29tIGZ1bmN0aW9uc1xyXG4gIFIuZm9yRWFjaCgoa2V5KSA9PiB7XHJcbiAgICBjaGF0cm9vbVByb21pc2VkW2tleV0gPSBwcm9taXNpZnkoY2hhdHJvb21ba2V5XS5iaW5kKGNoYXRyb29tKSlcclxuICB9LCBwcm9taXNlZEZ1bmN0aW9ucylcclxuICAvLyBiaW5kIG90aGVyIGZ1bmN0aW9uc1xyXG4gIFIuZm9yRWFjaCgoa2V5KSA9PiB7XHJcbiAgICBjaGF0cm9vbVByb21pc2VkW2tleV0gPSBjaGF0cm9vbVtrZXldLmJpbmQoY2hhdHJvb20pXHJcbiAgfSwgbmVlZEZ1bmN0aW9ucylcclxuICByZXR1cm4gW2NoYXRyb29tLGNoYXRyb29tUHJvbWlzZWRdXHJcbn1cclxuXHJcbmNvbnN0IG5lZWRGdW5jdGlvbnMgPSBbXHJcbiAgLy8gJ21lcmdlTXNncydcclxuXVxyXG5cclxuY29uc3QgcHJvbWlzZWRGdW5jdGlvbnMgPSBbXHJcbiAgJ3NlbmRUZXh0JyxcclxuICAncHJldmlld0ZpbGUnLFxyXG4gICdzZW5kRmlsZScsXHJcbiAgJ2dldEhpc3RvcnlNc2dzJ1xyXG5dXHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IHtcclxuICBnZXRJbnN0YW5jZVxyXG59XHJcbiJdfQ==