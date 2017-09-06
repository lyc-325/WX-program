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
      handleName: function handleName(item) {
        var _this2 = this;

        return (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee() {
          var itemAccid, _ref2, id;

          return _regenerator2.default.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  itemAccid = item.from;
                  _context.next = 3;
                  return chatroomApi.getItemId(itemAccid);

                case 3:
                  _ref2 = _context.sent;
                  id = _ref2.id;

                  _wepy2.default.navigateTo({
                    url: 'userInfo?id=' + id
                  });

                case 6:
                case 'end':
                  return _context.stop();
              }
            }
          }, _callee, _this2);
        }))();
      },
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
      imgPreview: function imgPreview(items, msgs) {
        var imgUrl = items;
        var isImg = function isImg(msg) {
          return msg.type === 'image';
        };
        var imgArr = _ramda2.default.filter(isImg)(msgs);
        var imgUrlArr = imgArr.map(function (msg) {
          return msg.file.url;
        });
        _wepy2.default.previewImage({
          current: imgUrl,
          urls: imgUrlArr,
          success: function success(res) {
            console.log(res);
          }
        });
      },
      sendEmoji: function sendEmoji(event) {
        var _this3 = this;

        return (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee2() {
          var that, emoji, msglen, str, start, end, len, pushMsg, text, msg;
          return _regenerator2.default.wrap(function _callee2$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  that = _this3;
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
                  _this3.text = str;
                  pushMsg = _this3.methods.pushMsg.bind(_this3);
                  text = _ramda2.default.trim(_this3.text);

                  _this3.text = '';

                  if (!text.length) {
                    _context2.next = 23;
                    break;
                  }

                  _context2.prev = 9;
                  _context2.next = 12;
                  return _this3.chatroom.sendText({
                    text: text
                  });

                case 12:
                  msg = _context2.sent;

                  _this3.text = '';
                  pushMsg(msg);
                  _this3.show = 'emoji_list';
                  _this3.showem = 'operation';
                  _this3.$apply();
                  _context2.next = 23;
                  break;

                case 20:
                  _context2.prev = 20;
                  _context2.t0 = _context2['catch'](9);

                  log.error({
                    page: 'chatroom',
                    opr: 'sendText',
                    info: _context2.t0
                  });

                case 23:
                case 'end':
                  return _context2.stop();
              }
            }
          }, _callee2, _this3, [[9, 20]]);
        }))();
      },
      changeNav: function changeNav(e) {
        console.log(e);
        this.currentNav = e.currentTarget.dataset.index;
        this.$apply();
      },
      chooseImage: function chooseImage() {
        var _this4 = this;

        return (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee3() {
          var pushMsg, res, file, msg;
          return _regenerator2.default.wrap(function _callee3$(_context3) {
            while (1) {
              switch (_context3.prev = _context3.next) {
                case 0:
                  // 进行图片选择并上传
                  pushMsg = _this4.methods.pushMsg.bind(_this4);
                  _context3.next = 3;
                  return _wepy2.default.chooseImage({
                    count: 1
                  });

                case 3:
                  res = _context3.sent;
                  _context3.prev = 4;
                  _context3.next = 7;
                  return _this4.chatroom.previewFile({
                    type: 'image',
                    wxFilePath: res.tempFilePaths[0]
                  });

                case 7:
                  file = _context3.sent;
                  _context3.next = 10;
                  return _this4.chatroom.sendFile({
                    type: 'image',
                    file: file
                  });

                case 10:
                  msg = _context3.sent;

                  pushMsg(msg);
                  _context3.next = 17;
                  break;

                case 14:
                  _context3.prev = 14;
                  _context3.t0 = _context3['catch'](4);

                  log.error({
                    page: 'chatroom',
                    opr: 'sendFile',
                    info: _context3.t0
                  });

                case 17:
                case 'end':
                  return _context3.stop();
              }
            }
          }, _callee3, _this4, [[4, 14]]);
        }))();
      },
      send: function send() {
        var _this5 = this;

        return (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee4() {
          var pushMsg, text, msg;
          return _regenerator2.default.wrap(function _callee4$(_context4) {
            while (1) {
              switch (_context4.prev = _context4.next) {
                case 0:
                  // ? why bind
                  pushMsg = _this5.methods.pushMsg.bind(_this5);
                  text = _ramda2.default.trim(_this5.text);

                  _this5.text = '';

                  if (!text.length) {
                    _context4.next = 15;
                    break;
                  }

                  _context4.prev = 4;
                  _context4.next = 7;
                  return _this5.chatroom.sendText({
                    text: text
                  });

                case 7:
                  msg = _context4.sent;

                  _this5.text = '';
                  pushMsg(msg);
                  _context4.next = 15;
                  break;

                case 12:
                  _context4.prev = 12;
                  _context4.t0 = _context4['catch'](4);

                  log.error({
                    page: 'chatroom',
                    opr: 'sendText',
                    info: _context4.t0
                  });

                case 15:
                case 'end':
                  return _context4.stop();
              }
            }
          }, _callee4, _this5, [[4, 12]]);
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
        console.log('就是这个图', msgs);
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
        //      console.log(this.roomId)
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
      var _ref3 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee6(options) {
        var id, roomid, pushMsg, apply, hasMsgs, _user, nimToken, accid, avatarUrl, jfToken, roomInfo, roomId, address, chatroom;

        return _regenerator2.default.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                id = options.id;
                roomid = options.roomid;

                this.roomId = roomid;
                console.log('roomid', this.roomId);
                pushMsg = this.methods.pushMsg.bind(this);
                apply = this.$apply.bind(this);
                hasMsgs = this.msgs.length > 0;
                _context6.prev = 7;
                _user = this.user, nimToken = _user.nimToken, accid = _user.accid, avatarUrl = _user.avatarUrl, jfToken = _user.jfToken;
                _context6.next = 11;
                return chatroomApi.getOneById(id, jfToken);

              case 11:
                roomInfo = _context6.sent;

                this.roomData = roomInfo;
                roomId = this.roomId;
                _context6.next = 16;
                return _nim2.default.getChatroomAddresses(accid, roomId);

              case 16:
                address = _context6.sent;
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
                    //          console.log('收到聊天室信息', msgs)
                    pushMsg(msgs.map(function (msg) {
                      if (msg.type === 'notification') {
                        // 进入聊天室信息
                        var tip = _ramda2.default.cond([[_ramda2.default.equals('memberEnter'), _ramda2.default.always('加入聊天室')], [_ramda2.default.equals('memberExit'), _ramda2.default.always('退出聊天室')]])(msg.attach.type);
                        var tipMsg = msg.attach.fromNick + ' ' + tip;
                        return (0, _extends3.default)({}, msg, {
                          type: 'notification',
                          text: tipMsg,
                          fromAvatar: avatarUrl
                        });
                      } else {
                        return msg;
                      }
                    }));
                  },
                  onconnect: function onconnect() {
                    var _this6 = this;

                    return (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee5() {
                      var res, msgs;
                      return _regenerator2.default.wrap(function _callee5$(_context5) {
                        while (1) {
                          switch (_context5.prev = _context5.next) {
                            case 0:
                              log.info({
                                page: 'chatroom',
                                opr: 'initialize sdk instance',
                                info: '[NIM CHATROOM] connected'
                              });

                              if (hasMsgs) {
                                _context5.next = 11;
                                break;
                              }

                              _wepy2.default.showLoading();
                              // 拉取最近 100 条信息
                              _context5.next = 5;
                              return chatroom.getHistoryMsgs({
                                limit: 100
                              });

                            case 5:
                              res = _context5.sent;
                              msgs = res.msgs.filter(function (msg) {
                                return msg.type !== 'notification' && msg.type !== 'tip';
                              }).reverse();

                              console.log('history messages', msgs);

                              // 刷新消息
                              pushMsg(msgs || []);
                              apply();
                              _wepy2.default.hideLoading();

                            case 11:
                            case 'end':
                              return _context5.stop();
                          }
                        }
                      }, _callee5, _this6);
                    }))();
                  }
                });

                this.chatroom = chatroom;
                _context6.next = 24;
                break;

              case 21:
                _context6.prev = 21;
                _context6.t0 = _context6['catch'](7);

                log.error({
                  page: 'chatroom',
                  opr: 'getInstance',
                  info: _context6.t0
                });

              case 24:
              case 'end':
                return _context6.stop();
            }
          }
        }, _callee6, this, [[7, 21]]);
      }));

      function onLoad(_x) {
        return _ref3.apply(this, arguments);
      }

      return onLoad;
    }()
  }, {
    key: 'onShow',
    value: function () {
      var _ref4 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee7() {
        return _regenerator2.default.wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
              case 'end':
                return _context7.stop();
            }
          }
        }, _callee7, this);
      }));

      function onShow() {
        return _ref4.apply(this, arguments);
      }

      return onShow;
    }()
  }]);
  return Chatroom;
}(_wepy2.default.page)) || _class);

Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Chatroom , 'pages/chatroom'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoYXRyb29tLmpzIl0sIm5hbWVzIjpbImxvZyIsImNoYXRyb29tQXBpIiwiQ2hhdHJvb20iLCJ1c2VyIiwic3RhdGUiLCJjb21tb24iLCJuaW0iLCJtc2dzIiwiY2hhdHJvb20iLCJyb29tSWQiLCJpbnRvVmlldyIsImxhc3QiLCJpZENsaWVudCIsInJlZnJlc2hNc2dzIiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsImRhdGEiLCJuYXZzIiwiY3VycmVudE5hdiIsInNlbmRlZCIsInRleHQiLCJyb29tRGF0YSIsIm5hbWUiLCJpbmRpY2F0b3JEb3RzIiwiYXV0b3BsYXkiLCJpbnRlcnZhbCIsImR1cmF0aW9uIiwic2hvdyIsInNob3dlbSIsImVtb2ppIiwiZGVmYXVsdCIsIkVtb2ppIiwiZW1vamlPYmoiLCJFbW9qaU9iaiIsIm1ldGhvZHMiLCJoYW5kbGVOYW1lIiwiaXRlbSIsIml0ZW1BY2NpZCIsImZyb20iLCJnZXRJdGVtSWQiLCJpZCIsIm5hdmlnYXRlVG8iLCJ1cmwiLCJvcGVuRW1vamkiLCJlIiwiJGFwcGx5IiwiaW1nUHJldmlldyIsIml0ZW1zIiwiaW1nVXJsIiwiaXNJbWciLCJtc2ciLCJ0eXBlIiwiaW1nQXJyIiwiZmlsdGVyIiwiaW1nVXJsQXJyIiwibWFwIiwiZmlsZSIsInByZXZpZXdJbWFnZSIsImN1cnJlbnQiLCJ1cmxzIiwic3VjY2VzcyIsInJlcyIsImNvbnNvbGUiLCJzZW5kRW1vamkiLCJldmVudCIsInRoYXQiLCJ0YXJnZXQiLCJkYXRhc2V0IiwibXNnbGVuIiwibGVuZ3RoIiwic3RyIiwic3RhcnQiLCJsYXN0SW5kZXhPZiIsImVuZCIsImxlbiIsInNsaWNlIiwicHVzaE1zZyIsImJpbmQiLCJ0cmltIiwic2VuZFRleHQiLCJlcnJvciIsInBhZ2UiLCJvcHIiLCJpbmZvIiwiY2hhbmdlTmF2IiwiY3VycmVudFRhcmdldCIsImluZGV4IiwiY2hvb3NlSW1hZ2UiLCJjb3VudCIsInByZXZpZXdGaWxlIiwid3hGaWxlUGF0aCIsInRlbXBGaWxlUGF0aHMiLCJzZW5kRmlsZSIsInNlbmQiLCJzZXRUZXh0IiwiZGV0YWlsIiwidmFsdWUiLCJBcnJheSIsImlzQXJyYXkiLCJlbWppIiwicGFyc2VFbW9qaSIsInJlcGxhY2UiLCJjaGF0cm9vbUlkIiwiZmxvdyIsImZyb21BdmF0YXIiLCJmcm9tQ2xpZW50VHlwZSIsImZyb21DdXN0b20iLCJmcm9tTmljayIsInJlc2VuZCIsInN0YXR1cyIsInRpbWUiLCJ1c2VyVXBkYXRlVGltZSIsIm1lcmdlZCIsImhhbmRsZUZvY3VzIiwib3B0aW9ucyIsInJvb21pZCIsImFwcGx5IiwiaGFzTXNncyIsIm5pbVRva2VuIiwiYWNjaWQiLCJhdmF0YXJVcmwiLCJqZlRva2VuIiwiZ2V0T25lQnlJZCIsInJvb21JbmZvIiwiZ2V0Q2hhdHJvb21BZGRyZXNzZXMiLCJhZGRyZXNzIiwiZ2V0SW5zdGFuY2UiLCJhY2NvdW50IiwidG9rZW4iLCJjaGF0cm9vbUFkZHJlc3NlcyIsIm9ubXNncyIsInRpcCIsImNvbmQiLCJlcXVhbHMiLCJhbHdheXMiLCJhdHRhY2giLCJ0aXBNc2ciLCJvbmNvbm5lY3QiLCJzaG93TG9hZGluZyIsImdldEhpc3RvcnlNc2dzIiwibGltaXQiLCJyZXZlcnNlIiwiaGlkZUxvYWRpbmciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7SUFBWUEsRzs7QUFDWjs7QUFHQTs7SUFBWUMsVzs7QUFFWjs7Ozs7O0lBa0JxQkMsUSxXQWRwQix3QkFBUTtBQUNQQyxRQUFNO0FBQUEsV0FBU0MsTUFBTUMsTUFBTixDQUFhRixJQUF0QjtBQUFBLEdBREM7QUFFUEcsT0FBSztBQUFBLFdBQVNGLE1BQU1DLE1BQU4sQ0FBYUMsR0FBdEI7QUFBQSxHQUZFO0FBR1BDLFFBQU0sY0FBVUgsS0FBVixFQUFpQjtBQUNyQixXQUFPQSxNQUFNSSxR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VFE7QUFZUnRELGtDQVpRLEdBWURzRCxJQUFJdEQsSUFBSixDQUFTOEMsTUFBVCxDQUFnQjtBQUFBLHVDQUFPSCxJQUFJQyxJQUFKLEtBQWEsY0FBYixJQUErQkQsSUFBSUMsSUFBSixLQUFhLEtBQW5EO0FBQUEsK0JBQWhCLEVBQTBFMEYsT0FBMUUsRUFaQzs7QUFhZC9FLHNDQUFROUQsR0FBUixDQUFZLGtCQUFaLEVBQWdDTyxJQUFoQzs7QUFFQTtBQUNBcUUsc0NBQVFyRSxRQUFRLEVBQWhCO0FBQ0E2RztBQUNBLDZDQUFLMEIsV0FBTDs7QUFsQmM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFvQmpCO0FBcERzQyxpQkFBeEIsQzs7QUFzRGpCLHFCQUFLdEksUUFBTCxHQUFnQkEsUUFBaEI7Ozs7Ozs7O0FBRUFSLG9CQUFJZ0YsS0FBSixDQUFVO0FBQ1JDLHdCQUFNLFVBREU7QUFFUkMsdUJBQUssYUFGRztBQUdSQztBQUhRLGlCQUFWOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7RUF0UWdDLGVBQUtGLEk7a0JBQXRCL0UsUSIsImZpbGUiOiJjaGF0cm9vbS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcbmltcG9ydCBSIGZyb20gJy4uL2xpYnMvcmFtZGEnXG5pbXBvcnQgQ2hhdHJvb21TREsgZnJvbSAnLi4vdXRpbHMvY2hhdHJvb20nXG5pbXBvcnQgTklNIGZyb20gJy4uL3V0aWxzL25pbSdcbmltcG9ydCBGYWNlSU0gZnJvbSAnLi4vdXRpbHMvV2ViSU0nXG5pbXBvcnQgKiBhcyBsb2cgZnJvbSAnLi4vdXRpbHMvbG9nJ1xuaW1wb3J0IHtcbiAgcmVmcmVzaE1zZ3Ncbn0gZnJvbSAnLi4vYWN0aW9ucy9jaGF0cm9vbSdcbmltcG9ydCAqIGFzIGNoYXRyb29tQXBpIGZyb20gJy4uL2FwaXMvY2hhdHJvb20nXG5cbmltcG9ydCB7XG4gIGNvbm5lY3Rcbn0gZnJvbSAnd2VweS1yZWR1eCdcblxuQGNvbm5lY3Qoe1xuICB1c2VyOiBzdGF0ZSA9PiBzdGF0ZS5jb21tb24udXNlcixcbiAgbmltOiBzdGF0ZSA9PiBzdGF0ZS5jb21tb24ubmltLFxuICBtc2dzOiBmdW5jdGlvbiAoc3RhdGUpIHtcbiAgICByZXR1cm4gc3RhdGUuY2hhdHJvb20ubXNnc1t0aGlzLnJvb21JZF0gfHwgW11cbiAgfSxcbiAgaW50b1ZpZXc6IGZ1bmN0aW9uKHN0YXRlKSB7XG4gICAgY29uc3QgbXNncyA9IHN0YXRlLmNoYXRyb29tLm1zZ3NbdGhpcy5yb29tSWRdIHx8IFtdXG4gICAgY29uc3QgbGFzdCA9IFIubGFzdChtc2dzKVxuICAgIHJldHVybiBsYXN0ID8gbGFzdC5pZENsaWVudCA6ICcnXG4gIH1cbn0sIHtcbiAgcmVmcmVzaE1zZ3Ncbn0pXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDaGF0cm9vbSBleHRlbmRzIHdlcHkucGFnZSB7XG4gIGNvbmZpZyA9IHtcbiAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn6IGK5aSp5a6kJ1xuICB9XG5cbiAgZGF0YSA9IHtcbiAgICBuYXZzOiBbJ+iBiuWkqScsICfor6bmg4UnXSxcbiAgICBjdXJyZW50TmF2OiAwLFxuICAgIGNoYXRyb29tOiBudWxsLFxuICAgIHJvb21JZDogbnVsbCxcbiAgICBzZW5kZWQ6IGZhbHNlLFxuICAgIHRleHQ6ICcnLFxuICAgIHJvb21EYXRhOiB7XG4gICAgICBuYW1lOiAn5Yqg6L295LitLi4uJ1xuICAgIH0sXG4gICAgaW5kaWNhdG9yRG90czogdHJ1ZSxcbiAgICBhdXRvcGxheTogZmFsc2UsXG4gICAgaW50ZXJ2YWw6IDUwMDAsXG4gICAgZHVyYXRpb246IDEwMDAsXG4gICAgc2hvdzogJ2Vtb2ppX2xpc3QnLFxuICAgIHNob3dlbTogJ29wZXJhdGlvbicsXG4gICAgZW1vamk6IEZhY2VJTS5kZWZhdWx0LkVtb2ppLFxuICAgIGVtb2ppT2JqOiBGYWNlSU0uZGVmYXVsdC5FbW9qaU9ialxuICB9XG5cbiAgbWV0aG9kcyA9IHtcbiAgICBhc3luYyBoYW5kbGVOYW1lIChpdGVtKSB7XG4gICAgICBjb25zdCBpdGVtQWNjaWQgPSBpdGVtLmZyb21cbiAgICAgIGNvbnN0IHtpZH0gPSBhd2FpdCBjaGF0cm9vbUFwaS5nZXRJdGVtSWQoaXRlbUFjY2lkKVxuICAgICAgd2VweS5uYXZpZ2F0ZVRvKHtcbiAgICAgICAgdXJsOiBgdXNlckluZm8/aWQ9JHtpZH1gXG4gICAgICB9KVxuICAgIH0sXG4gICAgb3BlbkVtb2ppIChlKSB7XG4gICAgICBpZiAodGhpcy5zaG93ID09PSAnc2hvd0Vtb2ppJykge1xuICAgICAgICB0aGlzLnNob3cgPSAnZW1vamlfbGlzdCdcbiAgICAgICAgdGhpcy5zaG93ZW0gPSAnb3BlcmF0aW9uJ1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5zaG93ID0gJ3Nob3dFbW9qaSdcbiAgICAgICAgdGhpcy5zaG93ZW0gPSAnc2hvd0Vtb2ppT3BlcmF0aW9uJ1xuICAgICAgfVxuICAgICAgdGhpcy4kYXBwbHkoKVxuICAgIH0sXG4gICAgaW1nUHJldmlldyAoaXRlbXMsIG1zZ3MpIHtcbiAgICAgIGNvbnN0IGltZ1VybCA9IGl0ZW1zXG4gICAgICBjb25zdCBpc0ltZyA9IG1zZyA9PiBtc2cudHlwZSA9PT0gJ2ltYWdlJ1xuICAgICAgY29uc3QgaW1nQXJyID0gUi5maWx0ZXIoaXNJbWcpKG1zZ3MpXG4gICAgICBjb25zdCBpbWdVcmxBcnIgPSBpbWdBcnIubWFwKG1zZyA9PiB7XG4gICAgICAgIHJldHVybiBtc2cuZmlsZS51cmxcbiAgICAgIH0pXG4gICAgICB3ZXB5LnByZXZpZXdJbWFnZSh7XG4gICAgICAgIGN1cnJlbnQ6IGltZ1VybCxcbiAgICAgICAgdXJsczogaW1nVXJsQXJyLFxuICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAocmVzKSB7XG4gICAgICAgICAgY29uc29sZS5sb2cocmVzKVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH0sXG4gICAgYXN5bmMgc2VuZEVtb2ppIChldmVudCkge1xuICAgICAgdmFyIHRoYXQgPSB0aGlzXG4gICAgICB2YXIgZW1vamkgPSBldmVudC50YXJnZXQuZGF0YXNldC5lbW9qaVxuICAgICAgdmFyIG1zZ2xlbiA9IHRoYXQuZGF0YS50ZXh0Lmxlbmd0aCAtIDFcbiAgICAgIGlmIChlbW9qaSAmJiBlbW9qaSAhPT0gJ1tkZWxdJykge1xuICAgICAgICB2YXIgc3RyID0gdGhhdC5kYXRhLnRleHQgKyBlbW9qaVxuICAgICAgfSBlbHNlIGlmIChlbW9qaSA9PT0gJ1tkZWxdJykge1xuICAgICAgICB2YXIgc3RhcnQgPSB0aGF0LmRhdGEudGV4dC5sYXN0SW5kZXhPZignWycpXG4gICAgICAgIHZhciBlbmQgPSB0aGF0LmRhdGEudGV4dC5sYXN0SW5kZXhPZignXScpXG4gICAgICAgIHZhciBsZW4gPSBlbmQgLSBzdGFydFxuICAgICAgICBpZiAoZW5kICE9PSAtMSAmJiBlbmQgPT09IG1zZ2xlbiAmJiBsZW4gPj0gMyAmJiBsZW4gPD0gNCkge1xuICAgICAgICAgIHN0ciA9IHRoYXQuZGF0YS50ZXh0LnNsaWNlKDAsIHN0YXJ0KVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHN0ciA9IHRoYXQuZGF0YS50ZXh0LnNsaWNlKDAsIG1zZ2xlbilcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgdGhpcy50ZXh0ID0gc3RyXG4gICAgICBjb25zdCBwdXNoTXNnID0gdGhpcy5tZXRob2RzLnB1c2hNc2cuYmluZCh0aGlzKVxuICAgICAgdmFyIHRleHQgPSBSLnRyaW0odGhpcy50ZXh0KVxuICAgICAgdGhpcy50ZXh0ID0gJydcbiAgICAgIGlmICh0ZXh0Lmxlbmd0aCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIGNvbnN0IG1zZyA9IGF3YWl0IHRoaXMuY2hhdHJvb20uc2VuZFRleHQoe1xuICAgICAgICAgICAgdGV4dFxuICAgICAgICAgIH0pXG4gICAgICAgICAgdGhpcy50ZXh0ID0gJydcbiAgICAgICAgICBwdXNoTXNnKG1zZylcbiAgICAgICAgICB0aGlzLnNob3cgPSAnZW1vamlfbGlzdCdcbiAgICAgICAgICB0aGlzLnNob3dlbSA9ICdvcGVyYXRpb24nXG4gICAgICAgICAgdGhpcy4kYXBwbHkoKVxuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgbG9nLmVycm9yKHtcbiAgICAgICAgICAgIHBhZ2U6ICdjaGF0cm9vbScsXG4gICAgICAgICAgICBvcHI6ICdzZW5kVGV4dCcsXG4gICAgICAgICAgICBpbmZvOiBlXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG4gICAgY2hhbmdlTmF2IChlKSB7XG4gICAgICBjb25zb2xlLmxvZyhlKVxuICAgICAgdGhpcy5jdXJyZW50TmF2ID0gZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQuaW5kZXhcbiAgICAgIHRoaXMuJGFwcGx5KClcbiAgICB9LFxuICAgIGFzeW5jIGNob29zZUltYWdlKCkge1xuICAgICAgLy8g6L+b6KGM5Zu+54mH6YCJ5oup5bm25LiK5LygXG4gICAgICBjb25zdCBwdXNoTXNnID0gdGhpcy5tZXRob2RzLnB1c2hNc2cuYmluZCh0aGlzKVxuICAgICAgY29uc3QgcmVzID0gYXdhaXQgd2VweS5jaG9vc2VJbWFnZSh7XG4gICAgICAgIGNvdW50OiAxXG4gICAgICB9KVxuXG4gICAgICB0cnkge1xuICAgICAgICBjb25zdCBmaWxlID0gYXdhaXQgdGhpcy5jaGF0cm9vbS5wcmV2aWV3RmlsZSh7XG4gICAgICAgICAgdHlwZTogJ2ltYWdlJyxcbiAgICAgICAgICB3eEZpbGVQYXRoOiByZXMudGVtcEZpbGVQYXRoc1swXVxuICAgICAgICB9KVxuICAgICAgICBjb25zdCBtc2cgPSBhd2FpdCB0aGlzLmNoYXRyb29tLnNlbmRGaWxlKHtcbiAgICAgICAgICB0eXBlOiAnaW1hZ2UnLFxuICAgICAgICAgIGZpbGU6IGZpbGVcbiAgICAgICAgfSlcbiAgICAgICAgcHVzaE1zZyhtc2cpXG4gICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBsb2cuZXJyb3Ioe1xuICAgICAgICAgIHBhZ2U6ICdjaGF0cm9vbScsXG4gICAgICAgICAgb3ByOiAnc2VuZEZpbGUnLFxuICAgICAgICAgIGluZm86IGVycm9yXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfSxcbiAgICBhc3luYyBzZW5kKCkge1xuICAgICAgLy8gPyB3aHkgYmluZFxuICAgICAgY29uc3QgcHVzaE1zZyA9IHRoaXMubWV0aG9kcy5wdXNoTXNnLmJpbmQodGhpcylcbiAgICAgIGNvbnN0IHRleHQgPSBSLnRyaW0odGhpcy50ZXh0KVxuICAgICAgdGhpcy50ZXh0ID0gJydcbiAgICAgIGlmICh0ZXh0Lmxlbmd0aCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIGNvbnN0IG1zZyA9IGF3YWl0IHRoaXMuY2hhdHJvb20uc2VuZFRleHQoe1xuICAgICAgICAgICAgdGV4dFxuICAgICAgICAgIH0pXG4gICAgICAgICAgdGhpcy50ZXh0ID0gJydcbiAgICAgICAgICBwdXNoTXNnKG1zZylcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgIGxvZy5lcnJvcih7XG4gICAgICAgICAgICBwYWdlOiAnY2hhdHJvb20nLFxuICAgICAgICAgICAgb3ByOiAnc2VuZFRleHQnLFxuICAgICAgICAgICAgaW5mbzogZVxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuICAgIHNldFRleHQoZSkge1xuICAgICAgdGhpcy50ZXh0ID0gZS5kZXRhaWwudmFsdWVcbiAgICB9LFxuICAgIHB1c2hNc2c6IGZ1bmN0aW9uIChtc2dzKSB7XG4gICAgICBjb25zdCB7IHJlZnJlc2hNc2dzIH0gPSB0aGlzLm1ldGhvZHNcbiAgICAgIGlmICghQXJyYXkuaXNBcnJheShtc2dzKSkge1xuICAgICAgICBtc2dzID0gW21zZ3NdXG4gICAgICB9XG4gICAgICBjb25zb2xlLmxvZygn5bCx5piv6L+Z5Liq5Zu+JywgbXNncylcbiAgICAgIG1zZ3MgPSBtc2dzLm1hcChtc2cgPT4ge1xuICAgICAgICBpZiAobXNnLnR5cGUgPT09ICd0ZXh0Jykge1xuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBlbWppOiBGYWNlSU0uZGVmYXVsdC5wYXJzZUVtb2ppKG1zZy50ZXh0LnJlcGxhY2UoL1xcbi9tZywgJycpKSxcbiAgICAgICAgICAgIGNoYXRyb29tSWQ6IG1zZy5jaGF0cm9vbUlkLFxuICAgICAgICAgICAgZmxvdzogbXNnLmZsb3csXG4gICAgICAgICAgICBmcm9tOiBtc2cuZnJvbSxcbiAgICAgICAgICAgIGZyb21BdmF0YXI6IG1zZy5mcm9tQXZhdGFyLFxuICAgICAgICAgICAgZnJvbUNsaWVudFR5cGU6IG1zZy5mcm9tQ2xpZW50VHlwZSxcbiAgICAgICAgICAgIGZyb21DdXN0b206IG1zZy5mcm9tQ3VzdG9tLFxuICAgICAgICAgICAgZnJvbU5pY2s6IG1zZy5mcm9tTmljayxcbiAgICAgICAgICAgIGlkQ2xpZW50OiBtc2cuaWRDbGllbnQsXG4gICAgICAgICAgICByZXNlbmQ6IG1zZy5yZXNlbmQsXG4gICAgICAgICAgICBzdGF0dXM6IG1zZy5zdGF0dXMsXG4gICAgICAgICAgICB0ZXh0OiBtc2cudGV4dCxcbiAgICAgICAgICAgIHRpbWU6IG1zZy50aW1lLFxuICAgICAgICAgICAgdHlwZTogbXNnLnR5cGUsXG4gICAgICAgICAgICB1c2VyVXBkYXRlVGltZTogbXNnLnVzZXJVcGRhdGVUaW1lXG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiBtc2dcbiAgICAgICAgfVxuICAgICAgfSlcbi8vICAgICAgY29uc29sZS5sb2codGhpcy5yb29tSWQpXG4gICAgICBjb25zdCByb29tSWQgPSBtc2dzWzBdLmNoYXRyb29tSWQgfHwgdGhpcy5yb29tSWRcbiAgICAgIGNvbnN0IG1lcmdlZCA9IFsuLi50aGlzLm1zZ3MsIC4uLm1zZ3NdXG4gICAgICByZWZyZXNoTXNncyhyb29tSWQsIG1lcmdlZClcbiAgICAgIHRoaXMuc2VuZGVkID0gdHJ1ZVxuICAgICAgdGhpcy4kYXBwbHkoKVxuICAgIH0sXG4gICAgaGFuZGxlRm9jdXMoKSB7XG4gICAgICB0aGlzLnNlbmRlZCA9IGZhbHNlXG4gICAgfVxuICB9XG5cbiAgYXN5bmMgb25Mb2FkKG9wdGlvbnMpIHtcbiAgICBjb25zdCB7IGlkIH0gPSBvcHRpb25zXG4gICAgY29uc3Qge3Jvb21pZH0gPSBvcHRpb25zXG4gICAgdGhpcy5yb29tSWQgPSByb29taWRcbiAgICBjb25zb2xlLmxvZygncm9vbWlkJywgdGhpcy5yb29tSWQpXG4gICAgY29uc3QgcHVzaE1zZyA9IHRoaXMubWV0aG9kcy5wdXNoTXNnLmJpbmQodGhpcylcbiAgICBjb25zdCBhcHBseSA9IHRoaXMuJGFwcGx5LmJpbmQodGhpcylcbiAgICBjb25zdCBoYXNNc2dzID0gdGhpcy5tc2dzLmxlbmd0aCA+IDBcbiAgICB0cnkge1xuICAgICAgY29uc3QgeyBuaW1Ub2tlbiwgYWNjaWQsIGF2YXRhclVybCwgamZUb2tlbiB9ID0gdGhpcy51c2VyXG4gICAgICBjb25zdCByb29tSW5mbyA9IGF3YWl0IGNoYXRyb29tQXBpLmdldE9uZUJ5SWQoaWQsIGpmVG9rZW4pXG4gICAgICB0aGlzLnJvb21EYXRhID0gcm9vbUluZm9cbiAgICAgIGNvbnN0IHJvb21JZCA9IHRoaXMucm9vbUlkXG4gICAgICBjb25zdCBhZGRyZXNzID0gYXdhaXQgTklNLmdldENoYXRyb29tQWRkcmVzc2VzKGFjY2lkLCByb29tSWQpXG4gICAgICBjb25zdCBjaGF0cm9vbSA9IENoYXRyb29tU0RLLmdldEluc3RhbmNlKHtcbi8vICAgICAgICBkZWJ1ZzogdHJ1ZSxcbiAgICAgICAgYWNjb3VudDogYWNjaWQsXG4gICAgICAgIHRva2VuOiBuaW1Ub2tlbixcbiAgICAgICAgY2hhdHJvb21JZDogcm9vbUlkLFxuICAgICAgICBjaGF0cm9vbUFkZHJlc3NlczogYWRkcmVzcyxcbiAgICAgICAgb25tc2dzOiBmdW5jdGlvbihtc2dzKSB7XG4gICAgICAgICAgbG9nLmluZm8oe1xuICAgICAgICAgICAgcGFnZTogJ2NoYXRyb29tJyxcbiAgICAgICAgICAgIG9wcjogJ2luaXRpYWxpemUgc2RrIGluc3RhbmNlJyxcbiAgICAgICAgICAgIGluZm86IG1zZ3NcbiAgICAgICAgICB9KVxuLy8gICAgICAgICAgY29uc29sZS5sb2coJ+aUtuWIsOiBiuWkqeWupOS/oeaBrycsIG1zZ3MpXG4gICAgICAgICAgcHVzaE1zZyhtc2dzLm1hcChtc2cgPT4ge1xuICAgICAgICAgICAgaWYgKG1zZy50eXBlID09PSAnbm90aWZpY2F0aW9uJykge1xuICAgICAgICAgICAgICAvLyDov5vlhaXogYrlpKnlrqTkv6Hmga9cbiAgICAgICAgICAgICAgY29uc3QgdGlwID0gUi5jb25kKFtcbiAgICAgICAgICAgICAgICBbUi5lcXVhbHMoJ21lbWJlckVudGVyJyksIFIuYWx3YXlzKCfliqDlhaXogYrlpKnlrqQnKV0sXG4gICAgICAgICAgICAgICAgW1IuZXF1YWxzKCdtZW1iZXJFeGl0JyksIFIuYWx3YXlzKCfpgIDlh7rogYrlpKnlrqQnKV1cbiAgICAgICAgICAgICAgXSkobXNnLmF0dGFjaC50eXBlKVxuICAgICAgICAgICAgICBjb25zdCB0aXBNc2cgPSBgJHttc2cuYXR0YWNoLmZyb21OaWNrfSAke3RpcH1gXG4gICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgLi4ubXNnLFxuICAgICAgICAgICAgICAgIHR5cGU6ICdub3RpZmljYXRpb24nLFxuICAgICAgICAgICAgICAgIHRleHQ6IHRpcE1zZyxcbiAgICAgICAgICAgICAgICBmcm9tQXZhdGFyOiBhdmF0YXJVcmxcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgcmV0dXJuIG1zZ1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pKVxuICAgICAgICB9LFxuICAgICAgICBhc3luYyBvbmNvbm5lY3QoKSB7XG4gICAgICAgICAgbG9nLmluZm8oe1xuICAgICAgICAgICAgcGFnZTogJ2NoYXRyb29tJyxcbiAgICAgICAgICAgIG9wcjogJ2luaXRpYWxpemUgc2RrIGluc3RhbmNlJyxcbiAgICAgICAgICAgIGluZm86ICdbTklNIENIQVRST09NXSBjb25uZWN0ZWQnXG4gICAgICAgICAgfSlcbiAgICAgICAgICBpZiAoIWhhc01zZ3MpIHtcbiAgICAgICAgICAgIHdlcHkuc2hvd0xvYWRpbmcoKVxuICAgICAgICAgICAgLy8g5ouJ5Y+W5pyA6L+RIDEwMCDmnaHkv6Hmga9cbiAgICAgICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGNoYXRyb29tLmdldEhpc3RvcnlNc2dzKHtcbiAgICAgICAgICAgICAgbGltaXQ6IDEwMFxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIGNvbnN0IG1zZ3MgPSByZXMubXNncy5maWx0ZXIobXNnID0+IG1zZy50eXBlICE9PSAnbm90aWZpY2F0aW9uJyAmJiBtc2cudHlwZSAhPT0gJ3RpcCcpLnJldmVyc2UoKVxuICAgICAgICAgICAgY29uc29sZS5sb2coJ2hpc3RvcnkgbWVzc2FnZXMnLCBtc2dzKVxuXG4gICAgICAgICAgICAvLyDliLfmlrDmtojmga9cbiAgICAgICAgICAgIHB1c2hNc2cobXNncyB8fCBbXSlcbiAgICAgICAgICAgIGFwcGx5KClcbiAgICAgICAgICAgIHdlcHkuaGlkZUxvYWRpbmcoKVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSlcbiAgICAgIHRoaXMuY2hhdHJvb20gPSBjaGF0cm9vbVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIGxvZy5lcnJvcih7XG4gICAgICAgIHBhZ2U6ICdjaGF0cm9vbScsXG4gICAgICAgIG9wcjogJ2dldEluc3RhbmNlJyxcbiAgICAgICAgaW5mbzogZVxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICBhc3luYyBvblNob3coKSB7XG5cbiAgfVxufVxuIl19