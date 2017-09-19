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
  console.log(options);
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

var promisedFunctions = ['sendText', 'previewFile', 'sendFile', 'getHistoryMsgs'];

module.exports = {
  getInstance: getInstance
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoYXRyb29tLmpzIl0sIm5hbWVzIjpbImdldEluc3RhbmNlIiwib3B0aW9ucyIsImNvbnNvbGUiLCJsb2ciLCJjaGF0cm9vbSIsImFwcEtleSIsImFjY291bnQiLCJ0b2tlbiIsImNoYXRyb29tSWQiLCJjaGF0cm9vbUFkZHJlc3NlcyIsIm9uY29ubmVjdCIsIm9uZXJyb3IiLCJlcnJvciIsIm9uZGlzY29ubmVjdCIsIm9ud2lsbHJlY29ubmVjdCIsIm9iaiIsIm9uc3luY2RvbmUiLCJjaGF0cm9vbVByb21pc2VkIiwiZm9yRWFjaCIsImtleSIsImJpbmQiLCJwcm9taXNlZEZ1bmN0aW9ucyIsIm5lZWRGdW5jdGlvbnMiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7O0FBQ0E7Ozs7OztBQUVBOzs7QUFHQSxTQUFTQSxXQUFULENBQXFCQyxPQUFyQixFQUE4QjtBQUM1QkMsVUFBUUMsR0FBUixDQUFZRixPQUFaO0FBQ0EsTUFBTUcsV0FBVyw2QkFBU0osV0FBVDtBQUNmSyxZQUFRLFlBQU9BLE1BREE7QUFFZkMsYUFBU0wsUUFBUUssT0FGRjtBQUdmQyxXQUFPTixRQUFRTSxLQUhBO0FBSWZDLGdCQUFZUCxRQUFRTyxVQUpMO0FBS2ZDLHVCQUFtQlIsUUFBUVEsaUJBTFo7QUFNZkMsYUFOZSx1QkFNSDtBQUNWUixjQUFRQyxHQUFSLENBQVksd0JBQVo7QUFDRCxLQVJjO0FBU2ZRLFdBVGUsbUJBU1BDLEtBVE8sRUFTQTtBQUNiVixjQUFRVSxLQUFSLENBQWMsc0JBQWQsRUFBc0NBLEtBQXRDO0FBQ0QsS0FYYztBQVlmQyxnQkFaZSwwQkFZQTtBQUNiWCxjQUFRQyxHQUFSLENBQVksMkJBQVo7QUFDRCxLQWRjO0FBZWZXLG1CQWZlLDJCQWVDQyxHQWZELEVBZU07QUFDbkJiLGNBQVFDLEdBQVIsQ0FBWSwrQkFBWjtBQUNELEtBakJjO0FBa0JmYSxjQWxCZSx3QkFrQkY7QUFDWGQsY0FBUUMsR0FBUixDQUFZLDBCQUFaO0FBQ0Q7QUFwQmMsS0FxQlpGLE9BckJZLEVBQWpCO0FBdUJBLE1BQU1nQixtQkFBbUIsRUFBekI7QUFDQTtBQUNBLGtCQUFFQyxPQUFGLENBQVUsVUFBQ0MsR0FBRCxFQUFTO0FBQ2pCRixxQkFBaUJFLEdBQWpCLElBQXdCLHlCQUFVZixTQUFTZSxHQUFULEVBQWNDLElBQWQsQ0FBbUJoQixRQUFuQixDQUFWLENBQXhCO0FBQ0QsR0FGRCxFQUVHaUIsaUJBRkg7QUFHQTtBQUNBLGtCQUFFSCxPQUFGLENBQVUsVUFBQ0MsR0FBRCxFQUFTO0FBQ2pCRixxQkFBaUJFLEdBQWpCLElBQXdCZixTQUFTZSxHQUFULEVBQWNDLElBQWQsQ0FBbUJoQixRQUFuQixDQUF4QjtBQUNELEdBRkQsRUFFR2tCLGFBRkg7QUFHQSxTQUFPTCxnQkFBUDtBQUNEOztBQUVELElBQU1LLGdCQUFnQjtBQUNwQjtBQURvQixDQUF0Qjs7QUFJQSxJQUFNRCxvQkFBb0IsQ0FDeEIsVUFEd0IsRUFFeEIsYUFGd0IsRUFHeEIsVUFId0IsRUFJeEIsZ0JBSndCLENBQTFCOztBQU9BRSxPQUFPQyxPQUFQLEdBQWlCO0FBQ2Z4QjtBQURlLENBQWpCIiwiZmlsZSI6ImNoYXRyb29tLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IENoYXRyb29tIGZyb20gJy4uL2xpYnMvTklNX1dlYl9DaGF0cm9vbV92My44LjAnXHJcbmltcG9ydCBwcm9taXNpZnkgZnJvbSAnLi9wcm9taXNpZnknXHJcbmltcG9ydCB7IG5pbSBhcyBjb25maWcgfSBmcm9tICcuLi9jb25maWcnXHJcbmltcG9ydCBSIGZyb20gJy4uL2xpYnMvcmFtZGEnXHJcblxyXG4vKipcclxuICogZ2V0SW5zdGFuY2VcclxuICovXHJcbmZ1bmN0aW9uIGdldEluc3RhbmNlKG9wdGlvbnMpIHtcclxuICBjb25zb2xlLmxvZyhvcHRpb25zKVxyXG4gIGNvbnN0IGNoYXRyb29tID0gQ2hhdHJvb20uZ2V0SW5zdGFuY2Uoe1xyXG4gICAgYXBwS2V5OiBjb25maWcuYXBwS2V5LFxyXG4gICAgYWNjb3VudDogb3B0aW9ucy5hY2NvdW50LFxyXG4gICAgdG9rZW46IG9wdGlvbnMudG9rZW4sXHJcbiAgICBjaGF0cm9vbUlkOiBvcHRpb25zLmNoYXRyb29tSWQsXHJcbiAgICBjaGF0cm9vbUFkZHJlc3Nlczogb3B0aW9ucy5jaGF0cm9vbUFkZHJlc3NlcyxcclxuICAgIG9uY29ubmVjdCgpIHtcclxuICAgICAgY29uc29sZS5sb2coJ1tOSU0gQ2hhdHJvb20gY29ubmVjdF0nKVxyXG4gICAgfSxcclxuICAgIG9uZXJyb3IoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5lcnJvcignW05JTSBDaGF0cm9vbV0gZXJyb3InLCBlcnJvcilcclxuICAgIH0sXHJcbiAgICBvbmRpc2Nvbm5lY3QoKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKCdbTklNIENoYXRyb29tXSBkaXNjb25uZWN0JylcclxuICAgIH0sXHJcbiAgICBvbndpbGxyZWNvbm5lY3Qob2JqKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKCdbTklNIENoYXRyb29tXSB3aWxsIHJlY29ubmVjdCcpXHJcbiAgICB9LFxyXG4gICAgb25zeW5jZG9uZSgpIHtcclxuICAgICAgY29uc29sZS5sb2coJ1tOSU0gQ2hhdHJvb21dIHN5bmMgZG9uZScpXHJcbiAgICB9LFxyXG4gICAgLi4ub3B0aW9uc1xyXG4gIH0pXHJcbiAgY29uc3QgY2hhdHJvb21Qcm9taXNlZCA9IHt9XHJcbiAgLy8gUHJvbWlzaWZ5IGNoYXRyb29tIGZ1bmN0aW9uc1xyXG4gIFIuZm9yRWFjaCgoa2V5KSA9PiB7XHJcbiAgICBjaGF0cm9vbVByb21pc2VkW2tleV0gPSBwcm9taXNpZnkoY2hhdHJvb21ba2V5XS5iaW5kKGNoYXRyb29tKSlcclxuICB9LCBwcm9taXNlZEZ1bmN0aW9ucylcclxuICAvLyBiaW5kIG90aGVyIGZ1bmN0aW9uc1xyXG4gIFIuZm9yRWFjaCgoa2V5KSA9PiB7XHJcbiAgICBjaGF0cm9vbVByb21pc2VkW2tleV0gPSBjaGF0cm9vbVtrZXldLmJpbmQoY2hhdHJvb20pXHJcbiAgfSwgbmVlZEZ1bmN0aW9ucylcclxuICByZXR1cm4gY2hhdHJvb21Qcm9taXNlZFxyXG59XHJcblxyXG5jb25zdCBuZWVkRnVuY3Rpb25zID0gW1xyXG4gIC8vICdtZXJnZU1zZ3MnXHJcbl1cclxuXHJcbmNvbnN0IHByb21pc2VkRnVuY3Rpb25zID0gW1xyXG4gICdzZW5kVGV4dCcsXHJcbiAgJ3ByZXZpZXdGaWxlJyxcclxuICAnc2VuZEZpbGUnLFxyXG4gICdnZXRIaXN0b3J5TXNncydcclxuXVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSB7XHJcbiAgZ2V0SW5zdGFuY2VcclxufVxyXG4iXX0=