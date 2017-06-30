'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.search = undefined;

var _jf = require('./../utils/jf.js');

var _jf2 = _interopRequireDefault(_jf);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var search = exports.search = function search(nickname) {
  return _jf2.default.request({
    api: 'accounts/create/',
    data: {
      nickname: nickname
    },
    method: 'POST'
  });
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZyaWVuZC5qcyJdLCJuYW1lcyI6WyJzZWFyY2giLCJuaWNrbmFtZSIsInJlcXVlc3QiLCJhcGkiLCJkYXRhIiwibWV0aG9kIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7Ozs7OztBQUVPLElBQU1BLDBCQUFTLFNBQVRBLE1BQVMsQ0FBU0MsUUFBVCxFQUFtQjtBQUN2QyxTQUFPLGFBQUdDLE9BQUgsQ0FBVztBQUNoQkMsU0FBSyxrQkFEVztBQUVoQkMsVUFBTTtBQUNKSDtBQURJLEtBRlU7QUFLaEJJLFlBQVE7QUFMUSxHQUFYLENBQVA7QUFPRCxDQVJNIiwiZmlsZSI6ImZyaWVuZC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBqZiBmcm9tICcuLi91dGlscy9qZidcblxuZXhwb3J0IGNvbnN0IHNlYXJjaCA9IGZ1bmN0aW9uKG5pY2tuYW1lKSB7XG4gIHJldHVybiBqZi5yZXF1ZXN0KHtcbiAgICBhcGk6ICdhY2NvdW50cy9jcmVhdGUvJyxcbiAgICBkYXRhOiB7XG4gICAgICBuaWNrbmFtZVxuICAgIH0sXG4gICAgbWV0aG9kOiAnUE9TVCdcbiAgfSlcbn1cbiJdfQ==