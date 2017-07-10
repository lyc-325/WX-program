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
        var mergeMsgs = this.nim.mergeMsgs;

        if (!Array.isArray(msgs)) {
          msgs = [msgs];
        }
        var sessionId = msgs[0].sessionId;
        var to = msgs[0].target;
        var merged = mergeMsgs(this.msgs[sessionId] || [], msgs);
        var mergedByTo = mergeMsgs(this.msgs[to] || [], msgs);
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
                return api.getToken(openid, password.toLowerCase());

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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoYXRyb29tcy5qcyJdLCJuYW1lcyI6WyJhcGkiLCJtb2NrUm9vbXMiLCJpZCIsImNvdmVyIiwidGl0bGUiLCJtZW1iZXJzIiwiY29uZmlnIiwiZ2V0RnJpZW5kIiwibmlja25hbWUiLCJmcmllbmQiLCJuaWNrIiwiYXZhdGFyIiwiYWNjaWQiLCJhY2NvdW50IiwiQ2hhdHJvb21zIiwidXNlciIsInN0YXRlIiwiY29tbW9uIiwibmltIiwiZnJpZW5kcyIsIm1zZ3MiLCJjaGF0Iiwic2V0VXNlciIsInNldE5pbSIsInJlZnJlc2hGcmllbmRzIiwicmVmcmVzaFNlc3Npb25zIiwicmVmcmVzaE1zZ3MiLCJyZWZyZXNoTXNnc0J5VG8iLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiZGF0YSIsInJvb21zIiwibWV0aG9kcyIsInB1c2hNc2ciLCJtZXJnZU1zZ3MiLCJBcnJheSIsImlzQXJyYXkiLCJzZXNzaW9uSWQiLCJ0byIsInRhcmdldCIsIm1lcmdlZCIsIm1lcmdlZEJ5VG8iLCJiaW5kIiwic2hvd0xvYWRpbmciLCJsb2dpbiIsImNvZGUiLCJyZXF1ZXN0IiwidXJsIiwiYXBwSWQiLCJhcHBTZWNyZXRlIiwib3BlbmlkIiwiZ2V0VXNlckluZm8iLCJ1c2VySW5mbyIsInBhc3N3b3JkIiwidGFrZUxhc3QiLCJ0b0xvd2VyQ2FzZSIsInRva2VuIiwiZ2V0VG9rZW4iLCJUb2tlbiIsIkVycm9yIiwiamZUb2tlbiIsImdldEluc3RhbmNlIiwiZGVidWciLCJvbnVzZXJzIiwibWFwIiwiJGFwcGx5Iiwib25zZXNzaW9ucyIsIm1lcmdlU2Vzc2lvbnMiLCJzZXNzaW9ucyIsIm9udXBkYXRlc2Vzc2lvbiIsInNlc3Npb24iLCJvbm1zZyIsIm1zZyIsIm9ucm9hbWluZ21zZ3MiLCJvYmoiLCJvbm9mZmxpbmVtc2dzIiwic2V0VGltZW91dCIsImhpZGVMb2FkaW5nIiwiY29uc29sZSIsImVycm9yIiwibmF2aWdhdGVUbyIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7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QixJQUFJZ0QsYUFBSixDQUFrQixPQUFLQyxRQUF2QixFQUFpQ0EsUUFBakMsQ0FBZjtBQUNBMUMsb0NBQWdCYyxNQUFoQjtBQUNBLDJCQUFLeUIsTUFBTDtBQUNELG1CQVp5QjtBQWExQkksbUNBQWlCLGtDQUFXO0FBQzFCLHdCQUFNN0IsU0FBU3JCLElBQUlnRCxhQUFKLENBQWtCLE9BQUtDLFFBQXZCLEVBQWlDRSxPQUFqQyxDQUFmO0FBQ0E1QyxvQ0FBZ0JjLE1BQWhCO0FBQ0EsMkJBQUt5QixNQUFMO0FBQ0QsbUJBakJ5QjtBQWtCMUJNLHlCQUFPLG9CQUFPO0FBQ1p0Qyw0QkFBUXVDLEdBQVI7QUFDQSwyQkFBS1AsTUFBTDtBQUNELG1CQXJCeUI7QUFzQjFCUSxpQ0FBZSw0QkFBTztBQUNwQnhDLDRCQUFReUMsSUFBSXJELElBQVo7QUFDRCxtQkF4QnlCO0FBeUIxQnNELGlDQUFlLDRCQUFPO0FBQ3BCMUMsNEJBQVF5QyxJQUFJckQsSUFBWjtBQUNEO0FBM0J5QixpQkFBaEIsQzs7O0FBOEJaRyx1QkFBT0wsR0FBUDs7QUFFQXlELDJCQUFXLFlBQU07QUFDZix5QkFBSzdDLEtBQUwsR0FBYTdCLFNBQWI7QUFDQSxpQ0FBSzJFLFdBQUw7QUFDQTtBQUNBLHlCQUFLWixNQUFMO0FBQ0QsaUJBTEQsRUFLRyxJQUxIOzs7Ozs7OztBQU9BYSx3QkFBUUMsS0FBUixDQUFjLFdBQWQ7QUFDQSwrQkFBS0MsVUFBTCxDQUFnQjtBQUNkakMsdUJBQUs7QUFEUyxpQkFBaEI7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQW5HaUMsZUFBS2tDLEk7a0JBQXZCbEUsUyIsImZpbGUiOiJjaGF0cm9vbXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmNvbnN0IG1vY2tSb29tcyA9IFt7XG4gIGlkOiAwLFxuICBjb3ZlcjogJ2h0dHA6Ly9iLmhpcGhvdG9zLmJhaWR1LmNvbS9iYWlrZS93JTNEMjY4JTNCZyUzRDAvc2lnbj02ZDI0YTE0YWY4MWYzYTI5NWFjOGQyYzhhMTFlZGIwYy9lODI0Yjg5OWE5MDE0YzA4OGY3NjI4MzEwMjdiMDIwODdhZjRmNGQxLmpwZycsXG4gIHRpdGxlOiAn5LiA6LW35ZOI55qu55qE6IGK5aSp5a6kJyxcbiAgbWVtYmVyczogNTBcbn0sIHtcbiAgaWQ6IDEsXG4gIGNvdmVyOiAnaHR0cDovL2IuaGlwaG90b3MuYmFpZHUuY29tL2JhaWtlL3clM0QyNjglM0JnJTNEMC9zaWduPTZkMjRhMTRhZjgxZjNhMjk1YWM4ZDJjOGExMWVkYjBjL2U4MjRiODk5YTkwMTRjMDg4Zjc2MjgzMTAyN2IwMjA4N2FmNGY0ZDEuanBnJyxcbiAgdGl0bGU6ICfkuIDotbflk4jnmq7nmoTogYrlpKnlrqQzJyxcbiAgbWVtYmVyczogNTBcbn0sIHtcbiAgaWQ6IDIsXG4gIGNvdmVyOiAnaHR0cDovL2IuaGlwaG90b3MuYmFpZHUuY29tL2JhaWtlL3clM0QyNjglM0JnJTNEMC9zaWduPTZkMjRhMTRhZjgxZjNhMjk1YWM4ZDJjOGExMWVkYjBjL2U4MjRiODk5YTkwMTRjMDg4Zjc2MjgzMTAyN2IwMjA4N2FmNGY0ZDEuanBnJyxcbiAgdGl0bGU6ICfkuIDotbflk4jnmq7nmoTogYrlpKnlrqQ0JyxcbiAgbWVtYmVyczogNTBcbn0sIHtcbiAgaWQ6IDMsXG4gIGNvdmVyOiAnaHR0cDovL2IuaGlwaG90b3MuYmFpZHUuY29tL2JhaWtlL3clM0QyNjglM0JnJTNEMC9zaWduPTZkMjRhMTRhZjgxZjNhMjk1YWM4ZDJjOGExMWVkYjBjL2U4MjRiODk5YTkwMTRjMDg4Zjc2MjgzMTAyN2IwMjA4N2FmNGY0ZDEuanBnJyxcbiAgdGl0bGU6ICfkuIDotbflk4jnmq7nmoTogYrlpKnlrqQ1JyxcbiAgbWVtYmVyczogNTBcbn0sIHtcbiAgaWQ6IDQsXG4gIGNvdmVyOiAnaHR0cDovL2IuaGlwaG90b3MuYmFpZHUuY29tL2JhaWtlL3clM0QyNjglM0JnJTNEMC9zaWduPTZkMjRhMTRhZjgxZjNhMjk1YWM4ZDJjOGExMWVkYjBjL2U4MjRiODk5YTkwMTRjMDg4Zjc2MjgzMTAyN2IwMjA4N2FmNGY0ZDEuanBnJyxcbiAgdGl0bGU6ICfkuIDotbflk4jnmq7nmoTogYrlpKnlrqQ2JyxcbiAgbWVtYmVyczogNTBcbn0sIHtcbiAgaWQ6IDUsXG4gIGNvdmVyOiAnaHR0cDovL2IuaGlwaG90b3MuYmFpZHUuY29tL2JhaWtlL3clM0QyNjglM0JnJTNEMC9zaWduPTZkMjRhMTRhZjgxZjNhMjk1YWM4ZDJjOGExMWVkYjBjL2U4MjRiODk5YTkwMTRjMDg4Zjc2MjgzMTAyN2IwMjA4N2FmNGY0ZDEuanBnJyxcbiAgdGl0bGU6ICfkuIDotbflk4jnmq7nmoTogYrlpKnlrqQ3JyxcbiAgbWVtYmVyczogNTBcbn1dXG5cbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG5pbXBvcnQgUiBmcm9tICcuLi9saWJzL3JhbWRhJ1xuXG5pbXBvcnQge1xuICB3eFxufSBmcm9tICcuLi9jb25maWcnXG5cbmltcG9ydCBOSU0gZnJvbSAnLi4vdXRpbHMvbmltJ1xuXG5pbXBvcnQge1xuICBzZXRVc2VyLFxuICBzZXROaW1cbn0gZnJvbSAnLi4vYWN0aW9ucy9jb21tb24nXG5cbmltcG9ydCB7XG4gIHJlZnJlc2hTZXNzaW9uc1xufSBmcm9tICcuLi9hY3Rpb25zL3Nlc3Npb25zJ1xuXG5pbXBvcnQge1xuICByZWZyZXNoRnJpZW5kc1xufSBmcm9tICcuLi9hY3Rpb25zL2ZyaWVuZHMnXG5cbmltcG9ydCB7XG4gIHJlZnJlc2hNc2dzLFxuICByZWZyZXNoTXNnc0J5VG9cbn0gZnJvbSAnLi4vYWN0aW9ucy9jaGF0J1xuXG5pbXBvcnQge1xuICBjb25uZWN0XG59IGZyb20gJ3dlcHktcmVkdXgnXG5cbmltcG9ydCAqIGFzIGFwaSBmcm9tICcuLi9hcGlzL2FjY291bnQnXG5cbmNvbnN0IGNvbmZpZyA9IHd4XG5cbmNvbnN0IGdldEZyaWVuZCA9IGZyaWVuZCA9PiAoe1xuICBuaWNrbmFtZTogZnJpZW5kLm5pY2ssXG4gIGF2YXRhcjogZnJpZW5kLmF2YXRhcixcbiAgYWNjaWQ6IGZyaWVuZC5hY2NvdW50XG59KVxuXG5AY29ubmVjdCh7XG4gIHVzZXI6IHN0YXRlID0+IHN0YXRlLmNvbW1vbi51c2VyLFxuICBuaW06IHN0YXRlID0+IHN0YXRlLmNvbW1vbi5uaW0sXG4gIGZyaWVuZHM6IHN0YXRlID0+IHN0YXRlLmZyaWVuZHMuZnJpZW5kcyxcbiAgbXNnczogc3RhdGUgPT4gc3RhdGUuY2hhdC5tc2dzXG59LCB7XG4gIHNldFVzZXIsXG4gIHNldE5pbSxcbiAgcmVmcmVzaEZyaWVuZHMsXG4gIHJlZnJlc2hTZXNzaW9ucyxcbiAgcmVmcmVzaE1zZ3MsXG4gIHJlZnJlc2hNc2dzQnlUb1xufSlcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENoYXRyb29tcyBleHRlbmRzIHdlcHkucGFnZSB7XG4gIGNvbmZpZyA9IHtcbiAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn6IGK5aSp5a6kJ1xuICB9XG5cbiAgZGF0YSA9IHtcbiAgICByb29tczogW11cbiAgfVxuXG4gIG1ldGhvZHMgPSB7XG4gICAgcHVzaE1zZzogZnVuY3Rpb24gKG1zZ3MpIHtcbiAgICAgIGNvbnN0IHsgcmVmcmVzaE1zZ3MsIHJlZnJlc2hNc2dzQnlUbyB9ID0gdGhpcy5tZXRob2RzXG4gICAgICBjb25zdCB7IG1lcmdlTXNncyB9ID0gdGhpcy5uaW1cbiAgICAgIGlmICghQXJyYXkuaXNBcnJheShtc2dzKSkge1xuICAgICAgICBtc2dzID0gW21zZ3NdXG4gICAgICB9XG4gICAgICBjb25zdCBzZXNzaW9uSWQgPSBtc2dzWzBdLnNlc3Npb25JZFxuICAgICAgY29uc3QgdG8gPSBtc2dzWzBdLnRhcmdldFxuICAgICAgY29uc3QgbWVyZ2VkID0gbWVyZ2VNc2dzKHRoaXMubXNnc1tzZXNzaW9uSWRdIHx8IFtdLCBtc2dzKVxuICAgICAgY29uc3QgbWVyZ2VkQnlUbyA9IG1lcmdlTXNncyh0aGlzLm1zZ3NbdG9dIHx8IFtdLCBtc2dzKVxuICAgICAgcmVmcmVzaE1zZ3Moc2Vzc2lvbklkLCBtZXJnZWQpXG4gICAgICByZWZyZXNoTXNnc0J5VG8odG8sIG1lcmdlZEJ5VG8pXG4gICAgfVxuICB9XG5cbiAgYXN5bmMgb25Mb2FkKCkge1xuICAgIGNvbnN0IHsgc2V0VXNlciwgc2V0TmltLCByZWZyZXNoU2Vzc2lvbnMsIHJlZnJlc2hGcmllbmRzIH0gPSB0aGlzLm1ldGhvZHNcbiAgICBjb25zdCBwdXNoTXNnID0gdGhpcy5tZXRob2RzLnB1c2hNc2cuYmluZCh0aGlzKVxuICAgIHdlcHkuc2hvd0xvYWRpbmcoKVxuICAgIGNvbnN0IHsgY29kZSB9ID0gYXdhaXQgd2VweS5sb2dpbigpXG4gICAgY29uc3QgeyBkYXRhIH0gPSBhd2FpdCB3ZXB5LnJlcXVlc3Qoe1xuICAgICAgdXJsOiBgaHR0cHM6Ly9hcGkud2VpeGluLnFxLmNvbS9zbnMvanNjb2RlMnNlc3Npb24/YXBwaWQ9JHtjb25maWcuYXBwSWR9JnNlY3JldD0ke2NvbmZpZy5hcHBTZWNyZXRlfSZqc19jb2RlPSR7Y29kZX0mZ3JhbnRfdHlwZT1hdXRob3JpemF0aW9uX2NvZGVgXG4gICAgfSlcbiAgICBjb25zdCB7IG9wZW5pZCB9ID0gZGF0YVxuICAgIGNvbnN0IHsgdXNlckluZm8gfSA9IGF3YWl0IHdlcHkuZ2V0VXNlckluZm8oKVxuXG4gICAgY29uc3QgcGFzc3dvcmQgPSBSLnRha2VMYXN0KDUpKG9wZW5pZClcblxuICAgIGNvbnN0IHVzZXIgPSB7XG4gICAgICAuLi51c2VySW5mbyxcbiAgICAgIGFjY2lkOiBvcGVuaWQudG9Mb3dlckNhc2UoKVxuICAgIH1cblxuICAgIHNldFVzZXIodXNlcilcbiAgICAvLyDlpoLmnpznlKjmiLflsJrmnKrlnKgg572R5piT5LqR5rOo5YaMIOWImeWFiOazqOWGjFxuICAgIHRyeSB7XG4gICAgICBjb25zdCB0b2tlbiA9IGF3YWl0IE5JTS5sb2dpbihvcGVuaWQpXG4gICAgICBjb25zdCBUb2tlbiA9IGF3YWl0IGFwaS5nZXRUb2tlbihvcGVuaWQsIHBhc3N3b3JkLnRvTG93ZXJDYXNlKCkpXG5cbiAgICAgIGlmICghVG9rZW4pIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCd1c2VyIG5vdCBleGlzdCcpXG4gICAgICB9XG5cbiAgICAgIHNldFVzZXIoe1xuICAgICAgICAuLi50aGlzLnVzZXIsXG4gICAgICAgIGpmVG9rZW46IFRva2VuXG4gICAgICB9KVxuXG4gICAgICAvLyDliJ3lp4vljJYgbmltIOWvueixoVxuICAgICAgY29uc3QgbmltID0gTklNLmdldEluc3RhbmNlKHtcbiAgICAgICAgYWNjb3VudDogdGhpcy51c2VyLmFjY2lkLFxuICAgICAgICB0b2tlbjogdG9rZW4sXG4gICAgICAgIGRlYnVnOiB0cnVlLFxuICAgICAgICBvbnVzZXJzOiBmcmllbmRzID0+IHtcbiAgICAgICAgICByZWZyZXNoRnJpZW5kcyhmcmllbmRzLm1hcChnZXRGcmllbmQpKVxuICAgICAgICAgIHRoaXMuJGFwcGx5KClcbiAgICAgICAgfSxcbiAgICAgICAgb25zZXNzaW9uczogc2Vzc2lvbnMgPT4ge1xuICAgICAgICAgIGNvbnN0IG1lcmdlZCA9IG5pbS5tZXJnZVNlc3Npb25zKHRoaXMuc2Vzc2lvbnMsIHNlc3Npb25zKVxuICAgICAgICAgIHJlZnJlc2hTZXNzaW9ucyhtZXJnZWQpXG4gICAgICAgICAgdGhpcy4kYXBwbHkoKVxuICAgICAgICB9LFxuICAgICAgICBvbnVwZGF0ZXNlc3Npb246IHNlc3Npb24gPT4ge1xuICAgICAgICAgIGNvbnN0IG1lcmdlZCA9IG5pbS5tZXJnZVNlc3Npb25zKHRoaXMuc2Vzc2lvbnMsIHNlc3Npb24pXG4gICAgICAgICAgcmVmcmVzaFNlc3Npb25zKG1lcmdlZClcbiAgICAgICAgICB0aGlzLiRhcHBseSgpXG4gICAgICAgIH0sXG4gICAgICAgIG9ubXNnOiBtc2cgPT4ge1xuICAgICAgICAgIHB1c2hNc2cobXNnKVxuICAgICAgICAgIHRoaXMuJGFwcGx5KClcbiAgICAgICAgfSxcbiAgICAgICAgb25yb2FtaW5nbXNnczogb2JqID0+IHtcbiAgICAgICAgICBwdXNoTXNnKG9iai5tc2dzKVxuICAgICAgICB9LFxuICAgICAgICBvbm9mZmxpbmVtc2dzOiBvYmogPT4ge1xuICAgICAgICAgIHB1c2hNc2cob2JqLm1zZ3MpXG4gICAgICAgIH1cbiAgICAgIH0pXG5cbiAgICAgIHNldE5pbShuaW0pXG5cbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICB0aGlzLnJvb21zID0gbW9ja1Jvb21zXG4gICAgICAgIHdlcHkuaGlkZUxvYWRpbmcoKVxuICAgICAgICAvLyDpgJrov4cgJGFwcGx5IOW8uuWItuiEj+ajgOafpVxuICAgICAgICB0aGlzLiRhcHBseSgpXG4gICAgICB9LCAyMDAwKVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ2FwcCBlcnJvcicsIGUpXG4gICAgICB3ZXB5Lm5hdmlnYXRlVG8oe1xuICAgICAgICB1cmw6ICcvcGFnZXMvcmVnaXN0ZXInXG4gICAgICB9KVxuICAgIH1cbiAgfVxufVxuIl19