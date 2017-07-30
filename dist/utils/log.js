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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZy5qcyJdLCJuYW1lcyI6WyJfbG9nIiwiY3VycnkiLCJ0eXBlIiwib3B0aW9ucyIsInBhZ2UiLCJvcHIiLCJpbmZvIiwicHJvbXB0IiwiY29uc29sZSIsImVycm9yIiwibG9nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7Ozs7OztBQUVBLElBQU1BLE9BQU8sZ0JBQUVDLEtBQUYsQ0FBUSxVQUFDQyxJQUFELEVBQU9DLE9BQVAsRUFBbUI7QUFBQSxNQUM5QkMsSUFEOEIsR0FDVkQsT0FEVSxDQUM5QkMsSUFEOEI7QUFBQSxNQUN4QkMsR0FEd0IsR0FDVkYsT0FEVSxDQUN4QkUsR0FEd0I7QUFBQSxNQUNuQkMsSUFEbUIsR0FDVkgsT0FEVSxDQUNuQkcsSUFEbUI7O0FBRXRDLE1BQU1DLGVBQWFILElBQWIsZUFBMkJDLEdBQTNCLE1BQU47QUFDQSxVQUFRSCxJQUFSO0FBQ0UsU0FBSyxPQUFMO0FBQ0VNLGNBQVFDLEtBQVIsQ0FBY0YsTUFBZCxFQUFzQkQsSUFBdEI7QUFDQTtBQUNGLFNBQUssTUFBTDtBQUNFRSxjQUFRRixJQUFSLENBQWFDLE1BQWIsRUFBcUJELElBQXJCO0FBQ0E7QUFDRixTQUFLLEtBQUw7QUFDRUUsY0FBUUUsR0FBUixDQUFZSCxNQUFaLEVBQW9CRCxJQUFwQjtBQUNBO0FBVEo7QUFXRCxDQWRZLENBQWI7O0FBZ0JPLElBQU1HLHdCQUFRVCxLQUFLLE9BQUwsQ0FBZDtBQUNBLElBQU1NLHNCQUFPTixLQUFLLE1BQUwsQ0FBYjtBQUNBLElBQU1VLG9CQUFNVixLQUFLLEtBQUwsQ0FBWiIsImZpbGUiOiJsb2cuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUiBmcm9tICcuLi9saWJzL3JhbWRhJ1xyXG5cclxuY29uc3QgX2xvZyA9IFIuY3VycnkoKHR5cGUsIG9wdGlvbnMpID0+IHtcclxuICBjb25zdCB7IHBhZ2UsIG9wciwgaW5mbyB9ID0gb3B0aW9uc1xyXG4gIGNvbnN0IHByb21wdCA9IGBbJHtwYWdlfV0gLS0+IFske29wcn1dYFxyXG4gIHN3aXRjaCAodHlwZSkge1xyXG4gICAgY2FzZSAnZXJyb3InOlxyXG4gICAgICBjb25zb2xlLmVycm9yKHByb21wdCwgaW5mbylcclxuICAgICAgYnJlYWtcclxuICAgIGNhc2UgJ2luZm8nOlxyXG4gICAgICBjb25zb2xlLmluZm8ocHJvbXB0LCBpbmZvKVxyXG4gICAgICBicmVha1xyXG4gICAgY2FzZSAnbG9nJzpcclxuICAgICAgY29uc29sZS5sb2cocHJvbXB0LCBpbmZvKVxyXG4gICAgICBicmVha1xyXG4gIH1cclxufSlcclxuXHJcbmV4cG9ydCBjb25zdCBlcnJvciA9IF9sb2coJ2Vycm9yJylcclxuZXhwb3J0IGNvbnN0IGluZm8gPSBfbG9nKCdpbmZvJylcclxuZXhwb3J0IGNvbnN0IGxvZyA9IF9sb2coJ2xvZycpXHJcbiJdfQ==