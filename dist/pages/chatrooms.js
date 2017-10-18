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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoYXRyb29tcy5qcyJdLCJuYW1lcyI6WyJsb2ciLCJjaGF0cm9vbUFwaSIsImFwaSIsIkNoYXRyb29tcyIsInVzZXIiLCJzdGF0ZSIsImNvbW1vbiIsIm5pbSIsImZyaWVuZHMiLCJtc2dzIiwiY2hhdCIsInNldFVzZXIiLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiZGF0YSIsInJvb21zIiwibWV0aG9kcyIsInRvQ2hhdHJvb20iLCJyb29tIiwiaWQiLCJyb29taWQiLCJjcmVhdG9yIiwibmF2aWdhdGVUbyIsInVybCIsInNob3dMb2FkaW5nIiwibG9naW4iLCJjb2RlIiwiZ2V0U2Vzc2lvbiIsImFwcElkIiwiYXBwU2VjcmV0ZSIsIm9wZW5pZCIsImdldFVzZXJJbmZvIiwidXNlckluZm8iLCJwYXNzd29yZCIsInRha2VMYXN0IiwiYWNjaWQiLCJ0b0xvd2VyQ2FzZSIsInRva2VuIiwiZ2V0VG9rZW4iLCJ1c2VySWQiLCJUb2tlbiIsIkVycm9yIiwiamZUb2tlbiIsIm5pbVRva2VuIiwidXNlckRhdGEiLCJnZXRMaXN0IiwiaWRzIiwibWFwIiwicHJvcCIsImdldENoYXRyb29tcyIsImNoYXRyb29tcyIsIm1lbWJlcnMiLCJyb29tTGlzdCIsInZhbGlkIiwicm9vbUFyciIsImZpbHRlciIsImluZGV4IiwibmFtZSIsImNvdmVyIiwicGljX3VybCIsIm1lbWViZXJzIiwiYW5ub3VuY2VtZW50IiwiJGFwcGx5IiwiaGlkZUxvYWRpbmciLCJlcnJvciIsInBhZ2UiLCJvcHIiLCJpbmZvIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBaUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUExQkE7Ozs7QUFDQTs7OztBQUNBOztJQUFZQSxHOztBQUVaOztBQUlBOzs7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QyxNQUFGLENBQVNILFFBQVQsRUFBbUJyQyxLQUFuQixDOztBQUNoQixxQkFBS0EsS0FBTCxHQUFhdUMsUUFBUVAsR0FBUixDQUFZLFVBQUM3QixJQUFELEVBQU9zQyxLQUFQO0FBQUEseUJBQWtCO0FBQ3pDckMsd0JBQUlELEtBQUtDLEVBRGdDO0FBRXpDQyw0QkFBUUYsS0FBS0UsTUFGNEI7QUFHekNDLDZCQUFTSCxLQUFLRyxPQUgyQjtBQUl6Q29DLDBCQUFNdkMsS0FBS3VDLElBSjhCO0FBS3pDQywyQkFBT3hDLEtBQUt5QyxPQUw2QjtBQU16Q0MsOEJBQVVULFFBQVFLLEtBQVIsQ0FOK0I7QUFPekNLLGtDQUFjM0MsS0FBSzJDO0FBUHNCLG1CQUFsQjtBQUFBLGlCQUFaLENBQWI7QUFTQSxxQkFBS0MsTUFBTDtBQUNBLCtCQUFLQyxXQUFMOzs7Ozs7OztBQUVBL0Qsb0JBQUlnRSxLQUFKLENBQVU7QUFDUkMsd0JBQU0sV0FERTtBQUVSQyx1QkFBSyxNQUZHO0FBR1JDO0FBSFEsaUJBQVY7QUFLQSwrQkFBSzdDLFVBQUwsQ0FBZ0I7QUFDZEMsdUJBQUs7QUFEUyxpQkFBaEI7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQWpJaUMsZUFBSzBDLEk7a0JBQXZCOUQsUyIsImZpbGUiOiJjaGF0cm9vbXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuICAvLyBjb25zdCBnZXRGcmllbmQgPSBmdW5jdGlvbihmcmllbmQpIHtcclxuICAvLyAgIHJldHVybiB7XHJcbiAgLy8gICAgIG5pY2tuYW1lOiBmcmllbmQubmljayxcclxuICAvLyAgICAgYXZhdGFyOiBmcmllbmQuYXZhdGFyLFxyXG4gIC8vICAgICBhY2NpZDogZnJpZW5kLmFjY291bnRcclxuICAvLyAgIH1cclxuICAvLyB9XHJcblxyXG4gIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXHJcbiAgaW1wb3J0IFIgZnJvbSAnLi4vbGlicy9yYW1kYSdcclxuICBpbXBvcnQgKiBhcyBsb2cgZnJvbSAnLi4vdXRpbHMvbG9nJ1xyXG5cclxuICBpbXBvcnQge1xyXG4gICAgd3ggYXMgY29uZmlnXHJcbiAgfSBmcm9tICcuLi9jb25maWcnXHJcblxyXG4gIGltcG9ydCBOSU0gZnJvbSAnLi4vdXRpbHMvbmltJ1xyXG5cclxuICBpbXBvcnQge1xyXG4gICAgc2V0VXNlclxyXG4gICAgLy8gc2V0TmltXHJcbiAgfSBmcm9tICcuLi9hY3Rpb25zL2NvbW1vbidcclxuXHJcbiAgLy8gaW1wb3J0IHtcclxuICAvLyAgIHJlZnJlc2hTZXNzaW9uc1xyXG4gIC8vIH0gZnJvbSAnLi4vYWN0aW9ucy9zZXNzaW9ucydcclxuICAvL1xyXG4gIC8vIGltcG9ydCB7XHJcbiAgLy8gICByZWZyZXNoRnJpZW5kc1xyXG4gIC8vIH0gZnJvbSAnLi4vYWN0aW9ucy9mcmllbmRzJ1xyXG4gIC8vXHJcbiAgLy8gaW1wb3J0IHtcclxuICAvLyAgIHJlZnJlc2hNc2dzLFxyXG4gIC8vICAgcmVmcmVzaE1zZ3NCeVRvXHJcbiAgLy8gfSBmcm9tICcuLi9hY3Rpb25zL2NoYXQnXHJcblxyXG4gIGltcG9ydCB7XHJcbiAgICBjb25uZWN0XHJcbiAgfSBmcm9tICd3ZXB5LXJlZHV4J1xyXG5cclxuICBpbXBvcnQgKiBhcyBjaGF0cm9vbUFwaSBmcm9tICcuLi9hcGlzL2NoYXRyb29tJ1xyXG4gIGltcG9ydCAqIGFzIGFwaSBmcm9tICcuLi9hcGlzL2FjY291bnQnXHJcblxyXG4gIEBjb25uZWN0KHtcclxuICAgIHVzZXI6IHN0YXRlID0+IHN0YXRlLmNvbW1vbi51c2VyLFxyXG4gICAgbmltOiBzdGF0ZSA9PiBzdGF0ZS5jb21tb24ubmltLFxyXG4gICAgZnJpZW5kczogc3RhdGUgPT4gc3RhdGUuZnJpZW5kcy5mcmllbmRzLFxyXG4gICAgbXNnczogc3RhdGUgPT4gc3RhdGUuY2hhdC5tc2dzXHJcbiAgfSwge1xyXG4gICAgc2V0VXNlclxyXG4vLyAgIHNldE5pbSxcclxuLy8gICByZWZyZXNoRnJpZW5kcyxcclxuLy8gICByZWZyZXNoU2Vzc2lvbnMsXHJcbi8vICAgcmVmcmVzaE1zZ3MsXHJcbi8vICAgcmVmcmVzaE1zZ3NCeVRvXHJcbiAgfSlcclxuICBleHBvcnQgZGVmYXVsdCBjbGFzcyBDaGF0cm9vbXMgZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xyXG4gICAgY29uZmlnID0ge1xyXG4gICAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn6IGK5aSp5a6kJ1xyXG4gICAgfVxyXG5cclxuICAgIGRhdGEgPSB7XHJcbiAgICAgIHJvb21zOiBbXSxcclxuICAgIH1cclxuXHJcbiAgICBtZXRob2RzID0ge1xyXG4gICAgICAvLyBwdXNoTXNnOiBmdW5jdGlvbiAobXNncykge1xyXG4gICAgICAvLyAgIGNvbnN0IHsgcmVmcmVzaE1zZ3MsIHJlZnJlc2hNc2dzQnlUbyB9ID0gdGhpcy5tZXRob2RzXHJcbiAgICAgIC8vICAgY29uc3QgeyBtZXJnZU1zZ3MgfSA9IHRoaXMubmltXHJcbiAgICAgIC8vICAgaWYgKCFBcnJheS5pc0FycmF5KG1zZ3MpKSB7XHJcbiAgICAgIC8vICAgICBtc2dzID0gW21zZ3NdXHJcbiAgICAgIC8vICAgfVxyXG4gICAgICAvLyAgIGNvbnN0IHNlc3Npb25JZCA9IG1zZ3NbMF0uc2Vzc2lvbklkXHJcbiAgICAgIC8vICAgY29uc3QgdG8gPSBtc2dzWzBdLnRhcmdldFxyXG4gICAgICAvLyAgIGNvbnN0IG1lcmdlZCA9IG1lcmdlTXNncyh0aGlzLm1zZ3Nbc2Vzc2lvbklkXSB8fCBbXSwgbXNncylcclxuICAgICAgLy8gICBjb25zdCBtZXJnZWRCeVRvID0gbWVyZ2VNc2dzKHRoaXMubXNnc1t0b10gfHwgW10sIG1zZ3MpXHJcbiAgICAgIC8vICAgcmVmcmVzaE1zZ3Moc2Vzc2lvbklkLCBtZXJnZWQpXHJcbiAgICAgIC8vICAgcmVmcmVzaE1zZ3NCeVRvKHRvLCBtZXJnZWRCeVRvKVxyXG4gICAgICAvLyB9LFxyXG4gICAgICB0b0NoYXRyb29tOiBmdW5jdGlvbihyb29tKSB7XHJcbiAgICAgICAgY29uc3QgaWQgPSByb29tLmlkXHJcbiAgICAgICAgY29uc3Qgcm9vbWlkID0gcm9vbS5yb29taWRcclxuICAgICAgICBjb25zdCBjcmVhdG9yID0gcm9vbS5jcmVhdG9yXHJcbiAgICAgICAgd2VweS5uYXZpZ2F0ZVRvKHtcclxuICAgICAgICAgIHVybDogYC9wYWdlcy9jaGF0cm9vbT9pZD0ke2lkfSZyb29taWQ9JHtyb29taWR9JmNyZWF0b3I9JHtjcmVhdG9yfWBcclxuICAgICAgICB9KVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgYXN5bmMgb25Mb2FkKCkge1xyXG4gICAgICBjb25zdCB7IHNldFVzZXIgfSA9IHRoaXMubWV0aG9kc1xyXG4gICAgICAvLyBjb25zdCBwdXNoTXNnID0gdGhpcy5tZXRob2RzLnB1c2hNc2cuYmluZCh0aGlzKVxyXG4gICAgICB3ZXB5LnNob3dMb2FkaW5nKClcclxuICAgICAgY29uc3QgeyBjb2RlIH0gPSBhd2FpdCB3ZXB5LmxvZ2luKClcclxuICAgICAgLy8gLy8gY29uc3QgeyBkYXRhIH0gPSBhd2FpdCB3ZXB5LnJlcXVlc3Qoe1xyXG4gICAgICAvLyAvLyAgIHVybDogYGh0dHBzOi8vYXBpLndlaXhpbi5xcS5jb20vc25zL2pzY29kZTJzZXNzaW9uP2FwcGlkPSR7Y29uZmlnLmFwcElkfSZzZWNyZXQ9JHtjb25maWcuYXBwU2VjcmV0ZX0manNfY29kZT0ke2NvZGV9JmdyYW50X3R5cGU9YXV0aG9yaXphdGlvbl9jb2RlYFxyXG4gICAgICAvLyAvLyB9KVxyXG4gICAgICBjb25zdCBkYXRhID0gYXdhaXQgYXBpLmdldFNlc3Npb24oY29kZSxjb25maWcuYXBwSWQsY29uZmlnLmFwcFNlY3JldGUpXHJcbiAgICAgIGNvbnN0IHsgb3BlbmlkIH0gPSBkYXRhIFxyXG5cclxuICAgICAgY29uc3QgeyB1c2VySW5mbyB9ID0gYXdhaXQgd2VweS5nZXRVc2VySW5mbygpXHJcblxyXG4gICAgICBjb25zdCBwYXNzd29yZCA9IFIudGFrZUxhc3QoNSkob3BlbmlkKVxyXG5cclxuICAgICAgY29uc3QgdXNlciA9IHtcclxuICAgICAgICAuLi51c2VySW5mbyxcclxuICAgICAgICBhY2NpZDogb3BlbmlkLnRvTG93ZXJDYXNlKClcclxuICAgICAgfVxyXG5cclxuICAgICAgc2V0VXNlcih1c2VyKVxyXG4gICAgICAvLyDlpoLmnpznlKjmiLflsJrmnKrlnKgg572R5piT5LqR5rOo5YaMIOWImeWFiOazqOWGjFxyXG4gICAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHRva2VuID0gYXdhaXQgTklNLmxvZ2luKG9wZW5pZClcclxuICAgICAgICBjb25zdCB1c2VySWQgPSBhd2FpdCBhcGkuZ2V0VG9rZW4ob3BlbmlkLCBwYXNzd29yZC50b0xvd2VyQ2FzZSgpKVxyXG4gICAgICAgIGNvbnN0IHtUb2tlbn0gPSB1c2VySWRcclxuXHJcbiAgICAgICAgaWYgKCFUb2tlbikge1xyXG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCd1c2VyIG5vdCBleGlzdCcpXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBzZXRVc2VyKHtcclxuICAgICAgICAgIC4uLnRoaXMudXNlcixcclxuICAgICAgICAgIGpmVG9rZW46IFRva2VuLFxyXG4gICAgICAgICAgbmltVG9rZW46IHRva2VuLFxyXG4gICAgICAgICAgdXNlckRhdGE6IHVzZXJJZFxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIC8vIOWIneWni+WMliBuaW0g5a+56LGhXHJcbiAgICAgICAgLy8gY29uc3QgbmltID0gTklNLmdldEluc3RhbmNlKHtcclxuICAgICAgICAvLyAgIGFjY291bnQ6IHRoaXMudXNlci5hY2NpZCxcclxuICAgICAgICAvLyAgIHRva2VuOiB0b2tlbixcclxuICAgICAgICAvLyAgIGRlYnVnOiB0cnVlLFxyXG4gICAgICAgIC8vICAgb251c2VyczogZnJpZW5kcyA9PiB7XHJcbiAgICAgICAgLy8gICAgIHJlZnJlc2hGcmllbmRzKGZyaWVuZHMubWFwKGdldEZyaWVuZCkpXHJcbiAgICAgICAgLy8gICAgIHRoaXMuJGFwcGx5KClcclxuICAgICAgICAvLyAgIH0sXHJcbiAgICAgICAgLy8gICBvbnNlc3Npb25zOiBzZXNzaW9ucyA9PiB7XHJcbiAgICAgICAgLy8gICAgIGNvbnN0IG1lcmdlZCA9IG5pbS5tZXJnZVNlc3Npb25zKHRoaXMuc2Vzc2lvbnMsIHNlc3Npb25zKVxyXG4gICAgICAgIC8vICAgICByZWZyZXNoU2Vzc2lvbnMobWVyZ2VkKVxyXG4gICAgICAgIC8vICAgICB0aGlzLiRhcHBseSgpXHJcbiAgICAgICAgLy8gICB9LFxyXG4gICAgICAgIC8vICAgb251cGRhdGVzZXNzaW9uOiBzZXNzaW9uID0+IHtcclxuICAgICAgICAvLyAgICAgY29uc3QgbWVyZ2VkID0gbmltLm1lcmdlU2Vzc2lvbnModGhpcy5zZXNzaW9ucywgc2Vzc2lvbilcclxuICAgICAgICAvLyAgICAgcmVmcmVzaFNlc3Npb25zKG1lcmdlZClcclxuICAgICAgICAvLyAgICAgdGhpcy4kYXBwbHkoKVxyXG4gICAgICAgIC8vICAgfSxcclxuICAgICAgICAvLyAgIG9ubXNnOiBtc2cgPT4ge1xyXG4gICAgICAgIC8vICAgICBwdXNoTXNnKG1zZylcclxuICAgICAgICAvLyAgICAgdGhpcy4kYXBwbHkoKVxyXG4gICAgICAgIC8vICAgfSxcclxuICAgICAgICAvLyAgIG9ucm9hbWluZ21zZ3M6IG9iaiA9PiB7XHJcbiAgICAgICAgLy8gICAgIHB1c2hNc2cob2JqLm1zZ3MpXHJcbiAgICAgICAgLy8gICB9LFxyXG4gICAgICAgIC8vICAgb25vZmZsaW5lbXNnczogb2JqID0+IHtcclxuICAgICAgICAvLyAgICAgcHVzaE1zZyhvYmoubXNncylcclxuICAgICAgICAvLyAgIH1cclxuICAgICAgICAvLyB9KVxyXG4gICAgICAgIC8vXHJcbiAgICAgICAgLy8gc2V0TmltKG5pbSlcclxuXHJcbiAgICAgICAgLy8g5ouJ5Y+W6IGK5aSp5a6k5YiX6KGoXHJcbiAgICAgICAgY29uc3Qgcm9vbXMgPSBhd2FpdCBjaGF0cm9vbUFwaS5nZXRMaXN0KClcclxuXHJcbiAgICAgICAgY29uc3QgaWRzID0gcm9vbXMubWFwKFIucHJvcCgncm9vbWlkJykpXHJcbiAgICAgICAgY29uc3QgY2hhdHJvb21zID0gYXdhaXQgTklNLmdldENoYXRyb29tcyhpZHMpXHJcbiAgICAgICAgY29uc3QgbWVtYmVycyA9IGNoYXRyb29tcy5tYXAoUi5wcm9wKCdvbmxpbmV1c2VyY291bnQnKSlcclxuICAgICAgICBjb25zdCByb29tTGlzdCA9IHJvb20gPT4gcm9vbS52YWxpZFxyXG4gICAgICAgIGNvbnN0IHJvb21BcnIgPSBSLmZpbHRlcihyb29tTGlzdCkocm9vbXMpXHJcbiAgICAgICAgdGhpcy5yb29tcyA9IHJvb21BcnIubWFwKChyb29tLCBpbmRleCkgPT4gKHtcclxuICAgICAgICAgIGlkOiByb29tLmlkLFxyXG4gICAgICAgICAgcm9vbWlkOiByb29tLnJvb21pZCxcclxuICAgICAgICAgIGNyZWF0b3I6IHJvb20uY3JlYXRvcixcclxuICAgICAgICAgIG5hbWU6IHJvb20ubmFtZSxcclxuICAgICAgICAgIGNvdmVyOiByb29tLnBpY191cmwsXHJcbiAgICAgICAgICBtZW1lYmVyczogbWVtYmVyc1tpbmRleF0sXHJcbiAgICAgICAgICBhbm5vdW5jZW1lbnQ6IHJvb20uYW5ub3VuY2VtZW50XHJcbiAgICAgICAgfSkpXHJcbiAgICAgICAgdGhpcy4kYXBwbHkoKVxyXG4gICAgICAgIHdlcHkuaGlkZUxvYWRpbmcoKVxyXG4gICAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgbG9nLmVycm9yKHtcclxuICAgICAgICAgIHBhZ2U6ICdjaGF0cm9vbXMnLFxyXG4gICAgICAgICAgb3ByOiAnaW5pdCcsXHJcbiAgICAgICAgICBpbmZvOiBlXHJcbiAgICAgICAgfSlcclxuICAgICAgICB3ZXB5Lm5hdmlnYXRlVG8oe1xyXG4gICAgICAgICAgdXJsOiAnL3BhZ2VzL3JlZ2lzdGVyJ1xyXG4gICAgICAgIH0pXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiJdfQ==