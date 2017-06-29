'use strict';

var _ramda = require('./../libs/ramda.js');

var _ramda2 = _interopRequireDefault(_ramda);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function isFunction(obj) {
  return typeof obj === 'function';
}

var functions = _ramda2.default.compose(_ramda2.default.keys, _ramda2.default.pickBy(isFunction));

module.exports = {
  isFunction: isFunction,
  functions: functions
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInV0aWwuanMiXSwibmFtZXMiOlsiaXNGdW5jdGlvbiIsIm9iaiIsImZ1bmN0aW9ucyIsImNvbXBvc2UiLCJrZXlzIiwicGlja0J5IiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6Ijs7QUFBQTs7Ozs7O0FBRUEsU0FBU0EsVUFBVCxDQUFvQkMsR0FBcEIsRUFBeUI7QUFDdkIsU0FBTyxPQUFPQSxHQUFQLEtBQWUsVUFBdEI7QUFDRDs7QUFFRCxJQUFNQyxZQUFZLGdCQUFFQyxPQUFGLENBQ2hCLGdCQUFFQyxJQURjLEVBRWhCLGdCQUFFQyxNQUFGLENBQVNMLFVBQVQsQ0FGZ0IsQ0FBbEI7O0FBS0FNLE9BQU9DLE9BQVAsR0FBaUI7QUFDZlAsd0JBRGU7QUFFZkU7QUFGZSxDQUFqQiIsImZpbGUiOiJ1dGlsLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFIgZnJvbSAnLi4vbGlicy9yYW1kYSdcblxuZnVuY3Rpb24gaXNGdW5jdGlvbihvYmopIHtcbiAgcmV0dXJuIHR5cGVvZiBvYmogPT09ICdmdW5jdGlvbidcbn1cblxuY29uc3QgZnVuY3Rpb25zID0gUi5jb21wb3NlKFxuICBSLmtleXMsXG4gIFIucGlja0J5KGlzRnVuY3Rpb24pXG4pXG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBpc0Z1bmN0aW9uLFxuICBmdW5jdGlvbnNcbn1cbiJdfQ==