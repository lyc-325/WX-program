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

var _log = require('./../utils/log.js');

var log = _interopRequireWildcard(_log);

var _ramda = require('./../libs/ramda.js');

var _ramda2 = _interopRequireDefault(_ramda);

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
      toChatroom: function toChatroom(room) {
        var id = room.id;
        var roomid = room.roomid;
        var creator = room.creator;
        _wepy2.default.navigateTo({
          url: '/pages/chatroom?id=' + id + '&roomid=' + roomid + '&creator=' + creator
        });
      }
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(Chatrooms, [{
    key: 'onLoad',
    value: function () {
      var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
        var setUser, _ref3, code, data, openid, _ref4, userInfo, password, user, token, userId, Token, rooms, ids, chatrooms, members, roomList, roomArr;

        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                setUser = this.methods.setUser;
                // const pushMsg = this.methods.pushMsg.bind(this)

                _wepy2.default.showLoading();
                _context.next = 4;
                return _wepy2.default.login();

              case 4:
                _ref3 = _context.sent;
                code = _ref3.code;
                _context.next = 8;
                return api.getSession(code, _config.wx.appId, _config.wx.appSecrete);

              case 8:
                data = _context.sent;
                openid = data.openid;
                _context.next = 12;
                return _wepy2.default.getUserInfo();

              case 12:
                _ref4 = _context.sent;
                userInfo = _ref4.userInfo;
                password = _ramda2.default.takeLast(5)(openid);
                user = (0, _extends3.default)({}, userInfo, {
                  accid: openid.toLowerCase()
                });

                setUser(user);
                // 如果用户尚未在 网易云注册 则先注册
                _context.prev = 17;
                _context.next = 20;
                return _nim2.default.login(openid);

              case 20:
                token = _context.sent;
                _context.next = 23;
                return api.getToken(openid, password.toLowerCase());

              case 23:
                userId = _context.sent;
                Token = userId.Token;

                if (Token) {
                  _context.next = 27;
                  break;
                }

                throw new Error('user not exist');

              case 27:
                setUser((0, _extends3.default)({}, this.user, {
                  jfToken: Token,
                  nimToken: token,
                  userData: userId
                }));
                // 拉取聊天室列表
                _context.next = 30;
                return chatroomApi.getList();

              case 30:
                rooms = _context.sent;
                ids = rooms.map(_ramda2.default.prop('roomid'));
                _context.next = 34;
                return _nim2.default.getChatrooms(ids);

              case 34:
                chatrooms = _context.sent;
                members = chatrooms.map(_ramda2.default.prop('onlineusercount'));

                roomList = function roomList(room) {
                  return room.valid;
                };

                roomArr = _ramda2.default.filter(roomList)(rooms);

                this.rooms = roomArr.map(function (room, index) {
                  return {
                    id: room.id,
                    roomid: room.roomid,
                    creator: room.creator,
                    name: room.name,
                    cover: room.pic_url,
                    memebers: members[index],
                    announcement: room.announcement
                  };
                });
                this.$apply();
                _wepy2.default.hideLoading();
                _context.next = 47;
                break;

              case 43:
                _context.prev = 43;
                _context.t0 = _context['catch'](17);

                log.error({
                  page: 'chatrooms',
                  opr: 'init',
                  info: _context.t0
                });
                _wepy2.default.navigateTo({
                  url: '/pages/register'
                });

              case 47:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this, [[17, 43]]);
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoYXRyb29tcy5qcyJdLCJuYW1lcyI6WyJsb2ciLCJjaGF0cm9vbUFwaSIsImFwaSIsIkNoYXRyb29tcyIsInVzZXIiLCJzdGF0ZSIsImNvbW1vbiIsIm5pbSIsImZyaWVuZHMiLCJtc2dzIiwiY2hhdCIsInNldFVzZXIiLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiZGF0YSIsInJvb21zIiwibWV0aG9kcyIsInRvQ2hhdHJvb20iLCJyb29tIiwiaWQiLCJyb29taWQiLCJjcmVhdG9yIiwibmF2aWdhdGVUbyIsInVybCIsInNob3dMb2FkaW5nIiwibG9naW4iLCJjb2RlIiwiZ2V0U2Vzc2lvbiIsImFwcElkIiwiYXBwU2VjcmV0ZSIsIm9wZW5pZCIsImdldFVzZXJJbmZvIiwidXNlckluZm8iLCJwYXNzd29yZCIsInRha2VMYXN0IiwiYWNjaWQiLCJ0b0xvd2VyQ2FzZSIsInRva2VuIiwiZ2V0VG9rZW4iLCJ1c2VySWQiLCJUb2tlbiIsIkVycm9yIiwiamZUb2tlbiIsIm5pbVRva2VuIiwidXNlckRhdGEiLCJnZXRMaXN0IiwiaWRzIiwibWFwIiwicHJvcCIsImdldENoYXRyb29tcyIsImNoYXRyb29tcyIsIm1lbWJlcnMiLCJyb29tTGlzdCIsInZhbGlkIiwicm9vbUFyciIsImZpbHRlciIsImluZGV4IiwibmFtZSIsImNvdmVyIiwicGljX3VybCIsIm1lbWViZXJzIiwiYW5ub3VuY2VtZW50IiwiJGFwcGx5IiwiaGlkZUxvYWRpbmciLCJlcnJvciIsInBhZ2UiLCJvcHIiLCJpbmZvIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBWUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUF0QkE7Ozs7QUFDQTs7SUFBWUEsRzs7QUFDWjs7OztBQUNBOztBQUdBOzs7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O0FBR3pDQyw2QkFBU0gsS0FBS0csT0FIMkI7QUFJekNvQywwQkFBTXZDLEtBQUt1QyxJQUo4QjtBQUt6Q0MsMkJBQU94QyxLQUFLeUMsT0FMNkI7QUFNekNDLDhCQUFVVCxRQUFRSyxLQUFSLENBTitCO0FBT3pDSyxrQ0FBYzNDLEtBQUsyQztBQVBzQixtQkFBbEI7QUFBQSxpQkFBWixDQUFiO0FBU0EscUJBQUtDLE1BQUw7QUFDQSwrQkFBS0MsV0FBTDs7Ozs7Ozs7QUFFQS9ELG9CQUFJZ0UsS0FBSixDQUFVO0FBQ1JDLHdCQUFNLFdBREU7QUFFUkMsdUJBQUssTUFGRztBQUdSQztBQUhRLGlCQUFWO0FBS0EsK0JBQUs3QyxVQUFMLENBQWdCO0FBQ2RDLHVCQUFLO0FBRFMsaUJBQWhCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7RUFyRmlDLGVBQUswQyxJO2tCQUF2QjlELFMiLCJmaWxlIjoiY2hhdHJvb21zLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbiAgLy8gY29uc3QgZ2V0RnJpZW5kID0gZnVuY3Rpb24oZnJpZW5kKSB7XHJcbiAgLy8gICByZXR1cm4ge1xyXG4gIC8vICAgICBuaWNrbmFtZTogZnJpZW5kLm5pY2ssXHJcbiAgLy8gICAgIGF2YXRhcjogZnJpZW5kLmF2YXRhcixcclxuICAvLyAgICAgYWNjaWQ6IGZyaWVuZC5hY2NvdW50XHJcbiAgLy8gICB9XHJcbiAgLy8gfVxyXG4gIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXHJcbiAgaW1wb3J0ICogYXMgbG9nIGZyb20gJy4uL3V0aWxzL2xvZydcclxuICBpbXBvcnQgUiBmcm9tICcuLi9saWJzL3JhbWRhJ1xyXG4gIGltcG9ydCB7XHJcbiAgICB3eCBhcyBjb25maWdcclxuICB9IGZyb20gJy4uL2NvbmZpZydcclxuICBpbXBvcnQgTklNIGZyb20gJy4uL3V0aWxzL25pbSdcclxuICBpbXBvcnQge1xyXG4gICAgc2V0VXNlclxyXG4gICAgLy8gc2V0TmltXHJcbiAgfSBmcm9tICcuLi9hY3Rpb25zL2NvbW1vbidcclxuICAvLyBpbXBvcnQge1xyXG4gIC8vICAgcmVmcmVzaFNlc3Npb25zXHJcbiAgLy8gfSBmcm9tICcuLi9hY3Rpb25zL3Nlc3Npb25zJ1xyXG4gIC8vXHJcbiAgLy8gaW1wb3J0IHtcclxuICAvLyAgIHJlZnJlc2hGcmllbmRzXHJcbiAgLy8gfSBmcm9tICcuLi9hY3Rpb25zL2ZyaWVuZHMnXHJcbiAgLy9cclxuICAvLyBpbXBvcnQge1xyXG4gIC8vICAgcmVmcmVzaE1zZ3MsXHJcbiAgLy8gICByZWZyZXNoTXNnc0J5VG9cclxuICAvLyB9IGZyb20gJy4uL2FjdGlvbnMvY2hhdCdcclxuICBpbXBvcnQge1xyXG4gICAgY29ubmVjdFxyXG4gIH0gZnJvbSAnd2VweS1yZWR1eCdcclxuICBpbXBvcnQgKiBhcyBjaGF0cm9vbUFwaSBmcm9tICcuLi9hcGlzL2NoYXRyb29tJ1xyXG4gIGltcG9ydCAqIGFzIGFwaSBmcm9tICcuLi9hcGlzL2FjY291bnQnXHJcbiAgQGNvbm5lY3Qoe1xyXG4gICAgdXNlcjogc3RhdGUgPT4gc3RhdGUuY29tbW9uLnVzZXIsXHJcbiAgICBuaW06IHN0YXRlID0+IHN0YXRlLmNvbW1vbi5uaW0sXHJcbiAgICBmcmllbmRzOiBzdGF0ZSA9PiBzdGF0ZS5mcmllbmRzLmZyaWVuZHMsXHJcbiAgICBtc2dzOiBzdGF0ZSA9PiBzdGF0ZS5jaGF0Lm1zZ3NcclxuICB9LCB7XHJcbiAgICBzZXRVc2VyXHJcbi8vICAgc2V0TmltLFxyXG4vLyAgIHJlZnJlc2hGcmllbmRzLFxyXG4vLyAgIHJlZnJlc2hTZXNzaW9ucyxcclxuLy8gICByZWZyZXNoTXNncyxcclxuLy8gICByZWZyZXNoTXNnc0J5VG9cclxuICB9KVxyXG4gIGV4cG9ydCBkZWZhdWx0IGNsYXNzIENoYXRyb29tcyBleHRlbmRzIHdlcHkucGFnZSB7XHJcbiAgICBjb25maWcgPSB7XHJcbiAgICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICfogYrlpKnlrqQnXHJcbiAgICB9XHJcbiAgICBkYXRhID0ge1xyXG4gICAgICByb29tczogW10sXHJcbiAgICB9XHJcbiAgICBtZXRob2RzID0ge1xyXG4gICAgICAvLyBwdXNoTXNnOiBmdW5jdGlvbiAobXNncykge1xyXG4gICAgICAvLyAgIGNvbnN0IHsgcmVmcmVzaE1zZ3MsIHJlZnJlc2hNc2dzQnlUbyB9ID0gdGhpcy5tZXRob2RzXHJcbiAgICAgIC8vICAgY29uc3QgeyBtZXJnZU1zZ3MgfSA9IHRoaXMubmltXHJcbiAgICAgIC8vICAgaWYgKCFBcnJheS5pc0FycmF5KG1zZ3MpKSB7XHJcbiAgICAgIC8vICAgICBtc2dzID0gW21zZ3NdXHJcbiAgICAgIC8vICAgfVxyXG4gICAgICAvLyAgIGNvbnN0IHNlc3Npb25JZCA9IG1zZ3NbMF0uc2Vzc2lvbklkXHJcbiAgICAgIC8vICAgY29uc3QgdG8gPSBtc2dzWzBdLnRhcmdldFxyXG4gICAgICAvLyAgIGNvbnN0IG1lcmdlZCA9IG1lcmdlTXNncyh0aGlzLm1zZ3Nbc2Vzc2lvbklkXSB8fCBbXSwgbXNncylcclxuICAgICAgLy8gICBjb25zdCBtZXJnZWRCeVRvID0gbWVyZ2VNc2dzKHRoaXMubXNnc1t0b10gfHwgW10sIG1zZ3MpXHJcbiAgICAgIC8vICAgcmVmcmVzaE1zZ3Moc2Vzc2lvbklkLCBtZXJnZWQpXHJcbiAgICAgIC8vICAgcmVmcmVzaE1zZ3NCeVRvKHRvLCBtZXJnZWRCeVRvKVxyXG4gICAgICAvLyB9LFxyXG4gICAgICB0b0NoYXRyb29tOiBmdW5jdGlvbihyb29tKSB7XHJcbiAgICAgICAgY29uc3QgaWQgPSByb29tLmlkXHJcbiAgICAgICAgY29uc3Qgcm9vbWlkID0gcm9vbS5yb29taWRcclxuICAgICAgICBjb25zdCBjcmVhdG9yID0gcm9vbS5jcmVhdG9yXHJcbiAgICAgICAgd2VweS5uYXZpZ2F0ZVRvKHtcclxuICAgICAgICAgIHVybDogYC9wYWdlcy9jaGF0cm9vbT9pZD0ke2lkfSZyb29taWQ9JHtyb29taWR9JmNyZWF0b3I9JHtjcmVhdG9yfWBcclxuICAgICAgICB9KVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBhc3luYyBvbkxvYWQoKSB7XHJcbiAgICAgIGNvbnN0IHsgc2V0VXNlciB9ID0gdGhpcy5tZXRob2RzXHJcbiAgICAgIC8vIGNvbnN0IHB1c2hNc2cgPSB0aGlzLm1ldGhvZHMucHVzaE1zZy5iaW5kKHRoaXMpXHJcbiAgICAgIHdlcHkuc2hvd0xvYWRpbmcoKVxyXG4gICAgICBjb25zdCB7IGNvZGUgfSA9IGF3YWl0IHdlcHkubG9naW4oKVxyXG4gICAgICAvLyAvLyBjb25zdCB7IGRhdGEgfSA9IGF3YWl0IHdlcHkucmVxdWVzdCh7XHJcbiAgICAgIC8vIC8vICAgdXJsOiBgaHR0cHM6Ly9hcGkud2VpeGluLnFxLmNvbS9zbnMvanNjb2RlMnNlc3Npb24/YXBwaWQ9JHtjb25maWcuYXBwSWR9JnNlY3JldD0ke2NvbmZpZy5hcHBTZWNyZXRlfSZqc19jb2RlPSR7Y29kZX0mZ3JhbnRfdHlwZT1hdXRob3JpemF0aW9uX2NvZGVgXHJcbiAgICAgIC8vIC8vIH0pXHJcbiAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBhcGkuZ2V0U2Vzc2lvbihjb2RlLGNvbmZpZy5hcHBJZCxjb25maWcuYXBwU2VjcmV0ZSlcclxuICAgICAgY29uc3QgeyBvcGVuaWQgfSA9IGRhdGEgXHJcbiAgICAgIGNvbnN0IHsgdXNlckluZm8gfSA9IGF3YWl0IHdlcHkuZ2V0VXNlckluZm8oKVxyXG4gICAgICBjb25zdCBwYXNzd29yZCA9IFIudGFrZUxhc3QoNSkob3BlbmlkKVxyXG4gICAgICBjb25zdCB1c2VyID0ge1xyXG4gICAgICAgIC4uLnVzZXJJbmZvLFxyXG4gICAgICAgIGFjY2lkOiBvcGVuaWQudG9Mb3dlckNhc2UoKVxyXG4gICAgICB9XHJcbiAgICAgIHNldFVzZXIodXNlcilcclxuICAgICAgLy8g5aaC5p6c55So5oi35bCa5pyq5ZyoIOe9keaYk+S6keazqOWGjCDliJnlhYjms6jlhoxcclxuICAgICAgdHJ5IHtcclxuICAgICAgICBjb25zdCB0b2tlbiA9IGF3YWl0IE5JTS5sb2dpbihvcGVuaWQpXHJcbiAgICAgICAgY29uc3QgdXNlcklkID0gYXdhaXQgYXBpLmdldFRva2VuKG9wZW5pZCwgcGFzc3dvcmQudG9Mb3dlckNhc2UoKSlcclxuICAgICAgICBjb25zdCB7VG9rZW59ID0gdXNlcklkXHJcbiAgICAgICAgaWYgKCFUb2tlbikge1xyXG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCd1c2VyIG5vdCBleGlzdCcpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHNldFVzZXIoe1xyXG4gICAgICAgICAgLi4udGhpcy51c2VyLFxyXG4gICAgICAgICAgamZUb2tlbjogVG9rZW4sXHJcbiAgICAgICAgICBuaW1Ub2tlbjogdG9rZW4sXHJcbiAgICAgICAgICB1c2VyRGF0YTogdXNlcklkXHJcbiAgICAgICAgfSlcclxuICAgICAgICAvLyDmi4nlj5bogYrlpKnlrqTliJfooahcclxuICAgICAgICBjb25zdCByb29tcyA9IGF3YWl0IGNoYXRyb29tQXBpLmdldExpc3QoKVxyXG4gICAgICAgIGNvbnN0IGlkcyA9IHJvb21zLm1hcChSLnByb3AoJ3Jvb21pZCcpKVxyXG4gICAgICAgIGNvbnN0IGNoYXRyb29tcyA9IGF3YWl0IE5JTS5nZXRDaGF0cm9vbXMoaWRzKVxyXG4gICAgICAgIGNvbnN0IG1lbWJlcnMgPSBjaGF0cm9vbXMubWFwKFIucHJvcCgnb25saW5ldXNlcmNvdW50JykpXHJcbiAgICAgICAgY29uc3Qgcm9vbUxpc3QgPSByb29tID0+IHJvb20udmFsaWRcclxuICAgICAgICBjb25zdCByb29tQXJyID0gUi5maWx0ZXIocm9vbUxpc3QpKHJvb21zKVxyXG4gICAgICAgIHRoaXMucm9vbXMgPSByb29tQXJyLm1hcCgocm9vbSwgaW5kZXgpID0+ICh7XHJcbiAgICAgICAgICBpZDogcm9vbS5pZCxcclxuICAgICAgICAgIHJvb21pZDogcm9vbS5yb29taWQsXHJcbiAgICAgICAgICBjcmVhdG9yOiByb29tLmNyZWF0b3IsXHJcbiAgICAgICAgICBuYW1lOiByb29tLm5hbWUsXHJcbiAgICAgICAgICBjb3Zlcjogcm9vbS5waWNfdXJsLFxyXG4gICAgICAgICAgbWVtZWJlcnM6IG1lbWJlcnNbaW5kZXhdLFxyXG4gICAgICAgICAgYW5ub3VuY2VtZW50OiByb29tLmFubm91bmNlbWVudFxyXG4gICAgICAgIH0pKVxyXG4gICAgICAgIHRoaXMuJGFwcGx5KClcclxuICAgICAgICB3ZXB5LmhpZGVMb2FkaW5nKClcclxuICAgICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgIGxvZy5lcnJvcih7XHJcbiAgICAgICAgICBwYWdlOiAnY2hhdHJvb21zJyxcclxuICAgICAgICAgIG9wcjogJ2luaXQnLFxyXG4gICAgICAgICAgaW5mbzogZVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgd2VweS5uYXZpZ2F0ZVRvKHtcclxuICAgICAgICAgIHVybDogJy9wYWdlcy9yZWdpc3RlcidcclxuICAgICAgICB9KVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4iXX0=