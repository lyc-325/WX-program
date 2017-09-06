'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getItemId = exports.getOneById = exports.getList = undefined;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoYXRyb29tLmpzIl0sIm5hbWVzIjpbImdldExpc3QiLCJyZXF1ZXN0IiwiYXBpIiwiZGF0YSIsIm1ldGhvZCIsImdldE9uZUJ5SWQiLCJpZCIsInRva2VuIiwiZ2V0SXRlbUlkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7Ozs7OztBQUVPLElBQU1BLDRCQUFVLFNBQVZBLE9BQVUsR0FBVztBQUNoQyxTQUFPLGFBQUdDLE9BQUgsQ0FBVztBQUNoQkMsU0FBSyxpQkFEVztBQUVoQkMsVUFBTSxFQUZVO0FBR2hCQyxZQUFRO0FBSFEsR0FBWCxDQUFQO0FBS0QsQ0FOTTs7QUFRQSxJQUFNQyxrQ0FBYSxTQUFiQSxVQUFhLENBQVNDLEVBQVQsRUFBYUMsS0FBYixFQUFvQjtBQUM1QyxTQUFPLGFBQUdOLE9BQUgsQ0FBVztBQUNoQkMsd0JBQWtCSSxFQUFsQix1QkFBc0NDLEtBRHRCO0FBRWhCSixVQUFNLEVBRlU7QUFHaEJDLFlBQVE7QUFIUSxHQUFYLENBQVA7QUFLRCxDQU5NOztBQVFBLElBQU1JLGdDQUFZLFNBQVpBLFNBQVksQ0FBU0YsRUFBVCxFQUFhO0FBQ3BDLFNBQU8sYUFBR0wsT0FBSCxDQUFXO0FBQ2hCQyx1Q0FBaUNJLEVBQWpDLE1BRGdCO0FBRWhCSCxVQUFNLEVBRlU7QUFHaEJDLFlBQVE7QUFIUSxHQUFYLENBQVA7QUFLRCxDQU5NIiwiZmlsZSI6ImNoYXRyb29tLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGpmIGZyb20gJy4uL3V0aWxzL2pmJ1xuXG5leHBvcnQgY29uc3QgZ2V0TGlzdCA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gamYucmVxdWVzdCh7XG4gICAgYXBpOiAnY2hhdF9yb29tL2xpc3QvJyxcbiAgICBkYXRhOiB7fSxcbiAgICBtZXRob2Q6ICdHRVQnXG4gIH0pXG59XG5cbmV4cG9ydCBjb25zdCBnZXRPbmVCeUlkID0gZnVuY3Rpb24oaWQsIHRva2VuKSB7XG4gIHJldHVybiBqZi5yZXF1ZXN0KHtcbiAgICBhcGk6IGBjaGF0X3Jvb20vJHtpZH0vZGV0YWlsLz90b2tlbj0ke3Rva2VufWAsXG4gICAgZGF0YToge30sXG4gICAgbWV0aG9kOiAnR0VUJ1xuICB9KVxufVxuXG5leHBvcnQgY29uc3QgZ2V0SXRlbUlkID0gZnVuY3Rpb24oaWQpIHtcbiAgcmV0dXJuIGpmLnJlcXVlc3Qoe1xuICAgIGFwaTogYGFjY291bnRzL2RldGFpbF9ieV9hY2NpZC8ke2lkfS9gLFxuICAgIGRhdGE6IHt9LFxuICAgIG1ldGhvZDogJ0dFVCdcbiAgfSlcbn1cbiJdfQ==