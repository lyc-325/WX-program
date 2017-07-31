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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImpmLmpzIl0sIm5hbWVzIjpbImNvbmZpZyIsInJlcXVlc3QiLCJvcHRpb25zIiwiYXBpIiwiZGF0YSIsIm1ldGhvZCIsImNvbnNvbGUiLCJsb2ciLCJzZXJ2ZXIiLCJ1cmwiLCJoZWFkZXIiLCJBY2NlcHQiLCJ0aGVuIiwiY29kZSIsInJlc29sdmUiLCJyZXN1bHRzIiwicmVqZWN0IiwibXNnIiwidXBsb2FkIiwiZm9ybURhdGEiLCJmaWxlUGF0aCIsIm5hbWUiLCJ1cGxvYWRGaWxlIiwiSlNPTiIsInBhcnNlIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUVBLElBQU1BLG1CQUFOOztBQUVBLFNBQVNDLE9BQVQsQ0FBaUJDLE9BQWpCLEVBQTBCO0FBQUEsTUFDaEJDLEdBRGdCLEdBQ01ELE9BRE4sQ0FDaEJDLEdBRGdCO0FBQUEsTUFDWEMsSUFEVyxHQUNNRixPQUROLENBQ1hFLElBRFc7QUFBQSxNQUNMQyxNQURLLEdBQ01ILE9BRE4sQ0FDTEcsTUFESzs7QUFFeEJDLFVBQVFDLEdBQVIsQ0FBWSxLQUFaLEVBQXNCUCxPQUFPUSxNQUE3QixTQUF1Q0wsR0FBdkM7QUFDQSxTQUFPLGVBQUtGLE9BQUwsQ0FBYTtBQUNsQlEsU0FBUVQsT0FBT1EsTUFBZixTQUF5QkwsR0FEUDtBQUVsQk8sWUFBUTtBQUNOLHNCQUFnQixrQkFEVjtBQUVOQyxjQUFRO0FBRkYsS0FGVTtBQU1sQlAsY0FOa0I7QUFPbEJDLFlBQVFBLFVBQVU7QUFQQSxHQUFiLEVBUUpPLElBUkksQ0FRQyxnQkFBWTtBQUFBLFFBQVZSLElBQVUsUUFBVkEsSUFBVTs7QUFDbEJFLFlBQVFDLEdBQVIsQ0FBWSxNQUFaLEVBQW9CSCxJQUFwQjtBQUNBLFFBQUksQ0FBQ0EsS0FBS1MsSUFBVixFQUFnQjtBQUNkUCxjQUFRQyxHQUFSLENBQVlILElBQVo7QUFDQSxhQUFPLGtCQUFRVSxPQUFSLENBQWdCVixLQUFLVyxPQUFyQixDQUFQO0FBQ0Q7QUFDRCxXQUFPWCxLQUFLUyxJQUFMLEtBQWMsR0FBZCxHQUFvQixrQkFBUUMsT0FBUixDQUFnQlYsS0FBS0EsSUFBckIsQ0FBcEIsR0FBaUQsa0JBQVFZLE1BQVIsQ0FBZVosS0FBS2EsR0FBcEIsQ0FBeEQ7QUFDRCxHQWZNLENBQVA7QUFnQkQ7O0FBRUQsU0FBU0MsTUFBVCxDQUFnQmhCLE9BQWhCLEVBQXlCO0FBQUEsTUFDZkMsR0FEZSxHQUMyQkQsT0FEM0IsQ0FDZkMsR0FEZTtBQUFBLE1BQ1ZnQixRQURVLEdBQzJCakIsT0FEM0IsQ0FDVmlCLFFBRFU7QUFBQSxNQUNBQyxRQURBLEdBQzJCbEIsT0FEM0IsQ0FDQWtCLFFBREE7QUFBQSxNQUNVQyxJQURWLEdBQzJCbkIsT0FEM0IsQ0FDVW1CLElBRFY7QUFBQSxNQUNnQmhCLE1BRGhCLEdBQzJCSCxPQUQzQixDQUNnQkcsTUFEaEI7QUFFdkI7O0FBQ0EsU0FBTyxlQUFLaUIsVUFBTCxDQUFnQjtBQUNyQmIsU0FBUVQsT0FBT1EsTUFBZixTQUF5QkwsR0FESjtBQUVyQmlCLGNBQVVBLFFBRlc7QUFHckJDLFVBQU1BLElBSGU7QUFJckJoQixZQUFRQSxVQUFVLE1BSkc7QUFLckJjLGNBQVVBO0FBTFcsR0FBaEIsRUFNSlAsSUFOSSxDQU1DLGlCQUFjO0FBQUEsUUFBWFIsSUFBVyxTQUFYQSxJQUFXOztBQUNwQkUsWUFBUUMsR0FBUixDQUFZSCxJQUFaO0FBQ0FBLFdBQU9tQixLQUFLQyxLQUFMLENBQVdwQixJQUFYLENBQVA7QUFDQUUsWUFBUUMsR0FBUixDQUFZSCxJQUFaO0FBQ0EsV0FBT0EsS0FBS1MsSUFBTCxLQUFjLEdBQWQsR0FBb0Isa0JBQVFDLE9BQVIsQ0FBZ0JWLEtBQUtBLElBQXJCLENBQXBCLEdBQWlELGtCQUFRWSxNQUFSLENBQWVaLEtBQUthLEdBQXBCLENBQXhEO0FBQ0QsR0FYTSxDQUFQO0FBWUQ7O0FBRURRLE9BQU9DLE9BQVAsR0FBaUI7QUFDZnpCLGtCQURlO0FBRWZpQjtBQUZlLENBQWpCIiwiZmlsZSI6ImpmLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcbmltcG9ydCB7IGpmIH0gZnJvbSAnLi4vY29uZmlnJ1xuXG5jb25zdCBjb25maWcgPSBqZlxuXG5mdW5jdGlvbiByZXF1ZXN0KG9wdGlvbnMpIHtcbiAgY29uc3QgeyBhcGksIGRhdGEsIG1ldGhvZCB9ID0gb3B0aW9uc1xuICBjb25zb2xlLmxvZygndXJsJywgYCR7Y29uZmlnLnNlcnZlcn0vJHthcGl9YClcbiAgcmV0dXJuIHdlcHkucmVxdWVzdCh7XG4gICAgdXJsOiBgJHtjb25maWcuc2VydmVyfS8ke2FwaX1gLFxuICAgIGhlYWRlcjoge1xuICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgIEFjY2VwdDogJ2FwcGxpY2F0aW9uL2pzb24nXG4gICAgfSxcbiAgICBkYXRhLFxuICAgIG1ldGhvZDogbWV0aG9kIHx8ICdQT1NUJ1xuICB9KS50aGVuKCh7ZGF0YX0pID0+IHtcbiAgICBjb25zb2xlLmxvZygnZGF0YScsIGRhdGEpXG4gICAgaWYgKCFkYXRhLmNvZGUpIHtcbiAgICAgIGNvbnNvbGUubG9nKGRhdGEpXG4gICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKGRhdGEucmVzdWx0cylcbiAgICB9XG4gICAgcmV0dXJuIGRhdGEuY29kZSA9PT0gMjAwID8gUHJvbWlzZS5yZXNvbHZlKGRhdGEuZGF0YSkgOiBQcm9taXNlLnJlamVjdChkYXRhLm1zZylcbiAgfSlcbn1cblxuZnVuY3Rpb24gdXBsb2FkKG9wdGlvbnMpIHtcbiAgY29uc3QgeyBhcGksIGZvcm1EYXRhLCBmaWxlUGF0aCwgbmFtZSwgbWV0aG9kIH0gPSBvcHRpb25zXG4gIC8vIGNvbnNvbGUubG9nKGZvcm1EYXRhKVxuICByZXR1cm4gd2VweS51cGxvYWRGaWxlKHtcbiAgICB1cmw6IGAke2NvbmZpZy5zZXJ2ZXJ9LyR7YXBpfWAsXG4gICAgZmlsZVBhdGg6IGZpbGVQYXRoLFxuICAgIG5hbWU6IG5hbWUsXG4gICAgbWV0aG9kOiBtZXRob2QgfHwgJ1BPU1QnLFxuICAgIGZvcm1EYXRhOiBmb3JtRGF0YVxuICB9KS50aGVuKCh7IGRhdGEgfSkgPT4ge1xuICAgIGNvbnNvbGUubG9nKGRhdGEpXG4gICAgZGF0YSA9IEpTT04ucGFyc2UoZGF0YSlcbiAgICBjb25zb2xlLmxvZyhkYXRhKVxuICAgIHJldHVybiBkYXRhLmNvZGUgPT09IDIwMCA/IFByb21pc2UucmVzb2x2ZShkYXRhLmRhdGEpIDogUHJvbWlzZS5yZWplY3QoZGF0YS5tc2cpXG4gIH0pXG59XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICByZXF1ZXN0LFxuICB1cGxvYWRcbn1cbiJdfQ==