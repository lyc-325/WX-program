'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.downloadImages = exports.downloadImage = exports.uploadImages = exports.boardDetail = exports.boardList = exports.boardPublish = undefined;

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
    api: 'article/create',
    data: (0, _extends3.default)({}, infos),
    method: 'POST'
  });
};

var boardList = exports.boardList = function boardList(token) {
  return _jf2.default.request({
    api: 'article/list/' + token,
    method: 'GET'
  });
};

var boardDetail = exports.boardDetail = function boardDetail(pk, token) {
  return _jf2.default.request({
    api: 'article/list/' + token + '/' + pk,
    method: 'GET'
  });
};

var uploadImages = exports.uploadImages = function uploadImages(imgs) {
  return _promise2.default.all(imgs.map(function (img) {
    return _jf2.default.upload({
      api: '/api/resources/upload_file/',
      filePath: img.imgPath,
      method: 'POST'
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJvYXJkLmpzIl0sIm5hbWVzIjpbImJvYXJkUHVibGlzaCIsImluZm9zIiwicmVxdWVzdCIsImFwaSIsImRhdGEiLCJtZXRob2QiLCJib2FyZExpc3QiLCJ0b2tlbiIsImJvYXJkRGV0YWlsIiwicGsiLCJ1cGxvYWRJbWFnZXMiLCJpbWdzIiwiYWxsIiwibWFwIiwidXBsb2FkIiwiZmlsZVBhdGgiLCJpbWciLCJpbWdQYXRoIiwiZG93bmxvYWRJbWFnZSIsImltZ1VybCIsImRvd25sb2FkRmlsZSIsImRvd25sb2FkSW1hZ2VzIiwiaW1nVXJscyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7Ozs7O0FBRU8sSUFBTUEsc0NBQWUsU0FBZkEsWUFBZSxDQUFTQyxLQUFULEVBQWdCO0FBQzFDLFNBQU8sYUFBR0MsT0FBSCxDQUFXO0FBQ2hCQyxTQUFLLGdCQURXO0FBRWhCQyxxQ0FDS0gsS0FETCxDQUZnQjtBQUtoQkksWUFBUTtBQUxRLEdBQVgsQ0FBUDtBQU9ELENBUk07O0FBVUEsSUFBTUMsZ0NBQVksU0FBWkEsU0FBWSxDQUFTQyxLQUFULEVBQWdCO0FBQ3ZDLFNBQU8sYUFBR0wsT0FBSCxDQUFXO0FBQ2hCQywyQkFBcUJJLEtBREw7QUFFaEJGLFlBQVE7QUFGUSxHQUFYLENBQVA7QUFJRCxDQUxNOztBQU9BLElBQU1HLG9DQUFjLFNBQWRBLFdBQWMsQ0FBU0MsRUFBVCxFQUFhRixLQUFiLEVBQW9CO0FBQzdDLFNBQU8sYUFBR0wsT0FBSCxDQUFXO0FBQ2hCQywyQkFBcUJJLEtBQXJCLFNBQThCRSxFQURkO0FBRWhCSixZQUFRO0FBRlEsR0FBWCxDQUFQO0FBSUQsQ0FMTTs7QUFPQSxJQUFNSyxzQ0FBZSxTQUFmQSxZQUFlLENBQVVDLElBQVYsRUFBZ0I7QUFDMUMsU0FBTyxrQkFBUUMsR0FBUixDQUFZRCxLQUFLRSxHQUFMLENBQVM7QUFBQSxXQUFPLGFBQUdDLE1BQUgsQ0FBVTtBQUMzQ1gsV0FBSyw2QkFEc0M7QUFFM0NZLGdCQUFVQyxJQUFJQyxPQUY2QjtBQUczQ1osY0FBUTtBQUhtQyxLQUFWLENBQVA7QUFBQSxHQUFULENBQVosQ0FBUDtBQUtELENBTk07O0FBUUEsSUFBTWEsd0NBQWdCLFNBQWhCQSxhQUFnQixDQUFVQyxNQUFWLEVBQWtCO0FBQzdDLFNBQU8sZUFBS0MsWUFBTCxDQUFrQixFQUFDLE9BQU9ELE1BQVIsRUFBbEIsQ0FBUDtBQUNELENBRk07O0FBSUEsSUFBTUUsMENBQWlCLFNBQWpCQSxjQUFpQixDQUFVQyxPQUFWLEVBQW1CO0FBQy9DLFNBQU8sa0JBQVFWLEdBQVIsQ0FBWVUsUUFBUVQsR0FBUixDQUFZO0FBQUEsV0FBVSxlQUFLTyxZQUFMLENBQWtCRCxNQUFsQixDQUFWO0FBQUEsR0FBWixDQUFaLENBQVA7QUFDRCxDQUZNIiwiZmlsZSI6ImJvYXJkLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGpmIGZyb20gJy4uL3V0aWxzL2pmJ1xuaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcblxuZXhwb3J0IGNvbnN0IGJvYXJkUHVibGlzaCA9IGZ1bmN0aW9uKGluZm9zKSB7XG4gIHJldHVybiBqZi5yZXF1ZXN0KHtcbiAgICBhcGk6ICdhcnRpY2xlL2NyZWF0ZScsXG4gICAgZGF0YToge1xuICAgICAgLi4uaW5mb3NcbiAgICB9LFxuICAgIG1ldGhvZDogJ1BPU1QnXG4gIH0pXG59XG5cbmV4cG9ydCBjb25zdCBib2FyZExpc3QgPSBmdW5jdGlvbih0b2tlbikge1xuICByZXR1cm4gamYucmVxdWVzdCh7XG4gICAgYXBpOiBgYXJ0aWNsZS9saXN0LyR7dG9rZW59YCxcbiAgICBtZXRob2Q6ICdHRVQnXG4gIH0pXG59XG5cbmV4cG9ydCBjb25zdCBib2FyZERldGFpbCA9IGZ1bmN0aW9uKHBrLCB0b2tlbikge1xuICByZXR1cm4gamYucmVxdWVzdCh7XG4gICAgYXBpOiBgYXJ0aWNsZS9saXN0LyR7dG9rZW59LyR7cGt9YCxcbiAgICBtZXRob2Q6ICdHRVQnXG4gIH0pXG59XG5cbmV4cG9ydCBjb25zdCB1cGxvYWRJbWFnZXMgPSBmdW5jdGlvbiAoaW1ncykge1xuICByZXR1cm4gUHJvbWlzZS5hbGwoaW1ncy5tYXAoaW1nID0+IGpmLnVwbG9hZCh7XG4gICAgYXBpOiAnL2FwaS9yZXNvdXJjZXMvdXBsb2FkX2ZpbGUvJyxcbiAgICBmaWxlUGF0aDogaW1nLmltZ1BhdGgsXG4gICAgbWV0aG9kOiAnUE9TVCdcbiAgfSkpKVxufVxuXG5leHBvcnQgY29uc3QgZG93bmxvYWRJbWFnZSA9IGZ1bmN0aW9uIChpbWdVcmwpIHtcbiAgcmV0dXJuIHdlcHkuZG93bmxvYWRGaWxlKHsndXJsJzogaW1nVXJsfSlcbn1cblxuZXhwb3J0IGNvbnN0IGRvd25sb2FkSW1hZ2VzID0gZnVuY3Rpb24gKGltZ1VybHMpIHtcbiAgcmV0dXJuIFByb21pc2UuYWxsKGltZ1VybHMubWFwKGltZ1VybCA9PiB3ZXB5LmRvd25sb2FkRmlsZShpbWdVcmwpKSlcbn1cbiJdfQ==