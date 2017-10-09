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
      sendFocus: false,
      userLimitArr: [],
      vipUserList: []
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
          var type, banId, roomId, itemAccid, _ref3, id;

          return _regenerator2.default.wrap(function _callee3$(_context3) {
            while (1) {
              switch (_context3.prev = _context3.next) {
                case 0:
                  type = _this4.type;
                  banId = _this4.userLimitArr.map(function (item) {
                    return item.id;
                  });
                  roomId = _this4.roomId;
                  itemAccid = item.from;
                  _context3.next = 6;
                  return chatroomApi.getItemId(itemAccid);

                case 6:
                  _ref3 = _context3.sent;
                  id = _ref3.id;

                  _wepy2.default.navigateTo({
                    url: 'userInfo?id=' + id + '&roomId=' + roomId + '&banId=' + banId + '&type=' + type
                  });

                case 9:
                case 'end':
                  return _context3.stop();
              }
            }
          }, _callee3, _this4);
        }))();
      },
      handleNameId: function handleNameId(item) {
        var type = this.type;
        var banId = this.userLimitArr.map(function (item) {
          return item.id;
        });
        var itemid = item.id;
        var roomId = this.roomId;
        _wepy2.default.navigateTo({
          url: 'userInfo?id=' + itemid + '&roomId=' + roomId + '&banId=' + banId + '&type=' + type
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
        var vipNick = this.vipUserList.map(function (item) {
          return item.nick;
        });
        var isVip = function isVip(msg) {
          for (var i = vipNick.length - 1; i >= 0; i--) {
            if (vipNick[i] === msg.fromNick) {
              return msg.fromNick;
            }
          }
        };
        _ramda2.default.filter(isVip)(msgs).map(function (item) {
          return item.is_vip = true;
        });
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
              userUpdateTime: msg.userUpdateTime,
              is_vip: msg.is_vip
            };
          } else {
            return msg;
          }
        });

        var roomId = this.roomId;
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
        var vipNick = this.vipUserList.map(function (item) {
          return item.nick;
        });
        var isVip = function isVip(msg) {
          for (var i = vipNick.length - 1; i >= 0; i--) {
            if (vipNick[i] === msg.fromNick) {
              return msg.fromNick;
            }
          }
        };
        _ramda2.default.filter(isVip)(msgs).map(function (item) {
          return item.is_vip = true;
        });
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
              userUpdateTime: msg.userUpdateTime,
              is_vip: msg.is_vip
            };
          } else {
            return msg;
          }
        });
        var roomId = this.roomId;

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
        var id, roomid, creator, pushMsg, getCountsNum, apply, hasMsgs, _user, nimToken, accid, avatarUrl, jfToken, roomInfo, data, accidArr, isVip, vipUserList, islimit, isUser, userLimitArr, roomId, address, chatroom;

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
                accidArr = data.map(function (item) {
                  return item.accid;
                });

                this.type = data[accidArr.indexOf(accid)].type;
                //聊天VIP显示

                isVip = function isVip(data) {
                  return data.is_vip === true || data.is_admin === true;
                };

                vipUserList = _ramda2.default.filter(isVip)(data);

                this.vipUserList = vipUserList;

                //禁言

                islimit = function islimit(data) {
                  return data.type === 'LIMITED';
                };

                isUser = function isUser(data) {
                  return data.name && data.name !== null;
                };

                this.numList = _ramda2.default.filter(isUser)(data);
                userLimitArr = _ramda2.default.filter(islimit)(this.numList);

                this.userLimitArr = userLimitArr;
                if (userLimitArr.length > 0) {
                  if (userLimitArr[0].accid === accid) {
                    this.isLIMIT = true;
                    wx.showToast({
                      title: '被禁言，请联系管理员解除',
                      icon: 'success',
                      duration: 2000
                    });
                  }
                }
                this.roomData = roomInfo;
                roomId = this.roomId;
                _context8.next = 33;
                return _nim2.default.getChatroomAddresses(accid, roomId);

              case 33:
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
                                _context7.next = 10;
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
                              // 刷新消息

                              pushMsg(msgs || []);
                              apply();
                              _wepy2.default.hideLoading();

                            case 10:
                            case 'end':
                              return _context7.stop();
                          }
                        }
                      }, _callee7, _this8);
                    }))();
                  }
                });

                this.chatroom = chatroom;
                _context8.next = 41;
                break;

              case 38:
                _context8.prev = 38;
                _context8.t0 = _context8['catch'](8);

                log.error({
                  page: 'chatroom',
                  opr: 'getInstance',
                  info: _context8.t0
                });

              case 41:
              case 'end':
                return _context8.stop();
            }
          }
        }, _callee8, this, [[8, 38]]);
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoYXRyb29tLmpzIl0sIm5hbWVzIjpbImxvZyIsImNoYXRyb29tQXBpIiwiQ2hhdHJvb20iLCJ1c2VyIiwic3RhdGUiLCJjb21tb24iLCJuaW0iLCJtc2dzIiwiY2hhdHJvb20iLCJyb29tSWQiLCJpbnRvVmlldyIsImxhc3QiLCJzY3JvbGx0b3BlciIsImlkQ2xpZW50IiwicmVmcmVzaE1zZ3MiLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiZGF0YSIsIm5hdnMiLCJjdXJyZW50TmF2IiwibnVtTGlzdCIsImlzTElNSVQiLCJzZW5kZWQiLCJ0ZXh0Iiwicm9vbURhdGEiLCJuYW1lIiwiaW5kaWNhdG9yRG90cyIsImF1dG9wbGF5IiwiaW50ZXJ2YWwiLCJkdXJhdGlvbiIsInNob3ciLCJzaG93ZW0iLCJlbW9qaSIsImRlZmF1bHQiLCJFbW9qaSIsImVtb2ppT2JqIiwiRW1vamlPYmoiLCJub3dUaW1lIiwibm93UGVvcGxlcyIsInNlYXJjaGlucHV0Iiwic2VuZEZvY3VzIiwidXNlckxpbWl0QXJyIiwidmlwVXNlckxpc3QiLCJtZXRob2RzIiwic2Nyb2xsIiwiZSIsImRldGFpbCIsInNjcm9sbFRvcCIsInNjcm9sbEhlaWdodCIsImxlbmd0aCIsImdldENvdW50c051bSIsImlkIiwiamZUb2tlbiIsImdldE9uZUJ5SWQiLCJvbmxpbmV1c2VyY291bnQiLCIkYXBwbHkiLCJoYW5kbGVOYW1lIiwiaXRlbSIsInR5cGUiLCJiYW5JZCIsIm1hcCIsIml0ZW1BY2NpZCIsImZyb20iLCJnZXRJdGVtSWQiLCJuYXZpZ2F0ZVRvIiwidXJsIiwiaGFuZGxlTmFtZUlkIiwiaXRlbWlkIiwiZ2V0Rm9jdXMiLCJzZXREYXRhIiwib3BlbkVtb2ppIiwiaW1nUHJldmlldyIsIml0ZW1zIiwiaW1nVXJsIiwiaXNJbWciLCJtc2ciLCJpbWdBcnIiLCJmaWx0ZXIiLCJpbWdVcmxBcnIiLCJmaWxlIiwicHJldmlld0ltYWdlIiwiY3VycmVudCIsInVybHMiLCJzdWNjZXNzIiwicmVzIiwiY29uc29sZSIsInNlbmRFbW9qaSIsImV2ZW50IiwidGhhdCIsInRhcmdldCIsImRhdGFzZXQiLCJtc2dsZW4iLCJzdHIiLCJzdGFydCIsImxhc3RJbmRleE9mIiwiZW5kIiwibGVuIiwic2xpY2UiLCJwdXNoTXNnIiwiYmluZCIsInRyaW0iLCJzZW5kVGV4dCIsImVycm9yIiwicGFnZSIsIm9wciIsImluZm8iLCJjaGFuZ2VOYXYiLCJjdXJyZW50VGFyZ2V0IiwiaW5kZXgiLCJjaG9vc2VJbWFnZSIsImNvdW50IiwicHJldmlld0ZpbGUiLCJ3eEZpbGVQYXRoIiwidGVtcEZpbGVQYXRocyIsInNlbmRGaWxlIiwic2VuZCIsInB1c2hNc2dUZXh0Iiwic2V0VGV4dCIsInZhbHVlIiwiQXJyYXkiLCJpc0FycmF5IiwidmlwTmljayIsIm5pY2siLCJpc1ZpcCIsImkiLCJmcm9tTmljayIsImlzX3ZpcCIsImVtamkiLCJwYXJzZUVtb2ppIiwicmVwbGFjZSIsImNoYXRyb29tSWQiLCJmbG93IiwiZnJvbUF2YXRhciIsImZyb21DbGllbnRUeXBlIiwiZnJvbUN1c3RvbSIsInJlc2VuZCIsInN0YXR1cyIsInRpbWUiLCJ1c2VyVXBkYXRlVGltZSIsIm1lcmdlZCIsIm9uU2hhcmVBcHBNZXNzYWdlIiwidGl0bGUiLCJvcHRpb25zIiwicm9vbWlkIiwiY3JlYXRvciIsImFwcGx5IiwiaGFzTXNncyIsIm5pbVRva2VuIiwiYWNjaWQiLCJhdmF0YXJVcmwiLCJhZGRUb1Jvb20iLCJyb29tSW5mbyIsImdldFVzZXJMaXN0IiwiYWNjaWRBcnIiLCJpbmRleE9mIiwiaXNfYWRtaW4iLCJpc2xpbWl0IiwiaXNVc2VyIiwid3giLCJzaG93VG9hc3QiLCJpY29uIiwiZ2V0Q2hhdHJvb21BZGRyZXNzZXMiLCJhZGRyZXNzIiwiZ2V0SW5zdGFuY2UiLCJhY2NvdW50IiwidG9rZW4iLCJjaGF0cm9vbUFkZHJlc3NlcyIsIm9ubXNncyIsInRpcCIsImNvbmQiLCJlcXVhbHMiLCJhbHdheXMiLCJhdHRhY2giLCJ0aXBNc2ciLCJEYXRlIiwicGFyc2UiLCJ0b0lTT1N0cmluZyIsInNwbGl0IiwidG9UaW1lU3RyaW5nIiwic3Vic3RyIiwib25jb25uZWN0Iiwic2hvd0xvYWRpbmciLCJnZXRIaXN0b3J5TXNncyIsImxpbWl0IiwicmV2ZXJzZSIsImhpZGVMb2FkaW5nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDRTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7O0lBQVlBLEc7O0FBQ1o7O0FBR0E7O0lBQVlDLFc7O0FBQ1o7Ozs7OztJQW9CcUJDLFEsV0FqQnBCLHdCQUFRO0FBQ1BDLFFBQU07QUFBQSxXQUFTQyxNQUFNQyxNQUFOLENBQWFGLElBQXRCO0FBQUEsR0FEQztBQUVQRyxPQUFLO0FBQUEsV0FBU0YsTUFBTUMsTUFBTixDQUFhQyxHQUF0QjtBQUFBLEdBRkU7QUFHUEMsUUFBTSxjQUFVSCxLQUFWLEVBQWlCO0FBQ3JCLFdBQU9BLE1BQU1JLFFBQU4sQ0FBZUQsSUFBZixDQUFvQixLQUFLRSxNQUF6QixLQUFvQyxFQUEzQztBQUNELEdBTE07QUFNUEMsWUFBVSxrQkFBU04sS0FBVCxFQUFnQjtBQUN4QixRQUFNRyxPQUFPSCxNQUFNSSxRQUFOLENBQWVELElBQWYsQ0FBb0IsS0FBS0UsTUFBekIsS0FBb0MsRUFBakQ7QUFDQSxRQUFNRSxPQUFPLGdCQUFFQSxJQUFGLENBQU9KLElBQVAsQ0FBYjtBQUNBLFFBQUksS0FBS0ssV0FBVCxFQUFzQjtBQUNwQixhQUFPLEVBQVA7QUFDRDtBQUNELFdBQU9ELE9BQU9BLEtBQUtFLFFBQVosR0FBdUIsRUFBOUI7QUFDRDtBQWJNLENBQVIsRUFjRTtBQUNEQztBQURDLENBZEYsQzs7Ozs7Ozs7Ozs7Ozs7Z05Ba0JDQyxNLEdBQVM7QUFDUEMsOEJBQXdCO0FBRGpCLEssUUFHVEMsSSxHQUFPO0FBQ0xDLFlBQU0sQ0FBQyxJQUFELEVBQU8sSUFBUCxDQUREO0FBRUxD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QUFPO0FBRGlDLCtCQUF4QixDQVRaOztBQUFBO0FBU0FuRyxpQ0FUQTtBQVlBN0Usa0NBWkEsR0FZTzZFLElBQUk3RSxJQUFKLENBQVNzRSxNQUFULENBQWdCO0FBQUEsdUNBQU9GLElBQUlqQixJQUFKLEtBQWEsY0FBYixJQUErQmlCLElBQUlqQixJQUFKLEtBQWEsS0FBbkQ7QUFBQSwrQkFBaEIsRUFBMEU4SCxPQUExRSxFQVpQO0FBYU47O0FBQ0F0RixzQ0FBUTNGLFFBQVEsRUFBaEI7QUFDQTBJO0FBQ0EsNkNBQUt3QyxXQUFMOztBQWhCTTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQWtCVDtBQXBEZ0MsaUJBQXhCLEM7O0FBc0RqQixxQkFBS2pMLFFBQUwsR0FBZ0JBLFFBQWhCOzs7Ozs7OztBQUVFUixvQkFBSXNHLEtBQUosQ0FBVTtBQUNSQyx3QkFBTSxVQURFO0FBRVJDLHVCQUFLLGFBRkc7QUFHUkM7QUFIUSxpQkFBVjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBYUEscUJBQUtwRixPQUFMLEdBQWUsS0FBZjtBQUNBLHFCQUFLQyxNQUFMLEdBQWMsS0FBZDtBQUNBLHFCQUFLSCxVQUFMLEdBQWtCLENBQWxCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7RUF4WnNDLGVBQUtvRixJO2tCQUF0QnJHLFEiLCJmaWxlIjoiY2hhdHJvb20uanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xyXG4gIGltcG9ydCBSIGZyb20gJy4uL2xpYnMvcmFtZGEnXHJcbiAgaW1wb3J0IENoYXRyb29tU0RLIGZyb20gJy4uL3V0aWxzL2NoYXRyb29tJ1xyXG4gIGltcG9ydCBOSU0gZnJvbSAnLi4vdXRpbHMvbmltJ1xyXG4gIGltcG9ydCBGYWNlSU0gZnJvbSAnLi4vdXRpbHMvV2ViSU0nXHJcbiAgaW1wb3J0ICogYXMgbG9nIGZyb20gJy4uL3V0aWxzL2xvZydcclxuICBpbXBvcnQge1xyXG4gICAgcmVmcmVzaE1zZ3NcclxuICB9IGZyb20gJy4uL2FjdGlvbnMvY2hhdHJvb20nXHJcbiAgaW1wb3J0ICogYXMgY2hhdHJvb21BcGkgZnJvbSAnLi4vYXBpcy9jaGF0cm9vbSdcclxuICBpbXBvcnQge1xyXG4gICAgY29ubmVjdFxyXG4gIH0gZnJvbSAnd2VweS1yZWR1eCdcclxuICBAY29ubmVjdCh7XHJcbiAgICB1c2VyOiBzdGF0ZSA9PiBzdGF0ZS5jb21tb24udXNlcixcclxuICAgIG5pbTogc3RhdGUgPT4gc3RhdGUuY29tbW9uLm5pbSxcclxuICAgIG1zZ3M6IGZ1bmN0aW9uIChzdGF0ZSkge1xyXG4gICAgICByZXR1cm4gc3RhdGUuY2hhdHJvb20ubXNnc1t0aGlzLnJvb21JZF0gfHwgW11cclxuICAgIH0sXHJcbiAgICBpbnRvVmlldzogZnVuY3Rpb24oc3RhdGUpIHtcclxuICAgICAgY29uc3QgbXNncyA9IHN0YXRlLmNoYXRyb29tLm1zZ3NbdGhpcy5yb29tSWRdIHx8IFtdXHJcbiAgICAgIGNvbnN0IGxhc3QgPSBSLmxhc3QobXNncylcclxuICAgICAgaWYgKHRoaXMuc2Nyb2xsdG9wZXIpIHtcclxuICAgICAgICByZXR1cm4gJydcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gbGFzdCA/IGxhc3QuaWRDbGllbnQgOiAnJ1xyXG4gICAgfVxyXG4gIH0sIHtcclxuICAgIHJlZnJlc2hNc2dzXHJcbiAgfSlcclxuICBleHBvcnQgZGVmYXVsdCBjbGFzcyBDaGF0cm9vbSBleHRlbmRzIHdlcHkucGFnZSB7XHJcbiAgICBjb25maWcgPSB7XHJcbiAgICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICfogYrlpKnlrqQnXHJcbiAgICB9XHJcbiAgICBkYXRhID0ge1xyXG4gICAgICBuYXZzOiBbJ+iBiuWkqScsICfor6bmg4UnXSxcclxuICAgICAgY3VycmVudE5hdjogMCxcclxuICAgICAgbnVtTGlzdDogW10sXHJcbiAgICAgIGlzTElNSVQ6IGZhbHNlLFxyXG4gICAgICBjaGF0cm9vbTogbnVsbCxcclxuICAgICAgcm9vbUlkOiBudWxsLFxyXG4gICAgICBzZW5kZWQ6IGZhbHNlLFxyXG4gICAgICB0ZXh0OiAnJyxcclxuICAgICAgcm9vbURhdGE6IHtcclxuICAgICAgICBuYW1lOiAn5Yqg6L295LitLi4uJ1xyXG4gICAgICB9LFxyXG4gICAgICBpbmRpY2F0b3JEb3RzOiB0cnVlLFxyXG4gICAgICBhdXRvcGxheTogZmFsc2UsXHJcbiAgICAgIGludGVydmFsOiA1MDAwLFxyXG4gICAgICBkdXJhdGlvbjogMTAwMCxcclxuICAgICAgc2hvdzogJ2Vtb2ppX2xpc3QnLFxyXG4gICAgICBzaG93ZW06ICdvcGVyYXRpb24nLFxyXG4gICAgICBlbW9qaTogRmFjZUlNLmRlZmF1bHQuRW1vamksXHJcbiAgICAgIGVtb2ppT2JqOiBGYWNlSU0uZGVmYXVsdC5FbW9qaU9iaixcclxuICAgICAgbm93VGltZTogJycsXHJcbiAgICAgIG5vd1Blb3BsZXM6IDAsXHJcbiAgICAgIHNlYXJjaGlucHV0OicnLFxyXG4gICAgICBzZW5kRm9jdXM6IGZhbHNlLFxyXG4gICAgICB1c2VyTGltaXRBcnI6W10sXHJcbiAgICAgIHZpcFVzZXJMaXN0OltdLFxyXG4gICAgfVxyXG4gICAgbWV0aG9kcyA9IHtcclxuICAgICAgYXN5bmMgc2Nyb2xsIChlKSB7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coZS5kZXRhaWwuc2Nyb2xsSGVpZ2h0KeWIpOaWreaYr+WQpuWcqOafpeeci+WOhuWPsuiusOW9leS4jea7muWKqFxyXG4gICAgICAgIGlmIChlLmRldGFpbC5zY3JvbGxUb3AgPCBlLmRldGFpbC5zY3JvbGxIZWlnaHQqMC41IHx8IGUuZGV0YWlsLnNjcm9sbFRvcCA8IDEwMCkge1xyXG4gICAgICAgICAgLy8gY29uc29sZS5sb2coZS5kZXRhaWwuZGVsdGFYKVxyXG4gICAgICAgICAgdGhpcy5zY3JvbGx0b3BlciA9IDFcclxuICAgICAgICB9ZWxzZSB7XHJcbiAgICAgICAgICB0aGlzLnNjcm9sbHRvcGVyID0gMFxyXG4gICAgICAgIH1cclxuICAgICAgICBpZihlLmRldGFpbC5zY3JvbGxUb3AgPCAxMCAmJiB0aGlzLm1zZ3MubGVuZ3RoIDwgMTUwKSB7XHJcbiAgICAgICAgfVxyXG4gICAgICB9LFxyXG4gICAgICBhc3luYyBnZXRDb3VudHNOdW0oaWQsIGpmVG9rZW4pIHtcclxuICAgICAgICBjb25zdCB7b25saW5ldXNlcmNvdW50fSA9IGF3YWl0IGNoYXRyb29tQXBpLmdldE9uZUJ5SWQoaWQsIGpmVG9rZW4pXHJcbiAgICAgICAgdGhpcy5ub3dQZW9wbGVzID0gb25saW5ldXNlcmNvdW50XHJcbiAgICAgICAgdGhpcy4kYXBwbHkoKVxyXG4gICAgICB9LFxyXG4gICAgICBhc3luYyBoYW5kbGVOYW1lIChpdGVtKSB7XHJcbiAgICAgICAgY29uc3QgdHlwZSA9IHRoaXMudHlwZVxyXG4gICAgICAgIGNvbnN0IGJhbklkID0gdGhpcy51c2VyTGltaXRBcnIubWFwKChpdGVtKT0+aXRlbS5pZClcclxuICAgICAgICBsZXQgcm9vbUlkID0gdGhpcy5yb29tSWRcclxuICAgICAgICBjb25zdCBpdGVtQWNjaWQgPSBpdGVtLmZyb21cclxuICAgICAgICBjb25zdCB7aWR9ID0gYXdhaXQgY2hhdHJvb21BcGkuZ2V0SXRlbUlkKGl0ZW1BY2NpZClcclxuICAgICAgICB3ZXB5Lm5hdmlnYXRlVG8oe1xyXG4gICAgICAgICAgdXJsOiBgdXNlckluZm8/aWQ9JHtpZH0mcm9vbUlkPSR7cm9vbUlkfSZiYW5JZD0ke2JhbklkfSZ0eXBlPSR7dHlwZX1gXHJcbiAgICAgICAgfSlcclxuICAgICAgfSxcclxuICAgICAgaGFuZGxlTmFtZUlkIChpdGVtKSB7XHJcbiAgICAgICAgY29uc3QgdHlwZSA9IHRoaXMudHlwZVxyXG4gICAgICAgIGNvbnN0IGJhbklkID0gdGhpcy51c2VyTGltaXRBcnIubWFwKChpdGVtKT0+aXRlbS5pZClcclxuICAgICAgICBjb25zdCBpdGVtaWQgPSBpdGVtLmlkXHJcbiAgICAgICAgbGV0IHJvb21JZCA9IHRoaXMucm9vbUlkXHJcbiAgICAgICAgd2VweS5uYXZpZ2F0ZVRvKHtcclxuICAgICAgICAgIHVybDogYHVzZXJJbmZvP2lkPSR7aXRlbWlkfSZyb29tSWQ9JHtyb29tSWR9JmJhbklkPSR7YmFuSWR9JnR5cGU9JHt0eXBlfWBcclxuICAgICAgICB9KVxyXG4gICAgICB9LFxyXG4gICAgICBnZXRGb2N1cyAoKSB7XHJcbiAgICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICAgIHNlbmRGb2N1cyA6IGZhbHNlXHJcbiAgICAgICAgfSlcclxuICAgICAgfSxcclxuICAgICAgb3BlbkVtb2ppIChlKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuc2hvdyA9PT0gJ3Nob3dFbW9qaScpIHtcclxuICAgICAgICAgIHRoaXMuc2hvdyA9ICdlbW9qaV9saXN0J1xyXG4gICAgICAgICAgdGhpcy5zaG93ZW0gPSAnb3BlcmF0aW9uJ1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICB0aGlzLnNob3cgPSAnc2hvd0Vtb2ppJ1xyXG4gICAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuJGFwcGx5KClcclxuICAgICAgfSxcclxuICAgICAgaW1nUHJldmlldyAoaXRlbXMsIG1zZ3MpIHtcclxuICAgICAgICBjb25zdCBpbWdVcmwgPSBpdGVtc1xyXG4gICAgICAgIGNvbnN0IGlzSW1nID0gbXNnID0+IG1zZy50eXBlID09PSAnaW1hZ2UnXHJcbiAgICAgICAgY29uc3QgaW1nQXJyID0gUi5maWx0ZXIoaXNJbWcpKG1zZ3MpXHJcbiAgICAgICAgY29uc3QgaW1nVXJsQXJyID0gaW1nQXJyLm1hcChtc2cgPT4ge1xyXG4gICAgICAgICAgcmV0dXJuIG1zZy5maWxlLnVybFxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgd2VweS5wcmV2aWV3SW1hZ2Uoe1xyXG4gICAgICAgICAgY3VycmVudDogaW1nVXJsLFxyXG4gICAgICAgICAgdXJsczogaW1nVXJsQXJyLFxyXG4gICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKHJlcykge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhyZXMpXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgICAgfSxcclxuICAgICAgYXN5bmMgc2VuZEVtb2ppIChldmVudCkge1xyXG4gICAgICAgIHZhciB0aGF0ID0gdGhpc1xyXG4gICAgICAgIHZhciBlbW9qaSA9IGV2ZW50LnRhcmdldC5kYXRhc2V0LmVtb2ppXHJcbiAgICAgICAgdmFyIG1zZ2xlbiA9IHRoYXQuZGF0YS50ZXh0Lmxlbmd0aCAtIDFcclxuICAgICAgICBpZiAoZW1vamkgJiYgZW1vamkgIT09ICdbZGVsXScpIHtcclxuICAgICAgICAgIHZhciBzdHIgPSB0aGF0LmRhdGEudGV4dCArIGVtb2ppXHJcbiAgICAgICAgfSBlbHNlIGlmIChlbW9qaSA9PT0gJ1tkZWxdJykge1xyXG4gICAgICAgICAgdmFyIHN0YXJ0ID0gdGhhdC5kYXRhLnRleHQubGFzdEluZGV4T2YoJ1snKVxyXG4gICAgICAgICAgdmFyIGVuZCA9IHRoYXQuZGF0YS50ZXh0Lmxhc3RJbmRleE9mKCddJylcclxuICAgICAgICAgIHZhciBsZW4gPSBlbmQgLSBzdGFydFxyXG4gICAgICAgICAgaWYgKGVuZCAhPT0gLTEgJiYgZW5kID09PSBtc2dsZW4gJiYgbGVuID49IDMgJiYgbGVuIDw9IDQpIHtcclxuICAgICAgICAgICAgc3RyID0gdGhhdC5kYXRhLnRleHQuc2xpY2UoMCwgc3RhcnQpXHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBzdHIgPSB0aGF0LmRhdGEudGV4dC5zbGljZSgwLCBtc2dsZW4pXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMudGV4dCA9IHN0clxyXG4gICAgICAgIGNvbnN0IHB1c2hNc2cgPSB0aGlzLm1ldGhvZHMucHVzaE1zZy5iaW5kKHRoaXMpXHJcbiAgICAgICAgdmFyIHRleHQgPSBSLnRyaW0odGhpcy50ZXh0KVxyXG4gICAgICAgIHRoaXMudGV4dCA9ICcnXHJcbiAgICAgICAgaWYgKHRleHQubGVuZ3RoKSB7XHJcbiAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBjb25zdCBtc2cgPSBhd2FpdCB0aGlzLmNoYXRyb29tLnNlbmRUZXh0KHtcclxuICAgICAgICAgICAgICB0ZXh0XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIHRoaXMudGV4dCA9ICcnXHJcbiAgICAgICAgICAgIHB1c2hNc2cobXNnKVxyXG4gICAgICAgICAgICB0aGlzLnNob3cgPSAnZW1vamlfbGlzdCdcclxuICAgICAgICAgICAgdGhpcy5zZXREYXRhKHsgIFxyXG4gICAgICAgICAgICAgIHNlYXJjaGlucHV0OiAnJywgIFxyXG4gICAgICAgICAgICB9KSAgXHJcbiAgICAgICAgICAgIHRoaXMuJGFwcGx5KClcclxuICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgbG9nLmVycm9yKHtcclxuICAgICAgICAgICAgICBwYWdlOiAnY2hhdHJvb20nLFxyXG4gICAgICAgICAgICAgIG9wcjogJ3NlbmRUZXh0JyxcclxuICAgICAgICAgICAgICBpbmZvOiBlXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9LFxyXG4gICAgICBjaGFuZ2VOYXYgKGUpIHtcclxuICAgICAgICB0aGlzLmN1cnJlbnROYXYgPSBlLmN1cnJlbnRUYXJnZXQuZGF0YXNldC5pbmRleFxyXG4gICAgICAgIHRoaXMuc2VuZGVkID0gZmFsc2VcclxuICAgICAgICB0aGlzLiRhcHBseSgpXHJcbiAgICAgIH0sXHJcbiAgICAgIGFzeW5jIGNob29zZUltYWdlKCkge1xyXG4gICAgICAvLyDov5vooYzlm77niYfpgInmi6nlubbkuIrkvKBcclxuICAgICAgY29uc3QgcHVzaE1zZyA9IHRoaXMubWV0aG9kcy5wdXNoTXNnLmJpbmQodGhpcylcclxuICAgICAgY29uc3QgcmVzID0gYXdhaXQgd2VweS5jaG9vc2VJbWFnZSh7XHJcbiAgICAgICAgY291bnQ6IDFcclxuICAgICAgfSlcclxuICAgICAgdHJ5IHtcclxuICAgICAgICBjb25zdCBmaWxlID0gYXdhaXQgdGhpcy5jaGF0cm9vbS5wcmV2aWV3RmlsZSh7XHJcbiAgICAgICAgICB0eXBlOiAnaW1hZ2UnLFxyXG4gICAgICAgICAgd3hGaWxlUGF0aDogcmVzLnRlbXBGaWxlUGF0aHNbMF1cclxuICAgICAgICB9KVxyXG4gICAgICAgIGNvbnN0IG1zZyA9IGF3YWl0IHRoaXMuY2hhdHJvb20uc2VuZEZpbGUoe1xyXG4gICAgICAgICAgdHlwZTogJ2ltYWdlJyxcclxuICAgICAgICAgIGZpbGU6IGZpbGVcclxuICAgICAgICB9KVxyXG4gICAgICAgIHB1c2hNc2cobXNnKVxyXG4gICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIGxvZy5lcnJvcih7XHJcbiAgICAgICAgICBwYWdlOiAnY2hhdHJvb20nLFxyXG4gICAgICAgICAgb3ByOiAnc2VuZEZpbGUnLFxyXG4gICAgICAgICAgaW5mbzogZXJyb3JcclxuICAgICAgICB9KVxyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgYXN5bmMgc2VuZChlKSB7XHJcbiAgICAgIC8vPyB3aHkgYmluZFxyXG4gICAgICB0aGlzLnNldERhdGEoeyAgXHJcbiAgICAgICAgc2VhcmNoaW5wdXQ6ICcnLCAgXHJcbiAgICAgICAgc2VuZEZvY3VzOiB0cnVlLFxyXG4gICAgICB9KSBcclxuICAgICAgdGhpcy5zY3JvbGx0b3BlciA9IDBcclxuICAgICAgY29uc3QgcHVzaE1zZ1RleHQgPSB0aGlzLm1ldGhvZHMucHVzaE1zZ1RleHQuYmluZCh0aGlzKVxyXG4gICAgICBjb25zdCB0ZXh0ID0gUi50cmltKHRoaXMudGV4dClcclxuICAgICAgdGhpcy50ZXh0ID0gJydcclxuICAgICAgaWYgKHRleHQubGVuZ3RoKSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgIGNvbnN0IG1zZyA9IGF3YWl0IHRoaXMuY2hhdHJvb20uc2VuZFRleHQoe1xyXG4gICAgICAgICAgICB0ZXh0XHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgICAgdGhpcy50ZXh0ID0gJydcclxuICAgICAgICAgIHB1c2hNc2dUZXh0KG1zZylcclxuICAgICAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgICBsb2cuZXJyb3Ioe1xyXG4gICAgICAgICAgICBwYWdlOiAnY2hhdHJvb20nLFxyXG4gICAgICAgICAgICBvcHI6ICdzZW5kVGV4dCcsXHJcbiAgICAgICAgICAgIGluZm86IGVcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgc2V0VGV4dChlKSB7XHJcbiAgICAgIHRoaXMudGV4dCA9IGUuZGV0YWlsLnZhbHVlXHJcbiAgICB9LFxyXG4gICAgcHVzaE1zZzogZnVuY3Rpb24gKG1zZ3MpIHtcclxuICAgICAgY29uc3QgeyByZWZyZXNoTXNncyB9ID0gdGhpcy5tZXRob2RzXHJcbiAgICAgIGlmICghQXJyYXkuaXNBcnJheShtc2dzKSkge1xyXG4gICAgICAgIG1zZ3MgPSBbbXNnc11cclxuICAgICAgfVxyXG4gICAgICBjb25zdCB2aXBOaWNrID0gdGhpcy52aXBVc2VyTGlzdC5tYXAoKGl0ZW0pID0+IGl0ZW0ubmljaylcclxuICAgICAgY29uc3QgaXNWaXAgPSBmdW5jdGlvbihtc2cpe1xyXG4gICAgICAgIGZvciAodmFyIGkgPSB2aXBOaWNrLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XHJcbiAgICAgICAgICBpZiAodmlwTmlja1tpXSA9PT0gbXNnLmZyb21OaWNrKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBtc2cuZnJvbU5pY2tcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgUi5maWx0ZXIoaXNWaXApKG1zZ3MpLm1hcChpdGVtID0+IGl0ZW0uaXNfdmlwID0gdHJ1ZSlcclxuICAgICAgbXNncyA9IG1zZ3MubWFwKG1zZyA9PiB7XHJcbiAgICAgICAgaWYgKG1zZy50eXBlID09PSAndGV4dCcpIHtcclxuICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIGVtamk6IEZhY2VJTS5kZWZhdWx0LnBhcnNlRW1vamkobXNnLnRleHQucmVwbGFjZSgvXFxuL21nLCAnJykpLFxyXG4gICAgICAgICAgICBjaGF0cm9vbUlkOiBtc2cuY2hhdHJvb21JZCxcclxuICAgICAgICAgICAgZmxvdzogbXNnLmZsb3csXHJcbiAgICAgICAgICAgIGZyb206IG1zZy5mcm9tLFxyXG4gICAgICAgICAgICBmcm9tQXZhdGFyOiBtc2cuZnJvbUF2YXRhcixcclxuICAgICAgICAgICAgZnJvbUNsaWVudFR5cGU6IG1zZy5mcm9tQ2xpZW50VHlwZSxcclxuICAgICAgICAgICAgZnJvbUN1c3RvbTogbXNnLmZyb21DdXN0b20sXHJcbiAgICAgICAgICAgIGZyb21OaWNrOiBtc2cuZnJvbU5pY2ssXHJcbiAgICAgICAgICAgIGlkQ2xpZW50OiBtc2cuaWRDbGllbnQsXHJcbiAgICAgICAgICAgIHJlc2VuZDogbXNnLnJlc2VuZCxcclxuICAgICAgICAgICAgc3RhdHVzOiBtc2cuc3RhdHVzLFxyXG4gICAgICAgICAgICB0ZXh0OiBtc2cudGV4dCxcclxuICAgICAgICAgICAgdGltZTogbXNnLnRpbWUsXHJcbiAgICAgICAgICAgIHR5cGU6IG1zZy50eXBlLFxyXG4gICAgICAgICAgICB1c2VyVXBkYXRlVGltZTogbXNnLnVzZXJVcGRhdGVUaW1lLFxyXG4gICAgICAgICAgICBpc192aXA6IG1zZy5pc192aXBcclxuICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgcmV0dXJuIG1zZ1xyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuXHJcbiAgICAgIGxldCByb29tSWQgPSB0aGlzLnJvb21JZFxyXG4gICAgICBpZiAobXNncy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgcm9vbUlkID0gbXNnc1swXS5jaGF0cm9vbUlkXHJcbiAgICAgIH1cclxuICAgICAgY29uc3QgbWVyZ2VkID0gWy4uLnRoaXMubXNncywgLi4ubXNnc11cclxuICAgICAgcmVmcmVzaE1zZ3Mocm9vbUlkLCBtZXJnZWQpXHJcbiAgICAgIHRoaXMuc2VuZGVkID0gdHJ1ZVxyXG4gICAgICB0aGlzLiRhcHBseSgpXHJcbiAgICB9LFxyXG4gICAgcHVzaE1zZ1RleHQ6IGZ1bmN0aW9uIChtc2dzKSB7XHJcbiAgICAgIGNvbnN0IHsgcmVmcmVzaE1zZ3MgfSA9IHRoaXMubWV0aG9kc1xyXG4gICAgICBpZiAoIUFycmF5LmlzQXJyYXkobXNncykpIHtcclxuICAgICAgICBtc2dzID0gW21zZ3NdXHJcbiAgICAgIH1cclxuICAgICAgY29uc3QgdmlwTmljayA9IHRoaXMudmlwVXNlckxpc3QubWFwKChpdGVtKSA9PiBpdGVtLm5pY2spXHJcbiAgICAgIGNvbnN0IGlzVmlwID0gZnVuY3Rpb24obXNnKXtcclxuICAgICAgICBmb3IgKHZhciBpID0gdmlwTmljay5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xyXG4gICAgICAgICAgaWYgKHZpcE5pY2tbaV0gPT09IG1zZy5mcm9tTmljaykge1xyXG4gICAgICAgICAgICByZXR1cm4gbXNnLmZyb21OaWNrXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIFIuZmlsdGVyKGlzVmlwKShtc2dzKS5tYXAoaXRlbSA9PiBpdGVtLmlzX3ZpcCA9IHRydWUpXHJcbiAgICAgIG1zZ3MgPSBtc2dzLm1hcChtc2cgPT4ge1xyXG4gICAgICAgIGlmIChtc2cudHlwZSA9PT0gJ3RleHQnKSB7XHJcbiAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBlbWppOiBGYWNlSU0uZGVmYXVsdC5wYXJzZUVtb2ppKG1zZy50ZXh0LnJlcGxhY2UoL1xcbi9tZywgJycpKSxcclxuICAgICAgICAgICAgY2hhdHJvb21JZDogbXNnLmNoYXRyb29tSWQsXHJcbiAgICAgICAgICAgIGZsb3c6IG1zZy5mbG93LFxyXG4gICAgICAgICAgICBmcm9tOiBtc2cuZnJvbSxcclxuICAgICAgICAgICAgZnJvbUF2YXRhcjogbXNnLmZyb21BdmF0YXIsXHJcbiAgICAgICAgICAgIGZyb21DbGllbnRUeXBlOiBtc2cuZnJvbUNsaWVudFR5cGUsXHJcbiAgICAgICAgICAgIGZyb21DdXN0b206IG1zZy5mcm9tQ3VzdG9tLFxyXG4gICAgICAgICAgICBmcm9tTmljazogbXNnLmZyb21OaWNrLFxyXG4gICAgICAgICAgICBpZENsaWVudDogbXNnLmlkQ2xpZW50LFxyXG4gICAgICAgICAgICByZXNlbmQ6IG1zZy5yZXNlbmQsXHJcbiAgICAgICAgICAgIHN0YXR1czogbXNnLnN0YXR1cyxcclxuICAgICAgICAgICAgdGV4dDogbXNnLnRleHQsXHJcbiAgICAgICAgICAgIHRpbWU6IG1zZy50aW1lLFxyXG4gICAgICAgICAgICB0eXBlOiBtc2cudHlwZSxcclxuICAgICAgICAgICAgdXNlclVwZGF0ZVRpbWU6IG1zZy51c2VyVXBkYXRlVGltZSxcclxuICAgICAgICAgICAgaXNfdmlwOiBtc2cuaXNfdmlwXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHJldHVybiBtc2dcclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcbiAgICAgIGxldCByb29tSWQgPSB0aGlzLnJvb21JZFxyXG5cclxuICAgICAgaWYgKG1zZ3MubGVuZ3RoID4gMCkge1xyXG4gICAgICAgIHJvb21JZCA9IG1zZ3NbMF0uY2hhdHJvb21JZFxyXG4gICAgICB9XHJcbiAgICAgIGNvbnN0IG1lcmdlZCA9IFsuLi50aGlzLm1zZ3MsIC4uLm1zZ3NdXHJcbiAgICAgIHJlZnJlc2hNc2dzKHJvb21JZCwgbWVyZ2VkKVxyXG4gICAgICB0aGlzLnNlbmRlZCA9IHRydWVcclxuICAgICAgdGhpcy4kYXBwbHkoKVxyXG4gICAgfSxcclxuICB9XHJcbiAgYXN5bmMgb25Mb2FkKG9wdGlvbnMpIHtcclxuICAgIGNvbnN0IHsgaWQgfSA9IG9wdGlvbnNcclxuICAgIGNvbnN0IHtyb29taWR9ID0gb3B0aW9uc1xyXG4gICAgY29uc3Qge2NyZWF0b3J9ID0gb3B0aW9uc1xyXG4gICAgdGhpcy5yb29tSWQgPSByb29taWRcclxuICAgIGNvbnN0IHB1c2hNc2cgPSB0aGlzLm1ldGhvZHMucHVzaE1zZy5iaW5kKHRoaXMpXHJcbiAgICBjb25zdCBnZXRDb3VudHNOdW0gPSB0aGlzLm1ldGhvZHMuZ2V0Q291bnRzTnVtLmJpbmQodGhpcylcclxuICAgIGNvbnN0IGFwcGx5ID0gdGhpcy4kYXBwbHkuYmluZCh0aGlzKVxyXG4gICAgY29uc3QgaGFzTXNncyA9IHRoaXMubXNncy5sZW5ndGggPiAwXHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCB7IG5pbVRva2VuLCBhY2NpZCwgYXZhdGFyVXJsLCBqZlRva2VuIH0gPSB0aGlzLnVzZXJcclxuLy8gICAgICBpZiAoY3JlYXRvciAhPT0gYWNjaWQpIHtcclxuLy8gICAgICAgIGF3YWl0IGNoYXRyb29tQXBpLmFkZFRvUm9vbShyb29taWQsIGNyZWF0b3IsIGFjY2lkKVxyXG4vLyAgICAgIH1cclxuYXdhaXQgY2hhdHJvb21BcGkuYWRkVG9Sb29tKHJvb21pZCwgY3JlYXRvciwgYWNjaWQpXHJcbmNvbnN0IHJvb21JbmZvID0gYXdhaXQgY2hhdHJvb21BcGkuZ2V0T25lQnlJZChpZCwgamZUb2tlbilcclxuY29uc3QgZGF0YSA9IGF3YWl0IGNoYXRyb29tQXBpLmdldFVzZXJMaXN0KHJvb21pZCwgamZUb2tlbilcclxuY29uc3QgYWNjaWRBcnIgPSBkYXRhLm1hcCgoaXRlbSk9Pml0ZW0uYWNjaWQpXHJcbnRoaXMudHlwZSA9IGRhdGFbYWNjaWRBcnIuaW5kZXhPZihhY2NpZCldLnR5cGVcclxuLy/ogYrlpKlWSVDmmL7npLpcclxuXHJcbmNvbnN0IGlzVmlwID0gZGF0YSA9PiBkYXRhLmlzX3ZpcCA9PT0gdHJ1ZSB8fCBkYXRhLmlzX2FkbWluID09PSB0cnVlXHJcbmNvbnN0IHZpcFVzZXJMaXN0ID0gUi5maWx0ZXIoaXNWaXApKGRhdGEpXHJcbnRoaXMudmlwVXNlckxpc3QgPSB2aXBVc2VyTGlzdFxyXG5cclxuLy/npoHoqIBcclxuY29uc3QgaXNsaW1pdCA9IGRhdGEgPT4gZGF0YS50eXBlID09PSAnTElNSVRFRCdcclxuY29uc3QgaXNVc2VyID0gZGF0YSA9PiBkYXRhLm5hbWUgJiYgZGF0YS5uYW1lICE9PSBudWxsXHJcbnRoaXMubnVtTGlzdCA9IFIuZmlsdGVyKGlzVXNlcikoZGF0YSlcclxuY29uc3QgdXNlckxpbWl0QXJyID0gUi5maWx0ZXIoaXNsaW1pdCkodGhpcy5udW1MaXN0KVxyXG50aGlzLnVzZXJMaW1pdEFyciA9IHVzZXJMaW1pdEFyclxyXG5pZiAodXNlckxpbWl0QXJyLmxlbmd0aCA+IDApIHtcclxuICBpZiAodXNlckxpbWl0QXJyWzBdLmFjY2lkID09PSBhY2NpZCkge1xyXG4gICAgdGhpcy5pc0xJTUlUID0gdHJ1ZVxyXG4gICAgd3guc2hvd1RvYXN0KHtcclxuICAgICAgdGl0bGU6ICfooqvnpoHoqIDvvIzor7fogZTns7vnrqHnkIblkZjop6PpmaQnLFxyXG4gICAgICBpY29uOiAnc3VjY2VzcycsXHJcbiAgICAgIGR1cmF0aW9uOiAyMDAwXHJcbiAgICB9KVxyXG4gIH1cclxufVxyXG50aGlzLnJvb21EYXRhID0gcm9vbUluZm9cclxuY29uc3Qgcm9vbUlkID0gdGhpcy5yb29tSWRcclxuY29uc3QgYWRkcmVzcyA9IGF3YWl0IE5JTS5nZXRDaGF0cm9vbUFkZHJlc3NlcyhhY2NpZCwgcm9vbUlkKVxyXG5jb25zdCBjaGF0cm9vbSA9IENoYXRyb29tU0RLLmdldEluc3RhbmNlKHtcclxuLy8gICAgICAgIGRlYnVnOiB0cnVlLFxyXG5hY2NvdW50OiBhY2NpZCxcclxudG9rZW46IG5pbVRva2VuLFxyXG5jaGF0cm9vbUlkOiByb29tSWQsXHJcbmNoYXRyb29tQWRkcmVzc2VzOiBhZGRyZXNzLFxyXG5vbm1zZ3M6IGZ1bmN0aW9uKG1zZ3MpIHtcclxuICBsb2cuaW5mbyh7XHJcbiAgICBwYWdlOiAnY2hhdHJvb20nLFxyXG4gICAgb3ByOiAnaW5pdGlhbGl6ZSBzZGsgaW5zdGFuY2UnLFxyXG4gICAgaW5mbzogbXNnc1xyXG4gIH0pXHJcbi8vICAgICAgICAgIGNvbnNvbGUubG9nKCfmlLbliLDogYrlpKnlrqTkv6Hmga8nLCBtc2dzKVxyXG5wdXNoTXNnKG1zZ3MubWFwKG1zZyA9PiB7XHJcbiAgaWYgKG1zZy50eXBlID09PSAnbm90aWZpY2F0aW9uJykge1xyXG4gICAgZ2V0Q291bnRzTnVtKGlkLCBqZlRva2VuKVxyXG4gICAgICAgICAgICAgIC8vIOi/m+WFpeiBiuWkqeWupOS/oeaBr1xyXG4gICAgICAgICAgICAgIGNvbnN0IHRpcCA9IFIuY29uZChbXHJcbiAgICAgICAgICAgICAgICBbUi5lcXVhbHMoJ21lbWJlckVudGVyJyksIFIuYWx3YXlzKCfliqDlhaXogYrlpKnlrqQnKV0sXHJcbiAgICAgICAgICAgICAgICBbUi5lcXVhbHMoJ21lbWJlckV4aXQnKSwgUi5hbHdheXMoJ+mAgOWHuuiBiuWkqeWupCcpXVxyXG4gICAgICAgICAgICAgICAgXSkobXNnLmF0dGFjaC50eXBlKVxyXG4gICAgICAgICAgICAgICAgY29uc3QgdGlwTXNnID0gYCR7bXNnLmF0dGFjaC5mcm9tTmlja30gJHt0aXB9YFxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgICAgLi4ubXNnLFxyXG4gICAgICAgICAgICAgICAgICB0eXBlOiAnbm90aWZpY2F0aW9uJyxcclxuICAgICAgICAgICAgICAgICAgdGV4dDogdGlwTXNnLFxyXG4gICAgICAgICAgICAgICAgICBmcm9tQXZhdGFyOiBhdmF0YXJVcmwsXHJcbiAgICAgICAgICAgICAgICAgIG5vd1RpbWU6IG5ldyBEYXRlKERhdGUucGFyc2UobmV3IERhdGUoKSkgKyAyODgwMDAwMCkudG9JU09TdHJpbmcoKS5zcGxpdCgnVCcpWzBdICsgJyAnICsgbmV3IERhdGUoKS50b1RpbWVTdHJpbmcoKS5zdWJzdHIoMCwgOClcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG1zZ1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSkpXHJcbn0sXHJcbmFzeW5jIG9uY29ubmVjdCgpIHtcclxuICBsb2cuaW5mbyh7XHJcbiAgICBwYWdlOiAnY2hhdHJvb20nLFxyXG4gICAgb3ByOiAnaW5pdGlhbGl6ZSBzZGsgaW5zdGFuY2UnLFxyXG4gICAgaW5mbzogJ1tOSU0gQ0hBVFJPT01dIGNvbm5lY3RlZCdcclxuICB9KVxyXG4gIGlmICghaGFzTXNncykge1xyXG4gICAgd2VweS5zaG93TG9hZGluZygpXHJcbiAgICAgICAgICAgIC8vIOaLieWPluacgOi/kSAxMDAg5p2h5L+h5oGvXHJcbiAgICAgICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGNoYXRyb29tLmdldEhpc3RvcnlNc2dzKHtcclxuICAgICAgICAgICAgICBsaW1pdDogMTAwXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIGNvbnN0IG1zZ3MgPSByZXMubXNncy5maWx0ZXIobXNnID0+IG1zZy50eXBlICE9PSAnbm90aWZpY2F0aW9uJyAmJiBtc2cudHlwZSAhPT0gJ3RpcCcpLnJldmVyc2UoKVxyXG4gICAgICAgICAgICAvLyDliLfmlrDmtojmga9cclxuICAgICAgICAgICAgcHVzaE1zZyhtc2dzIHx8IFtdKVxyXG4gICAgICAgICAgICBhcHBseSgpXHJcbiAgICAgICAgICAgIHdlcHkuaGlkZUxvYWRpbmcoKVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxudGhpcy5jaGF0cm9vbSA9IGNoYXRyb29tXHJcbn0gY2F0Y2ggKGUpIHtcclxuICBsb2cuZXJyb3Ioe1xyXG4gICAgcGFnZTogJ2NoYXRyb29tJyxcclxuICAgIG9wcjogJ2dldEluc3RhbmNlJyxcclxuICAgIGluZm86IGVcclxuICB9KVxyXG59XHJcbn1cclxub25TaGFyZUFwcE1lc3NhZ2UgPSBmdW5jdGlvbiAocmVzKSB7XHJcbiAgcmV0dXJuIHtcclxuICAgIHRpdGxlOiB0aGlzLnJvb21EYXRhLm5hbWVcclxuICB9XHJcbn1cclxuYXN5bmMgb25TaG93KCkge1xyXG4gIHRoaXMuaXNMSU1JVCA9IGZhbHNlXHJcbiAgdGhpcy5zZW5kZWQgPSBmYWxzZVxyXG4gIHRoaXMuY3VycmVudE5hdiA9IDBcclxufVxyXG59XHJcbiJdfQ==