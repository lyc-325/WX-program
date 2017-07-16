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

var _dec, _class;

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _ramda = require('./../libs/ramda.js');

var _ramda2 = _interopRequireDefault(_ramda);

var _chatroom = require('./../utils/chatroom.js');

var _chatroom2 = _interopRequireDefault(_chatroom);

var _nim = require('./../utils/nim.js');

var _nim2 = _interopRequireDefault(_nim);

var _log = require('./../utils/log.js');

var log = _interopRequireWildcard(_log);

var _chatroom3 = require('./../actions/chatroom.js');

var _wepyRedux = require('./../npm/wepy-redux/lib/index.js');

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Chatroom = (_dec = (0, _wepyRedux.connect)({
  user: function user(state) {
    return state.common.user;
  },
  nim: function nim(state) {
    return state.common.nim;
  },
  msgs: function msgs(state) {
    return state.chatroom.msgs[this.roomId] || [];
  },
  intoView: function intoView(state) {
    var msgs = state.chatroom.msgs[this.roomId] || [];
    var last = _ramda2.default.last(msgs);
    return last ? last.idClient : '';
  }
}, {
  refreshMsgs: _chatroom3.refreshMsgs
}), _dec(_class = function (_wepy$page) {
  (0, _inherits3.default)(Chatroom, _wepy$page);

  function Chatroom() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, Chatroom);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Chatroom.__proto__ || (0, _getPrototypeOf2.default)(Chatroom)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: '聊天室'
    }, _this.data = {
      navs: ['聊天', '公告', '成员'],
      currentNav: 0,
      chatroom: null,
      roomId: null,
      sended: false,
      text: ''
    }, _this.methods = {
      chooseImage: function chooseImage() {
        var _this2 = this;

        return (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee() {
          var pushMsg, res, file, msg;
          return _regenerator2.default.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  // 进行图片选择并上传
                  pushMsg = _this2.methods.pushMsg.bind(_this2);
                  _context.next = 3;
                  return _wepy2.default.chooseImage({
                    count: 1
                  });

                case 3:
                  res = _context.sent;
                  _context.prev = 4;
                  _context.next = 7;
                  return _this2.chatroom.previewFile({
                    type: 'image',
                    wxFilePath: res.tempFilePaths[0]
                  });

                case 7:
                  file = _context.sent;
                  _context.next = 10;
                  return _this2.chatroom.sendFile({
                    type: 'image',
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
                    page: 'chatroom',
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
                  return _this3.chatroom.sendText({
                    text: text
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
                    page: 'chatroom',
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

      pushMsg: function pushMsg(msgs) {
        var refreshMsgs = this.methods.refreshMsgs;

        if (!Array.isArray(msgs)) {
          msgs = [msgs];
        }
        var roomId = msgs[0].chatroomId;
        var merged = [].concat((0, _toConsumableArray3.default)(this.msgs), (0, _toConsumableArray3.default)(msgs));
        refreshMsgs(roomId, merged);
        this.sended = true;
        this.$apply();
      },
      handleFocus: function handleFocus() {
        this.sended = false;
      }
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(Chatroom, [{
    key: 'onLoad',
    value: function () {
      var _ref2 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee3(options) {
        var id, _user, nimToken, accid, roomId, address;

        return _regenerator2.default.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                id = options.id;

                this.roomId = id;
                _context3.prev = 2;
                _user = this.user, nimToken = _user.nimToken, accid = _user.accid;
                roomId = this.roomId;
                _context3.next = 7;
                return _nim2.default.getChatroomAddresses(accid, roomId);

              case 7:
                address = _context3.sent;

                this.chatroom = _chatroom2.default.getInstance({
                  debug: true,
                  account: accid,
                  token: nimToken,
                  chatroomId: roomId,
                  chatroomAddresses: address,
                  onmsgs: function onmsgs(msgs) {
                    console.log('收到聊天室消息', msgs);
                  },
                  onconnect: function onconnect() {
                    console.log('收到聊天室消息');
                  }
                });
                _context3.next = 14;
                break;

              case 11:
                _context3.prev = 11;
                _context3.t0 = _context3['catch'](2);

                log.error({
                  page: 'chatroom',
                  opr: 'getInstance',
                  info: _context3.t0
                });

              case 14:
              case 'end':
                return _context3.stop();
            }
          }
        }, _callee3, this, [[2, 11]]);
      }));

      function onLoad(_x) {
        return _ref2.apply(this, arguments);
      }

      return onLoad;
    }()
  }, {
    key: 'onShow',
    value: function () {
      var _ref3 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee4() {
        return _regenerator2.default.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
              case 'end':
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function onShow() {
        return _ref3.apply(this, arguments);
      }

      return onShow;
    }()
  }]);
  return Chatroom;
}(_wepy2.default.page)) || _class);

Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Chatroom , 'pages/chatroom'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoYXRyb29tLmpzIl0sIm5hbWVzIjpbImxvZyIsIkNoYXRyb29tIiwidXNlciIsInN0YXRlIiwiY29tbW9uIiwibmltIiwibXNncyIsImNoYXRyb29tIiwicm9vbUlkIiwiaW50b1ZpZXciLCJsYXN0IiwiaWRDbGllbnQiLCJyZWZyZXNoTXNncyIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCJkYXRhIiwibmF2cyIsImN1cnJlbnROYXYiLCJzZW5kZWQiLCJ0ZXh0IiwibWV0aG9kcyIsImNob29zZUltYWdlIiwicHVzaE1zZyIsImJpbmQiLCJjb3VudCIsInJlcyIsInByZXZpZXdGaWxlIiwidHlwZSIsInd4RmlsZVBhdGgiLCJ0ZW1wRmlsZVBhdGhzIiwiZmlsZSIsInNlbmRGaWxlIiwibXNnIiwiZXJyb3IiLCJwYWdlIiwib3ByIiwiaW5mbyIsInNlbmQiLCJ0cmltIiwibGVuZ3RoIiwic2VuZFRleHQiLCJzZXRUZXh0IiwiZSIsImRldGFpbCIsInZhbHVlIiwiQXJyYXkiLCJpc0FycmF5IiwiY2hhdHJvb21JZCIsIm1lcmdlZCIsIiRhcHBseSIsImhhbmRsZUZvY3VzIiwib3B0aW9ucyIsImlkIiwibmltVG9rZW4iLCJhY2NpZCIsImdldENoYXRyb29tQWRkcmVzc2VzIiwiYWRkcmVzcyIsImdldEluc3RhbmNlIiwiZGVidWciLCJhY2NvdW50IiwidG9rZW4iLCJjaGF0cm9vbUFkZHJlc3NlcyIsIm9ubXNncyIsImNvbnNvbGUiLCJvbmNvbm5lY3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7SUFBWUEsRzs7QUFDWjs7QUFJQTs7Ozs7O0lBa0JxQkMsUSxXQWRwQix3QkFBUTtBQUNQQyxRQUFNO0FBQUEsV0FBU0MsTUFBTUMsTUFBTixDQUFhRixJQUF0QjtBQUFBLEdBREM7QUFFUEcsT0FBSztBQUFBLFdBQVNG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LEdBQVIsQ0FBWSxTQUFaO0FBQ0Q7QUFYcUMsaUJBQXhCLENBQWhCOzs7Ozs7OztBQWNBQSxvQkFBSWlDLEtBQUosQ0FBVTtBQUNSQyx3QkFBTSxVQURFO0FBRVJDLHVCQUFLLGFBRkc7QUFHUkM7QUFIUSxpQkFBVjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBckdnQyxlQUFLRixJO2tCQUF0QmpDLFEiLCJmaWxlIjoiY2hhdHJvb20uanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG5pbXBvcnQgUiBmcm9tICcuLi9saWJzL3JhbWRhJ1xuaW1wb3J0IENoYXRyb29tU0RLIGZyb20gJy4uL3V0aWxzL2NoYXRyb29tJ1xuaW1wb3J0IE5JTSBmcm9tICcuLi91dGlscy9uaW0nXG5pbXBvcnQgKiBhcyBsb2cgZnJvbSAnLi4vdXRpbHMvbG9nJ1xuaW1wb3J0IHtcbiAgcmVmcmVzaE1zZ3Ncbn0gZnJvbSAnLi4vYWN0aW9ucy9jaGF0cm9vbSdcblxuaW1wb3J0IHtcbiAgY29ubmVjdFxufSBmcm9tICd3ZXB5LXJlZHV4J1xuXG5AY29ubmVjdCh7XG4gIHVzZXI6IHN0YXRlID0+IHN0YXRlLmNvbW1vbi51c2VyLFxuICBuaW06IHN0YXRlID0+IHN0YXRlLmNvbW1vbi5uaW0sXG4gIG1zZ3M6IGZ1bmN0aW9uIChzdGF0ZSkge1xuICAgIHJldHVybiBzdGF0ZS5jaGF0cm9vbS5tc2dzW3RoaXMucm9vbUlkXSB8fCBbXVxuICB9LFxuICBpbnRvVmlldzogZnVuY3Rpb24oc3RhdGUpIHtcbiAgICBjb25zdCBtc2dzID0gc3RhdGUuY2hhdHJvb20ubXNnc1t0aGlzLnJvb21JZF0gfHwgW11cbiAgICBjb25zdCBsYXN0ID0gUi5sYXN0KG1zZ3MpXG4gICAgcmV0dXJuIGxhc3QgPyBsYXN0LmlkQ2xpZW50IDogJydcbiAgfVxufSwge1xuICByZWZyZXNoTXNnc1xufSlcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENoYXRyb29tIGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgY29uZmlnID0ge1xuICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICfogYrlpKnlrqQnXG4gIH1cblxuICBkYXRhID0ge1xuICAgIG5hdnM6IFsn6IGK5aSpJywgJ+WFrOWRiicsICfmiJDlkZgnXSxcbiAgICBjdXJyZW50TmF2OiAwLFxuICAgIGNoYXRyb29tOiBudWxsLFxuICAgIHJvb21JZDogbnVsbCxcbiAgICBzZW5kZWQ6IGZhbHNlLFxuICAgIHRleHQ6ICcnXG4gIH1cblxuICBtZXRob2RzID0ge1xuICAgIGFzeW5jIGNob29zZUltYWdlKCkge1xuICAgICAgLy8g6L+b6KGM5Zu+54mH6YCJ5oup5bm25LiK5LygXG4gICAgICBjb25zdCBwdXNoTXNnID0gdGhpcy5tZXRob2RzLnB1c2hNc2cuYmluZCh0aGlzKVxuICAgICAgY29uc3QgcmVzID0gYXdhaXQgd2VweS5jaG9vc2VJbWFnZSh7XG4gICAgICAgIGNvdW50OiAxXG4gICAgICB9KVxuXG4gICAgICB0cnkge1xuICAgICAgICBjb25zdCBmaWxlID0gYXdhaXQgdGhpcy5jaGF0cm9vbS5wcmV2aWV3RmlsZSh7XG4gICAgICAgICAgdHlwZTogJ2ltYWdlJyxcbiAgICAgICAgICB3eEZpbGVQYXRoOiByZXMudGVtcEZpbGVQYXRoc1swXVxuICAgICAgICB9KVxuICAgICAgICBjb25zdCBtc2cgPSBhd2FpdCB0aGlzLmNoYXRyb29tLnNlbmRGaWxlKHtcbiAgICAgICAgICB0eXBlOiAnaW1hZ2UnLFxuICAgICAgICAgIGZpbGU6IGZpbGVcbiAgICAgICAgfSlcbiAgICAgICAgcHVzaE1zZyhtc2cpXG4gICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBsb2cuZXJyb3Ioe1xuICAgICAgICAgIHBhZ2U6ICdjaGF0cm9vbScsXG4gICAgICAgICAgb3ByOiAnc2VuZEZpbGUnLFxuICAgICAgICAgIGluZm86IGVycm9yXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfSxcbiAgICBhc3luYyBzZW5kKCkge1xuICAgICAgLy8gPyB3aHkgYmluZFxuICAgICAgY29uc3QgcHVzaE1zZyA9IHRoaXMubWV0aG9kcy5wdXNoTXNnLmJpbmQodGhpcylcbiAgICAgIGNvbnN0IHRleHQgPSBSLnRyaW0odGhpcy50ZXh0KVxuICAgICAgdGhpcy50ZXh0ID0gJydcbiAgICAgIGlmICh0ZXh0Lmxlbmd0aCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIGNvbnN0IG1zZyA9IGF3YWl0IHRoaXMuY2hhdHJvb20uc2VuZFRleHQoe1xuICAgICAgICAgICAgdGV4dFxuICAgICAgICAgIH0pXG4gICAgICAgICAgdGhpcy50ZXh0ID0gJydcbiAgICAgICAgICBwdXNoTXNnKG1zZylcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgIGxvZy5lcnJvcih7XG4gICAgICAgICAgICBwYWdlOiAnY2hhdHJvb20nLFxuICAgICAgICAgICAgb3ByOiAnc2VuZFRleHQnLFxuICAgICAgICAgICAgaW5mbzogZVxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuICAgIHNldFRleHQoZSkge1xuICAgICAgdGhpcy50ZXh0ID0gZS5kZXRhaWwudmFsdWVcbiAgICB9LFxuICAgIHB1c2hNc2c6IGZ1bmN0aW9uIChtc2dzKSB7XG4gICAgICBjb25zdCB7IHJlZnJlc2hNc2dzIH0gPSB0aGlzLm1ldGhvZHNcbiAgICAgIGlmICghQXJyYXkuaXNBcnJheShtc2dzKSkge1xuICAgICAgICBtc2dzID0gW21zZ3NdXG4gICAgICB9XG4gICAgICBjb25zdCByb29tSWQgPSBtc2dzWzBdLmNoYXRyb29tSWRcbiAgICAgIGNvbnN0IG1lcmdlZCA9IFsuLi50aGlzLm1zZ3MsIC4uLm1zZ3NdXG4gICAgICByZWZyZXNoTXNncyhyb29tSWQsIG1lcmdlZClcbiAgICAgIHRoaXMuc2VuZGVkID0gdHJ1ZVxuICAgICAgdGhpcy4kYXBwbHkoKVxuICAgIH0sXG4gICAgaGFuZGxlRm9jdXMoKSB7XG4gICAgICB0aGlzLnNlbmRlZCA9IGZhbHNlXG4gICAgfVxuICB9XG5cbiAgYXN5bmMgb25Mb2FkKG9wdGlvbnMpIHtcbiAgICBjb25zdCB7IGlkIH0gPSBvcHRpb25zXG4gICAgdGhpcy5yb29tSWQgPSBpZFxuICAgIHRyeSB7XG4gICAgICBjb25zdCB7IG5pbVRva2VuLCBhY2NpZCB9ID0gdGhpcy51c2VyXG4gICAgICBjb25zdCByb29tSWQgPSB0aGlzLnJvb21JZFxuICAgICAgY29uc3QgYWRkcmVzcyA9IGF3YWl0IE5JTS5nZXRDaGF0cm9vbUFkZHJlc3NlcyhhY2NpZCwgcm9vbUlkKVxuICAgICAgdGhpcy5jaGF0cm9vbSA9IENoYXRyb29tU0RLLmdldEluc3RhbmNlKHtcbiAgICAgICAgZGVidWc6IHRydWUsXG4gICAgICAgIGFjY291bnQ6IGFjY2lkLFxuICAgICAgICB0b2tlbjogbmltVG9rZW4sXG4gICAgICAgIGNoYXRyb29tSWQ6IHJvb21JZCxcbiAgICAgICAgY2hhdHJvb21BZGRyZXNzZXM6IGFkZHJlc3MsXG4gICAgICAgIG9ubXNnczogZnVuY3Rpb24obXNncykge1xuICAgICAgICAgIGNvbnNvbGUubG9nKCfmlLbliLDogYrlpKnlrqTmtojmga8nLCBtc2dzKVxuICAgICAgICB9LFxuICAgICAgICBvbmNvbm5lY3Q6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgIGNvbnNvbGUubG9nKCfmlLbliLDogYrlpKnlrqTmtojmga8nKVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIGxvZy5lcnJvcih7XG4gICAgICAgIHBhZ2U6ICdjaGF0cm9vbScsXG4gICAgICAgIG9wcjogJ2dldEluc3RhbmNlJyxcbiAgICAgICAgaW5mbzogZVxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICBhc3luYyBvblNob3coKSB7XG5cbiAgfVxufVxuIl19