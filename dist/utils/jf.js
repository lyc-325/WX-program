'use strict';

var _promise = require('./../npm/babel-runtime/core-js/promise.js');

var _promise2 = _interopRequireDefault(_promise);

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _config = require('./../config.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var config = _config.jf;

function request(options) {
  var api = options.api,
      data = options.data,
      method = options.method;

  return _wepy2.default.request({
    url: config.server + '/' + api,
    header: {
      'Content-Type': 'application/json',
      Accept: 'application/json'
    },
    data: data,
    method: method || 'POST'
  }).then(function (_ref) {
    var data = _ref.data;

    return data.code === 200 ? _promise2.default.resolve(data.data) : _promise2.default.reject(data.msg);
  });
}

function upload(options) {
  var api = options.api,
      filePath = options.filePath,
      name = options.name,
      method = options.method;

  return _wepy2.default.uploadFile({
    url: config.server + '/' + api,
    filePath: filePath,
    name: name,
    method: method || 'POST'
  }).then(function (res) {
    return res.status === 200 ? _promise2.default.resolve(res.data) : _promise2.default.reject(res.errorText);
  });
}

module.exports = {
  request: request,
  upload: upload
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImpmLmpzIl0sIm5hbWVzIjpbImNvbmZpZyIsInJlcXVlc3QiLCJvcHRpb25zIiwiYXBpIiwiZGF0YSIsIm1ldGhvZCIsInVybCIsInNlcnZlciIsImhlYWRlciIsIkFjY2VwdCIsInRoZW4iLCJjb2RlIiwicmVzb2x2ZSIsInJlamVjdCIsIm1zZyIsInVwbG9hZCIsImZpbGVQYXRoIiwibmFtZSIsInVwbG9hZEZpbGUiLCJyZXMiLCJzdGF0dXMiLCJlcnJvclRleHQiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBRUEsSUFBTUEsbUJBQU47O0FBRUEsU0FBU0MsT0FBVCxDQUFpQkMsT0FBakIsRUFBMEI7QUFBQSxNQUNoQkMsR0FEZ0IsR0FDTUQsT0FETixDQUNoQkMsR0FEZ0I7QUFBQSxNQUNYQyxJQURXLEdBQ01GLE9BRE4sQ0FDWEUsSUFEVztBQUFBLE1BQ0xDLE1BREssR0FDTUgsT0FETixDQUNMRyxNQURLOztBQUV4QixTQUFPLGVBQUtKLE9BQUwsQ0FBYTtBQUNsQkssU0FBUU4sT0FBT08sTUFBZixTQUF5QkosR0FEUDtBQUVsQkssWUFBUTtBQUNOLHNCQUFnQixrQkFEVjtBQUVOQyxjQUFRO0FBRkYsS0FGVTtBQU1sQkwsY0FOa0I7QUFPbEJDLFlBQVFBLFVBQVU7QUFQQSxHQUFiLEVBUUpLLElBUkksQ0FRQyxnQkFBWTtBQUFBLFFBQVZOLElBQVUsUUFBVkEsSUFBVTs7QUFDbEIsV0FBT0EsS0FBS08sSUFBTCxLQUFjLEdBQWQsR0FBb0Isa0JBQVFDLE9BQVIsQ0FBZ0JSLEtBQUtBLElBQXJCLENBQXBCLEdBQWlELGtCQUFRUyxNQUFSLENBQWVULEtBQUtVLEdBQXBCLENBQXhEO0FBQ0QsR0FWTSxDQUFQO0FBV0Q7O0FBRUQsU0FBU0MsTUFBVCxDQUFnQmIsT0FBaEIsRUFBeUI7QUFBQSxNQUNmQyxHQURlLEdBQ2lCRCxPQURqQixDQUNmQyxHQURlO0FBQUEsTUFDVmEsUUFEVSxHQUNpQmQsT0FEakIsQ0FDVmMsUUFEVTtBQUFBLE1BQ0FDLElBREEsR0FDaUJmLE9BRGpCLENBQ0FlLElBREE7QUFBQSxNQUNNWixNQUROLEdBQ2lCSCxPQURqQixDQUNNRyxNQUROOztBQUV2QixTQUFPLGVBQUthLFVBQUwsQ0FBZ0I7QUFDckJaLFNBQVFOLE9BQU9PLE1BQWYsU0FBeUJKLEdBREo7QUFFckJhLGNBQVVBLFFBRlc7QUFHckJDLFVBQU1BLElBSGU7QUFJckJaLFlBQVFBLFVBQVU7QUFKRyxHQUFoQixFQUtKSyxJQUxJLENBS0MsZUFBTztBQUNiLFdBQU9TLElBQUlDLE1BQUosS0FBZSxHQUFmLEdBQXFCLGtCQUFRUixPQUFSLENBQWdCTyxJQUFJZixJQUFwQixDQUFyQixHQUFpRCxrQkFBUVMsTUFBUixDQUFlTSxJQUFJRSxTQUFuQixDQUF4RDtBQUNELEdBUE0sQ0FBUDtBQVFEOztBQUVEQyxPQUFPQyxPQUFQLEdBQWlCO0FBQ2Z0QixrQkFEZTtBQUVmYztBQUZlLENBQWpCIiwiZmlsZSI6ImpmLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcbmltcG9ydCB7IGpmIH0gZnJvbSAnLi4vY29uZmlnJ1xuXG5jb25zdCBjb25maWcgPSBqZlxuXG5mdW5jdGlvbiByZXF1ZXN0KG9wdGlvbnMpIHtcbiAgY29uc3QgeyBhcGksIGRhdGEsIG1ldGhvZCB9ID0gb3B0aW9uc1xuICByZXR1cm4gd2VweS5yZXF1ZXN0KHtcbiAgICB1cmw6IGAke2NvbmZpZy5zZXJ2ZXJ9LyR7YXBpfWAsXG4gICAgaGVhZGVyOiB7XG4gICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgQWNjZXB0OiAnYXBwbGljYXRpb24vanNvbidcbiAgICB9LFxuICAgIGRhdGEsXG4gICAgbWV0aG9kOiBtZXRob2QgfHwgJ1BPU1QnXG4gIH0pLnRoZW4oKHtkYXRhfSkgPT4ge1xuICAgIHJldHVybiBkYXRhLmNvZGUgPT09IDIwMCA/IFByb21pc2UucmVzb2x2ZShkYXRhLmRhdGEpIDogUHJvbWlzZS5yZWplY3QoZGF0YS5tc2cpXG4gIH0pXG59XG5cbmZ1bmN0aW9uIHVwbG9hZChvcHRpb25zKSB7XG4gIGNvbnN0IHsgYXBpLCBmaWxlUGF0aCwgbmFtZSwgbWV0aG9kIH0gPSBvcHRpb25zXG4gIHJldHVybiB3ZXB5LnVwbG9hZEZpbGUoe1xuICAgIHVybDogYCR7Y29uZmlnLnNlcnZlcn0vJHthcGl9YCxcbiAgICBmaWxlUGF0aDogZmlsZVBhdGgsXG4gICAgbmFtZTogbmFtZSxcbiAgICBtZXRob2Q6IG1ldGhvZCB8fCAnUE9TVCdcbiAgfSkudGhlbihyZXMgPT4ge1xuICAgIHJldHVybiByZXMuc3RhdHVzID09PSAyMDAgPyBQcm9taXNlLnJlc29sdmUocmVzLmRhdGEpIDogUHJvbWlzZS5yZWplY3QocmVzLmVycm9yVGV4dClcbiAgfSlcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIHJlcXVlc3QsXG4gIHVwbG9hZFxufVxuIl19