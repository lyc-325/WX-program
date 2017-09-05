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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFjY291bnQuanMiXSwibmFtZXMiOlsiY29uZmlnIiwiY3JlYXRlVXNlciIsImFjY2lkIiwicGFzc3dvcmQiLCJpbmZvcyIsInJlcXVlc3QiLCJhcGkiLCJkYXRhIiwibWV0aG9kIiwiZ2V0VG9rZW4iLCJ1c2VybmFtZSIsInRoZW4iLCJyZXMiLCJzaGFyZVBhcnNpbmciLCJrZXkiLCJpbmZvIiwiYXBwSWQiLCJzZXNzaW9uS2V5IiwiZW5jcnlwdGVkRGF0YSIsIml2Iiwic2F2ZU9wZW5HaWQiLCJ0b2tlbiIsInBhcnNlIiwib3BlbkdJZCIsInRpbWVzdGFtcCIsIndhdGVybWFyayIsImNoZWNrT3BlbkdpZCIsImlkIiwiZ2V0VG9rZW5Vc2VySWQiLCJzZWFyY2giLCJuaWNrbmFtZSIsInMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUVBLElBQU1BLG1CQUFOO0FBQ08sSUFBTUMsa0NBQWEsU0FBYkEsVUFBYSxDQUFTQyxLQUFULEVBQWdCQyxRQUFoQixFQUEwQkMsS0FBMUIsRUFBaUM7QUFDekQsU0FBTyxhQUFHQyxPQUFILENBQVc7QUFDaEJDLFNBQUssa0JBRFc7QUFFaEJDO0FBQ0VMLGtCQURGO0FBRUVDO0FBRkYsT0FHS0MsS0FITCxDQUZnQjtBQU9oQkksWUFBUTtBQVBRLEdBQVgsQ0FBUDtBQVNELENBVk07O0FBWUEsSUFBTUMsOEJBQVcsU0FBWEEsUUFBVyxDQUFVQyxRQUFWLEVBQW9CUCxRQUFwQixFQUE4QjtBQUNwRCxTQUFPLGFBQUdFLE9BQUgsQ0FBVztBQUNoQkMsU0FBSyx1QkFEVztBQUVoQkMsVUFBTTtBQUNKRyx3QkFESTtBQUVKUDtBQUZJLEtBRlU7QUFNaEJLLFlBQVE7QUFOUSxHQUFYLEVBT0pHLElBUEksQ0FPQyxVQUFDQyxHQUFEO0FBQUEsV0FBU0EsR0FBVDtBQUFBLEdBUEQsQ0FBUDtBQVFELENBVE07O0FBV0EsSUFBTUMsc0NBQWUsU0FBZkEsWUFBZSxDQUFVQyxHQUFWLEVBQWVDLElBQWYsRUFBcUI7QUFDL0MsU0FBTyxhQUFHVixPQUFILENBQVc7QUFDaEJDLFNBQUssa0JBRFc7QUFFaEJDLFVBQU07QUFDSlMsa0JBQVVoQixPQUFPZ0IsS0FEYjtBQUVKQyxrQkFBWUgsSUFBSVAsSUFGWjtBQUdKVyxxQkFBZUgsS0FBS0csYUFIaEI7QUFJSkMsVUFBSUosS0FBS0k7QUFKTCxLQUZVO0FBUWhCWCxZQUFRO0FBUlEsR0FBWCxFQVNKRyxJQVRJLENBU0MsVUFBQ0MsR0FBRDtBQUFBLFdBQVNBLEdBQVQ7QUFBQSxHQVRELENBQVA7QUFVRCxDQVhNOztBQWFBLElBQU1RLG9DQUFjLFNBQWRBLFdBQWMsQ0FBVUMsS0FBVixFQUFpQkMsS0FBakIsRUFBd0JwQixLQUF4QixFQUErQjtBQUN4RCxTQUFPLGFBQUdHLE9BQUgsQ0FBVztBQUNoQkMsU0FBSyxvQkFEVztBQUVoQkMsVUFBTTtBQUNKYyxrQkFBVUEsTUFBTWQsSUFEWjtBQUVKZ0Isb0JBQVlELE1BQU1DLE9BRmQ7QUFHSkMsc0JBQWNGLE1BQU1HLFNBQU4sQ0FBZ0JELFNBSDFCO0FBSUp0QixrQkFBVUEsTUFBTUs7QUFKWixLQUZVO0FBUWhCQyxZQUFRO0FBUlEsR0FBWCxFQVNKRyxJQVRJLENBU0MsVUFBQ0MsR0FBRDtBQUFBLFdBQVNBLEdBQVQ7QUFBQSxHQVRELENBQVA7QUFVRCxDQVhNOztBQWFBLElBQU1jLHNDQUFlLFNBQWZBLFlBQWUsQ0FBVUwsS0FBVixFQUFpQk0sRUFBakIsRUFBcUI7QUFDL0MsU0FBTyxhQUFHdEIsT0FBSCxDQUFXO0FBQ2hCQyxTQUFLLHFCQURXO0FBRWhCQyxVQUFNO0FBQ0pjLGtCQUFVQSxLQUROO0FBRUpuQixrQkFBVXlCO0FBRk4sS0FGVTtBQU1oQm5CLFlBQVE7QUFOUSxHQUFYLEVBT0pHLElBUEksQ0FPQyxVQUFDQyxHQUFEO0FBQUEsV0FBU0EsR0FBVDtBQUFBLEdBUEQsQ0FBUDtBQVFELENBVE07O0FBV0EsSUFBTWdCLDBDQUFpQixTQUFqQkEsY0FBaUIsQ0FBVWxCLFFBQVYsRUFBb0JQLFFBQXBCLEVBQThCO0FBQzFELFNBQU8sYUFBR0UsT0FBSCxDQUFXO0FBQ2hCQyxTQUFLLHVCQURXO0FBRWhCQyxVQUFNO0FBQ0pHLHdCQURJO0FBRUpQO0FBRkksS0FGVTtBQU1oQkssWUFBUTtBQU5RLEdBQVgsRUFPSkcsSUFQSSxDQU9DLFVBQUNDLEdBQUQ7QUFBQSxXQUFTQSxHQUFUO0FBQUEsR0FQRCxDQUFQO0FBUUQsQ0FUTTs7QUFXQSxJQUFNaUIsMEJBQVMsU0FBVEEsTUFBUyxDQUFVQyxRQUFWLEVBQW9CO0FBQ3hDLFNBQU8sYUFBR3pCLE9BQUgsQ0FBVztBQUNoQkMsU0FBSyxrQkFEVztBQUVoQkMsVUFBTTtBQUNKd0IsU0FBR0Q7QUFEQyxLQUZVO0FBS2hCdEIsWUFBUTtBQUxRLEdBQVgsQ0FBUDtBQU9ELENBUk0iLCJmaWxlIjoiYWNjb3VudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBqZiBmcm9tICcuLi91dGlscy9qZidcbmltcG9ydCB7IHd4IH0gZnJvbSAnLi4vY29uZmlnJ1xuXG5jb25zdCBjb25maWcgPSB3eFxuZXhwb3J0IGNvbnN0IGNyZWF0ZVVzZXIgPSBmdW5jdGlvbihhY2NpZCwgcGFzc3dvcmQsIGluZm9zKSB7XG4gIHJldHVybiBqZi5yZXF1ZXN0KHtcbiAgICBhcGk6ICdhY2NvdW50cy9jcmVhdGUvJyxcbiAgICBkYXRhOiB7XG4gICAgICBhY2NpZCxcbiAgICAgIHBhc3N3b3JkLFxuICAgICAgLi4uaW5mb3NcbiAgICB9LFxuICAgIG1ldGhvZDogJ1BPU1QnXG4gIH0pXG59XG5cbmV4cG9ydCBjb25zdCBnZXRUb2tlbiA9IGZ1bmN0aW9uICh1c2VybmFtZSwgcGFzc3dvcmQpIHtcbiAgcmV0dXJuIGpmLnJlcXVlc3Qoe1xuICAgIGFwaTogJ2FjY291bnRzL2xvZ2luX3ZpZXdzLycsXG4gICAgZGF0YToge1xuICAgICAgdXNlcm5hbWUsXG4gICAgICBwYXNzd29yZFxuICAgIH0sXG4gICAgbWV0aG9kOiAnUE9TVCdcbiAgfSkudGhlbigocmVzKSA9PiByZXMpXG59XG5cbmV4cG9ydCBjb25zdCBzaGFyZVBhcnNpbmcgPSBmdW5jdGlvbiAoa2V5LCBpbmZvKSB7XG4gIHJldHVybiBqZi5yZXF1ZXN0KHtcbiAgICBhcGk6ICdhY2NvdW50cy9kZWNvZGUvJyxcbiAgICBkYXRhOiB7XG4gICAgICBhcHBJZDogYCR7Y29uZmlnLmFwcElkfWAsXG4gICAgICBzZXNzaW9uS2V5OiBrZXkuZGF0YSxcbiAgICAgIGVuY3J5cHRlZERhdGE6IGluZm8uZW5jcnlwdGVkRGF0YSxcbiAgICAgIGl2OiBpbmZvLml2XG4gICAgfSxcbiAgICBtZXRob2Q6ICdQT1NUJ1xuICB9KS50aGVuKChyZXMpID0+IHJlcylcbn1cblxuZXhwb3J0IGNvbnN0IHNhdmVPcGVuR2lkID0gZnVuY3Rpb24gKHRva2VuLCBwYXJzZSwgYWNjaWQpIHtcbiAgcmV0dXJuIGpmLnJlcXVlc3Qoe1xuICAgIGFwaTogJ2FjY291bnRzL3NhdmVfZ2lkLycsXG4gICAgZGF0YToge1xuICAgICAgdG9rZW46IGAke3Rva2VuLmRhdGF9YCxcbiAgICAgIG9wZW5HSWQ6IGAke3BhcnNlLm9wZW5HSWR9YCxcbiAgICAgIHRpbWVzdGFtcDogYCR7cGFyc2Uud2F0ZXJtYXJrLnRpbWVzdGFtcH1gLFxuICAgICAgYWNjaWQ6IGAke2FjY2lkLmRhdGF9YFxuICAgIH0sXG4gICAgbWV0aG9kOiAnUE9TVCdcbiAgfSkudGhlbigocmVzKSA9PiByZXMpXG59XG5cbmV4cG9ydCBjb25zdCBjaGVja09wZW5HaWQgPSBmdW5jdGlvbiAodG9rZW4sIGlkKSB7XG4gIHJldHVybiBqZi5yZXF1ZXN0KHtcbiAgICBhcGk6ICdhY2NvdW50cy9jaGVja19naWQvJyxcbiAgICBkYXRhOiB7XG4gICAgICB0b2tlbjogYCR7dG9rZW59YCxcbiAgICAgIGFjY2lkOiBgJHtpZH1gXG4gICAgfSxcbiAgICBtZXRob2Q6ICdQT1NUJ1xuICB9KS50aGVuKChyZXMpID0+IHJlcylcbn1cblxuZXhwb3J0IGNvbnN0IGdldFRva2VuVXNlcklkID0gZnVuY3Rpb24gKHVzZXJuYW1lLCBwYXNzd29yZCkge1xuICByZXR1cm4gamYucmVxdWVzdCh7XG4gICAgYXBpOiAnYWNjb3VudHMvbG9naW5fdmlld3MvJyxcbiAgICBkYXRhOiB7XG4gICAgICB1c2VybmFtZSxcbiAgICAgIHBhc3N3b3JkXG4gICAgfSxcbiAgICBtZXRob2Q6ICdQT1NUJ1xuICB9KS50aGVuKChyZXMpID0+IHJlcylcbn1cblxuZXhwb3J0IGNvbnN0IHNlYXJjaCA9IGZ1bmN0aW9uIChuaWNrbmFtZSkge1xuICByZXR1cm4gamYucmVxdWVzdCh7XG4gICAgYXBpOiAnYWNjb3VudHMvc2VhcmNoLycsXG4gICAgZGF0YToge1xuICAgICAgczogbmlja25hbWVcbiAgICB9LFxuICAgIG1ldGhvZDogJ1BPU1QnXG4gIH0pXG59XG4iXX0=