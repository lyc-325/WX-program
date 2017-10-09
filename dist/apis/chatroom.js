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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoYXRyb29tLmpzIl0sIm5hbWVzIjpbImdldExpc3QiLCJyZXF1ZXN0IiwiYXBpIiwiZGF0YSIsIm1ldGhvZCIsImdldE9uZUJ5SWQiLCJpZCIsInRva2VuIiwiZ2V0SXRlbUlkIiwiYWRkVG9Sb29tIiwiY3JlYXRvciIsIm51bSIsInJvb21pZCIsIm9wZXJhdG9yIiwidGFyZ2V0IiwiZ2V0VXNlckxpc3QiLCJsaW1pdCIsIkJhblNvbWVvbmUiLCJjaGFuZ2VSb2xlIiwib3B0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7Ozs7QUFDQTs7Ozs7O0FBRU8sSUFBTUEsNEJBQVUsU0FBVkEsT0FBVSxHQUFXO0FBQ2hDLFNBQU8sYUFBR0MsT0FBSCxDQUFXO0FBQ2hCQyxTQUFLLGlCQURXO0FBRWhCQyxVQUFNLEVBRlU7QUFHaEJDLFlBQVE7QUFIUSxHQUFYLENBQVA7QUFLRCxDQU5NOztBQVFBLElBQU1DLGtDQUFhLFNBQWJBLFVBQWEsQ0FBU0MsRUFBVCxFQUFhQyxLQUFiLEVBQW9CO0FBQzVDLFNBQU8sYUFBR04sT0FBSCxDQUFXO0FBQ2hCQyx3QkFBa0JJLEVBQWxCLHVCQUFzQ0MsS0FEdEI7QUFFaEJKLFVBQU0sRUFGVTtBQUdoQkMsWUFBUTtBQUhRLEdBQVgsQ0FBUDtBQUtELENBTk07O0FBUUEsSUFBTUksZ0NBQVksU0FBWkEsU0FBWSxDQUFTRixFQUFULEVBQWE7QUFDcEMsU0FBTyxhQUFHTCxPQUFILENBQVc7QUFDaEJDLHVDQUFpQ0ksRUFBakMsTUFEZ0I7QUFFaEJILFVBQU0sRUFGVTtBQUdoQkMsWUFBUTtBQUhRLEdBQVgsQ0FBUDtBQUtELENBTk07O0FBUUEsSUFBTUssZ0NBQVksU0FBWkEsU0FBWSxDQUFTSCxFQUFULEVBQWFJLE9BQWIsRUFBc0JDLEdBQXRCLEVBQTJCO0FBQ2xELFNBQU8sYUFBR1YsT0FBSCxDQUFXO0FBQ2hCQyxnQ0FEZ0I7QUFFaEJDLFVBQU07QUFDSlMsY0FBUU4sRUFESjtBQUVKTyxnQkFBVUgsT0FGTjtBQUdKSSxjQUFRSDtBQUhKLEtBRlU7QUFPaEJQLFlBQVE7QUFQUSxHQUFYLENBQVA7QUFTRCxDQVZNOztBQVlBLElBQU1XLG9DQUFjLFNBQWRBLFdBQWMsQ0FBU0gsTUFBVCxFQUFpQkwsS0FBakIsRUFBd0I7QUFDakQsU0FBTyxhQUFHTixPQUFILENBQVc7QUFDaEJDLGlDQURnQjtBQUVoQkMsVUFBTTtBQUNKUyxjQUFRQSxNQURKO0FBRUpJLGFBQU8sRUFGSDtBQUdKVCxhQUFPQTtBQUhILEtBRlU7QUFPaEJILFlBQVE7QUFQUSxHQUFYLENBQVA7QUFTRCxDQVZNOztBQVlBLElBQU1hLGtDQUFhLFNBQWJBLFVBQWEsQ0FBU0wsTUFBVCxFQUFpQkMsUUFBakIsRUFBMEJDLE1BQTFCLEVBQWlDUCxLQUFqQyxFQUF3QztBQUNoRSxTQUFPLGFBQUdOLE9BQUgsQ0FBVztBQUNoQkMsaUNBRGdCO0FBRWhCQyxVQUFNO0FBQ0pTLGNBQVFBLE1BREo7QUFFSkMsZ0JBQVVBLFFBRk47QUFHSkMsY0FBUUEsTUFISjtBQUlKUCxhQUFPQTtBQUpILEtBRlU7QUFRaEJILFlBQVE7QUFSUSxHQUFYLENBQVA7QUFVRCxDQVhNO0FBWUEsSUFBTWMsa0NBQWEsU0FBYkEsVUFBYSxDQUFTTixNQUFULEVBQWlCQyxRQUFqQixFQUEwQkMsTUFBMUIsRUFBaUNLLEdBQWpDLEVBQXNDO0FBQzlELFNBQU8sYUFBR2xCLE9BQUgsQ0FBVztBQUNoQkMsaUNBRGdCO0FBRWhCQyxVQUFNO0FBQ0pTLGNBQVFBLE1BREo7QUFFSkMsZ0JBQVVBLFFBRk47QUFHSkMsY0FBUUEsTUFISjtBQUlKSyxXQUFLQTtBQUpELEtBRlU7QUFRaEJmLFlBQVE7QUFSUSxHQUFYLENBQVA7QUFVRCxDQVhNIiwiZmlsZSI6ImNoYXRyb29tLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGpmIGZyb20gJy4uL3V0aWxzL2pmJ1xyXG5pbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldExpc3QgPSBmdW5jdGlvbigpIHtcclxuICByZXR1cm4gamYucmVxdWVzdCh7XHJcbiAgICBhcGk6ICdjaGF0X3Jvb20vbGlzdC8nLFxyXG4gICAgZGF0YToge30sXHJcbiAgICBtZXRob2Q6ICdHRVQnXHJcbiAgfSlcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGdldE9uZUJ5SWQgPSBmdW5jdGlvbihpZCwgdG9rZW4pIHtcclxuICByZXR1cm4gamYucmVxdWVzdCh7XHJcbiAgICBhcGk6IGBjaGF0X3Jvb20vJHtpZH0vZGV0YWlsLz90b2tlbj0ke3Rva2VufWAsXHJcbiAgICBkYXRhOiB7fSxcclxuICAgIG1ldGhvZDogJ0dFVCdcclxuICB9KVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0SXRlbUlkID0gZnVuY3Rpb24oaWQpIHtcclxuICByZXR1cm4gamYucmVxdWVzdCh7XHJcbiAgICBhcGk6IGBhY2NvdW50cy9kZXRhaWxfYnlfYWNjaWQvJHtpZH0vYCxcclxuICAgIGRhdGE6IHt9LFxyXG4gICAgbWV0aG9kOiAnR0VUJ1xyXG4gIH0pXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBhZGRUb1Jvb20gPSBmdW5jdGlvbihpZCwgY3JlYXRvciwgbnVtKSB7XHJcbiAgcmV0dXJuIGpmLnJlcXVlc3Qoe1xyXG4gICAgYXBpOiBgY2hhdF9yb29tL2FkZF9tZW1iZXIvYCxcclxuICAgIGRhdGE6IHtcclxuICAgICAgcm9vbWlkOiBpZCxcclxuICAgICAgb3BlcmF0b3I6IGNyZWF0b3IsXHJcbiAgICAgIHRhcmdldDogbnVtXHJcbiAgICB9LFxyXG4gICAgbWV0aG9kOiAnUE9TVCdcclxuICB9KVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0VXNlckxpc3QgPSBmdW5jdGlvbihyb29taWQsIHRva2VuKSB7XHJcbiAgcmV0dXJuIGpmLnJlcXVlc3Qoe1xyXG4gICAgYXBpOiBgY2hhdF9yb29tL21lbWJlcl9saXN0L2AsXHJcbiAgICBkYXRhOiB7XHJcbiAgICAgIHJvb21pZDogcm9vbWlkLFxyXG4gICAgICBsaW1pdDogNTAsXHJcbiAgICAgIHRva2VuOiB0b2tlblxyXG4gICAgfSxcclxuICAgIG1ldGhvZDogJ1BPU1QnXHJcbiAgfSlcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IEJhblNvbWVvbmUgPSBmdW5jdGlvbihyb29taWQsIG9wZXJhdG9yLHRhcmdldCx0b2tlbikge1xyXG4gIHJldHVybiBqZi5yZXF1ZXN0KHtcclxuICAgIGFwaTogYGNoYXRfcm9vbS9iYW5fc29tZW9uZS9gLFxyXG4gICAgZGF0YToge1xyXG4gICAgICByb29taWQ6IHJvb21pZCxcclxuICAgICAgb3BlcmF0b3I6IG9wZXJhdG9yLFxyXG4gICAgICB0YXJnZXQ6IHRhcmdldCxcclxuICAgICAgdG9rZW46IHRva2VuXHJcbiAgICB9LFxyXG4gICAgbWV0aG9kOiAnUE9TVCdcclxuICB9KVxyXG59XHJcbmV4cG9ydCBjb25zdCBjaGFuZ2VSb2xlID0gZnVuY3Rpb24ocm9vbWlkLCBvcGVyYXRvcix0YXJnZXQsb3B0KSB7XHJcbiAgcmV0dXJuIGpmLnJlcXVlc3Qoe1xyXG4gICAgYXBpOiBgY2hhdF9yb29tL2NoYW5nZV9yb2xlL2AsXHJcbiAgICBkYXRhOiB7XHJcbiAgICAgIHJvb21pZDogcm9vbWlkLFxyXG4gICAgICBvcGVyYXRvcjogb3BlcmF0b3IsXHJcbiAgICAgIHRhcmdldDogdGFyZ2V0LFxyXG4gICAgICBvcHQ6IG9wdCxcclxuICAgIH0sXHJcbiAgICBtZXRob2Q6ICdQT1NUJ1xyXG4gIH0pXHJcbn0iXX0=