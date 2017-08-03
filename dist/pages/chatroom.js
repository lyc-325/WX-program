'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


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
      chatroom: null,
      roomId: null,
      sended: false,
      text: '',
      roomData: {
        name: '加载中...'
      }
    }, _this.methods = {
      changeNav: function changeNav(e) {
        console.log(e);
        this.currentNav = e.currentTarget.dataset.index;
        this.$apply();
      },
      chooseImage: function chooseImage() {
        var _this2 = this;

        return (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee() {
          var pushMsg, res, file, msg;
          return _regenerator2.default.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  // 进行图片选择并上传
                  pushMsg = _this2.methods.pushMsg.bind(_this2);
                  _context.next = 3;
                  return _wepy2.default.chooseImage({
                    count: 1
                  });

                case 3:
                  res = _context.sent;
                  _context.prev = 4;
                  _context.next = 7;
                  return _this2.chatroom.previewFile({
                    type: 'image',
                    wxFilePath: res.tempFilePaths[0]
                  });

                case 7:
                  file = _context.sent;
                  _context.next = 10;
                  return _this2.chatroom.sendFile({
                    type: 'image',
                    file: file
                  });

                case 10:
                  msg = _context.sent;

                  pushMsg(msg);
                  _context.next = 17;
                  break;

                case 14:
                  _context.prev = 14;
                  _context.t0 = _context['catch'](4);

                  log.error({
                    page: 'chatroom',
                    opr: 'sendFile',
                    info: _context.t0
                  });

                case 17:
                case 'end':
                  return _context.stop();
              }
            }
          }, _callee, _this2, [[4, 14]]);
        }))();
      },
      send: function send() {
        var _this3 = this;

        return (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee2() {
          var pushMsg, text, msg;
          return _regenerator2.default.wrap(function _callee2$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  // ? why bind
                  pushMsg = _this3.methods.pushMsg.bind(_this3);
                  text = _ramda2.default.trim(_this3.text);

                  _this3.text = '';

                  if (!text.length) {
                    _context2.next = 15;
                    break;
                  }

                  _context2.prev = 4;
                  _context2.next = 7;
                  return _this3.chatroom.sendText({
                    text: text
                  });

                case 7:
                  msg = _context2.sent;

                  _this3.text = '';
                  pushMsg(msg);
                  _context2.next = 15;
                  break;

                case 12:
                  _context2.prev = 12;
                  _context2.t0 = _context2['catch'](4);

                  log.error({
                    page: 'chatroom',
                    opr: 'sendText',
                    info: _context2.t0
                  });

                case 15:
                case 'end':
                  return _context2.stop();
              }
            }
          }, _callee2, _this3, [[4, 12]]);
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
        console.log(msgs);
        var roomId = msgs[0].chatroomId || this.roomId;
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
      var _ref2 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee4(options) {
        var id, pk, roomInfo, pushMsg, apply, hasMsgs, _user, nimToken, accid, roomId, address, chatroom;

        return _regenerator2.default.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                id = options.id;

                this.roomId = id;
                pk = options.pk;
                _context4.next = 5;
                return chatroomApi.getOneById(pk);

              case 5:
                roomInfo = _context4.sent;

                this.roomData = roomInfo;
                pushMsg = this.methods.pushMsg.bind(this);
                apply = this.$apply.bind(this);
                hasMsgs = this.msgs.length > 0;
                _context4.prev = 10;
                _user = this.user, nimToken = _user.nimToken, accid = _user.accid;
                roomId = this.roomId;
                _context4.next = 15;
                return _nim2.default.getChatroomAddresses(accid, roomId);

              case 15:
                address = _context4.sent;
                chatroom = _chatroom2.default.getInstance({
                  debug: true,
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
                        // 进入聊天室信息
                        var tip = _ramda2.default.cond([[_ramda2.default.equals('memberEnter'), _ramda2.default.always('加入聊天室')], [_ramda2.default.equals('memberExit'), _ramda2.default.always('退出聊天室')]])(msg.attach.type);
                        console.log(msg.attach.fromNick + ' ' + tip);
                      } else {
                        return msg;
                      }
                    }));
                  },
                  onconnect: function onconnect() {
                    var _this4 = this;

                    return (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee3() {
                      var res, msgs;
                      return _regenerator2.default.wrap(function _callee3$(_context3) {
                        while (1) {
                          switch (_context3.prev = _context3.next) {
                            case 0:
                              log.info({
                                page: 'chatroom',
                                opr: 'initialize sdk instance',
                                info: '[NIM CHATROOM] connected'
                              });

                              if (hasMsgs) {
                                _context3.next = 11;
                                break;
                              }

                              _wepy2.default.showLoading();
                              // 拉取最近 100 条信息
                              _context3.next = 5;
                              return chatroom.getHistoryMsgs({
                                limit: 100
                              });

                            case 5:
                              res = _context3.sent;
                              msgs = res.msgs.filter(function (msg) {
                                return msg.type !== 'notification' && msg.type !== 'tip';
                              });

                              console.log('history messages', msgs);
                              // 刷新消息
                              pushMsg(msgs || []);
                              apply();
                              _wepy2.default.hideLoading();

                            case 11:
                            case 'end':
                              return _context3.stop();
                          }
                        }
                      }, _callee3, _this4);
                    }))();
                  }
                });

                this.chatroom = chatroom;
                _context4.next = 23;
                break;

              case 20:
                _context4.prev = 20;
                _context4.t0 = _context4['catch'](10);

                log.error({
                  page: 'chatroom',
                  opr: 'getInstance',
                  info: _context4.t0
                });

              case 23:
              case 'end':
                return _context4.stop();
            }
          }
        }, _callee4, this, [[10, 20]]);
      }));

      function onLoad(_x) {
        return _ref2.apply(this, arguments);
      }

      return onLoad;
    }()
  }, {
    key: 'onShow',
    value: function () {
      var _ref3 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee5() {
        return _regenerator2.default.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
              case 'end':
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));

      function onShow() {
        return _ref3.apply(this, arguments);
      }

      return onShow;
    }()
  }]);
  return Chatroom;
}(_wepy2.default.page)) || _class);

Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Chatroom , 'pages/chatroom'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoYXRyb29tLmpzIl0sIm5hbWVzIjpbImxvZyIsImNoYXRyb29tQXBpIiwiQ2hhdHJvb20iLCJ1c2VyIiwic3RhdGUiLCJjb21tb24iLCJuaW0iLCJtc2dzIiwiY2hhdHJvb20iLCJyb29tSWQiLCJpbnRvVmlldyIsImxhc3QiLCJpZENsaWVudCIsInJlZnJlc2hNc2dzIiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsImRhdGEiLCJuYXZzIiwiY3VycmVudE5hdiIsInNlbmRlZCIsInRleHQiLCJyb29tRGF0YSIsIm5hbWUiLCJtZXRob2RzIiwiY2hhbmdlTmF2IiwiZSIsImNvbnNvbGUiLCJjdXJyZW50VGFyZ2V0IiwiZGF0YXNldCIsImluZGV4IiwiJGFwcGx5IiwiY2hvb3NlSW1hZ2UiLCJwdXNoTXNnIiwiYmluZCIsImNvdW50IiwicmVzIiwicHJldmlld0ZpbGUiLCJ0eXBlIiwid3hGaWxlUGF0aCIsInRlbXBGaWxlUGF0aHMiLCJmaWxlIiwic2VuZEZpbGUiLCJtc2ciLCJlcnJvciIsInBhZ2UiLCJvcHIiLCJpbmZvIiwic2VuZCIsInRyaW0iLCJsZW5ndGgiLCJzZW5kVGV4dCIsInNldFRleHQiLCJkZXRhaWwiLCJ2YWx1ZSIsIkFycmF5IiwiaXNBcnJheSIsImNoYXRyb29tSWQiLCJtZXJnZWQiLCJoYW5kbGVGb2N1cyIsIm9wdGlvbnMiLCJpZCIsInBrIiwiZ2V0T25lQnlJZCIsInJvb21JbmZvIiwiYXBwbHkiLCJoYXNNc2dzIiwibmltVG9rZW4iLCJhY2NpZCIsImdldENoYXRyb29tQWRkcmVzc2VzIiwiYWRkcmVzcyIsImdldEluc3RhbmNlIiwiZGVidWciLCJhY2NvdW50IiwidG9rZW4iLCJjaGF0cm9vbUFkZHJlc3NlcyIsIm9ubXNncyIsIm1hcCIsInRpcCIsImNvbmQiLCJlcXVhbHMiLCJhbHdheXMiLCJhdHRhY2giLCJmcm9tTmljayIsIm9uY29ubmVjdCIsInNob3dMb2FkaW5nIiwiZ2V0SGlzdG9yeU1zZ3MiLCJs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O0FBRUFSLG9CQUFJMkMsS0FBSixDQUFVO0FBQ1JDLHdCQUFNLFVBREU7QUFFUkMsdUJBQUssYUFGRztBQUdSQztBQUhRLGlCQUFWOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7RUF0SmdDLGVBQUtGLEk7a0JBQXRCMUMsUSIsImZpbGUiOiJjaGF0cm9vbS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcbmltcG9ydCBSIGZyb20gJy4uL2xpYnMvcmFtZGEnXG5pbXBvcnQgQ2hhdHJvb21TREsgZnJvbSAnLi4vdXRpbHMvY2hhdHJvb20nXG5pbXBvcnQgTklNIGZyb20gJy4uL3V0aWxzL25pbSdcbmltcG9ydCAqIGFzIGxvZyBmcm9tICcuLi91dGlscy9sb2cnXG5pbXBvcnQge1xuICByZWZyZXNoTXNnc1xufSBmcm9tICcuLi9hY3Rpb25zL2NoYXRyb29tJ1xuaW1wb3J0ICogYXMgY2hhdHJvb21BcGkgZnJvbSAnLi4vYXBpcy9jaGF0cm9vbSdcblxuaW1wb3J0IHtcbiAgY29ubmVjdFxufSBmcm9tICd3ZXB5LXJlZHV4J1xuXG5AY29ubmVjdCh7XG4gIHVzZXI6IHN0YXRlID0+IHN0YXRlLmNvbW1vbi51c2VyLFxuICBuaW06IHN0YXRlID0+IHN0YXRlLmNvbW1vbi5uaW0sXG4gIG1zZ3M6IGZ1bmN0aW9uIChzdGF0ZSkge1xuICAgIHJldHVybiBzdGF0ZS5jaGF0cm9vbS5tc2dzW3RoaXMucm9vbUlkXSB8fCBbXVxuICB9LFxuICBpbnRvVmlldzogZnVuY3Rpb24oc3RhdGUpIHtcbiAgICBjb25zdCBtc2dzID0gc3RhdGUuY2hhdHJvb20ubXNnc1t0aGlzLnJvb21JZF0gfHwgW11cbiAgICBjb25zdCBsYXN0ID0gUi5sYXN0KG1zZ3MpXG4gICAgcmV0dXJuIGxhc3QgPyBsYXN0LmlkQ2xpZW50IDogJydcbiAgfVxufSwge1xuICByZWZyZXNoTXNnc1xufSlcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENoYXRyb29tIGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgY29uZmlnID0ge1xuICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICfogYrlpKnlrqQnXG4gIH1cblxuICBkYXRhID0ge1xuICAgIG5hdnM6IFsn6IGK5aSpJywgJ+ivpuaDhSddLFxuICAgIGN1cnJlbnROYXY6IDAsXG4gICAgY2hhdHJvb206IG51bGwsXG4gICAgcm9vbUlkOiBudWxsLFxuICAgIHNlbmRlZDogZmFsc2UsXG4gICAgdGV4dDogJycsXG4gICAgcm9vbURhdGE6IHtcbiAgICAgIG5hbWU6ICfliqDovb3kuK0uLi4nXG4gICAgfVxuICB9XG5cbiAgbWV0aG9kcyA9IHtcbiAgICBjaGFuZ2VOYXYgKGUpIHtcbiAgICAgIGNvbnNvbGUubG9nKGUpXG4gICAgICB0aGlzLmN1cnJlbnROYXYgPSBlLmN1cnJlbnRUYXJnZXQuZGF0YXNldC5pbmRleFxuICAgICAgdGhpcy4kYXBwbHkoKVxuICAgIH0sXG4gICAgYXN5bmMgY2hvb3NlSW1hZ2UoKSB7XG4gICAgICAvLyDov5vooYzlm77niYfpgInmi6nlubbkuIrkvKBcbiAgICAgIGNvbnN0IHB1c2hNc2cgPSB0aGlzLm1ldGhvZHMucHVzaE1zZy5iaW5kKHRoaXMpXG4gICAgICBjb25zdCByZXMgPSBhd2FpdCB3ZXB5LmNob29zZUltYWdlKHtcbiAgICAgICAgY291bnQ6IDFcbiAgICAgIH0pXG5cbiAgICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IGZpbGUgPSBhd2FpdCB0aGlzLmNoYXRyb29tLnByZXZpZXdGaWxlKHtcbiAgICAgICAgICB0eXBlOiAnaW1hZ2UnLFxuICAgICAgICAgIHd4RmlsZVBhdGg6IHJlcy50ZW1wRmlsZVBhdGhzWzBdXG4gICAgICAgIH0pXG4gICAgICAgIGNvbnN0IG1zZyA9IGF3YWl0IHRoaXMuY2hhdHJvb20uc2VuZEZpbGUoe1xuICAgICAgICAgIHR5cGU6ICdpbWFnZScsXG4gICAgICAgICAgZmlsZTogZmlsZVxuICAgICAgICB9KVxuICAgICAgICBwdXNoTXNnKG1zZylcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGxvZy5lcnJvcih7XG4gICAgICAgICAgcGFnZTogJ2NoYXRyb29tJyxcbiAgICAgICAgICBvcHI6ICdzZW5kRmlsZScsXG4gICAgICAgICAgaW5mbzogZXJyb3JcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9LFxuICAgIGFzeW5jIHNlbmQoKSB7XG4gICAgICAvLyA/IHdoeSBiaW5kXG4gICAgICBjb25zdCBwdXNoTXNnID0gdGhpcy5tZXRob2RzLnB1c2hNc2cuYmluZCh0aGlzKVxuICAgICAgY29uc3QgdGV4dCA9IFIudHJpbSh0aGlzLnRleHQpXG4gICAgICB0aGlzLnRleHQgPSAnJ1xuICAgICAgaWYgKHRleHQubGVuZ3RoKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgY29uc3QgbXNnID0gYXdhaXQgdGhpcy5jaGF0cm9vbS5zZW5kVGV4dCh7XG4gICAgICAgICAgICB0ZXh0XG4gICAgICAgICAgfSlcbiAgICAgICAgICB0aGlzLnRleHQgPSAnJ1xuICAgICAgICAgIHB1c2hNc2cobXNnKVxuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgbG9nLmVycm9yKHtcbiAgICAgICAgICAgIHBhZ2U6ICdjaGF0cm9vbScsXG4gICAgICAgICAgICBvcHI6ICdzZW5kVGV4dCcsXG4gICAgICAgICAgICBpbmZvOiBlXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG4gICAgc2V0VGV4dChlKSB7XG4gICAgICB0aGlzLnRleHQgPSBlLmRldGFpbC52YWx1ZVxuICAgIH0sXG4gICAgcHVzaE1zZzogZnVuY3Rpb24gKG1zZ3MpIHtcbiAgICAgIGNvbnN0IHsgcmVmcmVzaE1zZ3MgfSA9IHRoaXMubWV0aG9kc1xuICAgICAgaWYgKCFBcnJheS5pc0FycmF5KG1zZ3MpKSB7XG4gICAgICAgIG1zZ3MgPSBbbXNnc11cbiAgICAgIH1cbiAgICAgIGNvbnNvbGUubG9nKG1zZ3MpXG4gICAgICBjb25zdCByb29tSWQgPSBtc2dzWzBdLmNoYXRyb29tSWQgfHwgdGhpcy5yb29tSWRcbiAgICAgIGNvbnN0IG1lcmdlZCA9IFsuLi50aGlzLm1zZ3MsIC4uLm1zZ3NdXG4gICAgICByZWZyZXNoTXNncyhyb29tSWQsIG1lcmdlZClcbiAgICAgIHRoaXMuc2VuZGVkID0gdHJ1ZVxuICAgICAgdGhpcy4kYXBwbHkoKVxuICAgIH0sXG4gICAgaGFuZGxlRm9jdXMoKSB7XG4gICAgICB0aGlzLnNlbmRlZCA9IGZhbHNlXG4gICAgfVxuICB9XG5cbiAgYXN5bmMgb25Mb2FkKG9wdGlvbnMpIHtcbiAgICBjb25zdCB7IGlkIH0gPSBvcHRpb25zXG4gICAgdGhpcy5yb29tSWQgPSBpZFxuICAgIGNvbnN0IHsgcGsgfSA9IG9wdGlvbnNcbiAgICBjb25zdCByb29tSW5mbyA9IGF3YWl0IGNoYXRyb29tQXBpLmdldE9uZUJ5SWQocGspXG4gICAgdGhpcy5yb29tRGF0YSA9IHJvb21JbmZvXG4gICAgY29uc3QgcHVzaE1zZyA9IHRoaXMubWV0aG9kcy5wdXNoTXNnLmJpbmQodGhpcylcbiAgICBjb25zdCBhcHBseSA9IHRoaXMuJGFwcGx5LmJpbmQodGhpcylcbiAgICBjb25zdCBoYXNNc2dzID0gdGhpcy5tc2dzLmxlbmd0aCA+IDBcbiAgICB0cnkge1xuICAgICAgY29uc3QgeyBuaW1Ub2tlbiwgYWNjaWQgfSA9IHRoaXMudXNlclxuICAgICAgY29uc3Qgcm9vbUlkID0gdGhpcy5yb29tSWRcbiAgICAgIGNvbnN0IGFkZHJlc3MgPSBhd2FpdCBOSU0uZ2V0Q2hhdHJvb21BZGRyZXNzZXMoYWNjaWQsIHJvb21JZClcbiAgICAgIGNvbnN0IGNoYXRyb29tID0gQ2hhdHJvb21TREsuZ2V0SW5zdGFuY2Uoe1xuICAgICAgICBkZWJ1ZzogdHJ1ZSxcbiAgICAgICAgYWNjb3VudDogYWNjaWQsXG4gICAgICAgIHRva2VuOiBuaW1Ub2tlbixcbiAgICAgICAgY2hhdHJvb21JZDogcm9vbUlkLFxuICAgICAgICBjaGF0cm9vbUFkZHJlc3NlczogYWRkcmVzcyxcbiAgICAgICAgb25tc2dzOiBmdW5jdGlvbihtc2dzKSB7XG4gICAgICAgICAgbG9nLmluZm8oe1xuICAgICAgICAgICAgcGFnZTogJ2NoYXRyb29tJyxcbiAgICAgICAgICAgIG9wcjogJ2luaXRpYWxpemUgc2RrIGluc3RhbmNlJyxcbiAgICAgICAgICAgIGluZm86IG1zZ3NcbiAgICAgICAgICB9KVxuICAgICAgICAgIHB1c2hNc2cobXNncy5tYXAobXNnID0+IHtcbiAgICAgICAgICAgIGlmIChtc2cudHlwZSA9PT0gJ25vdGlmaWNhdGlvbicpIHtcbiAgICAgICAgICAgICAgLy8g6L+b5YWl6IGK5aSp5a6k5L+h5oGvXG4gICAgICAgICAgICAgIGNvbnN0IHRpcCA9IFIuY29uZChbXG4gICAgICAgICAgICAgICAgW1IuZXF1YWxzKCdtZW1iZXJFbnRlcicpLCBSLmFsd2F5cygn5Yqg5YWl6IGK5aSp5a6kJyldLFxuICAgICAgICAgICAgICAgIFtSLmVxdWFscygnbWVtYmVyRXhpdCcpLCBSLmFsd2F5cygn6YCA5Ye66IGK5aSp5a6kJyldXG4gICAgICAgICAgICAgIF0pKG1zZy5hdHRhY2gudHlwZSlcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coYCR7bXNnLmF0dGFjaC5mcm9tTmlja30gJHt0aXB9YClcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHJldHVybiBtc2dcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KSlcbiAgICAgICAgfSxcbiAgICAgICAgYXN5bmMgb25jb25uZWN0KCkge1xuICAgICAgICAgIGxvZy5pbmZvKHtcbiAgICAgICAgICAgIHBhZ2U6ICdjaGF0cm9vbScsXG4gICAgICAgICAgICBvcHI6ICdpbml0aWFsaXplIHNkayBpbnN0YW5jZScsXG4gICAgICAgICAgICBpbmZvOiAnW05JTSBDSEFUUk9PTV0gY29ubmVjdGVkJ1xuICAgICAgICAgIH0pXG4gICAgICAgICAgaWYgKCFoYXNNc2dzKSB7XG4gICAgICAgICAgICB3ZXB5LnNob3dMb2FkaW5nKClcbiAgICAgICAgICAgIC8vIOaLieWPluacgOi/kSAxMDAg5p2h5L+h5oGvXG4gICAgICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBjaGF0cm9vbS5nZXRIaXN0b3J5TXNncyh7XG4gICAgICAgICAgICAgIGxpbWl0OiAxMDBcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBjb25zdCBtc2dzID0gcmVzLm1zZ3MuZmlsdGVyKG1zZyA9PiBtc2cudHlwZSAhPT0gJ25vdGlmaWNhdGlvbicgJiYgbXNnLnR5cGUgIT09ICd0aXAnKVxuICAgICAgICAgICAgY29uc29sZS5sb2coJ2hpc3RvcnkgbWVzc2FnZXMnLCBtc2dzKVxuICAgICAgICAgICAgLy8g5Yi35paw5raI5oGvXG4gICAgICAgICAgICBwdXNoTXNnKG1zZ3MgfHwgW10pXG4gICAgICAgICAgICBhcHBseSgpXG4gICAgICAgICAgICB3ZXB5LmhpZGVMb2FkaW5nKClcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgICB0aGlzLmNoYXRyb29tID0gY2hhdHJvb21cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBsb2cuZXJyb3Ioe1xuICAgICAgICBwYWdlOiAnY2hhdHJvb20nLFxuICAgICAgICBvcHI6ICdnZXRJbnN0YW5jZScsXG4gICAgICAgIGluZm86IGVcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgYXN5bmMgb25TaG93KCkge1xuXG4gIH1cbn1cbiJdfQ==