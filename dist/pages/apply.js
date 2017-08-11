'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

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
      requesting: false,
      msg: ''
    }, _this.methods = {
      setMsg: function setMsg(e) {
        this.msg = e.detail.value;
      },
      submit: function submit() {
        var _this2 = this;

        return (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee() {
          return _regenerator2.default.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  _this2.requesting = true;
                  _context.prev = 1;
                  _context.next = 4;
                  return _nim2.default.sendApply(_this2.user.accid, _this2.friend.accid, _this2.msg);

                case 4:
                  _wepy2.default.showToast({
                    title: '请求发送成功'
                  }).then(function () {
                    return _wepy2.default.navigateBack();
                  });
                  _context.next = 11;
                  break;

                case 7:
                  _context.prev = 7;
                  _context.t0 = _context['catch'](1);

                  _this2.requesting = false;
                  _log2.default.error({
                    page: 'apply',
                    opr: 'sendApply',
                    info: _context.t0
                  });

                case 11:
                case 'end':
                  return _context.stop();
              }
            }
          }, _callee, _this2, [[1, 7]]);
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

                console.log('user', user);
                this.friend = {
                  accid: accid,
                  avatar: user.icon,
                  nickname: user.name
                };
                _wepy2.default.hideLoading();
                this.$apply();
                _context2.next = 16;
                break;

              case 12:
                _context2.prev = 12;
                _context2.t0 = _context2['catch'](1);

                _log2.default.error({
                  page: 'apply',
                  opr: 'getUserInfo',
                  info: _context2.t0
                });
                _wepy2.default.navigateBack();

              case 16:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, this, [[1, 12]]);
      }));

      function onLoad(_x) {
        return _ref2.apply(this, arguments);
      }

      return onLoad;
    }()
  }]);
  return Apply;
}(_wepy2.default.page)) || _class);
exports.default = Apply;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcGx5LmpzIl0sIm5hbWVzIjpbIkFwcGx5IiwidXNlciIsInN0YXRlIiwiY29tbW9uIiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsImRhdGEiLCJmcmllbmQiLCJyZXF1ZXN0aW5nIiwibXNnIiwibWV0aG9kcyIsInNldE1zZyIsImUiLCJkZXRhaWwiLCJ2YWx1ZSIsInN1Ym1pdCIsInNlbmRBcHBseSIsImFjY2lkIiwic2hvd1RvYXN0IiwidGl0bGUiLCJ0aGVuIiwibmF2aWdhdGVCYWNrIiwiZXJyb3IiLCJwYWdlIiwib3ByIiwiaW5mbyIsIm9wdGlvbnMiLCJzaG93TG9hZGluZyIsImdldFVzZXJJbmZvIiwiY29uc29sZSIsImxvZyIsImF2YXRhciIsImljb24iLCJuaWNrbmFtZSIsIm5hbWUiLCJoaWRlTG9hZGluZyIsIiRhcHBseSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBOzs7O0FBQ0E7O0FBQ0E7Ozs7QUFDQTs7Ozs7O0lBT3FCQSxLLFdBTHBCLHdCQUFRO0FBQ1BDLE1BRE8sZ0JBQ0ZDLEtBREUsRUFDSztBQUNWLFdBQU9BLE1BQU1DLE1BQU4sQ0FBYUYsSUFBcEI7QUFDRDtBQUhNLENBQVIsQzs7Ozs7Ozs7Ozs7Ozs7ME1BTUNHLE0sR0FBUztBQUNQQyw4QkFBd0I7QUFEakIsSyxRQUlUQyxJLEdBQU87QUFDTEMsY0FBUSxJQURIO0FBRUxDLGtCQUFZLEtBRlA7QUFHTEMsV0FBSztBQUhBLEssUUFNUEMsTyxHQUFVO0FBQ1JDLFlBRFEsa0JBQ0RDLENBREMsRUFDRTtBQUNSLGFBQUtILEdBQUwsR0FBV0csRUFBRUMsTUFBRixDQUFTQyxLQUFwQjtBQUNELE9BSE87QUFJRkMsWUFKRSxvQkFJTztBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDYix5QkFBS1AsVUFBTCxHQUFrQixJQUFsQjtBQURhO0FBQUE7QUFBQSx5QkFJTCxjQUFJUSxTQUFKLENBQWMsT0FBS2YsSUFBTCxDQUFVZ0IsS0FBeEIsRUFBK0IsT0FBS1YsTUFBTCxDQUFZVSxLQUEzQyxFQUFrRCxPQUFLUixHQUF2RCxDQUpLOztBQUFBO0FBS1gsaUNBQUtTLFNBQUwsQ0FBZTtBQUNiQywyQkFBTztBQURNLG1CQUFmLEVBRUdDLElBRkgsQ0FFUTtBQUFBLDJCQUFNLGVBQUtDLFlBQUwsRUFBTjtBQUFBLG1CQUZSO0FBTFc7QUFBQTs7QUFBQTtBQUFBO0FBQUE7O0FBU1gseUJBQUtiLFVBQUwsR0FBa0IsS0FBbEI7QUFDQSxnQ0FBSWMsS0FBSixDQUFVO0FBQ1JDLDBCQUFNLE9BREU7QUFFUkMseUJBQUssV0FGRztBQUdSQztBQUhRLG1CQUFWOztBQVZXO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBZ0JkO0FBcEJPLEs7Ozs7OzsrRkF1QkdDLE87Ozs7OztBQUNYO0FBQ1FULHFCLEdBQVVTLE8sQ0FBVlQsSzs7O0FBRU4sK0JBQUtVLFdBQUw7O3VCQUNtQixjQUFJQyxXQUFKLENBQWdCWCxLQUFoQixDOzs7QUFBYmhCLG9COztBQUNONEIsd0JBQVFDLEdBQVIsQ0FBWSxNQUFaLEVBQW9CN0IsSUFBcEI7QUFDQSxxQkFBS00sTUFBTCxHQUFjO0FBQ1pVLDhCQURZO0FBRVpjLDBCQUFROUIsS0FBSytCLElBRkQ7QUFHWkMsNEJBQVVoQyxLQUFLaUM7QUFISCxpQkFBZDtBQUtBLCtCQUFLQyxXQUFMO0FBQ0EscUJBQUtDLE1BQUw7Ozs7Ozs7O0FBRUEsOEJBQUlkLEtBQUosQ0FBVTtBQUNSQyx3QkFBTSxPQURFO0FBRVJDLHVCQUFLLGFBRkc7QUFHUkM7QUFIUSxpQkFBVjtBQUtBLCtCQUFLSixZQUFMOzs7Ozs7Ozs7Ozs7Ozs7Ozs7RUF0RDZCLGVBQUtFLEk7a0JBQW5CdkIsSyIsImZpbGUiOiJhcHBseS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5pbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xyXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAnd2VweS1yZWR1eCdcclxuaW1wb3J0IE5JTSBmcm9tICcuLi91dGlscy9uaW0nXHJcbmltcG9ydCBsb2cgZnJvbSAnLi4vdXRpbHMvbG9nJ1xyXG5cclxuQGNvbm5lY3Qoe1xyXG4gIHVzZXIoc3RhdGUpIHtcclxuICAgIHJldHVybiBzdGF0ZS5jb21tb24udXNlclxyXG4gIH1cclxufSlcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXBwbHkgZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xyXG4gIGNvbmZpZyA9IHtcclxuICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICflpb3lj4vnlLPor7cnXHJcbiAgfVxyXG5cclxuICBkYXRhID0ge1xyXG4gICAgZnJpZW5kOiBudWxsLFxyXG4gICAgcmVxdWVzdGluZzogZmFsc2UsXHJcbiAgICBtc2c6ICcnXHJcbiAgfVxyXG5cclxuICBtZXRob2RzID0ge1xyXG4gICAgc2V0TXNnKGUpIHtcclxuICAgICAgdGhpcy5tc2cgPSBlLmRldGFpbC52YWx1ZVxyXG4gICAgfSxcclxuICAgIGFzeW5jIHN1Ym1pdCgpIHtcclxuICAgICAgdGhpcy5yZXF1ZXN0aW5nID0gdHJ1ZVxyXG4gICAgICB0cnkge1xyXG4gICAgICAgIC8vIOWPkemAgeWlveWPi+eUs+ivt1xyXG4gICAgICAgIGF3YWl0IE5JTS5zZW5kQXBwbHkodGhpcy51c2VyLmFjY2lkLCB0aGlzLmZyaWVuZC5hY2NpZCwgdGhpcy5tc2cpXHJcbiAgICAgICAgd2VweS5zaG93VG9hc3Qoe1xyXG4gICAgICAgICAgdGl0bGU6ICfor7fmsYLlj5HpgIHmiJDlip8nXHJcbiAgICAgICAgfSkudGhlbigoKSA9PiB3ZXB5Lm5hdmlnYXRlQmFjaygpKVxyXG4gICAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgdGhpcy5yZXF1ZXN0aW5nID0gZmFsc2VcclxuICAgICAgICBsb2cuZXJyb3Ioe1xyXG4gICAgICAgICAgcGFnZTogJ2FwcGx5JyxcclxuICAgICAgICAgIG9wcjogJ3NlbmRBcHBseScsXHJcbiAgICAgICAgICBpbmZvOiBlXHJcbiAgICAgICAgfSlcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgYXN5bmMgb25Mb2FkKG9wdGlvbnMpIHtcclxuICAgIC8vIOWKoOi9veeUqOaIt+S/oeaBr1xyXG4gICAgY29uc3QgeyBhY2NpZCB9ID0gb3B0aW9uc1xyXG4gICAgdHJ5IHtcclxuICAgICAgd2VweS5zaG93TG9hZGluZygpXHJcbiAgICAgIGNvbnN0IHVzZXIgPSBhd2FpdCBOSU0uZ2V0VXNlckluZm8oYWNjaWQpXHJcbiAgICAgIGNvbnNvbGUubG9nKCd1c2VyJywgdXNlcilcclxuICAgICAgdGhpcy5mcmllbmQgPSB7XHJcbiAgICAgICAgYWNjaWQsXHJcbiAgICAgICAgYXZhdGFyOiB1c2VyLmljb24sXHJcbiAgICAgICAgbmlja25hbWU6IHVzZXIubmFtZVxyXG4gICAgICB9XHJcbiAgICAgIHdlcHkuaGlkZUxvYWRpbmcoKVxyXG4gICAgICB0aGlzLiRhcHBseSgpXHJcbiAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgIGxvZy5lcnJvcih7XHJcbiAgICAgICAgcGFnZTogJ2FwcGx5JyxcclxuICAgICAgICBvcHI6ICdnZXRVc2VySW5mbycsXHJcbiAgICAgICAgaW5mbzogZVxyXG4gICAgICB9KVxyXG4gICAgICB3ZXB5Lm5hdmlnYXRlQmFjaygpXHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ==