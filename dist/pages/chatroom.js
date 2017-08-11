'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

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
exports.default = Chatroom;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoYXRyb29tLmpzIl0sIm5hbWVzIjpbImxvZyIsImNoYXRyb29tQXBpIiwiQ2hhdHJvb20iLCJ1c2VyIiwic3RhdGUiLCJjb21tb24iLCJuaW0iLCJtc2dzIiwiY2hhdHJvb20iLCJyb29tSWQiLCJpbnRvVmlldyIsImxhc3QiLCJpZENsaWVudCIsInJlZnJlc2hNc2dzIiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsImRhdGEiLCJuYXZzIiwiY3VycmVudE5hdiIsInNlbmRlZCIsInRleHQiLCJyb29tRGF0YSIsIm5hbWUiLCJpbmRpY2F0b3JEb3RzIiwiYXV0b3BsYXkiLCJpbnRlcnZhbCIsImR1cmF0aW9uIiwic2hvdyIsInNob3dlbSIsImVtb2ppIiwiZGVmYXVsdCIsIkVtb2ppIiwiZW1vamlPYmoiLCJFbW9qaU9iaiIsIm1ldGhvZHMiLCJvcGVuRW1vamkiLCJlIiwiJGFwcGx5Iiwic2VuZEVtb2ppIiwiZXZlbnQiLCJ0aGF0IiwidGFyZ2V0IiwiZGF0YXNldCIsIm1zZ2xlbiIsImxlbmd0aCIsInN0ciIsInN0YXJ0IiwibGFzdEluZGV4T2YiLCJlbmQiLCJsZW4iLCJzbGljZSIsInB1c2hNc2ciLCJiaW5kIiwidHJpbSIsInNlbmRUZXh0IiwibXNnIiwiZXJyb3IiLCJwYWdlIiwib3ByIiwiaW5mbyIsImNoYW5nZU5hdiIsImNvbnNvbGUiLCJjdXJyZW50VGFyZ2V0IiwiaW5kZXgiLCJjaG9vc2VJbWFnZSIsImNvdW50IiwicmVzIiwicHJldmlld0ZpbGUiLCJ0eXBlIiwid3hGaWxlUGF0aCIsInRlbXBGaWxlUGF0aHMiLCJmaWxlIiwic2VuZEZpbGUiLCJzZW5kIiwic2V0VGV4dCIsImRldGFpbCIsInZhbHVlIiwiQXJyYXkiLCJpc0FycmF5IiwibWFwIiwiZW1qaSIsInBhcnNlRW1vamkiLCJyZXBsYWNlIiwiY2hhdHJvb21JZCIsImZsb3ciLCJmcm9tIiwiZnJvbUF2YXRhciIsImZyb21DbGllbnRUeXBlIiwiZnJvbUN1c3RvbSIsImZyb21OaWNrIiwicmVzZW5kIiwic3RhdHVzIiwidGltZSIsInVzZXJVcGRhdGVUaW1lIiwibWVyZ2VkIiwiaGFuZGxlRm9jdXMiLCJvcHRpb25zIiwiaWQiLCJwayIsImdldE9uZUJ5SWQiLCJyb29tSW5mbyIsImFwcGx5IiwiaGFzTXNncyIsIm5pbVRva2VuIiwiYWNjaWQiLCJnZXRDaGF0cm9vbUFkZHJlc3NlcyIsImFkZHJlc3MiLCJnZXRJbnN0YW5jZSIsImFjY291bnQiLCJ0b2tlbiIsImNoYXRyb29tQWRkcmVzc2VzIiwib25tc2dzIiwiYXR0YWNoIiwidGlwIiwiY29uZCIsImVxdWFscyIsImFsd2F5cyIsIm9uY29ubmVjdCIsInNob3dMb2FkaW5nIiwiZ2V0SGlzdG9yeU1zZ3MiLCJsaW1pdCIsImZpbHRlciIsInJldmVyc2UiLCJoaWRlTG9hZGluZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOztJQUFZQSxHOztBQUNaOztBQUdBOztJQUFZQyxXOztBQUVaOzs7Ozs7SUFrQnFCQyxRLFdBZHBCLHdCQUFRO0FBQ1BDLFFBQU07QUFBQSxXQUFTQyxNQUFNQyxNQUFOLENBQWFGLElBQXRCO0FBQUEsR0FEQztBQUVQRyxPQUFLO0FBQUEsV0FBU0YsTUFBTUMsTUFBTixDQUFhQyxHQUF0QjtBQUFBLEdBRkU7QUFHUEMsUUFBTSxjQUFVSCxLQUFWLEVBQWlCO0FBQ3JCLFdBQU9BLE1BQU1JLFFBQU4sQ0FBZUQsSUFBZixDQUFvQixLQUFLRSxNQUF6QixLQUFvQyxFQUEzQztBQUNELEdBTE07QUFNUEMsWUFBVSxrQkFBU04sS0FBVCxFQUFnQjtBQUN4QixRQUFNRyxPQUFPSCxNQUFNSSxRQUFOLENBQWVELElBQWYsQ0FBb0IsS0FBS0UsTUFBekIsS0FBb0MsRUFBakQ7QUFDQSxRQUFNRSxPQUFPLGdCQUFFQSxJQUFGLENBQU9KLElBQVAsQ0FBYjtB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QU9sRSxJQUFJYSxJQUFKLEtBQWEsY0FBYixJQUErQmIsSUFBSWEsSUFBSixLQUFhLEtBQW5EO0FBQUEsK0JBQWhCLEVBQTBFc0QsT0FBMUUsRUFaQztBQWExQjs7QUFFWTs7QUFDQXZFLHNDQUFRNUMsUUFBUSxFQUFoQjtBQUNBOEY7QUFDQSw2Q0FBS3NCLFdBQUw7O0FBbEJjO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBb0JqQjtBQXBEc0MsaUJBQXhCLEM7O0FBc0RqQixxQkFBS25ILFFBQUwsR0FBZ0JBLFFBQWhCOzs7Ozs7OztBQUVBUixvQkFBSXdELEtBQUosQ0FBVTtBQUNSQyx3QkFBTSxVQURFO0FBRVJDLHVCQUFLLGFBRkc7QUFHUkM7QUFIUSxpQkFBVjs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFRTjtBQUNBO0FBQ0E7Ozs7RUF6UHNDLGVBQUtGLEk7a0JBQXRCdkQsUSIsImZpbGUiOiJjaGF0cm9vbS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcbmltcG9ydCBSIGZyb20gJy4uL2xpYnMvcmFtZGEnXG5pbXBvcnQgQ2hhdHJvb21TREsgZnJvbSAnLi4vdXRpbHMvY2hhdHJvb20nXG5pbXBvcnQgTklNIGZyb20gJy4uL3V0aWxzL25pbSdcbmltcG9ydCBGYWNlSU0gZnJvbSAnLi4vdXRpbHMvV2ViSU0nXG5pbXBvcnQgKiBhcyBsb2cgZnJvbSAnLi4vdXRpbHMvbG9nJ1xuaW1wb3J0IHtcbiAgcmVmcmVzaE1zZ3Ncbn0gZnJvbSAnLi4vYWN0aW9ucy9jaGF0cm9vbSdcbmltcG9ydCAqIGFzIGNoYXRyb29tQXBpIGZyb20gJy4uL2FwaXMvY2hhdHJvb20nXG5cbmltcG9ydCB7XG4gIGNvbm5lY3Rcbn0gZnJvbSAnd2VweS1yZWR1eCdcblxuQGNvbm5lY3Qoe1xuICB1c2VyOiBzdGF0ZSA9PiBzdGF0ZS5jb21tb24udXNlcixcbiAgbmltOiBzdGF0ZSA9PiBzdGF0ZS5jb21tb24ubmltLFxuICBtc2dzOiBmdW5jdGlvbiAoc3RhdGUpIHtcbiAgICByZXR1cm4gc3RhdGUuY2hhdHJvb20ubXNnc1t0aGlzLnJvb21JZF0gfHwgW11cbiAgfSxcbiAgaW50b1ZpZXc6IGZ1bmN0aW9uKHN0YXRlKSB7XG4gICAgY29uc3QgbXNncyA9IHN0YXRlLmNoYXRyb29tLm1zZ3NbdGhpcy5yb29tSWRdIHx8IFtdXG4gICAgY29uc3QgbGFzdCA9IFIubGFzdChtc2dzKVxuICAgIHJldHVybiBsYXN0ID8gbGFzdC5pZENsaWVudCA6ICcnXG4gIH1cbn0sIHtcbiAgcmVmcmVzaE1zZ3Ncbn0pXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDaGF0cm9vbSBleHRlbmRzIHdlcHkucGFnZSB7XG4gIGNvbmZpZyA9IHtcbiAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn6IGK5aSp5a6kJ1xuICB9XG5cbiAgZGF0YSA9IHtcbiAgICBuYXZzOiBbJ+iBiuWkqScsICfor6bmg4UnXSxcbiAgICBjdXJyZW50TmF2OiAwLFxuICAgIGNoYXRyb29tOiBudWxsLFxuICAgIHJvb21JZDogbnVsbCxcbiAgICBzZW5kZWQ6IGZhbHNlLFxuICAgIHRleHQ6ICcnLFxuICAgIHJvb21EYXRhOiB7XG4gICAgICBuYW1lOiAn5Yqg6L295LitLi4uJ1xuICAgIH0sXG4gICAgaW5kaWNhdG9yRG90czogdHJ1ZSxcbiAgICBhdXRvcGxheTogZmFsc2UsXG4gICAgaW50ZXJ2YWw6IDUwMDAsXG4gICAgZHVyYXRpb246IDEwMDAsXG4gICAgc2hvdzogJ2Vtb2ppX2xpc3QnLFxuICAgIHNob3dlbTogJ29wZXJhdGlvbicsXG4gICAgZW1vamk6IEZhY2VJTS5kZWZhdWx0LkVtb2ppLFxuICAgIGVtb2ppT2JqOiBGYWNlSU0uZGVmYXVsdC5FbW9qaU9ialxuICB9XG5cbiAgbWV0aG9kcyA9IHtcbiAgICBvcGVuRW1vamkgKGUpIHtcbiAgICAgIGlmICh0aGlzLnNob3cgPT09ICdzaG93RW1vamknKSB7XG4gICAgICAgIHRoaXMuc2hvdyA9ICdlbW9qaV9saXN0J1xuICAgICAgICB0aGlzLnNob3dlbSA9ICdvcGVyYXRpb24nXG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnNob3cgPSAnc2hvd0Vtb2ppJ1xuICAgICAgICB0aGlzLnNob3dlbSA9ICdzaG93RW1vamlPcGVyYXRpb24nXG4gICAgICB9XG4gICAgICB0aGlzLiRhcHBseSgpXG4gICAgfSxcbiAgICBhc3luYyBzZW5kRW1vamkgKGV2ZW50KSB7XG4gICAgICB2YXIgdGhhdCA9IHRoaXNcbiAgICAgIHZhciBlbW9qaSA9IGV2ZW50LnRhcmdldC5kYXRhc2V0LmVtb2ppXG4gICAgICB2YXIgbXNnbGVuID0gdGhhdC5kYXRhLnRleHQubGVuZ3RoIC0gMVxuICAgICAgaWYgKGVtb2ppICYmIGVtb2ppICE9PSAnW2RlbF0nKSB7XG4gICAgICAgIHZhciBzdHIgPSB0aGF0LmRhdGEudGV4dCArIGVtb2ppXG4gICAgICB9IGVsc2UgaWYgKGVtb2ppID09PSAnW2RlbF0nKSB7XG4gICAgICAgIHZhciBzdGFydCA9IHRoYXQuZGF0YS50ZXh0Lmxhc3RJbmRleE9mKCdbJylcbiAgICAgICAgdmFyIGVuZCA9IHRoYXQuZGF0YS50ZXh0Lmxhc3RJbmRleE9mKCddJylcbiAgICAgICAgdmFyIGxlbiA9IGVuZCAtIHN0YXJ0XG4gICAgICAgIGlmIChlbmQgIT09IC0xICYmIGVuZCA9PT0gbXNnbGVuICYmIGxlbiA+PSAzICYmIGxlbiA8PSA0KSB7XG4gICAgICAgICAgc3RyID0gdGhhdC5kYXRhLnRleHQuc2xpY2UoMCwgc3RhcnQpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgc3RyID0gdGhhdC5kYXRhLnRleHQuc2xpY2UoMCwgbXNnbGVuKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICB0aGlzLnRleHQgPSBzdHJcbiAgICAgIGNvbnN0IHB1c2hNc2cgPSB0aGlzLm1ldGhvZHMucHVzaE1zZy5iaW5kKHRoaXMpXG4gICAgICB2YXIgdGV4dCA9IFIudHJpbSh0aGlzLnRleHQpXG4gICAgICB0aGlzLnRleHQgPSAnJ1xuICAgICAgaWYgKHRleHQubGVuZ3RoKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgY29uc3QgbXNnID0gYXdhaXQgdGhpcy5jaGF0cm9vbS5zZW5kVGV4dCh7XG4gICAgICAgICAgICB0ZXh0XG4gICAgICAgICAgfSlcbiAgICAgICAgICB0aGlzLnRleHQgPSAnJ1xuICAgICAgICAgIHB1c2hNc2cobXNnKVxuICAgICAgICAgIHRoaXMuc2hvdyA9ICdlbW9qaV9saXN0J1xuICAgICAgICAgIHRoaXMuc2hvd2VtID0gJ29wZXJhdGlvbidcbiAgICAgICAgICB0aGlzLiRhcHBseSgpXG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICBsb2cuZXJyb3Ioe1xuICAgICAgICAgICAgcGFnZTogJ2NoYXRyb29tJyxcbiAgICAgICAgICAgIG9wcjogJ3NlbmRUZXh0JyxcbiAgICAgICAgICAgIGluZm86IGVcbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcbiAgICBjaGFuZ2VOYXYgKGUpIHtcbiAgICAgIGNvbnNvbGUubG9nKGUpXG4gICAgICB0aGlzLmN1cnJlbnROYXYgPSBlLmN1cnJlbnRUYXJnZXQuZGF0YXNldC5pbmRleFxuICAgICAgdGhpcy4kYXBwbHkoKVxuICAgIH0sXG4gICAgYXN5bmMgY2hvb3NlSW1hZ2UoKSB7XG4gICAgICAvLyDov5vooYzlm77niYfpgInmi6nlubbkuIrkvKBcbiAgICAgIGNvbnN0IHB1c2hNc2cgPSB0aGlzLm1ldGhvZHMucHVzaE1zZy5iaW5kKHRoaXMpXG4gICAgICBjb25zdCByZXMgPSBhd2FpdCB3ZXB5LmNob29zZUltYWdlKHtcbiAgICAgICAgY291bnQ6IDFcbiAgICAgIH0pXG5cbiAgICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IGZpbGUgPSBhd2FpdCB0aGlzLmNoYXRyb29tLnByZXZpZXdGaWxlKHtcbiAgICAgICAgICB0eXBlOiAnaW1hZ2UnLFxuICAgICAgICAgIHd4RmlsZVBhdGg6IHJlcy50ZW1wRmlsZVBhdGhzWzBdXG4gICAgICAgIH0pXG4gICAgICAgIGNvbnN0IG1zZyA9IGF3YWl0IHRoaXMuY2hhdHJvb20uc2VuZEZpbGUoe1xuICAgICAgICAgIHR5cGU6ICdpbWFnZScsXG4gICAgICAgICAgZmlsZTogZmlsZVxuICAgICAgICB9KVxuICAgICAgICBwdXNoTXNnKG1zZylcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGxvZy5lcnJvcih7XG4gICAgICAgICAgcGFnZTogJ2NoYXRyb29tJyxcbiAgICAgICAgICBvcHI6ICdzZW5kRmlsZScsXG4gICAgICAgICAgaW5mbzogZXJyb3JcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9LFxuICAgIGFzeW5jIHNlbmQoKSB7XG4gICAgICAvLyA/IHdoeSBiaW5kXG4gICAgICBjb25zdCBwdXNoTXNnID0gdGhpcy5tZXRob2RzLnB1c2hNc2cuYmluZCh0aGlzKVxuICAgICAgY29uc3QgdGV4dCA9IFIudHJpbSh0aGlzLnRleHQpXG4gICAgICB0aGlzLnRleHQgPSAnJ1xuICAgICAgaWYgKHRleHQubGVuZ3RoKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgY29uc3QgbXNnID0gYXdhaXQgdGhpcy5jaGF0cm9vbS5zZW5kVGV4dCh7XG4gICAgICAgICAgICB0ZXh0XG4gICAgICAgICAgfSlcbiAgICAgICAgICB0aGlzLnRleHQgPSAnJ1xuICAgICAgICAgIHB1c2hNc2cobXNnKVxuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgbG9nLmVycm9yKHtcbiAgICAgICAgICAgIHBhZ2U6ICdjaGF0cm9vbScsXG4gICAgICAgICAgICBvcHI6ICdzZW5kVGV4dCcsXG4gICAgICAgICAgICBpbmZvOiBlXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG4gICAgc2V0VGV4dChlKSB7XG4gICAgICB0aGlzLnRleHQgPSBlLmRldGFpbC52YWx1ZVxuICAgIH0sXG4gICAgcHVzaE1zZzogZnVuY3Rpb24gKG1zZ3MpIHtcbiAgICAgIGNvbnN0IHsgcmVmcmVzaE1zZ3MgfSA9IHRoaXMubWV0aG9kc1xuICAgICAgaWYgKCFBcnJheS5pc0FycmF5KG1zZ3MpKSB7XG4gICAgICAgIG1zZ3MgPSBbbXNnc11cbiAgICAgIH1cbiAgICAgIGNvbnNvbGUubG9nKCflsLHmmK/ov5nkuKrlm74nKVxuICAgICAgbXNncyA9IG1zZ3MubWFwKG1zZyA9PiB7XG4gICAgICAgIGlmIChtc2cudHlwZSA9PT0gJ3RleHQnKSB7XG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGVtamk6IEZhY2VJTS5kZWZhdWx0LnBhcnNlRW1vamkobXNnLnRleHQucmVwbGFjZSgvXFxuL21nLCAnJykpLFxuICAgICAgICAgICAgY2hhdHJvb21JZDogbXNnLmNoYXRyb29tSWQsXG4gICAgICAgICAgICBmbG93OiBtc2cuZmxvdyxcbiAgICAgICAgICAgIGZyb206IG1zZy5mcm9tLFxuICAgICAgICAgICAgZnJvbUF2YXRhcjogbXNnLmZyb21BdmF0YXIsXG4gICAgICAgICAgICBmcm9tQ2xpZW50VHlwZTogbXNnLmZyb21DbGllbnRUeXBlLFxuICAgICAgICAgICAgZnJvbUN1c3RvbTogbXNnLmZyb21DdXN0b20sXG4gICAgICAgICAgICBmcm9tTmljazogbXNnLmZyb21OaWNrLFxuICAgICAgICAgICAgaWRDbGllbnQ6IG1zZy5pZENsaWVudCxcbiAgICAgICAgICAgIHJlc2VuZDogbXNnLnJlc2VuZCxcbiAgICAgICAgICAgIHN0YXR1czogbXNnLnN0YXR1cyxcbiAgICAgICAgICAgIHRleHQ6IG1zZy50ZXh0LFxuICAgICAgICAgICAgdGltZTogbXNnLnRpbWUsXG4gICAgICAgICAgICB0eXBlOiBtc2cudHlwZSxcbiAgICAgICAgICAgIHVzZXJVcGRhdGVUaW1lOiBtc2cudXNlclVwZGF0ZVRpbWVcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIG1zZ1xuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgY29uc29sZS5sb2cobXNncylcbiAgICAgIGNvbnN0IHJvb21JZCA9IG1zZ3NbMF0uY2hhdHJvb21JZCB8fCB0aGlzLnJvb21JZFxuICAgICAgY29uc3QgbWVyZ2VkID0gWy4uLnRoaXMubXNncywgLi4ubXNnc11cbiAgICAgIHJlZnJlc2hNc2dzKHJvb21JZCwgbWVyZ2VkKVxuICAgICAgdGhpcy5zZW5kZWQgPSB0cnVlXG4gICAgICB0aGlzLiRhcHBseSgpXG4gICAgfSxcbiAgICBoYW5kbGVGb2N1cygpIHtcbiAgICAgIHRoaXMuc2VuZGVkID0gZmFsc2VcbiAgICB9XG4gIH1cblxuICBhc3luYyBvbkxvYWQob3B0aW9ucykge1xuICAgIGNvbnN0IHsgaWQgfSA9IG9wdGlvbnNcbiAgICB0aGlzLnJvb21JZCA9IGlkXG4gICAgY29uc3QgeyBwayB9ID0gb3B0aW9uc1xuICAgIGNvbnN0IHJvb21JbmZvID0gYXdhaXQgY2hhdHJvb21BcGkuZ2V0T25lQnlJZChwaylcbiAgICB0aGlzLnJvb21EYXRhID0gcm9vbUluZm9cbiAgICBjb25zdCBwdXNoTXNnID0gdGhpcy5tZXRob2RzLnB1c2hNc2cuYmluZCh0aGlzKVxuICAgIGNvbnN0IGFwcGx5ID0gdGhpcy4kYXBwbHkuYmluZCh0aGlzKVxuICAgIGNvbnN0IGhhc01zZ3MgPSB0aGlzLm1zZ3MubGVuZ3RoID4gMFxuICAgIHRyeSB7XG4gICAgICBjb25zdCB7IG5pbVRva2VuLCBhY2NpZCB9ID0gdGhpcy51c2VyXG4gICAgICBjb25zdCByb29tSWQgPSB0aGlzLnJvb21JZFxuICAgICAgY29uc3QgYWRkcmVzcyA9IGF3YWl0IE5JTS5nZXRDaGF0cm9vbUFkZHJlc3NlcyhhY2NpZCwgcm9vbUlkKVxuICAgICAgY29uc3QgY2hhdHJvb20gPSBDaGF0cm9vbVNESy5nZXRJbnN0YW5jZSh7XG4vLyAgICAgICAgZGVidWc6IHRydWUsXG4gICAgICAgIGFjY291bnQ6IGFjY2lkLFxuICAgICAgICB0b2tlbjogbmltVG9rZW4sXG4gICAgICAgIGNoYXRyb29tSWQ6IHJvb21JZCxcbiAgICAgICAgY2hhdHJvb21BZGRyZXNzZXM6IGFkZHJlc3MsXG4gICAgICAgIG9ubXNnczogZnVuY3Rpb24obXNncykge1xuICAgICAgICAgIGxvZy5pbmZvKHtcbiAgICAgICAgICAgIHBhZ2U6ICdjaGF0cm9vbScsXG4gICAgICAgICAgICBvcHI6ICdpbml0aWFsaXplIHNkayBpbnN0YW5jZScsXG4gICAgICAgICAgICBpbmZvOiBtc2dzXG4gICAgICAgICAgfSlcbiAgICAgICAgICBjb25zb2xlLmxvZygn5pS25Yiw6IGK5aSp5a6k5L+h5oGvJywgbXNncylcbiAgICAgICAgICBwdXNoTXNnKG1zZ3MubWFwKG1zZyA9PiB7XG4gICAgICAgICAgICBpZiAobXNnLnR5cGUgPT09ICdub3RpZmljYXRpb24nKSB7XG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKCfov5nkuKpoaGgnLCBtc2cuYXR0YWNoKVxuICAgICAgICAgICAgICAvLyDov5vlhaXogYrlpKnlrqTkv6Hmga9cbiAgICAgICAgICAgICAgY29uc3QgdGlwID0gUi5jb25kKFtcbiAgICAgICAgICAgICAgICBbUi5lcXVhbHMoJ21lbWJlckVudGVyJyksIFIuYWx3YXlzKCfliqDlhaXogYrlpKnlrqQnKV0sXG4gICAgICAgICAgICAgICAgW1IuZXF1YWxzKCdtZW1iZXJFeGl0JyksIFIuYWx3YXlzKCfpgIDlh7rogYrlpKnlrqQnKV1cbiAgICAgICAgICAgICAgXSkobXNnLmF0dGFjaC50eXBlKVxuICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgJHttc2cuYXR0YWNoLmZyb21OaWNrfSAke3RpcH1gKVxuICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIC4uLm1zZyxcbiAgICAgICAgICAgICAgICB0eXBlOiAndGV4dCcsXG4gICAgICAgICAgICAgICAgdGV4dDogdGlwXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHJldHVybiBtc2dcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KSlcbiAgICAgICAgfSxcbiAgICAgICAgYXN5bmMgb25jb25uZWN0KCkge1xuICAgICAgICAgIGxvZy5pbmZvKHtcbiAgICAgICAgICAgIHBhZ2U6ICdjaGF0cm9vbScsXG4gICAgICAgICAgICBvcHI6ICdpbml0aWFsaXplIHNkayBpbnN0YW5jZScsXG4gICAgICAgICAgICBpbmZvOiAnW05JTSBDSEFUUk9PTV0gY29ubmVjdGVkJ1xuICAgICAgICAgIH0pXG4gICAgICAgICAgaWYgKCFoYXNNc2dzKSB7XG4gICAgICAgICAgICB3ZXB5LnNob3dMb2FkaW5nKClcbiAgICAgICAgICAgIC8vIOaLieWPluacgOi/kSAxMDAg5p2h5L+h5oGvXG4gICAgICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBjaGF0cm9vbS5nZXRIaXN0b3J5TXNncyh7XG4gICAgICAgICAgICAgIGxpbWl0OiAxMDBcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBjb25zdCBtc2dzID0gcmVzLm1zZ3MuZmlsdGVyKG1zZyA9PiBtc2cudHlwZSAhPT0gJ25vdGlmaWNhdGlvbicgJiYgbXNnLnR5cGUgIT09ICd0aXAnKS5yZXZlcnNlKClcbi8vICAgICAgICAgICAgY29uc29sZS5sb2coJ2hpc3RvcnkgbWVzc2FnZXMnLCBtc2dzKVxuXG4gICAgICAgICAgICAvLyDliLfmlrDmtojmga9cbiAgICAgICAgICAgIHB1c2hNc2cobXNncyB8fCBbXSlcbiAgICAgICAgICAgIGFwcGx5KClcbiAgICAgICAgICAgIHdlcHkuaGlkZUxvYWRpbmcoKVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSlcbiAgICAgIHRoaXMuY2hhdHJvb20gPSBjaGF0cm9vbVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIGxvZy5lcnJvcih7XG4gICAgICAgIHBhZ2U6ICdjaGF0cm9vbScsXG4gICAgICAgIG9wcjogJ2dldEluc3RhbmNlJyxcbiAgICAgICAgaW5mbzogZVxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuLy8gIGFzeW5jIG9uU2hvdygpIHtcbi8vXG4vLyAgfVxufVxuIl19