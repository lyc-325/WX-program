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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoYXRyb29tLmpzIl0sIm5hbWVzIjpbImdldExpc3QiLCJyZXF1ZXN0IiwiYXBpIiwiZGF0YSIsIm1ldGhvZCIsImdldE9uZUJ5SWQiLCJpZCIsInRva2VuIiwiZ2V0SXRlbUlkIiwiYWRkVG9Sb29tIiwiY3JlYXRvciIsIm51bSIsInJvb21pZCIsIm9wZXJhdG9yIiwidGFyZ2V0IiwiZ2V0VXNlckxpc3QiLCJsaW1pdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOzs7Ozs7QUFFTyxJQUFNQSw0QkFBVSxTQUFWQSxPQUFVLEdBQVc7QUFDaEMsU0FBTyxhQUFHQyxPQUFILENBQVc7QUFDaEJDLFNBQUssaUJBRFc7QUFFaEJDLFVBQU0sRUFGVTtBQUdoQkMsWUFBUTtBQUhRLEdBQVgsQ0FBUDtBQUtELENBTk07O0FBUUEsSUFBTUMsa0NBQWEsU0FBYkEsVUFBYSxDQUFTQyxFQUFULEVBQWFDLEtBQWIsRUFBb0I7QUFDNUMsU0FBTyxhQUFHTixPQUFILENBQVc7QUFDaEJDLHdCQUFrQkksRUFBbEIsdUJBQXNDQyxLQUR0QjtBQUVoQkosVUFBTSxFQUZVO0FBR2hCQyxZQUFRO0FBSFEsR0FBWCxDQUFQO0FBS0QsQ0FOTTs7QUFRQSxJQUFNSSxnQ0FBWSxTQUFaQSxTQUFZLENBQVNGLEVBQVQsRUFBYTtBQUNwQyxTQUFPLGFBQUdMLE9BQUgsQ0FBVztBQUNoQkMsdUNBQWlDSSxFQUFqQyxNQURnQjtBQUVoQkgsVUFBTSxFQUZVO0FBR2hCQyxZQUFRO0FBSFEsR0FBWCxDQUFQO0FBS0QsQ0FOTTs7QUFRQSxJQUFNSyxnQ0FBWSxTQUFaQSxTQUFZLENBQVNILEVBQVQsRUFBYUksT0FBYixFQUFzQkMsR0FBdEIsRUFBMkI7QUFDbEQsU0FBTyxhQUFHVixPQUFILENBQVc7QUFDaEJDLGdDQURnQjtBQUVoQkMsVUFBTTtBQUNKUyxjQUFRTixFQURKO0FBRUpPLGdCQUFVSCxPQUZOO0FBR0pJLGNBQVFIO0FBSEosS0FGVTtBQU9oQlAsWUFBUTtBQVBRLEdBQVgsQ0FBUDtBQVNELENBVk07O0FBWUEsSUFBTVcsb0NBQWMsU0FBZEEsV0FBYyxDQUFTSCxNQUFULEVBQWlCTCxLQUFqQixFQUF3QjtBQUNqRCxTQUFPLGFBQUdOLE9BQUgsQ0FBVztBQUNoQkMsaUNBRGdCO0FBRWhCQyxVQUFNO0FBQ0pTLGNBQVFBLE1BREo7QUFFSkksYUFBTyxFQUZIO0FBR0pULGFBQU9BO0FBSEgsS0FGVTtBQU9oQkgsWUFBUTtBQVBRLEdBQVgsQ0FBUDtBQVNELENBVk0iLCJmaWxlIjoiY2hhdHJvb20uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgamYgZnJvbSAnLi4vdXRpbHMvamYnXG5cbmV4cG9ydCBjb25zdCBnZXRMaXN0ID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiBqZi5yZXF1ZXN0KHtcbiAgICBhcGk6ICdjaGF0X3Jvb20vbGlzdC8nLFxuICAgIGRhdGE6IHt9LFxuICAgIG1ldGhvZDogJ0dFVCdcbiAgfSlcbn1cblxuZXhwb3J0IGNvbnN0IGdldE9uZUJ5SWQgPSBmdW5jdGlvbihpZCwgdG9rZW4pIHtcbiAgcmV0dXJuIGpmLnJlcXVlc3Qoe1xuICAgIGFwaTogYGNoYXRfcm9vbS8ke2lkfS9kZXRhaWwvP3Rva2VuPSR7dG9rZW59YCxcbiAgICBkYXRhOiB7fSxcbiAgICBtZXRob2Q6ICdHRVQnXG4gIH0pXG59XG5cbmV4cG9ydCBjb25zdCBnZXRJdGVtSWQgPSBmdW5jdGlvbihpZCkge1xuICByZXR1cm4gamYucmVxdWVzdCh7XG4gICAgYXBpOiBgYWNjb3VudHMvZGV0YWlsX2J5X2FjY2lkLyR7aWR9L2AsXG4gICAgZGF0YToge30sXG4gICAgbWV0aG9kOiAnR0VUJ1xuICB9KVxufVxuXG5leHBvcnQgY29uc3QgYWRkVG9Sb29tID0gZnVuY3Rpb24oaWQsIGNyZWF0b3IsIG51bSkge1xuICByZXR1cm4gamYucmVxdWVzdCh7XG4gICAgYXBpOiBgY2hhdF9yb29tL2FkZF9tZW1iZXIvYCxcbiAgICBkYXRhOiB7XG4gICAgICByb29taWQ6IGlkLFxuICAgICAgb3BlcmF0b3I6IGNyZWF0b3IsXG4gICAgICB0YXJnZXQ6IG51bVxuICAgIH0sXG4gICAgbWV0aG9kOiAnUE9TVCdcbiAgfSlcbn1cblxuZXhwb3J0IGNvbnN0IGdldFVzZXJMaXN0ID0gZnVuY3Rpb24ocm9vbWlkLCB0b2tlbikge1xuICByZXR1cm4gamYucmVxdWVzdCh7XG4gICAgYXBpOiBgY2hhdF9yb29tL21lbWJlcl9saXN0L2AsXG4gICAgZGF0YToge1xuICAgICAgcm9vbWlkOiByb29taWQsXG4gICAgICBsaW1pdDogNTAsXG4gICAgICB0b2tlbjogdG9rZW5cbiAgICB9LFxuICAgIG1ldGhvZDogJ1BPU1QnXG4gIH0pXG59XG4iXX0=