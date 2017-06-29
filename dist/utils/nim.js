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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5pbS5qcyJdLCJuYW1lcyI6WyJjb25maWciLCJjcmVhdGVIZWFkZXIiLCJub25jZSIsIk1hdGgiLCJjZWlsIiwicmFuZG9tIiwidG9TdHJpbmciLCJjdXJUaW1lIiwiZmxvb3IiLCJEYXRlIiwibm93IiwiY2hlY2tTdW0iLCJhcHBTZWNyZXQiLCJBcHBLZXkiLCJhcHBLZXkiLCJDdXJUaW1lIiwiTm9uY2UiLCJDaGVja1N1bSIsInJlcXVlc3QiLCJvcHRpb25zIiwiYXBpIiwiZGF0YSIsIm1ldGhvZCIsImhlYWRlciIsInVybCIsInNlcnZlciIsInRoZW4iLCJjb2RlIiwicmVzb2x2ZSIsImluZm8iLCJyZWplY3QiLCJkZXNjIiwiY3JlYXRlIiwiYWNjaWQiLCJuYW1lIiwiaWNvbiIsInByb3BzIiwibG9naW4iLCJ0b2tlbiIsImdldEluc3RhbmNlIiwibmltIiwiYWNjb3VudCIsIm9uZXJyb3IiLCJlcnJvciIsImNvbnNvbGUiLCJvbmNvbm5lY3QiLCJvYmoiLCJsb2ciLCJvbnNlc3Npb25zIiwib251cGRhdGVzZXNzaW9uIiwib3B1cGRhdGVzZXNzaW9uIiwiZm9yRWFjaCIsImtleSIsImJpbmQiLCJwcm9taXNlZEZ1bmN0aW9ucyIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOztBQUNBOzs7O0FBQ0E7Ozs7OztBQUVBLElBQU1BLG9CQUFOO0FBQ0E7OztBQUdBLFNBQVNDLFlBQVQsR0FBd0I7QUFDdEIsTUFBTUMsUUFBUUMsS0FBS0MsSUFBTCxDQUFVRCxLQUFLRSxNQUFMLEtBQWdCLEtBQTFCLEVBQWlDQyxRQUFqQyxFQUFkO0FBQ0EsTUFBTUMsVUFBV0osS0FBS0ssS0FBTCxDQUFXQyxLQUFLQyxHQUFMLEtBQWEsSUFBeEIsQ0FBRCxDQUFnQ0osUUFBaEMsRUFBaEI7QUFDQSxNQUFNSyxXQUFXLHdCQUFRWCxPQUFPWSxTQUFmLEdBQTJCVixLQUEzQixHQUFtQ0ssT0FBbkMs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Qjs7QUFvQkFDLE9BQU9DLE9BQVAsR0FBaUI7QUFDZm5CLGNBRGU7QUFFZkwsZ0JBRmU7QUFHZk87QUFIZSxDQUFqQiIsImZpbGUiOiJuaW0uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUiBmcm9tICcuLi9saWJzL3JhbWRhJ1xuaW1wb3J0IE5JTSBmcm9tICcuLi9saWJzL05JTV9XZWJfTklNX3YzLjguMCdcbmltcG9ydCBwcm9taXNpZnkgZnJvbSAnLi9wcm9taXNpZnknXG5pbXBvcnQgeyBuaW0gfSBmcm9tICcuLi9jb25maWcnXG5pbXBvcnQgc2hhMSBmcm9tICdzaGExJ1xuaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcblxuY29uc3QgY29uZmlnID0gbmltXG4vKipcbiAqIOWIm+W7uuivt+axguWktFxuICovXG5mdW5jdGlvbiBjcmVhdGVIZWFkZXIoKSB7XG4gIGNvbnN0IG5vbmNlID0gTWF0aC5jZWlsKE1hdGgucmFuZG9tKCkgKiAxMDAwMCkudG9TdHJpbmcoKVxuICBjb25zdCBjdXJUaW1lID0gKE1hdGguZmxvb3IoRGF0ZS5ub3coKSAvIDEwMDApKS50b1N0cmluZygpXG4gIGNvbnN0IGNoZWNrU3VtID0gc2hhMShgJHtjb25maWcuYXBwU2VjcmV0fSR7bm9uY2V9JHtjdXJUaW1lfWApXG4gIHJldHVybiB7XG4gICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQnLFxuICAgIEFwcEtleTogY29uZmlnLmFwcEtleSxcbiAgICBDdXJUaW1lOiBjdXJUaW1lLFxuICAgIE5vbmNlOiBub25jZSxcbiAgICBDaGVja1N1bTogY2hlY2tTdW1cbiAgfVxufVxuXG4vKipcbiAqIOaJp+ihjCBOSU0g55u45YWz6K+35rGCXG4gKi9cbmZ1bmN0aW9uIHJlcXVlc3Qob3B0aW9ucykge1xuICBjb25zdCB7YXBpLCBkYXRhLCBtZXRob2R9ID0gb3B0aW9uc1xuICBjb25zdCBoZWFkZXIgPSBjcmVhdGVIZWFkZXIoKVxuICByZXR1cm4gd2VweS5yZXF1ZXN0KHtcbiAgICB1cmw6IGAke2NvbmZpZy5zZXJ2ZXJ9LyR7YXBpfWAsXG4gICAgaGVhZGVyLFxuICAgIGRhdGEsXG4gICAgbWV0aG9kOiBtZXRob2QgfHwgJ1BPU1QnXG4gIH0pLnRoZW4oKHsgZGF0YSB9ICkgPT4ge1xuICAgIHJldHVybiBkYXRhLmNvZGUgPT09IDIwMCA/IFByb21pc2UucmVzb2x2ZShkYXRhLmluZm8pIDogUHJvbWlzZS5yZWplY3QoZGF0YS5kZXNjKVxuICB9KVxufVxuXG4vKipcbiAqIOWIm+W7uueUqOaIt1xuICogQHBhcmFtIG9wdGlvbnMgT2JqZWN0XG4gKiBAcGFyYW0gb3B0aW9ucy5hY2NpZCBTdHJpbmdcbiAqIEBwYXJhbSBvcHRpb25zLm5hbWUgU3RyaW5nXG4gKiBAcGFyYW0gb3B0aW9ucy5pY29uIFN0cmluZ1xuICogQHBhcmFtIG9wdGlvc24ucHJvcHMgT2JqZWN0XG4gKi9cbmZ1bmN0aW9uIGNyZWF0ZSh7YWNjaWQsIG5hbWUsIGljb24sIHByb3BzfSkge1xuICByZXR1cm4gcmVxdWVzdCh7XG4gICAgYXBpOiAndXNlci9jcmVhdGUuYWN0aW9uJyxcbiAgICBkYXRhOiB7XG4gICAgICBhY2NpZCxcbiAgICAgIG5hbWUsXG4gICAgICBpY29uXG4gICAgfVxuICB9KVxufVxuXG4vKipcbiAqIOWIm+W7uueUqOaIt1xuICogQHBhcmFtIG9wdGlvbnMgT2JqZWN0XG4gKiBAcGFyYW0gb3B0aW9ucy5hY2NpZCBTdHJpbmdcbiAqIEBwYXJhbSBvcHRpb25zLm5hbWUgU3RyaW5nXG4gKiBAcGFyYW0gb3B0aW9ucy5pY29uIFN0cmluZ1xuICogQHBhcmFtIG9wdGlvc24ucHJvcHMgT2JqZWN0XG4gKi9cbmZ1bmN0aW9uIGxvZ2luKGFjY2lkKSB7XG4gIHJldHVybiByZXF1ZXN0KHtcbiAgICBhcGk6ICd1c2VyL3JlZnJlc2hUb2tlbi5hY3Rpb24nLFxuICAgIGRhdGE6IHtcbiAgICAgIGFjY2lkXG4gICAgfVxuICB9KS50aGVuKCh7dG9rZW59KSA9PiB0b2tlbilcbn1cblxuLyoqXG4gKiDojrflvpcgTklNIOWunuS+i1xuICogQHBhcmFtIG9wdGlvbnMuYWNjb3VudCBTdHJpbmcg6LSm5oi35ZCNXG4gKiBAcGFyYW0gb3B0aW9ucy50b2tlbiBTdHJpbmcgdG9rZW5cbiAqIEBwYXJhbSBvcHRpb25zLm9uU2Vzc2lvbnMgRnVuY3Rpb25cbiAqL1xuZnVuY3Rpb24gZ2V0SW5zdGFuY2Uob3B0aW9ucykge1xuICBjb25zdCBuaW0gPSBOSU0uZ2V0SW5zdGFuY2Uoe1xuICAgIGFwcEtleTogY29uZmlnLmFwcEtleSxcbiAgICBhY2NvdW50OiBvcHRpb25zLmFjY291bnQsXG4gICAgdG9rZW46IG9wdGlvbnMudG9rZW4sXG4gICAgb25lcnJvcihlcnJvcikge1xuICAgICAgY29uc29sZS5lcnJvcignW05JTV0gZXJyb3InLCBlcnJvcilcbiAgICB9LFxuICAgIG9uY29ubmVjdChvYmopIHtcbiAgICAgIGNvbnNvbGUubG9nKCdbTklNXSBjb25uZWN0ZCcpXG4gICAgfSxcbiAgICBvbnNlc3Npb25zOiBvcHRpb25zLm9uc2Vzc2lvbnMsXG4gICAgb251cGRhdGVzZXNzaW9uOiBvcHRpb25zLm9wdXBkYXRlc2Vzc2lvblxuICB9KVxuXG4gIC8vIFByb21pc2lmeSBuaW0gZnVuY3Rpb25zXG4gIFIuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgbmltW2tleV0gPSBwcm9taXNpZnkobmltW2tleV0uYmluZChuaW0pKVxuICB9LCBwcm9taXNlZEZ1bmN0aW9ucylcblxuICByZXR1cm4gbmltXG59XG5cbi8qKlxuICog6ZyA6KaB6KKrIFByb21pc2Ug5YyW55qE5Ye95pWwXG4gKi9cbmNvbnN0IHByb21pc2VkRnVuY3Rpb25zID0gW1xuICAvLyDlpb3lj4vlhbPns7vnm7jlhbMgQVBJXG4gICdhZGRGcmllbmQnLFxuICAnYXBwbHlGcmllbmQnLFxuICAncGFzc0ZyaWVuZEFwcGx5JyxcbiAgJ3JlamVjdEZyaWVuZEFwcGx5JyxcbiAgJ2RlbGV0ZUZyaWVuZCcsXG4gICd1cGRhdGVGcmllbmQnLFxuXG4gIC8vIOa2iOaBr+ebuOWFs1xuICAnc2VuZFRleHQnLFxuICAnc2VuZEZpbGUnLFxuICAncmVzZW5kTXNnJyxcbiAgJ21hcmtNc2dSZWFkJyxcbiAgJ2dldEhpc3RvcnlNc2dzJywgLy8g5LqR56uv5L+d5a2Y55qE5Y6G5Y+y6K6w5b2VXG5cbiAgLy8g6IGK5aSp5a6kXG4gICdnZXRDaGF0cm9vbUFkZHJlc3MnXG5dXG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBsb2dpbixcbiAgY3JlYXRlLFxuICBnZXRJbnN0YW5jZVxufVxuIl19