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
        var setUser, _ref3, code, _ref4, data, openid, _ref5, userInfo, password, user, token, Token, rooms, ids, chatrooms, members;

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
                return _wepy2.default.request({
                  url: 'https://api.weixin.qq.com/sns/jscode2session?appid=' + _config.wx.appId + '&secret=' + _config.wx.appSecrete + '&js_code=' + code + '&grant_type=authorization_code'
                });

              case 8:
                _ref4 = _context.sent;
                data = _ref4.data;
                openid = data.openid;
                _context.next = 13;
                return _wepy2.default.getUserInfo();

              case 13:
                _ref5 = _context.sent;
                userInfo = _ref5.userInfo;
                password = _ramda2.default.takeLast(5)(openid);
                user = (0, _extends3.default)({}, userInfo, {
                  accid: openid.toLowerCase()
                });


                setUser(user);
                // 如果用户尚未在 网易云注册 则先注册
                _context.prev = 18;
                _context.next = 21;
                return _nim2.default.login(openid);

              case 21:
                token = _context.sent;
                _context.next = 24;
                return api.getToken(openid, password.toLowerCase());

              case 24:
                Token = _context.sent;

                if (Token) {
                  _context.next = 27;
                  break;
                }

                throw new Error('user not exist');

              case 27:

                setUser((0, _extends3.default)({}, this.user, {
                  jfToken: Token,
                  nimToken: token
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

                this.rooms = rooms.map(function (room, index) {
                  return {
                    id: room.roomid,
                    name: room.name,
                    cover: room.pic_url,
                    memebers: members[index]
                  };
                });
                this.$apply();
                _wepy2.default.hideLoading();
                _context.next = 45;
                break;

              case 41:
                _context.prev = 41;
                _context.t0 = _context['catch'](18);

                log.error({
                  page: 'chatrooms',
                  opr: 'init',
                  info: _context.t0
                });
                _wepy2.default.navigateTo({
                  url: '/pages/register'
                });

              case 45:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this, [[18, 41]]);
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoYXRyb29tcy5qcyJdLCJuYW1lcyI6WyJsb2ciLCJjaGF0cm9vbUFwaSIsImFwaSIsIkNoYXRyb29tcyIsInVzZXIiLCJzdGF0ZSIsImNvbW1vbiIsIm5pbSIsImZyaWVuZHMiLCJtc2dzIiwiY2hhdCIsInNldFVzZXIiLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiZGF0YSIsInJvb21zIiwibWV0aG9kcyIsInRvQ2hhdHJvb20iLCJpbmRleCIsImlkIiwiY29uc29sZSIsIm5hdmlnYXRlVG8iLCJ1cmwiLCJzaG93TG9hZGluZyIsImxvZ2luIiwiY29kZSIsInJlcXVlc3QiLCJhcHBJZCIsImFwcFNlY3JldGUiLCJvcGVuaWQiLCJnZXRVc2VySW5mbyIsInVzZXJJbmZvIiwicGFzc3dvcmQiLCJ0YWtlTGFzdCIsImFjY2lkIiwidG9Mb3dlckNhc2UiLCJ0b2tlbiIsImdldFRva2VuIiwiVG9rZW4iLCJFcnJvciIsImpmVG9rZW4iLCJuaW1Ub2tlbiIsImdldExpc3QiLCJpZHMiLCJtYXAiLCJwcm9wIiwiZ2V0Q2hhdHJvb21zIiwiY2hhdHJvb21zIiwibWVtYmVycyIsInJvb20iLCJyb29taWQiLCJuYW1lIiwiY292ZXIiLCJwaWNfdXJsIiwibWVtZWJlcnMiLCIkYXBwbHkiLCJoaWRlTG9hZGluZyIsImVycm9yIiwicGFnZSIsIm9wciIsImluZm8iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFpQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQTFCQTs7OztBQUNBOzs7O0FBQ0E7O0lBQVlBLEc7O0FBRVo7O0FBSUE7Ozs7QUFFQTs7QUFrQkE7O0FBSUE7O0lBQVlDLFc7O0FBQ1o7O0lBQVlDLEc7Ozs7OztJQWVTQyxTLFdBYnBCLHdCQUFRO0FBQ1BDLFFB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QixtQkFBbEI7QUFBQSxpQkFBVixDQUFiO0FBTUEscUJBQUtxQyxNQUFMO0FBQ0EsK0JBQUtDLFdBQUw7Ozs7Ozs7O0FBRUF4RCxvQkFBSXlELEtBQUosQ0FBVTtBQUNSQyx3QkFBTSxXQURFO0FBRVJDLHVCQUFLLE1BRkc7QUFHUkM7QUFIUSxpQkFBVjtBQUtBLCtCQUFLdkMsVUFBTCxDQUFnQjtBQUNkQyx1QkFBSztBQURTLGlCQUFoQjs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBdEhpQyxlQUFLb0MsSTtrQkFBdkJ2RCxTIiwiZmlsZSI6ImNoYXRyb29tcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuLy8gY29uc3QgZ2V0RnJpZW5kID0gZnVuY3Rpb24oZnJpZW5kKSB7XG4vLyAgIHJldHVybiB7XG4vLyAgICAgbmlja25hbWU6IGZyaWVuZC5uaWNrLFxuLy8gICAgIGF2YXRhcjogZnJpZW5kLmF2YXRhcixcbi8vICAgICBhY2NpZDogZnJpZW5kLmFjY291bnRcbi8vICAgfVxuLy8gfVxuXG5pbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuaW1wb3J0IFIgZnJvbSAnLi4vbGlicy9yYW1kYSdcbmltcG9ydCAqIGFzIGxvZyBmcm9tICcuLi91dGlscy9sb2cnXG5cbmltcG9ydCB7XG4gIHd4IGFzIGNvbmZpZ1xufSBmcm9tICcuLi9jb25maWcnXG5cbmltcG9ydCBOSU0gZnJvbSAnLi4vdXRpbHMvbmltJ1xuXG5pbXBvcnQge1xuICBzZXRVc2VyXG4gIC8vIHNldE5pbVxufSBmcm9tICcuLi9hY3Rpb25zL2NvbW1vbidcblxuLy8gaW1wb3J0IHtcbi8vICAgcmVmcmVzaFNlc3Npb25zXG4vLyB9IGZyb20gJy4uL2FjdGlvbnMvc2Vzc2lvbnMnXG4vL1xuLy8gaW1wb3J0IHtcbi8vICAgcmVmcmVzaEZyaWVuZHNcbi8vIH0gZnJvbSAnLi4vYWN0aW9ucy9mcmllbmRzJ1xuLy9cbi8vIGltcG9ydCB7XG4vLyAgIHJlZnJlc2hNc2dzLFxuLy8gICByZWZyZXNoTXNnc0J5VG9cbi8vIH0gZnJvbSAnLi4vYWN0aW9ucy9jaGF0J1xuXG5pbXBvcnQge1xuICBjb25uZWN0XG59IGZyb20gJ3dlcHktcmVkdXgnXG5cbmltcG9ydCAqIGFzIGNoYXRyb29tQXBpIGZyb20gJy4uL2FwaXMvY2hhdHJvb20nXG5pbXBvcnQgKiBhcyBhcGkgZnJvbSAnLi4vYXBpcy9hY2NvdW50J1xuXG5AY29ubmVjdCh7XG4gIHVzZXI6IHN0YXRlID0+IHN0YXRlLmNvbW1vbi51c2VyLFxuICBuaW06IHN0YXRlID0+IHN0YXRlLmNvbW1vbi5uaW0sXG4gIGZyaWVuZHM6IHN0YXRlID0+IHN0YXRlLmZyaWVuZHMuZnJpZW5kcyxcbiAgbXNnczogc3RhdGUgPT4gc3RhdGUuY2hhdC5tc2dzXG59LCB7XG4gIHNldFVzZXJcbi8vICAgc2V0TmltLFxuLy8gICByZWZyZXNoRnJpZW5kcyxcbi8vICAgcmVmcmVzaFNlc3Npb25zLFxuLy8gICByZWZyZXNoTXNncyxcbi8vICAgcmVmcmVzaE1zZ3NCeVRvXG59KVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2hhdHJvb21zIGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgY29uZmlnID0ge1xuICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICfogYrlpKnlrqQnXG4gIH1cblxuICBkYXRhID0ge1xuICAgIHJvb21zOiBbXVxuICB9XG5cbiAgbWV0aG9kcyA9IHtcbiAgICAvLyBwdXNoTXNnOiBmdW5jdGlvbiAobXNncykge1xuICAgIC8vICAgY29uc3QgeyByZWZyZXNoTXNncywgcmVmcmVzaE1zZ3NCeVRvIH0gPSB0aGlzLm1ldGhvZHNcbiAgICAvLyAgIGNvbnN0IHsgbWVyZ2VNc2dzIH0gPSB0aGlzLm5pbVxuICAgIC8vICAgaWYgKCFBcnJheS5pc0FycmF5KG1zZ3MpKSB7XG4gICAgLy8gICAgIG1zZ3MgPSBbbXNnc11cbiAgICAvLyAgIH1cbiAgICAvLyAgIGNvbnN0IHNlc3Npb25JZCA9IG1zZ3NbMF0uc2Vzc2lvbklkXG4gICAgLy8gICBjb25zdCB0byA9IG1zZ3NbMF0udGFyZ2V0XG4gICAgLy8gICBjb25zdCBtZXJnZWQgPSBtZXJnZU1zZ3ModGhpcy5tc2dzW3Nlc3Npb25JZF0gfHwgW10sIG1zZ3MpXG4gICAgLy8gICBjb25zdCBtZXJnZWRCeVRvID0gbWVyZ2VNc2dzKHRoaXMubXNnc1t0b10gfHwgW10sIG1zZ3MpXG4gICAgLy8gICByZWZyZXNoTXNncyhzZXNzaW9uSWQsIG1lcmdlZClcbiAgICAvLyAgIHJlZnJlc2hNc2dzQnlUbyh0bywgbWVyZ2VkQnlUbylcbiAgICAvLyB9LFxuICAgIHRvQ2hhdHJvb206IGZ1bmN0aW9uKGluZGV4KSB7XG4gICAgICBjb25zdCBpZCA9IHRoaXMucm9vbXNbaW5kZXhdLmlkXG4gICAgICBjb25zb2xlLmxvZygnY2hhdHJvb21pZCcsIGlkKVxuICAgICAgd2VweS5uYXZpZ2F0ZVRvKHtcbiAgICAgICAgdXJsOiBgL3BhZ2VzL2NoYXRyb29tP2lkPSR7aWR9YFxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICBhc3luYyBvbkxvYWQoKSB7XG4gICAgY29uc3QgeyBzZXRVc2VyIH0gPSB0aGlzLm1ldGhvZHNcbiAgICAvLyBjb25zdCBwdXNoTXNnID0gdGhpcy5tZXRob2RzLnB1c2hNc2cuYmluZCh0aGlzKVxuICAgIHdlcHkuc2hvd0xvYWRpbmcoKVxuICAgIGNvbnN0IHsgY29kZSB9ID0gYXdhaXQgd2VweS5sb2dpbigpXG4gICAgY29uc3QgeyBkYXRhIH0gPSBhd2FpdCB3ZXB5LnJlcXVlc3Qoe1xuICAgICAgdXJsOiBgaHR0cHM6Ly9hcGkud2VpeGluLnFxLmNvbS9zbnMvanNjb2RlMnNlc3Npb24/YXBwaWQ9JHtjb25maWcuYXBwSWR9JnNlY3JldD0ke2NvbmZpZy5hcHBTZWNyZXRlfSZqc19jb2RlPSR7Y29kZX0mZ3JhbnRfdHlwZT1hdXRob3JpemF0aW9uX2NvZGVgXG4gICAgfSlcbiAgICBjb25zdCB7IG9wZW5pZCB9ID0gZGF0YVxuICAgIGNvbnN0IHsgdXNlckluZm8gfSA9IGF3YWl0IHdlcHkuZ2V0VXNlckluZm8oKVxuXG4gICAgY29uc3QgcGFzc3dvcmQgPSBSLnRha2VMYXN0KDUpKG9wZW5pZClcblxuICAgIGNvbnN0IHVzZXIgPSB7XG4gICAgICAuLi51c2VySW5mbyxcbiAgICAgIGFjY2lkOiBvcGVuaWQudG9Mb3dlckNhc2UoKVxuICAgIH1cblxuICAgIHNldFVzZXIodXNlcilcbiAgICAvLyDlpoLmnpznlKjmiLflsJrmnKrlnKgg572R5piT5LqR5rOo5YaMIOWImeWFiOazqOWGjFxuICAgIHRyeSB7XG4gICAgICBjb25zdCB0b2tlbiA9IGF3YWl0IE5JTS5sb2dpbihvcGVuaWQpXG4gICAgICBjb25zdCBUb2tlbiA9IGF3YWl0IGFwaS5nZXRUb2tlbihvcGVuaWQsIHBhc3N3b3JkLnRvTG93ZXJDYXNlKCkpXG5cbiAgICAgIGlmICghVG9rZW4pIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCd1c2VyIG5vdCBleGlzdCcpXG4gICAgICB9XG5cbiAgICAgIHNldFVzZXIoe1xuICAgICAgICAuLi50aGlzLnVzZXIsXG4gICAgICAgIGpmVG9rZW46IFRva2VuLFxuICAgICAgICBuaW1Ub2tlbjogdG9rZW5cbiAgICAgIH0pXG5cbiAgICAgIC8vIOWIneWni+WMliBuaW0g5a+56LGhXG4gICAgICAvLyBjb25zdCBuaW0gPSBOSU0uZ2V0SW5zdGFuY2Uoe1xuICAgICAgLy8gICBhY2NvdW50OiB0aGlzLnVzZXIuYWNjaWQsXG4gICAgICAvLyAgIHRva2VuOiB0b2tlbixcbiAgICAgIC8vICAgZGVidWc6IHRydWUsXG4gICAgICAvLyAgIG9udXNlcnM6IGZyaWVuZHMgPT4ge1xuICAgICAgLy8gICAgIHJlZnJlc2hGcmllbmRzKGZyaWVuZHMubWFwKGdldEZyaWVuZCkpXG4gICAgICAvLyAgICAgdGhpcy4kYXBwbHkoKVxuICAgICAgLy8gICB9LFxuICAgICAgLy8gICBvbnNlc3Npb25zOiBzZXNzaW9ucyA9PiB7XG4gICAgICAvLyAgICAgY29uc3QgbWVyZ2VkID0gbmltLm1lcmdlU2Vzc2lvbnModGhpcy5zZXNzaW9ucywgc2Vzc2lvbnMpXG4gICAgICAvLyAgICAgcmVmcmVzaFNlc3Npb25zKG1lcmdlZClcbiAgICAgIC8vICAgICB0aGlzLiRhcHBseSgpXG4gICAgICAvLyAgIH0sXG4gICAgICAvLyAgIG9udXBkYXRlc2Vzc2lvbjogc2Vzc2lvbiA9PiB7XG4gICAgICAvLyAgICAgY29uc3QgbWVyZ2VkID0gbmltLm1lcmdlU2Vzc2lvbnModGhpcy5zZXNzaW9ucywgc2Vzc2lvbilcbiAgICAgIC8vICAgICByZWZyZXNoU2Vzc2lvbnMobWVyZ2VkKVxuICAgICAgLy8gICAgIHRoaXMuJGFwcGx5KClcbiAgICAgIC8vICAgfSxcbiAgICAgIC8vICAgb25tc2c6IG1zZyA9PiB7XG4gICAgICAvLyAgICAgcHVzaE1zZyhtc2cpXG4gICAgICAvLyAgICAgdGhpcy4kYXBwbHkoKVxuICAgICAgLy8gICB9LFxuICAgICAgLy8gICBvbnJvYW1pbmdtc2dzOiBvYmogPT4ge1xuICAgICAgLy8gICAgIHB1c2hNc2cob2JqLm1zZ3MpXG4gICAgICAvLyAgIH0sXG4gICAgICAvLyAgIG9ub2ZmbGluZW1zZ3M6IG9iaiA9PiB7XG4gICAgICAvLyAgICAgcHVzaE1zZyhvYmoubXNncylcbiAgICAgIC8vICAgfVxuICAgICAgLy8gfSlcbiAgICAgIC8vXG4gICAgICAvLyBzZXROaW0obmltKVxuXG4gICAgICAvLyDmi4nlj5bogYrlpKnlrqTliJfooahcbiAgICAgIGNvbnN0IHJvb21zID0gYXdhaXQgY2hhdHJvb21BcGkuZ2V0TGlzdCgpXG4gICAgICBjb25zdCBpZHMgPSByb29tcy5tYXAoUi5wcm9wKCdyb29taWQnKSlcbiAgICAgIGNvbnN0IGNoYXRyb29tcyA9IGF3YWl0IE5JTS5nZXRDaGF0cm9vbXMoaWRzKVxuICAgICAgY29uc3QgbWVtYmVycyA9IGNoYXRyb29tcy5tYXAoUi5wcm9wKCdvbmxpbmV1c2VyY291bnQnKSlcbiAgICAgIHRoaXMucm9vbXMgPSByb29tcy5tYXAoKHJvb20sIGluZGV4KSA9PiAoe1xuICAgICAgICBpZDogcm9vbS5yb29taWQsXG4gICAgICAgIG5hbWU6IHJvb20ubmFtZSxcbiAgICAgICAgY292ZXI6IHJvb20ucGljX3VybCxcbiAgICAgICAgbWVtZWJlcnM6IG1lbWJlcnNbaW5kZXhdXG4gICAgICB9KSlcbiAgICAgIHRoaXMuJGFwcGx5KClcbiAgICAgIHdlcHkuaGlkZUxvYWRpbmcoKVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIGxvZy5lcnJvcih7XG4gICAgICAgIHBhZ2U6ICdjaGF0cm9vbXMnLFxuICAgICAgICBvcHI6ICdpbml0JyxcbiAgICAgICAgaW5mbzogZVxuICAgICAgfSlcbiAgICAgIHdlcHkubmF2aWdhdGVUbyh7XG4gICAgICAgIHVybDogJy9wYWdlcy9yZWdpc3RlcidcbiAgICAgIH0pXG4gICAgfVxuICB9XG59XG4iXX0=