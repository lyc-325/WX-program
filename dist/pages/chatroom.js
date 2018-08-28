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

var _account = require('./../apis/account.js');

var accountApi = _interopRequireWildcard(_account);

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
          var _ref2, total_members_count;

          return _regenerator2.default.wrap(function _callee2$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  _context2.next = 2;
                  return chatroomApi.getOneById(id, jfToken);

                case 2:
                  _ref2 = _context2.sent;
                  total_members_count = _ref2.total_members_count;

                  _this3.nowPeoples = total_members_count - 1;
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
      getMsgs: function getMsgs() {
        var _this8 = this;

        return (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee7() {
          var pushMsg, chatroom1, res, msgs;
          return _regenerator2.default.wrap(function _callee7$(_context7) {
            while (1) {
              switch (_context7.prev = _context7.next) {
                case 0:
                  _wepy2.default.showLoading();
                  pushMsg = _this8.methods.pushMsg.bind(_this8);
                  chatroom1 = _this8.chatroom;
                  _context7.next = 5;
                  return chatroom1.getHistoryMsgs({
                    limit: 50
                  });

                case 5:
                  res = _context7.sent;
                  msgs = res.msgs.filter(function (msg) {
                    return msg.type !== 'notification' && msg.type !== 'tip';
                  }).reverse();

                  pushMsg(msgs || []);
                  _this8.$apply();
                  _wepy2.default.hideLoading();

                case 10:
                case 'end':
                  return _context7.stop();
              }
            }
          }, _callee7, _this8);
        }))();
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
      var _ref4 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee9(options) {
        var id, roomid, creator, refreshMsgs, pushMsg, getCountsNum, apply, hasMsgs, _user, nimToken, accid, avatarUrl, jfToken, roomInfo, _ref5, _ref6, object, roomId, address, _ChatroomSDK$getInsta, _ChatroomSDK$getInsta2, chatroom0, chatroom1, Takemin, data, data1, timeArr, minTime, isVip, vipUserList, isAdmin, adminUserList, isUser;

        return _regenerator2.default.wrap(function _callee9$(_context9) {
          while (1) {
            switch (_context9.prev = _context9.next) {
              case 0:
                id = options.id;
                roomid = options.roomid;
                creator = options.creator;

                this.roomId = roomid;
                refreshMsgs = this.methods.refreshMsgs;
                pushMsg = this.methods.pushMsg.bind(this);
                getCountsNum = this.methods.getCountsNum.bind(this);
                apply = this.$apply.bind(this);
                hasMsgs = this.msgs.length > 0;


                _wepy2.default.showLoading();
                _user = this.user, nimToken = _user.nimToken, accid = _user.accid, avatarUrl = _user.avatarUrl, jfToken = _user.jfToken;
                _context9.next = 13;
                return chatroomApi.addToRoom(roomid, creator, accid);

              case 13:
                _context9.next = 15;
                return chatroomApi.getOneById(id, jfToken);

              case 15:
                roomInfo = _context9.sent;
                _context9.next = 18;
                return accountApi.getUserInfo(roomid, accid);

              case 18:
                _ref5 = _context9.sent;
                _ref6 = (0, _slicedToArray3.default)(_ref5, 1);
                object = _ref6[0];

                this.type = object.type;
                if (this.type === 'LIMITED') {
                  this.isLIMIT = true;
                  wx.showToast({
                    title: '被禁言，请联系管理员解除',
                    icon: 'success',
                    duration: 2000
                  });
                }
                this.roomData = roomInfo;
                roomId = this.roomId;
                _context9.next = 27;
                return _nim2.default.getChatroomAddresses(accid, roomId);

              case 27:
                address = _context9.sent;
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
                    var _this9 = this;

                    return (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee8() {
                      var res, msgs;
                      return _regenerator2.default.wrap(function _callee8$(_context8) {
                        while (1) {
                          switch (_context8.prev = _context8.next) {
                            case 0:
                              log.info({
                                page: 'chatroom',
                                opr: 'initialize sdk instance',
                                info: '[NIM CHATROOM] connected'
                              });
                              refreshMsgs(roomid, []);
                              _wepy2.default.hideLoading();

                              if (hasMsgs) {
                                _context8.next = 11;
                                break;
                              }

                              _context8.next = 6;
                              return chatroom1.getHistoryMsgs({
                                limit: 100
                              });

                            case 6:
                              res = _context8.sent;
                              msgs = res.msgs.filter(function (msg) {
                                return msg.type !== 'notification' && msg.type !== 'tip';
                              }).reverse();

                              pushMsg(msgs || []);
                              refreshMsgs(roomid, []);
                              apply();

                            case 11:
                            case 'end':
                              return _context8.stop();
                          }
                        }
                      }, _callee8, _this9);
                    }))();
                  }
                }), _ChatroomSDK$getInsta2 = (0, _slicedToArray3.default)(_ChatroomSDK$getInsta, 2), chatroom0 = _ChatroomSDK$getInsta2[0], chatroom1 = _ChatroomSDK$getInsta2[1];

                this.chatroom = chatroom1;
                this.chatroom0 = chatroom0;
                //循环加载分页人员

                Takemin = function Takemin(Arr) {
                  return Math.min.apply(Math, Arr);
                };

                data = [];

              case 33:
                if (!true) {
                  _context9.next = 44;
                  break;
                }

                _context9.next = 36;
                return chatroomApi.getUserList(roomid, jfToken, minTime);

              case 36:
                data1 = _context9.sent;

                if (!(data1.length == 0)) {
                  _context9.next = 39;
                  break;
                }

                return _context9.abrupt('break', 44);

              case 39:
                timeArr = data1.map(function (item) {
                  return item.enterTime;
                });
                minTime = Takemin(timeArr);

                data = data.concat(data1);
                _context9.next = 33;
                break;

              case 44:
                //管理员，vip排上面
                data.sort(function (o, p) {
                  var c = o.is_vip;
                  var d = p.is_vip;
                  if (c === d) {
                    return 0;
                  }
                  if (c === true && d === false) {
                    return -1;
                  }
                });
                // const accidArr = data.map((item)=>item.accid)
                // this.type = data[accidArr.indexOf(accid)].type
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

                isUser = function isUser(data) {
                  return data.name && data.name !== null;
                };

                this.numList = _ramda2.default.filter(isUser)(data);
                this.$apply();

              case 54:
              case 'end':
                return _context9.stop();
            }
          }
        }, _callee9, this);
      }));

      function onLoad(_x) {
        return _ref4.apply(this, arguments);
      }

      return onLoad;
    }()
  }, {
    key: 'onShow',
    value: function onShow() {
      this.isLIMIT = false;
      this.currentNav = 0;
    }
  }, {
    key: 'onUnload',
    value: function onUnload() {
      this.chatroom0.disconnect();
    }
  }]);
  return Chatroom;
}(_wepy2.default.page)) || _class);

Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Chatroom , 'pages/chatroom'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoYXRyb29tLmpzIl0sIm5hbWVzIjpbImxvZyIsImNoYXRyb29tQXBpIiwiYWNjb3VudEFwaSIsIkNoYXRyb29tIiwidXNlciIsInN0YXRlIiwiY29tbW9uIiwibmltIiwibXNncyIsImNoYXRyb29tIiwicm9vbUlkIiwiaW50b1ZpZXciLCJsYXN0Iiwic2Nyb2xsdG9wZXIiLCJpZENsaWVudCIsInJlZnJlc2hNc2dzIiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsImRhdGEiLCJuYXZzIiwiY3VycmVudE5hdiIsIm51bUxpc3QiLCJpc0xJTUlUIiwic2VuZGVkIiwidGV4dCIsInJvb21EYXRhIiwibmFtZSIsImluZGljYXRvckRvdHMiLCJhdXRvcGxheSIsImludGVydmFsIiwiZHVyYXRpb24iLCJzaG93Iiwic2hvd2VtIiwiZW1vamkiLCJkZWZhdWx0IiwiRW1vamkiLCJlbW9qaU9iaiIsIkVtb2ppT2JqIiwibm93VGltZSIsIm5vd1Blb3BsZXMiLCJzZWFyY2hpbnB1dCIsInNlbmRGb2N1cyIsInVzZXJMaW1pdEFyciIsInZpcFVzZXJMaXN0IiwiYWRtaW5Vc2VyTGlzdCIsIm1ldGhvZHMiLCJzY3JvbGwiLCJlIiwiZGV0YWlsIiwic2Nyb2xsVG9wIiwic2Nyb2xsSGVpZ2h0IiwibGVuZ3RoIiwiZ2V0Q291bnRzTnVtIiwiaWQiLCJqZlRva2VuIiwiZ2V0T25lQnlJZCIsInRvdGFsX21lbWJlcnNfY291bnQiLCIkYXBwbHkiLCJoYW5kbGVOYW1lIiwiaXRlbSIsInR5cGUiLCJiYW5JZCIsIm1hcCIsIml0ZW1BY2NpZCIsImZyb20iLCJnZXRJdGVtSWQiLCJuYXZpZ2F0ZVRvIiwidXJsIiwiaGFuZGxlTmFtZUlkIiwiaXRlbWlkIiwiZ2V0Rm9jdXMiLCJzZXREYXRhIiwib3BlbkVtb2ppIiwiaW1nUHJldmlldyIsIml0ZW1zIiwiaW1nVXJsIiwiaXNJbWciLCJtc2ciLCJpbWdBcnIiLCJmaWx0ZXIiLCJpbWdVcmxBcnIiLCJmaWxlIiwicHJldmlld0ltYWdlIiwiY3VycmVudCIsInVybHMiLCJzdWNjZXNzIiwicmVzIiwiY29uc29sZSIsInNlbmRFbW9qaSIsImV2ZW50IiwidGhhdCIsInRhcmdldCIsImRhdGFzZXQiLCJtc2dsZW4iLCJzdHIiLCJzdGFydCIsImxhc3RJbmRleE9mIiwiZW5kIiwibGVuIiwic2xpY2UiLCJwdXNoTXNnIiwiYmluZCIsInRyaW0iLCJzZW5kVGV4dCIsImVycm9yIiwicGFnZSIsIm9wciIsImluZm8iLCJjaGFuZ2VOYXYiLCJjdXJyZW50VGFyZ2V0IiwiaW5kZXgiLCJjaG9vc2VJbWFnZSIsImNvdW50IiwicHJldmlld0ZpbGUiLCJ3eEZpbGVQYXRoIiwidGVtcEZpbGVQYXRocyIsInNlbmRGaWxlIiwic2VuZCIsInB1c2hNc2dUZXh0Iiwic2V0VGV4dCIsInZhbHVlIiwiZ2V0TXNncyIsInNob3dMb2FkaW5nIiwiY2hhdHJvb20xIiwiZ2V0SGlzdG9yeU1zZ3MiLCJsaW1pdCIsInJldmVyc2UiLCJoaWRlTG9hZGluZyIsIkFycmF5IiwiaXNBcnJheSIsInZpcE5pY2siLCJuaWNrIiwiaXNWaXAiLCJpIiwiZnJvbU5pY2siLCJhZG1pbk5pY2siLCJpc0FkbWluIiwiaXNfYWRtaW4iLCJpc192aXAiLCJlbWppIiwicGFyc2VFbW9qaSIsInJlcGxhY2UiLCJjaGF0cm9vbUlkIiwiZmxvdyIsImZyb21BdmF0YXIiLCJmcm9tQ2xpZW50VHlwZSIsImZyb21DdXN0b20iLCJyZXNlbmQiLCJzdGF0dXMiLCJ0aW1lIiwidXNlclVwZGF0ZVRpbWUiLCJtZXJnZWQiLCJvblNoYXJlQXBwTWVzc2FnZSIsInRpdGxlIiwib3B0aW9ucyIsInJvb21pZCIsImNyZWF0b3IiLCJhcHBseSIsImhhc01zZ3MiLCJuaW1Ub2tlbiIsImFjY2lkIiwiYXZhdGFyVXJsIiwiYWRkVG9Sb29tIiwicm9vbUluZm8iLCJnZXRVc2VySW5mbyIsIm9iamVjdCIsInd4Iiwic2hvd1RvYXN0IiwiaWNvbiIsImdldENoYXRyb29tQWRkcmVzc2VzIiwiYWRkcmVzcyIsImdldEluc3RhbmNlIiwiYWNjb3VudCIsInRva2VuIiwiY2hhdHJvb21BZGRyZXNzZXMiLCJvbm1zZ3MiLCJ0aXAiLCJjb25kIiwiZXF1YWxzIiwiYWx3YXlzIiwiYXR0YWNoIiwidGlwTXNnIiwiRGF0ZSIsInBhcnNlIiwidG9JU09TdHJpbmciLCJzcGxpdCIsInRvVGltZVN0cmluZyIsInN1YnN0ciIsIm9uY29ubmVjdCIsImNoYXRyb29tMCIsIlRha2VtaW4iLCJBcnIiLCJNYXRoIiwibWluIiwiZ2V0VXNlckxpc3QiLCJtaW5UaW1lIiwiZGF0YTEiLCJ0aW1lQXJyIiwiZW50ZXJUaW1lIiwiY29uY2F0Iiwic29ydCIsIm8iLCJwIiwiYyIsImQiLCJpc1VzZXIiLCJkaXNjb25uZWN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0U7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOztJQUFZQSxHOztBQUNaOztBQUdBOztJQUFZQyxXOztBQUNaOztJQUFZQyxVOztBQUNaOzs7Ozs7SUFvQnFCQyxRLFdBakJwQix3QkFBUTtBQUNQQyxRQUFNO0FBQUEsV0FBU0MsTUFBTUMsTUFBTixDQUFhRixJQUF0QjtBQUFBLEdBREM7QUFFUEcsT0FBSztBQUFBLFdBQVNGLE1BQU1DLE1BQU4sQ0FBYUMsR0FBdEI7QUFBQSxHQUZFO0FBR1BDLFFBQU0sY0FBVUgsS0FBVixFQUFpQjtBQUNyQixXQUFPQSxNQUFNSSxRQUFOLENBQWVELElBQWYsQ0FBb0IsS0FBS0UsTUFBekIsS0FBb0MsRUFBM0M7QUFDRCxHQUxNO0FBTVBDLFlBQVUsa0JBQVNOLEtBQVQsRUFBZ0I7QUFDeEIsUUFBTUcsT0FBT0gsTUFBTUksUUFBTixDQUFlRCxJQUFmLENBQW9CLEtBQUtFLE1BQXpCLEtBQW9DLEVBQWpEO0FBQ0EsUUFBTUUsT0FBTyxnQkFBRUEsSUFBRixDQUFPSixJQUFQLENBQWI7QUFDQSxRQUFJLEtBQUtL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TCxDQUFlaUIsVUFBZjtBQUNEOzs7RUF0Y3VDLGVBQUtyRyxJO2tCQUF0QnRHLFEiLCJmaWxlIjoiY2hhdHJvb20uanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xyXG4gIGltcG9ydCBSIGZyb20gJy4uL2xpYnMvcmFtZGEnXHJcbiAgaW1wb3J0IENoYXRyb29tU0RLIGZyb20gJy4uL3V0aWxzL2NoYXRyb29tJ1xyXG4gIGltcG9ydCBOSU0gZnJvbSAnLi4vdXRpbHMvbmltJ1xyXG4gIGltcG9ydCBGYWNlSU0gZnJvbSAnLi4vdXRpbHMvV2ViSU0nXHJcbiAgaW1wb3J0ICogYXMgbG9nIGZyb20gJy4uL3V0aWxzL2xvZydcclxuICBpbXBvcnQge1xyXG4gICAgcmVmcmVzaE1zZ3NcclxuICB9IGZyb20gJy4uL2FjdGlvbnMvY2hhdHJvb20nXHJcbiAgaW1wb3J0ICogYXMgY2hhdHJvb21BcGkgZnJvbSAnLi4vYXBpcy9jaGF0cm9vbSdcclxuICBpbXBvcnQgKiBhcyBhY2NvdW50QXBpIGZyb20gJy4uL2FwaXMvYWNjb3VudCdcclxuICBpbXBvcnQge1xyXG4gICAgY29ubmVjdFxyXG4gIH0gZnJvbSAnd2VweS1yZWR1eCdcclxuICBAY29ubmVjdCh7XHJcbiAgICB1c2VyOiBzdGF0ZSA9PiBzdGF0ZS5jb21tb24udXNlcixcclxuICAgIG5pbTogc3RhdGUgPT4gc3RhdGUuY29tbW9uLm5pbSxcclxuICAgIG1zZ3M6IGZ1bmN0aW9uIChzdGF0ZSkge1xyXG4gICAgICByZXR1cm4gc3RhdGUuY2hhdHJvb20ubXNnc1t0aGlzLnJvb21JZF0gfHwgW11cclxuICAgIH0sXHJcbiAgICBpbnRvVmlldzogZnVuY3Rpb24oc3RhdGUpIHtcclxuICAgICAgY29uc3QgbXNncyA9IHN0YXRlLmNoYXRyb29tLm1zZ3NbdGhpcy5yb29tSWRdIHx8IFtdXHJcbiAgICAgIGNvbnN0IGxhc3QgPSBSLmxhc3QobXNncylcclxuICAgICAgaWYgKHRoaXMuc2Nyb2xsdG9wZXIpIHtcclxuICAgICAgICByZXR1cm4gJydcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gbGFzdCA/IGxhc3QuaWRDbGllbnQgOiAnJ1xyXG4gICAgfVxyXG4gIH0sIHtcclxuICAgIHJlZnJlc2hNc2dzXHJcbiAgfSlcclxuICBleHBvcnQgZGVmYXVsdCBjbGFzcyBDaGF0cm9vbSBleHRlbmRzIHdlcHkucGFnZSB7XHJcbiAgICBjb25maWcgPSB7XHJcbiAgICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICfogYrlpKnlrqQnXHJcbiAgICB9XHJcbiAgICBkYXRhID0ge1xyXG4gICAgICBuYXZzOiBbJ+iBiuWkqScsICfor6bmg4UnXSxcclxuICAgICAgY3VycmVudE5hdjogMCxcclxuICAgICAgbnVtTGlzdDogW10sXHJcbiAgICAgIGlzTElNSVQ6IGZhbHNlLFxyXG4gICAgICBjaGF0cm9vbTogbnVsbCxcclxuICAgICAgcm9vbUlkOiBudWxsLFxyXG4gICAgICBzZW5kZWQ6IGZhbHNlLFxyXG4gICAgICB0ZXh0OiAnJyxcclxuICAgICAgcm9vbURhdGE6IHtcclxuICAgICAgICBuYW1lOiAn5Yqg6L295LitLi4uJ1xyXG4gICAgICB9LFxyXG4gICAgICBpbmRpY2F0b3JEb3RzOiB0cnVlLFxyXG4gICAgICBhdXRvcGxheTogZmFsc2UsXHJcbiAgICAgIGludGVydmFsOiA1MDAwLFxyXG4gICAgICBkdXJhdGlvbjogMTAwMCxcclxuICAgICAgc2hvdzogJ2Vtb2ppX2xpc3QnLFxyXG4gICAgICBzaG93ZW06ICdvcGVyYXRpb24nLFxyXG4gICAgICBlbW9qaTogRmFjZUlNLmRlZmF1bHQuRW1vamksXHJcbiAgICAgIGVtb2ppT2JqOiBGYWNlSU0uZGVmYXVsdC5FbW9qaU9iaixcclxuICAgICAgbm93VGltZTogJycsXHJcbiAgICAgIG5vd1Blb3BsZXM6IDAsXHJcbiAgICAgIHNlYXJjaGlucHV0OicnLFxyXG4gICAgICBzZW5kRm9jdXM6IGZhbHNlLFxyXG4gICAgICB1c2VyTGltaXRBcnI6W10sXHJcbiAgICAgIHZpcFVzZXJMaXN0OltdLFxyXG4gICAgICBhZG1pblVzZXJMaXN0OltdLFxyXG4gICAgfVxyXG4gICAgbWV0aG9kcyA9IHtcclxuICAgICAgYXN5bmMgc2Nyb2xsIChlKSB7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coZS5kZXRhaWwuc2Nyb2xsSGVpZ2h0KeWIpOaWreaYr+WQpuWcqOafpeeci+WOhuWPsuiusOW9leS4jea7muWKqFxyXG4gICAgICAgIGlmIChlLmRldGFpbC5zY3JvbGxUb3AgPCBlLmRldGFpbC5zY3JvbGxIZWlnaHQqMC41IHx8IGUuZGV0YWlsLnNjcm9sbFRvcCA8IDEwMCkge1xyXG4gICAgICAgICAgLy8gY29uc29sZS5sb2coZS5kZXRhaWwuZGVsdGFYKVxyXG4gICAgICAgICAgdGhpcy5zY3JvbGx0b3BlciA9IDFcclxuICAgICAgICB9ZWxzZSB7XHJcbiAgICAgICAgICB0aGlzLnNjcm9sbHRvcGVyID0gMFxyXG4gICAgICAgIH1cclxuICAgICAgICBpZihlLmRldGFpbC5zY3JvbGxUb3AgPCAxMCAmJiB0aGlzLm1zZ3MubGVuZ3RoIDwgMTUwKSB7XHJcbiAgICAgICAgfVxyXG4gICAgICB9LFxyXG4gICAgICBhc3luYyBnZXRDb3VudHNOdW0oaWQsIGpmVG9rZW4pIHtcclxuICAgICAgICBjb25zdCB7IHRvdGFsX21lbWJlcnNfY291bnQgfSA9IGF3YWl0IGNoYXRyb29tQXBpLmdldE9uZUJ5SWQoaWQsIGpmVG9rZW4pXHJcbiAgICAgICAgdGhpcy5ub3dQZW9wbGVzID0gdG90YWxfbWVtYmVyc19jb3VudC0xXHJcbiAgICAgICAgdGhpcy4kYXBwbHkoKVxyXG4gICAgICB9LFxyXG4gICAgICBhc3luYyBoYW5kbGVOYW1lIChpdGVtKSB7XHJcbiAgICAgICAgY29uc3QgdHlwZSA9IHRoaXMudHlwZVxyXG4gICAgICAgIGNvbnN0IGJhbklkID0gdGhpcy51c2VyTGltaXRBcnIubWFwKChpdGVtKT0+aXRlbS5pZClcclxuICAgICAgICBsZXQgcm9vbUlkID0gdGhpcy5yb29tSWRcclxuICAgICAgICBjb25zdCBpdGVtQWNjaWQgPSBpdGVtLmZyb21cclxuICAgICAgICBjb25zdCB7aWR9ID0gYXdhaXQgY2hhdHJvb21BcGkuZ2V0SXRlbUlkKGl0ZW1BY2NpZClcclxuICAgICAgICB3ZXB5Lm5hdmlnYXRlVG8oe1xyXG4gICAgICAgICAgdXJsOiBgdXNlckluZm8/aWQ9JHtpZH0mcm9vbUlkPSR7cm9vbUlkfSZiYW5JZD0ke2JhbklkfSZ0eXBlPSR7dHlwZX1gXHJcbiAgICAgICAgfSlcclxuICAgICAgfSxcclxuICAgICAgaGFuZGxlTmFtZUlkIChpdGVtKSB7XHJcbiAgICAgICAgY29uc3QgdHlwZSA9IHRoaXMudHlwZVxyXG4gICAgICAgIGNvbnN0IGJhbklkID0gdGhpcy51c2VyTGltaXRBcnIubWFwKChpdGVtKT0+aXRlbS5pZClcclxuICAgICAgICBjb25zdCBpdGVtaWQgPSBpdGVtLmlkXHJcbiAgICAgICAgbGV0IHJvb21JZCA9IHRoaXMucm9vbUlkXHJcbiAgICAgICAgd2VweS5uYXZpZ2F0ZVRvKHtcclxuICAgICAgICAgIHVybDogYHVzZXJJbmZvP2lkPSR7aXRlbWlkfSZyb29tSWQ9JHtyb29tSWR9JmJhbklkPSR7YmFuSWR9JnR5cGU9JHt0eXBlfWBcclxuICAgICAgICB9KVxyXG4gICAgICB9LFxyXG4gICAgICBnZXRGb2N1cyAoKSB7XHJcbiAgICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICAgIHNlbmRGb2N1cyA6IGZhbHNlXHJcbiAgICAgICAgfSlcclxuICAgICAgfSxcclxuICAgICAgb3BlbkVtb2ppIChlKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuc2hvdyA9PT0gJ3Nob3dFbW9qaScpIHtcclxuICAgICAgICAgIHRoaXMuc2hvdyA9ICdlbW9qaV9saXN0J1xyXG4gICAgICAgICAgdGhpcy5zaG93ZW0gPSAnb3BlcmF0aW9uJ1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICB0aGlzLnNob3cgPSAnc2hvd0Vtb2ppJ1xyXG4gICAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuJGFwcGx5KClcclxuICAgICAgfSxcclxuICAgICAgaW1nUHJldmlldyAoaXRlbXMsIG1zZ3MpIHtcclxuICAgICAgICBjb25zdCBpbWdVcmwgPSBpdGVtc1xyXG4gICAgICAgIGNvbnN0IGlzSW1nID0gbXNnID0+IG1zZy50eXBlID09PSAnaW1hZ2UnXHJcbiAgICAgICAgY29uc3QgaW1nQXJyID0gUi5maWx0ZXIoaXNJbWcpKG1zZ3MpXHJcbiAgICAgICAgY29uc3QgaW1nVXJsQXJyID0gaW1nQXJyLm1hcChtc2cgPT4ge1xyXG4gICAgICAgICAgcmV0dXJuIG1zZy5maWxlLnVybFxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgd2VweS5wcmV2aWV3SW1hZ2Uoe1xyXG4gICAgICAgICAgY3VycmVudDogaW1nVXJsLFxyXG4gICAgICAgICAgdXJsczogaW1nVXJsQXJyLFxyXG4gICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKHJlcykge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhyZXMpXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgICAgfSxcclxuICAgICAgYXN5bmMgc2VuZEVtb2ppIChldmVudCkge1xyXG4gICAgICAgIHZhciB0aGF0ID0gdGhpc1xyXG4gICAgICAgIHZhciBlbW9qaSA9IGV2ZW50LnRhcmdldC5kYXRhc2V0LmVtb2ppXHJcbiAgICAgICAgdmFyIG1zZ2xlbiA9IHRoYXQuZGF0YS50ZXh0Lmxlbmd0aCAtIDFcclxuICAgICAgICBpZiAoZW1vamkgJiYgZW1vamkgIT09ICdbZGVsXScpIHtcclxuICAgICAgICAgIHZhciBzdHIgPSB0aGF0LmRhdGEudGV4dCArIGVtb2ppXHJcbiAgICAgICAgfSBlbHNlIGlmIChlbW9qaSA9PT0gJ1tkZWxdJykge1xyXG4gICAgICAgICAgdmFyIHN0YXJ0ID0gdGhhdC5kYXRhLnRleHQubGFzdEluZGV4T2YoJ1snKVxyXG4gICAgICAgICAgdmFyIGVuZCA9IHRoYXQuZGF0YS50ZXh0Lmxhc3RJbmRleE9mKCddJylcclxuICAgICAgICAgIHZhciBsZW4gPSBlbmQgLSBzdGFydFxyXG4gICAgICAgICAgaWYgKGVuZCAhPT0gLTEgJiYgZW5kID09PSBtc2dsZW4gJiYgbGVuID49IDMgJiYgbGVuIDw9IDQpIHtcclxuICAgICAgICAgICAgc3RyID0gdGhhdC5kYXRhLnRleHQuc2xpY2UoMCwgc3RhcnQpXHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBzdHIgPSB0aGF0LmRhdGEudGV4dC5zbGljZSgwLCBtc2dsZW4pXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMudGV4dCA9IHN0clxyXG4gICAgICAgIGNvbnN0IHB1c2hNc2cgPSB0aGlzLm1ldGhvZHMucHVzaE1zZy5iaW5kKHRoaXMpXHJcbiAgICAgICAgdmFyIHRleHQgPSBSLnRyaW0odGhpcy50ZXh0KVxyXG4gICAgICAgIHRoaXMudGV4dCA9ICcnXHJcbiAgICAgICAgaWYgKHRleHQubGVuZ3RoKSB7XHJcbiAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBjb25zdCBtc2cgPSBhd2FpdCB0aGlzLmNoYXRyb29tLnNlbmRUZXh0KHtcclxuICAgICAgICAgICAgICB0ZXh0XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIHRoaXMudGV4dCA9ICcnXHJcbiAgICAgICAgICAgIHB1c2hNc2cobXNnKVxyXG4gICAgICAgICAgICB0aGlzLnNob3cgPSAnZW1vamlfbGlzdCdcclxuICAgICAgICAgICAgdGhpcy5zZXREYXRhKHsgIFxyXG4gICAgICAgICAgICAgIHNlYXJjaGlucHV0OiAnJywgIFxyXG4gICAgICAgICAgICB9KSAgXHJcbiAgICAgICAgICAgIHRoaXMuJGFwcGx5KClcclxuICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgbG9nLmVycm9yKHtcclxuICAgICAgICAgICAgICBwYWdlOiAnY2hhdHJvb20nLFxyXG4gICAgICAgICAgICAgIG9wcjogJ3NlbmRUZXh0JyxcclxuICAgICAgICAgICAgICBpbmZvOiBlXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9LFxyXG4gICAgICBjaGFuZ2VOYXYgKGUpIHtcclxuICAgICAgICB0aGlzLmN1cnJlbnROYXYgPSBlLmN1cnJlbnRUYXJnZXQuZGF0YXNldC5pbmRleFxyXG4gICAgICAgIHRoaXMuc2VuZGVkID0gZmFsc2VcclxuICAgICAgICB0aGlzLiRhcHBseSgpXHJcbiAgICAgIH0sXHJcbiAgICAgIGFzeW5jIGNob29zZUltYWdlKCkge1xyXG4gICAgICAvLyDov5vooYzlm77niYfpgInmi6nlubbkuIrkvKBcclxuICAgICAgY29uc3QgcHVzaE1zZyA9IHRoaXMubWV0aG9kcy5wdXNoTXNnLmJpbmQodGhpcylcclxuICAgICAgY29uc3QgcmVzID0gYXdhaXQgd2VweS5jaG9vc2VJbWFnZSh7XHJcbiAgICAgICAgY291bnQ6IDFcclxuICAgICAgfSlcclxuICAgICAgdHJ5IHtcclxuICAgICAgICBjb25zdCBmaWxlID0gYXdhaXQgdGhpcy5jaGF0cm9vbS5wcmV2aWV3RmlsZSh7XHJcbiAgICAgICAgICB0eXBlOiAnaW1hZ2UnLFxyXG4gICAgICAgICAgd3hGaWxlUGF0aDogcmVzLnRlbXBGaWxlUGF0aHNbMF1cclxuICAgICAgICB9KVxyXG4gICAgICAgIGNvbnN0IG1zZyA9IGF3YWl0IHRoaXMuY2hhdHJvb20uc2VuZEZpbGUoe1xyXG4gICAgICAgICAgdHlwZTogJ2ltYWdlJyxcclxuICAgICAgICAgIGZpbGU6IGZpbGVcclxuICAgICAgICB9KVxyXG4gICAgICAgIHB1c2hNc2cobXNnKVxyXG4gICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIGxvZy5lcnJvcih7XHJcbiAgICAgICAgICBwYWdlOiAnY2hhdHJvb20nLFxyXG4gICAgICAgICAgb3ByOiAnc2VuZEZpbGUnLFxyXG4gICAgICAgICAgaW5mbzogZXJyb3JcclxuICAgICAgICB9KVxyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgYXN5bmMgc2VuZChlKSB7XHJcbiAgICAgIC8vPyB3aHkgYmluZFxyXG4gICAgICB0aGlzLnNldERhdGEoeyAgXHJcbiAgICAgICAgc2VhcmNoaW5wdXQ6ICcnLCAgXHJcbiAgICAgICAgc2VuZEZvY3VzOiB0cnVlLFxyXG4gICAgICB9KSBcclxuICAgICAgdGhpcy5zY3JvbGx0b3BlciA9IDBcclxuICAgICAgY29uc3QgcHVzaE1zZ1RleHQgPSB0aGlzLm1ldGhvZHMucHVzaE1zZ1RleHQuYmluZCh0aGlzKVxyXG4gICAgICBjb25zdCB0ZXh0ID0gUi50cmltKHRoaXMudGV4dClcclxuICAgICAgdGhpcy50ZXh0ID0gJydcclxuICAgICAgaWYgKHRleHQubGVuZ3RoKSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgIGNvbnN0IG1zZyA9IGF3YWl0IHRoaXMuY2hhdHJvb20uc2VuZFRleHQoe1xyXG4gICAgICAgICAgICB0ZXh0XHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgICAgdGhpcy50ZXh0ID0gJydcclxuICAgICAgICAgIHB1c2hNc2dUZXh0KG1zZylcclxuICAgICAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgICBsb2cuZXJyb3Ioe1xyXG4gICAgICAgICAgICBwYWdlOiAnY2hhdHJvb20nLFxyXG4gICAgICAgICAgICBvcHI6ICdzZW5kVGV4dCcsXHJcbiAgICAgICAgICAgIGluZm86IGVcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgc2V0VGV4dChlKSB7XHJcbiAgICAgIHRoaXMudGV4dCA9IGUuZGV0YWlsLnZhbHVlXHJcbiAgICB9LFxyXG4gICAgYXN5bmMgZ2V0TXNncygpIHtcclxuICAgICAgd2VweS5zaG93TG9hZGluZygpXHJcbiAgICAgIGNvbnN0IHB1c2hNc2cgPSB0aGlzLm1ldGhvZHMucHVzaE1zZy5iaW5kKHRoaXMpXHJcbiAgICAgIGNvbnN0IGNoYXRyb29tMSA9IHRoaXMuY2hhdHJvb21cclxuICAgICAgY29uc3QgcmVzID0gYXdhaXQgY2hhdHJvb20xLmdldEhpc3RvcnlNc2dzKHtcclxuICAgICAgICBsaW1pdDogNTBcclxuICAgICAgfSlcclxuICAgICAgY29uc3QgbXNncyA9IHJlcy5tc2dzLmZpbHRlcihtc2cgPT4gbXNnLnR5cGUgIT09ICdub3RpZmljYXRpb24nICYmIG1zZy50eXBlICE9PSAndGlwJykucmV2ZXJzZSgpXHJcbiAgICAgIHB1c2hNc2cobXNncyB8fCBbXSlcclxuICAgICAgdGhpcy4kYXBwbHkoKVxyXG4gICAgICB3ZXB5LmhpZGVMb2FkaW5nKClcclxuICAgIH0sXHJcbiAgICBwdXNoTXNnOiBmdW5jdGlvbiAobXNncykge1xyXG4gICAgICBjb25zdCB7IHJlZnJlc2hNc2dzIH0gPSB0aGlzLm1ldGhvZHNcclxuICAgICAgaWYgKCFBcnJheS5pc0FycmF5KG1zZ3MpKSB7XHJcbiAgICAgICAgbXNncyA9IFttc2dzXVxyXG4gICAgICB9XHJcbiAgICAgIC8vVklQIOaYvuekulxyXG4gICAgICBjb25zdCB2aXBOaWNrID0gdGhpcy52aXBVc2VyTGlzdC5tYXAoKGl0ZW0pID0+IGl0ZW0ubmljaylcclxuICAgICAgY29uc3QgaXNWaXAgPSBmdW5jdGlvbihtc2cpe1xyXG4gICAgICAgIGZvciAodmFyIGkgPSB2aXBOaWNrLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XHJcbiAgICAgICAgICBpZiAodmlwTmlja1tpXSA9PT0gbXNnLmZyb21OaWNrKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBtc2cuZnJvbU5pY2tcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgY29uc3QgYWRtaW5OaWNrID0gdGhpcy5hZG1pblVzZXJMaXN0Lm1hcCgoaXRlbSkgPT4gaXRlbS5uaWNrKVxyXG4gICAgICBjb25zdCBpc0FkbWluID0gZnVuY3Rpb24obXNnKXtcclxuICAgICAgICBmb3IgKHZhciBpID0gYWRtaW5OaWNrLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XHJcbiAgICAgICAgICBpZiAoYWRtaW5OaWNrW2ldID09PSBtc2cuZnJvbU5pY2spIHtcclxuICAgICAgICAgICAgcmV0dXJuIG1zZy5mcm9tTmlja1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBSLmZpbHRlcihpc0FkbWluKShtc2dzKS5tYXAoaXRlbSA9PiBpdGVtLmlzX2FkbWluID0gdHJ1ZSlcclxuICAgICAgUi5maWx0ZXIoaXNWaXApKG1zZ3MpLm1hcChpdGVtID0+IGl0ZW0uaXNfdmlwID0gdHJ1ZSlcclxuICAgICAgbXNncyA9IG1zZ3MubWFwKG1zZyA9PiB7XHJcbiAgICAgICAgaWYgKG1zZy50eXBlID09PSAndGV4dCcpIHtcclxuICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIGVtamk6IEZhY2VJTS5kZWZhdWx0LnBhcnNlRW1vamkobXNnLnRleHQucmVwbGFjZSgvXFxuL21nLCAnJykpLFxyXG4gICAgICAgICAgICBjaGF0cm9vbUlkOiBtc2cuY2hhdHJvb21JZCxcclxuICAgICAgICAgICAgZmxvdzogbXNnLmZsb3csXHJcbiAgICAgICAgICAgIGZyb206IG1zZy5mcm9tLFxyXG4gICAgICAgICAgICBmcm9tQXZhdGFyOiBtc2cuZnJvbUF2YXRhcixcclxuICAgICAgICAgICAgZnJvbUNsaWVudFR5cGU6IG1zZy5mcm9tQ2xpZW50VHlwZSxcclxuICAgICAgICAgICAgZnJvbUN1c3RvbTogbXNnLmZyb21DdXN0b20sXHJcbiAgICAgICAgICAgIGZyb21OaWNrOiBtc2cuZnJvbU5pY2ssXHJcbiAgICAgICAgICAgIGlkQ2xpZW50OiBtc2cuaWRDbGllbnQsXHJcbiAgICAgICAgICAgIHJlc2VuZDogbXNnLnJlc2VuZCxcclxuICAgICAgICAgICAgc3RhdHVzOiBtc2cuc3RhdHVzLFxyXG4gICAgICAgICAgICB0ZXh0OiBtc2cudGV4dCxcclxuICAgICAgICAgICAgdGltZTogbXNnLnRpbWUsXHJcbiAgICAgICAgICAgIHR5cGU6IG1zZy50eXBlLFxyXG4gICAgICAgICAgICB1c2VyVXBkYXRlVGltZTogbXNnLnVzZXJVcGRhdGVUaW1lLFxyXG4gICAgICAgICAgICBpc192aXA6IG1zZy5pc192aXAsXHJcbiAgICAgICAgICAgIGlzX2FkbWluOiBtc2cuaXNfYWRtaW4sXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHJldHVybiBtc2dcclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcbiAgICAgIGxldCByb29tSWQgPSB0aGlzLnJvb21JZFxyXG4gICAgICBpZiAobXNncy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgcm9vbUlkID0gbXNnc1swXS5jaGF0cm9vbUlkXHJcbiAgICAgIH1cclxuICAgICAgY29uc3QgbWVyZ2VkID0gWy4uLnRoaXMubXNncywgLi4ubXNnc11cclxuICAgICAgcmVmcmVzaE1zZ3Mocm9vbUlkLCBtZXJnZWQpXHJcbiAgICAgIHRoaXMuc2VuZGVkID0gdHJ1ZVxyXG4gICAgICB0aGlzLiRhcHBseSgpXHJcbiAgICB9LFxyXG4gICAgcHVzaE1zZ1RleHQ6IGZ1bmN0aW9uIChtc2dzKSB7XHJcbiAgICAgIGNvbnN0IHsgcmVmcmVzaE1zZ3MgfSA9IHRoaXMubWV0aG9kc1xyXG4gICAgICBpZiAoIUFycmF5LmlzQXJyYXkobXNncykpIHtcclxuICAgICAgICBtc2dzID0gW21zZ3NdXHJcbiAgICAgIH1cclxuICAgICAgY29uc3QgdmlwTmljayA9IHRoaXMudmlwVXNlckxpc3QubWFwKChpdGVtKSA9PiBpdGVtLm5pY2spXHJcbiAgICAgIGNvbnN0IGlzVmlwID0gZnVuY3Rpb24obXNnKXtcclxuICAgICAgICBmb3IgKHZhciBpID0gdmlwTmljay5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xyXG4gICAgICAgICAgaWYgKHZpcE5pY2tbaV0gPT09IG1zZy5mcm9tTmljaykge1xyXG4gICAgICAgICAgICByZXR1cm4gbXNnLmZyb21OaWNrXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIGNvbnN0IGFkbWluTmljayA9IHRoaXMuYWRtaW5Vc2VyTGlzdC5tYXAoKGl0ZW0pID0+IGl0ZW0ubmljaylcclxuICAgICAgY29uc3QgaXNBZG1pbiA9IGZ1bmN0aW9uKG1zZyl7XHJcbiAgICAgICAgZm9yICh2YXIgaSA9IGFkbWluTmljay5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xyXG4gICAgICAgICAgaWYgKGFkbWluTmlja1tpXSA9PT0gbXNnLmZyb21OaWNrKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBtc2cuZnJvbU5pY2tcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgUi5maWx0ZXIoaXNBZG1pbikobXNncykubWFwKGl0ZW0gPT4gaXRlbS5pc19hZG1pbiA9IHRydWUpXHJcbiAgICAgIFIuZmlsdGVyKGlzVmlwKShtc2dzKS5tYXAoaXRlbSA9PiBpdGVtLmlzX3ZpcCA9IHRydWUpXHJcbiAgICAgIG1zZ3MgPSBtc2dzLm1hcChtc2cgPT4ge1xyXG4gICAgICAgIGlmIChtc2cudHlwZSA9PT0gJ3RleHQnKSB7XHJcbiAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBlbWppOiBGYWNlSU0uZGVmYXVsdC5wYXJzZUVtb2ppKG1zZy50ZXh0LnJlcGxhY2UoL1xcbi9tZywgJycpKSxcclxuICAgICAgICAgICAgY2hhdHJvb21JZDogbXNnLmNoYXRyb29tSWQsXHJcbiAgICAgICAgICAgIGZsb3c6IG1zZy5mbG93LFxyXG4gICAgICAgICAgICBmcm9tOiBtc2cuZnJvbSxcclxuICAgICAgICAgICAgZnJvbUF2YXRhcjogbXNnLmZyb21BdmF0YXIsXHJcbiAgICAgICAgICAgIGZyb21DbGllbnRUeXBlOiBtc2cuZnJvbUNsaWVudFR5cGUsXHJcbiAgICAgICAgICAgIGZyb21DdXN0b206IG1zZy5mcm9tQ3VzdG9tLFxyXG4gICAgICAgICAgICBmcm9tTmljazogbXNnLmZyb21OaWNrLFxyXG4gICAgICAgICAgICBpZENsaWVudDogbXNnLmlkQ2xpZW50LFxyXG4gICAgICAgICAgICByZXNlbmQ6IG1zZy5yZXNlbmQsXHJcbiAgICAgICAgICAgIHN0YXR1czogbXNnLnN0YXR1cyxcclxuICAgICAgICAgICAgdGV4dDogbXNnLnRleHQsXHJcbiAgICAgICAgICAgIHRpbWU6IG1zZy50aW1lLFxyXG4gICAgICAgICAgICB0eXBlOiBtc2cudHlwZSxcclxuICAgICAgICAgICAgdXNlclVwZGF0ZVRpbWU6IG1zZy51c2VyVXBkYXRlVGltZSxcclxuICAgICAgICAgICAgaXNfdmlwOiBtc2cuaXNfdmlwLFxyXG4gICAgICAgICAgICBpc19hZG1pbjogbXNnLmlzX2FkbWluLFxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICByZXR1cm4gbXNnXHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG4gICAgICBsZXQgcm9vbUlkID0gdGhpcy5yb29tSWRcclxuICAgICAgaWYgKG1zZ3MubGVuZ3RoID4gMCkge1xyXG4gICAgICAgIHJvb21JZCA9IG1zZ3NbMF0uY2hhdHJvb21JZFxyXG4gICAgICB9XHJcbiAgICAgIGNvbnN0IG1lcmdlZCA9IFsuLi50aGlzLm1zZ3MsIC4uLm1zZ3NdXHJcbiAgICAgIHJlZnJlc2hNc2dzKHJvb21JZCwgbWVyZ2VkKVxyXG4gICAgICB0aGlzLnNlbmRlZCA9IHRydWVcclxuICAgICAgdGhpcy4kYXBwbHkoKVxyXG4gICAgfSxcclxuICB9XHJcbiAgYXN5bmMgb25Mb2FkKG9wdGlvbnMpIHtcclxuICAgIGNvbnN0IHsgaWQgfSA9IG9wdGlvbnNcclxuICAgIGNvbnN0IHtyb29taWR9ID0gb3B0aW9uc1xyXG4gICAgY29uc3Qge2NyZWF0b3J9ID0gb3B0aW9uc1xyXG4gICAgdGhpcy5yb29tSWQgPSByb29taWRcclxuICAgIGNvbnN0IHsgcmVmcmVzaE1zZ3MgfSA9IHRoaXMubWV0aG9kc1xyXG4gICAgY29uc3QgcHVzaE1zZyA9IHRoaXMubWV0aG9kcy5wdXNoTXNnLmJpbmQodGhpcylcclxuICAgIGNvbnN0IGdldENvdW50c051bSA9IHRoaXMubWV0aG9kcy5nZXRDb3VudHNOdW0uYmluZCh0aGlzKVxyXG4gICAgY29uc3QgYXBwbHkgPSB0aGlzLiRhcHBseS5iaW5kKHRoaXMpXHJcbiAgICBjb25zdCBoYXNNc2dzID0gdGhpcy5tc2dzLmxlbmd0aCA+IDBcclxuICAgIFxyXG4gICAgd2VweS5zaG93TG9hZGluZygpXHJcbiAgICBjb25zdCB7IG5pbVRva2VuLCBhY2NpZCwgYXZhdGFyVXJsLCBqZlRva2VuIH0gPSB0aGlzLnVzZXJcclxuICAgIGF3YWl0IGNoYXRyb29tQXBpLmFkZFRvUm9vbShyb29taWQsIGNyZWF0b3IsIGFjY2lkKVxyXG4gICAgY29uc3Qgcm9vbUluZm8gPSBhd2FpdCBjaGF0cm9vbUFwaS5nZXRPbmVCeUlkKGlkLCBqZlRva2VuKVxyXG4gICAgLy/ojrflj5blvZPliY3nlKjmiLd0eXBlIOS8oOWFpeS5i+WQjumhtemdouWIpOaWreadg+mZkFxyXG4gICAgY29uc3QgW29iamVjdF0gPSBhd2FpdCBhY2NvdW50QXBpLmdldFVzZXJJbmZvKHJvb21pZCxhY2NpZClcclxuICAgIHRoaXMudHlwZSA9IG9iamVjdC50eXBlXHJcbiAgICBpZiAodGhpcy50eXBlID09PSAnTElNSVRFRCcpIHtcclxuICAgICAgdGhpcy5pc0xJTUlUID0gdHJ1ZVxyXG4gICAgICB3eC5zaG93VG9hc3Qoe1xyXG4gICAgICAgIHRpdGxlOiAn6KKr56aB6KiA77yM6K+36IGU57O7566h55CG5ZGY6Kej6ZmkJyxcclxuICAgICAgICBpY29uOiAnc3VjY2VzcycsXHJcbiAgICAgICAgZHVyYXRpb246IDIwMDBcclxuICAgICAgfSlcclxuICAgIH1cclxuICAgIHRoaXMucm9vbURhdGEgPSByb29tSW5mb1xyXG4gICAgY29uc3Qgcm9vbUlkID0gdGhpcy5yb29tSWRcclxuICAgIGNvbnN0IGFkZHJlc3MgPSBhd2FpdCBOSU0uZ2V0Q2hhdHJvb21BZGRyZXNzZXMoYWNjaWQsIHJvb21JZClcclxuICAgIGNvbnN0IFtjaGF0cm9vbTAsY2hhdHJvb20xXSA9IENoYXRyb29tU0RLLmdldEluc3RhbmNlKHtcclxuICAgICAgYWNjb3VudDogYWNjaWQsXHJcbiAgICAgIHRva2VuOiBuaW1Ub2tlbixcclxuICAgICAgY2hhdHJvb21JZDogcm9vbUlkLFxyXG4gICAgICBjaGF0cm9vbUFkZHJlc3NlczogYWRkcmVzcyxcclxuICAgICAgb25tc2dzOiBmdW5jdGlvbihtc2dzKSB7XHJcbiAgICAgICAgbG9nLmluZm8oe1xyXG4gICAgICAgICAgcGFnZTogJ2NoYXRyb29tJyxcclxuICAgICAgICAgIG9wcjogJ2luaXRpYWxpemUgc2RrIGluc3RhbmNlJyxcclxuICAgICAgICAgIGluZm86IG1zZ3NcclxuICAgICAgICB9KVxyXG4gICAgICAgIHB1c2hNc2cobXNncy5tYXAobXNnID0+IHtcclxuICAgICAgICAgIGlmIChtc2cudHlwZSA9PT0gJ25vdGlmaWNhdGlvbicpIHtcclxuICAgICAgICAgICAgZ2V0Q291bnRzTnVtKGlkLCBqZlRva2VuKVxyXG4gICAgICAgICAgICAgIC8vIOi/m+WFpeiBiuWkqeWupOS/oeaBr1xyXG4gICAgICAgICAgICAgIGNvbnN0IHRpcCA9IFIuY29uZChbXHJcbiAgICAgICAgICAgICAgICBbUi5lcXVhbHMoJ21lbWJlckVudGVyJyksIFIuYWx3YXlzKCfliqDlhaXogYrlpKnlrqQnKV0sXHJcbiAgICAgICAgICAgICAgICBbUi5lcXVhbHMoJ21lbWJlckV4aXQnKSwgUi5hbHdheXMoJ+mAgOWHuuiBiuWkqeWupCcpXVxyXG4gICAgICAgICAgICAgICAgXSkobXNnLmF0dGFjaC50eXBlKVxyXG4gICAgICAgICAgICAgICAgY29uc3QgdGlwTXNnID0gYCR7bXNnLmF0dGFjaC5mcm9tTmlja30gJHt0aXB9YFxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgICAgLi4ubXNnLFxyXG4gICAgICAgICAgICAgICAgICB0eXBlOiAnbm90aWZpY2F0aW9uJyxcclxuICAgICAgICAgICAgICAgICAgdGV4dDogdGlwTXNnLFxyXG4gICAgICAgICAgICAgICAgICBmcm9tQXZhdGFyOiBhdmF0YXJVcmwsXHJcbiAgICAgICAgICAgICAgICAgIG5vd1RpbWU6IG5ldyBEYXRlKERhdGUucGFyc2UobmV3IERhdGUoKSkgKyAyODgwMDAwMCkudG9JU09TdHJpbmcoKS5zcGxpdCgnVCcpWzBdICsgJyAnICsgbmV3IERhdGUoKS50b1RpbWVTdHJpbmcoKS5zdWJzdHIoMCwgOClcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG1zZ1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSkpXHJcbiAgICAgIH0sXHJcbiAgICAgIGFzeW5jIG9uY29ubmVjdCgpIHtcclxuICAgICAgICBsb2cuaW5mbyh7XHJcbiAgICAgICAgICBwYWdlOiAnY2hhdHJvb20nLFxyXG4gICAgICAgICAgb3ByOiAnaW5pdGlhbGl6ZSBzZGsgaW5zdGFuY2UnLFxyXG4gICAgICAgICAgaW5mbzogJ1tOSU0gQ0hBVFJPT01dIGNvbm5lY3RlZCdcclxuICAgICAgICB9KVxyXG4gICAgICAgIHJlZnJlc2hNc2dzKHJvb21pZCxbXSlcclxuICAgICAgICB3ZXB5LmhpZGVMb2FkaW5nKClcclxuICAgICAgICBpZiAoIWhhc01zZ3MpIHtcclxuICAgICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGNoYXRyb29tMS5nZXRIaXN0b3J5TXNncyh7XHJcbiAgICAgICAgICAgIGxpbWl0OiAxMDBcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgICBjb25zdCBtc2dzID0gcmVzLm1zZ3MuZmlsdGVyKG1zZyA9PiBtc2cudHlwZSAhPT0gJ25vdGlmaWNhdGlvbicgJiYgbXNnLnR5cGUgIT09ICd0aXAnKS5yZXZlcnNlKClcclxuICAgICAgICAgIHB1c2hNc2cobXNncyB8fCBbXSlcclxuICAgICAgICAgIHJlZnJlc2hNc2dzKHJvb21pZCxbXSlcclxuICAgICAgICAgIGFwcGx5KCkgXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9KVxyXG4gICAgdGhpcy5jaGF0cm9vbSA9IGNoYXRyb29tMVxyXG4gICAgdGhpcy5jaGF0cm9vbTAgPSBjaGF0cm9vbTBcclxuICAvL+W+queOr+WKoOi9veWIhumhteS6uuWRmFxyXG4gIGNvbnN0IFRha2VtaW4gPSAoQXJyKSA9PiBNYXRoLm1pbi5hcHBseSggTWF0aCwgQXJyKVxyXG4gIGxldCBkYXRhID0gW11cclxuICB3aGlsZSh0cnVlKXtcclxuICAgIGxldCBkYXRhMSA9IGF3YWl0IGNoYXRyb29tQXBpLmdldFVzZXJMaXN0KHJvb21pZCwgamZUb2tlbixtaW5UaW1lKVxyXG4gICAgaWYgKGRhdGExLmxlbmd0aCA9PSAwKSB7XHJcbiAgICAgIGJyZWFrXHJcbiAgICB9XHJcbiAgICBsZXQgdGltZUFyciA9IGRhdGExLm1hcCgoaXRlbSkgPT4gaXRlbS5lbnRlclRpbWUpXHJcbiAgICBsZXQgbWluVGltZSA9IFRha2VtaW4odGltZUFycilcclxuICAgIGRhdGEgPSBkYXRhLmNvbmNhdChkYXRhMSlcclxuICB9XHJcbiAgLy/nrqHnkIblkZjvvIx2aXDmjpLkuIrpnaJcclxuICBkYXRhLnNvcnQoKG8scCkgPT4ge1xyXG4gICAgbGV0IGMgPSBvLmlzX3ZpcFxyXG4gICAgbGV0IGQgPSBwLmlzX3ZpcFxyXG4gICAgaWYgKGMgPT09IGQpIHtcclxuICAgICAgcmV0dXJuIDBcclxuICAgIH1cclxuICAgIGlmIChjID09PSB0cnVlICYmIGQgPT09IGZhbHNlKSB7XHJcbiAgICAgIHJldHVybiAtMVxyXG4gICAgfVxyXG4gIH0pXHJcbiAgLy8gY29uc3QgYWNjaWRBcnIgPSBkYXRhLm1hcCgoaXRlbSk9Pml0ZW0uYWNjaWQpXHJcbiAgLy8gdGhpcy50eXBlID0gZGF0YVthY2NpZEFyci5pbmRleE9mKGFjY2lkKV0udHlwZVxyXG4gIC8v6IGK5aSpVklQ5pi+56S6XHJcbiAgY29uc3QgaXNWaXAgPSBkYXRhID0+IGRhdGEuaXNfdmlwID09PSB0cnVlXHJcbiAgY29uc3QgdmlwVXNlckxpc3QgPSBSLmZpbHRlcihpc1ZpcCkoZGF0YSlcclxuICB0aGlzLnZpcFVzZXJMaXN0ID0gdmlwVXNlckxpc3RcclxuICBjb25zdCBpc0FkbWluID0gZGF0YSA9PiBkYXRhLnR5cGUgPT09ICdNQU5BR0VSJ1xyXG4gIGNvbnN0IGFkbWluVXNlckxpc3QgPSBSLmZpbHRlcihpc0FkbWluKShkYXRhKVxyXG4gIHRoaXMuYWRtaW5Vc2VyTGlzdCA9IGFkbWluVXNlckxpc3RcclxuICBjb25zdCBpc1VzZXIgPSBkYXRhID0+IGRhdGEubmFtZSAmJiBkYXRhLm5hbWUgIT09IG51bGxcclxuICB0aGlzLm51bUxpc3QgPSBSLmZpbHRlcihpc1VzZXIpKGRhdGEpXHJcbiAgdGhpcy4kYXBwbHkoKVxyXG59XHJcbm9uU2hhcmVBcHBNZXNzYWdlID0gZnVuY3Rpb24gKHJlcykge1xyXG4gIHJldHVybiB7XHJcbiAgICB0aXRsZTogdGhpcy5yb29tRGF0YS5uYW1lXHJcbiAgfVxyXG59XHJcbm9uU2hvdygpIHtcclxuICB0aGlzLmlzTElNSVQgPSBmYWxzZVxyXG4gIHRoaXMuY3VycmVudE5hdiA9IDBcclxufVxyXG5vblVubG9hZCgpIHtcclxuICB0aGlzLmNoYXRyb29tMC5kaXNjb25uZWN0KClcclxufVxyXG59XHJcbiJdfQ==