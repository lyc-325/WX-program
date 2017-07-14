'use strict';

var _stringify = require('./../npm/babel-runtime/core-js/json/stringify.js');

var _stringify2 = _interopRequireDefault(_stringify);

var _promise = require('./../npm/babel-runtime/core-js/promise.js');

var _promise2 = _interopRequireDefault(_promise);

var _extends2 = require('./../npm/babel-runtime/helpers/extends.js');

var _extends3 = _interopRequireDefault(_extends2);

var _ramda = require('./../libs/ramda.js');

var _ramda2 = _interopRequireDefault(_ramda);

var _NIM_Web_NIM_v = require('./../libs/NIM_Web_NIM_v3.8.0.js');

var _NIM_Web_NIM_v2 = _interopRequireDefault(_NIM_Web_NIM_v);

var _promisify = require('./promisify.js');

var _promisify2 = _interopRequireDefault(_promisify);

var _config = require('./../config.js');

var _sha = require('./../npm/sha1/sha1.js');

var _sha2 = _interopRequireDefault(_sha);

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var config = _config.nim;
/**
 * 创建请求头
 */
function createHeader() {
  var nonce = Math.ceil(Math.random() * 10000).toString();
  var curTime = (Date.parse(new Date()) / 1000).toString();
  var checkSum = (0, _sha2.default)('' + config.appSecret + nonce + curTime);
  return {
    'Content-Type': 'application/x-www-form-urlencoded',
    AppKey: config.appKey,
    CurTime: curTime,
    Nonce: nonce,
    CheckSum: checkSum
  };
}

/**
 * 执行 NIM 相关请求
 */
function request(options) {
  var api = options.api,
      data = options.data,
      method = options.method;

  var header = (0, _extends3.default)({}, createHeader(), options.header || {});
  return _wepy2.default.request({
    url: config.server + '/' + api,
    header: header,
    data: data,
    method: method || 'POST'
  }).then(function (_ref) {
    var data = _ref.data;

    return data.code === 200 ? _promise2.default.resolve(data) : _promise2.default.reject(data);
  });
}

/**
 * 创建用户
 * @param accid String
 * @param name String
 * @param icon String
 * @param props Object
 */
function create(accid, name, icon, props) {
  return request({
    api: 'user/create.action',
    data: {
      accid: accid,
      name: name,
      icon: icon,
      props: props
    }
  }).then(_ramda2.default.prop('info'));
}

/**
 * 登录用户，获得token
 * @param accid String
 */
function login(accid) {
  return request({
    api: 'user/refreshToken.action',
    data: {
      accid: accid
    }
  }).then(_ramda2.default.compose(_ramda2.default.prop('token'), _ramda2.default.prop('info')));
}

/**
 * 获得 NIM 实例
 * @param options.account String 账户名
 * @param options.token String token
 * @param options.onSessions Function
 */
function getInstance(options) {
  var nim = _NIM_Web_NIM_v2.default.getInstance((0, _extends3.default)({
    db: true,
    appKey: config.appKey,
    onerror: function onerror(error) {
      console.error('[NIM] error', error);
    },
    ondisconnect: function ondisconnect() {
      console.log('[NIM] disconnect');
    },
    onwillreconnect: function onwillreconnect(obj) {
      console.log('[NIM] will reconnect');
    },
    onsyncdone: function onsyncdone() {
      console.log('[NIM] sync done');
    },
    onfriends: function onfriends(friends) {
      console.log('[NIM] on friends', friends);
    }
  }, options));
  var nimPromised = {};
  // Promisify nim functions
  _ramda2.default.forEach(function (key) {
    nimPromised[key] = (0, _promisify2.default)(nim[key].bind(nim));
  }, promisedFunctions);
  // bind other functions
  _ramda2.default.forEach(function (key) {
    nimPromised[key] = nim[key].bind(nim);
  }, needFunctions);
  return nimPromised;
}

/**
 * 获得用户名片
 * @param  accid String
 */
function getUserInfo(accid) {
  return request({
    api: 'user/getUinfos.action',
    data: {
      accids: (0, _stringify2.default)([accid])
    }
  }).then(_ramda2.default.compose(_ramda2.default.head, _ramda2.default.prop('uinfos')));
}

