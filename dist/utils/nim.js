'use strict';

var _promise = require('./../npm/babel-runtime/core-js/promise.js');

var _promise2 = _interopRequireDefault(_promise);

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

  var header = createHeader();
  return _wepy2.default.request({
    url: config.server + '/' + api,
    header: header,
    data: data,
    method: method || 'POST'
  }).then(function (data) {
    return data.code === 200 ? _promise2.default.resolve(data.info) : _promise2.default.reject(data.desc);
  });
}

/**
 * 创建用户
 * @param options Object
 * @param options.accid String
 * @param options.name String
 * @param options.icon String
 * @param optiosn.props Object
 */
function create(_ref) {
  var accid = _ref.accid,
      name = _ref.name,
      icon = _ref.icon,
      props = _ref.props;

  return request({
    api: 'user/create.action',
    data: {
      accid: accid,
      name: name,
      icon: icon
    }
  });
}

/**
 * 创建用户
 * @param options Object
 * @param options.accid String
 * @param options.name String
 * @param options.icon String
 * @param optiosn.props Object
 */
function login(accid) {
  return request({
    api: 'user/refreshToken.action',
    data: {
      accid: accid
    }
  }).then(function (_ref2) {
    var info = _ref2.info;

    return info.token;
  });
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
  getInstance: getInstance
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5pbS5qcyJdLCJuYW1lcyI6WyJjb25maWciLCJjcmVhdGVIZWFkZXIiLCJub25jZSIsIk1hdGgiLCJjZWlsIiwicmFuZG9tIiwidG9TdHJpbmciLCJjdXJUaW1lIiwiZmxvb3IiLCJEYXRlIiwibm93IiwiY2hlY2tTdW0iLCJhcHBTZWNyZXQiLCJBcHBLZXkiLCJhcHBLZXkiLCJDdXJUaW1lIiwiTm9uY2UiLCJDaGVja1N1bSIsInJlcXVlc3QiLCJvcHRpb25zIiwiYXBpIiwiZGF0YSIsIm1ldGhvZCIsImhlYWRlciIsInVybCIsInNlcnZlciIsInRoZW4iLCJjb2RlIiwicmVzb2x2ZSIsImluZm8iLCJyZWplY3QiLCJkZXNjIiwiY3JlYXRlIiwiYWNjaWQiLCJuYW1lIiwiaWNvbiIsInByb3BzIiwibG9naW4iLCJ0b2tlbiIsImdldEluc3RhbmNlIiwibmltIiwiYWNjb3VudCIsIm9uZXJyb3IiLCJlcnJvciIsImNvbnNvbGUiLCJvbmNvbm5lY3QiLCJvYmoiLCJsb2ciLCJvbnNlc3Npb25zIiwib251cGRhdGVzZXNzaW9uIiwib3B1cGRhdGVzZXNzaW9uIiwiZm9yRWFjaCIsImtleSIsImJpbmQiLCJwcm9taXNlZEZ1bmN0aW9ucyIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOztBQUNBOzs7O0FBQ0E7Ozs7OztBQUVBLElBQU1BLG9CQUFOO0FBQ0E7OztBQUdBLFNBQVNDLFlBQVQsR0FBd0I7QUFDdEIsTUFBTUMsUUFBUUMsS0FBS0MsSUFBTCxDQUFVRCxLQUFLRSxNQUFMLEtBQWdCLEtBQTFCLEVBQWlDQyxRQUFqQyxFQUFkO0FBQ0EsTUFBTUMsVUFBV0osS0FBS0ssS0FBTCxDQUFXQyxLQUFLQyxHQUFMLEtBQWEsSUFBeEIsQ0FBRCxDQUFnQ0osUUFBaEMsRUFBaEI7QUFDQSxNQUFNSyxXQUFXLHdCQUFRWCxPQUFPWSxTQUFmLEdBQTJCVixLQUEzQixHQUFtQ0ssT0FBbkMs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LE9BQVAsR0FBaUI7QUFDZm5CLGNBRGU7QUFFZkwsZ0JBRmU7QUFHZk87QUFIZSxDQUFqQiIsImZpbGUiOiJuaW0uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUiBmcm9tICcuLi9saWJzL3JhbWRhJ1xuaW1wb3J0IE5JTSBmcm9tICcuLi9saWJzL05JTV9XZWJfTklNX3YzLjguMCdcbmltcG9ydCBwcm9taXNpZnkgZnJvbSAnLi9wcm9taXNpZnknXG5pbXBvcnQgeyBuaW0gfSBmcm9tICcuLi9jb25maWcnXG5pbXBvcnQgc2hhMSBmcm9tICdzaGExJ1xuaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcblxuY29uc3QgY29uZmlnID0gbmltXG4vKipcbiAqIOWIm+W7uuivt+axguWktFxuICovXG5mdW5jdGlvbiBjcmVhdGVIZWFkZXIoKSB7XG4gIGNvbnN0IG5vbmNlID0gTWF0aC5jZWlsKE1hdGgucmFuZG9tKCkgKiAxMDAwMCkudG9TdHJpbmcoKVxuICBjb25zdCBjdXJUaW1lID0gKE1hdGguZmxvb3IoRGF0ZS5ub3coKSAvIDEwMDApKS50b1N0cmluZygpXG4gIGNvbnN0IGNoZWNrU3VtID0gc2hhMShgJHtjb25maWcuYXBwU2VjcmV0fSR7bm9uY2V9JHtjdXJUaW1lfWApXG4gIHJldHVybiB7XG4gICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQnLFxuICAgIEFwcEtleTogY29uZmlnLmFwcEtleSxcbiAgICBDdXJUaW1lOiBjdXJUaW1lLFxuICAgIE5vbmNlOiBub25jZSxcbiAgICBDaGVja1N1bTogY2hlY2tTdW1cbiAgfVxufVxuXG4vKipcbiAqIOaJp+ihjCBOSU0g55u45YWz6K+35rGCXG4gKi9cbmZ1bmN0aW9uIHJlcXVlc3Qob3B0aW9ucykge1xuICBjb25zdCB7YXBpLCBkYXRhLCBtZXRob2R9ID0gb3B0aW9uc1xuICBjb25zdCBoZWFkZXIgPSBjcmVhdGVIZWFkZXIoKVxuICByZXR1cm4gd2VweS5yZXF1ZXN0KHtcbiAgICB1cmw6IGAke2NvbmZpZy5zZXJ2ZXJ9LyR7YXBpfWAsXG4gICAgaGVhZGVyLFxuICAgIGRhdGEsXG4gICAgbWV0aG9kOiBtZXRob2QgfHwgJ1BPU1QnXG4gIH0pLnRoZW4oZGF0YSA9PiB7XG4gICAgcmV0dXJuIGRhdGEuY29kZSA9PT0gMjAwID8gUHJvbWlzZS5yZXNvbHZlKGRhdGEuaW5mbykgOiBQcm9taXNlLnJlamVjdChkYXRhLmRlc2MpXG4gIH0pXG59XG5cbi8qKlxuICog5Yib5bu655So5oi3XG4gKiBAcGFyYW0gb3B0aW9ucyBPYmplY3RcbiAqIEBwYXJhbSBvcHRpb25zLmFjY2lkIFN0cmluZ1xuICogQHBhcmFtIG9wdGlvbnMubmFtZSBTdHJpbmdcbiAqIEBwYXJhbSBvcHRpb25zLmljb24gU3RyaW5nXG4gKiBAcGFyYW0gb3B0aW9zbi5wcm9wcyBPYmplY3RcbiAqL1xuZnVuY3Rpb24gY3JlYXRlKHthY2NpZCwgbmFtZSwgaWNvbiwgcHJvcHN9KSB7XG4gIHJldHVybiByZXF1ZXN0KHtcbiAgICBhcGk6ICd1c2VyL2NyZWF0ZS5hY3Rpb24nLFxuICAgIGRhdGE6IHtcbiAgICAgIGFjY2lkLFxuICAgICAgbmFtZSxcbiAgICAgIGljb25cbiAgICB9XG4gIH0pXG59XG5cbi8qKlxuICog5Yib5bu655So5oi3XG4gKiBAcGFyYW0gb3B0aW9ucyBPYmplY3RcbiAqIEBwYXJhbSBvcHRpb25zLmFjY2lkIFN0cmluZ1xuICogQHBhcmFtIG9wdGlvbnMubmFtZSBTdHJpbmdcbiAqIEBwYXJhbSBvcHRpb25zLmljb24gU3RyaW5nXG4gKiBAcGFyYW0gb3B0aW9zbi5wcm9wcyBPYmplY3RcbiAqL1xuZnVuY3Rpb24gbG9naW4oYWNjaWQpIHtcbiAgcmV0dXJuIHJlcXVlc3Qoe1xuICAgIGFwaTogJ3VzZXIvcmVmcmVzaFRva2VuLmFjdGlvbicsXG4gICAgZGF0YToge1xuICAgICAgYWNjaWRcbiAgICB9XG4gIH0pLnRoZW4oKHtpbmZvfSkgPT4ge1xuICAgIHJldHVybiBpbmZvLnRva2VuXG4gIH0pXG59XG5cbi8qKlxuICog6I635b6XIE5JTSDlrp7kvotcbiAqIEBwYXJhbSBvcHRpb25zLmFjY291bnQgU3RyaW5nIOi0puaIt+WQjVxuICogQHBhcmFtIG9wdGlvbnMudG9rZW4gU3RyaW5nIHRva2VuXG4gKiBAcGFyYW0gb3B0aW9ucy5vblNlc3Npb25zIEZ1bmN0aW9uXG4gKi9cbmZ1bmN0aW9uIGdldEluc3RhbmNlKG9wdGlvbnMpIHtcbiAgY29uc3QgbmltID0gTklNLmdldEluc3RhbmNlKHtcbiAgICBhcHBLZXk6IGNvbmZpZy5hcHBLZXksXG4gICAgYWNjb3VudDogb3B0aW9ucy5hY2NvdW50LFxuICAgIHRva2VuOiBvcHRpb25zLnRva2VuLFxuICAgIG9uZXJyb3IoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ1tOSU1dIGVycm9yJywgZXJyb3IpXG4gICAgfSxcbiAgICBvbmNvbm5lY3Qob2JqKSB7XG4gICAgICBjb25zb2xlLmxvZygnW05JTV0gY29ubmVjdGQnKVxuICAgIH0sXG4gICAgb25zZXNzaW9uczogb3B0aW9ucy5vbnNlc3Npb25zLFxuICAgIG9udXBkYXRlc2Vzc2lvbjogb3B0aW9ucy5vcHVwZGF0ZXNlc3Npb25cbiAgfSlcblxuICAvLyBQcm9taXNpZnkgbmltIGZ1bmN0aW9uc1xuICBSLmZvckVhY2goKGtleSkgPT4ge1xuICAgIG5pbVtrZXldID0gcHJvbWlzaWZ5KG5pbVtrZXldLmJpbmQobmltKSlcbiAgfSwgcHJvbWlzZWRGdW5jdGlvbnMpXG5cbiAgcmV0dXJuIG5pbVxufVxuXG4vKipcbiAqIOmcgOimgeiiqyBQcm9taXNlIOWMlueahOWHveaVsFxuICovXG5jb25zdCBwcm9taXNlZEZ1bmN0aW9ucyA9IFtcbiAgLy8g5aW95Y+L5YWz57O755u45YWzIEFQSVxuICAnYWRkRnJpZW5kJyxcbiAgJ2FwcGx5RnJpZW5kJyxcbiAgJ3Bhc3NGcmllbmRBcHBseScsXG4gICdyZWplY3RGcmllbmRBcHBseScsXG4gICdkZWxldGVGcmllbmQnLFxuICAndXBkYXRlRnJpZW5kJyxcblxuICAvLyDmtojmga/nm7jlhbNcbiAgJ3NlbmRUZXh0JyxcbiAgJ3NlbmRGaWxlJyxcbiAgJ3Jlc2VuZE1zZycsXG4gICdtYXJrTXNnUmVhZCcsXG4gICdnZXRIaXN0b3J5TXNncycsIC8vIOS6keerr+S/neWtmOeahOWOhuWPsuiusOW9lVxuXG4gIC8vIOiBiuWkqeWupFxuICAnZ2V0Q2hhdHJvb21BZGRyZXNzJ1xuXVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgbG9naW4sXG4gIGNyZWF0ZSxcbiAgZ2V0SW5zdGFuY2Vcbn1cbiJdfQ==