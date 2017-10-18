'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _extends2 = require('./../npm/babel-runtime/helpers/extends.js');

var _extends3 = _interopRequireDefault(_extends2);

var _slicedToArray2 = require('./../npm/babel-runtime/helpers/slicedToArray.js');

var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

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
        var id, roomid, creator, pushMsg, getCountsNum, apply, hasMsgs, _user, nimToken, accid, avatarUrl, jfToken, roomInfo, data, accidArr, isVip, vipUserList, isAdmin, adminUserList, islimit, isUser, userLimitArr, roomId, address, _ChatroomSDK$getInsta, _ChatroomSDK$getInsta2, chatroom0, chatroom1;

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
                _context8.next = 36;
                return _nim2.default.getChatroomAddresses(accid, roomId);

              case 36:
                address = _context8.sent;
                _ChatroomSDK$getInsta = _chatroom2.default.getInstance({
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
                              return chatroom1.getHistoryMsgs({
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
                }), _ChatroomSDK$getInsta2 = (0, _slicedToArray3.default)(_ChatroomSDK$getInsta, 2), chatroom0 = _ChatroomSDK$getInsta2[0], chatroom1 = _ChatroomSDK$getInsta2[1];


                this.chatroom = chatroom1;
                this.chatroom0 = chatroom0;
                _context8.next = 45;
                break;

              case 42:
                _context8.prev = 42;
                _context8.t0 = _context8['catch'](8);

                log.error({
                  page: 'chatroomPromised',
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
  }, {
    key: 'onUnload',
    value: function () {
      var _ref6 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee10() {
        return _regenerator2.default.wrap(function _callee10$(_context10) {
          while (1) {
            switch (_context10.prev = _context10.next) {
              case 0:
                this.chatroom0.disconnect();

              case 1:
              case 'end':
                return _context10.stop();
            }
          }
        }, _callee10, this);
      }));

      function onUnload() {
        return _ref6.apply(this, arguments);
      }

      return onUnload;
    }()
  }]);
  return Chatroom;
}(_wepy2.default.page)) || _class);

Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Chatroom , 'pages/chatroom'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoYXRyb29tLmpzIl0sIm5hbWVzIjpbImxvZyIsImNoYXRyb29tQXBpIiwiQ2hhdHJvb20iLCJ1c2VyIiwic3RhdGUiLCJjb21tb24iLCJuaW0iLCJtc2dzIiwiY2hhdHJvb20iLCJyb29tSWQiLCJpbnRvVmlldyIsImxhc3QiLCJzY3JvbGx0b3BlciIsImlkQ2xpZW50IiwicmVmcmVzaE1zZ3MiLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiZGF0YSIsIm5hdnMiLCJjdXJyZW50TmF2IiwibnVtTGlzdCIsImlzTElNSVQiLCJzZW5kZWQiLCJ0ZXh0Iiwicm9vbURhdGEiLCJuYW1lIiwiaW5kaWNhdG9yRG90cyIsImF1dG9wbGF5IiwiaW50ZXJ2YWwiLCJkdXJhdGlvbiIsInNob3ciLCJzaG93ZW0iLCJlbW9qaSIsImRlZmF1bHQiLCJFbW9qaSIsImVtb2ppT2JqIiwiRW1vamlPYmoiLCJub3dUaW1lIiwibm93UGVvcGxlcyIsInNlYXJjaGlucHV0Iiwic2VuZEZvY3VzIiwidXNlckxpbWl0QXJyIiwidmlwVXNlckxpc3QiLCJhZG1pblVzZXJMaXN0IiwibWV0aG9kcyIsInNjcm9sbCIsImUiLCJkZXRhaWwiLCJzY3JvbGxUb3AiLCJzY3JvbGxIZWlnaHQiLCJsZW5ndGgiLCJnZXRDb3VudHNOdW0iLCJpZCIsImpmVG9rZW4iLCJnZXRPbmVCeUlkIiwib25saW5ldXNlcmNvdW50IiwiJGFwcGx5IiwiaGFuZGxlTmFtZSIsIml0ZW0iLCJ0eXBlIiwiYmFuSWQiLCJtYXAiLCJpdGVtQWNjaWQiLCJmcm9tIiwiZ2V0SXRlbUlkIiwibmF2aWdhdGVUbyIsInVybCIsImhhbmRsZU5hbWVJZCIsIml0ZW1pZCIsImdldEZvY3VzIiwic2V0RGF0YSIsIm9wZW5FbW9qaSIsImltZ1ByZXZpZXciLCJpdGVtcyIsImltZ1VybCIsImlzSW1nIiwibXNnIiwiaW1nQXJyIiwiZmlsdGVyIiwiaW1nVXJsQXJyIiwiZmlsZSIsInByZXZpZXdJbWFnZSIsImN1cnJlbnQiLCJ1cmxzIiwic3VjY2VzcyIsInJlcyIsImNvbnNvbGUiLCJzZW5kRW1vamkiLCJldmVudCIsInRoYXQiLCJ0YXJnZXQiLCJkYXRhc2V0IiwibXNnbGVuIiwic3RyIiwic3RhcnQiLCJsYXN0SW5kZXhPZiIsImVuZCIsImxlbiIsInNsaWNlIiwicHVzaE1zZyIsImJpbmQiLCJ0cmltIiwic2VuZFRleHQiLCJlcnJvciIsInBhZ2UiLCJvcHIiLCJpbmZvIiwiY2hhbmdlTmF2IiwiY3VycmVudFRhcmdldCIsImluZGV4IiwiY2hvb3NlSW1hZ2UiLCJjb3VudCIsInByZXZpZXdGaWxlIiwid3hGaWxlUGF0aCIsInRlbXBGaWxlUGF0aHMiLCJzZW5kRmlsZSIsInNlbmQiLCJwdXNoTXNnVGV4dCIsInNldFRleHQiLCJ2YWx1ZSIsIkFycmF5IiwiaXNBcnJheSIsInZpcE5pY2siLCJuaWNrIiwiaXNWaXAiLCJpIiwiZnJvbU5pY2siLCJhZG1pbk5pY2siLCJpc0FkbWluIiwiaXNfYWRtaW4iLCJpc192aXAiLCJlbWppIiwicGFyc2VFbW9qaSIsInJlcGxhY2UiLCJjaGF0cm9vbUlkIiwiZmxvdyIsImZyb21BdmF0YXIiLCJmcm9tQ2xpZW50VHlwZSIsImZyb21DdXN0b20iLCJyZXNlbmQiLCJzdGF0dXMiLCJ0aW1lIiwidXNlclVwZGF0ZVRpbWUiLCJtZXJnZWQiLCJvblNoYXJlQXBwTWVzc2FnZSIsInRpdGxlIiwib3B0aW9ucyIsInJvb21pZCIsImNyZWF0b3IiLCJhcHBseSIsImhhc01zZ3MiLCJuaW1Ub2tlbiIsImFjY2lkIiwiYXZhdGFyVXJsIiwiYWRkVG9Sb29tIiwicm9vbUluZm8iLCJnZXRVc2VyTGlzdCIsImFjY2lkQXJyIiwiaW5kZXhPZiIsImlzbGltaXQiLCJpc1VzZXIiLCJ3eCIsInNob3dUb2FzdCIsImljb24iLCJnZXRDaGF0cm9vbUFkZHJlc3NlcyIsImFkZHJlc3MiLCJnZXRJbnN0YW5jZSIsImFjY291bnQiLCJ0b2tlbiIsImNoYXRyb29tQWRkcmVzc2VzIiwib25tc2dzIiwidGlwIiwiY29uZCIsImVxdWFscyIsImFsd2F5cyIsImF0dGFjaCIsInRpcE1zZyIsIkRhdGUiLCJwYXJzZSIsInRvSVNPU3RyaW5nIiwic3BsaXQiLCJ0b1RpbWVTdHJpbmciLCJzdWJzdHIiLCJvbmNvbm5lY3QiLCJzaG93TG9hZGluZyIsImNoYXRyb29tMSIsImdldEhpc3RvcnlNc2dzIiwibGltaXQiLCJyZXZlcnNlIiwiaGlkZUxvYWRpbmciLCJjaGF0cm9vbTAiLCJkaXNjb25uZWN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0U7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOztJQUFZQSxHOztBQUNaOztBQUdBOztJQUFZQyxXOztBQUNaOzs7Ozs7SUFvQnFCQyxRLFdBakJwQix3QkFBUTtBQUNQQyxRQUFNO0FBQUEsV0FBU0MsTUFBTUMsTUFBTixDQUFhRixJQUF0QjtBQUFBLEdBREM7QUFFUEcsT0FBSztBQUFBLFdBQVNGLE1BQU1DLE1BQU4sQ0FBYUMsR0FBdEI7QUFBQSxHQUZFO0FBR1BDLFFBQU0sY0FBVUgsS0FBVixFQUFpQjtBQUNyQixXQUFPQSxNQUFNSSxRQUFOLENBQWVELElBQWYsQ0FBb0IsS0FBS0UsTUFBekIsS0FBb0MsRUFBM0M7QUFDRCxHQUxNO0FBTVBDLFlBQVUsa0JBQVNOLEtBQVQsRUFBZ0I7QUFDeEIsUUFBTUcsT0FBT0gsTUFBTUksUUFBTixDQUFlRCxJQUFmLENBQW9CLEtBQUtFLE1BQXpCLEtBQW9DLEVBQWpEO0FBQ0EsUUFBTUUsT0FBTyxnQkFBRUEsSUFBRixDQUFPSixJQUFQLENBQWI7QUFDQSxRQUFJLEtBQUtLLFdBQVQsRUFBc0I7QUFDcEIsYUFBTyxFQUFQO0FBQ0Q7QUFDRCxXQUFPRCxPQUFPQSxLQUFLRSxRQUFaLEdBQXVCLEVBQTlCO0FBQ0Q7QUFiTSxDQUFSLEVBY0U7QUFDREM7QUFEQyxDQWRGLEM7Ozs7Ozs7Ozs7Ozs7O2dOQWtCQ0MsTSxH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QUFLdkYsSTtrQkFBdEJ0RyxRIiwiZmlsZSI6ImNoYXRyb29tLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbiAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcclxuICBpbXBvcnQgUiBmcm9tICcuLi9saWJzL3JhbWRhJ1xyXG4gIGltcG9ydCBDaGF0cm9vbVNESyBmcm9tICcuLi91dGlscy9jaGF0cm9vbSdcclxuICBpbXBvcnQgTklNIGZyb20gJy4uL3V0aWxzL25pbSdcclxuICBpbXBvcnQgRmFjZUlNIGZyb20gJy4uL3V0aWxzL1dlYklNJ1xyXG4gIGltcG9ydCAqIGFzIGxvZyBmcm9tICcuLi91dGlscy9sb2cnXHJcbiAgaW1wb3J0IHtcclxuICAgIHJlZnJlc2hNc2dzXHJcbiAgfSBmcm9tICcuLi9hY3Rpb25zL2NoYXRyb29tJ1xyXG4gIGltcG9ydCAqIGFzIGNoYXRyb29tQXBpIGZyb20gJy4uL2FwaXMvY2hhdHJvb20nXHJcbiAgaW1wb3J0IHtcclxuICAgIGNvbm5lY3RcclxuICB9IGZyb20gJ3dlcHktcmVkdXgnXHJcbiAgQGNvbm5lY3Qoe1xyXG4gICAgdXNlcjogc3RhdGUgPT4gc3RhdGUuY29tbW9uLnVzZXIsXHJcbiAgICBuaW06IHN0YXRlID0+IHN0YXRlLmNvbW1vbi5uaW0sXHJcbiAgICBtc2dzOiBmdW5jdGlvbiAoc3RhdGUpIHtcclxuICAgICAgcmV0dXJuIHN0YXRlLmNoYXRyb29tLm1zZ3NbdGhpcy5yb29tSWRdIHx8IFtdXHJcbiAgICB9LFxyXG4gICAgaW50b1ZpZXc6IGZ1bmN0aW9uKHN0YXRlKSB7XHJcbiAgICAgIGNvbnN0IG1zZ3MgPSBzdGF0ZS5jaGF0cm9vbS5tc2dzW3RoaXMucm9vbUlkXSB8fCBbXVxyXG4gICAgICBjb25zdCBsYXN0ID0gUi5sYXN0KG1zZ3MpXHJcbiAgICAgIGlmICh0aGlzLnNjcm9sbHRvcGVyKSB7XHJcbiAgICAgICAgcmV0dXJuICcnXHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIGxhc3QgPyBsYXN0LmlkQ2xpZW50IDogJydcclxuICAgIH1cclxuICB9LCB7XHJcbiAgICByZWZyZXNoTXNnc1xyXG4gIH0pXHJcbiAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2hhdHJvb20gZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xyXG4gICAgY29uZmlnID0ge1xyXG4gICAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn6IGK5aSp5a6kJ1xyXG4gICAgfVxyXG4gICAgZGF0YSA9IHtcclxuICAgICAgbmF2czogWyfogYrlpKknLCAn6K+m5oOFJ10sXHJcbiAgICAgIGN1cnJlbnROYXY6IDAsXHJcbiAgICAgIG51bUxpc3Q6IFtdLFxyXG4gICAgICBpc0xJTUlUOiBmYWxzZSxcclxuICAgICAgY2hhdHJvb206IG51bGwsXHJcbiAgICAgIHJvb21JZDogbnVsbCxcclxuICAgICAgc2VuZGVkOiBmYWxzZSxcclxuICAgICAgdGV4dDogJycsXHJcbiAgICAgIHJvb21EYXRhOiB7XHJcbiAgICAgICAgbmFtZTogJ+WKoOi9veS4rS4uLidcclxuICAgICAgfSxcclxuICAgICAgaW5kaWNhdG9yRG90czogdHJ1ZSxcclxuICAgICAgYXV0b3BsYXk6IGZhbHNlLFxyXG4gICAgICBpbnRlcnZhbDogNTAwMCxcclxuICAgICAgZHVyYXRpb246IDEwMDAsXHJcbiAgICAgIHNob3c6ICdlbW9qaV9saXN0JyxcclxuICAgICAgc2hvd2VtOiAnb3BlcmF0aW9uJyxcclxuICAgICAgZW1vamk6IEZhY2VJTS5kZWZhdWx0LkVtb2ppLFxyXG4gICAgICBlbW9qaU9iajogRmFjZUlNLmRlZmF1bHQuRW1vamlPYmosXHJcbiAgICAgIG5vd1RpbWU6ICcnLFxyXG4gICAgICBub3dQZW9wbGVzOiAwLFxyXG4gICAgICBzZWFyY2hpbnB1dDonJyxcclxuICAgICAgc2VuZEZvY3VzOiBmYWxzZSxcclxuICAgICAgdXNlckxpbWl0QXJyOltdLFxyXG4gICAgICB2aXBVc2VyTGlzdDpbXSxcclxuICAgICAgYWRtaW5Vc2VyTGlzdDpbXSxcclxuICAgIH1cclxuICAgIG1ldGhvZHMgPSB7XHJcbiAgICAgIGFzeW5jIHNjcm9sbCAoZSkge1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGUuZGV0YWlsLnNjcm9sbEhlaWdodCnliKTmlq3mmK/lkKblnKjmn6XnnIvljoblj7LorrDlvZXkuI3mu5rliqhcclxuICAgICAgICBpZiAoZS5kZXRhaWwuc2Nyb2xsVG9wIDwgZS5kZXRhaWwuc2Nyb2xsSGVpZ2h0KjAuNSB8fCBlLmRldGFpbC5zY3JvbGxUb3AgPCAxMDApIHtcclxuICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGUuZGV0YWlsLmRlbHRhWClcclxuICAgICAgICAgIHRoaXMuc2Nyb2xsdG9wZXIgPSAxXHJcbiAgICAgICAgfWVsc2Uge1xyXG4gICAgICAgICAgdGhpcy5zY3JvbGx0b3BlciA9IDBcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYoZS5kZXRhaWwuc2Nyb2xsVG9wIDwgMTAgJiYgdGhpcy5tc2dzLmxlbmd0aCA8IDE1MCkge1xyXG4gICAgICAgIH1cclxuICAgICAgfSxcclxuICAgICAgYXN5bmMgZ2V0Q291bnRzTnVtKGlkLCBqZlRva2VuKSB7XHJcbiAgICAgICAgY29uc3Qge29ubGluZXVzZXJjb3VudH0gPSBhd2FpdCBjaGF0cm9vbUFwaS5nZXRPbmVCeUlkKGlkLCBqZlRva2VuKVxyXG4gICAgICAgIHRoaXMubm93UGVvcGxlcyA9IG9ubGluZXVzZXJjb3VudFxyXG4gICAgICAgIHRoaXMuJGFwcGx5KClcclxuICAgICAgfSxcclxuICAgICAgYXN5bmMgaGFuZGxlTmFtZSAoaXRlbSkge1xyXG4gICAgICAgIGNvbnN0IHR5cGUgPSB0aGlzLnR5cGVcclxuICAgICAgICBjb25zdCBiYW5JZCA9IHRoaXMudXNlckxpbWl0QXJyLm1hcCgoaXRlbSk9Pml0ZW0uaWQpXHJcbiAgICAgICAgbGV0IHJvb21JZCA9IHRoaXMucm9vbUlkXHJcbiAgICAgICAgY29uc3QgaXRlbUFjY2lkID0gaXRlbS5mcm9tXHJcbiAgICAgICAgY29uc3Qge2lkfSA9IGF3YWl0IGNoYXRyb29tQXBpLmdldEl0ZW1JZChpdGVtQWNjaWQpXHJcbiAgICAgICAgd2VweS5uYXZpZ2F0ZVRvKHtcclxuICAgICAgICAgIHVybDogYHVzZXJJbmZvP2lkPSR7aWR9JnJvb21JZD0ke3Jvb21JZH0mYmFuSWQ9JHtiYW5JZH0mdHlwZT0ke3R5cGV9YFxyXG4gICAgICAgIH0pXHJcbiAgICAgIH0sXHJcbiAgICAgIGhhbmRsZU5hbWVJZCAoaXRlbSkge1xyXG4gICAgICAgIGNvbnN0IHR5cGUgPSB0aGlzLnR5cGVcclxuICAgICAgICBjb25zdCBiYW5JZCA9IHRoaXMudXNlckxpbWl0QXJyLm1hcCgoaXRlbSk9Pml0ZW0uaWQpXHJcbiAgICAgICAgY29uc3QgaXRlbWlkID0gaXRlbS5pZFxyXG4gICAgICAgIGxldCByb29tSWQgPSB0aGlzLnJvb21JZFxyXG4gICAgICAgIHdlcHkubmF2aWdhdGVUbyh7XHJcbiAgICAgICAgICB1cmw6IGB1c2VySW5mbz9pZD0ke2l0ZW1pZH0mcm9vbUlkPSR7cm9vbUlkfSZiYW5JZD0ke2JhbklkfSZ0eXBlPSR7dHlwZX1gXHJcbiAgICAgICAgfSlcclxuICAgICAgfSxcclxuICAgICAgZ2V0Rm9jdXMgKCkge1xyXG4gICAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgICBzZW5kRm9jdXMgOiBmYWxzZVxyXG4gICAgICAgIH0pXHJcbiAgICAgIH0sXHJcbiAgICAgIG9wZW5FbW9qaSAoZSkge1xyXG4gICAgICAgIGlmICh0aGlzLnNob3cgPT09ICdzaG93RW1vamknKSB7XHJcbiAgICAgICAgICB0aGlzLnNob3cgPSAnZW1vamlfbGlzdCdcclxuICAgICAgICAgIHRoaXMuc2hvd2VtID0gJ29wZXJhdGlvbidcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgdGhpcy5zaG93ID0gJ3Nob3dFbW9qaSdcclxuICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLiRhcHBseSgpXHJcbiAgICAgIH0sXHJcbiAgICAgIGltZ1ByZXZpZXcgKGl0ZW1zLCBtc2dzKSB7XHJcbiAgICAgICAgY29uc3QgaW1nVXJsID0gaXRlbXNcclxuICAgICAgICBjb25zdCBpc0ltZyA9IG1zZyA9PiBtc2cudHlwZSA9PT0gJ2ltYWdlJ1xyXG4gICAgICAgIGNvbnN0IGltZ0FyciA9IFIuZmlsdGVyKGlzSW1nKShtc2dzKVxyXG4gICAgICAgIGNvbnN0IGltZ1VybEFyciA9IGltZ0Fyci5tYXAobXNnID0+IHtcclxuICAgICAgICAgIHJldHVybiBtc2cuZmlsZS51cmxcclxuICAgICAgICB9KVxyXG4gICAgICAgIHdlcHkucHJldmlld0ltYWdlKHtcclxuICAgICAgICAgIGN1cnJlbnQ6IGltZ1VybCxcclxuICAgICAgICAgIHVybHM6IGltZ1VybEFycixcclxuICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChyZXMpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2cocmVzKVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICAgIH0sXHJcbiAgICAgIGFzeW5jIHNlbmRFbW9qaSAoZXZlbnQpIHtcclxuICAgICAgICB2YXIgdGhhdCA9IHRoaXNcclxuICAgICAgICB2YXIgZW1vamkgPSBldmVudC50YXJnZXQuZGF0YXNldC5lbW9qaVxyXG4gICAgICAgIHZhciBtc2dsZW4gPSB0aGF0LmRhdGEudGV4dC5sZW5ndGggLSAxXHJcbiAgICAgICAgaWYgKGVtb2ppICYmIGVtb2ppICE9PSAnW2RlbF0nKSB7XHJcbiAgICAgICAgICB2YXIgc3RyID0gdGhhdC5kYXRhLnRleHQgKyBlbW9qaVxyXG4gICAgICAgIH0gZWxzZSBpZiAoZW1vamkgPT09ICdbZGVsXScpIHtcclxuICAgICAgICAgIHZhciBzdGFydCA9IHRoYXQuZGF0YS50ZXh0Lmxhc3RJbmRleE9mKCdbJylcclxuICAgICAgICAgIHZhciBlbmQgPSB0aGF0LmRhdGEudGV4dC5sYXN0SW5kZXhPZignXScpXHJcbiAgICAgICAgICB2YXIgbGVuID0gZW5kIC0gc3RhcnRcclxuICAgICAgICAgIGlmIChlbmQgIT09IC0xICYmIGVuZCA9PT0gbXNnbGVuICYmIGxlbiA+PSAzICYmIGxlbiA8PSA0KSB7XHJcbiAgICAgICAgICAgIHN0ciA9IHRoYXQuZGF0YS50ZXh0LnNsaWNlKDAsIHN0YXJ0KVxyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgc3RyID0gdGhhdC5kYXRhLnRleHQuc2xpY2UoMCwgbXNnbGVuKVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnRleHQgPSBzdHJcclxuICAgICAgICBjb25zdCBwdXNoTXNnID0gdGhpcy5tZXRob2RzLnB1c2hNc2cuYmluZCh0aGlzKVxyXG4gICAgICAgIHZhciB0ZXh0ID0gUi50cmltKHRoaXMudGV4dClcclxuICAgICAgICB0aGlzLnRleHQgPSAnJ1xyXG4gICAgICAgIGlmICh0ZXh0Lmxlbmd0aCkge1xyXG4gICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgY29uc3QgbXNnID0gYXdhaXQgdGhpcy5jaGF0cm9vbS5zZW5kVGV4dCh7XHJcbiAgICAgICAgICAgICAgdGV4dFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB0aGlzLnRleHQgPSAnJ1xyXG4gICAgICAgICAgICBwdXNoTXNnKG1zZylcclxuICAgICAgICAgICAgdGhpcy5zaG93ID0gJ2Vtb2ppX2xpc3QnXHJcbiAgICAgICAgICAgIHRoaXMuc2V0RGF0YSh7ICBcclxuICAgICAgICAgICAgICBzZWFyY2hpbnB1dDogJycsICBcclxuICAgICAgICAgICAgfSkgIFxyXG4gICAgICAgICAgICB0aGlzLiRhcHBseSgpXHJcbiAgICAgICAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgIGxvZy5lcnJvcih7XHJcbiAgICAgICAgICAgICAgcGFnZTogJ2NoYXRyb29tJyxcclxuICAgICAgICAgICAgICBvcHI6ICdzZW5kVGV4dCcsXHJcbiAgICAgICAgICAgICAgaW5mbzogZVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfSxcclxuICAgICAgY2hhbmdlTmF2IChlKSB7XHJcbiAgICAgICAgdGhpcy5jdXJyZW50TmF2ID0gZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQuaW5kZXhcclxuICAgICAgICB0aGlzLnNlbmRlZCA9IGZhbHNlXHJcbiAgICAgICAgdGhpcy4kYXBwbHkoKVxyXG4gICAgICB9LFxyXG4gICAgICBhc3luYyBjaG9vc2VJbWFnZSgpIHtcclxuICAgICAgLy8g6L+b6KGM5Zu+54mH6YCJ5oup5bm25LiK5LygXHJcbiAgICAgIGNvbnN0IHB1c2hNc2cgPSB0aGlzLm1ldGhvZHMucHVzaE1zZy5iaW5kKHRoaXMpXHJcbiAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IHdlcHkuY2hvb3NlSW1hZ2Uoe1xyXG4gICAgICAgIGNvdW50OiAxXHJcbiAgICAgIH0pXHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgZmlsZSA9IGF3YWl0IHRoaXMuY2hhdHJvb20ucHJldmlld0ZpbGUoe1xyXG4gICAgICAgICAgdHlwZTogJ2ltYWdlJyxcclxuICAgICAgICAgIHd4RmlsZVBhdGg6IHJlcy50ZW1wRmlsZVBhdGhzWzBdXHJcbiAgICAgICAgfSlcclxuICAgICAgICBjb25zdCBtc2cgPSBhd2FpdCB0aGlzLmNoYXRyb29tLnNlbmRGaWxlKHtcclxuICAgICAgICAgIHR5cGU6ICdpbWFnZScsXHJcbiAgICAgICAgICBmaWxlOiBmaWxlXHJcbiAgICAgICAgfSlcclxuICAgICAgICBwdXNoTXNnKG1zZylcclxuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICBsb2cuZXJyb3Ioe1xyXG4gICAgICAgICAgcGFnZTogJ2NoYXRyb29tJyxcclxuICAgICAgICAgIG9wcjogJ3NlbmRGaWxlJyxcclxuICAgICAgICAgIGluZm86IGVycm9yXHJcbiAgICAgICAgfSlcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIGFzeW5jIHNlbmQoZSkge1xyXG4gICAgICAvLz8gd2h5IGJpbmRcclxuICAgICAgdGhpcy5zZXREYXRhKHsgIFxyXG4gICAgICAgIHNlYXJjaGlucHV0OiAnJywgIFxyXG4gICAgICAgIHNlbmRGb2N1czogdHJ1ZSxcclxuICAgICAgfSkgXHJcbiAgICAgIHRoaXMuc2Nyb2xsdG9wZXIgPSAwXHJcbiAgICAgIGNvbnN0IHB1c2hNc2dUZXh0ID0gdGhpcy5tZXRob2RzLnB1c2hNc2dUZXh0LmJpbmQodGhpcylcclxuICAgICAgY29uc3QgdGV4dCA9IFIudHJpbSh0aGlzLnRleHQpXHJcbiAgICAgIHRoaXMudGV4dCA9ICcnXHJcbiAgICAgIGlmICh0ZXh0Lmxlbmd0aCkge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICBjb25zdCBtc2cgPSBhd2FpdCB0aGlzLmNoYXRyb29tLnNlbmRUZXh0KHtcclxuICAgICAgICAgICAgdGV4dFxyXG4gICAgICAgICAgfSlcclxuICAgICAgICAgIHRoaXMudGV4dCA9ICcnXHJcbiAgICAgICAgICBwdXNoTXNnVGV4dChtc2cpXHJcbiAgICAgICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgbG9nLmVycm9yKHtcclxuICAgICAgICAgICAgcGFnZTogJ2NoYXRyb29tJyxcclxuICAgICAgICAgICAgb3ByOiAnc2VuZFRleHQnLFxyXG4gICAgICAgICAgICBpbmZvOiBlXHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIHNldFRleHQoZSkge1xyXG4gICAgICB0aGlzLnRleHQgPSBlLmRldGFpbC52YWx1ZVxyXG4gICAgfSxcclxuICAgIHB1c2hNc2c6IGZ1bmN0aW9uIChtc2dzKSB7XHJcbiAgICAgIGNvbnN0IHsgcmVmcmVzaE1zZ3MgfSA9IHRoaXMubWV0aG9kc1xyXG4gICAgICBpZiAoIUFycmF5LmlzQXJyYXkobXNncykpIHtcclxuICAgICAgICBtc2dzID0gW21zZ3NdXHJcbiAgICAgIH1cclxuICAgICAgLy9WSVAg5pi+56S6XHJcbiAgICAgIGNvbnN0IHZpcE5pY2sgPSB0aGlzLnZpcFVzZXJMaXN0Lm1hcCgoaXRlbSkgPT4gaXRlbS5uaWNrKVxyXG4gICAgICBjb25zdCBpc1ZpcCA9IGZ1bmN0aW9uKG1zZyl7XHJcbiAgICAgICAgZm9yICh2YXIgaSA9IHZpcE5pY2subGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcclxuICAgICAgICAgIGlmICh2aXBOaWNrW2ldID09PSBtc2cuZnJvbU5pY2spIHtcclxuICAgICAgICAgICAgcmV0dXJuIG1zZy5mcm9tTmlja1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBjb25zdCBhZG1pbk5pY2sgPSB0aGlzLmFkbWluVXNlckxpc3QubWFwKChpdGVtKSA9PiBpdGVtLm5pY2spXHJcbiAgICAgIGNvbnN0IGlzQWRtaW4gPSBmdW5jdGlvbihtc2cpe1xyXG4gICAgICAgIGZvciAodmFyIGkgPSBhZG1pbk5pY2subGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcclxuICAgICAgICAgIGlmIChhZG1pbk5pY2tbaV0gPT09IG1zZy5mcm9tTmljaykge1xyXG4gICAgICAgICAgICByZXR1cm4gbXNnLmZyb21OaWNrXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIFIuZmlsdGVyKGlzQWRtaW4pKG1zZ3MpLm1hcChpdGVtID0+IGl0ZW0uaXNfYWRtaW4gPSB0cnVlKVxyXG4gICAgICBSLmZpbHRlcihpc1ZpcCkobXNncykubWFwKGl0ZW0gPT4gaXRlbS5pc192aXAgPSB0cnVlKVxyXG4gICAgICBtc2dzID0gbXNncy5tYXAobXNnID0+IHtcclxuICAgICAgICBpZiAobXNnLnR5cGUgPT09ICd0ZXh0Jykge1xyXG4gICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgZW1qaTogRmFjZUlNLmRlZmF1bHQucGFyc2VFbW9qaShtc2cudGV4dC5yZXBsYWNlKC9cXG4vbWcsICcnKSksXHJcbiAgICAgICAgICAgIGNoYXRyb29tSWQ6IG1zZy5jaGF0cm9vbUlkLFxyXG4gICAgICAgICAgICBmbG93OiBtc2cuZmxvdyxcclxuICAgICAgICAgICAgZnJvbTogbXNnLmZyb20sXHJcbiAgICAgICAgICAgIGZyb21BdmF0YXI6IG1zZy5mcm9tQXZhdGFyLFxyXG4gICAgICAgICAgICBmcm9tQ2xpZW50VHlwZTogbXNnLmZyb21DbGllbnRUeXBlLFxyXG4gICAgICAgICAgICBmcm9tQ3VzdG9tOiBtc2cuZnJvbUN1c3RvbSxcclxuICAgICAgICAgICAgZnJvbU5pY2s6IG1zZy5mcm9tTmljayxcclxuICAgICAgICAgICAgaWRDbGllbnQ6IG1zZy5pZENsaWVudCxcclxuICAgICAgICAgICAgcmVzZW5kOiBtc2cucmVzZW5kLFxyXG4gICAgICAgICAgICBzdGF0dXM6IG1zZy5zdGF0dXMsXHJcbiAgICAgICAgICAgIHRleHQ6IG1zZy50ZXh0LFxyXG4gICAgICAgICAgICB0aW1lOiBtc2cudGltZSxcclxuICAgICAgICAgICAgdHlwZTogbXNnLnR5cGUsXHJcbiAgICAgICAgICAgIHVzZXJVcGRhdGVUaW1lOiBtc2cudXNlclVwZGF0ZVRpbWUsXHJcbiAgICAgICAgICAgIGlzX3ZpcDogbXNnLmlzX3ZpcCxcclxuICAgICAgICAgICAgaXNfYWRtaW46IG1zZy5pc19hZG1pbixcclxuICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgcmV0dXJuIG1zZ1xyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuXHJcbiAgICAgIGxldCByb29tSWQgPSB0aGlzLnJvb21JZFxyXG4gICAgICBpZiAobXNncy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgcm9vbUlkID0gbXNnc1swXS5jaGF0cm9vbUlkXHJcbiAgICAgIH1cclxuICAgICAgY29uc3QgbWVyZ2VkID0gWy4uLnRoaXMubXNncywgLi4ubXNnc11cclxuICAgICAgcmVmcmVzaE1zZ3Mocm9vbUlkLCBtZXJnZWQpXHJcbiAgICAgIHRoaXMuc2VuZGVkID0gdHJ1ZVxyXG4gICAgICB0aGlzLiRhcHBseSgpXHJcbiAgICB9LFxyXG4gICAgcHVzaE1zZ1RleHQ6IGZ1bmN0aW9uIChtc2dzKSB7XHJcbiAgICAgIGNvbnN0IHsgcmVmcmVzaE1zZ3MgfSA9IHRoaXMubWV0aG9kc1xyXG4gICAgICBpZiAoIUFycmF5LmlzQXJyYXkobXNncykpIHtcclxuICAgICAgICBtc2dzID0gW21zZ3NdXHJcbiAgICAgIH1cclxuICAgICAgY29uc3QgdmlwTmljayA9IHRoaXMudmlwVXNlckxpc3QubWFwKChpdGVtKSA9PiBpdGVtLm5pY2spXHJcbiAgICAgIGNvbnN0IGlzVmlwID0gZnVuY3Rpb24obXNnKXtcclxuICAgICAgICBmb3IgKHZhciBpID0gdmlwTmljay5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xyXG4gICAgICAgICAgaWYgKHZpcE5pY2tbaV0gPT09IG1zZy5mcm9tTmljaykge1xyXG4gICAgICAgICAgICByZXR1cm4gbXNnLmZyb21OaWNrXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIGNvbnN0IGFkbWluTmljayA9IHRoaXMuYWRtaW5Vc2VyTGlzdC5tYXAoKGl0ZW0pID0+IGl0ZW0ubmljaylcclxuICAgICAgY29uc3QgaXNBZG1pbiA9IGZ1bmN0aW9uKG1zZyl7XHJcbiAgICAgICAgZm9yICh2YXIgaSA9IGFkbWluTmljay5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xyXG4gICAgICAgICAgaWYgKGFkbWluTmlja1tpXSA9PT0gbXNnLmZyb21OaWNrKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBtc2cuZnJvbU5pY2tcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgUi5maWx0ZXIoaXNBZG1pbikobXNncykubWFwKGl0ZW0gPT4gaXRlbS5pc19hZG1pbiA9IHRydWUpXHJcbiAgICAgIFIuZmlsdGVyKGlzVmlwKShtc2dzKS5tYXAoaXRlbSA9PiBpdGVtLmlzX3ZpcCA9IHRydWUpXHJcbiAgICAgIG1zZ3MgPSBtc2dzLm1hcChtc2cgPT4ge1xyXG4gICAgICAgIGlmIChtc2cudHlwZSA9PT0gJ3RleHQnKSB7XHJcbiAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBlbWppOiBGYWNlSU0uZGVmYXVsdC5wYXJzZUVtb2ppKG1zZy50ZXh0LnJlcGxhY2UoL1xcbi9tZywgJycpKSxcclxuICAgICAgICAgICAgY2hhdHJvb21JZDogbXNnLmNoYXRyb29tSWQsXHJcbiAgICAgICAgICAgIGZsb3c6IG1zZy5mbG93LFxyXG4gICAgICAgICAgICBmcm9tOiBtc2cuZnJvbSxcclxuICAgICAgICAgICAgZnJvbUF2YXRhcjogbXNnLmZyb21BdmF0YXIsXHJcbiAgICAgICAgICAgIGZyb21DbGllbnRUeXBlOiBtc2cuZnJvbUNsaWVudFR5cGUsXHJcbiAgICAgICAgICAgIGZyb21DdXN0b206IG1zZy5mcm9tQ3VzdG9tLFxyXG4gICAgICAgICAgICBmcm9tTmljazogbXNnLmZyb21OaWNrLFxyXG4gICAgICAgICAgICBpZENsaWVudDogbXNnLmlkQ2xpZW50LFxyXG4gICAgICAgICAgICByZXNlbmQ6IG1zZy5yZXNlbmQsXHJcbiAgICAgICAgICAgIHN0YXR1czogbXNnLnN0YXR1cyxcclxuICAgICAgICAgICAgdGV4dDogbXNnLnRleHQsXHJcbiAgICAgICAgICAgIHRpbWU6IG1zZy50aW1lLFxyXG4gICAgICAgICAgICB0eXBlOiBtc2cudHlwZSxcclxuICAgICAgICAgICAgdXNlclVwZGF0ZVRpbWU6IG1zZy51c2VyVXBkYXRlVGltZSxcclxuICAgICAgICAgICAgaXNfdmlwOiBtc2cuaXNfdmlwLFxyXG4gICAgICAgICAgICBpc19hZG1pbjogbXNnLmlzX2FkbWluLFxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICByZXR1cm4gbXNnXHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG4gICAgICBsZXQgcm9vbUlkID0gdGhpcy5yb29tSWRcclxuXHJcbiAgICAgIGlmIChtc2dzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICByb29tSWQgPSBtc2dzWzBdLmNoYXRyb29tSWRcclxuICAgICAgfVxyXG4gICAgICBjb25zdCBtZXJnZWQgPSBbLi4udGhpcy5tc2dzLCAuLi5tc2dzXVxyXG4gICAgICByZWZyZXNoTXNncyhyb29tSWQsIG1lcmdlZClcclxuICAgICAgdGhpcy5zZW5kZWQgPSB0cnVlXHJcbiAgICAgIHRoaXMuJGFwcGx5KClcclxuICAgIH0sXHJcbiAgfVxyXG4gIGFzeW5jIG9uTG9hZChvcHRpb25zKSB7XHJcbiAgICBjb25zdCB7IGlkIH0gPSBvcHRpb25zXHJcbiAgICBjb25zdCB7cm9vbWlkfSA9IG9wdGlvbnNcclxuICAgIGNvbnN0IHtjcmVhdG9yfSA9IG9wdGlvbnNcclxuICAgIHRoaXMucm9vbUlkID0gcm9vbWlkXHJcbiAgICBjb25zdCBwdXNoTXNnID0gdGhpcy5tZXRob2RzLnB1c2hNc2cuYmluZCh0aGlzKVxyXG4gICAgY29uc3QgZ2V0Q291bnRzTnVtID0gdGhpcy5tZXRob2RzLmdldENvdW50c051bS5iaW5kKHRoaXMpXHJcbiAgICBjb25zdCBhcHBseSA9IHRoaXMuJGFwcGx5LmJpbmQodGhpcylcclxuICAgIGNvbnN0IGhhc01zZ3MgPSB0aGlzLm1zZ3MubGVuZ3RoID4gMFxyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgeyBuaW1Ub2tlbiwgYWNjaWQsIGF2YXRhclVybCwgamZUb2tlbiB9ID0gdGhpcy51c2VyXHJcbi8vICAgICAgaWYgKGNyZWF0b3IgIT09IGFjY2lkKSB7XHJcbi8vICAgICAgICBhd2FpdCBjaGF0cm9vbUFwaS5hZGRUb1Jvb20ocm9vbWlkLCBjcmVhdG9yLCBhY2NpZClcclxuLy8gICAgICB9XHJcbmF3YWl0IGNoYXRyb29tQXBpLmFkZFRvUm9vbShyb29taWQsIGNyZWF0b3IsIGFjY2lkKVxyXG5jb25zdCByb29tSW5mbyA9IGF3YWl0IGNoYXRyb29tQXBpLmdldE9uZUJ5SWQoaWQsIGpmVG9rZW4pXHJcblxyXG4vL+iOt+WPluW9k+WJjeeUqOaIt3R5cGUg5Lyg5YWl5LmL5ZCO6aG16Z2i5Yik5pat5p2D6ZmQXHJcbmNvbnN0IGRhdGEgPSBhd2FpdCBjaGF0cm9vbUFwaS5nZXRVc2VyTGlzdChyb29taWQsIGpmVG9rZW4pXHJcbmNvbnN0IGFjY2lkQXJyID0gZGF0YS5tYXAoKGl0ZW0pPT5pdGVtLmFjY2lkKVxyXG50aGlzLnR5cGUgPSBkYXRhW2FjY2lkQXJyLmluZGV4T2YoYWNjaWQpXS50eXBlXHJcbi8v6IGK5aSpVklQ5pi+56S6XHJcblxyXG5jb25zdCBpc1ZpcCA9IGRhdGEgPT4gZGF0YS5pc192aXAgPT09IHRydWVcclxuY29uc3QgdmlwVXNlckxpc3QgPSBSLmZpbHRlcihpc1ZpcCkoZGF0YSlcclxudGhpcy52aXBVc2VyTGlzdCA9IHZpcFVzZXJMaXN0XHJcblxyXG5jb25zdCBpc0FkbWluID0gZGF0YSA9PiBkYXRhLnR5cGUgPT09ICdNQU5BR0VSJ1xyXG5jb25zdCBhZG1pblVzZXJMaXN0ID0gUi5maWx0ZXIoaXNBZG1pbikoZGF0YSlcclxudGhpcy5hZG1pblVzZXJMaXN0ID0gYWRtaW5Vc2VyTGlzdFxyXG5cclxuLy/npoHoqIBcclxuY29uc3QgaXNsaW1pdCA9IGRhdGEgPT4gZGF0YS50eXBlID09PSAnTElNSVRFRCdcclxuY29uc3QgaXNVc2VyID0gZGF0YSA9PiBkYXRhLm5hbWUgJiYgZGF0YS5uYW1lICE9PSBudWxsXHJcbnRoaXMubnVtTGlzdCA9IFIuZmlsdGVyKGlzVXNlcikoZGF0YSlcclxuY29uc3QgdXNlckxpbWl0QXJyID0gUi5maWx0ZXIoaXNsaW1pdCkodGhpcy5udW1MaXN0KVxyXG50aGlzLnVzZXJMaW1pdEFyciA9IHVzZXJMaW1pdEFyclxyXG5pZiAodXNlckxpbWl0QXJyLmxlbmd0aCA+IDApIHtcclxuICBpZiAodXNlckxpbWl0QXJyWzBdLmFjY2lkID09PSBhY2NpZCkge1xyXG4gICAgdGhpcy5pc0xJTUlUID0gdHJ1ZVxyXG4gICAgd3guc2hvd1RvYXN0KHtcclxuICAgICAgdGl0bGU6ICfooqvnpoHoqIDvvIzor7fogZTns7vnrqHnkIblkZjop6PpmaQnLFxyXG4gICAgICBpY29uOiAnc3VjY2VzcycsXHJcbiAgICAgIGR1cmF0aW9uOiAyMDAwXHJcbiAgICB9KVxyXG4gIH1cclxufVxyXG50aGlzLnJvb21EYXRhID0gcm9vbUluZm9cclxuY29uc3Qgcm9vbUlkID0gdGhpcy5yb29tSWRcclxuY29uc3QgYWRkcmVzcyA9IGF3YWl0IE5JTS5nZXRDaGF0cm9vbUFkZHJlc3NlcyhhY2NpZCwgcm9vbUlkKVxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5jb25zdCBbY2hhdHJvb20wLGNoYXRyb29tMV0gPSBDaGF0cm9vbVNESy5nZXRJbnN0YW5jZSh7XHJcbiAgYWNjb3VudDogYWNjaWQsXHJcbiAgdG9rZW46IG5pbVRva2VuLFxyXG4gIGNoYXRyb29tSWQ6IHJvb21JZCxcclxuICBjaGF0cm9vbUFkZHJlc3NlczogYWRkcmVzcyxcclxuXHJcbiAgb25tc2dzOiBmdW5jdGlvbihtc2dzKSB7XHJcbiAgICBsb2cuaW5mbyh7XHJcbiAgICAgIHBhZ2U6ICdjaGF0cm9vbScsXHJcbiAgICAgIG9wcjogJ2luaXRpYWxpemUgc2RrIGluc3RhbmNlJyxcclxuICAgICAgaW5mbzogbXNnc1xyXG4gICAgfSlcclxuXHJcbiAgICBwdXNoTXNnKG1zZ3MubWFwKG1zZyA9PiB7XHJcbiAgICAgIGlmIChtc2cudHlwZSA9PT0gJ25vdGlmaWNhdGlvbicpIHtcclxuICAgICAgICBnZXRDb3VudHNOdW0oaWQsIGpmVG9rZW4pXHJcbiAgICAgICAgICAgICAgLy8g6L+b5YWl6IGK5aSp5a6k5L+h5oGvXHJcbiAgICAgICAgICAgICAgY29uc3QgdGlwID0gUi5jb25kKFtcclxuICAgICAgICAgICAgICAgIFtSLmVxdWFscygnbWVtYmVyRW50ZXInKSwgUi5hbHdheXMoJ+WKoOWFpeiBiuWkqeWupCcpXSxcclxuICAgICAgICAgICAgICAgIFtSLmVxdWFscygnbWVtYmVyRXhpdCcpLCBSLmFsd2F5cygn6YCA5Ye66IGK5aSp5a6kJyldXHJcbiAgICAgICAgICAgICAgICBdKShtc2cuYXR0YWNoLnR5cGUpXHJcbiAgICAgICAgICAgICAgICBjb25zdCB0aXBNc2cgPSBgJHttc2cuYXR0YWNoLmZyb21OaWNrfSAke3RpcH1gXHJcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgICAuLi5tc2csXHJcbiAgICAgICAgICAgICAgICAgIHR5cGU6ICdub3RpZmljYXRpb24nLFxyXG4gICAgICAgICAgICAgICAgICB0ZXh0OiB0aXBNc2csXHJcbiAgICAgICAgICAgICAgICAgIGZyb21BdmF0YXI6IGF2YXRhclVybCxcclxuICAgICAgICAgICAgICAgICAgbm93VGltZTogbmV3IERhdGUoRGF0ZS5wYXJzZShuZXcgRGF0ZSgpKSArIDI4ODAwMDAwKS50b0lTT1N0cmluZygpLnNwbGl0KCdUJylbMF0gKyAnICcgKyBuZXcgRGF0ZSgpLnRvVGltZVN0cmluZygpLnN1YnN0cigwLCA4KVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbXNnXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KSlcclxuICB9LFxyXG4gIGFzeW5jIG9uY29ubmVjdCgpIHtcclxuICAgIGxvZy5pbmZvKHtcclxuICAgICAgcGFnZTogJ2NoYXRyb29tJyxcclxuICAgICAgb3ByOiAnaW5pdGlhbGl6ZSBzZGsgaW5zdGFuY2UnLFxyXG4gICAgICBpbmZvOiAnW05JTSBDSEFUUk9PTV0gY29ubmVjdGVkJ1xyXG4gICAgfSlcclxuICAgIGlmICghaGFzTXNncykge1xyXG4gICAgICB3ZXB5LnNob3dMb2FkaW5nKClcclxuICAgICAgICAgICAgLy8g5ouJ5Y+W5pyA6L+RIDEwMCDmnaHkv6Hmga9cclxuICAgICAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgY2hhdHJvb20xLmdldEhpc3RvcnlNc2dzKHtcclxuICAgICAgICAgICAgICBsaW1pdDogMTAwXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIGNvbnN0IG1zZ3MgPSByZXMubXNncy5maWx0ZXIobXNnID0+IG1zZy50eXBlICE9PSAnbm90aWZpY2F0aW9uJyAmJiBtc2cudHlwZSAhPT0gJ3RpcCcpLnJldmVyc2UoKVxyXG4gICAgICAgICAgICAvLyDliLfmlrDmtojmga9cclxuICAgICAgICAgICAgcHVzaE1zZyhtc2dzIHx8IFtdKVxyXG4gICAgICAgICAgICBhcHBseSgpXHJcbiAgICAgICAgICAgIHdlcHkuaGlkZUxvYWRpbmcoKVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuIFxyXG4gIHRoaXMuY2hhdHJvb20gPSBjaGF0cm9vbTFcclxuICB0aGlzLmNoYXRyb29tMCA9IGNoYXRyb29tMFxyXG59IGNhdGNoIChlKSB7XHJcbiAgbG9nLmVycm9yKHtcclxuICAgIHBhZ2U6ICdjaGF0cm9vbVByb21pc2VkJyxcclxuICAgIG9wcjogJ2dldEluc3RhbmNlJyxcclxuICAgIGluZm86IGVcclxuICB9KVxyXG59XHJcbn1cclxub25TaGFyZUFwcE1lc3NhZ2UgPSBmdW5jdGlvbiAocmVzKSB7XHJcbiAgcmV0dXJuIHtcclxuICAgIHRpdGxlOiB0aGlzLnJvb21EYXRhLm5hbWVcclxuICB9XHJcbn1cclxuYXN5bmMgb25TaG93KCkge1xyXG4gIHRoaXMuaXNMSU1JVCA9IGZhbHNlXHJcbiAgdGhpcy5zZW5kZWQgPSBmYWxzZVxyXG4gIHRoaXMuY3VycmVudE5hdiA9IDBcclxufVxyXG5hc3luYyBvblVubG9hZCgpIHtcclxuICB0aGlzLmNoYXRyb29tMC5kaXNjb25uZWN0KClcclxufVxyXG59XHJcbiJdfQ==