var _addFriend = _ramda2.default.curry(function (type, accid, faccid, msg) {
  return request({
    api: 'friend/add.action',
    data: {
      accid: accid,
      faccid: faccid,
      type: type,
      msg: msg || ''
    }
  });
});

// 发送好友申请
var sendApply = _addFriend(1);
// 接受好友申请
var acceptFriendApply = _addFriend(3);
// 拒绝好友申请
var rejectFriendApply = _addFriend(4);

var needFunctions = ['mergeSessions', 'mergeMsgs'];

/**
 * 需要被 Promise 化的函数
 */
var promisedFunctions = [
// 好友关系相关 API
'addFriend', 'applyFriend', 'passFriendApply', 'rejectFriendApply', 'deleteFriend', 'updateFriend',

// 消息相关
'sendText', 'previewFile', 'sendFile', 'resendMsg', 'markMsgRead', 'getHistoryMsgs', // 云端保存的历史记录

// 聊天室
'getChatroomAddress'];

module.exports = {
  login: login,
  create: create,
  getInstance: getInstance,
  getUserInfo: getUserInfo,
  sendApply: sendApply,
  acceptFriendApply: acceptFriendApply,
  rejectFriendApply: rejectFriendApply
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5pbS5qcyJdLCJuYW1lcyI6WyJjb25maWciLCJjcmVhdGVIZWFkZXIiLCJub25jZSIsIk1hdGgiLCJjZWlsIiwicmFuZG9tIiwidG9TdHJpbmciLCJjdXJUaW1lIiwiRGF0ZSIsInBhcnNlIiwiY2hlY2tTdW0iLCJhcHBTZWNyZXQiLCJBcHBLZXkiLCJhcHBLZXkiLCJDdXJUaW1lIiwiTm9uY2UiLCJDaGVja1N1bSIsInJlcXVlc3QiLCJvcHRpb25zIiwiYXBpIiwiZGF0YSIsIm1ldGhvZCIsImhlYWRlciIsInVybCIsInNlcnZlciIsInRoZW4iLCJjb2RlIiwicmVzb2x2ZSIsInJlamVjdCIsImNyZWF0ZSIsImFjY2lkIiwibmFtZSIsImljb24iLCJwcm9wcyIsInByb3AiLCJsb2dpbiIsImNvbXBvc2UiLCJnZXRJbnN0YW5jZSIsIm5pbSIsImRiIiwib25lcnJvciIsImVycm9yIiwiY29uc29sZSIsIm9uZGlzY29ubmVjdCIsImxvZyIsIm9ud2lsbHJlY29ubmVjdCIsIm9iaiIsIm9uc3luY2RvbmUiLCJvbmZyaWVuZHMiLCJmcmllbmRzIiwibmltUHJvbWlzZWQiLCJmb3JFYWNoIiwia2V5IiwiYmluZCIsInByb21pc2VkRnVuY3Rpb25zIiwibmVlZEZ1bmN0aW9ucyIsImdldFVzZXJJbmZvIiwiYWNjaWRzIiwiaGVhZCIsIl9hZGRGcmllbmQiLCJjdXJyeSIsInR5cGUiLCJmYWNjaWQiLCJtc2ciLCJzZW5kQXBwbHkiLCJhY2NlcHRGcmllbmRBcHBseSIsInJlamVjdEZyaWVuZEFwcGx5IiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7QUFDQTs7OztBQUNBOzs7Ozs7QUFFQSxJQUFNQSxvQkFBTjtBQUNBOzs7QUFHQSxTQUFTQyxZQUFULEdBQXdCO0FBQ3RCLE1BQU1DLFFBQVFDLEtBQUtDLElBQUwsQ0FBVUQsS0FBS0UsTUFBTCxLQUFnQixLQUExQixFQUFp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QW9CO0FBQ3hCO0FBQ0EsV0FGd0IsRUFHeEIsYUFId0IsRUFJeEIsaUJBSndCLEVBS3hCLG1CQUx3QixFQU14QixjQU53QixFQU94QixjQVB3Qjs7QUFTeEI7QUFDQSxVQVZ3QixFQVd4QixhQVh3QixFQVl4QixVQVp3QixFQWF4QixXQWJ3QixFQWN4QixhQWR3QixFQWV4QixnQkFmd0IsRUFlTjs7QUFFbEI7QUFDQSxvQkFsQndCLENBQTFCOztBQXFCQWEsT0FBT0MsT0FBUCxHQUFpQjtBQUNmakMsY0FEZTtBQUVmTixnQkFGZTtBQUdmUSwwQkFIZTtBQUlmbUIsMEJBSmU7QUFLZlEsc0JBTGU7QUFNZkMsc0NBTmU7QUFPZkM7QUFQZSxDQUFqQiIsImZpbGUiOiJuaW0uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUiBmcm9tICcuLi9saWJzL3JhbWRhJ1xuaW1wb3J0IE5JTSBmcm9tICcuLi9saWJzL05JTV9XZWJfTklNX3YzLjguMCdcbmltcG9ydCBwcm9taXNpZnkgZnJvbSAnLi9wcm9taXNpZnknXG5pbXBvcnQgeyBuaW0gfSBmcm9tICcuLi9jb25maWcnXG5pbXBvcnQgc2hhMSBmcm9tICdzaGExJ1xuaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcblxuY29uc3QgY29uZmlnID0gbmltXG4vKipcbiAqIOWIm+W7uuivt+axguWktFxuICovXG5mdW5jdGlvbiBjcmVhdGVIZWFkZXIoKSB7XG4gIGNvbnN0IG5vbmNlID0gTWF0aC5jZWlsKE1hdGgucmFuZG9tKCkgKiAxMDAwMCkudG9TdHJpbmcoKVxuICBjb25zdCBjdXJUaW1lID0gKERhdGUucGFyc2UobmV3IERhdGUoKSkgLyAxMDAwKS50b1N0cmluZygpXG4gIGNvbnN0IGNoZWNrU3VtID0gc2hhMShgJHtjb25maWcuYXBwU2VjcmV0fSR7bm9uY2V9JHtjdXJUaW1lfWApXG4gIHJldHVybiB7XG4gICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQnLFxuICAgIEFwcEtleTogY29uZmlnLmFwcEtleSxcbiAgICBDdXJUaW1lOiBjdXJUaW1lLFxuICAgIE5vbmNlOiBub25jZSxcbiAgICBDaGVja1N1bTogY2hlY2tTdW1cbiAgfVxufVxuXG4vKipcbiAqIOaJp+ihjCBOSU0g55u45YWz6K+35rGCXG4gKi9cbmZ1bmN0aW9uIHJlcXVlc3Qob3B0aW9ucykge1xuICBjb25zdCB7YXBpLCBkYXRhLCBtZXRob2R9ID0gb3B0aW9uc1xuICBjb25zdCBoZWFkZXIgPSB7XG4gICAgLi4uY3JlYXRlSGVhZGVyKCksXG4gICAgLi4uKG9wdGlvbnMuaGVhZGVyIHx8IHt9KVxuICB9XG4gIHJldHVybiB3ZXB5LnJlcXVlc3Qoe1xuICAgIHVybDogYCR7Y29uZmlnLnNlcnZlcn0vJHthcGl9YCxcbiAgICBoZWFkZXIsXG4gICAgZGF0YSxcbiAgICBtZXRob2Q6IG1ldGhvZCB8fCAnUE9TVCdcbiAgfSkudGhlbigoeyBkYXRhIH0pID0+IHtcbiAgICByZXR1cm4gZGF0YS5jb2RlID09PSAyMDAgPyBQcm9taXNlLnJlc29sdmUoZGF0YSkgOiBQcm9taXNlLnJlamVjdChkYXRhKVxuICB9KVxufVxuXG4vKipcbiAqIOWIm+W7uueUqOaIt1xuICogQHBhcmFtIGFjY2lkIFN0cmluZ1xuICogQHBhcmFtIG5hbWUgU3RyaW5nXG4gKiBAcGFyYW0gaWNvbiBTdHJpbmdcbiAqIEBwYXJhbSBwcm9wcyBPYmplY3RcbiAqL1xuZnVuY3Rpb24gY3JlYXRlKGFjY2lkLCBuYW1lLCBpY29uLCBwcm9wcykge1xuICByZXR1cm4gcmVxdWVzdCh7XG4gICAgYXBpOiAndXNlci9jcmVhdGUuYWN0aW9uJyxcbiAgICBkYXRhOiB7XG4gICAgICBhY2NpZCxcbiAgICAgIG5hbWUsXG4gICAgICBpY29uLFxuICAgICAgcHJvcHNcbiAgICB9XG4gIH0pLnRoZW4oUi5wcm9wKCdpbmZvJykpXG59XG5cbi8qKlxuICog55m75b2V55So5oi377yM6I635b6XdG9rZW5cbiAqIEBwYXJhbSBhY2NpZCBTdHJpbmdcbiAqL1xuZnVuY3Rpb24gbG9naW4oYWNjaWQpIHtcbiAgcmV0dXJuIHJlcXVlc3Qoe1xuICAgIGFwaTogJ3VzZXIvcmVmcmVzaFRva2VuLmFjdGlvbicsXG4gICAgZGF0YToge1xuICAgICAgYWNjaWRcbiAgICB9XG4gIH0pLnRoZW4oUi5jb21wb3NlKFIucHJvcCgndG9rZW4nKSwgUi5wcm9wKCdpbmZvJykpKVxufVxuXG4vKipcbiAqIOiOt+W+lyBOSU0g5a6e5L6LXG4gKiBAcGFyYW0gb3B0aW9ucy5hY2NvdW50IFN0cmluZyDotKbmiLflkI1cbiAqIEBwYXJhbSBvcHRpb25zLnRva2VuIFN0cmluZyB0b2tlblxuICogQHBhcmFtIG9wdGlvbnMub25TZXNzaW9ucyBGdW5jdGlvblxuICovXG5mdW5jdGlvbiBnZXRJbnN0YW5jZShvcHRpb25zKSB7XG4gIGNvbnN0IG5pbSA9IE5JTS5nZXRJbnN0YW5jZSh7XG4gICAgZGI6IHRydWUsXG4gICAgYXBwS2V5OiBjb25maWcuYXBwS2V5LFxuICAgIG9uZXJyb3IoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ1tOSU1dIGVycm9yJywgZXJyb3IpXG4gICAgfSxcbiAgICBvbmRpc2Nvbm5lY3QoKSB7XG4gICAgICBjb25zb2xlLmxvZygnW05JTV0gZGlzY29ubmVjdCcpXG4gICAgfSxcbiAgICBvbndpbGxyZWNvbm5lY3Qob2JqKSB7XG4gICAgICBjb25zb2xlLmxvZygnW05JTV0gd2lsbCByZWNvbm5lY3QnKVxuICAgIH0sXG4gICAgb25zeW5jZG9uZSgpIHtcbiAgICAgIGNvbnNvbGUubG9nKCdbTklNXSBzeW5jIGRvbmUnKVxuICAgIH0sXG4gICAgb25mcmllbmRzKGZyaWVuZHMpIHtcbiAgICAgIGNvbnNvbGUubG9nKCdbTklNXSBvbiBmcmllbmRzJywgZnJpZW5kcylcbiAgICB9LFxuICAgIC4uLm9wdGlvbnNcbiAgfSlcbiAgY29uc3QgbmltUHJvbWlzZWQgPSB7fVxuICAvLyBQcm9taXNpZnkgbmltIGZ1bmN0aW9uc1xuICBSLmZvckVhY2goKGtleSkgPT4ge1xuICAgIG5pbVByb21pc2VkW2tleV0gPSBwcm9taXNpZnkobmltW2tleV0uYmluZChuaW0pKVxuICB9LCBwcm9taXNlZEZ1bmN0aW9ucylcbiAgLy8gYmluZCBvdGhlciBmdW5jdGlvbnNcbiAgUi5mb3JFYWNoKChrZXkpID0+IHtcbiAgICBuaW1Qcm9taXNlZFtrZXldID0gbmltW2tleV0uYmluZChuaW0pXG4gIH0sIG5lZWRGdW5jdGlvbnMpXG4gIHJldHVybiBuaW1Qcm9taXNlZFxufVxuXG4vKipcbiAqIOiOt+W+l+eUqOaIt+WQjeeJh1xuICogQHBhcmFtICBhY2NpZCBTdHJpbmdcbiAqL1xuZnVuY3Rpb24gZ2V0VXNlckluZm8oYWNjaWQpIHtcbiAgcmV0dXJuIHJlcXVlc3Qoe1xuICAgIGFwaTogJ3VzZXIvZ2V0VWluZm9zLmFjdGlvbicsXG4gICAgZGF0YToge1xuICAgICAgYWNjaWRzOiBKU09OLnN0cmluZ2lmeShbYWNjaWRdKVxuICAgIH1cbiAgfSkudGhlbihSLmNvbXBvc2UoUi5oZWFkLCBSLnByb3AoJ3VpbmZvcycpKSlcbn1cblxuY29uc3QgX2FkZEZyaWVuZCA9IFIuY3VycnkoZnVuY3Rpb24gKHR5cGUsIGFjY2lkLCBmYWNjaWQsIG1zZykge1xuICByZXR1cm4gcmVxdWVzdCh7XG4gICAgYXBpOiAnZnJpZW5kL2FkZC5hY3Rpb24nLFxuICAgIGRhdGE6IHtcbiAgICAgIGFjY2lkLFxuICAgICAgZmFjY2lkLFxuICAgICAgdHlwZSxcbiAgICAgIG1zZzogbXNnIHx8ICcnXG4gICAgfVxuICB9KVxufSlcblxuLy8g5Y+R6YCB5aW95Y+L55Sz6K+3XG5jb25zdCBzZW5kQXBwbHkgPSBfYWRkRnJpZW5kKDEpXG4vLyDmjqXlj5flpb3lj4vnlLPor7dcbmNvbnN0IGFjY2VwdEZyaWVuZEFwcGx5ID0gX2FkZEZyaWVuZCgzKVxuLy8g5ouS57ud5aW95Y+L55Sz6K+3XG5jb25zdCByZWplY3RGcmllbmRBcHBseSA9IF9hZGRGcmllbmQoNClcblxuY29uc3QgbmVlZEZ1bmN0aW9ucyA9IFtcbiAgJ21lcmdlU2Vzc2lvbnMnLFxuICAnbWVyZ2VNc2dzJ1xuXVxuXG4vKipcbiAqIOmcgOimgeiiqyBQcm9taXNlIOWMlueahOWHveaVsFxuICovXG5jb25zdCBwcm9taXNlZEZ1bmN0aW9ucyA9IFtcbiAgLy8g5aW95Y+L5YWz57O755u45YWzIEFQSVxuICAnYWRkRnJpZW5kJyxcbiAgJ2FwcGx5RnJpZW5kJyxcbiAgJ3Bhc3NGcmllbmRBcHBseScsXG4gICdyZWplY3RGcmllbmRBcHBseScsXG4gICdkZWxldGVGcmllbmQnLFxuICAndXBkYXRlRnJpZW5kJyxcblxuICAvLyDmtojmga/nm7jlhbNcbiAgJ3NlbmRUZXh0JyxcbiAgJ3ByZXZpZXdGaWxlJyxcbiAgJ3NlbmRGaWxlJyxcbiAgJ3Jlc2VuZE1zZycsXG4gICdtYXJrTXNnUmVhZCcsXG4gICdnZXRIaXN0b3J5TXNncycsIC8vIOS6keerr+S/neWtmOeahOWOhuWPsuiusOW9lVxuXG4gIC8vIOiBiuWkqeWupFxuICAnZ2V0Q2hhdHJvb21BZGRyZXNzJ1xuXVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgbG9naW4sXG4gIGNyZWF0ZSxcbiAgZ2V0SW5zdGFuY2UsXG4gIGdldFVzZXJJbmZvLFxuICBzZW5kQXBwbHksXG4gIGFjY2VwdEZyaWVuZEFwcGx5LFxuICByZWplY3RGcmllbmRBcHBseVxufVxuIl19