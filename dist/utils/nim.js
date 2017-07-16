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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5pbS5qcyJdLCJuYW1lcyI6WyJjb25maWciLCJjcmVhdGVIZWFkZXIiLCJub25jZSIsIk1hdGgiLCJjZWlsIiwicmFuZG9tIiwidG9TdHJpbmciLCJjdXJUaW1lIiwiRGF0ZSIsInBhcnNlIiwiY2hlY2tTdW0iLCJhcHBTZWNyZXQiLCJBcHBLZXkiLCJhcHBLZXkiLCJDdXJUaW1lIiwiTm9uY2UiLCJDaGVja1N1bSIsInJlcXVlc3QiLCJvcHRpb25zIiwiYXBpIiwiZGF0YSIsIm1ldGhvZCIsImhlYWRlciIsInVybCIsInNlcnZlciIsInRoZW4iLCJjb2RlIiwicmVzb2x2ZSIsInJlamVjdCIsImNyZWF0ZSIsImFjY2lkIiwibmFtZSIsImljb24iLCJwcm9wcyIsInByb3AiLCJsb2dpbiIsImNvbXBvc2UiLCJnZXRJbnN0YW5jZSIsImdldFVzZXJJbmZvIiwiYWNjaWRzIiwiaGVhZCIsIl9hZGRGcmllbmQiLCJjdXJyeSIsInR5cGUiLCJmYWNjaWQiLCJtc2ciLCJzZW5kQXBwbHkiLCJhY2NlcHRGcmllbmRBcHBseSIsInJlamVjdEZyaWVuZEFwcGx5IiwiZ2V0Q2hhdHJvb21zIiwiaWRzIiwicmVxdWVzdHMiLCJtYXAiLCJyb29taWQiLCJpZCIsIm5lZWRPbmxpbmVVc2VyQ291bnQiLCJhbGwiLCJnZXRDaGF0cm9vbUFkZHJlc3NlcyIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFHQTs7QUFDQTs7OztBQUNBOzs7Ozs7QUFFQSxJQUFNQSxvQkFBTjtBQUNBOzs7O0FBUEE7QUFDQTtBQVNBLFNBQVNDLFlBQVQsR0FBd0I7QUFDdEIsTUFBTUMsUUFBUUMsS0FBS0MsSUFBTCxDQUFVRCxLQUFLRSxNQUFMLEtBQWdCLEtBQTFCLEVBQWlDQyxRQUFqQyxFQUFkO0FBQ0EsTUFBTUMsVUFBVSxDQUFDQyxLQUFLQyxLQUFMLENBQVcsSUFBSUQsSUFBSixFQUFYLElBQXlCLElBQTFCLEVBQWdDRixRQUFoQyxF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c0NBUGU7QUFRZkMsNEJBUmU7QUFTZlE7QUFUZSxDQUFqQiIsImZpbGUiOiJuaW0uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUiBmcm9tICcuLi9saWJzL3JhbWRhJ1xuLy8gaW1wb3J0IE5JTSBmcm9tICcuLi9saWJzL05JTV9XZWJfTklNX3YzLjguMCdcbi8vIGltcG9ydCBwcm9taXNpZnkgZnJvbSAnLi9wcm9taXNpZnknXG5pbXBvcnQgeyBuaW0gfSBmcm9tICcuLi9jb25maWcnXG5pbXBvcnQgc2hhMSBmcm9tICdzaGExJ1xuaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcblxuY29uc3QgY29uZmlnID0gbmltXG4vKipcbiAqIOWIm+W7uuivt+axguWktFxuICovXG5mdW5jdGlvbiBjcmVhdGVIZWFkZXIoKSB7XG4gIGNvbnN0IG5vbmNlID0gTWF0aC5jZWlsKE1hdGgucmFuZG9tKCkgKiAxMDAwMCkudG9TdHJpbmcoKVxuICBjb25zdCBjdXJUaW1lID0gKERhdGUucGFyc2UobmV3IERhdGUoKSkgLyAxMDAwKS50b1N0cmluZygpXG4gIGNvbnN0IGNoZWNrU3VtID0gc2hhMShgJHtjb25maWcuYXBwU2VjcmV0fSR7bm9uY2V9JHtjdXJUaW1lfWApXG4gIHJldHVybiB7XG4gICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQnLFxuICAgIEFwcEtleTogY29uZmlnLmFwcEtleSxcbiAgICBDdXJUaW1lOiBjdXJUaW1lLFxuICAgIE5vbmNlOiBub25jZSxcbiAgICBDaGVja1N1bTogY2hlY2tTdW1cbiAgfVxufVxuXG4vKipcbiAqIOaJp+ihjCBOSU0g55u45YWz6K+35rGCXG4gKi9cbmZ1bmN0aW9uIHJlcXVlc3Qob3B0aW9ucykge1xuICBjb25zdCB7IGFwaSwgZGF0YSwgbWV0aG9kIH0gPSBvcHRpb25zXG4gIGNvbnN0IGhlYWRlciA9IHtcbiAgICAuLi5jcmVhdGVIZWFkZXIoKSxcbiAgICAuLi4ob3B0aW9ucy5oZWFkZXIgfHwge30pXG4gIH1cbiAgcmV0dXJuIHdlcHkucmVxdWVzdCh7XG4gICAgdXJsOiBgJHtjb25maWcuc2VydmVyfS8ke2FwaX1gLFxuICAgIGhlYWRlcixcbiAgICBkYXRhLFxuICAgIG1ldGhvZDogbWV0aG9kIHx8ICdQT1NUJ1xuICB9KS50aGVuKCh7IGRhdGEgfSkgPT4ge1xuICAgIHJldHVybiBkYXRhLmNvZGUgPT09IDIwMCA/IFByb21pc2UucmVzb2x2ZShkYXRhKSA6IFByb21pc2UucmVqZWN0KGRhdGEpXG4gIH0pXG59XG5cbi8qKlxuICog5Yib5bu655So5oi3XG4gKiBAcGFyYW0gYWNjaWQgU3RyaW5nXG4gKiBAcGFyYW0gbmFtZSBTdHJpbmdcbiAqIEBwYXJhbSBpY29uIFN0cmluZ1xuICogQHBhcmFtIHByb3BzIE9iamVjdFxuICovXG5mdW5jdGlvbiBjcmVhdGUoYWNjaWQsIG5hbWUsIGljb24sIHByb3BzKSB7XG4gIHJldHVybiByZXF1ZXN0KHtcbiAgICBhcGk6ICd1c2VyL2NyZWF0ZS5hY3Rpb24nLFxuICAgIGRhdGE6IHtcbiAgICAgIGFjY2lkLFxuICAgICAgbmFtZSxcbiAgICAgIGljb24sXG4gICAgICBwcm9wc1xuICAgIH1cbiAgfSkudGhlbihSLnByb3AoJ2luZm8nKSlcbn1cblxuLyoqXG4gKiDnmbvlvZXnlKjmiLfvvIzojrflvpd0b2tlblxuICogQHBhcmFtIGFjY2lkIFN0cmluZ1xuICovXG5mdW5jdGlvbiBsb2dpbihhY2NpZCkge1xuICByZXR1cm4gcmVxdWVzdCh7XG4gICAgYXBpOiAndXNlci9yZWZyZXNoVG9rZW4uYWN0aW9uJyxcbiAgICBkYXRhOiB7XG4gICAgICBhY2NpZFxuICAgIH1cbiAgfSkudGhlbihSLmNvbXBvc2UoUi5wcm9wKCd0b2tlbicpLCBSLnByb3AoJ2luZm8nKSkpXG59XG5cbi8qKlxuICog6I635b6XIE5JTSDlrp7kvotcbiAqIEBwYXJhbSBvcHRpb25zLmFjY291bnQgU3RyaW5nIOi0puaIt+WQjVxuICogQHBhcmFtIG9wdGlvbnMudG9rZW4gU3RyaW5nIHRva2VuXG4gKiBAcGFyYW0gb3B0aW9ucy5vblNlc3Npb25zIEZ1bmN0aW9uXG4gKi9cbmZ1bmN0aW9uIGdldEluc3RhbmNlKG9wdGlvbnMpIHtcbiAgLy8gY29uc3QgbmltID0gTklNLmdldEluc3RhbmNlKHtcbiAgLy8gICBkYjogdHJ1ZSxcbiAgLy8gICBhcHBLZXk6IGNvbmZpZy5hcHBLZXksXG4gIC8vICAgb25lcnJvcihlcnJvcikge1xuICAvLyAgICAgY29uc29sZS5lcnJvcignW05JTV0gZXJyb3InLCBlcnJvcilcbiAgLy8gICB9LFxuICAvLyAgIG9uZGlzY29ubmVjdCgpIHtcbiAgLy8gICAgIGNvbnNvbGUubG9nKCdbTklNXSBkaXNjb25uZWN0JylcbiAgLy8gICB9LFxuICAvLyAgIG9ud2lsbHJlY29ubmVjdChvYmopIHtcbiAgLy8gICAgIGNvbnNvbGUubG9nKCdbTklNXSB3aWxsIHJlY29ubmVjdCcpXG4gIC8vICAgfSxcbiAgLy8gICBvbnN5bmNkb25lKCkge1xuICAvLyAgICAgY29uc29sZS5sb2coJ1tOSU1dIHN5bmMgZG9uZScpXG4gIC8vICAgfSxcbiAgLy8gICAuLi5vcHRpb25zXG4gIC8vIH0pXG4gIC8vIGNvbnN0IG5pbVByb21pc2VkID0ge31cbiAgLy8gLy8gUHJvbWlzaWZ5IG5pbSBmdW5jdGlvbnNcbiAgLy8gUi5mb3JFYWNoKChrZXkpID0+IHtcbiAgLy8gICBuaW1Qcm9taXNlZFtrZXldID0gcHJvbWlzaWZ5KG5pbVtrZXldLmJpbmQobmltKSlcbiAgLy8gfSwgcHJvbWlzZWRGdW5jdGlvbnMpXG4gIC8vIC8vIGJpbmQgb3RoZXIgZnVuY3Rpb25zXG4gIC8vIFIuZm9yRWFjaCgoa2V5KSA9PiB7XG4gIC8vICAgbmltUHJvbWlzZWRba2V5XSA9IG5pbVtrZXldLmJpbmQobmltKVxuICAvLyB9LCBuZWVkRnVuY3Rpb25zKVxuICAvLyByZXR1cm4gbmltUHJvbWlzZWRcbn1cblxuLyoqXG4gKiDojrflvpfnlKjmiLflkI3niYdcbiAqIEBwYXJhbSAgYWNjaWQgU3RyaW5nXG4gKi9cbmZ1bmN0aW9uIGdldFVzZXJJbmZvKGFjY2lkKSB7XG4gIHJldHVybiByZXF1ZXN0KHtcbiAgICBhcGk6ICd1c2VyL2dldFVpbmZvcy5hY3Rpb24nLFxuICAgIGRhdGE6IHtcbiAgICAgIGFjY2lkczogSlNPTi5zdHJpbmdpZnkoW2FjY2lkXSlcbiAgICB9XG4gIH0pLnRoZW4oUi5jb21wb3NlKFIuaGVhZCwgUi5wcm9wKCd1aW5mb3MnKSkpXG59XG5cbmNvbnN0IF9hZGRGcmllbmQgPSBSLmN1cnJ5KGZ1bmN0aW9uICh0eXBlLCBhY2NpZCwgZmFjY2lkLCBtc2cpIHtcbiAgcmV0dXJuIHJlcXVlc3Qoe1xuICAgIGFwaTogJ2ZyaWVuZC9hZGQuYWN0aW9uJyxcbiAgICBkYXRhOiB7XG4gICAgICBhY2NpZCxcbiAgICAgIGZhY2NpZCxcbiAgICAgIHR5cGUsXG4gICAgICBtc2c6IG1zZyB8fCAnJ1xuICAgIH1cbiAgfSlcbn0pXG5cbi8vIOWPkemAgeWlveWPi+eUs+ivt1xuY29uc3Qgc2VuZEFwcGx5ID0gX2FkZEZyaWVuZCgxKVxuLy8g5o6l5Y+X5aW95Y+L55Sz6K+3XG5jb25zdCBhY2NlcHRGcmllbmRBcHBseSA9IF9hZGRGcmllbmQoMylcbi8vIOaLkue7neWlveWPi+eUs+ivt1xuY29uc3QgcmVqZWN0RnJpZW5kQXBwbHkgPSBfYWRkRnJpZW5kKDQpXG5cbi8qKlxuICog6I635b6X6IGK5aSp5a6kXG4gKiBAcGFyYW0gIHtBcnJheX0gaWRzXG4gKi9cbmNvbnN0IGdldENoYXRyb29tcyA9IGZ1bmN0aW9uIChpZHMpIHtcbiAgY29uc3QgcmVxdWVzdHMgPSBpZHMubWFwKGlkID0+IHJlcXVlc3Qoe1xuICAgIGFwaTogJ2NoYXRyb29tL2dldC5hY3Rpb24nLFxuICAgIGRhdGE6IHtcbiAgICAgIHJvb21pZDogaWQsXG4gICAgICBuZWVkT25saW5lVXNlckNvdW50OiB0cnVlXG4gICAgfVxuICB9KS50aGVuKFIucHJvcCgnY2hhdHJvb20nKSkpXG4gIHJldHVybiBQcm9taXNlLmFsbChyZXF1ZXN0cylcbn1cblxuLyoqXG4gKiDojrflvpfogYrlpKnlrqTlnLDlnYBcbiAqIEBwYXJhbSAge1N0cmluZ30gYWNjaWRcbiAqIEBwYXJhbSAge1N0cmluZ30gaWRcbiAqL1xuY29uc3QgZ2V0Q2hhdHJvb21BZGRyZXNzZXMgPSBmdW5jdGlvbiAoYWNjaWQsIGlkKSB7XG4gIHJldHVybiByZXF1ZXN0KHtcbiAgICBhcGk6ICdjaGF0cm9vbS9yZXF1ZXN0QWRkci5hY3Rpb24nLFxuICAgIGRhdGE6IHtcbiAgICAgIHJvb21pZDogaWQsXG4gICAgICBhY2NpZFxuICAgIH1cbiAgfSkudGhlbihSLnByb3AoJ2FkZHInKSlcbn1cblxuLy8gY29uc3QgbmVlZEZ1bmN0aW9ucyA9IFtcbi8vICAgJ21lcmdlU2Vzc2lvbnMnLFxuLy8gICAnbWVyZ2VNc2dzJyxcbi8vICAgJ2Rpc2Nvbm5lY3QnLFxuLy8gICAnY29ubmVjdCdcbi8vIF1cbi8vXG4vLyAvKipcbi8vICAqIOmcgOimgeiiqyBQcm9taXNlIOWMlueahOWHveaVsFxuLy8gICovXG4vLyBjb25zdCBwcm9taXNlZEZ1bmN0aW9ucyA9IFtcbi8vICAgLy8g5aW95Y+L5YWz57O755u45YWzIEFQSVxuLy8gICAnYWRkRnJpZW5kJyxcbi8vICAgJ2FwcGx5RnJpZW5kJyxcbi8vICAgJ3Bhc3NGcmllbmRBcHBseScsXG4vLyAgICdyZWplY3RGcmllbmRBcHBseScsXG4vLyAgICdkZWxldGVGcmllbmQnLFxuLy8gICAndXBkYXRlRnJpZW5kJyxcbi8vXG4vLyAgIC8vIOa2iOaBr+ebuOWFs1xuLy8gICAnc2VuZFRleHQnLFxuLy8gICAncHJldmlld0ZpbGUnLFxuLy8gICAnc2VuZEZpbGUnLFxuLy8gICAncmVzZW5kTXNnJyxcbi8vICAgJ21hcmtNc2dSZWFkJyxcbi8vICAgJ2dldEhpc3RvcnlNc2dzJywgLy8g5LqR56uv5L+d5a2Y55qE5Y6G5Y+y6K6w5b2VXG4vL1xuLy8gICAvLyDogYrlpKnlrqRcbi8vICAgJ2dldENoYXRyb29tQWRkcmVzcydcbi8vIF1cblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIGxvZ2luLFxuICBjcmVhdGUsXG4gIGdldEluc3RhbmNlLFxuICBnZXRVc2VySW5mbyxcbiAgc2VuZEFwcGx5LFxuICBhY2NlcHRGcmllbmRBcHBseSxcbiAgcmVqZWN0RnJpZW5kQXBwbHksXG4gIGdldENoYXRyb29tcyxcbiAgZ2V0Q2hhdHJvb21BZGRyZXNzZXNcbn1cbiJdfQ==