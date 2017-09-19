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
      isLIMIT: false,
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
      emojiObj: _WebIM2.default.default.EmojiObj,
      nowTime: '',
      nowPeoples: 0,
      searchinput: ''
    }, _this.methods = {
      getCountsNum: function getCountsNum(id, jfToken) {
        var _this2 = this;

        return (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
          var _ref2, onlineusercount;

          return _regenerator2.default.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  _context.next = 2;
                  return chatroomApi.getOneById(id, jfToken);

                case 2:
                  _ref2 = _context.sent;
                  onlineusercount = _ref2.onlineusercount;

                  _this2.nowPeoples = onlineusercount;
                  _this2.$apply();

                case 6:
                case 'end':
                  return _context.stop();
              }
            }
          }, _callee, _this2);
        }))();
      },
      handleName: function handleName(item) {
        var _this3 = this;

        return (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2() {
          var itemAccid, _ref3, id;

          return _regenerator2.default.wrap(function _callee2$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  itemAccid = item.from;
                  _context2.next = 3;
                  return chatroomApi.getItemId(itemAccid);

                case 3:
                  _ref3 = _context2.sent;
                  id = _ref3.id;

                  _wepy2.default.navigateTo({
                    url: 'userInfo?id=' + id
                  });

                case 6:
                case 'end':
                  return _context2.stop();
              }
            }
          }, _callee2, _this3);
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
        var _this4 = this;

        return (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3() {
          var that, emoji, msglen, str, start, end, len, pushMsg, text, msg;
          return _regenerator2.default.wrap(function _callee3$(_context3) {
            while (1) {
              switch (_context3.prev = _context3.next) {
                case 0:
                  that = _this4;
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
                  _this4.text = str;
                  pushMsg = _this4.methods.pushMsg.bind(_this4);
                  text = _ramda2.default.trim(_this4.text);

                  _this4.text = '';

                  if (!text.length) {
                    _context3.next = 23;
                    break;
                  }

                  _context3.prev = 9;
                  _context3.next = 12;
                  return _this4.chatroom.sendText({
                    text: text
                  });

                case 12:
                  msg = _context3.sent;

                  _this4.text = '';
                  pushMsg(msg);
                  _this4.show = 'emoji_list';
                  _this4.showem = 'operation';
                  _this4.$apply();
                  _context3.next = 23;
                  break;

                case 20:
                  _context3.prev = 20;
                  _context3.t0 = _context3['catch'](9);

                  log.error({
                    page: 'chatroom',
                    opr: 'sendText',
                    info: _context3.t0
                  });

                case 23:
                case 'end':
                  return _context3.stop();
              }
            }
          }, _callee3, _this4, [[9, 20]]);
        }))();
      },
      changeNav: function changeNav(e) {
        this.currentNav = e.currentTarget.dataset.index;
        this.sended = false;
        this.$apply();
      },
      chooseImage: function chooseImage() {
        var _this5 = this;

        return (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee4() {
          var pushMsg, res, file, msg;
          return _regenerator2.default.wrap(function _callee4$(_context4) {
            while (1) {
              switch (_context4.prev = _context4.next) {
                case 0:
                  // 进行图片选择并上传
                  pushMsg = _this5.methods.pushMsg.bind(_this5);
                  _context4.next = 3;
                  return _wepy2.default.chooseImage({
                    count: 1
                  });

                case 3:
                  res = _context4.sent;
                  _context4.prev = 4;
                  _context4.next = 7;
                  return _this5.chatroom.previewFile({
                    type: 'image',
                    wxFilePath: res.tempFilePaths[0]
                  });

                case 7:
                  file = _context4.sent;
                  _context4.next = 10;
                  return _this5.chatroom.sendFile({
                    type: 'image',
                    file: file
                  });

                case 10:
                  msg = _context4.sent;

                  pushMsg(msg);
                  _context4.next = 17;
                  break;

                case 14:
                  _context4.prev = 14;
                  _context4.t0 = _context4['catch'](4);

                  log.error({
                    page: 'chatroom',
                    opr: 'sendFile',
                    info: _context4.t0
                  });

                case 17:
                case 'end':
                  return _context4.stop();
              }
            }
          }, _callee4, _this5, [[4, 14]]);
        }))();
      },
      send: function send() {
        var _this6 = this;

        return (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee5() {
          var pushMsgText, text, msg;
          return _regenerator2.default.wrap(function _callee5$(_context5) {
            while (1) {
              switch (_context5.prev = _context5.next) {
                case 0:
                  // ? why bind
                  _this6.setData({
                    searchinput: ''
                  });
                  pushMsgText = _this6.methods.pushMsgText.bind(_this6);
                  text = _ramda2.default.trim(_this6.text);

                  _this6.text = '';

                  if (!text.length) {
                    _context5.next = 16;
                    break;
                  }

                  _context5.prev = 5;
                  _context5.next = 8;
                  return _this6.chatroom.sendText({
                    text: text
                  });

                case 8:
                  msg = _context5.sent;

                  _this6.text = '';
                  pushMsgText(msg);
                  _context5.next = 16;
                  break;

                case 13:
                  _context5.prev = 13;
                  _context5.t0 = _context5['catch'](5);

                  log.error({
                    page: 'chatroom',
                    opr: 'sendText',
                    info: _context5.t0
                  });

                case 16:
                case 'end':
                  return _context5.stop();
              }
            }
          }, _callee5, _this6, [[5, 13]]);
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
        var roomId = this.roomId;
        console.log(roomId);
        if (msgs.length > 0) {
          roomId = msgs[0].chatroomId;
        }
        var merged = [].concat((0, _toConsumableArray3.default)(this.msgs), (0, _toConsumableArray3.default)(msgs));
        refreshMsgs(roomId, merged);
        this.sended = true;
        this.$apply();
      },
      pushMsgText: function pushMsgText(msgs) {
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
        var roomId = this.roomId;
        console.log(roomId);
        if (msgs.length > 0) {
          roomId = msgs[0].chatroomId;
        }
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
      var _ref4 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee7(options) {
        var id, roomid, creator, pushMsg, getCountsNum, apply, hasMsgs, _user, nimToken, accid, avatarUrl, jfToken, roomInfo, data, islimit, isUser, userLimitArr, roomId, address, chatroom;

        return _regenerator2.default.wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                id = options.id;
                roomid = options.roomid;
                creator = options.creator;

                this.roomId = roomid;
                pushMsg = this.methods.pushMsg.bind(this);
                getCountsNum = this.methods.getCountsNum.bind(this);
                apply = this.$apply.bind(this);
                hasMsgs = this.msgs.length > 0;
                _context7.prev = 8;
                _user = this.user, nimToken = _user.nimToken, accid = _user.accid, avatarUrl = _user.avatarUrl, jfToken = _user.jfToken;
                //      if (creator !== accid) {
                //        await chatroomApi.addToRoom(roomid, creator, accid)
                //      }

                _context7.next = 12;
                return chatroomApi.addToRoom(roomid, creator, accid);

              case 12:
                _context7.next = 14;
                return chatroomApi.getOneById(id, jfToken);

              case 14:
                roomInfo = _context7.sent;
                _context7.next = 17;
                return chatroomApi.getUserList(roomid, jfToken);

              case 17:
                data = _context7.sent;

                islimit = function islimit(data) {
                  return data.type === 'LIMITED';
                };

                isUser = function isUser(data) {
                  return data.name && data.name !== null;
                };

                this.numList = _ramda2.default.filter(isUser)(data);
                userLimitArr = _ramda2.default.filter(islimit)(this.numList);

                console.log('禁言列表', userLimitArr);
                if (userLimitArr.length > 0) {
                  if (userLimitArr[0].accid === accid) {
                    this.isLIMIT = true;
                    console.log('被禁言');
                  }
                }
                this.roomData = roomInfo;
                roomId = this.roomId;
                _context7.next = 28;
                return _nim2.default.getChatroomAddresses(accid, roomId);

              case 28:
                address = _context7.sent;
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
                        getCountsNum(id, jfToken);
                        // 进入聊天室信息
                        var tip = _ramda2.default.cond([[_ramda2.default.equals('memberEnter'), _ramda2.default.always('加入聊天室')], [_ramda2.default.equals('memberExit'), _ramda2.default.always('退出聊天室')]])(msg.attach.type);
                        var tipMsg = msg.attach.fromNick + ' ' + tip;
                        return (0, _extends3.default)({}, msg, {
                          type: 'notification',
                          text: tipMsg,
                          fromAvatar: avatarUrl,
                          nowTime: new Date(Date.parse(new Date()) + 28800000).toISOString().split('T')[0] + ' ' + new Date().toTimeString().substr(0, 8)
                        });
                      } else {
                        return msg;
                      }
                    }));
                  },
                  onconnect: function onconnect() {
                    var _this7 = this;

                    return (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee6() {
                      var res, msgs;
                      return _regenerator2.default.wrap(function _callee6$(_context6) {
                        while (1) {
                          switch (_context6.prev = _context6.next) {
                            case 0:
                              log.info({
                                page: 'chatroom',
                                opr: 'initialize sdk instance',
                                info: '[NIM CHATROOM] connected'
                              });

                              if (hasMsgs) {
                                _context6.next = 11;
                                break;
                              }

                              _wepy2.default.showLoading();
                              // 拉取最近 100 条信息
                              _context6.next = 5;
                              return chatroom.getHistoryMsgs({
                                limit: 100
                              });

                            case 5:
                              res = _context6.sent;
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
                              return _context6.stop();
                          }
                        }
                      }, _callee6, _this7);
                    }))();
                  }
                });

                this.chatroom = chatroom;
                _context7.next = 36;
                break;

              case 33:
                _context7.prev = 33;
                _context7.t0 = _context7['catch'](8);

                log.error({
                  page: 'chatroom',
                  opr: 'getInstance',
                  info: _context7.t0
                });

              case 36:
              case 'end':
                return _context7.stop();
            }
          }
        }, _callee7, this, [[8, 33]]);
      }));

      function onLoad(_x) {
        return _ref4.apply(this, arguments);
      }

      return onLoad;
    }()
  }, {
    key: 'onShow',
    value: function () {
      var _ref5 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee8() {
        return _regenerator2.default.wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                this.isLIMIT = false;
                this.sended = false;
                this.currentNav = 0;

              case 3:
              case 'end':
                return _context8.stop();
            }
          }
        }, _callee8, this);
      }));

      function onShow() {
        return _ref5.apply(this, arguments);
      }

      return onShow;
    }()
  }]);
  return Chatroom;
}(_wepy2.default.page)) || _class);

Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Chatroom , 'pages/chatroom'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoYXRyb29tLmpzIl0sIm5hbWVzIjpbImxvZyIsImNoYXRyb29tQXBpIiwiQ2hhdHJvb20iLCJ1c2VyIiwic3RhdGUiLCJjb21tb24iLCJuaW0iLCJtc2dzIiwiY2hhdHJvb20iLCJyb29tSWQiLCJpbnRvVmlldyIsImxhc3QiLCJpZENsaWVudCIsInJlZnJlc2hNc2dzIiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsImRhdGEiLCJuYXZzIiwiY3VycmVudE5hdiIsIm51bUxpc3QiLCJpc0xJTUlUIiwic2VuZGVkIiwidGV4dCIsInJvb21EYXRhIiwibmFtZSIsImluZGljYXRvckRvdHMiLCJhdXRvcGxheSIsImludGVydmFsIiwiZHVyYXRpb24iLCJzaG93Iiwic2hvd2VtIiwiZW1vamkiLCJkZWZhdWx0IiwiRW1vamkiLCJlbW9qaU9iaiIsIkVtb2ppT2JqIiwibm93VGltZSIsIm5vd1Blb3BsZXMiLCJzZWFyY2hpbnB1dCIsIm1ldGhvZHMiLCJnZXRDb3VudHNOdW0iLCJpZCIsImpmVG9rZW4iLCJnZXRPbmVCeUlkIiwib25saW5ldXNlcmNvdW50IiwiJGFwcGx5IiwiaGFuZGxlTmFtZSIsIml0ZW0iLCJpdGVtQWNjaWQiLCJmcm9tIiwiZ2V0SXRlbUlkIiwibmF2aWdhdGVUbyIsInVybCIsImhhbmRsZU5hbWVJZCIsIml0ZW1pZCIsIm9wZW5FbW9qaSIsImUiLCJpbWdQcmV2aWV3IiwiaXRlbXMiLCJpbWdVcmwiLCJpc0ltZyIsIm1zZyIsInR5cGUiLCJpbWdBcnIiLCJmaWx0ZXIiLCJpbWdVcmxBcnIiLCJtYXAiLCJmaWxlIiwicHJldmlld0ltYWdlIiwiY3VycmVudCIsInVybHMiLCJzdWNjZXNzIiwicmVzIiwiY29uc29sZSIsInNlbmRFbW9qaSIsImV2ZW50IiwidGhhdCIsInRhcmdldCIsImRhdGFzZXQiLCJtc2dsZW4iLCJsZW5ndGgiLCJzdHIiLCJzdGFydCIsImxhc3RJbmRleE9mIiwiZW5kIiwibGVuIiwic2xpY2UiLCJwdXNoTXNnIiwiYmluZCIsInRyaW0iLCJzZW5kVGV4dCIsImVycm9yIiwicGFnZSIsIm9wciIsImluZm8iLCJjaGFuZ2VOYXYiLCJjdXJyZW50VGFyZ2V0IiwiaW5kZXgiLCJjaG9vc2VJbWFnZSIsImNvdW50IiwicHJldmlld0ZpbGUiLCJ3eEZpbGVQYXRoIiwidGVtcEZpbGVQYXRocyIsInNlbmRGaWxlIiwic2VuZCIsInNldERhdGEiLCJwdXNoTXNnVGV4dCIsInNldFRleHQiLCJkZXRhaWwiLCJ2YWx1ZSIsIkFycmF5IiwiaXNBcnJheSIsImVtamkiLCJwYXJzZUVtb2ppIiwicmVwbGFjZSIsImNoYXRyb29tSWQiLCJmbG93IiwiZnJvbUF2YXRhciIsImZyb21DbGllbnRUeXBlIiwiZnJvbUN1c3RvbSIsImZyb21OaWNrIiwicmVzZW5kIiwic3RhdHVzIiwidGltZSIsInVzZXJVcGRhdGVUaW1lIiwibWVyZ2VkIiwiaGFuZGxlRm9jdXMiLCJvcHRpb25zIiwicm9vbWlkIiwiY3JlYXRvciIsImFwcGx5IiwiaGFzTXNncyIsIm5pbVRva2VuIiwiYWNjaWQiLCJhdmF0YXJVcmwiLCJhZGRUb1Jvb20iLCJyb29tSW5mbyIsImdldFVzZXJMaXN0IiwiaXNsaW1pdCIsImlzVXNlciIsInVzZXJMaW1pdEFyciIsImdldENoYXRyb29tQWRkcmVzc2VzIiwiYWRkcmVzcyIsImdldEluc3RhbmNlIiwiYWNjb3VudCIsInRva2VuIiwiY2hhdHJvb21BZGRyZXNzZXMiLCJvbm1zZ3MiLCJ0aXAiLCJjb25kIiwiZXF1YWxzIiwiYWx3YXlzIiwiYXR0YWNoIiwidGlwTXNnIiwiRGF0ZSIsInBhcnNlIiwidG9JU09TdHJpbmciLCJzcGxpdCIsInRvVGltZVN0cmluZyIsInN1YnN0ciIsIm9uY29ubmVjdCIsInNob3dMb2FkaW5nIiwiZ2V0SGlzdG9yeU1zZ3MiLCJsaW1pdCIsInJldmVyc2UiLCJoaWRlTG9hZGluZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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QUE7QUFDaEJoSyxrQ0FBSThGLElBQUosQ0FBUztBQUNQRixzQ0FBTSxVQURDO0FBRVBDLHFDQUFLLHlCQUZFO0FBR1BDLHNDQUFNO0FBSEMsK0JBQVQ7O0FBRGdCLGtDQU1YcUMsT0FOVztBQUFBO0FBQUE7QUFBQTs7QUFPZCw2Q0FBSzhCLFdBQUw7QUFDUTtBQVJNO0FBQUEscUNBU1l6SixTQUFTMEosY0FBVCxDQUF3QjtBQUN4Q0MsdUNBQU87QUFEaUMsK0JBQXhCLENBVFo7O0FBQUE7QUFTQTNGLGlDQVRBO0FBWUFqRSxrQ0FaQSxHQVlPaUUsSUFBSWpFLElBQUosQ0FBU3lELE1BQVQsQ0FBZ0I7QUFBQSx1Q0FBT0gsSUFBSUMsSUFBSixLQUFhLGNBQWIsSUFBK0JELElBQUlDLElBQUosS0FBYSxLQUFuRDtBQUFBLCtCQUFoQixFQUEwRXNHLE9BQTFFLEVBWlA7O0FBYU4zRixzQ0FBUXpFLEdBQVIsQ0FBWSxrQkFBWixFQUFnQ08sSUFBaEM7QUFDQTtBQUNBZ0Ysc0NBQVFoRixRQUFRLEVBQWhCO0FBQ0EySDtBQUNBLDZDQUFLbUMsV0FBTDs7QUFqQk07QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFtQlQ7QUFyRGdDLGlCQUF4QixDOztBQXVEakIscUJBQUs3SixRQUFMLEdBQWdCQSxRQUFoQjs7Ozs7Ozs7QUFFRVIsb0JBQUkyRixLQUFKLENBQVU7QUFDUkMsd0JBQU0sVUFERTtBQUVSQyx1QkFBSyxhQUZHO0FBR1JDO0FBSFEsaUJBQVY7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVNBLHFCQUFLMUUsT0FBTCxHQUFlLEtBQWY7QUFDQSxxQkFBS0MsTUFBTCxHQUFjLEtBQWQ7QUFDQSxxQkFBS0gsVUFBTCxHQUFrQixDQUFsQjs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBaldzQyxlQUFLMEUsSTtrQkFBdEIxRixRIiwiZmlsZSI6ImNoYXRyb29tLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbiAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcclxuICBpbXBvcnQgUiBmcm9tICcuLi9saWJzL3JhbWRhJ1xyXG4gIGltcG9ydCBDaGF0cm9vbVNESyBmcm9tICcuLi91dGlscy9jaGF0cm9vbSdcclxuICBpbXBvcnQgTklNIGZyb20gJy4uL3V0aWxzL25pbSdcclxuICBpbXBvcnQgRmFjZUlNIGZyb20gJy4uL3V0aWxzL1dlYklNJ1xyXG4gIGltcG9ydCAqIGFzIGxvZyBmcm9tICcuLi91dGlscy9sb2cnXHJcbiAgaW1wb3J0IHtcclxuICAgIHJlZnJlc2hNc2dzXHJcbiAgfSBmcm9tICcuLi9hY3Rpb25zL2NoYXRyb29tJ1xyXG4gIGltcG9ydCAqIGFzIGNoYXRyb29tQXBpIGZyb20gJy4uL2FwaXMvY2hhdHJvb20nXHJcblxyXG4gIGltcG9ydCB7XHJcbiAgICBjb25uZWN0XHJcbiAgfSBmcm9tICd3ZXB5LXJlZHV4J1xyXG5cclxuICBAY29ubmVjdCh7XHJcbiAgICB1c2VyOiBzdGF0ZSA9PiBzdGF0ZS5jb21tb24udXNlcixcclxuICAgIG5pbTogc3RhdGUgPT4gc3RhdGUuY29tbW9uLm5pbSxcclxuICAgIG1zZ3M6IGZ1bmN0aW9uIChzdGF0ZSkge1xyXG4gICAgICByZXR1cm4gc3RhdGUuY2hhdHJvb20ubXNnc1t0aGlzLnJvb21JZF0gfHwgW11cclxuICAgIH0sXHJcbiAgICBpbnRvVmlldzogZnVuY3Rpb24oc3RhdGUpIHtcclxuICAgICAgY29uc3QgbXNncyA9IHN0YXRlLmNoYXRyb29tLm1zZ3NbdGhpcy5yb29tSWRdIHx8IFtdXHJcbiAgICAgIGNvbnN0IGxhc3QgPSBSLmxhc3QobXNncylcclxuICAgICAgcmV0dXJuIGxhc3QgPyBsYXN0LmlkQ2xpZW50IDogJydcclxuICAgIH1cclxuICB9LCB7XHJcbiAgICByZWZyZXNoTXNnc1xyXG4gIH0pXHJcbiAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2hhdHJvb20gZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xyXG4gICAgY29uZmlnID0ge1xyXG4gICAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn6IGK5aSp5a6kJ1xyXG4gICAgfVxyXG5cclxuICAgIGRhdGEgPSB7XHJcbiAgICAgIG5hdnM6IFsn6IGK5aSpJywgJ+ivpuaDhSddLFxyXG4gICAgICBjdXJyZW50TmF2OiAwLFxyXG4gICAgICBudW1MaXN0OiBbXSxcclxuICAgICAgaXNMSU1JVDogZmFsc2UsXHJcbiAgICAgIGNoYXRyb29tOiBudWxsLFxyXG4gICAgICByb29tSWQ6IG51bGwsXHJcbiAgICAgIHNlbmRlZDogZmFsc2UsXHJcbiAgICAgIHRleHQ6ICcnLFxyXG4gICAgICByb29tRGF0YToge1xyXG4gICAgICAgIG5hbWU6ICfliqDovb3kuK0uLi4nXHJcbiAgICAgIH0sXHJcbiAgICAgIGluZGljYXRvckRvdHM6IHRydWUsXHJcbiAgICAgIGF1dG9wbGF5OiBmYWxzZSxcclxuICAgICAgaW50ZXJ2YWw6IDUwMDAsXHJcbiAgICAgIGR1cmF0aW9uOiAxMDAwLFxyXG4gICAgICBzaG93OiAnZW1vamlfbGlzdCcsXHJcbiAgICAgIHNob3dlbTogJ29wZXJhdGlvbicsXHJcbiAgICAgIGVtb2ppOiBGYWNlSU0uZGVmYXVsdC5FbW9qaSxcclxuICAgICAgZW1vamlPYmo6IEZhY2VJTS5kZWZhdWx0LkVtb2ppT2JqLFxyXG4gICAgICBub3dUaW1lOiAnJyxcclxuICAgICAgbm93UGVvcGxlczogMCxcclxuICAgICAgc2VhcmNoaW5wdXQ6JycsXHJcbiAgICB9XHJcblxyXG4gICAgbWV0aG9kcyA9IHtcclxuICAgICAgYXN5bmMgZ2V0Q291bnRzTnVtKGlkLCBqZlRva2VuKSB7XHJcbiAgICAgICAgY29uc3Qge29ubGluZXVzZXJjb3VudH0gPSBhd2FpdCBjaGF0cm9vbUFwaS5nZXRPbmVCeUlkKGlkLCBqZlRva2VuKVxyXG4gICAgICAgIHRoaXMubm93UGVvcGxlcyA9IG9ubGluZXVzZXJjb3VudFxyXG4gICAgICAgIHRoaXMuJGFwcGx5KClcclxuICAgICAgfSxcclxuICAgICAgYXN5bmMgaGFuZGxlTmFtZSAoaXRlbSkge1xyXG4gICAgICAgIGNvbnN0IGl0ZW1BY2NpZCA9IGl0ZW0uZnJvbVxyXG4gICAgICAgIGNvbnN0IHtpZH0gPSBhd2FpdCBjaGF0cm9vbUFwaS5nZXRJdGVtSWQoaXRlbUFjY2lkKVxyXG4gICAgICAgIHdlcHkubmF2aWdhdGVUbyh7XHJcbiAgICAgICAgICB1cmw6IGB1c2VySW5mbz9pZD0ke2lkfWBcclxuICAgICAgICB9KVxyXG4gICAgICB9LFxyXG4gICAgICBoYW5kbGVOYW1lSWQgKGl0ZW0pIHtcclxuICAgICAgICBjb25zdCBpdGVtaWQgPSBpdGVtLmlkXHJcbiAgICAgICAgd2VweS5uYXZpZ2F0ZVRvKHtcclxuICAgICAgICAgIHVybDogYHVzZXJJbmZvP2lkPSR7aXRlbWlkfWBcclxuICAgICAgICB9KVxyXG4gICAgICB9LFxyXG4gICAgICBvcGVuRW1vamkgKGUpIHtcclxuICAgICAgICBpZiAodGhpcy5zaG93ID09PSAnc2hvd0Vtb2ppJykge1xyXG4gICAgICAgICAgdGhpcy5zaG93ID0gJ2Vtb2ppX2xpc3QnXHJcbiAgICAgICAgICB0aGlzLnNob3dlbSA9ICdvcGVyYXRpb24nXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHRoaXMuc2hvdyA9ICdzaG93RW1vamknXHJcbiAgICAgICAgICB0aGlzLnNob3dlbSA9ICdzaG93RW1vamlPcGVyYXRpb24nXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuJGFwcGx5KClcclxuICAgICAgfSxcclxuICAgICAgaW1nUHJldmlldyAoaXRlbXMsIG1zZ3MpIHtcclxuICAgICAgICBjb25zdCBpbWdVcmwgPSBpdGVtc1xyXG4gICAgICAgIGNvbnN0IGlzSW1nID0gbXNnID0+IG1zZy50eXBlID09PSAnaW1hZ2UnXHJcbiAgICAgICAgY29uc3QgaW1nQXJyID0gUi5maWx0ZXIoaXNJbWcpKG1zZ3MpXHJcbiAgICAgICAgY29uc3QgaW1nVXJsQXJyID0gaW1nQXJyLm1hcChtc2cgPT4ge1xyXG4gICAgICAgICAgcmV0dXJuIG1zZy5maWxlLnVybFxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgd2VweS5wcmV2aWV3SW1hZ2Uoe1xyXG4gICAgICAgICAgY3VycmVudDogaW1nVXJsLFxyXG4gICAgICAgICAgdXJsczogaW1nVXJsQXJyLFxyXG4gICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKHJlcykge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhyZXMpXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgICAgfSxcclxuICAgICAgYXN5bmMgc2VuZEVtb2ppIChldmVudCkge1xyXG4gICAgICAgIHZhciB0aGF0ID0gdGhpc1xyXG4gICAgICAgIHZhciBlbW9qaSA9IGV2ZW50LnRhcmdldC5kYXRhc2V0LmVtb2ppXHJcbiAgICAgICAgdmFyIG1zZ2xlbiA9IHRoYXQuZGF0YS50ZXh0Lmxlbmd0aCAtIDFcclxuICAgICAgICBpZiAoZW1vamkgJiYgZW1vamkgIT09ICdbZGVsXScpIHtcclxuICAgICAgICAgIHZhciBzdHIgPSB0aGF0LmRhdGEudGV4dCArIGVtb2ppXHJcbiAgICAgICAgfSBlbHNlIGlmIChlbW9qaSA9PT0gJ1tkZWxdJykge1xyXG4gICAgICAgICAgdmFyIHN0YXJ0ID0gdGhhdC5kYXRhLnRleHQubGFzdEluZGV4T2YoJ1snKVxyXG4gICAgICAgICAgdmFyIGVuZCA9IHRoYXQuZGF0YS50ZXh0Lmxhc3RJbmRleE9mKCddJylcclxuICAgICAgICAgIHZhciBsZW4gPSBlbmQgLSBzdGFydFxyXG4gICAgICAgICAgaWYgKGVuZCAhPT0gLTEgJiYgZW5kID09PSBtc2dsZW4gJiYgbGVuID49IDMgJiYgbGVuIDw9IDQpIHtcclxuICAgICAgICAgICAgc3RyID0gdGhhdC5kYXRhLnRleHQuc2xpY2UoMCwgc3RhcnQpXHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBzdHIgPSB0aGF0LmRhdGEudGV4dC5zbGljZSgwLCBtc2dsZW4pXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMudGV4dCA9IHN0clxyXG4gICAgICAgIGNvbnN0IHB1c2hNc2cgPSB0aGlzLm1ldGhvZHMucHVzaE1zZy5iaW5kKHRoaXMpXHJcbiAgICAgICAgdmFyIHRleHQgPSBSLnRyaW0odGhpcy50ZXh0KVxyXG4gICAgICAgIHRoaXMudGV4dCA9ICcnXHJcbiAgICAgICAgaWYgKHRleHQubGVuZ3RoKSB7XHJcbiAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBjb25zdCBtc2cgPSBhd2FpdCB0aGlzLmNoYXRyb29tLnNlbmRUZXh0KHtcclxuICAgICAgICAgICAgICB0ZXh0XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIHRoaXMudGV4dCA9ICcnXHJcbiAgICAgICAgICAgIHB1c2hNc2cobXNnKVxyXG4gICAgICAgICAgICB0aGlzLnNob3cgPSAnZW1vamlfbGlzdCdcclxuICAgICAgICAgICAgdGhpcy5zaG93ZW0gPSAnb3BlcmF0aW9uJ1xyXG4gICAgICAgICAgICB0aGlzLiRhcHBseSgpXHJcbiAgICAgICAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgIGxvZy5lcnJvcih7XHJcbiAgICAgICAgICAgICAgcGFnZTogJ2NoYXRyb29tJyxcclxuICAgICAgICAgICAgICBvcHI6ICdzZW5kVGV4dCcsXHJcbiAgICAgICAgICAgICAgaW5mbzogZVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfSxcclxuICAgICAgY2hhbmdlTmF2IChlKSB7XHJcbiAgICAgICAgdGhpcy5jdXJyZW50TmF2ID0gZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQuaW5kZXhcclxuICAgICAgICB0aGlzLnNlbmRlZCA9IGZhbHNlXHJcbiAgICAgICAgdGhpcy4kYXBwbHkoKVxyXG4gICAgICB9LFxyXG4gICAgICBhc3luYyBjaG9vc2VJbWFnZSgpIHtcclxuICAgICAgLy8g6L+b6KGM5Zu+54mH6YCJ5oup5bm25LiK5LygXHJcbiAgICAgIGNvbnN0IHB1c2hNc2cgPSB0aGlzLm1ldGhvZHMucHVzaE1zZy5iaW5kKHRoaXMpXHJcbiAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IHdlcHkuY2hvb3NlSW1hZ2Uoe1xyXG4gICAgICAgIGNvdW50OiAxXHJcbiAgICAgIH0pXHJcblxyXG4gICAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IGZpbGUgPSBhd2FpdCB0aGlzLmNoYXRyb29tLnByZXZpZXdGaWxlKHtcclxuICAgICAgICAgIHR5cGU6ICdpbWFnZScsXHJcbiAgICAgICAgICB3eEZpbGVQYXRoOiByZXMudGVtcEZpbGVQYXRoc1swXVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgY29uc3QgbXNnID0gYXdhaXQgdGhpcy5jaGF0cm9vbS5zZW5kRmlsZSh7XHJcbiAgICAgICAgICB0eXBlOiAnaW1hZ2UnLFxyXG4gICAgICAgICAgZmlsZTogZmlsZVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgcHVzaE1zZyhtc2cpXHJcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgbG9nLmVycm9yKHtcclxuICAgICAgICAgIHBhZ2U6ICdjaGF0cm9vbScsXHJcbiAgICAgICAgICBvcHI6ICdzZW5kRmlsZScsXHJcbiAgICAgICAgICBpbmZvOiBlcnJvclxyXG4gICAgICAgIH0pXHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBhc3luYyBzZW5kKCkge1xyXG4gICAgICAvLyA/IHdoeSBiaW5kXHJcbiAgICAgIHRoaXMuc2V0RGF0YSh7ICBcclxuICAgICAgICBzZWFyY2hpbnB1dDogJycsICBcclxuICAgICAgfSkgIFxyXG4gICAgICBjb25zdCBwdXNoTXNnVGV4dCA9IHRoaXMubWV0aG9kcy5wdXNoTXNnVGV4dC5iaW5kKHRoaXMpXHJcbiAgICAgIGNvbnN0IHRleHQgPSBSLnRyaW0odGhpcy50ZXh0KVxyXG4gICAgICB0aGlzLnRleHQgPSAnJ1xyXG4gICAgICBpZiAodGV4dC5sZW5ndGgpIHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgY29uc3QgbXNnID0gYXdhaXQgdGhpcy5jaGF0cm9vbS5zZW5kVGV4dCh7XHJcbiAgICAgICAgICAgIHRleHRcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgICB0aGlzLnRleHQgPSAnJ1xyXG4gICAgICAgICAgcHVzaE1zZ1RleHQobXNnKVxyXG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICAgIGxvZy5lcnJvcih7XHJcbiAgICAgICAgICAgIHBhZ2U6ICdjaGF0cm9vbScsXHJcbiAgICAgICAgICAgIG9wcjogJ3NlbmRUZXh0JyxcclxuICAgICAgICAgICAgaW5mbzogZVxyXG4gICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBzZXRUZXh0KGUpIHtcclxuICAgICAgdGhpcy50ZXh0ID0gZS5kZXRhaWwudmFsdWVcclxuICAgIH0sXHJcbiAgICBwdXNoTXNnOiBmdW5jdGlvbiAobXNncykge1xyXG4gICAgICBjb25zdCB7IHJlZnJlc2hNc2dzIH0gPSB0aGlzLm1ldGhvZHNcclxuICAgICAgaWYgKCFBcnJheS5pc0FycmF5KG1zZ3MpKSB7XHJcbiAgICAgICAgbXNncyA9IFttc2dzXVxyXG4gICAgICB9XHJcbiAgICAgIGNvbnNvbGUubG9nKCflsLHmmK/ov5nkuKrlm74nLCBtc2dzKVxyXG4gICAgICBtc2dzID0gbXNncy5tYXAobXNnID0+IHtcclxuICAgICAgICBpZiAobXNnLnR5cGUgPT09ICd0ZXh0Jykge1xyXG4gICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgZW1qaTogRmFjZUlNLmRlZmF1bHQucGFyc2VFbW9qaShtc2cudGV4dC5yZXBsYWNlKC9cXG4vbWcsICcnKSksXHJcbiAgICAgICAgICAgIGNoYXRyb29tSWQ6IG1zZy5jaGF0cm9vbUlkLFxyXG4gICAgICAgICAgICBmbG93OiBtc2cuZmxvdyxcclxuICAgICAgICAgICAgZnJvbTogbXNnLmZyb20sXHJcbiAgICAgICAgICAgIGZyb21BdmF0YXI6IG1zZy5mcm9tQXZhdGFyLFxyXG4gICAgICAgICAgICBmcm9tQ2xpZW50VHlwZTogbXNnLmZyb21DbGllbnRUeXBlLFxyXG4gICAgICAgICAgICBmcm9tQ3VzdG9tOiBtc2cuZnJvbUN1c3RvbSxcclxuICAgICAgICAgICAgZnJvbU5pY2s6IG1zZy5mcm9tTmljayxcclxuICAgICAgICAgICAgaWRDbGllbnQ6IG1zZy5pZENsaWVudCxcclxuICAgICAgICAgICAgcmVzZW5kOiBtc2cucmVzZW5kLFxyXG4gICAgICAgICAgICBzdGF0dXM6IG1zZy5zdGF0dXMsXHJcbiAgICAgICAgICAgIHRleHQ6IG1zZy50ZXh0LFxyXG4gICAgICAgICAgICB0aW1lOiBtc2cudGltZSxcclxuICAgICAgICAgICAgdHlwZTogbXNnLnR5cGUsXHJcbiAgICAgICAgICAgIHVzZXJVcGRhdGVUaW1lOiBtc2cudXNlclVwZGF0ZVRpbWVcclxuICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgcmV0dXJuIG1zZ1xyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuLy8gICAgICBjb25zb2xlLmxvZyh0aGlzLnJvb21JZClcclxubGV0IHJvb21JZCA9IHRoaXMucm9vbUlkXHJcbmNvbnNvbGUubG9nKHJvb21JZClcclxuaWYgKG1zZ3MubGVuZ3RoID4gMCkge1xyXG4gIHJvb21JZCA9IG1zZ3NbMF0uY2hhdHJvb21JZFxyXG59XHJcbmNvbnN0IG1lcmdlZCA9IFsuLi50aGlzLm1zZ3MsIC4uLm1zZ3NdXHJcbnJlZnJlc2hNc2dzKHJvb21JZCwgbWVyZ2VkKVxyXG50aGlzLnNlbmRlZCA9IHRydWVcclxudGhpcy4kYXBwbHkoKVxyXG59LFxyXG5wdXNoTXNnVGV4dDogZnVuY3Rpb24gKG1zZ3MpIHtcclxuICBjb25zdCB7IHJlZnJlc2hNc2dzIH0gPSB0aGlzLm1ldGhvZHNcclxuICBpZiAoIUFycmF5LmlzQXJyYXkobXNncykpIHtcclxuICAgIG1zZ3MgPSBbbXNnc11cclxuICB9XHJcbiAgY29uc29sZS5sb2coJ+WwseaYr+i/meS4quWbvicsIG1zZ3MpXHJcbiAgbXNncyA9IG1zZ3MubWFwKG1zZyA9PiB7XHJcbiAgICBpZiAobXNnLnR5cGUgPT09ICd0ZXh0Jykge1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIGVtamk6IEZhY2VJTS5kZWZhdWx0LnBhcnNlRW1vamkobXNnLnRleHQucmVwbGFjZSgvXFxuL21nLCAnJykpLFxyXG4gICAgICAgIGNoYXRyb29tSWQ6IG1zZy5jaGF0cm9vbUlkLFxyXG4gICAgICAgIGZsb3c6IG1zZy5mbG93LFxyXG4gICAgICAgIGZyb206IG1zZy5mcm9tLFxyXG4gICAgICAgIGZyb21BdmF0YXI6IG1zZy5mcm9tQXZhdGFyLFxyXG4gICAgICAgIGZyb21DbGllbnRUeXBlOiBtc2cuZnJvbUNsaWVudFR5cGUsXHJcbiAgICAgICAgZnJvbUN1c3RvbTogbXNnLmZyb21DdXN0b20sXHJcbiAgICAgICAgZnJvbU5pY2s6IG1zZy5mcm9tTmljayxcclxuICAgICAgICBpZENsaWVudDogbXNnLmlkQ2xpZW50LFxyXG4gICAgICAgIHJlc2VuZDogbXNnLnJlc2VuZCxcclxuICAgICAgICBzdGF0dXM6IG1zZy5zdGF0dXMsXHJcbiAgICAgICAgdGV4dDogbXNnLnRleHQsXHJcbiAgICAgICAgdGltZTogbXNnLnRpbWUsXHJcbiAgICAgICAgdHlwZTogbXNnLnR5cGUsXHJcbiAgICAgICAgdXNlclVwZGF0ZVRpbWU6IG1zZy51c2VyVXBkYXRlVGltZVxyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm4gbXNnXHJcbiAgICB9XHJcbiAgfSlcclxuLy8gICAgICBjb25zb2xlLmxvZyh0aGlzLnJvb21JZClcclxubGV0IHJvb21JZCA9IHRoaXMucm9vbUlkXHJcbmNvbnNvbGUubG9nKHJvb21JZClcclxuaWYgKG1zZ3MubGVuZ3RoID4gMCkge1xyXG4gIHJvb21JZCA9IG1zZ3NbMF0uY2hhdHJvb21JZFxyXG59XHJcbmNvbnN0IG1lcmdlZCA9IFsuLi50aGlzLm1zZ3MsIC4uLm1zZ3NdXHJcbnJlZnJlc2hNc2dzKHJvb21JZCwgbWVyZ2VkKVxyXG50aGlzLnNlbmRlZCA9IHRydWVcclxudGhpcy4kYXBwbHkoKVxyXG59LFxyXG5oYW5kbGVGb2N1cygpIHtcclxuICB0aGlzLnNlbmRlZCA9IGZhbHNlXHJcbn1cclxufVxyXG5hc3luYyBvbkxvYWQob3B0aW9ucykge1xyXG4gIGNvbnN0IHsgaWQgfSA9IG9wdGlvbnNcclxuICBjb25zdCB7cm9vbWlkfSA9IG9wdGlvbnNcclxuICBjb25zdCB7Y3JlYXRvcn0gPSBvcHRpb25zXHJcbiAgdGhpcy5yb29tSWQgPSByb29taWRcclxuICBjb25zdCBwdXNoTXNnID0gdGhpcy5tZXRob2RzLnB1c2hNc2cuYmluZCh0aGlzKVxyXG4gIGNvbnN0IGdldENvdW50c051bSA9IHRoaXMubWV0aG9kcy5nZXRDb3VudHNOdW0uYmluZCh0aGlzKVxyXG4gIGNvbnN0IGFwcGx5ID0gdGhpcy4kYXBwbHkuYmluZCh0aGlzKVxyXG4gIGNvbnN0IGhhc01zZ3MgPSB0aGlzLm1zZ3MubGVuZ3RoID4gMFxyXG4gIHRyeSB7XHJcbiAgICBjb25zdCB7IG5pbVRva2VuLCBhY2NpZCwgYXZhdGFyVXJsLCBqZlRva2VuIH0gPSB0aGlzLnVzZXJcclxuLy8gICAgICBpZiAoY3JlYXRvciAhPT0gYWNjaWQpIHtcclxuLy8gICAgICAgIGF3YWl0IGNoYXRyb29tQXBpLmFkZFRvUm9vbShyb29taWQsIGNyZWF0b3IsIGFjY2lkKVxyXG4vLyAgICAgIH1cclxuYXdhaXQgY2hhdHJvb21BcGkuYWRkVG9Sb29tKHJvb21pZCwgY3JlYXRvciwgYWNjaWQpXHJcbmNvbnN0IHJvb21JbmZvID0gYXdhaXQgY2hhdHJvb21BcGkuZ2V0T25lQnlJZChpZCwgamZUb2tlbilcclxuY29uc3QgZGF0YSA9IGF3YWl0IGNoYXRyb29tQXBpLmdldFVzZXJMaXN0KHJvb21pZCwgamZUb2tlbilcclxuY29uc3QgaXNsaW1pdCA9IGRhdGEgPT4gZGF0YS50eXBlID09PSAnTElNSVRFRCdcclxuY29uc3QgaXNVc2VyID0gZGF0YSA9PiBkYXRhLm5hbWUgJiYgZGF0YS5uYW1lICE9PSBudWxsXHJcbnRoaXMubnVtTGlzdCA9IFIuZmlsdGVyKGlzVXNlcikoZGF0YSlcclxuY29uc3QgdXNlckxpbWl0QXJyID0gUi5maWx0ZXIoaXNsaW1pdCkodGhpcy5udW1MaXN0KVxyXG5jb25zb2xlLmxvZygn56aB6KiA5YiX6KGoJywgdXNlckxpbWl0QXJyKVxyXG5pZiAodXNlckxpbWl0QXJyLmxlbmd0aCA+IDApIHtcclxuICBpZiAodXNlckxpbWl0QXJyWzBdLmFjY2lkID09PSBhY2NpZCkge1xyXG4gICAgdGhpcy5pc0xJTUlUID0gdHJ1ZVxyXG4gICAgY29uc29sZS5sb2coJ+iiq+emgeiogCcpXHJcbiAgfVxyXG59XHJcbnRoaXMucm9vbURhdGEgPSByb29tSW5mb1xyXG5jb25zdCByb29tSWQgPSB0aGlzLnJvb21JZFxyXG5jb25zdCBhZGRyZXNzID0gYXdhaXQgTklNLmdldENoYXRyb29tQWRkcmVzc2VzKGFjY2lkLCByb29tSWQpXHJcbmNvbnN0IGNoYXRyb29tID0gQ2hhdHJvb21TREsuZ2V0SW5zdGFuY2Uoe1xyXG4vLyAgICAgICAgZGVidWc6IHRydWUsXHJcbmFjY291bnQ6IGFjY2lkLFxyXG50b2tlbjogbmltVG9rZW4sXHJcbmNoYXRyb29tSWQ6IHJvb21JZCxcclxuY2hhdHJvb21BZGRyZXNzZXM6IGFkZHJlc3MsXHJcbm9ubXNnczogZnVuY3Rpb24obXNncykge1xyXG4gIGxvZy5pbmZvKHtcclxuICAgIHBhZ2U6ICdjaGF0cm9vbScsXHJcbiAgICBvcHI6ICdpbml0aWFsaXplIHNkayBpbnN0YW5jZScsXHJcbiAgICBpbmZvOiBtc2dzXHJcbiAgfSlcclxuLy8gICAgICAgICAgY29uc29sZS5sb2coJ+aUtuWIsOiBiuWkqeWupOS/oeaBrycsIG1zZ3MpXHJcbnB1c2hNc2cobXNncy5tYXAobXNnID0+IHtcclxuICBpZiAobXNnLnR5cGUgPT09ICdub3RpZmljYXRpb24nKSB7XHJcbiAgICBnZXRDb3VudHNOdW0oaWQsIGpmVG9rZW4pXHJcbiAgICAgICAgICAgICAgLy8g6L+b5YWl6IGK5aSp5a6k5L+h5oGvXHJcbiAgICAgICAgICAgICAgY29uc3QgdGlwID0gUi5jb25kKFtcclxuICAgICAgICAgICAgICAgIFtSLmVxdWFscygnbWVtYmVyRW50ZXInKSwgUi5hbHdheXMoJ+WKoOWFpeiBiuWkqeWupCcpXSxcclxuICAgICAgICAgICAgICAgIFtSLmVxdWFscygnbWVtYmVyRXhpdCcpLCBSLmFsd2F5cygn6YCA5Ye66IGK5aSp5a6kJyldXHJcbiAgICAgICAgICAgICAgICBdKShtc2cuYXR0YWNoLnR5cGUpXHJcbiAgICAgICAgICAgICAgICBjb25zdCB0aXBNc2cgPSBgJHttc2cuYXR0YWNoLmZyb21OaWNrfSAke3RpcH1gXHJcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgICAuLi5tc2csXHJcbiAgICAgICAgICAgICAgICAgIHR5cGU6ICdub3RpZmljYXRpb24nLFxyXG4gICAgICAgICAgICAgICAgICB0ZXh0OiB0aXBNc2csXHJcbiAgICAgICAgICAgICAgICAgIGZyb21BdmF0YXI6IGF2YXRhclVybCxcclxuICAgICAgICAgICAgICAgICAgbm93VGltZTogbmV3IERhdGUoRGF0ZS5wYXJzZShuZXcgRGF0ZSgpKSArIDI4ODAwMDAwKS50b0lTT1N0cmluZygpLnNwbGl0KCdUJylbMF0gKyAnICcgKyBuZXcgRGF0ZSgpLnRvVGltZVN0cmluZygpLnN1YnN0cigwLCA4KVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbXNnXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KSlcclxufSxcclxuYXN5bmMgb25jb25uZWN0KCkge1xyXG4gIGxvZy5pbmZvKHtcclxuICAgIHBhZ2U6ICdjaGF0cm9vbScsXHJcbiAgICBvcHI6ICdpbml0aWFsaXplIHNkayBpbnN0YW5jZScsXHJcbiAgICBpbmZvOiAnW05JTSBDSEFUUk9PTV0gY29ubmVjdGVkJ1xyXG4gIH0pXHJcbiAgaWYgKCFoYXNNc2dzKSB7XHJcbiAgICB3ZXB5LnNob3dMb2FkaW5nKClcclxuICAgICAgICAgICAgLy8g5ouJ5Y+W5pyA6L+RIDEwMCDmnaHkv6Hmga9cclxuICAgICAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgY2hhdHJvb20uZ2V0SGlzdG9yeU1zZ3Moe1xyXG4gICAgICAgICAgICAgIGxpbWl0OiAxMDBcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgY29uc3QgbXNncyA9IHJlcy5tc2dzLmZpbHRlcihtc2cgPT4gbXNnLnR5cGUgIT09ICdub3RpZmljYXRpb24nICYmIG1zZy50eXBlICE9PSAndGlwJykucmV2ZXJzZSgpXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdoaXN0b3J5IG1lc3NhZ2VzJywgbXNncylcclxuICAgICAgICAgICAgLy8g5Yi35paw5raI5oGvXHJcbiAgICAgICAgICAgIHB1c2hNc2cobXNncyB8fCBbXSlcclxuICAgICAgICAgICAgYXBwbHkoKVxyXG4gICAgICAgICAgICB3ZXB5LmhpZGVMb2FkaW5nKClcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcbnRoaXMuY2hhdHJvb20gPSBjaGF0cm9vbVxyXG59IGNhdGNoIChlKSB7XHJcbiAgbG9nLmVycm9yKHtcclxuICAgIHBhZ2U6ICdjaGF0cm9vbScsXHJcbiAgICBvcHI6ICdnZXRJbnN0YW5jZScsXHJcbiAgICBpbmZvOiBlXHJcbiAgfSlcclxufVxyXG59XHJcblxyXG5hc3luYyBvblNob3coKSB7XHJcbiAgdGhpcy5pc0xJTUlUID0gZmFsc2VcclxuICB0aGlzLnNlbmRlZCA9IGZhbHNlXHJcbiAgdGhpcy5jdXJyZW50TmF2ID0gMFxyXG59XHJcbn1cclxuIl19