'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.search = exports.getTokenUserId = exports.getToken = exports.createUser = undefined;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFjY291bnQuanMiXSwibmFtZXMiOlsiY3JlYXRlVXNlciIsImFjY2lkIiwicGFzc3dvcmQiLCJpbmZvcyIsInJlcXVlc3QiLCJhcGkiLCJkYXRhIiwibWV0aG9kIiwiZ2V0VG9rZW4iLCJ1c2VybmFtZSIsInRoZW4iLCJUb2tlbiIsImdldFRva2VuVXNlcklkIiwicmVzIiwic2VhcmNoIiwibmlja25hbWUiLCJzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBOzs7Ozs7QUFFTyxJQUFNQSxrQ0FBYSxTQUFiQSxVQUFhLENBQVNDLEtBQVQsRUFBZ0JDLFFBQWhCLEVBQTBCQyxLQUExQixFQUFpQztBQUN6RCxTQUFPLGFBQUdDLE9BQUgsQ0FBVztBQUNoQkMsU0FBSyxrQkFEVztBQUVoQkM7QUFDRUwsa0JBREY7QUFFRUM7QUFGRixPQUdLQyxLQUhMLENBRmdCO0FBT2hCSSxZQUFRO0FBUFEsR0FBWCxDQUFQO0FBU0QsQ0FWTTs7QUFZQSxJQUFNQyw4QkFBVyxTQUFYQSxRQUFXLENBQVVDLFFBQVYsRUFBb0JQLFFBQXBCLEVBQThCO0FBQ3BELFNBQU8sYUFBR0UsT0FBSCxDQUFXO0FBQ2hCQyxTQUFLLHVCQURXO0FBRWhCQyxVQUFNO0FBQ0pHLHdCQURJO0FBRUpQO0FBRkksS0FGVTtBQU1oQkssWUFBUTtBQU5RLEdBQVgsRUFPSkcsSUFQSSxDQU9DO0FBQUEsUUFBR0MsS0FBSCxRQUFHQSxLQUFIO0FBQUEsV0FBZUEsS0FBZjtBQUFBLEdBUEQsQ0FBUDtBQVFELENBVE07O0FBV0EsSUFBTUMsMENBQWlCLFNBQWpCQSxjQUFpQixDQUFVSCxRQUFWLEVBQW9CUCxRQUFwQixFQUE4QjtBQUMxRCxTQUFPLGFBQUdFLE9BQUgsQ0FBVztBQUNoQkMsU0FBSyx1QkFEVztBQUVoQkMsVUFBTTtBQUNKRyx3QkFESTtBQUVKUDtBQUZJLEtBRlU7QUFNaEJLLFlBQVE7QUFOUSxHQUFYLEVBT0pHLElBUEksQ0FPQyxVQUFDRyxHQUFEO0FBQUEsV0FBU0EsR0FBVDtBQUFBLEdBUEQsQ0FBUDtBQVFELENBVE07O0FBV0EsSUFBTUMsMEJBQVMsU0FBVEEsTUFBUyxDQUFVQyxRQUFWLEVBQW9CO0FBQ3hDLFNBQU8sYUFBR1gsT0FBSCxDQUFXO0FBQ2hCQyxTQUFLLGtCQURXO0FBRWhCQyxVQUFNO0FBQ0pVLFNBQUdEO0FBREMsS0FGVTtBQUtoQlIsWUFBUTtBQUxRLEdBQVgsQ0FBUDtBQU9ELENBUk0iLCJmaWxlIjoiYWNjb3VudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBqZiBmcm9tICcuLi91dGlscy9qZidcblxuZXhwb3J0IGNvbnN0IGNyZWF0ZVVzZXIgPSBmdW5jdGlvbihhY2NpZCwgcGFzc3dvcmQsIGluZm9zKSB7XG4gIHJldHVybiBqZi5yZXF1ZXN0KHtcbiAgICBhcGk6ICdhY2NvdW50cy9jcmVhdGUvJyxcbiAgICBkYXRhOiB7XG4gICAgICBhY2NpZCxcbiAgICAgIHBhc3N3b3JkLFxuICAgICAgLi4uaW5mb3NcbiAgICB9LFxuICAgIG1ldGhvZDogJ1BPU1QnXG4gIH0pXG59XG5cbmV4cG9ydCBjb25zdCBnZXRUb2tlbiA9IGZ1bmN0aW9uICh1c2VybmFtZSwgcGFzc3dvcmQpIHtcbiAgcmV0dXJuIGpmLnJlcXVlc3Qoe1xuICAgIGFwaTogJ2FjY291bnRzL2xvZ2luX3ZpZXdzLycsXG4gICAgZGF0YToge1xuICAgICAgdXNlcm5hbWUsXG4gICAgICBwYXNzd29yZFxuICAgIH0sXG4gICAgbWV0aG9kOiAnUE9TVCdcbiAgfSkudGhlbigoeyBUb2tlbiB9KSA9PiBUb2tlbilcbn1cblxuZXhwb3J0IGNvbnN0IGdldFRva2VuVXNlcklkID0gZnVuY3Rpb24gKHVzZXJuYW1lLCBwYXNzd29yZCkge1xuICByZXR1cm4gamYucmVxdWVzdCh7XG4gICAgYXBpOiAnYWNjb3VudHMvbG9naW5fdmlld3MvJyxcbiAgICBkYXRhOiB7XG4gICAgICB1c2VybmFtZSxcbiAgICAgIHBhc3N3b3JkXG4gICAgfSxcbiAgICBtZXRob2Q6ICdQT1NUJ1xuICB9KS50aGVuKChyZXMpID0+IHJlcylcbn1cblxuZXhwb3J0IGNvbnN0IHNlYXJjaCA9IGZ1bmN0aW9uIChuaWNrbmFtZSkge1xuICByZXR1cm4gamYucmVxdWVzdCh7XG4gICAgYXBpOiAnYWNjb3VudHMvc2VhcmNoLycsXG4gICAgZGF0YToge1xuICAgICAgczogbmlja25hbWVcbiAgICB9LFxuICAgIG1ldGhvZDogJ1BPU1QnXG4gIH0pXG59XG4iXX0=