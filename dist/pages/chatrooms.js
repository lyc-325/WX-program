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
        console.log(111111111111);
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
                return api.getToken(openid, password);

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
                _context.next = 38;
                break;

              case 34:
                _context.prev = 34;
                _context.t0 = _context['catch'](19);

                console.error('app error', _context.t0);
                _wepy2.default.navigateTo({
                  url: '/pages/register'
                });

              case 38:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this, [[19, 34]]);
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoYXRyb29tcy5qcyJdLCJuYW1lcyI6WyJhcGkiLCJtb2NrUm9vbXMiLCJpZCIsImNvdmVyIiwidGl0bGUiLCJtZW1iZXJzIiwiY29uZmlnIiwiZ2V0RnJpZW5kIiwibmlja25hbWUiLCJmcmllbmQiLCJuaWNrIiwiYXZhdGFyIiwiYWNjaWQiLCJhY2NvdW50IiwiQ2hhdHJvb21zIiwidXNlciIsInN0YXRlIiwiY29tbW9uIiwibmltIiwiZnJpZW5kcyIsIm1zZ3MiLCJjaGF0Iiwic2V0VXNlciIsInNldE5pbSIsInJlZnJlc2hGcmllbmRzIiwicmVmcmVzaFNlc3Npb25zIiwicmVmcmVzaE1zZ3MiLCJyZWZyZXNoTXNnc0J5VG8iLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiZGF0YSIsInJvb21zIiwibWV0aG9kcyIsInB1c2hNc2ciLCJBcnJheSIsImlzQXJyYXkiLCJzZXNzaW9uSWQiLCJ0byIsIm1lcmdlZCIsIm1lcmdlZEJ5VG8iLCJjb25zb2xlIiwibG9nIiwiYmluZCIsInNob3dMb2FkaW5nIiwibG9naW4iLCJjb2RlIiwicmVxdWVzdCIsInVybCIsImFwcElkIiwiYXBwU2VjcmV0ZSIsIm9wZW5pZCIsImdldFVzZXJJbmZvIiwidXNlckluZm8iLCJwYXNzd29yZCIsInRha2VMYXN0IiwidG9Mb3dlckNhc2UiLCJ0b2tlbiIsImdldFRva2VuIiwiVG9rZW4iLCJFcnJvciIsImpmVG9rZW4iLCJnZXRJbnN0YW5jZSIsImRlYnVnIiwib251c2VycyIsIm1hcCIsIiRhcHBseSIsIm9uc2Vzc2lvbnMiLCJtZXJnZVNlc3Npb25zIiwic2Vzc2lvbnMiLCJvbnVwZGF0ZXNlc3Npb24iLCJzZXNzaW9uIiwib25tc2ciLCJtc2ciLCJvbnJvYW1pbmdtc2dzIiwib2JqIiwib25vZmZsaW5lbXNncyIsInNldFRpbWVvdXQiLCJoaWRlTG9hZGluZyIsImVycm9yIiwibmF2aWdhdGVUbyIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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b0NBQWdCWSxNQUFoQjtBQUNBLDJCQUFLMkIsTUFBTDtBQUNELG1CQVp5QjtBQWExQkksbUNBQWlCLGtDQUFXO0FBQzFCLHdCQUFNL0IsU0FBU25CLElBQUlnRCxhQUFKLENBQWtCLE9BQUtDLFFBQXZCLEVBQWlDRSxPQUFqQyxDQUFmO0FBQ0E1QyxvQ0FBZ0JZLE1BQWhCO0FBQ0EsMkJBQUsyQixNQUFMO0FBQ0QsbUJBakJ5QjtBQWtCMUJNLHlCQUFPLG9CQUFPO0FBQ1p0Qyw0QkFBUXVDLEdBQVI7QUFDQSwyQkFBS1AsTUFBTDtBQUNELG1CQXJCeUI7QUFzQjFCUSxpQ0FBZSw0QkFBTztBQUNwQnhDLDRCQUFReUMsSUFBSXJELElBQVo7QUFDRCxtQkF4QnlCO0FBeUIxQnNELGlDQUFlLDRCQUFPO0FBQ3BCMUMsNEJBQVF5QyxJQUFJckQsSUFBWjtBQUNEO0FBM0J5QixpQkFBaEIsQzs7O0FBOEJaRyx1QkFBT0wsR0FBUDs7QUFFQXlELDJCQUFXLFlBQU07QUFDZix5QkFBSzdDLEtBQUwsR0FBYTdCLFNBQWI7QUFDQSxpQ0FBSzJFLFdBQUw7QUFDQTtBQUNBLHlCQUFLWixNQUFMO0FBQ0QsaUJBTEQsRUFLRyxJQUxIOzs7Ozs7OztBQU9BekIsd0JBQVFzQyxLQUFSLENBQWMsV0FBZDtBQUNBLCtCQUFLQyxVQUFMLENBQWdCO0FBQ2RoQyx1QkFBSztBQURTLGlCQUFoQjs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBbkdpQyxlQUFLaUMsSTtrQkFBdkJqRSxTIiwiZmlsZSI6ImNoYXRyb29tcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuY29uc3QgbW9ja1Jvb21zID0gW3tcbiAgaWQ6IDAsXG4gIGNvdmVyOiAnaHR0cDovL2IuaGlwaG90b3MuYmFpZHUuY29tL2JhaWtlL3clM0QyNjglM0JnJTNEMC9zaWduPTZkMjRhMTRhZjgxZjNhMjk1YWM4ZDJjOGExMWVkYjBjL2U4MjRiODk5YTkwMTRjMDg4Zjc2MjgzMTAyN2IwMjA4N2FmNGY0ZDEuanBnJyxcbiAgdGl0bGU6ICfkuIDotbflk4jnmq7nmoTogYrlpKnlrqQnLFxuICBtZW1iZXJzOiA1MFxufSwge1xuICBpZDogMSxcbiAgY292ZXI6ICdodHRwOi8vYi5oaXBob3Rvcy5iYWlkdS5jb20vYmFpa2UvdyUzRDI2OCUzQmclM0QwL3NpZ249NmQyNGExNGFmODFmM2EyOTVhYzhkMmM4YTExZWRiMGMvZTgyNGI4OTlhOTAxNGMwODhmNzYyODMxMDI3YjAyMDg3YWY0ZjRkMS5qcGcnLFxuICB0aXRsZTogJ+S4gOi1t+WTiOearueahOiBiuWkqeWupDMnLFxuICBtZW1iZXJzOiA1MFxufSwge1xuICBpZDogMixcbiAgY292ZXI6ICdodHRwOi8vYi5oaXBob3Rvcy5iYWlkdS5jb20vYmFpa2UvdyUzRDI2OCUzQmclM0QwL3NpZ249NmQyNGExNGFmODFmM2EyOTVhYzhkMmM4YTExZWRiMGMvZTgyNGI4OTlhOTAxNGMwODhmNzYyODMxMDI3YjAyMDg3YWY0ZjRkMS5qcGcnLFxuICB0aXRsZTogJ+S4gOi1t+WTiOearueahOiBiuWkqeWupDQnLFxuICBtZW1iZXJzOiA1MFxufSwge1xuICBpZDogMyxcbiAgY292ZXI6ICdodHRwOi8vYi5oaXBob3Rvcy5iYWlkdS5jb20vYmFpa2UvdyUzRDI2OCUzQmclM0QwL3NpZ249NmQyNGExNGFmODFmM2EyOTVhYzhkMmM4YTExZWRiMGMvZTgyNGI4OTlhOTAxNGMwODhmNzYyODMxMDI3YjAyMDg3YWY0ZjRkMS5qcGcnLFxuICB0aXRsZTogJ+S4gOi1t+WTiOearueahOiBiuWkqeWupDUnLFxuICBtZW1iZXJzOiA1MFxufSwge1xuICBpZDogNCxcbiAgY292ZXI6ICdodHRwOi8vYi5oaXBob3Rvcy5iYWlkdS5jb20vYmFpa2UvdyUzRDI2OCUzQmclM0QwL3NpZ249NmQyNGExNGFmODFmM2EyOTVhYzhkMmM4YTExZWRiMGMvZTgyNGI4OTlhOTAxNGMwODhmNzYyODMxMDI3YjAyMDg3YWY0ZjRkMS5qcGcnLFxuICB0aXRsZTogJ+S4gOi1t+WTiOearueahOiBiuWkqeWupDYnLFxuICBtZW1iZXJzOiA1MFxufSwge1xuICBpZDogNSxcbiAgY292ZXI6ICdodHRwOi8vYi5oaXBob3Rvcy5iYWlkdS5jb20vYmFpa2UvdyUzRDI2OCUzQmclM0QwL3NpZ249NmQyNGExNGFmODFmM2EyOTVhYzhkMmM4YTExZWRiMGMvZTgyNGI4OTlhOTAxNGMwODhmNzYyODMxMDI3YjAyMDg3YWY0ZjRkMS5qcGcnLFxuICB0aXRsZTogJ+S4gOi1t+WTiOearueahOiBiuWkqeWupDcnLFxuICBtZW1iZXJzOiA1MFxufV1cblxuaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcbmltcG9ydCBSIGZyb20gJy4uL2xpYnMvcmFtZGEnXG5cbmltcG9ydCB7XG4gIHd4XG59IGZyb20gJy4uL2NvbmZpZydcblxuaW1wb3J0IE5JTSBmcm9tICcuLi91dGlscy9uaW0nXG5cbmltcG9ydCB7XG4gIHNldFVzZXIsXG4gIHNldE5pbVxufSBmcm9tICcuLi9hY3Rpb25zL2NvbW1vbidcblxuaW1wb3J0IHtcbiAgcmVmcmVzaFNlc3Npb25zXG59IGZyb20gJy4uL2FjdGlvbnMvc2Vzc2lvbnMnXG5cbmltcG9ydCB7XG4gIHJlZnJlc2hGcmllbmRzXG59IGZyb20gJy4uL2FjdGlvbnMvZnJpZW5kcydcblxuaW1wb3J0IHtcbiAgcmVmcmVzaE1zZ3MsXG4gIHJlZnJlc2hNc2dzQnlUb1xufSBmcm9tICcuLi9hY3Rpb25zL2NoYXQnXG5cbmltcG9ydCB7XG4gIGNvbm5lY3Rcbn0gZnJvbSAnd2VweS1yZWR1eCdcblxuaW1wb3J0ICogYXMgYXBpIGZyb20gJy4uL2FwaXMvYWNjb3VudCdcblxuY29uc3QgY29uZmlnID0gd3hcblxuY29uc3QgZ2V0RnJpZW5kID0gZnJpZW5kID0+ICh7XG4gIG5pY2tuYW1lOiBmcmllbmQubmljayxcbiAgYXZhdGFyOiBmcmllbmQuYXZhdGFyLFxuICBhY2NpZDogZnJpZW5kLmFjY291bnRcbn0pXG5cbkBjb25uZWN0KHtcbiAgdXNlcjogc3RhdGUgPT4gc3RhdGUuY29tbW9uLnVzZXIsXG4gIG5pbTogc3RhdGUgPT4gc3RhdGUuY29tbW9uLm5pbSxcbiAgZnJpZW5kczogc3RhdGUgPT4gc3RhdGUuZnJpZW5kcy5mcmllbmRzLFxuICBtc2dzOiBzdGF0ZSA9PiBzdGF0ZS5jaGF0Lm1zZ3Ncbn0sIHtcbiAgc2V0VXNlcixcbiAgc2V0TmltLFxuICByZWZyZXNoRnJpZW5kcyxcbiAgcmVmcmVzaFNlc3Npb25zLFxuICByZWZyZXNoTXNncyxcbiAgcmVmcmVzaE1zZ3NCeVRvXG59KVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2hhdHJvb21zIGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgY29uZmlnID0ge1xuICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICfogYrlpKnlrqQnXG4gIH1cblxuICBkYXRhID0ge1xuICAgIHJvb21zOiBbXVxuICB9XG5cbiAgbWV0aG9kcyA9IHtcbiAgICBwdXNoTXNnOiBmdW5jdGlvbiAobXNncykge1xuICAgICAgY29uc3QgeyByZWZyZXNoTXNncywgcmVmcmVzaE1zZ3NCeVRvIH0gPSB0aGlzLm1ldGhvZHNcbiAgICAgIGlmICghQXJyYXkuaXNBcnJheShtc2dzKSkge1xuICAgICAgICBtc2dzID0gW21zZ3NdXG4gICAgICB9XG4gICAgICBjb25zdCBzZXNzaW9uSWQgPSBtc2dzWzBdLnNlc3Npb25JZFxuICAgICAgY29uc3QgdG8gPSBtc2dzWzBdLnRvXG4gICAgICBjb25zdCBtZXJnZWQgPSAodGhpcy5tc2dzW3Nlc3Npb25JZF0gfHwgW10sIG1zZ3MpXG4gICAgICBjb25zdCBtZXJnZWRCeVRvID0gKHRoaXMubXNnc1t0b10gfHwgW10sIG1zZ3MpXG4gICAgICByZWZyZXNoTXNncyhzZXNzaW9uSWQsIG1lcmdlZClcbiAgICAgIHJlZnJlc2hNc2dzQnlUbyh0bywgbWVyZ2VkQnlUbylcbiAgICAgIGNvbnNvbGUubG9nKDExMTExMTExMTExMSlcbiAgICB9XG4gIH1cblxuICBhc3luYyBvbkxvYWQoKSB7XG4gICAgY29uc3QgeyBzZXRVc2VyLCBzZXROaW0sIHJlZnJlc2hTZXNzaW9ucywgcmVmcmVzaEZyaWVuZHMgfSA9IHRoaXMubWV0aG9kc1xuICAgIGNvbnN0IHB1c2hNc2cgPSB0aGlzLm1ldGhvZHMucHVzaE1zZy5iaW5kKHRoaXMpXG4gICAgd2VweS5zaG93TG9hZGluZygpXG4gICAgY29uc3QgeyBjb2RlIH0gPSBhd2FpdCB3ZXB5LmxvZ2luKClcbiAgICBjb25zdCB7IGRhdGEgfSA9IGF3YWl0IHdlcHkucmVxdWVzdCh7XG4gICAgICB1cmw6IGBodHRwczovL2FwaS53ZWl4aW4ucXEuY29tL3Nucy9qc2NvZGUyc2Vzc2lvbj9hcHBpZD0ke2NvbmZpZy5hcHBJZH0mc2VjcmV0PSR7Y29uZmlnLmFwcFNlY3JldGV9JmpzX2NvZGU9JHtjb2RlfSZncmFudF90eXBlPWF1dGhvcml6YXRpb25fY29kZWBcbiAgICB9KVxuICAgIGNvbnN0IHsgb3BlbmlkIH0gPSBkYXRhXG4gICAgY29uc3QgeyB1c2VySW5mbyB9ID0gYXdhaXQgd2VweS5nZXRVc2VySW5mbygpXG5cbiAgICBjb25zdCBwYXNzd29yZCA9IFIudGFrZUxhc3QoNSkob3BlbmlkKVxuXG4gICAgY29uc3QgdXNlciA9IHtcbiAgICAgIC4uLnVzZXJJbmZvLFxuICAgICAgYWNjaWQ6IG9wZW5pZC50b0xvd2VyQ2FzZSgpXG4gICAgfVxuXG4gICAgc2V0VXNlcih1c2VyKVxuICAgIC8vIOWmguaenOeUqOaIt+WwmuacquWcqCDnvZHmmJPkupHms6jlhowg5YiZ5YWI5rOo5YaMXG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHRva2VuID0gYXdhaXQgTklNLmxvZ2luKG9wZW5pZClcbiAgICAgIGNvbnN0IFRva2VuID0gYXdhaXQgYXBpLmdldFRva2VuKG9wZW5pZCwgcGFzc3dvcmQpXG5cbiAgICAgIGlmICghVG9rZW4pIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCd1c2VyIG5vdCBleGlzdCcpXG4gICAgICB9XG5cbiAgICAgIHNldFVzZXIoe1xuICAgICAgICAuLi50aGlzLnVzZXIsXG4gICAgICAgIGpmVG9rZW46IFRva2VuXG4gICAgICB9KVxuXG4gICAgICAvLyDliJ3lp4vljJYgbmltIOWvueixoVxuICAgICAgY29uc3QgbmltID0gTklNLmdldEluc3RhbmNlKHtcbiAgICAgICAgYWNjb3VudDogdGhpcy51c2VyLmFjY2lkLFxuICAgICAgICB0b2tlbjogdG9rZW4sXG4gICAgICAgIGRlYnVnOiB0cnVlLFxuICAgICAgICBvbnVzZXJzOiBmcmllbmRzID0+IHtcbiAgICAgICAgICByZWZyZXNoRnJpZW5kcyhmcmllbmRzLm1hcChnZXRGcmllbmQpKVxuICAgICAgICAgIHRoaXMuJGFwcGx5KClcbiAgICAgICAgfSxcbiAgICAgICAgb25zZXNzaW9uczogc2Vzc2lvbnMgPT4ge1xuICAgICAgICAgIGNvbnN0IG1lcmdlZCA9IG5pbS5tZXJnZVNlc3Npb25zKHRoaXMuc2Vzc2lvbnMsIHNlc3Npb25zKVxuICAgICAgICAgIHJlZnJlc2hTZXNzaW9ucyhtZXJnZWQpXG4gICAgICAgICAgdGhpcy4kYXBwbHkoKVxuICAgICAgICB9LFxuICAgICAgICBvbnVwZGF0ZXNlc3Npb246IHNlc3Npb24gPT4ge1xuICAgICAgICAgIGNvbnN0IG1lcmdlZCA9IG5pbS5tZXJnZVNlc3Npb25zKHRoaXMuc2Vzc2lvbnMsIHNlc3Npb24pXG4gICAgICAgICAgcmVmcmVzaFNlc3Npb25zKG1lcmdlZClcbiAgICAgICAgICB0aGlzLiRhcHBseSgpXG4gICAgICAgIH0sXG4gICAgICAgIG9ubXNnOiBtc2cgPT4ge1xuICAgICAgICAgIHB1c2hNc2cobXNnKVxuICAgICAgICAgIHRoaXMuJGFwcGx5KClcbiAgICAgICAgfSxcbiAgICAgICAgb25yb2FtaW5nbXNnczogb2JqID0+IHtcbiAgICAgICAgICBwdXNoTXNnKG9iai5tc2dzKVxuICAgICAgICB9LFxuICAgICAgICBvbm9mZmxpbmVtc2dzOiBvYmogPT4ge1xuICAgICAgICAgIHB1c2hNc2cob2JqLm1zZ3MpXG4gICAgICAgIH1cbiAgICAgIH0pXG5cbiAgICAgIHNldE5pbShuaW0pXG5cbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICB0aGlzLnJvb21zID0gbW9ja1Jvb21zXG4gICAgICAgIHdlcHkuaGlkZUxvYWRpbmcoKVxuICAgICAgICAvLyDpgJrov4cgJGFwcGx5IOW8uuWItuiEj+ajgOafpVxuICAgICAgICB0aGlzLiRhcHBseSgpXG4gICAgICB9LCAyMDAwKVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ2FwcCBlcnJvcicsIGUpXG4gICAgICB3ZXB5Lm5hdmlnYXRlVG8oe1xuICAgICAgICB1cmw6ICcvcGFnZXMvcmVnaXN0ZXInXG4gICAgICB9KVxuICAgIH1cbiAgfVxufVxuIl19