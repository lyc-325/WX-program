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
      navs: ['聊天', '公告', '成员'],
      currentNav: 0,
      chatroom: null,
      roomId: null,
      sended: false,
      text: ''
    }, _this.methods = {
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
        var id, pushMsg, apply, hasMsgs, _user, nimToken, accid, roomId, address, chatroom;

        return _regenerator2.default.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                id = options.id;

                this.roomId = id;
                pushMsg = this.methods.pushMsg.bind(this);
                apply = this.$apply.bind(this);
                hasMsgs = this.msgs.length > 0;
                _context4.prev = 5;
                _user = this.user, nimToken = _user.nimToken, accid = _user.accid;
                roomId = this.roomId;
                _context4.next = 10;
                return _nim2.default.getChatroomAddresses(accid, roomId);

              case 10:
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
                _context4.next = 18;
                break;

              case 15:
                _context4.prev = 15;
                _context4.t0 = _context4['catch'](5);

                log.error({
                  page: 'chatroom',
                  opr: 'getInstance',
                  info: _context4.t0
                });

              case 18:
              case 'end':
                return _context4.stop();
            }
          }
        }, _callee4, this, [[5, 15]]);
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoYXRyb29tLmpzIl0sIm5hbWVzIjpbImxvZyIsIkNoYXRyb29tIiwidXNlciIsInN0YXRlIiwiY29tbW9uIiwibmltIiwibXNncyIsImNoYXRyb29tIiwicm9vbUlkIiwiaW50b1ZpZXciLCJsYXN0IiwiaWRDbGllbnQiLCJyZWZyZXNoTXNncyIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCJkYXRhIiwibmF2cyIsImN1cnJlbnROYXYiLCJzZW5kZWQiLCJ0ZXh0IiwibWV0aG9kcyIsImNob29zZUltYWdlIiwicHVzaE1zZyIsImJpbmQiLCJjb3VudCIsInJlcyIsInByZXZpZXdGaWxlIiwidHlwZSIsInd4RmlsZVBhdGgiLCJ0ZW1wRmlsZVBhdGhzIiwiZmlsZSIsInNlbmRGaWxlIiwibXNnIiwiZXJyb3IiLCJwYWdlIiwib3ByIiwiaW5mbyIsInNlbmQiLCJ0cmltIiwibGVuZ3RoIiwic2VuZFRleHQiLCJzZXRUZXh0IiwiZSIsImRldGFpbCIsInZhbHVlIiwiQXJyYXkiLCJpc0FycmF5IiwiY2hhdHJvb21JZCIsIm1lcmdlZCIsIiRhcHBseSIsImhhbmRsZUZvY3VzIiwib3B0aW9ucyIsImlkIiwiYXBwbHkiLCJoYXNNc2dzIiwibmltVG9rZW4iLCJhY2NpZCIsImdldENoYXRyb29tQWRkcmVzc2VzIiwiYWRkcmVzcyIsImdldEluc3RhbmNlIiwiZGVidWciLCJhY2NvdW50IiwidG9rZW4iLCJjaGF0cm9vbUFkZHJlc3NlcyIsIm9ubXNncyIsIm1hcCIsInRpcCIsImNvbmQiLCJlcXVhbHMiLCJhbHdheXMiLCJhdHRhY2giLCJjb25zb2xlIiwiZnJvbU5pY2siLCJvbmNvbm5lY3QiLCJzaG93TG9hZGluZyIsImdldEhpc3RvcnlNc2dzIiwibGltaXQiLCJmaWx0ZXIiLCJoaWRlTG9hZGluZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7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RGdCLGtDQU1Ya0IsT0FOVztBQUFBO0FBQUE7QUFBQTs7QUFPZCw2Q0FBS29CLFdBQUw7QUFDQTtBQVJjO0FBQUEscUNBU0luRSxTQUFTb0UsY0FBVCxDQUF3QjtBQUN4Q0MsdUNBQU87QUFEaUMsK0JBQXhCLENBVEo7O0FBQUE7QUFTUm5ELGlDQVRRO0FBWVJuQixrQ0FaUSxHQVlEbUIsSUFBSW5CLElBQUosQ0FBU3VFLE1BQVQsQ0FBZ0I7QUFBQSx1Q0FBTzdDLElBQUlMLElBQUosS0FBYSxjQUFiLElBQStCSyxJQUFJTCxJQUFKLEtBQWEsS0FBbkQ7QUFBQSwrQkFBaEIsQ0FaQzs7QUFhZDRDLHNDQUFRdkUsR0FBUixDQUFZLGtCQUFaLEVBQWdDTSxJQUFoQztBQUNBO0FBQ0FnQixzQ0FBUWhCLFFBQVEsRUFBaEI7QUFDQStDO0FBQ0EsNkNBQUt5QixXQUFMOztBQWpCYztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQW1CakI7QUE1Q3NDLGlCQUF4QixDOztBQThDakIscUJBQUt2RSxRQUFMLEdBQWdCQSxRQUFoQjs7Ozs7Ozs7QUFFQVAsb0JBQUlpQyxLQUFKLENBQVU7QUFDUkMsd0JBQU0sVUFERTtBQUVSQyx1QkFBSyxhQUZHO0FBR1JDO0FBSFEsaUJBQVY7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQTFJZ0MsZUFBS0YsSTtrQkFBdEJqQyxRIiwiZmlsZSI6ImNoYXRyb29tLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuaW1wb3J0IFIgZnJvbSAnLi4vbGlicy9yYW1kYSdcbmltcG9ydCBDaGF0cm9vbVNESyBmcm9tICcuLi91dGlscy9jaGF0cm9vbSdcbmltcG9ydCBOSU0gZnJvbSAnLi4vdXRpbHMvbmltJ1xuaW1wb3J0ICogYXMgbG9nIGZyb20gJy4uL3V0aWxzL2xvZydcbmltcG9ydCB7XG4gIHJlZnJlc2hNc2dzXG59IGZyb20gJy4uL2FjdGlvbnMvY2hhdHJvb20nXG5cbmltcG9ydCB7XG4gIGNvbm5lY3Rcbn0gZnJvbSAnd2VweS1yZWR1eCdcblxuQGNvbm5lY3Qoe1xuICB1c2VyOiBzdGF0ZSA9PiBzdGF0ZS5jb21tb24udXNlcixcbiAgbmltOiBzdGF0ZSA9PiBzdGF0ZS5jb21tb24ubmltLFxuICBtc2dzOiBmdW5jdGlvbiAoc3RhdGUpIHtcbiAgICByZXR1cm4gc3RhdGUuY2hhdHJvb20ubXNnc1t0aGlzLnJvb21JZF0gfHwgW11cbiAgfSxcbiAgaW50b1ZpZXc6IGZ1bmN0aW9uKHN0YXRlKSB7XG4gICAgY29uc3QgbXNncyA9IHN0YXRlLmNoYXRyb29tLm1zZ3NbdGhpcy5yb29tSWRdIHx8IFtdXG4gICAgY29uc3QgbGFzdCA9IFIubGFzdChtc2dzKVxuICAgIHJldHVybiBsYXN0ID8gbGFzdC5pZENsaWVudCA6ICcnXG4gIH1cbn0sIHtcbiAgcmVmcmVzaE1zZ3Ncbn0pXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDaGF0cm9vbSBleHRlbmRzIHdlcHkucGFnZSB7XG4gIGNvbmZpZyA9IHtcbiAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn6IGK5aSp5a6kJ1xuICB9XG5cbiAgZGF0YSA9IHtcbiAgICBuYXZzOiBbJ+iBiuWkqScsICflhazlkYonLCAn5oiQ5ZGYJ10sXG4gICAgY3VycmVudE5hdjogMCxcbiAgICBjaGF0cm9vbTogbnVsbCxcbiAgICByb29tSWQ6IG51bGwsXG4gICAgc2VuZGVkOiBmYWxzZSxcbiAgICB0ZXh0OiAnJ1xuICB9XG5cbiAgbWV0aG9kcyA9IHtcbiAgICBhc3luYyBjaG9vc2VJbWFnZSgpIHtcbiAgICAgIC8vIOi/m+ihjOWbvueJh+mAieaLqeW5tuS4iuS8oFxuICAgICAgY29uc3QgcHVzaE1zZyA9IHRoaXMubWV0aG9kcy5wdXNoTXNnLmJpbmQodGhpcylcbiAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IHdlcHkuY2hvb3NlSW1hZ2Uoe1xuICAgICAgICBjb3VudDogMVxuICAgICAgfSlcblxuICAgICAgdHJ5IHtcbiAgICAgICAgY29uc3QgZmlsZSA9IGF3YWl0IHRoaXMuY2hhdHJvb20ucHJldmlld0ZpbGUoe1xuICAgICAgICAgIHR5cGU6ICdpbWFnZScsXG4gICAgICAgICAgd3hGaWxlUGF0aDogcmVzLnRlbXBGaWxlUGF0aHNbMF1cbiAgICAgICAgfSlcbiAgICAgICAgY29uc3QgbXNnID0gYXdhaXQgdGhpcy5jaGF0cm9vbS5zZW5kRmlsZSh7XG4gICAgICAgICAgdHlwZTogJ2ltYWdlJyxcbiAgICAgICAgICBmaWxlOiBmaWxlXG4gICAgICAgIH0pXG4gICAgICAgIHB1c2hNc2cobXNnKVxuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgbG9nLmVycm9yKHtcbiAgICAgICAgICBwYWdlOiAnY2hhdHJvb20nLFxuICAgICAgICAgIG9wcjogJ3NlbmRGaWxlJyxcbiAgICAgICAgICBpbmZvOiBlcnJvclxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH0sXG4gICAgYXN5bmMgc2VuZCgpIHtcbiAgICAgIC8vID8gd2h5IGJpbmRcbiAgICAgIGNvbnN0IHB1c2hNc2cgPSB0aGlzLm1ldGhvZHMucHVzaE1zZy5iaW5kKHRoaXMpXG4gICAgICBjb25zdCB0ZXh0ID0gUi50cmltKHRoaXMudGV4dClcbiAgICAgIHRoaXMudGV4dCA9ICcnXG4gICAgICBpZiAodGV4dC5sZW5ndGgpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBjb25zdCBtc2cgPSBhd2FpdCB0aGlzLmNoYXRyb29tLnNlbmRUZXh0KHtcbiAgICAgICAgICAgIHRleHRcbiAgICAgICAgICB9KVxuICAgICAgICAgIHRoaXMudGV4dCA9ICcnXG4gICAgICAgICAgcHVzaE1zZyhtc2cpXG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICBsb2cuZXJyb3Ioe1xuICAgICAgICAgICAgcGFnZTogJ2NoYXRyb29tJyxcbiAgICAgICAgICAgIG9wcjogJ3NlbmRUZXh0JyxcbiAgICAgICAgICAgIGluZm86IGVcbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcbiAgICBzZXRUZXh0KGUpIHtcbiAgICAgIHRoaXMudGV4dCA9IGUuZGV0YWlsLnZhbHVlXG4gICAgfSxcbiAgICBwdXNoTXNnOiBmdW5jdGlvbiAobXNncykge1xuICAgICAgY29uc3QgeyByZWZyZXNoTXNncyB9ID0gdGhpcy5tZXRob2RzXG4gICAgICBpZiAoIUFycmF5LmlzQXJyYXkobXNncykpIHtcbiAgICAgICAgbXNncyA9IFttc2dzXVxuICAgICAgfVxuICAgICAgY29uc3Qgcm9vbUlkID0gbXNnc1swXS5jaGF0cm9vbUlkIHx8IHRoaXMucm9vbUlkXG4gICAgICBjb25zdCBtZXJnZWQgPSBbLi4udGhpcy5tc2dzLCAuLi5tc2dzXVxuICAgICAgcmVmcmVzaE1zZ3Mocm9vbUlkLCBtZXJnZWQpXG4gICAgICB0aGlzLnNlbmRlZCA9IHRydWVcbiAgICAgIHRoaXMuJGFwcGx5KClcbiAgICB9LFxuICAgIGhhbmRsZUZvY3VzKCkge1xuICAgICAgdGhpcy5zZW5kZWQgPSBmYWxzZVxuICAgIH1cbiAgfVxuXG4gIGFzeW5jIG9uTG9hZChvcHRpb25zKSB7XG4gICAgY29uc3QgeyBpZCB9ID0gb3B0aW9uc1xuICAgIHRoaXMucm9vbUlkID0gaWRcbiAgICBjb25zdCBwdXNoTXNnID0gdGhpcy5tZXRob2RzLnB1c2hNc2cuYmluZCh0aGlzKVxuICAgIGNvbnN0IGFwcGx5ID0gdGhpcy4kYXBwbHkuYmluZCh0aGlzKVxuICAgIGNvbnN0IGhhc01zZ3MgPSB0aGlzLm1zZ3MubGVuZ3RoID4gMFxuICAgIHRyeSB7XG4gICAgICBjb25zdCB7IG5pbVRva2VuLCBhY2NpZCB9ID0gdGhpcy51c2VyXG4gICAgICBjb25zdCByb29tSWQgPSB0aGlzLnJvb21JZFxuICAgICAgY29uc3QgYWRkcmVzcyA9IGF3YWl0IE5JTS5nZXRDaGF0cm9vbUFkZHJlc3NlcyhhY2NpZCwgcm9vbUlkKVxuICAgICAgY29uc3QgY2hhdHJvb20gPSBDaGF0cm9vbVNESy5nZXRJbnN0YW5jZSh7XG4gICAgICAgIGRlYnVnOiB0cnVlLFxuICAgICAgICBhY2NvdW50OiBhY2NpZCxcbiAgICAgICAgdG9rZW46IG5pbVRva2VuLFxuICAgICAgICBjaGF0cm9vbUlkOiByb29tSWQsXG4gICAgICAgIGNoYXRyb29tQWRkcmVzc2VzOiBhZGRyZXNzLFxuICAgICAgICBvbm1zZ3M6IGZ1bmN0aW9uKG1zZ3MpIHtcbiAgICAgICAgICBsb2cuaW5mbyh7XG4gICAgICAgICAgICBwYWdlOiAnY2hhdHJvb20nLFxuICAgICAgICAgICAgb3ByOiAnaW5pdGlhbGl6ZSBzZGsgaW5zdGFuY2UnLFxuICAgICAgICAgICAgaW5mbzogbXNnc1xuICAgICAgICAgIH0pXG4gICAgICAgICAgcHVzaE1zZyhtc2dzLm1hcChtc2cgPT4ge1xuICAgICAgICAgICAgaWYgKG1zZy50eXBlID09PSAnbm90aWZpY2F0aW9uJykge1xuICAgICAgICAgICAgICAvLyDov5vlhaXogYrlpKnlrqTkv6Hmga9cbiAgICAgICAgICAgICAgY29uc3QgdGlwID0gUi5jb25kKFtcbiAgICAgICAgICAgICAgICBbUi5lcXVhbHMoJ21lbWJlckVudGVyJyksIFIuYWx3YXlzKCfliqDlhaXogYrlpKnlrqQnKV0sXG4gICAgICAgICAgICAgICAgW1IuZXF1YWxzKCdtZW1iZXJFeGl0JyksIFIuYWx3YXlzKCfpgIDlh7rogYrlpKnlrqQnKV1cbiAgICAgICAgICAgICAgXSkobXNnLmF0dGFjaC50eXBlKVxuICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgJHttc2cuYXR0YWNoLmZyb21OaWNrfSAke3RpcH1gKVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgcmV0dXJuIG1zZ1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pKVxuICAgICAgICB9LFxuICAgICAgICBhc3luYyBvbmNvbm5lY3QoKSB7XG4gICAgICAgICAgbG9nLmluZm8oe1xuICAgICAgICAgICAgcGFnZTogJ2NoYXRyb29tJyxcbiAgICAgICAgICAgIG9wcjogJ2luaXRpYWxpemUgc2RrIGluc3RhbmNlJyxcbiAgICAgICAgICAgIGluZm86ICdbTklNIENIQVRST09NXSBjb25uZWN0ZWQnXG4gICAgICAgICAgfSlcbiAgICAgICAgICBpZiAoIWhhc01zZ3MpIHtcbiAgICAgICAgICAgIHdlcHkuc2hvd0xvYWRpbmcoKVxuICAgICAgICAgICAgLy8g5ouJ5Y+W5pyA6L+RIDEwMCDmnaHkv6Hmga9cbiAgICAgICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGNoYXRyb29tLmdldEhpc3RvcnlNc2dzKHtcbiAgICAgICAgICAgICAgbGltaXQ6IDEwMFxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIGNvbnN0IG1zZ3MgPSByZXMubXNncy5maWx0ZXIobXNnID0+IG1zZy50eXBlICE9PSAnbm90aWZpY2F0aW9uJyAmJiBtc2cudHlwZSAhPT0gJ3RpcCcpXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnaGlzdG9yeSBtZXNzYWdlcycsIG1zZ3MpXG4gICAgICAgICAgICAvLyDliLfmlrDmtojmga9cbiAgICAgICAgICAgIHB1c2hNc2cobXNncyB8fCBbXSlcbiAgICAgICAgICAgIGFwcGx5KClcbiAgICAgICAgICAgIHdlcHkuaGlkZUxvYWRpbmcoKVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSlcbiAgICAgIHRoaXMuY2hhdHJvb20gPSBjaGF0cm9vbVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIGxvZy5lcnJvcih7XG4gICAgICAgIHBhZ2U6ICdjaGF0cm9vbScsXG4gICAgICAgIG9wcjogJ2dldEluc3RhbmNlJyxcbiAgICAgICAgaW5mbzogZVxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICBhc3luYyBvblNob3coKSB7XG5cbiAgfVxufVxuIl19