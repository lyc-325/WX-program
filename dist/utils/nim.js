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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5pbS5qcyJdLCJuYW1lcyI6WyJjb25maWciLCJjcmVhdGVIZWFkZXIiLCJub25jZSIsIk1hdGgiLCJjZWlsIiwicmFuZG9tIiwidG9TdHJpbmciLCJjdXJUaW1lIiwiRGF0ZSIsInBhcnNlIiwiY2hlY2tTdW0iLCJhcHBTZWNyZXQiLCJBcHBLZXkiLCJhcHBLZXkiLCJDdXJUaW1lIiwiTm9uY2UiLCJDaGVja1N1bSIsInJlcXVlc3QiLCJvcHRpb25zIiwiYXBpIiwiZGF0YSIsIm1ldGhvZCIsImhlYWRlciIsInVybCIsInNlcnZlciIsInRoZW4iLCJjb2RlIiwicmVzb2x2ZSIsInJlamVjdCIsImNyZWF0ZSIsImFjY2lkIiwibmFtZSIsImljb24iLCJwcm9wcyIsInByb3AiLCJsb2dpbiIsImNvbXBvc2UiLCJnZXRJbnN0YW5jZSIsImdldFVzZXJJbmZvIiwiYWNjaWRzIiwiaGVhZCIsIl9hZGRGcmllbmQiLCJjdXJyeSIsInR5cGUiLCJmYWNjaWQiLCJtc2ciLCJzZW5kQXBwbHkiLCJhY2NlcHRGcmllbmRBcHBseSIsInJlamVjdEZyaWVuZEFwcGx5IiwiZ2V0Q2hhdHJvb21zIiwiaWRzIiwicmVxdWVzdHMiLCJtYXAiLCJyb29taWQiLCJpZCIsIm5lZWRPbmxpbmVVc2VyQ291bnQiLCJhbGwiLCJnZXRDaGF0cm9vbUFkZHJlc3NlcyIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFHQTs7QUFDQTs7OztBQUNBOzs7Ozs7QUFFQSxJQUFNQSxvQkFBTjtBQUNBOzs7O0FBUEE7QUFDQTtBQVNBLFNBQVNDLFlBQVQsR0FBd0I7QUFDdEIsTUFBTUMsUUFBUUMsS0FBS0MsSUFBTCxDQUFVRCxLQUFLRSxNQUFMLEtBQWdCLEtBQTFCLEVBQWlDQyxRQUFqQyxFQUFkO0FBQ0EsTUFBTUMsVUFBVSxDQUFDQyxLQUFLQyxLQUFMLENBQVcsSUFBSUQsSUFBSixFQUFYLElBQXlCLElBQTFCLEVBQWdDRixRQUFoQyxF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Q0FQZTtBQVFmQyw0QkFSZTtBQVNmUTtBQVRlLENBQWpCIiwiZmlsZSI6Im5pbS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSIGZyb20gJy4uL2xpYnMvcmFtZGEnXHJcbi8vIGltcG9ydCBOSU0gZnJvbSAnLi4vbGlicy9OSU1fV2ViX05JTV92My44LjAnXHJcbi8vIGltcG9ydCBwcm9taXNpZnkgZnJvbSAnLi9wcm9taXNpZnknXHJcbmltcG9ydCB7IG5pbSB9IGZyb20gJy4uL2NvbmZpZydcclxuaW1wb3J0IHNoYTEgZnJvbSAnc2hhMSdcclxuaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcclxuXHJcbmNvbnN0IGNvbmZpZyA9IG5pbVxyXG4vKipcclxuICog5Yib5bu66K+35rGC5aS0XHJcbiAqL1xyXG5mdW5jdGlvbiBjcmVhdGVIZWFkZXIoKSB7XHJcbiAgY29uc3Qgbm9uY2UgPSBNYXRoLmNlaWwoTWF0aC5yYW5kb20oKSAqIDEwMDAwKS50b1N0cmluZygpXHJcbiAgY29uc3QgY3VyVGltZSA9IChEYXRlLnBhcnNlKG5ldyBEYXRlKCkpIC8gMTAwMCkudG9TdHJpbmcoKVxyXG4gIGNvbnN0IGNoZWNrU3VtID0gc2hhMShgJHtjb25maWcuYXBwU2VjcmV0fSR7bm9uY2V9JHtjdXJUaW1lfWApXHJcbiAgcmV0dXJuIHtcclxuICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkJyxcclxuICAgIEFwcEtleTogY29uZmlnLmFwcEtleSxcclxuICAgIEN1clRpbWU6IGN1clRpbWUsXHJcbiAgICBOb25jZTogbm9uY2UsXHJcbiAgICBDaGVja1N1bTogY2hlY2tTdW1cclxuICB9XHJcbn1cclxuLyoqXHJcbiAqIOaJp+ihjCBOSU0g55u45YWz6K+35rGCXHJcbiAqL1xyXG5mdW5jdGlvbiByZXF1ZXN0KG9wdGlvbnMpIHtcclxuICBjb25zdCB7IGFwaSwgZGF0YSwgbWV0aG9kIH0gPSBvcHRpb25zXHJcbiAgY29uc3QgaGVhZGVyID0ge1xyXG4gICAgLi4uY3JlYXRlSGVhZGVyKCksXHJcbiAgICAuLi4ob3B0aW9ucy5oZWFkZXIgfHwge30pXHJcbiAgfVxyXG4gIHJldHVybiB3ZXB5LnJlcXVlc3Qoe1xyXG4gICAgdXJsOiBgJHtjb25maWcuc2VydmVyfS8ke2FwaX1gLFxyXG4gICAgaGVhZGVyLFxyXG4gICAgZGF0YSxcclxuICAgIG1ldGhvZDogbWV0aG9kIHx8ICdQT1NUJ1xyXG4gIH0pLnRoZW4oKHsgZGF0YSB9KSA9PiB7XHJcbiAgICByZXR1cm4gZGF0YS5jb2RlID09PSAyMDAgPyBQcm9taXNlLnJlc29sdmUoZGF0YSkgOiBQcm9taXNlLnJlamVjdChkYXRhKVxyXG4gIH0pXHJcbn1cclxuXHJcbi8qKlxyXG4gKiDliJvlu7rnlKjmiLdcclxuICogQHBhcmFtIGFjY2lkIFN0cmluZ1xyXG4gKiBAcGFyYW0gbmFtZSBTdHJpbmdcclxuICogQHBhcmFtIGljb24gU3RyaW5nXHJcbiAqIEBwYXJhbSBwcm9wcyBPYmplY3RcclxuICovXHJcbmZ1bmN0aW9uIGNyZWF0ZShhY2NpZCwgbmFtZSwgaWNvbiwgcHJvcHMpIHtcclxuICByZXR1cm4gcmVxdWVzdCh7XHJcbiAgICBhcGk6ICd1c2VyL2NyZWF0ZS5hY3Rpb24nLFxyXG4gICAgZGF0YToge1xyXG4gICAgICBhY2NpZCxcclxuICAgICAgbmFtZSxcclxuICAgICAgaWNvbixcclxuICAgICAgcHJvcHNcclxuICAgIH1cclxuICB9KS50aGVuKFIucHJvcCgnaW5mbycpKVxyXG59XHJcblxyXG4vKipcclxuICog55m75b2V55So5oi377yM6I635b6XdG9rZW5cclxuICogQHBhcmFtIGFjY2lkIFN0cmluZ1xyXG4gKi9cclxuZnVuY3Rpb24gbG9naW4oYWNjaWQpIHtcclxuICByZXR1cm4gcmVxdWVzdCh7XHJcbiAgICBhcGk6ICd1c2VyL3JlZnJlc2hUb2tlbi5hY3Rpb24nLFxyXG4gICAgZGF0YToge1xyXG4gICAgICBhY2NpZFxyXG4gICAgfVxyXG4gIH0pLnRoZW4oUi5jb21wb3NlKFIucHJvcCgndG9rZW4nKSwgUi5wcm9wKCdpbmZvJykpKVxyXG59XHJcblxyXG4vKipcclxuICog6I635b6XIE5JTSDlrp7kvotcclxuICogQHBhcmFtIG9wdGlvbnMuYWNjb3VudCBTdHJpbmcg6LSm5oi35ZCNXHJcbiAqIEBwYXJhbSBvcHRpb25zLnRva2VuIFN0cmluZyB0b2tlblxyXG4gKiBAcGFyYW0gb3B0aW9ucy5vblNlc3Npb25zIEZ1bmN0aW9uXHJcbiAqL1xyXG5mdW5jdGlvbiBnZXRJbnN0YW5jZShvcHRpb25zKSB7XHJcbiAgLy8gY29uc3QgbmltID0gTklNLmdldEluc3RhbmNlKHtcclxuICAvLyAgIGRiOiB0cnVlLFxyXG4gIC8vICAgYXBwS2V5OiBjb25maWcuYXBwS2V5LFxyXG4gIC8vICAgb25lcnJvcihlcnJvcikge1xyXG4gIC8vICAgICBjb25zb2xlLmVycm9yKCdbTklNXSBlcnJvcicsIGVycm9yKVxyXG4gIC8vICAgfSxcclxuICAvLyAgIG9uZGlzY29ubmVjdCgpIHtcclxuICAvLyAgICAgY29uc29sZS5sb2coJ1tOSU1dIGRpc2Nvbm5lY3QnKVxyXG4gIC8vICAgfSxcclxuICAvLyAgIG9ud2lsbHJlY29ubmVjdChvYmopIHtcclxuICAvLyAgICAgY29uc29sZS5sb2coJ1tOSU1dIHdpbGwgcmVjb25uZWN0JylcclxuICAvLyAgIH0sXHJcbiAgLy8gICBvbnN5bmNkb25lKCkge1xyXG4gIC8vICAgICBjb25zb2xlLmxvZygnW05JTV0gc3luYyBkb25lJylcclxuICAvLyAgIH0sXHJcbiAgLy8gICAuLi5vcHRpb25zXHJcbiAgLy8gfSlcclxuICAvLyBjb25zdCBuaW1Qcm9taXNlZCA9IHt9XHJcbiAgLy8gLy8gUHJvbWlzaWZ5IG5pbSBmdW5jdGlvbnNcclxuICAvLyBSLmZvckVhY2goKGtleSkgPT4ge1xyXG4gIC8vICAgbmltUHJvbWlzZWRba2V5XSA9IHByb21pc2lmeShuaW1ba2V5XS5iaW5kKG5pbSkpXHJcbiAgLy8gfSwgcHJvbWlzZWRGdW5jdGlvbnMpXHJcbiAgLy8gLy8gYmluZCBvdGhlciBmdW5jdGlvbnNcclxuICAvLyBSLmZvckVhY2goKGtleSkgPT4ge1xyXG4gIC8vICAgbmltUHJvbWlzZWRba2V5XSA9IG5pbVtrZXldLmJpbmQobmltKVxyXG4gIC8vIH0sIG5lZWRGdW5jdGlvbnMpXHJcbiAgLy8gcmV0dXJuIG5pbVByb21pc2VkXHJcbn1cclxuXHJcbi8qKlxyXG4gKiDojrflvpfnlKjmiLflkI3niYdcclxuICogQHBhcmFtICBhY2NpZCBTdHJpbmdcclxuICovXHJcbmZ1bmN0aW9uIGdldFVzZXJJbmZvKGFjY2lkKSB7XHJcbiAgcmV0dXJuIHJlcXVlc3Qoe1xyXG4gICAgYXBpOiAndXNlci9nZXRVaW5mb3MuYWN0aW9uJyxcclxuICAgIGRhdGE6IHtcclxuICAgICAgYWNjaWRzOiBKU09OLnN0cmluZ2lmeShbYWNjaWRdKVxyXG4gICAgfVxyXG4gIH0pLnRoZW4oUi5jb21wb3NlKFIuaGVhZCwgUi5wcm9wKCd1aW5mb3MnKSkpXHJcbn1cclxuXHJcbmNvbnN0IF9hZGRGcmllbmQgPSBSLmN1cnJ5KGZ1bmN0aW9uICh0eXBlLCBhY2NpZCwgZmFjY2lkLCBtc2cpIHtcclxuICByZXR1cm4gcmVxdWVzdCh7XHJcbiAgICBhcGk6ICdmcmllbmQvYWRkLmFjdGlvbicsXHJcbiAgICBkYXRhOiB7XHJcbiAgICAgIGFjY2lkLFxyXG4gICAgICBmYWNjaWQsXHJcbiAgICAgIHR5cGUsXHJcbiAgICAgIG1zZzogbXNnIHx8ICcnXHJcbiAgICB9XHJcbiAgfSlcclxufSlcclxuXHJcbi8vIOWPkemAgeWlveWPi+eUs+ivt1xyXG5jb25zdCBzZW5kQXBwbHkgPSBfYWRkRnJpZW5kKDEpXHJcbi8vIOaOpeWPl+WlveWPi+eUs+ivt1xyXG5jb25zdCBhY2NlcHRGcmllbmRBcHBseSA9IF9hZGRGcmllbmQoMylcclxuLy8g5ouS57ud5aW95Y+L55Sz6K+3XHJcbmNvbnN0IHJlamVjdEZyaWVuZEFwcGx5ID0gX2FkZEZyaWVuZCg0KVxyXG5cclxuLyoqXHJcbiAqIOiOt+W+l+iBiuWkqeWupFxyXG4gKiBAcGFyYW0gIHtBcnJheX0gaWRzXHJcbiAqL1xyXG5jb25zdCBnZXRDaGF0cm9vbXMgPSBmdW5jdGlvbiAoaWRzKSB7XHJcbiAgY29uc3QgcmVxdWVzdHMgPSBpZHMubWFwKGlkID0+IHJlcXVlc3Qoe1xyXG4gICAgYXBpOiAnY2hhdHJvb20vZ2V0LmFjdGlvbicsXHJcbiAgICBkYXRhOiB7XHJcbiAgICAgIHJvb21pZDogaWQsXHJcbiAgICAgIG5lZWRPbmxpbmVVc2VyQ291bnQ6IHRydWVcclxuICAgIH1cclxuICB9KS50aGVuKFIucHJvcCgnY2hhdHJvb20nKSkpXHJcbiAgcmV0dXJuIFByb21pc2UuYWxsKHJlcXVlc3RzKVxyXG59XHJcblxyXG4vKipcclxuICog6I635b6X6IGK5aSp5a6k5Zyw5Z2AXHJcbiAqIEBwYXJhbSAge1N0cmluZ30gYWNjaWRcclxuICogQHBhcmFtICB7U3RyaW5nfSBpZFxyXG4gKi9cclxuY29uc3QgZ2V0Q2hhdHJvb21BZGRyZXNzZXMgPSBmdW5jdGlvbiAoYWNjaWQsIGlkKSB7XHJcbiAgcmV0dXJuIHJlcXVlc3Qoe1xyXG4gICAgYXBpOiAnY2hhdHJvb20vcmVxdWVzdEFkZHIuYWN0aW9uJyxcclxuICAgIGRhdGE6IHtcclxuICAgICAgcm9vbWlkOiBpZCxcclxuICAgICAgYWNjaWRcclxuICAgIH1cclxuICB9KS50aGVuKFIucHJvcCgnYWRkcicpKVxyXG59XHJcblxyXG4vLyBjb25zdCBuZWVkRnVuY3Rpb25zID0gW1xyXG4vLyAgICdtZXJnZVNlc3Npb25zJyxcclxuLy8gICAnbWVyZ2VNc2dzJyxcclxuLy8gICAnZGlzY29ubmVjdCcsXHJcbi8vICAgJ2Nvbm5lY3QnXHJcbi8vIF1cclxuLy9cclxuLy8gLyoqXHJcbi8vICAqIOmcgOimgeiiqyBQcm9taXNlIOWMlueahOWHveaVsFxyXG4vLyAgKi9cclxuLy8gY29uc3QgcHJvbWlzZWRGdW5jdGlvbnMgPSBbXHJcbi8vICAgLy8g5aW95Y+L5YWz57O755u45YWzIEFQSVxyXG4vLyAgICdhZGRGcmllbmQnLFxyXG4vLyAgICdhcHBseUZyaWVuZCcsXHJcbi8vICAgJ3Bhc3NGcmllbmRBcHBseScsXHJcbi8vICAgJ3JlamVjdEZyaWVuZEFwcGx5JyxcclxuLy8gICAnZGVsZXRlRnJpZW5kJyxcclxuLy8gICAndXBkYXRlRnJpZW5kJyxcclxuLy9cclxuLy8gICAvLyDmtojmga/nm7jlhbNcclxuLy8gICAnc2VuZFRleHQnLFxyXG4vLyAgICdwcmV2aWV3RmlsZScsXHJcbi8vICAgJ3NlbmRGaWxlJyxcclxuLy8gICAncmVzZW5kTXNnJyxcclxuLy8gICAnbWFya01zZ1JlYWQnLFxyXG4vLyAgICdnZXRIaXN0b3J5TXNncycsIC8vIOS6keerr+S/neWtmOeahOWOhuWPsuiusOW9lVxyXG4vL1xyXG4vLyAgIC8vIOiBiuWkqeWupFxyXG4vLyAgICdnZXRDaGF0cm9vbUFkZHJlc3MnXHJcbi8vIF1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0ge1xyXG4gIGxvZ2luLFxyXG4gIGNyZWF0ZSxcclxuICBnZXRJbnN0YW5jZSxcclxuICBnZXRVc2VySW5mbyxcclxuICBzZW5kQXBwbHksXHJcbiAgYWNjZXB0RnJpZW5kQXBwbHksXHJcbiAgcmVqZWN0RnJpZW5kQXBwbHksXHJcbiAgZ2V0Q2hhdHJvb21zLFxyXG4gIGdldENoYXRyb29tQWRkcmVzc2VzXHJcbn1cclxuIl19