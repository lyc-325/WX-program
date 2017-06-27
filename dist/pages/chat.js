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

var Chat = function (_wepy$page) {
  (0, _inherits3.default)(Chat, _wepy$page);

  function Chat() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, Chat);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Chat.__proto__ || (0, _getPrototypeOf2.default)(Chat)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: '聊天'
    }, _this.data = {}, _this.methods = {
      handleChooseImage: function handleChooseImage() {
        _wepy2.default.chooseImage({
          success: function success(res) {
            console.log(res);
          }
        });
      },
      handleSubmit: function handleSubmit() {}
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  return Chat;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Chat , 'pages/chat'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoYXQuanMiXSwibmFtZXMiOlsiQ2hhdCIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCJkYXRhIiwibWV0aG9kcyIsImhhbmRsZUNob29zZUltYWdlIiwiY2hvb3NlSW1hZ2UiLCJzdWNjZXNzIiwicmVzIiwiY29uc29sZSIsImxvZyIsImhhbmRsZVN1Ym1pdCIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7Ozs7OztJQUNxQkEsSTs7Ozs7Ozs7Ozs7Ozs7d01BQ25CQyxNLEdBQVM7QUFDUEMsOEJBQXdCO0FBRGpCLEssUUFJVEMsSSxHQUFPLEUsUUFJUEMsTyxHQUFVO0FBQ1JDLHVCQURRLCtCQUNZO0FBQ2xCLHVCQUFLQyxXQUFMLENBQWlCO0FBQ2ZDLGlCQURlLG1CQUNQQyxHQURPLEVBQ0Y7QUFDWEMsb0JBQVFDLEdBQVIsQ0FBWUYsR0FBWjtBQUNEO0FBSGMsU0FBakI7QUFLRCxPQVBPO0FBU1JHLGtCQVRRLDBCQVNPLENBRWQ7QUFYTyxLOzs7O0VBVHNCLGVBQUtDLEk7O2tCQUFsQlosSSIsImZpbGUiOiJjaGF0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2hhdCBleHRlbmRzIHdlcHkucGFnZSB7XG4gIGNvbmZpZyA9IHtcbiAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn6IGK5aSpJ1xuICB9XG5cbiAgZGF0YSA9IHtcblxuICB9XG5cbiAgbWV0aG9kcyA9IHtcbiAgICBoYW5kbGVDaG9vc2VJbWFnZSgpIHtcbiAgICAgIHdlcHkuY2hvb3NlSW1hZ2Uoe1xuICAgICAgICBzdWNjZXNzKHJlcykge1xuICAgICAgICAgIGNvbnNvbGUubG9nKHJlcylcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9LFxuXG4gICAgaGFuZGxlU3VibWl0KCkge1xuXG4gICAgfVxuICB9XG59XG4iXX0=