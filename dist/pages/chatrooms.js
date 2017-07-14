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

var getFriend = function getFriend(friend) {
  return {
    nickname: friend.nick,
    avatar: friend.avatar,
    accid: friend.account
  };
};

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
                  url: 'https://api.weixin.qq.com/sns/jscode2session?appid=' + _config.wx.appId + '&secret=' + _config.wx.appSecrete + '&js_code=' + code + '&grant_type=authorization_code'
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoYXRyb29tcy5qcyJdLCJuYW1lcyI6WyJhcGkiLCJnZXRGcmllbmQiLCJmcmllbmQiLCJuaWNrbmFtZSIsIm5pY2siLCJhdmF0YXIiLCJhY2NpZCIsImFjY291bnQiLCJtb2NrUm9vbXMiLCJpZCIsImNvdmVyIiwidGl0bGUiLCJtZW1iZXJzIiwiQ2hhdHJvb21zIiwidXNlciIsInN0YXRlIiwiY29tbW9uIiwibmltIiwiZnJpZW5kcyIsIm1zZ3MiLCJjaGF0Iiwic2V0VXNlciIsInNldE5pbSIsInJlZnJlc2hGcmllbmRzIiwicmVmcmVzaFNlc3Npb25zIiwicmVmcmVzaE1zZ3MiLCJyZWZyZXNoTXNnc0J5VG8iLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiZGF0YSIsInJvb21zIiwibWV0aG9kcyIsInB1c2hNc2ciLCJtZXJnZU1zZ3MiLCJBcnJheSIsImlzQXJyYXkiLCJzZXNzaW9uSWQiLCJ0byIsInRhcmdldCIsIm1lcmdlZCIsIm1lcmdlZEJ5VG8iLCJiaW5kIiwic2hvd0xvYWRpbmciLCJsb2dpbiIsImNvZGUiLCJyZXF1ZXN0IiwidXJsIiwiYXBwSWQiLCJhcHBTZWNyZXRlIiwib3BlbmlkIiwiZ2V0VXNlckluZm8iLCJ1c2VySW5mbyIsInBhc3N3b3JkIiwidGFrZUxhc3QiLCJ0b0xvd2VyQ2FzZSIsInRva2VuIiwiZ2V0VG9rZW4iLCJUb2tlbiIsIkVycm9yIiwiamZUb2tlbiIsImdldEluc3RhbmNlIiwiZGVidWciLCJvbnVzZXJzIiwibWFwIiwiJGFwcGx5Iiwib25zZXNzaW9ucyIsIm1lcmdlU2Vzc2lvbnMiLCJzZXNzaW9ucyIsIm9udXBkYXRlc2Vzc2lvbiIsInNlc3Npb24iLCJvbm1zZyIsIm1zZyIsIm9ucm9hbWluZ21zZ3MiLCJvYmoiLCJvbm9mZmxpbmVtc2dzIiwic2V0VGltZW91dCIsImhpZGVMb2FkaW5nIiwiY29uc29sZSIsImVycm9yIiwibmF2aWdhdGVUbyIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7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QUFKLENBQWtCLE9BQUtDLFFBQXZCLEVBQWlDQSxRQUFqQyxDQUFmO0FBQ0EzQyxvQ0FBZ0JlLE1BQWhCO0FBQ0EsMkJBQUt5QixNQUFMO0FBQ0QsbUJBWnlCO0FBYTFCSSxtQ0FBaUIsa0NBQVc7QUFDMUIsd0JBQU03QixTQUFTdEIsSUFBSWlELGFBQUosQ0FBa0IsT0FBS0MsUUFBdkIsRUFBaUNFLE9BQWpDLENBQWY7QUFDQTdDLG9DQUFnQmUsTUFBaEI7QUFDQSwyQkFBS3lCLE1BQUw7QUFDRCxtQkFqQnlCO0FBa0IxQk0seUJBQU8sb0JBQU87QUFDWnRDLDRCQUFRdUMsR0FBUjtBQUNBLDJCQUFLUCxNQUFMO0FBQ0QsbUJBckJ5QjtBQXNCMUJRLGlDQUFlLDRCQUFPO0FBQ3BCeEMsNEJBQVF5QyxJQUFJdEQsSUFBWjtBQUNELG1CQXhCeUI7QUF5QjFCdUQsaUNBQWUsNEJBQU87QUFDcEIxQyw0QkFBUXlDLElBQUl0RCxJQUFaO0FBQ0Q7QUEzQnlCLGlCQUFoQixDOzs7QUE4QlpHLHVCQUFPTCxHQUFQOztBQUVBMEQsMkJBQVcsWUFBTTtBQUNmLHlCQUFLN0MsS0FBTCxHQUFhdEIsU0FBYjtBQUNBLGlDQUFLb0UsV0FBTDtBQUNBO0FBQ0EseUJBQUtaLE1BQUw7QUFDRCxpQkFMRCxFQUtHLElBTEg7Ozs7Ozs7O0FBT0FhLHdCQUFRQyxLQUFSLENBQWMsV0FBZDtBQUNBLCtCQUFLQyxVQUFMLENBQWdCO0FBQ2RqQyx1QkFBSztBQURTLGlCQUFoQjs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBbkdpQyxlQUFLa0MsSTtrQkFBdkJuRSxTIiwiZmlsZSI6ImNoYXRyb29tcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuY29uc3QgZ2V0RnJpZW5kID0gZnVuY3Rpb24oZnJpZW5kKSB7XG4gIHJldHVybiB7XG4gICAgbmlja25hbWU6IGZyaWVuZC5uaWNrLFxuICAgIGF2YXRhcjogZnJpZW5kLmF2YXRhcixcbiAgICBhY2NpZDogZnJpZW5kLmFjY291bnRcbiAgfVxufVxuXG5jb25zdCBtb2NrUm9vbXMgPSBbe1xuICBpZDogMCxcbiAgY292ZXI6ICdodHRwOi8vYi5oaXBob3Rvcy5iYWlkdS5jb20vYmFpa2UvdyUzRDI2OCUzQmclM0QwL3NpZ249NmQyNGExNGFmODFmM2EyOTVhYzhkMmM4YTExZWRiMGMvZTgyNGI4OTlhOTAxNGMwODhmNzYyODMxMDI3YjAyMDg3YWY0ZjRkMS5qcGcnLFxuICB0aXRsZTogJ+S4gOi1t+WTiOearueahOiBiuWkqeWupCcsXG4gIG1lbWJlcnM6IDUwXG59LCB7XG4gIGlkOiAxLFxuICBjb3ZlcjogJ2h0dHA6Ly9iLmhpcGhvdG9zLmJhaWR1LmNvbS9iYWlrZS93JTNEMjY4JTNCZyUzRDAvc2lnbj02ZDI0YTE0YWY4MWYzYTI5NWFjOGQyYzhhMTFlZGIwYy9lODI0Yjg5OWE5MDE0YzA4OGY3NjI4MzEwMjdiMDIwODdhZjRmNGQxLmpwZycsXG4gIHRpdGxlOiAn5LiA6LW35ZOI55qu55qE6IGK5aSp5a6kMycsXG4gIG1lbWJlcnM6IDUwXG59LCB7XG4gIGlkOiAyLFxuICBjb3ZlcjogJ2h0dHA6Ly9iLmhpcGhvdG9zLmJhaWR1LmNvbS9iYWlrZS93JTNEMjY4JTNCZyUzRDAvc2lnbj02ZDI0YTE0YWY4MWYzYTI5NWFjOGQyYzhhMTFlZGIwYy9lODI0Yjg5OWE5MDE0YzA4OGY3NjI4MzEwMjdiMDIwODdhZjRmNGQxLmpwZycsXG4gIHRpdGxlOiAn5LiA6LW35ZOI55qu55qE6IGK5aSp5a6kNCcsXG4gIG1lbWJlcnM6IDUwXG59LCB7XG4gIGlkOiAzLFxuICBjb3ZlcjogJ2h0dHA6Ly9iLmhpcGhvdG9zLmJhaWR1LmNvbS9iYWlrZS93JTNEMjY4JTNCZyUzRDAvc2lnbj02ZDI0YTE0YWY4MWYzYTI5NWFjOGQyYzhhMTFlZGIwYy9lODI0Yjg5OWE5MDE0YzA4OGY3NjI4MzEwMjdiMDIwODdhZjRmNGQxLmpwZycsXG4gIHRpdGxlOiAn5LiA6LW35ZOI55qu55qE6IGK5aSp5a6kNScsXG4gIG1lbWJlcnM6IDUwXG59LCB7XG4gIGlkOiA0LFxuICBjb3ZlcjogJ2h0dHA6Ly9iLmhpcGhvdG9zLmJhaWR1LmNvbS9iYWlrZS93JTNEMjY4JTNCZyUzRDAvc2lnbj02ZDI0YTE0YWY4MWYzYTI5NWFjOGQyYzhhMTFlZGIwYy9lODI0Yjg5OWE5MDE0YzA4OGY3NjI4MzEwMjdiMDIwODdhZjRmNGQxLmpwZycsXG4gIHRpdGxlOiAn5LiA6LW35ZOI55qu55qE6IGK5aSp5a6kNicsXG4gIG1lbWJlcnM6IDUwXG59LCB7XG4gIGlkOiA1LFxuICBjb3ZlcjogJ2h0dHA6Ly9iLmhpcGhvdG9zLmJhaWR1LmNvbS9iYWlrZS93JTNEMjY4JTNCZyUzRDAvc2lnbj02ZDI0YTE0YWY4MWYzYTI5NWFjOGQyYzhhMTFlZGIwYy9lODI0Yjg5OWE5MDE0YzA4OGY3NjI4MzEwMjdiMDIwODdhZjRmNGQxLmpwZycsXG4gIHRpdGxlOiAn5LiA6LW35ZOI55qu55qE6IGK5aSp5a6kNycsXG4gIG1lbWJlcnM6IDUwXG59XVxuXG5pbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuaW1wb3J0IFIgZnJvbSAnLi4vbGlicy9yYW1kYSdcblxuaW1wb3J0IHtcbiAgd3ggYXMgY29uZmlnXG59IGZyb20gJy4uL2NvbmZpZydcblxuaW1wb3J0IE5JTSBmcm9tICcuLi91dGlscy9uaW0nXG5cbmltcG9ydCB7XG4gIHNldFVzZXIsXG4gIHNldE5pbVxufSBmcm9tICcuLi9hY3Rpb25zL2NvbW1vbidcblxuaW1wb3J0IHtcbiAgcmVmcmVzaFNlc3Npb25zXG59IGZyb20gJy4uL2FjdGlvbnMvc2Vzc2lvbnMnXG5cbmltcG9ydCB7XG4gIHJlZnJlc2hGcmllbmRzXG59IGZyb20gJy4uL2FjdGlvbnMvZnJpZW5kcydcblxuaW1wb3J0IHtcbiAgcmVmcmVzaE1zZ3MsXG4gIHJlZnJlc2hNc2dzQnlUb1xufSBmcm9tICcuLi9hY3Rpb25zL2NoYXQnXG5cbmltcG9ydCB7XG4gIGNvbm5lY3Rcbn0gZnJvbSAnd2VweS1yZWR1eCdcblxuaW1wb3J0ICogYXMgYXBpIGZyb20gJy4uL2FwaXMvYWNjb3VudCdcblxuQGNvbm5lY3Qoe1xuICB1c2VyOiBzdGF0ZSA9PiBzdGF0ZS5jb21tb24udXNlcixcbiAgbmltOiBzdGF0ZSA9PiBzdGF0ZS5jb21tb24ubmltLFxuICBmcmllbmRzOiBzdGF0ZSA9PiBzdGF0ZS5mcmllbmRzLmZyaWVuZHMsXG4gIG1zZ3M6IHN0YXRlID0+IHN0YXRlLmNoYXQubXNnc1xufSwge1xuICBzZXRVc2VyLFxuICBzZXROaW0sXG4gIHJlZnJlc2hGcmllbmRzLFxuICByZWZyZXNoU2Vzc2lvbnMsXG4gIHJlZnJlc2hNc2dzLFxuICByZWZyZXNoTXNnc0J5VG9cbn0pXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDaGF0cm9vbXMgZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICBjb25maWcgPSB7XG4gICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+iBiuWkqeWupCdcbiAgfVxuXG4gIGRhdGEgPSB7XG4gICAgcm9vbXM6IFtdXG4gIH1cblxuICBtZXRob2RzID0ge1xuICAgIHB1c2hNc2c6IGZ1bmN0aW9uIChtc2dzKSB7XG4gICAgICBjb25zdCB7IHJlZnJlc2hNc2dzLCByZWZyZXNoTXNnc0J5VG8gfSA9IHRoaXMubWV0aG9kc1xuICAgICAgY29uc3QgeyBtZXJnZU1zZ3MgfSA9IHRoaXMubmltXG4gICAgICBpZiAoIUFycmF5LmlzQXJyYXkobXNncykpIHtcbiAgICAgICAgbXNncyA9IFttc2dzXVxuICAgICAgfVxuICAgICAgY29uc3Qgc2Vzc2lvbklkID0gbXNnc1swXS5zZXNzaW9uSWRcbiAgICAgIGNvbnN0IHRvID0gbXNnc1swXS50YXJnZXRcbiAgICAgIGNvbnN0IG1lcmdlZCA9IG1lcmdlTXNncyh0aGlzLm1zZ3Nbc2Vzc2lvbklkXSB8fCBbXSwgbXNncylcbiAgICAgIGNvbnN0IG1lcmdlZEJ5VG8gPSBtZXJnZU1zZ3ModGhpcy5tc2dzW3RvXSB8fCBbXSwgbXNncylcbiAgICAgIHJlZnJlc2hNc2dzKHNlc3Npb25JZCwgbWVyZ2VkKVxuICAgICAgcmVmcmVzaE1zZ3NCeVRvKHRvLCBtZXJnZWRCeVRvKVxuICAgIH1cbiAgfVxuXG4gIGFzeW5jIG9uTG9hZCgpIHtcbiAgICBjb25zdCB7IHNldFVzZXIsIHNldE5pbSwgcmVmcmVzaFNlc3Npb25zLCByZWZyZXNoRnJpZW5kcyB9ID0gdGhpcy5tZXRob2RzXG4gICAgY29uc3QgcHVzaE1zZyA9IHRoaXMubWV0aG9kcy5wdXNoTXNnLmJpbmQodGhpcylcbiAgICB3ZXB5LnNob3dMb2FkaW5nKClcbiAgICBjb25zdCB7IGNvZGUgfSA9IGF3YWl0IHdlcHkubG9naW4oKVxuICAgIGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgd2VweS5yZXF1ZXN0KHtcbiAgICAgIHVybDogYGh0dHBzOi8vYXBpLndlaXhpbi5xcS5jb20vc25zL2pzY29kZTJzZXNzaW9uP2FwcGlkPSR7Y29uZmlnLmFwcElkfSZzZWNyZXQ9JHtjb25maWcuYXBwU2VjcmV0ZX0manNfY29kZT0ke2NvZGV9JmdyYW50X3R5cGU9YXV0aG9yaXphdGlvbl9jb2RlYFxuICAgIH0pXG4gICAgY29uc3QgeyBvcGVuaWQgfSA9IGRhdGFcbiAgICBjb25zdCB7IHVzZXJJbmZvIH0gPSBhd2FpdCB3ZXB5LmdldFVzZXJJbmZvKClcblxuICAgIGNvbnN0IHBhc3N3b3JkID0gUi50YWtlTGFzdCg1KShvcGVuaWQpXG5cbiAgICBjb25zdCB1c2VyID0ge1xuICAgICAgLi4udXNlckluZm8sXG4gICAgICBhY2NpZDogb3BlbmlkLnRvTG93ZXJDYXNlKClcbiAgICB9XG5cbiAgICBzZXRVc2VyKHVzZXIpXG4gICAgLy8g5aaC5p6c55So5oi35bCa5pyq5ZyoIOe9keaYk+S6keazqOWGjCDliJnlhYjms6jlhoxcbiAgICB0cnkge1xuICAgICAgY29uc3QgdG9rZW4gPSBhd2FpdCBOSU0ubG9naW4ob3BlbmlkKVxuICAgICAgY29uc3QgVG9rZW4gPSBhd2FpdCBhcGkuZ2V0VG9rZW4ob3BlbmlkLCBwYXNzd29yZC50b0xvd2VyQ2FzZSgpKVxuXG4gICAgICBpZiAoIVRva2VuKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcigndXNlciBub3QgZXhpc3QnKVxuICAgICAgfVxuXG4gICAgICBzZXRVc2VyKHtcbiAgICAgICAgLi4udGhpcy51c2VyLFxuICAgICAgICBqZlRva2VuOiBUb2tlblxuICAgICAgfSlcblxuICAgICAgLy8g5Yid5aeL5YyWIG5pbSDlr7nosaFcbiAgICAgIGNvbnN0IG5pbSA9IE5JTS5nZXRJbnN0YW5jZSh7XG4gICAgICAgIGFjY291bnQ6IHRoaXMudXNlci5hY2NpZCxcbiAgICAgICAgdG9rZW46IHRva2VuLFxuICAgICAgICBkZWJ1ZzogdHJ1ZSxcbiAgICAgICAgb251c2VyczogZnJpZW5kcyA9PiB7XG4gICAgICAgICAgcmVmcmVzaEZyaWVuZHMoZnJpZW5kcy5tYXAoZ2V0RnJpZW5kKSlcbiAgICAgICAgICB0aGlzLiRhcHBseSgpXG4gICAgICAgIH0sXG4gICAgICAgIG9uc2Vzc2lvbnM6IHNlc3Npb25zID0+IHtcbiAgICAgICAgICBjb25zdCBtZXJnZWQgPSBuaW0ubWVyZ2VTZXNzaW9ucyh0aGlzLnNlc3Npb25zLCBzZXNzaW9ucylcbiAgICAgICAgICByZWZyZXNoU2Vzc2lvbnMobWVyZ2VkKVxuICAgICAgICAgIHRoaXMuJGFwcGx5KClcbiAgICAgICAgfSxcbiAgICAgICAgb251cGRhdGVzZXNzaW9uOiBzZXNzaW9uID0+IHtcbiAgICAgICAgICBjb25zdCBtZXJnZWQgPSBuaW0ubWVyZ2VTZXNzaW9ucyh0aGlzLnNlc3Npb25zLCBzZXNzaW9uKVxuICAgICAgICAgIHJlZnJlc2hTZXNzaW9ucyhtZXJnZWQpXG4gICAgICAgICAgdGhpcy4kYXBwbHkoKVxuICAgICAgICB9LFxuICAgICAgICBvbm1zZzogbXNnID0+IHtcbiAgICAgICAgICBwdXNoTXNnKG1zZylcbiAgICAgICAgICB0aGlzLiRhcHBseSgpXG4gICAgICAgIH0sXG4gICAgICAgIG9ucm9hbWluZ21zZ3M6IG9iaiA9PiB7XG4gICAgICAgICAgcHVzaE1zZyhvYmoubXNncylcbiAgICAgICAgfSxcbiAgICAgICAgb25vZmZsaW5lbXNnczogb2JqID0+IHtcbiAgICAgICAgICBwdXNoTXNnKG9iai5tc2dzKVxuICAgICAgICB9XG4gICAgICB9KVxuXG4gICAgICBzZXROaW0obmltKVxuXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgdGhpcy5yb29tcyA9IG1vY2tSb29tc1xuICAgICAgICB3ZXB5LmhpZGVMb2FkaW5nKClcbiAgICAgICAgLy8g6YCa6L+HICRhcHBseSDlvLrliLbohI/mo4Dmn6VcbiAgICAgICAgdGhpcy4kYXBwbHkoKVxuICAgICAgfSwgMjAwMClcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBjb25zb2xlLmVycm9yKCdhcHAgZXJyb3InLCBlKVxuICAgICAgd2VweS5uYXZpZ2F0ZVRvKHtcbiAgICAgICAgdXJsOiAnL3BhZ2VzL3JlZ2lzdGVyJ1xuICAgICAgfSlcbiAgICB9XG4gIH1cbn1cbiJdfQ==