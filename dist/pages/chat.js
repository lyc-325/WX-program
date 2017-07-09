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

var _log = require('./../utils/log.js');

var log = _interopRequireWildcard(_log);

var _ramda = require('./../libs/ramda.js');

var _ramda2 = _interopRequireDefault(_ramda);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Chat = (_dec = (0, _wepyRedux.connect)({
  user: function user(state) {
    return state.common.user;
  },
  nim: function nim(state) {
    return state.common.nim;
  },
  msgs: function msgs(state) {
    return state.chat.msgs[this.to] || [];
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
      text: '',
      friend: null
    }, _this.methods = {
      chooseImage: function chooseImage() {
        var _this2 = this;

        return (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee() {
          var res, file;
          return _regenerator2.default.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  _context.next = 2;
                  return _wepy2.default.chooseImage({
                    count: 1
                  });

                case 2:
                  res = _context.sent;
                  _context.prev = 3;
                  _context.next = 6;
                  return _this2.nim.previewFile({
                    type: 'image',
                    wxFilePath: res.tempFilePaths[0]
                  });

                case 6:
                  file = _context.sent;
                  _context.next = 9;
                  return _this2.nim.sendFile({
                    scene: 'p2p',
                    type: 'image',
                    to: _this2.friend.accid,
                    file: file
                  });

                case 9:
                  _context.next = 14;
                  break;

                case 11:
                  _context.prev = 11;
                  _context.t0 = _context['catch'](3);

                  log.error({
                    page: 'chatrooms',
                    opr: 'sendFile',
                    info: _context.t0
                  });

                case 14:
                case 'end':
                  return _context.stop();
              }
            }
          }, _callee, _this2, [[3, 11]]);
        }))();
      },
      send: function send() {
        var _this3 = this;

        return (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee2() {
          var text;
          return _regenerator2.default.wrap(function _callee2$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  text = _ramda2.default.trim(_this3.text);

                  _this3.text = '';

                  if (!text.length) {
                    _context2.next = 14;
                    break;
                  }

                  _context2.prev = 3;
                  _context2.next = 6;
                  return _this3.nim.sendText({
                    text: text,
                    scene: 'p2p',
                    to: _this3.friend.accid
                  });

                case 6:
                  _this3.text = '';
                  _this3.$apply();
                  _context2.next = 14;
                  break;

                case 10:
                  _context2.prev = 10;
                  _context2.t0 = _context2['catch'](3);

                  log.error({
                    page: 'chat',
                    opr: 'sendText',
                    info: _context2.t0
                  });
                  _this3.$apply();

                case 14:
                case 'end':
                  return _context2.stop();
              }
            }
          }, _callee2, _this3, [[3, 10]]);
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
        var faccid, friend;
        return _regenerator2.default.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                faccid = options.faccid;

                this.to = faccid;
                // 获得好友对象
                _context3.next = 4;
                return _nim2.default.getUserInfo(faccid);

              case 4:
                friend = _context3.sent;

                this.friend = {
                  accid: friend.accid,
                  avatar: friend.icon,
                  nickname: friend.name
                };
                this.$apply();

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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoYXQuanMiXSwibmFtZXMiOlsibG9nIiwiQ2hhdCIsInVzZXIiLCJzdGF0ZSIsImNvbW1vbiIsIm5pbSIsIm1zZ3MiLCJjaGF0IiwidG8iLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiZGF0YSIsInRleHQiLCJmcmllbmQiLCJtZXRob2RzIiwiY2hvb3NlSW1hZ2UiLCJjb3VudCIsInJlcyIsInByZXZpZXdGaWxlIiwidHlwZSIsInd4RmlsZVBhdGgiLCJ0ZW1wRmlsZVBhdGhzIiwiZmlsZSIsInNlbmRGaWxlIiwic2NlbmUiLCJhY2NpZCIsImVycm9yIiwicGFnZSIsIm9wciIsImluZm8iLCJzZW5kIiwidHJpbSIsImxlbmd0aCIsInNlbmRUZXh0IiwiJGFwcGx5Iiwic2V0VGV4dCIsImUiLCJkZXRhaWwiLCJ2YWx1ZSIsIm9wdGlvbnMiLCJmYWNjaWQiLCJnZXRVc2VySW5mbyIsImF2YXRhciIsImljb24iLCJuaWNrbmFtZSIsIm5hbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTs7OztBQUNBOztBQUdBOzs7O0FBQ0E7O0lBQVlBLEc7O0FBQ1o7Ozs7Ozs7O0lBU3FCQyxJLFdBUHBCLHdCQUFRO0FBQ1BDLFFBQU07QUFBQSxXQUFTQyxNQUFNQyxNQUFOLENBQWFGLElBQXRCO0FBQUEsR0FEQztBQUVQRyxPQUFLO0FBQUEsV0FBU0YsTUFBTUMsTUFBTixDQUFhQyxHQUF0QjtBQUFBLEdBRkU7QUFHUEMsUUFBTSxjQUFTSCxLQUFULEVBQWdCO0FBQ3BCLFdBQU9BLE1BQU1JLElBQU4sQ0FBV0QsSUFBWCxDQUFnQixLQUFLRSxFQUFyQixLQUE0QixFQUFuQztBQUNEO0FBTE0sQ0FBUixDOzs7Ozs7Ozs7Ozs7Ozt3TUFRQ0MsTSxHQUFTO0FBQ1BDLDhCQUF3QjtBQURqQixLLFFBSVRDLEksR0FBTztBQUNMQyxZQUFNLEVBREQ7QUFFTEMsY0FBUTtBQUZILEssUUFLUEMsTyxHQUFVO0FBQ0ZDLGlCQURFLHlCQUNZO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFDQSxlQUFLQSxXQUFMLENBQWlCO0FBQ2pDQywyQkFBTztBQUQwQixtQkFBakIsQ0FEQTs7QUFBQTtBQUNaQyxxQkFEWTtBQUFBO0FBQUE7QUFBQSx5QkFNRyxPQUFLWixHQUFMLENBQVNhLFdBQVQsQ0FBcUI7QUFDdENDLDBCQUFNLE9BRGdDO0FBRXRDQyxnQ0FBWUgsSUFBSUksYUFBSixDQUFrQixDQUFsQjtBQUYwQixtQkFBckIsQ0FOSDs7QUFBQTtBQU1WQyxzQkFOVTtBQUFBO0FBQUEseUJBVVYsT0FBS2pCLEdBQUwsQ0FBU2tCLFFBQVQsQ0FBa0I7QUFDdEJDLDJCQUFPLEtBRGU7QUFFdEJMLDBCQUFNLE9BRmdCO0FBR3RCWCx3QkFBSSxPQUFLSyxNQUFMLENBQVlZLEtBSE07QUFJdEJILDBCQUFNQTtBQUpnQixtQkFBbEIsQ0FWVTs7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBOztBQWlCaEJ0QixzQkFBSTBCLEtBQUosQ0FBVTtBQUNSQywwQkFBTSxXQURFO0FBRVJDLHlCQUFLLFVBRkc7QUFHUkM7QUFIUSxtQkFBVjs7QUFqQmdCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBdUJuQixPQXhCTztBQXlCRkMsVUF6QkUsa0JBeUJLO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0xsQixzQkFESyxHQUNFLGdCQUFFbUIsSUFBRixDQUFPLE9BQUtuQixJQUFaLENBREY7O0FBRVgseUJBQUtBLElBQUwsR0FBWSxFQUFaOztBQUZXLHVCQUdQQSxLQUFLb0IsTUFIRTtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUEseUJBS0QsT0FBSzNCLEdBQUwsQ0FBUzRCLFFBQVQsQ0FBa0I7QUFDdEJyQiw4QkFEc0I7QUFFdEJZLDJCQUFPLEtBRmU7QUFHdEJoQix3QkFBSSxPQUFLSyxNQUFMLENBQVlZO0FBSE0sbUJBQWxCLENBTEM7O0FBQUE7QUFVUCx5QkFBS2IsSUFBTCxHQUFZLEVBQVo7QUFDQSx5QkFBS3NCLE1BQUw7QUFYTztBQUFBOztBQUFBO0FBQUE7QUFBQTs7QUFhUGxDLHNCQUFJMEIsS0FBSixDQUFVO0FBQ1JDLDBCQUFNLE1BREU7QUFFUkMseUJBQUssVUFGRztBQUdSQztBQUhRLG1CQUFWO0FBS0EseUJBQUtLLE1BQUw7O0FBbEJPO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBcUJaLE9BOUNPO0FBK0NSQyxhQS9DUSxtQkErQ0FDLENBL0NBLEVBK0NHO0FBQ1QsYUFBS3hCLElBQUwsR0FBWXdCLEVBQUVDLE1BQUYsQ0FBU0MsS0FBckI7QUFDRDtBQWpETyxLOzs7Ozs7K0ZBb0RHQyxPOzs7Ozs7QUFFVEMsc0IsR0FDRUQsTyxDQURGQyxNOztBQUVGLHFCQUFLaEMsRUFBTCxHQUFVZ0MsTUFBVjtBQUNBOzt1QkFDcUIsY0FBSUMsV0FBSixDQUFnQkQsTUFBaEIsQzs7O0FBQWYzQixzQjs7QUFDTixxQkFBS0EsTUFBTCxHQUFjO0FBQ1pZLHlCQUFPWixPQUFPWSxLQURGO0FBRVppQiwwQkFBUTdCLE9BQU84QixJQUZIO0FBR1pDLDRCQUFVL0IsT0FBT2dDO0FBSEwsaUJBQWQ7QUFLQSxxQkFBS1gsTUFBTDs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBMUU4QixlQUFLUCxJO2tCQUFsQjFCLEkiLCJmaWxlIjoiY2hhdC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcbmltcG9ydCB7XG4gIGNvbm5lY3Rcbn0gZnJvbSAnd2VweS1yZWR1eCdcbmltcG9ydCBOSU0gZnJvbSAnLi4vdXRpbHMvbmltJ1xuaW1wb3J0ICogYXMgbG9nIGZyb20gJy4uL3V0aWxzL2xvZydcbmltcG9ydCBSIGZyb20gJy4uL2xpYnMvcmFtZGEnXG5cbkBjb25uZWN0KHtcbiAgdXNlcjogc3RhdGUgPT4gc3RhdGUuY29tbW9uLnVzZXIsXG4gIG5pbTogc3RhdGUgPT4gc3RhdGUuY29tbW9uLm5pbSxcbiAgbXNnczogZnVuY3Rpb24oc3RhdGUpIHtcbiAgICByZXR1cm4gc3RhdGUuY2hhdC5tc2dzW3RoaXMudG9dIHx8IFtdXG4gIH1cbn0pXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDaGF0IGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgY29uZmlnID0ge1xuICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICfogYrlpKknXG4gIH1cblxuICBkYXRhID0ge1xuICAgIHRleHQ6ICcnLFxuICAgIGZyaWVuZDogbnVsbFxuICB9XG5cbiAgbWV0aG9kcyA9IHtcbiAgICBhc3luYyBjaG9vc2VJbWFnZSgpIHtcbiAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IHdlcHkuY2hvb3NlSW1hZ2Uoe1xuICAgICAgICBjb3VudDogMVxuICAgICAgfSlcblxuICAgICAgdHJ5IHtcbiAgICAgICAgY29uc3QgZmlsZSA9IGF3YWl0IHRoaXMubmltLnByZXZpZXdGaWxlKHtcbiAgICAgICAgICB0eXBlOiAnaW1hZ2UnLFxuICAgICAgICAgIHd4RmlsZVBhdGg6IHJlcy50ZW1wRmlsZVBhdGhzWzBdXG4gICAgICAgIH0pXG4gICAgICAgIGF3YWl0IHRoaXMubmltLnNlbmRGaWxlKHtcbiAgICAgICAgICBzY2VuZTogJ3AycCcsXG4gICAgICAgICAgdHlwZTogJ2ltYWdlJyxcbiAgICAgICAgICB0bzogdGhpcy5mcmllbmQuYWNjaWQsXG4gICAgICAgICAgZmlsZTogZmlsZVxuICAgICAgICB9KVxuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgbG9nLmVycm9yKHtcbiAgICAgICAgICBwYWdlOiAnY2hhdHJvb21zJyxcbiAgICAgICAgICBvcHI6ICdzZW5kRmlsZScsXG4gICAgICAgICAgaW5mbzogZXJyb3JcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9LFxuICAgIGFzeW5jIHNlbmQoKSB7XG4gICAgICBjb25zdCB0ZXh0ID0gUi50cmltKHRoaXMudGV4dClcbiAgICAgIHRoaXMudGV4dCA9ICcnXG4gICAgICBpZiAodGV4dC5sZW5ndGgpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBhd2FpdCB0aGlzLm5pbS5zZW5kVGV4dCh7XG4gICAgICAgICAgICB0ZXh0LFxuICAgICAgICAgICAgc2NlbmU6ICdwMnAnLFxuICAgICAgICAgICAgdG86IHRoaXMuZnJpZW5kLmFjY2lkXG4gICAgICAgICAgfSlcbiAgICAgICAgICB0aGlzLnRleHQgPSAnJ1xuICAgICAgICAgIHRoaXMuJGFwcGx5KClcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgIGxvZy5lcnJvcih7XG4gICAgICAgICAgICBwYWdlOiAnY2hhdCcsXG4gICAgICAgICAgICBvcHI6ICdzZW5kVGV4dCcsXG4gICAgICAgICAgICBpbmZvOiBlXG4gICAgICAgICAgfSlcbiAgICAgICAgICB0aGlzLiRhcHBseSgpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuICAgIHNldFRleHQoZSkge1xuICAgICAgdGhpcy50ZXh0ID0gZS5kZXRhaWwudmFsdWVcbiAgICB9XG4gIH1cblxuICBhc3luYyBvbkxvYWQob3B0aW9ucykge1xuICAgIGNvbnN0IHtcbiAgICAgIGZhY2NpZFxuICAgIH0gPSBvcHRpb25zXG4gICAgdGhpcy50byA9IGZhY2NpZFxuICAgIC8vIOiOt+W+l+WlveWPi+WvueixoVxuICAgIGNvbnN0IGZyaWVuZCA9IGF3YWl0IE5JTS5nZXRVc2VySW5mbyhmYWNjaWQpXG4gICAgdGhpcy5mcmllbmQgPSB7XG4gICAgICBhY2NpZDogZnJpZW5kLmFjY2lkLFxuICAgICAgYXZhdGFyOiBmcmllbmQuaWNvbixcbiAgICAgIG5pY2tuYW1lOiBmcmllbmQubmFtZVxuICAgIH1cbiAgICB0aGlzLiRhcHBseSgpXG4gIH1cbn1cbiJdfQ==