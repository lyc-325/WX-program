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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoYXRyb29tcy5qcyJdLCJuYW1lcyI6WyJsb2ciLCJjaGF0cm9vbUFwaSIsImFwaSIsIkNoYXRyb29tcyIsInVzZXIiLCJzdGF0ZSIsImNvbW1vbiIsIm5pbSIsImZyaWVuZHMiLCJtc2dzIiwiY2hhdCIsInNldFVzZXIiLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiZGF0YSIsInJvb21zIiwibWV0aG9kcyIsInRvQ2hhdHJvb20iLCJyb29tIiwiaWQiLCJyb29taWQiLCJjcmVhdG9yIiwibmF2aWdhdGVUbyIsInVybCIsInNob3dMb2FkaW5nIiwiY29uc29sZSIsImxvZ2luIiwiY29kZSIsInJlcXVlc3QiLCJhcHBJZCIsImFwcFNlY3JldGUiLCJvcGVuaWQiLCJnZXRVc2VySW5mbyIsInVzZXJJbmZvIiwicGFzc3dvcmQiLCJ0YWtlTGFzdCIsImFjY2lkIiwidG9Mb3dlckNhc2UiLCJ0b2tlbiIsImdldFRva2VuIiwidXNlcklkIiwiVG9rZW4iLCJFcnJvciIsImpmVG9rZW4iLCJuaW1Ub2tlbiIsInVzZXJEYXRhIiwiZ2V0TGlzdCIsImlkcyIsIm1hcCIsInByb3AiLCJnZXRDaGF0cm9vbXMiLCJjaGF0cm9vbXMiLCJtZW1iZXJzIiwicm9vbUxpc3QiLCJ2YWxpZCIsInJvb21BcnIiLCJmaWx0ZXIiLCJpbmRleCIsIm5hbWUiLCJjb3ZlciIsInBpY191cmwiLCJtZW1lYmVycyIsImFubm91bmNlbWVudCIsIiRhcHBseSIsImhpZGVMb2FkaW5nIiwiZXJyb3IiLCJwYWdlIiwib3ByIiwiaW5mbyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQWlCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBMUJBOzs7O0FBQ0E7Ozs7QUFDQTs7SUFBWUEsRzs7QUFFWjs7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LHdCLEdBQVcsU0FBWEEsUUFBVztBQUFBLHlCQUFRbkMsS0FBS29DLEtBQWI7QUFBQSxpQjs7QUFDWEMsdUIsR0FBVSxnQkFBRUMsTUFBRixDQUFTSCxRQUFULEVBQW1CdEMsS0FBbkIsQzs7QUFDaEIscUJBQUtBLEtBQUwsR0FBYXdDLFFBQVFQLEdBQVIsQ0FBWSxVQUFDOUIsSUFBRCxFQUFPdUMsS0FBUDtBQUFBLHlCQUFrQjtBQUN6Q3RDLHdCQUFJRCxLQUFLQyxFQURnQztBQUV6Q0MsNEJBQVFGLEtBQUtFLE1BRjRCO0FBR3pDQyw2QkFBU0gsS0FBS0csT0FIMkI7QUFJekNxQywwQkFBTXhDLEtBQUt3QyxJQUo4QjtBQUt6Q0MsMkJBQU96QyxLQUFLMEMsT0FMNkI7QUFNekNDLDhCQUFVVCxRQUFRSyxLQUFSLENBTitCO0FBT3pDSyxrQ0FBYzVDLEtBQUs0QztBQVBzQixtQkFBbEI7QUFBQSxpQkFBWixDQUFiO0FBU0FyQyx3QkFBUXpCLEdBQVIsQ0FBWSxLQUFLZSxLQUFqQjtBQUNBLHFCQUFLZ0QsTUFBTDtBQUNBLCtCQUFLQyxXQUFMOzs7Ozs7OztBQUVBaEUsb0JBQUlpRSxLQUFKLENBQVU7QUFDUkMsd0JBQU0sV0FERTtBQUVSQyx1QkFBSyxNQUZHO0FBR1JDO0FBSFEsaUJBQVY7QUFLQSwrQkFBSzlDLFVBQUwsQ0FBZ0I7QUFDZEMsdUJBQUs7QUFEUyxpQkFBaEI7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQWhJaUMsZUFBSzJDLEk7a0JBQXZCL0QsUyIsImZpbGUiOiJjaGF0cm9vbXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuICAvLyBjb25zdCBnZXRGcmllbmQgPSBmdW5jdGlvbihmcmllbmQpIHtcclxuICAvLyAgIHJldHVybiB7XHJcbiAgLy8gICAgIG5pY2tuYW1lOiBmcmllbmQubmljayxcclxuICAvLyAgICAgYXZhdGFyOiBmcmllbmQuYXZhdGFyLFxyXG4gIC8vICAgICBhY2NpZDogZnJpZW5kLmFjY291bnRcclxuICAvLyAgIH1cclxuICAvLyB9XHJcblxyXG4gIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXHJcbiAgaW1wb3J0IFIgZnJvbSAnLi4vbGlicy9yYW1kYSdcclxuICBpbXBvcnQgKiBhcyBsb2cgZnJvbSAnLi4vdXRpbHMvbG9nJ1xyXG5cclxuICBpbXBvcnQge1xyXG4gICAgd3ggYXMgY29uZmlnXHJcbiAgfSBmcm9tICcuLi9jb25maWcnXHJcblxyXG4gIGltcG9ydCBOSU0gZnJvbSAnLi4vdXRpbHMvbmltJ1xyXG5cclxuICBpbXBvcnQge1xyXG4gICAgc2V0VXNlclxyXG4gICAgLy8gc2V0TmltXHJcbiAgfSBmcm9tICcuLi9hY3Rpb25zL2NvbW1vbidcclxuXHJcbiAgLy8gaW1wb3J0IHtcclxuICAvLyAgIHJlZnJlc2hTZXNzaW9uc1xyXG4gIC8vIH0gZnJvbSAnLi4vYWN0aW9ucy9zZXNzaW9ucydcclxuICAvL1xyXG4gIC8vIGltcG9ydCB7XHJcbiAgLy8gICByZWZyZXNoRnJpZW5kc1xyXG4gIC8vIH0gZnJvbSAnLi4vYWN0aW9ucy9mcmllbmRzJ1xyXG4gIC8vXHJcbiAgLy8gaW1wb3J0IHtcclxuICAvLyAgIHJlZnJlc2hNc2dzLFxyXG4gIC8vICAgcmVmcmVzaE1zZ3NCeVRvXHJcbiAgLy8gfSBmcm9tICcuLi9hY3Rpb25zL2NoYXQnXHJcblxyXG4gIGltcG9ydCB7XHJcbiAgICBjb25uZWN0XHJcbiAgfSBmcm9tICd3ZXB5LXJlZHV4J1xyXG5cclxuICBpbXBvcnQgKiBhcyBjaGF0cm9vbUFwaSBmcm9tICcuLi9hcGlzL2NoYXRyb29tJ1xyXG4gIGltcG9ydCAqIGFzIGFwaSBmcm9tICcuLi9hcGlzL2FjY291bnQnXHJcblxyXG4gIEBjb25uZWN0KHtcclxuICAgIHVzZXI6IHN0YXRlID0+IHN0YXRlLmNvbW1vbi51c2VyLFxyXG4gICAgbmltOiBzdGF0ZSA9PiBzdGF0ZS5jb21tb24ubmltLFxyXG4gICAgZnJpZW5kczogc3RhdGUgPT4gc3RhdGUuZnJpZW5kcy5mcmllbmRzLFxyXG4gICAgbXNnczogc3RhdGUgPT4gc3RhdGUuY2hhdC5tc2dzXHJcbiAgfSwge1xyXG4gICAgc2V0VXNlclxyXG4vLyAgIHNldE5pbSxcclxuLy8gICByZWZyZXNoRnJpZW5kcyxcclxuLy8gICByZWZyZXNoU2Vzc2lvbnMsXHJcbi8vICAgcmVmcmVzaE1zZ3MsXHJcbi8vICAgcmVmcmVzaE1zZ3NCeVRvXHJcbiAgfSlcclxuICBleHBvcnQgZGVmYXVsdCBjbGFzcyBDaGF0cm9vbXMgZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xyXG4gICAgY29uZmlnID0ge1xyXG4gICAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn6IGK5aSp5a6kJ1xyXG4gICAgfVxyXG5cclxuICAgIGRhdGEgPSB7XHJcbiAgICAgIHJvb21zOiBbXVxyXG4gICAgfVxyXG5cclxuICAgIG1ldGhvZHMgPSB7XHJcbiAgICAgIC8vIHB1c2hNc2c6IGZ1bmN0aW9uIChtc2dzKSB7XHJcbiAgICAgIC8vICAgY29uc3QgeyByZWZyZXNoTXNncywgcmVmcmVzaE1zZ3NCeVRvIH0gPSB0aGlzLm1ldGhvZHNcclxuICAgICAgLy8gICBjb25zdCB7IG1lcmdlTXNncyB9ID0gdGhpcy5uaW1cclxuICAgICAgLy8gICBpZiAoIUFycmF5LmlzQXJyYXkobXNncykpIHtcclxuICAgICAgLy8gICAgIG1zZ3MgPSBbbXNnc11cclxuICAgICAgLy8gICB9XHJcbiAgICAgIC8vICAgY29uc3Qgc2Vzc2lvbklkID0gbXNnc1swXS5zZXNzaW9uSWRcclxuICAgICAgLy8gICBjb25zdCB0byA9IG1zZ3NbMF0udGFyZ2V0XHJcbiAgICAgIC8vICAgY29uc3QgbWVyZ2VkID0gbWVyZ2VNc2dzKHRoaXMubXNnc1tzZXNzaW9uSWRdIHx8IFtdLCBtc2dzKVxyXG4gICAgICAvLyAgIGNvbnN0IG1lcmdlZEJ5VG8gPSBtZXJnZU1zZ3ModGhpcy5tc2dzW3RvXSB8fCBbXSwgbXNncylcclxuICAgICAgLy8gICByZWZyZXNoTXNncyhzZXNzaW9uSWQsIG1lcmdlZClcclxuICAgICAgLy8gICByZWZyZXNoTXNnc0J5VG8odG8sIG1lcmdlZEJ5VG8pXHJcbiAgICAgIC8vIH0sXHJcbiAgICAgIHRvQ2hhdHJvb206IGZ1bmN0aW9uKHJvb20pIHtcclxuICAgICAgICBjb25zdCBpZCA9IHJvb20uaWRcclxuICAgICAgICBjb25zdCByb29taWQgPSByb29tLnJvb21pZFxyXG4gICAgICAgIGNvbnN0IGNyZWF0b3IgPSByb29tLmNyZWF0b3JcclxuICAgICAgICB3ZXB5Lm5hdmlnYXRlVG8oe1xyXG4gICAgICAgICAgdXJsOiBgL3BhZ2VzL2NoYXRyb29tP2lkPSR7aWR9JnJvb21pZD0ke3Jvb21pZH0mY3JlYXRvcj0ke2NyZWF0b3J9YFxyXG4gICAgICAgIH0pXHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBhc3luYyBvbkxvYWQoKSB7XHJcbiAgICAgIGNvbnN0IHsgc2V0VXNlciB9ID0gdGhpcy5tZXRob2RzXHJcbiAgICAgIC8vIGNvbnN0IHB1c2hNc2cgPSB0aGlzLm1ldGhvZHMucHVzaE1zZy5iaW5kKHRoaXMpXHJcbiAgICAgIHdlcHkuc2hvd0xvYWRpbmcoKVxyXG4gICAgICBjb25zb2xlLmxvZygndGhpcyBpcyBjaGFydFJvb20nKVxyXG4gICAgICBjb25zdCB7IGNvZGUgfSA9IGF3YWl0IHdlcHkubG9naW4oKVxyXG4gICAgICBjb25zdCB7IGRhdGEgfSA9IGF3YWl0IHdlcHkucmVxdWVzdCh7XHJcbiAgICAgICAgdXJsOiBgaHR0cHM6Ly9hcGkud2VpeGluLnFxLmNvbS9zbnMvanNjb2RlMnNlc3Npb24/YXBwaWQ9JHtjb25maWcuYXBwSWR9JnNlY3JldD0ke2NvbmZpZy5hcHBTZWNyZXRlfSZqc19jb2RlPSR7Y29kZX0mZ3JhbnRfdHlwZT1hdXRob3JpemF0aW9uX2NvZGVgXHJcbiAgICAgIH0pXHJcbiAgICAgIGNvbnN0IHsgb3BlbmlkIH0gPSBkYXRhXHJcbiAgICAgIGNvbnN0IHsgdXNlckluZm8gfSA9IGF3YWl0IHdlcHkuZ2V0VXNlckluZm8oKVxyXG5cclxuICAgICAgY29uc3QgcGFzc3dvcmQgPSBSLnRha2VMYXN0KDUpKG9wZW5pZClcclxuXHJcbiAgICAgIGNvbnN0IHVzZXIgPSB7XHJcbiAgICAgICAgLi4udXNlckluZm8sXHJcbiAgICAgICAgYWNjaWQ6IG9wZW5pZC50b0xvd2VyQ2FzZSgpXHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHNldFVzZXIodXNlcilcclxuICAgICAgLy8g5aaC5p6c55So5oi35bCa5pyq5ZyoIOe9keaYk+S6keazqOWGjCDliJnlhYjms6jlhoxcclxuICAgICAgdHJ5IHtcclxuICAgICAgICBjb25zdCB0b2tlbiA9IGF3YWl0IE5JTS5sb2dpbihvcGVuaWQpXHJcbiAgICAgICAgY29uc3QgdXNlcklkID0gYXdhaXQgYXBpLmdldFRva2VuKG9wZW5pZCwgcGFzc3dvcmQudG9Mb3dlckNhc2UoKSlcclxuICAgICAgICBjb25zdCB7VG9rZW59ID0gdXNlcklkXHJcblxyXG4gICAgICAgIGlmICghVG9rZW4pIHtcclxuICAgICAgICAgIHRocm93IG5ldyBFcnJvcigndXNlciBub3QgZXhpc3QnKVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgc2V0VXNlcih7XHJcbiAgICAgICAgICAuLi50aGlzLnVzZXIsXHJcbiAgICAgICAgICBqZlRva2VuOiBUb2tlbixcclxuICAgICAgICAgIG5pbVRva2VuOiB0b2tlbixcclxuICAgICAgICAgIHVzZXJEYXRhOiB1c2VySWRcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICAvLyDliJ3lp4vljJYgbmltIOWvueixoVxyXG4gICAgICAgIC8vIGNvbnN0IG5pbSA9IE5JTS5nZXRJbnN0YW5jZSh7XHJcbiAgICAgICAgLy8gICBhY2NvdW50OiB0aGlzLnVzZXIuYWNjaWQsXHJcbiAgICAgICAgLy8gICB0b2tlbjogdG9rZW4sXHJcbiAgICAgICAgLy8gICBkZWJ1ZzogdHJ1ZSxcclxuICAgICAgICAvLyAgIG9udXNlcnM6IGZyaWVuZHMgPT4ge1xyXG4gICAgICAgIC8vICAgICByZWZyZXNoRnJpZW5kcyhmcmllbmRzLm1hcChnZXRGcmllbmQpKVxyXG4gICAgICAgIC8vICAgICB0aGlzLiRhcHBseSgpXHJcbiAgICAgICAgLy8gICB9LFxyXG4gICAgICAgIC8vICAgb25zZXNzaW9uczogc2Vzc2lvbnMgPT4ge1xyXG4gICAgICAgIC8vICAgICBjb25zdCBtZXJnZWQgPSBuaW0ubWVyZ2VTZXNzaW9ucyh0aGlzLnNlc3Npb25zLCBzZXNzaW9ucylcclxuICAgICAgICAvLyAgICAgcmVmcmVzaFNlc3Npb25zKG1lcmdlZClcclxuICAgICAgICAvLyAgICAgdGhpcy4kYXBwbHkoKVxyXG4gICAgICAgIC8vICAgfSxcclxuICAgICAgICAvLyAgIG9udXBkYXRlc2Vzc2lvbjogc2Vzc2lvbiA9PiB7XHJcbiAgICAgICAgLy8gICAgIGNvbnN0IG1lcmdlZCA9IG5pbS5tZXJnZVNlc3Npb25zKHRoaXMuc2Vzc2lvbnMsIHNlc3Npb24pXHJcbiAgICAgICAgLy8gICAgIHJlZnJlc2hTZXNzaW9ucyhtZXJnZWQpXHJcbiAgICAgICAgLy8gICAgIHRoaXMuJGFwcGx5KClcclxuICAgICAgICAvLyAgIH0sXHJcbiAgICAgICAgLy8gICBvbm1zZzogbXNnID0+IHtcclxuICAgICAgICAvLyAgICAgcHVzaE1zZyhtc2cpXHJcbiAgICAgICAgLy8gICAgIHRoaXMuJGFwcGx5KClcclxuICAgICAgICAvLyAgIH0sXHJcbiAgICAgICAgLy8gICBvbnJvYW1pbmdtc2dzOiBvYmogPT4ge1xyXG4gICAgICAgIC8vICAgICBwdXNoTXNnKG9iai5tc2dzKVxyXG4gICAgICAgIC8vICAgfSxcclxuICAgICAgICAvLyAgIG9ub2ZmbGluZW1zZ3M6IG9iaiA9PiB7XHJcbiAgICAgICAgLy8gICAgIHB1c2hNc2cob2JqLm1zZ3MpXHJcbiAgICAgICAgLy8gICB9XHJcbiAgICAgICAgLy8gfSlcclxuICAgICAgICAvL1xyXG4gICAgICAgIC8vIHNldE5pbShuaW0pXHJcblxyXG4gICAgICAgIC8vIOaLieWPluiBiuWkqeWupOWIl+ihqFxyXG4gICAgICAgIGNvbnN0IHJvb21zID0gYXdhaXQgY2hhdHJvb21BcGkuZ2V0TGlzdCgpXHJcbiAgICAgICAgY29uc3QgaWRzID0gcm9vbXMubWFwKFIucHJvcCgncm9vbWlkJykpXHJcbiAgICAgICAgY29uc3QgY2hhdHJvb21zID0gYXdhaXQgTklNLmdldENoYXRyb29tcyhpZHMpXHJcbiAgICAgICAgY29uc3QgbWVtYmVycyA9IGNoYXRyb29tcy5tYXAoUi5wcm9wKCdvbmxpbmV1c2VyY291bnQnKSlcclxuICAgICAgICBjb25zdCByb29tTGlzdCA9IHJvb20gPT4gcm9vbS52YWxpZFxyXG4gICAgICAgIGNvbnN0IHJvb21BcnIgPSBSLmZpbHRlcihyb29tTGlzdCkocm9vbXMpXHJcbiAgICAgICAgdGhpcy5yb29tcyA9IHJvb21BcnIubWFwKChyb29tLCBpbmRleCkgPT4gKHtcclxuICAgICAgICAgIGlkOiByb29tLmlkLFxyXG4gICAgICAgICAgcm9vbWlkOiByb29tLnJvb21pZCxcclxuICAgICAgICAgIGNyZWF0b3I6IHJvb20uY3JlYXRvcixcclxuICAgICAgICAgIG5hbWU6IHJvb20ubmFtZSxcclxuICAgICAgICAgIGNvdmVyOiByb29tLnBpY191cmwsXHJcbiAgICAgICAgICBtZW1lYmVyczogbWVtYmVyc1tpbmRleF0sXHJcbiAgICAgICAgICBhbm5vdW5jZW1lbnQ6IHJvb20uYW5ub3VuY2VtZW50XHJcbiAgICAgICAgfSkpXHJcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5yb29tcylcclxuICAgICAgICB0aGlzLiRhcHBseSgpXHJcbiAgICAgICAgd2VweS5oaWRlTG9hZGluZygpXHJcbiAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICBsb2cuZXJyb3Ioe1xyXG4gICAgICAgICAgcGFnZTogJ2NoYXRyb29tcycsXHJcbiAgICAgICAgICBvcHI6ICdpbml0JyxcclxuICAgICAgICAgIGluZm86IGVcclxuICAgICAgICB9KVxyXG4gICAgICAgIHdlcHkubmF2aWdhdGVUbyh7XHJcbiAgICAgICAgICB1cmw6ICcvcGFnZXMvcmVnaXN0ZXInXHJcbiAgICAgICAgfSlcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuIl19