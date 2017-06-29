'use strict';

var _keys = require('./../npm/babel-runtime/core-js/object/keys.js');

var _keys2 = _interopRequireDefault(_keys);

var _ramda = require('./../libs/ramda.js');

var _ramda2 = _interopRequireDefault(_ramda);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var EMAIL_REGEX = /^(\w-*\.*)+@(\w-?)+(\.\w{2,})+$/;
var PHONE_REGEX = /^1\d{10}$/;

var validator = function validator(rules) {
  return function (formData) {
    var keys = (0, _keys2.default)(formData);
    var errorKey = _ramda2.default.find(function (key) {
      var value = formData[key];
      var validate = rules[key].validate;

      return !validate(value);
    })(keys);
    return errorKey;
  };
};

var validateLength = function validateLength(min, max) {
  return _ramda2.default.compose(_ramda2.default.both(_ramda2.default.gte(_ramda2.default.__, min), _ramda2.default.lte(_ramda2.default.__, max)), _ramda2.default.prop('length'), function (value) {
    return value.replace(/\s/g, '');
  });
};

var validateEmail = _ramda2.default.test(EMAIL_REGEX);

var validatePhone = _ramda2.default.test(PHONE_REGEX);

module.exports = {
  validator: validator,
  validateLength: validateLength,
  validateEmail: validateEmail,
  validatePhone: validatePhone
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZhbGlkYXRvci5qcyJdLCJuYW1lcyI6WyJFTUFJTF9SRUdFWCIsIlBIT05FX1JFR0VYIiwidmFsaWRhdG9yIiwicnVsZXMiLCJmb3JtRGF0YSIsImtleXMiLCJlcnJvcktleSIsImZpbmQiLCJ2YWx1ZSIsImtleSIsInZhbGlkYXRlIiwidmFsaWRhdGVMZW5ndGgiLCJtaW4iLCJtYXgiLCJjb21wb3NlIiwiYm90aCIsImd0ZSIsIl9fIiwibHRlIiwicHJvcCIsInJlcGxhY2UiLCJ2YWxpZGF0ZUVtYWlsIiwidGVzdCIsInZhbGlkYXRlUGhvbmUiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7Ozs7O0FBRUEsSUFBTUEsY0FBYyxpQ0FBcEI7QUFDQSxJQUFNQyxjQUFjLFdBQXBCOztBQUVBLElBQU1DLFlBQVksU0FBWkEsU0FBWSxDQUFVQyxLQUFWLEVBQWlCO0FBQ2pDLFNBQU8sVUFBVUMsUUFBVixFQUFvQjtBQUN6QixRQUFNQyxPQUFPLG9CQUFZRCxRQUFaLENBQWI7QUFDQSxRQUFNRSxXQUFXLGdCQUFFQyxJQUFGLENBQU8sZUFBTztBQUM3QixVQUFNQyxRQUFRSixTQUFTSyxHQUFULENBQWQ7QUFENkIsVUFFckJDLFFBRnFCLEdBRVJQLE1BQU1NLEdBQU4sQ0FGUSxDQUVyQkMsUUFGcUI7O0FBRzdCLGFBQU8sQ0FBQ0EsU0FBU0YsS0FBVCxDQUFSO0FBQ0QsS0FKZ0IsRUFJZEgsSUFKYyxDQUFqQjtBQUtBLFdBQU9DLFFBQVA7QUFDRCxHQVJEO0FBU0QsQ0FWRDs7QUFZQSxJQUFNSyxpQkFBaUIsU0FBakJBLGNBQWlCLENBQVNDLEdBQVQsRUFBY0MsR0FBZCxFQUFtQjtBQUN4QyxTQUFPLGdCQUFFQyxPQUFGLENBQ0wsZ0JBQUVDLElBQUYsQ0FBTyxnQkFBRUMsR0FBRixDQUFNLGdCQUFFQyxFQUFSLEVBQVlMLEdBQVosQ0FBUCxFQUF5QixnQkFBRU0sR0FBRixDQUFNLGdCQUFFRCxFQUFSLEVBQVlKLEdBQVosQ0FBekIsQ0FESyxFQUVMLGdCQUFFTSxJQUFGLENBQU8sUUFBUCxDQUZLLEVBR0w7QUFBQSxXQUFTWCxNQUFNWSxPQUFOLENBQWMsS0FBZCxFQUFxQixFQUFyQixDQUFUO0FBQUEsR0FISyxDQUFQO0FBS0QsQ0FORDs7QUFRQSxJQUFNQyxnQkFBZ0IsZ0JBQUVDLElBQUYsQ0FBT3RCLFdBQVAsQ0FBdEI7O0FBRUEsSUFBTXVCLGdCQUFnQixnQkFBRUQsSUFBRixDQUFPckIsV0FBUCxDQUF0Qjs7QUFFQXVCLE9BQU9DLE9BQVAsR0FBaUI7QUFDZnZCLHNCQURlO0FBRWZTLGdDQUZlO0FBR2ZVLDhCQUhlO0FBSWZFO0FBSmUsQ0FBakIiLCJmaWxlIjoidmFsaWRhdG9yLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFIgZnJvbSAnLi4vbGlicy9yYW1kYSdcblxuY29uc3QgRU1BSUxfUkVHRVggPSAvXihcXHctKlxcLiopK0AoXFx3LT8pKyhcXC5cXHd7Mix9KSskL1xuY29uc3QgUEhPTkVfUkVHRVggPSAvXjFcXGR7MTB9JC9cblxuY29uc3QgdmFsaWRhdG9yID0gZnVuY3Rpb24gKHJ1bGVzKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoZm9ybURhdGEpIHtcbiAgICBjb25zdCBrZXlzID0gT2JqZWN0LmtleXMoZm9ybURhdGEpXG4gICAgY29uc3QgZXJyb3JLZXkgPSBSLmZpbmQoa2V5ID0+IHtcbiAgICAgIGNvbnN0IHZhbHVlID0gZm9ybURhdGFba2V5XVxuICAgICAgY29uc3QgeyB2YWxpZGF0ZSB9ID0gcnVsZXNba2V5XVxuICAgICAgcmV0dXJuICF2YWxpZGF0ZSh2YWx1ZSlcbiAgICB9KShrZXlzKVxuICAgIHJldHVybiBlcnJvcktleVxuICB9XG59XG5cbmNvbnN0IHZhbGlkYXRlTGVuZ3RoID0gZnVuY3Rpb24obWluLCBtYXgpIHtcbiAgcmV0dXJuIFIuY29tcG9zZShcbiAgICBSLmJvdGgoUi5ndGUoUi5fXywgbWluKSwgUi5sdGUoUi5fXywgbWF4KSksXG4gICAgUi5wcm9wKCdsZW5ndGgnKSxcbiAgICB2YWx1ZSA9PiB2YWx1ZS5yZXBsYWNlKC9cXHMvZywgJycpXG4gIClcbn1cblxuY29uc3QgdmFsaWRhdGVFbWFpbCA9IFIudGVzdChFTUFJTF9SRUdFWClcblxuY29uc3QgdmFsaWRhdGVQaG9uZSA9IFIudGVzdChQSE9ORV9SRUdFWClcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIHZhbGlkYXRvcixcbiAgdmFsaWRhdGVMZW5ndGgsXG4gIHZhbGlkYXRlRW1haWwsXG4gIHZhbGlkYXRlUGhvbmVcbn1cbiJdfQ==