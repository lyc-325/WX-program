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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoYXRyb29tLmpzIl0sIm5hbWVzIjpbImdldEluc3RhbmNlIiwib3B0aW9ucyIsImNvbnNvbGUiLCJsb2ciLCJjaGF0cm9vbSIsImFwcEtleSIsImFjY291bnQiLCJ0b2tlbiIsImNoYXRyb29tSWQiLCJjaGF0cm9vbUFkZHJlc3NlcyIsIm9uY29ubmVjdCIsIm9uZXJyb3IiLCJlcnJvciIsIm9uZGlzY29ubmVjdCIsIm9ud2lsbHJlY29ubmVjdCIsIm9iaiIsIm9uc3luY2RvbmUiLCJjaGF0cm9vbVByb21pc2VkIiwiZm9yRWFjaCIsImtleSIsImJpbmQiLCJwcm9taXNlZEZ1bmN0aW9ucyIsIm5lZWRGdW5jdGlvbnMiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7O0FBQ0E7Ozs7OztBQUVBOzs7QUFHQSxTQUFTQSxXQUFULENBQXFCQyxPQUFyQixFQUE4QjtBQUM1QkMsVUFBUUMsR0FBUixDQUFZRixPQUFaO0FBQ0EsTUFBTUcsV0FBVyw2QkFBU0osV0FBVDtBQUNmSyxZQUFRLFlBQU9BLE1BREE7QUFFZkMsYUFBU0wsUUFBUUssT0FGRjtBQUdmQyxXQUFPTixRQUFRTSxLQUhBO0FBSWZDLGdCQUFZUCxRQUFRTyxVQUpMO0FBS2ZDLHVCQUFtQlIsUUFBUVEsaUJBTFo7QUFNZkMsYUFOZSx1QkFNSDtBQUNWUixjQUFRQyxHQUFSLENBQVksd0JBQVo7QUFDRCxLQVJjO0FBU2ZRLFdBVGUsbUJBU1BDLEtBVE8sRUFTQTtBQUNiVixjQUFRVSxLQUFSLENBQWMsc0JBQWQsRUFBc0NBLEtBQXRDO0FBQ0QsS0FYYztBQVlmQyxnQkFaZSwwQkFZQTtBQUNiWCxjQUFRQyxHQUFSLENBQVksMkJBQVo7QUFDRCxLQWRjO0FBZWZXLG1CQWZlLDJCQWVDQyxHQWZELEVBZU07QUFDbkJiLGNBQVFDLEdBQVIsQ0FBWSwrQkFBWjtBQUNELEtBakJjO0FBa0JmYSxjQWxCZSx3QkFrQkY7QUFDWGQsY0FBUUMsR0FBUixDQUFZLDBCQUFaO0FBQ0Q7QUFwQmMsS0FxQlpGLE9BckJZLEVBQWpCO0FBdUJBLE1BQU1nQixtQkFBbUIsRUFBekI7QUFDQTtBQUNBLGtCQUFFQyxPQUFGLENBQVUsVUFBQ0MsR0FBRCxFQUFTO0FBQ2pCRixxQkFBaUJFLEdBQWpCLElBQXdCLHlCQUFVZixTQUFTZSxHQUFULEVBQWNDLElBQWQsQ0FBbUJoQixRQUFuQixDQUFWLENBQXhCO0FBQ0QsR0FGRCxFQUVHaUIsaUJBRkg7QUFHQTtBQUNBLGtCQUFFSCxPQUFGLENBQVUsVUFBQ0MsR0FBRCxFQUFTO0FBQ2pCRixxQkFBaUJFLEdBQWpCLElBQXdCZixTQUFTZSxHQUFULEVBQWNDLElBQWQsQ0FBbUJoQixRQUFuQixDQUF4QjtBQUNELEdBRkQsRUFFR2tCLGFBRkg7QUFHQSxTQUFPTCxnQkFBUDtBQUNEOztBQUVELElBQU1LLGdCQUFnQjtBQUNwQjtBQURvQixDQUF0Qjs7QUFJQSxJQUFNRCxvQkFBb0IsQ0FDeEIsVUFEd0IsRUFFeEIsYUFGd0IsRUFHeEIsVUFId0IsRUFJeEIsZ0JBSndCLENBQTFCOztBQU9BRSxPQUFPQyxPQUFQLEdBQWlCO0FBQ2Z4QjtBQURlLENBQWpCIiwiZmlsZSI6ImNoYXRyb29tLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IENoYXRyb29tIGZyb20gJy4uL2xpYnMvTklNX1dlYl9DaGF0cm9vbV92My44LjAnXG5pbXBvcnQgcHJvbWlzaWZ5IGZyb20gJy4vcHJvbWlzaWZ5J1xuaW1wb3J0IHsgbmltIGFzIGNvbmZpZyB9IGZyb20gJy4uL2NvbmZpZydcbmltcG9ydCBSIGZyb20gJy4uL2xpYnMvcmFtZGEnXG5cbi8qKlxuICogZ2V0SW5zdGFuY2VcbiAqL1xuZnVuY3Rpb24gZ2V0SW5zdGFuY2Uob3B0aW9ucykge1xuICBjb25zb2xlLmxvZyhvcHRpb25zKVxuICBjb25zdCBjaGF0cm9vbSA9IENoYXRyb29tLmdldEluc3RhbmNlKHtcbiAgICBhcHBLZXk6IGNvbmZpZy5hcHBLZXksXG4gICAgYWNjb3VudDogb3B0aW9ucy5hY2NvdW50LFxuICAgIHRva2VuOiBvcHRpb25zLnRva2VuLFxuICAgIGNoYXRyb29tSWQ6IG9wdGlvbnMuY2hhdHJvb21JZCxcbiAgICBjaGF0cm9vbUFkZHJlc3Nlczogb3B0aW9ucy5jaGF0cm9vbUFkZHJlc3NlcyxcbiAgICBvbmNvbm5lY3QoKSB7XG4gICAgICBjb25zb2xlLmxvZygnW05JTSBDaGF0cm9vbSBjb25uZWN0XScpXG4gICAgfSxcbiAgICBvbmVycm9yKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmVycm9yKCdbTklNIENoYXRyb29tXSBlcnJvcicsIGVycm9yKVxuICAgIH0sXG4gICAgb25kaXNjb25uZWN0KCkge1xuICAgICAgY29uc29sZS5sb2coJ1tOSU0gQ2hhdHJvb21dIGRpc2Nvbm5lY3QnKVxuICAgIH0sXG4gICAgb253aWxscmVjb25uZWN0KG9iaikge1xuICAgICAgY29uc29sZS5sb2coJ1tOSU0gQ2hhdHJvb21dIHdpbGwgcmVjb25uZWN0JylcbiAgICB9LFxuICAgIG9uc3luY2RvbmUoKSB7XG4gICAgICBjb25zb2xlLmxvZygnW05JTSBDaGF0cm9vbV0gc3luYyBkb25lJylcbiAgICB9LFxuICAgIC4uLm9wdGlvbnNcbiAgfSlcbiAgY29uc3QgY2hhdHJvb21Qcm9taXNlZCA9IHt9XG4gIC8vIFByb21pc2lmeSBjaGF0cm9vbSBmdW5jdGlvbnNcbiAgUi5mb3JFYWNoKChrZXkpID0+IHtcbiAgICBjaGF0cm9vbVByb21pc2VkW2tleV0gPSBwcm9taXNpZnkoY2hhdHJvb21ba2V5XS5iaW5kKGNoYXRyb29tKSlcbiAgfSwgcHJvbWlzZWRGdW5jdGlvbnMpXG4gIC8vIGJpbmQgb3RoZXIgZnVuY3Rpb25zXG4gIFIuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgY2hhdHJvb21Qcm9taXNlZFtrZXldID0gY2hhdHJvb21ba2V5XS5iaW5kKGNoYXRyb29tKVxuICB9LCBuZWVkRnVuY3Rpb25zKVxuICByZXR1cm4gY2hhdHJvb21Qcm9taXNlZFxufVxuXG5jb25zdCBuZWVkRnVuY3Rpb25zID0gW1xuICAvLyAnbWVyZ2VNc2dzJ1xuXVxuXG5jb25zdCBwcm9taXNlZEZ1bmN0aW9ucyA9IFtcbiAgJ3NlbmRUZXh0JyxcbiAgJ3ByZXZpZXdGaWxlJyxcbiAgJ3NlbmRGaWxlJyxcbiAgJ2dldEhpc3RvcnlNc2dzJ1xuXVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgZ2V0SW5zdGFuY2Vcbn1cbiJdfQ==