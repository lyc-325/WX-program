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
  }).then(function (_ref) {
    var data = _ref.data;

    return data.code === 200 ? _promise2.default.resolve(data.info) : _promise2.default.reject(data);
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
function create(_ref2) {
  var accid = _ref2.accid,
      name = _ref2.name,
      icon = _ref2.icon,
      props = _ref2.props;

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
  }).then(function (_ref3) {
    var token = _ref3.token;
    return token;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5pbS5qcyJdLCJuYW1lcyI6WyJjb25maWciLCJjcmVhdGVIZWFkZXIiLCJub25jZSIsIk1hdGgiLCJjZWlsIiwicmFuZG9tIiwidG9TdHJpbmciLCJjdXJUaW1lIiwiZmxvb3IiLCJEYXRlIiwibm93IiwiY2hlY2tTdW0iLCJhcHBTZWNyZXQiLCJBcHBLZXkiLCJhcHBLZXkiLCJDdXJUaW1lIiwiTm9uY2UiLCJDaGVja1N1bSIsInJlcXVlc3QiLCJvcHRpb25zIiwiYXBpIiwiZGF0YSIsIm1ldGhvZCIsImhlYWRlciIsInVybCIsInNlcnZlciIsInRoZW4iLCJjb2RlIiwicmVzb2x2ZSIsImluZm8iLCJyZWplY3QiLCJjcmVhdGUiLCJhY2NpZCIsIm5hbWUiLCJpY29uIiwicHJvcHMiLCJsb2dpbiIsInRva2VuIiwiZ2V0SW5zdGFuY2UiLCJuaW0iLCJhY2NvdW50Iiwib25lcnJvciIsImVycm9yIiwiY29uc29sZSIsIm9uY29ubmVjdCIsIm9iaiIsImxvZyIsIm9uc2Vzc2lvbnMiLCJvbnVwZGF0ZXNlc3Npb24iLCJvcHVwZGF0ZXNlc3Npb24iLCJmb3JFYWNoIiwia2V5IiwiYmluZCIsInByb21pc2VkRnVuY3Rpb25zIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7O0FBQ0E7Ozs7QUFDQTs7Ozs7O0FBRUEsSUFBTUEsb0JBQU47QUFDQTs7O0FBR0EsU0FBU0MsWUFBVCxHQUF3QjtBQUN0QixNQUFNQyxRQUFRQyxLQUFLQyxJQUFMLENBQVVELEtBQUtFLE1BQUwsS0FBZ0IsS0FBMUIsRUFBaUNDLFFBQWpDLEVBQWQ7QUFDQSxNQUFNQyxVQUFXSixLQUFLSyxLQUFMLENBQVdDLEtBQUtDLEdBQUwsS0FBYSxJQUF4QixDQUFELENBQWdDSixRQUFoQyxFQUFoQjtBQUNBLE1BQU1LLFdBQVcsd0JBQVFYLE9BQU9ZLFNBQWYsR0FBMkJWLEtBQTNCLEdBQW1DSyxPQUFuQyxDQUFqQjtB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QyxPQUFQLEdBQWlCO0FBQ2ZuQixjQURlO0FBRWZMLGdCQUZlO0FBR2ZPO0FBSGUsQ0FBakIiLCJmaWxlIjoibmltLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFIgZnJvbSAnLi4vbGlicy9yYW1kYSdcbmltcG9ydCBOSU0gZnJvbSAnLi4vbGlicy9OSU1fV2ViX05JTV92My44LjAnXG5pbXBvcnQgcHJvbWlzaWZ5IGZyb20gJy4vcHJvbWlzaWZ5J1xuaW1wb3J0IHsgbmltIH0gZnJvbSAnLi4vY29uZmlnJ1xuaW1wb3J0IHNoYTEgZnJvbSAnc2hhMSdcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG5cbmNvbnN0IGNvbmZpZyA9IG5pbVxuLyoqXG4gKiDliJvlu7ror7fmsYLlpLRcbiAqL1xuZnVuY3Rpb24gY3JlYXRlSGVhZGVyKCkge1xuICBjb25zdCBub25jZSA9IE1hdGguY2VpbChNYXRoLnJhbmRvbSgpICogMTAwMDApLnRvU3RyaW5nKClcbiAgY29uc3QgY3VyVGltZSA9IChNYXRoLmZsb29yKERhdGUubm93KCkgLyAxMDAwKSkudG9TdHJpbmcoKVxuICBjb25zdCBjaGVja1N1bSA9IHNoYTEoYCR7Y29uZmlnLmFwcFNlY3JldH0ke25vbmNlfSR7Y3VyVGltZX1gKVxuICByZXR1cm4ge1xuICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkJyxcbiAgICBBcHBLZXk6IGNvbmZpZy5hcHBLZXksXG4gICAgQ3VyVGltZTogY3VyVGltZSxcbiAgICBOb25jZTogbm9uY2UsXG4gICAgQ2hlY2tTdW06IGNoZWNrU3VtXG4gIH1cbn1cblxuLyoqXG4gKiDmiafooYwgTklNIOebuOWFs+ivt+axglxuICovXG5mdW5jdGlvbiByZXF1ZXN0KG9wdGlvbnMpIHtcbiAgY29uc3Qge2FwaSwgZGF0YSwgbWV0aG9kfSA9IG9wdGlvbnNcbiAgY29uc3QgaGVhZGVyID0gY3JlYXRlSGVhZGVyKClcbiAgcmV0dXJuIHdlcHkucmVxdWVzdCh7XG4gICAgdXJsOiBgJHtjb25maWcuc2VydmVyfS8ke2FwaX1gLFxuICAgIGhlYWRlcixcbiAgICBkYXRhLFxuICAgIG1ldGhvZDogbWV0aG9kIHx8ICdQT1NUJ1xuICB9KS50aGVuKCh7IGRhdGEgfSkgPT4ge1xuICAgIHJldHVybiBkYXRhLmNvZGUgPT09IDIwMCA/IFByb21pc2UucmVzb2x2ZShkYXRhLmluZm8pIDogUHJvbWlzZS5yZWplY3QoZGF0YSlcbiAgfSlcbn1cblxuLyoqXG4gKiDliJvlu7rnlKjmiLdcbiAqIEBwYXJhbSBvcHRpb25zIE9iamVjdFxuICogQHBhcmFtIG9wdGlvbnMuYWNjaWQgU3RyaW5nXG4gKiBAcGFyYW0gb3B0aW9ucy5uYW1lIFN0cmluZ1xuICogQHBhcmFtIG9wdGlvbnMuaWNvbiBTdHJpbmdcbiAqIEBwYXJhbSBvcHRpb3NuLnByb3BzIE9iamVjdFxuICovXG5mdW5jdGlvbiBjcmVhdGUoe2FjY2lkLCBuYW1lLCBpY29uLCBwcm9wc30pIHtcbiAgcmV0dXJuIHJlcXVlc3Qoe1xuICAgIGFwaTogJ3VzZXIvY3JlYXRlLmFjdGlvbicsXG4gICAgZGF0YToge1xuICAgICAgYWNjaWQsXG4gICAgICBuYW1lLFxuICAgICAgaWNvblxuICAgIH1cbiAgfSlcbn1cblxuLyoqXG4gKiDliJvlu7rnlKjmiLdcbiAqIEBwYXJhbSBvcHRpb25zIE9iamVjdFxuICogQHBhcmFtIG9wdGlvbnMuYWNjaWQgU3RyaW5nXG4gKiBAcGFyYW0gb3B0aW9ucy5uYW1lIFN0cmluZ1xuICogQHBhcmFtIG9wdGlvbnMuaWNvbiBTdHJpbmdcbiAqIEBwYXJhbSBvcHRpb3NuLnByb3BzIE9iamVjdFxuICovXG5mdW5jdGlvbiBsb2dpbihhY2NpZCkge1xuICByZXR1cm4gcmVxdWVzdCh7XG4gICAgYXBpOiAndXNlci9yZWZyZXNoVG9rZW4uYWN0aW9uJyxcbiAgICBkYXRhOiB7XG4gICAgICBhY2NpZFxuICAgIH1cbiAgfSkudGhlbigoe3Rva2VufSkgPT4gdG9rZW4pXG59XG5cbi8qKlxuICog6I635b6XIE5JTSDlrp7kvotcbiAqIEBwYXJhbSBvcHRpb25zLmFjY291bnQgU3RyaW5nIOi0puaIt+WQjVxuICogQHBhcmFtIG9wdGlvbnMudG9rZW4gU3RyaW5nIHRva2VuXG4gKiBAcGFyYW0gb3B0aW9ucy5vblNlc3Npb25zIEZ1bmN0aW9uXG4gKi9cbmZ1bmN0aW9uIGdldEluc3RhbmNlKG9wdGlvbnMpIHtcbiAgY29uc3QgbmltID0gTklNLmdldEluc3RhbmNlKHtcbiAgICBhcHBLZXk6IGNvbmZpZy5hcHBLZXksXG4gICAgYWNjb3VudDogb3B0aW9ucy5hY2NvdW50LFxuICAgIHRva2VuOiBvcHRpb25zLnRva2VuLFxuICAgIG9uZXJyb3IoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ1tOSU1dIGVycm9yJywgZXJyb3IpXG4gICAgfSxcbiAgICBvbmNvbm5lY3Qob2JqKSB7XG4gICAgICBjb25zb2xlLmxvZygnW05JTV0gY29ubmVjdGQnKVxuICAgIH0sXG4gICAgb25zZXNzaW9uczogb3B0aW9ucy5vbnNlc3Npb25zLFxuICAgIG9udXBkYXRlc2Vzc2lvbjogb3B0aW9ucy5vcHVwZGF0ZXNlc3Npb25cbiAgfSlcblxuICAvLyBQcm9taXNpZnkgbmltIGZ1bmN0aW9uc1xuICBSLmZvckVhY2goKGtleSkgPT4ge1xuICAgIG5pbVtrZXldID0gcHJvbWlzaWZ5KG5pbVtrZXldLmJpbmQobmltKSlcbiAgfSwgcHJvbWlzZWRGdW5jdGlvbnMpXG5cbiAgcmV0dXJuIG5pbVxufVxuXG4vKipcbiAqIOmcgOimgeiiqyBQcm9taXNlIOWMlueahOWHveaVsFxuICovXG5jb25zdCBwcm9taXNlZEZ1bmN0aW9ucyA9IFtcbiAgLy8g5aW95Y+L5YWz57O755u45YWzIEFQSVxuICAnYWRkRnJpZW5kJyxcbiAgJ2FwcGx5RnJpZW5kJyxcbiAgJ3Bhc3NGcmllbmRBcHBseScsXG4gICdyZWplY3RGcmllbmRBcHBseScsXG4gICdkZWxldGVGcmllbmQnLFxuICAndXBkYXRlRnJpZW5kJyxcblxuICAvLyDmtojmga/nm7jlhbNcbiAgJ3NlbmRUZXh0JyxcbiAgJ3NlbmRGaWxlJyxcbiAgJ3Jlc2VuZE1zZycsXG4gICdtYXJrTXNnUmVhZCcsXG4gICdnZXRIaXN0b3J5TXNncycsIC8vIOS6keerr+S/neWtmOeahOWOhuWPsuiusOW9lVxuXG4gIC8vIOiBiuWkqeWupFxuICAnZ2V0Q2hhdHJvb21BZGRyZXNzJ1xuXVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgbG9naW4sXG4gIGNyZWF0ZSxcbiAgZ2V0SW5zdGFuY2Vcbn1cbiJdfQ==