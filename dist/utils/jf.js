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

  console.log('url', config.server + '/' + api);
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

    console.log('data', data);
    if (!data.code) {
      console.log(data);
      return _promise2.default.resolve(data.results);
    }
    return data.code === 200 ? _promise2.default.resolve(data.data) : _promise2.default.reject(data.msg);
  });
}

function upload(options) {
  var api = options.api,
      formData = options.formData,
      filePath = options.filePath,
      name = options.name,
      method = options.method;
  // console.log(formData)

  return _wepy2.default.uploadFile({
    url: config.server + '/' + api,
    filePath: filePath,
    name: name,
    method: method || 'POST',
    formData: formData
  }).then(function (_ref2) {
    var data = _ref2.data;

    console.log(data);
    data = JSON.parse(data);
    console.log(data);
    return data.code === 200 ? _promise2.default.resolve(data.data) : _promise2.default.reject(data.msg);
  });
}

module.exports = {
  request: request,
  upload: upload
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImpmLmpzIl0sIm5hbWVzIjpbImNvbmZpZyIsInJlcXVlc3QiLCJvcHRpb25zIiwiYXBpIiwiZGF0YSIsIm1ldGhvZCIsImNvbnNvbGUiLCJsb2ciLCJzZXJ2ZXIiLCJ1cmwiLCJoZWFkZXIiLCJBY2NlcHQiLCJ0aGVuIiwiY29kZSIsInJlc29sdmUiLCJyZXN1bHRzIiwicmVqZWN0IiwibXNnIiwidXBsb2FkIiwiZm9ybURhdGEiLCJmaWxlUGF0aCIsIm5hbWUiLCJ1cGxvYWRGaWxlIiwiSlNPTiIsInBhcnNlIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUVBLElBQU1BLG1CQUFOOztBQUVBLFNBQVNDLE9BQVQsQ0FBaUJDLE9BQWpCLEVBQTBCO0FBQUEsTUFDaEJDLEdBRGdCLEdBQ01ELE9BRE4sQ0FDaEJDLEdBRGdCO0FBQUEsTUFDWEMsSUFEVyxHQUNNRixPQUROLENBQ1hFLElBRFc7QUFBQSxNQUNMQyxNQURLLEdBQ01ILE9BRE4sQ0FDTEcsTUFESzs7QUFFeEJDLFVBQVFDLEdBQVIsQ0FBWSxLQUFaLEVBQXNCUCxPQUFPUSxNQUE3QixTQUF1Q0wsR0FBdkM7QUFDQSxTQUFPLGVBQUtGLE9BQUwsQ0FBYTtBQUNsQlEsU0FBUVQsT0FBT1EsTUFBZixTQUF5QkwsR0FEUDtBQUVsQk8sWUFBUTtBQUNOLHNCQUFnQixrQkFEVjtBQUVOQyxjQUFRO0FBRkYsS0FGVTtBQU1sQlAsY0FOa0I7QUFPbEJDLFlBQVFBLFVBQVU7QUFQQSxHQUFiLEVBUUpPLElBUkksQ0FRQyxnQkFBWTtBQUFBLFFBQVZSLElBQVUsUUFBVkEsSUFBVTs7QUFDbEJFLFlBQVFDLEdBQVIsQ0FBWSxNQUFaLEVBQW9CSCxJQUFwQjtBQUNBLFFBQUksQ0FBQ0EsS0FBS1MsSUFBVixFQUFnQjtBQUNkUCxjQUFRQyxHQUFSLENBQVlILElBQVo7QUFDQSxhQUFPLGtCQUFRVSxPQUFSLENBQWdCVixLQUFLVyxPQUFyQixDQUFQO0FBQ0Q7QUFDRCxXQUFPWCxLQUFLUyxJQUFMLEtBQWMsR0FBZCxHQUFvQixrQkFBUUMsT0FBUixDQUFnQlYsS0FBS0EsSUFBckIsQ0FBcEIsR0FBaUQsa0JBQVFZLE1BQVIsQ0FBZVosS0FBS2EsR0FBcEIsQ0FBeEQ7QUFDRCxHQWZNLENBQVA7QUFnQkQ7O0FBRUQsU0FBU0MsTUFBVCxDQUFnQmhCLE9BQWhCLEVBQXlCO0FBQUEsTUFDZkMsR0FEZSxHQUMyQkQsT0FEM0IsQ0FDZkMsR0FEZTtBQUFBLE1BQ1ZnQixRQURVLEdBQzJCakIsT0FEM0IsQ0FDVmlCLFFBRFU7QUFBQSxNQUNBQyxRQURBLEdBQzJCbEIsT0FEM0IsQ0FDQWtCLFFBREE7QUFBQSxNQUNVQyxJQURWLEdBQzJCbkIsT0FEM0IsQ0FDVW1CLElBRFY7QUFBQSxNQUNnQmhCLE1BRGhCLEdBQzJCSCxPQUQzQixDQUNnQkcsTUFEaEI7QUFFdkI7O0FBQ0EsU0FBTyxlQUFLaUIsVUFBTCxDQUFnQjtBQUNyQmIsU0FBUVQsT0FBT1EsTUFBZixTQUF5QkwsR0FESjtBQUVyQmlCLGNBQVVBLFFBRlc7QUFHckJDLFVBQU1BLElBSGU7QUFJckJoQixZQUFRQSxVQUFVLE1BSkc7QUFLckJjLGNBQVVBO0FBTFcsR0FBaEIsRUFNSlAsSUFOSSxDQU1DLGlCQUFjO0FBQUEsUUFBWFIsSUFBVyxTQUFYQSxJQUFXOztBQUNwQkUsWUFBUUMsR0FBUixDQUFZSCxJQUFaO0FBQ0FBLFdBQU9tQixLQUFLQyxLQUFMLENBQVdwQixJQUFYLENBQVA7QUFDQUUsWUFBUUMsR0FBUixDQUFZSCxJQUFaO0FBQ0EsV0FBT0EsS0FBS1MsSUFBTCxLQUFjLEdBQWQsR0FBb0Isa0JBQVFDLE9BQVIsQ0FBZ0JWLEtBQUtBLElBQXJCLENBQXBCLEdBQWlELGtCQUFRWSxNQUFSLENBQWVaLEtBQUthLEdBQXBCLENBQXhEO0FBQ0QsR0FYTSxDQUFQO0FBWUQ7O0FBRURRLE9BQU9DLE9BQVAsR0FBaUI7QUFDZnpCLGtCQURlO0FBRWZpQjtBQUZlLENBQWpCIiwiZmlsZSI6ImpmLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcclxuaW1wb3J0IHsgamYgfSBmcm9tICcuLi9jb25maWcnXHJcblxyXG5jb25zdCBjb25maWcgPSBqZlxyXG5cclxuZnVuY3Rpb24gcmVxdWVzdChvcHRpb25zKSB7XHJcbiAgY29uc3QgeyBhcGksIGRhdGEsIG1ldGhvZCB9ID0gb3B0aW9uc1xyXG4gIGNvbnNvbGUubG9nKCd1cmwnLCBgJHtjb25maWcuc2VydmVyfS8ke2FwaX1gKVxyXG4gIHJldHVybiB3ZXB5LnJlcXVlc3Qoe1xyXG4gICAgdXJsOiBgJHtjb25maWcuc2VydmVyfS8ke2FwaX1gLFxyXG4gICAgaGVhZGVyOiB7XHJcbiAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgIEFjY2VwdDogJ2FwcGxpY2F0aW9uL2pzb24nXHJcbiAgICB9LFxyXG4gICAgZGF0YSxcclxuICAgIG1ldGhvZDogbWV0aG9kIHx8ICdQT1NUJ1xyXG4gIH0pLnRoZW4oKHtkYXRhfSkgPT4ge1xyXG4gICAgY29uc29sZS5sb2coJ2RhdGEnLCBkYXRhKVxyXG4gICAgaWYgKCFkYXRhLmNvZGUpIHtcclxuICAgICAgY29uc29sZS5sb2coZGF0YSlcclxuICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShkYXRhLnJlc3VsdHMpXHJcbiAgICB9XHJcbiAgICByZXR1cm4gZGF0YS5jb2RlID09PSAyMDAgPyBQcm9taXNlLnJlc29sdmUoZGF0YS5kYXRhKSA6IFByb21pc2UucmVqZWN0KGRhdGEubXNnKVxyXG4gIH0pXHJcbn1cclxuXHJcbmZ1bmN0aW9uIHVwbG9hZChvcHRpb25zKSB7XHJcbiAgY29uc3QgeyBhcGksIGZvcm1EYXRhLCBmaWxlUGF0aCwgbmFtZSwgbWV0aG9kIH0gPSBvcHRpb25zXHJcbiAgLy8gY29uc29sZS5sb2coZm9ybURhdGEpXHJcbiAgcmV0dXJuIHdlcHkudXBsb2FkRmlsZSh7XHJcbiAgICB1cmw6IGAke2NvbmZpZy5zZXJ2ZXJ9LyR7YXBpfWAsXHJcbiAgICBmaWxlUGF0aDogZmlsZVBhdGgsXHJcbiAgICBuYW1lOiBuYW1lLFxyXG4gICAgbWV0aG9kOiBtZXRob2QgfHwgJ1BPU1QnLFxyXG4gICAgZm9ybURhdGE6IGZvcm1EYXRhXHJcbiAgfSkudGhlbigoeyBkYXRhIH0pID0+IHtcclxuICAgIGNvbnNvbGUubG9nKGRhdGEpXHJcbiAgICBkYXRhID0gSlNPTi5wYXJzZShkYXRhKVxyXG4gICAgY29uc29sZS5sb2coZGF0YSlcclxuICAgIHJldHVybiBkYXRhLmNvZGUgPT09IDIwMCA/IFByb21pc2UucmVzb2x2ZShkYXRhLmRhdGEpIDogUHJvbWlzZS5yZWplY3QoZGF0YS5tc2cpXHJcbiAgfSlcclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSB7XHJcbiAgcmVxdWVzdCxcclxuICB1cGxvYWRcclxufVxyXG4iXX0=