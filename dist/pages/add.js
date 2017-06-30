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
    }, _this.data = {
      friends: [{
        id: 1,
        nickname: 'www',
        wexin: '1fsdfdf',
        avatar: 'https://avatars1.githubusercontent.com/u/8338436?v=3&u=6da5bc8d0fea875312c88b9e979726bdeafcd41a&s=400'
      }]
    }, _this.methods = {
      toApply: function toApply(accid) {
        _wepy2.default.navigateTo({
          url: '/pages/apply?accid=' + accid
        });
      }
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  return Add;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Add , 'pages/add'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkZC5qcyJdLCJuYW1lcyI6WyJBZGQiLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiZGF0YSIsImZyaWVuZHMiLCJpZCIsIm5pY2tuYW1lIiwid2V4aW4iLCJhdmF0YXIiLCJtZXRob2RzIiwidG9BcHBseSIsImFjY2lkIiwibmF2aWdhdGVUbyIsInVybCIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7Ozs7OztJQUNxQkEsRzs7Ozs7Ozs7Ozs7Ozs7c01BQ25CQyxNLEdBQVM7QUFDUEMsOEJBQXdCO0FBRGpCLEssUUFJVEMsSSxHQUFPO0FBQ0xDLGVBQVMsQ0FBQztBQUNSQyxZQUFJLENBREk7QUFFUkMsa0JBQVUsS0FGRjtBQUdSQyxlQUFPLFNBSEM7QUFJUkMsZ0JBQVE7QUFKQSxPQUFEO0FBREosSyxRQVNQQyxPLEdBQVU7QUFDUkMsYUFEUSxtQkFDQUMsS0FEQSxFQUNPO0FBQ2IsdUJBQUtDLFVBQUwsQ0FBZ0I7QUFDZEMsdUNBQTJCRjtBQURiLFNBQWhCO0FBR0Q7QUFMTyxLOzs7O0VBZHFCLGVBQUtHLEk7O2tCQUFqQmQsRyIsImZpbGUiOiJhZGQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBZGQgZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICBjb25maWcgPSB7XG4gICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+a3u+WKoOWlveWPiydcbiAgfVxuXG4gIGRhdGEgPSB7XG4gICAgZnJpZW5kczogW3tcbiAgICAgIGlkOiAxLFxuICAgICAgbmlja25hbWU6ICd3d3cnLFxuICAgICAgd2V4aW46ICcxZnNkZmRmJyxcbiAgICAgIGF2YXRhcjogJ2h0dHBzOi8vYXZhdGFyczEuZ2l0aHVidXNlcmNvbnRlbnQuY29tL3UvODMzODQzNj92PTMmdT02ZGE1YmM4ZDBmZWE4NzUzMTJjODhiOWU5Nzk3MjZiZGVhZmNkNDFhJnM9NDAwJ1xuICAgIH1dXG4gIH1cblxuICBtZXRob2RzID0ge1xuICAgIHRvQXBwbHkoYWNjaWQpIHtcbiAgICAgIHdlcHkubmF2aWdhdGVUbyh7XG4gICAgICAgIHVybDogYC9wYWdlcy9hcHBseT9hY2NpZD0ke2FjY2lkfWBcbiAgICAgIH0pXG4gICAgfVxuICB9XG59XG4iXX0=