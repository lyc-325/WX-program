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
      vipUserList: [],
      adminUserList: []
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
        //VIP 显示
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
        var adminNick = this.adminUserList.map(function (item) {
          return item.nick;
        });
        var isAdmin = function isAdmin(msg) {
          for (var i = adminNick.length - 1; i >= 0; i--) {
            if (adminNick[i] === msg.fromNick) {
              return msg.fromNick;
            }
          }
        };
        _ramda2.default.filter(isAdmin)(msgs).map(function (item) {
          return item.is_admin = true;
        });
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
              is_vip: msg.is_vip,
              is_admin: msg.is_admin
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
        var adminNick = this.adminUserList.map(function (item) {
          return item.nick;
        });
        var isAdmin = function isAdmin(msg) {
          for (var i = adminNick.length - 1; i >= 0; i--) {
            if (adminNick[i] === msg.fromNick) {
              return msg.fromNick;
            }
          }
        };
        _ramda2.default.filter(isAdmin)(msgs).map(function (item) {
          return item.is_admin = true;
        });
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
              is_vip: msg.is_vip,
              is_admin: msg.is_admin
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
        var id, roomid, creator, pushMsg, getCountsNum, apply, hasMsgs, _user, nimToken, accid, avatarUrl, jfToken, roomInfo, data, accidArr, isVip, vipUserList, isAdmin, adminUserList, islimit, isUser, userLimitArr, roomId, address, chatroom;

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

                console.log(data, 54637675467);
                accidArr = data.map(function (item) {
                  return item.accid;
                });

                this.type = data[accidArr.indexOf(accid)].type;
                //聊天VIP显示

                isVip = function isVip(data) {
                  return data.is_vip === true;
                };

                vipUserList = _ramda2.default.filter(isVip)(data);

                this.vipUserList = vipUserList;

                isAdmin = function isAdmin(data) {
                  return data.type === 'MANAGER';
                };

                adminUserList = _ramda2.default.filter(isAdmin)(data);

                this.adminUserList = adminUserList;

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
                _context8.next = 37;
                return _nim2.default.getChatroomAddresses(accid, roomId);

              case 37:
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
                _context8.next = 45;
                break;

              case 42:
                _context8.prev = 42;
                _context8.t0 = _context8['catch'](8);

                log.error({
                  page: 'chatroom',
                  opr: 'getInstance',
                  info: _context8.t0
                });

              case 45:
              case 'end':
                return _context8.stop();
            }
          }
        }, _callee8, this, [[8, 42]]);
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoYXRyb29tLmpzIl0sIm5hbWVzIjpbImxvZyIsImNoYXRyb29tQXBpIiwiQ2hhdHJvb20iLCJ1c2VyIiwic3RhdGUiLCJjb21tb24iLCJuaW0iLCJtc2dzIiwiY2hhdHJvb20iLCJyb29tSWQiLCJpbnRvVmlldyIsImxhc3QiLCJzY3JvbGx0b3BlciIsImlkQ2xpZW50IiwicmVmcmVzaE1zZ3MiLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiZGF0YSIsIm5hdnMiLCJjdXJyZW50TmF2IiwibnVtTGlzdCIsImlzTElNSVQiLCJzZW5kZWQiLCJ0ZXh0Iiwicm9vbURhdGEiLCJuYW1lIiwiaW5kaWNhdG9yRG90cyIsImF1dG9wbGF5IiwiaW50ZXJ2YWwiLCJkdXJhdGlvbiIsInNob3ciLCJzaG93ZW0iLCJlbW9qaSIsImRlZmF1bHQiLCJFbW9qaSIsImVtb2ppT2JqIiwiRW1vamlPYmoiLCJub3dUaW1lIiwibm93UGVvcGxlcyIsInNlYXJjaGlucHV0Iiwic2VuZEZvY3VzIiwidXNlckxpbWl0QXJyIiwidmlwVXNlckxpc3QiLCJhZG1pblVzZXJMaXN0IiwibWV0aG9kcyIsInNjcm9sbCIsImUiLCJkZXRhaWwiLCJzY3JvbGxUb3AiLCJzY3JvbGxIZWlnaHQiLCJsZW5ndGgiLCJnZXRDb3VudHNOdW0iLCJpZCIsImpmVG9rZW4iLCJnZXRPbmVCeUlkIiwib25saW5ldXNlcmNvdW50IiwiJGFwcGx5IiwiaGFuZGxlTmFtZSIsIml0ZW0iLCJ0eXBlIiwiYmFuSWQiLCJtYXAiLCJpdGVtQWNjaWQiLCJmcm9tIiwiZ2V0SXRlbUlkIiwibmF2aWdhdGVUbyIsInVybCIsImhhbmRsZU5hbWVJZCIsIml0ZW1pZCIsImdldEZvY3VzIiwic2V0RGF0YSIsIm9wZW5FbW9qaSIsImltZ1ByZXZpZXciLCJpdGVtcyIsImltZ1VybCIsImlzSW1nIiwibXNnIiwiaW1nQXJyIiwiZmlsdGVyIiwiaW1nVXJsQXJyIiwiZmlsZSIsInByZXZpZXdJbWFnZSIsImN1cnJlbnQiLCJ1cmxzIiwic3VjY2VzcyIsInJlcyIsImNvbnNvbGUiLCJzZW5kRW1vamkiLCJldmVudCIsInRoYXQiLCJ0YXJnZXQiLCJkYXRhc2V0IiwibXNnbGVuIiwic3RyIiwic3RhcnQiLCJsYXN0SW5kZXhPZiIsImVuZCIsImxlbiIsInNsaWNlIiwicHVzaE1zZyIsImJpbmQiLCJ0cmltIiwic2VuZFRleHQiLCJlcnJvciIsInBhZ2UiLCJvcHIiLCJpbmZvIiwiY2hhbmdlTmF2IiwiY3VycmVudFRhcmdldCIsImluZGV4IiwiY2hvb3NlSW1hZ2UiLCJjb3VudCIsInByZXZpZXdGaWxlIiwid3hGaWxlUGF0aCIsInRlbXBGaWxlUGF0aHMiLCJzZW5kRmlsZSIsInNlbmQiLCJwdXNoTXNnVGV4dCIsInNldFRleHQiLCJ2YWx1ZSIsIkFycmF5IiwiaXNBcnJheSIsInZpcE5pY2siLCJuaWNrIiwiaXNWaXAiLCJpIiwiZnJvbU5pY2siLCJhZG1pbk5pY2siLCJpc0FkbWluIiwiaXNfYWRtaW4iLCJpc192aXAiLCJlbWppIiwicGFyc2VFbW9qaSIsInJlcGxhY2UiLCJjaGF0cm9vbUlkIiwiZmxvdyIsImZyb21BdmF0YXIiLCJmcm9tQ2xpZW50VHlwZSIsImZyb21DdXN0b20iLCJyZXNlbmQiLCJzdGF0dXMiLCJ0aW1lIiwidXNlclVwZGF0ZVRpbWUiLCJtZXJnZWQiLCJvblNoYXJlQXBwTWVzc2FnZSIsInRpdGxlIiwib3B0aW9ucyIsInJvb21pZCIsImNyZWF0b3IiLCJhcHBseSIsImhhc01zZ3MiLCJuaW1Ub2tlbiIsImFjY2lkIiwiYXZhdGFyVXJsIiwiYWRkVG9Sb29tIiwicm9vbUluZm8iLCJnZXRVc2VyTGlzdCIsImFjY2lkQXJyIiwiaW5kZXhPZiIsImlzbGltaXQiLCJpc1VzZXIiLCJ3eCIsInNob3dUb2FzdCIsImljb24iLCJnZXRDaGF0cm9vbUFkZHJlc3NlcyIsImFkZHJlc3MiLCJnZXRJbnN0YW5jZSIsImFjY291bnQiLCJ0b2tlbiIsImNoYXRyb29tQWRkcmVzc2VzIiwib25tc2dzIiwidGlwIiwiY29uZCIsImVxdWFscyIsImFsd2F5cyIsImF0dGFjaCIsInRpcE1zZyIsIkRhdGUiLCJwYXJzZSIsInRvSVNPU3RyaW5nIiwic3BsaXQiLCJ0b1RpbWVTdHJpbmciLCJzdWJzdHIiLCJvbmNvbm5lY3QiLCJzaG93TG9hZGluZyIsImdldEhpc3RvcnlNc2dzIiwibGltaXQiLCJyZXZlcnNlIiwiaGlkZUxvYWRpbmciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNFOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7SUFBWUEsRzs7QUFDWjs7QUFHQTs7SUFBWUMsVzs7QUFDWjs7Ozs7O0lBb0JxQkMsUSxXQWpCcEIsd0JBQVE7QUFDUEMsUUFBTTtBQUFBLFdBQVNDLE1BQU1DLE1BQU4sQ0FBYUYsSUFBdEI7QUFBQSxHQURDO0FBRVBHLE9BQUs7QUFBQSxXQUFTRixNQUFNQyxNQUFOLENBQWFDLEdBQXRCO0FBQUEsR0FGRTtBQUdQQyxRQUFNLGNBQVVILEtBQVYsRUFBaUI7QUFDckIsV0FBT0EsTUFBTUksUUFBTixDQUFlRCxJQUFmLENBQW9CLEtBQUtFLE1BQXpCLEtBQW9DLEVBQTNDO0FBQ0QsR0FMTTtBQU1QQyxZQUFVLGtCQUFTTixLQUFULEVBQWdCO0FBQ3hCLFFBQU1HLE9BQU9ILE1BQU1JLFFBQU4sQ0FBZUQsSUFBZixDQUFvQixLQUFLRSxNQUF6QixLQUFvQyxFQUFqRDtBQUNBLFFBQU1FLE9BQU8sZ0JBQUVBLElBQUYsQ0FBT0osSUFBUCxDQUFiO0FBQ0EsUUFBSSxLQUFLSyxXQUFULEVBQXNCO0FBQ3BCLGFBQU8sRUFBUDtBQUNEO0FBQ0QsV0FBT0QsT0FBT0EsS0FBS0UsUUFBWixHQUF1QixFQUE5QjtBQUNEO0FBYk0sQ0FBUixFQWNFO0FBQ0RDO0FBREMsQ0FkRixDOzs7Ozs7Ozs7Ozs7OztnTkFrQkNDLE0sR0FBUztBQUNQQyw4QkFBd0I7QUFEakIsSyxRQUdUQyxJLEdBQU87QUFD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b20gJ3dlcHknXHJcbiAgaW1wb3J0IFIgZnJvbSAnLi4vbGlicy9yYW1kYSdcclxuICBpbXBvcnQgQ2hhdHJvb21TREsgZnJvbSAnLi4vdXRpbHMvY2hhdHJvb20nXHJcbiAgaW1wb3J0IE5JTSBmcm9tICcuLi91dGlscy9uaW0nXHJcbiAgaW1wb3J0IEZhY2VJTSBmcm9tICcuLi91dGlscy9XZWJJTSdcclxuICBpbXBvcnQgKiBhcyBsb2cgZnJvbSAnLi4vdXRpbHMvbG9nJ1xyXG4gIGltcG9ydCB7XHJcbiAgICByZWZyZXNoTXNnc1xyXG4gIH0gZnJvbSAnLi4vYWN0aW9ucy9jaGF0cm9vbSdcclxuICBpbXBvcnQgKiBhcyBjaGF0cm9vbUFwaSBmcm9tICcuLi9hcGlzL2NoYXRyb29tJ1xyXG4gIGltcG9ydCB7XHJcbiAgICBjb25uZWN0XHJcbiAgfSBmcm9tICd3ZXB5LXJlZHV4J1xyXG4gIEBjb25uZWN0KHtcclxuICAgIHVzZXI6IHN0YXRlID0+IHN0YXRlLmNvbW1vbi51c2VyLFxyXG4gICAgbmltOiBzdGF0ZSA9PiBzdGF0ZS5jb21tb24ubmltLFxyXG4gICAgbXNnczogZnVuY3Rpb24gKHN0YXRlKSB7XHJcbiAgICAgIHJldHVybiBzdGF0ZS5jaGF0cm9vbS5tc2dzW3RoaXMucm9vbUlkXSB8fCBbXVxyXG4gICAgfSxcclxuICAgIGludG9WaWV3OiBmdW5jdGlvbihzdGF0ZSkge1xyXG4gICAgICBjb25zdCBtc2dzID0gc3RhdGUuY2hhdHJvb20ubXNnc1t0aGlzLnJvb21JZF0gfHwgW11cclxuICAgICAgY29uc3QgbGFzdCA9IFIubGFzdChtc2dzKVxyXG4gICAgICBpZiAodGhpcy5zY3JvbGx0b3Blcikge1xyXG4gICAgICAgIHJldHVybiAnJ1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiBsYXN0ID8gbGFzdC5pZENsaWVudCA6ICcnXHJcbiAgICB9XHJcbiAgfSwge1xyXG4gICAgcmVmcmVzaE1zZ3NcclxuICB9KVxyXG4gIGV4cG9ydCBkZWZhdWx0IGNsYXNzIENoYXRyb29tIGV4dGVuZHMgd2VweS5wYWdlIHtcclxuICAgIGNvbmZpZyA9IHtcclxuICAgICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+iBiuWkqeWupCdcclxuICAgIH1cclxuICAgIGRhdGEgPSB7XHJcbiAgICAgIG5hdnM6IFsn6IGK5aSpJywgJ+ivpuaDhSddLFxyXG4gICAgICBjdXJyZW50TmF2OiAwLFxyXG4gICAgICBudW1MaXN0OiBbXSxcclxuICAgICAgaXNMSU1JVDogZmFsc2UsXHJcbiAgICAgIGNoYXRyb29tOiBudWxsLFxyXG4gICAgICByb29tSWQ6IG51bGwsXHJcbiAgICAgIHNlbmRlZDogZmFsc2UsXHJcbiAgICAgIHRleHQ6ICcnLFxyXG4gICAgICByb29tRGF0YToge1xyXG4gICAgICAgIG5hbWU6ICfliqDovb3kuK0uLi4nXHJcbiAgICAgIH0sXHJcbiAgICAgIGluZGljYXRvckRvdHM6IHRydWUsXHJcbiAgICAgIGF1dG9wbGF5OiBmYWxzZSxcclxuICAgICAgaW50ZXJ2YWw6IDUwMDAsXHJcbiAgICAgIGR1cmF0aW9uOiAxMDAwLFxyXG4gICAgICBzaG93OiAnZW1vamlfbGlzdCcsXHJcbiAgICAgIHNob3dlbTogJ29wZXJhdGlvbicsXHJcbiAgICAgIGVtb2ppOiBGYWNlSU0uZGVmYXVsdC5FbW9qaSxcclxuICAgICAgZW1vamlPYmo6IEZhY2VJTS5kZWZhdWx0LkVtb2ppT2JqLFxyXG4gICAgICBub3dUaW1lOiAnJyxcclxuICAgICAgbm93UGVvcGxlczogMCxcclxuICAgICAgc2VhcmNoaW5wdXQ6JycsXHJcbiAgICAgIHNlbmRGb2N1czogZmFsc2UsXHJcbiAgICAgIHVzZXJMaW1pdEFycjpbXSxcclxuICAgICAgdmlwVXNlckxpc3Q6W10sXHJcbiAgICAgIGFkbWluVXNlckxpc3Q6W10sXHJcbiAgICB9XHJcbiAgICBtZXRob2RzID0ge1xyXG4gICAgICBhc3luYyBzY3JvbGwgKGUpIHtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhlLmRldGFpbC5zY3JvbGxIZWlnaHQp5Yik5pat5piv5ZCm5Zyo5p+l55yL5Y6G5Y+y6K6w5b2V5LiN5rua5YqoXHJcbiAgICAgICAgaWYgKGUuZGV0YWlsLnNjcm9sbFRvcCA8IGUuZGV0YWlsLnNjcm9sbEhlaWdodCowLjUgfHwgZS5kZXRhaWwuc2Nyb2xsVG9wIDwgMTAwKSB7XHJcbiAgICAgICAgICAvLyBjb25zb2xlLmxvZyhlLmRldGFpbC5kZWx0YVgpXHJcbiAgICAgICAgICB0aGlzLnNjcm9sbHRvcGVyID0gMVxyXG4gICAgICAgIH1lbHNlIHtcclxuICAgICAgICAgIHRoaXMuc2Nyb2xsdG9wZXIgPSAwXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKGUuZGV0YWlsLnNjcm9sbFRvcCA8IDEwICYmIHRoaXMubXNncy5sZW5ndGggPCAxNTApIHtcclxuICAgICAgICB9XHJcbiAgICAgIH0sXHJcbiAgICAgIGFzeW5jIGdldENvdW50c051bShpZCwgamZUb2tlbikge1xyXG4gICAgICAgIGNvbnN0IHtvbmxpbmV1c2VyY291bnR9ID0gYXdhaXQgY2hhdHJvb21BcGkuZ2V0T25lQnlJZChpZCwgamZUb2tlbilcclxuICAgICAgICB0aGlzLm5vd1Blb3BsZXMgPSBvbmxpbmV1c2VyY291bnRcclxuICAgICAgICB0aGlzLiRhcHBseSgpXHJcbiAgICAgIH0sXHJcbiAgICAgIGFzeW5jIGhhbmRsZU5hbWUgKGl0ZW0pIHtcclxuICAgICAgICBjb25zdCB0eXBlID0gdGhpcy50eXBlXHJcbiAgICAgICAgY29uc3QgYmFuSWQgPSB0aGlzLnVzZXJMaW1pdEFyci5tYXAoKGl0ZW0pPT5pdGVtLmlkKVxyXG4gICAgICAgIGxldCByb29tSWQgPSB0aGlzLnJvb21JZFxyXG4gICAgICAgIGNvbnN0IGl0ZW1BY2NpZCA9IGl0ZW0uZnJvbVxyXG4gICAgICAgIGNvbnN0IHtpZH0gPSBhd2FpdCBjaGF0cm9vbUFwaS5nZXRJdGVtSWQoaXRlbUFjY2lkKVxyXG4gICAgICAgIHdlcHkubmF2aWdhdGVUbyh7XHJcbiAgICAgICAgICB1cmw6IGB1c2VySW5mbz9pZD0ke2lkfSZyb29tSWQ9JHtyb29tSWR9JmJhbklkPSR7YmFuSWR9JnR5cGU9JHt0eXBlfWBcclxuICAgICAgICB9KVxyXG4gICAgICB9LFxyXG4gICAgICBoYW5kbGVOYW1lSWQgKGl0ZW0pIHtcclxuICAgICAgICBjb25zdCB0eXBlID0gdGhpcy50eXBlXHJcbiAgICAgICAgY29uc3QgYmFuSWQgPSB0aGlzLnVzZXJMaW1pdEFyci5tYXAoKGl0ZW0pPT5pdGVtLmlkKVxyXG4gICAgICAgIGNvbnN0IGl0ZW1pZCA9IGl0ZW0uaWRcclxuICAgICAgICBsZXQgcm9vbUlkID0gdGhpcy5yb29tSWRcclxuICAgICAgICB3ZXB5Lm5hdmlnYXRlVG8oe1xyXG4gICAgICAgICAgdXJsOiBgdXNlckluZm8/aWQ9JHtpdGVtaWR9JnJvb21JZD0ke3Jvb21JZH0mYmFuSWQ9JHtiYW5JZH0mdHlwZT0ke3R5cGV9YFxyXG4gICAgICAgIH0pXHJcbiAgICAgIH0sXHJcbiAgICAgIGdldEZvY3VzICgpIHtcclxuICAgICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgICAgc2VuZEZvY3VzIDogZmFsc2VcclxuICAgICAgICB9KVxyXG4gICAgICB9LFxyXG4gICAgICBvcGVuRW1vamkgKGUpIHtcclxuICAgICAgICBpZiAodGhpcy5zaG93ID09PSAnc2hvd0Vtb2ppJykge1xyXG4gICAgICAgICAgdGhpcy5zaG93ID0gJ2Vtb2ppX2xpc3QnXHJcbiAgICAgICAgICB0aGlzLnNob3dlbSA9ICdvcGVyYXRpb24nXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHRoaXMuc2hvdyA9ICdzaG93RW1vamknXHJcbiAgICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy4kYXBwbHkoKVxyXG4gICAgICB9LFxyXG4gICAgICBpbWdQcmV2aWV3IChpdGVtcywgbXNncykge1xyXG4gICAgICAgIGNvbnN0IGltZ1VybCA9IGl0ZW1zXHJcbiAgICAgICAgY29uc3QgaXNJbWcgPSBtc2cgPT4gbXNnLnR5cGUgPT09ICdpbWFnZSdcclxuICAgICAgICBjb25zdCBpbWdBcnIgPSBSLmZpbHRlcihpc0ltZykobXNncylcclxuICAgICAgICBjb25zdCBpbWdVcmxBcnIgPSBpbWdBcnIubWFwKG1zZyA9PiB7XHJcbiAgICAgICAgICByZXR1cm4gbXNnLmZpbGUudXJsXHJcbiAgICAgICAgfSlcclxuICAgICAgICB3ZXB5LnByZXZpZXdJbWFnZSh7XHJcbiAgICAgICAgICBjdXJyZW50OiBpbWdVcmwsXHJcbiAgICAgICAgICB1cmxzOiBpbWdVcmxBcnIsXHJcbiAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAocmVzKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlcylcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgICB9LFxyXG4gICAgICBhc3luYyBzZW5kRW1vamkgKGV2ZW50KSB7XHJcbiAgICAgICAgdmFyIHRoYXQgPSB0aGlzXHJcbiAgICAgICAgdmFyIGVtb2ppID0gZXZlbnQudGFyZ2V0LmRhdGFzZXQuZW1vamlcclxuICAgICAgICB2YXIgbXNnbGVuID0gdGhhdC5kYXRhLnRleHQubGVuZ3RoIC0gMVxyXG4gICAgICAgIGlmIChlbW9qaSAmJiBlbW9qaSAhPT0gJ1tkZWxdJykge1xyXG4gICAgICAgICAgdmFyIHN0ciA9IHRoYXQuZGF0YS50ZXh0ICsgZW1vamlcclxuICAgICAgICB9IGVsc2UgaWYgKGVtb2ppID09PSAnW2RlbF0nKSB7XHJcbiAgICAgICAgICB2YXIgc3RhcnQgPSB0aGF0LmRhdGEudGV4dC5sYXN0SW5kZXhPZignWycpXHJcbiAgICAgICAgICB2YXIgZW5kID0gdGhhdC5kYXRhLnRleHQubGFzdEluZGV4T2YoJ10nKVxyXG4gICAgICAgICAgdmFyIGxlbiA9IGVuZCAtIHN0YXJ0XHJcbiAgICAgICAgICBpZiAoZW5kICE9PSAtMSAmJiBlbmQgPT09IG1zZ2xlbiAmJiBsZW4gPj0gMyAmJiBsZW4gPD0gNCkge1xyXG4gICAgICAgICAgICBzdHIgPSB0aGF0LmRhdGEudGV4dC5zbGljZSgwLCBzdGFydClcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHN0ciA9IHRoYXQuZGF0YS50ZXh0LnNsaWNlKDAsIG1zZ2xlbilcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy50ZXh0ID0gc3RyXHJcbiAgICAgICAgY29uc3QgcHVzaE1zZyA9IHRoaXMubWV0aG9kcy5wdXNoTXNnLmJpbmQodGhpcylcclxuICAgICAgICB2YXIgdGV4dCA9IFIudHJpbSh0aGlzLnRleHQpXHJcbiAgICAgICAgdGhpcy50ZXh0ID0gJydcclxuICAgICAgICBpZiAodGV4dC5sZW5ndGgpIHtcclxuICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGNvbnN0IG1zZyA9IGF3YWl0IHRoaXMuY2hhdHJvb20uc2VuZFRleHQoe1xyXG4gICAgICAgICAgICAgIHRleHRcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgdGhpcy50ZXh0ID0gJydcclxuICAgICAgICAgICAgcHVzaE1zZyhtc2cpXHJcbiAgICAgICAgICAgIHRoaXMuc2hvdyA9ICdlbW9qaV9saXN0J1xyXG4gICAgICAgICAgICB0aGlzLnNldERhdGEoeyAgXHJcbiAgICAgICAgICAgICAgc2VhcmNoaW5wdXQ6ICcnLCAgXHJcbiAgICAgICAgICAgIH0pICBcclxuICAgICAgICAgICAgdGhpcy4kYXBwbHkoKVxyXG4gICAgICAgICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICBsb2cuZXJyb3Ioe1xyXG4gICAgICAgICAgICAgIHBhZ2U6ICdjaGF0cm9vbScsXHJcbiAgICAgICAgICAgICAgb3ByOiAnc2VuZFRleHQnLFxyXG4gICAgICAgICAgICAgIGluZm86IGVcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH0sXHJcbiAgICAgIGNoYW5nZU5hdiAoZSkge1xyXG4gICAgICAgIHRoaXMuY3VycmVudE5hdiA9IGUuY3VycmVudFRhcmdldC5kYXRhc2V0LmluZGV4XHJcbiAgICAgICAgdGhpcy5zZW5kZWQgPSBmYWxzZVxyXG4gICAgICAgIHRoaXMuJGFwcGx5KClcclxuICAgICAgfSxcclxuICAgICAgYXN5bmMgY2hvb3NlSW1hZ2UoKSB7XHJcbiAgICAgIC8vIOi/m+ihjOWbvueJh+mAieaLqeW5tuS4iuS8oFxyXG4gICAgICBjb25zdCBwdXNoTXNnID0gdGhpcy5tZXRob2RzLnB1c2hNc2cuYmluZCh0aGlzKVxyXG4gICAgICBjb25zdCByZXMgPSBhd2FpdCB3ZXB5LmNob29zZUltYWdlKHtcclxuICAgICAgICBjb3VudDogMVxyXG4gICAgICB9KVxyXG4gICAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IGZpbGUgPSBhd2FpdCB0aGlzLmNoYXRyb29tLnByZXZpZXdGaWxlKHtcclxuICAgICAgICAgIHR5cGU6ICdpbWFnZScsXHJcbiAgICAgICAgICB3eEZpbGVQYXRoOiByZXMudGVtcEZpbGVQYXRoc1swXVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgY29uc3QgbXNnID0gYXdhaXQgdGhpcy5jaGF0cm9vbS5zZW5kRmlsZSh7XHJcbiAgICAgICAgICB0eXBlOiAnaW1hZ2UnLFxyXG4gICAgICAgICAgZmlsZTogZmlsZVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgcHVzaE1zZyhtc2cpXHJcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgbG9nLmVycm9yKHtcclxuICAgICAgICAgIHBhZ2U6ICdjaGF0cm9vbScsXHJcbiAgICAgICAgICBvcHI6ICdzZW5kRmlsZScsXHJcbiAgICAgICAgICBpbmZvOiBlcnJvclxyXG4gICAgICAgIH0pXHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBhc3luYyBzZW5kKGUpIHtcclxuICAgICAgLy8/IHdoeSBiaW5kXHJcbiAgICAgIHRoaXMuc2V0RGF0YSh7ICBcclxuICAgICAgICBzZWFyY2hpbnB1dDogJycsICBcclxuICAgICAgICBzZW5kRm9jdXM6IHRydWUsXHJcbiAgICAgIH0pIFxyXG4gICAgICB0aGlzLnNjcm9sbHRvcGVyID0gMFxyXG4gICAgICBjb25zdCBwdXNoTXNnVGV4dCA9IHRoaXMubWV0aG9kcy5wdXNoTXNnVGV4dC5iaW5kKHRoaXMpXHJcbiAgICAgIGNvbnN0IHRleHQgPSBSLnRyaW0odGhpcy50ZXh0KVxyXG4gICAgICB0aGlzLnRleHQgPSAnJ1xyXG4gICAgICBpZiAodGV4dC5sZW5ndGgpIHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgY29uc3QgbXNnID0gYXdhaXQgdGhpcy5jaGF0cm9vbS5zZW5kVGV4dCh7XHJcbiAgICAgICAgICAgIHRleHRcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgICB0aGlzLnRleHQgPSAnJ1xyXG4gICAgICAgICAgcHVzaE1zZ1RleHQobXNnKVxyXG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICAgIGxvZy5lcnJvcih7XHJcbiAgICAgICAgICAgIHBhZ2U6ICdjaGF0cm9vbScsXHJcbiAgICAgICAgICAgIG9wcjogJ3NlbmRUZXh0JyxcclxuICAgICAgICAgICAgaW5mbzogZVxyXG4gICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBzZXRUZXh0KGUpIHtcclxuICAgICAgdGhpcy50ZXh0ID0gZS5kZXRhaWwudmFsdWVcclxuICAgIH0sXHJcbiAgICBwdXNoTXNnOiBmdW5jdGlvbiAobXNncykge1xyXG4gICAgICBjb25zdCB7IHJlZnJlc2hNc2dzIH0gPSB0aGlzLm1ldGhvZHNcclxuICAgICAgaWYgKCFBcnJheS5pc0FycmF5KG1zZ3MpKSB7XHJcbiAgICAgICAgbXNncyA9IFttc2dzXVxyXG4gICAgICB9XHJcbiAgICAgIC8vVklQIOaYvuekulxyXG4gICAgICBjb25zdCB2aXBOaWNrID0gdGhpcy52aXBVc2VyTGlzdC5tYXAoKGl0ZW0pID0+IGl0ZW0ubmljaylcclxuICAgICAgY29uc3QgaXNWaXAgPSBmdW5jdGlvbihtc2cpe1xyXG4gICAgICAgIGZvciAodmFyIGkgPSB2aXBOaWNrLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XHJcbiAgICAgICAgICBpZiAodmlwTmlja1tpXSA9PT0gbXNnLmZyb21OaWNrKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBtc2cuZnJvbU5pY2tcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgY29uc3QgYWRtaW5OaWNrID0gdGhpcy5hZG1pblVzZXJMaXN0Lm1hcCgoaXRlbSkgPT4gaXRlbS5uaWNrKVxyXG4gICAgICBjb25zdCBpc0FkbWluID0gZnVuY3Rpb24obXNnKXtcclxuICAgICAgICBmb3IgKHZhciBpID0gYWRtaW5OaWNrLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XHJcbiAgICAgICAgICBpZiAoYWRtaW5OaWNrW2ldID09PSBtc2cuZnJvbU5pY2spIHtcclxuICAgICAgICAgICAgcmV0dXJuIG1zZy5mcm9tTmlja1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBSLmZpbHRlcihpc0FkbWluKShtc2dzKS5tYXAoaXRlbSA9PiBpdGVtLmlzX2FkbWluID0gdHJ1ZSlcclxuICAgICAgUi5maWx0ZXIoaXNWaXApKG1zZ3MpLm1hcChpdGVtID0+IGl0ZW0uaXNfdmlwID0gdHJ1ZSlcclxuICAgICAgbXNncyA9IG1zZ3MubWFwKG1zZyA9PiB7XHJcbiAgICAgICAgaWYgKG1zZy50eXBlID09PSAndGV4dCcpIHtcclxuICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIGVtamk6IEZhY2VJTS5kZWZhdWx0LnBhcnNlRW1vamkobXNnLnRleHQucmVwbGFjZSgvXFxuL21nLCAnJykpLFxyXG4gICAgICAgICAgICBjaGF0cm9vbUlkOiBtc2cuY2hhdHJvb21JZCxcclxuICAgICAgICAgICAgZmxvdzogbXNnLmZsb3csXHJcbiAgICAgICAgICAgIGZyb206IG1zZy5mcm9tLFxyXG4gICAgICAgICAgICBmcm9tQXZhdGFyOiBtc2cuZnJvbUF2YXRhcixcclxuICAgICAgICAgICAgZnJvbUNsaWVudFR5cGU6IG1zZy5mcm9tQ2xpZW50VHlwZSxcclxuICAgICAgICAgICAgZnJvbUN1c3RvbTogbXNnLmZyb21DdXN0b20sXHJcbiAgICAgICAgICAgIGZyb21OaWNrOiBtc2cuZnJvbU5pY2ssXHJcbiAgICAgICAgICAgIGlkQ2xpZW50OiBtc2cuaWRDbGllbnQsXHJcbiAgICAgICAgICAgIHJlc2VuZDogbXNnLnJlc2VuZCxcclxuICAgICAgICAgICAgc3RhdHVzOiBtc2cuc3RhdHVzLFxyXG4gICAgICAgICAgICB0ZXh0OiBtc2cudGV4dCxcclxuICAgICAgICAgICAgdGltZTogbXNnLnRpbWUsXHJcbiAgICAgICAgICAgIHR5cGU6IG1zZy50eXBlLFxyXG4gICAgICAgICAgICB1c2VyVXBkYXRlVGltZTogbXNnLnVzZXJVcGRhdGVUaW1lLFxyXG4gICAgICAgICAgICBpc192aXA6IG1zZy5pc192aXAsXHJcbiAgICAgICAgICAgIGlzX2FkbWluOiBtc2cuaXNfYWRtaW4sXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHJldHVybiBtc2dcclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcblxyXG4gICAgICBsZXQgcm9vbUlkID0gdGhpcy5yb29tSWRcclxuICAgICAgaWYgKG1zZ3MubGVuZ3RoID4gMCkge1xyXG4gICAgICAgIHJvb21JZCA9IG1zZ3NbMF0uY2hhdHJvb21JZFxyXG4gICAgICB9XHJcbiAgICAgIGNvbnN0IG1lcmdlZCA9IFsuLi50aGlzLm1zZ3MsIC4uLm1zZ3NdXHJcbiAgICAgIHJlZnJlc2hNc2dzKHJvb21JZCwgbWVyZ2VkKVxyXG4gICAgICB0aGlzLnNlbmRlZCA9IHRydWVcclxuICAgICAgdGhpcy4kYXBwbHkoKVxyXG4gICAgfSxcclxuICAgIHB1c2hNc2dUZXh0OiBmdW5jdGlvbiAobXNncykge1xyXG4gICAgICBjb25zdCB7IHJlZnJlc2hNc2dzIH0gPSB0aGlzLm1ldGhvZHNcclxuICAgICAgaWYgKCFBcnJheS5pc0FycmF5KG1zZ3MpKSB7XHJcbiAgICAgICAgbXNncyA9IFttc2dzXVxyXG4gICAgICB9XHJcbiAgICAgIGNvbnN0IHZpcE5pY2sgPSB0aGlzLnZpcFVzZXJMaXN0Lm1hcCgoaXRlbSkgPT4gaXRlbS5uaWNrKVxyXG4gICAgICBjb25zdCBpc1ZpcCA9IGZ1bmN0aW9uKG1zZyl7XHJcbiAgICAgICAgZm9yICh2YXIgaSA9IHZpcE5pY2subGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcclxuICAgICAgICAgIGlmICh2aXBOaWNrW2ldID09PSBtc2cuZnJvbU5pY2spIHtcclxuICAgICAgICAgICAgcmV0dXJuIG1zZy5mcm9tTmlja1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBjb25zdCBhZG1pbk5pY2sgPSB0aGlzLmFkbWluVXNlckxpc3QubWFwKChpdGVtKSA9PiBpdGVtLm5pY2spXHJcbiAgICAgIGNvbnN0IGlzQWRtaW4gPSBmdW5jdGlvbihtc2cpe1xyXG4gICAgICAgIGZvciAodmFyIGkgPSBhZG1pbk5pY2subGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcclxuICAgICAgICAgIGlmIChhZG1pbk5pY2tbaV0gPT09IG1zZy5mcm9tTmljaykge1xyXG4gICAgICAgICAgICByZXR1cm4gbXNnLmZyb21OaWNrXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIFIuZmlsdGVyKGlzQWRtaW4pKG1zZ3MpLm1hcChpdGVtID0+IGl0ZW0uaXNfYWRtaW4gPSB0cnVlKVxyXG4gICAgICBSLmZpbHRlcihpc1ZpcCkobXNncykubWFwKGl0ZW0gPT4gaXRlbS5pc192aXAgPSB0cnVlKVxyXG4gICAgICBtc2dzID0gbXNncy5tYXAobXNnID0+IHtcclxuICAgICAgICBpZiAobXNnLnR5cGUgPT09ICd0ZXh0Jykge1xyXG4gICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgZW1qaTogRmFjZUlNLmRlZmF1bHQucGFyc2VFbW9qaShtc2cudGV4dC5yZXBsYWNlKC9cXG4vbWcsICcnKSksXHJcbiAgICAgICAgICAgIGNoYXRyb29tSWQ6IG1zZy5jaGF0cm9vbUlkLFxyXG4gICAgICAgICAgICBmbG93OiBtc2cuZmxvdyxcclxuICAgICAgICAgICAgZnJvbTogbXNnLmZyb20sXHJcbiAgICAgICAgICAgIGZyb21BdmF0YXI6IG1zZy5mcm9tQXZhdGFyLFxyXG4gICAgICAgICAgICBmcm9tQ2xpZW50VHlwZTogbXNnLmZyb21DbGllbnRUeXBlLFxyXG4gICAgICAgICAgICBmcm9tQ3VzdG9tOiBtc2cuZnJvbUN1c3RvbSxcclxuICAgICAgICAgICAgZnJvbU5pY2s6IG1zZy5mcm9tTmljayxcclxuICAgICAgICAgICAgaWRDbGllbnQ6IG1zZy5pZENsaWVudCxcclxuICAgICAgICAgICAgcmVzZW5kOiBtc2cucmVzZW5kLFxyXG4gICAgICAgICAgICBzdGF0dXM6IG1zZy5zdGF0dXMsXHJcbiAgICAgICAgICAgIHRleHQ6IG1zZy50ZXh0LFxyXG4gICAgICAgICAgICB0aW1lOiBtc2cudGltZSxcclxuICAgICAgICAgICAgdHlwZTogbXNnLnR5cGUsXHJcbiAgICAgICAgICAgIHVzZXJVcGRhdGVUaW1lOiBtc2cudXNlclVwZGF0ZVRpbWUsXHJcbiAgICAgICAgICAgIGlzX3ZpcDogbXNnLmlzX3ZpcCxcclxuICAgICAgICAgICAgaXNfYWRtaW46IG1zZy5pc19hZG1pbixcclxuICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgcmV0dXJuIG1zZ1xyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuICAgICAgbGV0IHJvb21JZCA9IHRoaXMucm9vbUlkXHJcblxyXG4gICAgICBpZiAobXNncy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgcm9vbUlkID0gbXNnc1swXS5jaGF0cm9vbUlkXHJcbiAgICAgIH1cclxuICAgICAgY29uc3QgbWVyZ2VkID0gWy4uLnRoaXMubXNncywgLi4ubXNnc11cclxuICAgICAgcmVmcmVzaE1zZ3Mocm9vbUlkLCBtZXJnZWQpXHJcbiAgICAgIHRoaXMuc2VuZGVkID0gdHJ1ZVxyXG4gICAgICB0aGlzLiRhcHBseSgpXHJcbiAgICB9LFxyXG4gIH1cclxuICBhc3luYyBvbkxvYWQob3B0aW9ucykge1xyXG4gICAgY29uc3QgeyBpZCB9ID0gb3B0aW9uc1xyXG4gICAgY29uc3Qge3Jvb21pZH0gPSBvcHRpb25zXHJcbiAgICBjb25zdCB7Y3JlYXRvcn0gPSBvcHRpb25zXHJcbiAgICB0aGlzLnJvb21JZCA9IHJvb21pZFxyXG4gICAgY29uc3QgcHVzaE1zZyA9IHRoaXMubWV0aG9kcy5wdXNoTXNnLmJpbmQodGhpcylcclxuICAgIGNvbnN0IGdldENvdW50c051bSA9IHRoaXMubWV0aG9kcy5nZXRDb3VudHNOdW0uYmluZCh0aGlzKVxyXG4gICAgY29uc3QgYXBwbHkgPSB0aGlzLiRhcHBseS5iaW5kKHRoaXMpXHJcbiAgICBjb25zdCBoYXNNc2dzID0gdGhpcy5tc2dzLmxlbmd0aCA+IDBcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHsgbmltVG9rZW4sIGFjY2lkLCBhdmF0YXJVcmwsIGpmVG9rZW4gfSA9IHRoaXMudXNlclxyXG4vLyAgICAgIGlmIChjcmVhdG9yICE9PSBhY2NpZCkge1xyXG4vLyAgICAgICAgYXdhaXQgY2hhdHJvb21BcGkuYWRkVG9Sb29tKHJvb21pZCwgY3JlYXRvciwgYWNjaWQpXHJcbi8vICAgICAgfVxyXG5hd2FpdCBjaGF0cm9vbUFwaS5hZGRUb1Jvb20ocm9vbWlkLCBjcmVhdG9yLCBhY2NpZClcclxuY29uc3Qgcm9vbUluZm8gPSBhd2FpdCBjaGF0cm9vbUFwaS5nZXRPbmVCeUlkKGlkLCBqZlRva2VuKVxyXG5jb25zdCBkYXRhID0gYXdhaXQgY2hhdHJvb21BcGkuZ2V0VXNlckxpc3Qocm9vbWlkLCBqZlRva2VuKVxyXG5jb25zb2xlLmxvZyhkYXRhLDU0NjM3Njc1NDY3KVxyXG5jb25zdCBhY2NpZEFyciA9IGRhdGEubWFwKChpdGVtKT0+aXRlbS5hY2NpZClcclxudGhpcy50eXBlID0gZGF0YVthY2NpZEFyci5pbmRleE9mKGFjY2lkKV0udHlwZVxyXG4vL+iBiuWkqVZJUOaYvuekulxyXG5cclxuY29uc3QgaXNWaXAgPSBkYXRhID0+IGRhdGEuaXNfdmlwID09PSB0cnVlXHJcbmNvbnN0IHZpcFVzZXJMaXN0ID0gUi5maWx0ZXIoaXNWaXApKGRhdGEpXHJcbnRoaXMudmlwVXNlckxpc3QgPSB2aXBVc2VyTGlzdFxyXG5cclxuY29uc3QgaXNBZG1pbiA9IGRhdGEgPT4gZGF0YS50eXBlID09PSAnTUFOQUdFUidcclxuY29uc3QgYWRtaW5Vc2VyTGlzdCA9IFIuZmlsdGVyKGlzQWRtaW4pKGRhdGEpXHJcbnRoaXMuYWRtaW5Vc2VyTGlzdCA9IGFkbWluVXNlckxpc3RcclxuXHJcbi8v56aB6KiAXHJcbmNvbnN0IGlzbGltaXQgPSBkYXRhID0+IGRhdGEudHlwZSA9PT0gJ0xJTUlURUQnXHJcbmNvbnN0IGlzVXNlciA9IGRhdGEgPT4gZGF0YS5uYW1lICYmIGRhdGEubmFtZSAhPT0gbnVsbFxyXG50aGlzLm51bUxpc3QgPSBSLmZpbHRlcihpc1VzZXIpKGRhdGEpXHJcbmNvbnN0IHVzZXJMaW1pdEFyciA9IFIuZmlsdGVyKGlzbGltaXQpKHRoaXMubnVtTGlzdClcclxudGhpcy51c2VyTGltaXRBcnIgPSB1c2VyTGltaXRBcnJcclxuaWYgKHVzZXJMaW1pdEFyci5sZW5ndGggPiAwKSB7XHJcbiAgaWYgKHVzZXJMaW1pdEFyclswXS5hY2NpZCA9PT0gYWNjaWQpIHtcclxuICAgIHRoaXMuaXNMSU1JVCA9IHRydWVcclxuICAgIHd4LnNob3dUb2FzdCh7XHJcbiAgICAgIHRpdGxlOiAn6KKr56aB6KiA77yM6K+36IGU57O7566h55CG5ZGY6Kej6ZmkJyxcclxuICAgICAgaWNvbjogJ3N1Y2Nlc3MnLFxyXG4gICAgICBkdXJhdGlvbjogMjAwMFxyXG4gICAgfSlcclxuICB9XHJcbn1cclxudGhpcy5yb29tRGF0YSA9IHJvb21JbmZvXHJcbmNvbnN0IHJvb21JZCA9IHRoaXMucm9vbUlkXHJcbmNvbnN0IGFkZHJlc3MgPSBhd2FpdCBOSU0uZ2V0Q2hhdHJvb21BZGRyZXNzZXMoYWNjaWQsIHJvb21JZClcclxuY29uc3QgY2hhdHJvb20gPSBDaGF0cm9vbVNESy5nZXRJbnN0YW5jZSh7XHJcbi8vICAgICAgICBkZWJ1ZzogdHJ1ZSxcclxuYWNjb3VudDogYWNjaWQsXHJcbnRva2VuOiBuaW1Ub2tlbixcclxuY2hhdHJvb21JZDogcm9vbUlkLFxyXG5jaGF0cm9vbUFkZHJlc3NlczogYWRkcmVzcyxcclxub25tc2dzOiBmdW5jdGlvbihtc2dzKSB7XHJcbiAgbG9nLmluZm8oe1xyXG4gICAgcGFnZTogJ2NoYXRyb29tJyxcclxuICAgIG9wcjogJ2luaXRpYWxpemUgc2RrIGluc3RhbmNlJyxcclxuICAgIGluZm86IG1zZ3NcclxuICB9KVxyXG4vLyAgICAgICAgICBjb25zb2xlLmxvZygn5pS25Yiw6IGK5aSp5a6k5L+h5oGvJywgbXNncylcclxucHVzaE1zZyhtc2dzLm1hcChtc2cgPT4ge1xyXG4gIGlmIChtc2cudHlwZSA9PT0gJ25vdGlmaWNhdGlvbicpIHtcclxuICAgIGdldENvdW50c051bShpZCwgamZUb2tlbilcclxuICAgICAgICAgICAgICAvLyDov5vlhaXogYrlpKnlrqTkv6Hmga9cclxuICAgICAgICAgICAgICBjb25zdCB0aXAgPSBSLmNvbmQoW1xyXG4gICAgICAgICAgICAgICAgW1IuZXF1YWxzKCdtZW1iZXJFbnRlcicpLCBSLmFsd2F5cygn5Yqg5YWl6IGK5aSp5a6kJyldLFxyXG4gICAgICAgICAgICAgICAgW1IuZXF1YWxzKCdtZW1iZXJFeGl0JyksIFIuYWx3YXlzKCfpgIDlh7rogYrlpKnlrqQnKV1cclxuICAgICAgICAgICAgICAgIF0pKG1zZy5hdHRhY2gudHlwZSlcclxuICAgICAgICAgICAgICAgIGNvbnN0IHRpcE1zZyA9IGAke21zZy5hdHRhY2guZnJvbU5pY2t9ICR7dGlwfWBcclxuICAgICAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAgIC4uLm1zZyxcclxuICAgICAgICAgICAgICAgICAgdHlwZTogJ25vdGlmaWNhdGlvbicsXHJcbiAgICAgICAgICAgICAgICAgIHRleHQ6IHRpcE1zZyxcclxuICAgICAgICAgICAgICAgICAgZnJvbUF2YXRhcjogYXZhdGFyVXJsLFxyXG4gICAgICAgICAgICAgICAgICBub3dUaW1lOiBuZXcgRGF0ZShEYXRlLnBhcnNlKG5ldyBEYXRlKCkpICsgMjg4MDAwMDApLnRvSVNPU3RyaW5nKCkuc3BsaXQoJ1QnKVswXSArICcgJyArIG5ldyBEYXRlKCkudG9UaW1lU3RyaW5nKCkuc3Vic3RyKDAsIDgpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBtc2dcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pKVxyXG59LFxyXG5hc3luYyBvbmNvbm5lY3QoKSB7XHJcbiAgbG9nLmluZm8oe1xyXG4gICAgcGFnZTogJ2NoYXRyb29tJyxcclxuICAgIG9wcjogJ2luaXRpYWxpemUgc2RrIGluc3RhbmNlJyxcclxuICAgIGluZm86ICdbTklNIENIQVRST09NXSBjb25uZWN0ZWQnXHJcbiAgfSlcclxuICBpZiAoIWhhc01zZ3MpIHtcclxuICAgIHdlcHkuc2hvd0xvYWRpbmcoKVxyXG4gICAgICAgICAgICAvLyDmi4nlj5bmnIDov5EgMTAwIOadoeS/oeaBr1xyXG4gICAgICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBjaGF0cm9vbS5nZXRIaXN0b3J5TXNncyh7XHJcbiAgICAgICAgICAgICAgbGltaXQ6IDEwMFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICBjb25zdCBtc2dzID0gcmVzLm1zZ3MuZmlsdGVyKG1zZyA9PiBtc2cudHlwZSAhPT0gJ25vdGlmaWNhdGlvbicgJiYgbXNnLnR5cGUgIT09ICd0aXAnKS5yZXZlcnNlKClcclxuICAgICAgICAgICAgLy8g5Yi35paw5raI5oGvXHJcbiAgICAgICAgICAgIHB1c2hNc2cobXNncyB8fCBbXSlcclxuICAgICAgICAgICAgYXBwbHkoKVxyXG4gICAgICAgICAgICB3ZXB5LmhpZGVMb2FkaW5nKClcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcbnRoaXMuY2hhdHJvb20gPSBjaGF0cm9vbVxyXG59IGNhdGNoIChlKSB7XHJcbiAgbG9nLmVycm9yKHtcclxuICAgIHBhZ2U6ICdjaGF0cm9vbScsXHJcbiAgICBvcHI6ICdnZXRJbnN0YW5jZScsXHJcbiAgICBpbmZvOiBlXHJcbiAgfSlcclxufVxyXG59XHJcbm9uU2hhcmVBcHBNZXNzYWdlID0gZnVuY3Rpb24gKHJlcykge1xyXG4gIHJldHVybiB7XHJcbiAgICB0aXRsZTogdGhpcy5yb29tRGF0YS5uYW1lXHJcbiAgfVxyXG59XHJcbmFzeW5jIG9uU2hvdygpIHtcclxuICB0aGlzLmlzTElNSVQgPSBmYWxzZVxyXG4gIHRoaXMuc2VuZGVkID0gZmFsc2VcclxuICB0aGlzLmN1cnJlbnROYXYgPSAwXHJcbn1cclxufVxyXG4iXX0=