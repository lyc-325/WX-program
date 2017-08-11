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
      token: token
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJvYXJkLmpzIl0sIm5hbWVzIjpbImJvYXJkUHVibGlzaCIsImluZm9zIiwicmVxdWVzdCIsImFwaSIsImRhdGEiLCJtZXRob2QiLCJhZGRSZWFkTnVtIiwiaWQiLCJ0b2tlbiIsImNhdGVnb3J5TGlzdCIsImJvYXJkTGlzdCIsImNhdGVnb3J5IiwiYm9hcmREZXRhaWwiLCJwayIsInVwbG9hZEltYWdlcyIsImltZ3MiLCJhbGwiLCJtYXAiLCJ1cGxvYWQiLCJuYW1lIiwiZmlsZVBhdGgiLCJpbWciLCJmb3JtRGF0YSIsImRvd25sb2FkSW1hZ2UiLCJpbWdVcmwiLCJkb3dubG9hZEZpbGUiLCJkb3dubG9hZEltYWdlcyIsImltZ1VybHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7OztBQUVPLElBQU1BLHNDQUFlLFNBQWZBLFlBQWUsQ0FBU0MsS0FBVCxFQUFnQjtBQUMxQyxTQUFPLGFBQUdDLE9BQUgsQ0FBVztBQUNoQkMsU0FBSyxpQkFEVztBQUVoQkMscUNBQ0tILEtBREwsQ0FGZ0I7QUFLaEJJLFlBQVE7QUFMUSxHQUFYLENBQVA7QUFPRCxDQVJNOztBQVdBLElBQU1DLGtDQUFhLFNBQWJBLFVBQWEsQ0FBU0MsRUFBVCxFQUFhQyxLQUFiLEVBQW9CO0FBQzVDLFNBQU8sYUFBR04sT0FBSCxDQUFXO0FBQ2hCQyxTQUFLLHVCQURXO0FBRWhCQyxVQUFNO0FBQ0pHLFVBQUlBLEVBREE7QUFFSkMsYUFBT0E7QUFGSCxLQUZVO0FBTWhCSCxZQUFRO0FBTlEsR0FBWCxDQUFQO0FBUUQsQ0FUTTtBQVVBLElBQU1JLHNDQUFlLFNBQWZBLFlBQWUsR0FBVztBQUNyQyxTQUFPLGFBQUdQLE9BQUgsQ0FBVztBQUNoQkMsU0FBSyx3QkFEVztBQUVoQkUsWUFBUTtBQUZRLEdBQVgsQ0FBUDtBQUlELENBTE07QUFNQSxJQUFNSyxnQ0FBWSxTQUFaQSxTQUFZLENBQVNDLFFBQVQsRUFBbUI7QUFDMUM7QUFDRSxTQUFPLGFBQUdULE9BQUgsQ0FBVztBQUNoQkMscUNBQStCUSxRQUEvQixNQURnQjtBQUVoQk4sWUFBUTtBQUZRLEdBQVgsQ0FBUDtBQUlGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0QsQ0FiTTs7QUFlQSxJQUFNTyxvQ0FBYyxTQUFkQSxXQUFjLENBQVNDLEVBQVQsRUFBYUwsS0FBYixFQUFvQjtBQUM3QyxTQUFPLGFBQUdOLE9BQUgsQ0FBVztBQUNoQkMsNkJBQXVCSyxLQUF2QixTQUFnQ0ssRUFBaEMsTUFEZ0I7QUFFaEJSLFlBQVE7QUFGUSxHQUFYLENBQVA7QUFJRCxDQUxNOztBQU9BLElBQU1TLHNDQUFlLFNBQWZBLFlBQWUsQ0FBVUMsSUFBVixFQUFnQlAsS0FBaEIsRUFBdUI7QUFDakQsU0FBTyxrQkFBUVEsR0FBUixDQUFZRCxLQUFLRSxHQUFMLENBQVM7QUFBQSxXQUFPLGFBQUdDLE1BQUgsQ0FBVTtBQUMzQ2YsV0FBSyxpQkFEc0M7QUFFM0NnQixZQUFNLFVBRnFDO0FBRzNDQyxnQkFBVUMsR0FIaUM7QUFJM0NDLGdCQUFVLEVBQUVkLE9BQU9BLEtBQVQ7QUFKaUMsS0FBVixDQUFQO0FBQUEsR0FBVCxDQUFaLENBQVA7QUFNRCxDQVBNOztBQVNBLElBQU1lLHdDQUFnQixTQUFoQkEsYUFBZ0IsQ0FBVUMsTUFBVixFQUFrQjtBQUM3QyxTQUFPLGVBQUtDLFlBQUwsQ0FBa0IsRUFBQyxPQUFPRCxNQUFSLEVBQWxCLENBQVA7QUFDRCxDQUZNOztBQUlBLElBQU1FLDBDQUFpQixTQUFqQkEsY0FBaUIsQ0FBVUMsT0FBVixFQUFtQjtBQUMvQyxTQUFPLGtCQUFRWCxHQUFSLENBQVlXLFFBQVFWLEdBQVIsQ0FBWTtBQUFBLFdBQVUsZUFBS1EsWUFBTCxDQUFrQkQsTUFBbEIsQ0FBVjtBQUFBLEdBQVosQ0FBWixDQUFQO0FBQ0QsQ0FGTSIsImZpbGUiOiJib2FyZC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBqZiBmcm9tICcuLi91dGlscy9qZidcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG5cbmV4cG9ydCBjb25zdCBib2FyZFB1Ymxpc2ggPSBmdW5jdGlvbihpbmZvcykge1xuICByZXR1cm4gamYucmVxdWVzdCh7XG4gICAgYXBpOiAnYXJ0aWNsZS9jcmVhdGUvJyxcbiAgICBkYXRhOiB7XG4gICAgICAuLi5pbmZvc1xuICAgIH0sXG4gICAgbWV0aG9kOiAnUE9TVCdcbiAgfSlcbn1cblxuXG5leHBvcnQgY29uc3QgYWRkUmVhZE51bSA9IGZ1bmN0aW9uKGlkLCB0b2tlbikge1xuICByZXR1cm4gamYucmVxdWVzdCh7XG4gICAgYXBpOiAnYXJ0aWNsZS9hZGRfcmVhZF9udW0vJyxcbiAgICBkYXRhOiB7XG4gICAgICBpZDogaWQsXG4gICAgICB0b2tlbjogdG9rZW5cbiAgICB9LFxuICAgIG1ldGhvZDogJ1BPU1QnXG4gIH0pXG59XG5leHBvcnQgY29uc3QgY2F0ZWdvcnlMaXN0ID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiBqZi5yZXF1ZXN0KHtcbiAgICBhcGk6ICdhcnRpY2xlL2NhdGVnb3J5L2xpc3QvJyxcbiAgICBtZXRob2Q6ICdHRVQnXG4gIH0pXG59XG5leHBvcnQgY29uc3QgYm9hcmRMaXN0ID0gZnVuY3Rpb24oY2F0ZWdvcnkpIHtcbiAgLy8gaWYgKHRva2VuKSB7XG4gICAgcmV0dXJuIGpmLnJlcXVlc3Qoe1xuICAgICAgYXBpOiBgYXJ0aWNsZS9zY3JlZW5fYXJ0aWNsZS8ke2NhdGVnb3J5fS9gLFxuICAgICAgbWV0aG9kOiAnR0VUJ1xuICAgIH0pXG4gIC8vIH0gZWxzZSB7XG4gIC8vICAgdG9rZW4gPSBjYXRlZ29yeVxuICAvLyAgIHJldHVybiBqZi5yZXF1ZXN0KHtcbiAgLy8gICAgIGFwaTogYGFydGljbGUvbGlzdC8ke3Rva2VufS9gLFxuICAvLyAgICAgbWV0aG9kOiAnR0VUJ1xuICAvLyAgIH0pXG4gIC8vIH1cbn1cblxuZXhwb3J0IGNvbnN0IGJvYXJkRGV0YWlsID0gZnVuY3Rpb24ocGssIHRva2VuKSB7XG4gIHJldHVybiBqZi5yZXF1ZXN0KHtcbiAgICBhcGk6IGBhcnRpY2xlL2RldGFpbC8ke3Rva2VufS8ke3BrfS9gLFxuICAgIG1ldGhvZDogJ0dFVCdcbiAgfSlcbn1cblxuZXhwb3J0IGNvbnN0IHVwbG9hZEltYWdlcyA9IGZ1bmN0aW9uIChpbWdzLCB0b2tlbikge1xuICByZXR1cm4gUHJvbWlzZS5hbGwoaW1ncy5tYXAoaW1nID0+IGpmLnVwbG9hZCh7XG4gICAgYXBpOiAncmVzb3VyY2VzL3VwX2YvJyxcbiAgICBuYW1lOiAnYm9hcmRJbWcnLFxuICAgIGZpbGVQYXRoOiBpbWcsXG4gICAgZm9ybURhdGE6IHsgdG9rZW46IHRva2VuIH1cbiAgfSkpKVxufVxuXG5leHBvcnQgY29uc3QgZG93bmxvYWRJbWFnZSA9IGZ1bmN0aW9uIChpbWdVcmwpIHtcbiAgcmV0dXJuIHdlcHkuZG93bmxvYWRGaWxlKHsndXJsJzogaW1nVXJsfSlcbn1cblxuZXhwb3J0IGNvbnN0IGRvd25sb2FkSW1hZ2VzID0gZnVuY3Rpb24gKGltZ1VybHMpIHtcbiAgcmV0dXJuIFByb21pc2UuYWxsKGltZ1VybHMubWFwKGltZ1VybCA9PiB3ZXB5LmRvd25sb2FkRmlsZShpbWdVcmwpKSlcbn1cbiJdfQ==