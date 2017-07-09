'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _regenerator = require('./../npm/babel-runtime/regenerator/index.js');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _extends2 = require('./../npm/babel-runtime/helpers/extends.js');

var _extends3 = _interopRequireDefault(_extends2);

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

var _config = require('./../config.js');

var _nim = require('./../utils/nim.js');

var _nim2 = _interopRequireDefault(_nim);

var _common = require('./../actions/common.js');

var _sessions = require('./../actions/sessions.js');

var _friends = require('./../actions/friends.js');

var _chat = require('./../actions/chat.js');

var _wepyRedux = require('./../npm/wepy-redux/lib/index.js');

var _account = require('./../apis/account.js');

var api = _interopRequireWildcard(_account);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mockRooms = [{
  id: 0,
  cover: 'http://b.hiphotos.baidu.com/baike/w%3D268%3Bg%3D0/sign=6d24a14af81f3a295ac8d2c8a11edb0c/e824b899a9014c088f762831027b02087af4f4d1.jpg',
  title: '一起哈皮的聊天室',
  members: 50
}, {
  id: 1,
  cover: 'http://b.hiphotos.baidu.com/baike/w%3D268%3Bg%3D0/sign=6d24a14af81f3a295ac8d2c8a11edb0c/e824b899a9014c088f762831027b02087af4f4d1.jpg',
  title: '一起哈皮的聊天室3',
  members: 50
}, {
  id: 2,
  cover: 'http://b.hiphotos.baidu.com/baike/w%3D268%3Bg%3D0/sign=6d24a14af81f3a295ac8d2c8a11edb0c/e824b899a9014c088f762831027b02087af4f4d1.jpg',
  title: '一起哈皮的聊天室4',
  members: 50
}, {
  id: 3,
  cover: 'http://b.hiphotos.baidu.com/baike/w%3D268%3Bg%3D0/sign=6d24a14af81f3a295ac8d2c8a11edb0c/e824b899a9014c088f762831027b02087af4f4d1.jpg',
  title: '一起哈皮的聊天室5',
  members: 50
}, {
  id: 4,
  cover: 'http://b.hiphotos.baidu.com/baike/w%3D268%3Bg%3D0/sign=6d24a14af81f3a295ac8d2c8a11edb0c/e824b899a9014c088f762831027b02087af4f4d1.jpg',
  title: '一起哈皮的聊天室6',
  members: 50
}, {
  id: 5,
  cover: 'http://b.hiphotos.baidu.com/baike/w%3D268%3Bg%3D0/sign=6d24a14af81f3a295ac8d2c8a11edb0c/e824b899a9014c088f762831027b02087af4f4d1.jpg',
  title: '一起哈皮的聊天室7',
  members: 50
}];

var config = _config.wx;

var getFriend = function getFriend(friend) {
  return {
    nickname: friend.nick,
    avatar: friend.avatar,
    accid: friend.account
  };
};

