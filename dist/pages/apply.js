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

var _dec, _class;

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _wepyRedux = require('./../npm/wepy-redux/lib/index.js');

var _nim = require('./../utils/nim.js');

var _nim2 = _interopRequireDefault(_nim);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Apply = (_dec = (0, _wepyRedux.connect)({
  user: function user(state) {
    return state.common.user;
  }
}), _dec(_class = function (_wepy$page) {
  (0, _inherits3.default)(Apply, _wepy$page);

  function Apply() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, Apply);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Apply.__proto__ || (0, _getPrototypeOf2.default)(Apply)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: '好友申请'
    }, _this.data = {
      friend: null,
      requesting: false
    }, _this.methods = {
      submit: function submit(e) {
        var _this2 = this;

        return (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee() {
          var msg;
          return _regenerator2.default.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  msg = e.detail.value;

                  _this2.requesting = true;
                  _context.prev = 2;
                  _context.next = 5;
                  return _nim2.default.sendApply(_this2.user.accid, _this2.friend.accid, msg);

                case 5:
                  _wepy2.default.showToast({
                    title: '请求发送成功'
                  }).then(function () {
                    return _wepy2.default.navigateBack();
                  });
                  _context.next = 12;
                  break;

                case 8:
                  _context.prev = 8;
                  _context.t0 = _context['catch'](2);

                  _this2.requesting = false;
                  console.error('[page-->apply-->sendApply]', _context.t0);

                case 12:
                case 'end':
                  return _context.stop();
              }
            }
          }, _callee, _this2, [[2, 8]]);
        }))();
      }
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(Apply, [{
    key: 'onLoad',
    value: function () {
      var _ref2 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee2(options) {
        var accid, user;
        return _regenerator2.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                // 加载用户信息
                accid = options.accid;
                _context2.prev = 1;

                _wepy2.default.showLoading();
                _context2.next = 5;
                return _nim2.default.getUserInfo(accid);

              case 5:
                user = _context2.sent;

                this.friend = {
                  accid: accid,
                  avatar: user.icon,
                  nickname: user.name
                };
                _wepy2.default.hideLoading();
                this.$apply();
                _context2.next = 15;
                break;

              case 11:
                _context2.prev = 11;
                _context2.t0 = _context2['catch'](1);

                console.error('[page-->apply-->getUserInfo]', _context2.t0);
                _wepy2.default.navigateBack();

              case 15:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, this, [[1, 11]]);
      }));

      function onLoad(_x) {
        return _ref2.apply(this, arguments);
      }

      return onLoad;
    }()
  }]);
  return Apply;
}(_wepy2.default.page)) || _class);

Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Apply , 'pages/apply'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcGx5LmpzIl0sIm5hbWVzIjpbIkFwcGx5IiwidXNlciIsInN0YXRlIiwiY29tbW9uIiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsImRhdGEiLCJmcmllbmQiLCJyZXF1ZXN0aW5nIiwibWV0aG9kcyIsInN1Ym1pdCIsImUiLCJtc2ciLCJkZXRhaWwiLCJ2YWx1ZSIsInNlbmRBcHBseSIsImFjY2lkIiwic2hvd1RvYXN0IiwidGl0bGUiLCJ0aGVuIiwibmF2aWdhdGVCYWNrIiwiY29uc29sZSIsImVycm9yIiwib3B0aW9ucyIsInNob3dMb2FkaW5nIiwiZ2V0VXNlckluZm8iLCJhdmF0YXIiLCJpY29uIiwibmlja25hbWUiLCJuYW1lIiwiaGlkZUxvYWRpbmciLCIkYXBwbHkiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7Ozs7QUFDQTs7QUFDQTs7Ozs7O0lBT3FCQSxLLFdBTHBCLHdCQUFRO0FBQ1BDLE1BRE8sZ0JBQ0ZDLEtBREUsRUFDSztBQUNWLFdBQU9BLE1BQU1DLE1BQU4sQ0FBYUYsSUFBcEI7QUFDRDtBQUhNLENBQVIsQzs7Ozs7Ozs7Ozs7Ozs7ME1BTUNHLE0sR0FBUztBQUNQQyw4QkFBd0I7QUFEakIsSyxRQUlUQyxJLEdBQU87QUFDTEMsY0FBUSxJQURIO0FBRUxDLGtCQUFZO0FBRlAsSyxRQUtQQyxPLEdBQVU7QUFDRkMsWUFERSxrQkFDS0MsQ0FETCxFQUNRO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ1JDLHFCQURRLEdBQ0ZELEVBQUVFLE1BQUYsQ0FBU0MsS0FEUDs7QUFFZCx5QkFBS04sVUFBTCxHQUFrQixJQUFsQjtBQUZjO0FBQUE7QUFBQSx5QkFLTixjQUFJTyxTQUFKLENBQWMsT0FBS2QsSUFBTCxDQUFVZSxLQUF4QixFQUErQixPQUFLVCxNQUFMLENBQVlTLEtBQTNDLEVBQWtESixHQUFsRCxDQUxNOztBQUFBO0FBTVosaUNBQUtLLFNBQUwsQ0FBZTtBQUNiQywyQkFBTztBQURNLG1CQUFmLEVBRUdDLElBRkgsQ0FFUTtBQUFBLDJCQUFNLGVBQUtDLFlBQUwsRUFBTjtBQUFBLG1CQUZSO0FBTlk7QUFBQTs7QUFBQTtBQUFBO0FBQUE7O0FBVVoseUJBQUtaLFVBQUwsR0FBa0IsS0FBbEI7QUFDQWEsMEJBQVFDLEtBQVIsQ0FBYyw0QkFBZDs7QUFYWTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQWFmO0FBZE8sSzs7Ozs7OytGQWlCR0MsTzs7Ozs7O0FBQ1g7QUFDUVAscUIsR0FBVU8sTyxDQUFWUCxLOzs7QUFFTiwrQkFBS1EsV0FBTDs7dUJBQ21CLGNBQUlDLFdBQUosQ0FBZ0JULEtBQWhCLEM7OztBQUFiZixvQjs7QUFDTixxQkFBS00sTUFBTCxHQUFjO0FBQ1pTLHlCQUFPQSxLQURLO0FBRVpVLDBCQUFRekIsS0FBSzBCLElBRkQ7QUFHWkMsNEJBQVUzQixLQUFLNEI7QUFISCxpQkFBZDtBQUtBLCtCQUFLQyxXQUFMO0FBQ0EscUJBQUtDLE1BQUw7Ozs7Ozs7O0FBRUFWLHdCQUFRQyxLQUFSLENBQWMsOEJBQWQ7QUFDQSwrQkFBS0YsWUFBTDs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBMUM2QixlQUFLWSxJO2tCQUFuQmhDLEsiLCJmaWxlIjoiYXBwbHkuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAnd2VweS1yZWR1eCdcbmltcG9ydCBOSU0gZnJvbSAnLi4vdXRpbHMvbmltJ1xuXG5AY29ubmVjdCh7XG4gIHVzZXIoc3RhdGUpIHtcbiAgICByZXR1cm4gc3RhdGUuY29tbW9uLnVzZXJcbiAgfVxufSlcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFwcGx5IGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgY29uZmlnID0ge1xuICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICflpb3lj4vnlLPor7cnXG4gIH1cblxuICBkYXRhID0ge1xuICAgIGZyaWVuZDogbnVsbCxcbiAgICByZXF1ZXN0aW5nOiBmYWxzZVxuICB9XG5cbiAgbWV0aG9kcyA9IHtcbiAgICBhc3luYyBzdWJtaXQoZSkge1xuICAgICAgY29uc3QgbXNnID0gZS5kZXRhaWwudmFsdWVcbiAgICAgIHRoaXMucmVxdWVzdGluZyA9IHRydWVcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIOWPkemAgeWlveWPi+eUs+ivt1xuICAgICAgICBhd2FpdCBOSU0uc2VuZEFwcGx5KHRoaXMudXNlci5hY2NpZCwgdGhpcy5mcmllbmQuYWNjaWQsIG1zZylcbiAgICAgICAgd2VweS5zaG93VG9hc3Qoe1xuICAgICAgICAgIHRpdGxlOiAn6K+35rGC5Y+R6YCB5oiQ5YqfJ1xuICAgICAgICB9KS50aGVuKCgpID0+IHdlcHkubmF2aWdhdGVCYWNrKCkpXG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIHRoaXMucmVxdWVzdGluZyA9IGZhbHNlXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ1twYWdlLS0+YXBwbHktLT5zZW5kQXBwbHldJywgZSlcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBhc3luYyBvbkxvYWQob3B0aW9ucykge1xuICAgIC8vIOWKoOi9veeUqOaIt+S/oeaBr1xuICAgIGNvbnN0IHsgYWNjaWQgfSA9IG9wdGlvbnNcbiAgICB0cnkge1xuICAgICAgd2VweS5zaG93TG9hZGluZygpXG4gICAgICBjb25zdCB1c2VyID0gYXdhaXQgTklNLmdldFVzZXJJbmZvKGFjY2lkKVxuICAgICAgdGhpcy5mcmllbmQgPSB7XG4gICAgICAgIGFjY2lkOiBhY2NpZCxcbiAgICAgICAgYXZhdGFyOiB1c2VyLmljb24sXG4gICAgICAgIG5pY2tuYW1lOiB1c2VyLm5hbWVcbiAgICAgIH1cbiAgICAgIHdlcHkuaGlkZUxvYWRpbmcoKVxuICAgICAgdGhpcy4kYXBwbHkoKVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ1twYWdlLS0+YXBwbHktLT5nZXRVc2VySW5mb10nLCBlKVxuICAgICAgd2VweS5uYXZpZ2F0ZUJhY2soKVxuICAgIH1cbiAgfVxufVxuIl19