'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.downloadImages = exports.downloadImage = exports.uploadImages = exports.boardDetail = exports.boardList = exports.categoryList = exports.searchList = exports.addReadNum = exports.boardPublish = undefined;

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
      token: token
    },
    method: 'POST'
  });
};

var searchList = exports.searchList = function searchList(valueId, searchValue) {
  return _jf2.default.request({
    api: 'article/category/search/',
    data: {
      id: valueId,
      s: searchValue
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
var boardList = exports.boardList = function boardList(category) {
  // if (token) {
  return _jf2.default.request({
    api: 'article/screen_article/' + category + '/',
    method: 'GET'
  });
  // } else {
  //   token = category
  //   return jf.request({
  //     api: `article/list/${token}/`,
  //     method: 'GET'
  //   })
  // }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJvYXJkLmpzIl0sIm5hbWVzIjpbImJvYXJkUHVibGlzaCIsImluZm9zIiwicmVxdWVzdCIsImFwaSIsImRhdGEiLCJtZXRob2QiLCJhZGRSZWFkTnVtIiwiaWQiLCJ0b2tlbiIsInNlYXJjaExpc3QiLCJ2YWx1ZUlkIiwic2VhcmNoVmFsdWUiLCJzIiwiY2F0ZWdvcnlMaXN0IiwiYm9hcmRMaXN0IiwiY2F0ZWdvcnkiLCJib2FyZERldGFpbCIsInBrIiwidXBsb2FkSW1hZ2VzIiwiaW1ncyIsImFsbCIsIm1hcCIsInVwbG9hZCIsIm5hbWUiLCJmaWxlUGF0aCIsImltZyIsImZvcm1EYXRhIiwiZG93bmxvYWRJbWFnZSIsImltZ1VybCIsImRvd25sb2FkRmlsZSIsImRvd25sb2FkSW1hZ2VzIiwiaW1nVXJscyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7Ozs7O0FBRU8sSUFBTUEsc0NBQWUsU0FBZkEsWUFBZSxDQUFTQyxLQUFULEVBQWdCO0FBQzFDLFNBQU8sYUFBR0MsT0FBSCxDQUFXO0FBQ2hCQyxTQUFLLGlCQURXO0FBRWhCQyxxQ0FDS0gsS0FETCxDQUZnQjtBQUtoQkksWUFBUTtBQUxRLEdBQVgsQ0FBUDtBQU9ELENBUk07O0FBV0EsSUFBTUMsa0NBQWEsU0FBYkEsVUFBYSxDQUFTQyxFQUFULEVBQWFDLEtBQWIsRUFBb0I7QUFDNUMsU0FBTyxhQUFHTixPQUFILENBQVc7QUFDaEJDLFNBQUssdUJBRFc7QUFFaEJDLFVBQU07QUFDSkcsVUFBSUEsRUFEQTtBQUVKQyxhQUFPQTtBQUZILEtBRlU7QUFNaEJILFlBQVE7QUFOUSxHQUFYLENBQVA7QUFRRCxDQVRNOztBQVdBLElBQU1JLGtDQUFhLFNBQWJBLFVBQWEsQ0FBU0MsT0FBVCxFQUFrQkMsV0FBbEIsRUFBK0I7QUFDdkQsU0FBTyxhQUFHVCxPQUFILENBQVc7QUFDaEJDLFNBQUssMEJBRFc7QUFFaEJDLFVBQU07QUFDSkcsVUFBSUcsT0FEQTtBQUVKRSxTQUFHRDtBQUZDLEtBRlU7QUFNaEJOLFlBQVE7QUFOUSxHQUFYLENBQVA7QUFRRCxDQVRNOztBQVdBLElBQU1RLHNDQUFlLFNBQWZBLFlBQWUsR0FBVztBQUNyQyxTQUFPLGFBQUdYLE9BQUgsQ0FBVztBQUNoQkMsU0FBSyx3QkFEVztBQUVoQkUsWUFBUTtBQUZRLEdBQVgsQ0FBUDtBQUlELENBTE07QUFNQSxJQUFNUyxnQ0FBWSxTQUFaQSxTQUFZLENBQVNDLFFBQVQsRUFBbUI7QUFDMUM7QUFDRSxTQUFPLGFBQUdiLE9BQUgsQ0FBVztBQUNoQkMscUNBQStCWSxRQUEvQixNQURnQjtBQUVoQlYsWUFBUTtBQUZRLEdBQVgsQ0FBUDtBQUlGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0QsQ0FiTTs7QUFlQSxJQUFNVyxvQ0FBYyxTQUFkQSxXQUFjLENBQVNDLEVBQVQsRUFBYVQsS0FBYixFQUFvQjtBQUM3QyxTQUFPLGFBQUdOLE9BQUgsQ0FBVztBQUNoQkMsNkJBQXVCSyxLQUF2QixTQUFnQ1MsRUFBaEMsTUFEZ0I7QUFFaEJaLFlBQVE7QUFGUSxHQUFYLENBQVA7QUFJRCxDQUxNOztBQU9BLElBQU1hLHNDQUFlLFNBQWZBLFlBQWUsQ0FBVUMsSUFBVixFQUFnQlgsS0FBaEIsRUFBdUI7QUFDakQsU0FBTyxrQkFBUVksR0FBUixDQUFZRCxLQUFLRSxHQUFMLENBQVM7QUFBQSxXQUFPLGFBQUdDLE1BQUgsQ0FBVTtBQUMzQ25CLFdBQUssaUJBRHNDO0FBRTNDb0IsWUFBTSxVQUZxQztBQUczQ0MsZ0JBQVVDLEdBSGlDO0FBSTNDQyxnQkFBVSxFQUFFbEIsT0FBT0EsS0FBVDtBQUppQyxLQUFWLENBQVA7QUFBQSxHQUFULENBQVosQ0FBUDtBQU1ELENBUE07O0FBU0EsSUFBTW1CLHdDQUFnQixTQUFoQkEsYUFBZ0IsQ0FBVUMsTUFBVixFQUFrQjtBQUM3QyxTQUFPLGVBQUtDLFlBQUwsQ0FBa0IsRUFBQyxPQUFPRCxNQUFSLEVBQWxCLENBQVA7QUFDRCxDQUZNOztBQUlBLElBQU1FLDBDQUFpQixTQUFqQkEsY0FBaUIsQ0FBVUMsT0FBVixFQUFtQjtBQUMvQyxTQUFPLGtCQUFRWCxHQUFSLENBQVlXLFFBQVFWLEdBQVIsQ0FBWTtBQUFBLFdBQVUsZUFBS1EsWUFBTCxDQUFrQkQsTUFBbEIsQ0FBVjtBQUFBLEdBQVosQ0FBWixDQUFQO0FBQ0QsQ0FGTSIsImZpbGUiOiJib2FyZC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBqZiBmcm9tICcuLi91dGlscy9qZidcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG5cbmV4cG9ydCBjb25zdCBib2FyZFB1Ymxpc2ggPSBmdW5jdGlvbihpbmZvcykge1xuICByZXR1cm4gamYucmVxdWVzdCh7XG4gICAgYXBpOiAnYXJ0aWNsZS9jcmVhdGUvJyxcbiAgICBkYXRhOiB7XG4gICAgICAuLi5pbmZvc1xuICAgIH0sXG4gICAgbWV0aG9kOiAnUE9TVCdcbiAgfSlcbn1cblxuXG5leHBvcnQgY29uc3QgYWRkUmVhZE51bSA9IGZ1bmN0aW9uKGlkLCB0b2tlbikge1xuICByZXR1cm4gamYucmVxdWVzdCh7XG4gICAgYXBpOiAnYXJ0aWNsZS9hZGRfcmVhZF9udW0vJyxcbiAgICBkYXRhOiB7XG4gICAgICBpZDogaWQsXG4gICAgICB0b2tlbjogdG9rZW5cbiAgICB9LFxuICAgIG1ldGhvZDogJ1BPU1QnXG4gIH0pXG59XG5cbmV4cG9ydCBjb25zdCBzZWFyY2hMaXN0ID0gZnVuY3Rpb24odmFsdWVJZCwgc2VhcmNoVmFsdWUpIHtcbiAgcmV0dXJuIGpmLnJlcXVlc3Qoe1xuICAgIGFwaTogJ2FydGljbGUvY2F0ZWdvcnkvc2VhcmNoLycsXG4gICAgZGF0YToge1xuICAgICAgaWQ6IHZhbHVlSWQsXG4gICAgICBzOiBzZWFyY2hWYWx1ZVxuICAgIH0sXG4gICAgbWV0aG9kOiAnUE9TVCdcbiAgfSlcbn1cblxuZXhwb3J0IGNvbnN0IGNhdGVnb3J5TGlzdCA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gamYucmVxdWVzdCh7XG4gICAgYXBpOiAnYXJ0aWNsZS9jYXRlZ29yeS9saXN0LycsXG4gICAgbWV0aG9kOiAnR0VUJ1xuICB9KVxufVxuZXhwb3J0IGNvbnN0IGJvYXJkTGlzdCA9IGZ1bmN0aW9uKGNhdGVnb3J5KSB7XG4gIC8vIGlmICh0b2tlbikge1xuICAgIHJldHVybiBqZi5yZXF1ZXN0KHtcbiAgICAgIGFwaTogYGFydGljbGUvc2NyZWVuX2FydGljbGUvJHtjYXRlZ29yeX0vYCxcbiAgICAgIG1ldGhvZDogJ0dFVCdcbiAgICB9KVxuICAvLyB9IGVsc2Uge1xuICAvLyAgIHRva2VuID0gY2F0ZWdvcnlcbiAgLy8gICByZXR1cm4gamYucmVxdWVzdCh7XG4gIC8vICAgICBhcGk6IGBhcnRpY2xlL2xpc3QvJHt0b2tlbn0vYCxcbiAgLy8gICAgIG1ldGhvZDogJ0dFVCdcbiAgLy8gICB9KVxuICAvLyB9XG59XG5cbmV4cG9ydCBjb25zdCBib2FyZERldGFpbCA9IGZ1bmN0aW9uKHBrLCB0b2tlbikge1xuICByZXR1cm4gamYucmVxdWVzdCh7XG4gICAgYXBpOiBgYXJ0aWNsZS9kZXRhaWwvJHt0b2tlbn0vJHtwa30vYCxcbiAgICBtZXRob2Q6ICdHRVQnXG4gIH0pXG59XG5cbmV4cG9ydCBjb25zdCB1cGxvYWRJbWFnZXMgPSBmdW5jdGlvbiAoaW1ncywgdG9rZW4pIHtcbiAgcmV0dXJuIFByb21pc2UuYWxsKGltZ3MubWFwKGltZyA9PiBqZi51cGxvYWQoe1xuICAgIGFwaTogJ3Jlc291cmNlcy91cF9mLycsXG4gICAgbmFtZTogJ2JvYXJkSW1nJyxcbiAgICBmaWxlUGF0aDogaW1nLFxuICAgIGZvcm1EYXRhOiB7IHRva2VuOiB0b2tlbiB9XG4gIH0pKSlcbn1cblxuZXhwb3J0IGNvbnN0IGRvd25sb2FkSW1hZ2UgPSBmdW5jdGlvbiAoaW1nVXJsKSB7XG4gIHJldHVybiB3ZXB5LmRvd25sb2FkRmlsZSh7J3VybCc6IGltZ1VybH0pXG59XG5cbmV4cG9ydCBjb25zdCBkb3dubG9hZEltYWdlcyA9IGZ1bmN0aW9uIChpbWdVcmxzKSB7XG4gIHJldHVybiBQcm9taXNlLmFsbChpbWdVcmxzLm1hcChpbWdVcmwgPT4gd2VweS5kb3dubG9hZEZpbGUoaW1nVXJsKSkpXG59XG4iXX0=