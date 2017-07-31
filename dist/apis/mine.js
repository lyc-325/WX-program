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
    api: 'accounts/detail/' + token + '/' + id,
    data: {},
    method: 'GET'
  });
}; /**
    * Created by Administrator on 2017/7/28 0028.
    */
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1pbmUuanMiXSwibmFtZXMiOlsiZ2V0VXNlckRhdGEiLCJ0b2tlbiIsImlkIiwicmVxdWVzdCIsImFwaSIsImRhdGEiLCJtZXRob2QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFHQTs7Ozs7O0FBRU8sSUFBTUEsb0NBQWMsU0FBZEEsV0FBYyxDQUFTQyxLQUFULEVBQWVDLEVBQWYsRUFBbUI7QUFDNUMsU0FBTyxhQUFHQyxPQUFILENBQVc7QUFDaEJDLDhCQUF3QkgsS0FBeEIsU0FBaUNDLEVBRGpCO0FBRWhCRyxVQUFNLEVBRlU7QUFHaEJDLFlBQVE7QUFIUSxHQUFYLENBQVA7QUFLRCxDQU5NLEMsQ0FMUCIsImZpbGUiOiJtaW5lLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBDcmVhdGVkIGJ5IEFkbWluaXN0cmF0b3Igb24gMjAxNy83LzI4IDAwMjguXG4gKi9cbmltcG9ydCBqZiBmcm9tICcuLi91dGlscy9qZidcblxuZXhwb3J0IGNvbnN0IGdldFVzZXJEYXRhID0gZnVuY3Rpb24odG9rZW4saWQpIHtcbiAgcmV0dXJuIGpmLnJlcXVlc3Qoe1xuICAgIGFwaTogYGFjY291bnRzL2RldGFpbC8ke3Rva2VufS8ke2lkfWAsXG4gICAgZGF0YToge30sXG4gICAgbWV0aG9kOiAnR0VUJ1xuICB9KVxufVxuXG4iXX0=