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

var _groupitem = require('./groupitem.js');

var _groupitem2 = _interopRequireDefault(_groupitem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Group = function (_wepy$component) {
  (0, _inherits3.default)(Group, _wepy$component);

  function Group() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, Group);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Group.__proto__ || (0, _getPrototypeOf2.default)(Group)).call.apply(_ref, [this].concat(args))), _this), _this.props = {
      grouplist: {},
      index: {}
    }, _this.$props = { "groupitem": { "xmlns:v-bind": { "for": "grouplist.list", "item": "item", "index": "index", "key": "key", "value": "item" }, "v-bind:gitem.once": { "for": "grouplist.list", "item": "item", "index": "index", "key": "key", "value": "item" } } }, _this.$events = {}, _this.components = {
      groupitem: _groupitem2.default
    }, _this.methods = {
      tap: function tap() {
        this.grouplist.name = 'Parent Random(' + Math.random() + ')';
        console.log('Clicked Group ' + this.$index + ', ID is ' + this.grouplist.id);
      }
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  return Group;
}(_wepy2.default.component);

exports.default = Group;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdyb3VwLmpzIl0sIm5hbWVzIjpbIkdyb3VwIiwicHJvcHMiLCJncm91cGxpc3QiLCJpbmRleCIsIiRwcm9wcyIsIiRldmVudHMiLCJjb21wb25lbnRzIiwiZ3JvdXBpdGVtIiwibWV0aG9kcyIsInRhcCIsIm5hbWUiLCJNYXRoIiwicmFuZG9tIiwiY29uc29sZSIsImxvZyIsIiRpbmRleCIsImlkIiwiY29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNFOzs7O0FBQ0E7Ozs7OztJQUVxQkEsSzs7Ozs7Ozs7Ozs7Ozs7ME1BQ25CQyxLLEdBQVE7QUFDTkMsaUJBQVcsRUFETDtBQUVOQyxhQUFPO0FBRkQsSyxRQUtUQyxNLEdBQVMsRUFBQyxhQUFZLEVBQUMsZ0JBQWUsRUFBQyxPQUFNLGdCQUFQLEVBQXdCLFFBQU8sTUFBL0IsRUFBc0MsU0FBUSxPQUE5QyxFQUFzRCxPQUFNLEtBQTVELEVBQWtFLFNBQVEsTUFBMUUsRUFBaEIsRUFBa0cscUJBQW9CLEVBQUMsT0FBTSxnQkFBUCxFQUF3QixRQUFPLE1BQS9CLEVBQXNDLFNBQVEsT0FBOUMsRUFBc0QsT0FBTSxLQUE1RCxFQUFrRSxTQUFRLE1BQTFFLEVBQXRILEVBQWIsRSxRQUNaQyxPLEdBQVUsRSxRQUNUQyxVLEdBQWE7QUFDUkM7QUFEUSxLLFFBR1ZDLE8sR0FBVTtBQUNSQyxTQURRLGlCQUNEO0FBQ0wsYUFBS1AsU0FBTCxDQUFlUSxJQUFmLHNCQUF1Q0MsS0FBS0MsTUFBTCxFQUF2QztBQUNBQyxnQkFBUUMsR0FBUixvQkFBNkIsS0FBS0MsTUFBbEMsZ0JBQW1ELEtBQUtiLFNBQUwsQ0FBZWMsRUFBbEU7QUFDRDtBQUpPLEs7Ozs7RUFYdUIsZUFBS0MsUzs7a0JBQW5CakIsSyIsImZpbGUiOiJncm91cC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4gIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXHJcbiAgaW1wb3J0IEdyb3VwSXRlbSBmcm9tICcuL2dyb3VwaXRlbSdcclxuXHJcbiAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgR3JvdXAgZXh0ZW5kcyB3ZXB5LmNvbXBvbmVudCB7XHJcbiAgICBwcm9wcyA9IHtcclxuICAgICAgZ3JvdXBsaXN0OiB7fSxcclxuICAgICAgaW5kZXg6IHt9XHJcbiAgICB9XHJcblxyXG4gICAkcHJvcHMgPSB7XCJncm91cGl0ZW1cIjp7XCJ4bWxuczp2LWJpbmRcIjp7XCJmb3JcIjpcImdyb3VwbGlzdC5saXN0XCIsXCJpdGVtXCI6XCJpdGVtXCIsXCJpbmRleFwiOlwiaW5kZXhcIixcImtleVwiOlwia2V5XCIsXCJ2YWx1ZVwiOlwiaXRlbVwifSxcInYtYmluZDpnaXRlbS5vbmNlXCI6e1wiZm9yXCI6XCJncm91cGxpc3QubGlzdFwiLFwiaXRlbVwiOlwiaXRlbVwiLFwiaW5kZXhcIjpcImluZGV4XCIsXCJrZXlcIjpcImtleVwiLFwidmFsdWVcIjpcIml0ZW1cIn19fTtcclxuJGV2ZW50cyA9IHt9O1xyXG4gY29tcG9uZW50cyA9IHtcclxuICAgICAgZ3JvdXBpdGVtOiBHcm91cEl0ZW1cclxuICAgIH1cclxuICAgIG1ldGhvZHMgPSB7XHJcbiAgICAgIHRhcCAoKSB7XHJcbiAgICAgICAgdGhpcy5ncm91cGxpc3QubmFtZSA9IGBQYXJlbnQgUmFuZG9tKCR7TWF0aC5yYW5kb20oKX0pYFxyXG4gICAgICAgIGNvbnNvbGUubG9nKGBDbGlja2VkIEdyb3VwICR7dGhpcy4kaW5kZXh9LCBJRCBpcyAke3RoaXMuZ3JvdXBsaXN0LmlkfWApXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiJdfQ==