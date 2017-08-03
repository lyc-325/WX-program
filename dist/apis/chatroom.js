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
    api: 'chat_room/' + id + '/detail/',
    data: {},
    method: 'GET'
  });
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoYXRyb29tLmpzIl0sIm5hbWVzIjpbImdldExpc3QiLCJyZXF1ZXN0IiwiYXBpIiwiZGF0YSIsIm1ldGhvZCIsImdldE9uZUJ5SWQiLCJpZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOzs7Ozs7QUFFTyxJQUFNQSw0QkFBVSxTQUFWQSxPQUFVLEdBQVc7QUFDaEMsU0FBTyxhQUFHQyxPQUFILENBQVc7QUFDaEJDLFNBQUssaUJBRFc7QUFFaEJDLFVBQU0sRUFGVTtBQUdoQkMsWUFBUTtBQUhRLEdBQVgsQ0FBUDtBQUtELENBTk07O0FBUUEsSUFBTUMsa0NBQWEsU0FBYkEsVUFBYSxDQUFTQyxFQUFULEVBQWE7QUFDckMsU0FBTyxhQUFHTCxPQUFILENBQVc7QUFDaEJDLHdCQUFrQkksRUFBbEIsYUFEZ0I7QUFFaEJILFVBQU0sRUFGVTtBQUdoQkMsWUFBUTtBQUhRLEdBQVgsQ0FBUDtBQUtELENBTk0iLCJmaWxlIjoiY2hhdHJvb20uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgamYgZnJvbSAnLi4vdXRpbHMvamYnXG5cbmV4cG9ydCBjb25zdCBnZXRMaXN0ID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiBqZi5yZXF1ZXN0KHtcbiAgICBhcGk6ICdjaGF0X3Jvb20vbGlzdC8nLFxuICAgIGRhdGE6IHt9LFxuICAgIG1ldGhvZDogJ0dFVCdcbiAgfSlcbn1cblxuZXhwb3J0IGNvbnN0IGdldE9uZUJ5SWQgPSBmdW5jdGlvbihpZCkge1xuICByZXR1cm4gamYucmVxdWVzdCh7XG4gICAgYXBpOiBgY2hhdF9yb29tLyR7aWR9L2RldGFpbC9gLFxuICAgIGRhdGE6IHt9LFxuICAgIG1ldGhvZDogJ0dFVCdcbiAgfSlcbn1cbiJdfQ==