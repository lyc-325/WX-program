'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.downloadImages = exports.downloadImage = exports.uploadImages = exports.boardDetail = exports.boardList = exports.categoryList = exports.addReadNum = exports.boardPublish = undefined;

var _promise = require('./../npm/babel-runtime/core-js/promise.js');

var _promise2 = _interopRequireDefault(_promise);

var _extends2 = require('./../npm/babel-runtime/helpers/extends.js');

var _extends3 = _interopRequireDefault(_extends2);

var _jf = require('./../utils/jf.js');

var _jf2 = _interopRequireDefault(_jf);

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var boardPublish = exports.boardPublish = function boardPublish(infos) {
  return _jf2.default.request({
    api: 'article/create/',
    data: (0, _extends3.default)({}, infos),
    method: 'POST'
  });
};

var addReadNum = exports.addReadNum = function addReadNum(id, token) {
  return _jf2.default.request({
    api: 'article/add_read_num/',
    data: {
      id: id,
      token: token.data
    },
    method: 'POST'
  });
};
var categoryList = exports.categoryList = function categoryList() {
  return _jf2.default.request({
    api: 'article/category/list/',
    method: 'GET'
  });
};
var boardList = exports.boardList = function boardList(category, token) {
  if (token) {
    return _jf2.default.request({
      api: 'article/screen_article/' + category + '/' + token + '/',
      method: 'GET'
    });
  } else {
    token = category;
    return _jf2.default.request({
      api: 'article/list/' + token + '/',
      method: 'GET'
    });
  }
};

var boardDetail = exports.boardDetail = function boardDetail(pk, token) {
  return _jf2.default.request({
    api: 'article/detail/' + token + '/' + pk + '/',
    method: 'GET'
  });
};

var uploadImages = exports.uploadImages = function uploadImages(imgs, token) {
  return _promise2.default.all(imgs.map(function (img) {
    return _jf2.default.upload({
      api: 'resources/up_f/',
      name: 'boardImg',
      filePath: img,
      formData: { token: token }
    });
  }));
};

var downloadImage = exports.downloadImage = function downloadImage(imgUrl) {
  return _wepy2.default.downloadFile({ 'url': imgUrl });
};

