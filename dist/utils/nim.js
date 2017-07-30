'use strict';

var _stringify = require('./../npm/babel-runtime/core-js/json/stringify.js');

var _stringify2 = _interopRequireDefault(_stringify);

var _promise = require('./../npm/babel-runtime/core-js/promise.js');

var _promise2 = _interopRequireDefault(_promise);

var _extends2 = require('./../npm/babel-runtime/helpers/extends.js');

var _extends3 = _interopRequireDefault(_extends2);

var _ramda = require('./../libs/ramda.js');

var _ramda2 = _interopRequireDefault(_ramda);

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

// import NIM from '../libs/NIM_Web_NIM_v3.8.0'
// import promisify from './promisify'
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
function getInstance(options) {}
// const nim = NIM.getInstance({
//   db: true,
//   appKey: config.appKey,
//   onerror(error) {
//     console.error('[NIM] error', error)
//   },
//   ondisconnect() {
//     console.log('[NIM] disconnect')
//   },
//   onwillreconnect(obj) {
//     console.log('[NIM] will reconnect')
//   },
//   onsyncdone() {
//     console.log('[NIM] sync done')
//   },
//   ...options
// })
// const nimPromised = {}
// // Promisify nim functions
// R.forEach((key) => {
//   nimPromised[key] = promisify(nim[key].bind(nim))
// }, promisedFunctions)
// // bind other functions
// R.forEach((key) => {
//   nimPromised[key] = nim[key].bind(nim)
// }, needFunctions)
// return nimPromised


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

/**
 * 获得聊天室
 * @param  {Array} ids
 */
var getChatrooms = function getChatrooms(ids) {
  var requests = ids.map(function (id) {
    return request({
      api: 'chatroom/get.action',
      data: {
        roomid: id,
        needOnlineUserCount: true
      }
    }).then(_ramda2.default.prop('chatroom'));
  });
  return _promise2.default.all(requests);
};

/**
 * 获得聊天室地址
 * @param  {String} accid
 * @param  {String} id
 */
var getChatroomAddresses = function getChatroomAddresses(accid, id) {
  return request({
    api: 'chatroom/requestAddr.action',
    data: {
      roomid: id,
      accid: accid
    }
  }).then(_ramda2.default.prop('addr'));
};

// const needFunctions = [
//   'mergeSessions',
//   'mergeMsgs',
//   'disconnect',
//   'connect'
// ]
//
// /**
//  * 需要被 Promise 化的函数
//  */
// const promisedFunctions = [
//   // 好友关系相关 API
//   'addFriend',
//   'applyFriend',
//   'passFriendApply',
//   'rejectFriendApply',
//   'deleteFriend',
//   'updateFriend',
//
//   // 消息相关
//   'sendText',
//   'previewFile',
//   'sendFile',
//   'resendMsg',
//   'markMsgRead',
//   'getHistoryMsgs', // 云端保存的历史记录
//
//   // 聊天室
//   'getChatroomAddress'
// ]

