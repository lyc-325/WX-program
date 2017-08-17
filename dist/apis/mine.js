'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.delItem = exports.getMsgList = exports.modifyUserInfo = exports.getLevel = exports.getUserData = undefined;

var _jf = require('./../utils/jf.js');

var _jf2 = _interopRequireDefault(_jf);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var getUserData = exports.getUserData = function getUserData(token, id) {
  return _jf2.default.request({
    api: 'accounts/detail/' + token + '/' + id,
    data: {},
    method: 'GET'
  });
}; /**
    * Created by Administrator on 2017/7/28 0028.
    */
var getLevel = exports.getLevel = function getLevel(score) {
  return parseInt(score / 10);
};

var modifyUserInfo = exports.modifyUserInfo = function modifyUserInfo(id, token) {
  return _jf2.default.request({
    api: 'accounts/modify/' + id + '/',
    data: token,
    method: 'POST'
  });
};

var getMsgList = exports.getMsgList = function getMsgList(id) {
  return _jf2.default.request({
    api: 'article/get_article_by_user_id/',
    data: {
      id: id
    },
    method: 'POST'
  });
};
var delItem = exports.delItem = function delItem(id) {
  var postArr = [];
  postArr.push(id);
  return _jf2.default.request({
    api: 'article/category/del_l/',
    data: {
      pk_list: postArr
    },
    method: 'POST'
  });
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1pbmUuanMiXSwibmFtZXMiOlsiZ2V0VXNlckRhdGEiLCJ0b2tlbiIsImlkIiwicmVxdWVzdCIsImFwaSIsImRhdGEiLCJtZXRob2QiLCJnZXRMZXZlbCIsInNjb3JlIiwicGFyc2VJbnQiLCJtb2RpZnlVc2VySW5mbyIsImdldE1zZ0xpc3QiLCJkZWxJdGVtIiwicG9zdEFyciIsInB1c2giLCJwa19saXN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBR0E7Ozs7OztBQUVPLElBQU1BLG9DQUFjLFNBQWRBLFdBQWMsQ0FBVUMsS0FBVixFQUFpQkMsRUFBakIsRUFBcUI7QUFDOUMsU0FBTyxhQUFHQyxPQUFILENBQVc7QUFDaEJDLDhCQUF3QkgsS0FBeEIsU0FBaUNDLEVBRGpCO0FBRWhCRyxVQUFNLEVBRlU7QUFHaEJDLFlBQVE7QUFIUSxHQUFYLENBQVA7QUFLRCxDQU5NLEMsQ0FMUDs7O0FBYU8sSUFBTUMsOEJBQVcsU0FBWEEsUUFBVyxDQUFVQyxLQUFWLEVBQWlCO0FBQ3JDLFNBQU9DLFNBQVNELFFBQU0sRUFBZixDQUFQO0FBQ0gsQ0FGTTs7QUFJQSxJQUFNRSwwQ0FBaUIsU0FBakJBLGNBQWlCLENBQVNSLEVBQVQsRUFBYUQsS0FBYixFQUFvQjtBQUNoRCxTQUFPLGFBQUdFLE9BQUgsQ0FBVztBQUNoQkMsOEJBQXdCRixFQUF4QixNQURnQjtBQUVoQkcsVUFBTUosS0FGVTtBQUdoQkssWUFBUTtBQUhRLEdBQVgsQ0FBUDtBQUtELENBTk07O0FBUUEsSUFBTUssa0NBQWEsU0FBYkEsVUFBYSxDQUFTVCxFQUFULEVBQWE7QUFDckMsU0FBTyxhQUFHQyxPQUFILENBQVc7QUFDaEJDLDBDQURnQjtBQUVoQkMsVUFBTTtBQUNKSCxVQUFJQTtBQURBLEtBRlU7QUFLaEJJLFlBQVE7QUFMUSxHQUFYLENBQVA7QUFPRCxDQVJNO0FBU0EsSUFBTU0sNEJBQVUsU0FBVkEsT0FBVSxDQUFTVixFQUFULEVBQWE7QUFDbEMsTUFBSVcsVUFBUyxFQUFiO0FBQ0FBLFVBQVFDLElBQVIsQ0FBYVosRUFBYjtBQUNBLFNBQU8sYUFBR0MsT0FBSCxDQUFXO0FBQ2hCQyxrQ0FEZ0I7QUFFaEJDLFVBQU07QUFDSlUsZUFBU0Y7QUFETCxLQUZVO0FBS2hCUCxZQUFRO0FBTFEsR0FBWCxDQUFQO0FBT0QsQ0FWTSIsImZpbGUiOiJtaW5lLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBDcmVhdGVkIGJ5IEFkbWluaXN0cmF0b3Igb24gMjAxNy83LzI4IDAwMjguXG4gKi9cbmltcG9ydCBqZiBmcm9tICcuLi91dGlscy9qZidcblxuZXhwb3J0IGNvbnN0IGdldFVzZXJEYXRhID0gZnVuY3Rpb24gKHRva2VuLCBpZCkge1xuICByZXR1cm4gamYucmVxdWVzdCh7XG4gICAgYXBpOiBgYWNjb3VudHMvZGV0YWlsLyR7dG9rZW59LyR7aWR9YCxcbiAgICBkYXRhOiB7fSxcbiAgICBtZXRob2Q6ICdHRVQnXG4gIH0pXG59XG5cbmV4cG9ydCBjb25zdCBnZXRMZXZlbCA9IGZ1bmN0aW9uIChzY29yZSkge1xuICAgIHJldHVybiBwYXJzZUludChzY29yZS8xMClcbn1cblxuZXhwb3J0IGNvbnN0IG1vZGlmeVVzZXJJbmZvID0gZnVuY3Rpb24oaWQsIHRva2VuKSB7XG4gIHJldHVybiBqZi5yZXF1ZXN0KHtcbiAgICBhcGk6IGBhY2NvdW50cy9tb2RpZnkvJHtpZH0vYCxcbiAgICBkYXRhOiB0b2tlbixcbiAgICBtZXRob2Q6ICdQT1NUJ1xuICB9KVxufVxuXG5leHBvcnQgY29uc3QgZ2V0TXNnTGlzdCA9IGZ1bmN0aW9uKGlkKSB7XG4gIHJldHVybiBqZi5yZXF1ZXN0KHtcbiAgICBhcGk6IGBhcnRpY2xlL2dldF9hcnRpY2xlX2J5X3VzZXJfaWQvYCxcbiAgICBkYXRhOiB7XG4gICAgICBpZDogaWRcbiAgICB9LFxuICAgIG1ldGhvZDogJ1BPU1QnXG4gIH0pXG59XG5leHBvcnQgY29uc3QgZGVsSXRlbSA9IGZ1bmN0aW9uKGlkKSB7XG4gIHZhciBwb3N0QXJyID1bXVxuICBwb3N0QXJyLnB1c2goaWQpXG4gIHJldHVybiBqZi5yZXF1ZXN0KHtcbiAgICBhcGk6IGBhcnRpY2xlL2NhdGVnb3J5L2RlbF9sL2AsXG4gICAgZGF0YToge1xuICAgICAgcGtfbGlzdDogcG9zdEFyclxuICAgIH0sXG4gICAgbWV0aG9kOiAnUE9TVCdcbiAgfSlcbn1cbiJdfQ==