var Chatrooms = (_dec = (0, _wepyRedux.connect)({
  user: function user(state) {
    return state.common.user;
  },
  nim: function nim(state) {
    return state.common.nim;
  },
  friends: function friends(state) {
    return state.friends.friends;
  },
  msgs: function msgs(state) {
    return state.chat.msgs;
  }
}, {
  setUser: _common.setUser,
  setNim: _common.setNim,
  refreshFriends: _friends.refreshFriends,
  refreshSessions: _sessions.refreshSessions,
  refreshMsgs: _chat.refreshMsgs,
  refreshMsgsByTo: _chat.refreshMsgsByTo
}), _dec(_class = function (_wepy$page) {
  (0, _inherits3.default)(Chatrooms, _wepy$page);

  function Chatrooms() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, Chatrooms);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Chatrooms.__proto__ || (0, _getPrototypeOf2.default)(Chatrooms)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: '聊天室'
    }, _this.data = {
      rooms: []
    }, _this.methods = {
      pushMsg: function pushMsg(msgs) {
        var _methods = this.methods,
            refreshMsgs = _methods.refreshMsgs,
            refreshMsgsByTo = _methods.refreshMsgsByTo;

        if (!Array.isArray(msgs)) {
          msgs = [msgs];
        }
        var sessionId = msgs[0].sessionId;
        var to = msgs[0].to;
        var merged = (this.msgs[sessionId] || [], msgs);
        var mergedByTo = (this.msgs[to] || [], msgs);
        refreshMsgs(sessionId, merged);
        refreshMsgsByTo(to, mergedByTo);
      }
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(Chatrooms, [{
    key: 'onLoad',
    value: function () {
      var _ref2 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee() {
        var _this2 = this;

        var _methods2, setUser, setNim, refreshSessions, refreshFriends, pushMsg, _ref3, code, _ref4, data, openid, _ref5, userInfo, password, user, token, Token, nim;

        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _methods2 = this.methods, setUser = _methods2.setUser, setNim = _methods2.setNim, refreshSessions = _methods2.refreshSessions, refreshFriends = _methods2.refreshFriends;
                pushMsg = this.methods.pushMsg.bind(this);

                _wepy2.default.showLoading();
                _context.next = 5;
                return _wepy2.default.login();

              case 5:
                _ref3 = _context.sent;
                code = _ref3.code;
                _context.next = 9;
                return _wepy2.default.request({
                  url: 'https://api.weixin.qq.com/sns/jscode2session?appid=' + config.appId + '&secret=' + config.appSecrete + '&js_code=' + code + '&grant_type=authorization_code'
                });

              case 9:
                _ref4 = _context.sent;
                data = _ref4.data;
                openid = data.openid;
                _context.next = 14;
                return _wepy2.default.getUserInfo();

              case 14:
                _ref5 = _context.sent;
                userInfo = _ref5.userInfo;

                console.log('openid', openid);
                password = _ramda2.default.takeLast(5)(openid);
                user = (0, _extends3.default)({}, userInfo, {
                  accid: openid.toLowerCase()
                });


                setUser(user);
                // 如果用户尚未在 网易云注册 则先注册
                _context.prev = 19;
                _context.next = 22;
                return _nim2.default.login(openid);

              case 22:
                token = _context.sent;
                _context.next = 25;
<<<<<<< HEAD
                return api.getToken(openid, password);
=======
                return api.getToken(openid, password.toLowerCase());
>>>>>>> b25b6dbca11662d3df32d47a85cea644fe7984b0

              case 25:
                Token = _context.sent;

                if (Token) {
                  _context.next = 28;
                  break;
                }

                throw new Error('user not exist');

              case 28:

                setUser((0, _extends3.default)({}, this.user, {
                  jfToken: Token
                }));

                // 初始化 nim 对象
                nim = _nim2.default.getInstance({
                  account: this.user.accid,
                  token: token,
                  debug: true,
                  onusers: function onusers(friends) {
                    refreshFriends(friends.map(getFriend));
                    _this2.$apply();
                  },
                  onsessions: function onsessions(sessions) {
                    var merged = nim.mergeSessions(_this2.sessions, sessions);
                    refreshSessions(merged);
                    _this2.$apply();
                  },
                  onupdatesession: function onupdatesession(session) {
                    var merged = nim.mergeSessions(_this2.sessions, session);
                    refreshSessions(merged);
                    _this2.$apply();
                  },
                  onmsg: function onmsg(msg) {
                    pushMsg(msg);
                    _this2.$apply();
                  },
                  onroamingmsgs: function onroamingmsgs(obj) {
                    pushMsg(obj.msgs);
                  },
                  onofflinemsgs: function onofflinemsgs(obj) {
                    pushMsg(obj.msgs);
                  }
                });


                setNim(nim);

                setTimeout(function () {
                  _this2.rooms = mockRooms;
                  _wepy2.default.hideLoading();
                  // 通过 $apply 强制脏检查
                  _this2.$apply();
                }, 2000);
<<<<<<< HEAD
                _context.next = 37;
                break;

              case 33:
                _context.prev = 33;
=======
                _context.next = 38;
                break;

              case 34:
                _context.prev = 34;
>>>>>>> b25b6dbca11662d3df32d47a85cea644fe7984b0
                _context.t0 = _context['catch'](19);

                console.error('app error', _context.t0);
                _wepy2.default.navigateTo({
                  url: '/pages/register'
                });

<<<<<<< HEAD
              case 37:
=======
              case 38:
>>>>>>> b25b6dbca11662d3df32d47a85cea644fe7984b0
              case 'end':
                return _context.stop();
            }
          }
<<<<<<< HEAD
        }, _callee, this, [[19, 33]]);
=======
        }, _callee, this, [[19, 34]]);
>>>>>>> b25b6dbca11662d3df32d47a85cea644fe7984b0
      }));

      function onLoad() {
        return _ref2.apply(this, arguments);
      }

      return onLoad;
    }()
  }]);
  return Chatrooms;
}(_wepy2.default.page)) || _class);

Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Chatrooms , 'pages/chatrooms'));

