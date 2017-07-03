'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _toConsumableArray2 = require('./../npm/babel-runtime/helpers/toConsumableArray.js');

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

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

var _extends2 = require('./../npm/babel-runtime/helpers/extends.js');

var _extends3 = _interopRequireDefault(_extends2);

var _dec, _class;

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _wepyRedux = require('./../npm/wepy-redux/lib/index.js');

var _nim = require('./../utils/nim.js');

var _nim2 = _interopRequireDefault(_nim);

var _log = require('./../utils/log.js');

var _log2 = _interopRequireDefault(_log);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var genMsg = function genMsg(msg) {
  return (0, _extends3.default)({}, msg);
};

var Chat = (_dec = (0, _wepyRedux.connect)({
  user: function user(state) {
    return state.common.user;
  },
  nim: function nim(state) {
    return state.common.nim;
  }
}), _dec(_class = function (_wepy$page) {
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
    }, _this.data = {
      msgs: [],
      text: '',
      nimInstance: null,
      friend: null
    }, _this.methods = {
      chooseImage: function chooseImage() {
        var _this2 = this;

        return (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee() {
          var result;
          return _regenerator2.default.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  result = _wepy2.default.chooseImage();

                  console.log('images', result);

                case 2:
                case 'end':
                  return _context.stop();
              }
            }
          }, _callee, _this2);
        }))();
      },
      send: function send() {
        var _this3 = this;

        return (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee2() {
          var text, msg;
          return _regenerator2.default.wrap(function _callee2$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  text = R.trim(_this3.text);

                  if (!text.length) {
                    _context2.next = 15;
                    break;
                  }

                  _context2.prev = 2;
                  _context2.next = 5;
                  return _this3.nimInstance.sendText({
                    text: _this3.text,
                    scene: 'p2p',
                    to: _this3.friend.accid
                  });

                case 5:
                  msg = _context2.sent;

                  _this3.msgs = [].concat((0, _toConsumableArray3.default)(_this3.msgs), [genMsg(msg)]);
                  _this3.$apply();
                  _context2.next = 15;
                  break;

                case 10:
                  _context2.prev = 10;
                  _context2.t0 = _context2['catch'](2);

                  _log2.default.error({
                    page: 'chat',
                    opr: 'sendText',
                    info: _context2.t0
                  });
                  _this3.msgs = [].concat((0, _toConsumableArray3.default)(_this3.msgs), [genMsg({
                    content: text
                  })]);
                  _this3.$apply();

                case 15:
                case 'end':
                  return _context2.stop();
              }
            }
          }, _callee2, _this3, [[2, 10]]);
        }))();
      },
      setText: function setText(e) {
        this.text = e.detail.value;
      }
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(Chat, [{
    key: 'onLoad',
    value: function () {
      var _ref2 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee3(options) {
        var _this4 = this;

        var faccid, friend;
        return _regenerator2.default.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                faccid = options.faccid;
                // 获得好友对象

                _context3.next = 3;
                return _nim2.default.getUserInfo(faccid);

              case 3:
                friend = _context3.sent;

                this.friend = {
                  accid: friend.accid,
                  avatar: friend.icon,
                  nickname: friend.name
                };
                this.$apply();
                // 获得消息实例
                this.nimInstance = _nim2.default.getInstance({
                  account: this.user.accid,
                  token: this.nim.token,
                  onMsg: function onMsg(msg) {
                    console.log('收到消息', msg.scene, msg.type, msg);
                    if (msg.to === faccid || msg.from === faccid) {
                      _this4.msgs = [].concat((0, _toConsumableArray3.default)(_this4.msgs), [msg]);
                      _this4.$apply();
                    }
                  }
                });

              case 7:
              case 'end':
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function onLoad(_x) {
        return _ref2.apply(this, arguments);
      }

      return onLoad;
    }()
  }]);
  return Chat;
}(_wepy2.default.page)) || _class);

Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Chat , 'pages/chat'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoYXQuanMiXSwibmFtZXMiOlsiZ2VuTXNnIiwibXNnIiwiQ2hhdCIsInVzZXIiLCJzdGF0ZSIsImNvbW1vbiIsIm5pbSIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCJkYXRhIiwibXNncyIsInRleHQiLCJuaW1JbnN0YW5jZSIsImZyaWVuZCIsIm1ldGhvZHMiLCJjaG9vc2VJbWFnZSIsInJlc3VsdCIsImNvbnNvbGUiLCJsb2ciLCJzZW5kIiwiUiIsInRyaW0iLCJsZW5ndGgiLCJzZW5kVGV4dCIsInNjZW5lIiwidG8iLCJhY2NpZCIsIiRhcHBseSIsImVycm9yIiwicGFnZSIsIm9wciIsImluZm8iLCJjb250ZW50Iiwic2V0VGV4dCIsImUiLCJkZXRhaWwiLCJ2YWx1ZSIsIm9wdGlvbnMiLCJmYWNjaWQiLCJnZXRVc2VySW5mbyIsImF2YXRhciIsImljb24iLCJuaWNrbmFtZSIsIm5hbWUiLCJnZXRJbnN0YW5jZSIsImFjY291bnQiLCJ0b2tlbiIsIm9uTXNnIiwidHlwZSIsImZyb20iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBOzs7O0FBQ0E7O0FBQ0E7Ozs7QUFDQTs7Ozs7O0FBRUEsSUFBTUEsU0FBUyxTQUFUQSxNQUFTO0FBQUEsb0NBQ1ZDLEdBRFU7QUFBQSxDQUFmOztJQVFxQkMsSSxXQUpwQix3QkFBUTtBQUNQQyxRQUFNO0FBQUEsV0FBU0MsTUFBTUMsTUFBTixDQUFhRixJQUF0QjtBQUFBLEdBREM7QUFFUEcsT0FBSztBQUFBLFdBQVNGLE1BQU1DLE1BQU4sQ0FBYUMsR0FBdEI7QUFBQTtBQUZFLENBQVIsQzs7Ozs7Ozs7Ozs7Ozs7d01BS0NDLE0sR0FBUztBQUNQQyw4QkFBd0I7QUFEakIsSyxRQUlUQyxJLEdBQU87QUFDTEMsWUFBTSxFQUREO0FBRUxDLFlBQU0sRUFGRDtBQUdMQyxtQkFBYSxJQUhSO0FBSUxDLGNBQVE7QUFKSCxLLFFBT1BDLE8sR0FBVTtBQUNGQyxpQkFERSx5QkFDWTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNaQyx3QkFEWSxHQUNILGVBQUtELFdBQUwsRUFERzs7QUFFbEJFLDBCQUFRQyxHQUFSLENBQVksUUFBWixFQUFzQkYsTUFBdEI7O0FBRmtCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBR25CLE9BSk87QUFLRkcsVUFMRSxrQkFLSztBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNMUixzQkFESyxHQUNFUyxFQUFFQyxJQUFGLENBQU8sT0FBS1YsSUFBWixDQURGOztBQUFBLHVCQUVQQSxLQUFLVyxNQUZFO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQSx5QkFJVyxPQUFLVixXQUFMLENBQWlCVyxRQUFqQixDQUEwQjtBQUMxQ1osMEJBQU0sT0FBS0EsSUFEK0I7QUFFMUNhLDJCQUFPLEtBRm1DO0FBRzFDQyx3QkFBSSxPQUFLWixNQUFMLENBQVlhO0FBSDBCLG1CQUExQixDQUpYOztBQUFBO0FBSUR6QixxQkFKQzs7QUFTUCx5QkFBS1MsSUFBTCw4Q0FBZ0IsT0FBS0EsSUFBckIsSUFBMkJWLE9BQU9DLEdBQVAsQ0FBM0I7QUFDQSx5QkFBSzBCLE1BQUw7QUFWTztBQUFBOztBQUFBO0FBQUE7QUFBQTs7QUFZUCxnQ0FBSUMsS0FBSixDQUFVO0FBQ1JDLDBCQUFNLE1BREU7QUFFUkMseUJBQUssVUFGRztBQUdSQztBQUhRLG1CQUFWO0FBS0EseUJBQUtyQixJQUFMLDhDQUFnQixPQUFLQSxJQUFyQixJQUEyQlYsT0FBTztBQUNoQ2dDLDZCQUFTckI7QUFEdUIsbUJBQVAsQ0FBM0I7QUFHQSx5QkFBS2dCLE1BQUw7O0FBcEJPO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBdUJaLE9BNUJPO0FBNkJSTSxhQTdCUSxtQkE2QkFDLENBN0JBLEVBNkJHO0FBQ1QsYUFBS3ZCLElBQUwsR0FBWXVCLEVBQUVDLE1BQUYsQ0FBU0MsS0FBckI7QUFDRDtBQS9CTyxLOzs7Ozs7K0ZBa0NHQyxPOzs7Ozs7OztBQUNIQyxzQixHQUFXRCxPLENBQVhDLE07QUFDUjs7O3VCQUNxQixjQUFJQyxXQUFKLENBQWdCRCxNQUFoQixDOzs7QUFBZnpCLHNCOztBQUNOLHFCQUFLQSxNQUFMLEdBQWM7QUFDWmEseUJBQU9iLE9BQU9hLEtBREY7QUFFWmMsMEJBQVEzQixPQUFPNEIsSUFGSDtBQUdaQyw0QkFBVTdCLE9BQU84QjtBQUhMLGlCQUFkO0FBS0EscUJBQUtoQixNQUFMO0FBQ0E7QUFDQSxxQkFBS2YsV0FBTCxHQUFtQixjQUFJZ0MsV0FBSixDQUFnQjtBQUNqQ0MsMkJBQVMsS0FBSzFDLElBQUwsQ0FBVXVCLEtBRGM7QUFFakNvQix5QkFBTyxLQUFLeEMsR0FBTCxDQUFTd0MsS0FGaUI7QUFHakNDLHlCQUFPLG9CQUFPO0FBQ1o5Qiw0QkFBUUMsR0FBUixDQUFZLE1BQVosRUFBb0JqQixJQUFJdUIsS0FBeEIsRUFBK0J2QixJQUFJK0MsSUFBbkMsRUFBeUMvQyxHQUF6QztBQUNBLHdCQUFHQSxJQUFJd0IsRUFBSixLQUFXYSxNQUFYLElBQXFCckMsSUFBSWdELElBQUosS0FBYVgsTUFBckMsRUFBNkM7QUFDM0MsNkJBQUs1QixJQUFMLDhDQUFnQixPQUFLQSxJQUFyQixJQUEyQlQsR0FBM0I7QUFDQSw2QkFBSzBCLE1BQUw7QUFDRDtBQUNGO0FBVGdDLGlCQUFoQixDQUFuQjs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBekQ4QixlQUFLRSxJO2tCQUFsQjNCLEkiLCJmaWxlIjoiY2hhdC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICd3ZXB5LXJlZHV4J1xuaW1wb3J0IE5JTSBmcm9tICcuLi91dGlscy9uaW0nXG5pbXBvcnQgbG9nIGZyb20gJy4uL3V0aWxzL2xvZydcblxuY29uc3QgZ2VuTXNnID0gbXNnID0+ICh7XG4gIC4uLm1zZ1xufSlcblxuQGNvbm5lY3Qoe1xuICB1c2VyOiBzdGF0ZSA9PiBzdGF0ZS5jb21tb24udXNlcixcbiAgbmltOiBzdGF0ZSA9PiBzdGF0ZS5jb21tb24ubmltXG59KVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2hhdCBleHRlbmRzIHdlcHkucGFnZSB7XG4gIGNvbmZpZyA9IHtcbiAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn6IGK5aSpJ1xuICB9XG5cbiAgZGF0YSA9IHtcbiAgICBtc2dzOiBbXSxcbiAgICB0ZXh0OiAnJyxcbiAgICBuaW1JbnN0YW5jZTogbnVsbCxcbiAgICBmcmllbmQ6IG51bGxcbiAgfVxuXG4gIG1ldGhvZHMgPSB7XG4gICAgYXN5bmMgY2hvb3NlSW1hZ2UoKSB7XG4gICAgICBjb25zdCByZXN1bHQgPSB3ZXB5LmNob29zZUltYWdlKClcbiAgICAgIGNvbnNvbGUubG9nKCdpbWFnZXMnLCByZXN1bHQpXG4gICAgfSxcbiAgICBhc3luYyBzZW5kKCkge1xuICAgICAgY29uc3QgdGV4dCA9IFIudHJpbSh0aGlzLnRleHQpXG4gICAgICBpZiAodGV4dC5sZW5ndGgpIHtcbiAgICAgICAgdHJ5e1xuICAgICAgICAgIGNvbnN0IG1zZyA9IGF3YWl0IHRoaXMubmltSW5zdGFuY2Uuc2VuZFRleHQoe1xuICAgICAgICAgICAgdGV4dDogdGhpcy50ZXh0LFxuICAgICAgICAgICAgc2NlbmU6ICdwMnAnLFxuICAgICAgICAgICAgdG86IHRoaXMuZnJpZW5kLmFjY2lkXG4gICAgICAgICAgfSlcbiAgICAgICAgICB0aGlzLm1zZ3MgPSBbLi4udGhpcy5tc2dzLCBnZW5Nc2cobXNnKV1cbiAgICAgICAgICB0aGlzLiRhcHBseSgpXG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICBsb2cuZXJyb3Ioe1xuICAgICAgICAgICAgcGFnZTogJ2NoYXQnLFxuICAgICAgICAgICAgb3ByOiAnc2VuZFRleHQnLFxuICAgICAgICAgICAgaW5mbzogZVxuICAgICAgICAgIH0pXG4gICAgICAgICAgdGhpcy5tc2dzID0gWy4uLnRoaXMubXNncywgZ2VuTXNnKHtcbiAgICAgICAgICAgIGNvbnRlbnQ6IHRleHRcbiAgICAgICAgICB9KV1cbiAgICAgICAgICB0aGlzLiRhcHBseSgpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuICAgIHNldFRleHQoZSkge1xuICAgICAgdGhpcy50ZXh0ID0gZS5kZXRhaWwudmFsdWVcbiAgICB9XG4gIH1cblxuICBhc3luYyBvbkxvYWQob3B0aW9ucykge1xuICAgIGNvbnN0IHsgZmFjY2lkIH0gPSBvcHRpb25zXG4gICAgLy8g6I635b6X5aW95Y+L5a+56LGhXG4gICAgY29uc3QgZnJpZW5kID0gYXdhaXQgTklNLmdldFVzZXJJbmZvKGZhY2NpZClcbiAgICB0aGlzLmZyaWVuZCA9IHtcbiAgICAgIGFjY2lkOiBmcmllbmQuYWNjaWQsXG4gICAgICBhdmF0YXI6IGZyaWVuZC5pY29uLFxuICAgICAgbmlja25hbWU6IGZyaWVuZC5uYW1lXG4gICAgfVxuICAgIHRoaXMuJGFwcGx5KClcbiAgICAvLyDojrflvpfmtojmga/lrp7kvotcbiAgICB0aGlzLm5pbUluc3RhbmNlID0gTklNLmdldEluc3RhbmNlKHtcbiAgICAgIGFjY291bnQ6IHRoaXMudXNlci5hY2NpZCxcbiAgICAgIHRva2VuOiB0aGlzLm5pbS50b2tlbixcbiAgICAgIG9uTXNnOiBtc2cgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZygn5pS25Yiw5raI5oGvJywgbXNnLnNjZW5lLCBtc2cudHlwZSwgbXNnKVxuICAgICAgICBpZihtc2cudG8gPT09IGZhY2NpZCB8fCBtc2cuZnJvbSA9PT0gZmFjY2lkKSB7XG4gICAgICAgICAgdGhpcy5tc2dzID0gWy4uLnRoaXMubXNncywgbXNnXVxuICAgICAgICAgIHRoaXMuJGFwcGx5KClcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pXG4gIH1cbn1cbiJdfQ==