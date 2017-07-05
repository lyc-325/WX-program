'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _extends2 = require('./../npm/babel-runtime/helpers/extends.js');

var _extends3 = _interopRequireDefault(_extends2);

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

var _dec, _class;

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _wepyRedux = require('./../npm/wepy-redux/lib/index.js');

var _nim = require('./../utils/nim.js');

var _nim2 = _interopRequireDefault(_nim);

var _log = require('./../utils/log.js');

var _log2 = _interopRequireDefault(_log);

var _ramda = require('./../libs/ramda.js');

var _ramda2 = _interopRequireDefault(_ramda);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Notifications = (_dec = (0, _wepyRedux.connect)({
  user: function user(state) {
    return state.common.user;
  },
  nim: function nim(state) {
    return state.common.nim;
  }
}), _dec(_class = function (_wepy$page) {
  (0, _inherits3.default)(Notifications, _wepy$page);

  function Notifications() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, Notifications);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Notifications.__proto__ || (0, _getPrototypeOf2.default)(Notifications)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: '通知'
    }, _this.data = {
      notifications: []
    }, _this.methods = {
      feedback: function feedback(index, type) {
        var _this2 = this;

        return (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee() {
          var notification, operation;
          return _regenerator2.default.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  notification = _this2.notifications[index];
                  operation = _ramda2.default.cond([[_ramda2.default.equals('accept'), function () {
                    return _nim2.default.acceptFriendApply;
                  }], [_ramda2.default.equals('reject'), function () {
                    return _nim2.default.rejectFriendApply;
                  }]])(type);
                  _context.prev = 2;

                  _wepy2.default.showLoading();
                  _context.next = 6;
                  return operation(_this2.user.accid, notification.faccid);

                case 6:
                  _wepy2.default.hideLoading();
                  _context.next = 13;
                  break;

                case 9:
                  _context.prev = 9;
                  _context.t0 = _context['catch'](2);

                  _log2.default.error({
                    page: 'notifications',
                    opr: 'feedback',
                    info: _context.t0
                  });
                  _wepy2.default.hideLoading();

                case 13:
                case 'end':
                  return _context.stop();
              }
            }
          }, _callee, _this2, [[2, 9]]);
        }))();
      }
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(Notifications, [{
    key: 'onLoad',
    value: function onLoad() {
      var _this3 = this;

      // 初始化 NIM 对象用于接收系统通知
      _nim2.default.getInstance({
        account: this.user.accid,
        token: this.nim.token,
        onsysmsg: function onsysmsg(sysMsgs) {
          _log2.default.info({
            page: 'notifications',
            opr: 'onsysmsg',
            info: sysMsgs
          });
          _this3.notifications = sysMsgs.map(function (notification) {
            return (0, _extends3.default)({}, notification);
          });
        }
      });
    }
  }]);
  return Notifications;
}(_wepy2.default.page)) || _class);

Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Notifications , 'pages/notifications'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vdGlmaWNhdGlvbnMuanMiXSwibmFtZXMiOlsiTm90aWZpY2F0aW9ucyIsInVzZXIiLCJzdGF0ZSIsImNvbW1vbiIsIm5pbSIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCJkYXRhIiwibm90aWZpY2F0aW9ucyIsIm1ldGhvZHMiLCJmZWVkYmFjayIsImluZGV4IiwidHlwZSIsIm5vdGlmaWNhdGlvbiIsIm9wZXJhdGlvbiIsImNvbmQiLCJlcXVhbHMiLCJhY2NlcHRGcmllbmRBcHBseSIsInJlamVjdEZyaWVuZEFwcGx5Iiwic2hvd0xvYWRpbmciLCJhY2NpZCIsImZhY2NpZCIsImhpZGVMb2FkaW5nIiwiZXJyb3IiLCJwYWdlIiwib3ByIiwiaW5mbyIsImdldEluc3RhbmNlIiwiYWNjb3VudCIsInRva2VuIiwib25zeXNtc2ciLCJzeXNNc2dzIiwibWFwIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBOzs7O0FBQ0E7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7SUFNcUJBLGEsV0FKcEIsd0JBQVE7QUFDUEMsUUFBTTtBQUFBLFdBQVNDLE1BQU1DLE1BQU4sQ0FBYUYsSUFBdEI7QUFBQSxHQURDO0FBRVBHLE9BQUs7QUFBQSxXQUFTRixNQUFNQyxNQUFOLENBQWFDLEdBQXRCO0FBQUE7QUFGRSxDQUFSLEM7Ozs7Ozs7Ozs7Ozs7OzBOQUtDQyxNLEdBQVM7QUFDUEMsOEJBQXdCO0FBRGpCLEssUUFJVEMsSSxHQUFPO0FBQ0xDLHFCQUFlO0FBRFYsSyxRQXNCUEMsTyxHQUFVO0FBQ0ZDLGNBREUsb0JBQ09DLEtBRFAsRUFDY0MsSUFEZCxFQUNvQjtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNwQkMsOEJBRG9CLEdBQ0wsT0FBS0wsYUFBTCxDQUFtQkcsS0FBbkIsQ0FESztBQUVwQkcsMkJBRm9CLEdBRVIsZ0JBQUVDLElBQUYsQ0FBTyxDQUN2QixDQUFDLGdCQUFFQyxNQUFGLENBQVMsUUFBVCxDQUFELEVBQXFCO0FBQUEsMkJBQU0sY0FBSUMsaUJBQVY7QUFBQSxtQkFBckIsQ0FEdUIsRUFFdkIsQ0FBQyxnQkFBRUQsTUFBRixDQUFTLFFBQVQsQ0FBRCxFQUFxQjtBQUFBLDJCQUFNLGNBQUlFLGlCQUFWO0FBQUEsbUJBQXJCLENBRnVCLENBQVAsRUFHZk4sSUFIZSxDQUZRO0FBQUE7O0FBT3hCLGlDQUFLTyxXQUFMO0FBUHdCO0FBQUEseUJBUWxCTCxVQUFVLE9BQUtiLElBQUwsQ0FBVW1CLEtBQXBCLEVBQTJCUCxhQUFhUSxNQUF4QyxDQVJrQjs7QUFBQTtBQVN4QixpQ0FBS0MsV0FBTDtBQVR3QjtBQUFBOztBQUFBO0FBQUE7QUFBQTs7QUFXeEIsZ0NBQUlDLEtBQUosQ0FBVTtBQUNSQywwQkFBTSxlQURFO0FBRVJDLHlCQUFLLFVBRkc7QUFHUkM7QUFIUSxtQkFBVjtBQUtBLGlDQUFLSixXQUFMOztBQWhCd0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFrQjNCO0FBbkJPLEs7Ozs7OzZCQWxCRDtBQUFBOztBQUNQO0FBQ0Esb0JBQUlLLFdBQUosQ0FBZ0I7QUFDZEMsaUJBQVMsS0FBSzNCLElBQUwsQ0FBVW1CLEtBREw7QUFFZFMsZUFBTyxLQUFLekIsR0FBTCxDQUFTeUIsS0FGRjtBQUdkQyxrQkFBVSxrQkFBQ0MsT0FBRCxFQUFhO0FBQ3JCLHdCQUFJTCxJQUFKLENBQVM7QUFDUEYsa0JBQU0sZUFEQztBQUVQQyxpQkFBSyxVQUZFO0FBR1BDLGtCQUFNSztBQUhDLFdBQVQ7QUFLQSxpQkFBS3ZCLGFBQUwsR0FBcUJ1QixRQUFRQyxHQUFSLENBQVk7QUFBQSw4Q0FDNUJuQixZQUQ0QjtBQUFBLFdBQVosQ0FBckI7QUFHRDtBQVphLE9BQWhCO0FBY0Q7OztFQXpCd0MsZUFBS1csSTtrQkFBM0J4QixhIiwiZmlsZSI6Im5vdGlmaWNhdGlvbnMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAnd2VweS1yZWR1eCdcbmltcG9ydCBOSU0gZnJvbSAnLi4vdXRpbHMvbmltJ1xuaW1wb3J0IGxvZyBmcm9tICcuLi91dGlscy9sb2cnXG5pbXBvcnQgUiBmcm9tICcuLi9saWJzL3JhbWRhJ1xuXG5AY29ubmVjdCh7XG4gIHVzZXI6IHN0YXRlID0+IHN0YXRlLmNvbW1vbi51c2VyLFxuICBuaW06IHN0YXRlID0+IHN0YXRlLmNvbW1vbi5uaW1cbn0pXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOb3RpZmljYXRpb25zIGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgY29uZmlnID0ge1xuICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICfpgJrnn6UnXG4gIH1cblxuICBkYXRhID0ge1xuICAgIG5vdGlmaWNhdGlvbnM6IFtdXG4gIH1cblxuICBvbkxvYWQoKSB7XG4gICAgLy8g5Yid5aeL5YyWIE5JTSDlr7nosaHnlKjkuo7mjqXmlLbns7vnu5/pgJrnn6VcbiAgICBOSU0uZ2V0SW5zdGFuY2Uoe1xuICAgICAgYWNjb3VudDogdGhpcy51c2VyLmFjY2lkLFxuICAgICAgdG9rZW46IHRoaXMubmltLnRva2VuLFxuICAgICAgb25zeXNtc2c6IChzeXNNc2dzKSA9PiB7XG4gICAgICAgIGxvZy5pbmZvKHtcbiAgICAgICAgICBwYWdlOiAnbm90aWZpY2F0aW9ucycsXG4gICAgICAgICAgb3ByOiAnb25zeXNtc2cnLFxuICAgICAgICAgIGluZm86IHN5c01zZ3NcbiAgICAgICAgfSlcbiAgICAgICAgdGhpcy5ub3RpZmljYXRpb25zID0gc3lzTXNncy5tYXAobm90aWZpY2F0aW9uID0+ICh7XG4gICAgICAgICAgLi4ubm90aWZpY2F0aW9uXG4gICAgICAgIH0pKVxuICAgICAgfVxuICAgIH0pXG4gIH1cblxuICBtZXRob2RzID0ge1xuICAgIGFzeW5jIGZlZWRiYWNrKGluZGV4LCB0eXBlKSB7XG4gICAgICBjb25zdCBub3RpZmljYXRpb24gPSB0aGlzLm5vdGlmaWNhdGlvbnNbaW5kZXhdXG4gICAgICBjb25zdCBvcGVyYXRpb24gPSBSLmNvbmQoW1xuICAgICAgICBbUi5lcXVhbHMoJ2FjY2VwdCcpLCAoKSA9PiBOSU0uYWNjZXB0RnJpZW5kQXBwbHldLFxuICAgICAgICBbUi5lcXVhbHMoJ3JlamVjdCcpLCAoKSA9PiBOSU0ucmVqZWN0RnJpZW5kQXBwbHldXG4gICAgICBdKSh0eXBlKVxuICAgICAgdHJ5IHtcbiAgICAgICAgd2VweS5zaG93TG9hZGluZygpXG4gICAgICAgIGF3YWl0IG9wZXJhdGlvbih0aGlzLnVzZXIuYWNjaWQsIG5vdGlmaWNhdGlvbi5mYWNjaWQpXG4gICAgICAgIHdlcHkuaGlkZUxvYWRpbmcoKVxuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBsb2cuZXJyb3Ioe1xuICAgICAgICAgIHBhZ2U6ICdub3RpZmljYXRpb25zJyxcbiAgICAgICAgICBvcHI6ICdmZWVkYmFjaycsXG4gICAgICAgICAgaW5mbzogZVxuICAgICAgICB9KVxuICAgICAgICB3ZXB5LmhpZGVMb2FkaW5nKClcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiJdfQ==