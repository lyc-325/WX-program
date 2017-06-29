'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

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

var GroupItem = function (_wepy$component) {
  (0, _inherits3.default)(GroupItem, _wepy$component);

  function GroupItem() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, GroupItem);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = GroupItem.__proto__ || (0, _getPrototypeOf2.default)(GroupItem)).call.apply(_ref, [this].concat(args))), _this), _this.props = {
      gitem: {}
    }, _this.data = {}, _this.methods = {
      tap: function tap() {
        this.gitem.childname = 'Child Random(' + Math.random() + ')';
        console.log('Clicked Group ' + this.$parent.$index + '. Item ' + this.$index + ', ID is ' + this.gitem.childid);
      }
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  return GroupItem;
}(_wepy2.default.component);

exports.default = GroupItem;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdyb3VwaXRlbS5qcyJdLCJuYW1lcyI6WyJHcm91cEl0ZW0iLCJwcm9wcyIsImdpdGVtIiwiZGF0YSIsIm1ldGhvZHMiLCJ0YXAiLCJjaGlsZG5hbWUiLCJNYXRoIiwicmFuZG9tIiwiY29uc29sZSIsImxvZyIsIiRwYXJlbnQiLCIkaW5kZXgiLCJjaGlsZGlkIiwiY29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNFOzs7Ozs7SUFFcUJBLFM7Ozs7Ozs7Ozs7Ozs7O2tOQUNuQkMsSyxHQUFRO0FBQ05DLGFBQU87QUFERCxLLFFBR1JDLEksR0FBTyxFLFFBRVBDLE8sR0FBVTtBQUNSQyxTQURRLGlCQUNEO0FBQ0wsYUFBS0gsS0FBTCxDQUFXSSxTQUFYLHFCQUF1Q0MsS0FBS0MsTUFBTCxFQUF2QztBQUNBQyxnQkFBUUMsR0FBUixvQkFBNkIsS0FBS0MsT0FBTCxDQUFhQyxNQUExQyxlQUEwRCxLQUFLQSxNQUEvRCxnQkFBZ0YsS0FBS1YsS0FBTCxDQUFXVyxPQUEzRjtBQUNEO0FBSk8sSzs7OztFQU4yQixlQUFLQyxTOztrQkFBdkJkLFMiLCJmaWxlIjoiZ3JvdXBpdGVtLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbiAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcclxuXHJcbiAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgR3JvdXBJdGVtIGV4dGVuZHMgd2VweS5jb21wb25lbnQge1xyXG4gICAgcHJvcHMgPSB7XHJcbiAgICAgIGdpdGVtOiB7fVxyXG4gICAgfVxyXG4gICAgZGF0YSA9IHtcclxuICAgIH1cclxuICAgIG1ldGhvZHMgPSB7XHJcbiAgICAgIHRhcCAoKSB7XHJcbiAgICAgICAgdGhpcy5naXRlbS5jaGlsZG5hbWUgPSBgQ2hpbGQgUmFuZG9tKCR7TWF0aC5yYW5kb20oKX0pYFxyXG4gICAgICAgIGNvbnNvbGUubG9nKGBDbGlja2VkIEdyb3VwICR7dGhpcy4kcGFyZW50LiRpbmRleH0uIEl0ZW0gJHt0aGlzLiRpbmRleH0sIElEIGlzICR7dGhpcy5naXRlbS5jaGlsZGlkfWApXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiJdfQ==