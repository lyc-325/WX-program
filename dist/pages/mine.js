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
      navigationBarTitleText: '我的信息'
    }, _this.data = {
      userInfoData: {
        nickName: '加载中...'
      }
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(Mine, [{
    key: 'onLoad',
    value: function () {
      var _ref2 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee() {
        var self, res, userData;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                self = this;
                _context.next = 3;
                return api.getUserData('76572b6d68c03186f16cbae31f48051cce022213', '13');

              case 3:
                res = _context.sent;

                console.log(res);
                _context.next = 7;
                return _wepy2.default.getUserInfo();

              case 7:
                userData = _context.sent;

                self.userInfoData = userData.userInfo;
                console.log(self.userInfoData);
                self.$apply();

              case 11:
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1pbmUuanMiXSwibmFtZXMiOlsiYXBpIiwiTWluZSIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCJkYXRhIiwidXNlckluZm9EYXRhIiwibmlja05hbWUiLCJzZWxmIiwiZ2V0VXNlckRhdGEiLCJyZXMiLCJjb25zb2xlIiwibG9nIiwiZ2V0VXNlckluZm8iLCJ1c2VyRGF0YSIsInVzZXJJbmZvIiwiJGFwcGx5IiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTs7OztBQUNBOztJQUFZQSxHOzs7Ozs7SUFFU0MsSTs7Ozs7Ozs7Ozs7Ozs7d01BQ25CQyxNLEdBQVM7QUFDUEMsOEJBQXdCO0FBRGpCLEssUUFHVEMsSSxHQUFPO0FBQ0xDLG9CQUFjO0FBQ1pDLGtCQUFVO0FBREU7QUFEVCxLOzs7Ozs7Ozs7Ozs7QUFNREMsb0IsR0FBTyxJOzt1QkFDT1AsSUFBSVEsV0FBSixDQUFnQiwwQ0FBaEIsRUFBNEQsSUFBNUQsQzs7O0FBQVpDLG1COztBQUNOQyx3QkFBUUMsR0FBUixDQUFZRixHQUFaOzt1QkFDcUIsZUFBS0csV0FBTCxFOzs7QUFBakJDLHdCOztBQUNKTixxQkFBS0YsWUFBTCxHQUFvQlEsU0FBU0MsUUFBN0I7QUFDQUosd0JBQVFDLEdBQVIsQ0FBWUosS0FBS0YsWUFBakI7QUFDQUUscUJBQUtRLE1BQUw7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQWhCOEIsZUFBS0MsSTs7a0JBQWxCZixJIiwiZmlsZSI6Im1pbmUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG5pbXBvcnQgKiBhcyBhcGkgZnJvbSAnLi4vYXBpcy9taW5lJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNaW5lIGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgY29uZmlnID0ge1xuICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICfmiJHnmoTkv6Hmga8nXG4gIH1cbiAgZGF0YSA9IHtcbiAgICB1c2VySW5mb0RhdGE6IHtcbiAgICAgIG5pY2tOYW1lOiAn5Yqg6L295LitLi4uJ1xuICAgIH1cbiAgfVxuICBhc3luYyBvbkxvYWQoKSB7XG4gICAgbGV0IHNlbGYgPSB0aGlzXG4gICAgY29uc3QgcmVzID0gYXdhaXQgYXBpLmdldFVzZXJEYXRhKCc3NjU3MmI2ZDY4YzAzMTg2ZjE2Y2JhZTMxZjQ4MDUxY2NlMDIyMjEzJywgJzEzJylcbiAgICBjb25zb2xlLmxvZyhyZXMpXG4gICAgdmFyIHVzZXJEYXRhID0gYXdhaXQgd2VweS5nZXRVc2VySW5mbygpXG4gICAgc2VsZi51c2VySW5mb0RhdGEgPSB1c2VyRGF0YS51c2VySW5mb1xuICAgIGNvbnNvbGUubG9nKHNlbGYudXNlckluZm9EYXRhKVxuICAgIHNlbGYuJGFwcGx5KClcbiAgfVxufVxuIl19