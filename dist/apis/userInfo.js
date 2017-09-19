'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getMsgList = exports.getOtherUserInfo = undefined;

var _jf = require('./../utils/jf.js');

var _jf2 = _interopRequireDefault(_jf);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var getOtherUserInfo = exports.getOtherUserInfo = function getOtherUserInfo(id) {
  return _jf2.default.request({
    api: 'accounts/detail/' + id + '/',
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVzZXJJbmZvLmpzIl0sIm5hbWVzIjpbImdldE90aGVyVXNlckluZm8iLCJpZCIsInJlcXVlc3QiLCJhcGkiLCJtZXRob2QiLCJnZXRNc2dMaXN0IiwiZGF0YSJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUdBOzs7Ozs7QUFFTyxJQUFNQSw4Q0FBbUIsU0FBbkJBLGdCQUFtQixDQUFVQyxFQUFWLEVBQWM7QUFDNUMsU0FBTyxhQUFHQyxPQUFILENBQVc7QUFDaEJDLDhCQUF3QkYsRUFBeEIsTUFEZ0I7QUFFaEJHLFlBQVE7QUFGUSxHQUFYLENBQVA7QUFJRCxDQUxNLEMsQ0FMUDs7O0FBWU8sSUFBTUMsa0NBQWEsU0FBYkEsVUFBYSxDQUFTSixFQUFULEVBQWE7QUFDckMsU0FBTyxhQUFHQyxPQUFILENBQVc7QUFDaEJDLDBDQURnQjtBQUVoQkcsVUFBTTtBQUNKTCxVQUFJQTtBQURBLEtBRlU7QUFLaEJHLFlBQVE7QUFMUSxHQUFYLENBQVA7QUFPRCxDQVJNIiwiZmlsZSI6InVzZXJJbmZvLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIENyZWF0ZWQgYnkgQWRtaW5pc3RyYXRvciBvbiAyMDE3LzgvMTAgMDAxMC5cclxuICovXHJcbmltcG9ydCBqZiBmcm9tICcuLi91dGlscy9qZidcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRPdGhlclVzZXJJbmZvID0gZnVuY3Rpb24gKGlkKSB7XHJcbiAgcmV0dXJuIGpmLnJlcXVlc3Qoe1xyXG4gICAgYXBpOiBgYWNjb3VudHMvZGV0YWlsLyR7aWR9L2AsXHJcbiAgICBtZXRob2Q6ICdHRVQnXHJcbiAgfSlcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGdldE1zZ0xpc3QgPSBmdW5jdGlvbihpZCkge1xyXG4gIHJldHVybiBqZi5yZXF1ZXN0KHtcclxuICAgIGFwaTogYGFydGljbGUvZ2V0X2FydGljbGVfYnlfdXNlcl9pZC9gLFxyXG4gICAgZGF0YToge1xyXG4gICAgICBpZDogaWRcclxuICAgIH0sXHJcbiAgICBtZXRob2Q6ICdQT1NUJ1xyXG4gIH0pXHJcbn1cclxuIl19