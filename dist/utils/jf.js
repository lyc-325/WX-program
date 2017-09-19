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

  console.log('url', options);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImpmLmpzIl0sIm5hbWVzIjpbImNvbmZpZyIsInJlcXVlc3QiLCJvcHRpb25zIiwiYXBpIiwiZGF0YSIsIm1ldGhvZCIsImNvbnNvbGUiLCJsb2ciLCJ1cmwiLCJzZXJ2ZXIiLCJoZWFkZXIiLCJBY2NlcHQiLCJ0aGVuIiwiY29kZSIsInJlc29sdmUiLCJyZXN1bHRzIiwicmVqZWN0IiwibXNnIiwidXBsb2FkIiwiZm9ybURhdGEiLCJmaWxlUGF0aCIsIm5hbWUiLCJ1cGxvYWRGaWxlIiwiSlNPTiIsInBhcnNlIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUVBLElBQU1BLG1CQUFOOztBQUVBLFNBQVNDLE9BQVQsQ0FBaUJDLE9BQWpCLEVBQTBCO0FBQUEsTUFDaEJDLEdBRGdCLEdBQ01ELE9BRE4sQ0FDaEJDLEdBRGdCO0FBQUEsTUFDWEMsSUFEVyxHQUNNRixPQUROLENBQ1hFLElBRFc7QUFBQSxNQUNMQyxNQURLLEdBQ01ILE9BRE4sQ0FDTEcsTUFESzs7QUFFeEJDLFVBQVFDLEdBQVIsQ0FBWSxLQUFaLEVBQW1CTCxPQUFuQjtBQUNBLFNBQU8sZUFBS0QsT0FBTCxDQUFhO0FBQ2xCTyxTQUFRUixPQUFPUyxNQUFmLFNBQXlCTixHQURQO0FBRWxCTyxZQUFRO0FBQ04sc0JBQWdCLGtCQURWO0FBRU5DLGNBQVE7QUFGRixLQUZVO0FBTWxCUCxjQU5rQjtBQU9sQkMsWUFBUUEsVUFBVTtBQVBBLEdBQWIsRUFRSk8sSUFSSSxDQVFDLGdCQUFZO0FBQUEsUUFBVlIsSUFBVSxRQUFWQSxJQUFVOztBQUNsQkUsWUFBUUMsR0FBUixDQUFZLE1BQVosRUFBb0JILElBQXBCO0FBQ0EsUUFBSSxDQUFDQSxLQUFLUyxJQUFWLEVBQWdCO0FBQ2RQLGNBQVFDLEdBQVIsQ0FBWUgsSUFBWjtBQUNBLGFBQU8sa0JBQVFVLE9BQVIsQ0FBZ0JWLEtBQUtXLE9BQXJCLENBQVA7QUFDRDtBQUNELFdBQU9YLEtBQUtTLElBQUwsS0FBYyxHQUFkLEdBQW9CLGtCQUFRQyxPQUFSLENBQWdCVixLQUFLQSxJQUFyQixDQUFwQixHQUFpRCxrQkFBUVksTUFBUixDQUFlWixLQUFLYSxHQUFwQixDQUF4RDtBQUNELEdBZk0sQ0FBUDtBQWdCRDs7QUFFRCxTQUFTQyxNQUFULENBQWdCaEIsT0FBaEIsRUFBeUI7QUFBQSxNQUNmQyxHQURlLEdBQzJCRCxPQUQzQixDQUNmQyxHQURlO0FBQUEsTUFDVmdCLFFBRFUsR0FDMkJqQixPQUQzQixDQUNWaUIsUUFEVTtBQUFBLE1BQ0FDLFFBREEsR0FDMkJsQixPQUQzQixDQUNBa0IsUUFEQTtBQUFBLE1BQ1VDLElBRFYsR0FDMkJuQixPQUQzQixDQUNVbUIsSUFEVjtBQUFBLE1BQ2dCaEIsTUFEaEIsR0FDMkJILE9BRDNCLENBQ2dCRyxNQURoQjtBQUV2Qjs7QUFDQSxTQUFPLGVBQUtpQixVQUFMLENBQWdCO0FBQ3JCZCxTQUFRUixPQUFPUyxNQUFmLFNBQXlCTixHQURKO0FBRXJCaUIsY0FBVUEsUUFGVztBQUdyQkMsVUFBTUEsSUFIZTtBQUlyQmhCLFlBQVFBLFVBQVUsTUFKRztBQUtyQmMsY0FBVUE7QUFMVyxHQUFoQixFQU1KUCxJQU5JLENBTUMsaUJBQWM7QUFBQSxRQUFYUixJQUFXLFNBQVhBLElBQVc7O0FBQ3BCRSxZQUFRQyxHQUFSLENBQVlILElBQVo7QUFDQUEsV0FBT21CLEtBQUtDLEtBQUwsQ0FBV3BCLElBQVgsQ0FBUDtBQUNBRSxZQUFRQyxHQUFSLENBQVlILElBQVo7QUFDQSxXQUFPQSxLQUFLUyxJQUFMLEtBQWMsR0FBZCxHQUFvQixrQkFBUUMsT0FBUixDQUFnQlYsS0FBS0EsSUFBckIsQ0FBcEIsR0FBaUQsa0JBQVFZLE1BQVIsQ0FBZVosS0FBS2EsR0FBcEIsQ0FBeEQ7QUFDRCxHQVhNLENBQVA7QUFZRDs7QUFFRFEsT0FBT0MsT0FBUCxHQUFpQjtBQUNmekIsa0JBRGU7QUFFZmlCO0FBRmUsQ0FBakIiLCJmaWxlIjoiamYuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xyXG5pbXBvcnQgeyBqZiB9IGZyb20gJy4uL2NvbmZpZydcclxuXHJcbmNvbnN0IGNvbmZpZyA9IGpmXHJcblxyXG5mdW5jdGlvbiByZXF1ZXN0KG9wdGlvbnMpIHtcclxuICBjb25zdCB7IGFwaSwgZGF0YSwgbWV0aG9kIH0gPSBvcHRpb25zXHJcbiAgY29uc29sZS5sb2coJ3VybCcsIG9wdGlvbnMpXHJcbiAgcmV0dXJuIHdlcHkucmVxdWVzdCh7XHJcbiAgICB1cmw6IGAke2NvbmZpZy5zZXJ2ZXJ9LyR7YXBpfWAsXHJcbiAgICBoZWFkZXI6IHtcclxuICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgQWNjZXB0OiAnYXBwbGljYXRpb24vanNvbidcclxuICAgIH0sXHJcbiAgICBkYXRhLFxyXG4gICAgbWV0aG9kOiBtZXRob2QgfHwgJ1BPU1QnXHJcbiAgfSkudGhlbigoe2RhdGF9KSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZygnZGF0YScsIGRhdGEpXHJcbiAgICBpZiAoIWRhdGEuY29kZSkge1xyXG4gICAgICBjb25zb2xlLmxvZyhkYXRhKVxyXG4gICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKGRhdGEucmVzdWx0cylcclxuICAgIH1cclxuICAgIHJldHVybiBkYXRhLmNvZGUgPT09IDIwMCA/IFByb21pc2UucmVzb2x2ZShkYXRhLmRhdGEpIDogUHJvbWlzZS5yZWplY3QoZGF0YS5tc2cpXHJcbiAgfSlcclxufVxyXG5cclxuZnVuY3Rpb24gdXBsb2FkKG9wdGlvbnMpIHtcclxuICBjb25zdCB7IGFwaSwgZm9ybURhdGEsIGZpbGVQYXRoLCBuYW1lLCBtZXRob2QgfSA9IG9wdGlvbnNcclxuICAvLyBjb25zb2xlLmxvZyhmb3JtRGF0YSlcclxuICByZXR1cm4gd2VweS51cGxvYWRGaWxlKHtcclxuICAgIHVybDogYCR7Y29uZmlnLnNlcnZlcn0vJHthcGl9YCxcclxuICAgIGZpbGVQYXRoOiBmaWxlUGF0aCxcclxuICAgIG5hbWU6IG5hbWUsXHJcbiAgICBtZXRob2Q6IG1ldGhvZCB8fCAnUE9TVCcsXHJcbiAgICBmb3JtRGF0YTogZm9ybURhdGFcclxuICB9KS50aGVuKCh7IGRhdGEgfSkgPT4ge1xyXG4gICAgY29uc29sZS5sb2coZGF0YSlcclxuICAgIGRhdGEgPSBKU09OLnBhcnNlKGRhdGEpXHJcbiAgICBjb25zb2xlLmxvZyhkYXRhKVxyXG4gICAgcmV0dXJuIGRhdGEuY29kZSA9PT0gMjAwID8gUHJvbWlzZS5yZXNvbHZlKGRhdGEuZGF0YSkgOiBQcm9taXNlLnJlamVjdChkYXRhLm1zZylcclxuICB9KVxyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IHtcclxuICByZXF1ZXN0LFxyXG4gIHVwbG9hZFxyXG59XHJcbiJdfQ==