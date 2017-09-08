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
      var _ref2 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee() {
        var setUser, _ref3, code, _ref4, data, openid, _ref5, userInfo, password, user, token, userId, Token, rooms, ids, chatrooms, members, roomList, roomArr;

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
                console.log(this.rooms);
                this.$apply();
                _wepy2.default.hideLoading();
                _context.next = 50;
                break;

              case 46:
                _context.prev = 46;
                _context.t0 = _context['catch'](19);

                log.error({
                  page: 'chatrooms',
                  opr: 'init',
                  info: _context.t0
                });
                _wepy2.default.navigateTo({
                  url: '/pages/register'
                });

              case 50:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this, [[19, 46]]);
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoYXRyb29tcy5qcyJdLCJuYW1lcyI6WyJsb2ciLCJjaGF0cm9vbUFwaSIsImFwaSIsIkNoYXRyb29tcyIsInVzZXIiLCJzdGF0ZSIsImNvbW1vbiIsIm5pbSIsImZyaWVuZHMiLCJtc2dzIiwiY2hhdCIsInNldFVzZXIiLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiZGF0YSIsInJvb21zIiwibWV0aG9kcyIsInRvQ2hhdHJvb20iLCJyb29tIiwiaWQiLCJyb29taWQiLCJjcmVhdG9yIiwibmF2aWdhdGVUbyIsInVybCIsInNob3dMb2FkaW5nIiwiY29uc29sZSIsImxvZ2luIiwiY29kZSIsInJlcXVlc3QiLCJhcHBJZCIsImFwcFNlY3JldGUiLCJvcGVuaWQiLCJnZXRVc2VySW5mbyIsInVzZXJJbmZvIiwicGFzc3dvcmQiLCJ0YWtlTGFzdCIsImFjY2lkIiwidG9Mb3dlckNhc2UiLCJ0b2tlbiIsImdldFRva2VuIiwidXNlcklkIiwiVG9rZW4iLCJFcnJvciIsImpmVG9rZW4iLCJuaW1Ub2tlbiIsInVzZXJEYXRhIiwiZ2V0TGlzdCIsImlkcyIsIm1hcCIsInByb3AiLCJnZXRDaGF0cm9vbXMiLCJjaGF0cm9vbXMiLCJtZW1iZXJzIiwicm9vbUxpc3QiLCJ2YWxpZCIsInJvb21BcnIiLCJmaWx0ZXIiLCJpbmRleCIsIm5hbWUiLCJjb3ZlciIsInBpY191cmwiLCJtZW1lYmVycyIsImFubm91bmNlbWVudCIsIiRhcHBseSIsImhpZGVMb2FkaW5nIiwiZXJyb3IiLCJwYWdlIiwib3ByIiwiaW5mbyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQWlCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBMUJBOzs7O0FBQ0E7Ozs7QUFDQTs7SUFBWUEsRzs7QUFFWjs7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LHdCLEdBQVcsU0FBWEEsUUFBVztBQUFBLHlCQUFRbkMsS0FBS29DLEtBQWI7QUFBQSxpQjs7QUFDWEMsdUIsR0FBVSxnQkFBRUMsTUFBRixDQUFTSCxRQUFULEVBQW1CdEMsS0FBbkIsQzs7QUFDaEIscUJBQUtBLEtBQUwsR0FBYXdDLFFBQVFQLEdBQVIsQ0FBWSxVQUFDOUIsSUFBRCxFQUFPdUMsS0FBUDtBQUFBLHlCQUFrQjtBQUN6Q3RDLHdCQUFJRCxLQUFLQyxFQURnQztBQUV6Q0MsNEJBQVFGLEtBQUtFLE1BRjRCO0FBR3pDQyw2QkFBU0gsS0FBS0csT0FIMkI7QUFJekNxQywwQkFBTXhDLEtBQUt3QyxJQUo4QjtBQUt6Q0MsMkJBQU96QyxLQUFLMEMsT0FMNkI7QUFNekNDLDhCQUFVVCxRQUFRSyxLQUFSLENBTitCO0FBT3pDSyxrQ0FBYzVDLEtBQUs0QztBQVBzQixtQkFBbEI7QUFBQSxpQkFBWixDQUFiO0FBU0FyQyx3QkFBUXpCLEdBQVIsQ0FBWSxLQUFLZSxLQUFqQjtBQUNBLHFCQUFLZ0QsTUFBTDtBQUNBLCtCQUFLQyxXQUFMOzs7Ozs7OztBQUVBaEUsb0JBQUlpRSxLQUFKLENBQVU7QUFDUkMsd0JBQU0sV0FERTtBQUVSQyx1QkFBSyxNQUZHO0FBR1JDO0FBSFEsaUJBQVY7QUFLQSwrQkFBSzlDLFVBQUwsQ0FBZ0I7QUFDZEMsdUJBQUs7QUFEUyxpQkFBaEI7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQWhJaUMsZUFBSzJDLEk7a0JBQXZCL0QsUyIsImZpbGUiOiJjaGF0cm9vbXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgLy8gY29uc3QgZ2V0RnJpZW5kID0gZnVuY3Rpb24oZnJpZW5kKSB7XG4gIC8vICAgcmV0dXJuIHtcbiAgLy8gICAgIG5pY2tuYW1lOiBmcmllbmQubmljayxcbiAgLy8gICAgIGF2YXRhcjogZnJpZW5kLmF2YXRhcixcbiAgLy8gICAgIGFjY2lkOiBmcmllbmQuYWNjb3VudFxuICAvLyAgIH1cbiAgLy8gfVxuXG4gIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG4gIGltcG9ydCBSIGZyb20gJy4uL2xpYnMvcmFtZGEnXG4gIGltcG9ydCAqIGFzIGxvZyBmcm9tICcuLi91dGlscy9sb2cnXG5cbiAgaW1wb3J0IHtcbiAgICB3eCBhcyBjb25maWdcbiAgfSBmcm9tICcuLi9jb25maWcnXG5cbiAgaW1wb3J0IE5JTSBmcm9tICcuLi91dGlscy9uaW0nXG5cbiAgaW1wb3J0IHtcbiAgICBzZXRVc2VyXG4gICAgLy8gc2V0TmltXG4gIH0gZnJvbSAnLi4vYWN0aW9ucy9jb21tb24nXG5cbiAgLy8gaW1wb3J0IHtcbiAgLy8gICByZWZyZXNoU2Vzc2lvbnNcbiAgLy8gfSBmcm9tICcuLi9hY3Rpb25zL3Nlc3Npb25zJ1xuICAvL1xuICAvLyBpbXBvcnQge1xuICAvLyAgIHJlZnJlc2hGcmllbmRzXG4gIC8vIH0gZnJvbSAnLi4vYWN0aW9ucy9mcmllbmRzJ1xuICAvL1xuICAvLyBpbXBvcnQge1xuICAvLyAgIHJlZnJlc2hNc2dzLFxuICAvLyAgIHJlZnJlc2hNc2dzQnlUb1xuICAvLyB9IGZyb20gJy4uL2FjdGlvbnMvY2hhdCdcblxuICBpbXBvcnQge1xuICAgIGNvbm5lY3RcbiAgfSBmcm9tICd3ZXB5LXJlZHV4J1xuXG4gIGltcG9ydCAqIGFzIGNoYXRyb29tQXBpIGZyb20gJy4uL2FwaXMvY2hhdHJvb20nXG4gIGltcG9ydCAqIGFzIGFwaSBmcm9tICcuLi9hcGlzL2FjY291bnQnXG5cbiAgQGNvbm5lY3Qoe1xuICAgIHVzZXI6IHN0YXRlID0+IHN0YXRlLmNvbW1vbi51c2VyLFxuICAgIG5pbTogc3RhdGUgPT4gc3RhdGUuY29tbW9uLm5pbSxcbiAgICBmcmllbmRzOiBzdGF0ZSA9PiBzdGF0ZS5mcmllbmRzLmZyaWVuZHMsXG4gICAgbXNnczogc3RhdGUgPT4gc3RhdGUuY2hhdC5tc2dzXG4gIH0sIHtcbiAgICBzZXRVc2VyXG4vLyAgIHNldE5pbSxcbi8vICAgcmVmcmVzaEZyaWVuZHMsXG4vLyAgIHJlZnJlc2hTZXNzaW9ucyxcbi8vICAgcmVmcmVzaE1zZ3MsXG4vLyAgIHJlZnJlc2hNc2dzQnlUb1xuICB9KVxuICBleHBvcnQgZGVmYXVsdCBjbGFzcyBDaGF0cm9vbXMgZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICAgIGNvbmZpZyA9IHtcbiAgICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICfogYrlpKnlrqQnXG4gICAgfVxuXG4gICAgZGF0YSA9IHtcbiAgICAgIHJvb21zOiBbXVxuICAgIH1cblxuICAgIG1ldGhvZHMgPSB7XG4gICAgICAvLyBwdXNoTXNnOiBmdW5jdGlvbiAobXNncykge1xuICAgICAgLy8gICBjb25zdCB7IHJlZnJlc2hNc2dzLCByZWZyZXNoTXNnc0J5VG8gfSA9IHRoaXMubWV0aG9kc1xuICAgICAgLy8gICBjb25zdCB7IG1lcmdlTXNncyB9ID0gdGhpcy5uaW1cbiAgICAgIC8vICAgaWYgKCFBcnJheS5pc0FycmF5KG1zZ3MpKSB7XG4gICAgICAvLyAgICAgbXNncyA9IFttc2dzXVxuICAgICAgLy8gICB9XG4gICAgICAvLyAgIGNvbnN0IHNlc3Npb25JZCA9IG1zZ3NbMF0uc2Vzc2lvbklkXG4gICAgICAvLyAgIGNvbnN0IHRvID0gbXNnc1swXS50YXJnZXRcbiAgICAgIC8vICAgY29uc3QgbWVyZ2VkID0gbWVyZ2VNc2dzKHRoaXMubXNnc1tzZXNzaW9uSWRdIHx8IFtdLCBtc2dzKVxuICAgICAgLy8gICBjb25zdCBtZXJnZWRCeVRvID0gbWVyZ2VNc2dzKHRoaXMubXNnc1t0b10gfHwgW10sIG1zZ3MpXG4gICAgICAvLyAgIHJlZnJlc2hNc2dzKHNlc3Npb25JZCwgbWVyZ2VkKVxuICAgICAgLy8gICByZWZyZXNoTXNnc0J5VG8odG8sIG1lcmdlZEJ5VG8pXG4gICAgICAvLyB9LFxuICAgICAgdG9DaGF0cm9vbTogZnVuY3Rpb24ocm9vbSkge1xuICAgICAgICBjb25zdCBpZCA9IHJvb20uaWRcbiAgICAgICAgY29uc3Qgcm9vbWlkID0gcm9vbS5yb29taWRcbiAgICAgICAgY29uc3QgY3JlYXRvciA9IHJvb20uY3JlYXRvclxuICAgICAgICB3ZXB5Lm5hdmlnYXRlVG8oe1xuICAgICAgICAgIHVybDogYC9wYWdlcy9jaGF0cm9vbT9pZD0ke2lkfSZyb29taWQ9JHtyb29taWR9JmNyZWF0b3I9JHtjcmVhdG9yfWBcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICBhc3luYyBvbkxvYWQoKSB7XG4gICAgICBjb25zdCB7IHNldFVzZXIgfSA9IHRoaXMubWV0aG9kc1xuICAgICAgLy8gY29uc3QgcHVzaE1zZyA9IHRoaXMubWV0aG9kcy5wdXNoTXNnLmJpbmQodGhpcylcbiAgICAgIHdlcHkuc2hvd0xvYWRpbmcoKVxuICAgICAgY29uc29sZS5sb2coJ3RoaXMgaXMgY2hhcnRSb29tJylcbiAgICAgIGNvbnN0IHsgY29kZSB9ID0gYXdhaXQgd2VweS5sb2dpbigpXG4gICAgICBjb25zdCB7IGRhdGEgfSA9IGF3YWl0IHdlcHkucmVxdWVzdCh7XG4gICAgICAgIHVybDogYGh0dHBzOi8vYXBpLndlaXhpbi5xcS5jb20vc25zL2pzY29kZTJzZXNzaW9uP2FwcGlkPSR7Y29uZmlnLmFwcElkfSZzZWNyZXQ9JHtjb25maWcuYXBwU2VjcmV0ZX0manNfY29kZT0ke2NvZGV9JmdyYW50X3R5cGU9YXV0aG9yaXphdGlvbl9jb2RlYFxuICAgICAgfSlcbiAgICAgIGNvbnN0IHsgb3BlbmlkIH0gPSBkYXRhXG4gICAgICBjb25zdCB7IHVzZXJJbmZvIH0gPSBhd2FpdCB3ZXB5LmdldFVzZXJJbmZvKClcblxuICAgICAgY29uc3QgcGFzc3dvcmQgPSBSLnRha2VMYXN0KDUpKG9wZW5pZClcblxuICAgICAgY29uc3QgdXNlciA9IHtcbiAgICAgICAgLi4udXNlckluZm8sXG4gICAgICAgIGFjY2lkOiBvcGVuaWQudG9Mb3dlckNhc2UoKVxuICAgICAgfVxuXG4gICAgICBzZXRVc2VyKHVzZXIpXG4gICAgICAvLyDlpoLmnpznlKjmiLflsJrmnKrlnKgg572R5piT5LqR5rOo5YaMIOWImeWFiOazqOWGjFxuICAgICAgdHJ5IHtcbiAgICAgICAgY29uc3QgdG9rZW4gPSBhd2FpdCBOSU0ubG9naW4ob3BlbmlkKVxuICAgICAgICBjb25zdCB1c2VySWQgPSBhd2FpdCBhcGkuZ2V0VG9rZW4ob3BlbmlkLCBwYXNzd29yZC50b0xvd2VyQ2FzZSgpKVxuICAgICAgICBjb25zdCB7VG9rZW59ID0gdXNlcklkXG5cbiAgICAgICAgaWYgKCFUb2tlbikge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcigndXNlciBub3QgZXhpc3QnKVxuICAgICAgICB9XG5cbiAgICAgICAgc2V0VXNlcih7XG4gICAgICAgICAgLi4udGhpcy51c2VyLFxuICAgICAgICAgIGpmVG9rZW46IFRva2VuLFxuICAgICAgICAgIG5pbVRva2VuOiB0b2tlbixcbiAgICAgICAgICB1c2VyRGF0YTogdXNlcklkXG4gICAgICAgIH0pXG5cbiAgICAgICAgLy8g5Yid5aeL5YyWIG5pbSDlr7nosaFcbiAgICAgICAgLy8gY29uc3QgbmltID0gTklNLmdldEluc3RhbmNlKHtcbiAgICAgICAgLy8gICBhY2NvdW50OiB0aGlzLnVzZXIuYWNjaWQsXG4gICAgICAgIC8vICAgdG9rZW46IHRva2VuLFxuICAgICAgICAvLyAgIGRlYnVnOiB0cnVlLFxuICAgICAgICAvLyAgIG9udXNlcnM6IGZyaWVuZHMgPT4ge1xuICAgICAgICAvLyAgICAgcmVmcmVzaEZyaWVuZHMoZnJpZW5kcy5tYXAoZ2V0RnJpZW5kKSlcbiAgICAgICAgLy8gICAgIHRoaXMuJGFwcGx5KClcbiAgICAgICAgLy8gICB9LFxuICAgICAgICAvLyAgIG9uc2Vzc2lvbnM6IHNlc3Npb25zID0+IHtcbiAgICAgICAgLy8gICAgIGNvbnN0IG1lcmdlZCA9IG5pbS5tZXJnZVNlc3Npb25zKHRoaXMuc2Vzc2lvbnMsIHNlc3Npb25zKVxuICAgICAgICAvLyAgICAgcmVmcmVzaFNlc3Npb25zKG1lcmdlZClcbiAgICAgICAgLy8gICAgIHRoaXMuJGFwcGx5KClcbiAgICAgICAgLy8gICB9LFxuICAgICAgICAvLyAgIG9udXBkYXRlc2Vzc2lvbjogc2Vzc2lvbiA9PiB7XG4gICAgICAgIC8vICAgICBjb25zdCBtZXJnZWQgPSBuaW0ubWVyZ2VTZXNzaW9ucyh0aGlzLnNlc3Npb25zLCBzZXNzaW9uKVxuICAgICAgICAvLyAgICAgcmVmcmVzaFNlc3Npb25zKG1lcmdlZClcbiAgICAgICAgLy8gICAgIHRoaXMuJGFwcGx5KClcbiAgICAgICAgLy8gICB9LFxuICAgICAgICAvLyAgIG9ubXNnOiBtc2cgPT4ge1xuICAgICAgICAvLyAgICAgcHVzaE1zZyhtc2cpXG4gICAgICAgIC8vICAgICB0aGlzLiRhcHBseSgpXG4gICAgICAgIC8vICAgfSxcbiAgICAgICAgLy8gICBvbnJvYW1pbmdtc2dzOiBvYmogPT4ge1xuICAgICAgICAvLyAgICAgcHVzaE1zZyhvYmoubXNncylcbiAgICAgICAgLy8gICB9LFxuICAgICAgICAvLyAgIG9ub2ZmbGluZW1zZ3M6IG9iaiA9PiB7XG4gICAgICAgIC8vICAgICBwdXNoTXNnKG9iai5tc2dzKVxuICAgICAgICAvLyAgIH1cbiAgICAgICAgLy8gfSlcbiAgICAgICAgLy9cbiAgICAgICAgLy8gc2V0TmltKG5pbSlcblxuICAgICAgICAvLyDmi4nlj5bogYrlpKnlrqTliJfooahcbiAgICAgICAgY29uc3Qgcm9vbXMgPSBhd2FpdCBjaGF0cm9vbUFwaS5nZXRMaXN0KClcbiAgICAgICAgY29uc3QgaWRzID0gcm9vbXMubWFwKFIucHJvcCgncm9vbWlkJykpXG4gICAgICAgIGNvbnN0IGNoYXRyb29tcyA9IGF3YWl0IE5JTS5nZXRDaGF0cm9vbXMoaWRzKVxuICAgICAgICBjb25zdCBtZW1iZXJzID0gY2hhdHJvb21zLm1hcChSLnByb3AoJ29ubGluZXVzZXJjb3VudCcpKVxuICAgICAgICBjb25zdCByb29tTGlzdCA9IHJvb20gPT4gcm9vbS52YWxpZFxuICAgICAgICBjb25zdCByb29tQXJyID0gUi5maWx0ZXIocm9vbUxpc3QpKHJvb21zKVxuICAgICAgICB0aGlzLnJvb21zID0gcm9vbUFyci5tYXAoKHJvb20sIGluZGV4KSA9PiAoe1xuICAgICAgICAgIGlkOiByb29tLmlkLFxuICAgICAgICAgIHJvb21pZDogcm9vbS5yb29taWQsXG4gICAgICAgICAgY3JlYXRvcjogcm9vbS5jcmVhdG9yLFxuICAgICAgICAgIG5hbWU6IHJvb20ubmFtZSxcbiAgICAgICAgICBjb3Zlcjogcm9vbS5waWNfdXJsLFxuICAgICAgICAgIG1lbWViZXJzOiBtZW1iZXJzW2luZGV4XSxcbiAgICAgICAgICBhbm5vdW5jZW1lbnQ6IHJvb20uYW5ub3VuY2VtZW50XG4gICAgICAgIH0pKVxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnJvb21zKVxuICAgICAgICB0aGlzLiRhcHBseSgpXG4gICAgICAgIHdlcHkuaGlkZUxvYWRpbmcoKVxuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBsb2cuZXJyb3Ioe1xuICAgICAgICAgIHBhZ2U6ICdjaGF0cm9vbXMnLFxuICAgICAgICAgIG9wcjogJ2luaXQnLFxuICAgICAgICAgIGluZm86IGVcbiAgICAgICAgfSlcbiAgICAgICAgd2VweS5uYXZpZ2F0ZVRvKHtcbiAgICAgICAgICB1cmw6ICcvcGFnZXMvcmVnaXN0ZXInXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfVxuICB9XG4iXX0=