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

module.exports = {
  request: request
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImpmLmpzIl0sIm5hbWVzIjpbImNvbmZpZyIsInJlcXVlc3QiLCJvcHRpb25zIiwiYXBpIiwiZGF0YSIsIm1ldGhvZCIsInVybCIsInNlcnZlciIsImhlYWRlciIsInRoZW4iLCJyZXMiLCJzdGF0dXMiLCJyZXNvbHZlIiwicmVqZWN0IiwiZXJyb3JUZXh0IiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUVBLElBQU1BLG1CQUFOOztBQUVBLFNBQVNDLE9BQVQsQ0FBaUJDLE9BQWpCLEVBQTBCO0FBQUEsTUFDaEJDLEdBRGdCLEdBQ01ELE9BRE4sQ0FDaEJDLEdBRGdCO0FBQUEsTUFDWEMsSUFEVyxHQUNNRixPQUROLENBQ1hFLElBRFc7QUFBQSxNQUNMQyxNQURLLEdBQ01ILE9BRE4sQ0FDTEcsTUFESzs7QUFFeEIsU0FBTyxlQUFLSixPQUFMLENBQWE7QUFDbEJLLFNBQVFOLE9BQU9PLE1BQWYsU0FBeUJKLEdBRFA7QUFFbEJLLFlBQVE7QUFDTixzQkFBZ0I7QUFEVixLQUZVO0FBS2xCSixjQUxrQjtBQU1sQkMsWUFBUUEsVUFBVTtBQU5BLEdBQWIsRUFPSkksSUFQSSxDQU9DLGVBQU87QUFDYixXQUFPQyxJQUFJQyxNQUFKLEtBQWUsR0FBZixHQUFxQixrQkFBUUMsT0FBUixDQUFnQkYsSUFBSU4sSUFBcEIsQ0FBckIsR0FBaUQsa0JBQVFTLE1BQVIsQ0FBZUgsSUFBSUksU0FBbkIsQ0FBeEQ7QUFDRCxHQVRNLENBQVA7QUFVRDs7QUFFREMsT0FBT0MsT0FBUCxHQUFpQjtBQUNmZjtBQURlLENBQWpCIiwiZmlsZSI6ImpmLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcbmltcG9ydCB7IGpmIH0gZnJvbSAnLi4vY29uZmlnJ1xuXG5jb25zdCBjb25maWcgPSBqZlxuXG5mdW5jdGlvbiByZXF1ZXN0KG9wdGlvbnMpIHtcbiAgY29uc3QgeyBhcGksIGRhdGEsIG1ldGhvZCB9ID0gb3B0aW9uc1xuICByZXR1cm4gd2VweS5yZXF1ZXN0KHtcbiAgICB1cmw6IGAke2NvbmZpZy5zZXJ2ZXJ9LyR7YXBpfWAsXG4gICAgaGVhZGVyOiB7XG4gICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCdcbiAgICB9LFxuICAgIGRhdGEsXG4gICAgbWV0aG9kOiBtZXRob2QgfHwgJ1BPU1QnXG4gIH0pLnRoZW4ocmVzID0+IHtcbiAgICByZXR1cm4gcmVzLnN0YXR1cyA9PT0gMjAwID8gUHJvbWlzZS5yZXNvbHZlKHJlcy5kYXRhKSA6IFByb21pc2UucmVqZWN0KHJlcy5lcnJvclRleHQpXG4gIH0pXG59XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICByZXF1ZXN0XG59XG4iXX0=