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

var promisedFunctions = ['sendText', 'previewFile', 'sendFile', 'getHistoryMsgs'];

module.exports = {
  getInstance: getInstance
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoYXRyb29tLmpzIl0sIm5hbWVzIjpbImdldEluc3RhbmNlIiwib3B0aW9ucyIsImNoYXRyb29tIiwiYXBwS2V5IiwiYWNjb3VudCIsInRva2VuIiwiY2hhdHJvb21JZCIsImNoYXRyb29tQWRkcmVzc2VzIiwib25jb25uZWN0IiwiY29uc29sZSIsImxvZyIsIm9uZXJyb3IiLCJlcnJvciIsIm9uZGlzY29ubmVjdCIsIm9ud2lsbHJlY29ubmVjdCIsIm9iaiIsIm9uc3luY2RvbmUiLCJjaGF0cm9vbVByb21pc2VkIiwiZm9yRWFjaCIsImtleSIsImJpbmQiLCJwcm9taXNlZEZ1bmN0aW9ucyIsIm5lZWRGdW5jdGlvbnMiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7O0FBQ0E7Ozs7OztBQUVBOzs7QUFHQSxTQUFTQSxXQUFULENBQXFCQyxPQUFyQixFQUE4QjtBQUM1QixNQUFNQyxXQUFXLDZCQUFTRixXQUFUO0FBQ2ZHLFlBQVEsWUFBT0EsTUFEQTtBQUVmQyxhQUFTSCxRQUFRRyxPQUZGO0FBR2ZDLFdBQU9KLFFBQVFJLEtBSEE7QUFJZkMsZ0JBQVlMLFFBQVFLLFVBSkw7QUFLZkMsdUJBQW1CTixRQUFRTSxpQkFMWjtBQU1mQyxhQU5lLHVCQU1IO0FBQ1ZDLGNBQVFDLEdBQVIsQ0FBWSx3QkFBWjtBQUNELEtBUmM7QUFTZkMsV0FUZSxtQkFTUEMsS0FUTyxFQVNBO0FBQ2JILGNBQVFHLEtBQVIsQ0FBYyxzQkFBZCxFQUFzQ0EsS0FBdEM7QUFDRCxLQVhjO0FBWWZDLGdCQVplLDBCQVlBO0FBQ2JKLGNBQVFDLEdBQVIsQ0FBWSwyQkFBWjtBQUNELEtBZGM7QUFlZkksbUJBZmUsMkJBZUNDLEdBZkQsRUFlTTtBQUNuQk4sY0FBUUMsR0FBUixDQUFZLCtCQUFaO0FBQ0QsS0FqQmM7QUFrQmZNLGNBbEJlLHdCQWtCRjtBQUNYUCxjQUFRQyxHQUFSLENBQVksMEJBQVo7QUFDRDtBQXBCYyxLQXFCWlQsT0FyQlksRUFBakI7QUF1QkEsTUFBTWdCLG1CQUFtQixFQUF6QjtBQUNBO0FBQ0Esa0JBQUVDLE9BQUYsQ0FBVSxVQUFDQyxHQUFELEVBQVM7QUFDakJGLHFCQUFpQkUsR0FBakIsSUFBd0IseUJBQVVqQixTQUFTaUIsR0FBVCxFQUFjQyxJQUFkLENBQW1CbEIsUUFBbkIsQ0FBVixDQUF4QjtBQUNELEdBRkQsRUFFR21CLGlCQUZIO0FBR0E7QUFDQSxrQkFBRUgsT0FBRixDQUFVLFVBQUNDLEdBQUQsRUFBUztBQUNqQkYscUJBQWlCRSxHQUFqQixJQUF3QmpCLFNBQVNpQixHQUFULEVBQWNDLElBQWQsQ0FBbUJsQixRQUFuQixDQUF4QjtBQUNELEdBRkQsRUFFR29CLGFBRkg7QUFHQSxTQUFPTCxnQkFBUDtBQUNEOztBQUVELElBQU1LLGdCQUFnQjtBQUNwQjtBQURvQixDQUF0Qjs7QUFJQSxJQUFNRCxvQkFBb0IsQ0FDeEIsVUFEd0IsRUFFeEIsYUFGd0IsRUFHeEIsVUFId0IsRUFJeEIsZ0JBSndCLENBQTFCOztBQU9BRSxPQUFPQyxPQUFQLEdBQWlCO0FBQ2Z4QjtBQURlLENBQWpCIiwiZmlsZSI6ImNoYXRyb29tLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IENoYXRyb29tIGZyb20gJy4uL2xpYnMvTklNX1dlYl9DaGF0cm9vbV92My44LjAnXHJcbmltcG9ydCBwcm9taXNpZnkgZnJvbSAnLi9wcm9taXNpZnknXHJcbmltcG9ydCB7IG5pbSBhcyBjb25maWcgfSBmcm9tICcuLi9jb25maWcnXHJcbmltcG9ydCBSIGZyb20gJy4uL2xpYnMvcmFtZGEnXHJcblxyXG4vKipcclxuICogZ2V0SW5zdGFuY2VcclxuICovXHJcbmZ1bmN0aW9uIGdldEluc3RhbmNlKG9wdGlvbnMpIHtcclxuICBjb25zdCBjaGF0cm9vbSA9IENoYXRyb29tLmdldEluc3RhbmNlKHtcclxuICAgIGFwcEtleTogY29uZmlnLmFwcEtleSxcclxuICAgIGFjY291bnQ6IG9wdGlvbnMuYWNjb3VudCxcclxuICAgIHRva2VuOiBvcHRpb25zLnRva2VuLFxyXG4gICAgY2hhdHJvb21JZDogb3B0aW9ucy5jaGF0cm9vbUlkLFxyXG4gICAgY2hhdHJvb21BZGRyZXNzZXM6IG9wdGlvbnMuY2hhdHJvb21BZGRyZXNzZXMsXHJcbiAgICBvbmNvbm5lY3QoKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKCdbTklNIENoYXRyb29tIGNvbm5lY3RdJylcclxuICAgIH0sXHJcbiAgICBvbmVycm9yKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ1tOSU0gQ2hhdHJvb21dIGVycm9yJywgZXJyb3IpXHJcbiAgICB9LFxyXG4gICAgb25kaXNjb25uZWN0KCkge1xyXG4gICAgICBjb25zb2xlLmxvZygnW05JTSBDaGF0cm9vbV0gZGlzY29ubmVjdCcpXHJcbiAgICB9LFxyXG4gICAgb253aWxscmVjb25uZWN0KG9iaikge1xyXG4gICAgICBjb25zb2xlLmxvZygnW05JTSBDaGF0cm9vbV0gd2lsbCByZWNvbm5lY3QnKVxyXG4gICAgfSxcclxuICAgIG9uc3luY2RvbmUoKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKCdbTklNIENoYXRyb29tXSBzeW5jIGRvbmUnKVxyXG4gICAgfSxcclxuICAgIC4uLm9wdGlvbnNcclxuICB9KVxyXG4gIGNvbnN0IGNoYXRyb29tUHJvbWlzZWQgPSB7fVxyXG4gIC8vIFByb21pc2lmeSBjaGF0cm9vbSBmdW5jdGlvbnNcclxuICBSLmZvckVhY2goKGtleSkgPT4ge1xyXG4gICAgY2hhdHJvb21Qcm9taXNlZFtrZXldID0gcHJvbWlzaWZ5KGNoYXRyb29tW2tleV0uYmluZChjaGF0cm9vbSkpXHJcbiAgfSwgcHJvbWlzZWRGdW5jdGlvbnMpXHJcbiAgLy8gYmluZCBvdGhlciBmdW5jdGlvbnNcclxuICBSLmZvckVhY2goKGtleSkgPT4ge1xyXG4gICAgY2hhdHJvb21Qcm9taXNlZFtrZXldID0gY2hhdHJvb21ba2V5XS5iaW5kKGNoYXRyb29tKVxyXG4gIH0sIG5lZWRGdW5jdGlvbnMpXHJcbiAgcmV0dXJuIGNoYXRyb29tUHJvbWlzZWRcclxufVxyXG5cclxuY29uc3QgbmVlZEZ1bmN0aW9ucyA9IFtcclxuICAvLyAnbWVyZ2VNc2dzJ1xyXG5dXHJcblxyXG5jb25zdCBwcm9taXNlZEZ1bmN0aW9ucyA9IFtcclxuICAnc2VuZFRleHQnLFxyXG4gICdwcmV2aWV3RmlsZScsXHJcbiAgJ3NlbmRGaWxlJyxcclxuICAnZ2V0SGlzdG9yeU1zZ3MnXHJcbl1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0ge1xyXG4gIGdldEluc3RhbmNlXHJcbn1cclxuIl19