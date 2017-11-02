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

                refreshMsgs(roomid, []);
                pushMsg = this.methods.pushMsg.bind(this);
                getCountsNum = this.methods.getCountsNum.bind(this);
                apply = this.$apply.bind(this);
                hasMsgs = this.msgs.length > 0;


                _wepy2.default.showLoading();
                _user = this.user, nimToken = _user.nimToken, accid = _user.accid, avatarUrl = _user.avatarUrl, jfToken = _user.jfToken;
                _context9.next = 14;
                return chatroomApi.addToRoom(roomid, creator, accid);

              case 14:
                _context9.next = 16;
                return chatroomApi.getOneById(id, jfToken);

              case 16:
                roomInfo = _context9.sent;
                _context9.next = 19;
                return accountApi.getUserInfo(roomid, accid);

              case 19:
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
                _context9.next = 28;
                return _nim2.default.getChatroomAddresses(accid, roomId);

              case 28:
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
                              _wepy2.default.hideLoading();

                              if (hasMsgs) {
                                _context8.next = 9;
                                break;
                              }

                              _context8.next = 5;
                              return chatroom1.getHistoryMsgs({
                                limit: 100
                              });

                            case 5:
                              res = _context8.sent;
                              msgs = res.msgs.filter(function (msg) {
                                return msg.type !== 'notification' && msg.type !== 'tip';
                              }).reverse();


                              pushMsg(msgs || []);
                              apply();

                            case 9:
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

              case 34:
                if (!true) {
                  _context9.next = 45;
                  break;
                }

                _context9.next = 37;
                return chatroomApi.getUserList(roomid, jfToken, minTime);

              case 37:
                data1 = _context9.sent;

                if (!(data1.length == 0)) {
                  _context9.next = 40;
                  break;
                }

                return _context9.abrupt('break', 45);

              case 40:
                timeArr = data1.map(function (item) {
                  return item.enterTime;
                });
                minTime = Takemin(timeArr);

                data = data.concat(data1);
                _context9.next = 34;
                break;

              case 45:

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

              case 55:
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoYXRyb29tLmpzIl0sIm5hbWVzIjpbImxvZyIsImNoYXRyb29tQXBpIiwiYWNjb3VudEFwaSIsIkNoYXRyb29tIiwidXNlciIsInN0YXRlIiwiY29tbW9uIiwibmltIiwibXNncyIsImNoYXRyb29tIiwicm9vbUlkIiwiaW50b1ZpZXciLCJsYXN0Iiwic2Nyb2xsdG9wZXIiLCJpZENsaWVudCIsInJlZnJlc2hNc2dzIiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsImRhdGEiLCJuYXZzIiwiY3VycmVudE5hdiIsIm51bUxpc3QiLCJpc0xJTUlUIiwic2VuZGVkIiwidGV4dCIsInJvb21EYXRhIiwibmFtZSIsImluZGljYXRvckRvdHMiLCJhdXRvcGxheSIsImludGVydmFsIiwiZHVyYXRpb24iLCJzaG93Iiwic2hvd2VtIiwiZW1vamkiLCJkZWZhdWx0IiwiRW1vamkiLCJlbW9qaU9iaiIsIkVtb2ppT2JqIiwibm93VGltZSIsIm5vd1Blb3BsZXMiLCJzZWFyY2hpbnB1dCIsInNlbmRGb2N1cyIsInVzZXJMaW1pdEFyciIsInZpcFVzZXJMaXN0IiwiYWRtaW5Vc2VyTGlzdCIsIm1ldGhvZHMiLCJzY3JvbGwiLCJlIiwiZGV0YWlsIiwic2Nyb2xsVG9wIiwic2Nyb2xsSGVpZ2h0IiwibGVuZ3RoIiwiZ2V0Q291bnRzTnVtIiwiaWQiLCJqZlRva2VuIiwiZ2V0T25lQnlJZCIsInRvdGFsX21lbWJlcnNfY291bnQiLCIkYXBwbHkiLCJoYW5kbGVOYW1lIiwiaXRlbSIsInR5cGUiLCJiYW5JZCIsIm1hcCIsIml0ZW1BY2NpZCIsImZyb20iLCJnZXRJdGVtSWQiLCJuYXZpZ2F0ZVRvIiwidXJsIiwiaGFuZGxlTmFtZUlkIiwiaXRlbWlkIiwiZ2V0Rm9jdXMiLCJzZXREYXRhIiwib3BlbkVtb2ppIiwiaW1nUHJldmlldyIsIml0ZW1zIiwiaW1nVXJsIiwiaXNJbWciLCJtc2ciLCJpbWdBcnIiLCJmaWx0ZXIiLCJpbWdVcmxBcnIiLCJmaWxlIiwicHJldmlld0ltYWdlIiwiY3VycmVudCIsInVybHMiLCJzdWNjZXNzIiwicmVzIiwiY29uc29sZSIsInNlbmRFbW9qaSIsImV2ZW50IiwidGhhdCIsInRhcmdldCIsImRhdGFzZXQiLCJtc2dsZW4iLCJzdHIiLCJzdGFydCIsImxhc3RJbmRleE9mIiwiZW5kIiwibGVuIiwic2xpY2UiLCJwdXNoTXNnIiwiYmluZCIsInRyaW0iLCJzZW5kVGV4dCIsImVycm9yIiwicGFnZSIsIm9wciIsImluZm8iLCJjaGFuZ2VOYXYiLCJjdXJyZW50VGFyZ2V0IiwiaW5kZXgiLCJjaG9vc2VJbWFnZSIsImNvdW50IiwicHJldmlld0ZpbGUiLCJ3eEZpbGVQYXRoIiwidGVtcEZpbGVQYXRocyIsInNlbmRGaWxlIiwic2VuZCIsInB1c2hNc2dUZXh0Iiwic2V0VGV4dCIsInZhbHVlIiwiZ2V0TXNncyIsInNob3dMb2FkaW5nIiwiY2hhdHJvb20xIiwiZ2V0SGlzdG9yeU1zZ3MiLCJsaW1pdCIsInJldmVyc2UiLCJoaWRlTG9hZGluZyIsIkFycmF5IiwiaXNBcnJheSIsInZpcE5pY2siLCJuaWNrIiwiaXNWaXAiLCJpIiwiZnJvbU5pY2siLCJhZG1pbk5pY2siLCJpc0FkbWluIiwiaXNfYWRtaW4iLCJpc192aXAiLCJlbWppIiwicGFyc2VFbW9qaSIsInJlcGxhY2UiLCJjaGF0cm9vbUlkIiwiZmxvdyIsImZyb21BdmF0YXIiLCJmcm9tQ2xpZW50VHlwZSIsImZyb21DdXN0b20iLCJyZXNlbmQiLCJzdGF0dXMiLCJ0aW1lIiwidXNlclVwZGF0ZVRpbWUiLCJtZXJnZWQiLCJvblNoYXJlQXBwTWVzc2FnZSIsInRpdGxlIiwib3B0aW9ucyIsInJvb21pZCIsImNyZWF0b3IiLCJhcHBseSIsImhhc01zZ3MiLCJuaW1Ub2tlbiIsImFjY2lkIiwiYXZhdGFyVXJsIiwiYWRkVG9Sb29tIiwicm9vbUluZm8iLCJnZXRVc2VySW5mbyIsIm9iamVjdCIsInd4Iiwic2hvd1RvYXN0IiwiaWNvbiIsImdldENoYXRyb29tQWRkcmVzc2VzIiwiYWRkcmVzcyIsImdldEluc3RhbmNlIiwiYWNjb3VudCIsInRva2VuIiwiY2hhdHJvb21BZGRyZXNzZXMiLCJvbm1zZ3MiLCJ0aXAiLCJjb25kIiwiZXF1YWxzIiwiYWx3YXlzIiwiYXR0YWNoIiwidGlwTXNnIiwiRGF0ZSIsInBhcnNlIiwidG9JU09TdHJpbmciLCJzcGxpdCIsInRvVGltZVN0cmluZyIsInN1YnN0ciIsIm9uY29ubmVjdCIsImNoYXRyb29tMCIsIlRha2VtaW4iLCJBcnIiLCJNYXRoIiwibWluIiwiZ2V0VXNlckxpc3QiLCJtaW5UaW1lIiwiZGF0YTEiLCJ0aW1lQXJyIiwiZW50ZXJUaW1lIiwiY29uY2F0Iiwic29ydCIsIm8iLCJwIiwiYyIsImQiLCJpc1VzZXIiLCJkaXNjb25uZWN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0U7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOztJQUFZQSxHOztBQUNaOztBQUdBOztJQUFZQyxXOztBQUNaOztJQUFZQyxVOztBQUNaOzs7Ozs7SUFvQnFCQyxRLFdBakJwQix3QkFBUTtBQUNQQyxRQUFNO0FBQUEsV0FBU0MsTUFBTUMsTUFBTixDQUFhRixJQUF0QjtBQUFBLEdBREM7QUFFUEcsT0FBSztBQUFBLFdBQVNGLE1BQU1DLE1BQU4sQ0FBYUMsR0FBdEI7QUFBQSxHQUZFO0FBR1BDLFFBQU0sY0FBVUgsS0FBVixFQUFpQjtBQUNyQixXQUFPQSxNQUFNSSxRQUFOLENBQWVELElBQWYsQ0FBb0IsS0FBS0UsTUFBekIsS0FBb0MsRUFBM0M7QUFDRCxHQUxNO0FBTVBDLFlBQVUsa0JBQVNOLEtBQVQsRUFBZ0I7QUFDeEIsUUFBTUcsT0FBT0gsTUFBTUksUUFBTixDQUFlRCxJQUFmLENBQW9CLEtBQUtFLE1BQXpCLEtBQW9DLEVBQWpEO0FBQ0EsUUFBTUUsT0FBTyxnQkFBRUEsSUFBRixDQUFPSixJQUFQLENBQWI7QUFDQSxRQUFJLEtBQUtL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QyxlQUFLckcsSTtrQkFBdEJ0RyxRIiwiZmlsZSI6ImNoYXRyb29tLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbiAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcclxuICBpbXBvcnQgUiBmcm9tICcuLi9saWJzL3JhbWRhJ1xyXG4gIGltcG9ydCBDaGF0cm9vbVNESyBmcm9tICcuLi91dGlscy9jaGF0cm9vbSdcclxuICBpbXBvcnQgTklNIGZyb20gJy4uL3V0aWxzL25pbSdcclxuICBpbXBvcnQgRmFjZUlNIGZyb20gJy4uL3V0aWxzL1dlYklNJ1xyXG4gIGltcG9ydCAqIGFzIGxvZyBmcm9tICcuLi91dGlscy9sb2cnXHJcbiAgaW1wb3J0IHtcclxuICAgIHJlZnJlc2hNc2dzXHJcbiAgfSBmcm9tICcuLi9hY3Rpb25zL2NoYXRyb29tJ1xyXG4gIGltcG9ydCAqIGFzIGNoYXRyb29tQXBpIGZyb20gJy4uL2FwaXMvY2hhdHJvb20nXHJcbiAgaW1wb3J0ICogYXMgYWNjb3VudEFwaSBmcm9tICcuLi9hcGlzL2FjY291bnQnXHJcbiAgaW1wb3J0IHtcclxuICAgIGNvbm5lY3RcclxuICB9IGZyb20gJ3dlcHktcmVkdXgnXHJcbiAgQGNvbm5lY3Qoe1xyXG4gICAgdXNlcjogc3RhdGUgPT4gc3RhdGUuY29tbW9uLnVzZXIsXHJcbiAgICBuaW06IHN0YXRlID0+IHN0YXRlLmNvbW1vbi5uaW0sXHJcbiAgICBtc2dzOiBmdW5jdGlvbiAoc3RhdGUpIHtcclxuICAgICAgcmV0dXJuIHN0YXRlLmNoYXRyb29tLm1zZ3NbdGhpcy5yb29tSWRdIHx8IFtdXHJcbiAgICB9LFxyXG4gICAgaW50b1ZpZXc6IGZ1bmN0aW9uKHN0YXRlKSB7XHJcbiAgICAgIGNvbnN0IG1zZ3MgPSBzdGF0ZS5jaGF0cm9vbS5tc2dzW3RoaXMucm9vbUlkXSB8fCBbXVxyXG4gICAgICBjb25zdCBsYXN0ID0gUi5sYXN0KG1zZ3MpXHJcbiAgICAgIGlmICh0aGlzLnNjcm9sbHRvcGVyKSB7XHJcbiAgICAgICAgcmV0dXJuICcnXHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIGxhc3QgPyBsYXN0LmlkQ2xpZW50IDogJydcclxuICAgIH1cclxuICB9LCB7XHJcbiAgICByZWZyZXNoTXNnc1xyXG4gIH0pXHJcbiAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2hhdHJvb20gZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xyXG4gICAgY29uZmlnID0ge1xyXG4gICAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn6IGK5aSp5a6kJ1xyXG4gICAgfVxyXG4gICAgZGF0YSA9IHtcclxuICAgICAgbmF2czogWyfogYrlpKknLCAn6K+m5oOFJ10sXHJcbiAgICAgIGN1cnJlbnROYXY6IDAsXHJcbiAgICAgIG51bUxpc3Q6IFtdLFxyXG4gICAgICBpc0xJTUlUOiBmYWxzZSxcclxuICAgICAgY2hhdHJvb206IG51bGwsXHJcbiAgICAgIHJvb21JZDogbnVsbCxcclxuICAgICAgc2VuZGVkOiBmYWxzZSxcclxuICAgICAgdGV4dDogJycsXHJcbiAgICAgIHJvb21EYXRhOiB7XHJcbiAgICAgICAgbmFtZTogJ+WKoOi9veS4rS4uLidcclxuICAgICAgfSxcclxuICAgICAgaW5kaWNhdG9yRG90czogdHJ1ZSxcclxuICAgICAgYXV0b3BsYXk6IGZhbHNlLFxyXG4gICAgICBpbnRlcnZhbDogNTAwMCxcclxuICAgICAgZHVyYXRpb246IDEwMDAsXHJcbiAgICAgIHNob3c6ICdlbW9qaV9saXN0JyxcclxuICAgICAgc2hvd2VtOiAnb3BlcmF0aW9uJyxcclxuICAgICAgZW1vamk6IEZhY2VJTS5kZWZhdWx0LkVtb2ppLFxyXG4gICAgICBlbW9qaU9iajogRmFjZUlNLmRlZmF1bHQuRW1vamlPYmosXHJcbiAgICAgIG5vd1RpbWU6ICcnLFxyXG4gICAgICBub3dQZW9wbGVzOiAwLFxyXG4gICAgICBzZWFyY2hpbnB1dDonJyxcclxuICAgICAgc2VuZEZvY3VzOiBmYWxzZSxcclxuICAgICAgdXNlckxpbWl0QXJyOltdLFxyXG4gICAgICB2aXBVc2VyTGlzdDpbXSxcclxuICAgICAgYWRtaW5Vc2VyTGlzdDpbXSxcclxuICAgIH1cclxuICAgIG1ldGhvZHMgPSB7XHJcbiAgICAgIGFzeW5jIHNjcm9sbCAoZSkge1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGUuZGV0YWlsLnNjcm9sbEhlaWdodCnliKTmlq3mmK/lkKblnKjmn6XnnIvljoblj7LorrDlvZXkuI3mu5rliqhcclxuICAgICAgICBpZiAoZS5kZXRhaWwuc2Nyb2xsVG9wIDwgZS5kZXRhaWwuc2Nyb2xsSGVpZ2h0KjAuNSB8fCBlLmRldGFpbC5zY3JvbGxUb3AgPCAxMDApIHtcclxuICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGUuZGV0YWlsLmRlbHRhWClcclxuICAgICAgICAgIHRoaXMuc2Nyb2xsdG9wZXIgPSAxXHJcbiAgICAgICAgfWVsc2Uge1xyXG4gICAgICAgICAgdGhpcy5zY3JvbGx0b3BlciA9IDBcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYoZS5kZXRhaWwuc2Nyb2xsVG9wIDwgMTAgJiYgdGhpcy5tc2dzLmxlbmd0aCA8IDE1MCkge1xyXG4gICAgICAgIH1cclxuICAgICAgfSxcclxuICAgICAgYXN5bmMgZ2V0Q291bnRzTnVtKGlkLCBqZlRva2VuKSB7XHJcbiAgICAgICAgY29uc3QgeyB0b3RhbF9tZW1iZXJzX2NvdW50IH0gPSBhd2FpdCBjaGF0cm9vbUFwaS5nZXRPbmVCeUlkKGlkLCBqZlRva2VuKVxyXG4gICAgICAgIHRoaXMubm93UGVvcGxlcyA9IHRvdGFsX21lbWJlcnNfY291bnQtMVxyXG4gICAgICAgIHRoaXMuJGFwcGx5KClcclxuICAgICAgfSxcclxuICAgICAgYXN5bmMgaGFuZGxlTmFtZSAoaXRlbSkge1xyXG4gICAgICAgIGNvbnN0IHR5cGUgPSB0aGlzLnR5cGVcclxuICAgICAgICBjb25zdCBiYW5JZCA9IHRoaXMudXNlckxpbWl0QXJyLm1hcCgoaXRlbSk9Pml0ZW0uaWQpXHJcbiAgICAgICAgbGV0IHJvb21JZCA9IHRoaXMucm9vbUlkXHJcbiAgICAgICAgY29uc3QgaXRlbUFjY2lkID0gaXRlbS5mcm9tXHJcbiAgICAgICAgY29uc3Qge2lkfSA9IGF3YWl0IGNoYXRyb29tQXBpLmdldEl0ZW1JZChpdGVtQWNjaWQpXHJcbiAgICAgICAgd2VweS5uYXZpZ2F0ZVRvKHtcclxuICAgICAgICAgIHVybDogYHVzZXJJbmZvP2lkPSR7aWR9JnJvb21JZD0ke3Jvb21JZH0mYmFuSWQ9JHtiYW5JZH0mdHlwZT0ke3R5cGV9YFxyXG4gICAgICAgIH0pXHJcbiAgICAgIH0sXHJcbiAgICAgIGhhbmRsZU5hbWVJZCAoaXRlbSkge1xyXG4gICAgICAgIGNvbnN0IHR5cGUgPSB0aGlzLnR5cGVcclxuICAgICAgICBjb25zdCBiYW5JZCA9IHRoaXMudXNlckxpbWl0QXJyLm1hcCgoaXRlbSk9Pml0ZW0uaWQpXHJcbiAgICAgICAgY29uc3QgaXRlbWlkID0gaXRlbS5pZFxyXG4gICAgICAgIGxldCByb29tSWQgPSB0aGlzLnJvb21JZFxyXG4gICAgICAgIHdlcHkubmF2aWdhdGVUbyh7XHJcbiAgICAgICAgICB1cmw6IGB1c2VySW5mbz9pZD0ke2l0ZW1pZH0mcm9vbUlkPSR7cm9vbUlkfSZiYW5JZD0ke2JhbklkfSZ0eXBlPSR7dHlwZX1gXHJcbiAgICAgICAgfSlcclxuICAgICAgfSxcclxuICAgICAgZ2V0Rm9jdXMgKCkge1xyXG4gICAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgICBzZW5kRm9jdXMgOiBmYWxzZVxyXG4gICAgICAgIH0pXHJcbiAgICAgIH0sXHJcbiAgICAgIG9wZW5FbW9qaSAoZSkge1xyXG4gICAgICAgIGlmICh0aGlzLnNob3cgPT09ICdzaG93RW1vamknKSB7XHJcbiAgICAgICAgICB0aGlzLnNob3cgPSAnZW1vamlfbGlzdCdcclxuICAgICAgICAgIHRoaXMuc2hvd2VtID0gJ29wZXJhdGlvbidcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgdGhpcy5zaG93ID0gJ3Nob3dFbW9qaSdcclxuICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLiRhcHBseSgpXHJcbiAgICAgIH0sXHJcbiAgICAgIGltZ1ByZXZpZXcgKGl0ZW1zLCBtc2dzKSB7XHJcbiAgICAgICAgY29uc3QgaW1nVXJsID0gaXRlbXNcclxuICAgICAgICBjb25zdCBpc0ltZyA9IG1zZyA9PiBtc2cudHlwZSA9PT0gJ2ltYWdlJ1xyXG4gICAgICAgIGNvbnN0IGltZ0FyciA9IFIuZmlsdGVyKGlzSW1nKShtc2dzKVxyXG4gICAgICAgIGNvbnN0IGltZ1VybEFyciA9IGltZ0Fyci5tYXAobXNnID0+IHtcclxuICAgICAgICAgIHJldHVybiBtc2cuZmlsZS51cmxcclxuICAgICAgICB9KVxyXG4gICAgICAgIHdlcHkucHJldmlld0ltYWdlKHtcclxuICAgICAgICAgIGN1cnJlbnQ6IGltZ1VybCxcclxuICAgICAgICAgIHVybHM6IGltZ1VybEFycixcclxuICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChyZXMpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2cocmVzKVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICAgIH0sXHJcbiAgICAgIGFzeW5jIHNlbmRFbW9qaSAoZXZlbnQpIHtcclxuICAgICAgICB2YXIgdGhhdCA9IHRoaXNcclxuICAgICAgICB2YXIgZW1vamkgPSBldmVudC50YXJnZXQuZGF0YXNldC5lbW9qaVxyXG4gICAgICAgIHZhciBtc2dsZW4gPSB0aGF0LmRhdGEudGV4dC5sZW5ndGggLSAxXHJcbiAgICAgICAgaWYgKGVtb2ppICYmIGVtb2ppICE9PSAnW2RlbF0nKSB7XHJcbiAgICAgICAgICB2YXIgc3RyID0gdGhhdC5kYXRhLnRleHQgKyBlbW9qaVxyXG4gICAgICAgIH0gZWxzZSBpZiAoZW1vamkgPT09ICdbZGVsXScpIHtcclxuICAgICAgICAgIHZhciBzdGFydCA9IHRoYXQuZGF0YS50ZXh0Lmxhc3RJbmRleE9mKCdbJylcclxuICAgICAgICAgIHZhciBlbmQgPSB0aGF0LmRhdGEudGV4dC5sYXN0SW5kZXhPZignXScpXHJcbiAgICAgICAgICB2YXIgbGVuID0gZW5kIC0gc3RhcnRcclxuICAgICAgICAgIGlmIChlbmQgIT09IC0xICYmIGVuZCA9PT0gbXNnbGVuICYmIGxlbiA+PSAzICYmIGxlbiA8PSA0KSB7XHJcbiAgICAgICAgICAgIHN0ciA9IHRoYXQuZGF0YS50ZXh0LnNsaWNlKDAsIHN0YXJ0KVxyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgc3RyID0gdGhhdC5kYXRhLnRleHQuc2xpY2UoMCwgbXNnbGVuKVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnRleHQgPSBzdHJcclxuICAgICAgICBjb25zdCBwdXNoTXNnID0gdGhpcy5tZXRob2RzLnB1c2hNc2cuYmluZCh0aGlzKVxyXG4gICAgICAgIHZhciB0ZXh0ID0gUi50cmltKHRoaXMudGV4dClcclxuICAgICAgICB0aGlzLnRleHQgPSAnJ1xyXG4gICAgICAgIGlmICh0ZXh0Lmxlbmd0aCkge1xyXG4gICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgY29uc3QgbXNnID0gYXdhaXQgdGhpcy5jaGF0cm9vbS5zZW5kVGV4dCh7XHJcbiAgICAgICAgICAgICAgdGV4dFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB0aGlzLnRleHQgPSAnJ1xyXG4gICAgICAgICAgICBwdXNoTXNnKG1zZylcclxuICAgICAgICAgICAgdGhpcy5zaG93ID0gJ2Vtb2ppX2xpc3QnXHJcbiAgICAgICAgICAgIHRoaXMuc2V0RGF0YSh7ICBcclxuICAgICAgICAgICAgICBzZWFyY2hpbnB1dDogJycsICBcclxuICAgICAgICAgICAgfSkgIFxyXG4gICAgICAgICAgICB0aGlzLiRhcHBseSgpXHJcbiAgICAgICAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgIGxvZy5lcnJvcih7XHJcbiAgICAgICAgICAgICAgcGFnZTogJ2NoYXRyb29tJyxcclxuICAgICAgICAgICAgICBvcHI6ICdzZW5kVGV4dCcsXHJcbiAgICAgICAgICAgICAgaW5mbzogZVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfSxcclxuICAgICAgY2hhbmdlTmF2IChlKSB7XHJcbiAgICAgICAgdGhpcy5jdXJyZW50TmF2ID0gZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQuaW5kZXhcclxuICAgICAgICB0aGlzLnNlbmRlZCA9IGZhbHNlXHJcbiAgICAgICAgdGhpcy4kYXBwbHkoKVxyXG4gICAgICB9LFxyXG4gICAgICBhc3luYyBjaG9vc2VJbWFnZSgpIHtcclxuICAgICAgLy8g6L+b6KGM5Zu+54mH6YCJ5oup5bm25LiK5LygXHJcbiAgICAgIGNvbnN0IHB1c2hNc2cgPSB0aGlzLm1ldGhvZHMucHVzaE1zZy5iaW5kKHRoaXMpXHJcbiAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IHdlcHkuY2hvb3NlSW1hZ2Uoe1xyXG4gICAgICAgIGNvdW50OiAxXHJcbiAgICAgIH0pXHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgZmlsZSA9IGF3YWl0IHRoaXMuY2hhdHJvb20ucHJldmlld0ZpbGUoe1xyXG4gICAgICAgICAgdHlwZTogJ2ltYWdlJyxcclxuICAgICAgICAgIHd4RmlsZVBhdGg6IHJlcy50ZW1wRmlsZVBhdGhzWzBdXHJcbiAgICAgICAgfSlcclxuICAgICAgICBjb25zdCBtc2cgPSBhd2FpdCB0aGlzLmNoYXRyb29tLnNlbmRGaWxlKHtcclxuICAgICAgICAgIHR5cGU6ICdpbWFnZScsXHJcbiAgICAgICAgICBmaWxlOiBmaWxlXHJcbiAgICAgICAgfSlcclxuICAgICAgICBwdXNoTXNnKG1zZylcclxuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICBsb2cuZXJyb3Ioe1xyXG4gICAgICAgICAgcGFnZTogJ2NoYXRyb29tJyxcclxuICAgICAgICAgIG9wcjogJ3NlbmRGaWxlJyxcclxuICAgICAgICAgIGluZm86IGVycm9yXHJcbiAgICAgICAgfSlcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIGFzeW5jIHNlbmQoZSkge1xyXG4gICAgICAvLz8gd2h5IGJpbmRcclxuICAgICAgdGhpcy5zZXREYXRhKHsgIFxyXG4gICAgICAgIHNlYXJjaGlucHV0OiAnJywgIFxyXG4gICAgICAgIHNlbmRGb2N1czogdHJ1ZSxcclxuICAgICAgfSkgXHJcbiAgICAgIHRoaXMuc2Nyb2xsdG9wZXIgPSAwXHJcbiAgICAgIGNvbnN0IHB1c2hNc2dUZXh0ID0gdGhpcy5tZXRob2RzLnB1c2hNc2dUZXh0LmJpbmQodGhpcylcclxuICAgICAgY29uc3QgdGV4dCA9IFIudHJpbSh0aGlzLnRleHQpXHJcbiAgICAgIHRoaXMudGV4dCA9ICcnXHJcbiAgICAgIGlmICh0ZXh0Lmxlbmd0aCkge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICBjb25zdCBtc2cgPSBhd2FpdCB0aGlzLmNoYXRyb29tLnNlbmRUZXh0KHtcclxuICAgICAgICAgICAgdGV4dFxyXG4gICAgICAgICAgfSlcclxuICAgICAgICAgIHRoaXMudGV4dCA9ICcnXHJcbiAgICAgICAgICBwdXNoTXNnVGV4dChtc2cpXHJcbiAgICAgICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgbG9nLmVycm9yKHtcclxuICAgICAgICAgICAgcGFnZTogJ2NoYXRyb29tJyxcclxuICAgICAgICAgICAgb3ByOiAnc2VuZFRleHQnLFxyXG4gICAgICAgICAgICBpbmZvOiBlXHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIHNldFRleHQoZSkge1xyXG4gICAgICB0aGlzLnRleHQgPSBlLmRldGFpbC52YWx1ZVxyXG4gICAgfSxcclxuICAgIGFzeW5jIGdldE1zZ3MoKSB7XHJcbiAgICAgIHdlcHkuc2hvd0xvYWRpbmcoKVxyXG4gICAgICBjb25zdCBwdXNoTXNnID0gdGhpcy5tZXRob2RzLnB1c2hNc2cuYmluZCh0aGlzKVxyXG4gICAgICBjb25zdCBjaGF0cm9vbTEgPSB0aGlzLmNoYXRyb29tXHJcbiAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGNoYXRyb29tMS5nZXRIaXN0b3J5TXNncyh7XHJcbiAgICAgICAgbGltaXQ6IDUwXHJcbiAgICAgIH0pXHJcbiAgICAgIGNvbnN0IG1zZ3MgPSByZXMubXNncy5maWx0ZXIobXNnID0+IG1zZy50eXBlICE9PSAnbm90aWZpY2F0aW9uJyAmJiBtc2cudHlwZSAhPT0gJ3RpcCcpLnJldmVyc2UoKVxyXG5cclxuICAgICAgcHVzaE1zZyhtc2dzIHx8IFtdKVxyXG4gICAgICB0aGlzLiRhcHBseSgpXHJcbiAgICAgIHdlcHkuaGlkZUxvYWRpbmcoKVxyXG4gICAgfSxcclxuICAgIHB1c2hNc2c6IGZ1bmN0aW9uIChtc2dzKSB7XHJcbiAgICAgIGNvbnN0IHsgcmVmcmVzaE1zZ3MgfSA9IHRoaXMubWV0aG9kc1xyXG4gICAgICBpZiAoIUFycmF5LmlzQXJyYXkobXNncykpIHtcclxuICAgICAgICBtc2dzID0gW21zZ3NdXHJcbiAgICAgIH1cclxuICAgICAgLy9WSVAg5pi+56S6XHJcbiAgICAgIGNvbnN0IHZpcE5pY2sgPSB0aGlzLnZpcFVzZXJMaXN0Lm1hcCgoaXRlbSkgPT4gaXRlbS5uaWNrKVxyXG4gICAgICBjb25zdCBpc1ZpcCA9IGZ1bmN0aW9uKG1zZyl7XHJcbiAgICAgICAgZm9yICh2YXIgaSA9IHZpcE5pY2subGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcclxuICAgICAgICAgIGlmICh2aXBOaWNrW2ldID09PSBtc2cuZnJvbU5pY2spIHtcclxuICAgICAgICAgICAgcmV0dXJuIG1zZy5mcm9tTmlja1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBjb25zdCBhZG1pbk5pY2sgPSB0aGlzLmFkbWluVXNlckxpc3QubWFwKChpdGVtKSA9PiBpdGVtLm5pY2spXHJcbiAgICAgIGNvbnN0IGlzQWRtaW4gPSBmdW5jdGlvbihtc2cpe1xyXG4gICAgICAgIGZvciAodmFyIGkgPSBhZG1pbk5pY2subGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcclxuICAgICAgICAgIGlmIChhZG1pbk5pY2tbaV0gPT09IG1zZy5mcm9tTmljaykge1xyXG4gICAgICAgICAgICByZXR1cm4gbXNnLmZyb21OaWNrXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIFIuZmlsdGVyKGlzQWRtaW4pKG1zZ3MpLm1hcChpdGVtID0+IGl0ZW0uaXNfYWRtaW4gPSB0cnVlKVxyXG4gICAgICBSLmZpbHRlcihpc1ZpcCkobXNncykubWFwKGl0ZW0gPT4gaXRlbS5pc192aXAgPSB0cnVlKVxyXG4gICAgICBtc2dzID0gbXNncy5tYXAobXNnID0+IHtcclxuICAgICAgICBpZiAobXNnLnR5cGUgPT09ICd0ZXh0Jykge1xyXG4gICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgZW1qaTogRmFjZUlNLmRlZmF1bHQucGFyc2VFbW9qaShtc2cudGV4dC5yZXBsYWNlKC9cXG4vbWcsICcnKSksXHJcbiAgICAgICAgICAgIGNoYXRyb29tSWQ6IG1zZy5jaGF0cm9vbUlkLFxyXG4gICAgICAgICAgICBmbG93OiBtc2cuZmxvdyxcclxuICAgICAgICAgICAgZnJvbTogbXNnLmZyb20sXHJcbiAgICAgICAgICAgIGZyb21BdmF0YXI6IG1zZy5mcm9tQXZhdGFyLFxyXG4gICAgICAgICAgICBmcm9tQ2xpZW50VHlwZTogbXNnLmZyb21DbGllbnRUeXBlLFxyXG4gICAgICAgICAgICBmcm9tQ3VzdG9tOiBtc2cuZnJvbUN1c3RvbSxcclxuICAgICAgICAgICAgZnJvbU5pY2s6IG1zZy5mcm9tTmljayxcclxuICAgICAgICAgICAgaWRDbGllbnQ6IG1zZy5pZENsaWVudCxcclxuICAgICAgICAgICAgcmVzZW5kOiBtc2cucmVzZW5kLFxyXG4gICAgICAgICAgICBzdGF0dXM6IG1zZy5zdGF0dXMsXHJcbiAgICAgICAgICAgIHRleHQ6IG1zZy50ZXh0LFxyXG4gICAgICAgICAgICB0aW1lOiBtc2cudGltZSxcclxuICAgICAgICAgICAgdHlwZTogbXNnLnR5cGUsXHJcbiAgICAgICAgICAgIHVzZXJVcGRhdGVUaW1lOiBtc2cudXNlclVwZGF0ZVRpbWUsXHJcbiAgICAgICAgICAgIGlzX3ZpcDogbXNnLmlzX3ZpcCxcclxuICAgICAgICAgICAgaXNfYWRtaW46IG1zZy5pc19hZG1pbixcclxuICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgcmV0dXJuIG1zZ1xyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuICAgICAgbGV0IHJvb21JZCA9IHRoaXMucm9vbUlkXHJcbiAgICAgIGlmIChtc2dzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICByb29tSWQgPSBtc2dzWzBdLmNoYXRyb29tSWRcclxuICAgICAgfVxyXG4gICAgICBjb25zdCBtZXJnZWQgPSBbLi4udGhpcy5tc2dzLCAuLi5tc2dzXVxyXG4gICAgICByZWZyZXNoTXNncyhyb29tSWQsIG1lcmdlZClcclxuICAgICAgdGhpcy5zZW5kZWQgPSB0cnVlXHJcbiAgICAgIHRoaXMuJGFwcGx5KClcclxuICAgIH0sXHJcbiAgICBwdXNoTXNnVGV4dDogZnVuY3Rpb24gKG1zZ3MpIHtcclxuICAgICAgY29uc3QgeyByZWZyZXNoTXNncyB9ID0gdGhpcy5tZXRob2RzXHJcbiAgICAgIGlmICghQXJyYXkuaXNBcnJheShtc2dzKSkge1xyXG4gICAgICAgIG1zZ3MgPSBbbXNnc11cclxuICAgICAgfVxyXG4gICAgICBjb25zdCB2aXBOaWNrID0gdGhpcy52aXBVc2VyTGlzdC5tYXAoKGl0ZW0pID0+IGl0ZW0ubmljaylcclxuICAgICAgY29uc3QgaXNWaXAgPSBmdW5jdGlvbihtc2cpe1xyXG4gICAgICAgIGZvciAodmFyIGkgPSB2aXBOaWNrLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XHJcbiAgICAgICAgICBpZiAodmlwTmlja1tpXSA9PT0gbXNnLmZyb21OaWNrKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBtc2cuZnJvbU5pY2tcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgY29uc3QgYWRtaW5OaWNrID0gdGhpcy5hZG1pblVzZXJMaXN0Lm1hcCgoaXRlbSkgPT4gaXRlbS5uaWNrKVxyXG4gICAgICBjb25zdCBpc0FkbWluID0gZnVuY3Rpb24obXNnKXtcclxuICAgICAgICBmb3IgKHZhciBpID0gYWRtaW5OaWNrLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XHJcbiAgICAgICAgICBpZiAoYWRtaW5OaWNrW2ldID09PSBtc2cuZnJvbU5pY2spIHtcclxuICAgICAgICAgICAgcmV0dXJuIG1zZy5mcm9tTmlja1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBSLmZpbHRlcihpc0FkbWluKShtc2dzKS5tYXAoaXRlbSA9PiBpdGVtLmlzX2FkbWluID0gdHJ1ZSlcclxuICAgICAgUi5maWx0ZXIoaXNWaXApKG1zZ3MpLm1hcChpdGVtID0+IGl0ZW0uaXNfdmlwID0gdHJ1ZSlcclxuICAgICAgbXNncyA9IG1zZ3MubWFwKG1zZyA9PiB7XHJcbiAgICAgICAgaWYgKG1zZy50eXBlID09PSAndGV4dCcpIHtcclxuICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIGVtamk6IEZhY2VJTS5kZWZhdWx0LnBhcnNlRW1vamkobXNnLnRleHQucmVwbGFjZSgvXFxuL21nLCAnJykpLFxyXG4gICAgICAgICAgICBjaGF0cm9vbUlkOiBtc2cuY2hhdHJvb21JZCxcclxuICAgICAgICAgICAgZmxvdzogbXNnLmZsb3csXHJcbiAgICAgICAgICAgIGZyb206IG1zZy5mcm9tLFxyXG4gICAgICAgICAgICBmcm9tQXZhdGFyOiBtc2cuZnJvbUF2YXRhcixcclxuICAgICAgICAgICAgZnJvbUNsaWVudFR5cGU6IG1zZy5mcm9tQ2xpZW50VHlwZSxcclxuICAgICAgICAgICAgZnJvbUN1c3RvbTogbXNnLmZyb21DdXN0b20sXHJcbiAgICAgICAgICAgIGZyb21OaWNrOiBtc2cuZnJvbU5pY2ssXHJcbiAgICAgICAgICAgIGlkQ2xpZW50OiBtc2cuaWRDbGllbnQsXHJcbiAgICAgICAgICAgIHJlc2VuZDogbXNnLnJlc2VuZCxcclxuICAgICAgICAgICAgc3RhdHVzOiBtc2cuc3RhdHVzLFxyXG4gICAgICAgICAgICB0ZXh0OiBtc2cudGV4dCxcclxuICAgICAgICAgICAgdGltZTogbXNnLnRpbWUsXHJcbiAgICAgICAgICAgIHR5cGU6IG1zZy50eXBlLFxyXG4gICAgICAgICAgICB1c2VyVXBkYXRlVGltZTogbXNnLnVzZXJVcGRhdGVUaW1lLFxyXG4gICAgICAgICAgICBpc192aXA6IG1zZy5pc192aXAsXHJcbiAgICAgICAgICAgIGlzX2FkbWluOiBtc2cuaXNfYWRtaW4sXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHJldHVybiBtc2dcclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcbiAgICAgIGxldCByb29tSWQgPSB0aGlzLnJvb21JZFxyXG4gICAgICBpZiAobXNncy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgcm9vbUlkID0gbXNnc1swXS5jaGF0cm9vbUlkXHJcbiAgICAgIH1cclxuICAgICAgY29uc3QgbWVyZ2VkID0gWy4uLnRoaXMubXNncywgLi4ubXNnc11cclxuICAgICAgcmVmcmVzaE1zZ3Mocm9vbUlkLCBtZXJnZWQpXHJcbiAgICAgIHRoaXMuc2VuZGVkID0gdHJ1ZVxyXG4gICAgICB0aGlzLiRhcHBseSgpXHJcbiAgICB9LFxyXG4gIH1cclxuXHJcblxyXG4gIGFzeW5jIG9uTG9hZChvcHRpb25zKSB7XHJcbiAgICBjb25zdCB7IGlkIH0gPSBvcHRpb25zXHJcbiAgICBjb25zdCB7cm9vbWlkfSA9IG9wdGlvbnNcclxuICAgIGNvbnN0IHtjcmVhdG9yfSA9IG9wdGlvbnNcclxuICAgIHRoaXMucm9vbUlkID0gcm9vbWlkXHJcbiAgICBjb25zdCB7IHJlZnJlc2hNc2dzIH0gPSB0aGlzLm1ldGhvZHNcclxuICAgIHJlZnJlc2hNc2dzKHJvb21pZCxbXSlcclxuICAgIGNvbnN0IHB1c2hNc2cgPSB0aGlzLm1ldGhvZHMucHVzaE1zZy5iaW5kKHRoaXMpXHJcbiAgICBjb25zdCBnZXRDb3VudHNOdW0gPSB0aGlzLm1ldGhvZHMuZ2V0Q291bnRzTnVtLmJpbmQodGhpcylcclxuICAgIGNvbnN0IGFwcGx5ID0gdGhpcy4kYXBwbHkuYmluZCh0aGlzKVxyXG4gICAgY29uc3QgaGFzTXNncyA9IHRoaXMubXNncy5sZW5ndGggPiAwXHJcbiAgICBcclxuICAgIHdlcHkuc2hvd0xvYWRpbmcoKVxyXG4gICAgY29uc3QgeyBuaW1Ub2tlbiwgYWNjaWQsIGF2YXRhclVybCwgamZUb2tlbiB9ID0gdGhpcy51c2VyXHJcbiAgICBhd2FpdCBjaGF0cm9vbUFwaS5hZGRUb1Jvb20ocm9vbWlkLCBjcmVhdG9yLCBhY2NpZClcclxuICAgIGNvbnN0IHJvb21JbmZvID0gYXdhaXQgY2hhdHJvb21BcGkuZ2V0T25lQnlJZChpZCwgamZUb2tlbilcclxuICAgIC8v6I635Y+W5b2T5YmN55So5oi3dHlwZSDkvKDlhaXkuYvlkI7pobXpnaLliKTmlq3mnYPpmZBcclxuICAgIGNvbnN0IFtvYmplY3RdID0gYXdhaXQgYWNjb3VudEFwaS5nZXRVc2VySW5mbyhyb29taWQsYWNjaWQpXHJcbiAgICB0aGlzLnR5cGUgPSBvYmplY3QudHlwZVxyXG4gICAgaWYgKHRoaXMudHlwZSA9PT0gJ0xJTUlURUQnKSB7XHJcbiAgICAgIHRoaXMuaXNMSU1JVCA9IHRydWVcclxuICAgICAgd3guc2hvd1RvYXN0KHtcclxuICAgICAgICB0aXRsZTogJ+iiq+emgeiogO+8jOivt+iBlOezu+euoeeQhuWRmOino+mZpCcsXHJcbiAgICAgICAgaWNvbjogJ3N1Y2Nlc3MnLFxyXG4gICAgICAgIGR1cmF0aW9uOiAyMDAwXHJcbiAgICAgIH0pXHJcbiAgICB9XHJcbiAgICB0aGlzLnJvb21EYXRhID0gcm9vbUluZm9cclxuICAgIGNvbnN0IHJvb21JZCA9IHRoaXMucm9vbUlkXHJcbiAgICBjb25zdCBhZGRyZXNzID0gYXdhaXQgTklNLmdldENoYXRyb29tQWRkcmVzc2VzKGFjY2lkLCByb29tSWQpXHJcbiAgICBjb25zdCBbY2hhdHJvb20wLGNoYXRyb29tMV0gPSBDaGF0cm9vbVNESy5nZXRJbnN0YW5jZSh7XHJcbiAgICAgIGFjY291bnQ6IGFjY2lkLFxyXG4gICAgICB0b2tlbjogbmltVG9rZW4sXHJcbiAgICAgIGNoYXRyb29tSWQ6IHJvb21JZCxcclxuICAgICAgY2hhdHJvb21BZGRyZXNzZXM6IGFkZHJlc3MsXHJcbiAgICAgIG9ubXNnczogZnVuY3Rpb24obXNncykge1xyXG4gICAgICAgIGxvZy5pbmZvKHtcclxuICAgICAgICAgIHBhZ2U6ICdjaGF0cm9vbScsXHJcbiAgICAgICAgICBvcHI6ICdpbml0aWFsaXplIHNkayBpbnN0YW5jZScsXHJcbiAgICAgICAgICBpbmZvOiBtc2dzXHJcbiAgICAgICAgfSlcclxuICAgICAgICBwdXNoTXNnKG1zZ3MubWFwKG1zZyA9PiB7XHJcbiAgICAgICAgICBpZiAobXNnLnR5cGUgPT09ICdub3RpZmljYXRpb24nKSB7XHJcbiAgICAgICAgICAgIGdldENvdW50c051bShpZCwgamZUb2tlbilcclxuICAgICAgICAgICAgICAvLyDov5vlhaXogYrlpKnlrqTkv6Hmga9cclxuICAgICAgICAgICAgICBjb25zdCB0aXAgPSBSLmNvbmQoW1xyXG4gICAgICAgICAgICAgICAgW1IuZXF1YWxzKCdtZW1iZXJFbnRlcicpLCBSLmFsd2F5cygn5Yqg5YWl6IGK5aSp5a6kJyldLFxyXG4gICAgICAgICAgICAgICAgW1IuZXF1YWxzKCdtZW1iZXJFeGl0JyksIFIuYWx3YXlzKCfpgIDlh7rogYrlpKnlrqQnKV1cclxuICAgICAgICAgICAgICAgIF0pKG1zZy5hdHRhY2gudHlwZSlcclxuICAgICAgICAgICAgICAgIGNvbnN0IHRpcE1zZyA9IGAke21zZy5hdHRhY2guZnJvbU5pY2t9ICR7dGlwfWBcclxuICAgICAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAgIC4uLm1zZyxcclxuICAgICAgICAgICAgICAgICAgdHlwZTogJ25vdGlmaWNhdGlvbicsXHJcbiAgICAgICAgICAgICAgICAgIHRleHQ6IHRpcE1zZyxcclxuICAgICAgICAgICAgICAgICAgZnJvbUF2YXRhcjogYXZhdGFyVXJsLFxyXG4gICAgICAgICAgICAgICAgICBub3dUaW1lOiBuZXcgRGF0ZShEYXRlLnBhcnNlKG5ldyBEYXRlKCkpICsgMjg4MDAwMDApLnRvSVNPU3RyaW5nKCkuc3BsaXQoJ1QnKVswXSArICcgJyArIG5ldyBEYXRlKCkudG9UaW1lU3RyaW5nKCkuc3Vic3RyKDAsIDgpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBtc2dcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pKVxyXG4gICAgICB9LFxyXG4gICAgICBhc3luYyBvbmNvbm5lY3QoKSB7XHJcbiAgICAgICAgbG9nLmluZm8oe1xyXG4gICAgICAgICAgcGFnZTogJ2NoYXRyb29tJyxcclxuICAgICAgICAgIG9wcjogJ2luaXRpYWxpemUgc2RrIGluc3RhbmNlJyxcclxuICAgICAgICAgIGluZm86ICdbTklNIENIQVRST09NXSBjb25uZWN0ZWQnXHJcbiAgICAgICAgfSlcclxuICAgICAgICB3ZXB5LmhpZGVMb2FkaW5nKClcclxuICAgICAgICBpZiAoIWhhc01zZ3MpIHtcclxuXHJcbiAgICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBjaGF0cm9vbTEuZ2V0SGlzdG9yeU1zZ3Moe1xyXG4gICAgICAgICAgICBsaW1pdDogMTAwXHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgICAgY29uc3QgbXNncyA9IHJlcy5tc2dzLmZpbHRlcihtc2cgPT4gbXNnLnR5cGUgIT09ICdub3RpZmljYXRpb24nICYmIG1zZy50eXBlICE9PSAndGlwJykucmV2ZXJzZSgpXHJcblxyXG4gICAgICAgICAgcHVzaE1zZyhtc2dzIHx8IFtdKVxyXG4gICAgICAgICAgYXBwbHkoKSBcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0pXHJcbiAgICB0aGlzLmNoYXRyb29tID0gY2hhdHJvb20xXHJcbiAgICB0aGlzLmNoYXRyb29tMCA9IGNoYXRyb29tMFxyXG5cclxuICAvL+W+queOr+WKoOi9veWIhumhteS6uuWRmFxyXG4gIGNvbnN0IFRha2VtaW4gPSAoQXJyKSA9PiBNYXRoLm1pbi5hcHBseSggTWF0aCwgQXJyKVxyXG4gIGxldCBkYXRhID0gW11cclxuICB3aGlsZSh0cnVlKXtcclxuICAgIGxldCBkYXRhMSA9IGF3YWl0IGNoYXRyb29tQXBpLmdldFVzZXJMaXN0KHJvb21pZCwgamZUb2tlbixtaW5UaW1lKVxyXG4gICAgaWYgKGRhdGExLmxlbmd0aCA9PSAwKSB7XHJcbiAgICAgIGJyZWFrXHJcbiAgICB9XHJcbiAgICBsZXQgdGltZUFyciA9IGRhdGExLm1hcCgoaXRlbSkgPT4gaXRlbS5lbnRlclRpbWUpXHJcbiAgICBsZXQgbWluVGltZSA9IFRha2VtaW4odGltZUFycilcclxuICAgIGRhdGEgPSBkYXRhLmNvbmNhdChkYXRhMSlcclxuICB9XHJcblxyXG4gIC8v566h55CG5ZGY77yMdmlw5o6S5LiK6Z2iXHJcbiAgZGF0YS5zb3J0KChvLHApID0+IHtcclxuICAgIGxldCBjID0gby5pc192aXBcclxuICAgIGxldCBkID0gcC5pc192aXBcclxuICAgIGlmIChjID09PSBkKSB7XHJcbiAgICAgIHJldHVybiAwXHJcbiAgICB9XHJcbiAgICBpZiAoYyA9PT0gdHJ1ZSAmJiBkID09PSBmYWxzZSkge1xyXG4gICAgICByZXR1cm4gLTFcclxuICAgIH1cclxuICB9KVxyXG4gIC8vIGNvbnN0IGFjY2lkQXJyID0gZGF0YS5tYXAoKGl0ZW0pPT5pdGVtLmFjY2lkKVxyXG4gIC8vIHRoaXMudHlwZSA9IGRhdGFbYWNjaWRBcnIuaW5kZXhPZihhY2NpZCldLnR5cGVcclxuICAvL+iBiuWkqVZJUOaYvuekulxyXG4gIGNvbnN0IGlzVmlwID0gZGF0YSA9PiBkYXRhLmlzX3ZpcCA9PT0gdHJ1ZVxyXG4gIGNvbnN0IHZpcFVzZXJMaXN0ID0gUi5maWx0ZXIoaXNWaXApKGRhdGEpXHJcbiAgdGhpcy52aXBVc2VyTGlzdCA9IHZpcFVzZXJMaXN0XHJcblxyXG4gIGNvbnN0IGlzQWRtaW4gPSBkYXRhID0+IGRhdGEudHlwZSA9PT0gJ01BTkFHRVInXHJcbiAgY29uc3QgYWRtaW5Vc2VyTGlzdCA9IFIuZmlsdGVyKGlzQWRtaW4pKGRhdGEpXHJcbiAgdGhpcy5hZG1pblVzZXJMaXN0ID0gYWRtaW5Vc2VyTGlzdFxyXG5cclxuICBjb25zdCBpc1VzZXIgPSBkYXRhID0+IGRhdGEubmFtZSAmJiBkYXRhLm5hbWUgIT09IG51bGxcclxuICB0aGlzLm51bUxpc3QgPSBSLmZpbHRlcihpc1VzZXIpKGRhdGEpXHJcbiAgdGhpcy4kYXBwbHkoKVxyXG5cclxufVxyXG5vblNoYXJlQXBwTWVzc2FnZSA9IGZ1bmN0aW9uIChyZXMpIHtcclxuICByZXR1cm4ge1xyXG4gICAgdGl0bGU6IHRoaXMucm9vbURhdGEubmFtZVxyXG4gIH1cclxufVxyXG5vblNob3coKSB7XHJcbiAgdGhpcy5pc0xJTUlUID0gZmFsc2VcclxuICB0aGlzLmN1cnJlbnROYXYgPSAwXHJcbn1cclxub25VbmxvYWQoKSB7XHJcbiAgdGhpcy5jaGF0cm9vbTAuZGlzY29ubmVjdCgpXHJcbn1cclxufVxyXG4iXX0=