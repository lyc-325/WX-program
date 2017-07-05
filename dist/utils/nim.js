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
  var curTime = Math.floor(Date.now() / 1000).toString();
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
'sendText', 'sendFile', 'resendMsg', 'markMsgRead', 'getHistoryMsgs', // 云端保存的历史记录

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5pbS5qcyJdLCJuYW1lcyI6WyJjb25maWciLCJjcmVhdGVIZWFkZXIiLCJub25jZSIsIk1hdGgiLCJjZWlsIiwicmFuZG9tIiwidG9TdHJpbmciLCJjdXJUaW1lIiwiZmxvb3IiLCJEYXRlIiwibm93IiwiY2hlY2tTdW0iLCJhcHBTZWNyZXQiLCJBcHBLZXkiLCJhcHBLZXkiLCJDdXJUaW1lIiwiTm9uY2UiLCJDaGVja1N1bSIsInJlcXVlc3QiLCJvcHRpb25zIiwiYXBpIiwiZGF0YSIsIm1ldGhvZCIsImhlYWRlciIsInVybCIsInNlcnZlciIsInRoZW4iLCJjb2RlIiwicmVzb2x2ZSIsInJlamVjdCIsImNyZWF0ZSIsImFjY2lkIiwibmFtZSIsImljb24iLCJwcm9wcyIsInByb3AiLCJsb2dpbiIsImNvbXBvc2UiLCJnZXRJbnN0YW5jZSIsIm5pbSIsImRiIiwib25lcnJvciIsImVycm9yIiwiY29uc29sZSIsIm9uZGlzY29ubmVjdCIsImxvZyIsIm9ud2lsbHJlY29ubmVjdCIsIm9iaiIsIm9uc3luY2RvbmUiLCJvbmZyaWVuZHMiLCJmcmllbmRzIiwibmltUHJvbWlzZWQiLCJmb3JFYWNoIiwia2V5IiwiYmluZCIsInByb21pc2VkRnVuY3Rpb25zIiwibmVlZEZ1bmN0aW9ucyIsImdldFVzZXJJbmZvIiwiYWNjaWRzIiwiaGVhZCIsIl9hZGRGcmllbmQiLCJjdXJyeSIsInR5cGUiLCJmYWNjaWQiLCJtc2ciLCJzZW5kQXBwbHkiLCJhY2NlcHRGcmllbmRBcHBseSIsInJlamVjdEZyaWVuZEFwcGx5IiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7QUFDQTs7OztBQUNBOzs7Ozs7QUFFQSxJQUFNQSxvQkFBTjtBQUNBOzs7QUFHQSxTQUFTQyxZQUFULEdBQXdCO0FBQ3RCLE1BQU1DLFFBQVFDLEtBQUtDLElBQUwsQ0FBVUQsS0FBS0UsTUFBTCxLQUFnQixLQUEx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QUFvQjtBQUN4QjtBQUNBLFdBRndCLEVBR3hCLGFBSHdCLEVBSXhCLGlCQUp3QixFQUt4QixtQkFMd0IsRUFNeEIsY0FOd0IsRUFPeEIsY0FQd0I7O0FBU3hCO0FBQ0EsVUFWd0IsRUFXeEIsVUFYd0IsRUFZeEIsV0Fad0IsRUFheEIsYUFid0IsRUFjeEIsZ0JBZHdCLEVBY047O0FBRWxCO0FBQ0Esb0JBakJ3QixDQUExQjs7QUFvQkFhLE9BQU9DLE9BQVAsR0FBaUI7QUFDZmpDLGNBRGU7QUFFZk4sZ0JBRmU7QUFHZlEsMEJBSGU7QUFJZm1CLDBCQUplO0FBS2ZRLHNCQUxlO0FBTWZDLHNDQU5lO0FBT2ZDO0FBUGUsQ0FBakIiLCJmaWxlIjoibmltLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFIgZnJvbSAnLi4vbGlicy9yYW1kYSdcbmltcG9ydCBOSU0gZnJvbSAnLi4vbGlicy9OSU1fV2ViX05JTV92My44LjAnXG5pbXBvcnQgcHJvbWlzaWZ5IGZyb20gJy4vcHJvbWlzaWZ5J1xuaW1wb3J0IHsgbmltIH0gZnJvbSAnLi4vY29uZmlnJ1xuaW1wb3J0IHNoYTEgZnJvbSAnc2hhMSdcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG5cbmNvbnN0IGNvbmZpZyA9IG5pbVxuLyoqXG4gKiDliJvlu7ror7fmsYLlpLRcbiAqL1xuZnVuY3Rpb24gY3JlYXRlSGVhZGVyKCkge1xuICBjb25zdCBub25jZSA9IE1hdGguY2VpbChNYXRoLnJhbmRvbSgpICogMTAwMDApLnRvU3RyaW5nKClcbiAgY29uc3QgY3VyVGltZSA9IChNYXRoLmZsb29yKERhdGUubm93KCkgLyAxMDAwKSkudG9TdHJpbmcoKVxuICBjb25zdCBjaGVja1N1bSA9IHNoYTEoYCR7Y29uZmlnLmFwcFNlY3JldH0ke25vbmNlfSR7Y3VyVGltZX1gKVxuICByZXR1cm4ge1xuICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkJyxcbiAgICBBcHBLZXk6IGNvbmZpZy5hcHBLZXksXG4gICAgQ3VyVGltZTogY3VyVGltZSxcbiAgICBOb25jZTogbm9uY2UsXG4gICAgQ2hlY2tTdW06IGNoZWNrU3VtXG4gIH1cbn1cblxuLyoqXG4gKiDmiafooYwgTklNIOebuOWFs+ivt+axglxuICovXG5mdW5jdGlvbiByZXF1ZXN0KG9wdGlvbnMpIHtcbiAgY29uc3Qge2FwaSwgZGF0YSwgbWV0aG9kfSA9IG9wdGlvbnNcbiAgY29uc3QgaGVhZGVyID0ge1xuICAgIC4uLmNyZWF0ZUhlYWRlcigpLFxuICAgIC4uLihvcHRpb25zLmhlYWRlciB8fCB7fSlcbiAgfVxuICByZXR1cm4gd2VweS5yZXF1ZXN0KHtcbiAgICB1cmw6IGAke2NvbmZpZy5zZXJ2ZXJ9LyR7YXBpfWAsXG4gICAgaGVhZGVyLFxuICAgIGRhdGEsXG4gICAgbWV0aG9kOiBtZXRob2QgfHwgJ1BPU1QnXG4gIH0pLnRoZW4oKHsgZGF0YSB9KSA9PiB7XG4gICAgcmV0dXJuIGRhdGEuY29kZSA9PT0gMjAwID8gUHJvbWlzZS5yZXNvbHZlKGRhdGEpIDogUHJvbWlzZS5yZWplY3QoZGF0YSlcbiAgfSlcbn1cblxuLyoqXG4gKiDliJvlu7rnlKjmiLdcbiAqIEBwYXJhbSBhY2NpZCBTdHJpbmdcbiAqIEBwYXJhbSBuYW1lIFN0cmluZ1xuICogQHBhcmFtIGljb24gU3RyaW5nXG4gKiBAcGFyYW0gcHJvcHMgT2JqZWN0XG4gKi9cbmZ1bmN0aW9uIGNyZWF0ZShhY2NpZCwgbmFtZSwgaWNvbiwgcHJvcHMpIHtcbiAgcmV0dXJuIHJlcXVlc3Qoe1xuICAgIGFwaTogJ3VzZXIvY3JlYXRlLmFjdGlvbicsXG4gICAgZGF0YToge1xuICAgICAgYWNjaWQsXG4gICAgICBuYW1lLFxuICAgICAgaWNvbixcbiAgICAgIHByb3BzXG4gICAgfVxuICB9KS50aGVuKFIucHJvcCgnaW5mbycpKVxufVxuXG4vKipcbiAqIOeZu+W9leeUqOaIt++8jOiOt+W+l3Rva2VuXG4gKiBAcGFyYW0gYWNjaWQgU3RyaW5nXG4gKi9cbmZ1bmN0aW9uIGxvZ2luKGFjY2lkKSB7XG4gIHJldHVybiByZXF1ZXN0KHtcbiAgICBhcGk6ICd1c2VyL3JlZnJlc2hUb2tlbi5hY3Rpb24nLFxuICAgIGRhdGE6IHtcbiAgICAgIGFjY2lkXG4gICAgfVxuICB9KS50aGVuKFIuY29tcG9zZShSLnByb3AoJ3Rva2VuJyksIFIucHJvcCgnaW5mbycpKSlcbn1cblxuLyoqXG4gKiDojrflvpcgTklNIOWunuS+i1xuICogQHBhcmFtIG9wdGlvbnMuYWNjb3VudCBTdHJpbmcg6LSm5oi35ZCNXG4gKiBAcGFyYW0gb3B0aW9ucy50b2tlbiBTdHJpbmcgdG9rZW5cbiAqIEBwYXJhbSBvcHRpb25zLm9uU2Vzc2lvbnMgRnVuY3Rpb25cbiAqL1xuZnVuY3Rpb24gZ2V0SW5zdGFuY2Uob3B0aW9ucykge1xuICBjb25zdCBuaW0gPSBOSU0uZ2V0SW5zdGFuY2Uoe1xuICAgIGRiOiB0cnVlLFxuICAgIGFwcEtleTogY29uZmlnLmFwcEtleSxcbiAgICBvbmVycm9yKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmVycm9yKCdbTklNXSBlcnJvcicsIGVycm9yKVxuICAgIH0sXG4gICAgb25kaXNjb25uZWN0KCkge1xuICAgICAgY29uc29sZS5sb2coJ1tOSU1dIGRpc2Nvbm5lY3QnKVxuICAgIH0sXG4gICAgb253aWxscmVjb25uZWN0KG9iaikge1xuICAgICAgY29uc29sZS5sb2coJ1tOSU1dIHdpbGwgcmVjb25uZWN0JylcbiAgICB9LFxuICAgIG9uc3luY2RvbmUoKSB7XG4gICAgICBjb25zb2xlLmxvZygnW05JTV0gc3luYyBkb25lJylcbiAgICB9LFxuICAgIG9uZnJpZW5kcyhmcmllbmRzKSB7XG4gICAgICBjb25zb2xlLmxvZygnW05JTV0gb24gZnJpZW5kcycsIGZyaWVuZHMpXG4gICAgfSxcbiAgICAuLi5vcHRpb25zXG4gIH0pXG4gIGNvbnN0IG5pbVByb21pc2VkID0ge31cbiAgLy8gUHJvbWlzaWZ5IG5pbSBmdW5jdGlvbnNcbiAgUi5mb3JFYWNoKChrZXkpID0+IHtcbiAgICBuaW1Qcm9taXNlZFtrZXldID0gcHJvbWlzaWZ5KG5pbVtrZXldLmJpbmQobmltKSlcbiAgfSwgcHJvbWlzZWRGdW5jdGlvbnMpXG4gIC8vIGJpbmQgb3RoZXIgZnVuY3Rpb25zXG4gIFIuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgbmltUHJvbWlzZWRba2V5XSA9IG5pbVtrZXldLmJpbmQobmltKVxuICB9LCBuZWVkRnVuY3Rpb25zKVxuICByZXR1cm4gbmltUHJvbWlzZWRcbn1cblxuLyoqXG4gKiDojrflvpfnlKjmiLflkI3niYdcbiAqIEBwYXJhbSAgYWNjaWQgU3RyaW5nXG4gKi9cbmZ1bmN0aW9uIGdldFVzZXJJbmZvKGFjY2lkKSB7XG4gIHJldHVybiByZXF1ZXN0KHtcbiAgICBhcGk6ICd1c2VyL2dldFVpbmZvcy5hY3Rpb24nLFxuICAgIGRhdGE6IHtcbiAgICAgIGFjY2lkczogSlNPTi5zdHJpbmdpZnkoW2FjY2lkXSlcbiAgICB9XG4gIH0pLnRoZW4oUi5jb21wb3NlKFIuaGVhZCwgUi5wcm9wKCd1aW5mb3MnKSkpXG59XG5cbmNvbnN0IF9hZGRGcmllbmQgPSBSLmN1cnJ5KGZ1bmN0aW9uICh0eXBlLCBhY2NpZCwgZmFjY2lkLCBtc2cpIHtcbiAgcmV0dXJuIHJlcXVlc3Qoe1xuICAgIGFwaTogJ2ZyaWVuZC9hZGQuYWN0aW9uJyxcbiAgICBkYXRhOiB7XG4gICAgICBhY2NpZCxcbiAgICAgIGZhY2NpZCxcbiAgICAgIHR5cGUsXG4gICAgICBtc2c6IG1zZyB8fCAnJ1xuICAgIH1cbiAgfSlcbn0pXG5cbi8vIOWPkemAgeWlveWPi+eUs+ivt1xuY29uc3Qgc2VuZEFwcGx5ID0gX2FkZEZyaWVuZCgxKVxuLy8g5o6l5Y+X5aW95Y+L55Sz6K+3XG5jb25zdCBhY2NlcHRGcmllbmRBcHBseSA9IF9hZGRGcmllbmQoMylcbi8vIOaLkue7neWlveWPi+eUs+ivt1xuY29uc3QgcmVqZWN0RnJpZW5kQXBwbHkgPSBfYWRkRnJpZW5kKDQpXG5cbmNvbnN0IG5lZWRGdW5jdGlvbnMgPSBbXG4gICdtZXJnZVNlc3Npb25zJyxcbiAgJ21lcmdlTXNncydcbl1cblxuLyoqXG4gKiDpnIDopoHooqsgUHJvbWlzZSDljJbnmoTlh73mlbBcbiAqL1xuY29uc3QgcHJvbWlzZWRGdW5jdGlvbnMgPSBbXG4gIC8vIOWlveWPi+WFs+ezu+ebuOWFsyBBUElcbiAgJ2FkZEZyaWVuZCcsXG4gICdhcHBseUZyaWVuZCcsXG4gICdwYXNzRnJpZW5kQXBwbHknLFxuICAncmVqZWN0RnJpZW5kQXBwbHknLFxuICAnZGVsZXRlRnJpZW5kJyxcbiAgJ3VwZGF0ZUZyaWVuZCcsXG5cbiAgLy8g5raI5oGv55u45YWzXG4gICdzZW5kVGV4dCcsXG4gICdzZW5kRmlsZScsXG4gICdyZXNlbmRNc2cnLFxuICAnbWFya01zZ1JlYWQnLFxuICAnZ2V0SGlzdG9yeU1zZ3MnLCAvLyDkupHnq6/kv53lrZjnmoTljoblj7LorrDlvZVcblxuICAvLyDogYrlpKnlrqRcbiAgJ2dldENoYXRyb29tQWRkcmVzcydcbl1cblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIGxvZ2luLFxuICBjcmVhdGUsXG4gIGdldEluc3RhbmNlLFxuICBnZXRVc2VySW5mbyxcbiAgc2VuZEFwcGx5LFxuICBhY2NlcHRGcmllbmRBcHBseSxcbiAgcmVqZWN0RnJpZW5kQXBwbHlcbn1cbiJdfQ==