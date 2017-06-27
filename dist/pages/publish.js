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

var Publish = function (_wepy$page) {
  (0, _inherits3.default)(Publish, _wepy$page);

  function Publish() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, Publish);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Publish.__proto__ || (0, _getPrototypeOf2.default)(Publish)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: '发布'
    }, _this.data = {
      imgs: []
    }, _this.methods = {
      handleUpload: function handleUpload() {
        var _this2 = this;

        _wepy2.default.chooseImage({
          success: function success(res) {
            _this2.imgs = res.tempFilePaths;
          }
        });
      },
      handleCancel: function handleCancel(e) {
        this.imgs = this.imgs.splice(e.currentTarget.dataset.index, 1);
      }
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  return Publish;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Publish , 'pages/publish'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInB1Ymxpc2guanMiXSwibmFtZXMiOlsiUHVibGlzaCIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCJkYXRhIiwiaW1ncyIsIm1ldGhvZHMiLCJoYW5kbGVVcGxvYWQiLCJjaG9vc2VJbWFnZSIsInN1Y2Nlc3MiLCJyZXMiLCJ0ZW1wRmlsZVBhdGhzIiwiaGFuZGxlQ2FuY2VsIiwiZSIsInNwbGljZSIsImN1cnJlbnRUYXJnZXQiLCJkYXRhc2V0IiwiaW5kZXgiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBOzs7Ozs7SUFDcUJBLE87Ozs7Ozs7Ozs7Ozs7OzhNQUNuQkMsTSxHQUFTO0FBQ1BDLDhCQUF3QjtBQURqQixLLFFBSVRDLEksR0FBTztBQUNMQyxZQUFNO0FBREQsSyxRQUlQQyxPLEdBQVU7QUFDUkMsa0JBRFEsMEJBQ1E7QUFBQTs7QUFDZCx1QkFBS0MsV0FBTCxDQUFpQjtBQUNmQyxtQkFBUyxzQkFBTztBQUNkLG1CQUFLSixJQUFMLEdBQVlLLElBQUlDLGFBQWhCO0FBQ0Q7QUFIYyxTQUFqQjtBQUtELE9BUE87QUFTUkMsa0JBVFEsd0JBU01DLENBVE4sRUFTUztBQUNmLGFBQUtSLElBQUwsR0FBWSxLQUFLQSxJQUFMLENBQVVTLE1BQVYsQ0FBaUJELEVBQUVFLGFBQUYsQ0FBZ0JDLE9BQWhCLENBQXdCQyxLQUF6QyxFQUFnRCxDQUFoRCxDQUFaO0FBQ0Q7QUFYTyxLOzs7O0VBVHlCLGVBQUtDLEk7O2tCQUFyQmpCLE8iLCJmaWxlIjoicHVibGlzaC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFB1Ymxpc2ggZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICBjb25maWcgPSB7XG4gICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+WPkeW4gydcbiAgfVxuXG4gIGRhdGEgPSB7XG4gICAgaW1nczogW11cbiAgfVxuXG4gIG1ldGhvZHMgPSB7XG4gICAgaGFuZGxlVXBsb2FkICgpIHtcbiAgICAgIHdlcHkuY2hvb3NlSW1hZ2Uoe1xuICAgICAgICBzdWNjZXNzOiByZXMgPT4ge1xuICAgICAgICAgIHRoaXMuaW1ncyA9IHJlcy50ZW1wRmlsZVBhdGhzXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfSxcblxuICAgIGhhbmRsZUNhbmNlbCAoZSkge1xuICAgICAgdGhpcy5pbWdzID0gdGhpcy5pbWdzLnNwbGljZShlLmN1cnJlbnRUYXJnZXQuZGF0YXNldC5pbmRleCwgMSlcbiAgICB9XG4gIH1cbn1cbiJdfQ==