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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVzZXJJbmZvLmpzIl0sIm5hbWVzIjpbImdldE90aGVyVXNlckluZm8iLCJpZCIsInJlcXVlc3QiLCJhcGkiLCJtZXRob2QiLCJnZXRNc2dMaXN0IiwiZGF0YSJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUdBOzs7Ozs7QUFFTyxJQUFNQSw4Q0FBbUIsU0FBbkJBLGdCQUFtQixDQUFVQyxFQUFWLEVBQWM7QUFDNUMsU0FBTyxhQUFHQyxPQUFILENBQVc7QUFDaEJDLDhCQUF3QkYsRUFBeEIsTUFEZ0I7QUFFaEJHLFlBQVE7QUFGUSxHQUFYLENBQVA7QUFJRCxDQUxNLEMsQ0FMUDs7O0FBWU8sSUFBTUMsa0NBQWEsU0FBYkEsVUFBYSxDQUFTSixFQUFULEVBQWE7QUFDckMsU0FBTyxhQUFHQyxPQUFILENBQVc7QUFDaEJDLDBDQURnQjtBQUVoQkcsVUFBTTtBQUNKTCxVQUFJQTtBQURBLEtBRlU7QUFLaEJHLFlBQVE7QUFMUSxHQUFYLENBQVA7QUFPRCxDQVJNIiwiZmlsZSI6InVzZXJJbmZvLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBDcmVhdGVkIGJ5IEFkbWluaXN0cmF0b3Igb24gMjAxNy84LzEwIDAwMTAuXG4gKi9cbmltcG9ydCBqZiBmcm9tICcuLi91dGlscy9qZidcblxuZXhwb3J0IGNvbnN0IGdldE90aGVyVXNlckluZm8gPSBmdW5jdGlvbiAoaWQpIHtcbiAgcmV0dXJuIGpmLnJlcXVlc3Qoe1xuICAgIGFwaTogYGFjY291bnRzL2RldGFpbC8ke2lkfS9gLFxuICAgIG1ldGhvZDogJ0dFVCdcbiAgfSlcbn1cblxuZXhwb3J0IGNvbnN0IGdldE1zZ0xpc3QgPSBmdW5jdGlvbihpZCkge1xuICByZXR1cm4gamYucmVxdWVzdCh7XG4gICAgYXBpOiBgYXJ0aWNsZS9nZXRfYXJ0aWNsZV9ieV91c2VyX2lkL2AsXG4gICAgZGF0YToge1xuICAgICAgaWQ6IGlkXG4gICAgfSxcbiAgICBtZXRob2Q6ICdQT1NUJ1xuICB9KVxufVxuIl19