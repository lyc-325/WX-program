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
                  _this2.nowTime = new Date(Date.parse(new Date()) + 28800000).toISOString().split('T')[0] + ' ' + new Date().toTimeString().substr(0, 8);
                  _context.next = 3;
                  return chatroomApi.getOneById(id, jfToken);

                case 3:
                  _ref2 = _context.sent;
                  onlineusercount = _ref2.onlineusercount;

                  _this2.nowPeoples = onlineusercount;
                  _this2.$apply();

                case 7:
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
          var pushMsg, text, msg;
          return _regenerator2.default.wrap(function _callee5$(_context5) {
            while (1) {
              switch (_context5.prev = _context5.next) {
                case 0:
                  // ? why bind
                  pushMsg = _this6.methods.pushMsg.bind(_this6);
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
                  pushMsg(msg);
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
                          fromAvatar: avatarUrl
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoYXRyb29tLmpzIl0sIm5hbWVzIjpbImxvZyIsImNoYXRyb29tQXBpIiwiQ2hhdHJvb20iLCJ1c2VyIiwic3RhdGUiLCJjb21tb24iLCJuaW0iLCJtc2dzIiwiY2hhdHJvb20iLCJyb29tSWQiLCJpbnRvVmlldyIsImxhc3QiLCJpZENsaWVudCIsInJlZnJlc2hNc2dzIiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsImRhdGEiLCJuYXZzIiwiY3VycmVudE5hdiIsIm51bUxpc3QiLCJpc0xJTUlUIiwic2VuZGVkIiwidGV4dCIsInJvb21EYXRhIiwibmFtZSIsImluZGljYXRvckRvdHMiLCJhdXRvcGxheSIsImludGVydmFsIiwiZHVyYXRpb24iLCJzaG93Iiwic2hvd2VtIiwiZW1vamkiLCJkZWZhdWx0IiwiRW1vamkiLCJlbW9qaU9iaiIsIkVtb2ppT2JqIiwibm93VGltZSIsIm5vd1Blb3BsZXMiLCJtZXRob2RzIiwiZ2V0Q291bnRzTnVtIiwiaWQiLCJqZlRva2VuIiwiRGF0ZSIsInBhcnNlIiwidG9JU09TdHJpbmciLCJzcGxpdCIsInRvVGltZVN0cmluZyIsInN1YnN0ciIsImdldE9uZUJ5SWQiLCJvbmxpbmV1c2VyY291bnQiLCIkYXBwbHkiLCJoYW5kbGVOYW1lIiwiaXRlbSIsIml0ZW1BY2NpZCIsImZyb20iLCJnZXRJdGVtSWQiLCJuYXZpZ2F0ZVRvIiwidXJsIiwiaGFuZGxlTmFtZUlkIiwiaXRlbWlkIiwib3BlbkVtb2ppIiwiZSIsImltZ1ByZXZpZXciLCJpdGVtcyIsImltZ1VybCIsImlzSW1nIiwibXNnIiwidHlwZSIsImltZ0FyciIsImZpbHRlciIsImltZ1VybEFyciIsIm1hcCIsImZpbGUiLCJwcmV2aWV3SW1hZ2UiLCJjdXJyZW50IiwidXJscyIsInN1Y2Nlc3MiLCJyZXMiLCJjb25zb2xlIiwic2VuZEVtb2ppIiwiZXZlbnQiLCJ0aGF0IiwidGFyZ2V0IiwiZGF0YXNldCIsIm1zZ2xlbiIsImxlbmd0aCIsInN0ciIsInN0YXJ0IiwibGFzdEluZGV4T2YiLCJlbmQiLCJsZW4iLCJzbGljZSIsInB1c2hNc2ciLCJiaW5kIiwidHJpbSIsInNlbmRUZXh0IiwiZXJyb3IiLCJwYWdlIiwib3ByIiwiaW5mbyIsImNoYW5nZU5hdiIsImN1cnJlbnRUYXJnZXQiLCJpbmRleCIsImNob29zZUltYWdlIiwiY291bnQiLCJwcmV2aWV3RmlsZSIsInd4RmlsZVBhdGgiLCJ0ZW1wRmlsZVBhdGhzIiwic2VuZEZpbGUiLCJzZW5kIiwic2V0VGV4dCIsImRldGFpbCIsInZhbHVlIiwiQXJyYXkiLCJpc0FycmF5IiwiZW1qaSIsInBhcnNlRW1vamkiLCJyZXBsYWNlIiwiY2hhdHJvb21JZCIsImZsb3ciLCJmcm9tQXZhdGFyIiwiZnJvbUNsaWVudFR5cGUiLCJmcm9tQ3VzdG9tIiwiZnJvbU5pY2siLCJyZXNlbmQiLCJzdGF0dXMiLCJ0aW1lIiwidXNlclVwZGF0ZVRpbWUiLCJtZXJnZWQiLCJoYW5kbGVGb2N1cyIsIm9wdGlvbnMiLCJyb29taWQiLCJjcmVhdG9yIiwiYXBwbHkiLCJoYXNNc2dzIiwibmltVG9rZW4iLCJhY2NpZCIsImF2YXRhclVybCIsImFkZFRvUm9vbSIsInJvb21JbmZvIiwiZ2V0VXNlckxpc3QiLCJpc2xpbWl0IiwiaXNVc2VyIiwidXNlckxpbWl0QXJyIiwiZ2V0Q2hhdHJvb21BZGRyZXNzZXMiLCJhZGRyZXNzIiwiZ2V0SW5zdGFuY2UiLCJhY2NvdW50IiwidG9rZW4iLCJjaGF0cm9vbUFkZHJlc3NlcyIsIm9ubXNncyIsInRpcCIsImNvbmQiLCJlcXVhbHMiLCJhbHdheXMiLCJhdHRhY2giLCJ0aXBNc2ciLCJvbmNvbm5lY3QiLCJzaG93TG9hZGluZyIsImdldEhpc3RvcnlNc2dzIiwibGltaXQiLCJyZXZlcnNlIiwiaGlkZUxvYWRpbmciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FB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QUFiLElBQStCRCxJQUFJQyxJQUFKLEtBQWEsS0FBbkQ7QUFBQSwrQkFBaEIsRUFBMEU4RixPQUExRSxFQVpDOztBQWFkbkYsc0NBQVE5RSxHQUFSLENBQVksa0JBQVosRUFBZ0NPLElBQWhDO0FBQ0E7QUFDQXFGLHNDQUFRckYsUUFBUSxFQUFoQjtBQUNBOEg7QUFDQSw2Q0FBSzZCLFdBQUw7O0FBakJjO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBbUJqQjtBQXBEc0MsaUJBQXhCLEM7O0FBc0RqQixxQkFBSzFKLFFBQUwsR0FBZ0JBLFFBQWhCOzs7Ozs7OztBQUVBUixvQkFBSWdHLEtBQUosQ0FBVTtBQUNSQyx3QkFBTSxVQURFO0FBRVJDLHVCQUFLLGFBRkc7QUFHUkM7QUFIUSxpQkFBVjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBU0YscUJBQUsvRSxPQUFMLEdBQWUsS0FBZjtBQUNBLHFCQUFLQyxNQUFMLEdBQWMsS0FBZDtBQUNBLHFCQUFLSCxVQUFMLEdBQWtCLENBQWxCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7RUFyVGtDLGVBQUsrRSxJO2tCQUF0Qi9GLFEiLCJmaWxlIjoiY2hhdHJvb20uanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG5pbXBvcnQgUiBmcm9tICcuLi9saWJzL3JhbWRhJ1xuaW1wb3J0IENoYXRyb29tU0RLIGZyb20gJy4uL3V0aWxzL2NoYXRyb29tJ1xuaW1wb3J0IE5JTSBmcm9tICcuLi91dGlscy9uaW0nXG5pbXBvcnQgRmFjZUlNIGZyb20gJy4uL3V0aWxzL1dlYklNJ1xuaW1wb3J0ICogYXMgbG9nIGZyb20gJy4uL3V0aWxzL2xvZydcbmltcG9ydCB7XG4gIHJlZnJlc2hNc2dzXG59IGZyb20gJy4uL2FjdGlvbnMvY2hhdHJvb20nXG5pbXBvcnQgKiBhcyBjaGF0cm9vbUFwaSBmcm9tICcuLi9hcGlzL2NoYXRyb29tJ1xuXG5pbXBvcnQge1xuICBjb25uZWN0XG59IGZyb20gJ3dlcHktcmVkdXgnXG5cbkBjb25uZWN0KHtcbiAgdXNlcjogc3RhdGUgPT4gc3RhdGUuY29tbW9uLnVzZXIsXG4gIG5pbTogc3RhdGUgPT4gc3RhdGUuY29tbW9uLm5pbSxcbiAgbXNnczogZnVuY3Rpb24gKHN0YXRlKSB7XG4gICAgcmV0dXJuIHN0YXRlLmNoYXRyb29tLm1zZ3NbdGhpcy5yb29tSWRdIHx8IFtdXG4gIH0sXG4gIGludG9WaWV3OiBmdW5jdGlvbihzdGF0ZSkge1xuICAgIGNvbnN0IG1zZ3MgPSBzdGF0ZS5jaGF0cm9vbS5tc2dzW3RoaXMucm9vbUlkXSB8fCBbXVxuICAgIGNvbnN0IGxhc3QgPSBSLmxhc3QobXNncylcbiAgICByZXR1cm4gbGFzdCA/IGxhc3QuaWRDbGllbnQgOiAnJ1xuICB9XG59LCB7XG4gIHJlZnJlc2hNc2dzXG59KVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2hhdHJvb20gZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICBjb25maWcgPSB7XG4gICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+iBiuWkqeWupCdcbiAgfVxuXG4gIGRhdGEgPSB7XG4gICAgbmF2czogWyfogYrlpKknLCAn6K+m5oOFJ10sXG4gICAgY3VycmVudE5hdjogMCxcbiAgICBudW1MaXN0OiBbXSxcbiAgICBpc0xJTUlUOiBmYWxzZSxcbiAgICBjaGF0cm9vbTogbnVsbCxcbiAgICByb29tSWQ6IG51bGwsXG4gICAgc2VuZGVkOiBmYWxzZSxcbiAgICB0ZXh0OiAnJyxcbiAgICByb29tRGF0YToge1xuICAgICAgbmFtZTogJ+WKoOi9veS4rS4uLidcbiAgICB9LFxuICAgIGluZGljYXRvckRvdHM6IHRydWUsXG4gICAgYXV0b3BsYXk6IGZhbHNlLFxuICAgIGludGVydmFsOiA1MDAwLFxuICAgIGR1cmF0aW9uOiAxMDAwLFxuICAgIHNob3c6ICdlbW9qaV9saXN0JyxcbiAgICBzaG93ZW06ICdvcGVyYXRpb24nLFxuICAgIGVtb2ppOiBGYWNlSU0uZGVmYXVsdC5FbW9qaSxcbiAgICBlbW9qaU9iajogRmFjZUlNLmRlZmF1bHQuRW1vamlPYmosXG4gICAgbm93VGltZTogJycsXG4gICAgbm93UGVvcGxlczogMFxuICB9XG5cbiAgbWV0aG9kcyA9IHtcbiAgICBhc3luYyBnZXRDb3VudHNOdW0oaWQsIGpmVG9rZW4pIHtcbiAgICAgIHRoaXMubm93VGltZSA9IG5ldyBEYXRlKERhdGUucGFyc2UobmV3IERhdGUoKSkgKyAyODgwMDAwMCkudG9JU09TdHJpbmcoKS5zcGxpdCgnVCcpWzBdICsgJyAnICsgbmV3IERhdGUoKS50b1RpbWVTdHJpbmcoKS5zdWJzdHIoMCwgOClcbiAgICAgIGNvbnN0IHtvbmxpbmV1c2VyY291bnR9ID0gYXdhaXQgY2hhdHJvb21BcGkuZ2V0T25lQnlJZChpZCwgamZUb2tlbilcbiAgICAgIHRoaXMubm93UGVvcGxlcyA9IG9ubGluZXVzZXJjb3VudFxuICAgICAgdGhpcy4kYXBwbHkoKVxuICAgIH0sXG4gICAgYXN5bmMgaGFuZGxlTmFtZSAoaXRlbSkge1xuICAgICAgY29uc3QgaXRlbUFjY2lkID0gaXRlbS5mcm9tXG4gICAgICBjb25zdCB7aWR9ID0gYXdhaXQgY2hhdHJvb21BcGkuZ2V0SXRlbUlkKGl0ZW1BY2NpZClcbiAgICAgIHdlcHkubmF2aWdhdGVUbyh7XG4gICAgICAgIHVybDogYHVzZXJJbmZvP2lkPSR7aWR9YFxuICAgICAgfSlcbiAgICB9LFxuICAgIGhhbmRsZU5hbWVJZCAoaXRlbSkge1xuICAgICAgY29uc3QgaXRlbWlkID0gaXRlbS5pZFxuICAgICAgd2VweS5uYXZpZ2F0ZVRvKHtcbiAgICAgICAgdXJsOiBgdXNlckluZm8/aWQ9JHtpdGVtaWR9YFxuICAgICAgfSlcbiAgICB9LFxuICAgIG9wZW5FbW9qaSAoZSkge1xuICAgICAgaWYgKHRoaXMuc2hvdyA9PT0gJ3Nob3dFbW9qaScpIHtcbiAgICAgICAgdGhpcy5zaG93ID0gJ2Vtb2ppX2xpc3QnXG4gICAgICAgIHRoaXMuc2hvd2VtID0gJ29wZXJhdGlvbidcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuc2hvdyA9ICdzaG93RW1vamknXG4gICAgICAgIHRoaXMuc2hvd2VtID0gJ3Nob3dFbW9qaU9wZXJhdGlvbidcbiAgICAgIH1cbiAgICAgIHRoaXMuJGFwcGx5KClcbiAgICB9LFxuICAgIGltZ1ByZXZpZXcgKGl0ZW1zLCBtc2dzKSB7XG4gICAgICBjb25zdCBpbWdVcmwgPSBpdGVtc1xuICAgICAgY29uc3QgaXNJbWcgPSBtc2cgPT4gbXNnLnR5cGUgPT09ICdpbWFnZSdcbiAgICAgIGNvbnN0IGltZ0FyciA9IFIuZmlsdGVyKGlzSW1nKShtc2dzKVxuICAgICAgY29uc3QgaW1nVXJsQXJyID0gaW1nQXJyLm1hcChtc2cgPT4ge1xuICAgICAgICByZXR1cm4gbXNnLmZpbGUudXJsXG4gICAgICB9KVxuICAgICAgd2VweS5wcmV2aWV3SW1hZ2Uoe1xuICAgICAgICBjdXJyZW50OiBpbWdVcmwsXG4gICAgICAgIHVybHM6IGltZ1VybEFycixcbiAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKHJlcykge1xuICAgICAgICAgIGNvbnNvbGUubG9nKHJlcylcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9LFxuICAgIGFzeW5jIHNlbmRFbW9qaSAoZXZlbnQpIHtcbiAgICAgIHZhciB0aGF0ID0gdGhpc1xuICAgICAgdmFyIGVtb2ppID0gZXZlbnQudGFyZ2V0LmRhdGFzZXQuZW1vamlcbiAgICAgIHZhciBtc2dsZW4gPSB0aGF0LmRhdGEudGV4dC5sZW5ndGggLSAxXG4gICAgICBpZiAoZW1vamkgJiYgZW1vamkgIT09ICdbZGVsXScpIHtcbiAgICAgICAgdmFyIHN0ciA9IHRoYXQuZGF0YS50ZXh0ICsgZW1vamlcbiAgICAgIH0gZWxzZSBpZiAoZW1vamkgPT09ICdbZGVsXScpIHtcbiAgICAgICAgdmFyIHN0YXJ0ID0gdGhhdC5kYXRhLnRleHQubGFzdEluZGV4T2YoJ1snKVxuICAgICAgICB2YXIgZW5kID0gdGhhdC5kYXRhLnRleHQubGFzdEluZGV4T2YoJ10nKVxuICAgICAgICB2YXIgbGVuID0gZW5kIC0gc3RhcnRcbiAgICAgICAgaWYgKGVuZCAhPT0gLTEgJiYgZW5kID09PSBtc2dsZW4gJiYgbGVuID49IDMgJiYgbGVuIDw9IDQpIHtcbiAgICAgICAgICBzdHIgPSB0aGF0LmRhdGEudGV4dC5zbGljZSgwLCBzdGFydClcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBzdHIgPSB0aGF0LmRhdGEudGV4dC5zbGljZSgwLCBtc2dsZW4pXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHRoaXMudGV4dCA9IHN0clxuICAgICAgY29uc3QgcHVzaE1zZyA9IHRoaXMubWV0aG9kcy5wdXNoTXNnLmJpbmQodGhpcylcbiAgICAgIHZhciB0ZXh0ID0gUi50cmltKHRoaXMudGV4dClcbiAgICAgIHRoaXMudGV4dCA9ICcnXG4gICAgICBpZiAodGV4dC5sZW5ndGgpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBjb25zdCBtc2cgPSBhd2FpdCB0aGlzLmNoYXRyb29tLnNlbmRUZXh0KHtcbiAgICAgICAgICAgIHRleHRcbiAgICAgICAgICB9KVxuICAgICAgICAgIHRoaXMudGV4dCA9ICcnXG4gICAgICAgICAgcHVzaE1zZyhtc2cpXG4gICAgICAgICAgdGhpcy5zaG93ID0gJ2Vtb2ppX2xpc3QnXG4gICAgICAgICAgdGhpcy5zaG93ZW0gPSAnb3BlcmF0aW9uJ1xuICAgICAgICAgIHRoaXMuJGFwcGx5KClcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgIGxvZy5lcnJvcih7XG4gICAgICAgICAgICBwYWdlOiAnY2hhdHJvb20nLFxuICAgICAgICAgICAgb3ByOiAnc2VuZFRleHQnLFxuICAgICAgICAgICAgaW5mbzogZVxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuICAgIGNoYW5nZU5hdiAoZSkge1xuICAgICAgdGhpcy5jdXJyZW50TmF2ID0gZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQuaW5kZXhcbiAgICAgIHRoaXMuc2VuZGVkID0gZmFsc2VcbiAgICAgIHRoaXMuJGFwcGx5KClcbiAgICB9LFxuICAgIGFzeW5jIGNob29zZUltYWdlKCkge1xuICAgICAgLy8g6L+b6KGM5Zu+54mH6YCJ5oup5bm25LiK5LygXG4gICAgICBjb25zdCBwdXNoTXNnID0gdGhpcy5tZXRob2RzLnB1c2hNc2cuYmluZCh0aGlzKVxuICAgICAgY29uc3QgcmVzID0gYXdhaXQgd2VweS5jaG9vc2VJbWFnZSh7XG4gICAgICAgIGNvdW50OiAxXG4gICAgICB9KVxuXG4gICAgICB0cnkge1xuICAgICAgICBjb25zdCBmaWxlID0gYXdhaXQgdGhpcy5jaGF0cm9vbS5wcmV2aWV3RmlsZSh7XG4gICAgICAgICAgdHlwZTogJ2ltYWdlJyxcbiAgICAgICAgICB3eEZpbGVQYXRoOiByZXMudGVtcEZpbGVQYXRoc1swXVxuICAgICAgICB9KVxuICAgICAgICBjb25zdCBtc2cgPSBhd2FpdCB0aGlzLmNoYXRyb29tLnNlbmRGaWxlKHtcbiAgICAgICAgICB0eXBlOiAnaW1hZ2UnLFxuICAgICAgICAgIGZpbGU6IGZpbGVcbiAgICAgICAgfSlcbiAgICAgICAgcHVzaE1zZyhtc2cpXG4gICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBsb2cuZXJyb3Ioe1xuICAgICAgICAgIHBhZ2U6ICdjaGF0cm9vbScsXG4gICAgICAgICAgb3ByOiAnc2VuZEZpbGUnLFxuICAgICAgICAgIGluZm86IGVycm9yXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfSxcbiAgICBhc3luYyBzZW5kKCkge1xuICAgICAgLy8gPyB3aHkgYmluZFxuICAgICAgY29uc3QgcHVzaE1zZyA9IHRoaXMubWV0aG9kcy5wdXNoTXNnLmJpbmQodGhpcylcbiAgICAgIGNvbnN0IHRleHQgPSBSLnRyaW0odGhpcy50ZXh0KVxuICAgICAgdGhpcy50ZXh0ID0gJydcbiAgICAgIGlmICh0ZXh0Lmxlbmd0aCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIGNvbnN0IG1zZyA9IGF3YWl0IHRoaXMuY2hhdHJvb20uc2VuZFRleHQoe1xuICAgICAgICAgICAgdGV4dFxuICAgICAgICAgIH0pXG4gICAgICAgICAgdGhpcy50ZXh0ID0gJydcbiAgICAgICAgICBwdXNoTXNnKG1zZylcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgIGxvZy5lcnJvcih7XG4gICAgICAgICAgICBwYWdlOiAnY2hhdHJvb20nLFxuICAgICAgICAgICAgb3ByOiAnc2VuZFRleHQnLFxuICAgICAgICAgICAgaW5mbzogZVxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuICAgIHNldFRleHQoZSkge1xuICAgICAgdGhpcy50ZXh0ID0gZS5kZXRhaWwudmFsdWVcbiAgICB9LFxuICAgIHB1c2hNc2c6IGZ1bmN0aW9uIChtc2dzKSB7XG4gICAgICBjb25zdCB7IHJlZnJlc2hNc2dzIH0gPSB0aGlzLm1ldGhvZHNcbiAgICAgIGlmICghQXJyYXkuaXNBcnJheShtc2dzKSkge1xuICAgICAgICBtc2dzID0gW21zZ3NdXG4gICAgICB9XG4gICAgICBjb25zb2xlLmxvZygn5bCx5piv6L+Z5Liq5Zu+JywgbXNncylcbiAgICAgIG1zZ3MgPSBtc2dzLm1hcChtc2cgPT4ge1xuICAgICAgICBpZiAobXNnLnR5cGUgPT09ICd0ZXh0Jykge1xuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBlbWppOiBGYWNlSU0uZGVmYXVsdC5wYXJzZUVtb2ppKG1zZy50ZXh0LnJlcGxhY2UoL1xcbi9tZywgJycpKSxcbiAgICAgICAgICAgIGNoYXRyb29tSWQ6IG1zZy5jaGF0cm9vbUlkLFxuICAgICAgICAgICAgZmxvdzogbXNnLmZsb3csXG4gICAgICAgICAgICBmcm9tOiBtc2cuZnJvbSxcbiAgICAgICAgICAgIGZyb21BdmF0YXI6IG1zZy5mcm9tQXZhdGFyLFxuICAgICAgICAgICAgZnJvbUNsaWVudFR5cGU6IG1zZy5mcm9tQ2xpZW50VHlwZSxcbiAgICAgICAgICAgIGZyb21DdXN0b206IG1zZy5mcm9tQ3VzdG9tLFxuICAgICAgICAgICAgZnJvbU5pY2s6IG1zZy5mcm9tTmljayxcbiAgICAgICAgICAgIGlkQ2xpZW50OiBtc2cuaWRDbGllbnQsXG4gICAgICAgICAgICByZXNlbmQ6IG1zZy5yZXNlbmQsXG4gICAgICAgICAgICBzdGF0dXM6IG1zZy5zdGF0dXMsXG4gICAgICAgICAgICB0ZXh0OiBtc2cudGV4dCxcbiAgICAgICAgICAgIHRpbWU6IG1zZy50aW1lLFxuICAgICAgICAgICAgdHlwZTogbXNnLnR5cGUsXG4gICAgICAgICAgICB1c2VyVXBkYXRlVGltZTogbXNnLnVzZXJVcGRhdGVUaW1lXG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiBtc2dcbiAgICAgICAgfVxuICAgICAgfSlcbi8vICAgICAgY29uc29sZS5sb2codGhpcy5yb29tSWQpXG4gICAgICBsZXQgcm9vbUlkID0gdGhpcy5yb29tSWRcbiAgICAgIGNvbnNvbGUubG9nKHJvb21JZClcbiAgICAgIGlmIChtc2dzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgcm9vbUlkID0gbXNnc1swXS5jaGF0cm9vbUlkXG4gICAgICB9XG4gICAgICBjb25zdCBtZXJnZWQgPSBbLi4udGhpcy5tc2dzLCAuLi5tc2dzXVxuICAgICAgcmVmcmVzaE1zZ3Mocm9vbUlkLCBtZXJnZWQpXG4gICAgICB0aGlzLnNlbmRlZCA9IHRydWVcbiAgICAgIHRoaXMuJGFwcGx5KClcbiAgICB9LFxuICAgIGhhbmRsZUZvY3VzKCkge1xuICAgICAgdGhpcy5zZW5kZWQgPSBmYWxzZVxuICAgIH1cbiAgfVxuICBhc3luYyBvbkxvYWQob3B0aW9ucykge1xuICAgIGNvbnN0IHsgaWQgfSA9IG9wdGlvbnNcbiAgICBjb25zdCB7cm9vbWlkfSA9IG9wdGlvbnNcbiAgICBjb25zdCB7Y3JlYXRvcn0gPSBvcHRpb25zXG4gICAgdGhpcy5yb29tSWQgPSByb29taWRcbiAgICBjb25zdCBwdXNoTXNnID0gdGhpcy5tZXRob2RzLnB1c2hNc2cuYmluZCh0aGlzKVxuICAgIGNvbnN0IGdldENvdW50c051bSA9IHRoaXMubWV0aG9kcy5nZXRDb3VudHNOdW0uYmluZCh0aGlzKVxuICAgIGNvbnN0IGFwcGx5ID0gdGhpcy4kYXBwbHkuYmluZCh0aGlzKVxuICAgIGNvbnN0IGhhc01zZ3MgPSB0aGlzLm1zZ3MubGVuZ3RoID4gMFxuICAgIHRyeSB7XG4gICAgICBjb25zdCB7IG5pbVRva2VuLCBhY2NpZCwgYXZhdGFyVXJsLCBqZlRva2VuIH0gPSB0aGlzLnVzZXJcbi8vICAgICAgaWYgKGNyZWF0b3IgIT09IGFjY2lkKSB7XG4vLyAgICAgICAgYXdhaXQgY2hhdHJvb21BcGkuYWRkVG9Sb29tKHJvb21pZCwgY3JlYXRvciwgYWNjaWQpXG4vLyAgICAgIH1cbiAgICAgIGF3YWl0IGNoYXRyb29tQXBpLmFkZFRvUm9vbShyb29taWQsIGNyZWF0b3IsIGFjY2lkKVxuICAgICAgY29uc3Qgcm9vbUluZm8gPSBhd2FpdCBjaGF0cm9vbUFwaS5nZXRPbmVCeUlkKGlkLCBqZlRva2VuKVxuICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IGNoYXRyb29tQXBpLmdldFVzZXJMaXN0KHJvb21pZCwgamZUb2tlbilcbiAgICAgIGNvbnN0IGlzbGltaXQgPSBkYXRhID0+IGRhdGEudHlwZSA9PT0gJ0xJTUlURUQnXG4gICAgICBjb25zdCBpc1VzZXIgPSBkYXRhID0+IGRhdGEubmFtZSAmJiBkYXRhLm5hbWUgIT09IG51bGxcbiAgICAgIHRoaXMubnVtTGlzdCA9IFIuZmlsdGVyKGlzVXNlcikoZGF0YSlcbiAgICAgIGNvbnN0IHVzZXJMaW1pdEFyciA9IFIuZmlsdGVyKGlzbGltaXQpKHRoaXMubnVtTGlzdClcbiAgICAgIGNvbnNvbGUubG9nKCfnpoHoqIDliJfooagnLCB1c2VyTGltaXRBcnIpXG4gICAgICBpZiAodXNlckxpbWl0QXJyLmxlbmd0aCA+IDApIHtcbiAgICAgICAgaWYgKHVzZXJMaW1pdEFyclswXS5hY2NpZCA9PT0gYWNjaWQpIHtcbiAgICAgICAgICB0aGlzLmlzTElNSVQgPSB0cnVlXG4gICAgICAgICAgY29uc29sZS5sb2coJ+iiq+emgeiogCcpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHRoaXMucm9vbURhdGEgPSByb29tSW5mb1xuICAgICAgY29uc3Qgcm9vbUlkID0gdGhpcy5yb29tSWRcbiAgICAgIGNvbnN0IGFkZHJlc3MgPSBhd2FpdCBOSU0uZ2V0Q2hhdHJvb21BZGRyZXNzZXMoYWNjaWQsIHJvb21JZClcbiAgICAgIGNvbnN0IGNoYXRyb29tID0gQ2hhdHJvb21TREsuZ2V0SW5zdGFuY2Uoe1xuLy8gICAgICAgIGRlYnVnOiB0cnVlLFxuICAgICAgICBhY2NvdW50OiBhY2NpZCxcbiAgICAgICAgdG9rZW46IG5pbVRva2VuLFxuICAgICAgICBjaGF0cm9vbUlkOiByb29tSWQsXG4gICAgICAgIGNoYXRyb29tQWRkcmVzc2VzOiBhZGRyZXNzLFxuICAgICAgICBvbm1zZ3M6IGZ1bmN0aW9uKG1zZ3MpIHtcbiAgICAgICAgICBsb2cuaW5mbyh7XG4gICAgICAgICAgICBwYWdlOiAnY2hhdHJvb20nLFxuICAgICAgICAgICAgb3ByOiAnaW5pdGlhbGl6ZSBzZGsgaW5zdGFuY2UnLFxuICAgICAgICAgICAgaW5mbzogbXNnc1xuICAgICAgICAgIH0pXG4vLyAgICAgICAgICBjb25zb2xlLmxvZygn5pS25Yiw6IGK5aSp5a6k5L+h5oGvJywgbXNncylcbiAgICAgICAgICBwdXNoTXNnKG1zZ3MubWFwKG1zZyA9PiB7XG4gICAgICAgICAgICBpZiAobXNnLnR5cGUgPT09ICdub3RpZmljYXRpb24nKSB7XG4gICAgICAgICAgICAgIGdldENvdW50c051bShpZCwgamZUb2tlbilcbiAgICAgICAgICAgICAgLy8g6L+b5YWl6IGK5aSp5a6k5L+h5oGvXG4gICAgICAgICAgICAgIGNvbnN0IHRpcCA9IFIuY29uZChbXG4gICAgICAgICAgICAgICAgW1IuZXF1YWxzKCdtZW1iZXJFbnRlcicpLCBSLmFsd2F5cygn5Yqg5YWl6IGK5aSp5a6kJyldLFxuICAgICAgICAgICAgICAgIFtSLmVxdWFscygnbWVtYmVyRXhpdCcpLCBSLmFsd2F5cygn6YCA5Ye66IGK5aSp5a6kJyldXG4gICAgICAgICAgICAgIF0pKG1zZy5hdHRhY2gudHlwZSlcbiAgICAgICAgICAgICAgY29uc3QgdGlwTXNnID0gYCR7bXNnLmF0dGFjaC5mcm9tTmlja30gJHt0aXB9YFxuICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIC4uLm1zZyxcbiAgICAgICAgICAgICAgICB0eXBlOiAnbm90aWZpY2F0aW9uJyxcbiAgICAgICAgICAgICAgICB0ZXh0OiB0aXBNc2csXG4gICAgICAgICAgICAgICAgZnJvbUF2YXRhcjogYXZhdGFyVXJsXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHJldHVybiBtc2dcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KSlcbiAgICAgICAgfSxcbiAgICAgICAgYXN5bmMgb25jb25uZWN0KCkge1xuICAgICAgICAgIGxvZy5pbmZvKHtcbiAgICAgICAgICAgIHBhZ2U6ICdjaGF0cm9vbScsXG4gICAgICAgICAgICBvcHI6ICdpbml0aWFsaXplIHNkayBpbnN0YW5jZScsXG4gICAgICAgICAgICBpbmZvOiAnW05JTSBDSEFUUk9PTV0gY29ubmVjdGVkJ1xuICAgICAgICAgIH0pXG4gICAgICAgICAgaWYgKCFoYXNNc2dzKSB7XG4gICAgICAgICAgICB3ZXB5LnNob3dMb2FkaW5nKClcbiAgICAgICAgICAgIC8vIOaLieWPluacgOi/kSAxMDAg5p2h5L+h5oGvXG4gICAgICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBjaGF0cm9vbS5nZXRIaXN0b3J5TXNncyh7XG4gICAgICAgICAgICAgIGxpbWl0OiAxMDBcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBjb25zdCBtc2dzID0gcmVzLm1zZ3MuZmlsdGVyKG1zZyA9PiBtc2cudHlwZSAhPT0gJ25vdGlmaWNhdGlvbicgJiYgbXNnLnR5cGUgIT09ICd0aXAnKS5yZXZlcnNlKClcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdoaXN0b3J5IG1lc3NhZ2VzJywgbXNncylcbiAgICAgICAgICAgIC8vIOWIt+aWsOa2iOaBr1xuICAgICAgICAgICAgcHVzaE1zZyhtc2dzIHx8IFtdKVxuICAgICAgICAgICAgYXBwbHkoKVxuICAgICAgICAgICAgd2VweS5oaWRlTG9hZGluZygpXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgdGhpcy5jaGF0cm9vbSA9IGNoYXRyb29tXG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgbG9nLmVycm9yKHtcbiAgICAgICAgcGFnZTogJ2NoYXRyb29tJyxcbiAgICAgICAgb3ByOiAnZ2V0SW5zdGFuY2UnLFxuICAgICAgICBpbmZvOiBlXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIGFzeW5jIG9uU2hvdygpIHtcbiAgICB0aGlzLmlzTElNSVQgPSBmYWxzZVxuICAgIHRoaXMuc2VuZGVkID0gZmFsc2VcbiAgICB0aGlzLmN1cnJlbnROYXYgPSAwXG4gIH1cbn1cbiJdfQ==