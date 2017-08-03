'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.search = exports.getTokenUserId = exports.checkOpenGid = exports.saveOpenGid = exports.shareParsing = exports.getToken = exports.createUser = undefined;

var _extends2 = require('./../npm/babel-runtime/helpers/extends.js');

var _extends3 = _interopRequireDefault(_extends2);

var _jf = require('./../utils/jf.js');

var _jf2 = _interopRequireDefault(_jf);

var _config = require('./../config.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var config = _config.wx;
var createUser = exports.createUser = function createUser(accid, password, infos) {
  return _jf2.default.request({
    api: 'accounts/create/',
    data: (0, _extends3.default)({
      accid: accid,
      password: password
    }, infos),
    method: 'POST'
  });
};

var getToken = exports.getToken = function getToken(username, password) {
  return _jf2.default.request({
    api: 'accounts/login_views/',
    data: {
      username: username,
      password: password
    },
    method: 'POST'
  }).then(function (_ref) {
    var Token = _ref.Token;
    return Token;
  });
};

var shareParsing = exports.shareParsing = function shareParsing(key, info) {
  return _jf2.default.request({
    api: 'accounts/decode/',
    data: {
      appId: '' + config.appId,
      sessionKey: key.data,
      encryptedData: info.encryptedData,
      iv: info.iv
    },
    method: 'POST'
  }).then(function (res) {
    return res;
  });
};

var saveOpenGid = exports.saveOpenGid = function saveOpenGid(token, parse, accid) {
  return _jf2.default.request({
    api: 'accounts/save_gid/',
    data: {
      token: '' + token.data,
      openGId: '' + parse.openGId,
      timestamp: '' + parse.watermark.timestamp,
      accid: '' + accid.data
    },
    method: 'POST'
  }).then(function (res) {
    return res;
  });
};

var checkOpenGid = exports.checkOpenGid = function checkOpenGid(token, id) {
  return _jf2.default.request({
    api: 'accounts/check_gid/',
    data: {
      token: '' + token,
      accid: '' + id
    },
    method: 'POST'
  }).then(function (res) {
    return res;
  });
};

var getTokenUserId = exports.getTokenUserId = function getTokenUserId(username, password) {
  return _jf2.default.request({
    api: 'accounts/login_views/',
    data: {
      username: username,
      password: password
    },
    method: 'POST'
  }).then(function (res) {
    return res;
  });
};

var search = exports.search = function search(nickname) {
  return _jf2.default.request({
    api: 'accounts/search/',
    data: {
      s: nickname
    },
    method: 'POST'
  });
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFjY291bnQuanMiXSwibmFtZXMiOlsiY29uZmlnIiwiY3JlYXRlVXNlciIsImFjY2lkIiwicGFzc3dvcmQiLCJpbmZvcyIsInJlcXVlc3QiLCJhcGkiLCJkYXRhIiwibWV0aG9kIiwiZ2V0VG9rZW4iLCJ1c2VybmFtZSIsInRoZW4iLCJUb2tlbiIsInNoYXJlUGFyc2luZyIsImtleSIsImluZm8iLCJhcHBJZCIsInNlc3Npb25LZXkiLCJlbmNyeXB0ZWREYXRhIiwiaXYiLCJyZXMiLCJzYXZlT3BlbkdpZCIsInRva2VuIiwicGFyc2UiLCJvcGVuR0lkIiwidGltZXN0YW1wIiwid2F0ZXJtYXJrIiwiY2hlY2tPcGVuR2lkIiwiaWQiLCJnZXRUb2tlblVzZXJJZCIsInNlYXJjaCIsIm5pY2tuYW1lIiwicyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBRUEsSUFBTUEsbUJBQU47QUFDTyxJQUFNQyxrQ0FBYSxTQUFiQSxVQUFhLENBQVNDLEtBQVQsRUFBZ0JDLFFBQWhCLEVBQTBCQyxLQUExQixFQUFpQztBQUN6RCxTQUFPLGFBQUdDLE9BQUgsQ0FBVztBQUNoQkMsU0FBSyxrQkFEVztBQUVoQkM7QUFDRUwsa0JBREY7QUFFRUM7QUFGRixPQUdLQyxLQUhMLENBRmdCO0FBT2hCSSxZQUFRO0FBUFEsR0FBWCxDQUFQO0FBU0QsQ0FWTTs7QUFZQSxJQUFNQyw4QkFBVyxTQUFYQSxRQUFXLENBQVVDLFFBQVYsRUFBb0JQLFFBQXBCLEVBQThCO0FBQ3BELFNBQU8sYUFBR0UsT0FBSCxDQUFXO0FBQ2hCQyxTQUFLLHVCQURXO0FBRWhCQyxVQUFNO0FBQ0pHLHdCQURJO0FBRUpQO0FBRkksS0FGVTtBQU1oQkssWUFBUTtBQU5RLEdBQVgsRUFPSkcsSUFQSSxDQU9DO0FBQUEsUUFBR0MsS0FBSCxRQUFHQSxLQUFIO0FBQUEsV0FBZUEsS0FBZjtBQUFBLEdBUEQsQ0FBUDtBQVFELENBVE07O0FBV0EsSUFBTUMsc0NBQWUsU0FBZkEsWUFBZSxDQUFVQyxHQUFWLEVBQWVDLElBQWYsRUFBcUI7QUFDL0MsU0FBTyxhQUFHVixPQUFILENBQVc7QUFDaEJDLFNBQUssa0JBRFc7QUFFaEJDLFVBQU07QUFDSlMsa0JBQVVoQixPQUFPZ0IsS0FEYjtBQUVKQyxrQkFBWUgsSUFBSVAsSUFGWjtBQUdKVyxxQkFBZUgsS0FBS0csYUFIaEI7QUFJSkMsVUFBSUosS0FBS0k7QUFKTCxLQUZVO0FBUWhCWCxZQUFRO0FBUlEsR0FBWCxFQVNKRyxJQVRJLENBU0MsVUFBQ1MsR0FBRDtBQUFBLFdBQVNBLEdBQVQ7QUFBQSxHQVRELENBQVA7QUFVRCxDQVhNOztBQWFBLElBQU1DLG9DQUFjLFNBQWRBLFdBQWMsQ0FBVUMsS0FBVixFQUFpQkMsS0FBakIsRUFBd0JyQixLQUF4QixFQUErQjtBQUN4RCxTQUFPLGFBQUdHLE9BQUgsQ0FBVztBQUNoQkMsU0FBSyxvQkFEVztBQUVoQkMsVUFBTTtBQUNKZSxrQkFBVUEsTUFBTWYsSUFEWjtBQUVKaUIsb0JBQVlELE1BQU1DLE9BRmQ7QUFHSkMsc0JBQWNGLE1BQU1HLFNBQU4sQ0FBZ0JELFNBSDFCO0FBSUp2QixrQkFBVUEsTUFBTUs7QUFKWixLQUZVO0FBUWhCQyxZQUFRO0FBUlEsR0FBWCxFQVNKRyxJQVRJLENBU0MsVUFBQ1MsR0FBRDtBQUFBLFdBQVNBLEdBQVQ7QUFBQSxHQVRELENBQVA7QUFVRCxDQVhNOztBQWFBLElBQU1PLHNDQUFlLFNBQWZBLFlBQWUsQ0FBVUwsS0FBVixFQUFpQk0sRUFBakIsRUFBcUI7QUFDL0MsU0FBTyxhQUFHdkIsT0FBSCxDQUFXO0FBQ2hCQyxTQUFLLHFCQURXO0FBRWhCQyxVQUFNO0FBQ0plLGtCQUFVQSxLQUROO0FBRUpwQixrQkFBVTBCO0FBRk4sS0FGVTtBQU1oQnBCLFlBQVE7QUFOUSxHQUFYLEVBT0pHLElBUEksQ0FPQyxVQUFDUyxHQUFEO0FBQUEsV0FBU0EsR0FBVDtBQUFBLEdBUEQsQ0FBUDtBQVFELENBVE07O0FBV0EsSUFBTVMsMENBQWlCLFNBQWpCQSxjQUFpQixDQUFVbkIsUUFBVixFQUFvQlAsUUFBcEIsRUFBOEI7QUFDMUQsU0FBTyxhQUFHRSxPQUFILENBQVc7QUFDaEJDLFNBQUssdUJBRFc7QUFFaEJDLFVBQU07QUFDSkcsd0JBREk7QUFFSlA7QUFGSSxLQUZVO0FBTWhCSyxZQUFRO0FBTlEsR0FBWCxFQU9KRyxJQVBJLENBT0MsVUFBQ1MsR0FBRDtBQUFBLFdBQVNBLEdBQVQ7QUFBQSxHQVBELENBQVA7QUFRRCxDQVRNOztBQVdBLElBQU1VLDBCQUFTLFNBQVRBLE1BQVMsQ0FBVUMsUUFBVixFQUFvQjtBQUN4QyxTQUFPLGFBQUcxQixPQUFILENBQVc7QUFDaEJDLFNBQUssa0JBRFc7QUFFaEJDLFVBQU07QUFDSnlCLFNBQUdEO0FBREMsS0FGVTtBQUtoQnZCLFlBQVE7QUFMUSxHQUFYLENBQVA7QUFPRCxDQVJNIiwiZmlsZSI6ImFjY291bnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgamYgZnJvbSAnLi4vdXRpbHMvamYnXG5pbXBvcnQgeyB3eCB9IGZyb20gJy4uL2NvbmZpZydcblxuY29uc3QgY29uZmlnID0gd3hcbmV4cG9ydCBjb25zdCBjcmVhdGVVc2VyID0gZnVuY3Rpb24oYWNjaWQsIHBhc3N3b3JkLCBpbmZvcykge1xuICByZXR1cm4gamYucmVxdWVzdCh7XG4gICAgYXBpOiAnYWNjb3VudHMvY3JlYXRlLycsXG4gICAgZGF0YToge1xuICAgICAgYWNjaWQsXG4gICAgICBwYXNzd29yZCxcbiAgICAgIC4uLmluZm9zXG4gICAgfSxcbiAgICBtZXRob2Q6ICdQT1NUJ1xuICB9KVxufVxuXG5leHBvcnQgY29uc3QgZ2V0VG9rZW4gPSBmdW5jdGlvbiAodXNlcm5hbWUsIHBhc3N3b3JkKSB7XG4gIHJldHVybiBqZi5yZXF1ZXN0KHtcbiAgICBhcGk6ICdhY2NvdW50cy9sb2dpbl92aWV3cy8nLFxuICAgIGRhdGE6IHtcbiAgICAgIHVzZXJuYW1lLFxuICAgICAgcGFzc3dvcmRcbiAgICB9LFxuICAgIG1ldGhvZDogJ1BPU1QnXG4gIH0pLnRoZW4oKHsgVG9rZW4gfSkgPT4gVG9rZW4pXG59XG5cbmV4cG9ydCBjb25zdCBzaGFyZVBhcnNpbmcgPSBmdW5jdGlvbiAoa2V5LCBpbmZvKSB7XG4gIHJldHVybiBqZi5yZXF1ZXN0KHtcbiAgICBhcGk6ICdhY2NvdW50cy9kZWNvZGUvJyxcbiAgICBkYXRhOiB7XG4gICAgICBhcHBJZDogYCR7Y29uZmlnLmFwcElkfWAsXG4gICAgICBzZXNzaW9uS2V5OiBrZXkuZGF0YSxcbiAgICAgIGVuY3J5cHRlZERhdGE6IGluZm8uZW5jcnlwdGVkRGF0YSxcbiAgICAgIGl2OiBpbmZvLml2XG4gICAgfSxcbiAgICBtZXRob2Q6ICdQT1NUJ1xuICB9KS50aGVuKChyZXMpID0+IHJlcylcbn1cblxuZXhwb3J0IGNvbnN0IHNhdmVPcGVuR2lkID0gZnVuY3Rpb24gKHRva2VuLCBwYXJzZSwgYWNjaWQpIHtcbiAgcmV0dXJuIGpmLnJlcXVlc3Qoe1xuICAgIGFwaTogJ2FjY291bnRzL3NhdmVfZ2lkLycsXG4gICAgZGF0YToge1xuICAgICAgdG9rZW46IGAke3Rva2VuLmRhdGF9YCxcbiAgICAgIG9wZW5HSWQ6IGAke3BhcnNlLm9wZW5HSWR9YCxcbiAgICAgIHRpbWVzdGFtcDogYCR7cGFyc2Uud2F0ZXJtYXJrLnRpbWVzdGFtcH1gLFxuICAgICAgYWNjaWQ6IGAke2FjY2lkLmRhdGF9YFxuICAgIH0sXG4gICAgbWV0aG9kOiAnUE9TVCdcbiAgfSkudGhlbigocmVzKSA9PiByZXMpXG59XG5cbmV4cG9ydCBjb25zdCBjaGVja09wZW5HaWQgPSBmdW5jdGlvbiAodG9rZW4sIGlkKSB7XG4gIHJldHVybiBqZi5yZXF1ZXN0KHtcbiAgICBhcGk6ICdhY2NvdW50cy9jaGVja19naWQvJyxcbiAgICBkYXRhOiB7XG4gICAgICB0b2tlbjogYCR7dG9rZW59YCxcbiAgICAgIGFjY2lkOiBgJHtpZH1gXG4gICAgfSxcbiAgICBtZXRob2Q6ICdQT1NUJ1xuICB9KS50aGVuKChyZXMpID0+IHJlcylcbn1cblxuZXhwb3J0IGNvbnN0IGdldFRva2VuVXNlcklkID0gZnVuY3Rpb24gKHVzZXJuYW1lLCBwYXNzd29yZCkge1xuICByZXR1cm4gamYucmVxdWVzdCh7XG4gICAgYXBpOiAnYWNjb3VudHMvbG9naW5fdmlld3MvJyxcbiAgICBkYXRhOiB7XG4gICAgICB1c2VybmFtZSxcbiAgICAgIHBhc3N3b3JkXG4gICAgfSxcbiAgICBtZXRob2Q6ICdQT1NUJ1xuICB9KS50aGVuKChyZXMpID0+IHJlcylcbn1cblxuZXhwb3J0IGNvbnN0IHNlYXJjaCA9IGZ1bmN0aW9uIChuaWNrbmFtZSkge1xuICByZXR1cm4gamYucmVxdWVzdCh7XG4gICAgYXBpOiAnYWNjb3VudHMvc2VhcmNoLycsXG4gICAgZGF0YToge1xuICAgICAgczogbmlja25hbWVcbiAgICB9LFxuICAgIG1ldGhvZDogJ1BPU1QnXG4gIH0pXG59XG4iXX0=