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
      nowPeoples: 0
    }, _this.methods = {
      getCountsNum: function getCountsNum(id, jfToken) {
        var _this2 = this;

        return (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee() {
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

        return (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee2() {
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

        return (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee3() {
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

        return (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee4() {
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

        return (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee5() {
          var pushMsgText, text, msg;
          return _regenerator2.default.wrap(function _callee5$(_context5) {
            while (1) {
              switch (_context5.prev = _context5.next) {
                case 0:
                  // ? why bind
                  pushMsgText = _this6.methods.pushMsgText.bind(_this6);
                  text = _ramda2.default.trim(_this6.text);

                  _this6.text = '';

                  if (!text.length) {
                    _context5.next = 15;
                    break;
                  }

                  _context5.prev = 4;
                  _context5.next = 7;
                  return _this6.chatroom.sendText({
                    text: text
                  });

                case 7:
                  msg = _context5.sent;

                  _this6.text = '';
                  pushMsgText(msg);
                  _context5.next = 15;
                  break;

                case 12:
                  _context5.prev = 12;
                  _context5.t0 = _context5['catch'](4);

                  log.error({
                    page: 'chatroom',
                    opr: 'sendText',
                    info: _context5.t0
                  });

                case 15:
                case 'end':
                  return _context5.stop();
              }
            }
          }, _callee5, _this6, [[4, 12]]);
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
        //      this.sended = true
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
      var _ref4 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee7(options) {
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

                    return (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee6() {
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
      var _ref5 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee8() {
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoYXRyb29tLmpzIl0sIm5hbWVzIjpbImxvZyIsImNoYXRyb29tQXBpIiwiQ2hhdHJvb20iLCJ1c2VyIiwic3RhdGUiLCJjb21tb24iLCJuaW0iLCJtc2dzIiwiY2hhdHJvb20iLCJyb29tSWQiLCJpbnRvVmlldyIsImxhc3QiLCJpZENsaWVudCIsInJlZnJlc2hNc2dzIiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsImRhdGEiLCJuYXZzIiwiY3VycmVudE5hdiIsIm51bUxpc3QiLCJpc0xJTUlUIiwic2VuZGVkIiwidGV4dCIsInJvb21EYXRhIiwibmFtZSIsImluZGljYXRvckRvdHMiLCJhdXRvcGxheSIsImludGVydmFsIiwiZHVyYXRpb24iLCJzaG93Iiwic2hvd2VtIiwiZW1vamkiLCJkZWZhdWx0IiwiRW1vamkiLCJlbW9qaU9iaiIsIkVtb2ppT2JqIiwibm93VGltZSIsIm5vd1Blb3BsZXMiLCJtZXRob2RzIiwiZ2V0Q291bnRzTnVtIiwiaWQiLCJqZlRva2VuIiwiZ2V0T25lQnlJZCIsIm9ubGluZXVzZXJjb3VudCIsIiRhcHBseSIsImhhbmRsZU5hbWUiLCJpdGVtIiwiaXRlbUFjY2lkIiwiZnJvbSIsImdldEl0ZW1JZCIsIm5hdmlnYXRlVG8iLCJ1cmwiLCJoYW5kbGVOYW1lSWQiLCJpdGVtaWQiLCJvcGVuRW1vamkiLCJlIiwiaW1nUHJldmlldyIsIml0ZW1zIiwiaW1nVXJsIiwiaXNJbWciLCJtc2ciLCJ0eXBlIiwiaW1nQXJyIiwiZmlsdGVyIiwiaW1nVXJsQXJyIiwibWFwIiwiZmlsZSIsInByZXZpZXdJbWFnZSIsImN1cnJlbnQiLCJ1cmxzIiwic3VjY2VzcyIsInJlcyIsImNvbnNvbGUiLCJzZW5kRW1vamkiLCJldmVudCIsInRoYXQiLCJ0YXJnZXQiLCJkYXRhc2V0IiwibXNnbGVuIiwibGVuZ3RoIiwic3RyIiwic3RhcnQiLCJsYXN0SW5kZXhPZiIsImVuZCIsImxlbiIsInNsaWNlIiwicHVzaE1zZyIsImJpbmQiLCJ0cmltIiwic2VuZFRleHQiLCJlcnJvciIsInBhZ2UiLCJvcHIiLCJpbmZvIiwiY2hhbmdlTmF2IiwiY3VycmVudFRhcmdldCIsImluZGV4IiwiY2hvb3NlSW1hZ2UiLCJjb3VudCIsInByZXZpZXdGaWxlIiwid3hGaWxlUGF0aCIsInRlbXBGaWxlUGF0aHMiLCJzZW5kRmlsZSIsInNlbmQiLCJwdXNoTXNnVGV4dCIsInNldFRleHQiLCJkZXRhaWwiLCJ2YWx1ZSIsIkFycmF5IiwiaXNBcnJheSIsImVtamkiLCJwYXJzZUVtb2ppIiwicmVwbGFjZSIsImNoYXRyb29tSWQiLCJmbG93IiwiZnJvbUF2YXRhciIsImZyb21DbGllbnRUeXBlIiwiZnJvbUN1c3RvbSIsImZyb21OaWNrIiwicmVzZW5kIiwic3RhdHVzIiwidGltZSIsInVzZXJVcGRhdGVUaW1lIiwibWVyZ2VkIiwiaGFuZGxlRm9jdXMiLCJvcHRpb25zIiwicm9vbWlkIiwiY3JlYXRvciIsImFwcGx5IiwiaGFzTXNncyIsIm5pbVRva2VuIiwiYWNjaWQiLCJhdmF0YXJVcmwiLCJhZGRUb1Jvb20iLCJyb29tSW5mbyIsImdldFVzZXJMaXN0IiwiaXNsaW1pdCIsImlzVXNlciIsInVzZXJMaW1pdEFyciIsImdldENoYXRyb29tQWRkcmVzc2VzIiwiYWRkcmVzcyIsImdldEluc3RhbmNlIiwiYWNjb3VudCIsInRva2VuIiwiY2hhdHJvb21BZGRyZXNzZXMiLCJvbm1zZ3MiLCJ0aXAiLCJjb25kIiwiZXF1YWxzIiwiYWx3YXlzIiwiYXR0YWNoIiwidGlwTXNnIiwiRGF0ZSIsInBhcnNlIiwidG9JU09TdHJpbmciLCJzcGxpdCIsInRvVGltZVN0cmluZyIsInN1YnN0ciIsIm9uY29ubmVjdCIsInNob3dMb2FkaW5nIiwiZ2V0SGlzdG9yeU1zZ3MiLCJsaW1pdCIsInJldmVyc2UiLCJoaWRlTG9hZGluZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNB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QTtBQUFBOztBQU9kLDZDQUFLOEIsV0FBTDtBQUNBO0FBUmM7QUFBQSxxQ0FTSXZKLFNBQVN3SixjQUFULENBQXdCO0FBQ3hDQyx1Q0FBTztBQURpQywrQkFBeEIsQ0FUSjs7QUFBQTtBQVNSMUYsaUNBVFE7QUFZUmhFLGtDQVpRLEdBWURnRSxJQUFJaEUsSUFBSixDQUFTd0QsTUFBVCxDQUFnQjtBQUFBLHVDQUFPSCxJQUFJQyxJQUFKLEtBQWEsY0FBYixJQUErQkQsSUFBSUMsSUFBSixLQUFhLEtBQW5EO0FBQUEsK0JBQWhCLEVBQTBFcUcsT0FBMUUsRUFaQzs7QUFhZDFGLHNDQUFReEUsR0FBUixDQUFZLGtCQUFaLEVBQWdDTyxJQUFoQztBQUNBO0FBQ0ErRSxzQ0FBUS9FLFFBQVEsRUFBaEI7QUFDQXlIO0FBQ0EsNkNBQUttQyxXQUFMOztBQWpCYztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQW1CakI7QUFyRHNDLGlCQUF4QixDOztBQXVEakIscUJBQUszSixRQUFMLEdBQWdCQSxRQUFoQjs7Ozs7Ozs7QUFFQVIsb0JBQUkwRixLQUFKLENBQVU7QUFDUkMsd0JBQU0sVUFERTtBQUVSQyx1QkFBSyxhQUZHO0FBR1JDO0FBSFEsaUJBQVY7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVNGLHFCQUFLekUsT0FBTCxHQUFlLEtBQWY7QUFDQSxxQkFBS0MsTUFBTCxHQUFjLEtBQWQ7QUFDQSxxQkFBS0gsVUFBTCxHQUFrQixDQUFsQjs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBN1ZrQyxlQUFLeUUsSTtrQkFBdEJ6RixRIiwiZmlsZSI6ImNoYXRyb29tLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuaW1wb3J0IFIgZnJvbSAnLi4vbGlicy9yYW1kYSdcbmltcG9ydCBDaGF0cm9vbVNESyBmcm9tICcuLi91dGlscy9jaGF0cm9vbSdcbmltcG9ydCBOSU0gZnJvbSAnLi4vdXRpbHMvbmltJ1xuaW1wb3J0IEZhY2VJTSBmcm9tICcuLi91dGlscy9XZWJJTSdcbmltcG9ydCAqIGFzIGxvZyBmcm9tICcuLi91dGlscy9sb2cnXG5pbXBvcnQge1xuICByZWZyZXNoTXNnc1xufSBmcm9tICcuLi9hY3Rpb25zL2NoYXRyb29tJ1xuaW1wb3J0ICogYXMgY2hhdHJvb21BcGkgZnJvbSAnLi4vYXBpcy9jaGF0cm9vbSdcblxuaW1wb3J0IHtcbiAgY29ubmVjdFxufSBmcm9tICd3ZXB5LXJlZHV4J1xuXG5AY29ubmVjdCh7XG4gIHVzZXI6IHN0YXRlID0+IHN0YXRlLmNvbW1vbi51c2VyLFxuICBuaW06IHN0YXRlID0+IHN0YXRlLmNvbW1vbi5uaW0sXG4gIG1zZ3M6IGZ1bmN0aW9uIChzdGF0ZSkge1xuICAgIHJldHVybiBzdGF0ZS5jaGF0cm9vbS5tc2dzW3RoaXMucm9vbUlkXSB8fCBbXVxuICB9LFxuICBpbnRvVmlldzogZnVuY3Rpb24oc3RhdGUpIHtcbiAgICBjb25zdCBtc2dzID0gc3RhdGUuY2hhdHJvb20ubXNnc1t0aGlzLnJvb21JZF0gfHwgW11cbiAgICBjb25zdCBsYXN0ID0gUi5sYXN0KG1zZ3MpXG4gICAgcmV0dXJuIGxhc3QgPyBsYXN0LmlkQ2xpZW50IDogJydcbiAgfVxufSwge1xuICByZWZyZXNoTXNnc1xufSlcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENoYXRyb29tIGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgY29uZmlnID0ge1xuICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICfogYrlpKnlrqQnXG4gIH1cblxuICBkYXRhID0ge1xuICAgIG5hdnM6IFsn6IGK5aSpJywgJ+ivpuaDhSddLFxuICAgIGN1cnJlbnROYXY6IDAsXG4gICAgbnVtTGlzdDogW10sXG4gICAgaXNMSU1JVDogZmFsc2UsXG4gICAgY2hhdHJvb206IG51bGwsXG4gICAgcm9vbUlkOiBudWxsLFxuICAgIHNlbmRlZDogZmFsc2UsXG4gICAgdGV4dDogJycsXG4gICAgcm9vbURhdGE6IHtcbiAgICAgIG5hbWU6ICfliqDovb3kuK0uLi4nXG4gICAgfSxcbiAgICBpbmRpY2F0b3JEb3RzOiB0cnVlLFxuICAgIGF1dG9wbGF5OiBmYWxzZSxcbiAgICBpbnRlcnZhbDogNTAwMCxcbiAgICBkdXJhdGlvbjogMTAwMCxcbiAgICBzaG93OiAnZW1vamlfbGlzdCcsXG4gICAgc2hvd2VtOiAnb3BlcmF0aW9uJyxcbiAgICBlbW9qaTogRmFjZUlNLmRlZmF1bHQuRW1vamksXG4gICAgZW1vamlPYmo6IEZhY2VJTS5kZWZhdWx0LkVtb2ppT2JqLFxuICAgIG5vd1RpbWU6ICcnLFxuICAgIG5vd1Blb3BsZXM6IDBcbiAgfVxuXG4gIG1ldGhvZHMgPSB7XG4gICAgYXN5bmMgZ2V0Q291bnRzTnVtKGlkLCBqZlRva2VuKSB7XG4gICAgICBjb25zdCB7b25saW5ldXNlcmNvdW50fSA9IGF3YWl0IGNoYXRyb29tQXBpLmdldE9uZUJ5SWQoaWQsIGpmVG9rZW4pXG4gICAgICB0aGlzLm5vd1Blb3BsZXMgPSBvbmxpbmV1c2VyY291bnRcbiAgICAgIHRoaXMuJGFwcGx5KClcbiAgICB9LFxuICAgIGFzeW5jIGhhbmRsZU5hbWUgKGl0ZW0pIHtcbiAgICAgIGNvbnN0IGl0ZW1BY2NpZCA9IGl0ZW0uZnJvbVxuICAgICAgY29uc3Qge2lkfSA9IGF3YWl0IGNoYXRyb29tQXBpLmdldEl0ZW1JZChpdGVtQWNjaWQpXG4gICAgICB3ZXB5Lm5hdmlnYXRlVG8oe1xuICAgICAgICB1cmw6IGB1c2VySW5mbz9pZD0ke2lkfWBcbiAgICAgIH0pXG4gICAgfSxcbiAgICBoYW5kbGVOYW1lSWQgKGl0ZW0pIHtcbiAgICAgIGNvbnN0IGl0ZW1pZCA9IGl0ZW0uaWRcbiAgICAgIHdlcHkubmF2aWdhdGVUbyh7XG4gICAgICAgIHVybDogYHVzZXJJbmZvP2lkPSR7aXRlbWlkfWBcbiAgICAgIH0pXG4gICAgfSxcbiAgICBvcGVuRW1vamkgKGUpIHtcbiAgICAgIGlmICh0aGlzLnNob3cgPT09ICdzaG93RW1vamknKSB7XG4gICAgICAgIHRoaXMuc2hvdyA9ICdlbW9qaV9saXN0J1xuICAgICAgICB0aGlzLnNob3dlbSA9ICdvcGVyYXRpb24nXG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnNob3cgPSAnc2hvd0Vtb2ppJ1xuICAgICAgICB0aGlzLnNob3dlbSA9ICdzaG93RW1vamlPcGVyYXRpb24nXG4gICAgICB9XG4gICAgICB0aGlzLiRhcHBseSgpXG4gICAgfSxcbiAgICBpbWdQcmV2aWV3IChpdGVtcywgbXNncykge1xuICAgICAgY29uc3QgaW1nVXJsID0gaXRlbXNcbiAgICAgIGNvbnN0IGlzSW1nID0gbXNnID0+IG1zZy50eXBlID09PSAnaW1hZ2UnXG4gICAgICBjb25zdCBpbWdBcnIgPSBSLmZpbHRlcihpc0ltZykobXNncylcbiAgICAgIGNvbnN0IGltZ1VybEFyciA9IGltZ0Fyci5tYXAobXNnID0+IHtcbiAgICAgICAgcmV0dXJuIG1zZy5maWxlLnVybFxuICAgICAgfSlcbiAgICAgIHdlcHkucHJldmlld0ltYWdlKHtcbiAgICAgICAgY3VycmVudDogaW1nVXJsLFxuICAgICAgICB1cmxzOiBpbWdVcmxBcnIsXG4gICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChyZXMpIHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhyZXMpXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfSxcbiAgICBhc3luYyBzZW5kRW1vamkgKGV2ZW50KSB7XG4gICAgICB2YXIgdGhhdCA9IHRoaXNcbiAgICAgIHZhciBlbW9qaSA9IGV2ZW50LnRhcmdldC5kYXRhc2V0LmVtb2ppXG4gICAgICB2YXIgbXNnbGVuID0gdGhhdC5kYXRhLnRleHQubGVuZ3RoIC0gMVxuICAgICAgaWYgKGVtb2ppICYmIGVtb2ppICE9PSAnW2RlbF0nKSB7XG4gICAgICAgIHZhciBzdHIgPSB0aGF0LmRhdGEudGV4dCArIGVtb2ppXG4gICAgICB9IGVsc2UgaWYgKGVtb2ppID09PSAnW2RlbF0nKSB7XG4gICAgICAgIHZhciBzdGFydCA9IHRoYXQuZGF0YS50ZXh0Lmxhc3RJbmRleE9mKCdbJylcbiAgICAgICAgdmFyIGVuZCA9IHRoYXQuZGF0YS50ZXh0Lmxhc3RJbmRleE9mKCddJylcbiAgICAgICAgdmFyIGxlbiA9IGVuZCAtIHN0YXJ0XG4gICAgICAgIGlmIChlbmQgIT09IC0xICYmIGVuZCA9PT0gbXNnbGVuICYmIGxlbiA+PSAzICYmIGxlbiA8PSA0KSB7XG4gICAgICAgICAgc3RyID0gdGhhdC5kYXRhLnRleHQuc2xpY2UoMCwgc3RhcnQpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgc3RyID0gdGhhdC5kYXRhLnRleHQuc2xpY2UoMCwgbXNnbGVuKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICB0aGlzLnRleHQgPSBzdHJcbiAgICAgIGNvbnN0IHB1c2hNc2cgPSB0aGlzLm1ldGhvZHMucHVzaE1zZy5iaW5kKHRoaXMpXG4gICAgICB2YXIgdGV4dCA9IFIudHJpbSh0aGlzLnRleHQpXG4gICAgICB0aGlzLnRleHQgPSAnJ1xuICAgICAgaWYgKHRleHQubGVuZ3RoKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgY29uc3QgbXNnID0gYXdhaXQgdGhpcy5jaGF0cm9vbS5zZW5kVGV4dCh7XG4gICAgICAgICAgICB0ZXh0XG4gICAgICAgICAgfSlcbiAgICAgICAgICB0aGlzLnRleHQgPSAnJ1xuICAgICAgICAgIHB1c2hNc2cobXNnKVxuICAgICAgICAgIHRoaXMuc2hvdyA9ICdlbW9qaV9saXN0J1xuICAgICAgICAgIHRoaXMuc2hvd2VtID0gJ29wZXJhdGlvbidcbiAgICAgICAgICB0aGlzLiRhcHBseSgpXG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICBsb2cuZXJyb3Ioe1xuICAgICAgICAgICAgcGFnZTogJ2NoYXRyb29tJyxcbiAgICAgICAgICAgIG9wcjogJ3NlbmRUZXh0JyxcbiAgICAgICAgICAgIGluZm86IGVcbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcbiAgICBjaGFuZ2VOYXYgKGUpIHtcbiAgICAgIHRoaXMuY3VycmVudE5hdiA9IGUuY3VycmVudFRhcmdldC5kYXRhc2V0LmluZGV4XG4gICAgICB0aGlzLnNlbmRlZCA9IGZhbHNlXG4gICAgICB0aGlzLiRhcHBseSgpXG4gICAgfSxcbiAgICBhc3luYyBjaG9vc2VJbWFnZSgpIHtcbiAgICAgIC8vIOi/m+ihjOWbvueJh+mAieaLqeW5tuS4iuS8oFxuICAgICAgY29uc3QgcHVzaE1zZyA9IHRoaXMubWV0aG9kcy5wdXNoTXNnLmJpbmQodGhpcylcbiAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IHdlcHkuY2hvb3NlSW1hZ2Uoe1xuICAgICAgICBjb3VudDogMVxuICAgICAgfSlcblxuICAgICAgdHJ5IHtcbiAgICAgICAgY29uc3QgZmlsZSA9IGF3YWl0IHRoaXMuY2hhdHJvb20ucHJldmlld0ZpbGUoe1xuICAgICAgICAgIHR5cGU6ICdpbWFnZScsXG4gICAgICAgICAgd3hGaWxlUGF0aDogcmVzLnRlbXBGaWxlUGF0aHNbMF1cbiAgICAgICAgfSlcbiAgICAgICAgY29uc3QgbXNnID0gYXdhaXQgdGhpcy5jaGF0cm9vbS5zZW5kRmlsZSh7XG4gICAgICAgICAgdHlwZTogJ2ltYWdlJyxcbiAgICAgICAgICBmaWxlOiBmaWxlXG4gICAgICAgIH0pXG4gICAgICAgIHB1c2hNc2cobXNnKVxuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgbG9nLmVycm9yKHtcbiAgICAgICAgICBwYWdlOiAnY2hhdHJvb20nLFxuICAgICAgICAgIG9wcjogJ3NlbmRGaWxlJyxcbiAgICAgICAgICBpbmZvOiBlcnJvclxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH0sXG4gICAgYXN5bmMgc2VuZCgpIHtcbiAgICAgIC8vID8gd2h5IGJpbmRcbiAgICAgIGNvbnN0IHB1c2hNc2dUZXh0ID0gdGhpcy5tZXRob2RzLnB1c2hNc2dUZXh0LmJpbmQodGhpcylcbiAgICAgIGNvbnN0IHRleHQgPSBSLnRyaW0odGhpcy50ZXh0KVxuICAgICAgdGhpcy50ZXh0ID0gJydcbiAgICAgIGlmICh0ZXh0Lmxlbmd0aCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIGNvbnN0IG1zZyA9IGF3YWl0IHRoaXMuY2hhdHJvb20uc2VuZFRleHQoe1xuICAgICAgICAgICAgdGV4dFxuICAgICAgICAgIH0pXG4gICAgICAgICAgdGhpcy50ZXh0ID0gJydcbiAgICAgICAgICBwdXNoTXNnVGV4dChtc2cpXG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICBsb2cuZXJyb3Ioe1xuICAgICAgICAgICAgcGFnZTogJ2NoYXRyb29tJyxcbiAgICAgICAgICAgIG9wcjogJ3NlbmRUZXh0JyxcbiAgICAgICAgICAgIGluZm86IGVcbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcbiAgICBzZXRUZXh0KGUpIHtcbiAgICAgIHRoaXMudGV4dCA9IGUuZGV0YWlsLnZhbHVlXG4gICAgfSxcbiAgICBwdXNoTXNnOiBmdW5jdGlvbiAobXNncykge1xuICAgICAgY29uc3QgeyByZWZyZXNoTXNncyB9ID0gdGhpcy5tZXRob2RzXG4gICAgICBpZiAoIUFycmF5LmlzQXJyYXkobXNncykpIHtcbiAgICAgICAgbXNncyA9IFttc2dzXVxuICAgICAgfVxuICAgICAgY29uc29sZS5sb2coJ+WwseaYr+i/meS4quWbvicsIG1zZ3MpXG4gICAgICBtc2dzID0gbXNncy5tYXAobXNnID0+IHtcbiAgICAgICAgaWYgKG1zZy50eXBlID09PSAndGV4dCcpIHtcbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgZW1qaTogRmFjZUlNLmRlZmF1bHQucGFyc2VFbW9qaShtc2cudGV4dC5yZXBsYWNlKC9cXG4vbWcsICcnKSksXG4gICAgICAgICAgICBjaGF0cm9vbUlkOiBtc2cuY2hhdHJvb21JZCxcbiAgICAgICAgICAgIGZsb3c6IG1zZy5mbG93LFxuICAgICAgICAgICAgZnJvbTogbXNnLmZyb20sXG4gICAgICAgICAgICBmcm9tQXZhdGFyOiBtc2cuZnJvbUF2YXRhcixcbiAgICAgICAgICAgIGZyb21DbGllbnRUeXBlOiBtc2cuZnJvbUNsaWVudFR5cGUsXG4gICAgICAgICAgICBmcm9tQ3VzdG9tOiBtc2cuZnJvbUN1c3RvbSxcbiAgICAgICAgICAgIGZyb21OaWNrOiBtc2cuZnJvbU5pY2ssXG4gICAgICAgICAgICBpZENsaWVudDogbXNnLmlkQ2xpZW50LFxuICAgICAgICAgICAgcmVzZW5kOiBtc2cucmVzZW5kLFxuICAgICAgICAgICAgc3RhdHVzOiBtc2cuc3RhdHVzLFxuICAgICAgICAgICAgdGV4dDogbXNnLnRleHQsXG4gICAgICAgICAgICB0aW1lOiBtc2cudGltZSxcbiAgICAgICAgICAgIHR5cGU6IG1zZy50eXBlLFxuICAgICAgICAgICAgdXNlclVwZGF0ZVRpbWU6IG1zZy51c2VyVXBkYXRlVGltZVxuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gbXNnXG4gICAgICAgIH1cbiAgICAgIH0pXG4vLyAgICAgIGNvbnNvbGUubG9nKHRoaXMucm9vbUlkKVxuICAgICAgbGV0IHJvb21JZCA9IHRoaXMucm9vbUlkXG4gICAgICBjb25zb2xlLmxvZyhyb29tSWQpXG4gICAgICBpZiAobXNncy5sZW5ndGggPiAwKSB7XG4gICAgICAgIHJvb21JZCA9IG1zZ3NbMF0uY2hhdHJvb21JZFxuICAgICAgfVxuICAgICAgY29uc3QgbWVyZ2VkID0gWy4uLnRoaXMubXNncywgLi4ubXNnc11cbiAgICAgIHJlZnJlc2hNc2dzKHJvb21JZCwgbWVyZ2VkKVxuLy8gICAgICB0aGlzLnNlbmRlZCA9IHRydWVcbiAgICAgIHRoaXMuJGFwcGx5KClcbiAgICB9LFxuICAgIHB1c2hNc2dUZXh0OiBmdW5jdGlvbiAobXNncykge1xuICAgICAgY29uc3QgeyByZWZyZXNoTXNncyB9ID0gdGhpcy5tZXRob2RzXG4gICAgICBpZiAoIUFycmF5LmlzQXJyYXkobXNncykpIHtcbiAgICAgICAgbXNncyA9IFttc2dzXVxuICAgICAgfVxuICAgICAgY29uc29sZS5sb2coJ+WwseaYr+i/meS4quWbvicsIG1zZ3MpXG4gICAgICBtc2dzID0gbXNncy5tYXAobXNnID0+IHtcbiAgICAgICAgaWYgKG1zZy50eXBlID09PSAndGV4dCcpIHtcbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgZW1qaTogRmFjZUlNLmRlZmF1bHQucGFyc2VFbW9qaShtc2cudGV4dC5yZXBsYWNlKC9cXG4vbWcsICcnKSksXG4gICAgICAgICAgICBjaGF0cm9vbUlkOiBtc2cuY2hhdHJvb21JZCxcbiAgICAgICAgICAgIGZsb3c6IG1zZy5mbG93LFxuICAgICAgICAgICAgZnJvbTogbXNnLmZyb20sXG4gICAgICAgICAgICBmcm9tQXZhdGFyOiBtc2cuZnJvbUF2YXRhcixcbiAgICAgICAgICAgIGZyb21DbGllbnRUeXBlOiBtc2cuZnJvbUNsaWVudFR5cGUsXG4gICAgICAgICAgICBmcm9tQ3VzdG9tOiBtc2cuZnJvbUN1c3RvbSxcbiAgICAgICAgICAgIGZyb21OaWNrOiBtc2cuZnJvbU5pY2ssXG4gICAgICAgICAgICBpZENsaWVudDogbXNnLmlkQ2xpZW50LFxuICAgICAgICAgICAgcmVzZW5kOiBtc2cucmVzZW5kLFxuICAgICAgICAgICAgc3RhdHVzOiBtc2cuc3RhdHVzLFxuICAgICAgICAgICAgdGV4dDogbXNnLnRleHQsXG4gICAgICAgICAgICB0aW1lOiBtc2cudGltZSxcbiAgICAgICAgICAgIHR5cGU6IG1zZy50eXBlLFxuICAgICAgICAgICAgdXNlclVwZGF0ZVRpbWU6IG1zZy51c2VyVXBkYXRlVGltZVxuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gbXNnXG4gICAgICAgIH1cbiAgICAgIH0pXG4vLyAgICAgIGNvbnNvbGUubG9nKHRoaXMucm9vbUlkKVxuICAgICAgbGV0IHJvb21JZCA9IHRoaXMucm9vbUlkXG4gICAgICBjb25zb2xlLmxvZyhyb29tSWQpXG4gICAgICBpZiAobXNncy5sZW5ndGggPiAwKSB7XG4gICAgICAgIHJvb21JZCA9IG1zZ3NbMF0uY2hhdHJvb21JZFxuICAgICAgfVxuICAgICAgY29uc3QgbWVyZ2VkID0gWy4uLnRoaXMubXNncywgLi4ubXNnc11cbiAgICAgIHJlZnJlc2hNc2dzKHJvb21JZCwgbWVyZ2VkKVxuICAgICAgdGhpcy5zZW5kZWQgPSB0cnVlXG4gICAgICB0aGlzLiRhcHBseSgpXG4gICAgfSxcbiAgICBoYW5kbGVGb2N1cygpIHtcbiAgICAgIHRoaXMuc2VuZGVkID0gZmFsc2VcbiAgICB9XG4gIH1cbiAgYXN5bmMgb25Mb2FkKG9wdGlvbnMpIHtcbiAgICBjb25zdCB7IGlkIH0gPSBvcHRpb25zXG4gICAgY29uc3Qge3Jvb21pZH0gPSBvcHRpb25zXG4gICAgY29uc3Qge2NyZWF0b3J9ID0gb3B0aW9uc1xuICAgIHRoaXMucm9vbUlkID0gcm9vbWlkXG4gICAgY29uc3QgcHVzaE1zZyA9IHRoaXMubWV0aG9kcy5wdXNoTXNnLmJpbmQodGhpcylcbiAgICBjb25zdCBnZXRDb3VudHNOdW0gPSB0aGlzLm1ldGhvZHMuZ2V0Q291bnRzTnVtLmJpbmQodGhpcylcbiAgICBjb25zdCBhcHBseSA9IHRoaXMuJGFwcGx5LmJpbmQodGhpcylcbiAgICBjb25zdCBoYXNNc2dzID0gdGhpcy5tc2dzLmxlbmd0aCA+IDBcbiAgICB0cnkge1xuICAgICAgY29uc3QgeyBuaW1Ub2tlbiwgYWNjaWQsIGF2YXRhclVybCwgamZUb2tlbiB9ID0gdGhpcy51c2VyXG4vLyAgICAgIGlmIChjcmVhdG9yICE9PSBhY2NpZCkge1xuLy8gICAgICAgIGF3YWl0IGNoYXRyb29tQXBpLmFkZFRvUm9vbShyb29taWQsIGNyZWF0b3IsIGFjY2lkKVxuLy8gICAgICB9XG4gICAgICBhd2FpdCBjaGF0cm9vbUFwaS5hZGRUb1Jvb20ocm9vbWlkLCBjcmVhdG9yLCBhY2NpZClcbiAgICAgIGNvbnN0IHJvb21JbmZvID0gYXdhaXQgY2hhdHJvb21BcGkuZ2V0T25lQnlJZChpZCwgamZUb2tlbilcbiAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBjaGF0cm9vbUFwaS5nZXRVc2VyTGlzdChyb29taWQsIGpmVG9rZW4pXG4gICAgICBjb25zdCBpc2xpbWl0ID0gZGF0YSA9PiBkYXRhLnR5cGUgPT09ICdMSU1JVEVEJ1xuICAgICAgY29uc3QgaXNVc2VyID0gZGF0YSA9PiBkYXRhLm5hbWUgJiYgZGF0YS5uYW1lICE9PSBudWxsXG4gICAgICB0aGlzLm51bUxpc3QgPSBSLmZpbHRlcihpc1VzZXIpKGRhdGEpXG4gICAgICBjb25zdCB1c2VyTGltaXRBcnIgPSBSLmZpbHRlcihpc2xpbWl0KSh0aGlzLm51bUxpc3QpXG4gICAgICBjb25zb2xlLmxvZygn56aB6KiA5YiX6KGoJywgdXNlckxpbWl0QXJyKVxuICAgICAgaWYgKHVzZXJMaW1pdEFyci5sZW5ndGggPiAwKSB7XG4gICAgICAgIGlmICh1c2VyTGltaXRBcnJbMF0uYWNjaWQgPT09IGFjY2lkKSB7XG4gICAgICAgICAgdGhpcy5pc0xJTUlUID0gdHJ1ZVxuICAgICAgICAgIGNvbnNvbGUubG9nKCfooqvnpoHoqIAnKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICB0aGlzLnJvb21EYXRhID0gcm9vbUluZm9cbiAgICAgIGNvbnN0IHJvb21JZCA9IHRoaXMucm9vbUlkXG4gICAgICBjb25zdCBhZGRyZXNzID0gYXdhaXQgTklNLmdldENoYXRyb29tQWRkcmVzc2VzKGFjY2lkLCByb29tSWQpXG4gICAgICBjb25zdCBjaGF0cm9vbSA9IENoYXRyb29tU0RLLmdldEluc3RhbmNlKHtcbi8vICAgICAgICBkZWJ1ZzogdHJ1ZSxcbiAgICAgICAgYWNjb3VudDogYWNjaWQsXG4gICAgICAgIHRva2VuOiBuaW1Ub2tlbixcbiAgICAgICAgY2hhdHJvb21JZDogcm9vbUlkLFxuICAgICAgICBjaGF0cm9vbUFkZHJlc3NlczogYWRkcmVzcyxcbiAgICAgICAgb25tc2dzOiBmdW5jdGlvbihtc2dzKSB7XG4gICAgICAgICAgbG9nLmluZm8oe1xuICAgICAgICAgICAgcGFnZTogJ2NoYXRyb29tJyxcbiAgICAgICAgICAgIG9wcjogJ2luaXRpYWxpemUgc2RrIGluc3RhbmNlJyxcbiAgICAgICAgICAgIGluZm86IG1zZ3NcbiAgICAgICAgICB9KVxuLy8gICAgICAgICAgY29uc29sZS5sb2coJ+aUtuWIsOiBiuWkqeWupOS/oeaBrycsIG1zZ3MpXG4gICAgICAgICAgcHVzaE1zZyhtc2dzLm1hcChtc2cgPT4ge1xuICAgICAgICAgICAgaWYgKG1zZy50eXBlID09PSAnbm90aWZpY2F0aW9uJykge1xuICAgICAgICAgICAgICBnZXRDb3VudHNOdW0oaWQsIGpmVG9rZW4pXG4gICAgICAgICAgICAgIC8vIOi/m+WFpeiBiuWkqeWupOS/oeaBr1xuICAgICAgICAgICAgICBjb25zdCB0aXAgPSBSLmNvbmQoW1xuICAgICAgICAgICAgICAgIFtSLmVxdWFscygnbWVtYmVyRW50ZXInKSwgUi5hbHdheXMoJ+WKoOWFpeiBiuWkqeWupCcpXSxcbiAgICAgICAgICAgICAgICBbUi5lcXVhbHMoJ21lbWJlckV4aXQnKSwgUi5hbHdheXMoJ+mAgOWHuuiBiuWkqeWupCcpXVxuICAgICAgICAgICAgICBdKShtc2cuYXR0YWNoLnR5cGUpXG4gICAgICAgICAgICAgIGNvbnN0IHRpcE1zZyA9IGAke21zZy5hdHRhY2guZnJvbU5pY2t9ICR7dGlwfWBcbiAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAuLi5tc2csXG4gICAgICAgICAgICAgICAgdHlwZTogJ25vdGlmaWNhdGlvbicsXG4gICAgICAgICAgICAgICAgdGV4dDogdGlwTXNnLFxuICAgICAgICAgICAgICAgIGZyb21BdmF0YXI6IGF2YXRhclVybCxcbiAgICAgICAgICAgICAgICBub3dUaW1lOiBuZXcgRGF0ZShEYXRlLnBhcnNlKG5ldyBEYXRlKCkpICsgMjg4MDAwMDApLnRvSVNPU3RyaW5nKCkuc3BsaXQoJ1QnKVswXSArICcgJyArIG5ldyBEYXRlKCkudG9UaW1lU3RyaW5nKCkuc3Vic3RyKDAsIDgpXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHJldHVybiBtc2dcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KSlcbiAgICAgICAgfSxcbiAgICAgICAgYXN5bmMgb25jb25uZWN0KCkge1xuICAgICAgICAgIGxvZy5pbmZvKHtcbiAgICAgICAgICAgIHBhZ2U6ICdjaGF0cm9vbScsXG4gICAgICAgICAgICBvcHI6ICdpbml0aWFsaXplIHNkayBpbnN0YW5jZScsXG4gICAgICAgICAgICBpbmZvOiAnW05JTSBDSEFUUk9PTV0gY29ubmVjdGVkJ1xuICAgICAgICAgIH0pXG4gICAgICAgICAgaWYgKCFoYXNNc2dzKSB7XG4gICAgICAgICAgICB3ZXB5LnNob3dMb2FkaW5nKClcbiAgICAgICAgICAgIC8vIOaLieWPluacgOi/kSAxMDAg5p2h5L+h5oGvXG4gICAgICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBjaGF0cm9vbS5nZXRIaXN0b3J5TXNncyh7XG4gICAgICAgICAgICAgIGxpbWl0OiAxMDBcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBjb25zdCBtc2dzID0gcmVzLm1zZ3MuZmlsdGVyKG1zZyA9PiBtc2cudHlwZSAhPT0gJ25vdGlmaWNhdGlvbicgJiYgbXNnLnR5cGUgIT09ICd0aXAnKS5yZXZlcnNlKClcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdoaXN0b3J5IG1lc3NhZ2VzJywgbXNncylcbiAgICAgICAgICAgIC8vIOWIt+aWsOa2iOaBr1xuICAgICAgICAgICAgcHVzaE1zZyhtc2dzIHx8IFtdKVxuICAgICAgICAgICAgYXBwbHkoKVxuICAgICAgICAgICAgd2VweS5oaWRlTG9hZGluZygpXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgdGhpcy5jaGF0cm9vbSA9IGNoYXRyb29tXG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgbG9nLmVycm9yKHtcbiAgICAgICAgcGFnZTogJ2NoYXRyb29tJyxcbiAgICAgICAgb3ByOiAnZ2V0SW5zdGFuY2UnLFxuICAgICAgICBpbmZvOiBlXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIGFzeW5jIG9uU2hvdygpIHtcbiAgICB0aGlzLmlzTElNSVQgPSBmYWxzZVxuICAgIHRoaXMuc2VuZGVkID0gZmFsc2VcbiAgICB0aGlzLmN1cnJlbnROYXYgPSAwXG4gIH1cbn1cbiJdfQ==