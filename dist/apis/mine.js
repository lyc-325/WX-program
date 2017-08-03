'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getLevel = exports.getUserData = undefined;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1pbmUuanMiXSwibmFtZXMiOlsiZ2V0VXNlckRhdGEiLCJ0b2tlbiIsImlkIiwicmVxdWVzdCIsImFwaSIsImRhdGEiLCJtZXRob2QiLCJnZXRMZXZlbCIsInNjb3JlIiwicGFyc2VJbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFHQTs7Ozs7O0FBRU8sSUFBTUEsb0NBQWMsU0FBZEEsV0FBYyxDQUFVQyxLQUFWLEVBQWlCQyxFQUFqQixFQUFxQjtBQUM5QyxTQUFPLGFBQUdDLE9BQUgsQ0FBVztBQUNoQkMsOEJBQXdCSCxLQUF4QixTQUFpQ0MsRUFEakI7QUFFaEJHLFVBQU0sRUFGVTtBQUdoQkMsWUFBUTtBQUhRLEdBQVgsQ0FBUDtBQUtELENBTk0sQyxDQUxQOzs7QUFhTyxJQUFNQyw4QkFBVyxTQUFYQSxRQUFXLENBQVVDLEtBQVYsRUFBaUI7QUFDckMsU0FBT0MsU0FBU0QsUUFBTSxFQUFmLENBQVA7QUFDSCxDQUZNIiwiZmlsZSI6Im1pbmUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIENyZWF0ZWQgYnkgQWRtaW5pc3RyYXRvciBvbiAyMDE3LzcvMjggMDAyOC5cbiAqL1xuaW1wb3J0IGpmIGZyb20gJy4uL3V0aWxzL2pmJ1xuXG5leHBvcnQgY29uc3QgZ2V0VXNlckRhdGEgPSBmdW5jdGlvbiAodG9rZW4sIGlkKSB7XG4gIHJldHVybiBqZi5yZXF1ZXN0KHtcbiAgICBhcGk6IGBhY2NvdW50cy9kZXRhaWwvJHt0b2tlbn0vJHtpZH1gLFxuICAgIGRhdGE6IHt9LFxuICAgIG1ldGhvZDogJ0dFVCdcbiAgfSlcbn1cblxuZXhwb3J0IGNvbnN0IGdldExldmVsID0gZnVuY3Rpb24gKHNjb3JlKSB7XG4gICAgcmV0dXJuIHBhcnNlSW50KHNjb3JlLzEwKVxufVxuXG4iXX0=