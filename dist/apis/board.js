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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJvYXJkLmpzIl0sIm5hbWVzIjpbImJvYXJkUHVibGlzaCIsImluZm9zIiwicmVxdWVzdCIsImFwaSIsImRhdGEiLCJtZXRob2QiLCJhZGRSZWFkTnVtIiwiaWQiLCJ0b2tlbiIsInNlYXJjaExpc3QiLCJ2YWx1ZUlkIiwic2VhcmNoVmFsdWUiLCJzIiwiY2F0ZWdvcnlMaXN0IiwiYm9hcmRMaXN0IiwiY2F0ZWdvcnkiLCJib2FyZERldGFpbCIsInBrIiwidXBsb2FkSW1hZ2VzIiwiaW1ncyIsImFsbCIsIm1hcCIsInVwbG9hZCIsIm5hbWUiLCJmaWxlUGF0aCIsImltZyIsImZvcm1EYXRhIiwiZG93bmxvYWRJbWFnZSIsImltZ1VybCIsImRvd25sb2FkRmlsZSIsImRvd25sb2FkSW1hZ2VzIiwiaW1nVXJscyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7Ozs7O0FBRU8sSUFBTUEsc0NBQWUsU0FBZkEsWUFBZSxDQUFTQyxLQUFULEVBQWdCO0FBQzFDLFNBQU8sYUFBR0MsT0FBSCxDQUFXO0FBQ2hCQyxTQUFLLGlCQURXO0FBRWhCQyxxQ0FDS0gsS0FETCxDQUZnQjtBQUtoQkksWUFBUTtBQUxRLEdBQVgsQ0FBUDtBQU9ELENBUk07O0FBV0EsSUFBTUMsa0NBQWEsU0FBYkEsVUFBYSxDQUFTQyxFQUFULEVBQWFDLEtBQWIsRUFBb0I7QUFDNUMsU0FBTyxhQUFHTixPQUFILENBQVc7QUFDaEJDLFNBQUssdUJBRFc7QUFFaEJDLFVBQU07QUFDSkcsVUFBSUEsRUFEQTtBQUVKQyxhQUFPQTtBQUZILEtBRlU7QUFNaEJILFlBQVE7QUFOUSxHQUFYLENBQVA7QUFRRCxDQVRNOztBQVdBLElBQU1JLGtDQUFhLFNBQWJBLFVBQWEsQ0FBU0MsT0FBVCxFQUFrQkMsV0FBbEIsRUFBK0I7QUFDdkQsU0FBTyxhQUFHVCxPQUFILENBQVc7QUFDaEJDLFNBQUssMEJBRFc7QUFFaEJDLFVBQU07QUFDSkcsVUFBSUcsT0FEQTtBQUVKRSxTQUFHRDtBQUZDLEtBRlU7QUFNaEJOLFlBQVE7QUFOUSxHQUFYLENBQVA7QUFRRCxDQVRNOztBQVdBLElBQU1RLHNDQUFlLFNBQWZBLFlBQWUsR0FBVztBQUNyQyxTQUFPLGFBQUdYLE9BQUgsQ0FBVztBQUNoQkMsU0FBSyx3QkFEVztBQUVoQkUsWUFBUTtBQUZRLEdBQVgsQ0FBUDtBQUlELENBTE07QUFNQSxJQUFNUyxnQ0FBWSxTQUFaQSxTQUFZLENBQVNDLFFBQVQsRUFBbUI7QUFDMUM7QUFDRSxTQUFPLGFBQUdiLE9BQUgsQ0FBVztBQUNoQkMscUNBQStCWSxRQUEvQixNQURnQjtBQUVoQlYsWUFBUTtBQUZRLEdBQVgsQ0FBUDtBQUlGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0QsQ0FiTTs7QUFlQSxJQUFNVyxvQ0FBYyxTQUFkQSxXQUFjLENBQVNDLEVBQVQsRUFBYVQsS0FBYixFQUFvQjtBQUM3QyxTQUFPLGFBQUdOLE9BQUgsQ0FBVztBQUNoQkMsNkJBQXVCYyxFQUF2QixnQkFBb0NULEtBRHBCO0FBRWhCSCxZQUFRO0FBRlEsR0FBWCxDQUFQO0FBSUQsQ0FMTTs7QUFPQSxJQUFNYSxzQ0FBZSxTQUFmQSxZQUFlLENBQVVDLElBQVYsRUFBZ0JYLEtBQWhCLEVBQXVCO0FBQ2pELFNBQU8sa0JBQVFZLEdBQVIsQ0FBWUQsS0FBS0UsR0FBTCxDQUFTO0FBQUEsV0FBTyxhQUFHQyxNQUFILENBQVU7QUFDM0NuQixXQUFLLGlCQURzQztBQUUzQ29CLFlBQU0sTUFGcUM7QUFHM0NDLGdCQUFVQyxHQUhpQztBQUkzQ0MsZ0JBQVUsRUFBRWxCLE9BQU9BLEtBQVQ7QUFKaUMsS0FBVixDQUFQO0FBQUEsR0FBVCxDQUFaLENBQVA7QUFNRCxDQVBNOztBQVNBLElBQU1tQix3Q0FBZ0IsU0FBaEJBLGFBQWdCLENBQVVDLE1BQVYsRUFBa0I7QUFDN0MsU0FBTyxlQUFLQyxZQUFMLENBQWtCLEVBQUMsT0FBT0QsTUFBUixFQUFsQixDQUFQO0FBQ0QsQ0FGTTs7QUFJQSxJQUFNRSwwQ0FBaUIsU0FBakJBLGNBQWlCLENBQVVDLE9BQVYsRUFBbUI7QUFDL0MsU0FBTyxrQkFBUVgsR0FBUixDQUFZVyxRQUFRVixHQUFSLENBQVk7QUFBQSxXQUFVLGVBQUtRLFlBQUwsQ0FBa0JELE1BQWxCLENBQVY7QUFBQSxHQUFaLENBQVosQ0FBUDtBQUNELENBRk0iLCJmaWxlIjoiYm9hcmQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgamYgZnJvbSAnLi4vdXRpbHMvamYnXG5pbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuXG5leHBvcnQgY29uc3QgYm9hcmRQdWJsaXNoID0gZnVuY3Rpb24oaW5mb3MpIHtcbiAgcmV0dXJuIGpmLnJlcXVlc3Qoe1xuICAgIGFwaTogJ2FydGljbGUvY3JlYXRlLycsXG4gICAgZGF0YToge1xuICAgICAgLi4uaW5mb3NcbiAgICB9LFxuICAgIG1ldGhvZDogJ1BPU1QnXG4gIH0pXG59XG5cblxuZXhwb3J0IGNvbnN0IGFkZFJlYWROdW0gPSBmdW5jdGlvbihpZCwgdG9rZW4pIHtcbiAgcmV0dXJuIGpmLnJlcXVlc3Qoe1xuICAgIGFwaTogJ2FydGljbGUvYWRkX3JlYWRfbnVtLycsXG4gICAgZGF0YToge1xuICAgICAgaWQ6IGlkLFxuICAgICAgdG9rZW46IHRva2VuXG4gICAgfSxcbiAgICBtZXRob2Q6ICdQT1NUJ1xuICB9KVxufVxuXG5leHBvcnQgY29uc3Qgc2VhcmNoTGlzdCA9IGZ1bmN0aW9uKHZhbHVlSWQsIHNlYXJjaFZhbHVlKSB7XG4gIHJldHVybiBqZi5yZXF1ZXN0KHtcbiAgICBhcGk6ICdhcnRpY2xlL2NhdGVnb3J5L3NlYXJjaC8nLFxuICAgIGRhdGE6IHtcbiAgICAgIGlkOiB2YWx1ZUlkLFxuICAgICAgczogc2VhcmNoVmFsdWVcbiAgICB9LFxuICAgIG1ldGhvZDogJ1BPU1QnXG4gIH0pXG59XG5cbmV4cG9ydCBjb25zdCBjYXRlZ29yeUxpc3QgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIGpmLnJlcXVlc3Qoe1xuICAgIGFwaTogJ2FydGljbGUvY2F0ZWdvcnkvbGlzdC8nLFxuICAgIG1ldGhvZDogJ0dFVCdcbiAgfSlcbn1cbmV4cG9ydCBjb25zdCBib2FyZExpc3QgPSBmdW5jdGlvbihjYXRlZ29yeSkge1xuICAvLyBpZiAodG9rZW4pIHtcbiAgICByZXR1cm4gamYucmVxdWVzdCh7XG4gICAgICBhcGk6IGBhcnRpY2xlL3NjcmVlbl9hcnRpY2xlLyR7Y2F0ZWdvcnl9L2AsXG4gICAgICBtZXRob2Q6ICdHRVQnXG4gICAgfSlcbiAgLy8gfSBlbHNlIHtcbiAgLy8gICB0b2tlbiA9IGNhdGVnb3J5XG4gIC8vICAgcmV0dXJuIGpmLnJlcXVlc3Qoe1xuICAvLyAgICAgYXBpOiBgYXJ0aWNsZS9saXN0LyR7dG9rZW59L2AsXG4gIC8vICAgICBtZXRob2Q6ICdHRVQnXG4gIC8vICAgfSlcbiAgLy8gfVxufVxuXG5leHBvcnQgY29uc3QgYm9hcmREZXRhaWwgPSBmdW5jdGlvbihwaywgdG9rZW4pIHtcbiAgcmV0dXJuIGpmLnJlcXVlc3Qoe1xuICAgIGFwaTogYGFydGljbGUvZGV0YWlsLyR7cGt9Lz90b2tlbj0ke3Rva2VufWAsXG4gICAgbWV0aG9kOiAnR0VUJ1xuICB9KVxufVxuXG5leHBvcnQgY29uc3QgdXBsb2FkSW1hZ2VzID0gZnVuY3Rpb24gKGltZ3MsIHRva2VuKSB7XG4gIHJldHVybiBQcm9taXNlLmFsbChpbWdzLm1hcChpbWcgPT4gamYudXBsb2FkKHtcbiAgICBhcGk6ICdyZXNvdXJjZXMvdXBfZi8nLFxuICAgIG5hbWU6ICdmaWxlJyxcbiAgICBmaWxlUGF0aDogaW1nLFxuICAgIGZvcm1EYXRhOiB7IHRva2VuOiB0b2tlbiB9XG4gIH0pKSlcbn1cblxuZXhwb3J0IGNvbnN0IGRvd25sb2FkSW1hZ2UgPSBmdW5jdGlvbiAoaW1nVXJsKSB7XG4gIHJldHVybiB3ZXB5LmRvd25sb2FkRmlsZSh7J3VybCc6IGltZ1VybH0pXG59XG5cbmV4cG9ydCBjb25zdCBkb3dubG9hZEltYWdlcyA9IGZ1bmN0aW9uIChpbWdVcmxzKSB7XG4gIHJldHVybiBQcm9taXNlLmFsbChpbWdVcmxzLm1hcChpbWdVcmwgPT4gd2VweS5kb3dubG9hZEZpbGUoaW1nVXJsKSkpXG59XG4iXX0=