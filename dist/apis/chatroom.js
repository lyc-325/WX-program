'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.changeRole = exports.BanSomeone = exports.getUserList = exports.addToRoom = exports.getItemId = exports.getOneById = exports.getList = undefined;

var _jf = require('./../utils/jf.js');

var _jf2 = _interopRequireDefault(_jf);

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

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

var getUserList = exports.getUserList = function getUserList(roomid, token, enterTime) {
  return _jf2.default.request({
    api: 'chat_room/member_list/',
    data: {
      roomid: roomid,
      limit: 100,
      token: token,
      endtime: enterTime
    },
    method: 'POST'
  });
};

var BanSomeone = exports.BanSomeone = function BanSomeone(roomid, operator, target, token) {
  return _jf2.default.request({
    api: 'chat_room/ban_someone/',
    data: {
      roomid: roomid,
      operator: operator,
      target: target,
      token: token
    },
    method: 'POST'
  });
};
var changeRole = exports.changeRole = function changeRole(roomid, operator, target, opt) {
  return _jf2.default.request({
    api: 'chat_room/change_role/',
    data: {
      roomid: roomid,
      operator: operator,
      target: target,
      opt: opt
    },
    method: 'POST'
  });
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoYXRyb29tLmpzIl0sIm5hbWVzIjpbImdldExpc3QiLCJyZXF1ZXN0IiwiYXBpIiwiZGF0YSIsIm1ldGhvZCIsImdldE9uZUJ5SWQiLCJpZCIsInRva2VuIiwiZ2V0SXRlbUlkIiwiYWRkVG9Sb29tIiwiY3JlYXRvciIsIm51bSIsInJvb21pZCIsIm9wZXJhdG9yIiwidGFyZ2V0IiwiZ2V0VXNlckxpc3QiLCJlbnRlclRpbWUiLCJsaW1pdCIsImVuZHRpbWUiLCJCYW5Tb21lb25lIiwiY2hhbmdlUm9sZSIsIm9wdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7OztBQUVPLElBQU1BLDRCQUFVLFNBQVZBLE9BQVUsR0FBVztBQUNoQyxTQUFPLGFBQUdDLE9BQUgsQ0FBVztBQUNoQkMsU0FBSyxpQkFEVztBQUVoQkMsVUFBTSxFQUZVO0FBR2hCQyxZQUFRO0FBSFEsR0FBWCxDQUFQO0FBS0QsQ0FOTTs7QUFRQSxJQUFNQyxrQ0FBYSxTQUFiQSxVQUFhLENBQVNDLEVBQVQsRUFBYUMsS0FBYixFQUFvQjtBQUM1QyxTQUFPLGFBQUdOLE9BQUgsQ0FBVztBQUNoQkMsd0JBQWtCSSxFQUFsQix1QkFBc0NDLEtBRHRCO0FBRWhCSixVQUFNLEVBRlU7QUFHaEJDLFlBQVE7QUFIUSxHQUFYLENBQVA7QUFLRCxDQU5NOztBQVFBLElBQU1JLGdDQUFZLFNBQVpBLFNBQVksQ0FBU0YsRUFBVCxFQUFhO0FBQ3BDLFNBQU8sYUFBR0wsT0FBSCxDQUFXO0FBQ2hCQyx1Q0FBaUNJLEVBQWpDLE1BRGdCO0FBRWhCSCxVQUFNLEVBRlU7QUFHaEJDLFlBQVE7QUFIUSxHQUFYLENBQVA7QUFLRCxDQU5NOztBQVFBLElBQU1LLGdDQUFZLFNBQVpBLFNBQVksQ0FBU0gsRUFBVCxFQUFhSSxPQUFiLEVBQXNCQyxHQUF0QixFQUEyQjtBQUNsRCxTQUFPLGFBQUdWLE9BQUgsQ0FBVztBQUNoQkMsZ0NBRGdCO0FBRWhCQyxVQUFNO0FBQ0pTLGNBQVFOLEVBREo7QUFFSk8sZ0JBQVVILE9BRk47QUFHSkksY0FBUUg7QUFISixLQUZVO0FBT2hCUCxZQUFRO0FBUFEsR0FBWCxDQUFQO0FBU0QsQ0FWTTs7QUFZQSxJQUFNVyxvQ0FBYyxTQUFkQSxXQUFjLENBQVNILE1BQVQsRUFBaUJMLEtBQWpCLEVBQXVCUyxTQUF2QixFQUFrQztBQUMzRCxTQUFPLGFBQUdmLE9BQUgsQ0FBVztBQUNoQkMsaUNBRGdCO0FBRWhCQyxVQUFNO0FBQ0pTLGNBQVFBLE1BREo7QUFFSkssYUFBTyxHQUZIO0FBR0pWLGFBQU9BLEtBSEg7QUFJSlcsZUFBU0Y7QUFKTCxLQUZVO0FBUWhCWixZQUFRO0FBUlEsR0FBWCxDQUFQO0FBVUQsQ0FYTTs7QUFhQSxJQUFNZSxrQ0FBYSxTQUFiQSxVQUFhLENBQVNQLE1BQVQsRUFBaUJDLFFBQWpCLEVBQTBCQyxNQUExQixFQUFpQ1AsS0FBakMsRUFBd0M7QUFDaEUsU0FBTyxhQUFHTixPQUFILENBQVc7QUFDaEJDLGlDQURnQjtBQUVoQkMsVUFBTTtBQUNKUyxjQUFRQSxNQURKO0FBRUpDLGdCQUFVQSxRQUZOO0FBR0pDLGNBQVFBLE1BSEo7QUFJSlAsYUFBT0E7QUFKSCxLQUZVO0FBUWhCSCxZQUFRO0FBUlEsR0FBWCxDQUFQO0FBVUQsQ0FYTTtBQVlBLElBQU1nQixrQ0FBYSxTQUFiQSxVQUFhLENBQVNSLE1BQVQsRUFBaUJDLFFBQWpCLEVBQTBCQyxNQUExQixFQUFpQ08sR0FBakMsRUFBc0M7QUFDOUQsU0FBTyxhQUFHcEIsT0FBSCxDQUFXO0FBQ2hCQyxpQ0FEZ0I7QUFFaEJDLFVBQU07QUFDSlMsY0FBUUEsTUFESjtBQUVKQyxnQkFBVUEsUUFGTjtBQUdKQyxjQUFRQSxNQUhKO0FBSUpPLFdBQUtBO0FBSkQsS0FGVTtBQVFoQmpCLFlBQVE7QUFSUSxHQUFYLENBQVA7QUFVRCxDQVhNIiwiZmlsZSI6ImNoYXRyb29tLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGpmIGZyb20gJy4uL3V0aWxzL2pmJ1xyXG5pbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldExpc3QgPSBmdW5jdGlvbigpIHtcclxuICByZXR1cm4gamYucmVxdWVzdCh7XHJcbiAgICBhcGk6ICdjaGF0X3Jvb20vbGlzdC8nLFxyXG4gICAgZGF0YToge30sXHJcbiAgICBtZXRob2Q6ICdHRVQnXHJcbiAgfSlcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGdldE9uZUJ5SWQgPSBmdW5jdGlvbihpZCwgdG9rZW4pIHtcclxuICByZXR1cm4gamYucmVxdWVzdCh7XHJcbiAgICBhcGk6IGBjaGF0X3Jvb20vJHtpZH0vZGV0YWlsLz90b2tlbj0ke3Rva2VufWAsXHJcbiAgICBkYXRhOiB7fSxcclxuICAgIG1ldGhvZDogJ0dFVCdcclxuICB9KVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0SXRlbUlkID0gZnVuY3Rpb24oaWQpIHtcclxuICByZXR1cm4gamYucmVxdWVzdCh7XHJcbiAgICBhcGk6IGBhY2NvdW50cy9kZXRhaWxfYnlfYWNjaWQvJHtpZH0vYCxcclxuICAgIGRhdGE6IHt9LFxyXG4gICAgbWV0aG9kOiAnR0VUJ1xyXG4gIH0pXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBhZGRUb1Jvb20gPSBmdW5jdGlvbihpZCwgY3JlYXRvciwgbnVtKSB7XHJcbiAgcmV0dXJuIGpmLnJlcXVlc3Qoe1xyXG4gICAgYXBpOiBgY2hhdF9yb29tL2FkZF9tZW1iZXIvYCxcclxuICAgIGRhdGE6IHtcclxuICAgICAgcm9vbWlkOiBpZCxcclxuICAgICAgb3BlcmF0b3I6IGNyZWF0b3IsXHJcbiAgICAgIHRhcmdldDogbnVtXHJcbiAgICB9LFxyXG4gICAgbWV0aG9kOiAnUE9TVCdcclxuICB9KVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0VXNlckxpc3QgPSBmdW5jdGlvbihyb29taWQsIHRva2VuLGVudGVyVGltZSkge1xyXG4gIHJldHVybiBqZi5yZXF1ZXN0KHtcclxuICAgIGFwaTogYGNoYXRfcm9vbS9tZW1iZXJfbGlzdC9gLFxyXG4gICAgZGF0YToge1xyXG4gICAgICByb29taWQ6IHJvb21pZCxcclxuICAgICAgbGltaXQ6IDEwMCxcclxuICAgICAgdG9rZW46IHRva2VuLFxyXG4gICAgICBlbmR0aW1lOiBlbnRlclRpbWUsXHJcbiAgICB9LFxyXG4gICAgbWV0aG9kOiAnUE9TVCdcclxuICB9KVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgQmFuU29tZW9uZSA9IGZ1bmN0aW9uKHJvb21pZCwgb3BlcmF0b3IsdGFyZ2V0LHRva2VuKSB7XHJcbiAgcmV0dXJuIGpmLnJlcXVlc3Qoe1xyXG4gICAgYXBpOiBgY2hhdF9yb29tL2Jhbl9zb21lb25lL2AsXHJcbiAgICBkYXRhOiB7XHJcbiAgICAgIHJvb21pZDogcm9vbWlkLFxyXG4gICAgICBvcGVyYXRvcjogb3BlcmF0b3IsXHJcbiAgICAgIHRhcmdldDogdGFyZ2V0LFxyXG4gICAgICB0b2tlbjogdG9rZW5cclxuICAgIH0sXHJcbiAgICBtZXRob2Q6ICdQT1NUJ1xyXG4gIH0pXHJcbn1cclxuZXhwb3J0IGNvbnN0IGNoYW5nZVJvbGUgPSBmdW5jdGlvbihyb29taWQsIG9wZXJhdG9yLHRhcmdldCxvcHQpIHtcclxuICByZXR1cm4gamYucmVxdWVzdCh7XHJcbiAgICBhcGk6IGBjaGF0X3Jvb20vY2hhbmdlX3JvbGUvYCxcclxuICAgIGRhdGE6IHtcclxuICAgICAgcm9vbWlkOiByb29taWQsXHJcbiAgICAgIG9wZXJhdG9yOiBvcGVyYXRvcixcclxuICAgICAgdGFyZ2V0OiB0YXJnZXQsXHJcbiAgICAgIG9wdDogb3B0LFxyXG4gICAgfSxcclxuICAgIG1ldGhvZDogJ1BPU1QnXHJcbiAgfSlcclxufVxyXG5cclxuIl19