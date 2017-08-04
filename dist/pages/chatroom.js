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

var _WebIM = require('./../utils/WebIM.js');

var _WebIM2 = _interopRequireDefault(_WebIM);

var _log = require('./../utils/log.js');

var log = _interopRequireWildcard(_log);

var _chatroom3 = require('./../actions/chatroom.js');

var _chatroom4 = require('./../apis/chatroom.js');

var chatroomApi = _interopRequireWildcard(_chatroom4);

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
      navs: ['聊天', '详情'],
      currentNav: 0,
      chatroom: null,
      roomId: null,
      sended: false,
      text: '',
      roomData: {
        name: '加载中...'
      },
      indicatorDots: true,
      autoplay: false,
      interval: 5000,
      duration: 1000,
      show: 'emoji_list',
      showem: 'operation',
      emoji: _WebIM2.default.default.Emoji,
      emojiObj: _WebIM2.default.default.EmojiObj
    }, _this.methods = {
      openEmoji: function openEmoji(e) {
        if (this.show === 'showEmoji') {
          this.show = 'emoji_list';
          this.showem = 'operation';
        } else {
          this.show = 'showEmoji';
          this.showem = 'showEmojiOperation';
        }
        this.$apply();
      },
      sendEmoji: function sendEmoji(event) {
        var _this2 = this;

        return (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee() {
          var that, emoji, msglen, str, start, end, len, pushMsg, text, msg;
          return _regenerator2.default.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  that = _this2;
                  emoji = event.target.dataset.emoji;
                  msglen = that.data.text.length - 1;

                  if (emoji && emoji !== '[del]') {
                    str = that.data.text + emoji;
                  } else if (emoji === '[del]') {
                    start = that.data.text.lastIndexOf('[');
                    end = that.data.text.lastIndexOf(']');
                    len = end - start;

                    if (end !== -1 && end === msglen && len >= 3 && len <= 4) {
                      str = that.data.text.slice(0, start);
                    } else {
                      str = that.data.text.slice(0, msglen);
                    }
                  }
                  _this2.text = str;
                  pushMsg = _this2.methods.pushMsg.bind(_this2);
                  text = _ramda2.default.trim(_this2.text);

                  _this2.text = '';

                  if (!text.length) {
                    _context.next = 23;
                    break;
                  }

                  _context.prev = 9;
                  _context.next = 12;
                  return _this2.chatroom.sendText({
                    text: text
                  });

                case 12:
                  msg = _context.sent;

                  _this2.text = '';
                  pushMsg(msg);
                  _this2.show = 'emoji_list';
                  _this2.showem = 'operation';
                  _this2.$apply();
                  _context.next = 23;
                  break;

                case 20:
                  _context.prev = 20;
                  _context.t0 = _context['catch'](9);

                  log.error({
                    page: 'chatroom',
                    opr: 'sendText',
                    info: _context.t0
                  });

                case 23:
                case 'end':
                  return _context.stop();
              }
            }
          }, _callee, _this2, [[9, 20]]);
        }))();
      },
      changeNav: function changeNav(e) {
        console.log(e);
        this.currentNav = e.currentTarget.dataset.index;
        this.$apply();
      },
      chooseImage: function chooseImage() {
        var _this3 = this;

        return (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee2() {
          var pushMsg, res, file, msg;
          return _regenerator2.default.wrap(function _callee2$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  // 进行图片选择并上传
                  pushMsg = _this3.methods.pushMsg.bind(_this3);
                  _context2.next = 3;
                  return _wepy2.default.chooseImage({
                    count: 1
                  });

                case 3:
                  res = _context2.sent;
                  _context2.prev = 4;
                  _context2.next = 7;
                  return _this3.chatroom.previewFile({
                    type: 'image',
                    wxFilePath: res.tempFilePaths[0]
                  });

                case 7:
                  file = _context2.sent;
                  _context2.next = 10;
                  return _this3.chatroom.sendFile({
                    type: 'image',
                    file: file
                  });

                case 10:
                  msg = _context2.sent;

                  pushMsg(msg);
                  _context2.next = 17;
                  break;

                case 14:
                  _context2.prev = 14;
                  _context2.t0 = _context2['catch'](4);

                  log.error({
                    page: 'chatroom',
                    opr: 'sendFile',
                    info: _context2.t0
                  });

                case 17:
                case 'end':
                  return _context2.stop();
              }
            }
          }, _callee2, _this3, [[4, 14]]);
        }))();
      },
      send: function send() {
        var _this4 = this;

        return (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee3() {
          var pushMsg, text, msg;
          return _regenerator2.default.wrap(function _callee3$(_context3) {
            while (1) {
              switch (_context3.prev = _context3.next) {
                case 0:
                  // ? why bind
                  pushMsg = _this4.methods.pushMsg.bind(_this4);
                  text = _ramda2.default.trim(_this4.text);

                  _this4.text = '';

                  if (!text.length) {
                    _context3.next = 15;
                    break;
                  }

                  _context3.prev = 4;
                  _context3.next = 7;
                  return _this4.chatroom.sendText({
                    text: text
                  });

                case 7:
                  msg = _context3.sent;

                  _this4.text = '';
                  pushMsg(msg);
                  _context3.next = 15;
                  break;

                case 12:
                  _context3.prev = 12;
                  _context3.t0 = _context3['catch'](4);

                  log.error({
                    page: 'chatroom',
                    opr: 'sendText',
                    info: _context3.t0
                  });

                case 15:
                case 'end':
                  return _context3.stop();
              }
            }
          }, _callee3, _this4, [[4, 12]]);
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
        console.log('就是这个图');
        msgs = msgs.map(function (msg) {
          if (msg.type === 'text') {
            return {
              emji: _WebIM2.default.default.parseEmoji(msg.text.replace(/\n/mg, '')),
              chatroomId: msg.chatroomId,
              flow: msg.flow,
              from: msg.from,
              fromAvatar: msg.fromAvatar,
              fromClientType: msg.fromClientType,
              fromCustom: msg.fromCustom,
              fromNick: msg.fromNick,
              idClient: msg.idClient,
              resend: msg.resend,
              status: msg.status,
              text: msg.text,
              time: msg.time,
              type: msg.type,
              userUpdateTime: msg.userUpdateTime
            };
          } else {
            return msg;
          }
        });
        console.log(msgs);
        var roomId = msgs[0].chatroomId || this.roomId;
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
      var _ref2 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee5(options) {
        var id, pk, roomInfo, pushMsg, apply, hasMsgs, _user, nimToken, accid, roomId, address, chatroom;

        return _regenerator2.default.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                id = options.id;

                this.roomId = id;
                pk = options.pk;
                _context5.next = 5;
                return chatroomApi.getOneById(pk);

              case 5:
                roomInfo = _context5.sent;

                this.roomData = roomInfo;
                pushMsg = this.methods.pushMsg.bind(this);
                apply = this.$apply.bind(this);
                hasMsgs = this.msgs.length > 0;
                _context5.prev = 10;
                _user = this.user, nimToken = _user.nimToken, accid = _user.accid;
                roomId = this.roomId;
                _context5.next = 15;
                return _nim2.default.getChatroomAddresses(accid, roomId);

              case 15:
                address = _context5.sent;
                chatroom = _chatroom2.default.getInstance({
                  debug: true,
                  account: accid,
                  token: nimToken,
                  chatroomId: roomId,
                  chatroomAddresses: address,
                  onmsgs: function onmsgs(msgs) {
                    log.info({
                      page: 'chatroom',
                      opr: 'initialize sdk instance',
                      info: msgs
                    });
                    pushMsg(msgs.map(function (msg) {
                      if (msg.type === 'notification') {
                        // 进入聊天室信息
                        var tip = _ramda2.default.cond([[_ramda2.default.equals('memberEnter'), _ramda2.default.always('加入聊天室')], [_ramda2.default.equals('memberExit'), _ramda2.default.always('退出聊天室')]])(msg.attach.type);
                        console.log(msg.attach.fromNick + ' ' + tip);
                      } else {
                        return msg;
                      }
                    }));
                  },
                  onconnect: function onconnect() {
                    var _this5 = this;

                    return (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee4() {
                      var res, msgs;
                      return _regenerator2.default.wrap(function _callee4$(_context4) {
                        while (1) {
                          switch (_context4.prev = _context4.next) {
                            case 0:
                              log.info({
                                page: 'chatroom',
                                opr: 'initialize sdk instance',
                                info: '[NIM CHATROOM] connected'
                              });

                              if (hasMsgs) {
                                _context4.next = 10;
                                break;
                              }

                              _wepy2.default.showLoading();
                              // 拉取最近 100 条信息
                              _context4.next = 5;
                              return chatroom.getHistoryMsgs({
                                limit: 100
                              });

                            case 5:
                              res = _context4.sent;
                              msgs = res.msgs.filter(function (msg) {
                                return msg.type !== 'notification' && msg.type !== 'tip';
                              });
                              //            console.log('history messages', msgs)

                              // 刷新消息

                              pushMsg(msgs || []);
                              apply();
                              _wepy2.default.hideLoading();

                            case 10:
                            case 'end':
                              return _context4.stop();
                          }
                        }
                      }, _callee4, _this5);
                    }))();
                  }
                });

                this.chatroom = chatroom;
                _context5.next = 23;
                break;

              case 20:
                _context5.prev = 20;
                _context5.t0 = _context5['catch'](10);

                log.error({
                  page: 'chatroom',
                  opr: 'getInstance',
                  info: _context5.t0
                });

              case 23:
              case 'end':
                return _context5.stop();
            }
          }
        }, _callee5, this, [[10, 20]]);
      }));

      function onLoad(_x) {
        return _ref2.apply(this, arguments);
      }

      return onLoad;
    }()

    //  async onShow() {
    //
    //  }

  }]);
  return Chatroom;
}(_wepy2.default.page)) || _class);

Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Chatroom , 'pages/chatroom'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoYXRyb29tLmpzIl0sIm5hbWVzIjpbImxvZyIsImNoYXRyb29tQXBpIiwiQ2hhdHJvb20iLCJ1c2VyIiwic3RhdGUiLCJjb21tb24iLCJuaW0iLCJtc2dzIiwiY2hhdHJvb20iLCJyb29tSWQiLCJpbnRvVmlldyIsImxhc3QiLCJpZENsaWVudCIsInJlZnJlc2hNc2dzIiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsImRhdGEiLCJuYXZzIiwiY3VycmVudE5hdiIsInNlbmRlZCIsInRleHQiLCJyb29tRGF0YSIsIm5hbWUiLCJpbmRpY2F0b3JEb3RzIiwiYXV0b3BsYXkiLCJpbnRlcnZhbCIsImR1cmF0aW9uIiwic2hvdyIsInNob3dlbSIsImVtb2ppIiwiZGVmYXVsdCIsIkVtb2ppIiwiZW1vamlPYmoiLCJFbW9qaU9iaiIsIm1ldGhvZHMiLCJvcGVuRW1vamkiLCJlIiwiJGFwcGx5Iiwic2VuZEVtb2ppIiwiZXZlbnQiLCJ0aGF0IiwidGFyZ2V0IiwiZGF0YXNldCIsIm1zZ2xlbiIsImxlbmd0aCIsInN0ciIsInN0YXJ0IiwibGFzdEluZGV4T2YiLCJlbmQiLCJsZW4iLCJzbGljZSIsInB1c2hNc2ciLCJiaW5kIiwidHJpbSIsInNlbmRUZXh0IiwibXNnIiwiZXJyb3IiLCJwYWdlIiwib3ByIiwiaW5mbyIsImNoYW5nZU5hdiIsImNvbnNvbGUiLCJjdXJyZW50VGFyZ2V0IiwiaW5kZXgiLCJjaG9vc2VJbWFnZSIsImNvdW50IiwicmVzIiwicHJldmlld0ZpbGUiLCJ0eXBlIiwid3hGaWxlUGF0aCIsInRlbXBGaWxlUGF0aHMiLCJmaWxlIiwic2VuZEZpbGUiLCJzZW5kIiwic2V0VGV4dCIsImRldGFpbCIsInZhbHVlIiwiQXJyYXkiLCJpc0FycmF5IiwibWFwIiwiZW1qaSIsInBhcnNlRW1vamkiLCJyZXBsYWNlIiwiY2hhdHJvb21JZCIsImZsb3ciLCJmcm9tIiwiZnJvbUF2YXRhciIsImZyb21DbGllbnRUeXBlIiwiZnJvbUN1c3RvbSIsImZyb21OaWNrIiwicmVzZW5kIiwic3RhdHVzIiwidGltZSIsInVzZXJVcGRhdGVUaW1lIiwibWVyZ2VkIiwiaGFuZGxlRm9jdXMiLCJvcHRpb25zIiwiaWQiLCJwayIsImdldE9uZUJ5SWQiLCJyb29tSW5mbyIsImFwcGx5IiwiaGFzTXNncyIsIm5pbVRva2VuIiwiYWNjaWQiLCJnZXRDaGF0cm9vbUFkZHJlc3NlcyIsImFkZHJlc3MiLCJnZXRJbnN0YW5jZSIsImRlYnVnIiwiYWNjb3VudCIsInRva2VuIiwiY2hhdHJvb21BZGRyZXNzZXMiLCJvbm1zZ3MiLCJ0aXAiLCJjb25kIiwiZXF1YWxzIiwiYWx3YXlzIiwiYXR0YWNoIiwib25jb25uZWN0Iiwic2hvd0xvYWRpbmciLCJnZXRIaXN0b3J5TXNncyIsImxpbWl0IiwiZmlsdGVyIiwiaGlkZUxvYWRpbmciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOztJQUFZQSxHOztBQUNaOztBQUdBOztJQUFZQyxXOztBQUVaOzs7Ozs7SUFrQnFCQyxRLFdBZHBCLHdCQUFRO0FBQ1BDLFFBQU07QUFBQSxXQUFTQyxNQUFNQyxNQUFOLENBQWFGLElBQXRCO0FBQUEsR0FEQztBQUVQRyxPQUFLO0FBQUEsV0FBU0YsTUFBTUMsTUFBTixDQUFhQyxHQUF0QjtBQUFBLEdBRkU7QUFHUEMsUUFBTSxjQUFVSCxLQUFWLEVBQWlCO0FBQ3JCLFdBQU9BLE1BQU1JLFFBQU4sQ0FBZUQsSUFBZixDQUFvQixLQUFLRSxNQUF6QixLQUFvQyxFQUEzQztBQUNELEdBTE07QUFNUEMsWUFBVSxrQkFBU04sS0FBVCxFQUFnQjtBQUN4QixRQUFNRyxPQUFPSCxNQUFNSSxRQUFOLENBQWVELElBQWYsQ0FBb0IsS0FBS0UsTUFBekIsS0FBb0MsRUFBakQ7QUFDQSxRQUFNRSxPQUFPLGdCQUFFQSxJQUFGLENBQU9KLElBQVAsQ0FBYjtBQUNBLFdB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YztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQW9CakI7QUE3Q3NDLGlCQUF4QixDOztBQStDakIscUJBQUtuSCxRQUFMLEdBQWdCQSxRQUFoQjs7Ozs7Ozs7QUFFQVIsb0JBQUl3RCxLQUFKLENBQVU7QUFDUkMsd0JBQU0sVUFERTtBQUVSQyx1QkFBSyxhQUZHO0FBR1JDO0FBSFEsaUJBQVY7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBUU47QUFDQTtBQUNBOzs7O0VBbFBzQyxlQUFLRixJO2tCQUF0QnZELFEiLCJmaWxlIjoiY2hhdHJvb20uanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG5pbXBvcnQgUiBmcm9tICcuLi9saWJzL3JhbWRhJ1xuaW1wb3J0IENoYXRyb29tU0RLIGZyb20gJy4uL3V0aWxzL2NoYXRyb29tJ1xuaW1wb3J0IE5JTSBmcm9tICcuLi91dGlscy9uaW0nXG5pbXBvcnQgRmFjZUlNIGZyb20gJy4uL3V0aWxzL1dlYklNJ1xuaW1wb3J0ICogYXMgbG9nIGZyb20gJy4uL3V0aWxzL2xvZydcbmltcG9ydCB7XG4gIHJlZnJlc2hNc2dzXG59IGZyb20gJy4uL2FjdGlvbnMvY2hhdHJvb20nXG5pbXBvcnQgKiBhcyBjaGF0cm9vbUFwaSBmcm9tICcuLi9hcGlzL2NoYXRyb29tJ1xuXG5pbXBvcnQge1xuICBjb25uZWN0XG59IGZyb20gJ3dlcHktcmVkdXgnXG5cbkBjb25uZWN0KHtcbiAgdXNlcjogc3RhdGUgPT4gc3RhdGUuY29tbW9uLnVzZXIsXG4gIG5pbTogc3RhdGUgPT4gc3RhdGUuY29tbW9uLm5pbSxcbiAgbXNnczogZnVuY3Rpb24gKHN0YXRlKSB7XG4gICAgcmV0dXJuIHN0YXRlLmNoYXRyb29tLm1zZ3NbdGhpcy5yb29tSWRdIHx8IFtdXG4gIH0sXG4gIGludG9WaWV3OiBmdW5jdGlvbihzdGF0ZSkge1xuICAgIGNvbnN0IG1zZ3MgPSBzdGF0ZS5jaGF0cm9vbS5tc2dzW3RoaXMucm9vbUlkXSB8fCBbXVxuICAgIGNvbnN0IGxhc3QgPSBSLmxhc3QobXNncylcbiAgICByZXR1cm4gbGFzdCA/IGxhc3QuaWRDbGllbnQgOiAnJ1xuICB9XG59LCB7XG4gIHJlZnJlc2hNc2dzXG59KVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2hhdHJvb20gZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICBjb25maWcgPSB7XG4gICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+iBiuWkqeWupCdcbiAgfVxuXG4gIGRhdGEgPSB7XG4gICAgbmF2czogWyfogYrlpKknLCAn6K+m5oOFJ10sXG4gICAgY3VycmVudE5hdjogMCxcbiAgICBjaGF0cm9vbTogbnVsbCxcbiAgICByb29tSWQ6IG51bGwsXG4gICAgc2VuZGVkOiBmYWxzZSxcbiAgICB0ZXh0OiAnJyxcbiAgICByb29tRGF0YToge1xuICAgICAgbmFtZTogJ+WKoOi9veS4rS4uLidcbiAgICB9LFxuICAgIGluZGljYXRvckRvdHM6IHRydWUsXG4gICAgYXV0b3BsYXk6IGZhbHNlLFxuICAgIGludGVydmFsOiA1MDAwLFxuICAgIGR1cmF0aW9uOiAxMDAwLFxuICAgIHNob3c6ICdlbW9qaV9saXN0JyxcbiAgICBzaG93ZW06ICdvcGVyYXRpb24nLFxuICAgIGVtb2ppOiBGYWNlSU0uZGVmYXVsdC5FbW9qaSxcbiAgICBlbW9qaU9iajogRmFjZUlNLmRlZmF1bHQuRW1vamlPYmpcbiAgfVxuXG4gIG1ldGhvZHMgPSB7XG4gICAgb3BlbkVtb2ppIChlKSB7XG4gICAgICBpZiAodGhpcy5zaG93ID09PSAnc2hvd0Vtb2ppJykge1xuICAgICAgICB0aGlzLnNob3cgPSAnZW1vamlfbGlzdCdcbiAgICAgICAgdGhpcy5zaG93ZW0gPSAnb3BlcmF0aW9uJ1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5zaG93ID0gJ3Nob3dFbW9qaSdcbiAgICAgICAgdGhpcy5zaG93ZW0gPSAnc2hvd0Vtb2ppT3BlcmF0aW9uJ1xuICAgICAgfVxuICAgICAgdGhpcy4kYXBwbHkoKVxuICAgIH0sXG4gICAgYXN5bmMgc2VuZEVtb2ppIChldmVudCkge1xuICAgICAgdmFyIHRoYXQgPSB0aGlzXG4gICAgICB2YXIgZW1vamkgPSBldmVudC50YXJnZXQuZGF0YXNldC5lbW9qaVxuICAgICAgdmFyIG1zZ2xlbiA9IHRoYXQuZGF0YS50ZXh0Lmxlbmd0aCAtIDFcbiAgICAgIGlmIChlbW9qaSAmJiBlbW9qaSAhPT0gJ1tkZWxdJykge1xuICAgICAgICB2YXIgc3RyID0gdGhhdC5kYXRhLnRleHQgKyBlbW9qaVxuICAgICAgfSBlbHNlIGlmIChlbW9qaSA9PT0gJ1tkZWxdJykge1xuICAgICAgICB2YXIgc3RhcnQgPSB0aGF0LmRhdGEudGV4dC5sYXN0SW5kZXhPZignWycpXG4gICAgICAgIHZhciBlbmQgPSB0aGF0LmRhdGEudGV4dC5sYXN0SW5kZXhPZignXScpXG4gICAgICAgIHZhciBsZW4gPSBlbmQgLSBzdGFydFxuICAgICAgICBpZiAoZW5kICE9PSAtMSAmJiBlbmQgPT09IG1zZ2xlbiAmJiBsZW4gPj0gMyAmJiBsZW4gPD0gNCkge1xuICAgICAgICAgIHN0ciA9IHRoYXQuZGF0YS50ZXh0LnNsaWNlKDAsIHN0YXJ0KVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHN0ciA9IHRoYXQuZGF0YS50ZXh0LnNsaWNlKDAsIG1zZ2xlbilcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgdGhpcy50ZXh0ID0gc3RyXG4gICAgICBjb25zdCBwdXNoTXNnID0gdGhpcy5tZXRob2RzLnB1c2hNc2cuYmluZCh0aGlzKVxuICAgICAgdmFyIHRleHQgPSBSLnRyaW0odGhpcy50ZXh0KVxuICAgICAgdGhpcy50ZXh0ID0gJydcbiAgICAgIGlmICh0ZXh0Lmxlbmd0aCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIGNvbnN0IG1zZyA9IGF3YWl0IHRoaXMuY2hhdHJvb20uc2VuZFRleHQoe1xuICAgICAgICAgICAgdGV4dFxuICAgICAgICAgIH0pXG4gICAgICAgICAgdGhpcy50ZXh0ID0gJydcbiAgICAgICAgICBwdXNoTXNnKG1zZylcbiAgICAgICAgICB0aGlzLnNob3cgPSAnZW1vamlfbGlzdCdcbiAgICAgICAgICB0aGlzLnNob3dlbSA9ICdvcGVyYXRpb24nXG4gICAgICAgICAgdGhpcy4kYXBwbHkoKVxuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgbG9nLmVycm9yKHtcbiAgICAgICAgICAgIHBhZ2U6ICdjaGF0cm9vbScsXG4gICAgICAgICAgICBvcHI6ICdzZW5kVGV4dCcsXG4gICAgICAgICAgICBpbmZvOiBlXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG4gICAgY2hhbmdlTmF2IChlKSB7XG4gICAgICBjb25zb2xlLmxvZyhlKVxuICAgICAgdGhpcy5jdXJyZW50TmF2ID0gZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQuaW5kZXhcbiAgICAgIHRoaXMuJGFwcGx5KClcbiAgICB9LFxuICAgIGFzeW5jIGNob29zZUltYWdlKCkge1xuICAgICAgLy8g6L+b6KGM5Zu+54mH6YCJ5oup5bm25LiK5LygXG4gICAgICBjb25zdCBwdXNoTXNnID0gdGhpcy5tZXRob2RzLnB1c2hNc2cuYmluZCh0aGlzKVxuICAgICAgY29uc3QgcmVzID0gYXdhaXQgd2VweS5jaG9vc2VJbWFnZSh7XG4gICAgICAgIGNvdW50OiAxXG4gICAgICB9KVxuXG4gICAgICB0cnkge1xuICAgICAgICBjb25zdCBmaWxlID0gYXdhaXQgdGhpcy5jaGF0cm9vbS5wcmV2aWV3RmlsZSh7XG4gICAgICAgICAgdHlwZTogJ2ltYWdlJyxcbiAgICAgICAgICB3eEZpbGVQYXRoOiByZXMudGVtcEZpbGVQYXRoc1swXVxuICAgICAgICB9KVxuICAgICAgICBjb25zdCBtc2cgPSBhd2FpdCB0aGlzLmNoYXRyb29tLnNlbmRGaWxlKHtcbiAgICAgICAgICB0eXBlOiAnaW1hZ2UnLFxuICAgICAgICAgIGZpbGU6IGZpbGVcbiAgICAgICAgfSlcbiAgICAgICAgcHVzaE1zZyhtc2cpXG4gICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBsb2cuZXJyb3Ioe1xuICAgICAgICAgIHBhZ2U6ICdjaGF0cm9vbScsXG4gICAgICAgICAgb3ByOiAnc2VuZEZpbGUnLFxuICAgICAgICAgIGluZm86IGVycm9yXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfSxcbiAgICBhc3luYyBzZW5kKCkge1xuICAgICAgLy8gPyB3aHkgYmluZFxuICAgICAgY29uc3QgcHVzaE1zZyA9IHRoaXMubWV0aG9kcy5wdXNoTXNnLmJpbmQodGhpcylcbiAgICAgIGNvbnN0IHRleHQgPSBSLnRyaW0odGhpcy50ZXh0KVxuICAgICAgdGhpcy50ZXh0ID0gJydcbiAgICAgIGlmICh0ZXh0Lmxlbmd0aCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIGNvbnN0IG1zZyA9IGF3YWl0IHRoaXMuY2hhdHJvb20uc2VuZFRleHQoe1xuICAgICAgICAgICAgdGV4dFxuICAgICAgICAgIH0pXG4gICAgICAgICAgdGhpcy50ZXh0ID0gJydcbiAgICAgICAgICBwdXNoTXNnKG1zZylcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgIGxvZy5lcnJvcih7XG4gICAgICAgICAgICBwYWdlOiAnY2hhdHJvb20nLFxuICAgICAgICAgICAgb3ByOiAnc2VuZFRleHQnLFxuICAgICAgICAgICAgaW5mbzogZVxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuICAgIHNldFRleHQoZSkge1xuICAgICAgdGhpcy50ZXh0ID0gZS5kZXRhaWwudmFsdWVcbiAgICB9LFxuICAgIHB1c2hNc2c6IGZ1bmN0aW9uIChtc2dzKSB7XG4gICAgICBjb25zdCB7IHJlZnJlc2hNc2dzIH0gPSB0aGlzLm1ldGhvZHNcbiAgICAgIGlmICghQXJyYXkuaXNBcnJheShtc2dzKSkge1xuICAgICAgICBtc2dzID0gW21zZ3NdXG4gICAgICB9XG4gICAgICBjb25zb2xlLmxvZygn5bCx5piv6L+Z5Liq5Zu+JylcbiAgICAgIG1zZ3MgPSBtc2dzLm1hcChtc2cgPT4ge1xuICAgICAgICBpZiAobXNnLnR5cGUgPT09ICd0ZXh0Jykge1xuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBlbWppOiBGYWNlSU0uZGVmYXVsdC5wYXJzZUVtb2ppKG1zZy50ZXh0LnJlcGxhY2UoL1xcbi9tZywgJycpKSxcbiAgICAgICAgICAgIGNoYXRyb29tSWQ6IG1zZy5jaGF0cm9vbUlkLFxuICAgICAgICAgICAgZmxvdzogbXNnLmZsb3csXG4gICAgICAgICAgICBmcm9tOiBtc2cuZnJvbSxcbiAgICAgICAgICAgIGZyb21BdmF0YXI6IG1zZy5mcm9tQXZhdGFyLFxuICAgICAgICAgICAgZnJvbUNsaWVudFR5cGU6IG1zZy5mcm9tQ2xpZW50VHlwZSxcbiAgICAgICAgICAgIGZyb21DdXN0b206IG1zZy5mcm9tQ3VzdG9tLFxuICAgICAgICAgICAgZnJvbU5pY2s6IG1zZy5mcm9tTmljayxcbiAgICAgICAgICAgIGlkQ2xpZW50OiBtc2cuaWRDbGllbnQsXG4gICAgICAgICAgICByZXNlbmQ6IG1zZy5yZXNlbmQsXG4gICAgICAgICAgICBzdGF0dXM6IG1zZy5zdGF0dXMsXG4gICAgICAgICAgICB0ZXh0OiBtc2cudGV4dCxcbiAgICAgICAgICAgIHRpbWU6IG1zZy50aW1lLFxuICAgICAgICAgICAgdHlwZTogbXNnLnR5cGUsXG4gICAgICAgICAgICB1c2VyVXBkYXRlVGltZTogbXNnLnVzZXJVcGRhdGVUaW1lXG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiBtc2dcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICAgIGNvbnNvbGUubG9nKG1zZ3MpXG4gICAgICBjb25zdCByb29tSWQgPSBtc2dzWzBdLmNoYXRyb29tSWQgfHwgdGhpcy5yb29tSWRcbiAgICAgIGNvbnN0IG1lcmdlZCA9IFsuLi50aGlzLm1zZ3MsIC4uLm1zZ3NdXG4gICAgICByZWZyZXNoTXNncyhyb29tSWQsIG1lcmdlZClcbiAgICAgIHRoaXMuc2VuZGVkID0gdHJ1ZVxuICAgICAgdGhpcy4kYXBwbHkoKVxuICAgIH0sXG4gICAgaGFuZGxlRm9jdXMoKSB7XG4gICAgICB0aGlzLnNlbmRlZCA9IGZhbHNlXG4gICAgfVxuICB9XG5cbiAgYXN5bmMgb25Mb2FkKG9wdGlvbnMpIHtcbiAgICBjb25zdCB7IGlkIH0gPSBvcHRpb25zXG4gICAgdGhpcy5yb29tSWQgPSBpZFxuICAgIGNvbnN0IHsgcGsgfSA9IG9wdGlvbnNcbiAgICBjb25zdCByb29tSW5mbyA9IGF3YWl0IGNoYXRyb29tQXBpLmdldE9uZUJ5SWQocGspXG4gICAgdGhpcy5yb29tRGF0YSA9IHJvb21JbmZvXG4gICAgY29uc3QgcHVzaE1zZyA9IHRoaXMubWV0aG9kcy5wdXNoTXNnLmJpbmQodGhpcylcbiAgICBjb25zdCBhcHBseSA9IHRoaXMuJGFwcGx5LmJpbmQodGhpcylcbiAgICBjb25zdCBoYXNNc2dzID0gdGhpcy5tc2dzLmxlbmd0aCA+IDBcbiAgICB0cnkge1xuICAgICAgY29uc3QgeyBuaW1Ub2tlbiwgYWNjaWQgfSA9IHRoaXMudXNlclxuICAgICAgY29uc3Qgcm9vbUlkID0gdGhpcy5yb29tSWRcbiAgICAgIGNvbnN0IGFkZHJlc3MgPSBhd2FpdCBOSU0uZ2V0Q2hhdHJvb21BZGRyZXNzZXMoYWNjaWQsIHJvb21JZClcbiAgICAgIGNvbnN0IGNoYXRyb29tID0gQ2hhdHJvb21TREsuZ2V0SW5zdGFuY2Uoe1xuICAgICAgICBkZWJ1ZzogdHJ1ZSxcbiAgICAgICAgYWNjb3VudDogYWNjaWQsXG4gICAgICAgIHRva2VuOiBuaW1Ub2tlbixcbiAgICAgICAgY2hhdHJvb21JZDogcm9vbUlkLFxuICAgICAgICBjaGF0cm9vbUFkZHJlc3NlczogYWRkcmVzcyxcbiAgICAgICAgb25tc2dzOiBmdW5jdGlvbihtc2dzKSB7XG4gICAgICAgICAgbG9nLmluZm8oe1xuICAgICAgICAgICAgcGFnZTogJ2NoYXRyb29tJyxcbiAgICAgICAgICAgIG9wcjogJ2luaXRpYWxpemUgc2RrIGluc3RhbmNlJyxcbiAgICAgICAgICAgIGluZm86IG1zZ3NcbiAgICAgICAgICB9KVxuICAgICAgICAgIHB1c2hNc2cobXNncy5tYXAobXNnID0+IHtcbiAgICAgICAgICAgIGlmIChtc2cudHlwZSA9PT0gJ25vdGlmaWNhdGlvbicpIHtcbiAgICAgICAgICAgICAgLy8g6L+b5YWl6IGK5aSp5a6k5L+h5oGvXG4gICAgICAgICAgICAgIGNvbnN0IHRpcCA9IFIuY29uZChbXG4gICAgICAgICAgICAgICAgW1IuZXF1YWxzKCdtZW1iZXJFbnRlcicpLCBSLmFsd2F5cygn5Yqg5YWl6IGK5aSp5a6kJyldLFxuICAgICAgICAgICAgICAgIFtSLmVxdWFscygnbWVtYmVyRXhpdCcpLCBSLmFsd2F5cygn6YCA5Ye66IGK5aSp5a6kJyldXG4gICAgICAgICAgICAgIF0pKG1zZy5hdHRhY2gudHlwZSlcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coYCR7bXNnLmF0dGFjaC5mcm9tTmlja30gJHt0aXB9YClcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHJldHVybiBtc2dcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KSlcbiAgICAgICAgfSxcbiAgICAgICAgYXN5bmMgb25jb25uZWN0KCkge1xuICAgICAgICAgIGxvZy5pbmZvKHtcbiAgICAgICAgICAgIHBhZ2U6ICdjaGF0cm9vbScsXG4gICAgICAgICAgICBvcHI6ICdpbml0aWFsaXplIHNkayBpbnN0YW5jZScsXG4gICAgICAgICAgICBpbmZvOiAnW05JTSBDSEFUUk9PTV0gY29ubmVjdGVkJ1xuICAgICAgICAgIH0pXG4gICAgICAgICAgaWYgKCFoYXNNc2dzKSB7XG4gICAgICAgICAgICB3ZXB5LnNob3dMb2FkaW5nKClcbiAgICAgICAgICAgIC8vIOaLieWPluacgOi/kSAxMDAg5p2h5L+h5oGvXG4gICAgICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBjaGF0cm9vbS5nZXRIaXN0b3J5TXNncyh7XG4gICAgICAgICAgICAgIGxpbWl0OiAxMDBcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBjb25zdCBtc2dzID0gcmVzLm1zZ3MuZmlsdGVyKG1zZyA9PiBtc2cudHlwZSAhPT0gJ25vdGlmaWNhdGlvbicgJiYgbXNnLnR5cGUgIT09ICd0aXAnKVxuLy8gICAgICAgICAgICBjb25zb2xlLmxvZygnaGlzdG9yeSBtZXNzYWdlcycsIG1zZ3MpXG5cbiAgICAgICAgICAgIC8vIOWIt+aWsOa2iOaBr1xuICAgICAgICAgICAgcHVzaE1zZyhtc2dzIHx8IFtdKVxuICAgICAgICAgICAgYXBwbHkoKVxuICAgICAgICAgICAgd2VweS5oaWRlTG9hZGluZygpXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgdGhpcy5jaGF0cm9vbSA9IGNoYXRyb29tXG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgbG9nLmVycm9yKHtcbiAgICAgICAgcGFnZTogJ2NoYXRyb29tJyxcbiAgICAgICAgb3ByOiAnZ2V0SW5zdGFuY2UnLFxuICAgICAgICBpbmZvOiBlXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4vLyAgYXN5bmMgb25TaG93KCkge1xuLy9cbi8vICB9XG59XG4iXX0=