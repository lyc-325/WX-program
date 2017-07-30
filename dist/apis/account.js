'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.search = exports.getToken = exports.createUser = undefined;

var _extends2 = require('./../npm/babel-runtime/helpers/extends.js');

var _extends3 = _interopRequireDefault(_extends2);

var _jf = require('./../utils/jf.js');

var _jf2 = _interopRequireDefault(_jf);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

var search = exports.search = function search(nickname) {
  return _jf2.default.request({
    api: 'accounts/search/',
    data: {
      s: nickname
    },
    method: 'POST'
  });
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFjY291bnQuanMiXSwibmFtZXMiOlsiY3JlYXRlVXNlciIsImFjY2lkIiwicGFzc3dvcmQiLCJpbmZvcyIsInJlcXVlc3QiLCJhcGkiLCJkYXRhIiwibWV0aG9kIiwiZ2V0VG9rZW4iLCJ1c2VybmFtZSIsInRoZW4iLCJUb2tlbiIsInNlYXJjaCIsIm5pY2tuYW1lIiwicyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7O0FBRU8sSUFBTUEsa0NBQWEsU0FBYkEsVUFBYSxDQUFTQyxLQUFULEVBQWdCQyxRQUFoQixFQUEwQkMsS0FBMUIsRUFBaUM7QUFDekQsU0FBTyxhQUFHQyxPQUFILENBQVc7QUFDaEJDLFNBQUssa0JBRFc7QUFFaEJDO0FBQ0VMLGtCQURGO0FBRUVDO0FBRkYsT0FHS0MsS0FITCxDQUZnQjtBQU9oQkksWUFBUTtBQVBRLEdBQVgsQ0FBUDtBQVNELENBVk07O0FBWUEsSUFBTUMsOEJBQVcsU0FBWEEsUUFBVyxDQUFVQyxRQUFWLEVBQW9CUCxRQUFwQixFQUE4QjtBQUNwRCxTQUFPLGFBQUdFLE9BQUgsQ0FBVztBQUNoQkMsU0FBSyx1QkFEVztBQUVoQkMsVUFBTTtBQUNKRyx3QkFESTtBQUVKUDtBQUZJLEtBRlU7QUFNaEJLLFlBQVE7QUFOUSxHQUFYLEVBT0pHLElBUEksQ0FPQztBQUFBLFFBQUdDLEtBQUgsUUFBR0EsS0FBSDtBQUFBLFdBQWVBLEtBQWY7QUFBQSxHQVBELENBQVA7QUFRRCxDQVRNOztBQVdBLElBQU1DLDBCQUFTLFNBQVRBLE1BQVMsQ0FBVUMsUUFBVixFQUFvQjtBQUN4QyxTQUFPLGFBQUdULE9BQUgsQ0FBVztBQUNoQkMsU0FBSyxrQkFEVztBQUVoQkMsVUFBTTtBQUNKUSxTQUFHRDtBQURDLEtBRlU7QUFLaEJOLFlBQVE7QUFMUSxHQUFYLENBQVA7QUFPRCxDQVJNIiwiZmlsZSI6ImFjY291bnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgamYgZnJvbSAnLi4vdXRpbHMvamYnXHJcblxyXG5leHBvcnQgY29uc3QgY3JlYXRlVXNlciA9IGZ1bmN0aW9uKGFjY2lkLCBwYXNzd29yZCwgaW5mb3MpIHtcclxuICByZXR1cm4gamYucmVxdWVzdCh7XHJcbiAgICBhcGk6ICdhY2NvdW50cy9jcmVhdGUvJyxcclxuICAgIGRhdGE6IHtcclxuICAgICAgYWNjaWQsXHJcbiAgICAgIHBhc3N3b3JkLFxyXG4gICAgICAuLi5pbmZvc1xyXG4gICAgfSxcclxuICAgIG1ldGhvZDogJ1BPU1QnXHJcbiAgfSlcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGdldFRva2VuID0gZnVuY3Rpb24gKHVzZXJuYW1lLCBwYXNzd29yZCkge1xyXG4gIHJldHVybiBqZi5yZXF1ZXN0KHtcclxuICAgIGFwaTogJ2FjY291bnRzL2xvZ2luX3ZpZXdzLycsXHJcbiAgICBkYXRhOiB7XHJcbiAgICAgIHVzZXJuYW1lLFxyXG4gICAgICBwYXNzd29yZFxyXG4gICAgfSxcclxuICAgIG1ldGhvZDogJ1BPU1QnXHJcbiAgfSkudGhlbigoeyBUb2tlbiB9KSA9PiBUb2tlbilcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IHNlYXJjaCA9IGZ1bmN0aW9uIChuaWNrbmFtZSkge1xyXG4gIHJldHVybiBqZi5yZXF1ZXN0KHtcclxuICAgIGFwaTogJ2FjY291bnRzL3NlYXJjaC8nLFxyXG4gICAgZGF0YToge1xyXG4gICAgICBzOiBuaWNrbmFtZVxyXG4gICAgfSxcclxuICAgIG1ldGhvZDogJ1BPU1QnXHJcbiAgfSlcclxufVxyXG4iXX0=