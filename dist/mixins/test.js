'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _getPrototypeOf = require('./../npm/babel-runtime/core-js/object/get-prototype-of.js');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('./../npm/babel-runtime/helpers/classCallCheck.js');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('./../npm/babel-runtime/helpers/createClass.js');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('./../npm/babel-runtime/helpers/possibleConstructorReturn.js');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('./../npm/babel-runtime/helpers/inherits.js');

var _inherits3 = _interopRequireDefault(_inherits2);

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var testMixin = function (_wepy$mixin) {
  (0, _inherits3.default)(testMixin, _wepy$mixin);

  function testMixin() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, testMixin);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = testMixin.__proto__ || (0, _getPrototypeOf2.default)(testMixin)).call.apply(_ref, [this].concat(args))), _this), _this.data = {
      mixin: 'This is mixin data.'
    }, _this.methods = {
      tap: function tap() {
        this.mixin = 'mixin data was changed';
        console.log('mixin method tap');
      }
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(testMixin, [{
    key: 'onShow',
    value: function onShow() {
      console.log('mixin onShow');
    }
  }, {
    key: 'onLoad',
    value: function onLoad() {
      console.log('mixin onLoad');
    }
  }]);
  return testMixin;
}(_wepy2.default.mixin);

exports.default = testMixin;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlc3QuanMiXSwibmFtZXMiOlsidGVzdE1peGluIiwiZGF0YSIsIm1peGluIiwibWV0aG9kcyIsInRhcCIsImNvbnNvbGUiLCJsb2ciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7Ozs7SUFFcUJBLFM7Ozs7Ozs7Ozs7Ozs7O2tOQUNuQkMsSSxHQUFPO0FBQ0xDLGFBQU87QUFERixLLFFBR1BDLE8sR0FBVTtBQUNSQyxTQURRLGlCQUNEO0FBQ0wsYUFBS0YsS0FBTCxHQUFhLHdCQUFiO0FBQ0FHLGdCQUFRQyxHQUFSLENBQVksa0JBQVo7QUFDRDtBQUpPLEs7Ozs7OzZCQU9EO0FBQ1BELGNBQVFDLEdBQVIsQ0FBWSxjQUFaO0FBQ0Q7Ozs2QkFFUTtBQUNQRCxjQUFRQyxHQUFSLENBQVksY0FBWjtBQUNEOzs7RUFqQm9DLGVBQUtKLEs7O2tCQUF2QkYsUyIsImZpbGUiOiJ0ZXN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIHRlc3RNaXhpbiBleHRlbmRzIHdlcHkubWl4aW4ge1xyXG4gIGRhdGEgPSB7XHJcbiAgICBtaXhpbjogJ1RoaXMgaXMgbWl4aW4gZGF0YS4nXHJcbiAgfVxyXG4gIG1ldGhvZHMgPSB7XHJcbiAgICB0YXAgKCkge1xyXG4gICAgICB0aGlzLm1peGluID0gJ21peGluIGRhdGEgd2FzIGNoYW5nZWQnXHJcbiAgICAgIGNvbnNvbGUubG9nKCdtaXhpbiBtZXRob2QgdGFwJylcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG9uU2hvdygpIHtcclxuICAgIGNvbnNvbGUubG9nKCdtaXhpbiBvblNob3cnKVxyXG4gIH1cclxuXHJcbiAgb25Mb2FkKCkge1xyXG4gICAgY29uc29sZS5sb2coJ21peGluIG9uTG9hZCcpXHJcbiAgfVxyXG59XHJcbiJdfQ==