'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getMsgList = exports.getOtherUserInfo = undefined;

var _jf = require('./../utils/jf.js');

var _jf2 = _interopRequireDefault(_jf);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var getOtherUserInfo = exports.getOtherUserInfo = function getOtherUserInfo(id, token) {
  return _jf2.default.request({
    api: 'accounts/detail/' + id + '/?token=' + token,
    method: 'GET'
  });
}; /**
    * Created by Administrator on 2017/8/10 0010.
    */
var getMsgList = exports.getMsgList = function getMsgList(id) {
  return _jf2.default.request({
    api: 'article/get_article_by_user_id/',
    data: {
      id: id
    },
    method: 'POST'
  });
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVzZXJJbmZvLmpzIl0sIm5hbWVzIjpbImdldE90aGVyVXNlckluZm8iLCJpZCIsInRva2VuIiwicmVxdWVzdCIsImFwaSIsIm1ldGhvZCIsImdldE1zZ0xpc3QiLCJkYXRhIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBR0E7Ozs7OztBQUVPLElBQU1BLDhDQUFtQixTQUFuQkEsZ0JBQW1CLENBQVVDLEVBQVYsRUFBYUMsS0FBYixFQUFvQjtBQUNsRCxTQUFPLGFBQUdDLE9BQUgsQ0FBVztBQUNoQkMsOEJBQXdCSCxFQUF4QixnQkFBcUNDLEtBRHJCO0FBRWhCRyxZQUFRO0FBRlEsR0FBWCxDQUFQO0FBSUQsQ0FMTSxDLENBTFA7OztBQVlPLElBQU1DLGtDQUFhLFNBQWJBLFVBQWEsQ0FBU0wsRUFBVCxFQUFhO0FBQ3JDLFNBQU8sYUFBR0UsT0FBSCxDQUFXO0FBQ2hCQywwQ0FEZ0I7QUFFaEJHLFVBQU07QUFDSk4sVUFBSUE7QUFEQSxLQUZVO0FBS2hCSSxZQUFRO0FBTFEsR0FBWCxDQUFQO0FBT0QsQ0FSTSIsImZpbGUiOiJ1c2VySW5mby5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBDcmVhdGVkIGJ5IEFkbWluaXN0cmF0b3Igb24gMjAxNy84LzEwIDAwMTAuXHJcbiAqL1xyXG5pbXBvcnQgamYgZnJvbSAnLi4vdXRpbHMvamYnXHJcblxyXG5leHBvcnQgY29uc3QgZ2V0T3RoZXJVc2VySW5mbyA9IGZ1bmN0aW9uIChpZCx0b2tlbikge1xyXG4gIHJldHVybiBqZi5yZXF1ZXN0KHtcclxuICAgIGFwaTogYGFjY291bnRzL2RldGFpbC8ke2lkfS8/dG9rZW49JHt0b2tlbn1gLFxyXG4gICAgbWV0aG9kOiAnR0VUJ1xyXG4gIH0pXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBnZXRNc2dMaXN0ID0gZnVuY3Rpb24oaWQpIHtcclxuICByZXR1cm4gamYucmVxdWVzdCh7XHJcbiAgICBhcGk6IGBhcnRpY2xlL2dldF9hcnRpY2xlX2J5X3VzZXJfaWQvYCxcclxuICAgIGRhdGE6IHtcclxuICAgICAgaWQ6IGlkXHJcbiAgICB9LFxyXG4gICAgbWV0aG9kOiAnUE9TVCdcclxuICB9KVxyXG59XHJcblxyXG4iXX0=