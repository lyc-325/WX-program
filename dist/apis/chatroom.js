'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getUserList = exports.addToRoom = exports.getItemId = exports.getOneById = exports.getList = undefined;

var _jf = require('./../utils/jf.js');

var _jf2 = _interopRequireDefault(_jf);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var getList = exports.getList = function getList() {
  return _jf2.default.request({
    api: 'chat_room/list/',
    data: {},
    method: 'GET'
  });
};

var getOneById = exports.getOneById = function getOneById(id, token) {
  return _jf2.default.request({
    api: 'chat_room/' + id + '/detail/?token=' + token,
    data: {},
    method: 'GET'
  });
};

var getItemId = exports.getItemId = function getItemId(id) {
  return _jf2.default.request({
    api: 'accounts/detail_by_accid/' + id + '/',
    data: {},
    method: 'GET'
  });
};

var addToRoom = exports.addToRoom = function addToRoom(id, creator, num) {
  return _jf2.default.request({
    api: 'chat_room/add_member/',
    data: {
      roomid: id,
      operator: creator,
      target: num
    },
    method: 'POST'
  });
};

var getUserList = exports.getUserList = function getUserList(roomid, token) {
  return _jf2.default.request({
    api: 'chat_room/member_list/',
    data: {
      roomid: roomid,
      limit: 50,
      token: token
    },
    method: 'POST'
  });
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoYXRyb29tLmpzIl0sIm5hbWVzIjpbImdldExpc3QiLCJyZXF1ZXN0IiwiYXBpIiwiZGF0YSIsIm1ldGhvZCIsImdldE9uZUJ5SWQiLCJpZCIsInRva2VuIiwiZ2V0SXRlbUlkIiwiYWRkVG9Sb29tIiwiY3JlYXRvciIsIm51bSIsInJvb21pZCIsIm9wZXJhdG9yIiwidGFyZ2V0IiwiZ2V0VXNlckxpc3QiLCJsaW1pdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOzs7Ozs7QUFFTyxJQUFNQSw0QkFBVSxTQUFWQSxPQUFVLEdBQVc7QUFDaEMsU0FBTyxhQUFHQyxPQUFILENBQVc7QUFDaEJDLFNBQUssaUJBRFc7QUFFaEJDLFVBQU0sRUFGVTtBQUdoQkMsWUFBUTtBQUhRLEdBQVgsQ0FBUDtBQUtELENBTk07O0FBUUEsSUFBTUMsa0NBQWEsU0FBYkEsVUFBYSxDQUFTQyxFQUFULEVBQWFDLEtBQWIsRUFBb0I7QUFDNUMsU0FBTyxhQUFHTixPQUFILENBQVc7QUFDaEJDLHdCQUFrQkksRUFBbEIsdUJBQXNDQyxLQUR0QjtBQUVoQkosVUFBTSxFQUZVO0FBR2hCQyxZQUFRO0FBSFEsR0FBWCxDQUFQO0FBS0QsQ0FOTTs7QUFRQSxJQUFNSSxnQ0FBWSxTQUFaQSxTQUFZLENBQVNGLEVBQVQsRUFBYTtBQUNwQyxTQUFPLGFBQUdMLE9BQUgsQ0FBVztBQUNoQkMsdUNBQWlDSSxFQUFqQyxNQURnQjtBQUVoQkgsVUFBTSxFQUZVO0FBR2hCQyxZQUFRO0FBSFEsR0FBWCxDQUFQO0FBS0QsQ0FOTTs7QUFRQSxJQUFNSyxnQ0FBWSxTQUFaQSxTQUFZLENBQVNILEVBQVQsRUFBYUksT0FBYixFQUFzQkMsR0FBdEIsRUFBMkI7QUFDbEQsU0FBTyxhQUFHVixPQUFILENBQVc7QUFDaEJDLGdDQURnQjtBQUVoQkMsVUFBTTtBQUNKUyxjQUFRTixFQURKO0FBRUpPLGdCQUFVSCxPQUZOO0FBR0pJLGNBQVFIO0FBSEosS0FGVTtBQU9oQlAsWUFBUTtBQVBRLEdBQVgsQ0FBUDtBQVNELENBVk07O0FBWUEsSUFBTVcsb0NBQWMsU0FBZEEsV0FBYyxDQUFTSCxNQUFULEVBQWlCTCxLQUFqQixFQUF3QjtBQUNqRCxTQUFPLGFBQUdOLE9BQUgsQ0FBVztBQUNoQkMsaUNBRGdCO0FBRWhCQyxVQUFNO0FBQ0pTLGNBQVFBLE1BREo7QUFFSkksYUFBTyxFQUZIO0FBR0pULGFBQU9BO0FBSEgsS0FGVTtBQU9oQkgsWUFBUTtBQVBRLEdBQVgsQ0FBUDtBQVNELENBVk0iLCJmaWxlIjoiY2hhdHJvb20uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgamYgZnJvbSAnLi4vdXRpbHMvamYnXHJcblxyXG5leHBvcnQgY29uc3QgZ2V0TGlzdCA9IGZ1bmN0aW9uKCkge1xyXG4gIHJldHVybiBqZi5yZXF1ZXN0KHtcclxuICAgIGFwaTogJ2NoYXRfcm9vbS9saXN0LycsXHJcbiAgICBkYXRhOiB7fSxcclxuICAgIG1ldGhvZDogJ0dFVCdcclxuICB9KVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0T25lQnlJZCA9IGZ1bmN0aW9uKGlkLCB0b2tlbikge1xyXG4gIHJldHVybiBqZi5yZXF1ZXN0KHtcclxuICAgIGFwaTogYGNoYXRfcm9vbS8ke2lkfS9kZXRhaWwvP3Rva2VuPSR7dG9rZW59YCxcclxuICAgIGRhdGE6IHt9LFxyXG4gICAgbWV0aG9kOiAnR0VUJ1xyXG4gIH0pXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBnZXRJdGVtSWQgPSBmdW5jdGlvbihpZCkge1xyXG4gIHJldHVybiBqZi5yZXF1ZXN0KHtcclxuICAgIGFwaTogYGFjY291bnRzL2RldGFpbF9ieV9hY2NpZC8ke2lkfS9gLFxyXG4gICAgZGF0YToge30sXHJcbiAgICBtZXRob2Q6ICdHRVQnXHJcbiAgfSlcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGFkZFRvUm9vbSA9IGZ1bmN0aW9uKGlkLCBjcmVhdG9yLCBudW0pIHtcclxuICByZXR1cm4gamYucmVxdWVzdCh7XHJcbiAgICBhcGk6IGBjaGF0X3Jvb20vYWRkX21lbWJlci9gLFxyXG4gICAgZGF0YToge1xyXG4gICAgICByb29taWQ6IGlkLFxyXG4gICAgICBvcGVyYXRvcjogY3JlYXRvcixcclxuICAgICAgdGFyZ2V0OiBudW1cclxuICAgIH0sXHJcbiAgICBtZXRob2Q6ICdQT1NUJ1xyXG4gIH0pXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBnZXRVc2VyTGlzdCA9IGZ1bmN0aW9uKHJvb21pZCwgdG9rZW4pIHtcclxuICByZXR1cm4gamYucmVxdWVzdCh7XHJcbiAgICBhcGk6IGBjaGF0X3Jvb20vbWVtYmVyX2xpc3QvYCxcclxuICAgIGRhdGE6IHtcclxuICAgICAgcm9vbWlkOiByb29taWQsXHJcbiAgICAgIGxpbWl0OiA1MCxcclxuICAgICAgdG9rZW46IHRva2VuXHJcbiAgICB9LFxyXG4gICAgbWV0aG9kOiAnUE9TVCdcclxuICB9KVxyXG59XHJcbiJdfQ==