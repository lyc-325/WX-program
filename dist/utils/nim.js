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
      icon: icon
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
  var nim = _NIM_Web_NIM_v2.default.getInstance({
    appKey: config.appKey,
    account: options.account,
    token: options.token,
    onerror: function onerror(error) {
      console.error('[NIM] error', error);
    },
    onconnect: function onconnect(obj) {
      console.log('[NIM] connectd');
    },

    onsessions: options.onsessions,
    onupdatesession: options.opupdatesession
  });

  // Promisify nim functions
  _ramda2.default.forEach(function (key) {
    nim[key] = (0, _promisify2.default)(nim[key].bind(nim));
  }, promisedFunctions);

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
var sendApply = _addFriend(2);
// 接受好友申请
var acceptFriendApply = _addFriend(3);
// 拒绝好友申请
var rejectFriendApply = _addFriend(3);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5pbS5qcyJdLCJuYW1lcyI6WyJjb25maWciLCJjcmVhdGVIZWFkZXIiLCJub25jZSIsIk1hdGgiLCJjZWlsIiwicmFuZG9tIiwidG9TdHJpbmciLCJjdXJUaW1lIiwiZmxvb3IiLCJEYXRlIiwibm93IiwiY2hlY2tTdW0iLCJhcHBTZWNyZXQiLCJBcHBLZXkiLCJhcHBLZXkiLCJDdXJUaW1lIiwiTm9uY2UiLCJDaGVja1N1bSIsInJlcXVlc3QiLCJvcHRpb25zIiwiYXBpIiwiZGF0YSIsIm1ldGhvZCIsImhlYWRlciIsInVybCIsInNlcnZlciIsInRoZW4iLCJjb2RlIiwicmVzb2x2ZSIsInJlamVjdCIsImNyZWF0ZSIsImFjY2lkIiwibmFtZSIsImljb24iLCJwcm9wcyIsInByb3AiLCJsb2dpbiIsImNvbXBvc2UiLCJnZXRJbnN0YW5jZSIsIm5pbSIsImFjY291bnQiLCJ0b2tlbiIsIm9uZXJyb3IiLCJlcnJvciIsImNvbnNvbGUiLCJvbmNvbm5lY3QiLCJvYmoiLCJsb2ciLCJvbnNlc3Npb25zIiwib251cGRhdGVzZXNzaW9uIiwib3B1cGRhdGVzZXNzaW9uIiwiZm9yRWFjaCIsImtleSIsImJpbmQiLCJwcm9taXNlZEZ1bmN0aW9ucyIsImdldFVzZXJJbmZvIiwiYWNjaWRzIiwiaGVhZCIsIl9hZGRGcmllbmQiLCJjdXJyeSIsInR5cGUiLCJmYWNjaWQiLCJtc2ciLCJzZW5kQXBwbHkiLCJhY2NlcHRGcmllbmRBcHBseSIsInJlamVjdEZyaWVuZEFwcGx5IiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7QUFDQTs7OztBQUNBOzs7Ozs7QUFFQSxJQUFNQSxvQkFBTjtBQUNBOzs7QUFHQSxTQUFTQyxZQUFULEdBQXdCO0FBQ3RCLE1BQU1DLFFBQVFDLEtBQUtDLElBQUwsQ0FBVUQsS0FBS0UsTUFBTCxLQUFnQixLQUExQixFQUFpQ0MsUUFBakMsRUFBZDtBQUNB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aW1wb3J0IFIgZnJvbSAnLi4vbGlicy9yYW1kYSdcbmltcG9ydCBOSU0gZnJvbSAnLi4vbGlicy9OSU1fV2ViX05JTV92My44LjAnXG5pbXBvcnQgcHJvbWlzaWZ5IGZyb20gJy4vcHJvbWlzaWZ5J1xuaW1wb3J0IHsgbmltIH0gZnJvbSAnLi4vY29uZmlnJ1xuaW1wb3J0IHNoYTEgZnJvbSAnc2hhMSdcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG5cbmNvbnN0IGNvbmZpZyA9IG5pbVxuLyoqXG4gKiDliJvlu7ror7fmsYLlpLRcbiAqL1xuZnVuY3Rpb24gY3JlYXRlSGVhZGVyKCkge1xuICBjb25zdCBub25jZSA9IE1hdGguY2VpbChNYXRoLnJhbmRvbSgpICogMTAwMDApLnRvU3RyaW5nKClcbiAgY29uc3QgY3VyVGltZSA9IChNYXRoLmZsb29yKERhdGUubm93KCkgLyAxMDAwKSkudG9TdHJpbmcoKVxuICBjb25zdCBjaGVja1N1bSA9IHNoYTEoYCR7Y29uZmlnLmFwcFNlY3JldH0ke25vbmNlfSR7Y3VyVGltZX1gKVxuICByZXR1cm4ge1xuICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkJyxcbiAgICBBcHBLZXk6IGNvbmZpZy5hcHBLZXksXG4gICAgQ3VyVGltZTogY3VyVGltZSxcbiAgICBOb25jZTogbm9uY2UsXG4gICAgQ2hlY2tTdW06IGNoZWNrU3VtXG4gIH1cbn1cblxuLyoqXG4gKiDmiafooYwgTklNIOebuOWFs+ivt+axglxuICovXG5mdW5jdGlvbiByZXF1ZXN0KG9wdGlvbnMpIHtcbiAgY29uc3Qge2FwaSwgZGF0YSwgbWV0aG9kfSA9IG9wdGlvbnNcbiAgY29uc3QgaGVhZGVyID0ge1xuICAgIC4uLmNyZWF0ZUhlYWRlcigpLFxuICAgIC4uLihvcHRpb25zLmhlYWRlciB8fCB7fSlcbiAgfVxuICByZXR1cm4gd2VweS5yZXF1ZXN0KHtcbiAgICB1cmw6IGAke2NvbmZpZy5zZXJ2ZXJ9LyR7YXBpfWAsXG4gICAgaGVhZGVyLFxuICAgIGRhdGEsXG4gICAgbWV0aG9kOiBtZXRob2QgfHwgJ1BPU1QnXG4gIH0pLnRoZW4oKHsgZGF0YSB9KSA9PiB7XG4gICAgcmV0dXJuIGRhdGEuY29kZSA9PT0gMjAwID8gUHJvbWlzZS5yZXNvbHZlKGRhdGEpIDogUHJvbWlzZS5yZWplY3QoZGF0YSlcbiAgfSlcbn1cblxuLyoqXG4gKiDliJvlu7rnlKjmiLdcbiAqIEBwYXJhbSBhY2NpZCBTdHJpbmdcbiAqIEBwYXJhbSBuYW1lIFN0cmluZ1xuICogQHBhcmFtIGljb24gU3RyaW5nXG4gKiBAcGFyYW0gcHJvcHMgT2JqZWN0XG4gKi9cbmZ1bmN0aW9uIGNyZWF0ZShhY2NpZCwgbmFtZSwgaWNvbiwgcHJvcHMpIHtcbiAgcmV0dXJuIHJlcXVlc3Qoe1xuICAgIGFwaTogJ3VzZXIvY3JlYXRlLmFjdGlvbicsXG4gICAgZGF0YToge1xuICAgICAgYWNjaWQsXG4gICAgICBuYW1lLFxuICAgICAgaWNvblxuICAgIH1cbiAgfSkudGhlbihSLnByb3AoJ2luZm8nKSlcbn1cblxuLyoqXG4gKiDnmbvlvZXnlKjmiLfvvIzojrflvpd0b2tlblxuICogQHBhcmFtIGFjY2lkIFN0cmluZ1xuICovXG5mdW5jdGlvbiBsb2dpbihhY2NpZCkge1xuICByZXR1cm4gcmVxdWVzdCh7XG4gICAgYXBpOiAndXNlci9yZWZyZXNoVG9rZW4uYWN0aW9uJyxcbiAgICBkYXRhOiB7XG4gICAgICBhY2NpZFxuICAgIH1cbiAgfSkudGhlbihSLmNvbXBvc2UoUi5wcm9wKCd0b2tlbicpLCBSLnByb3AoJ2luZm8nKSkpXG59XG5cbi8qKlxuICog6I635b6XIE5JTSDlrp7kvotcbiAqIEBwYXJhbSBvcHRpb25zLmFjY291bnQgU3RyaW5nIOi0puaIt+WQjVxuICogQHBhcmFtIG9wdGlvbnMudG9rZW4gU3RyaW5nIHRva2VuXG4gKiBAcGFyYW0gb3B0aW9ucy5vblNlc3Npb25zIEZ1bmN0aW9uXG4gKi9cbmZ1bmN0aW9uIGdldEluc3RhbmNlKG9wdGlvbnMpIHtcbiAgY29uc3QgbmltID0gTklNLmdldEluc3RhbmNlKHtcbiAgICBhcHBLZXk6IGNvbmZpZy5hcHBLZXksXG4gICAgYWNjb3VudDogb3B0aW9ucy5hY2NvdW50LFxuICAgIHRva2VuOiBvcHRpb25zLnRva2VuLFxuICAgIG9uZXJyb3IoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ1tOSU1dIGVycm9yJywgZXJyb3IpXG4gICAgfSxcbiAgICBvbmNvbm5lY3Qob2JqKSB7XG4gICAgICBjb25zb2xlLmxvZygnW05JTV0gY29ubmVjdGQnKVxuICAgIH0sXG4gICAgb25zZXNzaW9uczogb3B0aW9ucy5vbnNlc3Npb25zLFxuICAgIG9udXBkYXRlc2Vzc2lvbjogb3B0aW9ucy5vcHVwZGF0ZXNlc3Npb25cbiAgfSlcblxuICAvLyBQcm9taXNpZnkgbmltIGZ1bmN0aW9uc1xuICBSLmZvckVhY2goKGtleSkgPT4ge1xuICAgIG5pbVtrZXldID0gcHJvbWlzaWZ5KG5pbVtrZXldLmJpbmQobmltKSlcbiAgfSwgcHJvbWlzZWRGdW5jdGlvbnMpXG5cbiAgcmV0dXJuIG5pbVxufVxuXG4vKipcbiAqIOiOt+W+l+eUqOaIt+WQjeeJh1xuICogQHBhcmFtICBhY2NpZCBTdHJpbmdcbiAqL1xuZnVuY3Rpb24gZ2V0VXNlckluZm8oYWNjaWQpIHtcbiAgcmV0dXJuIHJlcXVlc3Qoe1xuICAgIGFwaTogJ3VzZXIvZ2V0VWluZm9zLmFjdGlvbicsXG4gICAgZGF0YToge1xuICAgICAgYWNjaWRzOiBKU09OLnN0cmluZ2lmeShbYWNjaWRdKVxuICAgIH1cbiAgfSkudGhlbihSLmNvbXBvc2UoUi5oZWFkLCBSLnByb3AoJ3VpbmZvcycpKSlcbn1cblxuY29uc3QgX2FkZEZyaWVuZCA9IFIuY3VycnkoZnVuY3Rpb24gKHR5cGUsIGFjY2lkLCBmYWNjaWQsIG1zZykge1xuICByZXR1cm4gcmVxdWVzdCh7XG4gICAgYXBpOiAnZnJpZW5kL2FkZC5hY3Rpb24nLFxuICAgIGRhdGE6IHtcbiAgICAgIGFjY2lkLFxuICAgICAgZmFjY2lkLFxuICAgICAgdHlwZSxcbiAgICAgIG1zZzogbXNnIHx8ICcnXG4gICAgfVxuICB9KVxufSlcblxuLy8g5Y+R6YCB5aW95Y+L55Sz6K+3XG5jb25zdCBzZW5kQXBwbHkgPSBfYWRkRnJpZW5kKDIpXG4vLyDmjqXlj5flpb3lj4vnlLPor7dcbmNvbnN0IGFjY2VwdEZyaWVuZEFwcGx5ID0gX2FkZEZyaWVuZCgzKVxuLy8g5ouS57ud5aW95Y+L55Sz6K+3XG5jb25zdCByZWplY3RGcmllbmRBcHBseSA9IF9hZGRGcmllbmQoMylcblxuLyoqXG4gKiDpnIDopoHooqsgUHJvbWlzZSDljJbnmoTlh73mlbBcbiAqL1xuY29uc3QgcHJvbWlzZWRGdW5jdGlvbnMgPSBbXG4gIC8vIOWlveWPi+WFs+ezu+ebuOWFsyBBUElcbiAgJ2FkZEZyaWVuZCcsXG4gICdhcHBseUZyaWVuZCcsXG4gICdwYXNzRnJpZW5kQXBwbHknLFxuICAncmVqZWN0RnJpZW5kQXBwbHknLFxuICAnZGVsZXRlRnJpZW5kJyxcbiAgJ3VwZGF0ZUZyaWVuZCcsXG5cbiAgLy8g5raI5oGv55u45YWzXG4gICdzZW5kVGV4dCcsXG4gICdzZW5kRmlsZScsXG4gICdyZXNlbmRNc2cnLFxuICAnbWFya01zZ1JlYWQnLFxuICAnZ2V0SGlzdG9yeU1zZ3MnLCAvLyDkupHnq6/kv53lrZjnmoTljoblj7LorrDlvZVcblxuICAvLyDogYrlpKnlrqRcbiAgJ2dldENoYXRyb29tQWRkcmVzcydcbl1cblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIGxvZ2luLFxuICBjcmVhdGUsXG4gIGdldEluc3RhbmNlLFxuICBnZXRVc2VySW5mbyxcbiAgc2VuZEFwcGx5LFxuICBhY2NlcHRGcmllbmRBcHBseSxcbiAgcmVqZWN0RnJpZW5kQXBwbHlcbn1cbiJdfQ==