<<<<<<< HEAD
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoYXRyb29tcy5qcyJdLCJuYW1lcyI6WyJhcGkiLCJtb2NrUm9vbXMiLCJpZCIsImNvdmVyIiwidGl0bGUiLCJtZW1iZXJzIiwiY29uZmlnIiwiQ2hhdHJvb21zIiwidXNlciIsInN0YXRlIiwiY29tbW9uIiwibmltIiwic2V0VXNlciIsInNldE5pbSIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCJkYXRhIiwicm9vbXMiLCJtZXRob2RzIiwic2hvd0xvYWRpbmciLCJsb2dpbiIsImNvZGUiLCJyZXF1ZXN0IiwidXJsIiwiYXBwSWQiLCJhcHBTZWNyZXRlIiwib3BlbmlkIiwiZ2V0VXNlckluZm8iLCJ1c2VySW5mbyIsImNvbnNvbGUiLCJsb2ciLCJwYXNzd29yZCIsInRha2VMYXN0IiwiYWNjaWQiLCJ0b2tlbiIsImdldFRva2VuIiwiVG9rZW4iLCJFcnJvciIsImpmVG9rZW4iLCJzZXRUaW1lb3V0IiwiaGlkZUxvYWRpbmciLCIkYXBwbHkiLCJlcnJvciIsIm5hdmlnYXRlVG8iLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWlDQTs7OztBQUNBOzs7O0FBRUE7O0FBSUE7Ozs7QUFFQTs7QUFLQTs7QUFJQTs7SUFBWUEsRzs7Ozs7O0FBbERaLElBQU1DLFlBQVksQ0FBQztBQUNqQkMsTUFBSSxDQURhO0FBRWpCQyxTQUFPLHNJQUZVO0FBR2pCQyxTQUFPLFVBSFU7QUFJakJDLFdBQVM7QUFKUSxDQUFELEVBS2Y7QUFDREgsTUFBSSxDQURIO0FBRURDLFNBQU8sc0lBRk47QUFHREMsU0FBTyxXQUhOO0FBSURDLFdBQVM7QUFKUixDQUxlLEVBVWY7QUFDREgsTUFBSSxDQURIO0FBRURDLFNBQU8sc0lBRk47QUFHREMsU0FBTyxXQUhOO0FBSURDLFdBQVM7QUFKUixDQVZlLEVBZWY7QUFDREgsTUFBSSxDQURIO0FBRURDLFNBQU8sc0lBRk47QUFHREMsU0FBTyxXQUhOO0FBSURDLFdBQVM7QUFKUixDQWZlLEVBb0JmO0FBQ0RILE1BQUksQ0FESDtBQUVEQyxTQUFPLHNJQUZOO0FBR0RDLFNBQU8sV0FITjtBQUlEQyxXQUFTO0FBSlIsQ0FwQmUsRUF5QmY7QUFDREgsTUFBSSxDQURIO0FBRURDLFNBQU8sc0lBRk47QUFHREMsU0FBTyxXQUhOO0FBSURDLFdBQVM7QUFKUixDQXpCZSxDQUFsQjs7QUFvREEsSUFBTUMsbUJBQU47O0lBYXFCQyxTLFdBWHBCLHdCQUFRO0FBQ1BDLE1BRE8sZ0JBQ0ZDLEtBREUsRUFDSztBQUNWLFdBQU9BLE1BQU1DLE1BQU4sQ0FBYUYsSUFBcEI7QUFDRCxHQUhNO0FBSVBHLEtBSk8sZUFJSEYsS0FKRyxFQUlJO0FBQ1QsV0FBT0EsTUFBTUMsTUFBTixDQUFhQyxHQUFwQjtBQUNEO0FBTk0sQ0FBUixFQU9FO0FBQ0RDLDBCQURDO0FBRURDO0FBRkMsQ0FQRixDOzs7Ozs7Ozs7Ozs7OztrTkFZQ1AsTSxHQUFTO0FBQ1BRLDhCQUF3QjtBQURqQixLLFFBSVRDLEksR0FBTztBQUNMQyxhQUFPO0FBREYsSzs7Ozs7Ozs7Ozs7Ozs7OzJCQUt1QixLQUFLQyxPLEVBQXpCTCxPLFlBQUFBLE8sRUFBU0MsTSxZQUFBQSxNOztBQUNqQiwrQkFBS0ssV0FBTDs7dUJBQ3VCLGVBQUtDLEtBQUwsRTs7OztBQUFmQyxvQixTQUFBQSxJOzt1QkFDZSxlQUFLQyxPQUFMLENBQWE7QUFDbENDLCtFQUEyRGhCLE9BQU9pQixLQUFsRSxnQkFBa0ZqQixPQUFPa0IsVUFBekYsaUJBQStHSixJQUEvRztBQURrQyxpQkFBYixDOzs7O0FBQWZMLG9CLFNBQUFBLEk7QUFHQVUsc0IsR0FBV1YsSSxDQUFYVSxNOzt1QkFDbUIsZUFBS0MsV0FBTCxFOzs7O0FBQW5CQyx3QixTQUFBQSxROztBQUNSQyx3QkFBUUMsR0FBUixDQUFZLFFBQVosRUFBc0JKLE1BQXRCO0FBQ01LLHdCLEdBQVcsZ0JBQUVDLFFBQUYsQ0FBVyxDQUFYLEVBQWNOLE1BQWQsQztBQUVYakIsb0IsOEJBQ0RtQixRO0FBQ0hLLHlCQUFPUDs7OztBQUdUYix3QkFBUUosSUFBUjtBQUNBOzs7dUJBRXNCLGNBQUlXLEtBQUosQ0FBVU0sTUFBVixDOzs7QUFBZFEscUI7O3VCQUNjakMsSUFBSWtDLFFBQUosQ0FBYVQsTUFBYixFQUFxQkssUUFBckIsQzs7O0FBQWRLLHFCOztvQkFFREEsSzs7Ozs7c0JBQ0csSUFBSUMsS0FBSixDQUFVLGdCQUFWLEM7Ozs7QUFHUnhCLG1EQUNLLEtBQUtKLElBRFY7QUFFRTZCLDJCQUFTRjtBQUZYOztBQUtBdEIsdUJBQU87QUFDTG9CO0FBREssaUJBQVA7O0FBSUFLLDJCQUFXLFlBQU07QUFDZix5QkFBS3RCLEtBQUwsR0FBYWYsU0FBYjtBQUNBLGlDQUFLc0MsV0FBTDtBQUNBO0FBQ0EseUJBQUtDLE1BQUw7QUFDRCxpQkFMRCxFQUtHLElBTEg7Ozs7Ozs7O0FBT0FaLHdCQUFRYSxLQUFSLENBQWMsV0FBZDtBQUNBLCtCQUFLQyxVQUFMLENBQWdCO0FBQ2RwQix1QkFBSztBQURTLGlCQUFoQjs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBckRpQyxlQUFLcUIsSTtrQkFBdkJwQyxTIiwiZmlsZSI6ImNoYXRyb29tcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuY29uc3QgbW9ja1Jvb21zID0gW3tcbiAgaWQ6IDAsXG4gIGNvdmVyOiAnaHR0cDovL2IuaGlwaG90b3MuYmFpZHUuY29tL2JhaWtlL3clM0QyNjglM0JnJTNEMC9zaWduPTZkMjRhMTRhZjgxZjNhMjk1YWM4ZDJjOGExMWVkYjBjL2U4MjRiODk5YTkwMTRjMDg4Zjc2MjgzMTAyN2IwMjA4N2FmNGY0ZDEuanBnJyxcbiAgdGl0bGU6ICfkuIDotbflk4jnmq7nmoTogYrlpKnlrqQnLFxuICBtZW1iZXJzOiA1MFxufSwge1xuICBpZDogMSxcbiAgY292ZXI6ICdodHRwOi8vYi5oaXBob3Rvcy5iYWlkdS5jb20vYmFpa2UvdyUzRDI2OCUzQmclM0QwL3NpZ249NmQyNGExNGFmODFmM2EyOTVhYzhkMmM4YTExZWRiMGMvZTgyNGI4OTlhOTAxNGMwODhmNzYyODMxMDI3YjAyMDg3YWY0ZjRkMS5qcGcnLFxuICB0aXRsZTogJ+S4gOi1t+WTiOearueahOiBiuWkqeWupDMnLFxuICBtZW1iZXJzOiA1MFxufSwge1xuICBpZDogMixcbiAgY292ZXI6ICdodHRwOi8vYi5oaXBob3Rvcy5iYWlkdS5jb20vYmFpa2UvdyUzRDI2OCUzQmclM0QwL3NpZ249NmQyNGExNGFmODFmM2EyOTVhYzhkMmM4YTExZWRiMGMvZTgyNGI4OTlhOTAxNGMwODhmNzYyODMxMDI3YjAyMDg3YWY0ZjRkMS5qcGcnLFxuICB0aXRsZTogJ+S4gOi1t+WTiOearueahOiBiuWkqeWupDQnLFxuICBtZW1iZXJzOiA1MFxufSwge1xuICBpZDogMyxcbiAgY292ZXI6ICdodHRwOi8vYi5oaXBob3Rvcy5iYWlkdS5jb20vYmFpa2UvdyUzRDI2OCUzQmclM0QwL3NpZ249NmQyNGExNGFmODFmM2EyOTVhYzhkMmM4YTExZWRiMGMvZTgyNGI4OTlhOTAxNGMwODhmNzYyODMxMDI3YjAyMDg3YWY0ZjRkMS5qcGcnLFxuICB0aXRsZTogJ+S4gOi1t+WTiOearueahOiBiuWkqeWupDUnLFxuICBtZW1iZXJzOiA1MFxufSwge1xuICBpZDogNCxcbiAgY292ZXI6ICdodHRwOi8vYi5oaXBob3Rvcy5iYWlkdS5jb20vYmFpa2UvdyUzRDI2OCUzQmclM0QwL3NpZ249NmQyNGExNGFmODFmM2EyOTVhYzhkMmM4YTExZWRiMGMvZTgyNGI4OTlhOTAxNGMwODhmNzYyODMxMDI3YjAyMDg3YWY0ZjRkMS5qcGcnLFxuICB0aXRsZTogJ+S4gOi1t+WTiOearueahOiBiuWkqeWupDYnLFxuICBtZW1iZXJzOiA1MFxufSwge1xuICBpZDogNSxcbiAgY292ZXI6ICdodHRwOi8vYi5oaXBob3Rvcy5iYWlkdS5jb20vYmFpa2UvdyUzRDI2OCUzQmclM0QwL3NpZ249NmQyNGExNGFmODFmM2EyOTVhYzhkMmM4YTExZWRiMGMvZTgyNGI4OTlhOTAxNGMwODhmNzYyODMxMDI3YjAyMDg3YWY0ZjRkMS5qcGcnLFxuICB0aXRsZTogJ+S4gOi1t+WTiOearueahOiBiuWkqeWupDcnLFxuICBtZW1iZXJzOiA1MFxufV1cblxuaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcbmltcG9ydCBSIGZyb20gJy4uL2xpYnMvcmFtZGEnXG5cbmltcG9ydCB7XG4gIHd4XG59IGZyb20gJy4uL2NvbmZpZydcblxuaW1wb3J0IE5JTSBmcm9tICcuLi91dGlscy9uaW0nXG5cbmltcG9ydCB7XG4gIHNldFVzZXIsXG4gIHNldE5pbVxufSBmcm9tICcuLi9hY3Rpb25zL2NvbW1vbidcblxuaW1wb3J0IHtcbiAgY29ubmVjdFxufSBmcm9tICd3ZXB5LXJlZHV4J1xuXG5pbXBvcnQgKiBhcyBhcGkgZnJvbSAnLi4vYXBpcy9hY2NvdW50J1xuXG5jb25zdCBjb25maWcgPSB3eFxuXG5AY29ubmVjdCh7XG4gIHVzZXIoc3RhdGUpIHtcbiAgICByZXR1cm4gc3RhdGUuY29tbW9uLnVzZXJcbiAgfSxcbiAgbmltKHN0YXRlKSB7XG4gICAgcmV0dXJuIHN0YXRlLmNvbW1vbi5uaW1cbiAgfVxufSwge1xuICBzZXRVc2VyLFxuICBzZXROaW1cbn0pXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDaGF0cm9vbXMgZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICBjb25maWcgPSB7XG4gICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+iBiuWkqeWupCdcbiAgfVxuXG4gIGRhdGEgPSB7XG4gICAgcm9vbXM6IFtdXG4gIH1cblxuICBhc3luYyBvbkxvYWQoKSB7XG4gICAgY29uc3QgeyBzZXRVc2VyLCBzZXROaW0gfSA9IHRoaXMubWV0aG9kc1xuICAgIHdlcHkuc2hvd0xvYWRpbmcoKVxuICAgIGNvbnN0IHsgY29kZSB9ID0gYXdhaXQgd2VweS5sb2dpbigpXG4gICAgY29uc3QgeyBkYXRhIH0gPSBhd2FpdCB3ZXB5LnJlcXVlc3Qoe1xuICAgICAgdXJsOiBgaHR0cHM6Ly9hcGkud2VpeGluLnFxLmNvbS9zbnMvanNjb2RlMnNlc3Npb24/YXBwaWQ9JHtjb25maWcuYXBwSWR9JnNlY3JldD0ke2NvbmZpZy5hcHBTZWNyZXRlfSZqc19jb2RlPSR7Y29kZX0mZ3JhbnRfdHlwZT1hdXRob3JpemF0aW9uX2NvZGVgXG4gICAgfSlcbiAgICBjb25zdCB7IG9wZW5pZCB9ID0gZGF0YVxuICAgIGNvbnN0IHsgdXNlckluZm8gfSA9IGF3YWl0IHdlcHkuZ2V0VXNlckluZm8oKVxuICAgIGNvbnNvbGUubG9nKCdvcGVuaWQnLCBvcGVuaWQpO1xuICAgIGNvbnN0IHBhc3N3b3JkID0gUi50YWtlTGFzdCg1KShvcGVuaWQpXG5cbiAgICBjb25zdCB1c2VyID0ge1xuICAgICAgLi4udXNlckluZm8sXG4gICAgICBhY2NpZDogb3BlbmlkXG4gICAgfVxuXG4gICAgc2V0VXNlcih1c2VyKVxuICAgIC8vIOWmguaenOeUqOaIt+WwmuacquWcqCDnvZHmmJPkupHms6jlhowg5YiZ5YWI5rOo5YaMXG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHRva2VuID0gYXdhaXQgTklNLmxvZ2luKG9wZW5pZClcbiAgICAgIGNvbnN0IFRva2VuID0gYXdhaXQgYXBpLmdldFRva2VuKG9wZW5pZCwgcGFzc3dvcmQpXG5cbiAgICAgIGlmICghVG9rZW4pIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCd1c2VyIG5vdCBleGlzdCcpXG4gICAgICB9XG5cbiAgICAgIHNldFVzZXIoe1xuICAgICAgICAuLi50aGlzLnVzZXIsXG4gICAgICAgIGpmVG9rZW46IFRva2VuXG4gICAgICB9KVxuXG4gICAgICBzZXROaW0oe1xuICAgICAgICB0b2tlblxuICAgICAgfSlcblxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHRoaXMucm9vbXMgPSBtb2NrUm9vbXNcbiAgICAgICAgd2VweS5oaWRlTG9hZGluZygpXG4gICAgICAgIC8vIOmAmui/hyAkYXBwbHkg5by65Yi26ISP5qOA5p+lXG4gICAgICAgIHRoaXMuJGFwcGx5KClcbiAgICAgIH0sIDIwMDApXG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgY29uc29sZS5lcnJvcignYXBwIGVycm9yJywgZSlcbiAgICAgIHdlcHkubmF2aWdhdGVUbyh7XG4gICAgICAgIHVybDogJy9wYWdlcy9yZWdpc3RlcidcbiAgICAgIH0pXG4gICAgfVxuICB9XG59XG4iXX0=
=======
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoYXRyb29tcy5qcyJdLCJuYW1lcyI6WyJhcGkiLCJtb2NrUm9vbXMiLCJpZCIsImNvdmVyIiwidGl0bGUiLCJtZW1iZXJzIiwiY29uZmlnIiwiZ2V0RnJpZW5kIiwibmlja25hbWUiLCJmcmllbmQiLCJuaWNrIiwiYXZhdGFyIiwiYWNjaWQiLCJhY2NvdW50IiwiQ2hhdHJvb21zIiwidXNlciIsInN0YXRlIiwiY29tbW9uIiwibmltIiwiZnJpZW5kcyIsIm1zZ3MiLCJjaGF0Iiwic2V0VXNlciIsInNldE5pbSIsInJlZnJlc2hGcmllbmRzIiwicmVmcmVzaFNlc3Npb25zIiwicmVmcmVzaE1zZ3MiLCJyZWZyZXNoTXNnc0J5VG8iLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiZGF0YSIsInJvb21zIiwibWV0aG9kcyIsInB1c2hNc2ciLCJBcnJheSIsImlzQXJyYXkiLCJzZXNzaW9uSWQiLCJ0byIsIm1lcmdlZCIsIm1lcmdlZEJ5VG8iLCJiaW5kIiwic2hvd0xvYWRpbmciLCJsb2dpbiIsImNvZGUiLCJyZXF1ZXN0IiwidXJsIiwiYXBwSWQiLCJhcHBTZWNyZXRlIiwib3BlbmlkIiwiZ2V0VXNlckluZm8iLCJ1c2VySW5mbyIsInBhc3N3b3JkIiwidGFrZUxhc3QiLCJ0b0xvd2VyQ2FzZSIsInRva2VuIiwiZ2V0VG9rZW4iLCJUb2tlbiIsIkVycm9yIiwiamZUb2tlbiIsImdldEluc3RhbmNlIiwiZGVidWciLCJvbnVzZXJzIiwibWFwIiwiJGFwcGx5Iiwib25zZXNzaW9ucyIsIm1lcmdlU2Vzc2lvbnMiLCJzZXNzaW9ucyIsIm9udXBkYXRlc2Vzc2lvbiIsInNlc3Npb24iLCJvbm1zZyIsIm1zZyIsIm9ucm9hbWluZ21zZ3MiLCJvYmoiLCJvbm9mZmxpbmVtc2dzIiwic2V0VGltZW91dCIsImhpZGVMb2FkaW5nIiwiY29uc29sZSIsImVycm9yIiwibmF2aWdhdGVUbyIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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S3lCLE1BQUw7QUFDRCxtQkFaeUI7QUFhMUJJLG1DQUFpQixrQ0FBVztBQUMxQix3QkFBTTdCLFNBQVNuQixJQUFJOEMsYUFBSixDQUFrQixPQUFLQyxRQUF2QixFQUFpQ0UsT0FBakMsQ0FBZjtBQUNBMUMsb0NBQWdCWSxNQUFoQjtBQUNBLDJCQUFLeUIsTUFBTDtBQUNELG1CQWpCeUI7QUFrQjFCTSx5QkFBTyxvQkFBTztBQUNacEMsNEJBQVFxQyxHQUFSO0FBQ0EsMkJBQUtQLE1BQUw7QUFDRCxtQkFyQnlCO0FBc0IxQlEsaUNBQWUsNEJBQU87QUFDcEJ0Qyw0QkFBUXVDLElBQUluRCxJQUFaO0FBQ0QsbUJBeEJ5QjtBQXlCMUJvRCxpQ0FBZSw0QkFBTztBQUNwQnhDLDRCQUFRdUMsSUFBSW5ELElBQVo7QUFDRDtBQTNCeUIsaUJBQWhCLEM7OztBQThCWkcsdUJBQU9MLEdBQVA7O0FBRUF1RCwyQkFBVyxZQUFNO0FBQ2YseUJBQUszQyxLQUFMLEdBQWE3QixTQUFiO0FBQ0EsaUNBQUt5RSxXQUFMO0FBQ0E7QUFDQSx5QkFBS1osTUFBTDtBQUNELGlCQUxELEVBS0csSUFMSDs7Ozs7Ozs7QUFPQWEsd0JBQVFDLEtBQVIsQ0FBYyxXQUFkO0FBQ0EsK0JBQUtDLFVBQUwsQ0FBZ0I7QUFDZGpDLHVCQUFLO0FBRFMsaUJBQWhCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7RUFsR2lDLGVBQUtrQyxJO2tCQUF2QmhFLFMiLCJmaWxlIjoiY2hhdHJvb21zLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5jb25zdCBtb2NrUm9vbXMgPSBbe1xuICBpZDogMCxcbiAgY292ZXI6ICdodHRwOi8vYi5oaXBob3Rvcy5iYWlkdS5jb20vYmFpa2UvdyUzRDI2OCUzQmclM0QwL3NpZ249NmQyNGExNGFmODFmM2EyOTVhYzhkMmM4YTExZWRiMGMvZTgyNGI4OTlhOTAxNGMwODhmNzYyODMxMDI3YjAyMDg3YWY0ZjRkMS5qcGcnLFxuICB0aXRsZTogJ+S4gOi1t+WTiOearueahOiBiuWkqeWupCcsXG4gIG1lbWJlcnM6IDUwXG59LCB7XG4gIGlkOiAxLFxuICBjb3ZlcjogJ2h0dHA6Ly9iLmhpcGhvdG9zLmJhaWR1LmNvbS9iYWlrZS93JTNEMjY4JTNCZyUzRDAvc2lnbj02ZDI0YTE0YWY4MWYzYTI5NWFjOGQyYzhhMTFlZGIwYy9lODI0Yjg5OWE5MDE0YzA4OGY3NjI4MzEwMjdiMDIwODdhZjRmNGQxLmpwZycsXG4gIHRpdGxlOiAn5LiA6LW35ZOI55qu55qE6IGK5aSp5a6kMycsXG4gIG1lbWJlcnM6IDUwXG59LCB7XG4gIGlkOiAyLFxuICBjb3ZlcjogJ2h0dHA6Ly9iLmhpcGhvdG9zLmJhaWR1LmNvbS9iYWlrZS93JTNEMjY4JTNCZyUzRDAvc2lnbj02ZDI0YTE0YWY4MWYzYTI5NWFjOGQyYzhhMTFlZGIwYy9lODI0Yjg5OWE5MDE0YzA4OGY3NjI4MzEwMjdiMDIwODdhZjRmNGQxLmpwZycsXG4gIHRpdGxlOiAn5LiA6LW35ZOI55qu55qE6IGK5aSp5a6kNCcsXG4gIG1lbWJlcnM6IDUwXG59LCB7XG4gIGlkOiAzLFxuICBjb3ZlcjogJ2h0dHA6Ly9iLmhpcGhvdG9zLmJhaWR1LmNvbS9iYWlrZS93JTNEMjY4JTNCZyUzRDAvc2lnbj02ZDI0YTE0YWY4MWYzYTI5NWFjOGQyYzhhMTFlZGIwYy9lODI0Yjg5OWE5MDE0YzA4OGY3NjI4MzEwMjdiMDIwODdhZjRmNGQxLmpwZycsXG4gIHRpdGxlOiAn5LiA6LW35ZOI55qu55qE6IGK5aSp5a6kNScsXG4gIG1lbWJlcnM6IDUwXG59LCB7XG4gIGlkOiA0LFxuICBjb3ZlcjogJ2h0dHA6Ly9iLmhpcGhvdG9zLmJhaWR1LmNvbS9iYWlrZS93JTNEMjY4JTNCZyUzRDAvc2lnbj02ZDI0YTE0YWY4MWYzYTI5NWFjOGQyYzhhMTFlZGIwYy9lODI0Yjg5OWE5MDE0YzA4OGY3NjI4MzEwMjdiMDIwODdhZjRmNGQxLmpwZycsXG4gIHRpdGxlOiAn5LiA6LW35ZOI55qu55qE6IGK5aSp5a6kNicsXG4gIG1lbWJlcnM6IDUwXG59LCB7XG4gIGlkOiA1LFxuICBjb3ZlcjogJ2h0dHA6Ly9iLmhpcGhvdG9zLmJhaWR1LmNvbS9iYWlrZS93JTNEMjY4JTNCZyUzRDAvc2lnbj02ZDI0YTE0YWY4MWYzYTI5NWFjOGQyYzhhMTFlZGIwYy9lODI0Yjg5OWE5MDE0YzA4OGY3NjI4MzEwMjdiMDIwODdhZjRmNGQxLmpwZycsXG4gIHRpdGxlOiAn5LiA6LW35ZOI55qu55qE6IGK5aSp5a6kNycsXG4gIG1lbWJlcnM6IDUwXG59XVxuXG5pbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuaW1wb3J0IFIgZnJvbSAnLi4vbGlicy9yYW1kYSdcblxuaW1wb3J0IHtcbiAgd3hcbn0gZnJvbSAnLi4vY29uZmlnJ1xuXG5pbXBvcnQgTklNIGZyb20gJy4uL3V0aWxzL25pbSdcblxuaW1wb3J0IHtcbiAgc2V0VXNlcixcbiAgc2V0TmltXG59IGZyb20gJy4uL2FjdGlvbnMvY29tbW9uJ1xuXG5pbXBvcnQge1xuICByZWZyZXNoU2Vzc2lvbnNcbn0gZnJvbSAnLi4vYWN0aW9ucy9zZXNzaW9ucydcblxuaW1wb3J0IHtcbiAgcmVmcmVzaEZyaWVuZHNcbn0gZnJvbSAnLi4vYWN0aW9ucy9mcmllbmRzJ1xuXG5pbXBvcnQge1xuICByZWZyZXNoTXNncyxcbiAgcmVmcmVzaE1zZ3NCeVRvXG59IGZyb20gJy4uL2FjdGlvbnMvY2hhdCdcblxuaW1wb3J0IHtcbiAgY29ubmVjdFxufSBmcm9tICd3ZXB5LXJlZHV4J1xuXG5pbXBvcnQgKiBhcyBhcGkgZnJvbSAnLi4vYXBpcy9hY2NvdW50J1xuXG5jb25zdCBjb25maWcgPSB3eFxuXG5jb25zdCBnZXRGcmllbmQgPSBmcmllbmQgPT4gKHtcbiAgbmlja25hbWU6IGZyaWVuZC5uaWNrLFxuICBhdmF0YXI6IGZyaWVuZC5hdmF0YXIsXG4gIGFjY2lkOiBmcmllbmQuYWNjb3VudFxufSlcblxuQGNvbm5lY3Qoe1xuICB1c2VyOiBzdGF0ZSA9PiBzdGF0ZS5jb21tb24udXNlcixcbiAgbmltOiBzdGF0ZSA9PiBzdGF0ZS5jb21tb24ubmltLFxuICBmcmllbmRzOiBzdGF0ZSA9PiBzdGF0ZS5mcmllbmRzLmZyaWVuZHMsXG4gIG1zZ3M6IHN0YXRlID0+IHN0YXRlLmNoYXQubXNnc1xufSwge1xuICBzZXRVc2VyLFxuICBzZXROaW0sXG4gIHJlZnJlc2hGcmllbmRzLFxuICByZWZyZXNoU2Vzc2lvbnMsXG4gIHJlZnJlc2hNc2dzLFxuICByZWZyZXNoTXNnc0J5VG9cbn0pXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDaGF0cm9vbXMgZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICBjb25maWcgPSB7XG4gICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+iBiuWkqeWupCdcbiAgfVxuXG4gIGRhdGEgPSB7XG4gICAgcm9vbXM6IFtdXG4gIH1cblxuICBtZXRob2RzID0ge1xuICAgIHB1c2hNc2c6IGZ1bmN0aW9uIChtc2dzKSB7XG4gICAgICBjb25zdCB7IHJlZnJlc2hNc2dzLCByZWZyZXNoTXNnc0J5VG8gfSA9IHRoaXMubWV0aG9kc1xuICAgICAgaWYgKCFBcnJheS5pc0FycmF5KG1zZ3MpKSB7XG4gICAgICAgIG1zZ3MgPSBbbXNnc11cbiAgICAgIH1cbiAgICAgIGNvbnN0IHNlc3Npb25JZCA9IG1zZ3NbMF0uc2Vzc2lvbklkXG4gICAgICBjb25zdCB0byA9IG1zZ3NbMF0udG9cbiAgICAgIGNvbnN0IG1lcmdlZCA9ICh0aGlzLm1zZ3Nbc2Vzc2lvbklkXSB8fCBbXSwgbXNncylcbiAgICAgIGNvbnN0IG1lcmdlZEJ5VG8gPSAodGhpcy5tc2dzW3RvXSB8fCBbXSwgbXNncylcbiAgICAgIHJlZnJlc2hNc2dzKHNlc3Npb25JZCwgbWVyZ2VkKVxuICAgICAgcmVmcmVzaE1zZ3NCeVRvKHRvLCBtZXJnZWRCeVRvKVxuICAgIH1cbiAgfVxuXG4gIGFzeW5jIG9uTG9hZCgpIHtcbiAgICBjb25zdCB7IHNldFVzZXIsIHNldE5pbSwgcmVmcmVzaFNlc3Npb25zLCByZWZyZXNoRnJpZW5kcyB9ID0gdGhpcy5tZXRob2RzXG4gICAgY29uc3QgcHVzaE1zZyA9IHRoaXMubWV0aG9kcy5wdXNoTXNnLmJpbmQodGhpcylcbiAgICB3ZXB5LnNob3dMb2FkaW5nKClcbiAgICBjb25zdCB7IGNvZGUgfSA9IGF3YWl0IHdlcHkubG9naW4oKVxuICAgIGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgd2VweS5yZXF1ZXN0KHtcbiAgICAgIHVybDogYGh0dHBzOi8vYXBpLndlaXhpbi5xcS5jb20vc25zL2pzY29kZTJzZXNzaW9uP2FwcGlkPSR7Y29uZmlnLmFwcElkfSZzZWNyZXQ9JHtjb25maWcuYXBwU2VjcmV0ZX0manNfY29kZT0ke2NvZGV9JmdyYW50X3R5cGU9YXV0aG9yaXphdGlvbl9jb2RlYFxuICAgIH0pXG4gICAgY29uc3QgeyBvcGVuaWQgfSA9IGRhdGFcbiAgICBjb25zdCB7IHVzZXJJbmZvIH0gPSBhd2FpdCB3ZXB5LmdldFVzZXJJbmZvKClcblxuICAgIGNvbnN0IHBhc3N3b3JkID0gUi50YWtlTGFzdCg1KShvcGVuaWQpXG5cbiAgICBjb25zdCB1c2VyID0ge1xuICAgICAgLi4udXNlckluZm8sXG4gICAgICBhY2NpZDogb3BlbmlkLnRvTG93ZXJDYXNlKClcbiAgICB9XG5cbiAgICBzZXRVc2VyKHVzZXIpXG4gICAgLy8g5aaC5p6c55So5oi35bCa5pyq5ZyoIOe9keaYk+S6keazqOWGjCDliJnlhYjms6jlhoxcbiAgICB0cnkge1xuICAgICAgY29uc3QgdG9rZW4gPSBhd2FpdCBOSU0ubG9naW4ob3BlbmlkKVxuICAgICAgY29uc3QgVG9rZW4gPSBhd2FpdCBhcGkuZ2V0VG9rZW4ob3BlbmlkLCBwYXNzd29yZC50b0xvd2VyQ2FzZSgpKVxuXG4gICAgICBpZiAoIVRva2VuKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcigndXNlciBub3QgZXhpc3QnKVxuICAgICAgfVxuXG4gICAgICBzZXRVc2VyKHtcbiAgICAgICAgLi4udGhpcy51c2VyLFxuICAgICAgICBqZlRva2VuOiBUb2tlblxuICAgICAgfSlcblxuICAgICAgLy8g5Yid5aeL5YyWIG5pbSDlr7nosaFcbiAgICAgIGNvbnN0IG5pbSA9IE5JTS5nZXRJbnN0YW5jZSh7XG4gICAgICAgIGFjY291bnQ6IHRoaXMudXNlci5hY2NpZCxcbiAgICAgICAgdG9rZW46IHRva2VuLFxuICAgICAgICBkZWJ1ZzogdHJ1ZSxcbiAgICAgICAgb251c2VyczogZnJpZW5kcyA9PiB7XG4gICAgICAgICAgcmVmcmVzaEZyaWVuZHMoZnJpZW5kcy5tYXAoZ2V0RnJpZW5kKSlcbiAgICAgICAgICB0aGlzLiRhcHBseSgpXG4gICAgICAgIH0sXG4gICAgICAgIG9uc2Vzc2lvbnM6IHNlc3Npb25zID0+IHtcbiAgICAgICAgICBjb25zdCBtZXJnZWQgPSBuaW0ubWVyZ2VTZXNzaW9ucyh0aGlzLnNlc3Npb25zLCBzZXNzaW9ucylcbiAgICAgICAgICByZWZyZXNoU2Vzc2lvbnMobWVyZ2VkKVxuICAgICAgICAgIHRoaXMuJGFwcGx5KClcbiAgICAgICAgfSxcbiAgICAgICAgb251cGRhdGVzZXNzaW9uOiBzZXNzaW9uID0+IHtcbiAgICAgICAgICBjb25zdCBtZXJnZWQgPSBuaW0ubWVyZ2VTZXNzaW9ucyh0aGlzLnNlc3Npb25zLCBzZXNzaW9uKVxuICAgICAgICAgIHJlZnJlc2hTZXNzaW9ucyhtZXJnZWQpXG4gICAgICAgICAgdGhpcy4kYXBwbHkoKVxuICAgICAgICB9LFxuICAgICAgICBvbm1zZzogbXNnID0+IHtcbiAgICAgICAgICBwdXNoTXNnKG1zZylcbiAgICAgICAgICB0aGlzLiRhcHBseSgpXG4gICAgICAgIH0sXG4gICAgICAgIG9ucm9hbWluZ21zZ3M6IG9iaiA9PiB7XG4gICAgICAgICAgcHVzaE1zZyhvYmoubXNncylcbiAgICAgICAgfSxcbiAgICAgICAgb25vZmZsaW5lbXNnczogb2JqID0+IHtcbiAgICAgICAgICBwdXNoTXNnKG9iai5tc2dzKVxuICAgICAgICB9XG4gICAgICB9KVxuXG4gICAgICBzZXROaW0obmltKVxuXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgdGhpcy5yb29tcyA9IG1vY2tSb29tc1xuICAgICAgICB3ZXB5LmhpZGVMb2FkaW5nKClcbiAgICAgICAgLy8g6YCa6L+HICRhcHBseSDlvLrliLbohI/mo4Dmn6VcbiAgICAgICAgdGhpcy4kYXBwbHkoKVxuICAgICAgfSwgMjAwMClcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBjb25zb2xlLmVycm9yKCdhcHAgZXJyb3InLCBlKVxuICAgICAgd2VweS5uYXZpZ2F0ZVRvKHtcbiAgICAgICAgdXJsOiAnL3BhZ2VzL3JlZ2lzdGVyJ1xuICAgICAgfSlcbiAgICB9XG4gIH1cbn1cbiJdfQ==
>>>>>>> b25b6dbca11662d3df32d47a85cea644fe7984b0
