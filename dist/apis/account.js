'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getToken = exports.createUser = undefined;

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
  });
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFjY291bnQuanMiXSwibmFtZXMiOlsiY3JlYXRlVXNlciIsImFjY2lkIiwicGFzc3dvcmQiLCJpbmZvcyIsInJlcXVlc3QiLCJhcGkiLCJkYXRhIiwibWV0aG9kIiwiZ2V0VG9rZW4iLCJ1c2VybmFtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7O0FBRU8sSUFBTUEsa0NBQWEsU0FBYkEsVUFBYSxDQUFTQyxLQUFULEVBQWdCQyxRQUFoQixFQUEwQkMsS0FBMUIsRUFBaUM7QUFDekQsU0FBTyxhQUFHQyxPQUFILENBQVc7QUFDaEJDLFNBQUssa0JBRFc7QUFFaEJDO0FBQ0VMLGtCQURGO0FBRUVDO0FBRkYsT0FHS0MsS0FITCxDQUZnQjtBQU9oQkksWUFBUTtBQVBRLEdBQVgsQ0FBUDtBQVNELENBVk07O0FBWUEsSUFBTUMsOEJBQVcsU0FBWEEsUUFBVyxDQUFVQyxRQUFWLEVBQW9CUCxRQUFwQixFQUE4QjtBQUNwRCxTQUFPLGFBQUdFLE9BQUgsQ0FBVztBQUNoQkMsU0FBSyx1QkFEVztBQUVoQkMsVUFBTTtBQUNKRyx3QkFESTtBQUVKUDtBQUZJLEtBRlU7QUFNaEJLLFlBQVE7QUFOUSxHQUFYLENBQVA7QUFRRCxDQVRNIiwiZmlsZSI6ImFjY291bnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgamYgZnJvbSAnLi4vdXRpbHMvamYnXG5cbmV4cG9ydCBjb25zdCBjcmVhdGVVc2VyID0gZnVuY3Rpb24oYWNjaWQsIHBhc3N3b3JkLCBpbmZvcykge1xuICByZXR1cm4gamYucmVxdWVzdCh7XG4gICAgYXBpOiAnYWNjb3VudHMvY3JlYXRlLycsXG4gICAgZGF0YToge1xuICAgICAgYWNjaWQsXG4gICAgICBwYXNzd29yZCxcbiAgICAgIC4uLmluZm9zXG4gICAgfSxcbiAgICBtZXRob2Q6ICdQT1NUJ1xuICB9KVxufVxuXG5leHBvcnQgY29uc3QgZ2V0VG9rZW4gPSBmdW5jdGlvbiAodXNlcm5hbWUsIHBhc3N3b3JkKSB7XG4gIHJldHVybiBqZi5yZXF1ZXN0KHtcbiAgICBhcGk6ICdhY2NvdW50cy9sb2dpbl92aWV3cy8nLFxuICAgIGRhdGE6IHtcbiAgICAgIHVzZXJuYW1lLFxuICAgICAgcGFzc3dvcmRcbiAgICB9LFxuICAgIG1ldGhvZDogJ1BPU1QnXG4gIH0pXG59XG4iXX0=