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

var _chat = require('./../actions/chat.js');

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
}, {
  refreshMsgsByTo: _chat.refreshMsgsByTo
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
      friend: null,
      sended: false
    }, _this.methods = {
      chooseImage: function chooseImage() {
        var _this2 = this;

        return (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee() {
          var pushMsg, res, file, msg;
          return _regenerator2.default.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  pushMsg = _this2.methods.pushMsg.bind(_this2);
                  _context.next = 3;
                  return _wepy2.default.chooseImage({
                    count: 1
                  });

                case 3:
                  res = _context.sent;
                  _context.prev = 4;
                  _context.next = 7;
                  return _this2.nim.previewFile({
                    type: 'image',
                    wxFilePath: res.tempFilePaths[0]
                  });

                case 7:
                  file = _context.sent;
                  _context.next = 10;
                  return _this2.nim.sendFile({
                    scene: 'p2p',
                    type: 'image',
                    to: _this2.friend.accid,
                    file: file
                  });

                case 10:
                  msg = _context.sent;

                  pushMsg(msg);
                  _context.next = 17;
                  break;

                case 14:
                  _context.prev = 14;
                  _context.t0 = _context['catch'](4);

                  log.error({
                    page: 'chatrooms',
                    opr: 'sendFile',
                    info: _context.t0
                  });

                case 17:
                case 'end':
                  return _context.stop();
              }
            }
          }, _callee, _this2, [[4, 14]]);
        }))();
      },
      send: function send() {
        var _this3 = this;

        return (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee2() {
          var pushMsg, text, msg;
          return _regenerator2.default.wrap(function _callee2$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  // ? why bind
                  pushMsg = _this3.methods.pushMsg.bind(_this3);
                  text = _ramda2.default.trim(_this3.text);

                  _this3.text = '';

                  if (!text.length) {
                    _context2.next = 15;
                    break;
                  }

                  _context2.prev = 4;
                  _context2.next = 7;
                  return _this3.nim.sendText({
                    text: text,
                    scene: 'p2p',
                    to: _this3.friend.accid
                  });

                case 7:
                  msg = _context2.sent;

                  _this3.text = '';
                  pushMsg(msg);
                  _context2.next = 15;
                  break;

                case 12:
                  _context2.prev = 12;
                  _context2.t0 = _context2['catch'](4);

                  log.error({
                    page: 'chat',
                    opr: 'sendText',
                    info: _context2.t0
                  });

                case 15:
                case 'end':
                  return _context2.stop();
              }
            }
          }, _callee2, _this3, [[4, 12]]);
        }))();
      },
      setText: function setText(e) {
        this.text = e.detail.value;
      },
      pushMsg: function pushMsg(msg) {
        var refreshMsgsByTo = this.methods.refreshMsgsByTo;
        var mergeMsgs = this.nim.mergeMsgs;

        var to = msg.target;
        var mergedByTo = mergeMsgs(this.msgs || [], msg);
        refreshMsgsByTo(to, mergedByTo);
        this.sended = true;
        this.$apply();
      },
      handleFocus: function handleFocus() {
        this.sended = false;
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

              case 6:
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoYXQuanMiXSwibmFtZXMiOlsibG9nIiwiQ2hhdCIsInVzZXIiLCJzdGF0ZSIsImNvbW1vbiIsIm5pbSIsIm1zZ3MiLCJjaGF0IiwidG8iLCJyZWZyZXNoTXNnc0J5VG8iLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiZGF0YSIsInRleHQiLCJmcmllbmQiLCJzZW5kZWQiLCJtZXRob2RzIiwiY2hvb3NlSW1hZ2UiLCJwdXNoTXNnIiwiYmluZCIsImNvdW50IiwicmVzIiwicHJldmlld0ZpbGUiLCJ0eXBlIiwid3hGaWxlUGF0aCIsInRlbXBGaWxlUGF0aHMiLCJmaWxlIiwic2VuZEZpbGUiLCJzY2VuZSIsImFjY2lkIiwibXNnIiwiZXJyb3IiLCJwYWdlIiwib3ByIiwiaW5mbyIsInNlbmQiLCJ0cmltIiwibGVuZ3RoIiwic2VuZFRleHQiLCJzZXRUZXh0IiwiZSIsImRldGFpbCIsInZhbHVlIiwibWVyZ2VNc2dzIiwidGFyZ2V0IiwibWVyZ2VkQnlUbyIsIiRhcHBseSIsImhhbmRsZUZvY3VzIiwib3B0aW9ucyIsImZhY2NpZCIsImdldFVzZXJJbmZvIiwiYXZhdGFyIiwiaWNvbiIsIm5pY2tuYW1lIiwibmFtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBOzs7O0FBQ0E7O0FBR0E7Ozs7QUFDQTs7SUFBWUEsRzs7QUFDWjs7OztBQUNBOzs7Ozs7SUFhcUJDLEksV0FUcEIsd0JBQVE7QUFDUEMsUUFBTTtBQUFBLFdBQVNDLE1BQU1DLE1BQU4sQ0FBYUYsSUFBdEI7QUFBQSxHQURDO0FBRVBHLE9BQUs7QUFBQSxXQUFTRixNQUFNQyxNQUFOLENBQWFDLEdBQXRCO0FBQUEsR0FGRTtBQUdQQyxRQUFNLGNBQVNILEtBQVQsRUFBZ0I7QUFDcEIsV0FBT0EsTUFBTUksSUFBTixDQUFXRCxJQUFYLENBQWdCLEtBQUtFLEVBQXJCLEtBQTRCLEVBQW5DO0FBQ0Q7QUFMTSxDQUFSLEVBTUU7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SytCLE1BQUw7QUFDRCxPQTdETztBQThEUkMsaUJBOURRLHlCQThETTtBQUNaLGFBQUtoQyxNQUFMLEdBQWMsS0FBZDtBQUNEO0FBaEVPLEs7Ozs7OzsrRkFtRUdpQyxPOzs7Ozs7QUFFVEMsc0IsR0FDRUQsTyxDQURGQyxNOztBQUVGLHFCQUFLekMsRUFBTCxHQUFVeUMsTUFBVjtBQUNBOzt1QkFDcUIsY0FBSUMsV0FBSixDQUFnQkQsTUFBaEIsQzs7O0FBQWZuQyxzQjs7QUFDTixxQkFBS0EsTUFBTCxHQUFjO0FBQ1plLHlCQUFPZixPQUFPZSxLQURGO0FBRVpzQiwwQkFBUXJDLE9BQU9zQyxJQUZIO0FBR1pDLDRCQUFVdkMsT0FBT3dDO0FBSEwsaUJBQWQ7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQXJGOEIsZUFBS3RCLEk7a0JBQWxCL0IsSSIsImZpbGUiOiJjaGF0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuaW1wb3J0IHtcbiAgY29ubmVjdFxufSBmcm9tICd3ZXB5LXJlZHV4J1xuaW1wb3J0IE5JTSBmcm9tICcuLi91dGlscy9uaW0nXG5pbXBvcnQgKiBhcyBsb2cgZnJvbSAnLi4vdXRpbHMvbG9nJ1xuaW1wb3J0IFIgZnJvbSAnLi4vbGlicy9yYW1kYSdcbmltcG9ydCB7XG4gIHJlZnJlc2hNc2dzQnlUb1xufSBmcm9tICcuLi9hY3Rpb25zL2NoYXQnXG5cbkBjb25uZWN0KHtcbiAgdXNlcjogc3RhdGUgPT4gc3RhdGUuY29tbW9uLnVzZXIsXG4gIG5pbTogc3RhdGUgPT4gc3RhdGUuY29tbW9uLm5pbSxcbiAgbXNnczogZnVuY3Rpb24oc3RhdGUpIHtcbiAgICByZXR1cm4gc3RhdGUuY2hhdC5tc2dzW3RoaXMudG9dIHx8IFtdXG4gIH1cbn0sIHtcbiAgcmVmcmVzaE1zZ3NCeVRvXG59KVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2hhdCBleHRlbmRzIHdlcHkucGFnZSB7XG4gIGNvbmZpZyA9IHtcbiAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn6IGK5aSpJ1xuICB9XG5cbiAgZGF0YSA9IHtcbiAgICB0ZXh0OiAnJyxcbiAgICBmcmllbmQ6IG51bGwsXG4gICAgc2VuZGVkOiBmYWxzZVxuICB9XG5cbiAgbWV0aG9kcyA9IHtcbiAgICBhc3luYyBjaG9vc2VJbWFnZSgpIHtcbiAgICAgIGNvbnN0IHB1c2hNc2cgPSB0aGlzLm1ldGhvZHMucHVzaE1zZy5iaW5kKHRoaXMpXG4gICAgICBjb25zdCByZXMgPSBhd2FpdCB3ZXB5LmNob29zZUltYWdlKHtcbiAgICAgICAgY291bnQ6IDFcbiAgICAgIH0pXG5cbiAgICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IGZpbGUgPSBhd2FpdCB0aGlzLm5pbS5wcmV2aWV3RmlsZSh7XG4gICAgICAgICAgdHlwZTogJ2ltYWdlJyxcbiAgICAgICAgICB3eEZpbGVQYXRoOiByZXMudGVtcEZpbGVQYXRoc1swXVxuICAgICAgICB9KVxuICAgICAgICBjb25zdCBtc2cgPSBhd2FpdCB0aGlzLm5pbS5zZW5kRmlsZSh7XG4gICAgICAgICAgc2NlbmU6ICdwMnAnLFxuICAgICAgICAgIHR5cGU6ICdpbWFnZScsXG4gICAgICAgICAgdG86IHRoaXMuZnJpZW5kLmFjY2lkLFxuICAgICAgICAgIGZpbGU6IGZpbGVcbiAgICAgICAgfSlcbiAgICAgICAgcHVzaE1zZyhtc2cpXG4gICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBsb2cuZXJyb3Ioe1xuICAgICAgICAgIHBhZ2U6ICdjaGF0cm9vbXMnLFxuICAgICAgICAgIG9wcjogJ3NlbmRGaWxlJyxcbiAgICAgICAgICBpbmZvOiBlcnJvclxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH0sXG4gICAgYXN5bmMgc2VuZCgpIHtcbiAgICAgIC8vID8gd2h5IGJpbmRcbiAgICAgIGNvbnN0IHB1c2hNc2cgPSB0aGlzLm1ldGhvZHMucHVzaE1zZy5iaW5kKHRoaXMpXG4gICAgICBjb25zdCB0ZXh0ID0gUi50cmltKHRoaXMudGV4dClcbiAgICAgIHRoaXMudGV4dCA9ICcnXG4gICAgICBpZiAodGV4dC5sZW5ndGgpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBjb25zdCBtc2cgPSBhd2FpdCB0aGlzLm5pbS5zZW5kVGV4dCh7XG4gICAgICAgICAgICB0ZXh0LFxuICAgICAgICAgICAgc2NlbmU6ICdwMnAnLFxuICAgICAgICAgICAgdG86IHRoaXMuZnJpZW5kLmFjY2lkXG4gICAgICAgICAgfSlcbiAgICAgICAgICB0aGlzLnRleHQgPSAnJ1xuICAgICAgICAgIHB1c2hNc2cobXNnKVxuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgbG9nLmVycm9yKHtcbiAgICAgICAgICAgIHBhZ2U6ICdjaGF0JyxcbiAgICAgICAgICAgIG9wcjogJ3NlbmRUZXh0JyxcbiAgICAgICAgICAgIGluZm86IGVcbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcbiAgICBzZXRUZXh0KGUpIHtcbiAgICAgIHRoaXMudGV4dCA9IGUuZGV0YWlsLnZhbHVlXG4gICAgfSxcbiAgICBwdXNoTXNnIChtc2cpIHtcbiAgICAgIGNvbnN0IHsgcmVmcmVzaE1zZ3NCeVRvIH0gPSB0aGlzLm1ldGhvZHNcbiAgICAgIGNvbnN0IHsgbWVyZ2VNc2dzIH0gPSB0aGlzLm5pbVxuICAgICAgY29uc3QgdG8gPSBtc2cudGFyZ2V0XG4gICAgICBjb25zdCBtZXJnZWRCeVRvID0gbWVyZ2VNc2dzKHRoaXMubXNncyB8fCBbXSwgbXNnKVxuICAgICAgcmVmcmVzaE1zZ3NCeVRvKHRvLCBtZXJnZWRCeVRvKVxuICAgICAgdGhpcy5zZW5kZWQgPSB0cnVlXG4gICAgICB0aGlzLiRhcHBseSgpXG4gICAgfSxcbiAgICBoYW5kbGVGb2N1cygpIHtcbiAgICAgIHRoaXMuc2VuZGVkID0gZmFsc2VcbiAgICB9XG4gIH1cblxuICBhc3luYyBvbkxvYWQob3B0aW9ucykge1xuICAgIGNvbnN0IHtcbiAgICAgIGZhY2NpZFxuICAgIH0gPSBvcHRpb25zXG4gICAgdGhpcy50byA9IGZhY2NpZFxuICAgIC8vIOiOt+W+l+WlveWPi+WvueixoVxuICAgIGNvbnN0IGZyaWVuZCA9IGF3YWl0IE5JTS5nZXRVc2VySW5mbyhmYWNjaWQpXG4gICAgdGhpcy5mcmllbmQgPSB7XG4gICAgICBhY2NpZDogZnJpZW5kLmFjY2lkLFxuICAgICAgYXZhdGFyOiBmcmllbmQuaWNvbixcbiAgICAgIG5pY2tuYW1lOiBmcmllbmQubmFtZVxuICAgIH1cbiAgfVxufVxuIl19