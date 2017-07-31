'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.log = exports.info = exports.error = undefined;

var _ramda = require('./../libs/ramda.js');

var _ramda2 = _interopRequireDefault(_ramda);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _log = _ramda2.default.curry(function (type, options) {
  var page = options.page,
      opr = options.opr,
      info = options.info;

  var prompt = '[' + page + '] --> [' + opr + ']';
  switch (type) {
    case 'error':
      console.error(prompt, info);
      break;
    case 'info':
      console.info(prompt, info);
      break;
    case 'log':
      console.log(prompt, info);
      break;
  }
});

var error = exports.error = _log('error');
var info = exports.info = _log('info');
var log = exports.log = _log('log');
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZy5qcyJdLCJuYW1lcyI6WyJfbG9nIiwiY3VycnkiLCJ0eXBlIiwib3B0aW9ucyIsInBhZ2UiLCJvcHIiLCJpbmZvIiwicHJvbXB0IiwiY29uc29sZSIsImVycm9yIiwibG9nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7Ozs7OztBQUVBLElBQU1BLE9BQU8sZ0JBQUVDLEtBQUYsQ0FBUSxVQUFDQyxJQUFELEVBQU9DLE9BQVAsRUFBbUI7QUFBQSxNQUM5QkMsSUFEOEIsR0FDVkQsT0FEVSxDQUM5QkMsSUFEOEI7QUFBQSxNQUN4QkMsR0FEd0IsR0FDVkYsT0FEVSxDQUN4QkUsR0FEd0I7QUFBQSxNQUNuQkMsSUFEbUIsR0FDVkgsT0FEVSxDQUNuQkcsSUFEbUI7O0FBRXRDLE1BQU1DLGVBQWFILElBQWIsZUFBMkJDLEdBQTNCLE1BQU47QUFDQSxVQUFRSCxJQUFSO0FBQ0UsU0FBSyxPQUFMO0FBQ0VNLGNBQVFDLEtBQVIsQ0FBY0YsTUFBZCxFQUFzQkQsSUFBdEI7QUFDQTtBQUNGLFNBQUssTUFBTDtBQUNFRSxjQUFRRixJQUFSLENBQWFDLE1BQWIsRUFBcUJELElBQXJCO0FBQ0E7QUFDRixTQUFLLEtBQUw7QUFDRUUsY0FBUUUsR0FBUixDQUFZSCxNQUFaLEVBQW9CRCxJQUFwQjtBQUNBO0FBVEo7QUFXRCxDQWRZLENBQWI7O0FBZ0JPLElBQU1HLHdCQUFRVCxLQUFLLE9BQUwsQ0FBZDtBQUNBLElBQU1NLHNCQUFPTixLQUFLLE1BQUwsQ0FBYjtBQUNBLElBQU1VLG9CQUFNVixLQUFLLEtBQUwsQ0FBWiIsImZpbGUiOiJsb2cuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUiBmcm9tICcuLi9saWJzL3JhbWRhJ1xuXG5jb25zdCBfbG9nID0gUi5jdXJyeSgodHlwZSwgb3B0aW9ucykgPT4ge1xuICBjb25zdCB7IHBhZ2UsIG9wciwgaW5mbyB9ID0gb3B0aW9uc1xuICBjb25zdCBwcm9tcHQgPSBgWyR7cGFnZX1dIC0tPiBbJHtvcHJ9XWBcbiAgc3dpdGNoICh0eXBlKSB7XG4gICAgY2FzZSAnZXJyb3InOlxuICAgICAgY29uc29sZS5lcnJvcihwcm9tcHQsIGluZm8pXG4gICAgICBicmVha1xuICAgIGNhc2UgJ2luZm8nOlxuICAgICAgY29uc29sZS5pbmZvKHByb21wdCwgaW5mbylcbiAgICAgIGJyZWFrXG4gICAgY2FzZSAnbG9nJzpcbiAgICAgIGNvbnNvbGUubG9nKHByb21wdCwgaW5mbylcbiAgICAgIGJyZWFrXG4gIH1cbn0pXG5cbmV4cG9ydCBjb25zdCBlcnJvciA9IF9sb2coJ2Vycm9yJylcbmV4cG9ydCBjb25zdCBpbmZvID0gX2xvZygnaW5mbycpXG5leHBvcnQgY29uc3QgbG9nID0gX2xvZygnbG9nJylcbiJdfQ==