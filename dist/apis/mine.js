'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getUserData = undefined;

var _jf = require('./../utils/jf.js');

var _jf2 = _interopRequireDefault(_jf);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var getUserData = exports.getUserData = function getUserData(token, id) {
  return _jf2.default.request({
    api: '/accounts/detail/' + token + '/' + id,
    data: {},
    method: 'GET'
  });
}; /**
    * Created by Administrator on 2017/7/28 0028.
    */
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1pbmUuanMiXSwibmFtZXMiOlsiZ2V0VXNlckRhdGEiLCJ0b2tlbiIsImlkIiwicmVxdWVzdCIsImFwaSIsImRhdGEiLCJtZXRob2QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFHQTs7Ozs7O0FBRU8sSUFBTUEsb0NBQWMsU0FBZEEsV0FBYyxDQUFTQyxLQUFULEVBQWVDLEVBQWYsRUFBbUI7QUFDNUMsU0FBTyxhQUFHQyxPQUFILENBQVc7QUFDaEJDLCtCQUF5QkgsS0FBekIsU0FBa0NDLEVBRGxCO0FBRWhCRyxVQUFNLEVBRlU7QUFHaEJDLFlBQVE7QUFIUSxHQUFYLENBQVA7QUFLRCxDQU5NLEMsQ0FMUCIsImZpbGUiOiJtaW5lLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIENyZWF0ZWQgYnkgQWRtaW5pc3RyYXRvciBvbiAyMDE3LzcvMjggMDAyOC5cclxuICovXHJcbmltcG9ydCBqZiBmcm9tICcuLi91dGlscy9qZidcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRVc2VyRGF0YSA9IGZ1bmN0aW9uKHRva2VuLGlkKSB7XHJcbiAgcmV0dXJuIGpmLnJlcXVlc3Qoe1xyXG4gICAgYXBpOiBgL2FjY291bnRzL2RldGFpbC8ke3Rva2VufS8ke2lkfWAsXHJcbiAgICBkYXRhOiB7fSxcclxuICAgIG1ldGhvZDogJ0dFVCdcclxuICB9KVxyXG59XHJcblxyXG4iXX0=