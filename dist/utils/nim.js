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
  // Promisify nim functions
  // R.forEach((key) => {
  //   nim[key] = promisify(nim[key].bind(nim))
  // }, promisedFunctions)
  return nim;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5pbS5qcyJdLCJuYW1lcyI6WyJjb25maWciLCJjcmVhdGVIZWFkZXIiLCJub25jZSIsIk1hdGgiLCJjZWlsIiwicmFuZG9tIiwidG9TdHJpbmciLCJjdXJUaW1lIiwiZmxvb3IiLCJEYXRlIiwibm93IiwiY2hlY2tTdW0iLCJhcHBTZWNyZXQiLCJBcHBLZXkiLCJhcHBLZXkiLCJDdXJUaW1lIiwiTm9uY2UiLCJDaGVja1N1bSIsInJlcXVlc3QiLCJvcHRpb25zIiwiYXBpIiwiZGF0YSIsIm1ldGhvZCIsImhlYWRlciIsInVybCIsInNlcnZlciIsInRoZW4iLCJjb2RlIiwicmVzb2x2ZSIsInJlamVjdCIsImNyZWF0ZSIsImFjY2lkIiwibmFtZSIsImljb24iLCJwcm9wcyIsInByb3AiLCJsb2dpbiIsImNvbXBvc2UiLCJnZXRJbnN0YW5jZSIsIm5pbSIsImRiIiwib25lcnJvciIsImVycm9yIiwiY29uc29sZSIsIm9uZGlzY29ubmVjdCIsImxvZyIsIm9ud2lsbHJlY29ubmVjdCIsIm9iaiIsIm9uc3luY2RvbmUiLCJvbmZyaWVuZHMiLCJmcmllbmRzIiwiZ2V0VXNlckluZm8iLCJhY2NpZHMiLCJoZWFkIiwiX2FkZEZyaWVuZCIsImN1cnJ5IiwidHlwZSIsImZhY2NpZCIsIm1zZyIsInNlbmRBcHBseSIsImFjY2VwdEZyaWVuZEFwcGx5IiwicmVqZWN0RnJpZW5kQXBwbHkiLCJwcm9taXNlZEZ1bmN0aW9ucyIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7O0FBQ0E7Ozs7QUFDQTs7Ozs7O0FBRUEsSUFBTUEsb0JBQU47QUFDQTs7O0FBR0EsU0FBU0MsWUFBVCxHQUF3QjtBQUN0QixNQUFNQyxRQUFRQyxLQUFLQyxJQUFMLENBQVVELEtBQUtFLE1BQUwsS0FBZ0IsS0FBMUIsRUFBaUNDLFFBQWpDLEVBQWQ7QUFDQSxNQUFNQyxVQUFXSixLQUFLSyxLQUFMLENBQVdD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YkMsVUFBTTtBQUNKK0IsY0FBUSx5QkFBZSxDQUFDckIsS0FBRCxDQUFmO0FBREo7QUFGTyxHQUFSLEVBS0pMLElBTEksQ0FLQyxnQkFBRVcsT0FBRixDQUFVLGdCQUFFZ0IsSUFBWixFQUFrQixnQkFBRWxCLElBQUYsQ0FBTyxRQUFQLENBQWxCLENBTEQsQ0FBUDtBQU1EOztBQUVELElBQU1tQixhQUFhLGdCQUFFQyxLQUFGLENBQVEsVUFBVUMsSUFBVixFQUFnQnpCLEtBQWhCLEVBQXVCMEIsTUFBdkIsRUFBK0JDLEdBQS9CLEVBQW9DO0FBQzdELFNBQU94QyxRQUFRO0FBQ2JFLFNBQUssbUJBRFE7QUFFYkMsVUFBTTtBQUNKVSxrQkFESTtBQUVKMEIsb0JBRkk7QUFHSkQsZ0JBSEk7QUFJSkUsV0FBS0EsT0FBTztBQUpSO0FBRk8sR0FBUixDQUFQO0FBU0QsQ0FWa0IsQ0FBbkI7O0FBWUE7QUFDQSxJQUFNQyxZQUFZTCxXQUFXLENBQVgsQ0FBbEI7QUFDQTtBQUNBLElBQU1NLG9CQUFvQk4sV0FBVyxDQUFYLENBQTFCO0FBQ0E7QUFDQSxJQUFNTyxvQkFBb0JQLFdBQVcsQ0FBWCxDQUExQjs7QUFFQTs7O0FBR0EsSUFBTVEsb0JBQW9CO0FBQ3hCO0FBQ0EsV0FGd0IsRUFHeEIsYUFId0IsRUFJeEIsaUJBSndCLEVBS3hCLG1CQUx3QixFQU14QixjQU53QixFQU94QixjQVB3Qjs7QUFTeEI7QUFDQSxVQVZ3QixFQVd4QixVQVh3QixFQVl4QixXQVp3QixFQWF4QixhQWJ3QixFQWN4QixnQkFkd0IsRUFjTjs7QUFFbEI7QUFDQSxvQkFqQndCLENBQTFCOztBQW9CQUMsT0FBT0MsT0FBUCxHQUFpQjtBQUNmNUIsY0FEZTtBQUVmTixnQkFGZTtBQUdmUSwwQkFIZTtBQUlmYSwwQkFKZTtBQUtmUSxzQkFMZTtBQU1mQyxzQ0FOZTtBQU9mQztBQVBlLENBQWpCIiwiZmlsZSI6Im5pbS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSIGZyb20gJy4uL2xpYnMvcmFtZGEnXG5pbXBvcnQgTklNIGZyb20gJy4uL2xpYnMvTklNX1dlYl9OSU1fdjMuOC4wJ1xuaW1wb3J0IHByb21pc2lmeSBmcm9tICcuL3Byb21pc2lmeSdcbmltcG9ydCB7IG5pbSB9IGZyb20gJy4uL2NvbmZpZydcbmltcG9ydCBzaGExIGZyb20gJ3NoYTEnXG5pbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuXG5jb25zdCBjb25maWcgPSBuaW1cbi8qKlxuICog5Yib5bu66K+35rGC5aS0XG4gKi9cbmZ1bmN0aW9uIGNyZWF0ZUhlYWRlcigpIHtcbiAgY29uc3Qgbm9uY2UgPSBNYXRoLmNlaWwoTWF0aC5yYW5kb20oKSAqIDEwMDAwKS50b1N0cmluZygpXG4gIGNvbnN0IGN1clRpbWUgPSAoTWF0aC5mbG9vcihEYXRlLm5vdygpIC8gMTAwMCkpLnRvU3RyaW5nKClcbiAgY29uc3QgY2hlY2tTdW0gPSBzaGExKGAke2NvbmZpZy5hcHBTZWNyZXR9JHtub25jZX0ke2N1clRpbWV9YClcbiAgcmV0dXJuIHtcbiAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCcsXG4gICAgQXBwS2V5OiBjb25maWcuYXBwS2V5LFxuICAgIEN1clRpbWU6IGN1clRpbWUsXG4gICAgTm9uY2U6IG5vbmNlLFxuICAgIENoZWNrU3VtOiBjaGVja1N1bVxuICB9XG59XG5cbi8qKlxuICog5omn6KGMIE5JTSDnm7jlhbPor7fmsYJcbiAqL1xuZnVuY3Rpb24gcmVxdWVzdChvcHRpb25zKSB7XG4gIGNvbnN0IHthcGksIGRhdGEsIG1ldGhvZH0gPSBvcHRpb25zXG4gIGNvbnN0IGhlYWRlciA9IHtcbiAgICAuLi5jcmVhdGVIZWFkZXIoKSxcbiAgICAuLi4ob3B0aW9ucy5oZWFkZXIgfHwge30pXG4gIH1cbiAgcmV0dXJuIHdlcHkucmVxdWVzdCh7XG4gICAgdXJsOiBgJHtjb25maWcuc2VydmVyfS8ke2FwaX1gLFxuICAgIGhlYWRlcixcbiAgICBkYXRhLFxuICAgIG1ldGhvZDogbWV0aG9kIHx8ICdQT1NUJ1xuICB9KS50aGVuKCh7IGRhdGEgfSkgPT4ge1xuICAgIHJldHVybiBkYXRhLmNvZGUgPT09IDIwMCA/IFByb21pc2UucmVzb2x2ZShkYXRhKSA6IFByb21pc2UucmVqZWN0KGRhdGEpXG4gIH0pXG59XG5cbi8qKlxuICog5Yib5bu655So5oi3XG4gKiBAcGFyYW0gYWNjaWQgU3RyaW5nXG4gKiBAcGFyYW0gbmFtZSBTdHJpbmdcbiAqIEBwYXJhbSBpY29uIFN0cmluZ1xuICogQHBhcmFtIHByb3BzIE9iamVjdFxuICovXG5mdW5jdGlvbiBjcmVhdGUoYWNjaWQsIG5hbWUsIGljb24sIHByb3BzKSB7XG4gIHJldHVybiByZXF1ZXN0KHtcbiAgICBhcGk6ICd1c2VyL2NyZWF0ZS5hY3Rpb24nLFxuICAgIGRhdGE6IHtcbiAgICAgIGFjY2lkLFxuICAgICAgbmFtZSxcbiAgICAgIGljb24sXG4gICAgICBwcm9wc1xuICAgIH1cbiAgfSkudGhlbihSLnByb3AoJ2luZm8nKSlcbn1cblxuLyoqXG4gKiDnmbvlvZXnlKjmiLfvvIzojrflvpd0b2tlblxuICogQHBhcmFtIGFjY2lkIFN0cmluZ1xuICovXG5mdW5jdGlvbiBsb2dpbihhY2NpZCkge1xuICByZXR1cm4gcmVxdWVzdCh7XG4gICAgYXBpOiAndXNlci9yZWZyZXNoVG9rZW4uYWN0aW9uJyxcbiAgICBkYXRhOiB7XG4gICAgICBhY2NpZFxuICAgIH1cbiAgfSkudGhlbihSLmNvbXBvc2UoUi5wcm9wKCd0b2tlbicpLCBSLnByb3AoJ2luZm8nKSkpXG59XG5cbi8qKlxuICog6I635b6XIE5JTSDlrp7kvotcbiAqIEBwYXJhbSBvcHRpb25zLmFjY291bnQgU3RyaW5nIOi0puaIt+WQjVxuICogQHBhcmFtIG9wdGlvbnMudG9rZW4gU3RyaW5nIHRva2VuXG4gKiBAcGFyYW0gb3B0aW9ucy5vblNlc3Npb25zIEZ1bmN0aW9uXG4gKi9cbmZ1bmN0aW9uIGdldEluc3RhbmNlKG9wdGlvbnMpIHtcbiAgY29uc3QgbmltID0gTklNLmdldEluc3RhbmNlKHtcbiAgICBkYjogdHJ1ZSxcbiAgICBhcHBLZXk6IGNvbmZpZy5hcHBLZXksXG4gICAgb25lcnJvcihlcnJvcikge1xuICAgICAgY29uc29sZS5lcnJvcignW05JTV0gZXJyb3InLCBlcnJvcilcbiAgICB9LFxuICAgIG9uZGlzY29ubmVjdCgpIHtcbiAgICAgIGNvbnNvbGUubG9nKCdbTklNXSBkaXNjb25uZWN0JylcbiAgICB9LFxuICAgIG9ud2lsbHJlY29ubmVjdChvYmopIHtcbiAgICAgIGNvbnNvbGUubG9nKCdbTklNXSB3aWxsIHJlY29ubmVjdCcpXG4gICAgfSxcbiAgICBvbnN5bmNkb25lKCkge1xuICAgICAgY29uc29sZS5sb2coJ1tOSU1dIHN5bmMgZG9uZScpXG4gICAgfSxcbiAgICBvbmZyaWVuZHMoZnJpZW5kcykge1xuICAgICAgY29uc29sZS5sb2coJ1tOSU1dIG9uIGZyaWVuZHMnLCBmcmllbmRzKVxuICAgIH0sXG4gICAgLi4ub3B0aW9uc1xuICB9KVxuICAvLyBQcm9taXNpZnkgbmltIGZ1bmN0aW9uc1xuICAvLyBSLmZvckVhY2goKGtleSkgPT4ge1xuICAvLyAgIG5pbVtrZXldID0gcHJvbWlzaWZ5KG5pbVtrZXldLmJpbmQobmltKSlcbiAgLy8gfSwgcHJvbWlzZWRGdW5jdGlvbnMpXG4gIHJldHVybiBuaW1cbn1cblxuLyoqXG4gKiDojrflvpfnlKjmiLflkI3niYdcbiAqIEBwYXJhbSAgYWNjaWQgU3RyaW5nXG4gKi9cbmZ1bmN0aW9uIGdldFVzZXJJbmZvKGFjY2lkKSB7XG4gIHJldHVybiByZXF1ZXN0KHtcbiAgICBhcGk6ICd1c2VyL2dldFVpbmZvcy5hY3Rpb24nLFxuICAgIGRhdGE6IHtcbiAgICAgIGFjY2lkczogSlNPTi5zdHJpbmdpZnkoW2FjY2lkXSlcbiAgICB9XG4gIH0pLnRoZW4oUi5jb21wb3NlKFIuaGVhZCwgUi5wcm9wKCd1aW5mb3MnKSkpXG59XG5cbmNvbnN0IF9hZGRGcmllbmQgPSBSLmN1cnJ5KGZ1bmN0aW9uICh0eXBlLCBhY2NpZCwgZmFjY2lkLCBtc2cpIHtcbiAgcmV0dXJuIHJlcXVlc3Qoe1xuICAgIGFwaTogJ2ZyaWVuZC9hZGQuYWN0aW9uJyxcbiAgICBkYXRhOiB7XG4gICAgICBhY2NpZCxcbiAgICAgIGZhY2NpZCxcbiAgICAgIHR5cGUsXG4gICAgICBtc2c6IG1zZyB8fCAnJ1xuICAgIH1cbiAgfSlcbn0pXG5cbi8vIOWPkemAgeWlveWPi+eUs+ivt1xuY29uc3Qgc2VuZEFwcGx5ID0gX2FkZEZyaWVuZCgxKVxuLy8g5o6l5Y+X5aW95Y+L55Sz6K+3XG5jb25zdCBhY2NlcHRGcmllbmRBcHBseSA9IF9hZGRGcmllbmQoMylcbi8vIOaLkue7neWlveWPi+eUs+ivt1xuY29uc3QgcmVqZWN0RnJpZW5kQXBwbHkgPSBfYWRkRnJpZW5kKDQpXG5cbi8qKlxuICog6ZyA6KaB6KKrIFByb21pc2Ug5YyW55qE5Ye95pWwXG4gKi9cbmNvbnN0IHByb21pc2VkRnVuY3Rpb25zID0gW1xuICAvLyDlpb3lj4vlhbPns7vnm7jlhbMgQVBJXG4gICdhZGRGcmllbmQnLFxuICAnYXBwbHlGcmllbmQnLFxuICAncGFzc0ZyaWVuZEFwcGx5JyxcbiAgJ3JlamVjdEZyaWVuZEFwcGx5JyxcbiAgJ2RlbGV0ZUZyaWVuZCcsXG4gICd1cGRhdGVGcmllbmQnLFxuXG4gIC8vIOa2iOaBr+ebuOWFs1xuICAnc2VuZFRleHQnLFxuICAnc2VuZEZpbGUnLFxuICAncmVzZW5kTXNnJyxcbiAgJ21hcmtNc2dSZWFkJyxcbiAgJ2dldEhpc3RvcnlNc2dzJywgLy8g5LqR56uv5L+d5a2Y55qE5Y6G5Y+y6K6w5b2VXG5cbiAgLy8g6IGK5aSp5a6kXG4gICdnZXRDaGF0cm9vbUFkZHJlc3MnXG5dXG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBsb2dpbixcbiAgY3JlYXRlLFxuICBnZXRJbnN0YW5jZSxcbiAgZ2V0VXNlckluZm8sXG4gIHNlbmRBcHBseSxcbiAgYWNjZXB0RnJpZW5kQXBwbHksXG4gIHJlamVjdEZyaWVuZEFwcGx5XG59XG4iXX0=