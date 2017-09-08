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
      numList: [],
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
      handleNameId: function handleNameId(item) {
        var itemid = item.id;
        _wepy2.default.navigateTo({
          url: 'userInfo?id=' + itemid
        });
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
        var id, roomid, creator, pushMsg, apply, hasMsgs, _user, nimToken, accid, avatarUrl, jfToken, roomInfo, data, roomId, address, chatroom;

        return _regenerator2.default.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                id = options.id;
                roomid = options.roomid;
                creator = options.creator;

                this.roomId = roomid;
                pushMsg = this.methods.pushMsg.bind(this);
                apply = this.$apply.bind(this);
                hasMsgs = this.msgs.length > 0;
                _context6.prev = 7;
                _user = this.user, nimToken = _user.nimToken, accid = _user.accid, avatarUrl = _user.avatarUrl, jfToken = _user.jfToken;

                if (!(creator !== accid)) {
                  _context6.next = 12;
                  break;
                }

                _context6.next = 12;
                return chatroomApi.addToRoom(roomid, creator, accid);

              case 12:
                _context6.next = 14;
                return chatroomApi.addToRoom(roomid, creator, accid);

              case 14:
                _context6.next = 16;
                return chatroomApi.getOneById(id, jfToken);

              case 16:
                roomInfo = _context6.sent;
                _context6.next = 19;
                return chatroomApi.getUserList(roomid, jfToken);

              case 19:
                data = _context6.sent;

                this.numList = data;
                this.roomData = roomInfo;
                roomId = this.roomId;
                _context6.next = 25;
                return _nim2.default.getChatroomAddresses(accid, roomId);

              case 25:
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
                _context6.next = 33;
                break;

              case 30:
                _context6.prev = 30;
                _context6.t0 = _context6['catch'](7);

                log.error({
                  page: 'chatroom',
                  opr: 'getInstance',
                  info: _context6.t0
                });

              case 33:
              case 'end':
                return _context6.stop();
            }
          }
        }, _callee6, this, [[7, 30]]);
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoYXRyb29tLmpzIl0sIm5hbWVzIjpbImxvZyIsImNoYXRyb29tQXBpIiwiQ2hhdHJvb20iLCJ1c2VyIiwic3RhdGUiLCJjb21tb24iLCJuaW0iLCJtc2dzIiwiY2hhdHJvb20iLCJyb29tSWQiLCJpbnRvVmlldyIsImxhc3QiLCJpZENsaWVudCIsInJlZnJlc2hNc2dzIiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsImRhdGEiLCJuYXZzIiwiY3VycmVudE5hdiIsIm51bUxpc3QiLCJzZW5kZWQiLCJ0ZXh0Iiwicm9vbURhdGEiLCJuYW1lIiwiaW5kaWNhdG9yRG90cyIsImF1dG9wbGF5IiwiaW50ZXJ2YWwiLCJkdXJhdGlvbiIsInNob3ciLCJzaG93ZW0iLCJlbW9qaSIsImRlZmF1bHQiLCJFbW9qaSIsImVtb2ppT2JqIiwiRW1vamlPYmoiLCJtZXRob2RzIiwiaGFuZGxlTmFtZSIsIml0ZW0iLCJpdGVtQWNjaWQiLCJmcm9tIiwiZ2V0SXRlbUlkIiwiaWQiLCJuYXZpZ2F0ZVRvIiwidXJsIiwiaGFuZGxlTmFtZUlkIiwiaXRlbWlkIiwib3BlbkVtb2ppIiwiZSIsIiRhcHBseSIsImltZ1ByZXZpZXciLCJpdGVtcyIsImltZ1VybCIsImlzSW1nIiwibXNnIiwidHlwZSIsImltZ0FyciIsImZpbHRlciIsImltZ1VybEFyciIsIm1hcCIsImZpbGUiLCJwcmV2aWV3SW1hZ2UiLCJjdXJyZW50IiwidXJscyIsInN1Y2Nlc3MiLCJyZXMiLCJjb25zb2xlIiwic2VuZEVtb2ppIiwiZXZlbnQiLCJ0aGF0IiwidGFyZ2V0IiwiZGF0YXNldCIsIm1zZ2xlbiIsImxlbmd0aCIsInN0ciIsInN0YXJ0IiwibGFzdEluZGV4T2YiLCJlbmQiLCJsZW4iLCJzbGljZSIsInB1c2hNc2ciLCJiaW5kIiwidHJpbSIsInNlbmRUZXh0IiwiZXJyb3IiLCJwYWdlIiwib3ByIiwiaW5mbyIsImNoYW5nZU5hdiIsImN1cnJlbnRUYXJnZXQiLCJpbmRleCIsImNob29zZUltYWdlIiwiY291bnQiLCJwcmV2aWV3RmlsZSIsInd4RmlsZVBhdGgiLCJ0ZW1wRmlsZVBhdGhzIiwic2VuZEZpbGUiLCJzZW5kIiwic2V0VGV4dCIsImRldGFpbCIsInZhbHVlIiwiQXJyYXkiLCJpc0FycmF5IiwiZW1qaSIsInBhcnNlRW1vamkiLCJyZXBsYWNlIiwiY2hhdHJvb21JZCIsImZsb3ciLCJmcm9tQXZhdGFyIiwiZnJvbUNsaWVudFR5cGUiLCJmcm9tQ3VzdG9tIiwiZnJvbU5pY2siLCJyZXNlbmQiLCJzdGF0dXMiLCJ0aW1lIiwidXNlclVwZGF0ZVRpbWUiLCJtZXJnZWQiLCJoYW5kbGVGb2N1cyIsIm9wdGlvbnMiLCJyb29taWQiLCJjcmVhdG9yIiwiYXBwbHkiLCJoYXNNc2dzIiwibmltVG9rZW4iLCJhY2NpZCIsImF2YXRhclVybCIsImpmVG9rZW4iLCJhZGRUb1Jvb20iLCJnZXRPbmVCeUlkIiwicm9vbUluZm8iLCJnZXRVc2VyTGlzdCIsImdldENoYXRyb29tQWRkcmVzc2VzIiwiYWRkcmVzcyIsImdldEluc3RhbmNlIiwiYWNjb3VudCIsInRva2VuIiwiY2hhdHJvb21BZGRyZXNzZXMiLCJvbm1zZ3MiLCJ0aXAiLCJjb25kIiwiZXF1YWxzIiwiYWx3YXlzIiwiYXR0YWNoIiwidGlwTXNnIiwib25jb25uZWN0Iiwic2hvd0xvYWRpbmciLCJnZXRIaXN0b3J5TXNncyIsImxpbWl0IiwicmV2ZXJzZSIsImhpZGVMb2FkaW5nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7O0lBQVlBLEc7O0FBQ1o7O0FBR0E7O0lBQVlDLFc7O0FBRVo7Ozs7OztJQWtCcUJDLFEsV0FkcEIsd0JBQVE7QUFDUEMsUUFBTTtBQUFBLFdBQVNDLE1BQU1DLE1BQU4sQ0FBYUYsSUFBdEI7QUFBQSxHQURDO0FBRVBHLE9BQUs7QUFBQSxXQUFTRixNQUFNQyxNQUFO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QkFBdEJsRixRIiwiZmlsZSI6ImNoYXRyb29tLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuaW1wb3J0IFIgZnJvbSAnLi4vbGlicy9yYW1kYSdcbmltcG9ydCBDaGF0cm9vbVNESyBmcm9tICcuLi91dGlscy9jaGF0cm9vbSdcbmltcG9ydCBOSU0gZnJvbSAnLi4vdXRpbHMvbmltJ1xuaW1wb3J0IEZhY2VJTSBmcm9tICcuLi91dGlscy9XZWJJTSdcbmltcG9ydCAqIGFzIGxvZyBmcm9tICcuLi91dGlscy9sb2cnXG5pbXBvcnQge1xuICByZWZyZXNoTXNnc1xufSBmcm9tICcuLi9hY3Rpb25zL2NoYXRyb29tJ1xuaW1wb3J0ICogYXMgY2hhdHJvb21BcGkgZnJvbSAnLi4vYXBpcy9jaGF0cm9vbSdcblxuaW1wb3J0IHtcbiAgY29ubmVjdFxufSBmcm9tICd3ZXB5LXJlZHV4J1xuXG5AY29ubmVjdCh7XG4gIHVzZXI6IHN0YXRlID0+IHN0YXRlLmNvbW1vbi51c2VyLFxuICBuaW06IHN0YXRlID0+IHN0YXRlLmNvbW1vbi5uaW0sXG4gIG1zZ3M6IGZ1bmN0aW9uIChzdGF0ZSkge1xuICAgIHJldHVybiBzdGF0ZS5jaGF0cm9vbS5tc2dzW3RoaXMucm9vbUlkXSB8fCBbXVxuICB9LFxuICBpbnRvVmlldzogZnVuY3Rpb24oc3RhdGUpIHtcbiAgICBjb25zdCBtc2dzID0gc3RhdGUuY2hhdHJvb20ubXNnc1t0aGlzLnJvb21JZF0gfHwgW11cbiAgICBjb25zdCBsYXN0ID0gUi5sYXN0KG1zZ3MpXG4gICAgcmV0dXJuIGxhc3QgPyBsYXN0LmlkQ2xpZW50IDogJydcbiAgfVxufSwge1xuICByZWZyZXNoTXNnc1xufSlcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENoYXRyb29tIGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgY29uZmlnID0ge1xuICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICfogYrlpKnlrqQnXG4gIH1cblxuICBkYXRhID0ge1xuICAgIG5hdnM6IFsn6IGK5aSpJywgJ+ivpuaDhSddLFxuICAgIGN1cnJlbnROYXY6IDAsXG4gICAgbnVtTGlzdDogW10sXG4gICAgY2hhdHJvb206IG51bGwsXG4gICAgcm9vbUlkOiBudWxsLFxuICAgIHNlbmRlZDogZmFsc2UsXG4gICAgdGV4dDogJycsXG4gICAgcm9vbURhdGE6IHtcbiAgICAgIG5hbWU6ICfliqDovb3kuK0uLi4nXG4gICAgfSxcbiAgICBpbmRpY2F0b3JEb3RzOiB0cnVlLFxuICAgIGF1dG9wbGF5OiBmYWxzZSxcbiAgICBpbnRlcnZhbDogNTAwMCxcbiAgICBkdXJhdGlvbjogMTAwMCxcbiAgICBzaG93OiAnZW1vamlfbGlzdCcsXG4gICAgc2hvd2VtOiAnb3BlcmF0aW9uJyxcbiAgICBlbW9qaTogRmFjZUlNLmRlZmF1bHQuRW1vamksXG4gICAgZW1vamlPYmo6IEZhY2VJTS5kZWZhdWx0LkVtb2ppT2JqXG4gIH1cblxuICBtZXRob2RzID0ge1xuICAgIGFzeW5jIGhhbmRsZU5hbWUgKGl0ZW0pIHtcbiAgICAgIGNvbnN0IGl0ZW1BY2NpZCA9IGl0ZW0uZnJvbVxuICAgICAgY29uc3Qge2lkfSA9IGF3YWl0IGNoYXRyb29tQXBpLmdldEl0ZW1JZChpdGVtQWNjaWQpXG4gICAgICB3ZXB5Lm5hdmlnYXRlVG8oe1xuICAgICAgICB1cmw6IGB1c2VySW5mbz9pZD0ke2lkfWBcbiAgICAgIH0pXG4gICAgfSxcbiAgICBoYW5kbGVOYW1lSWQgKGl0ZW0pIHtcbiAgICAgIGNvbnN0IGl0ZW1pZCA9IGl0ZW0uaWRcbiAgICAgIHdlcHkubmF2aWdhdGVUbyh7XG4gICAgICAgIHVybDogYHVzZXJJbmZvP2lkPSR7aXRlbWlkfWBcbiAgICAgIH0pXG4gICAgfSxcbiAgICBvcGVuRW1vamkgKGUpIHtcbiAgICAgIGlmICh0aGlzLnNob3cgPT09ICdzaG93RW1vamknKSB7XG4gICAgICAgIHRoaXMuc2hvdyA9ICdlbW9qaV9saXN0J1xuICAgICAgICB0aGlzLnNob3dlbSA9ICdvcGVyYXRpb24nXG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnNob3cgPSAnc2hvd0Vtb2ppJ1xuICAgICAgICB0aGlzLnNob3dlbSA9ICdzaG93RW1vamlPcGVyYXRpb24nXG4gICAgICB9XG4gICAgICB0aGlzLiRhcHBseSgpXG4gICAgfSxcbiAgICBpbWdQcmV2aWV3IChpdGVtcywgbXNncykge1xuICAgICAgY29uc3QgaW1nVXJsID0gaXRlbXNcbiAgICAgIGNvbnN0IGlzSW1nID0gbXNnID0+IG1zZy50eXBlID09PSAnaW1hZ2UnXG4gICAgICBjb25zdCBpbWdBcnIgPSBSLmZpbHRlcihpc0ltZykobXNncylcbiAgICAgIGNvbnN0IGltZ1VybEFyciA9IGltZ0Fyci5tYXAobXNnID0+IHtcbiAgICAgICAgcmV0dXJuIG1zZy5maWxlLnVybFxuICAgICAgfSlcbiAgICAgIHdlcHkucHJldmlld0ltYWdlKHtcbiAgICAgICAgY3VycmVudDogaW1nVXJsLFxuICAgICAgICB1cmxzOiBpbWdVcmxBcnIsXG4gICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChyZXMpIHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhyZXMpXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfSxcbiAgICBhc3luYyBzZW5kRW1vamkgKGV2ZW50KSB7XG4gICAgICB2YXIgdGhhdCA9IHRoaXNcbiAgICAgIHZhciBlbW9qaSA9IGV2ZW50LnRhcmdldC5kYXRhc2V0LmVtb2ppXG4gICAgICB2YXIgbXNnbGVuID0gdGhhdC5kYXRhLnRleHQubGVuZ3RoIC0gMVxuICAgICAgaWYgKGVtb2ppICYmIGVtb2ppICE9PSAnW2RlbF0nKSB7XG4gICAgICAgIHZhciBzdHIgPSB0aGF0LmRhdGEudGV4dCArIGVtb2ppXG4gICAgICB9IGVsc2UgaWYgKGVtb2ppID09PSAnW2RlbF0nKSB7XG4gICAgICAgIHZhciBzdGFydCA9IHRoYXQuZGF0YS50ZXh0Lmxhc3RJbmRleE9mKCdbJylcbiAgICAgICAgdmFyIGVuZCA9IHRoYXQuZGF0YS50ZXh0Lmxhc3RJbmRleE9mKCddJylcbiAgICAgICAgdmFyIGxlbiA9IGVuZCAtIHN0YXJ0XG4gICAgICAgIGlmIChlbmQgIT09IC0xICYmIGVuZCA9PT0gbXNnbGVuICYmIGxlbiA+PSAzICYmIGxlbiA8PSA0KSB7XG4gICAgICAgICAgc3RyID0gdGhhdC5kYXRhLnRleHQuc2xpY2UoMCwgc3RhcnQpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgc3RyID0gdGhhdC5kYXRhLnRleHQuc2xpY2UoMCwgbXNnbGVuKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICB0aGlzLnRleHQgPSBzdHJcbiAgICAgIGNvbnN0IHB1c2hNc2cgPSB0aGlzLm1ldGhvZHMucHVzaE1zZy5iaW5kKHRoaXMpXG4gICAgICB2YXIgdGV4dCA9IFIudHJpbSh0aGlzLnRleHQpXG4gICAgICB0aGlzLnRleHQgPSAnJ1xuICAgICAgaWYgKHRleHQubGVuZ3RoKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgY29uc3QgbXNnID0gYXdhaXQgdGhpcy5jaGF0cm9vbS5zZW5kVGV4dCh7XG4gICAgICAgICAgICB0ZXh0XG4gICAgICAgICAgfSlcbiAgICAgICAgICB0aGlzLnRleHQgPSAnJ1xuICAgICAgICAgIHB1c2hNc2cobXNnKVxuICAgICAgICAgIHRoaXMuc2hvdyA9ICdlbW9qaV9saXN0J1xuICAgICAgICAgIHRoaXMuc2hvd2VtID0gJ29wZXJhdGlvbidcbiAgICAgICAgICB0aGlzLiRhcHBseSgpXG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICBsb2cuZXJyb3Ioe1xuICAgICAgICAgICAgcGFnZTogJ2NoYXRyb29tJyxcbiAgICAgICAgICAgIG9wcjogJ3NlbmRUZXh0JyxcbiAgICAgICAgICAgIGluZm86IGVcbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcbiAgICBjaGFuZ2VOYXYgKGUpIHtcbiAgICAgIGNvbnNvbGUubG9nKGUpXG4gICAgICB0aGlzLmN1cnJlbnROYXYgPSBlLmN1cnJlbnRUYXJnZXQuZGF0YXNldC5pbmRleFxuICAgICAgdGhpcy4kYXBwbHkoKVxuICAgIH0sXG4gICAgYXN5bmMgY2hvb3NlSW1hZ2UoKSB7XG4gICAgICAvLyDov5vooYzlm77niYfpgInmi6nlubbkuIrkvKBcbiAgICAgIGNvbnN0IHB1c2hNc2cgPSB0aGlzLm1ldGhvZHMucHVzaE1zZy5iaW5kKHRoaXMpXG4gICAgICBjb25zdCByZXMgPSBhd2FpdCB3ZXB5LmNob29zZUltYWdlKHtcbiAgICAgICAgY291bnQ6IDFcbiAgICAgIH0pXG5cbiAgICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IGZpbGUgPSBhd2FpdCB0aGlzLmNoYXRyb29tLnByZXZpZXdGaWxlKHtcbiAgICAgICAgICB0eXBlOiAnaW1hZ2UnLFxuICAgICAgICAgIHd4RmlsZVBhdGg6IHJlcy50ZW1wRmlsZVBhdGhzWzBdXG4gICAgICAgIH0pXG4gICAgICAgIGNvbnN0IG1zZyA9IGF3YWl0IHRoaXMuY2hhdHJvb20uc2VuZEZpbGUoe1xuICAgICAgICAgIHR5cGU6ICdpbWFnZScsXG4gICAgICAgICAgZmlsZTogZmlsZVxuICAgICAgICB9KVxuICAgICAgICBwdXNoTXNnKG1zZylcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGxvZy5lcnJvcih7XG4gICAgICAgICAgcGFnZTogJ2NoYXRyb29tJyxcbiAgICAgICAgICBvcHI6ICdzZW5kRmlsZScsXG4gICAgICAgICAgaW5mbzogZXJyb3JcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9LFxuICAgIGFzeW5jIHNlbmQoKSB7XG4gICAgICAvLyA/IHdoeSBiaW5kXG4gICAgICBjb25zdCBwdXNoTXNnID0gdGhpcy5tZXRob2RzLnB1c2hNc2cuYmluZCh0aGlzKVxuICAgICAgY29uc3QgdGV4dCA9IFIudHJpbSh0aGlzLnRleHQpXG4gICAgICB0aGlzLnRleHQgPSAnJ1xuICAgICAgaWYgKHRleHQubGVuZ3RoKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgY29uc3QgbXNnID0gYXdhaXQgdGhpcy5jaGF0cm9vbS5zZW5kVGV4dCh7XG4gICAgICAgICAgICB0ZXh0XG4gICAgICAgICAgfSlcbiAgICAgICAgICB0aGlzLnRleHQgPSAnJ1xuICAgICAgICAgIHB1c2hNc2cobXNnKVxuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgbG9nLmVycm9yKHtcbiAgICAgICAgICAgIHBhZ2U6ICdjaGF0cm9vbScsXG4gICAgICAgICAgICBvcHI6ICdzZW5kVGV4dCcsXG4gICAgICAgICAgICBpbmZvOiBlXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG4gICAgc2V0VGV4dChlKSB7XG4gICAgICB0aGlzLnRleHQgPSBlLmRldGFpbC52YWx1ZVxuICAgIH0sXG4gICAgcHVzaE1zZzogZnVuY3Rpb24gKG1zZ3MpIHtcbiAgICAgIGNvbnN0IHsgcmVmcmVzaE1zZ3MgfSA9IHRoaXMubWV0aG9kc1xuICAgICAgaWYgKCFBcnJheS5pc0FycmF5KG1zZ3MpKSB7XG4gICAgICAgIG1zZ3MgPSBbbXNnc11cbiAgICAgIH1cbiAgICAgIGNvbnNvbGUubG9nKCflsLHmmK/ov5nkuKrlm74nLCBtc2dzKVxuICAgICAgbXNncyA9IG1zZ3MubWFwKG1zZyA9PiB7XG4gICAgICAgIGlmIChtc2cudHlwZSA9PT0gJ3RleHQnKSB7XG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGVtamk6IEZhY2VJTS5kZWZhdWx0LnBhcnNlRW1vamkobXNnLnRleHQucmVwbGFjZSgvXFxuL21nLCAnJykpLFxuICAgICAgICAgICAgY2hhdHJvb21JZDogbXNnLmNoYXRyb29tSWQsXG4gICAgICAgICAgICBmbG93OiBtc2cuZmxvdyxcbiAgICAgICAgICAgIGZyb206IG1zZy5mcm9tLFxuICAgICAgICAgICAgZnJvbUF2YXRhcjogbXNnLmZyb21BdmF0YXIsXG4gICAgICAgICAgICBmcm9tQ2xpZW50VHlwZTogbXNnLmZyb21DbGllbnRUeXBlLFxuICAgICAgICAgICAgZnJvbUN1c3RvbTogbXNnLmZyb21DdXN0b20sXG4gICAgICAgICAgICBmcm9tTmljazogbXNnLmZyb21OaWNrLFxuICAgICAgICAgICAgaWRDbGllbnQ6IG1zZy5pZENsaWVudCxcbiAgICAgICAgICAgIHJlc2VuZDogbXNnLnJlc2VuZCxcbiAgICAgICAgICAgIHN0YXR1czogbXNnLnN0YXR1cyxcbiAgICAgICAgICAgIHRleHQ6IG1zZy50ZXh0LFxuICAgICAgICAgICAgdGltZTogbXNnLnRpbWUsXG4gICAgICAgICAgICB0eXBlOiBtc2cudHlwZSxcbiAgICAgICAgICAgIHVzZXJVcGRhdGVUaW1lOiBtc2cudXNlclVwZGF0ZVRpbWVcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIG1zZ1xuICAgICAgICB9XG4gICAgICB9KVxuLy8gICAgICBjb25zb2xlLmxvZyh0aGlzLnJvb21JZClcbiAgICAgIGNvbnN0IHJvb21JZCA9IG1zZ3NbMF0uY2hhdHJvb21JZCB8fCB0aGlzLnJvb21JZFxuICAgICAgY29uc3QgbWVyZ2VkID0gWy4uLnRoaXMubXNncywgLi4ubXNnc11cbiAgICAgIHJlZnJlc2hNc2dzKHJvb21JZCwgbWVyZ2VkKVxuICAgICAgdGhpcy5zZW5kZWQgPSB0cnVlXG4gICAgICB0aGlzLiRhcHBseSgpXG4gICAgfSxcbiAgICBoYW5kbGVGb2N1cygpIHtcbiAgICAgIHRoaXMuc2VuZGVkID0gZmFsc2VcbiAgICB9XG4gIH1cblxuICBhc3luYyBvbkxvYWQob3B0aW9ucykge1xuICAgIGNvbnN0IHsgaWQgfSA9IG9wdGlvbnNcbiAgICBjb25zdCB7cm9vbWlkfSA9IG9wdGlvbnNcbiAgICBjb25zdCB7Y3JlYXRvcn0gPSBvcHRpb25zXG4gICAgdGhpcy5yb29tSWQgPSByb29taWRcbiAgICBjb25zdCBwdXNoTXNnID0gdGhpcy5tZXRob2RzLnB1c2hNc2cuYmluZCh0aGlzKVxuICAgIGNvbnN0IGFwcGx5ID0gdGhpcy4kYXBwbHkuYmluZCh0aGlzKVxuICAgIGNvbnN0IGhhc01zZ3MgPSB0aGlzLm1zZ3MubGVuZ3RoID4gMFxuICAgIHRyeSB7XG4gICAgICBjb25zdCB7IG5pbVRva2VuLCBhY2NpZCwgYXZhdGFyVXJsLCBqZlRva2VuIH0gPSB0aGlzLnVzZXJcbiAgICAgIGlmIChjcmVhdG9yICE9PSBhY2NpZCkge1xuICAgICAgICBhd2FpdCBjaGF0cm9vbUFwaS5hZGRUb1Jvb20ocm9vbWlkLCBjcmVhdG9yLCBhY2NpZClcbiAgICAgIH1cbiAgICAgIGF3YWl0IGNoYXRyb29tQXBpLmFkZFRvUm9vbShyb29taWQsIGNyZWF0b3IsIGFjY2lkKVxuICAgICAgY29uc3Qgcm9vbUluZm8gPSBhd2FpdCBjaGF0cm9vbUFwaS5nZXRPbmVCeUlkKGlkLCBqZlRva2VuKVxuICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IGNoYXRyb29tQXBpLmdldFVzZXJMaXN0KHJvb21pZCwgamZUb2tlbilcbiAgICAgIHRoaXMubnVtTGlzdCA9IGRhdGFcbiAgICAgIHRoaXMucm9vbURhdGEgPSByb29tSW5mb1xuICAgICAgY29uc3Qgcm9vbUlkID0gdGhpcy5yb29tSWRcbiAgICAgIGNvbnN0IGFkZHJlc3MgPSBhd2FpdCBOSU0uZ2V0Q2hhdHJvb21BZGRyZXNzZXMoYWNjaWQsIHJvb21JZClcbiAgICAgIGNvbnN0IGNoYXRyb29tID0gQ2hhdHJvb21TREsuZ2V0SW5zdGFuY2Uoe1xuLy8gICAgICAgIGRlYnVnOiB0cnVlLFxuICAgICAgICBhY2NvdW50OiBhY2NpZCxcbiAgICAgICAgdG9rZW46IG5pbVRva2VuLFxuICAgICAgICBjaGF0cm9vbUlkOiByb29tSWQsXG4gICAgICAgIGNoYXRyb29tQWRkcmVzc2VzOiBhZGRyZXNzLFxuICAgICAgICBvbm1zZ3M6IGZ1bmN0aW9uKG1zZ3MpIHtcbiAgICAgICAgICBsb2cuaW5mbyh7XG4gICAgICAgICAgICBwYWdlOiAnY2hhdHJvb20nLFxuICAgICAgICAgICAgb3ByOiAnaW5pdGlhbGl6ZSBzZGsgaW5zdGFuY2UnLFxuICAgICAgICAgICAgaW5mbzogbXNnc1xuICAgICAgICAgIH0pXG4vLyAgICAgICAgICBjb25zb2xlLmxvZygn5pS25Yiw6IGK5aSp5a6k5L+h5oGvJywgbXNncylcbiAgICAgICAgICBwdXNoTXNnKG1zZ3MubWFwKG1zZyA9PiB7XG4gICAgICAgICAgICBpZiAobXNnLnR5cGUgPT09ICdub3RpZmljYXRpb24nKSB7XG4gICAgICAgICAgICAgIC8vIOi/m+WFpeiBiuWkqeWupOS/oeaBr1xuICAgICAgICAgICAgICBjb25zdCB0aXAgPSBSLmNvbmQoW1xuICAgICAgICAgICAgICAgIFtSLmVxdWFscygnbWVtYmVyRW50ZXInKSwgUi5hbHdheXMoJ+WKoOWFpeiBiuWkqeWupCcpXSxcbiAgICAgICAgICAgICAgICBbUi5lcXVhbHMoJ21lbWJlckV4aXQnKSwgUi5hbHdheXMoJ+mAgOWHuuiBiuWkqeWupCcpXVxuICAgICAgICAgICAgICBdKShtc2cuYXR0YWNoLnR5cGUpXG4gICAgICAgICAgICAgIGNvbnN0IHRpcE1zZyA9IGAke21zZy5hdHRhY2guZnJvbU5pY2t9ICR7dGlwfWBcbiAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAuLi5tc2csXG4gICAgICAgICAgICAgICAgdHlwZTogJ25vdGlmaWNhdGlvbicsXG4gICAgICAgICAgICAgICAgdGV4dDogdGlwTXNnLFxuICAgICAgICAgICAgICAgIGZyb21BdmF0YXI6IGF2YXRhclVybFxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICByZXR1cm4gbXNnXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSkpXG4gICAgICAgIH0sXG4gICAgICAgIGFzeW5jIG9uY29ubmVjdCgpIHtcbiAgICAgICAgICBsb2cuaW5mbyh7XG4gICAgICAgICAgICBwYWdlOiAnY2hhdHJvb20nLFxuICAgICAgICAgICAgb3ByOiAnaW5pdGlhbGl6ZSBzZGsgaW5zdGFuY2UnLFxuICAgICAgICAgICAgaW5mbzogJ1tOSU0gQ0hBVFJPT01dIGNvbm5lY3RlZCdcbiAgICAgICAgICB9KVxuICAgICAgICAgIGlmICghaGFzTXNncykge1xuICAgICAgICAgICAgd2VweS5zaG93TG9hZGluZygpXG4gICAgICAgICAgICAvLyDmi4nlj5bmnIDov5EgMTAwIOadoeS/oeaBr1xuICAgICAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgY2hhdHJvb20uZ2V0SGlzdG9yeU1zZ3Moe1xuICAgICAgICAgICAgICBsaW1pdDogMTAwXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgY29uc3QgbXNncyA9IHJlcy5tc2dzLmZpbHRlcihtc2cgPT4gbXNnLnR5cGUgIT09ICdub3RpZmljYXRpb24nICYmIG1zZy50eXBlICE9PSAndGlwJykucmV2ZXJzZSgpXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnaGlzdG9yeSBtZXNzYWdlcycsIG1zZ3MpXG5cbiAgICAgICAgICAgIC8vIOWIt+aWsOa2iOaBr1xuICAgICAgICAgICAgcHVzaE1zZyhtc2dzIHx8IFtdKVxuICAgICAgICAgICAgYXBwbHkoKVxuICAgICAgICAgICAgd2VweS5oaWRlTG9hZGluZygpXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgdGhpcy5jaGF0cm9vbSA9IGNoYXRyb29tXG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgbG9nLmVycm9yKHtcbiAgICAgICAgcGFnZTogJ2NoYXRyb29tJyxcbiAgICAgICAgb3ByOiAnZ2V0SW5zdGFuY2UnLFxuICAgICAgICBpbmZvOiBlXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIGFzeW5jIG9uU2hvdygpIHtcblxuICB9XG59XG4iXX0=