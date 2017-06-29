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
        var self = this;
        _wepy2.default.chooseImage().then(function (res) {
          self.imgs = res.tempFilePaths;
          self.$apply();
        });
      },
      handleCancel: function handleCancel(e) {
        this.imgs.splice(e.currentTarget.dataset.index, 1);
      }
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  return Publish;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Publish , 'pages/publish'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInB1Ymxpc2guanMiXSwibmFtZXMiOlsiUHVibGlzaCIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCJkYXRhIiwiaW1ncyIsIm1ldGhvZHMiLCJoYW5kbGVVcGxvYWQiLCJzZWxmIiwiY2hvb3NlSW1hZ2UiLCJ0aGVuIiwicmVzIiwidGVtcEZpbGVQYXRocyIsIiRhcHBseSIsImhhbmRsZUNhbmNlbCIsImUiLCJzcGxpY2UiLCJjdXJyZW50VGFyZ2V0IiwiZGF0YXNldCIsImluZGV4IiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTs7Ozs7O0lBQ3FCQSxPOzs7Ozs7Ozs7Ozs7Ozs4TUFDbkJDLE0sR0FBUztBQUNQQyw4QkFBd0I7QUFEakIsSyxRQUlUQyxJLEdBQU87QUFDTEMsWUFBTTtBQURELEssUUFJUEMsTyxHQUFVO0FBQ1JDLGtCQURRLDBCQUNRO0FBQ2QsWUFBSUMsT0FBTyxJQUFYO0FBQ0EsdUJBQUtDLFdBQUwsR0FBbUJDLElBQW5CLENBQXdCLGVBQU87QUFDN0JGLGVBQUtILElBQUwsR0FBWU0sSUFBSUMsYUFBaEI7QUFDQUosZUFBS0ssTUFBTDtBQUNELFNBSEQ7QUFJRCxPQVBPO0FBU1JDLGtCQVRRLHdCQVNNQyxDQVROLEVBU1M7QUFDZixhQUFLVixJQUFMLENBQVVXLE1BQVYsQ0FBaUJELEVBQUVFLGFBQUYsQ0FBZ0JDLE9BQWhCLENBQXdCQyxLQUF6QyxFQUFnRCxDQUFoRDtBQUNEO0FBWE8sSzs7OztFQVR5QixlQUFLQyxJOztrQkFBckJuQixPIiwiZmlsZSI6InB1Ymxpc2guanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQdWJsaXNoIGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgY29uZmlnID0ge1xuICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICflj5HluIMnXG4gIH1cblxuICBkYXRhID0ge1xuICAgIGltZ3M6IFtdXG4gIH1cblxuICBtZXRob2RzID0ge1xuICAgIGhhbmRsZVVwbG9hZCAoKSB7XG4gICAgICBsZXQgc2VsZiA9IHRoaXNcbiAgICAgIHdlcHkuY2hvb3NlSW1hZ2UoKS50aGVuKHJlcyA9PiB7XG4gICAgICAgIHNlbGYuaW1ncyA9IHJlcy50ZW1wRmlsZVBhdGhzXG4gICAgICAgIHNlbGYuJGFwcGx5KClcbiAgICAgIH0pXG4gICAgfSxcblxuICAgIGhhbmRsZUNhbmNlbCAoZSkge1xuICAgICAgdGhpcy5pbWdzLnNwbGljZShlLmN1cnJlbnRUYXJnZXQuZGF0YXNldC5pbmRleCwgMSlcbiAgICB9XG4gIH1cbn1cbiJdfQ==