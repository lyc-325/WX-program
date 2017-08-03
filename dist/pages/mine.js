'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _regenerator = require('./../npm/babel-runtime/regenerator/index.js');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('./../npm/babel-runtime/helpers/asyncToGenerator.js');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

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

var _mine = require('./../apis/mine.js');

var api = _interopRequireWildcard(_mine);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Mine = function (_wepy$page) {
  (0, _inherits3.default)(Mine, _wepy$page);

  function Mine() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, Mine);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Mine.__proto__ || (0, _getPrototypeOf2.default)(Mine)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: '个人中心'
    }, _this.data = {
      userData: {
        name: '加载中...'
      },
      levelData: ''
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(Mine, [{
    key: 'onLoad',
    value: function () {
      var _ref2 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee() {
        var self, jfuserId, jfuserToken, resData;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                self = this;
                _context.next = 3;
                return _wepy2.default.getStorage({
                  key: 'jfUserId',
                  success: function success(res) {
                    return res.data;
                  }
                });

              case 3:
                jfuserId = _context.sent;
                _context.next = 6;
                return _wepy2.default.getStorage({
                  key: 'jfToken',
                  success: function success(res) {
                    return res.data;
                  }
                });

              case 6:
                jfuserToken = _context.sent;
                _context.next = 9;
                return api.getUserData(jfuserToken.data, jfuserId.data);

              case 9:
                resData = _context.sent;

                self.userData = resData;
                self.levelData = api.getLevel(resData.integration);
                self.$apply();

              case 13:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function onLoad() {
        return _ref2.apply(this, arguments);
      }

      return onLoad;
    }()
  }]);
  return Mine;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Mine , 'pages/mine'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1pbmUuanMiXSwibmFtZXMiOlsiYXBpIiwiTWluZSIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCJkYXRhIiwidXNlckRhdGEiLCJuYW1lIiwibGV2ZWxEYXRhIiwic2VsZiIsImdldFN0b3JhZ2UiLCJrZXkiLCJzdWNjZXNzIiwicmVzIiwiamZ1c2VySWQiLCJqZnVzZXJUb2tlbiIsImdldFVzZXJEYXRhIiwicmVzRGF0YSIsImdldExldmVsIiwiaW50ZWdyYXRpb24iLCIkYXBwbHkiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBOzs7O0FBQ0E7O0lBQVlBLEc7Ozs7OztJQUVTQyxJOzs7Ozs7Ozs7Ozs7Ozt3TUFDbkJDLE0sR0FBUztBQUNQQyw4QkFBd0I7QUFEakIsSyxRQUlUQyxJLEdBQU87QUFDTEMsZ0JBQVU7QUFDUkMsY0FBTTtBQURFLE9BREw7QUFJTEMsaUJBQVc7QUFKTixLOzs7Ozs7Ozs7Ozs7QUFRREMsb0IsR0FBTyxJOzt1QkFDVSxlQUFLQyxVQUFMLENBQWdCO0FBQ25DQyx1QkFBSyxVQUQ4QjtBQUVuQ0MsMkJBQVMsaUJBQVNDLEdBQVQsRUFBYztBQUNyQiwyQkFBT0EsSUFBSVIsSUFBWDtBQUNEO0FBSmtDLGlCQUFoQixDOzs7QUFBakJTLHdCOzt1QkFNb0IsZUFBS0osVUFBTCxDQUFnQjtBQUN0Q0MsdUJBQUssU0FEaUM7QUFFdENDLDJCQUFTLGlCQUFTQyxHQUFULEVBQWM7QUFDckIsMkJBQU9BLElBQUlSLElBQVg7QUFDRDtBQUpxQyxpQkFBaEIsQzs7O0FBQXBCVSwyQjs7dUJBTWdCZCxJQUFJZSxXQUFKLENBQWdCRCxZQUFZVixJQUE1QixFQUFrQ1MsU0FBU1QsSUFBM0MsQzs7O0FBQWhCWSx1Qjs7QUFDSlIscUJBQUtILFFBQUwsR0FBZ0JXLE9BQWhCO0FBQ0FSLHFCQUFLRCxTQUFMLEdBQWlCUCxJQUFJaUIsUUFBSixDQUFhRCxRQUFRRSxXQUFyQixDQUFqQjtBQUNBVixxQkFBS1csTUFBTDs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBN0I4QixlQUFLQyxJOztrQkFBbEJuQixJIiwiZmlsZSI6Im1pbmUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG5pbXBvcnQgKiBhcyBhcGkgZnJvbSAnLi4vYXBpcy9taW5lJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNaW5lIGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgY29uZmlnID0ge1xuICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICfkuKrkurrkuK3lv4MnXG4gIH1cblxuICBkYXRhID0ge1xuICAgIHVzZXJEYXRhOiB7XG4gICAgICBuYW1lOiAn5Yqg6L295LitLi4uJ1xuICAgIH0sXG4gICAgbGV2ZWxEYXRhOiAnJ1xuICB9XG5cbiAgYXN5bmMgb25Mb2FkKCkge1xuICAgIGxldCBzZWxmID0gdGhpc1xuICAgIHZhciBqZnVzZXJJZCA9IGF3YWl0IHdlcHkuZ2V0U3RvcmFnZSh7XG4gICAgICBrZXk6ICdqZlVzZXJJZCcsXG4gICAgICBzdWNjZXNzOiBmdW5jdGlvbihyZXMpIHtcbiAgICAgICAgcmV0dXJuIHJlcy5kYXRhXG4gICAgICB9XG4gICAgfSlcbiAgICB2YXIgamZ1c2VyVG9rZW4gPSBhd2FpdCB3ZXB5LmdldFN0b3JhZ2Uoe1xuICAgICAga2V5OiAnamZUb2tlbicsXG4gICAgICBzdWNjZXNzOiBmdW5jdGlvbihyZXMpIHtcbiAgICAgICAgcmV0dXJuIHJlcy5kYXRhXG4gICAgICB9XG4gICAgfSlcbiAgICB2YXIgcmVzRGF0YSA9IGF3YWl0IGFwaS5nZXRVc2VyRGF0YShqZnVzZXJUb2tlbi5kYXRhLCBqZnVzZXJJZC5kYXRhKVxuICAgIHNlbGYudXNlckRhdGEgPSByZXNEYXRhXG4gICAgc2VsZi5sZXZlbERhdGEgPSBhcGkuZ2V0TGV2ZWwocmVzRGF0YS5pbnRlZ3JhdGlvbilcbiAgICBzZWxmLiRhcHBseSgpXG4gIH1cbn1cbiJdfQ==