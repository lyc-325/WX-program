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
// const getFriend = function(friend) {
//   return {
//     nickname: friend.nick,
//     avatar: friend.avatar,
//     accid: friend.account
//   }
// }

// import {
//   refreshSessions
// } from '../actions/sessions'
//
// import {
//   refreshFriends
// } from '../actions/friends'
//
// import {
//   refreshMsgs,
//   refreshMsgsByTo
// } from '../actions/chat'

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _ramda = require('./../libs/ramda.js');

var _ramda2 = _interopRequireDefault(_ramda);

var _log = require('./../utils/log.js');

var log = _interopRequireWildcard(_log);

var _config = require('./../config.js');

var _nim = require('./../utils/nim.js');

var _nim2 = _interopRequireDefault(_nim);

var _common = require('./../actions/common.js');

var _wepyRedux = require('./../npm/wepy-redux/lib/index.js');

var _chatroom = require('./../apis/chatroom.js');

var chatroomApi = _interopRequireWildcard(_chatroom);

var _account = require('./../apis/account.js');

var api = _interopRequireWildcard(_account);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
  setUser: _common.setUser
  //   setNim,
  //   refreshFriends,
  //   refreshSessions,
  //   refreshMsgs,
  //   refreshMsgsByTo
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
      // pushMsg: function (msgs) {
      //   const { refreshMsgs, refreshMsgsByTo } = this.methods
      //   const { mergeMsgs } = this.nim
      //   if (!Array.isArray(msgs)) {
      //     msgs = [msgs]
      //   }
      //   const sessionId = msgs[0].sessionId
      //   const to = msgs[0].target
      //   const merged = mergeMsgs(this.msgs[sessionId] || [], msgs)
      //   const mergedByTo = mergeMsgs(this.msgs[to] || [], msgs)
      //   refreshMsgs(sessionId, merged)
      //   refreshMsgsByTo(to, mergedByTo)
      // },
      toChatroom: function toChatroom(index) {
        var id = this.rooms[index].id;
        console.log('chatroomid', id);
        _wepy2.default.navigateTo({
          url: '/pages/chatroom?id=' + id
        });
      }
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(Chatrooms, [{
    key: 'onLoad',
    value: function () {
      var _ref2 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee() {
        var setUser, _ref3, code, _ref4, data, openid, _ref5, userInfo, password, user, token, userId, Token, rooms, ids, chatrooms, members;

        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                setUser = this.methods.setUser;
                // const pushMsg = this.methods.pushMsg.bind(this)

                _wepy2.default.showLoading();
                console.log('this is chartRoom');
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
                userId = _context.sent;
                Token = userId.Token;

                if (Token) {
                  _context.next = 29;
                  break;
                }

                throw new Error('user not exist');

              case 29:

                setUser((0, _extends3.default)({}, this.user, {
                  jfToken: Token,
                  nimToken: token,
                  userData: userId
                }));

                // 初始化 nim 对象
                // const nim = NIM.getInstance({
                //   account: this.user.accid,
                //   token: token,
                //   debug: true,
                //   onusers: friends => {
                //     refreshFriends(friends.map(getFriend))
                //     this.$apply()
                //   },
                //   onsessions: sessions => {
                //     const merged = nim.mergeSessions(this.sessions, sessions)
                //     refreshSessions(merged)
                //     this.$apply()
                //   },
                //   onupdatesession: session => {
                //     const merged = nim.mergeSessions(this.sessions, session)
                //     refreshSessions(merged)
                //     this.$apply()
                //   },
                //   onmsg: msg => {
                //     pushMsg(msg)
                //     this.$apply()
                //   },
                //   onroamingmsgs: obj => {
                //     pushMsg(obj.msgs)
                //   },
                //   onofflinemsgs: obj => {
                //     pushMsg(obj.msgs)
                //   }
                // })
                //
                // setNim(nim)

                // 拉取聊天室列表
                _context.next = 32;
                return chatroomApi.getList();

              case 32:
                rooms = _context.sent;
                ids = rooms.map(_ramda2.default.prop('roomid'));
                _context.next = 36;
                return _nim2.default.getChatrooms(ids);

              case 36:
                chatrooms = _context.sent;
                members = chatrooms.map(_ramda2.default.prop('onlineusercount'));

                this.rooms = rooms.map(function (room, index) {
                  return {
                    id: room.roomid,
                    name: room.name,
                    cover: room.pic_url,
                    memebers: members[index],
                    announcement: room.announcement
                  };
                });
                console.log(this.rooms);
                this.$apply();
                _wepy2.default.hideLoading();
                _context.next = 48;
                break;

              case 44:
                _context.prev = 44;
                _context.t0 = _context['catch'](19);

                log.error({
                  page: 'chatrooms',
                  opr: 'init',
                  info: _context.t0
                });
                _wepy2.default.navigateTo({
                  url: '/pages/register'
                });

              case 48:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this, [[19, 44]]);
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoYXRyb29tcy5qcyJdLCJuYW1lcyI6WyJsb2ciLCJjaGF0cm9vbUFwaSIsImFwaSIsIkNoYXRyb29tcyIsInVzZXIiLCJzdGF0ZSIsImNvbW1vbiIsIm5pbSIsImZyaWVuZHMiLCJtc2dzIiwiY2hhdCIsInNldFVzZXIiLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiZGF0YSIsInJvb21zIiwibWV0aG9kcyIsInRvQ2hhdHJvb20iLCJpbmRleCIsImlkIiwiY29uc29sZSIsIm5hdmlnYXRlVG8iLCJ1cmwiLCJzaG93TG9hZGluZyIsImxvZ2luIiwiY29kZSIsInJlcXVlc3QiLCJhcHBJZCIsImFwcFNlY3JldGUiLCJvcGVuaWQiLCJnZXRVc2VySW5mbyIsInVzZXJJbmZvIiwicGFzc3dvcmQiLCJ0YWtlTGFzdCIsImFjY2lkIiwidG9Mb3dlckNhc2UiLCJ0b2tlbiIsImdldFRva2VuIiwidXNlcklkIiwiVG9rZW4iLCJFcnJvciIsImpmVG9rZW4iLCJuaW1Ub2tlbiIsInVzZXJEYXRhIiwiZ2V0TGlzdCIsImlkcyIsIm1hcCIsInByb3AiLCJnZXRDaGF0cm9vbXMiLCJjaGF0cm9vbXMiLCJtZW1iZXJzIiwicm9vbSIsInJvb21pZCIsIm5hbWUiLCJjb3ZlciIsInBpY191cmwiLCJtZW1lYmVycyIsImFubm91bmNlbWVudCIsIiRhcHBseSIsImhpZGVMb2FkaW5nIiwiZXJyb3IiLCJwYWdlIiwib3ByIiwiaW5mbyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQWlCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBMUJBOzs7O0FBQ0E7Ozs7QUFDQTs7SUFBWUEsRzs7QUFFWjs7QUFJQTs7OztBQUVBOztBQWtCQTs7QUFJQTs7SUFBWUMsVzs7QUFDWjs7SUFBWUMs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QUFDdkNDLHdCQUFJZ0MsS0FBS0MsTUFEOEI7QUFFdkNDLDBCQUFNRixLQUFLRSxJQUY0QjtBQUd2Q0MsMkJBQU9ILEtBQUtJLE9BSDJCO0FBSXZDQyw4QkFBVU4sUUFBUWhDLEtBQVIsQ0FKNkI7QUFLdkN1QyxrQ0FBY04sS0FBS007QUFMb0IsbUJBQWxCO0FBQUEsaUJBQVYsQ0FBYjtBQU9BckMsd0JBQVFwQixHQUFSLENBQVksS0FBS2UsS0FBakI7QUFDQSxxQkFBSzJDLE1BQUw7QUFDQSwrQkFBS0MsV0FBTDs7Ozs7Ozs7QUFFQTNELG9CQUFJNEQsS0FBSixDQUFVO0FBQ1JDLHdCQUFNLFdBREU7QUFFUkMsdUJBQUssTUFGRztBQUdSQztBQUhRLGlCQUFWO0FBS0EsK0JBQUsxQyxVQUFMLENBQWdCO0FBQ2RDLHVCQUFLO0FBRFMsaUJBQWhCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7RUEzSGlDLGVBQUt1QyxJO2tCQUF2QjFELFMiLCJmaWxlIjoiY2hhdHJvb21zLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gIC8vIGNvbnN0IGdldEZyaWVuZCA9IGZ1bmN0aW9uKGZyaWVuZCkge1xuICAvLyAgIHJldHVybiB7XG4gIC8vICAgICBuaWNrbmFtZTogZnJpZW5kLm5pY2ssXG4gIC8vICAgICBhdmF0YXI6IGZyaWVuZC5hdmF0YXIsXG4gIC8vICAgICBhY2NpZDogZnJpZW5kLmFjY291bnRcbiAgLy8gICB9XG4gIC8vIH1cblxuICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuICBpbXBvcnQgUiBmcm9tICcuLi9saWJzL3JhbWRhJ1xuICBpbXBvcnQgKiBhcyBsb2cgZnJvbSAnLi4vdXRpbHMvbG9nJ1xuXG4gIGltcG9ydCB7XG4gICAgd3ggYXMgY29uZmlnXG4gIH0gZnJvbSAnLi4vY29uZmlnJ1xuXG4gIGltcG9ydCBOSU0gZnJvbSAnLi4vdXRpbHMvbmltJ1xuXG4gIGltcG9ydCB7XG4gICAgc2V0VXNlclxuICAgIC8vIHNldE5pbVxuICB9IGZyb20gJy4uL2FjdGlvbnMvY29tbW9uJ1xuXG4gIC8vIGltcG9ydCB7XG4gIC8vICAgcmVmcmVzaFNlc3Npb25zXG4gIC8vIH0gZnJvbSAnLi4vYWN0aW9ucy9zZXNzaW9ucydcbiAgLy9cbiAgLy8gaW1wb3J0IHtcbiAgLy8gICByZWZyZXNoRnJpZW5kc1xuICAvLyB9IGZyb20gJy4uL2FjdGlvbnMvZnJpZW5kcydcbiAgLy9cbiAgLy8gaW1wb3J0IHtcbiAgLy8gICByZWZyZXNoTXNncyxcbiAgLy8gICByZWZyZXNoTXNnc0J5VG9cbiAgLy8gfSBmcm9tICcuLi9hY3Rpb25zL2NoYXQnXG5cbiAgaW1wb3J0IHtcbiAgICBjb25uZWN0XG4gIH0gZnJvbSAnd2VweS1yZWR1eCdcblxuICBpbXBvcnQgKiBhcyBjaGF0cm9vbUFwaSBmcm9tICcuLi9hcGlzL2NoYXRyb29tJ1xuICBpbXBvcnQgKiBhcyBhcGkgZnJvbSAnLi4vYXBpcy9hY2NvdW50J1xuXG4gIEBjb25uZWN0KHtcbiAgICB1c2VyOiBzdGF0ZSA9PiBzdGF0ZS5jb21tb24udXNlcixcbiAgICBuaW06IHN0YXRlID0+IHN0YXRlLmNvbW1vbi5uaW0sXG4gICAgZnJpZW5kczogc3RhdGUgPT4gc3RhdGUuZnJpZW5kcy5mcmllbmRzLFxuICAgIG1zZ3M6IHN0YXRlID0+IHN0YXRlLmNoYXQubXNnc1xuICB9LCB7XG4gICAgc2V0VXNlclxuLy8gICBzZXROaW0sXG4vLyAgIHJlZnJlc2hGcmllbmRzLFxuLy8gICByZWZyZXNoU2Vzc2lvbnMsXG4vLyAgIHJlZnJlc2hNc2dzLFxuLy8gICByZWZyZXNoTXNnc0J5VG9cbiAgfSlcbiAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2hhdHJvb21zIGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgICBjb25maWcgPSB7XG4gICAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn6IGK5aSp5a6kJ1xuICAgIH1cblxuICAgIGRhdGEgPSB7XG4gICAgICByb29tczogW11cbiAgICB9XG5cbiAgICBtZXRob2RzID0ge1xuICAgICAgLy8gcHVzaE1zZzogZnVuY3Rpb24gKG1zZ3MpIHtcbiAgICAgIC8vICAgY29uc3QgeyByZWZyZXNoTXNncywgcmVmcmVzaE1zZ3NCeVRvIH0gPSB0aGlzLm1ldGhvZHNcbiAgICAgIC8vICAgY29uc3QgeyBtZXJnZU1zZ3MgfSA9IHRoaXMubmltXG4gICAgICAvLyAgIGlmICghQXJyYXkuaXNBcnJheShtc2dzKSkge1xuICAgICAgLy8gICAgIG1zZ3MgPSBbbXNnc11cbiAgICAgIC8vICAgfVxuICAgICAgLy8gICBjb25zdCBzZXNzaW9uSWQgPSBtc2dzWzBdLnNlc3Npb25JZFxuICAgICAgLy8gICBjb25zdCB0byA9IG1zZ3NbMF0udGFyZ2V0XG4gICAgICAvLyAgIGNvbnN0IG1lcmdlZCA9IG1lcmdlTXNncyh0aGlzLm1zZ3Nbc2Vzc2lvbklkXSB8fCBbXSwgbXNncylcbiAgICAgIC8vICAgY29uc3QgbWVyZ2VkQnlUbyA9IG1lcmdlTXNncyh0aGlzLm1zZ3NbdG9dIHx8IFtdLCBtc2dzKVxuICAgICAgLy8gICByZWZyZXNoTXNncyhzZXNzaW9uSWQsIG1lcmdlZClcbiAgICAgIC8vICAgcmVmcmVzaE1zZ3NCeVRvKHRvLCBtZXJnZWRCeVRvKVxuICAgICAgLy8gfSxcbiAgICAgIHRvQ2hhdHJvb206IGZ1bmN0aW9uKGluZGV4KSB7XG4gICAgICAgIGNvbnN0IGlkID0gdGhpcy5yb29tc1tpbmRleF0uaWRcbiAgICAgICAgY29uc29sZS5sb2coJ2NoYXRyb29taWQnLCBpZClcbiAgICAgICAgd2VweS5uYXZpZ2F0ZVRvKHtcbiAgICAgICAgICB1cmw6IGAvcGFnZXMvY2hhdHJvb20/aWQ9JHtpZH1gXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfVxuXG4gICAgYXN5bmMgb25Mb2FkKCkge1xuICAgICAgY29uc3QgeyBzZXRVc2VyIH0gPSB0aGlzLm1ldGhvZHNcbiAgICAgIC8vIGNvbnN0IHB1c2hNc2cgPSB0aGlzLm1ldGhvZHMucHVzaE1zZy5iaW5kKHRoaXMpXG4gICAgICB3ZXB5LnNob3dMb2FkaW5nKClcbiAgICAgIGNvbnNvbGUubG9nKCd0aGlzIGlzIGNoYXJ0Um9vbScpXG4gICAgICBjb25zdCB7IGNvZGUgfSA9IGF3YWl0IHdlcHkubG9naW4oKVxuICAgICAgY29uc3QgeyBkYXRhIH0gPSBhd2FpdCB3ZXB5LnJlcXVlc3Qoe1xuICAgICAgICB1cmw6IGBodHRwczovL2FwaS53ZWl4aW4ucXEuY29tL3Nucy9qc2NvZGUyc2Vzc2lvbj9hcHBpZD0ke2NvbmZpZy5hcHBJZH0mc2VjcmV0PSR7Y29uZmlnLmFwcFNlY3JldGV9JmpzX2NvZGU9JHtjb2RlfSZncmFudF90eXBlPWF1dGhvcml6YXRpb25fY29kZWBcbiAgICAgIH0pXG4gICAgICBjb25zdCB7IG9wZW5pZCB9ID0gZGF0YVxuICAgICAgY29uc3QgeyB1c2VySW5mbyB9ID0gYXdhaXQgd2VweS5nZXRVc2VySW5mbygpXG5cbiAgICAgIGNvbnN0IHBhc3N3b3JkID0gUi50YWtlTGFzdCg1KShvcGVuaWQpXG5cbiAgICAgIGNvbnN0IHVzZXIgPSB7XG4gICAgICAgIC4uLnVzZXJJbmZvLFxuICAgICAgICBhY2NpZDogb3BlbmlkLnRvTG93ZXJDYXNlKClcbiAgICAgIH1cblxuICAgICAgc2V0VXNlcih1c2VyKVxuICAgICAgLy8g5aaC5p6c55So5oi35bCa5pyq5ZyoIOe9keaYk+S6keazqOWGjCDliJnlhYjms6jlhoxcbiAgICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHRva2VuID0gYXdhaXQgTklNLmxvZ2luKG9wZW5pZClcbiAgICAgICAgY29uc3QgdXNlcklkID0gYXdhaXQgYXBpLmdldFRva2VuKG9wZW5pZCwgcGFzc3dvcmQudG9Mb3dlckNhc2UoKSlcbiAgICAgICAgY29uc3Qge1Rva2VufSA9IHVzZXJJZFxuXG4gICAgICAgIGlmICghVG9rZW4pIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ3VzZXIgbm90IGV4aXN0JylcbiAgICAgICAgfVxuXG4gICAgICAgIHNldFVzZXIoe1xuICAgICAgICAgIC4uLnRoaXMudXNlcixcbiAgICAgICAgICBqZlRva2VuOiBUb2tlbixcbiAgICAgICAgICBuaW1Ub2tlbjogdG9rZW4sXG4gICAgICAgICAgdXNlckRhdGE6IHVzZXJJZFxuICAgICAgICB9KVxuXG4gICAgICAgIC8vIOWIneWni+WMliBuaW0g5a+56LGhXG4gICAgICAgIC8vIGNvbnN0IG5pbSA9IE5JTS5nZXRJbnN0YW5jZSh7XG4gICAgICAgIC8vICAgYWNjb3VudDogdGhpcy51c2VyLmFjY2lkLFxuICAgICAgICAvLyAgIHRva2VuOiB0b2tlbixcbiAgICAgICAgLy8gICBkZWJ1ZzogdHJ1ZSxcbiAgICAgICAgLy8gICBvbnVzZXJzOiBmcmllbmRzID0+IHtcbiAgICAgICAgLy8gICAgIHJlZnJlc2hGcmllbmRzKGZyaWVuZHMubWFwKGdldEZyaWVuZCkpXG4gICAgICAgIC8vICAgICB0aGlzLiRhcHBseSgpXG4gICAgICAgIC8vICAgfSxcbiAgICAgICAgLy8gICBvbnNlc3Npb25zOiBzZXNzaW9ucyA9PiB7XG4gICAgICAgIC8vICAgICBjb25zdCBtZXJnZWQgPSBuaW0ubWVyZ2VTZXNzaW9ucyh0aGlzLnNlc3Npb25zLCBzZXNzaW9ucylcbiAgICAgICAgLy8gICAgIHJlZnJlc2hTZXNzaW9ucyhtZXJnZWQpXG4gICAgICAgIC8vICAgICB0aGlzLiRhcHBseSgpXG4gICAgICAgIC8vICAgfSxcbiAgICAgICAgLy8gICBvbnVwZGF0ZXNlc3Npb246IHNlc3Npb24gPT4ge1xuICAgICAgICAvLyAgICAgY29uc3QgbWVyZ2VkID0gbmltLm1lcmdlU2Vzc2lvbnModGhpcy5zZXNzaW9ucywgc2Vzc2lvbilcbiAgICAgICAgLy8gICAgIHJlZnJlc2hTZXNzaW9ucyhtZXJnZWQpXG4gICAgICAgIC8vICAgICB0aGlzLiRhcHBseSgpXG4gICAgICAgIC8vICAgfSxcbiAgICAgICAgLy8gICBvbm1zZzogbXNnID0+IHtcbiAgICAgICAgLy8gICAgIHB1c2hNc2cobXNnKVxuICAgICAgICAvLyAgICAgdGhpcy4kYXBwbHkoKVxuICAgICAgICAvLyAgIH0sXG4gICAgICAgIC8vICAgb25yb2FtaW5nbXNnczogb2JqID0+IHtcbiAgICAgICAgLy8gICAgIHB1c2hNc2cob2JqLm1zZ3MpXG4gICAgICAgIC8vICAgfSxcbiAgICAgICAgLy8gICBvbm9mZmxpbmVtc2dzOiBvYmogPT4ge1xuICAgICAgICAvLyAgICAgcHVzaE1zZyhvYmoubXNncylcbiAgICAgICAgLy8gICB9XG4gICAgICAgIC8vIH0pXG4gICAgICAgIC8vXG4gICAgICAgIC8vIHNldE5pbShuaW0pXG5cbiAgICAgICAgLy8g5ouJ5Y+W6IGK5aSp5a6k5YiX6KGoXG4gICAgICAgIGNvbnN0IHJvb21zID0gYXdhaXQgY2hhdHJvb21BcGkuZ2V0TGlzdCgpXG4gICAgICAgIGNvbnN0IGlkcyA9IHJvb21zLm1hcChSLnByb3AoJ3Jvb21pZCcpKVxuICAgICAgICBjb25zdCBjaGF0cm9vbXMgPSBhd2FpdCBOSU0uZ2V0Q2hhdHJvb21zKGlkcylcbiAgICAgICAgY29uc3QgbWVtYmVycyA9IGNoYXRyb29tcy5tYXAoUi5wcm9wKCdvbmxpbmV1c2VyY291bnQnKSlcbiAgICAgICAgdGhpcy5yb29tcyA9IHJvb21zLm1hcCgocm9vbSwgaW5kZXgpID0+ICh7XG4gICAgICAgICAgaWQ6IHJvb20ucm9vbWlkLFxuICAgICAgICAgIG5hbWU6IHJvb20ubmFtZSxcbiAgICAgICAgICBjb3Zlcjogcm9vbS5waWNfdXJsLFxuICAgICAgICAgIG1lbWViZXJzOiBtZW1iZXJzW2luZGV4XSxcbiAgICAgICAgICBhbm5vdW5jZW1lbnQ6IHJvb20uYW5ub3VuY2VtZW50XG4gICAgICAgIH0pKVxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnJvb21zKVxuICAgICAgICB0aGlzLiRhcHBseSgpXG4gICAgICAgIHdlcHkuaGlkZUxvYWRpbmcoKVxuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBsb2cuZXJyb3Ioe1xuICAgICAgICAgIHBhZ2U6ICdjaGF0cm9vbXMnLFxuICAgICAgICAgIG9wcjogJ2luaXQnLFxuICAgICAgICAgIGluZm86IGVcbiAgICAgICAgfSlcbiAgICAgICAgd2VweS5uYXZpZ2F0ZVRvKHtcbiAgICAgICAgICB1cmw6ICcvcGFnZXMvcmVnaXN0ZXInXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfVxuICB9XG4iXX0=