var downloadImages = exports.downloadImages = function downloadImages(imgUrls) {
  return _promise2.default.all(imgUrls.map(function (imgUrl) {
    return _wepy2.default.downloadFile(imgUrl);
  }));
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJvYXJkLmpzIl0sIm5hbWVzIjpbImJvYXJkUHVibGlzaCIsImluZm9zIiwicmVxdWVzdCIsImFwaSIsImRhdGEiLCJtZXRob2QiLCJhZGRSZWFkTnVtIiwiaWQiLCJ0b2tlbiIsImNhdGVnb3J5TGlzdCIsImJvYXJkTGlzdCIsImNhdGVnb3J5IiwiYm9hcmREZXRhaWwiLCJwayIsInVwbG9hZEltYWdlcyIsImltZ3MiLCJhbGwiLCJtYXAiLCJ1cGxvYWQiLCJuYW1lIiwiZmlsZVBhdGgiLCJpbWciLCJmb3JtRGF0YSIsImRvd25sb2FkSW1hZ2UiLCJpbWdVcmwiLCJkb3dubG9hZEZpbGUiLCJkb3dubG9hZEltYWdlcyIsImltZ1VybHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7OztBQUVPLElBQU1BLHNDQUFlLFNBQWZBLFlBQWUsQ0FBU0MsS0FBVCxFQUFnQjtBQUMxQyxTQUFPLGFBQUdDLE9BQUgsQ0FBVztBQUNoQkMsU0FBSyxpQkFEVztBQUVoQkMscUNBQ0tILEtBREwsQ0FGZ0I7QUFLaEJJLFlBQVE7QUFMUSxHQUFYLENBQVA7QUFPRCxDQVJNOztBQVdBLElBQU1DLGtDQUFhLFNBQWJBLFVBQWEsQ0FBU0MsRUFBVCxFQUFhQyxLQUFiLEVBQW9CO0FBQzVDLFNBQU8sYUFBR04sT0FBSCxDQUFXO0FBQ2hCQyxTQUFLLHVCQURXO0FBRWhCQyxVQUFNO0FBQ0pHLFVBQUlBLEVBREE7QUFFSkMsYUFBT0EsTUFBTUo7QUFGVCxLQUZVO0FBTWhCQyxZQUFRO0FBTlEsR0FBWCxDQUFQO0FBUUQsQ0FUTTtBQVVBLElBQU1JLHNDQUFlLFNBQWZBLFlBQWUsR0FBVztBQUNyQyxTQUFPLGFBQUdQLE9BQUgsQ0FBVztBQUNoQkMsU0FBSyx3QkFEVztBQUVoQkUsWUFBUTtBQUZRLEdBQVgsQ0FBUDtBQUlELENBTE07QUFNQSxJQUFNSyxnQ0FBWSxTQUFaQSxTQUFZLENBQVNDLFFBQVQsRUFBbUJILEtBQW5CLEVBQTBCO0FBQ2pELE1BQUlBLEtBQUosRUFBVztBQUNULFdBQU8sYUFBR04sT0FBSCxDQUFXO0FBQ2hCQyx1Q0FBK0JRLFFBQS9CLFNBQTJDSCxLQUEzQyxNQURnQjtBQUVoQkgsY0FBUTtBQUZRLEtBQVgsQ0FBUDtBQUlELEdBTEQsTUFLTztBQUNMRyxZQUFRRyxRQUFSO0FBQ0EsV0FBTyxhQUFHVCxPQUFILENBQVc7QUFDaEJDLDZCQUFxQkssS0FBckIsTUFEZ0I7QUFFaEJILGNBQVE7QUFGUSxLQUFYLENBQVA7QUFJRDtBQUNGLENBYk07O0FBZUEsSUFBTU8sb0NBQWMsU0FBZEEsV0FBYyxDQUFTQyxFQUFULEVBQWFMLEtBQWIsRUFBb0I7QUFDN0MsU0FBTyxhQUFHTixPQUFILENBQVc7QUFDaEJDLDZCQUF1QkssS0FBdkIsU0FBZ0NLLEVBQWhDLE1BRGdCO0FBRWhCUixZQUFRO0FBRlEsR0FBWCxDQUFQO0FBSUQsQ0FMTTs7QUFPQSxJQUFNUyxzQ0FBZSxTQUFmQSxZQUFlLENBQVVDLElBQVYsRUFBZ0JQLEtBQWhCLEVBQXVCO0FBQ2pELFNBQU8sa0JBQVFRLEdBQVIsQ0FBWUQsS0FBS0UsR0FBTCxDQUFTO0FBQUEsV0FBTyxhQUFHQyxNQUFILENBQVU7QUFDM0NmLFdBQUssaUJBRHNDO0FBRTNDZ0IsWUFBTSxVQUZxQztBQUczQ0MsZ0JBQVVDLEdBSGlDO0FBSTNDQyxnQkFBVSxFQUFFZCxPQUFPQSxLQUFUO0FBSmlDLEtBQVYsQ0FBUDtBQUFBLEdBQVQsQ0FBWixDQUFQO0FBTUQsQ0FQTTs7QUFTQSxJQUFNZSx3Q0FBZ0IsU0FBaEJBLGFBQWdCLENBQVVDLE1BQVYsRUFBa0I7QUFDN0MsU0FBTyxlQUFLQyxZQUFMLENBQWtCLEVBQUMsT0FBT0QsTUFBUixFQUFsQixDQUFQO0FBQ0QsQ0FGTTs7QUFJQSxJQUFNRSwwQ0FBaUIsU0FBakJBLGNBQWlCLENBQVVDLE9BQVYsRUFBbUI7QUFDL0MsU0FBTyxrQkFBUVgsR0FBUixDQUFZVyxRQUFRVixHQUFSLENBQVk7QUFBQSxXQUFVLGVBQUtRLFlBQUwsQ0FBa0JELE1BQWxCLENBQVY7QUFBQSxHQUFaLENBQVosQ0FBUDtBQUNELENBRk0iLCJmaWxlIjoiYm9hcmQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgamYgZnJvbSAnLi4vdXRpbHMvamYnXG5pbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuXG5leHBvcnQgY29uc3QgYm9hcmRQdWJsaXNoID0gZnVuY3Rpb24oaW5mb3MpIHtcbiAgcmV0dXJuIGpmLnJlcXVlc3Qoe1xuICAgIGFwaTogJ2FydGljbGUvY3JlYXRlLycsXG4gICAgZGF0YToge1xuICAgICAgLi4uaW5mb3NcbiAgICB9LFxuICAgIG1ldGhvZDogJ1BPU1QnXG4gIH0pXG59XG5cblxuZXhwb3J0IGNvbnN0IGFkZFJlYWROdW0gPSBmdW5jdGlvbihpZCwgdG9rZW4pIHtcbiAgcmV0dXJuIGpmLnJlcXVlc3Qoe1xuICAgIGFwaTogJ2FydGljbGUvYWRkX3JlYWRfbnVtLycsXG4gICAgZGF0YToge1xuICAgICAgaWQ6IGlkLFxuICAgICAgdG9rZW46IHRva2VuLmRhdGFcbiAgICB9LFxuICAgIG1ldGhvZDogJ1BPU1QnXG4gIH0pXG59XG5leHBvcnQgY29uc3QgY2F0ZWdvcnlMaXN0ID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiBqZi5yZXF1ZXN0KHtcbiAgICBhcGk6ICdhcnRpY2xlL2NhdGVnb3J5L2xpc3QvJyxcbiAgICBtZXRob2Q6ICdHRVQnXG4gIH0pXG59XG5leHBvcnQgY29uc3QgYm9hcmRMaXN0ID0gZnVuY3Rpb24oY2F0ZWdvcnksIHRva2VuKSB7XG4gIGlmICh0b2tlbikge1xuICAgIHJldHVybiBqZi5yZXF1ZXN0KHtcbiAgICAgIGFwaTogYGFydGljbGUvc2NyZWVuX2FydGljbGUvJHtjYXRlZ29yeX0vJHt0b2tlbn0vYCxcbiAgICAgIG1ldGhvZDogJ0dFVCdcbiAgICB9KVxuICB9IGVsc2Uge1xuICAgIHRva2VuID0gY2F0ZWdvcnlcbiAgICByZXR1cm4gamYucmVxdWVzdCh7XG4gICAgICBhcGk6IGBhcnRpY2xlL2xpc3QvJHt0b2tlbn0vYCxcbiAgICAgIG1ldGhvZDogJ0dFVCdcbiAgICB9KVxuICB9XG59XG5cbmV4cG9ydCBjb25zdCBib2FyZERldGFpbCA9IGZ1bmN0aW9uKHBrLCB0b2tlbikge1xuICByZXR1cm4gamYucmVxdWVzdCh7XG4gICAgYXBpOiBgYXJ0aWNsZS9kZXRhaWwvJHt0b2tlbn0vJHtwa30vYCxcbiAgICBtZXRob2Q6ICdHRVQnXG4gIH0pXG59XG5cbmV4cG9ydCBjb25zdCB1cGxvYWRJbWFnZXMgPSBmdW5jdGlvbiAoaW1ncywgdG9rZW4pIHtcbiAgcmV0dXJuIFByb21pc2UuYWxsKGltZ3MubWFwKGltZyA9PiBqZi51cGxvYWQoe1xuICAgIGFwaTogJ3Jlc291cmNlcy91cF9mLycsXG4gICAgbmFtZTogJ2JvYXJkSW1nJyxcbiAgICBmaWxlUGF0aDogaW1nLFxuICAgIGZvcm1EYXRhOiB7IHRva2VuOiB0b2tlbiB9XG4gIH0pKSlcbn1cblxuZXhwb3J0IGNvbnN0IGRvd25sb2FkSW1hZ2UgPSBmdW5jdGlvbiAoaW1nVXJsKSB7XG4gIHJldHVybiB3ZXB5LmRvd25sb2FkRmlsZSh7J3VybCc6IGltZ1VybH0pXG59XG5cbmV4cG9ydCBjb25zdCBkb3dubG9hZEltYWdlcyA9IGZ1bmN0aW9uIChpbWdVcmxzKSB7XG4gIHJldHVybiBQcm9taXNlLmFsbChpbWdVcmxzLm1hcChpbWdVcmwgPT4gd2VweS5kb3dubG9hZEZpbGUoaW1nVXJsKSkpXG59XG4iXX0=