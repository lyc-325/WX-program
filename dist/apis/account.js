'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getUserInfo = exports.getStarArticleList = exports.getStarUserList = exports.userStar = exports.userUnstar = exports.articleUnstar = exports.articleStar = exports.getSession = exports.getCodeNum = exports.search = exports.getTokenUserId = exports.checkOpenGid = exports.saveOpenGid = exports.shareParsing = exports.getToken = exports.createUser = undefined;

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

var getSession = exports.getSession = function getSession(code, appID, appSecrete) {
  return _jf2.default.request({
    api: 'accounts/get_session_key/',
    data: {
      appid: appID,
      app_secrete: appSecrete,
      code: code
    },
    method: 'POST'
  }).then(function (res) {
    return JSON.parse(res);
  });
};

var articleStar = exports.articleStar = function articleStar(source, target) {
  return _jf2.default.request({
    api: 'accounts/article_star/star/',
    data: {
      source: source,
      target: target
    },
    method: 'POST'
  });
};

var articleUnstar = exports.articleUnstar = function articleUnstar(source, target) {
  return _jf2.default.request({
    api: 'accounts/article_star/unstar/',
    data: {
      source: source,
      target: target
    },
    method: 'POST'
  });
};

var userUnstar = exports.userUnstar = function userUnstar(source, target) {
  return _jf2.default.request({
    api: 'accounts/user_star/unstar/',
    data: {
      source: source,
      target: target
    },
    method: 'POST'
  });
};

var userStar = exports.userStar = function userStar(source, target) {
  return _jf2.default.request({
    api: 'accounts/user_star/star/',
    data: {
      source: source,
      target: target
    },
    method: 'POST'
  });
};

var getStarUserList = exports.getStarUserList = function getStarUserList(source) {
  return _jf2.default.request({
    api: 'accounts/user_star/list_stars/',
    data: {
      source: source
    },
    method: 'POST'
  }).then(function (res) {
    return res;
  });
};
var getStarArticleList = exports.getStarArticleList = function getStarArticleList(source) {
  return _jf2.default.request({
    api: 'accounts/article_star/list_stars/',
    data: {
      source: source
    },
    method: 'POST'
  }).then(function (res) {
    return res;
  });
};

