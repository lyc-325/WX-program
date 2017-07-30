'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.downloadImages = exports.downloadImage = exports.uploadImages = exports.boardDetail = exports.boardList = exports.categoryList = exports.boardPublish = undefined;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJvYXJkLmpzIl0sIm5hbWVzIjpbImJvYXJkUHVibGlzaCIsImluZm9zIiwicmVxdWVzdCIsImFwaSIsImRhdGEiLCJtZXRob2QiLCJjYXRlZ29yeUxpc3QiLCJib2FyZExpc3QiLCJjYXRlZ29yeSIsInRva2VuIiwiYm9hcmREZXRhaWwiLCJwayIsInVwbG9hZEltYWdlcyIsImltZ3MiLCJhbGwiLCJtYXAiLCJ1cGxvYWQiLCJuYW1lIiwiZmlsZVBhdGgiLCJpbWciLCJmb3JtRGF0YSIsImRvd25sb2FkSW1hZ2UiLCJpbWdVcmwiLCJkb3dubG9hZEZpbGUiLCJkb3dubG9hZEltYWdlcyIsImltZ1VybHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7OztBQUVPLElBQU1BLHNDQUFlLFNBQWZBLFlBQWUsQ0FBU0MsS0FBVCxFQUFnQjtBQUMxQyxTQUFPLGFBQUdDLE9BQUgsQ0FBVztBQUNoQkMsU0FBSyxpQkFEVztBQUVoQkMscUNBQ0tILEtBREwsQ0FGZ0I7QUFLaEJJLFlBQVE7QUFMUSxHQUFYLENBQVA7QUFPRCxDQVJNO0FBU0EsSUFBTUMsc0NBQWUsU0FBZkEsWUFBZSxHQUFXO0FBQ3JDLFNBQU8sYUFBR0osT0FBSCxDQUFXO0FBQ2hCQyxTQUFLLHdCQURXO0FBRWhCRSxZQUFRO0FBRlEsR0FBWCxDQUFQO0FBSUQsQ0FMTTtBQU1BLElBQU1FLGdDQUFZLFNBQVpBLFNBQVksQ0FBU0MsUUFBVCxFQUFtQkMsS0FBbkIsRUFBMEI7QUFDakQsTUFBSUEsS0FBSixFQUFXO0FBQ1QsV0FBTyxhQUFHUCxPQUFILENBQVc7QUFDaEJDLHVDQUErQkssUUFBL0IsU0FBMkNDLEtBQTNDLE1BRGdCO0FBRWhCSixjQUFRO0FBRlEsS0FBWCxDQUFQO0FBSUQsR0FMRCxNQUtPO0FBQ0xJLFlBQVFELFFBQVI7QUFDQSxXQUFPLGFBQUdOLE9BQUgsQ0FBVztBQUNoQkMsNkJBQXFCTSxLQUFyQixNQURnQjtBQUVoQkosY0FBUTtBQUZRLEtBQVgsQ0FBUDtBQUlEO0FBQ0YsQ0FiTTs7QUFlQSxJQUFNSyxvQ0FBYyxTQUFkQSxXQUFjLENBQVNDLEVBQVQsRUFBYUYsS0FBYixFQUFvQjtBQUM3QyxTQUFPLGFBQUdQLE9BQUgsQ0FBVztBQUNoQkMsNkJBQXVCTSxLQUF2QixTQUFnQ0UsRUFBaEMsTUFEZ0I7QUFFaEJOLFlBQVE7QUFGUSxHQUFYLENBQVA7QUFJRCxDQUxNOztBQU9BLElBQU1PLHNDQUFlLFNBQWZBLFlBQWUsQ0FBVUMsSUFBVixFQUFnQkosS0FBaEIsRUFBdUI7QUFDakQsU0FBTyxrQkFBUUssR0FBUixDQUFZRCxLQUFLRSxHQUFMLENBQVM7QUFBQSxXQUFPLGFBQUdDLE1BQUgsQ0FBVTtBQUMzQ2IsV0FBSyxpQkFEc0M7QUFFM0NjLFlBQU0sVUFGcUM7QUFHM0NDLGdCQUFVQyxHQUhpQztBQUkzQ0MsZ0JBQVUsRUFBRVgsT0FBT0EsS0FBVDtBQUppQyxLQUFWLENBQVA7QUFBQSxHQUFULENBQVosQ0FBUDtBQU1ELENBUE07O0FBU0EsSUFBTVksd0NBQWdCLFNBQWhCQSxhQUFnQixDQUFVQyxNQUFWLEVBQWtCO0FBQzdDLFNBQU8sZUFBS0MsWUFBTCxDQUFrQixFQUFDLE9BQU9ELE1BQVIsRUFBbEIsQ0FBUDtBQUNELENBRk07O0FBSUEsSUFBTUUsMENBQWlCLFNBQWpCQSxjQUFpQixDQUFVQyxPQUFWLEVBQW1CO0FBQy9DLFNBQU8sa0JBQVFYLEdBQVIsQ0FBWVcsUUFBUVYsR0FBUixDQUFZO0FBQUEsV0FBVSxlQUFLUSxZQUFMLENBQWtCRCxNQUFsQixDQUFWO0FBQUEsR0FBWixDQUFaLENBQVA7QUFDRCxDQUZNIiwiZmlsZSI6ImJvYXJkLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGpmIGZyb20gJy4uL3V0aWxzL2pmJ1xyXG5pbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xyXG5cclxuZXhwb3J0IGNvbnN0IGJvYXJkUHVibGlzaCA9IGZ1bmN0aW9uKGluZm9zKSB7XHJcbiAgcmV0dXJuIGpmLnJlcXVlc3Qoe1xyXG4gICAgYXBpOiAnYXJ0aWNsZS9jcmVhdGUvJyxcclxuICAgIGRhdGE6IHtcclxuICAgICAgLi4uaW5mb3NcclxuICAgIH0sXHJcbiAgICBtZXRob2Q6ICdQT1NUJ1xyXG4gIH0pXHJcbn1cclxuZXhwb3J0IGNvbnN0IGNhdGVnb3J5TGlzdCA9IGZ1bmN0aW9uKCkge1xyXG4gIHJldHVybiBqZi5yZXF1ZXN0KHtcclxuICAgIGFwaTogJ2FydGljbGUvY2F0ZWdvcnkvbGlzdC8nLFxyXG4gICAgbWV0aG9kOiAnR0VUJ1xyXG4gIH0pXHJcbn1cclxuZXhwb3J0IGNvbnN0IGJvYXJkTGlzdCA9IGZ1bmN0aW9uKGNhdGVnb3J5LCB0b2tlbikge1xyXG4gIGlmICh0b2tlbikge1xyXG4gICAgcmV0dXJuIGpmLnJlcXVlc3Qoe1xyXG4gICAgICBhcGk6IGBhcnRpY2xlL3NjcmVlbl9hcnRpY2xlLyR7Y2F0ZWdvcnl9LyR7dG9rZW59L2AsXHJcbiAgICAgIG1ldGhvZDogJ0dFVCdcclxuICAgIH0pXHJcbiAgfSBlbHNlIHtcclxuICAgIHRva2VuID0gY2F0ZWdvcnlcclxuICAgIHJldHVybiBqZi5yZXF1ZXN0KHtcclxuICAgICAgYXBpOiBgYXJ0aWNsZS9saXN0LyR7dG9rZW59L2AsXHJcbiAgICAgIG1ldGhvZDogJ0dFVCdcclxuICAgIH0pXHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgYm9hcmREZXRhaWwgPSBmdW5jdGlvbihwaywgdG9rZW4pIHtcclxuICByZXR1cm4gamYucmVxdWVzdCh7XHJcbiAgICBhcGk6IGBhcnRpY2xlL2RldGFpbC8ke3Rva2VufS8ke3BrfS9gLFxyXG4gICAgbWV0aG9kOiAnR0VUJ1xyXG4gIH0pXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCB1cGxvYWRJbWFnZXMgPSBmdW5jdGlvbiAoaW1ncywgdG9rZW4pIHtcclxuICByZXR1cm4gUHJvbWlzZS5hbGwoaW1ncy5tYXAoaW1nID0+IGpmLnVwbG9hZCh7XHJcbiAgICBhcGk6ICdyZXNvdXJjZXMvdXBfZi8nLFxyXG4gICAgbmFtZTogJ2JvYXJkSW1nJyxcclxuICAgIGZpbGVQYXRoOiBpbWcsXHJcbiAgICBmb3JtRGF0YTogeyB0b2tlbjogdG9rZW4gfVxyXG4gIH0pKSlcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGRvd25sb2FkSW1hZ2UgPSBmdW5jdGlvbiAoaW1nVXJsKSB7XHJcbiAgcmV0dXJuIHdlcHkuZG93bmxvYWRGaWxlKHsndXJsJzogaW1nVXJsfSlcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGRvd25sb2FkSW1hZ2VzID0gZnVuY3Rpb24gKGltZ1VybHMpIHtcclxuICByZXR1cm4gUHJvbWlzZS5hbGwoaW1nVXJscy5tYXAoaW1nVXJsID0+IHdlcHkuZG93bmxvYWRGaWxlKGltZ1VybCkpKVxyXG59XHJcbiJdfQ==