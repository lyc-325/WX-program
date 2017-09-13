'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.delItem = exports.getMsgList = exports.changeYXName = exports.modifyUserInfo = exports.getLevel = exports.getUserData = undefined;

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

var changeYXName = exports.changeYXName = function changeYXName(id, name) {
  return _jf2.default.request({
    api: 'accounts/update_info_netease/' + id + '/',
    data: {
      name: name
    },
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
var delItem = exports.delItem = function delItem(id, token) {
  var postArr = [];
  postArr.push(id);
  return _jf2.default.request({
    api: 'article/category/del_l/',
    data: {
      pk_list: postArr,
      token: token
    },
    method: 'POST'
  });
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1pbmUuanMiXSwibmFtZXMiOlsiZ2V0VXNlckRhdGEiLCJ0b2tlbiIsImlkIiwicmVxdWVzdCIsImFwaSIsImRhdGEiLCJtZXRob2QiLCJnZXRMZXZlbCIsInNjb3JlIiwicGFyc2VJbnQiLCJtb2RpZnlVc2VySW5mbyIsImNoYW5nZVlYTmFtZSIsIm5hbWUiLCJnZXRNc2dMaXN0IiwiZGVsSXRlbSIsInBvc3RBcnIiLCJwdXNoIiwicGtfbGlzdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUdBOzs7Ozs7QUFFTyxJQUFNQSxvQ0FBYyxTQUFkQSxXQUFjLENBQVVDLEtBQVYsRUFBaUJDLEVBQWpCLEVBQXFCO0FBQzlDLFNBQU8sYUFBR0MsT0FBSCxDQUFXO0FBQ2hCQyw4QkFBd0JILEtBQXhCLFNBQWlDQyxFQURqQjtBQUVoQkcsVUFBTSxFQUZVO0FBR2hCQyxZQUFRO0FBSFEsR0FBWCxDQUFQO0FBS0QsQ0FOTSxDLENBTFA7OztBQWFPLElBQU1DLDhCQUFXLFNBQVhBLFFBQVcsQ0FBVUMsS0FBVixFQUFpQjtBQUNyQyxTQUFPQyxTQUFTRCxRQUFNLEVBQWYsQ0FBUDtBQUNILENBRk07O0FBSUEsSUFBTUUsMENBQWlCLFNBQWpCQSxjQUFpQixDQUFTUixFQUFULEVBQWFELEtBQWIsRUFBb0I7QUFDaEQsU0FBTyxhQUFHRSxPQUFILENBQVc7QUFDaEJDLDhCQUF3QkYsRUFBeEIsTUFEZ0I7QUFFaEJHLFVBQU1KLEtBRlU7QUFHaEJLLFlBQVE7QUFIUSxHQUFYLENBQVA7QUFLRCxDQU5NOztBQVFBLElBQU1LLHNDQUFlLFNBQWZBLFlBQWUsQ0FBU1QsRUFBVCxFQUFhVSxJQUFiLEVBQW1CO0FBQzdDLFNBQU8sYUFBR1QsT0FBSCxDQUFXO0FBQ2hCQywyQ0FBcUNGLEVBQXJDLE1BRGdCO0FBRWhCRyxVQUFNO0FBQ0pPLFlBQU1BO0FBREYsS0FGVTtBQUtoQk4sWUFBUTtBQUxRLEdBQVgsQ0FBUDtBQU9ELENBUk07O0FBVUEsSUFBTU8sa0NBQWEsU0FBYkEsVUFBYSxDQUFTWCxFQUFULEVBQWE7QUFDckMsU0FBTyxhQUFHQyxPQUFILENBQVc7QUFDaEJDLDBDQURnQjtBQUVoQkMsVUFBTTtBQUNKSCxVQUFJQTtBQURBLEtBRlU7QUFLaEJJLFlBQVE7QUFMUSxHQUFYLENBQVA7QUFPRCxDQVJNO0FBU0EsSUFBTVEsNEJBQVUsU0FBVkEsT0FBVSxDQUFTWixFQUFULEVBQWFELEtBQWIsRUFBb0I7QUFDekMsTUFBSWMsVUFBUyxFQUFiO0FBQ0FBLFVBQVFDLElBQVIsQ0FBYWQsRUFBYjtBQUNBLFNBQU8sYUFBR0MsT0FBSCxDQUFXO0FBQ2hCQyxrQ0FEZ0I7QUFFaEJDLFVBQU07QUFDSlksZUFBU0YsT0FETDtBQUVKZCxhQUFPQTtBQUZILEtBRlU7QUFNaEJLLFlBQVE7QUFOUSxHQUFYLENBQVA7QUFRRCxDQVhNIiwiZmlsZSI6Im1pbmUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIENyZWF0ZWQgYnkgQWRtaW5pc3RyYXRvciBvbiAyMDE3LzcvMjggMDAyOC5cbiAqL1xuaW1wb3J0IGpmIGZyb20gJy4uL3V0aWxzL2pmJ1xuXG5leHBvcnQgY29uc3QgZ2V0VXNlckRhdGEgPSBmdW5jdGlvbiAodG9rZW4sIGlkKSB7XG4gIHJldHVybiBqZi5yZXF1ZXN0KHtcbiAgICBhcGk6IGBhY2NvdW50cy9kZXRhaWwvJHt0b2tlbn0vJHtpZH1gLFxuICAgIGRhdGE6IHt9LFxuICAgIG1ldGhvZDogJ0dFVCdcbiAgfSlcbn1cblxuZXhwb3J0IGNvbnN0IGdldExldmVsID0gZnVuY3Rpb24gKHNjb3JlKSB7XG4gICAgcmV0dXJuIHBhcnNlSW50KHNjb3JlLzEwKVxufVxuXG5leHBvcnQgY29uc3QgbW9kaWZ5VXNlckluZm8gPSBmdW5jdGlvbihpZCwgdG9rZW4pIHtcbiAgcmV0dXJuIGpmLnJlcXVlc3Qoe1xuICAgIGFwaTogYGFjY291bnRzL21vZGlmeS8ke2lkfS9gLFxuICAgIGRhdGE6IHRva2VuLFxuICAgIG1ldGhvZDogJ1BPU1QnXG4gIH0pXG59XG5cbmV4cG9ydCBjb25zdCBjaGFuZ2VZWE5hbWUgPSBmdW5jdGlvbihpZCwgbmFtZSkge1xuICByZXR1cm4gamYucmVxdWVzdCh7XG4gICAgYXBpOiBgYWNjb3VudHMvdXBkYXRlX2luZm9fbmV0ZWFzZS8ke2lkfS9gLFxuICAgIGRhdGE6IHtcbiAgICAgIG5hbWU6IG5hbWVcbiAgICB9LFxuICAgIG1ldGhvZDogJ1BPU1QnXG4gIH0pXG59XG5cbmV4cG9ydCBjb25zdCBnZXRNc2dMaXN0ID0gZnVuY3Rpb24oaWQpIHtcbiAgcmV0dXJuIGpmLnJlcXVlc3Qoe1xuICAgIGFwaTogYGFydGljbGUvZ2V0X2FydGljbGVfYnlfdXNlcl9pZC9gLFxuICAgIGRhdGE6IHtcbiAgICAgIGlkOiBpZFxuICAgIH0sXG4gICAgbWV0aG9kOiAnUE9TVCdcbiAgfSlcbn1cbmV4cG9ydCBjb25zdCBkZWxJdGVtID0gZnVuY3Rpb24oaWQsIHRva2VuKSB7XG4gIHZhciBwb3N0QXJyID1bXVxuICBwb3N0QXJyLnB1c2goaWQpXG4gIHJldHVybiBqZi5yZXF1ZXN0KHtcbiAgICBhcGk6IGBhcnRpY2xlL2NhdGVnb3J5L2RlbF9sL2AsXG4gICAgZGF0YToge1xuICAgICAgcGtfbGlzdDogcG9zdEFycixcbiAgICAgIHRva2VuOiB0b2tlblxuICAgIH0sXG4gICAgbWV0aG9kOiAnUE9TVCdcbiAgfSlcbn1cbiJdfQ==