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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoYXRyb29tLmpzIl0sIm5hbWVzIjpbImxvZyIsImNoYXRyb29tQXBpIiwiQ2hhdHJvb20iLCJ1c2VyIiwic3RhdGUiLCJjb21tb24iLCJuaW0iLCJtc2dzIiwiY2hhdHJvb20iLCJyb29tSWQiLCJpbnRvVmlldyIsImxhc3QiLCJzY3JvbGx0b3BlciIsImlkQ2xpZW50IiwicmVmcmVzaE1zZ3MiLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiZGF0YSIsIm5hdnMiLCJjdXJyZW50TmF2IiwibnVtTGlzdCIsImlzTElNSVQiLCJzZW5kZWQiLCJ0ZXh0Iiwicm9vbURhdGEiLCJuYW1lIiwiaW5kaWNhdG9yRG90cyIsImF1dG9wbGF5IiwiaW50ZXJ2YWwiLCJkdXJhdGlvbiIsInNob3ciLCJzaG93ZW0iLCJlbW9qaSIsImRlZmF1bHQiLCJFbW9qaSIsImVtb2ppT2JqIiwiRW1vamlPYmoiLCJub3dUaW1lIiwibm93UGVvcGxlcyIsInNlYXJjaGlucHV0Iiwic2VuZEZvY3VzIiwibWV0aG9kcyIsInNjcm9sbCIsImUiLCJkZXRhaWwiLCJzY3JvbGxUb3AiLCJzY3JvbGxIZWlnaHQiLCJsZW5ndGgiLCJnZXRDb3VudHNOdW0iLCJpZCIsImpmVG9rZW4iLCJnZXRPbmVCeUlkIiwib25saW5ldXNlcmNvdW50IiwiJGFwcGx5IiwiaGFuZGxlTmFtZSIsIml0ZW0iLCJpdGVtQWNjaWQiLCJmcm9tIiwiY29uc29sZSIsImdldEl0ZW1JZCIsIm5hdmlnYXRlVG8iLCJ1cmwiLCJoYW5kbGVOYW1lSWQiLCJpdGVtaWQiLCJnZXRGb2N1cyIsInNldERhdGEiLCJvcGVuRW1vamkiLCJpbWdQcmV2aWV3IiwiaXRlbXMiLCJpbWdVcmwiLCJpc0ltZyIsIm1zZyIsInR5cGUiLCJpbWdBcnIiLCJmaWx0ZXIiLCJpbWdVcmxBcnIiLCJtYXAiLCJmaWxlIiwicHJldmlld0ltYWdlIiwiY3VycmVudCIsInVybHMiLCJzdWNjZXNzIiwicmVzIiwic2VuZEVtb2ppIiwiZXZlbnQiLCJ0aGF0IiwidGFyZ2V0IiwiZGF0YXNldCIsIm1zZ2xlbiIsInN0ciIsInN0YXJ0IiwibGFzdEluZGV4T2YiLCJlbmQiLCJsZW4iLCJzbGljZSIsInB1c2hNc2ciLCJiaW5kIiwidHJpbSIsInNlbmRUZXh0IiwiZXJyb3IiLCJwYWdlIiwib3ByIiwiaW5mbyIsImNoYW5nZU5hdiIsImN1cnJlbnRUYXJnZXQiLCJpbmRleCIsImNob29zZUltYWdlIiwiY291bnQiLCJwcmV2aWV3RmlsZSIsInd4RmlsZVBhdGgiLCJ0ZW1wRmlsZVBhdGhzIiwic2VuZEZpbGUiLCJzZW5kIiwicHVzaE1zZ1RleHQiLCJzZXRUZXh0IiwidmFsdWUiLCJBcnJheSIsImlzQXJyYXkiLCJlbWppIiwicGFyc2VFbW9qaSIsInJlcGxhY2UiLCJjaGF0cm9vbUlkIiwiZmxvdyIsImZyb21BdmF0YXIiLCJmcm9tQ2xpZW50VHlwZSIsImZyb21DdXN0b20iLCJmcm9tTmljayIsInJlc2VuZCIsInN0YXR1cyIsInRpbWUiLCJ1c2VyVXBkYXRlVGltZSIsIm1lcmdlZCIsIm9wdGlvbnMiLCJyb29taWQiLCJjcmVhdG9yIiwiYXBwbHkiLCJoYXNNc2dzIiwibmltVG9rZW4iLCJhY2NpZCIsImF2YXRhclVybCIsImFkZFRvUm9vbSIsInJvb21JbmZvIiwiZ2V0VXNlckxpc3QiLCJpc2xpbWl0IiwiaXNVc2VyIiwidXNlckxpbWl0QXJyIiwiZ2V0Q2hhdHJvb21BZGRyZXNzZXMiLCJhZGRyZXNzIiwiZ2V0SW5zdGFuY2UiLCJhY2NvdW50IiwidG9rZW4iLCJjaGF0cm9vbUFkZHJlc3NlcyIsIm9ubXNncyIsInRpcCIsImNvbmQiLCJlcXVhbHMiLCJhbHdheXMiLCJhdHRhY2giLCJ0aXBNc2ciLCJEYXRlIiwicGFyc2UiLCJ0b0lTT1N0cmluZyIsInNwbGl0IiwidG9UaW1lU3RyaW5nIiwic3Vic3RyIiwib25jb25uZWN0Iiwic2hvd0xvYWRpbmciLCJnZXRIaXN0b3J5TXNncyIsImxpbWl0IiwicmV2ZXJzZSIsImhpZGVMb2Fk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VEE7QUFZQTNFLGtDQVpBLEdBWU8yRSxJQUFJM0UsSUFBSixDQUFTbUUsTUFBVCxDQUFnQjtBQUFBLHVDQUFPSCxJQUFJQyxJQUFKLEtBQWEsY0FBYixJQUErQkQsSUFBSUMsSUFBSixLQUFhLEtBQW5EO0FBQUEsK0JBQWhCLEVBQTBFaUcsT0FBMUUsRUFaUDs7QUFhTi9HLHNDQUFRMUQsR0FBUixDQUFZLGtCQUFaLEVBQWdDTyxJQUFoQztBQUNBO0FBQ0F3RixzQ0FBUXhGLFFBQVEsRUFBaEI7QUFDQWdJO0FBQ0EsNkNBQUttQyxXQUFMOztBQWpCTTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQW1CVDtBQXJEZ0MsaUJBQXhCLEM7O0FBdURqQixxQkFBS2xLLFFBQUwsR0FBZ0JBLFFBQWhCOzs7Ozs7OztBQUVFUixvQkFBSW1HLEtBQUosQ0FBVTtBQUNSQyx3QkFBTSxVQURFO0FBRVJDLHVCQUFLLGFBRkc7QUFHUkM7QUFIUSxpQkFBVjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBU0EscUJBQUtqRixPQUFMLEdBQWUsS0FBZjtBQUNBLHFCQUFLQyxNQUFMLEdBQWMsS0FBZDtBQUNBLHFCQUFLSCxVQUFMLEdBQWtCLENBQWxCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7RUF4WHNDLGVBQUtpRixJO2tCQUF0QmxHLFEiLCJmaWxlIjoiY2hhdHJvb20uanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xyXG4gIGltcG9ydCBSIGZyb20gJy4uL2xpYnMvcmFtZGEnXHJcbiAgaW1wb3J0IENoYXRyb29tU0RLIGZyb20gJy4uL3V0aWxzL2NoYXRyb29tJ1xyXG4gIGltcG9ydCBOSU0gZnJvbSAnLi4vdXRpbHMvbmltJ1xyXG4gIGltcG9ydCBGYWNlSU0gZnJvbSAnLi4vdXRpbHMvV2ViSU0nXHJcbiAgaW1wb3J0ICogYXMgbG9nIGZyb20gJy4uL3V0aWxzL2xvZydcclxuICBpbXBvcnQge1xyXG4gICAgcmVmcmVzaE1zZ3NcclxuICB9IGZyb20gJy4uL2FjdGlvbnMvY2hhdHJvb20nXHJcbiAgaW1wb3J0ICogYXMgY2hhdHJvb21BcGkgZnJvbSAnLi4vYXBpcy9jaGF0cm9vbSdcclxuXHJcbiAgaW1wb3J0IHtcclxuICAgIGNvbm5lY3RcclxuICB9IGZyb20gJ3dlcHktcmVkdXgnXHJcblxyXG4gIEBjb25uZWN0KHtcclxuICAgIHVzZXI6IHN0YXRlID0+IHN0YXRlLmNvbW1vbi51c2VyLFxyXG4gICAgbmltOiBzdGF0ZSA9PiBzdGF0ZS5jb21tb24ubmltLFxyXG4gICAgbXNnczogZnVuY3Rpb24gKHN0YXRlKSB7XHJcbiAgICAgIHJldHVybiBzdGF0ZS5jaGF0cm9vbS5tc2dzW3RoaXMucm9vbUlkXSB8fCBbXVxyXG4gICAgfSxcclxuICAgIGludG9WaWV3OiBmdW5jdGlvbihzdGF0ZSkge1xyXG4gICAgICBjb25zdCBtc2dzID0gc3RhdGUuY2hhdHJvb20ubXNnc1t0aGlzLnJvb21JZF0gfHwgW11cclxuICAgICAgY29uc3QgbGFzdCA9IFIubGFzdChtc2dzKVxyXG4gICAgICBpZiAodGhpcy5zY3JvbGx0b3Blcikge1xyXG4gICAgICAgIHJldHVybiAnJ1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiBsYXN0ID8gbGFzdC5pZENsaWVudCA6ICcnXHJcbiAgICB9XHJcbiAgfSwge1xyXG4gICAgcmVmcmVzaE1zZ3NcclxuICB9KVxyXG4gIGV4cG9ydCBkZWZhdWx0IGNsYXNzIENoYXRyb29tIGV4dGVuZHMgd2VweS5wYWdlIHtcclxuICAgIGNvbmZpZyA9IHtcclxuICAgICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+iBiuWkqeWupCdcclxuICAgIH1cclxuXHJcbiAgICBkYXRhID0ge1xyXG4gICAgICBuYXZzOiBbJ+iBiuWkqScsICfor6bmg4UnXSxcclxuICAgICAgY3VycmVudE5hdjogMCxcclxuICAgICAgbnVtTGlzdDogW10sXHJcbiAgICAgIGlzTElNSVQ6IGZhbHNlLFxyXG4gICAgICBjaGF0cm9vbTogbnVsbCxcclxuICAgICAgcm9vbUlkOiBudWxsLFxyXG4gICAgICBzZW5kZWQ6IGZhbHNlLFxyXG4gICAgICB0ZXh0OiAnJyxcclxuICAgICAgcm9vbURhdGE6IHtcclxuICAgICAgICBuYW1lOiAn5Yqg6L295LitLi4uJ1xyXG4gICAgICB9LFxyXG4gICAgICBpbmRpY2F0b3JEb3RzOiB0cnVlLFxyXG4gICAgICBhdXRvcGxheTogZmFsc2UsXHJcbiAgICAgIGludGVydmFsOiA1MDAwLFxyXG4gICAgICBkdXJhdGlvbjogMTAwMCxcclxuICAgICAgc2hvdzogJ2Vtb2ppX2xpc3QnLFxyXG4gICAgICBzaG93ZW06ICdvcGVyYXRpb24nLFxyXG4gICAgICBlbW9qaTogRmFjZUlNLmRlZmF1bHQuRW1vamksXHJcbiAgICAgIGVtb2ppT2JqOiBGYWNlSU0uZGVmYXVsdC5FbW9qaU9iaixcclxuICAgICAgbm93VGltZTogJycsXHJcbiAgICAgIG5vd1Blb3BsZXM6IDAsXHJcbiAgICAgIHNlYXJjaGlucHV0OicnLFxyXG4gICAgICBzZW5kRm9jdXM6IGZhbHNlLFxyXG4gICAgfVxyXG5cclxuICAgIG1ldGhvZHMgPSB7XHJcbiAgICAgIGFzeW5jIHNjcm9sbCAoZSkge1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGUuZGV0YWlsLnNjcm9sbEhlaWdodCnliKTmlq3mmK/lkKblnKjmn6XnnIvljoblj7LorrDlvZXkuI3mu5rliqhcclxuICAgICAgICBpZiAoZS5kZXRhaWwuc2Nyb2xsVG9wIDwgZS5kZXRhaWwuc2Nyb2xsSGVpZ2h0KjAuNSB8fCBlLmRldGFpbC5zY3JvbGxUb3AgPCAxMDApIHtcclxuICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGUuZGV0YWlsLmRlbHRhWClcclxuICAgICAgICAgIHRoaXMuc2Nyb2xsdG9wZXIgPSAxXHJcbiAgICAgICAgfWVsc2Uge1xyXG4gICAgICAgICAgdGhpcy5zY3JvbGx0b3BlciA9IDBcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYoZS5kZXRhaWwuc2Nyb2xsVG9wIDwgMTAgJiYgdGhpcy5tc2dzLmxlbmd0aCA8IDE1MCkge1xyXG5cclxuICAgICAgICB9XHJcbiAgICAgIH0sXHJcblxyXG4gICAgICBhc3luYyBnZXRDb3VudHNOdW0oaWQsIGpmVG9rZW4pIHtcclxuICAgICAgICBjb25zdCB7b25saW5ldXNlcmNvdW50fSA9IGF3YWl0IGNoYXRyb29tQXBpLmdldE9uZUJ5SWQoaWQsIGpmVG9rZW4pXHJcbiAgICAgICAgdGhpcy5ub3dQZW9wbGVzID0gb25saW5ldXNlcmNvdW50XHJcbiAgICAgICAgdGhpcy4kYXBwbHkoKVxyXG4gICAgICB9LFxyXG4gICAgICBhc3luYyBoYW5kbGVOYW1lIChpdGVtKSB7XHJcbiAgICAgICAgY29uc3QgaXRlbUFjY2lkID0gaXRlbS5mcm9tXHJcbiAgICAgICAgY29uc29sZS5sb2coaXRlbUFjY2lkKVxyXG4gICAgICAgIGNvbnN0IHtpZH0gPSBhd2FpdCBjaGF0cm9vbUFwaS5nZXRJdGVtSWQoaXRlbUFjY2lkKVxyXG4gICAgICAgIHdlcHkubmF2aWdhdGVUbyh7XHJcbiAgICAgICAgICB1cmw6IGB1c2VySW5mbz9pZD0ke2lkfWBcclxuICAgICAgICB9KVxyXG4gICAgICB9LFxyXG4gICAgICBoYW5kbGVOYW1lSWQgKGl0ZW0pIHtcclxuICAgICAgICBjb25zdCBpdGVtaWQgPSBpdGVtLmlkXHJcbiAgICAgICAgd2VweS5uYXZpZ2F0ZVRvKHtcclxuICAgICAgICAgIHVybDogYHVzZXJJbmZvP2lkPSR7aXRlbWlkfWBcclxuICAgICAgICB9KVxyXG4gICAgICB9LFxyXG4gICAgICBnZXRGb2N1cyAoKSB7XHJcbiAgICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICAgIHNlbmRGb2N1cyA6IGZhbHNlXHJcbiAgICAgICAgfSlcclxuICAgICAgfSxcclxuICAgICAgb3BlbkVtb2ppIChlKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuc2hvdyA9PT0gJ3Nob3dFbW9qaScpIHtcclxuICAgICAgICAgIHRoaXMuc2hvdyA9ICdlbW9qaV9saXN0J1xyXG4gICAgICAgICAgdGhpcy5zaG93ZW0gPSAnb3BlcmF0aW9uJ1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICB0aGlzLnNob3cgPSAnc2hvd0Vtb2ppJ1xyXG4gICAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuJGFwcGx5KClcclxuICAgICAgfSxcclxuICAgICAgaW1nUHJldmlldyAoaXRlbXMsIG1zZ3MpIHtcclxuICAgICAgICBjb25zdCBpbWdVcmwgPSBpdGVtc1xyXG4gICAgICAgIGNvbnN0IGlzSW1nID0gbXNnID0+IG1zZy50eXBlID09PSAnaW1hZ2UnXHJcbiAgICAgICAgY29uc3QgaW1nQXJyID0gUi5maWx0ZXIoaXNJbWcpKG1zZ3MpXHJcbiAgICAgICAgY29uc3QgaW1nVXJsQXJyID0gaW1nQXJyLm1hcChtc2cgPT4ge1xyXG4gICAgICAgICAgcmV0dXJuIG1zZy5maWxlLnVybFxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgd2VweS5wcmV2aWV3SW1hZ2Uoe1xyXG4gICAgICAgICAgY3VycmVudDogaW1nVXJsLFxyXG4gICAgICAgICAgdXJsczogaW1nVXJsQXJyLFxyXG4gICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKHJlcykge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhyZXMpXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgICAgfSxcclxuICAgICAgYXN5bmMgc2VuZEVtb2ppIChldmVudCkge1xyXG4gICAgICAgIHZhciB0aGF0ID0gdGhpc1xyXG4gICAgICAgIHZhciBlbW9qaSA9IGV2ZW50LnRhcmdldC5kYXRhc2V0LmVtb2ppXHJcbiAgICAgICAgdmFyIG1zZ2xlbiA9IHRoYXQuZGF0YS50ZXh0Lmxlbmd0aCAtIDFcclxuICAgICAgICBpZiAoZW1vamkgJiYgZW1vamkgIT09ICdbZGVsXScpIHtcclxuICAgICAgICAgIHZhciBzdHIgPSB0aGF0LmRhdGEudGV4dCArIGVtb2ppXHJcbiAgICAgICAgfSBlbHNlIGlmIChlbW9qaSA9PT0gJ1tkZWxdJykge1xyXG4gICAgICAgICAgdmFyIHN0YXJ0ID0gdGhhdC5kYXRhLnRleHQubGFzdEluZGV4T2YoJ1snKVxyXG4gICAgICAgICAgdmFyIGVuZCA9IHRoYXQuZGF0YS50ZXh0Lmxhc3RJbmRleE9mKCddJylcclxuICAgICAgICAgIHZhciBsZW4gPSBlbmQgLSBzdGFydFxyXG4gICAgICAgICAgaWYgKGVuZCAhPT0gLTEgJiYgZW5kID09PSBtc2dsZW4gJiYgbGVuID49IDMgJiYgbGVuIDw9IDQpIHtcclxuICAgICAgICAgICAgc3RyID0gdGhhdC5kYXRhLnRleHQuc2xpY2UoMCwgc3RhcnQpXHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBzdHIgPSB0aGF0LmRhdGEudGV4dC5zbGljZSgwLCBtc2dsZW4pXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMudGV4dCA9IHN0clxyXG4gICAgICAgIGNvbnN0IHB1c2hNc2cgPSB0aGlzLm1ldGhvZHMucHVzaE1zZy5iaW5kKHRoaXMpXHJcbiAgICAgICAgdmFyIHRleHQgPSBSLnRyaW0odGhpcy50ZXh0KVxyXG4gICAgICAgIHRoaXMudGV4dCA9ICcnXHJcbiAgICAgICAgaWYgKHRleHQubGVuZ3RoKSB7XHJcbiAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBjb25zdCBtc2cgPSBhd2FpdCB0aGlzLmNoYXRyb29tLnNlbmRUZXh0KHtcclxuICAgICAgICAgICAgICB0ZXh0XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIHRoaXMudGV4dCA9ICcnXHJcbiAgICAgICAgICAgIHB1c2hNc2cobXNnKVxyXG4gICAgICAgICAgICB0aGlzLnNob3cgPSAnZW1vamlfbGlzdCdcclxuICAgICAgICAgICAgdGhpcy5zZXREYXRhKHsgIFxyXG4gICAgICAgICAgICAgIHNlYXJjaGlucHV0OiAnJywgIFxyXG4gICAgICAgICAgICB9KSAgXHJcblxyXG4gICAgICAgICAgICB0aGlzLiRhcHBseSgpXHJcbiAgICAgICAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgIGxvZy5lcnJvcih7XHJcbiAgICAgICAgICAgICAgcGFnZTogJ2NoYXRyb29tJyxcclxuICAgICAgICAgICAgICBvcHI6ICdzZW5kVGV4dCcsXHJcbiAgICAgICAgICAgICAgaW5mbzogZVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfSxcclxuICAgICAgY2hhbmdlTmF2IChlKSB7XHJcbiAgICAgICAgdGhpcy5jdXJyZW50TmF2ID0gZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQuaW5kZXhcclxuICAgICAgICB0aGlzLnNlbmRlZCA9IGZhbHNlXHJcbiAgICAgICAgdGhpcy4kYXBwbHkoKVxyXG4gICAgICB9LFxyXG4gICAgICBhc3luYyBjaG9vc2VJbWFnZSgpIHtcclxuICAgICAgLy8g6L+b6KGM5Zu+54mH6YCJ5oup5bm25LiK5LygXHJcbiAgICAgIGNvbnN0IHB1c2hNc2cgPSB0aGlzLm1ldGhvZHMucHVzaE1zZy5iaW5kKHRoaXMpXHJcbiAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IHdlcHkuY2hvb3NlSW1hZ2Uoe1xyXG4gICAgICAgIGNvdW50OiAxXHJcbiAgICAgIH0pXHJcblxyXG4gICAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IGZpbGUgPSBhd2FpdCB0aGlzLmNoYXRyb29tLnByZXZpZXdGaWxlKHtcclxuICAgICAgICAgIHR5cGU6ICdpbWFnZScsXHJcbiAgICAgICAgICB3eEZpbGVQYXRoOiByZXMudGVtcEZpbGVQYXRoc1swXVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgY29uc3QgbXNnID0gYXdhaXQgdGhpcy5jaGF0cm9vbS5zZW5kRmlsZSh7XHJcbiAgICAgICAgICB0eXBlOiAnaW1hZ2UnLFxyXG4gICAgICAgICAgZmlsZTogZmlsZVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgcHVzaE1zZyhtc2cpXHJcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgbG9nLmVycm9yKHtcclxuICAgICAgICAgIHBhZ2U6ICdjaGF0cm9vbScsXHJcbiAgICAgICAgICBvcHI6ICdzZW5kRmlsZScsXHJcbiAgICAgICAgICBpbmZvOiBlcnJvclxyXG4gICAgICAgIH0pXHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBhc3luYyBzZW5kKGUpIHtcclxuICAgICAgLy8/IHdoeSBiaW5kXHJcblxyXG4gICAgICB0aGlzLnNldERhdGEoeyAgXHJcbiAgICAgICAgICBzZWFyY2hpbnB1dDogJycsICBcclxuICAgICAgICAgIHNlbmRGb2N1czogdHJ1ZSxcclxuICAgICAgfSkgXHJcbiAgICAgIHRoaXMuc2Nyb2xsdG9wZXIgPSAwXHJcbiAgICAgIGNvbnN0IHB1c2hNc2dUZXh0ID0gdGhpcy5tZXRob2RzLnB1c2hNc2dUZXh0LmJpbmQodGhpcylcclxuICAgICAgY29uc3QgdGV4dCA9IFIudHJpbSh0aGlzLnRleHQpXHJcbiAgICAgIHRoaXMudGV4dCA9ICcnXHJcbiAgICAgIGlmICh0ZXh0Lmxlbmd0aCkge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICBjb25zdCBtc2cgPSBhd2FpdCB0aGlzLmNoYXRyb29tLnNlbmRUZXh0KHtcclxuICAgICAgICAgICAgdGV4dFxyXG4gICAgICAgICAgfSlcclxuICAgICAgICAgIHRoaXMudGV4dCA9ICcnXHJcbiAgICAgICAgICBwdXNoTXNnVGV4dChtc2cpXHJcbiAgICAgICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgbG9nLmVycm9yKHtcclxuICAgICAgICAgICAgcGFnZTogJ2NoYXRyb29tJyxcclxuICAgICAgICAgICAgb3ByOiAnc2VuZFRleHQnLFxyXG4gICAgICAgICAgICBpbmZvOiBlXHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIHNldFRleHQoZSkge1xyXG4gICAgICB0aGlzLnRleHQgPSBlLmRldGFpbC52YWx1ZVxyXG4gICAgfSxcclxuICAgIHB1c2hNc2c6IGZ1bmN0aW9uIChtc2dzKSB7XHJcbiAgICAgIGNvbnN0IHsgcmVmcmVzaE1zZ3MgfSA9IHRoaXMubWV0aG9kc1xyXG4gICAgICBpZiAoIUFycmF5LmlzQXJyYXkobXNncykpIHtcclxuICAgICAgICBtc2dzID0gW21zZ3NdXHJcbiAgICAgIH1cclxuICAgICAgY29uc29sZS5sb2coJ+WwseaYr+i/meS4quWbvicsIG1zZ3MpXHJcbiAgICAgIG1zZ3MgPSBtc2dzLm1hcChtc2cgPT4ge1xyXG4gICAgICAgIGlmIChtc2cudHlwZSA9PT0gJ3RleHQnKSB7XHJcbiAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBlbWppOiBGYWNlSU0uZGVmYXVsdC5wYXJzZUVtb2ppKG1zZy50ZXh0LnJlcGxhY2UoL1xcbi9tZywgJycpKSxcclxuICAgICAgICAgICAgY2hhdHJvb21JZDogbXNnLmNoYXRyb29tSWQsXHJcbiAgICAgICAgICAgIGZsb3c6IG1zZy5mbG93LFxyXG4gICAgICAgICAgICBmcm9tOiBtc2cuZnJvbSxcclxuICAgICAgICAgICAgZnJvbUF2YXRhcjogbXNnLmZyb21BdmF0YXIsXHJcbiAgICAgICAgICAgIGZyb21DbGllbnRUeXBlOiBtc2cuZnJvbUNsaWVudFR5cGUsXHJcbiAgICAgICAgICAgIGZyb21DdXN0b206IG1zZy5mcm9tQ3VzdG9tLFxyXG4gICAgICAgICAgICBmcm9tTmljazogbXNnLmZyb21OaWNrLFxyXG4gICAgICAgICAgICBpZENsaWVudDogbXNnLmlkQ2xpZW50LFxyXG4gICAgICAgICAgICByZXNlbmQ6IG1zZy5yZXNlbmQsXHJcbiAgICAgICAgICAgIHN0YXR1czogbXNnLnN0YXR1cyxcclxuICAgICAgICAgICAgdGV4dDogbXNnLnRleHQsXHJcbiAgICAgICAgICAgIHRpbWU6IG1zZy50aW1lLFxyXG4gICAgICAgICAgICB0eXBlOiBtc2cudHlwZSxcclxuICAgICAgICAgICAgdXNlclVwZGF0ZVRpbWU6IG1zZy51c2VyVXBkYXRlVGltZVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICByZXR1cm4gbXNnXHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG4vLyAgICAgIGNvbnNvbGUubG9nKHRoaXMucm9vbUlkKVxyXG5sZXQgcm9vbUlkID0gdGhpcy5yb29tSWRcclxuY29uc29sZS5sb2cocm9vbUlkKVxyXG5pZiAobXNncy5sZW5ndGggPiAwKSB7XHJcbiAgcm9vbUlkID0gbXNnc1swXS5jaGF0cm9vbUlkXHJcbn1cclxuY29uc3QgbWVyZ2VkID0gWy4uLnRoaXMubXNncywgLi4ubXNnc11cclxucmVmcmVzaE1zZ3Mocm9vbUlkLCBtZXJnZWQpXHJcbnRoaXMuc2VuZGVkID0gdHJ1ZVxyXG50aGlzLiRhcHBseSgpXHJcbn0sXHJcbnB1c2hNc2dUZXh0OiBmdW5jdGlvbiAobXNncykge1xyXG4gIGNvbnN0IHsgcmVmcmVzaE1zZ3MgfSA9IHRoaXMubWV0aG9kc1xyXG4gIGlmICghQXJyYXkuaXNBcnJheShtc2dzKSkge1xyXG4gICAgbXNncyA9IFttc2dzXVxyXG4gIH1cclxuICBjb25zb2xlLmxvZygn5bCx5piv6L+Z5Liq5Zu+JywgbXNncylcclxuICBtc2dzID0gbXNncy5tYXAobXNnID0+IHtcclxuICAgIGlmIChtc2cudHlwZSA9PT0gJ3RleHQnKSB7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgZW1qaTogRmFjZUlNLmRlZmF1bHQucGFyc2VFbW9qaShtc2cudGV4dC5yZXBsYWNlKC9cXG4vbWcsICcnKSksXHJcbiAgICAgICAgY2hhdHJvb21JZDogbXNnLmNoYXRyb29tSWQsXHJcbiAgICAgICAgZmxvdzogbXNnLmZsb3csXHJcbiAgICAgICAgZnJvbTogbXNnLmZyb20sXHJcbiAgICAgICAgZnJvbUF2YXRhcjogbXNnLmZyb21BdmF0YXIsXHJcbiAgICAgICAgZnJvbUNsaWVudFR5cGU6IG1zZy5mcm9tQ2xpZW50VHlwZSxcclxuICAgICAgICBmcm9tQ3VzdG9tOiBtc2cuZnJvbUN1c3RvbSxcclxuICAgICAgICBmcm9tTmljazogbXNnLmZyb21OaWNrLFxyXG4gICAgICAgIGlkQ2xpZW50OiBtc2cuaWRDbGllbnQsXHJcbiAgICAgICAgcmVzZW5kOiBtc2cucmVzZW5kLFxyXG4gICAgICAgIHN0YXR1czogbXNnLnN0YXR1cyxcclxuICAgICAgICB0ZXh0OiBtc2cudGV4dCxcclxuICAgICAgICB0aW1lOiBtc2cudGltZSxcclxuICAgICAgICB0eXBlOiBtc2cudHlwZSxcclxuICAgICAgICB1c2VyVXBkYXRlVGltZTogbXNnLnVzZXJVcGRhdGVUaW1lXHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiBtc2dcclxuICAgIH1cclxuICB9KVxyXG4vLyAgICAgIGNvbnNvbGUubG9nKHRoaXMucm9vbUlkKVxyXG5sZXQgcm9vbUlkID0gdGhpcy5yb29tSWRcclxuY29uc29sZS5sb2cocm9vbUlkKVxyXG5pZiAobXNncy5sZW5ndGggPiAwKSB7XHJcbiAgcm9vbUlkID0gbXNnc1swXS5jaGF0cm9vbUlkXHJcbn1cclxuY29uc3QgbWVyZ2VkID0gWy4uLnRoaXMubXNncywgLi4ubXNnc11cclxucmVmcmVzaE1zZ3Mocm9vbUlkLCBtZXJnZWQpXHJcbnRoaXMuc2VuZGVkID0gdHJ1ZVxyXG50aGlzLiRhcHBseSgpXHJcbn0sXHJcbn1cclxuYXN5bmMgb25Mb2FkKG9wdGlvbnMpIHtcclxuICBjb25zdCB7IGlkIH0gPSBvcHRpb25zXHJcbiAgY29uc3Qge3Jvb21pZH0gPSBvcHRpb25zXHJcbiAgY29uc3Qge2NyZWF0b3J9ID0gb3B0aW9uc1xyXG4gIHRoaXMucm9vbUlkID0gcm9vbWlkXHJcbiAgY29uc3QgcHVzaE1zZyA9IHRoaXMubWV0aG9kcy5wdXNoTXNnLmJpbmQodGhpcylcclxuICBjb25zdCBnZXRDb3VudHNOdW0gPSB0aGlzLm1ldGhvZHMuZ2V0Q291bnRzTnVtLmJpbmQodGhpcylcclxuICBjb25zdCBhcHBseSA9IHRoaXMuJGFwcGx5LmJpbmQodGhpcylcclxuICBjb25zdCBoYXNNc2dzID0gdGhpcy5tc2dzLmxlbmd0aCA+IDBcclxuICB0cnkge1xyXG4gICAgY29uc3QgeyBuaW1Ub2tlbiwgYWNjaWQsIGF2YXRhclVybCwgamZUb2tlbiB9ID0gdGhpcy51c2VyXHJcbi8vICAgICAgaWYgKGNyZWF0b3IgIT09IGFjY2lkKSB7XHJcbi8vICAgICAgICBhd2FpdCBjaGF0cm9vbUFwaS5hZGRUb1Jvb20ocm9vbWlkLCBjcmVhdG9yLCBhY2NpZClcclxuLy8gICAgICB9XHJcbmF3YWl0IGNoYXRyb29tQXBpLmFkZFRvUm9vbShyb29taWQsIGNyZWF0b3IsIGFjY2lkKVxyXG5jb25zdCByb29tSW5mbyA9IGF3YWl0IGNoYXRyb29tQXBpLmdldE9uZUJ5SWQoaWQsIGpmVG9rZW4pXHJcbmNvbnN0IGRhdGEgPSBhd2FpdCBjaGF0cm9vbUFwaS5nZXRVc2VyTGlzdChyb29taWQsIGpmVG9rZW4pXHJcbmNvbnN0IGlzbGltaXQgPSBkYXRhID0+IGRhdGEudHlwZSA9PT0gJ0xJTUlURUQnXHJcbmNvbnN0IGlzVXNlciA9IGRhdGEgPT4gZGF0YS5uYW1lICYmIGRhdGEubmFtZSAhPT0gbnVsbFxyXG50aGlzLm51bUxpc3QgPSBSLmZpbHRlcihpc1VzZXIpKGRhdGEpXHJcbmNvbnN0IHVzZXJMaW1pdEFyciA9IFIuZmlsdGVyKGlzbGltaXQpKHRoaXMubnVtTGlzdClcclxuY29uc29sZS5sb2coJ+emgeiogOWIl+ihqCcsIHVzZXJMaW1pdEFycilcclxuaWYgKHVzZXJMaW1pdEFyci5sZW5ndGggPiAwKSB7XHJcbiAgaWYgKHVzZXJMaW1pdEFyclswXS5hY2NpZCA9PT0gYWNjaWQpIHtcclxuICAgIHRoaXMuaXNMSU1JVCA9IHRydWVcclxuICAgIGNvbnNvbGUubG9nKCfooqvnpoHoqIAnKVxyXG4gIH1cclxufVxyXG50aGlzLnJvb21EYXRhID0gcm9vbUluZm9cclxuY29uc3Qgcm9vbUlkID0gdGhpcy5yb29tSWRcclxuY29uc3QgYWRkcmVzcyA9IGF3YWl0IE5JTS5nZXRDaGF0cm9vbUFkZHJlc3NlcyhhY2NpZCwgcm9vbUlkKVxyXG5jb25zdCBjaGF0cm9vbSA9IENoYXRyb29tU0RLLmdldEluc3RhbmNlKHtcclxuLy8gICAgICAgIGRlYnVnOiB0cnVlLFxyXG5hY2NvdW50OiBhY2NpZCxcclxudG9rZW46IG5pbVRva2VuLFxyXG5jaGF0cm9vbUlkOiByb29tSWQsXHJcbmNoYXRyb29tQWRkcmVzc2VzOiBhZGRyZXNzLFxyXG5vbm1zZ3M6IGZ1bmN0aW9uKG1zZ3MpIHtcclxuICBsb2cuaW5mbyh7XHJcbiAgICBwYWdlOiAnY2hhdHJvb20nLFxyXG4gICAgb3ByOiAnaW5pdGlhbGl6ZSBzZGsgaW5zdGFuY2UnLFxyXG4gICAgaW5mbzogbXNnc1xyXG4gIH0pXHJcbi8vICAgICAgICAgIGNvbnNvbGUubG9nKCfmlLbliLDogYrlpKnlrqTkv6Hmga8nLCBtc2dzKVxyXG5wdXNoTXNnKG1zZ3MubWFwKG1zZyA9PiB7XHJcbiAgaWYgKG1zZy50eXBlID09PSAnbm90aWZpY2F0aW9uJykge1xyXG4gICAgZ2V0Q291bnRzTnVtKGlkLCBqZlRva2VuKVxyXG4gICAgICAgICAgICAgIC8vIOi/m+WFpeiBiuWkqeWupOS/oeaBr1xyXG4gICAgICAgICAgICAgIGNvbnN0IHRpcCA9IFIuY29uZChbXHJcbiAgICAgICAgICAgICAgICBbUi5lcXVhbHMoJ21lbWJlckVudGVyJyksIFIuYWx3YXlzKCfliqDlhaXogYrlpKnlrqQnKV0sXHJcbiAgICAgICAgICAgICAgICBbUi5lcXVhbHMoJ21lbWJlckV4aXQnKSwgUi5hbHdheXMoJ+mAgOWHuuiBiuWkqeWupCcpXVxyXG4gICAgICAgICAgICAgICAgXSkobXNnLmF0dGFjaC50eXBlKVxyXG4gICAgICAgICAgICAgICAgY29uc3QgdGlwTXNnID0gYCR7bXNnLmF0dGFjaC5mcm9tTmlja30gJHt0aXB9YFxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgICAgLi4ubXNnLFxyXG4gICAgICAgICAgICAgICAgICB0eXBlOiAnbm90aWZpY2F0aW9uJyxcclxuICAgICAgICAgICAgICAgICAgdGV4dDogdGlwTXNnLFxyXG4gICAgICAgICAgICAgICAgICBmcm9tQXZhdGFyOiBhdmF0YXJVcmwsXHJcbiAgICAgICAgICAgICAgICAgIG5vd1RpbWU6IG5ldyBEYXRlKERhdGUucGFyc2UobmV3IERhdGUoKSkgKyAyODgwMDAwMCkudG9JU09TdHJpbmcoKS5zcGxpdCgnVCcpWzBdICsgJyAnICsgbmV3IERhdGUoKS50b1RpbWVTdHJpbmcoKS5zdWJzdHIoMCwgOClcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG1zZ1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSkpXHJcbn0sXHJcbmFzeW5jIG9uY29ubmVjdCgpIHtcclxuICBsb2cuaW5mbyh7XHJcbiAgICBwYWdlOiAnY2hhdHJvb20nLFxyXG4gICAgb3ByOiAnaW5pdGlhbGl6ZSBzZGsgaW5zdGFuY2UnLFxyXG4gICAgaW5mbzogJ1tOSU0gQ0hBVFJPT01dIGNvbm5lY3RlZCdcclxuICB9KVxyXG4gIGlmICghaGFzTXNncykge1xyXG4gICAgd2VweS5zaG93TG9hZGluZygpXHJcbiAgICAgICAgICAgIC8vIOaLieWPluacgOi/kSAxMDAg5p2h5L+h5oGvXHJcbiAgICAgICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGNoYXRyb29tLmdldEhpc3RvcnlNc2dzKHtcclxuICAgICAgICAgICAgICBsaW1pdDogMTAwXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIGNvbnN0IG1zZ3MgPSByZXMubXNncy5maWx0ZXIobXNnID0+IG1zZy50eXBlICE9PSAnbm90aWZpY2F0aW9uJyAmJiBtc2cudHlwZSAhPT0gJ3RpcCcpLnJldmVyc2UoKVxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnaGlzdG9yeSBtZXNzYWdlcycsIG1zZ3MpXHJcbiAgICAgICAgICAgIC8vIOWIt+aWsOa2iOaBr1xyXG4gICAgICAgICAgICBwdXNoTXNnKG1zZ3MgfHwgW10pXHJcbiAgICAgICAgICAgIGFwcGx5KClcclxuICAgICAgICAgICAgd2VweS5oaWRlTG9hZGluZygpXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG50aGlzLmNoYXRyb29tID0gY2hhdHJvb21cclxufSBjYXRjaCAoZSkge1xyXG4gIGxvZy5lcnJvcih7XHJcbiAgICBwYWdlOiAnY2hhdHJvb20nLFxyXG4gICAgb3ByOiAnZ2V0SW5zdGFuY2UnLFxyXG4gICAgaW5mbzogZVxyXG4gIH0pXHJcbn1cclxufVxyXG5cclxuYXN5bmMgb25TaG93KCkge1xyXG4gIHRoaXMuaXNMSU1JVCA9IGZhbHNlXHJcbiAgdGhpcy5zZW5kZWQgPSBmYWxzZVxyXG4gIHRoaXMuY3VycmVudE5hdiA9IDBcclxufVxyXG59XHJcbiJdfQ==