'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _extends2 = require('./../npm/babel-runtime/helpers/extends.js');

var _extends3 = _interopRequireDefault(_extends2);

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
        var id, roomInfo, pushMsg, apply, hasMsgs, _user, nimToken, accid, roomId, address, chatroom;

        return _regenerator2.default.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                id = options.id;

                this.roomId = id;
                //    const { pk } = options
                _context5.next = 4;
                return chatroomApi.getOneById(id);

              case 4:
                roomInfo = _context5.sent;

                this.roomData = roomInfo;
                pushMsg = this.methods.pushMsg.bind(this);
                apply = this.$apply.bind(this);
                hasMsgs = this.msgs.length > 0;
                _context5.prev = 9;
                _user = this.user, nimToken = _user.nimToken, accid = _user.accid;
                roomId = this.roomId;
                _context5.next = 14;
                return _nim2.default.getChatroomAddresses(accid, roomId);

              case 14:
                address = _context5.sent;
                chatroom = _chatroom2.default.getInstance({
                  //        debug: true,
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
                    console.log('收到聊天室信息', msgs);
                    pushMsg(msgs.map(function (msg) {
                      if (msg.type === 'notification') {
                        console.log('这个hhh', msg.attach);
                        // 进入聊天室信息
                        var tip = _ramda2.default.cond([[_ramda2.default.equals('memberEnter'), _ramda2.default.always('加入聊天室')], [_ramda2.default.equals('memberExit'), _ramda2.default.always('退出聊天室')]])(msg.attach.type);
                        console.log(msg.attach.fromNick + ' ' + tip);
                        return (0, _extends3.default)({}, msg, {
                          type: 'text',
                          text: tip
                        });
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
                              }).reverse();
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
                _context5.next = 22;
                break;

              case 19:
                _context5.prev = 19;
                _context5.t0 = _context5['catch'](9);

                log.error({
                  page: 'chatroom',
                  opr: 'getInstance',
                  info: _context5.t0
                });

              case 22:
              case 'end':
                return _context5.stop();
            }
          }
        }, _callee5, this, [[9, 19]]);
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoYXRyb29tLmpzIl0sIm5hbWVzIjpbImxvZyIsImNoYXRyb29tQXBpIiwiQ2hhdHJvb20iLCJ1c2VyIiwic3RhdGUiLCJjb21tb24iLCJuaW0iLCJtc2dzIiwiY2hhdHJvb20iLCJyb29tSWQiLCJpbnRvVmlldyIsImxhc3QiLCJpZENsaWVudCIsInJlZnJlc2hNc2dzIiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsImRhdGEiLCJuYXZzIiwiY3VycmVudE5hdiIsInNlbmRlZCIsInRleHQiLCJyb29tRGF0YSIsIm5hbWUiLCJpbmRpY2F0b3JEb3RzIiwiYXV0b3BsYXkiLCJpbnRlcnZhbCIsImR1cmF0aW9uIiwic2hvdyIsInNob3dlbSIsImVtb2ppIiwiZGVmYXVsdCIsIkVtb2ppIiwiZW1vamlPYmoiLCJFbW9qaU9iaiIsIm1ldGhvZHMiLCJvcGVuRW1vamkiLCJlIiwiJGFwcGx5Iiwic2VuZEVtb2ppIiwiZXZlbnQiLCJ0aGF0IiwidGFyZ2V0IiwiZGF0YXNldCIsIm1zZ2xlbiIsImxlbmd0aCIsInN0ciIsInN0YXJ0IiwibGFzdEluZGV4T2YiLCJlbmQiLCJsZW4iLCJzbGljZSIsInB1c2hNc2ciLCJiaW5kIiwidHJpbSIsInNlbmRUZXh0IiwibXNnIiwiZXJyb3IiLCJwYWdlIiwib3ByIiwiaW5mbyIsImNoYW5nZU5hdiIsImNvbnNvbGUiLCJjdXJyZW50VGFyZ2V0IiwiaW5kZXgiLCJjaG9vc2VJbWFnZSIsImNvdW50IiwicmVzIiwicHJldmlld0ZpbGUiLCJ0eXBlIiwid3hGaWxlUGF0aCIsInRlbXBGaWxlUGF0aHMiLCJmaWxlIiwic2VuZEZpbGUiLCJzZW5kIiwic2V0VGV4dCIsImRldGFpbCIsInZhbHVlIiwiQXJyYXkiLCJpc0FycmF5IiwibWFwIiwiZW1qaSIsInBhcnNlRW1vamkiLCJyZXBsYWNlIiwiY2hhdHJvb21JZCIsImZsb3ciLCJmcm9tIiwiZnJvbUF2YXRhciIsImZyb21DbGllbnRUeXBlIiwiZnJvbUN1c3RvbSIsImZyb21OaWNrIiwicmVzZW5kIiwic3RhdHVzIiwidGltZSIsInVzZXJVcGRhdGVUaW1lIiwibWVyZ2VkIiwiaGFuZGxlRm9jdXMiLCJvcHRpb25zIiwiaWQiLCJnZXRPbmVCeUlkIiwicm9vbUluZm8iLCJhcHBseSIsImhhc01zZ3MiLCJuaW1Ub2tlbiIsImFjY2lkIiwiZ2V0Q2hhdHJvb21BZGRyZXNzZXMiLCJhZGRyZXNzIiwiZ2V0SW5zdGFuY2UiLCJhY2NvdW50IiwidG9rZW4iLCJjaGF0cm9vbUFkZHJlc3NlcyIsIm9ubXNncyIsImF0dGFjaCIsInRpcCIsImNvbmQiLCJlcXVhbHMiLCJhbHdheXMiLCJvbmNvbm5lY3QiLCJzaG93TG9hZGluZyIsImdldEhpc3RvcnlNc2dzIiwibGltaXQiLCJmaWx0ZXIiLCJyZXZlcnNlIiwiaGlkZUxvYWRpbmciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7SUFBWUEsRzs7QUFDWjs7QUFHQTs7SUFBWUMsVzs7QUFFWjs7Ozs7O0lBa0JxQkMsUSxXQWRwQix3QkFBUTtBQUNQQyxRQUFNO0FBQUEsV0FBU0MsTUFBTUMsTUFBTixDQUFhRixJQUF0QjtBQUFBLEdBREM7QUFFUEcsT0FBSztBQUFBLFdBQVNGLE1BQU1DLE1BQU4sQ0FBYUMsR0FBdEI7QUFBQSxHQUZFO0FBR1BDLFFBQU0sY0FBVUgsS0FBVixFQUFpQjtBQUNyQixXQUFPQSxNQUFNSSxRQUFOLENBQWVELElBQWYsQ0FBb0IsS0FBS0UsTUFBekIsS0FBb0MsRUFBM0M7QUFDRCxHQUxNO0FBTVBDLFlBQVUsa0JBQVNOLEtBQVQsRUFBZ0I7QUFDeEIsUUFBTUcsT0FBT0gsTUFBTUksUUFBTixDQUFlRCxJQUFmLENBQW9CLEtBQUtFLE1BQXpCLEtBQW9DLEVBQWpEO0FBQ0EsUUFBTUUsT0FBTyxnQkFBRUEsSUFBRixDQUFPSixJQUFQLENBQWI7QUFDQSxX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YixJQUErQmIsSUFBSWEsSUFBSixLQUFhLEtBQW5EO0FBQUEsK0JBQWhCLEVBQTBFcUQsT0FBMUUsRUFaQztBQWExQjs7QUFFWTs7QUFDQXRFLHNDQUFRNUMsUUFBUSxFQUFoQjtBQUNBNkY7QUFDQSw2Q0FBS3NCLFdBQUw7O0FBbEJjO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBb0JqQjtBQXBEc0MsaUJBQXhCLEM7O0FBc0RqQixxQkFBS2xILFFBQUwsR0FBZ0JBLFFBQWhCOzs7Ozs7OztBQUVBUixvQkFBSXdELEtBQUosQ0FBVTtBQUNSQyx3QkFBTSxVQURFO0FBRVJDLHVCQUFLLGFBRkc7QUFHUkM7QUFIUSxpQkFBVjs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFRTjtBQUNBO0FBQ0E7Ozs7RUF6UHNDLGVBQUtGLEk7a0JBQXRCdkQsUSIsImZpbGUiOiJjaGF0cm9vbS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcbmltcG9ydCBSIGZyb20gJy4uL2xpYnMvcmFtZGEnXG5pbXBvcnQgQ2hhdHJvb21TREsgZnJvbSAnLi4vdXRpbHMvY2hhdHJvb20nXG5pbXBvcnQgTklNIGZyb20gJy4uL3V0aWxzL25pbSdcbmltcG9ydCBGYWNlSU0gZnJvbSAnLi4vdXRpbHMvV2ViSU0nXG5pbXBvcnQgKiBhcyBsb2cgZnJvbSAnLi4vdXRpbHMvbG9nJ1xuaW1wb3J0IHtcbiAgcmVmcmVzaE1zZ3Ncbn0gZnJvbSAnLi4vYWN0aW9ucy9jaGF0cm9vbSdcbmltcG9ydCAqIGFzIGNoYXRyb29tQXBpIGZyb20gJy4uL2FwaXMvY2hhdHJvb20nXG5cbmltcG9ydCB7XG4gIGNvbm5lY3Rcbn0gZnJvbSAnd2VweS1yZWR1eCdcblxuQGNvbm5lY3Qoe1xuICB1c2VyOiBzdGF0ZSA9PiBzdGF0ZS5jb21tb24udXNlcixcbiAgbmltOiBzdGF0ZSA9PiBzdGF0ZS5jb21tb24ubmltLFxuICBtc2dzOiBmdW5jdGlvbiAoc3RhdGUpIHtcbiAgICByZXR1cm4gc3RhdGUuY2hhdHJvb20ubXNnc1t0aGlzLnJvb21JZF0gfHwgW11cbiAgfSxcbiAgaW50b1ZpZXc6IGZ1bmN0aW9uKHN0YXRlKSB7XG4gICAgY29uc3QgbXNncyA9IHN0YXRlLmNoYXRyb29tLm1zZ3NbdGhpcy5yb29tSWRdIHx8IFtdXG4gICAgY29uc3QgbGFzdCA9IFIubGFzdChtc2dzKVxuICAgIHJldHVybiBsYXN0ID8gbGFzdC5pZENsaWVudCA6ICcnXG4gIH1cbn0sIHtcbiAgcmVmcmVzaE1zZ3Ncbn0pXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDaGF0cm9vbSBleHRlbmRzIHdlcHkucGFnZSB7XG4gIGNvbmZpZyA9IHtcbiAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn6IGK5aSp5a6kJ1xuICB9XG5cbiAgZGF0YSA9IHtcbiAgICBuYXZzOiBbJ+iBiuWkqScsICfor6bmg4UnXSxcbiAgICBjdXJyZW50TmF2OiAwLFxuICAgIGNoYXRyb29tOiBudWxsLFxuICAgIHJvb21JZDogbnVsbCxcbiAgICBzZW5kZWQ6IGZhbHNlLFxuICAgIHRleHQ6ICcnLFxuICAgIHJvb21EYXRhOiB7XG4gICAgICBuYW1lOiAn5Yqg6L295LitLi4uJ1xuICAgIH0sXG4gICAgaW5kaWNhdG9yRG90czogdHJ1ZSxcbiAgICBhdXRvcGxheTogZmFsc2UsXG4gICAgaW50ZXJ2YWw6IDUwMDAsXG4gICAgZHVyYXRpb246IDEwMDAsXG4gICAgc2hvdzogJ2Vtb2ppX2xpc3QnLFxuICAgIHNob3dlbTogJ29wZXJhdGlvbicsXG4gICAgZW1vamk6IEZhY2VJTS5kZWZhdWx0LkVtb2ppLFxuICAgIGVtb2ppT2JqOiBGYWNlSU0uZGVmYXVsdC5FbW9qaU9ialxuICB9XG5cbiAgbWV0aG9kcyA9IHtcbiAgICBvcGVuRW1vamkgKGUpIHtcbiAgICAgIGlmICh0aGlzLnNob3cgPT09ICdzaG93RW1vamknKSB7XG4gICAgICAgIHRoaXMuc2hvdyA9ICdlbW9qaV9saXN0J1xuICAgICAgICB0aGlzLnNob3dlbSA9ICdvcGVyYXRpb24nXG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnNob3cgPSAnc2hvd0Vtb2ppJ1xuICAgICAgICB0aGlzLnNob3dlbSA9ICdzaG93RW1vamlPcGVyYXRpb24nXG4gICAgICB9XG4gICAgICB0aGlzLiRhcHBseSgpXG4gICAgfSxcbiAgICBhc3luYyBzZW5kRW1vamkgKGV2ZW50KSB7XG4gICAgICB2YXIgdGhhdCA9IHRoaXNcbiAgICAgIHZhciBlbW9qaSA9IGV2ZW50LnRhcmdldC5kYXRhc2V0LmVtb2ppXG4gICAgICB2YXIgbXNnbGVuID0gdGhhdC5kYXRhLnRleHQubGVuZ3RoIC0gMVxuICAgICAgaWYgKGVtb2ppICYmIGVtb2ppICE9PSAnW2RlbF0nKSB7XG4gICAgICAgIHZhciBzdHIgPSB0aGF0LmRhdGEudGV4dCArIGVtb2ppXG4gICAgICB9IGVsc2UgaWYgKGVtb2ppID09PSAnW2RlbF0nKSB7XG4gICAgICAgIHZhciBzdGFydCA9IHRoYXQuZGF0YS50ZXh0Lmxhc3RJbmRleE9mKCdbJylcbiAgICAgICAgdmFyIGVuZCA9IHRoYXQuZGF0YS50ZXh0Lmxhc3RJbmRleE9mKCddJylcbiAgICAgICAgdmFyIGxlbiA9IGVuZCAtIHN0YXJ0XG4gICAgICAgIGlmIChlbmQgIT09IC0xICYmIGVuZCA9PT0gbXNnbGVuICYmIGxlbiA+PSAzICYmIGxlbiA8PSA0KSB7XG4gICAgICAgICAgc3RyID0gdGhhdC5kYXRhLnRleHQuc2xpY2UoMCwgc3RhcnQpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgc3RyID0gdGhhdC5kYXRhLnRleHQuc2xpY2UoMCwgbXNnbGVuKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICB0aGlzLnRleHQgPSBzdHJcbiAgICAgIGNvbnN0IHB1c2hNc2cgPSB0aGlzLm1ldGhvZHMucHVzaE1zZy5iaW5kKHRoaXMpXG4gICAgICB2YXIgdGV4dCA9IFIudHJpbSh0aGlzLnRleHQpXG4gICAgICB0aGlzLnRleHQgPSAnJ1xuICAgICAgaWYgKHRleHQubGVuZ3RoKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgY29uc3QgbXNnID0gYXdhaXQgdGhpcy5jaGF0cm9vbS5zZW5kVGV4dCh7XG4gICAgICAgICAgICB0ZXh0XG4gICAgICAgICAgfSlcbiAgICAgICAgICB0aGlzLnRleHQgPSAnJ1xuICAgICAgICAgIHB1c2hNc2cobXNnKVxuICAgICAgICAgIHRoaXMuc2hvdyA9ICdlbW9qaV9saXN0J1xuICAgICAgICAgIHRoaXMuc2hvd2VtID0gJ29wZXJhdGlvbidcbiAgICAgICAgICB0aGlzLiRhcHBseSgpXG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICBsb2cuZXJyb3Ioe1xuICAgICAgICAgICAgcGFnZTogJ2NoYXRyb29tJyxcbiAgICAgICAgICAgIG9wcjogJ3NlbmRUZXh0JyxcbiAgICAgICAgICAgIGluZm86IGVcbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcbiAgICBjaGFuZ2VOYXYgKGUpIHtcbiAgICAgIGNvbnNvbGUubG9nKGUpXG4gICAgICB0aGlzLmN1cnJlbnROYXYgPSBlLmN1cnJlbnRUYXJnZXQuZGF0YXNldC5pbmRleFxuICAgICAgdGhpcy4kYXBwbHkoKVxuICAgIH0sXG4gICAgYXN5bmMgY2hvb3NlSW1hZ2UoKSB7XG4gICAgICAvLyDov5vooYzlm77niYfpgInmi6nlubbkuIrkvKBcbiAgICAgIGNvbnN0IHB1c2hNc2cgPSB0aGlzLm1ldGhvZHMucHVzaE1zZy5iaW5kKHRoaXMpXG4gICAgICBjb25zdCByZXMgPSBhd2FpdCB3ZXB5LmNob29zZUltYWdlKHtcbiAgICAgICAgY291bnQ6IDFcbiAgICAgIH0pXG5cbiAgICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IGZpbGUgPSBhd2FpdCB0aGlzLmNoYXRyb29tLnByZXZpZXdGaWxlKHtcbiAgICAgICAgICB0eXBlOiAnaW1hZ2UnLFxuICAgICAgICAgIHd4RmlsZVBhdGg6IHJlcy50ZW1wRmlsZVBhdGhzWzBdXG4gICAgICAgIH0pXG4gICAgICAgIGNvbnN0IG1zZyA9IGF3YWl0IHRoaXMuY2hhdHJvb20uc2VuZEZpbGUoe1xuICAgICAgICAgIHR5cGU6ICdpbWFnZScsXG4gICAgICAgICAgZmlsZTogZmlsZVxuICAgICAgICB9KVxuICAgICAgICBwdXNoTXNnKG1zZylcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGxvZy5lcnJvcih7XG4gICAgICAgICAgcGFnZTogJ2NoYXRyb29tJyxcbiAgICAgICAgICBvcHI6ICdzZW5kRmlsZScsXG4gICAgICAgICAgaW5mbzogZXJyb3JcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9LFxuICAgIGFzeW5jIHNlbmQoKSB7XG4gICAgICAvLyA/IHdoeSBiaW5kXG4gICAgICBjb25zdCBwdXNoTXNnID0gdGhpcy5tZXRob2RzLnB1c2hNc2cuYmluZCh0aGlzKVxuICAgICAgY29uc3QgdGV4dCA9IFIudHJpbSh0aGlzLnRleHQpXG4gICAgICB0aGlzLnRleHQgPSAnJ1xuICAgICAgaWYgKHRleHQubGVuZ3RoKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgY29uc3QgbXNnID0gYXdhaXQgdGhpcy5jaGF0cm9vbS5zZW5kVGV4dCh7XG4gICAgICAgICAgICB0ZXh0XG4gICAgICAgICAgfSlcbiAgICAgICAgICB0aGlzLnRleHQgPSAnJ1xuICAgICAgICAgIHB1c2hNc2cobXNnKVxuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgbG9nLmVycm9yKHtcbiAgICAgICAgICAgIHBhZ2U6ICdjaGF0cm9vbScsXG4gICAgICAgICAgICBvcHI6ICdzZW5kVGV4dCcsXG4gICAgICAgICAgICBpbmZvOiBlXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG4gICAgc2V0VGV4dChlKSB7XG4gICAgICB0aGlzLnRleHQgPSBlLmRldGFpbC52YWx1ZVxuICAgIH0sXG4gICAgcHVzaE1zZzogZnVuY3Rpb24gKG1zZ3MpIHtcbiAgICAgIGNvbnN0IHsgcmVmcmVzaE1zZ3MgfSA9IHRoaXMubWV0aG9kc1xuICAgICAgaWYgKCFBcnJheS5pc0FycmF5KG1zZ3MpKSB7XG4gICAgICAgIG1zZ3MgPSBbbXNnc11cbiAgICAgIH1cbiAgICAgIGNvbnNvbGUubG9nKCflsLHmmK/ov5nkuKrlm74nKVxuICAgICAgbXNncyA9IG1zZ3MubWFwKG1zZyA9PiB7XG4gICAgICAgIGlmIChtc2cudHlwZSA9PT0gJ3RleHQnKSB7XG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGVtamk6IEZhY2VJTS5kZWZhdWx0LnBhcnNlRW1vamkobXNnLnRleHQucmVwbGFjZSgvXFxuL21nLCAnJykpLFxuICAgICAgICAgICAgY2hhdHJvb21JZDogbXNnLmNoYXRyb29tSWQsXG4gICAgICAgICAgICBmbG93OiBtc2cuZmxvdyxcbiAgICAgICAgICAgIGZyb206IG1zZy5mcm9tLFxuICAgICAgICAgICAgZnJvbUF2YXRhcjogbXNnLmZyb21BdmF0YXIsXG4gICAgICAgICAgICBmcm9tQ2xpZW50VHlwZTogbXNnLmZyb21DbGllbnRUeXBlLFxuICAgICAgICAgICAgZnJvbUN1c3RvbTogbXNnLmZyb21DdXN0b20sXG4gICAgICAgICAgICBmcm9tTmljazogbXNnLmZyb21OaWNrLFxuICAgICAgICAgICAgaWRDbGllbnQ6IG1zZy5pZENsaWVudCxcbiAgICAgICAgICAgIHJlc2VuZDogbXNnLnJlc2VuZCxcbiAgICAgICAgICAgIHN0YXR1czogbXNnLnN0YXR1cyxcbiAgICAgICAgICAgIHRleHQ6IG1zZy50ZXh0LFxuICAgICAgICAgICAgdGltZTogbXNnLnRpbWUsXG4gICAgICAgICAgICB0eXBlOiBtc2cudHlwZSxcbiAgICAgICAgICAgIHVzZXJVcGRhdGVUaW1lOiBtc2cudXNlclVwZGF0ZVRpbWVcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIG1zZ1xuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgY29uc29sZS5sb2cobXNncylcbiAgICAgIGNvbnN0IHJvb21JZCA9IG1zZ3NbMF0uY2hhdHJvb21JZCB8fCB0aGlzLnJvb21JZFxuICAgICAgY29uc3QgbWVyZ2VkID0gWy4uLnRoaXMubXNncywgLi4ubXNnc11cbiAgICAgIHJlZnJlc2hNc2dzKHJvb21JZCwgbWVyZ2VkKVxuICAgICAgdGhpcy5zZW5kZWQgPSB0cnVlXG4gICAgICB0aGlzLiRhcHBseSgpXG4gICAgfSxcbiAgICBoYW5kbGVGb2N1cygpIHtcbiAgICAgIHRoaXMuc2VuZGVkID0gZmFsc2VcbiAgICB9XG4gIH1cblxuICBhc3luYyBvbkxvYWQob3B0aW9ucykge1xuICAgIGNvbnN0IHsgaWQgfSA9IG9wdGlvbnNcbiAgICB0aGlzLnJvb21JZCA9IGlkXG4vLyAgICBjb25zdCB7IHBrIH0gPSBvcHRpb25zXG4gICAgY29uc3Qgcm9vbUluZm8gPSBhd2FpdCBjaGF0cm9vbUFwaS5nZXRPbmVCeUlkKGlkKVxuICAgIHRoaXMucm9vbURhdGEgPSByb29tSW5mb1xuICAgIGNvbnN0IHB1c2hNc2cgPSB0aGlzLm1ldGhvZHMucHVzaE1zZy5iaW5kKHRoaXMpXG4gICAgY29uc3QgYXBwbHkgPSB0aGlzLiRhcHBseS5iaW5kKHRoaXMpXG4gICAgY29uc3QgaGFzTXNncyA9IHRoaXMubXNncy5sZW5ndGggPiAwXG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHsgbmltVG9rZW4sIGFjY2lkIH0gPSB0aGlzLnVzZXJcbiAgICAgIGNvbnN0IHJvb21JZCA9IHRoaXMucm9vbUlkXG4gICAgICBjb25zdCBhZGRyZXNzID0gYXdhaXQgTklNLmdldENoYXRyb29tQWRkcmVzc2VzKGFjY2lkLCByb29tSWQpXG4gICAgICBjb25zdCBjaGF0cm9vbSA9IENoYXRyb29tU0RLLmdldEluc3RhbmNlKHtcbi8vICAgICAgICBkZWJ1ZzogdHJ1ZSxcbiAgICAgICAgYWNjb3VudDogYWNjaWQsXG4gICAgICAgIHRva2VuOiBuaW1Ub2tlbixcbiAgICAgICAgY2hhdHJvb21JZDogcm9vbUlkLFxuICAgICAgICBjaGF0cm9vbUFkZHJlc3NlczogYWRkcmVzcyxcbiAgICAgICAgb25tc2dzOiBmdW5jdGlvbihtc2dzKSB7XG4gICAgICAgICAgbG9nLmluZm8oe1xuICAgICAgICAgICAgcGFnZTogJ2NoYXRyb29tJyxcbiAgICAgICAgICAgIG9wcjogJ2luaXRpYWxpemUgc2RrIGluc3RhbmNlJyxcbiAgICAgICAgICAgIGluZm86IG1zZ3NcbiAgICAgICAgICB9KVxuICAgICAgICAgIGNvbnNvbGUubG9nKCfmlLbliLDogYrlpKnlrqTkv6Hmga8nLCBtc2dzKVxuICAgICAgICAgIHB1c2hNc2cobXNncy5tYXAobXNnID0+IHtcbiAgICAgICAgICAgIGlmIChtc2cudHlwZSA9PT0gJ25vdGlmaWNhdGlvbicpIHtcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coJ+i/meS4qmhoaCcsIG1zZy5hdHRhY2gpXG4gICAgICAgICAgICAgIC8vIOi/m+WFpeiBiuWkqeWupOS/oeaBr1xuICAgICAgICAgICAgICBjb25zdCB0aXAgPSBSLmNvbmQoW1xuICAgICAgICAgICAgICAgIFtSLmVxdWFscygnbWVtYmVyRW50ZXInKSwgUi5hbHdheXMoJ+WKoOWFpeiBiuWkqeWupCcpXSxcbiAgICAgICAgICAgICAgICBbUi5lcXVhbHMoJ21lbWJlckV4aXQnKSwgUi5hbHdheXMoJ+mAgOWHuuiBiuWkqeWupCcpXVxuICAgICAgICAgICAgICBdKShtc2cuYXR0YWNoLnR5cGUpXG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKGAke21zZy5hdHRhY2guZnJvbU5pY2t9ICR7dGlwfWApXG4gICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgLi4ubXNnLFxuICAgICAgICAgICAgICAgIHR5cGU6ICd0ZXh0JyxcbiAgICAgICAgICAgICAgICB0ZXh0OiB0aXBcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgcmV0dXJuIG1zZ1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pKVxuICAgICAgICB9LFxuICAgICAgICBhc3luYyBvbmNvbm5lY3QoKSB7XG4gICAgICAgICAgbG9nLmluZm8oe1xuICAgICAgICAgICAgcGFnZTogJ2NoYXRyb29tJyxcbiAgICAgICAgICAgIG9wcjogJ2luaXRpYWxpemUgc2RrIGluc3RhbmNlJyxcbiAgICAgICAgICAgIGluZm86ICdbTklNIENIQVRST09NXSBjb25uZWN0ZWQnXG4gICAgICAgICAgfSlcbiAgICAgICAgICBpZiAoIWhhc01zZ3MpIHtcbiAgICAgICAgICAgIHdlcHkuc2hvd0xvYWRpbmcoKVxuICAgICAgICAgICAgLy8g5ouJ5Y+W5pyA6L+RIDEwMCDmnaHkv6Hmga9cbiAgICAgICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGNoYXRyb29tLmdldEhpc3RvcnlNc2dzKHtcbiAgICAgICAgICAgICAgbGltaXQ6IDEwMFxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIGNvbnN0IG1zZ3MgPSByZXMubXNncy5maWx0ZXIobXNnID0+IG1zZy50eXBlICE9PSAnbm90aWZpY2F0aW9uJyAmJiBtc2cudHlwZSAhPT0gJ3RpcCcpLnJldmVyc2UoKVxuLy8gICAgICAgICAgICBjb25zb2xlLmxvZygnaGlzdG9yeSBtZXNzYWdlcycsIG1zZ3MpXG5cbiAgICAgICAgICAgIC8vIOWIt+aWsOa2iOaBr1xuICAgICAgICAgICAgcHVzaE1zZyhtc2dzIHx8IFtdKVxuICAgICAgICAgICAgYXBwbHkoKVxuICAgICAgICAgICAgd2VweS5oaWRlTG9hZGluZygpXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgdGhpcy5jaGF0cm9vbSA9IGNoYXRyb29tXG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgbG9nLmVycm9yKHtcbiAgICAgICAgcGFnZTogJ2NoYXRyb29tJyxcbiAgICAgICAgb3ByOiAnZ2V0SW5zdGFuY2UnLFxuICAgICAgICBpbmZvOiBlXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4vLyAgYXN5bmMgb25TaG93KCkge1xuLy9cbi8vICB9XG59XG4iXX0=