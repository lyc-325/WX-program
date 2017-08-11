'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getMsgList = exports.modifyUserInfo = exports.getLevel = exports.getUserData = undefined;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1pbmUuanMiXSwibmFtZXMiOlsiZ2V0VXNlckRhdGEiLCJ0b2tlbiIsImlkIiwicmVxdWVzdCIsImFwaSIsImRhdGEiLCJtZXRob2QiLCJnZXRMZXZlbCIsInNjb3JlIiwicGFyc2VJbnQiLCJtb2RpZnlVc2VySW5mbyIsImdldE1zZ0xpc3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFHQTs7Ozs7O0FBRU8sSUFBTUEsb0NBQWMsU0FBZEEsV0FBYyxDQUFVQyxLQUFWLEVBQWlCQyxFQUFqQixFQUFxQjtBQUM5QyxTQUFPLGFBQUdDLE9BQUgsQ0FBVztBQUNoQkMsOEJBQXdCSCxLQUF4QixTQUFpQ0MsRUFEakI7QUFFaEJHLFVBQU0sRUFGVTtBQUdoQkMsWUFBUTtBQUhRLEdBQVgsQ0FBUDtBQUtELENBTk0sQyxDQUxQOzs7QUFhTyxJQUFNQyw4QkFBVyxTQUFYQSxRQUFXLENBQVVDLEtBQVYsRUFBaUI7QUFDckMsU0FBT0MsU0FBU0QsUUFBTSxFQUFmLENBQVA7QUFDSCxDQUZNOztBQUlBLElBQU1FLDBDQUFpQixTQUFqQkEsY0FBaUIsQ0FBU1IsRUFBVCxFQUFhRCxLQUFiLEVBQW9CO0FBQ2hELFNBQU8sYUFBR0UsT0FBSCxDQUFXO0FBQ2hCQyw4QkFBd0JGLEVBQXhCLE1BRGdCO0FBRWhCRyxVQUFNSixLQUZVO0FBR2hCSyxZQUFRO0FBSFEsR0FBWCxDQUFQO0FBS0QsQ0FOTTs7QUFRQSxJQUFNSyxrQ0FBYSxTQUFiQSxVQUFhLENBQVNULEVBQVQsRUFBYTtBQUNyQyxTQUFPLGFBQUdDLE9BQUgsQ0FBVztBQUNoQkMsMENBRGdCO0FBRWhCQyxVQUFNO0FBQ0pILFVBQUlBO0FBREEsS0FGVTtBQUtoQkksWUFBUTtBQUxRLEdBQVgsQ0FBUDtBQU9ELENBUk0iLCJmaWxlIjoibWluZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQ3JlYXRlZCBieSBBZG1pbmlzdHJhdG9yIG9uIDIwMTcvNy8yOCAwMDI4LlxuICovXG5pbXBvcnQgamYgZnJvbSAnLi4vdXRpbHMvamYnXG5cbmV4cG9ydCBjb25zdCBnZXRVc2VyRGF0YSA9IGZ1bmN0aW9uICh0b2tlbiwgaWQpIHtcbiAgcmV0dXJuIGpmLnJlcXVlc3Qoe1xuICAgIGFwaTogYGFjY291bnRzL2RldGFpbC8ke3Rva2VufS8ke2lkfWAsXG4gICAgZGF0YToge30sXG4gICAgbWV0aG9kOiAnR0VUJ1xuICB9KVxufVxuXG5leHBvcnQgY29uc3QgZ2V0TGV2ZWwgPSBmdW5jdGlvbiAoc2NvcmUpIHtcbiAgICByZXR1cm4gcGFyc2VJbnQoc2NvcmUvMTApXG59XG5cbmV4cG9ydCBjb25zdCBtb2RpZnlVc2VySW5mbyA9IGZ1bmN0aW9uKGlkLCB0b2tlbikge1xuICByZXR1cm4gamYucmVxdWVzdCh7XG4gICAgYXBpOiBgYWNjb3VudHMvbW9kaWZ5LyR7aWR9L2AsXG4gICAgZGF0YTogdG9rZW4sXG4gICAgbWV0aG9kOiAnUE9TVCdcbiAgfSlcbn1cblxuZXhwb3J0IGNvbnN0IGdldE1zZ0xpc3QgPSBmdW5jdGlvbihpZCkge1xuICByZXR1cm4gamYucmVxdWVzdCh7XG4gICAgYXBpOiBgYXJ0aWNsZS9nZXRfYXJ0aWNsZV9ieV91c2VyX2lkL2AsXG4gICAgZGF0YToge1xuICAgICAgaWQ6IGlkXG4gICAgfSxcbiAgICBtZXRob2Q6ICdQT1NUJ1xuICB9KVxufVxuIl19