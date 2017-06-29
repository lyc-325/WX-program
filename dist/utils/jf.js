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
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    data: data,
    method: method || 'POST'
  }).then(function (res) {
    return res.status === 200 ? _promise2.default.resolve(res.data) : _promise2.default.reject(res.errorText);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImpmLmpzIl0sIm5hbWVzIjpbImNvbmZpZyIsInJlcXVlc3QiLCJvcHRpb25zIiwiYXBpIiwiZGF0YSIsIm1ldGhvZCIsInVybCIsInNlcnZlciIsImhlYWRlciIsInRoZW4iLCJyZXMiLCJzdGF0dXMiLCJyZXNvbHZlIiwicmVqZWN0IiwiZXJyb3JUZXh0IiwidXBsb2FkIiwiZmlsZVBhdGgiLCJuYW1lIiwidXBsb2FkRmlsZSIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFFQSxJQUFNQSxtQkFBTjs7QUFFQSxTQUFTQyxPQUFULENBQWlCQyxPQUFqQixFQUEwQjtBQUFBLE1BQ2hCQyxHQURnQixHQUNNRCxPQUROLENBQ2hCQyxHQURnQjtBQUFBLE1BQ1hDLElBRFcsR0FDTUYsT0FETixDQUNYRSxJQURXO0FBQUEsTUFDTEMsTUFESyxHQUNNSCxPQUROLENBQ0xHLE1BREs7O0FBRXhCLFNBQU8sZUFBS0osT0FBTCxDQUFhO0FBQ2xCSyxTQUFRTixPQUFPTyxNQUFmLFNBQXlCSixHQURQO0FBRWxCSyxZQUFRO0FBQ04sc0JBQWdCO0FBRFYsS0FGVTtBQUtsQkosY0FMa0I7QUFNbEJDLFlBQVFBLFVBQVU7QUFOQSxHQUFiLEVBT0pJLElBUEksQ0FPQyxlQUFPO0FBQ2IsV0FBT0MsSUFBSUMsTUFBSixLQUFlLEdBQWYsR0FBcUIsa0JBQVFDLE9BQVIsQ0FBZ0JGLElBQUlOLElBQXBCLENBQXJCLEdBQWlELGtCQUFRUyxNQUFSLENBQWVILElBQUlJLFNBQW5CLENBQXhEO0FBQ0QsR0FUTSxDQUFQO0FBVUQ7O0FBRUQsU0FBU0MsTUFBVCxDQUFnQmIsT0FBaEIsRUFBeUI7QUFBQSxNQUNmQyxHQURlLEdBQ2lCRCxPQURqQixDQUNmQyxHQURlO0FBQUEsTUFDVmEsUUFEVSxHQUNpQmQsT0FEakIsQ0FDVmMsUUFEVTtBQUFBLE1BQ0FDLElBREEsR0FDaUJmLE9BRGpCLENBQ0FlLElBREE7QUFBQSxNQUNNWixNQUROLEdBQ2lCSCxPQURqQixDQUNNRyxNQUROOztBQUV2QixTQUFPLGVBQUthLFVBQUwsQ0FBZ0I7QUFDckJaLFNBQVFOLE9BQU9PLE1BQWYsU0FBeUJKLEdBREo7QUFFckJhLGNBQVVBLFFBRlc7QUFHckJDLFVBQU1BLElBSGU7QUFJckJaLFlBQVFBLFVBQVU7QUFKRyxHQUFoQixFQUtKSSxJQUxJLENBS0MsZUFBTztBQUNiLFdBQU9DLElBQUlDLE1BQUosS0FBZSxHQUFmLEdBQXFCLGtCQUFRQyxPQUFSLENBQWdCRixJQUFJTixJQUFwQixDQUFyQixHQUFpRCxrQkFBUVMsTUFBUixDQUFlSCxJQUFJSSxTQUFuQixDQUF4RDtBQUNELEdBUE0sQ0FBUDtBQVFEOztBQUVESyxPQUFPQyxPQUFQLEdBQWlCO0FBQ2ZuQixrQkFEZTtBQUVmYztBQUZlLENBQWpCIiwiZmlsZSI6ImpmLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcbmltcG9ydCB7IGpmIH0gZnJvbSAnLi4vY29uZmlnJ1xuXG5jb25zdCBjb25maWcgPSBqZlxuXG5mdW5jdGlvbiByZXF1ZXN0KG9wdGlvbnMpIHtcbiAgY29uc3QgeyBhcGksIGRhdGEsIG1ldGhvZCB9ID0gb3B0aW9uc1xuICByZXR1cm4gd2VweS5yZXF1ZXN0KHtcbiAgICB1cmw6IGAke2NvbmZpZy5zZXJ2ZXJ9LyR7YXBpfWAsXG4gICAgaGVhZGVyOiB7XG4gICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCdcbiAgICB9LFxuICAgIGRhdGEsXG4gICAgbWV0aG9kOiBtZXRob2QgfHwgJ1BPU1QnXG4gIH0pLnRoZW4ocmVzID0+IHtcbiAgICByZXR1cm4gcmVzLnN0YXR1cyA9PT0gMjAwID8gUHJvbWlzZS5yZXNvbHZlKHJlcy5kYXRhKSA6IFByb21pc2UucmVqZWN0KHJlcy5lcnJvclRleHQpXG4gIH0pXG59XG5cbmZ1bmN0aW9uIHVwbG9hZChvcHRpb25zKSB7XG4gIGNvbnN0IHsgYXBpLCBmaWxlUGF0aCwgbmFtZSwgbWV0aG9kIH0gPSBvcHRpb25zXG4gIHJldHVybiB3ZXB5LnVwbG9hZEZpbGUoe1xuICAgIHVybDogYCR7Y29uZmlnLnNlcnZlcn0vJHthcGl9YCxcbiAgICBmaWxlUGF0aDogZmlsZVBhdGgsXG4gICAgbmFtZTogbmFtZSxcbiAgICBtZXRob2Q6IG1ldGhvZCB8fCAnUE9TVCdcbiAgfSkudGhlbihyZXMgPT4ge1xuICAgIHJldHVybiByZXMuc3RhdHVzID09PSAyMDAgPyBQcm9taXNlLnJlc29sdmUocmVzLmRhdGEpIDogUHJvbWlzZS5yZWplY3QocmVzLmVycm9yVGV4dClcbiAgfSlcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIHJlcXVlc3QsXG4gIHVwbG9hZFxufVxuIl19