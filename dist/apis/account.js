'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getStarArticleList = exports.getStarUserList = exports.userStar = exports.userUnstar = exports.articleUnstar = exports.articleStar = exports.getSession = exports.getCodeNum = exports.search = exports.getTokenUserId = exports.checkOpenGid = exports.saveOpenGid = exports.shareParsing = exports.getToken = exports.createUser = undefined;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFjY291bnQuanMiXSwibmFtZXMiOlsiY29uZmlnIiwiY3JlYXRlVXNlciIsImFjY2lkIiwicGFzc3dvcmQiLCJpbmZvcyIsInJlcXVlc3QiLCJhcGkiLCJkYXRhIiwibWV0aG9kIiwiZ2V0VG9rZW4iLCJ1c2VybmFtZSIsInRoZW4iLCJyZXMiLCJzaGFyZVBhcnNpbmciLCJrZXkiLCJpbmZvIiwiYXBwSWQiLCJzZXNzaW9uS2V5IiwiZW5jcnlwdGVkRGF0YSIsIml2Iiwic2F2ZU9wZW5HaWQiLCJ0b2tlbiIsInBhcnNlIiwib3BlbkdJZCIsInRpbWVzdGFtcCIsIndhdGVybWFyayIsImNoZWNrT3BlbkdpZCIsImlkIiwiZ2V0VG9rZW5Vc2VySWQiLCJzZWFyY2giLCJuaWNrbmFtZSIsInMiLCJnZXRDb2RlTnVtIiwibmFtZSIsIm1vYmlsZSIsImdldFNlc3Npb24iLCJjb2RlIiwiYXBwSUQiLCJhcHBTZWNyZXRlIiwiYXBwaWQiLCJhcHBfc2VjcmV0ZSIsIkpTT04iLCJhcnRpY2xlU3RhciIsInNvdXJjZSIsInRhcmdldCIsImFydGljbGVVbnN0YXIiLCJ1c2VyVW5zdGFyIiwidXNlclN0YXIiLCJnZXRTdGFyVXNlckxpc3QiLCJnZXRTdGFyQXJ0aWNsZUxpc3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUVBLElBQU1BLG1CQUFOO0FBQ08sSUFBTUMsa0NBQWEsU0FBYkEsVUFBYSxDQUFTQyxLQUFULEVBQWdCQyxRQUFoQixFQUEwQkMsS0FBMUIsRUFBaUM7QUFDekQsU0FBTyxhQUFHQyxPQUFILENBQVc7QUFDaEJDLFNBQUssa0JBRFc7QUFFaEJDO0FBQ0VMLGtCQURGO0FBRUVDO0FBRkYsT0FHS0MsS0FITCxDQUZnQjtBQU9oQkksWUFBUTtBQVBRLEdBQVgsQ0FBUDtBQVNELENBVk07O0FBWUEsSUFBTUMsOEJBQVcsU0FBWEEsUUFBVyxDQUFVQyxRQUFWLEVBQW9CUCxRQUFwQixFQUE4QjtBQUNwRCxTQUFPLGFBQUdF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LFNBQUssMEJBRFc7QUFFaEJDLFVBQU07QUFDSm9DLGNBQVFBLE1BREo7QUFFSkMsY0FBUUE7QUFGSixLQUZVO0FBTWhCcEMsWUFBUTtBQU5RLEdBQVgsQ0FBUDtBQVFELENBVE07O0FBWUEsSUFBTXdDLDRDQUFrQixTQUFsQkEsZUFBa0IsQ0FBU0wsTUFBVCxFQUFpQjtBQUM5QyxTQUFPLGFBQUd0QyxPQUFILENBQVc7QUFDaEJDLFNBQUssZ0NBRFc7QUFFaEJDLFVBQU07QUFDSm9DLGNBQVFBO0FBREosS0FGVTtBQUtoQm5DLFlBQVE7QUFMUSxHQUFYLEVBTUpHLElBTkksQ0FNQyxVQUFDQyxHQUFEO0FBQUEsV0FBU0EsR0FBVDtBQUFBLEdBTkQsQ0FBUDtBQU9ELENBUk07QUFTQSxJQUFNcUMsa0RBQXFCLFNBQXJCQSxrQkFBcUIsQ0FBU04sTUFBVCxFQUFpQjtBQUNqRCxTQUFPLGFBQUd0QyxPQUFILENBQVc7QUFDaEJDLFNBQUssbUNBRFc7QUFFaEJDLFVBQU07QUFDSm9DLGNBQVFBO0FBREosS0FGVTtBQUtoQm5DLFlBQVE7QUFMUSxHQUFYLEVBTUpHLElBTkksQ0FNQyxVQUFDQyxHQUFEO0FBQUEsV0FBU0EsR0FBVDtBQUFBLEdBTkQsQ0FBUDtBQU9ELENBUk0iLCJmaWxlIjoiYWNjb3VudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBqZiBmcm9tICcuLi91dGlscy9qZidcclxuaW1wb3J0IHsgd3ggfSBmcm9tICcuLi9jb25maWcnXHJcblxyXG5jb25zdCBjb25maWcgPSB3eFxyXG5leHBvcnQgY29uc3QgY3JlYXRlVXNlciA9IGZ1bmN0aW9uKGFjY2lkLCBwYXNzd29yZCwgaW5mb3MpIHtcclxuICByZXR1cm4gamYucmVxdWVzdCh7XHJcbiAgICBhcGk6ICdhY2NvdW50cy9jcmVhdGUvJyxcclxuICAgIGRhdGE6IHtcclxuICAgICAgYWNjaWQsXHJcbiAgICAgIHBhc3N3b3JkLFxyXG4gICAgICAuLi5pbmZvc1xyXG4gICAgfSxcclxuICAgIG1ldGhvZDogJ1BPU1QnXHJcbiAgfSlcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGdldFRva2VuID0gZnVuY3Rpb24gKHVzZXJuYW1lLCBwYXNzd29yZCkge1xyXG4gIHJldHVybiBqZi5yZXF1ZXN0KHtcclxuICAgIGFwaTogJ2FjY291bnRzL2xvZ2luX3ZpZXdzLycsXHJcbiAgICBkYXRhOiB7XHJcbiAgICAgIHVzZXJuYW1lLFxyXG4gICAgICBwYXNzd29yZFxyXG4gICAgfSxcclxuICAgIG1ldGhvZDogJ1BPU1QnXHJcbiAgfSkudGhlbigocmVzKSA9PiByZXMpXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBzaGFyZVBhcnNpbmcgPSBmdW5jdGlvbiAoa2V5LCBpbmZvKSB7XHJcbiAgcmV0dXJuIGpmLnJlcXVlc3Qoe1xyXG4gICAgYXBpOiAnYWNjb3VudHMvZGVjb2RlLycsXHJcbiAgICBkYXRhOiB7XHJcbiAgICAgIGFwcElkOiBgJHtjb25maWcuYXBwSWR9YCxcclxuICAgICAgc2Vzc2lvbktleToga2V5LmRhdGEsXHJcbiAgICAgIGVuY3J5cHRlZERhdGE6IGluZm8uZW5jcnlwdGVkRGF0YSxcclxuICAgICAgaXY6IGluZm8uaXZcclxuICAgIH0sXHJcbiAgICBtZXRob2Q6ICdQT1NUJ1xyXG4gIH0pLnRoZW4oKHJlcykgPT4gcmVzKVxyXG59XHJcblxyXG5leHBvcnQgY29uc3Qgc2F2ZU9wZW5HaWQgPSBmdW5jdGlvbiAodG9rZW4sIHBhcnNlLCBhY2NpZCkge1xyXG4gIHJldHVybiBqZi5yZXF1ZXN0KHtcclxuICAgIGFwaTogJ2FjY291bnRzL3NhdmVfZ2lkLycsXHJcbiAgICBkYXRhOiB7XHJcbiAgICAgIHRva2VuOiBgJHt0b2tlbi5kYXRhfWAsXHJcbiAgICAgIG9wZW5HSWQ6IGAke3BhcnNlLm9wZW5HSWR9YCxcclxuICAgICAgdGltZXN0YW1wOiBgJHtwYXJzZS53YXRlcm1hcmsudGltZXN0YW1wfWAsXHJcbiAgICAgIGFjY2lkOiBgJHthY2NpZC5kYXRhfWBcclxuICAgIH0sXHJcbiAgICBtZXRob2Q6ICdQT1NUJ1xyXG4gIH0pLnRoZW4oKHJlcykgPT4gcmVzKVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgY2hlY2tPcGVuR2lkID0gZnVuY3Rpb24gKHRva2VuLCBpZCkge1xyXG4gIHJldHVybiBqZi5yZXF1ZXN0KHtcclxuICAgIGFwaTogJ2FjY291bnRzL2NoZWNrX2dpZC8nLFxyXG4gICAgZGF0YToge1xyXG4gICAgICB0b2tlbjogYCR7dG9rZW59YCxcclxuICAgICAgYWNjaWQ6IGAke2lkfWBcclxuICAgIH0sXHJcbiAgICBtZXRob2Q6ICdQT1NUJ1xyXG4gIH0pLnRoZW4oKHJlcykgPT4gcmVzKVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0VG9rZW5Vc2VySWQgPSBmdW5jdGlvbiAodXNlcm5hbWUsIHBhc3N3b3JkKSB7XHJcbiAgcmV0dXJuIGpmLnJlcXVlc3Qoe1xyXG4gICAgYXBpOiAnYWNjb3VudHMvbG9naW5fdmlld3MvJyxcclxuICAgIGRhdGE6IHtcclxuICAgICAgdXNlcm5hbWUsXHJcbiAgICAgIHBhc3N3b3JkXHJcbiAgICB9LFxyXG4gICAgbWV0aG9kOiAnUE9TVCdcclxuICB9KS50aGVuKChyZXMpID0+IHJlcylcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IHNlYXJjaCA9IGZ1bmN0aW9uIChuaWNrbmFtZSkge1xyXG4gIHJldHVybiBqZi5yZXF1ZXN0KHtcclxuICAgIGFwaTogJ2FjY291bnRzL3NlYXJjaC8nLFxyXG4gICAgZGF0YToge1xyXG4gICAgICBzOiBuaWNrbmFtZVxyXG4gICAgfSxcclxuICAgIG1ldGhvZDogJ1BPU1QnXHJcbiAgfSlcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGdldENvZGVOdW0gPSBmdW5jdGlvbiAobmFtZSwgbW9iaWxlKSB7XHJcbiAgcmV0dXJuIGpmLnJlcXVlc3Qoe1xyXG4gICAgYXBpOiAnYWNjb3VudHMvZ2V0X2NhcHRjaGEvJyxcclxuICAgIGRhdGE6IHtcclxuICAgICAgbmFtZTogYCR7bmFtZX1gLFxyXG4gICAgICBtb2JpbGU6IGAke21vYmlsZX1gXHJcbiAgICB9LFxyXG4gICAgbWV0aG9kOiAnUE9TVCdcclxuICB9KS50aGVuKChyZXMpID0+IHJlcyl9XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0U2Vzc2lvbiA9IGZ1bmN0aW9uKGNvZGUsIGFwcElELGFwcFNlY3JldGUpIHtcclxuICByZXR1cm4gamYucmVxdWVzdCh7XHJcbiAgICBhcGk6ICdhY2NvdW50cy9nZXRfc2Vzc2lvbl9rZXkvJyxcclxuICAgIGRhdGE6IHtcclxuICAgICAgYXBwaWQ6IGFwcElELFxyXG4gICAgICBhcHBfc2VjcmV0ZTogYXBwU2VjcmV0ZSxcclxuICAgICAgY29kZTogY29kZSwgXHJcbiAgICB9LFxyXG4gICAgbWV0aG9kOiAnUE9TVCdcclxuICB9KS50aGVuKChyZXMpID0+IEpTT04ucGFyc2UocmVzKSl9XHJcblxyXG5leHBvcnQgY29uc3QgYXJ0aWNsZVN0YXIgPSBmdW5jdGlvbihzb3VyY2UsdGFyZ2V0KSB7XHJcbiAgcmV0dXJuIGpmLnJlcXVlc3Qoe1xyXG4gICAgYXBpOiAnYWNjb3VudHMvYXJ0aWNsZV9zdGFyL3N0YXIvJyxcclxuICAgIGRhdGE6IHtcclxuICAgICAgc291cmNlOiBzb3VyY2UsXHJcbiAgICAgIHRhcmdldDogdGFyZ2V0LFxyXG4gICAgfSxcclxuICAgIG1ldGhvZDogJ1BPU1QnXHJcbiAgfSlcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGFydGljbGVVbnN0YXIgPSBmdW5jdGlvbihzb3VyY2UsdGFyZ2V0KSB7XHJcbiAgcmV0dXJuIGpmLnJlcXVlc3Qoe1xyXG4gICAgYXBpOiAnYWNjb3VudHMvYXJ0aWNsZV9zdGFyL3Vuc3Rhci8nLFxyXG4gICAgZGF0YToge1xyXG4gICAgICBzb3VyY2U6IHNvdXJjZSxcclxuICAgICAgdGFyZ2V0OiB0YXJnZXQsXHJcbiAgICB9LFxyXG4gICAgbWV0aG9kOiAnUE9TVCdcclxuICB9KVxyXG59XHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IHVzZXJVbnN0YXIgPSBmdW5jdGlvbihzb3VyY2UsdGFyZ2V0KSB7XHJcbiAgcmV0dXJuIGpmLnJlcXVlc3Qoe1xyXG4gICAgYXBpOiAnYWNjb3VudHMvdXNlcl9zdGFyL3Vuc3Rhci8nLFxyXG4gICAgZGF0YToge1xyXG4gICAgICBzb3VyY2U6IHNvdXJjZSxcclxuICAgICAgdGFyZ2V0OiB0YXJnZXQsXHJcbiAgICB9LFxyXG4gICAgbWV0aG9kOiAnUE9TVCdcclxuICB9KVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgdXNlclN0YXIgPSBmdW5jdGlvbihzb3VyY2UsdGFyZ2V0KSB7XHJcbiAgcmV0dXJuIGpmLnJlcXVlc3Qoe1xyXG4gICAgYXBpOiAnYWNjb3VudHMvdXNlcl9zdGFyL3N0YXIvJyxcclxuICAgIGRhdGE6IHtcclxuICAgICAgc291cmNlOiBzb3VyY2UsXHJcbiAgICAgIHRhcmdldDogdGFyZ2V0LFxyXG4gICAgfSxcclxuICAgIG1ldGhvZDogJ1BPU1QnXHJcbiAgfSlcclxufVxyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBnZXRTdGFyVXNlckxpc3QgPSBmdW5jdGlvbihzb3VyY2UpIHtcclxuICByZXR1cm4gamYucmVxdWVzdCh7XHJcbiAgICBhcGk6ICdhY2NvdW50cy91c2VyX3N0YXIvbGlzdF9zdGFycy8nLFxyXG4gICAgZGF0YToge1xyXG4gICAgICBzb3VyY2U6IHNvdXJjZSxcclxuICAgIH0sXHJcbiAgICBtZXRob2Q6ICdQT1NUJ1xyXG4gIH0pLnRoZW4oKHJlcykgPT4gcmVzKVxyXG59XHJcbmV4cG9ydCBjb25zdCBnZXRTdGFyQXJ0aWNsZUxpc3QgPSBmdW5jdGlvbihzb3VyY2UpIHtcclxuICByZXR1cm4gamYucmVxdWVzdCh7XHJcbiAgICBhcGk6ICdhY2NvdW50cy9hcnRpY2xlX3N0YXIvbGlzdF9zdGFycy8nLFxyXG4gICAgZGF0YToge1xyXG4gICAgICBzb3VyY2U6IHNvdXJjZSxcclxuICAgIH0sXHJcbiAgICBtZXRob2Q6ICdQT1NUJ1xyXG4gIH0pLnRoZW4oKHJlcykgPT4gcmVzKVxyXG59XHJcblxyXG5cclxuIl19