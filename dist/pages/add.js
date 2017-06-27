'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _getPrototypeOf = require('./../npm/babel-runtime/core-js/object/get-prototype-of.js');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('./../npm/babel-runtime/helpers/classCallCheck.js');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require('./../npm/babel-runtime/helpers/possibleConstructorReturn.js');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('./../npm/babel-runtime/helpers/inherits.js');

var _inherits3 = _interopRequireDefault(_inherits2);

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Add = function (_wepy$page) {
  (0, _inherits3.default)(Add, _wepy$page);

  function Add() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, Add);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Add.__proto__ || (0, _getPrototypeOf2.default)(Add)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: '添加好友'
    }, _this.data = {}, _this.methods = {
      handleSubmit: function handleSubmit() {
        _wepy2.default.navigateTo({
          url: '../apply/apply'
        });
      }
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  return Add;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Add , 'pages/add'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkZC5qcyJdLCJuYW1lcyI6WyJBZGQiLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiZGF0YSIsIm1ldGhvZHMiLCJoYW5kbGVTdWJtaXQiLCJuYXZpZ2F0ZVRvIiwidXJsIiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTs7Ozs7O0lBQ3FCQSxHOzs7Ozs7Ozs7Ozs7OztzTUFDbkJDLE0sR0FBUztBQUNQQyw4QkFBd0I7QUFEakIsSyxRQUlUQyxJLEdBQU8sRSxRQUlQQyxPLEdBQVU7QUFDUkMsa0JBRFEsMEJBQ087QUFDYix1QkFBS0MsVUFBTCxDQUFnQjtBQUNkQyxlQUFLO0FBRFMsU0FBaEI7QUFHRDtBQUxPLEs7Ozs7RUFUcUIsZUFBS0MsSTs7a0JBQWpCUixHIiwiZmlsZSI6ImFkZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFkZCBleHRlbmRzIHdlcHkucGFnZSB7XG4gIGNvbmZpZyA9IHtcbiAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn5re75Yqg5aW95Y+LJ1xuICB9XG5cbiAgZGF0YSA9IHtcblxuICB9XG5cbiAgbWV0aG9kcyA9IHtcbiAgICBoYW5kbGVTdWJtaXQoKSB7XG4gICAgICB3ZXB5Lm5hdmlnYXRlVG8oe1xuICAgICAgICB1cmw6ICcuLi9hcHBseS9hcHBseSdcbiAgICAgIH0pXG4gICAgfVxuICB9XG59XG4iXX0=