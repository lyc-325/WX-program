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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1pbmUuanMiXSwibmFtZXMiOlsiZ2V0VXNlckRhdGEiLCJ0b2tlbiIsImlkIiwicmVxdWVzdCIsImFwaSIsImRhdGEiLCJtZXRob2QiLCJnZXRMZXZlbCIsInNjb3JlIiwicGFyc2VJbnQiLCJtb2RpZnlVc2VySW5mbyIsImNoYW5nZVlYTmFtZSIsIm5hbWUiLCJnZXRNc2dMaXN0IiwiZGVsSXRlbSIsInBvc3RBcnIiLCJwdXNoIiwicGtfbGlzdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUdBOzs7Ozs7QUFFTyxJQUFNQSxvQ0FBYyxTQUFkQSxXQUFjLENBQVVDLEtBQVYsRUFBaUJDLEVBQWpCLEVBQXFCO0FBQzlDLFNBQU8sYUFBR0MsT0FBSCxDQUFXO0FBQ2hCQyw4QkFBd0JILEtBQXhCLFNBQWlDQyxFQURqQjtBQUVoQkcsVUFBTSxFQUZVO0FBR2hCQyxZQUFRO0FBSFEsR0FBWCxDQUFQO0FBS0QsQ0FOTSxDLENBTFA7OztBQWFPLElBQU1DLDhCQUFXLFNBQVhBLFFBQVcsQ0FBVUMsS0FBVixFQUFpQjtBQUNyQyxTQUFPQyxTQUFTRCxRQUFNLEVBQWYsQ0FBUDtBQUNILENBRk07O0FBSUEsSUFBTUUsMENBQWlCLFNBQWpCQSxjQUFpQixDQUFTUixFQUFULEVBQWFELEtBQWIsRUFBb0I7QUFDaEQsU0FBTyxhQUFHRSxPQUFILENBQVc7QUFDaEJDLDhCQUF3QkYsRUFBeEIsTUFEZ0I7QUFFaEJHLFVBQU1KLEtBRlU7QUFHaEJLLFlBQVE7QUFIUSxHQUFYLENBQVA7QUFLRCxDQU5NOztBQVFBLElBQU1LLHNDQUFlLFNBQWZBLFlBQWUsQ0FBU1QsRUFBVCxFQUFhVSxJQUFiLEVBQW1CO0FBQzdDLFNBQU8sYUFBR1QsT0FBSCxDQUFXO0FBQ2hCQywyQ0FBcUNGLEVBQXJDLE1BRGdCO0FBRWhCRyxVQUFNO0FBQ0pPLFlBQU1BO0FBREYsS0FGVTtBQUtoQk4sWUFBUTtBQUxRLEdBQVgsQ0FBUDtBQU9ELENBUk07O0FBVUEsSUFBTU8sa0NBQWEsU0FBYkEsVUFBYSxDQUFTWCxFQUFULEVBQWE7QUFDckMsU0FBTyxhQUFHQyxPQUFILENBQVc7QUFDaEJDLDBDQURnQjtBQUVoQkMsVUFBTTtBQUNKSCxVQUFJQTtBQURBLEtBRlU7QUFLaEJJLFlBQVE7QUFMUSxHQUFYLENBQVA7QUFPRCxDQVJNO0FBU0EsSUFBTVEsNEJBQVUsU0FBVkEsT0FBVSxDQUFTWixFQUFULEVBQWFELEtBQWIsRUFBb0I7QUFDekMsTUFBSWMsVUFBUyxFQUFiO0FBQ0FBLFVBQVFDLElBQVIsQ0FBYWQsRUFBYjtBQUNBLFNBQU8sYUFBR0MsT0FBSCxDQUFXO0FBQ2hCQyxrQ0FEZ0I7QUFFaEJDLFVBQU07QUFDSlksZUFBU0YsT0FETDtBQUVKZCxhQUFPQTtBQUZILEtBRlU7QUFNaEJLLFlBQVE7QUFOUSxHQUFYLENBQVA7QUFRRCxDQVhNIiwiZmlsZSI6Im1pbmUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQ3JlYXRlZCBieSBBZG1pbmlzdHJhdG9yIG9uIDIwMTcvNy8yOCAwMDI4LlxyXG4gKi9cclxuaW1wb3J0IGpmIGZyb20gJy4uL3V0aWxzL2pmJ1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldFVzZXJEYXRhID0gZnVuY3Rpb24gKHRva2VuLCBpZCkge1xyXG4gIHJldHVybiBqZi5yZXF1ZXN0KHtcclxuICAgIGFwaTogYGFjY291bnRzL2RldGFpbC8ke3Rva2VufS8ke2lkfWAsXHJcbiAgICBkYXRhOiB7fSxcclxuICAgIG1ldGhvZDogJ0dFVCdcclxuICB9KVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0TGV2ZWwgPSBmdW5jdGlvbiAoc2NvcmUpIHtcclxuICAgIHJldHVybiBwYXJzZUludChzY29yZS8xMClcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IG1vZGlmeVVzZXJJbmZvID0gZnVuY3Rpb24oaWQsIHRva2VuKSB7XHJcbiAgcmV0dXJuIGpmLnJlcXVlc3Qoe1xyXG4gICAgYXBpOiBgYWNjb3VudHMvbW9kaWZ5LyR7aWR9L2AsXHJcbiAgICBkYXRhOiB0b2tlbixcclxuICAgIG1ldGhvZDogJ1BPU1QnXHJcbiAgfSlcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGNoYW5nZVlYTmFtZSA9IGZ1bmN0aW9uKGlkLCBuYW1lKSB7XHJcbiAgcmV0dXJuIGpmLnJlcXVlc3Qoe1xyXG4gICAgYXBpOiBgYWNjb3VudHMvdXBkYXRlX2luZm9fbmV0ZWFzZS8ke2lkfS9gLFxyXG4gICAgZGF0YToge1xyXG4gICAgICBuYW1lOiBuYW1lXHJcbiAgICB9LFxyXG4gICAgbWV0aG9kOiAnUE9TVCdcclxuICB9KVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0TXNnTGlzdCA9IGZ1bmN0aW9uKGlkKSB7XHJcbiAgcmV0dXJuIGpmLnJlcXVlc3Qoe1xyXG4gICAgYXBpOiBgYXJ0aWNsZS9nZXRfYXJ0aWNsZV9ieV91c2VyX2lkL2AsXHJcbiAgICBkYXRhOiB7XHJcbiAgICAgIGlkOiBpZFxyXG4gICAgfSxcclxuICAgIG1ldGhvZDogJ1BPU1QnXHJcbiAgfSlcclxufVxyXG5leHBvcnQgY29uc3QgZGVsSXRlbSA9IGZ1bmN0aW9uKGlkLCB0b2tlbikge1xyXG4gIHZhciBwb3N0QXJyID1bXVxyXG4gIHBvc3RBcnIucHVzaChpZClcclxuICByZXR1cm4gamYucmVxdWVzdCh7XHJcbiAgICBhcGk6IGBhcnRpY2xlL2NhdGVnb3J5L2RlbF9sL2AsXHJcbiAgICBkYXRhOiB7XHJcbiAgICAgIHBrX2xpc3Q6IHBvc3RBcnIsXHJcbiAgICAgIHRva2VuOiB0b2tlblxyXG4gICAgfSxcclxuICAgIG1ldGhvZDogJ1BPU1QnXHJcbiAgfSlcclxufVxyXG4iXX0=