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
    api: 'article/detail/' + pk + '/?token=' + token,
    method: 'GET'
  });
};

var uploadImages = exports.uploadImages = function uploadImages(imgs, token) {
  return _promise2.default.all(imgs.map(function (img) {
    return _jf2.default.upload({
      api: 'resources/up_f/',
      name: 'file',
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJvYXJkLmpzIl0sIm5hbWVzIjpbImJvYXJkUHVibGlzaCIsImluZm9zIiwicmVxdWVzdCIsImFwaSIsImRhdGEiLCJtZXRob2QiLCJhZGRSZWFkTnVtIiwiaWQiLCJ0b2tlbiIsInNlYXJjaExpc3QiLCJ2YWx1ZUlkIiwic2VhcmNoVmFsdWUiLCJzIiwiY2F0ZWdvcnlMaXN0IiwiYm9hcmRMaXN0IiwiY2F0ZWdvcnkiLCJib2FyZERldGFpbCIsInBrIiwidXBsb2FkSW1hZ2VzIiwiaW1ncyIsImFsbCIsIm1hcCIsInVwbG9hZCIsIm5hbWUiLCJmaWxlUGF0aCIsImltZyIsImZvcm1EYXRhIiwiZG93bmxvYWRJbWFnZSIsImltZ1VybCIsImRvd25sb2FkRmlsZSIsImRvd25sb2FkSW1hZ2VzIiwiaW1nVXJscyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7Ozs7O0FBRU8sSUFBTUEsc0NBQWUsU0FBZkEsWUFBZSxDQUFTQyxLQUFULEVBQWdCO0FBQzFDLFNBQU8sYUFBR0MsT0FBSCxDQUFXO0FBQ2hCQyxTQUFLLGlCQURXO0FBRWhCQyxxQ0FDS0gsS0FETCxDQUZnQjtBQUtoQkksWUFBUTtBQUxRLEdBQVgsQ0FBUDtBQU9ELENBUk07O0FBV0EsSUFBTUMsa0NBQWEsU0FBYkEsVUFBYSxDQUFTQyxFQUFULEVBQWFDLEtBQWIsRUFBb0I7QUFDNUMsU0FBTyxhQUFHTixPQUFILENBQVc7QUFDaEJDLFNBQUssdUJBRFc7QUFFaEJDLFVBQU07QUFDSkcsVUFBSUEsRUFEQTtBQUVKQyxhQUFPQTtBQUZILEtBRlU7QUFNaEJILFlBQVE7QUFOUSxHQUFYLENBQVA7QUFRRCxDQVRNOztBQVdBLElBQU1JLGtDQUFhLFNBQWJBLFVBQWEsQ0FBU0MsT0FBVCxFQUFrQkMsV0FBbEIsRUFBK0I7QUFDdkQsU0FBTyxhQUFHVCxPQUFILENBQVc7QUFDaEJDLFNBQUssMEJBRFc7QUFFaEJDLFVBQU07QUFDSkcsVUFBSUcsT0FEQTtBQUVKRSxTQUFHRDtBQUZDLEtBRlU7QUFNaEJOLFlBQVE7QUFOUSxHQUFYLENBQVA7QUFRRCxDQVRNOztBQVdBLElBQU1RLHNDQUFlLFNBQWZBLFlBQWUsR0FBVztBQUNyQyxTQUFPLGFBQUdYLE9BQUgsQ0FBVztBQUNoQkMsU0FBSyx3QkFEVztBQUVoQkUsWUFBUTtBQUZRLEdBQVgsQ0FBUDtBQUlELENBTE07QUFNQSxJQUFNUyxnQ0FBWSxTQUFaQSxTQUFZLENBQVNDLFFBQVQsRUFBbUI7QUFDMUM7QUFDRSxTQUFPLGFBQUdiLE9BQUgsQ0FBVztBQUNoQkMscUNBQStCWSxRQUEvQixNQURnQjtBQUVoQlYsWUFBUTtBQUZRLEdBQVgsQ0FBUDtBQUlGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0QsQ0FiTTs7QUFlQSxJQUFNVyxvQ0FBYyxTQUFkQSxXQUFjLENBQVNDLEVBQVQsRUFBYVQsS0FBYixFQUFvQjtBQUM3QyxTQUFPLGFBQUdOLE9BQUgsQ0FBVztBQUNoQkMsNkJBQXVCYyxFQUF2QixnQkFBb0NULEtBRHBCO0FBRWhCSCxZQUFRO0FBRlEsR0FBWCxDQUFQO0FBSUQsQ0FMTTs7QUFPQSxJQUFNYSxzQ0FBZSxTQUFmQSxZQUFlLENBQVVDLElBQVYsRUFBZ0JYLEtBQWhCLEVBQXVCO0FBQ2pELFNBQU8sa0JBQVFZLEdBQVIsQ0FBWUQsS0FBS0UsR0FBTCxDQUFTO0FBQUEsV0FBTyxhQUFHQyxNQUFILENBQVU7QUFDM0NuQixXQUFLLGlCQURzQztBQUUzQ29CLFlBQU0sTUFGcUM7QUFHM0NDLGdCQUFVQyxHQUhpQztBQUkzQ0MsZ0JBQVUsRUFBRWxCLE9BQU9BLEtBQVQ7QUFKaUMsS0FBVixDQUFQO0FBQUEsR0FBVCxDQUFaLENBQVA7QUFNRCxDQVBNOztBQVNBLElBQU1tQix3Q0FBZ0IsU0FBaEJBLGFBQWdCLENBQVVDLE1BQVYsRUFBa0I7QUFDN0MsU0FBTyxlQUFLQyxZQUFMLENBQWtCLEVBQUMsT0FBT0QsTUFBUixFQUFsQixDQUFQO0FBQ0QsQ0FGTTs7QUFJQSxJQUFNRSwwQ0FBaUIsU0FBakJBLGNBQWlCLENBQVVDLE9BQVYsRUFBbUI7QUFDL0MsU0FBTyxrQkFBUVgsR0FBUixDQUFZVyxRQUFRVixHQUFSLENBQVk7QUFBQSxXQUFVLGVBQUtRLFlBQUwsQ0FBa0JELE1BQWxCLENBQVY7QUFBQSxHQUFaLENBQVosQ0FBUDtBQUNELENBRk0iLCJmaWxlIjoiYm9hcmQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgamYgZnJvbSAnLi4vdXRpbHMvamYnXHJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXHJcblxyXG5leHBvcnQgY29uc3QgYm9hcmRQdWJsaXNoID0gZnVuY3Rpb24oaW5mb3MpIHtcclxuICByZXR1cm4gamYucmVxdWVzdCh7XHJcbiAgICBhcGk6ICdhcnRpY2xlL2NyZWF0ZS8nLFxyXG4gICAgZGF0YToge1xyXG4gICAgICAuLi5pbmZvc1xyXG4gICAgfSxcclxuICAgIG1ldGhvZDogJ1BPU1QnXHJcbiAgfSlcclxufVxyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBhZGRSZWFkTnVtID0gZnVuY3Rpb24oaWQsIHRva2VuKSB7XHJcbiAgcmV0dXJuIGpmLnJlcXVlc3Qoe1xyXG4gICAgYXBpOiAnYXJ0aWNsZS9hZGRfcmVhZF9udW0vJyxcclxuICAgIGRhdGE6IHtcclxuICAgICAgaWQ6IGlkLFxyXG4gICAgICB0b2tlbjogdG9rZW5cclxuICAgIH0sXHJcbiAgICBtZXRob2Q6ICdQT1NUJ1xyXG4gIH0pXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBzZWFyY2hMaXN0ID0gZnVuY3Rpb24odmFsdWVJZCwgc2VhcmNoVmFsdWUpIHtcclxuICByZXR1cm4gamYucmVxdWVzdCh7XHJcbiAgICBhcGk6ICdhcnRpY2xlL2NhdGVnb3J5L3NlYXJjaC8nLFxyXG4gICAgZGF0YToge1xyXG4gICAgICBpZDogdmFsdWVJZCxcclxuICAgICAgczogc2VhcmNoVmFsdWVcclxuICAgIH0sXHJcbiAgICBtZXRob2Q6ICdQT1NUJ1xyXG4gIH0pXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBjYXRlZ29yeUxpc3QgPSBmdW5jdGlvbigpIHtcclxuICByZXR1cm4gamYucmVxdWVzdCh7XHJcbiAgICBhcGk6ICdhcnRpY2xlL2NhdGVnb3J5L2xpc3QvJyxcclxuICAgIG1ldGhvZDogJ0dFVCdcclxuICB9KVxyXG59XHJcbmV4cG9ydCBjb25zdCBib2FyZExpc3QgPSBmdW5jdGlvbihjYXRlZ29yeSkge1xyXG4gIC8vIGlmICh0b2tlbikge1xyXG4gICAgcmV0dXJuIGpmLnJlcXVlc3Qoe1xyXG4gICAgICBhcGk6IGBhcnRpY2xlL3NjcmVlbl9hcnRpY2xlLyR7Y2F0ZWdvcnl9L2AsXHJcbiAgICAgIG1ldGhvZDogJ0dFVCdcclxuICAgIH0pXHJcbiAgLy8gfSBlbHNlIHtcclxuICAvLyAgIHRva2VuID0gY2F0ZWdvcnlcclxuICAvLyAgIHJldHVybiBqZi5yZXF1ZXN0KHtcclxuICAvLyAgICAgYXBpOiBgYXJ0aWNsZS9saXN0LyR7dG9rZW59L2AsXHJcbiAgLy8gICAgIG1ldGhvZDogJ0dFVCdcclxuICAvLyAgIH0pXHJcbiAgLy8gfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgYm9hcmREZXRhaWwgPSBmdW5jdGlvbihwaywgdG9rZW4pIHtcclxuICByZXR1cm4gamYucmVxdWVzdCh7XHJcbiAgICBhcGk6IGBhcnRpY2xlL2RldGFpbC8ke3BrfS8/dG9rZW49JHt0b2tlbn1gLFxyXG4gICAgbWV0aG9kOiAnR0VUJ1xyXG4gIH0pXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCB1cGxvYWRJbWFnZXMgPSBmdW5jdGlvbiAoaW1ncywgdG9rZW4pIHtcclxuICByZXR1cm4gUHJvbWlzZS5hbGwoaW1ncy5tYXAoaW1nID0+IGpmLnVwbG9hZCh7XHJcbiAgICBhcGk6ICdyZXNvdXJjZXMvdXBfZi8nLFxyXG4gICAgbmFtZTogJ2ZpbGUnLFxyXG4gICAgZmlsZVBhdGg6IGltZyxcclxuICAgIGZvcm1EYXRhOiB7IHRva2VuOiB0b2tlbiB9XHJcbiAgfSkpKVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgZG93bmxvYWRJbWFnZSA9IGZ1bmN0aW9uIChpbWdVcmwpIHtcclxuICByZXR1cm4gd2VweS5kb3dubG9hZEZpbGUoeyd1cmwnOiBpbWdVcmx9KVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgZG93bmxvYWRJbWFnZXMgPSBmdW5jdGlvbiAoaW1nVXJscykge1xyXG4gIHJldHVybiBQcm9taXNlLmFsbChpbWdVcmxzLm1hcChpbWdVcmwgPT4gd2VweS5kb3dubG9hZEZpbGUoaW1nVXJsKSkpXHJcbn1cclxuIl19