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
          var notification, operation, result;
          return _regenerator2.default.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  notification = notifications[index];
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
                  result = _context.sent;

                  _wepy2.default.hideLoading();
                  _context.next = 14;
                  break;

                case 10:
                  _context.prev = 10;
                  _context.t0 = _context['catch'](2);

                  _log2.default.error({
                    page: 'notifications',
                    opr: 'feedback',
                    info: _context.t0
                  });
                  _wepy2.default.hideLoading();

                case 14:
                case 'end':
                  return _context.stop();
              }
            }
          }, _callee, _this2, [[2, 10]]);
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
          _this3.notifications = notifications.map(function (notification) {
            return (0, _extends3.default)({}, notification);
          });
        }
      });
    }
  }]);
  return Notifications;
}(_wepy2.default.page)) || _class);

Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Notifications , 'pages/notifications'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vdGlmaWNhdGlvbnMuanMiXSwibmFtZXMiOlsiTm90aWZpY2F0aW9ucyIsInVzZXIiLCJzdGF0ZSIsImNvbW1vbiIsIm5pbSIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCJkYXRhIiwibm90aWZpY2F0aW9ucyIsIm1ldGhvZHMiLCJmZWVkYmFjayIsImluZGV4IiwidHlwZSIsIm5vdGlmaWNhdGlvbiIsIm9wZXJhdGlvbiIsImNvbmQiLCJlcXVhbHMiLCJhY2NlcHRGcmllbmRBcHBseSIsInJlamVjdEZyaWVuZEFwcGx5Iiwic2hvd0xvYWRpbmciLCJhY2NpZCIsImZhY2NpZCIsInJlc3VsdCIsImhpZGVMb2FkaW5nIiwiZXJyb3IiLCJwYWdlIiwib3ByIiwiaW5mbyIsImdldEluc3RhbmNlIiwiYWNjb3VudCIsInRva2VuIiwib25zeXNtc2ciLCJzeXNNc2dzIiwibWFwIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBOzs7O0FBQ0E7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7SUFNcUJBLGEsV0FKcEIsd0JBQVE7QUFDUEMsUUFBTTtBQUFBLFdBQVNDLE1BQU1DLE1BQU4sQ0FBYUYsSUFBdEI7QUFBQSxHQURDO0FBRVBHLE9BQUs7QUFBQSxXQUFTRixNQUFNQyxNQUFOLENBQWFDLEdBQXRCO0FBQUE7QUFGRSxDQUFSLEM7Ozs7Ozs7Ozs7Ozs7OzBOQUtDQyxNLEdBQVM7QUFDUEMsOEJBQXdCO0FBRGpCLEssUUFJVEMsSSxHQUFPO0FBQ0xDLHFCQUFlO0FBRFYsSyxRQXNCUEMsTyxHQUFVO0FBQ0ZDLGNBREUsb0JBQ09DLEtBRFAsRUFDY0MsSUFEZCxFQUNvQjtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNwQkMsOEJBRG9CLEdBQ0xMLGNBQWNHLEtBQWQsQ0FESztBQUVwQkcsMkJBRm9CLEdBRVIsZ0JBQUVDLElBQUYsQ0FBTyxDQUN2QixDQUFDLGdCQUFFQyxNQUFGLENBQVMsUUFBVCxDQUFELEVBQXFCO0FBQUEsMkJBQU0sY0FBSUMsaUJBQVY7QUFBQSxtQkFBckIsQ0FEdUIsRUFFdkIsQ0FBQyxnQkFBRUQsTUFBRixDQUFTLFFBQVQsQ0FBRCxFQUFxQjtBQUFBLDJCQUFNLGNBQUlFLGlCQUFWO0FBQUEsbUJBQXJCLENBRnVCLENBQVAsRUFHZk4sSUFIZSxDQUZRO0FBQUE7O0FBT3hCLGlDQUFLTyxXQUFMO0FBUHdCO0FBQUEseUJBUUhMLFVBQVUsT0FBS2IsSUFBTCxDQUFVbUIsS0FBcEIsRUFBMkJQLGFBQWFRLE1BQXhDLENBUkc7O0FBQUE7QUFRbEJDLHdCQVJrQjs7QUFTeEIsaUNBQUtDLFdBQUw7QUFUd0I7QUFBQTs7QUFBQTtBQUFBO0FBQUE7O0FBV3hCLGdDQUFJQyxLQUFKLENBQVU7QUFDUkMsMEJBQU0sZUFERTtBQUVSQyx5QkFBSyxVQUZHO0FBR1JDO0FBSFEsbUJBQVY7QUFLQSxpQ0FBS0osV0FBTDs7QUFoQndCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBa0IzQjtBQW5CTyxLOzs7Ozs2QkFsQkQ7QUFBQTs7QUFDUDtBQUNBLG9CQUFJSyxXQUFKLENBQWdCO0FBQ2RDLGlCQUFTLEtBQUs1QixJQUFMLENBQVVtQixLQURMO0FBRWRVLGVBQU8sS0FBSzFCLEdBQUwsQ0FBUzBCLEtBRkY7QUFHZEMsa0JBQVUsa0JBQUNDLE9BQUQsRUFBYTtBQUNyQix3QkFBSUwsSUFBSixDQUFTO0FBQ1BGLGtCQUFNLGVBREM7QUFFUEMsaUJBQUssVUFGRTtBQUdQQyxrQkFBTUs7QUFIQyxXQUFUO0FBS0EsaUJBQUt4QixhQUFMLEdBQXFCQSxjQUFjeUIsR0FBZCxDQUFrQjtBQUFBLDhDQUNsQ3BCLFlBRGtDO0FBQUEsV0FBbEIsQ0FBckI7QUFHRDtBQVphLE9BQWhCO0FBY0Q7OztFQXpCd0MsZUFBS1ksSTtrQkFBM0J6QixhIiwiZmlsZSI6Im5vdGlmaWNhdGlvbnMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAnd2VweS1yZWR1eCdcbmltcG9ydCBOSU0gZnJvbSAnLi4vdXRpbHMvbmltJ1xuaW1wb3J0IGxvZyBmcm9tICcuLi91dGlscy9sb2cnXG5pbXBvcnQgUiBmcm9tICcuLi9saWJzL3JhbWRhJ1xuXG5AY29ubmVjdCh7XG4gIHVzZXI6IHN0YXRlID0+IHN0YXRlLmNvbW1vbi51c2VyLFxuICBuaW06IHN0YXRlID0+IHN0YXRlLmNvbW1vbi5uaW1cbn0pXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOb3RpZmljYXRpb25zIGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgY29uZmlnID0ge1xuICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICfpgJrnn6UnXG4gIH1cblxuICBkYXRhID0ge1xuICAgIG5vdGlmaWNhdGlvbnM6IFtdXG4gIH1cblxuICBvbkxvYWQoKSB7XG4gICAgLy8g5Yid5aeL5YyWIE5JTSDlr7nosaHnlKjkuo7mjqXmlLbns7vnu5/pgJrnn6VcbiAgICBOSU0uZ2V0SW5zdGFuY2Uoe1xuICAgICAgYWNjb3VudDogdGhpcy51c2VyLmFjY2lkLFxuICAgICAgdG9rZW46IHRoaXMubmltLnRva2VuLFxuICAgICAgb25zeXNtc2c6IChzeXNNc2dzKSA9PiB7XG4gICAgICAgIGxvZy5pbmZvKHtcbiAgICAgICAgICBwYWdlOiAnbm90aWZpY2F0aW9ucycsXG4gICAgICAgICAgb3ByOiAnb25zeXNtc2cnLFxuICAgICAgICAgIGluZm86IHN5c01zZ3NcbiAgICAgICAgfSlcbiAgICAgICAgdGhpcy5ub3RpZmljYXRpb25zID0gbm90aWZpY2F0aW9ucy5tYXAobm90aWZpY2F0aW9uID0+ICh7XG4gICAgICAgICAgLi4ubm90aWZpY2F0aW9uXG4gICAgICAgIH0pKVxuICAgICAgfVxuICAgIH0pXG4gIH1cblxuICBtZXRob2RzID0ge1xuICAgIGFzeW5jIGZlZWRiYWNrKGluZGV4LCB0eXBlKSB7XG4gICAgICBjb25zdCBub3RpZmljYXRpb24gPSBub3RpZmljYXRpb25zW2luZGV4XVxuICAgICAgY29uc3Qgb3BlcmF0aW9uID0gUi5jb25kKFtcbiAgICAgICAgW1IuZXF1YWxzKCdhY2NlcHQnKSwgKCkgPT4gTklNLmFjY2VwdEZyaWVuZEFwcGx5XSxcbiAgICAgICAgW1IuZXF1YWxzKCdyZWplY3QnKSwgKCkgPT4gTklNLnJlamVjdEZyaWVuZEFwcGx5XVxuICAgICAgXSkodHlwZSlcbiAgICAgIHRyeSB7XG4gICAgICAgIHdlcHkuc2hvd0xvYWRpbmcoKVxuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBvcGVyYXRpb24odGhpcy51c2VyLmFjY2lkLCBub3RpZmljYXRpb24uZmFjY2lkKVxuICAgICAgICB3ZXB5LmhpZGVMb2FkaW5nKClcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgbG9nLmVycm9yKHtcbiAgICAgICAgICBwYWdlOiAnbm90aWZpY2F0aW9ucycsXG4gICAgICAgICAgb3ByOiAnZmVlZGJhY2snLFxuICAgICAgICAgIGluZm86IGVcbiAgICAgICAgfSlcbiAgICAgICAgd2VweS5oaWRlTG9hZGluZygpXG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iXX0=