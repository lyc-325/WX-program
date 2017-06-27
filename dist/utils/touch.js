'use strict';

var _ramda = require('./../libs/ramda.js');

var _ramda2 = _interopRequireDefault(_ramda);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var getLength = _ramda2.default.prop('length');
var getTouches = function getTouches(changed) {
  return changed ? _ramda2.default.prop('changedTouches') : _ramda2.default.prop('touches');
};

/**
 * 是否是单点触摸
 * @param changed Boolean
 */
var isOnePointTouch = function isOnePointTouch(changed) {
  return _ramda2.default.compose(_ramda2.default.equals(1), getLength, getTouches(changed));
};

/**
 * 是否是两点触摸
 * @param changed Boolean
 */
var isTwoPointTouch = function isTwoPointTouch(changed) {
  return _ramda2.default.compose(_ramda2.default.equals(2), getLength, getTouches(changed));
};

/**
 * 是否是多点触摸
 * @param changed Boolean
 */
var isMultiPointTouch = function isMultiPointTouch(changed) {
  return _ramda2.default.compose(_ramda2.default.gt(2), getLength, getTouches(changed));
};

/**
 * 获得触摸坐标
 * @param changed Boolean
 */
var getClientX = function getClientX(changed) {
  return _ramda2.default.compose(_ramda2.default.prop('clientX'), _ramda2.default.head, getTouches(changed));
};

module.exports = {
  isOnePointTouch: isOnePointTouch,
  isTwoPointTouch: isTwoPointTouch,
  isMultiPointTouch: isMultiPointTouch,
  getClientX: getClientX
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRvdWNoLmpzIl0sIm5hbWVzIjpbImdldExlbmd0aCIsInByb3AiLCJnZXRUb3VjaGVzIiwiY2hhbmdlZCIsImlzT25lUG9pbnRUb3VjaCIsImNvbXBvc2UiLCJlcXVhbHMiLCJpc1R3b1BvaW50VG91Y2giLCJpc011bHRpUG9pbnRUb3VjaCIsImd0IiwiZ2V0Q2xpZW50WCIsImhlYWQiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiOztBQUFBOzs7Ozs7QUFDQSxJQUFNQSxZQUFZLGdCQUFFQyxJQUFGLENBQU8sUUFBUCxDQUFsQjtBQUNBLElBQU1DLGFBQWEsU0FBYkEsVUFBYTtBQUFBLFNBQVdDLFVBQVUsZ0JBQUVGLElBQUYsQ0FBTyxnQkFBUCxDQUFWLEdBQXFDLGdCQUFFQSxJQUFGLENBQU8sU0FBUCxDQUFoRDtBQUFBLENBQW5COztBQUVBOzs7O0FBSUEsSUFBTUcsa0JBQWtCLFNBQWxCQSxlQUFrQjtBQUFBLFNBQVcsZ0JBQUVDLE9BQUYsQ0FDakMsZ0JBQUVDLE1BQUYsQ0FBUyxDQUFULENBRGlDLEVBRWpDTixTQUZpQyxFQUdqQ0UsV0FBV0MsT0FBWCxDQUhpQyxDQUFYO0FBQUEsQ0FBeEI7O0FBTUE7Ozs7QUFJQSxJQUFNSSxrQkFBa0IsU0FBbEJBLGVBQWtCO0FBQUEsU0FBVyxnQkFBRUYsT0FBRixDQUNqQyxnQkFBRUMsTUFBRixDQUFTLENBQVQsQ0FEaUMsRUFFakNOLFNBRmlDLEVBR2pDRSxXQUFXQyxPQUFYLENBSGlDLENBQVg7QUFBQSxDQUF4Qjs7QUFNQTs7OztBQUlBLElBQU1LLG9CQUFvQixTQUFwQkEsaUJBQW9CO0FBQUEsU0FBVyxnQkFBRUgsT0FBRixDQUNuQyxnQkFBRUksRUFBRixDQUFLLENBQUwsQ0FEbUMsRUFFbkNULFNBRm1DLEVBR25DRSxXQUFXQyxPQUFYLENBSG1DLENBQVg7QUFBQSxDQUExQjs7QUFNQTs7OztBQUlBLElBQU1PLGFBQWEsU0FBYkEsVUFBYTtBQUFBLFNBQVcsZ0JBQUVMLE9BQUYsQ0FDNUIsZ0JBQUVKLElBQUYsQ0FBTyxTQUFQLENBRDRCLEVBRTVCLGdCQUFFVSxJQUYwQixFQUc1QlQsV0FBV0MsT0FBWCxDQUg0QixDQUFYO0FBQUEsQ0FBbkI7O0FBTUFTLE9BQU9DLE9BQVAsR0FBaUI7QUFDZlQsa0NBRGU7QUFFZkcsa0NBRmU7QUFHZkMsc0NBSGU7QUFJZkU7QUFKZSxDQUFqQiIsImZpbGUiOiJ0b3VjaC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSIGZyb20gJy4uL2xpYnMvcmFtZGEnXG5jb25zdCBnZXRMZW5ndGggPSBSLnByb3AoJ2xlbmd0aCcpXG5jb25zdCBnZXRUb3VjaGVzID0gY2hhbmdlZCA9PiBjaGFuZ2VkID8gUi5wcm9wKCdjaGFuZ2VkVG91Y2hlcycpIDogUi5wcm9wKCd0b3VjaGVzJylcblxuLyoqXG4gKiDmmK/lkKbmmK/ljZXngrnop6bmkbhcbiAqIEBwYXJhbSBjaGFuZ2VkIEJvb2xlYW5cbiAqL1xuY29uc3QgaXNPbmVQb2ludFRvdWNoID0gY2hhbmdlZCA9PiBSLmNvbXBvc2UoXG4gIFIuZXF1YWxzKDEpLFxuICBnZXRMZW5ndGgsXG4gIGdldFRvdWNoZXMoY2hhbmdlZCksXG4pXG5cbi8qKlxuICog5piv5ZCm5piv5Lik54K56Kem5pG4XG4gKiBAcGFyYW0gY2hhbmdlZCBCb29sZWFuXG4gKi9cbmNvbnN0IGlzVHdvUG9pbnRUb3VjaCA9IGNoYW5nZWQgPT4gUi5jb21wb3NlKFxuICBSLmVxdWFscygyKSxcbiAgZ2V0TGVuZ3RoLFxuICBnZXRUb3VjaGVzKGNoYW5nZWQpXG4pXG5cbi8qKlxuICog5piv5ZCm5piv5aSa54K56Kem5pG4XG4gKiBAcGFyYW0gY2hhbmdlZCBCb29sZWFuXG4gKi9cbmNvbnN0IGlzTXVsdGlQb2ludFRvdWNoID0gY2hhbmdlZCA9PiBSLmNvbXBvc2UoXG4gIFIuZ3QoMiksXG4gIGdldExlbmd0aCxcbiAgZ2V0VG91Y2hlcyhjaGFuZ2VkKVxuKVxuXG4vKipcbiAqIOiOt+W+l+inpuaRuOWdkOagh1xuICogQHBhcmFtIGNoYW5nZWQgQm9vbGVhblxuICovXG5jb25zdCBnZXRDbGllbnRYID0gY2hhbmdlZCA9PiBSLmNvbXBvc2UoXG4gIFIucHJvcCgnY2xpZW50WCcpLFxuICBSLmhlYWQsXG4gIGdldFRvdWNoZXMoY2hhbmdlZClcbilcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIGlzT25lUG9pbnRUb3VjaCxcbiAgaXNUd29Qb2ludFRvdWNoLFxuICBpc011bHRpUG9pbnRUb3VjaCxcbiAgZ2V0Q2xpZW50WFxufVxuIl19