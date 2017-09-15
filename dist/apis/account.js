'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getCodeNum = exports.search = exports.getTokenUserId = exports.checkOpenGid = exports.saveOpenGid = exports.shareParsing = exports.getToken = exports.createUser = undefined;

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
  }).then(function (res) {
    return res;
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

var getCodeNum = exports.getCodeNum = function getCodeNum(name, mobile) {
  return _jf2.default.request({
    api: 'accounts/get_captcha/',
    data: {
      name: '' + name,
      mobile: '' + mobile
    },
    method: 'POST'
  }).then(function (res) {
    return res;
  });
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFjY291bnQuanMiXSwibmFtZXMiOlsiY29uZmlnIiwiY3JlYXRlVXNlciIsImFjY2lkIiwicGFzc3dvcmQiLCJpbmZvcyIsInJlcXVlc3QiLCJhcGkiLCJkYXRhIiwibWV0aG9kIiwiZ2V0VG9rZW4iLCJ1c2VybmFtZSIsInRoZW4iLCJyZXMiLCJzaGFyZVBhcnNpbmciLCJrZXkiLCJpbmZvIiwiYXBwSWQiLCJzZXNzaW9uS2V5IiwiZW5jcnlwdGVkRGF0YSIsIml2Iiwic2F2ZU9wZW5HaWQiLCJ0b2tlbiIsInBhcnNlIiwib3BlbkdJZCIsInRpbWVzdGFtcCIsIndhdGVybWFyayIsImNoZWNrT3BlbkdpZCIsImlkIiwiZ2V0VG9rZW5Vc2VySWQiLCJzZWFyY2giLCJuaWNrbmFtZSIsInMiLCJnZXRDb2RlTnVtIiwibmFtZSIsIm1vYmlsZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBRUEsSUFBTUEsbUJBQU47QUFDTyxJQUFNQyxrQ0FBYSxTQUFiQSxVQUFhLENBQVNDLEtBQVQsRUFBZ0JDLFFBQWhCLEVBQTBCQyxLQUExQixFQUFpQztBQUN6RCxTQUFPLGFBQUdDLE9BQUgsQ0FBVztBQUNoQkMsU0FBSyxrQkFEVztBQUVoQkM7QUFDRUwsa0JBREY7QUFFRUM7QUFGRixPQUdLQyxLQUhMLENBRmdCO0FBT2hCSSxZQUFRO0FBUFEsR0FBWCxDQUFQO0FBU0QsQ0FWTTs7QUFZQSxJQUFNQyw4QkFBVyxTQUFYQSxRQUFXLENBQVVDLFFBQVYsRUFBb0JQLFFBQXBCLEVBQThCO0FBQ3BELFNBQU8sYUFBR0UsT0FBSCxDQUFXO0FBQ2hCQyxTQUFLLHVCQURXO0FBRWhCQyxVQUFNO0FBQ0pHLHdCQURJO0FBRUpQO0FBRkksS0FGVTtBQU1oQkssWUFBUTtBQU5RLEdBQVgsRUFPSkcsSUFQSSxDQU9DLFVBQUNDLEdBQUQ7QUFBQSxXQUFTQSxHQUFUO0FBQUEsR0FQRCxDQUFQO0FBUUQsQ0FUTTs7QUFXQSxJQUFNQyxzQ0FBZSxTQUFmQSxZQUFlLENBQVVDLEdBQVYsRUFBZUMsSUFBZixFQUFxQjtBQUMvQyxTQUFPLGFBQUdWLE9BQUgsQ0FBVztBQUNoQkMsU0FBSyxrQkFEVztBQUVoQkMsVUFBTTtBQUNKUyxrQkFBVWhCLE9BQU9nQixLQURiO0FBRUpDLGtCQUFZSCxJQUFJUCxJQUZaO0FBR0pXLHFCQUFlSCxLQUFLRyxhQUhoQjtBQUlKQyxVQUFJSixLQUFLSTtBQUpMLEtBRlU7QUFRaEJYLFlBQVE7QUFSUSxHQUFYLEVBU0pHLElBVEksQ0FTQyxVQUFDQyxHQUFEO0FBQUEsV0FBU0EsR0FBVDtBQUFBLEdBVEQsQ0FBUDtBQVVELENBWE07O0FBYUEsSUFBTVEsb0NBQWMsU0FBZEEsV0FBYyxDQUFVQyxLQUFWLEVBQWlCQyxLQUFqQixFQUF3QnBCLEtBQXhCLEVBQStCO0FBQ3hELFNBQU8sYUFBR0csT0FBSCxDQUFXO0FBQ2hCQyxTQUFLLG9CQURXO0FBRWhCQyxVQUFNO0FBQ0pjLGtCQUFVQSxNQUFNZCxJQURaO0FBRUpnQixvQkFBWUQsTUFBTUMsT0FGZDtBQUdKQyxzQkFBY0YsTUFBTUcsU0FBTixDQUFnQkQsU0FIMUI7QUFJSnRCLGtCQUFVQSxNQUFNSztBQUpaLEtBRlU7QUFRaEJDLFlBQVE7QUFSUSxHQUFYLEVBU0pHLElBVEksQ0FTQyxVQUFDQyxHQUFEO0FBQUEsV0FBU0EsR0FBVDtBQUFBLEdBVEQsQ0FBUDtBQVVELENBWE07O0FBYUEsSUFBTWMsc0NBQWUsU0FBZkEsWUFBZSxDQUFVTCxLQUFWLEVBQWlCTSxFQUFqQixFQUFxQjtBQUMvQyxTQUFPLGFBQUd0QixPQUFILENBQVc7QUFDaEJDLFNBQUsscUJBRFc7QUFFaEJDLFVBQU07QUFDSmMsa0JBQVVBLEtBRE47QUFFSm5CLGtCQUFVeUI7QUFGTixLQUZVO0FBTWhCbkIsWUFBUTtBQU5RLEdBQVgsRUFPSkcsSUFQSSxDQU9DLFVBQUNDLEdBQUQ7QUFBQSxXQUFTQSxHQUFUO0FBQUEsR0FQRCxDQUFQO0FBUUQsQ0FUTTs7QUFXQSxJQUFNZ0IsMENBQWlCLFNBQWpCQSxjQUFpQixDQUFVbEIsUUFBVixFQUFvQlAsUUFBcEIsRUFBOEI7QUFDMUQsU0FBTyxhQUFHRSxPQUFILENBQVc7QUFDaEJDLFNBQUssdUJBRFc7QUFFaEJDLFVBQU07QUFDSkcsd0JBREk7QUFFSlA7QUFGSSxLQUZVO0FBTWhCSyxZQUFRO0FBTlEsR0FBWCxFQU9KRyxJQVBJLENBT0MsVUFBQ0MsR0FBRDtBQUFBLFdBQVNBLEdBQVQ7QUFBQSxHQVBELENBQVA7QUFRRCxDQVRNOztBQVdBLElBQU1pQiwwQkFBUyxTQUFUQSxNQUFTLENBQVVDLFFBQVYsRUFBb0I7QUFDeEMsU0FBTyxhQUFHekIsT0FBSCxDQUFXO0FBQ2hCQyxTQUFLLGtCQURXO0FBRWhCQyxVQUFNO0FBQ0p3QixTQUFHRDtBQURDLEtBRlU7QUFLaEJ0QixZQUFRO0FBTFEsR0FBWCxDQUFQO0FBT0QsQ0FSTTs7QUFVQSxJQUFNd0Isa0NBQWEsU0FBYkEsVUFBYSxDQUFVQyxJQUFWLEVBQWdCQyxNQUFoQixFQUF3QjtBQUNoRCxTQUFPLGFBQUc3QixPQUFILENBQVc7QUFDaEJDLFNBQUssdUJBRFc7QUFFaEJDLFVBQU07QUFDSjBCLGlCQUFTQSxJQURMO0FBRUpDLG1CQUFXQTtBQUZQLEtBRlU7QUFNaEIxQixZQUFRO0FBTlEsR0FBWCxFQU9KRyxJQVBJLENBT0MsVUFBQ0MsR0FBRDtBQUFBLFdBQVNBLEdBQVQ7QUFBQSxHQVBELENBQVA7QUFPc0IsQ0FSakIiLCJmaWxlIjoiYWNjb3VudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBqZiBmcm9tICcuLi91dGlscy9qZidcbmltcG9ydCB7IHd4IH0gZnJvbSAnLi4vY29uZmlnJ1xuXG5jb25zdCBjb25maWcgPSB3eFxuZXhwb3J0IGNvbnN0IGNyZWF0ZVVzZXIgPSBmdW5jdGlvbihhY2NpZCwgcGFzc3dvcmQsIGluZm9zKSB7XG4gIHJldHVybiBqZi5yZXF1ZXN0KHtcbiAgICBhcGk6ICdhY2NvdW50cy9jcmVhdGUvJyxcbiAgICBkYXRhOiB7XG4gICAgICBhY2NpZCxcbiAgICAgIHBhc3N3b3JkLFxuICAgICAgLi4uaW5mb3NcbiAgICB9LFxuICAgIG1ldGhvZDogJ1BPU1QnXG4gIH0pXG59XG5cbmV4cG9ydCBjb25zdCBnZXRUb2tlbiA9IGZ1bmN0aW9uICh1c2VybmFtZSwgcGFzc3dvcmQpIHtcbiAgcmV0dXJuIGpmLnJlcXVlc3Qoe1xuICAgIGFwaTogJ2FjY291bnRzL2xvZ2luX3ZpZXdzLycsXG4gICAgZGF0YToge1xuICAgICAgdXNlcm5hbWUsXG4gICAgICBwYXNzd29yZFxuICAgIH0sXG4gICAgbWV0aG9kOiAnUE9TVCdcbiAgfSkudGhlbigocmVzKSA9PiByZXMpXG59XG5cbmV4cG9ydCBjb25zdCBzaGFyZVBhcnNpbmcgPSBmdW5jdGlvbiAoa2V5LCBpbmZvKSB7XG4gIHJldHVybiBqZi5yZXF1ZXN0KHtcbiAgICBhcGk6ICdhY2NvdW50cy9kZWNvZGUvJyxcbiAgICBkYXRhOiB7XG4gICAgICBhcHBJZDogYCR7Y29uZmlnLmFwcElkfWAsXG4gICAgICBzZXNzaW9uS2V5OiBrZXkuZGF0YSxcbiAgICAgIGVuY3J5cHRlZERhdGE6IGluZm8uZW5jcnlwdGVkRGF0YSxcbiAgICAgIGl2OiBpbmZvLml2XG4gICAgfSxcbiAgICBtZXRob2Q6ICdQT1NUJ1xuICB9KS50aGVuKChyZXMpID0+IHJlcylcbn1cblxuZXhwb3J0IGNvbnN0IHNhdmVPcGVuR2lkID0gZnVuY3Rpb24gKHRva2VuLCBwYXJzZSwgYWNjaWQpIHtcbiAgcmV0dXJuIGpmLnJlcXVlc3Qoe1xuICAgIGFwaTogJ2FjY291bnRzL3NhdmVfZ2lkLycsXG4gICAgZGF0YToge1xuICAgICAgdG9rZW46IGAke3Rva2VuLmRhdGF9YCxcbiAgICAgIG9wZW5HSWQ6IGAke3BhcnNlLm9wZW5HSWR9YCxcbiAgICAgIHRpbWVzdGFtcDogYCR7cGFyc2Uud2F0ZXJtYXJrLnRpbWVzdGFtcH1gLFxuICAgICAgYWNjaWQ6IGAke2FjY2lkLmRhdGF9YFxuICAgIH0sXG4gICAgbWV0aG9kOiAnUE9TVCdcbiAgfSkudGhlbigocmVzKSA9PiByZXMpXG59XG5cbmV4cG9ydCBjb25zdCBjaGVja09wZW5HaWQgPSBmdW5jdGlvbiAodG9rZW4sIGlkKSB7XG4gIHJldHVybiBqZi5yZXF1ZXN0KHtcbiAgICBhcGk6ICdhY2NvdW50cy9jaGVja19naWQvJyxcbiAgICBkYXRhOiB7XG4gICAgICB0b2tlbjogYCR7dG9rZW59YCxcbiAgICAgIGFjY2lkOiBgJHtpZH1gXG4gICAgfSxcbiAgICBtZXRob2Q6ICdQT1NUJ1xuICB9KS50aGVuKChyZXMpID0+IHJlcylcbn1cblxuZXhwb3J0IGNvbnN0IGdldFRva2VuVXNlcklkID0gZnVuY3Rpb24gKHVzZXJuYW1lLCBwYXNzd29yZCkge1xuICByZXR1cm4gamYucmVxdWVzdCh7XG4gICAgYXBpOiAnYWNjb3VudHMvbG9naW5fdmlld3MvJyxcbiAgICBkYXRhOiB7XG4gICAgICB1c2VybmFtZSxcbiAgICAgIHBhc3N3b3JkXG4gICAgfSxcbiAgICBtZXRob2Q6ICdQT1NUJ1xuICB9KS50aGVuKChyZXMpID0+IHJlcylcbn1cblxuZXhwb3J0IGNvbnN0IHNlYXJjaCA9IGZ1bmN0aW9uIChuaWNrbmFtZSkge1xuICByZXR1cm4gamYucmVxdWVzdCh7XG4gICAgYXBpOiAnYWNjb3VudHMvc2VhcmNoLycsXG4gICAgZGF0YToge1xuICAgICAgczogbmlja25hbWVcbiAgICB9LFxuICAgIG1ldGhvZDogJ1BPU1QnXG4gIH0pXG59XG5cbmV4cG9ydCBjb25zdCBnZXRDb2RlTnVtID0gZnVuY3Rpb24gKG5hbWUsIG1vYmlsZSkge1xuICByZXR1cm4gamYucmVxdWVzdCh7XG4gICAgYXBpOiAnYWNjb3VudHMvZ2V0X2NhcHRjaGEvJyxcbiAgICBkYXRhOiB7XG4gICAgICBuYW1lOiBgJHtuYW1lfWAsXG4gICAgICBtb2JpbGU6IGAke21vYmlsZX1gXG4gICAgfSxcbiAgICBtZXRob2Q6ICdQT1NUJ1xuICB9KS50aGVuKChyZXMpID0+IHJlcyl9XG4iXX0=