var getUserInfo = exports.getUserInfo = function getUserInfo(roomid, accid) {
  return _jf2.default.request({
    api: 'accounts/get_info_netease/',
    data: {
      roomid: roomid,
      accid: accid
    },
    method: 'POST'
  });
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFjY291bnQuanMiXSwibmFtZXMiOlsiY29uZmlnIiwiY3JlYXRlVXNlciIsImFjY2lkIiwicGFzc3dvcmQiLCJpbmZvcyIsInJlcXVlc3QiLCJhcGkiLCJkYXRhIiwibWV0aG9kIiwiZ2V0VG9rZW4iLCJ1c2VybmFtZSIsInRoZW4iLCJyZXMiLCJzaGFyZVBhcnNpbmciLCJrZXkiLCJpbmZvIiwiYXBwSWQiLCJzZXNzaW9uS2V5IiwiZW5jcnlwdGVkRGF0YSIsIml2Iiwic2F2ZU9wZW5HaWQiLCJ0b2tlbiIsInBhcnNlIiwib3BlbkdJZCIsInRpbWVzdGFtcCIsIndhdGVybWFyayIsImNoZWNrT3BlbkdpZCIsImlkIiwiZ2V0VG9rZW5Vc2VySWQiLCJzZWFyY2giLCJuaWNrbmFtZSIsInMiLCJnZXRDb2RlTnVtIiwibmFtZSIsIm1vYmlsZSIsImdldFNlc3Npb24iLCJjb2RlIiwiYXBwSUQiLCJhcHBTZWNyZXRlIiwiYXBwaWQiLCJhcHBfc2VjcmV0ZSIsIkpTT04iLCJhcnRpY2xlU3RhciIsInNvdXJjZSIsInRhcmdldCIsImFydGljbGVVbnN0YXIiLCJ1c2VyVW5zdGFyIiwidXNlclN0YXIiLCJnZXRTdGFyVXNlckxpc3QiLCJnZXRTdGFyQXJ0aWNsZUxpc3QiLCJnZXRVc2VySW5mbyIsInJvb21pZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBRUEsSUFBTUEsbUJBQU47QUFDTyxJQUFNQyxrQ0FBYSxTQUFiQSxVQUFhLENBQVNDLEtBQVQsRUFBZ0JDLFFBQWhCLEVBQTBCQyxLQUExQixFQUFpQztBQUN6RCxTQUFPLGFBQUdDLE9BQUgsQ0FBVztBQUNoQkMsU0FBSyxrQkFEVztBQUVoQkM7QUFDRUwsa0JBREY7QUFFRUM7QUFGRixPQUdLQyxLQUhMLENBRmdCO0FBT2hCSSxZQUFRO0FBUFEsR0FBWCxDQUFQO0FBU0QsQ0FWTTs7QUFZQSxJQUFNQyw4QkFBVyxTQUFYQSxRQUFXLENBQVVDLFFBQVYsRUFBb0JQLFFBQXBC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YUFBR3ZDLE9BQUgsQ0FBVztBQUNoQkMsU0FBSywwQkFEVztBQUVoQkMsVUFBTTtBQUNKb0MsY0FBUUEsTUFESjtBQUVKQyxjQUFRQTtBQUZKLEtBRlU7QUFNaEJwQyxZQUFRO0FBTlEsR0FBWCxDQUFQO0FBUUQsQ0FUTTs7QUFZQSxJQUFNd0MsNENBQWtCLFNBQWxCQSxlQUFrQixDQUFTTCxNQUFULEVBQWlCO0FBQzlDLFNBQU8sYUFBR3RDLE9BQUgsQ0FBVztBQUNoQkMsU0FBSyxnQ0FEVztBQUVoQkMsVUFBTTtBQUNKb0MsY0FBUUE7QUFESixLQUZVO0FBS2hCbkMsWUFBUTtBQUxRLEdBQVgsRUFNSkcsSUFOSSxDQU1DLFVBQUNDLEdBQUQ7QUFBQSxXQUFTQSxHQUFUO0FBQUEsR0FORCxDQUFQO0FBT0QsQ0FSTTtBQVNBLElBQU1xQyxrREFBcUIsU0FBckJBLGtCQUFxQixDQUFTTixNQUFULEVBQWlCO0FBQ2pELFNBQU8sYUFBR3RDLE9BQUgsQ0FBVztBQUNoQkMsU0FBSyxtQ0FEVztBQUVoQkMsVUFBTTtBQUNKb0MsY0FBUUE7QUFESixLQUZVO0FBS2hCbkMsWUFBUTtBQUxRLEdBQVgsRUFNSkcsSUFOSSxDQU1DLFVBQUNDLEdBQUQ7QUFBQSxXQUFTQSxHQUFUO0FBQUEsR0FORCxDQUFQO0FBT0QsQ0FSTTs7QUFVQSxJQUFNc0Msb0NBQWMsU0FBZEEsV0FBYyxDQUFTQyxNQUFULEVBQWdCakQsS0FBaEIsRUFBdUI7QUFDaEQsU0FBTyxhQUFHRyxPQUFILENBQVc7QUFDaEJDLFNBQUssNEJBRFc7QUFFaEJDLFVBQU07QUFDSjRDLGNBQVFBLE1BREo7QUFFSmpELGFBQU9BO0FBRkgsS0FGVTtBQU1oQk0sWUFBUTtBQU5RLEdBQVgsQ0FBUDtBQVFELENBVE0iLCJmaWxlIjoiYWNjb3VudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBqZiBmcm9tICcuLi91dGlscy9qZidcclxuaW1wb3J0IHsgd3ggfSBmcm9tICcuLi9jb25maWcnXHJcblxyXG5jb25zdCBjb25maWcgPSB3eFxyXG5leHBvcnQgY29uc3QgY3JlYXRlVXNlciA9IGZ1bmN0aW9uKGFjY2lkLCBwYXNzd29yZCwgaW5mb3MpIHtcclxuICByZXR1cm4gamYucmVxdWVzdCh7XHJcbiAgICBhcGk6ICdhY2NvdW50cy9jcmVhdGUvJyxcclxuICAgIGRhdGE6IHtcclxuICAgICAgYWNjaWQsXHJcbiAgICAgIHBhc3N3b3JkLFxyXG4gICAgICAuLi5pbmZvc1xyXG4gICAgfSxcclxuICAgIG1ldGhvZDogJ1BPU1QnXHJcbiAgfSlcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGdldFRva2VuID0gZnVuY3Rpb24gKHVzZXJuYW1lLCBwYXNzd29yZCkge1xyXG4gIHJldHVybiBqZi5yZXF1ZXN0KHtcclxuICAgIGFwaTogJ2FjY291bnRzL2xvZ2luX3ZpZXdzLycsXHJcbiAgICBkYXRhOiB7XHJcbiAgICAgIHVzZXJuYW1lLFxyXG4gICAgICBwYXNzd29yZFxyXG4gICAgfSxcclxuICAgIG1ldGhvZDogJ1BPU1QnXHJcbiAgfSkudGhlbigocmVzKSA9PiByZXMpXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBzaGFyZVBhcnNpbmcgPSBmdW5jdGlvbiAoa2V5LCBpbmZvKSB7XHJcbiAgcmV0dXJuIGpmLnJlcXVlc3Qoe1xyXG4gICAgYXBpOiAnYWNjb3VudHMvZGVjb2RlLycsXHJcbiAgICBkYXRhOiB7XHJcbiAgICAgIGFwcElkOiBgJHtjb25maWcuYXBwSWR9YCxcclxuICAgICAgc2Vzc2lvbktleToga2V5LmRhdGEsXHJcbiAgICAgIGVuY3J5cHRlZERhdGE6IGluZm8uZW5jcnlwdGVkRGF0YSxcclxuICAgICAgaXY6IGluZm8uaXZcclxuICAgIH0sXHJcbiAgICBtZXRob2Q6ICdQT1NUJ1xyXG4gIH0pLnRoZW4oKHJlcykgPT4gcmVzKVxyXG59XHJcblxyXG5leHBvcnQgY29uc3Qgc2F2ZU9wZW5HaWQgPSBmdW5jdGlvbiAodG9rZW4sIHBhcnNlLCBhY2NpZCkge1xyXG4gIHJldHVybiBqZi5yZXF1ZXN0KHtcclxuICAgIGFwaTogJ2FjY291bnRzL3NhdmVfZ2lkLycsXHJcbiAgICBkYXRhOiB7XHJcbiAgICAgIHRva2VuOiBgJHt0b2tlbi5kYXRhfWAsXHJcbiAgICAgIG9wZW5HSWQ6IGAke3BhcnNlLm9wZW5HSWR9YCxcclxuICAgICAgdGltZXN0YW1wOiBgJHtwYXJzZS53YXRlcm1hcmsudGltZXN0YW1wfWAsXHJcbiAgICAgIGFjY2lkOiBgJHthY2NpZC5kYXRhfWBcclxuICAgIH0sXHJcbiAgICBtZXRob2Q6ICdQT1NUJ1xyXG4gIH0pLnRoZW4oKHJlcykgPT4gcmVzKVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgY2hlY2tPcGVuR2lkID0gZnVuY3Rpb24gKHRva2VuLCBpZCkge1xyXG4gIHJldHVybiBqZi5yZXF1ZXN0KHtcclxuICAgIGFwaTogJ2FjY291bnRzL2NoZWNrX2dpZC8nLFxyXG4gICAgZGF0YToge1xyXG4gICAgICB0b2tlbjogYCR7dG9rZW59YCxcclxuICAgICAgYWNjaWQ6IGAke2lkfWBcclxuICAgIH0sXHJcbiAgICBtZXRob2Q6ICdQT1NUJ1xyXG4gIH0pLnRoZW4oKHJlcykgPT4gcmVzKVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0VG9rZW5Vc2VySWQgPSBmdW5jdGlvbiAodXNlcm5hbWUsIHBhc3N3b3JkKSB7XHJcbiAgcmV0dXJuIGpmLnJlcXVlc3Qoe1xyXG4gICAgYXBpOiAnYWNjb3VudHMvbG9naW5fdmlld3MvJyxcclxuICAgIGRhdGE6IHtcclxuICAgICAgdXNlcm5hbWUsXHJcbiAgICAgIHBhc3N3b3JkXHJcbiAgICB9LFxyXG4gICAgbWV0aG9kOiAnUE9TVCdcclxuICB9KS50aGVuKChyZXMpID0+IHJlcylcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IHNlYXJjaCA9IGZ1bmN0aW9uIChuaWNrbmFtZSkge1xyXG4gIHJldHVybiBqZi5yZXF1ZXN0KHtcclxuICAgIGFwaTogJ2FjY291bnRzL3NlYXJjaC8nLFxyXG4gICAgZGF0YToge1xyXG4gICAgICBzOiBuaWNrbmFtZVxyXG4gICAgfSxcclxuICAgIG1ldGhvZDogJ1BPU1QnXHJcbiAgfSlcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGdldENvZGVOdW0gPSBmdW5jdGlvbiAobmFtZSwgbW9iaWxlKSB7XHJcbiAgcmV0dXJuIGpmLnJlcXVlc3Qoe1xyXG4gICAgYXBpOiAnYWNjb3VudHMvZ2V0X2NhcHRjaGEvJyxcclxuICAgIGRhdGE6IHtcclxuICAgICAgbmFtZTogYCR7bmFtZX1gLFxyXG4gICAgICBtb2JpbGU6IGAke21vYmlsZX1gXHJcbiAgICB9LFxyXG4gICAgbWV0aG9kOiAnUE9TVCdcclxuICB9KS50aGVuKChyZXMpID0+IHJlcyl9XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0U2Vzc2lvbiA9IGZ1bmN0aW9uKGNvZGUsIGFwcElELGFwcFNlY3JldGUpIHtcclxuICByZXR1cm4gamYucmVxdWVzdCh7XHJcbiAgICBhcGk6ICdhY2NvdW50cy9nZXRfc2Vzc2lvbl9rZXkvJyxcclxuICAgIGRhdGE6IHtcclxuICAgICAgYXBwaWQ6IGFwcElELFxyXG4gICAgICBhcHBfc2VjcmV0ZTogYXBwU2VjcmV0ZSxcclxuICAgICAgY29kZTogY29kZSwgXHJcbiAgICB9LFxyXG4gICAgbWV0aG9kOiAnUE9TVCdcclxuICB9KS50aGVuKChyZXMpID0+IEpTT04ucGFyc2UocmVzKSl9XHJcblxyXG5leHBvcnQgY29uc3QgYXJ0aWNsZVN0YXIgPSBmdW5jdGlvbihzb3VyY2UsdGFyZ2V0KSB7XHJcbiAgcmV0dXJuIGpmLnJlcXVlc3Qoe1xyXG4gICAgYXBpOiAnYWNjb3VudHMvYXJ0aWNsZV9zdGFyL3N0YXIvJyxcclxuICAgIGRhdGE6IHtcclxuICAgICAgc291cmNlOiBzb3VyY2UsXHJcbiAgICAgIHRhcmdldDogdGFyZ2V0LFxyXG4gICAgfSxcclxuICAgIG1ldGhvZDogJ1BPU1QnXHJcbiAgfSlcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGFydGljbGVVbnN0YXIgPSBmdW5jdGlvbihzb3VyY2UsdGFyZ2V0KSB7XHJcbiAgcmV0dXJuIGpmLnJlcXVlc3Qoe1xyXG4gICAgYXBpOiAnYWNjb3VudHMvYXJ0aWNsZV9zdGFyL3Vuc3Rhci8nLFxyXG4gICAgZGF0YToge1xyXG4gICAgICBzb3VyY2U6IHNvdXJjZSxcclxuICAgICAgdGFyZ2V0OiB0YXJnZXQsXHJcbiAgICB9LFxyXG4gICAgbWV0aG9kOiAnUE9TVCdcclxuICB9KVxyXG59XHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IHVzZXJVbnN0YXIgPSBmdW5jdGlvbihzb3VyY2UsdGFyZ2V0KSB7XHJcbiAgcmV0dXJuIGpmLnJlcXVlc3Qoe1xyXG4gICAgYXBpOiAnYWNjb3VudHMvdXNlcl9zdGFyL3Vuc3Rhci8nLFxyXG4gICAgZGF0YToge1xyXG4gICAgICBzb3VyY2U6IHNvdXJjZSxcclxuICAgICAgdGFyZ2V0OiB0YXJnZXQsXHJcbiAgICB9LFxyXG4gICAgbWV0aG9kOiAnUE9TVCdcclxuICB9KVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgdXNlclN0YXIgPSBmdW5jdGlvbihzb3VyY2UsdGFyZ2V0KSB7XHJcbiAgcmV0dXJuIGpmLnJlcXVlc3Qoe1xyXG4gICAgYXBpOiAnYWNjb3VudHMvdXNlcl9zdGFyL3N0YXIvJyxcclxuICAgIGRhdGE6IHtcclxuICAgICAgc291cmNlOiBzb3VyY2UsXHJcbiAgICAgIHRhcmdldDogdGFyZ2V0LFxyXG4gICAgfSxcclxuICAgIG1ldGhvZDogJ1BPU1QnXHJcbiAgfSlcclxufVxyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBnZXRTdGFyVXNlckxpc3QgPSBmdW5jdGlvbihzb3VyY2UpIHtcclxuICByZXR1cm4gamYucmVxdWVzdCh7XHJcbiAgICBhcGk6ICdhY2NvdW50cy91c2VyX3N0YXIvbGlzdF9zdGFycy8nLFxyXG4gICAgZGF0YToge1xyXG4gICAgICBzb3VyY2U6IHNvdXJjZSxcclxuICAgIH0sXHJcbiAgICBtZXRob2Q6ICdQT1NUJ1xyXG4gIH0pLnRoZW4oKHJlcykgPT4gcmVzKVxyXG59XHJcbmV4cG9ydCBjb25zdCBnZXRTdGFyQXJ0aWNsZUxpc3QgPSBmdW5jdGlvbihzb3VyY2UpIHtcclxuICByZXR1cm4gamYucmVxdWVzdCh7XHJcbiAgICBhcGk6ICdhY2NvdW50cy9hcnRpY2xlX3N0YXIvbGlzdF9zdGFycy8nLFxyXG4gICAgZGF0YToge1xyXG4gICAgICBzb3VyY2U6IHNvdXJjZSxcclxuICAgIH0sXHJcbiAgICBtZXRob2Q6ICdQT1NUJ1xyXG4gIH0pLnRoZW4oKHJlcykgPT4gcmVzKVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0VXNlckluZm8gPSBmdW5jdGlvbihyb29taWQsYWNjaWQpIHtcclxuICByZXR1cm4gamYucmVxdWVzdCh7XHJcbiAgICBhcGk6ICdhY2NvdW50cy9nZXRfaW5mb19uZXRlYXNlLycsXHJcbiAgICBkYXRhOiB7XHJcbiAgICAgIHJvb21pZDogcm9vbWlkLFxyXG4gICAgICBhY2NpZDogYWNjaWQsXHJcbiAgICB9LFxyXG4gICAgbWV0aG9kOiAnUE9TVCdcclxuICB9KVxyXG59XHJcbiJdfQ==