module.exports = {
  login: login,
  create: create,
  getInstance: getInstance,
  getUserInfo: getUserInfo,
  sendApply: sendApply,
  acceptFriendApply: acceptFriendApply,
  rejectFriendApply: rejectFriendApply,
  getChatrooms: getChatrooms,
  getChatroomAddresses: getChatroomAddresses
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5pbS5qcyJdLCJuYW1lcyI6WyJjb25maWciLCJjcmVhdGVIZWFkZXIiLCJub25jZSIsIk1hdGgiLCJjZWlsIiwicmFuZG9tIiwidG9TdHJpbmciLCJjdXJUaW1lIiwiRGF0ZSIsInBhcnNlIiwiY2hlY2tTdW0iLCJhcHBTZWNyZXQiLCJBcHBLZXkiLCJhcHBLZXkiLCJDdXJUaW1lIiwiTm9uY2UiLCJDaGVja1N1bSIsInJlcXVlc3QiLCJvcHRpb25zIiwiYXBpIiwiZGF0YSIsIm1ldGhvZCIsImhlYWRlciIsInVybCIsInNlcnZlciIsInRoZW4iLCJjb2RlIiwicmVzb2x2ZSIsInJlamVjdCIsImNyZWF0ZSIsImFjY2lkIiwibmFtZSIsImljb24iLCJwcm9wcyIsInByb3AiLCJsb2dpbiIsImNvbXBvc2UiLCJnZXRJbnN0YW5jZSIsImdldFVzZXJJbmZvIiwiYWNjaWRzIiwiaGVhZCIsIl9hZGRGcmllbmQiLCJjdXJyeSIsInR5cGUiLCJmYWNjaWQiLCJtc2ciLCJzZW5kQXBwbHkiLCJhY2NlcHRGcmllbmRBcHBseSIsInJlamVjdEZyaWVuZEFwcGx5IiwiZ2V0Q2hhdHJvb21zIiwiaWRzIiwicmVxdWVzdHMiLCJtYXAiLCJyb29taWQiLCJpZCIsIm5lZWRPbmxpbmVVc2VyQ291bnQiLCJhbGwiLCJnZXRDaGF0cm9vbUFkZHJlc3NlcyIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFHQTs7QUFDQTs7OztBQUNBOzs7Ozs7QUFFQSxJQUFNQSxvQkFBTjtBQUNBOzs7O0FBUEE7QUFDQTtBQVNBLFNBQVNDLFlBQVQsR0FBd0I7QUFDdEIsTUFBTUMsUUFBUUMsS0FBS0MsSUFBTCxDQUFVRCxLQUFLRSxNQUFMLEtBQWdCLEtBQTFCLEVBQWlDQyxRQUFqQyxFQUFkO0FBQ0EsTUFBTUMsVUFBVSxDQUFDQyxLQUFLQyxLQUFMLENBQVcsSUFBSUQsSUFBSixFQUFYLElBQXlCLElBQTFCLEVBQWdDRixRQUFoQyxF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c0NBUGU7QUFRZkMsNEJBUmU7QUFTZlE7QUFUZSxDQUFqQiIsImZpbGUiOiJuaW0uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUiBmcm9tICcuLi9saWJzL3JhbWRhJ1xyXG4vLyBpbXBvcnQgTklNIGZyb20gJy4uL2xpYnMvTklNX1dlYl9OSU1fdjMuOC4wJ1xyXG4vLyBpbXBvcnQgcHJvbWlzaWZ5IGZyb20gJy4vcHJvbWlzaWZ5J1xyXG5pbXBvcnQgeyBuaW0gfSBmcm9tICcuLi9jb25maWcnXHJcbmltcG9ydCBzaGExIGZyb20gJ3NoYTEnXHJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXHJcblxyXG5jb25zdCBjb25maWcgPSBuaW1cclxuLyoqXHJcbiAqIOWIm+W7uuivt+axguWktFxyXG4gKi9cclxuZnVuY3Rpb24gY3JlYXRlSGVhZGVyKCkge1xyXG4gIGNvbnN0IG5vbmNlID0gTWF0aC5jZWlsKE1hdGgucmFuZG9tKCkgKiAxMDAwMCkudG9TdHJpbmcoKVxyXG4gIGNvbnN0IGN1clRpbWUgPSAoRGF0ZS5wYXJzZShuZXcgRGF0ZSgpKSAvIDEwMDApLnRvU3RyaW5nKClcclxuICBjb25zdCBjaGVja1N1bSA9IHNoYTEoYCR7Y29uZmlnLmFwcFNlY3JldH0ke25vbmNlfSR7Y3VyVGltZX1gKVxyXG4gIHJldHVybiB7XHJcbiAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCcsXHJcbiAgICBBcHBLZXk6IGNvbmZpZy5hcHBLZXksXHJcbiAgICBDdXJUaW1lOiBjdXJUaW1lLFxyXG4gICAgTm9uY2U6IG5vbmNlLFxyXG4gICAgQ2hlY2tTdW06IGNoZWNrU3VtXHJcbiAgfVxyXG59XHJcblxyXG4vKipcclxuICog5omn6KGMIE5JTSDnm7jlhbPor7fmsYJcclxuICovXHJcbmZ1bmN0aW9uIHJlcXVlc3Qob3B0aW9ucykge1xyXG4gIGNvbnN0IHsgYXBpLCBkYXRhLCBtZXRob2QgfSA9IG9wdGlvbnNcclxuICBjb25zdCBoZWFkZXIgPSB7XHJcbiAgICAuLi5jcmVhdGVIZWFkZXIoKSxcclxuICAgIC4uLihvcHRpb25zLmhlYWRlciB8fCB7fSlcclxuICB9XHJcbiAgcmV0dXJuIHdlcHkucmVxdWVzdCh7XHJcbiAgICB1cmw6IGAke2NvbmZpZy5zZXJ2ZXJ9LyR7YXBpfWAsXHJcbiAgICBoZWFkZXIsXHJcbiAgICBkYXRhLFxyXG4gICAgbWV0aG9kOiBtZXRob2QgfHwgJ1BPU1QnXHJcbiAgfSkudGhlbigoeyBkYXRhIH0pID0+IHtcclxuICAgIHJldHVybiBkYXRhLmNvZGUgPT09IDIwMCA/IFByb21pc2UucmVzb2x2ZShkYXRhKSA6IFByb21pc2UucmVqZWN0KGRhdGEpXHJcbiAgfSlcclxufVxyXG5cclxuLyoqXHJcbiAqIOWIm+W7uueUqOaIt1xyXG4gKiBAcGFyYW0gYWNjaWQgU3RyaW5nXHJcbiAqIEBwYXJhbSBuYW1lIFN0cmluZ1xyXG4gKiBAcGFyYW0gaWNvbiBTdHJpbmdcclxuICogQHBhcmFtIHByb3BzIE9iamVjdFxyXG4gKi9cclxuZnVuY3Rpb24gY3JlYXRlKGFjY2lkLCBuYW1lLCBpY29uLCBwcm9wcykge1xyXG4gIHJldHVybiByZXF1ZXN0KHtcclxuICAgIGFwaTogJ3VzZXIvY3JlYXRlLmFjdGlvbicsXHJcbiAgICBkYXRhOiB7XHJcbiAgICAgIGFjY2lkLFxyXG4gICAgICBuYW1lLFxyXG4gICAgICBpY29uLFxyXG4gICAgICBwcm9wc1xyXG4gICAgfVxyXG4gIH0pLnRoZW4oUi5wcm9wKCdpbmZvJykpXHJcbn1cclxuXHJcbi8qKlxyXG4gKiDnmbvlvZXnlKjmiLfvvIzojrflvpd0b2tlblxyXG4gKiBAcGFyYW0gYWNjaWQgU3RyaW5nXHJcbiAqL1xyXG5mdW5jdGlvbiBsb2dpbihhY2NpZCkge1xyXG4gIHJldHVybiByZXF1ZXN0KHtcclxuICAgIGFwaTogJ3VzZXIvcmVmcmVzaFRva2VuLmFjdGlvbicsXHJcbiAgICBkYXRhOiB7XHJcbiAgICAgIGFjY2lkXHJcbiAgICB9XHJcbiAgfSkudGhlbihSLmNvbXBvc2UoUi5wcm9wKCd0b2tlbicpLCBSLnByb3AoJ2luZm8nKSkpXHJcbn1cclxuXHJcbi8qKlxyXG4gKiDojrflvpcgTklNIOWunuS+i1xyXG4gKiBAcGFyYW0gb3B0aW9ucy5hY2NvdW50IFN0cmluZyDotKbmiLflkI1cclxuICogQHBhcmFtIG9wdGlvbnMudG9rZW4gU3RyaW5nIHRva2VuXHJcbiAqIEBwYXJhbSBvcHRpb25zLm9uU2Vzc2lvbnMgRnVuY3Rpb25cclxuICovXHJcbmZ1bmN0aW9uIGdldEluc3RhbmNlKG9wdGlvbnMpIHtcclxuICAvLyBjb25zdCBuaW0gPSBOSU0uZ2V0SW5zdGFuY2Uoe1xyXG4gIC8vICAgZGI6IHRydWUsXHJcbiAgLy8gICBhcHBLZXk6IGNvbmZpZy5hcHBLZXksXHJcbiAgLy8gICBvbmVycm9yKGVycm9yKSB7XHJcbiAgLy8gICAgIGNvbnNvbGUuZXJyb3IoJ1tOSU1dIGVycm9yJywgZXJyb3IpXHJcbiAgLy8gICB9LFxyXG4gIC8vICAgb25kaXNjb25uZWN0KCkge1xyXG4gIC8vICAgICBjb25zb2xlLmxvZygnW05JTV0gZGlzY29ubmVjdCcpXHJcbiAgLy8gICB9LFxyXG4gIC8vICAgb253aWxscmVjb25uZWN0KG9iaikge1xyXG4gIC8vICAgICBjb25zb2xlLmxvZygnW05JTV0gd2lsbCByZWNvbm5lY3QnKVxyXG4gIC8vICAgfSxcclxuICAvLyAgIG9uc3luY2RvbmUoKSB7XHJcbiAgLy8gICAgIGNvbnNvbGUubG9nKCdbTklNXSBzeW5jIGRvbmUnKVxyXG4gIC8vICAgfSxcclxuICAvLyAgIC4uLm9wdGlvbnNcclxuICAvLyB9KVxyXG4gIC8vIGNvbnN0IG5pbVByb21pc2VkID0ge31cclxuICAvLyAvLyBQcm9taXNpZnkgbmltIGZ1bmN0aW9uc1xyXG4gIC8vIFIuZm9yRWFjaCgoa2V5KSA9PiB7XHJcbiAgLy8gICBuaW1Qcm9taXNlZFtrZXldID0gcHJvbWlzaWZ5KG5pbVtrZXldLmJpbmQobmltKSlcclxuICAvLyB9LCBwcm9taXNlZEZ1bmN0aW9ucylcclxuICAvLyAvLyBiaW5kIG90aGVyIGZ1bmN0aW9uc1xyXG4gIC8vIFIuZm9yRWFjaCgoa2V5KSA9PiB7XHJcbiAgLy8gICBuaW1Qcm9taXNlZFtrZXldID0gbmltW2tleV0uYmluZChuaW0pXHJcbiAgLy8gfSwgbmVlZEZ1bmN0aW9ucylcclxuICAvLyByZXR1cm4gbmltUHJvbWlzZWRcclxufVxyXG5cclxuLyoqXHJcbiAqIOiOt+W+l+eUqOaIt+WQjeeJh1xyXG4gKiBAcGFyYW0gIGFjY2lkIFN0cmluZ1xyXG4gKi9cclxuZnVuY3Rpb24gZ2V0VXNlckluZm8oYWNjaWQpIHtcclxuICByZXR1cm4gcmVxdWVzdCh7XHJcbiAgICBhcGk6ICd1c2VyL2dldFVpbmZvcy5hY3Rpb24nLFxyXG4gICAgZGF0YToge1xyXG4gICAgICBhY2NpZHM6IEpTT04uc3RyaW5naWZ5KFthY2NpZF0pXHJcbiAgICB9XHJcbiAgfSkudGhlbihSLmNvbXBvc2UoUi5oZWFkLCBSLnByb3AoJ3VpbmZvcycpKSlcclxufVxyXG5cclxuY29uc3QgX2FkZEZyaWVuZCA9IFIuY3VycnkoZnVuY3Rpb24gKHR5cGUsIGFjY2lkLCBmYWNjaWQsIG1zZykge1xyXG4gIHJldHVybiByZXF1ZXN0KHtcclxuICAgIGFwaTogJ2ZyaWVuZC9hZGQuYWN0aW9uJyxcclxuICAgIGRhdGE6IHtcclxuICAgICAgYWNjaWQsXHJcbiAgICAgIGZhY2NpZCxcclxuICAgICAgdHlwZSxcclxuICAgICAgbXNnOiBtc2cgfHwgJydcclxuICAgIH1cclxuICB9KVxyXG59KVxyXG5cclxuLy8g5Y+R6YCB5aW95Y+L55Sz6K+3XHJcbmNvbnN0IHNlbmRBcHBseSA9IF9hZGRGcmllbmQoMSlcclxuLy8g5o6l5Y+X5aW95Y+L55Sz6K+3XHJcbmNvbnN0IGFjY2VwdEZyaWVuZEFwcGx5ID0gX2FkZEZyaWVuZCgzKVxyXG4vLyDmi5Lnu53lpb3lj4vnlLPor7dcclxuY29uc3QgcmVqZWN0RnJpZW5kQXBwbHkgPSBfYWRkRnJpZW5kKDQpXHJcblxyXG4vKipcclxuICog6I635b6X6IGK5aSp5a6kXHJcbiAqIEBwYXJhbSAge0FycmF5fSBpZHNcclxuICovXHJcbmNvbnN0IGdldENoYXRyb29tcyA9IGZ1bmN0aW9uIChpZHMpIHtcclxuICBjb25zdCByZXF1ZXN0cyA9IGlkcy5tYXAoaWQgPT4gcmVxdWVzdCh7XHJcbiAgICBhcGk6ICdjaGF0cm9vbS9nZXQuYWN0aW9uJyxcclxuICAgIGRhdGE6IHtcclxuICAgICAgcm9vbWlkOiBpZCxcclxuICAgICAgbmVlZE9ubGluZVVzZXJDb3VudDogdHJ1ZVxyXG4gICAgfVxyXG4gIH0pLnRoZW4oUi5wcm9wKCdjaGF0cm9vbScpKSlcclxuICByZXR1cm4gUHJvbWlzZS5hbGwocmVxdWVzdHMpXHJcbn1cclxuXHJcbi8qKlxyXG4gKiDojrflvpfogYrlpKnlrqTlnLDlnYBcclxuICogQHBhcmFtICB7U3RyaW5nfSBhY2NpZFxyXG4gKiBAcGFyYW0gIHtTdHJpbmd9IGlkXHJcbiAqL1xyXG5jb25zdCBnZXRDaGF0cm9vbUFkZHJlc3NlcyA9IGZ1bmN0aW9uIChhY2NpZCwgaWQpIHtcclxuICByZXR1cm4gcmVxdWVzdCh7XHJcbiAgICBhcGk6ICdjaGF0cm9vbS9yZXF1ZXN0QWRkci5hY3Rpb24nLFxyXG4gICAgZGF0YToge1xyXG4gICAgICByb29taWQ6IGlkLFxyXG4gICAgICBhY2NpZFxyXG4gICAgfVxyXG4gIH0pLnRoZW4oUi5wcm9wKCdhZGRyJykpXHJcbn1cclxuXHJcbi8vIGNvbnN0IG5lZWRGdW5jdGlvbnMgPSBbXHJcbi8vICAgJ21lcmdlU2Vzc2lvbnMnLFxyXG4vLyAgICdtZXJnZU1zZ3MnLFxyXG4vLyAgICdkaXNjb25uZWN0JyxcclxuLy8gICAnY29ubmVjdCdcclxuLy8gXVxyXG4vL1xyXG4vLyAvKipcclxuLy8gICog6ZyA6KaB6KKrIFByb21pc2Ug5YyW55qE5Ye95pWwXHJcbi8vICAqL1xyXG4vLyBjb25zdCBwcm9taXNlZEZ1bmN0aW9ucyA9IFtcclxuLy8gICAvLyDlpb3lj4vlhbPns7vnm7jlhbMgQVBJXHJcbi8vICAgJ2FkZEZyaWVuZCcsXHJcbi8vICAgJ2FwcGx5RnJpZW5kJyxcclxuLy8gICAncGFzc0ZyaWVuZEFwcGx5JyxcclxuLy8gICAncmVqZWN0RnJpZW5kQXBwbHknLFxyXG4vLyAgICdkZWxldGVGcmllbmQnLFxyXG4vLyAgICd1cGRhdGVGcmllbmQnLFxyXG4vL1xyXG4vLyAgIC8vIOa2iOaBr+ebuOWFs1xyXG4vLyAgICdzZW5kVGV4dCcsXHJcbi8vICAgJ3ByZXZpZXdGaWxlJyxcclxuLy8gICAnc2VuZEZpbGUnLFxyXG4vLyAgICdyZXNlbmRNc2cnLFxyXG4vLyAgICdtYXJrTXNnUmVhZCcsXHJcbi8vICAgJ2dldEhpc3RvcnlNc2dzJywgLy8g5LqR56uv5L+d5a2Y55qE5Y6G5Y+y6K6w5b2VXHJcbi8vXHJcbi8vICAgLy8g6IGK5aSp5a6kXHJcbi8vICAgJ2dldENoYXRyb29tQWRkcmVzcydcclxuLy8gXVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSB7XHJcbiAgbG9naW4sXHJcbiAgY3JlYXRlLFxyXG4gIGdldEluc3RhbmNlLFxyXG4gIGdldFVzZXJJbmZvLFxyXG4gIHNlbmRBcHBseSxcclxuICBhY2NlcHRGcmllbmRBcHBseSxcclxuICByZWplY3RGcmllbmRBcHBseSxcclxuICBnZXRDaGF0cm9vbXMsXHJcbiAgZ2V0Q2hhdHJvb21BZGRyZXNzZXNcclxufVxyXG4iXX0=