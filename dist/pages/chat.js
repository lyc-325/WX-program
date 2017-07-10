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
      friend: null
    }, _this.methods = {
      pushMsg: function pushMsg(msg) {
        var refreshMsgsByTo = this.methods.refreshMsgsByTo;
        var mergeMsgs = this.nim.mergeMsgs;

        var to = msg.target;
        var mergedByTo = mergeMsgs(this.msgs || [], msg);
        refreshMsgsByTo(to, mergedByTo);
      },
      chooseImage: function chooseImage() {
        var _this2 = this;

        return (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee() {
          var pushMsg, res, file, msg;
          return _regenerator2.default.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  pushMsg = _this2.methods.pushMsg;
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
                  _this2.$apply();
                  _context.next = 18;
                  break;

                case 15:
                  _context.prev = 15;
                  _context.t0 = _context['catch'](4);

                  log.error({
                    page: 'chatrooms',
                    opr: 'sendFile',
                    info: _context.t0
                  });

                case 18:
                case 'end':
                  return _context.stop();
              }
            }
          }, _callee, _this2, [[4, 15]]);
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
                  pushMsg = _this3.methods.pushMsg;
                  text = _ramda2.default.trim(_this3.text);

                  _this3.text = '';

                  if (!text.length) {
                    _context2.next = 17;
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
                  _this3.$apply();
                  _context2.next = 17;
                  break;

                case 13:
                  _context2.prev = 13;
                  _context2.t0 = _context2['catch'](4);

                  log.error({
                    page: 'chat',
                    opr: 'sendText',
                    info: _context2.t0
                  });
                  _this3.$apply();

                case 17:
                case 'end':
                  return _context2.stop();
              }
            }
          }, _callee2, _this3, [[4, 13]]);
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoYXQuanMiXSwibmFtZXMiOlsibG9nIiwiQ2hhdCIsInVzZXIiLCJzdGF0ZSIsImNvbW1vbiIsIm5pbSIsIm1zZ3MiLCJjaGF0IiwidG8iLCJyZWZyZXNoTXNnc0J5VG8iLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiZGF0YSIsInRleHQiLCJmcmllbmQiLCJtZXRob2RzIiwicHVzaE1zZyIsIm1zZyIsIm1lcmdlTXNncyIsInRhcmdldCIsIm1lcmdlZEJ5VG8iLCJjaG9vc2VJbWFnZSIsImNvdW50IiwicmVzIiwicHJldmlld0ZpbGUiLCJ0eXBlIiwid3hGaWxlUGF0aCIsInRlbXBGaWxlUGF0aHMiLCJmaWxlIiwic2VuZEZpbGUiLCJzY2VuZSIsImFjY2lkIiwiJGFwcGx5IiwiZXJyb3IiLCJwYWdlIiwib3ByIiwiaW5mbyIsInNlbmQiLCJ0cmltIiwibGVuZ3RoIiwic2VuZFRleHQiLCJzZXRUZXh0IiwiZSIsImRldGFpbCIsInZhbHVlIiwib3B0aW9ucyIsImZhY2NpZCIsImdldFVzZXJJbmZvIiwiYXZhdGFyIiwiaWNvbiIsIm5pY2tuYW1lIiwibmFtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBOzs7O0FBQ0E7O0FBR0E7Ozs7QUFDQTs7SUFBWUEsRzs7QUFDWjs7OztBQUNBOzs7Ozs7SUFhcUJDLEksV0FUcEIsd0JBQVE7QUFDUEMsUUFBTTtBQUFBLFdBQVNDLE1BQU1DLE1BQU4sQ0FBYUYsSUFBdEI7QUFBQSxHQURDO0FBRVBHLE9BQUs7QUFBQSxXQUFTRixNQUFNQyxNQUFOLENBQWFDLEdBQXRCO0FBQUEsR0FGRTtBQUdQQyxRQUFNLGNBQVNILEtBQVQsRUFBZ0I7QUFDcEIsV0FBT0EsTUFBTUksSUFBTixDQUFXRCxJQUFYLENBQWdCLEtBQUtFLEVBQXJCLEtBQTRCLEVBQW5DO0FBQ0Q7QUFMTSxDQUFSLEVBTUU7QUFDREM7QUFEQyxDQU5GLEM7Ozs7Ozs7Ozs7Ozs7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TUFBVjtBQUNBOzt1QkFDcUIsY0FBSUMsV0FBSixDQUFnQkQsTUFBaEIsQzs7O0FBQWZoQyxzQjs7QUFDTixxQkFBS0EsTUFBTCxHQUFjO0FBQ1ppQix5QkFBT2pCLE9BQU9pQixLQURGO0FBRVppQiwwQkFBUWxDLE9BQU9tQyxJQUZIO0FBR1pDLDRCQUFVcEMsT0FBT3FDO0FBSEwsaUJBQWQ7QUFLQSxxQkFBS25CLE1BQUw7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQXRGOEIsZUFBS0UsSTtrQkFBbEJqQyxJIiwiZmlsZSI6ImNoYXQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG5pbXBvcnQge1xuICBjb25uZWN0XG59IGZyb20gJ3dlcHktcmVkdXgnXG5pbXBvcnQgTklNIGZyb20gJy4uL3V0aWxzL25pbSdcbmltcG9ydCAqIGFzIGxvZyBmcm9tICcuLi91dGlscy9sb2cnXG5pbXBvcnQgUiBmcm9tICcuLi9saWJzL3JhbWRhJ1xuaW1wb3J0IHtcbiAgcmVmcmVzaE1zZ3NCeVRvXG59IGZyb20gJy4uL2FjdGlvbnMvY2hhdCdcblxuQGNvbm5lY3Qoe1xuICB1c2VyOiBzdGF0ZSA9PiBzdGF0ZS5jb21tb24udXNlcixcbiAgbmltOiBzdGF0ZSA9PiBzdGF0ZS5jb21tb24ubmltLFxuICBtc2dzOiBmdW5jdGlvbihzdGF0ZSkge1xuICAgIHJldHVybiBzdGF0ZS5jaGF0Lm1zZ3NbdGhpcy50b10gfHwgW11cbiAgfVxufSwge1xuICByZWZyZXNoTXNnc0J5VG9cbn0pXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDaGF0IGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgY29uZmlnID0ge1xuICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICfogYrlpKknXG4gIH1cblxuICBkYXRhID0ge1xuICAgIHRleHQ6ICcnLFxuICAgIGZyaWVuZDogbnVsbFxuICB9XG5cbiAgbWV0aG9kcyA9IHtcbiAgICBwdXNoTXNnIChtc2cpIHtcbiAgICAgIGNvbnN0IHsgcmVmcmVzaE1zZ3NCeVRvIH0gPSB0aGlzLm1ldGhvZHNcbiAgICAgIGNvbnN0IHsgbWVyZ2VNc2dzIH0gPSB0aGlzLm5pbVxuICAgICAgY29uc3QgdG8gPSBtc2cudGFyZ2V0XG4gICAgICBjb25zdCBtZXJnZWRCeVRvID0gbWVyZ2VNc2dzKHRoaXMubXNncyB8fCBbXSwgbXNnKVxuICAgICAgcmVmcmVzaE1zZ3NCeVRvKHRvLCBtZXJnZWRCeVRvKVxuICAgIH0sXG4gICAgYXN5bmMgY2hvb3NlSW1hZ2UoKSB7XG4gICAgICBjb25zdCB7IHB1c2hNc2cgfSA9IHRoaXMubWV0aG9kc1xuICAgICAgY29uc3QgcmVzID0gYXdhaXQgd2VweS5jaG9vc2VJbWFnZSh7XG4gICAgICAgIGNvdW50OiAxXG4gICAgICB9KVxuXG4gICAgICB0cnkge1xuICAgICAgICBjb25zdCBmaWxlID0gYXdhaXQgdGhpcy5uaW0ucHJldmlld0ZpbGUoe1xuICAgICAgICAgIHR5cGU6ICdpbWFnZScsXG4gICAgICAgICAgd3hGaWxlUGF0aDogcmVzLnRlbXBGaWxlUGF0aHNbMF1cbiAgICAgICAgfSlcbiAgICAgICAgY29uc3QgbXNnID0gYXdhaXQgdGhpcy5uaW0uc2VuZEZpbGUoe1xuICAgICAgICAgIHNjZW5lOiAncDJwJyxcbiAgICAgICAgICB0eXBlOiAnaW1hZ2UnLFxuICAgICAgICAgIHRvOiB0aGlzLmZyaWVuZC5hY2NpZCxcbiAgICAgICAgICBmaWxlOiBmaWxlXG4gICAgICAgIH0pXG4gICAgICAgIHB1c2hNc2cobXNnKVxuICAgICAgICB0aGlzLiRhcHBseSgpXG4gICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBsb2cuZXJyb3Ioe1xuICAgICAgICAgIHBhZ2U6ICdjaGF0cm9vbXMnLFxuICAgICAgICAgIG9wcjogJ3NlbmRGaWxlJyxcbiAgICAgICAgICBpbmZvOiBlcnJvclxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH0sXG4gICAgYXN5bmMgc2VuZCgpIHtcbiAgICAgIGNvbnN0IHsgcHVzaE1zZyB9ID0gdGhpcy5tZXRob2RzXG4gICAgICBjb25zdCB0ZXh0ID0gUi50cmltKHRoaXMudGV4dClcbiAgICAgIHRoaXMudGV4dCA9ICcnXG4gICAgICBpZiAodGV4dC5sZW5ndGgpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBjb25zdCBtc2cgPSBhd2FpdCB0aGlzLm5pbS5zZW5kVGV4dCh7XG4gICAgICAgICAgICB0ZXh0LFxuICAgICAgICAgICAgc2NlbmU6ICdwMnAnLFxuICAgICAgICAgICAgdG86IHRoaXMuZnJpZW5kLmFjY2lkXG4gICAgICAgICAgfSlcbiAgICAgICAgICB0aGlzLnRleHQgPSAnJ1xuICAgICAgICAgIHB1c2hNc2cobXNnKVxuICAgICAgICAgIHRoaXMuJGFwcGx5KClcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgIGxvZy5lcnJvcih7XG4gICAgICAgICAgICBwYWdlOiAnY2hhdCcsXG4gICAgICAgICAgICBvcHI6ICdzZW5kVGV4dCcsXG4gICAgICAgICAgICBpbmZvOiBlXG4gICAgICAgICAgfSlcbiAgICAgICAgICB0aGlzLiRhcHBseSgpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuICAgIHNldFRleHQoZSkge1xuICAgICAgdGhpcy50ZXh0ID0gZS5kZXRhaWwudmFsdWVcbiAgICB9XG4gIH1cblxuICBhc3luYyBvbkxvYWQob3B0aW9ucykge1xuICAgIGNvbnN0IHtcbiAgICAgIGZhY2NpZFxuICAgIH0gPSBvcHRpb25zXG4gICAgdGhpcy50byA9IGZhY2NpZFxuICAgIC8vIOiOt+W+l+WlveWPi+WvueixoVxuICAgIGNvbnN0IGZyaWVuZCA9IGF3YWl0IE5JTS5nZXRVc2VySW5mbyhmYWNjaWQpXG4gICAgdGhpcy5mcmllbmQgPSB7XG4gICAgICBhY2NpZDogZnJpZW5kLmFjY2lkLFxuICAgICAgYXZhdGFyOiBmcmllbmQuaWNvbixcbiAgICAgIG5pY2tuYW1lOiBmcmllbmQubmFtZVxuICAgIH1cbiAgICB0aGlzLiRhcHBseSgpXG4gIH1cbn1cbiJdfQ==