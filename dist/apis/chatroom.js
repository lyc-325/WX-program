'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getOneById = exports.getList = undefined;

var _jf = require('./../utils/jf.js');

var _jf2 = _interopRequireDefault(_jf);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var getList = exports.getList = function getList() {
  return _jf2.default.request({
    api: 'chat_room/list/',
    data: {},
    method: 'GET'
  });
};

var getOneById = exports.getOneById = function getOneById(id) {
  return _jf2.default.request({
    api: 'chat_room/{id}/detail/',
    data: {},
    method: 'GET'
  });
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoYXRyb29tLmpzIl0sIm5hbWVzIjpbImdldExpc3QiLCJyZXF1ZXN0IiwiYXBpIiwiZGF0YSIsIm1ldGhvZCIsImdldE9uZUJ5SWQiLCJpZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOzs7Ozs7QUFFTyxJQUFNQSw0QkFBVSxTQUFWQSxPQUFVLEdBQVc7QUFDaEMsU0FBTyxhQUFHQyxPQUFILENBQVc7QUFDaEJDLFNBQUssaUJBRFc7QUFFaEJDLFVBQU0sRUFGVTtBQUdoQkMsWUFBUTtBQUhRLEdBQVgsQ0FBUDtBQUtELENBTk07O0FBUUEsSUFBTUMsa0NBQWEsU0FBYkEsVUFBYSxDQUFTQyxFQUFULEVBQWE7QUFDckMsU0FBTyxhQUFHTCxPQUFILENBQVc7QUFDaEJDLGlDQURnQjtBQUVoQkMsVUFBTSxFQUZVO0FBR2hCQyxZQUFRO0FBSFEsR0FBWCxDQUFQO0FBS0QsQ0FOTSIsImZpbGUiOiJjaGF0cm9vbS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBqZiBmcm9tICcuLi91dGlscy9qZidcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRMaXN0ID0gZnVuY3Rpb24oKSB7XHJcbiAgcmV0dXJuIGpmLnJlcXVlc3Qoe1xyXG4gICAgYXBpOiAnY2hhdF9yb29tL2xpc3QvJyxcclxuICAgIGRhdGE6IHt9LFxyXG4gICAgbWV0aG9kOiAnR0VUJ1xyXG4gIH0pXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBnZXRPbmVCeUlkID0gZnVuY3Rpb24oaWQpIHtcclxuICByZXR1cm4gamYucmVxdWVzdCh7XHJcbiAgICBhcGk6IGBjaGF0X3Jvb20ve2lkfS9kZXRhaWwvYCxcclxuICAgIGRhdGE6IHt9LFxyXG4gICAgbWV0aG9kOiAnR0VUJ1xyXG4gIH0pXHJcbn1cclxuIl19