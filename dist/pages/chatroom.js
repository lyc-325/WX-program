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
    if (this.scrolltoper) {
      return '';
    }
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
      searchinput: '',
      sendFocus: false
    }, _this.methods = {
      scroll: function scroll(e) {
        var _this2 = this;

        return (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
          return _regenerator2.default.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  // console.log(e.detail.scrollHeight)判断是否在查看历史记录不滚动
                  if (e.detail.scrollTop < e.detail.scrollHeight * 0.5 || e.detail.scrollTop < 100) {
                    // console.log(e.detail.deltaX)
                    _this2.scrolltoper = 1;
                  } else {
                    _this2.scrolltoper = 0;
                  }
                  if (e.detail.scrollTop < 10 && _this2.msgs.length < 150) {}

                case 2:
                case 'end':
                  return _context.stop();
              }
            }
          }, _callee, _this2);
        }))();
      },
      getCountsNum: function getCountsNum(id, jfToken) {
        var _this3 = this;

        return (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2() {
          var _ref2, onlineusercount;

          return _regenerator2.default.wrap(function _callee2$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  _context2.next = 2;
                  return chatroomApi.getOneById(id, jfToken);

                case 2:
                  _ref2 = _context2.sent;
                  onlineusercount = _ref2.onlineusercount;

                  _this3.nowPeoples = onlineusercount;
                  _this3.$apply();

                case 6:
                case 'end':
                  return _context2.stop();
              }
            }
          }, _callee2, _this3);
        }))();
      },
      handleName: function handleName(item) {
        var _this4 = this;

        return (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3() {
          var itemAccid, _ref3, id;

          return _regenerator2.default.wrap(function _callee3$(_context3) {
            while (1) {
              switch (_context3.prev = _context3.next) {
                case 0:
                  itemAccid = item.from;

                  console.log(itemAccid);
                  _context3.next = 4;
                  return chatroomApi.getItemId(itemAccid);

                case 4:
                  _ref3 = _context3.sent;
                  id = _ref3.id;

                  _wepy2.default.navigateTo({
                    url: 'userInfo?id=' + id
                  });

                case 7:
                case 'end':
                  return _context3.stop();
              }
            }
          }, _callee3, _this4);
        }))();
      },
      handleNameId: function handleNameId(item) {
        var itemid = item.id;
        _wepy2.default.navigateTo({
          url: 'userInfo?id=' + itemid
        });
      },
      getFocus: function getFocus() {
        this.setData({
          sendFocus: false
        });
      },
      openEmoji: function openEmoji(e) {
        if (this.show === 'showEmoji') {
          this.show = 'emoji_list';
          this.showem = 'operation';
        } else {
          this.show = 'showEmoji';
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
        var _this5 = this;

        return (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee4() {
          var that, emoji, msglen, str, start, end, len, pushMsg, text, msg;
          return _regenerator2.default.wrap(function _callee4$(_context4) {
            while (1) {
              switch (_context4.prev = _context4.next) {
                case 0:
                  that = _this5;
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
                  _this5.text = str;
                  pushMsg = _this5.methods.pushMsg.bind(_this5);
                  text = _ramda2.default.trim(_this5.text);

                  _this5.text = '';

                  if (!text.length) {
                    _context4.next = 23;
                    break;
                  }

                  _context4.prev = 9;
                  _context4.next = 12;
                  return _this5.chatroom.sendText({
                    text: text
                  });

                case 12:
                  msg = _context4.sent;

                  _this5.text = '';
                  pushMsg(msg);
                  _this5.show = 'emoji_list';
                  _this5.setData({
                    searchinput: ''
                  });
                  _this5.$apply();
                  _context4.next = 23;
                  break;

                case 20:
                  _context4.prev = 20;
                  _context4.t0 = _context4['catch'](9);

                  log.error({
                    page: 'chatroom',
                    opr: 'sendText',
                    info: _context4.t0
                  });

                case 23:
                case 'end':
                  return _context4.stop();
              }
            }
          }, _callee4, _this5, [[9, 20]]);
        }))();
      },
      changeNav: function changeNav(e) {
        this.currentNav = e.currentTarget.dataset.index;
        this.sended = false;
        this.$apply();
      },
      chooseImage: function chooseImage() {
        var _this6 = this;

        return (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee5() {
          var pushMsg, res, file, msg;
          return _regenerator2.default.wrap(function _callee5$(_context5) {
            while (1) {
              switch (_context5.prev = _context5.next) {
                case 0:
                  // 进行图片选择并上传
                  pushMsg = _this6.methods.pushMsg.bind(_this6);
                  _context5.next = 3;
                  return _wepy2.default.chooseImage({
                    count: 1
                  });

                case 3:
                  res = _context5.sent;
                  _context5.prev = 4;
                  _context5.next = 7;
                  return _this6.chatroom.previewFile({
                    type: 'image',
                    wxFilePath: res.tempFilePaths[0]
                  });

                case 7:
                  file = _context5.sent;
                  _context5.next = 10;
                  return _this6.chatroom.sendFile({
                    type: 'image',
                    file: file
                  });

                case 10:
                  msg = _context5.sent;

                  pushMsg(msg);
                  _context5.next = 17;
                  break;

                case 14:
                  _context5.prev = 14;
                  _context5.t0 = _context5['catch'](4);

                  log.error({
                    page: 'chatroom',
                    opr: 'sendFile',
                    info: _context5.t0
                  });

                case 17:
                case 'end':
                  return _context5.stop();
              }
            }
          }, _callee5, _this6, [[4, 14]]);
        }))();
      },
      send: function send(e) {
        var _this7 = this;

        return (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee6() {
          var pushMsgText, text, msg;
          return _regenerator2.default.wrap(function _callee6$(_context6) {
            while (1) {
              switch (_context6.prev = _context6.next) {
                case 0:
                  //? why bind
                  _this7.setData({
                    searchinput: '',
                    sendFocus: true
                  });
                  _this7.scrolltoper = 0;
                  pushMsgText = _this7.methods.pushMsgText.bind(_this7);
                  text = _ramda2.default.trim(_this7.text);

                  _this7.text = '';

                  if (!text.length) {
                    _context6.next = 17;
                    break;
                  }

                  _context6.prev = 6;
                  _context6.next = 9;
                  return _this7.chatroom.sendText({
                    text: text
                  });

                case 9:
                  msg = _context6.sent;

                  _this7.text = '';
                  pushMsgText(msg);
                  _context6.next = 17;
                  break;

                case 14:
                  _context6.prev = 14;
                  _context6.t0 = _context6['catch'](6);

                  log.error({
                    page: 'chatroom',
                    opr: 'sendText',
                    info: _context6.t0
                  });

                case 17:
                case 'end':
                  return _context6.stop();
              }
            }
          }, _callee6, _this7, [[6, 14]]);
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
      }
    }, _this.onShareAppMessage = function (res) {
      return {
        title: this.roomData.name
      };
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(Chatroom, [{
    key: 'onLoad',
    value: function () {
      var _ref4 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee8(options) {
        var id, roomid, creator, pushMsg, getCountsNum, apply, hasMsgs, _user, nimToken, accid, avatarUrl, jfToken, roomInfo, data, islimit, isUser, userLimitArr, roomId, address, chatroom;

        return _regenerator2.default.wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                id = options.id;
                roomid = options.roomid;
                creator = options.creator;

                this.roomId = roomid;
                pushMsg = this.methods.pushMsg.bind(this);
                getCountsNum = this.methods.getCountsNum.bind(this);
                apply = this.$apply.bind(this);
                hasMsgs = this.msgs.length > 0;
                _context8.prev = 8;
                _user = this.user, nimToken = _user.nimToken, accid = _user.accid, avatarUrl = _user.avatarUrl, jfToken = _user.jfToken;
                //      if (creator !== accid) {
                //        await chatroomApi.addToRoom(roomid, creator, accid)
                //      }

                _context8.next = 12;
                return chatroomApi.addToRoom(roomid, creator, accid);

              case 12:
                _context8.next = 14;
                return chatroomApi.getOneById(id, jfToken);

              case 14:
                roomInfo = _context8.sent;
                _context8.next = 17;
                return chatroomApi.getUserList(roomid, jfToken);

              case 17:
                data = _context8.sent;

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
                _context8.next = 28;
                return _nim2.default.getChatroomAddresses(accid, roomId);

              case 28:
                address = _context8.sent;
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
                    var _this8 = this;

                    return (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee7() {
                      var res, msgs;
                      return _regenerator2.default.wrap(function _callee7$(_context7) {
                        while (1) {
                          switch (_context7.prev = _context7.next) {
                            case 0:
                              log.info({
                                page: 'chatroom',
                                opr: 'initialize sdk instance',
                                info: '[NIM CHATROOM] connected'
                              });

                              if (hasMsgs) {
                                _context7.next = 11;
                                break;
                              }

                              _wepy2.default.showLoading();
                              // 拉取最近 100 条信息
                              _context7.next = 5;
                              return chatroom.getHistoryMsgs({
                                limit: 100
                              });

                            case 5:
                              res = _context7.sent;
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
                              return _context7.stop();
                          }
                        }
                      }, _callee7, _this8);
                    }))();
                  }
                });

                this.chatroom = chatroom;
                _context8.next = 36;
                break;

              case 33:
                _context8.prev = 33;
                _context8.t0 = _context8['catch'](8);

                log.error({
                  page: 'chatroom',
                  opr: 'getInstance',
                  info: _context8.t0
                });

              case 36:
              case 'end':
                return _context8.stop();
            }
          }
        }, _callee8, this, [[8, 33]]);
      }));

      function onLoad(_x) {
        return _ref4.apply(this, arguments);
      }

      return onLoad;
    }()
  }, {
    key: 'onShow',
    value: function () {
      var _ref5 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee9() {
        return _regenerator2.default.wrap(function _callee9$(_context9) {
          while (1) {
            switch (_context9.prev = _context9.next) {
              case 0:
                this.isLIMIT = false;
                this.sended = false;
                this.currentNav = 0;

              case 3:
              case 'end':
                return _context9.stop();
            }
          }
        }, _callee9, this);
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoYXRyb29tLmpzIl0sIm5hbWVzIjpbImxvZyIsImNoYXRyb29tQXBpIiwiQ2hhdHJvb20iLCJ1c2VyIiwic3RhdGUiLCJjb21tb24iLCJuaW0iLCJtc2dzIiwiY2hhdHJvb20iLCJyb29tSWQiLCJpbnRvVmlldyIsImxhc3QiLCJzY3JvbGx0b3BlciIsImlkQ2xpZW50IiwicmVmcmVzaE1zZ3MiLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiZGF0YSIsIm5hdnMiLCJjdXJyZW50TmF2IiwibnVtTGlzdCIsImlzTElNSVQiLCJzZW5kZWQiLCJ0ZXh0Iiwicm9vbURhdGEiLCJuYW1lIiwiaW5kaWNhdG9yRG90cyIsImF1dG9wbGF5IiwiaW50ZXJ2YWwiLCJkdXJhdGlvbiIsInNob3ciLCJzaG93ZW0iLCJlbW9qaSIsImRlZmF1bHQiLCJFbW9qaSIsImVtb2ppT2JqIiwiRW1vamlPYmoiLCJub3dUaW1lIiwibm93UGVvcGxlcyIsInNlYXJjaGlucHV0Iiwic2VuZEZvY3VzIiwibWV0aG9kcyIsInNjcm9sbCIsImUiLCJkZXRhaWwiLCJzY3JvbGxUb3AiLCJzY3JvbGxIZWlnaHQiLCJsZW5ndGgiLCJnZXRDb3VudHNOdW0iLCJpZCIsImpmVG9rZW4iLCJnZXRPbmVCeUlkIiwib25saW5ldXNlcmNvdW50IiwiJGFwcGx5IiwiaGFuZGxlTmFtZSIsIml0ZW0iLCJpdGVtQWNjaWQiLCJmcm9tIiwiY29uc29sZSIsImdldEl0ZW1JZCIsIm5hdmlnYXRlVG8iLCJ1cmwiLCJoYW5kbGVOYW1lSWQiLCJpdGVtaWQiLCJnZXRGb2N1cyIsInNldERhdGEiLCJvcGVuRW1vamkiLCJpbWdQcmV2aWV3IiwiaXRlbXMiLCJpbWdVcmwiLCJpc0ltZyIsIm1zZyIsInR5cGUiLCJpbWdBcnIiLCJmaWx0ZXIiLCJpbWdVcmxBcnIiLCJtYXAiLCJmaWxlIiwicHJldmlld0ltYWdlIiwiY3VycmVudCIsInVybHMiLCJzdWNjZXNzIiwicmVzIiwic2VuZEVtb2ppIiwiZXZlbnQiLCJ0aGF0IiwidGFyZ2V0IiwiZGF0YXNldCIsIm1zZ2xlbiIsInN0ciIsInN0YXJ0IiwibGFzdEluZGV4T2YiLCJlbmQiLCJsZW4iLCJzbGljZSIsInB1c2hNc2ciLCJiaW5kIiwidHJpbSIsInNlbmRUZXh0IiwiZXJyb3IiLCJwYWdlIiwib3ByIiwiaW5mbyIsImNoYW5nZU5hdiIsImN1cnJlbnRUYXJnZXQiLCJpbmRleCIsImNob29zZUltYWdlIiwiY291bnQiLCJwcmV2aWV3RmlsZSIsInd4RmlsZVBhdGgiLCJ0ZW1wRmlsZVBhdGhzIiwic2VuZEZpbGUiLCJzZW5kIiwicHVzaE1zZ1RleHQiLCJzZXRUZXh0IiwidmFsdWUiLCJBcnJheSIsImlzQXJyYXkiLCJlbWppIiwicGFyc2VFbW9qaSIsInJlcGxhY2UiLCJjaGF0cm9vbUlkIiwiZmxvdyIsImZyb21BdmF0YXIiLCJmcm9tQ2xpZW50VHlwZSIsImZyb21DdXN0b20iLCJmcm9tTmljayIsInJlc2VuZCIsInN0YXR1cyIsInRpbWUiLCJ1c2VyVXBkYXRlVGltZSIsIm1lcmdlZCIsIm9uU2hhcmVBcHBNZXNzYWdlIiwidGl0bGUiLCJvcHRpb25zIiwicm9vbWlkIiwiY3JlYXRvciIsImFwcGx5IiwiaGFzTXNncyIsIm5pbVRva2VuIiwiYWNjaWQiLCJhdmF0YXJVcmwiLCJhZGRUb1Jvb20iLCJyb29tSW5mbyIsImdldFVzZXJMaXN0IiwiaXNsaW1pdCIsImlzVXNlciIsInVzZXJMaW1pdEFyciIsImdldENoYXRyb29tQWRkcmVzc2VzIiwiYWRkcmVzcyIsImdldEluc3RhbmNlIiwiYWNjb3VudCIsInRva2VuIiwiY2hhdHJvb21BZGRyZXNzZXMiLCJvbm1zZ3MiLCJ0aXAiLCJjb25kIiwiZXF1YWxzIiwiYWx3YXlzIiwiYXR0YWNoIiwidGlwTXNnIiwiRGF0ZSIsInBhcnNlIiwidG9JU09TdHJpbmciLCJzcGxpdCIsInRvVGltZVN0cmluZyIsInN1YnN0ciIsIm9uY29ubmVjdCIsInNob3dMb2FkaW5nIiwiZ2V0SGlzdG9yeU1zZ3Mi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QUFBO0FBQUE7O0FBT2QsNkNBQUs4QixXQUFMO0FBQ1E7QUFSTTtBQUFBLHFDQVNZaEssU0FBU2lLLGNBQVQsQ0FBd0I7QUFDeENDLHVDQUFPO0FBRGlDLCtCQUF4QixDQVRaOztBQUFBO0FBU0F4RixpQ0FUQTtBQVlBM0Usa0NBWkEsR0FZTzJFLElBQUkzRSxJQUFKLENBQVNtRSxNQUFULENBQWdCO0FBQUEsdUNBQU9ILElBQUlDLElBQUosS0FBYSxjQUFiLElBQStCRCxJQUFJQyxJQUFKLEtBQWEsS0FBbkQ7QUFBQSwrQkFBaEIsRUFBMEVtRyxPQUExRSxFQVpQOztBQWFOakgsc0NBQVExRCxHQUFSLENBQVksa0JBQVosRUFBZ0NPLElBQWhDO0FBQ0E7QUFDQXdGLHNDQUFReEYsUUFBUSxFQUFoQjtBQUNBa0k7QUFDQSw2Q0FBS21DLFdBQUw7O0FBakJNO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBbUJUO0FBckRnQyxpQkFBeEIsQzs7QUF1RGpCLHFCQUFLcEssUUFBTCxHQUFnQkEsUUFBaEI7Ozs7Ozs7O0FBRUVSLG9CQUFJbUcsS0FBSixDQUFVO0FBQ1JDLHdCQUFNLFVBREU7QUFFUkMsdUJBQUssYUFGRztBQUdSQztBQUhRLGlCQUFWOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFhQSxxQkFBS2pGLE9BQUwsR0FBZSxLQUFmO0FBQ0EscUJBQUtDLE1BQUwsR0FBYyxLQUFkO0FBQ0EscUJBQUtILFVBQUwsR0FBa0IsQ0FBbEI7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQXRYc0MsZUFBS2lGLEk7a0JBQXRCbEcsUSIsImZpbGUiOiJjaGF0cm9vbS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4gIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXHJcbiAgaW1wb3J0IFIgZnJvbSAnLi4vbGlicy9yYW1kYSdcclxuICBpbXBvcnQgQ2hhdHJvb21TREsgZnJvbSAnLi4vdXRpbHMvY2hhdHJvb20nXHJcbiAgaW1wb3J0IE5JTSBmcm9tICcuLi91dGlscy9uaW0nXHJcbiAgaW1wb3J0IEZhY2VJTSBmcm9tICcuLi91dGlscy9XZWJJTSdcclxuICBpbXBvcnQgKiBhcyBsb2cgZnJvbSAnLi4vdXRpbHMvbG9nJ1xyXG4gIGltcG9ydCB7XHJcbiAgICByZWZyZXNoTXNnc1xyXG4gIH0gZnJvbSAnLi4vYWN0aW9ucy9jaGF0cm9vbSdcclxuICBpbXBvcnQgKiBhcyBjaGF0cm9vbUFwaSBmcm9tICcuLi9hcGlzL2NoYXRyb29tJ1xyXG4gIGltcG9ydCB7XHJcbiAgICBjb25uZWN0XHJcbiAgfSBmcm9tICd3ZXB5LXJlZHV4J1xyXG4gIEBjb25uZWN0KHtcclxuICAgIHVzZXI6IHN0YXRlID0+IHN0YXRlLmNvbW1vbi51c2VyLFxyXG4gICAgbmltOiBzdGF0ZSA9PiBzdGF0ZS5jb21tb24ubmltLFxyXG4gICAgbXNnczogZnVuY3Rpb24gKHN0YXRlKSB7XHJcbiAgICAgIHJldHVybiBzdGF0ZS5jaGF0cm9vbS5tc2dzW3RoaXMucm9vbUlkXSB8fCBbXVxyXG4gICAgfSxcclxuICAgIGludG9WaWV3OiBmdW5jdGlvbihzdGF0ZSkge1xyXG4gICAgICBjb25zdCBtc2dzID0gc3RhdGUuY2hhdHJvb20ubXNnc1t0aGlzLnJvb21JZF0gfHwgW11cclxuICAgICAgY29uc3QgbGFzdCA9IFIubGFzdChtc2dzKVxyXG4gICAgICBpZiAodGhpcy5zY3JvbGx0b3Blcikge1xyXG4gICAgICAgIHJldHVybiAnJ1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiBsYXN0ID8gbGFzdC5pZENsaWVudCA6ICcnXHJcbiAgICB9XHJcbiAgfSwge1xyXG4gICAgcmVmcmVzaE1zZ3NcclxuICB9KVxyXG4gIGV4cG9ydCBkZWZhdWx0IGNsYXNzIENoYXRyb29tIGV4dGVuZHMgd2VweS5wYWdlIHtcclxuICAgIGNvbmZpZyA9IHtcclxuICAgICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+iBiuWkqeWupCdcclxuICAgIH1cclxuICAgIGRhdGEgPSB7XHJcbiAgICAgIG5hdnM6IFsn6IGK5aSpJywgJ+ivpuaDhSddLFxyXG4gICAgICBjdXJyZW50TmF2OiAwLFxyXG4gICAgICBudW1MaXN0OiBbXSxcclxuICAgICAgaXNMSU1JVDogZmFsc2UsXHJcbiAgICAgIGNoYXRyb29tOiBudWxsLFxyXG4gICAgICByb29tSWQ6IG51bGwsXHJcbiAgICAgIHNlbmRlZDogZmFsc2UsXHJcbiAgICAgIHRleHQ6ICcnLFxyXG4gICAgICByb29tRGF0YToge1xyXG4gICAgICAgIG5hbWU6ICfliqDovb3kuK0uLi4nXHJcbiAgICAgIH0sXHJcbiAgICAgIGluZGljYXRvckRvdHM6IHRydWUsXHJcbiAgICAgIGF1dG9wbGF5OiBmYWxzZSxcclxuICAgICAgaW50ZXJ2YWw6IDUwMDAsXHJcbiAgICAgIGR1cmF0aW9uOiAxMDAwLFxyXG4gICAgICBzaG93OiAnZW1vamlfbGlzdCcsXHJcbiAgICAgIHNob3dlbTogJ29wZXJhdGlvbicsXHJcbiAgICAgIGVtb2ppOiBGYWNlSU0uZGVmYXVsdC5FbW9qaSxcclxuICAgICAgZW1vamlPYmo6IEZhY2VJTS5kZWZhdWx0LkVtb2ppT2JqLFxyXG4gICAgICBub3dUaW1lOiAnJyxcclxuICAgICAgbm93UGVvcGxlczogMCxcclxuICAgICAgc2VhcmNoaW5wdXQ6JycsXHJcbiAgICAgIHNlbmRGb2N1czogZmFsc2UsXHJcbiAgICB9XHJcbiAgICBtZXRob2RzID0ge1xyXG4gICAgICBhc3luYyBzY3JvbGwgKGUpIHtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhlLmRldGFpbC5zY3JvbGxIZWlnaHQp5Yik5pat5piv5ZCm5Zyo5p+l55yL5Y6G5Y+y6K6w5b2V5LiN5rua5YqoXHJcbiAgICAgICAgaWYgKGUuZGV0YWlsLnNjcm9sbFRvcCA8IGUuZGV0YWlsLnNjcm9sbEhlaWdodCowLjUgfHwgZS5kZXRhaWwuc2Nyb2xsVG9wIDwgMTAwKSB7XHJcbiAgICAgICAgICAvLyBjb25zb2xlLmxvZyhlLmRldGFpbC5kZWx0YVgpXHJcbiAgICAgICAgICB0aGlzLnNjcm9sbHRvcGVyID0gMVxyXG4gICAgICAgIH1lbHNlIHtcclxuICAgICAgICAgIHRoaXMuc2Nyb2xsdG9wZXIgPSAwXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKGUuZGV0YWlsLnNjcm9sbFRvcCA8IDEwICYmIHRoaXMubXNncy5sZW5ndGggPCAxNTApIHtcclxuICAgICAgICB9XHJcbiAgICAgIH0sXHJcbiAgICAgIGFzeW5jIGdldENvdW50c051bShpZCwgamZUb2tlbikge1xyXG4gICAgICAgIGNvbnN0IHtvbmxpbmV1c2VyY291bnR9ID0gYXdhaXQgY2hhdHJvb21BcGkuZ2V0T25lQnlJZChpZCwgamZUb2tlbilcclxuICAgICAgICB0aGlzLm5vd1Blb3BsZXMgPSBvbmxpbmV1c2VyY291bnRcclxuICAgICAgICB0aGlzLiRhcHBseSgpXHJcbiAgICAgIH0sXHJcbiAgICAgIGFzeW5jIGhhbmRsZU5hbWUgKGl0ZW0pIHtcclxuICAgICAgICBjb25zdCBpdGVtQWNjaWQgPSBpdGVtLmZyb21cclxuICAgICAgICBjb25zb2xlLmxvZyhpdGVtQWNjaWQpXHJcbiAgICAgICAgY29uc3Qge2lkfSA9IGF3YWl0IGNoYXRyb29tQXBpLmdldEl0ZW1JZChpdGVtQWNjaWQpXHJcbiAgICAgICAgd2VweS5uYXZpZ2F0ZVRvKHtcclxuICAgICAgICAgIHVybDogYHVzZXJJbmZvP2lkPSR7aWR9YFxyXG4gICAgICAgIH0pXHJcbiAgICAgIH0sXHJcbiAgICAgIGhhbmRsZU5hbWVJZCAoaXRlbSkge1xyXG4gICAgICAgIGNvbnN0IGl0ZW1pZCA9IGl0ZW0uaWRcclxuICAgICAgICB3ZXB5Lm5hdmlnYXRlVG8oe1xyXG4gICAgICAgICAgdXJsOiBgdXNlckluZm8/aWQ9JHtpdGVtaWR9YFxyXG4gICAgICAgIH0pXHJcbiAgICAgIH0sXHJcbiAgICAgIGdldEZvY3VzICgpIHtcclxuICAgICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgICAgc2VuZEZvY3VzIDogZmFsc2VcclxuICAgICAgICB9KVxyXG4gICAgICB9LFxyXG4gICAgICBvcGVuRW1vamkgKGUpIHtcclxuICAgICAgICBpZiAodGhpcy5zaG93ID09PSAnc2hvd0Vtb2ppJykge1xyXG4gICAgICAgICAgdGhpcy5zaG93ID0gJ2Vtb2ppX2xpc3QnXHJcbiAgICAgICAgICB0aGlzLnNob3dlbSA9ICdvcGVyYXRpb24nXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHRoaXMuc2hvdyA9ICdzaG93RW1vamknXHJcbiAgICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy4kYXBwbHkoKVxyXG4gICAgICB9LFxyXG4gICAgICBpbWdQcmV2aWV3IChpdGVtcywgbXNncykge1xyXG4gICAgICAgIGNvbnN0IGltZ1VybCA9IGl0ZW1zXHJcbiAgICAgICAgY29uc3QgaXNJbWcgPSBtc2cgPT4gbXNnLnR5cGUgPT09ICdpbWFnZSdcclxuICAgICAgICBjb25zdCBpbWdBcnIgPSBSLmZpbHRlcihpc0ltZykobXNncylcclxuICAgICAgICBjb25zdCBpbWdVcmxBcnIgPSBpbWdBcnIubWFwKG1zZyA9PiB7XHJcbiAgICAgICAgICByZXR1cm4gbXNnLmZpbGUudXJsXHJcbiAgICAgICAgfSlcclxuICAgICAgICB3ZXB5LnByZXZpZXdJbWFnZSh7XHJcbiAgICAgICAgICBjdXJyZW50OiBpbWdVcmwsXHJcbiAgICAgICAgICB1cmxzOiBpbWdVcmxBcnIsXHJcbiAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAocmVzKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlcylcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgICB9LFxyXG4gICAgICBhc3luYyBzZW5kRW1vamkgKGV2ZW50KSB7XHJcbiAgICAgICAgdmFyIHRoYXQgPSB0aGlzXHJcbiAgICAgICAgdmFyIGVtb2ppID0gZXZlbnQudGFyZ2V0LmRhdGFzZXQuZW1vamlcclxuICAgICAgICB2YXIgbXNnbGVuID0gdGhhdC5kYXRhLnRleHQubGVuZ3RoIC0gMVxyXG4gICAgICAgIGlmIChlbW9qaSAmJiBlbW9qaSAhPT0gJ1tkZWxdJykge1xyXG4gICAgICAgICAgdmFyIHN0ciA9IHRoYXQuZGF0YS50ZXh0ICsgZW1vamlcclxuICAgICAgICB9IGVsc2UgaWYgKGVtb2ppID09PSAnW2RlbF0nKSB7XHJcbiAgICAgICAgICB2YXIgc3RhcnQgPSB0aGF0LmRhdGEudGV4dC5sYXN0SW5kZXhPZignWycpXHJcbiAgICAgICAgICB2YXIgZW5kID0gdGhhdC5kYXRhLnRleHQubGFzdEluZGV4T2YoJ10nKVxyXG4gICAgICAgICAgdmFyIGxlbiA9IGVuZCAtIHN0YXJ0XHJcbiAgICAgICAgICBpZiAoZW5kICE9PSAtMSAmJiBlbmQgPT09IG1zZ2xlbiAmJiBsZW4gPj0gMyAmJiBsZW4gPD0gNCkge1xyXG4gICAgICAgICAgICBzdHIgPSB0aGF0LmRhdGEudGV4dC5zbGljZSgwLCBzdGFydClcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHN0ciA9IHRoYXQuZGF0YS50ZXh0LnNsaWNlKDAsIG1zZ2xlbilcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy50ZXh0ID0gc3RyXHJcbiAgICAgICAgY29uc3QgcHVzaE1zZyA9IHRoaXMubWV0aG9kcy5wdXNoTXNnLmJpbmQodGhpcylcclxuICAgICAgICB2YXIgdGV4dCA9IFIudHJpbSh0aGlzLnRleHQpXHJcbiAgICAgICAgdGhpcy50ZXh0ID0gJydcclxuICAgICAgICBpZiAodGV4dC5sZW5ndGgpIHtcclxuICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGNvbnN0IG1zZyA9IGF3YWl0IHRoaXMuY2hhdHJvb20uc2VuZFRleHQoe1xyXG4gICAgICAgICAgICAgIHRleHRcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgdGhpcy50ZXh0ID0gJydcclxuICAgICAgICAgICAgcHVzaE1zZyhtc2cpXHJcbiAgICAgICAgICAgIHRoaXMuc2hvdyA9ICdlbW9qaV9saXN0J1xyXG4gICAgICAgICAgICB0aGlzLnNldERhdGEoeyAgXHJcbiAgICAgICAgICAgICAgc2VhcmNoaW5wdXQ6ICcnLCAgXHJcbiAgICAgICAgICAgIH0pICBcclxuICAgICAgICAgICAgdGhpcy4kYXBwbHkoKVxyXG4gICAgICAgICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICBsb2cuZXJyb3Ioe1xyXG4gICAgICAgICAgICAgIHBhZ2U6ICdjaGF0cm9vbScsXHJcbiAgICAgICAgICAgICAgb3ByOiAnc2VuZFRleHQnLFxyXG4gICAgICAgICAgICAgIGluZm86IGVcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH0sXHJcbiAgICAgIGNoYW5nZU5hdiAoZSkge1xyXG4gICAgICAgIHRoaXMuY3VycmVudE5hdiA9IGUuY3VycmVudFRhcmdldC5kYXRhc2V0LmluZGV4XHJcbiAgICAgICAgdGhpcy5zZW5kZWQgPSBmYWxzZVxyXG4gICAgICAgIHRoaXMuJGFwcGx5KClcclxuICAgICAgfSxcclxuICAgICAgYXN5bmMgY2hvb3NlSW1hZ2UoKSB7XHJcbiAgICAgIC8vIOi/m+ihjOWbvueJh+mAieaLqeW5tuS4iuS8oFxyXG4gICAgICBjb25zdCBwdXNoTXNnID0gdGhpcy5tZXRob2RzLnB1c2hNc2cuYmluZCh0aGlzKVxyXG4gICAgICBjb25zdCByZXMgPSBhd2FpdCB3ZXB5LmNob29zZUltYWdlKHtcclxuICAgICAgICBjb3VudDogMVxyXG4gICAgICB9KVxyXG4gICAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IGZpbGUgPSBhd2FpdCB0aGlzLmNoYXRyb29tLnByZXZpZXdGaWxlKHtcclxuICAgICAgICAgIHR5cGU6ICdpbWFnZScsXHJcbiAgICAgICAgICB3eEZpbGVQYXRoOiByZXMudGVtcEZpbGVQYXRoc1swXVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgY29uc3QgbXNnID0gYXdhaXQgdGhpcy5jaGF0cm9vbS5zZW5kRmlsZSh7XHJcbiAgICAgICAgICB0eXBlOiAnaW1hZ2UnLFxyXG4gICAgICAgICAgZmlsZTogZmlsZVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgcHVzaE1zZyhtc2cpXHJcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgbG9nLmVycm9yKHtcclxuICAgICAgICAgIHBhZ2U6ICdjaGF0cm9vbScsXHJcbiAgICAgICAgICBvcHI6ICdzZW5kRmlsZScsXHJcbiAgICAgICAgICBpbmZvOiBlcnJvclxyXG4gICAgICAgIH0pXHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBhc3luYyBzZW5kKGUpIHtcclxuICAgICAgLy8/IHdoeSBiaW5kXHJcbiAgICAgIHRoaXMuc2V0RGF0YSh7ICBcclxuICAgICAgICAgIHNlYXJjaGlucHV0OiAnJywgIFxyXG4gICAgICAgICAgc2VuZEZvY3VzOiB0cnVlLFxyXG4gICAgICB9KSBcclxuICAgICAgdGhpcy5zY3JvbGx0b3BlciA9IDBcclxuICAgICAgY29uc3QgcHVzaE1zZ1RleHQgPSB0aGlzLm1ldGhvZHMucHVzaE1zZ1RleHQuYmluZCh0aGlzKVxyXG4gICAgICBjb25zdCB0ZXh0ID0gUi50cmltKHRoaXMudGV4dClcclxuICAgICAgdGhpcy50ZXh0ID0gJydcclxuICAgICAgaWYgKHRleHQubGVuZ3RoKSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgIGNvbnN0IG1zZyA9IGF3YWl0IHRoaXMuY2hhdHJvb20uc2VuZFRleHQoe1xyXG4gICAgICAgICAgICB0ZXh0XHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgICAgdGhpcy50ZXh0ID0gJydcclxuICAgICAgICAgIHB1c2hNc2dUZXh0KG1zZylcclxuICAgICAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgICBsb2cuZXJyb3Ioe1xyXG4gICAgICAgICAgICBwYWdlOiAnY2hhdHJvb20nLFxyXG4gICAgICAgICAgICBvcHI6ICdzZW5kVGV4dCcsXHJcbiAgICAgICAgICAgIGluZm86IGVcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgc2V0VGV4dChlKSB7XHJcbiAgICAgIHRoaXMudGV4dCA9IGUuZGV0YWlsLnZhbHVlXHJcbiAgICB9LFxyXG4gICAgcHVzaE1zZzogZnVuY3Rpb24gKG1zZ3MpIHtcclxuICAgICAgY29uc3QgeyByZWZyZXNoTXNncyB9ID0gdGhpcy5tZXRob2RzXHJcbiAgICAgIGlmICghQXJyYXkuaXNBcnJheShtc2dzKSkge1xyXG4gICAgICAgIG1zZ3MgPSBbbXNnc11cclxuICAgICAgfVxyXG4gICAgICBjb25zb2xlLmxvZygn5bCx5piv6L+Z5Liq5Zu+JywgbXNncylcclxuICAgICAgbXNncyA9IG1zZ3MubWFwKG1zZyA9PiB7XHJcbiAgICAgICAgaWYgKG1zZy50eXBlID09PSAndGV4dCcpIHtcclxuICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIGVtamk6IEZhY2VJTS5kZWZhdWx0LnBhcnNlRW1vamkobXNnLnRleHQucmVwbGFjZSgvXFxuL21nLCAnJykpLFxyXG4gICAgICAgICAgICBjaGF0cm9vbUlkOiBtc2cuY2hhdHJvb21JZCxcclxuICAgICAgICAgICAgZmxvdzogbXNnLmZsb3csXHJcbiAgICAgICAgICAgIGZyb206IG1zZy5mcm9tLFxyXG4gICAgICAgICAgICBmcm9tQXZhdGFyOiBtc2cuZnJvbUF2YXRhcixcclxuICAgICAgICAgICAgZnJvbUNsaWVudFR5cGU6IG1zZy5mcm9tQ2xpZW50VHlwZSxcclxuICAgICAgICAgICAgZnJvbUN1c3RvbTogbXNnLmZyb21DdXN0b20sXHJcbiAgICAgICAgICAgIGZyb21OaWNrOiBtc2cuZnJvbU5pY2ssXHJcbiAgICAgICAgICAgIGlkQ2xpZW50OiBtc2cuaWRDbGllbnQsXHJcbiAgICAgICAgICAgIHJlc2VuZDogbXNnLnJlc2VuZCxcclxuICAgICAgICAgICAgc3RhdHVzOiBtc2cuc3RhdHVzLFxyXG4gICAgICAgICAgICB0ZXh0OiBtc2cudGV4dCxcclxuICAgICAgICAgICAgdGltZTogbXNnLnRpbWUsXHJcbiAgICAgICAgICAgIHR5cGU6IG1zZy50eXBlLFxyXG4gICAgICAgICAgICB1c2VyVXBkYXRlVGltZTogbXNnLnVzZXJVcGRhdGVUaW1lXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHJldHVybiBtc2dcclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcbi8vICAgICAgY29uc29sZS5sb2codGhpcy5yb29tSWQpXHJcbmxldCByb29tSWQgPSB0aGlzLnJvb21JZFxyXG5jb25zb2xlLmxvZyhyb29tSWQpXHJcbmlmIChtc2dzLmxlbmd0aCA+IDApIHtcclxuICByb29tSWQgPSBtc2dzWzBdLmNoYXRyb29tSWRcclxufVxyXG5jb25zdCBtZXJnZWQgPSBbLi4udGhpcy5tc2dzLCAuLi5tc2dzXVxyXG5yZWZyZXNoTXNncyhyb29tSWQsIG1lcmdlZClcclxudGhpcy5zZW5kZWQgPSB0cnVlXHJcbnRoaXMuJGFwcGx5KClcclxufSxcclxucHVzaE1zZ1RleHQ6IGZ1bmN0aW9uIChtc2dzKSB7XHJcbiAgY29uc3QgeyByZWZyZXNoTXNncyB9ID0gdGhpcy5tZXRob2RzXHJcbiAgaWYgKCFBcnJheS5pc0FycmF5KG1zZ3MpKSB7XHJcbiAgICBtc2dzID0gW21zZ3NdXHJcbiAgfVxyXG4gIGNvbnNvbGUubG9nKCflsLHmmK/ov5nkuKrlm74nLCBtc2dzKVxyXG4gIG1zZ3MgPSBtc2dzLm1hcChtc2cgPT4ge1xyXG4gICAgaWYgKG1zZy50eXBlID09PSAndGV4dCcpIHtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICBlbWppOiBGYWNlSU0uZGVmYXVsdC5wYXJzZUVtb2ppKG1zZy50ZXh0LnJlcGxhY2UoL1xcbi9tZywgJycpKSxcclxuICAgICAgICBjaGF0cm9vbUlkOiBtc2cuY2hhdHJvb21JZCxcclxuICAgICAgICBmbG93OiBtc2cuZmxvdyxcclxuICAgICAgICBmcm9tOiBtc2cuZnJvbSxcclxuICAgICAgICBmcm9tQXZhdGFyOiBtc2cuZnJvbUF2YXRhcixcclxuICAgICAgICBmcm9tQ2xpZW50VHlwZTogbXNnLmZyb21DbGllbnRUeXBlLFxyXG4gICAgICAgIGZyb21DdXN0b206IG1zZy5mcm9tQ3VzdG9tLFxyXG4gICAgICAgIGZyb21OaWNrOiBtc2cuZnJvbU5pY2ssXHJcbiAgICAgICAgaWRDbGllbnQ6IG1zZy5pZENsaWVudCxcclxuICAgICAgICByZXNlbmQ6IG1zZy5yZXNlbmQsXHJcbiAgICAgICAgc3RhdHVzOiBtc2cuc3RhdHVzLFxyXG4gICAgICAgIHRleHQ6IG1zZy50ZXh0LFxyXG4gICAgICAgIHRpbWU6IG1zZy50aW1lLFxyXG4gICAgICAgIHR5cGU6IG1zZy50eXBlLFxyXG4gICAgICAgIHVzZXJVcGRhdGVUaW1lOiBtc2cudXNlclVwZGF0ZVRpbWVcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuIG1zZ1xyXG4gICAgfVxyXG4gIH0pXHJcbi8vICAgICAgY29uc29sZS5sb2codGhpcy5yb29tSWQpXHJcbmxldCByb29tSWQgPSB0aGlzLnJvb21JZFxyXG5jb25zb2xlLmxvZyhyb29tSWQpXHJcbmlmIChtc2dzLmxlbmd0aCA+IDApIHtcclxuICByb29tSWQgPSBtc2dzWzBdLmNoYXRyb29tSWRcclxufVxyXG5jb25zdCBtZXJnZWQgPSBbLi4udGhpcy5tc2dzLCAuLi5tc2dzXVxyXG5yZWZyZXNoTXNncyhyb29tSWQsIG1lcmdlZClcclxudGhpcy5zZW5kZWQgPSB0cnVlXHJcbnRoaXMuJGFwcGx5KClcclxufSxcclxufVxyXG5hc3luYyBvbkxvYWQob3B0aW9ucykge1xyXG4gIGNvbnN0IHsgaWQgfSA9IG9wdGlvbnNcclxuICBjb25zdCB7cm9vbWlkfSA9IG9wdGlvbnNcclxuICBjb25zdCB7Y3JlYXRvcn0gPSBvcHRpb25zXHJcbiAgdGhpcy5yb29tSWQgPSByb29taWRcclxuICBjb25zdCBwdXNoTXNnID0gdGhpcy5tZXRob2RzLnB1c2hNc2cuYmluZCh0aGlzKVxyXG4gIGNvbnN0IGdldENvdW50c051bSA9IHRoaXMubWV0aG9kcy5nZXRDb3VudHNOdW0uYmluZCh0aGlzKVxyXG4gIGNvbnN0IGFwcGx5ID0gdGhpcy4kYXBwbHkuYmluZCh0aGlzKVxyXG4gIGNvbnN0IGhhc01zZ3MgPSB0aGlzLm1zZ3MubGVuZ3RoID4gMFxyXG4gIHRyeSB7XHJcbiAgICBjb25zdCB7IG5pbVRva2VuLCBhY2NpZCwgYXZhdGFyVXJsLCBqZlRva2VuIH0gPSB0aGlzLnVzZXJcclxuLy8gICAgICBpZiAoY3JlYXRvciAhPT0gYWNjaWQpIHtcclxuLy8gICAgICAgIGF3YWl0IGNoYXRyb29tQXBpLmFkZFRvUm9vbShyb29taWQsIGNyZWF0b3IsIGFjY2lkKVxyXG4vLyAgICAgIH1cclxuYXdhaXQgY2hhdHJvb21BcGkuYWRkVG9Sb29tKHJvb21pZCwgY3JlYXRvciwgYWNjaWQpXHJcbmNvbnN0IHJvb21JbmZvID0gYXdhaXQgY2hhdHJvb21BcGkuZ2V0T25lQnlJZChpZCwgamZUb2tlbilcclxuY29uc3QgZGF0YSA9IGF3YWl0IGNoYXRyb29tQXBpLmdldFVzZXJMaXN0KHJvb21pZCwgamZUb2tlbilcclxuXHJcbmNvbnN0IGlzbGltaXQgPSBkYXRhID0+IGRhdGEudHlwZSA9PT0gJ0xJTUlURUQnXHJcbmNvbnN0IGlzVXNlciA9IGRhdGEgPT4gZGF0YS5uYW1lICYmIGRhdGEubmFtZSAhPT0gbnVsbFxyXG50aGlzLm51bUxpc3QgPSBSLmZpbHRlcihpc1VzZXIpKGRhdGEpXHJcbmNvbnN0IHVzZXJMaW1pdEFyciA9IFIuZmlsdGVyKGlzbGltaXQpKHRoaXMubnVtTGlzdClcclxuY29uc29sZS5sb2coJ+emgeiogOWIl+ihqCcsIHVzZXJMaW1pdEFycilcclxuaWYgKHVzZXJMaW1pdEFyci5sZW5ndGggPiAwKSB7XHJcbiAgaWYgKHVzZXJMaW1pdEFyclswXS5hY2NpZCA9PT0gYWNjaWQpIHtcclxuICAgIHRoaXMuaXNMSU1JVCA9IHRydWVcclxuICAgIGNvbnNvbGUubG9nKCfooqvnpoHoqIAnKVxyXG4gIH1cclxufVxyXG50aGlzLnJvb21EYXRhID0gcm9vbUluZm9cclxuY29uc3Qgcm9vbUlkID0gdGhpcy5yb29tSWRcclxuY29uc3QgYWRkcmVzcyA9IGF3YWl0IE5JTS5nZXRDaGF0cm9vbUFkZHJlc3NlcyhhY2NpZCwgcm9vbUlkKVxyXG5jb25zdCBjaGF0cm9vbSA9IENoYXRyb29tU0RLLmdldEluc3RhbmNlKHtcclxuLy8gICAgICAgIGRlYnVnOiB0cnVlLFxyXG5hY2NvdW50OiBhY2NpZCxcclxudG9rZW46IG5pbVRva2VuLFxyXG5jaGF0cm9vbUlkOiByb29tSWQsXHJcbmNoYXRyb29tQWRkcmVzc2VzOiBhZGRyZXNzLFxyXG5vbm1zZ3M6IGZ1bmN0aW9uKG1zZ3MpIHtcclxuICBsb2cuaW5mbyh7XHJcbiAgICBwYWdlOiAnY2hhdHJvb20nLFxyXG4gICAgb3ByOiAnaW5pdGlhbGl6ZSBzZGsgaW5zdGFuY2UnLFxyXG4gICAgaW5mbzogbXNnc1xyXG4gIH0pXHJcbi8vICAgICAgICAgIGNvbnNvbGUubG9nKCfmlLbliLDogYrlpKnlrqTkv6Hmga8nLCBtc2dzKVxyXG5wdXNoTXNnKG1zZ3MubWFwKG1zZyA9PiB7XHJcbiAgaWYgKG1zZy50eXBlID09PSAnbm90aWZpY2F0aW9uJykge1xyXG4gICAgZ2V0Q291bnRzTnVtKGlkLCBqZlRva2VuKVxyXG4gICAgICAgICAgICAgIC8vIOi/m+WFpeiBiuWkqeWupOS/oeaBr1xyXG4gICAgICAgICAgICAgIGNvbnN0IHRpcCA9IFIuY29uZChbXHJcbiAgICAgICAgICAgICAgICBbUi5lcXVhbHMoJ21lbWJlckVudGVyJyksIFIuYWx3YXlzKCfliqDlhaXogYrlpKnlrqQnKV0sXHJcbiAgICAgICAgICAgICAgICBbUi5lcXVhbHMoJ21lbWJlckV4aXQnKSwgUi5hbHdheXMoJ+mAgOWHuuiBiuWkqeWupCcpXVxyXG4gICAgICAgICAgICAgICAgXSkobXNnLmF0dGFjaC50eXBlKVxyXG4gICAgICAgICAgICAgICAgY29uc3QgdGlwTXNnID0gYCR7bXNnLmF0dGFjaC5mcm9tTmlja30gJHt0aXB9YFxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgICAgLi4ubXNnLFxyXG4gICAgICAgICAgICAgICAgICB0eXBlOiAnbm90aWZpY2F0aW9uJyxcclxuICAgICAgICAgICAgICAgICAgdGV4dDogdGlwTXNnLFxyXG4gICAgICAgICAgICAgICAgICBmcm9tQXZhdGFyOiBhdmF0YXJVcmwsXHJcbiAgICAgICAgICAgICAgICAgIG5vd1RpbWU6IG5ldyBEYXRlKERhdGUucGFyc2UobmV3IERhdGUoKSkgKyAyODgwMDAwMCkudG9JU09TdHJpbmcoKS5zcGxpdCgnVCcpWzBdICsgJyAnICsgbmV3IERhdGUoKS50b1RpbWVTdHJpbmcoKS5zdWJzdHIoMCwgOClcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG1zZ1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSkpXHJcbn0sXHJcbmFzeW5jIG9uY29ubmVjdCgpIHtcclxuICBsb2cuaW5mbyh7XHJcbiAgICBwYWdlOiAnY2hhdHJvb20nLFxyXG4gICAgb3ByOiAnaW5pdGlhbGl6ZSBzZGsgaW5zdGFuY2UnLFxyXG4gICAgaW5mbzogJ1tOSU0gQ0hBVFJPT01dIGNvbm5lY3RlZCdcclxuICB9KVxyXG4gIGlmICghaGFzTXNncykge1xyXG4gICAgd2VweS5zaG93TG9hZGluZygpXHJcbiAgICAgICAgICAgIC8vIOaLieWPluacgOi/kSAxMDAg5p2h5L+h5oGvXHJcbiAgICAgICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGNoYXRyb29tLmdldEhpc3RvcnlNc2dzKHtcclxuICAgICAgICAgICAgICBsaW1pdDogMTAwXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIGNvbnN0IG1zZ3MgPSByZXMubXNncy5maWx0ZXIobXNnID0+IG1zZy50eXBlICE9PSAnbm90aWZpY2F0aW9uJyAmJiBtc2cudHlwZSAhPT0gJ3RpcCcpLnJldmVyc2UoKVxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnaGlzdG9yeSBtZXNzYWdlcycsIG1zZ3MpXHJcbiAgICAgICAgICAgIC8vIOWIt+aWsOa2iOaBr1xyXG4gICAgICAgICAgICBwdXNoTXNnKG1zZ3MgfHwgW10pXHJcbiAgICAgICAgICAgIGFwcGx5KClcclxuICAgICAgICAgICAgd2VweS5oaWRlTG9hZGluZygpXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG50aGlzLmNoYXRyb29tID0gY2hhdHJvb21cclxufSBjYXRjaCAoZSkge1xyXG4gIGxvZy5lcnJvcih7XHJcbiAgICBwYWdlOiAnY2hhdHJvb20nLFxyXG4gICAgb3ByOiAnZ2V0SW5zdGFuY2UnLFxyXG4gICAgaW5mbzogZVxyXG4gIH0pXHJcbn1cclxufVxyXG4gIG9uU2hhcmVBcHBNZXNzYWdlID0gZnVuY3Rpb24gKHJlcykge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgdGl0bGU6IHRoaXMucm9vbURhdGEubmFtZVxyXG4gICAgfVxyXG4gIH1cclxuYXN5bmMgb25TaG93KCkge1xyXG4gIHRoaXMuaXNMSU1JVCA9IGZhbHNlXHJcbiAgdGhpcy5zZW5kZWQgPSBmYWxzZVxyXG4gIHRoaXMuY3VycmVudE5hdiA9IDBcclxufVxyXG59XHJcbiJdfQ==