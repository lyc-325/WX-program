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
      userInfoData: {
        nickName: '加载中...'
      },
      userData: {}
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(Mine, [{
    key: 'onLoad',
    value: function () {
      var _ref2 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee() {
        var self, jfuserId, jfuserToken, resData, userData;
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
                _context.next = 13;
                return _wepy2.default.getUserInfo();

              case 13:
                userData = _context.sent;

                self.userInfoData = userData.userInfo;
                self.$apply();

              case 16:
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1pbmUuanMiXSwibmFtZXMiOlsiYXBpIiwiTWluZSIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCJkYXRhIiwidXNlckluZm9EYXRhIiwibmlja05hbWUiLCJ1c2VyRGF0YSIsInNlbGYiLCJnZXRTdG9yYWdlIiwia2V5Iiwic3VjY2VzcyIsInJlcyIsImpmdXNlcklkIiwiamZ1c2VyVG9rZW4iLCJnZXRVc2VyRGF0YSIsInJlc0RhdGEiLCJnZXRVc2VySW5mbyIsInVzZXJJbmZvIiwiJGFwcGx5IiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTs7OztBQUNBOztJQUFZQSxHOzs7Ozs7SUFFU0MsSTs7Ozs7Ozs7Ozs7Ozs7d01BQ25CQyxNLEdBQVM7QUFDUEMsOEJBQXdCO0FBRGpCLEssUUFJVEMsSSxHQUFPO0FBQ0xDLG9CQUFjO0FBQ1pDLGtCQUFVO0FBREUsT0FEVDtBQUlMQyxnQkFBVTtBQUpMLEs7Ozs7Ozs7Ozs7OztBQVFEQyxvQixHQUFPLEk7O3VCQUNVLGVBQUtDLFVBQUwsQ0FBZ0I7QUFDbkNDLHVCQUFLLFVBRDhCO0FBRW5DQywyQkFBUyxpQkFBU0MsR0FBVCxFQUFjO0FBQ3JCLDJCQUFPQSxJQUFJUixJQUFYO0FBQ0Q7QUFKa0MsaUJBQWhCLEM7OztBQUFqQlMsd0I7O3VCQU1vQixlQUFLSixVQUFMLENBQWdCO0FBQ3RDQyx1QkFBSyxTQURpQztBQUV0Q0MsMkJBQVMsaUJBQVNDLEdBQVQsRUFBYztBQUNyQiwyQkFBT0EsSUFBSVIsSUFBWDtBQUNEO0FBSnFDLGlCQUFoQixDOzs7QUFBcEJVLDJCOzt1QkFNZ0JkLElBQUllLFdBQUosQ0FBZ0JELFlBQVlWLElBQTVCLEVBQWtDUyxTQUFTVCxJQUEzQyxDOzs7QUFBaEJZLHVCOztBQUNKUixxQkFBS0QsUUFBTCxHQUFnQlMsT0FBaEI7O3VCQUNxQixlQUFLQyxXQUFMLEU7OztBQUFqQlYsd0I7O0FBQ0pDLHFCQUFLSCxZQUFMLEdBQW9CRSxTQUFTVyxRQUE3QjtBQUNBVixxQkFBS1csTUFBTDs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBOUI4QixlQUFLQyxJOztrQkFBbEJuQixJIiwiZmlsZSI6Im1pbmUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG5pbXBvcnQgKiBhcyBhcGkgZnJvbSAnLi4vYXBpcy9taW5lJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNaW5lIGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgY29uZmlnID0ge1xuICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICfkuKrkurrkuK3lv4MnXG4gIH1cblxuICBkYXRhID0ge1xuICAgIHVzZXJJbmZvRGF0YToge1xuICAgICAgbmlja05hbWU6ICfliqDovb3kuK0uLi4nXG4gICAgfSxcbiAgICB1c2VyRGF0YToge31cbiAgfVxuXG4gIGFzeW5jIG9uTG9hZCgpIHtcbiAgICBsZXQgc2VsZiA9IHRoaXNcbiAgICB2YXIgamZ1c2VySWQgPSBhd2FpdCB3ZXB5LmdldFN0b3JhZ2Uoe1xuICAgICAga2V5OiAnamZVc2VySWQnLFxuICAgICAgc3VjY2VzczogZnVuY3Rpb24ocmVzKSB7XG4gICAgICAgIHJldHVybiByZXMuZGF0YVxuICAgICAgfVxuICAgIH0pXG4gICAgdmFyIGpmdXNlclRva2VuID0gYXdhaXQgd2VweS5nZXRTdG9yYWdlKHtcbiAgICAgIGtleTogJ2pmVG9rZW4nLFxuICAgICAgc3VjY2VzczogZnVuY3Rpb24ocmVzKSB7XG4gICAgICAgIHJldHVybiByZXMuZGF0YVxuICAgICAgfVxuICAgIH0pXG4gICAgdmFyIHJlc0RhdGEgPSBhd2FpdCBhcGkuZ2V0VXNlckRhdGEoamZ1c2VyVG9rZW4uZGF0YSwgamZ1c2VySWQuZGF0YSlcbiAgICBzZWxmLnVzZXJEYXRhID0gcmVzRGF0YVxuICAgIHZhciB1c2VyRGF0YSA9IGF3YWl0IHdlcHkuZ2V0VXNlckluZm8oKVxuICAgIHNlbGYudXNlckluZm9EYXRhID0gdXNlckRhdGEudXNlckluZm9cbiAgICBzZWxmLiRhcHBseSgpXG4gIH1cbn1cbiJdfQ==