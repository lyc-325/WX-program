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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoYXRyb29tcy5qcyJdLCJuYW1lcyI6WyJsb2ciLCJjaGF0cm9vbUFwaSIsImFwaSIsIkNoYXRyb29tcyIsInVzZXIiLCJzdGF0ZSIsImNvbW1vbiIsIm5pbSIsImZyaWVuZHMiLCJtc2dzIiwiY2hhdCIsInNldFVzZXIiLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiZGF0YSIsInJvb21zIiwibWV0aG9kcyIsInRvQ2hhdHJvb20iLCJyb29tIiwiaWQiLCJyb29taWQiLCJjcmVhdG9yIiwibmF2aWdhdGVUbyIsInVybCIsInNob3dMb2FkaW5nIiwibG9naW4iLCJjb2RlIiwiZ2V0U2Vzc2lvbiIsImFwcElkIiwiYXBwU2VjcmV0ZSIsIm9wZW5pZCIsImdldFVzZXJJbmZvIiwidXNlckluZm8iLCJwYXNzd29yZCIsInRha2VMYXN0IiwiYWNjaWQiLCJ0b0xvd2VyQ2FzZSIsInRva2VuIiwiZ2V0VG9rZW4iLCJ1c2VySWQiLCJUb2tlbiIsIkVycm9yIiwiamZUb2tlbiIsIm5pbVRva2VuIiwidXNlckRhdGEiLCJnZXRMaXN0IiwiaWRzIiwibWFwIiwicHJvcCIsImdldENoYXRyb29tcyIsImNoYXRyb29tcyIsIm1lbWJlcnMiLCJyb29tTGlzdCIsInZhbGlkIiwicm9vbUFyciIsImZpbHRlciIsImluZGV4IiwibmFtZSIsImNvdmVyIiwicGljX3VybCIsIm1lbWViZXJzIiwiYW5ub3VuY2VtZW50IiwiJGFwcGx5IiwiaGlkZUxvYWRpbmciLCJlcnJvciIsInBhZ2UiLCJvcHIiLCJpbmZvIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBaUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUExQkE7Ozs7QUFDQTs7OztBQUNBOztJQUFZQSxHOztBQUVaOztBQUlBOzs7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RjRCO0FBR3pDQyw2QkFBU0gsS0FBS0csT0FIMkI7QUFJekNvQywwQkFBTXZDLEtBQUt1QyxJQUo4QjtBQUt6Q0MsMkJBQU94QyxLQUFLeUMsT0FMNkI7QUFNekNDLDhCQUFVVCxRQUFRSyxLQUFSLENBTitCO0FBT3pDSyxrQ0FBYzNDLEtBQUsyQztBQVBzQixtQkFBbEI7QUFBQSxpQkFBWixDQUFiO0FBU0EscUJBQUtDLE1BQUw7QUFDQSwrQkFBS0MsV0FBTDs7Ozs7Ozs7QUFFQS9ELG9CQUFJZ0UsS0FBSixDQUFVO0FBQ1JDLHdCQUFNLFdBREU7QUFFUkMsdUJBQUssTUFGRztBQUdSQztBQUhRLGlCQUFWO0FBS0EsK0JBQUs3QyxVQUFMLENBQWdCO0FBQ2RDLHVCQUFLO0FBRFMsaUJBQWhCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7RUFoR2lDLGVBQUswQyxJO2tCQUF2QjlELFMiLCJmaWxlIjoiY2hhdHJvb21zLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbiAgLy8gY29uc3QgZ2V0RnJpZW5kID0gZnVuY3Rpb24oZnJpZW5kKSB7XHJcbiAgLy8gICByZXR1cm4ge1xyXG4gIC8vICAgICBuaWNrbmFtZTogZnJpZW5kLm5pY2ssXHJcbiAgLy8gICAgIGF2YXRhcjogZnJpZW5kLmF2YXRhcixcclxuICAvLyAgICAgYWNjaWQ6IGZyaWVuZC5hY2NvdW50XHJcbiAgLy8gICB9XHJcbiAgLy8gfVxyXG5cclxuICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xyXG4gIGltcG9ydCBSIGZyb20gJy4uL2xpYnMvcmFtZGEnXHJcbiAgaW1wb3J0ICogYXMgbG9nIGZyb20gJy4uL3V0aWxzL2xvZydcclxuXHJcbiAgaW1wb3J0IHtcclxuICAgIHd4IGFzIGNvbmZpZ1xyXG4gIH0gZnJvbSAnLi4vY29uZmlnJ1xyXG5cclxuICBpbXBvcnQgTklNIGZyb20gJy4uL3V0aWxzL25pbSdcclxuXHJcbiAgaW1wb3J0IHtcclxuICAgIHNldFVzZXJcclxuICAgIC8vIHNldE5pbVxyXG4gIH0gZnJvbSAnLi4vYWN0aW9ucy9jb21tb24nXHJcblxyXG4gIC8vIGltcG9ydCB7XHJcbiAgLy8gICByZWZyZXNoU2Vzc2lvbnNcclxuICAvLyB9IGZyb20gJy4uL2FjdGlvbnMvc2Vzc2lvbnMnXHJcbiAgLy9cclxuICAvLyBpbXBvcnQge1xyXG4gIC8vICAgcmVmcmVzaEZyaWVuZHNcclxuICAvLyB9IGZyb20gJy4uL2FjdGlvbnMvZnJpZW5kcydcclxuICAvL1xyXG4gIC8vIGltcG9ydCB7XHJcbiAgLy8gICByZWZyZXNoTXNncyxcclxuICAvLyAgIHJlZnJlc2hNc2dzQnlUb1xyXG4gIC8vIH0gZnJvbSAnLi4vYWN0aW9ucy9jaGF0J1xyXG5cclxuICBpbXBvcnQge1xyXG4gICAgY29ubmVjdFxyXG4gIH0gZnJvbSAnd2VweS1yZWR1eCdcclxuXHJcbiAgaW1wb3J0ICogYXMgY2hhdHJvb21BcGkgZnJvbSAnLi4vYXBpcy9jaGF0cm9vbSdcclxuICBpbXBvcnQgKiBhcyBhcGkgZnJvbSAnLi4vYXBpcy9hY2NvdW50J1xyXG5cclxuICBAY29ubmVjdCh7XHJcbiAgICB1c2VyOiBzdGF0ZSA9PiBzdGF0ZS5jb21tb24udXNlcixcclxuICAgIG5pbTogc3RhdGUgPT4gc3RhdGUuY29tbW9uLm5pbSxcclxuICAgIGZyaWVuZHM6IHN0YXRlID0+IHN0YXRlLmZyaWVuZHMuZnJpZW5kcyxcclxuICAgIG1zZ3M6IHN0YXRlID0+IHN0YXRlLmNoYXQubXNnc1xyXG4gIH0sIHtcclxuICAgIHNldFVzZXJcclxuLy8gICBzZXROaW0sXHJcbi8vICAgcmVmcmVzaEZyaWVuZHMsXHJcbi8vICAgcmVmcmVzaFNlc3Npb25zLFxyXG4vLyAgIHJlZnJlc2hNc2dzLFxyXG4vLyAgIHJlZnJlc2hNc2dzQnlUb1xyXG4gIH0pXHJcbiAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2hhdHJvb21zIGV4dGVuZHMgd2VweS5wYWdlIHtcclxuICAgIGNvbmZpZyA9IHtcclxuICAgICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+iBiuWkqeWupCdcclxuICAgIH1cclxuXHJcbiAgICBkYXRhID0ge1xyXG4gICAgICByb29tczogW10sXHJcbiAgICB9XHJcblxyXG4gICAgbWV0aG9kcyA9IHtcclxuICAgICAgLy8gcHVzaE1zZzogZnVuY3Rpb24gKG1zZ3MpIHtcclxuICAgICAgLy8gICBjb25zdCB7IHJlZnJlc2hNc2dzLCByZWZyZXNoTXNnc0J5VG8gfSA9IHRoaXMubWV0aG9kc1xyXG4gICAgICAvLyAgIGNvbnN0IHsgbWVyZ2VNc2dzIH0gPSB0aGlzLm5pbVxyXG4gICAgICAvLyAgIGlmICghQXJyYXkuaXNBcnJheShtc2dzKSkge1xyXG4gICAgICAvLyAgICAgbXNncyA9IFttc2dzXVxyXG4gICAgICAvLyAgIH1cclxuICAgICAgLy8gICBjb25zdCBzZXNzaW9uSWQgPSBtc2dzWzBdLnNlc3Npb25JZFxyXG4gICAgICAvLyAgIGNvbnN0IHRvID0gbXNnc1swXS50YXJnZXRcclxuICAgICAgLy8gICBjb25zdCBtZXJnZWQgPSBtZXJnZU1zZ3ModGhpcy5tc2dzW3Nlc3Npb25JZF0gfHwgW10sIG1zZ3MpXHJcbiAgICAgIC8vICAgY29uc3QgbWVyZ2VkQnlUbyA9IG1lcmdlTXNncyh0aGlzLm1zZ3NbdG9dIHx8IFtdLCBtc2dzKVxyXG4gICAgICAvLyAgIHJlZnJlc2hNc2dzKHNlc3Npb25JZCwgbWVyZ2VkKVxyXG4gICAgICAvLyAgIHJlZnJlc2hNc2dzQnlUbyh0bywgbWVyZ2VkQnlUbylcclxuICAgICAgLy8gfSxcclxuICAgICAgdG9DaGF0cm9vbTogZnVuY3Rpb24ocm9vbSkge1xyXG4gICAgICAgIGNvbnN0IGlkID0gcm9vbS5pZFxyXG4gICAgICAgIGNvbnN0IHJvb21pZCA9IHJvb20ucm9vbWlkXHJcbiAgICAgICAgY29uc3QgY3JlYXRvciA9IHJvb20uY3JlYXRvclxyXG4gICAgICAgIHdlcHkubmF2aWdhdGVUbyh7XHJcbiAgICAgICAgICB1cmw6IGAvcGFnZXMvY2hhdHJvb20/aWQ9JHtpZH0mcm9vbWlkPSR7cm9vbWlkfSZjcmVhdG9yPSR7Y3JlYXRvcn1gXHJcbiAgICAgICAgfSlcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGFzeW5jIG9uTG9hZCgpIHtcclxuICAgICAgY29uc3QgeyBzZXRVc2VyIH0gPSB0aGlzLm1ldGhvZHNcclxuICAgICAgLy8gY29uc3QgcHVzaE1zZyA9IHRoaXMubWV0aG9kcy5wdXNoTXNnLmJpbmQodGhpcylcclxuICAgICAgd2VweS5zaG93TG9hZGluZygpXHJcbiAgICAgIGNvbnN0IHsgY29kZSB9ID0gYXdhaXQgd2VweS5sb2dpbigpXHJcbiAgICAgIC8vIC8vIGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgd2VweS5yZXF1ZXN0KHtcclxuICAgICAgLy8gLy8gICB1cmw6IGBodHRwczovL2FwaS53ZWl4aW4ucXEuY29tL3Nucy9qc2NvZGUyc2Vzc2lvbj9hcHBpZD0ke2NvbmZpZy5hcHBJZH0mc2VjcmV0PSR7Y29uZmlnLmFwcFNlY3JldGV9JmpzX2NvZGU9JHtjb2RlfSZncmFudF90eXBlPWF1dGhvcml6YXRpb25fY29kZWBcclxuICAgICAgLy8gLy8gfSlcclxuICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IGFwaS5nZXRTZXNzaW9uKGNvZGUsY29uZmlnLmFwcElkLGNvbmZpZy5hcHBTZWNyZXRlKVxyXG4gICAgICBjb25zdCB7IG9wZW5pZCB9ID0gZGF0YSBcclxuXHJcbiAgICAgIGNvbnN0IHsgdXNlckluZm8gfSA9IGF3YWl0IHdlcHkuZ2V0VXNlckluZm8oKVxyXG5cclxuICAgICAgY29uc3QgcGFzc3dvcmQgPSBSLnRha2VMYXN0KDUpKG9wZW5pZClcclxuXHJcbiAgICAgIGNvbnN0IHVzZXIgPSB7XHJcbiAgICAgICAgLi4udXNlckluZm8sXHJcbiAgICAgICAgYWNjaWQ6IG9wZW5pZC50b0xvd2VyQ2FzZSgpXHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHNldFVzZXIodXNlcilcclxuICAgICAgLy8g5aaC5p6c55So5oi35bCa5pyq5ZyoIOe9keaYk+S6keazqOWGjCDliJnlhYjms6jlhoxcclxuICAgICAgdHJ5IHtcclxuICAgICAgICBjb25zdCB0b2tlbiA9IGF3YWl0IE5JTS5sb2dpbihvcGVuaWQpXHJcbiAgICAgICAgY29uc3QgdXNlcklkID0gYXdhaXQgYXBpLmdldFRva2VuKG9wZW5pZCwgcGFzc3dvcmQudG9Mb3dlckNhc2UoKSlcclxuICAgICAgICBjb25zdCB7VG9rZW59ID0gdXNlcklkXHJcblxyXG4gICAgICAgIGlmICghVG9rZW4pIHtcclxuICAgICAgICAgIHRocm93IG5ldyBFcnJvcigndXNlciBub3QgZXhpc3QnKVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgc2V0VXNlcih7XHJcbiAgICAgICAgICAuLi50aGlzLnVzZXIsXHJcbiAgICAgICAgICBqZlRva2VuOiBUb2tlbixcclxuICAgICAgICAgIG5pbVRva2VuOiB0b2tlbixcclxuICAgICAgICAgIHVzZXJEYXRhOiB1c2VySWRcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICAvLyDmi4nlj5bogYrlpKnlrqTliJfooahcclxuICAgICAgICBjb25zdCByb29tcyA9IGF3YWl0IGNoYXRyb29tQXBpLmdldExpc3QoKVxyXG5cclxuICAgICAgICBjb25zdCBpZHMgPSByb29tcy5tYXAoUi5wcm9wKCdyb29taWQnKSlcclxuICAgICAgICBjb25zdCBjaGF0cm9vbXMgPSBhd2FpdCBOSU0uZ2V0Q2hhdHJvb21zKGlkcylcclxuICAgICAgICBjb25zdCBtZW1iZXJzID0gY2hhdHJvb21zLm1hcChSLnByb3AoJ29ubGluZXVzZXJjb3VudCcpKVxyXG4gICAgICAgIGNvbnN0IHJvb21MaXN0ID0gcm9vbSA9PiByb29tLnZhbGlkXHJcbiAgICAgICAgY29uc3Qgcm9vbUFyciA9IFIuZmlsdGVyKHJvb21MaXN0KShyb29tcylcclxuICAgICAgICB0aGlzLnJvb21zID0gcm9vbUFyci5tYXAoKHJvb20sIGluZGV4KSA9PiAoe1xyXG4gICAgICAgICAgaWQ6IHJvb20uaWQsXHJcbiAgICAgICAgICByb29taWQ6IHJvb20ucm9vbWlkLFxyXG4gICAgICAgICAgY3JlYXRvcjogcm9vbS5jcmVhdG9yLFxyXG4gICAgICAgICAgbmFtZTogcm9vbS5uYW1lLFxyXG4gICAgICAgICAgY292ZXI6IHJvb20ucGljX3VybCxcclxuICAgICAgICAgIG1lbWViZXJzOiBtZW1iZXJzW2luZGV4XSxcclxuICAgICAgICAgIGFubm91bmNlbWVudDogcm9vbS5hbm5vdW5jZW1lbnRcclxuICAgICAgICB9KSlcclxuICAgICAgICB0aGlzLiRhcHBseSgpXHJcbiAgICAgICAgd2VweS5oaWRlTG9hZGluZygpXHJcbiAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICBsb2cuZXJyb3Ioe1xyXG4gICAgICAgICAgcGFnZTogJ2NoYXRyb29tcycsXHJcbiAgICAgICAgICBvcHI6ICdpbml0JyxcclxuICAgICAgICAgIGluZm86IGVcclxuICAgICAgICB9KVxyXG4gICAgICAgIHdlcHkubmF2aWdhdGVUbyh7XHJcbiAgICAgICAgICB1cmw6ICcvcGFnZXMvcmVnaXN0ZXInXHJcbiAgICAgICAgfSlcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuIl19