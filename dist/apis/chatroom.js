'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getUserList = exports.addToRoom = exports.getItemId = exports.getOneById = exports.getList = undefined;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoYXRyb29tLmpzIl0sIm5hbWVzIjpbImdldExpc3QiLCJyZXF1ZXN0IiwiYXBpIiwiZGF0YSIsIm1ldGhvZCIsImdldE9uZUJ5SWQiLCJpZCIsInRva2VuIiwiZ2V0SXRlbUlkIiwiYWRkVG9Sb29tIiwiY3JlYXRvciIsIm51bSIsInJvb21pZCIsIm9wZXJhdG9yIiwidGFyZ2V0IiwiZ2V0VXNlckxpc3QiLCJsaW1pdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7OztBQUVPLElBQU1BLDRCQUFVLFNBQVZBLE9BQVUsR0FBVztBQUNoQyxTQUFPLGFBQUdDLE9BQUgsQ0FBVztBQUNoQkMsU0FBSyxpQkFEVztBQUVoQkMsVUFBTSxFQUZVO0FBR2hCQyxZQUFRO0FBSFEsR0FBWCxDQUFQO0FBS0QsQ0FOTTs7QUFRQSxJQUFNQyxrQ0FBYSxTQUFiQSxVQUFhLENBQVNDLEVBQVQsRUFBYUMsS0FBYixFQUFvQjtBQUM1QyxTQUFPLGFBQUdOLE9BQUgsQ0FBVztBQUNoQkMsd0JBQWtCSSxFQUFsQix1QkFBc0NDLEtBRHRCO0FBRWhCSixVQUFNLEVBRlU7QUFHaEJDLFlBQVE7QUFIUSxHQUFYLENBQVA7QUFLRCxDQU5NOztBQVFBLElBQU1JLGdDQUFZLFNBQVpBLFNBQVksQ0FBU0YsRUFBVCxFQUFhO0FBQ3BDLFNBQU8sYUFBR0wsT0FBSCxDQUFXO0FBQ2hCQyx1Q0FBaUNJLEVBQWpDLE1BRGdCO0FBRWhCSCxVQUFNLEVBRlU7QUFHaEJDLFlBQVE7QUFIUSxHQUFYLENBQVA7QUFLRCxDQU5NOztBQVFBLElBQU1LLGdDQUFZLFNBQVpBLFNBQVksQ0FBU0gsRUFBVCxFQUFhSSxPQUFiLEVBQXNCQyxHQUF0QixFQUEyQjtBQUNsRCxTQUFPLGFBQUdWLE9BQUgsQ0FBVztBQUNoQkMsZ0NBRGdCO0FBRWhCQyxVQUFNO0FBQ0pTLGNBQVFOLEVBREo7QUFFSk8sZ0JBQVVILE9BRk47QUFHSkksY0FBUUg7QUFISixLQUZVO0FBT2hCUCxZQUFRO0FBUFEsR0FBWCxDQUFQO0FBU0QsQ0FWTTs7QUFZQSxJQUFNVyxvQ0FBYyxTQUFkQSxXQUFjLENBQVNILE1BQVQsRUFBaUJMLEtBQWpCLEVBQXdCO0FBQ2pELFNBQU8sYUFBR04sT0FBSCxDQUFXO0FBQ2hCQyxpQ0FEZ0I7QUFFaEJDLFVBQU07QUFDSlMsY0FBUUEsTUFESjtBQUVKSSxhQUFPLEVBRkg7QUFHSlQsYUFBT0E7QUFISCxLQUZVO0FBT2hCSCxZQUFRO0FBUFEsR0FBWCxDQUFQO0FBU0QsQ0FWTSIsImZpbGUiOiJjaGF0cm9vbS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBqZiBmcm9tICcuLi91dGlscy9qZidcclxuaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRMaXN0ID0gZnVuY3Rpb24oKSB7XHJcbiAgcmV0dXJuIGpmLnJlcXVlc3Qoe1xyXG4gICAgYXBpOiAnY2hhdF9yb29tL2xpc3QvJyxcclxuICAgIGRhdGE6IHt9LFxyXG4gICAgbWV0aG9kOiAnR0VUJ1xyXG4gIH0pXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBnZXRPbmVCeUlkID0gZnVuY3Rpb24oaWQsIHRva2VuKSB7XHJcbiAgcmV0dXJuIGpmLnJlcXVlc3Qoe1xyXG4gICAgYXBpOiBgY2hhdF9yb29tLyR7aWR9L2RldGFpbC8/dG9rZW49JHt0b2tlbn1gLFxyXG4gICAgZGF0YToge30sXHJcbiAgICBtZXRob2Q6ICdHRVQnXHJcbiAgfSlcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGdldEl0ZW1JZCA9IGZ1bmN0aW9uKGlkKSB7XHJcbiAgcmV0dXJuIGpmLnJlcXVlc3Qoe1xyXG4gICAgYXBpOiBgYWNjb3VudHMvZGV0YWlsX2J5X2FjY2lkLyR7aWR9L2AsXHJcbiAgICBkYXRhOiB7fSxcclxuICAgIG1ldGhvZDogJ0dFVCdcclxuICB9KVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgYWRkVG9Sb29tID0gZnVuY3Rpb24oaWQsIGNyZWF0b3IsIG51bSkge1xyXG4gIHJldHVybiBqZi5yZXF1ZXN0KHtcclxuICAgIGFwaTogYGNoYXRfcm9vbS9hZGRfbWVtYmVyL2AsXHJcbiAgICBkYXRhOiB7XHJcbiAgICAgIHJvb21pZDogaWQsXHJcbiAgICAgIG9wZXJhdG9yOiBjcmVhdG9yLFxyXG4gICAgICB0YXJnZXQ6IG51bVxyXG4gICAgfSxcclxuICAgIG1ldGhvZDogJ1BPU1QnXHJcbiAgfSlcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGdldFVzZXJMaXN0ID0gZnVuY3Rpb24ocm9vbWlkLCB0b2tlbikge1xyXG4gIHJldHVybiBqZi5yZXF1ZXN0KHtcclxuICAgIGFwaTogYGNoYXRfcm9vbS9tZW1iZXJfbGlzdC9gLFxyXG4gICAgZGF0YToge1xyXG4gICAgICByb29taWQ6IHJvb21pZCxcclxuICAgICAgbGltaXQ6IDUwLFxyXG4gICAgICB0b2tlbjogdG9rZW5cclxuICAgIH0sXHJcbiAgICBtZXRob2Q6ICdQT1NUJ1xyXG4gIH0pXHJcbn1cclxuIl19