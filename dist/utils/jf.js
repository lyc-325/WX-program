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

module.exports = {
  request: request
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImpmLmpzIl0sIm5hbWVzIjpbImNvbmZpZyIsInJlcXVlc3QiLCJvcHRpb25zIiwiYXBpIiwiZGF0YSIsIm1ldGhvZCIsInVybCIsInNlcnZlciIsImhlYWRlciIsIkFjY2VwdCIsInRoZW4iLCJjb2RlIiwicmVzb2x2ZSIsInJlamVjdCIsIm1zZyIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFFQSxJQUFNQSxtQkFBTjs7QUFFQSxTQUFTQyxPQUFULENBQWlCQyxPQUFqQixFQUEwQjtBQUFBLE1BQ2hCQyxHQURnQixHQUNNRCxPQUROLENBQ2hCQyxHQURnQjtBQUFBLE1BQ1hDLElBRFcsR0FDTUYsT0FETixDQUNYRSxJQURXO0FBQUEsTUFDTEMsTUFESyxHQUNNSCxPQUROLENBQ0xHLE1BREs7O0FBRXhCLFNBQU8sZUFBS0osT0FBTCxDQUFhO0FBQ2xCSyxTQUFRTixPQUFPTyxNQUFmLFNBQXlCSixHQURQO0FBRWxCSyxZQUFRO0FBQ04sc0JBQWdCLGtCQURWO0FBRU5DLGNBQVE7QUFGRixLQUZVO0FBTWxCTCxjQU5rQjtBQU9sQkMsWUFBUUEsVUFBVTtBQVBBLEdBQWIsRUFRSkssSUFSSSxDQVFDLGdCQUFZO0FBQUEsUUFBVk4sSUFBVSxRQUFWQSxJQUFVOztBQUNsQixXQUFPQSxLQUFLTyxJQUFMLEtBQWMsR0FBZCxHQUFvQixrQkFBUUMsT0FBUixDQUFnQlIsS0FBS0EsSUFBckIsQ0FBcEIsR0FBaUQsa0JBQVFTLE1BQVIsQ0FBZVQsS0FBS1UsR0FBcEIsQ0FBeEQ7QUFDRCxHQVZNLENBQVA7QUFXRDs7QUFFREMsT0FBT0MsT0FBUCxHQUFpQjtBQUNmZjtBQURlLENBQWpCIiwiZmlsZSI6ImpmLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcbmltcG9ydCB7IGpmIH0gZnJvbSAnLi4vY29uZmlnJ1xuXG5jb25zdCBjb25maWcgPSBqZlxuXG5mdW5jdGlvbiByZXF1ZXN0KG9wdGlvbnMpIHtcbiAgY29uc3QgeyBhcGksIGRhdGEsIG1ldGhvZCB9ID0gb3B0aW9uc1xuICByZXR1cm4gd2VweS5yZXF1ZXN0KHtcbiAgICB1cmw6IGAke2NvbmZpZy5zZXJ2ZXJ9LyR7YXBpfWAsXG4gICAgaGVhZGVyOiB7XG4gICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgQWNjZXB0OiAnYXBwbGljYXRpb24vanNvbidcbiAgICB9LFxuICAgIGRhdGEsXG4gICAgbWV0aG9kOiBtZXRob2QgfHwgJ1BPU1QnXG4gIH0pLnRoZW4oKHtkYXRhfSkgPT4ge1xuICAgIHJldHVybiBkYXRhLmNvZGUgPT09IDIwMCA/IFByb21pc2UucmVzb2x2ZShkYXRhLmRhdGEpIDogUHJvbWlzZS5yZWplY3QoZGF0YS5tc2cpXG4gIH0pXG59XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICByZXF1ZXN0XG59XG4iXX0=