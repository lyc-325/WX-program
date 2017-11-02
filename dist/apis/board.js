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
  var page = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;

  // if (token) {
  return _jf2.default.request({
    api: 'article/screen_article/' + category + '/?page=' + page,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJvYXJkLmpzIl0sIm5hbWVzIjpbImJvYXJkUHVibGlzaCIsImluZm9zIiwicmVxdWVzdCIsImFwaSIsImRhdGEiLCJtZXRob2QiLCJhZGRSZWFkTnVtIiwiaWQiLCJ0b2tlbiIsInNlYXJjaExpc3QiLCJ2YWx1ZUlkIiwic2VhcmNoVmFsdWUiLCJzIiwiY2F0ZWdvcnlMaXN0IiwiYm9hcmRMaXN0IiwiY2F0ZWdvcnkiLCJwYWdlIiwiYm9hcmREZXRhaWwiLCJwayIsInVwbG9hZEltYWdlcyIsImltZ3MiLCJhbGwiLCJtYXAiLCJ1cGxvYWQiLCJuYW1lIiwiZmlsZVBhdGgiLCJpbWciLCJmb3JtRGF0YSIsImRvd25sb2FkSW1hZ2UiLCJpbWdVcmwiLCJkb3dubG9hZEZpbGUiLCJkb3dubG9hZEltYWdlcyIsImltZ1VybHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7OztBQUVPLElBQU1BLHNDQUFlLFNBQWZBLFlBQWUsQ0FBU0MsS0FBVCxFQUFnQjtBQUMxQyxTQUFPLGFBQUdDLE9BQUgsQ0FBVztBQUNoQkMsU0FBSyxpQkFEVztBQUVoQkMscUNBQ0tILEtBREwsQ0FGZ0I7QUFLaEJJLFlBQVE7QUFMUSxHQUFYLENBQVA7QUFPRCxDQVJNOztBQVdBLElBQU1DLGtDQUFhLFNBQWJBLFVBQWEsQ0FBU0MsRUFBVCxFQUFhQyxLQUFiLEVBQW9CO0FBQzVDLFNBQU8sYUFBR04sT0FBSCxDQUFXO0FBQ2hCQyxTQUFLLHVCQURXO0FBRWhCQyxVQUFNO0FBQ0pHLFVBQUlBLEVBREE7QUFFSkMsYUFBT0E7QUFGSCxLQUZVO0FBTWhCSCxZQUFRO0FBTlEsR0FBWCxDQUFQO0FBUUQsQ0FUTTs7QUFXQSxJQUFNSSxrQ0FBYSxTQUFiQSxVQUFhLENBQVNDLE9BQVQsRUFBa0JDLFdBQWxCLEVBQStCO0FBQ3ZELFNBQU8sYUFBR1QsT0FBSCxDQUFXO0FBQ2hCQyxTQUFLLDBCQURXO0FBRWhCQyxVQUFNO0FBQ0pHLFVBQUlHLE9BREE7QUFFSkUsU0FBR0Q7QUFGQyxLQUZVO0FBTWhCTixZQUFRO0FBTlEsR0FBWCxDQUFQO0FBUUQsQ0FUTTs7QUFXQSxJQUFNUSxzQ0FBZSxTQUFmQSxZQUFlLEdBQVc7QUFDckMsU0FBTyxhQUFHWCxPQUFILENBQVc7QUFDaEJDLFNBQUssd0JBRFc7QUFFaEJFLFlBQVE7QUFGUSxHQUFYLENBQVA7QUFJRCxDQUxNO0FBTUEsSUFBTVMsZ0NBQVksU0FBWkEsU0FBWSxDQUFTQyxRQUFULEVBQTRCO0FBQUEsTUFBVkMsSUFBVSx1RUFBSCxDQUFHOztBQUNuRDtBQUNFLFNBQU8sYUFBR2QsT0FBSCxDQUFXO0FBQ2hCQyxxQ0FBK0JZLFFBQS9CLGVBQWlEQyxJQURqQztBQUVoQlgsWUFBUTtBQUZRLEdBQVgsQ0FBUDtBQUlGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0QsQ0FiTTs7QUFlQSxJQUFNWSxvQ0FBYyxTQUFkQSxXQUFjLENBQVNDLEVBQVQsRUFBYVYsS0FBYixFQUFvQjtBQUM3QyxTQUFPLGFBQUdOLE9BQUgsQ0FBVztBQUNoQkMsNkJBQXVCZSxFQUF2QixnQkFBb0NWLEtBRHBCO0FBRWhCSCxZQUFRO0FBRlEsR0FBWCxDQUFQO0FBSUQsQ0FMTTs7QUFPQSxJQUFNYyxzQ0FBZSxTQUFmQSxZQUFlLENBQVVDLElBQVYsRUFBZ0JaLEtBQWhCLEVBQXVCO0FBQ2pELFNBQU8sa0JBQVFhLEdBQVIsQ0FBWUQsS0FBS0UsR0FBTCxDQUFTO0FBQUEsV0FBTyxhQUFHQyxNQUFILENBQVU7QUFDM0NwQixXQUFLLGlCQURzQztBQUUzQ3FCLFlBQU0sTUFGcUM7QUFHM0NDLGdCQUFVQyxHQUhpQztBQUkzQ0MsZ0JBQVUsRUFBRW5CLE9BQU9BLEtBQVQ7QUFKaUMsS0FBVixDQUFQO0FBQUEsR0FBVCxDQUFaLENBQVA7QUFNRCxDQVBNOztBQVNBLElBQU1vQix3Q0FBZ0IsU0FBaEJBLGFBQWdCLENBQVVDLE1BQVYsRUFBa0I7QUFDN0MsU0FBTyxlQUFLQyxZQUFMLENBQWtCLEVBQUMsT0FBT0QsTUFBUixFQUFsQixDQUFQO0FBQ0QsQ0FGTTs7QUFJQSxJQUFNRSwwQ0FBaUIsU0FBakJBLGNBQWlCLENBQVVDLE9BQVYsRUFBbUI7QUFDL0MsU0FBTyxrQkFBUVgsR0FBUixDQUFZVyxRQUFRVixHQUFSLENBQVk7QUFBQSxXQUFVLGVBQUtRLFlBQUwsQ0FBa0JELE1BQWxCLENBQVY7QUFBQSxHQUFaLENBQVosQ0FBUDtBQUNELENBRk0iLCJmaWxlIjoiYm9hcmQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgamYgZnJvbSAnLi4vdXRpbHMvamYnXHJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXHJcblxyXG5leHBvcnQgY29uc3QgYm9hcmRQdWJsaXNoID0gZnVuY3Rpb24oaW5mb3MpIHtcclxuICByZXR1cm4gamYucmVxdWVzdCh7XHJcbiAgICBhcGk6ICdhcnRpY2xlL2NyZWF0ZS8nLFxyXG4gICAgZGF0YToge1xyXG4gICAgICAuLi5pbmZvc1xyXG4gICAgfSxcclxuICAgIG1ldGhvZDogJ1BPU1QnXHJcbiAgfSlcclxufVxyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBhZGRSZWFkTnVtID0gZnVuY3Rpb24oaWQsIHRva2VuKSB7XHJcbiAgcmV0dXJuIGpmLnJlcXVlc3Qoe1xyXG4gICAgYXBpOiAnYXJ0aWNsZS9hZGRfcmVhZF9udW0vJyxcclxuICAgIGRhdGE6IHtcclxuICAgICAgaWQ6IGlkLFxyXG4gICAgICB0b2tlbjogdG9rZW5cclxuICAgIH0sXHJcbiAgICBtZXRob2Q6ICdQT1NUJ1xyXG4gIH0pXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBzZWFyY2hMaXN0ID0gZnVuY3Rpb24odmFsdWVJZCwgc2VhcmNoVmFsdWUpIHtcclxuICByZXR1cm4gamYucmVxdWVzdCh7XHJcbiAgICBhcGk6ICdhcnRpY2xlL2NhdGVnb3J5L3NlYXJjaC8nLFxyXG4gICAgZGF0YToge1xyXG4gICAgICBpZDogdmFsdWVJZCxcclxuICAgICAgczogc2VhcmNoVmFsdWVcclxuICAgIH0sXHJcbiAgICBtZXRob2Q6ICdQT1NUJ1xyXG4gIH0pXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBjYXRlZ29yeUxpc3QgPSBmdW5jdGlvbigpIHtcclxuICByZXR1cm4gamYucmVxdWVzdCh7XHJcbiAgICBhcGk6ICdhcnRpY2xlL2NhdGVnb3J5L2xpc3QvJyxcclxuICAgIG1ldGhvZDogJ0dFVCdcclxuICB9KVxyXG59XHJcbmV4cG9ydCBjb25zdCBib2FyZExpc3QgPSBmdW5jdGlvbihjYXRlZ29yeSxwYWdlID0gMSkge1xyXG4gIC8vIGlmICh0b2tlbikge1xyXG4gICAgcmV0dXJuIGpmLnJlcXVlc3Qoe1xyXG4gICAgICBhcGk6IGBhcnRpY2xlL3NjcmVlbl9hcnRpY2xlLyR7Y2F0ZWdvcnl9Lz9wYWdlPSR7cGFnZX1gLFxyXG4gICAgICBtZXRob2Q6ICdHRVQnXHJcbiAgICB9KVxyXG4gIC8vIH0gZWxzZSB7XHJcbiAgLy8gICB0b2tlbiA9IGNhdGVnb3J5XHJcbiAgLy8gICByZXR1cm4gamYucmVxdWVzdCh7XHJcbiAgLy8gICAgIGFwaTogYGFydGljbGUvbGlzdC8ke3Rva2VufS9gLFxyXG4gIC8vICAgICBtZXRob2Q6ICdHRVQnXHJcbiAgLy8gICB9KVxyXG4gIC8vIH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGJvYXJkRGV0YWlsID0gZnVuY3Rpb24ocGssIHRva2VuKSB7XHJcbiAgcmV0dXJuIGpmLnJlcXVlc3Qoe1xyXG4gICAgYXBpOiBgYXJ0aWNsZS9kZXRhaWwvJHtwa30vP3Rva2VuPSR7dG9rZW59YCxcclxuICAgIG1ldGhvZDogJ0dFVCdcclxuICB9KVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgdXBsb2FkSW1hZ2VzID0gZnVuY3Rpb24gKGltZ3MsIHRva2VuKSB7XHJcbiAgcmV0dXJuIFByb21pc2UuYWxsKGltZ3MubWFwKGltZyA9PiBqZi51cGxvYWQoe1xyXG4gICAgYXBpOiAncmVzb3VyY2VzL3VwX2YvJyxcclxuICAgIG5hbWU6ICdmaWxlJyxcclxuICAgIGZpbGVQYXRoOiBpbWcsXHJcbiAgICBmb3JtRGF0YTogeyB0b2tlbjogdG9rZW4gfVxyXG4gIH0pKSlcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGRvd25sb2FkSW1hZ2UgPSBmdW5jdGlvbiAoaW1nVXJsKSB7XHJcbiAgcmV0dXJuIHdlcHkuZG93bmxvYWRGaWxlKHsndXJsJzogaW1nVXJsfSlcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGRvd25sb2FkSW1hZ2VzID0gZnVuY3Rpb24gKGltZ1VybHMpIHtcclxuICByZXR1cm4gUHJvbWlzZS5hbGwoaW1nVXJscy5tYXAoaW1nVXJsID0+IHdlcHkuZG93bmxvYWRGaWxlKGltZ1VybCkpKVxyXG59XHJcbiJdfQ==