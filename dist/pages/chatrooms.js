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
      rooms: [],
      jfUserid: ''
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
    }, _this.onShareAppMessage = function (res) {
      console.log('执行了分享');
      return {
        title: '江峰小程序',
        path: '/pages/chatrooms'
        //      success: function (res) {
        //        console.log(res)
        //        console.log(this.methods)
        //        this.methods.getshareInfo(res.shareTickets[0])
        //      }
        //      fail: function (res) {
        //        console.log(res)
        //        // 转发失败
        //      }
      };
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(Chatrooms, [{
    key: 'onLoad',
    value: function () {
      var _ref2 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee() {
        var setUser, _ref3, code, _ref4, data, openid, session_key, _ref5, userInfo, password, user, token, userId, Token, rooms, ids, chatrooms, members;

        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                setUser = this.methods.setUser;
                // const pushMsg = this.methods.pushMsg.bind(this)

                _wepy2.default.showLoading();
                _context.next = 4;
                return _wepy2.default.showShareMenu({
                  withShareTicket: true
                });

              case 4:
                _context.next = 6;
                return _wepy2.default.login();

              case 6:
                _ref3 = _context.sent;
                code = _ref3.code;
                _context.next = 10;
                return _wepy2.default.request({
                  url: 'https://api.weixin.qq.com/sns/jscode2session?appid=' + _config.wx.appId + '&secret=' + _config.wx.appSecrete + '&js_code=' + code + '&grant_type=authorization_code'
                });

              case 10:
                _ref4 = _context.sent;
                data = _ref4.data;
                openid = data.openid;
                session_key = data.session_key;

                _wepy2.default.setStorage({
                  key: 'jfOpenId',
                  data: session_key });
                _context.next = 17;
                return _wepy2.default.getUserInfo();

              case 17:
                _ref5 = _context.sent;
                userInfo = _ref5.userInfo;
                password = _ramda2.default.takeLast(5)(openid);
                user = (0, _extends3.default)({}, userInfo, {
                  accid: openid.toLowerCase()
                });

                setUser(user);
                // 如果用户尚未在 网易云注册 则先注册
                _context.prev = 22;
                _context.next = 25;
                return _nim2.default.login(openid);

              case 25:
                token = _context.sent;
                _context.next = 28;
                return api.getTokenUserId(openid, password.toLowerCase());

              case 28:
                userId = _context.sent;

                this.jfUserid = userId.id;
                //      const Token = await api.getToken(openid, password.toLowerCase())
                Token = userId.Token;

                _wepy2.default.setStorage({
                  key: 'jfUserId',
                  data: userId.id });
                _wepy2.default.setStorage({
                  key: 'jfToken',
                  data: Token });

                if (Token) {
                  _context.next = 35;
                  break;
                }

                throw new Error('user not exist');

              case 35:

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
                _context.next = 38;
                return chatroomApi.getList();

              case 38:
                rooms = _context.sent;
                ids = rooms.map(_ramda2.default.prop('roomid'));
                _context.next = 42;
                return _nim2.default.getChatrooms(ids);

              case 42:
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
                this.$apply();
                _wepy2.default.hideLoading();
                _context.next = 53;
                break;

              case 49:
                _context.prev = 49;
                _context.t0 = _context['catch'](22);

                log.error({
                  page: 'chatrooms',
                  opr: 'init',
                  info: _context.t0
                });
                _wepy2.default.navigateTo({
                  url: '/pages/register'
                });

              case 53:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this, [[22, 49]]);
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoYXRyb29tcy5qcyJdLCJuYW1lcyI6WyJsb2ciLCJjaGF0cm9vbUFwaSIsImFwaSIsIkNoYXRyb29tcyIsInVzZXIiLCJzdGF0ZSIsImNvbW1vbiIsIm5pbSIsImZyaWVuZHMiLCJtc2dzIiwiY2hhdCIsInNldFVzZXIiLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiZGF0YSIsInJvb21zIiwiamZVc2VyaWQiLCJtZXRob2RzIiwidG9DaGF0cm9vbSIsImluZGV4IiwiaWQiLCJjb25zb2xlIiwibmF2aWdhdGVUbyIsInVybCIsIm9uU2hhcmVBcHBNZXNzYWdlIiwicmVzIiwidGl0bGUiLCJwYXRoIiwic2hvd0xvYWRpbmciLCJzaG93U2hhcmVNZW51Iiwid2l0aFNoYXJlVGlja2V0IiwibG9naW4iLCJjb2RlIiwicmVxdWVzdCIsImFwcElkIiwiYXBwU2VjcmV0ZSIsIm9wZW5pZCIsInNlc3Npb25fa2V5Iiwic2V0U3RvcmFnZSIsImtleSIsImdldFVzZXJJbmZvIiwidXNlckluZm8iLCJwYXNzd29yZCIsInRha2VMYXN0IiwiYWNjaWQiLCJ0b0xvd2VyQ2FzZSIsInRva2VuIiwiZ2V0VG9rZW5Vc2VySWQiLCJ1c2VySWQiLCJUb2tlbiIsIkVycm9yIiwiamZUb2tlbiIsIm5pbVRva2VuIiwiZ2V0TGlzdCIsImlkcyIsIm1hcCIsInByb3AiLCJnZXRDaGF0cm9vbXMiLCJjaGF0cm9vbXMiLCJtZW1iZXJzIiwicm9vbSIsInJvb21pZCIsIm5hbWUiLCJjb3ZlciIsInBpY191cmwiLCJtZW1lYmVycyIsImFubm91bmNlbWVudCIsIiRhcHBseSIsImhpZGVMb2FkaW5nIiwiZXJyb3IiLCJwYWdlIiwib3ByIiwiaW5mbyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQWlCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFD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RFMsaUJBQWhCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7RUE1SmlDLGVBQUsrQyxJO2tCQUF2Qm5FLFMiLCJmaWxlIjoiY2hhdHJvb21zLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG4vLyBjb25zdCBnZXRGcmllbmQgPSBmdW5jdGlvbihmcmllbmQpIHtcbi8vICAgcmV0dXJuIHtcbi8vICAgICBuaWNrbmFtZTogZnJpZW5kLm5pY2ssXG4vLyAgICAgYXZhdGFyOiBmcmllbmQuYXZhdGFyLFxuLy8gICAgIGFjY2lkOiBmcmllbmQuYWNjb3VudFxuLy8gICB9XG4vLyB9XG5cbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG5pbXBvcnQgUiBmcm9tICcuLi9saWJzL3JhbWRhJ1xuaW1wb3J0ICogYXMgbG9nIGZyb20gJy4uL3V0aWxzL2xvZydcblxuaW1wb3J0IHtcbiAgd3ggYXMgY29uZmlnXG59IGZyb20gJy4uL2NvbmZpZydcblxuaW1wb3J0IE5JTSBmcm9tICcuLi91dGlscy9uaW0nXG5cbmltcG9ydCB7XG4gIHNldFVzZXJcbiAgLy8gc2V0TmltXG59IGZyb20gJy4uL2FjdGlvbnMvY29tbW9uJ1xuXG4vLyBpbXBvcnQge1xuLy8gICByZWZyZXNoU2Vzc2lvbnNcbi8vIH0gZnJvbSAnLi4vYWN0aW9ucy9zZXNzaW9ucydcbi8vXG4vLyBpbXBvcnQge1xuLy8gICByZWZyZXNoRnJpZW5kc1xuLy8gfSBmcm9tICcuLi9hY3Rpb25zL2ZyaWVuZHMnXG4vL1xuLy8gaW1wb3J0IHtcbi8vICAgcmVmcmVzaE1zZ3MsXG4vLyAgIHJlZnJlc2hNc2dzQnlUb1xuLy8gfSBmcm9tICcuLi9hY3Rpb25zL2NoYXQnXG5cbmltcG9ydCB7XG4gIGNvbm5lY3Rcbn0gZnJvbSAnd2VweS1yZWR1eCdcblxuaW1wb3J0ICogYXMgY2hhdHJvb21BcGkgZnJvbSAnLi4vYXBpcy9jaGF0cm9vbSdcbmltcG9ydCAqIGFzIGFwaSBmcm9tICcuLi9hcGlzL2FjY291bnQnXG5cbkBjb25uZWN0KHtcbiAgdXNlcjogc3RhdGUgPT4gc3RhdGUuY29tbW9uLnVzZXIsXG4gIG5pbTogc3RhdGUgPT4gc3RhdGUuY29tbW9uLm5pbSxcbiAgZnJpZW5kczogc3RhdGUgPT4gc3RhdGUuZnJpZW5kcy5mcmllbmRzLFxuICBtc2dzOiBzdGF0ZSA9PiBzdGF0ZS5jaGF0Lm1zZ3Ncbn0sIHtcbiAgc2V0VXNlclxuLy8gICBzZXROaW0sXG4vLyAgIHJlZnJlc2hGcmllbmRzLFxuLy8gICByZWZyZXNoU2Vzc2lvbnMsXG4vLyAgIHJlZnJlc2hNc2dzLFxuLy8gICByZWZyZXNoTXNnc0J5VG9cbn0pXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDaGF0cm9vbXMgZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICBjb25maWcgPSB7XG4gICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+iBiuWkqeWupCdcbiAgfVxuXG4gIGRhdGEgPSB7XG4gICAgcm9vbXM6IFtdLFxuICAgIGpmVXNlcmlkOiAnJ1xuICB9XG5cbiAgbWV0aG9kcyA9IHtcbiAgICAvLyBwdXNoTXNnOiBmdW5jdGlvbiAobXNncykge1xuICAgIC8vICAgY29uc3QgeyByZWZyZXNoTXNncywgcmVmcmVzaE1zZ3NCeVRvIH0gPSB0aGlzLm1ldGhvZHNcbiAgICAvLyAgIGNvbnN0IHsgbWVyZ2VNc2dzIH0gPSB0aGlzLm5pbVxuICAgIC8vICAgaWYgKCFBcnJheS5pc0FycmF5KG1zZ3MpKSB7XG4gICAgLy8gICAgIG1zZ3MgPSBbbXNnc11cbiAgICAvLyAgIH1cbiAgICAvLyAgIGNvbnN0IHNlc3Npb25JZCA9IG1zZ3NbMF0uc2Vzc2lvbklkXG4gICAgLy8gICBjb25zdCB0byA9IG1zZ3NbMF0udGFyZ2V0XG4gICAgLy8gICBjb25zdCBtZXJnZWQgPSBtZXJnZU1zZ3ModGhpcy5tc2dzW3Nlc3Npb25JZF0gfHwgW10sIG1zZ3MpXG4gICAgLy8gICBjb25zdCBtZXJnZWRCeVRvID0gbWVyZ2VNc2dzKHRoaXMubXNnc1t0b10gfHwgW10sIG1zZ3MpXG4gICAgLy8gICByZWZyZXNoTXNncyhzZXNzaW9uSWQsIG1lcmdlZClcbiAgICAvLyAgIHJlZnJlc2hNc2dzQnlUbyh0bywgbWVyZ2VkQnlUbylcbiAgICAvLyB9LFxuICAgIHRvQ2hhdHJvb206IGZ1bmN0aW9uKGluZGV4KSB7XG4gICAgICBjb25zdCBpZCA9IHRoaXMucm9vbXNbaW5kZXhdLmlkXG4gICAgICBjb25zb2xlLmxvZygnY2hhdHJvb21pZCcsIGlkKVxuICAgICAgd2VweS5uYXZpZ2F0ZVRvKHtcbiAgICAgICAgdXJsOiBgL3BhZ2VzL2NoYXRyb29tP2lkPSR7aWR9YFxuICAgICAgfSlcbiAgICB9XG4gIH1cbiAgb25TaGFyZUFwcE1lc3NhZ2UgPSBmdW5jdGlvbiAocmVzKSB7XG4gICAgY29uc29sZS5sb2coJ+aJp+ihjOS6huWIhuS6qycpXG4gICAgcmV0dXJuIHtcbiAgICAgIHRpdGxlOiAn5rGf5bOw5bCP56iL5bqPJyxcbiAgICAgIHBhdGg6ICcvcGFnZXMvY2hhdHJvb21zJ1xuLy8gICAgICBzdWNjZXNzOiBmdW5jdGlvbiAocmVzKSB7XG4vLyAgICAgICAgY29uc29sZS5sb2cocmVzKVxuLy8gICAgICAgIGNvbnNvbGUubG9nKHRoaXMubWV0aG9kcylcbi8vICAgICAgICB0aGlzLm1ldGhvZHMuZ2V0c2hhcmVJbmZvKHJlcy5zaGFyZVRpY2tldHNbMF0pXG4vLyAgICAgIH1cbi8vICAgICAgZmFpbDogZnVuY3Rpb24gKHJlcykge1xuLy8gICAgICAgIGNvbnNvbGUubG9nKHJlcylcbi8vICAgICAgICAvLyDovazlj5HlpLHotKVcbi8vICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGFzeW5jIG9uTG9hZCgpIHtcbiAgICBjb25zdCB7IHNldFVzZXIgfSA9IHRoaXMubWV0aG9kc1xuICAgIC8vIGNvbnN0IHB1c2hNc2cgPSB0aGlzLm1ldGhvZHMucHVzaE1zZy5iaW5kKHRoaXMpXG4gICAgd2VweS5zaG93TG9hZGluZygpXG4gICAgYXdhaXQgd2VweS5zaG93U2hhcmVNZW51KHtcbiAgICAgIHdpdGhTaGFyZVRpY2tldDogdHJ1ZVxuICAgIH0pXG4vLyAgICBjb25zb2xlLmxvZyhuZXR3b3JrKVxuLy8gICAgdmFyIG5ldHdvcmsxID0gYXdhaXQgd2VweS5nZXRTaGFyZUluZm8oe1xuLy8gICAgICBzaGFyZVRpY2tldDogJzFiYjlhZjkwLTY2ZDktNDk3Yy1iMWJmLWNkYTRkOTA0MDgxNycsXG4vLyAgICAgIGNvbXBsZXRlOiBmdW5jdGlvbiAocmVzKSB7XG4vLyAgICAgICAgcmV0dXJuIHJlc1xuLy8gICAgICB9XG4vLyAgICB9KVxuLy8gICAgY29uc29sZS5sb2cobmV0d29yazEpXG4gICAgY29uc3QgeyBjb2RlIH0gPSBhd2FpdCB3ZXB5LmxvZ2luKClcbiAgICBjb25zdCB7IGRhdGEgfSA9IGF3YWl0IHdlcHkucmVxdWVzdCh7XG4gICAgICB1cmw6IGBodHRwczovL2FwaS53ZWl4aW4ucXEuY29tL3Nucy9qc2NvZGUyc2Vzc2lvbj9hcHBpZD0ke2NvbmZpZy5hcHBJZH0mc2VjcmV0PSR7Y29uZmlnLmFwcFNlY3JldGV9JmpzX2NvZGU9JHtjb2RlfSZncmFudF90eXBlPWF1dGhvcml6YXRpb25fY29kZWBcbiAgICB9KVxuICAgIGNvbnN0IHsgb3BlbmlkIH0gPSBkYXRhXG4gICAgY29uc3QgeyBzZXNzaW9uX2tleSB9ID0gZGF0YVxuICAgIHdlcHkuc2V0U3RvcmFnZSh7XG4gICAgICBrZXk6ICdqZk9wZW5JZCcsXG4gICAgICBkYXRhOiBzZXNzaW9uX2tleX0pXG4gICAgY29uc3QgeyB1c2VySW5mbyB9ID0gYXdhaXQgd2VweS5nZXRVc2VySW5mbygpXG4gICAgY29uc3QgcGFzc3dvcmQgPSBSLnRha2VMYXN0KDUpKG9wZW5pZClcblxuICAgIGNvbnN0IHVzZXIgPSB7XG4gICAgICAuLi51c2VySW5mbyxcbiAgICAgIGFjY2lkOiBvcGVuaWQudG9Mb3dlckNhc2UoKVxuICAgIH1cbiAgICBzZXRVc2VyKHVzZXIpXG4gICAgLy8g5aaC5p6c55So5oi35bCa5pyq5ZyoIOe9keaYk+S6keazqOWGjCDliJnlhYjms6jlhoxcbiAgICB0cnkge1xuICAgICAgY29uc3QgdG9rZW4gPSBhd2FpdCBOSU0ubG9naW4ob3BlbmlkKVxuICAgICAgY29uc3QgdXNlcklkID0gYXdhaXQgYXBpLmdldFRva2VuVXNlcklkKG9wZW5pZCwgcGFzc3dvcmQudG9Mb3dlckNhc2UoKSlcbiAgICAgIHRoaXMuamZVc2VyaWQgPSB1c2VySWQuaWRcbi8vICAgICAgY29uc3QgVG9rZW4gPSBhd2FpdCBhcGkuZ2V0VG9rZW4ob3BlbmlkLCBwYXNzd29yZC50b0xvd2VyQ2FzZSgpKVxuICAgICAgY29uc3QgVG9rZW4gPSB1c2VySWQuVG9rZW5cbiAgICAgIHdlcHkuc2V0U3RvcmFnZSh7XG4gICAgICAgIGtleTogJ2pmVXNlcklkJyxcbiAgICAgICAgZGF0YTogdXNlcklkLmlkfSlcbiAgICAgIHdlcHkuc2V0U3RvcmFnZSh7XG4gICAgICAgIGtleTogJ2pmVG9rZW4nLFxuICAgICAgICBkYXRhOiBUb2tlbn0pXG4gICAgICBpZiAoIVRva2VuKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcigndXNlciBub3QgZXhpc3QnKVxuICAgICAgfVxuXG4gICAgICBzZXRVc2VyKHtcbiAgICAgICAgLi4udGhpcy51c2VyLFxuICAgICAgICBqZlRva2VuOiBUb2tlbixcbiAgICAgICAgbmltVG9rZW46IHRva2VuXG4gICAgICB9KVxuICAgICAgLy8g5Yid5aeL5YyWIG5pbSDlr7nosaFcbiAgICAgIC8vIGNvbnN0IG5pbSA9IE5JTS5nZXRJbnN0YW5jZSh7XG4gICAgICAvLyAgIGFjY291bnQ6IHRoaXMudXNlci5hY2NpZCxcbiAgICAgIC8vICAgdG9rZW46IHRva2VuLFxuICAgICAgLy8gICBkZWJ1ZzogdHJ1ZSxcbiAgICAgIC8vICAgb251c2VyczogZnJpZW5kcyA9PiB7XG4gICAgICAvLyAgICAgcmVmcmVzaEZyaWVuZHMoZnJpZW5kcy5tYXAoZ2V0RnJpZW5kKSlcbiAgICAgIC8vICAgICB0aGlzLiRhcHBseSgpXG4gICAgICAvLyAgIH0sXG4gICAgICAvLyAgIG9uc2Vzc2lvbnM6IHNlc3Npb25zID0+IHtcbiAgICAgIC8vICAgICBjb25zdCBtZXJnZWQgPSBuaW0ubWVyZ2VTZXNzaW9ucyh0aGlzLnNlc3Npb25zLCBzZXNzaW9ucylcbiAgICAgIC8vICAgICByZWZyZXNoU2Vzc2lvbnMobWVyZ2VkKVxuICAgICAgLy8gICAgIHRoaXMuJGFwcGx5KClcbiAgICAgIC8vICAgfSxcbiAgICAgIC8vICAgb251cGRhdGVzZXNzaW9uOiBzZXNzaW9uID0+IHtcbiAgICAgIC8vICAgICBjb25zdCBtZXJnZWQgPSBuaW0ubWVyZ2VTZXNzaW9ucyh0aGlzLnNlc3Npb25zLCBzZXNzaW9uKVxuICAgICAgLy8gICAgIHJlZnJlc2hTZXNzaW9ucyhtZXJnZWQpXG4gICAgICAvLyAgICAgdGhpcy4kYXBwbHkoKVxuICAgICAgLy8gICB9LFxuICAgICAgLy8gICBvbm1zZzogbXNnID0+IHtcbiAgICAgIC8vICAgICBwdXNoTXNnKG1zZylcbiAgICAgIC8vICAgICB0aGlzLiRhcHBseSgpXG4gICAgICAvLyAgIH0sXG4gICAgICAvLyAgIG9ucm9hbWluZ21zZ3M6IG9iaiA9PiB7XG4gICAgICAvLyAgICAgcHVzaE1zZyhvYmoubXNncylcbiAgICAgIC8vICAgfSxcbiAgICAgIC8vICAgb25vZmZsaW5lbXNnczogb2JqID0+IHtcbiAgICAgIC8vICAgICBwdXNoTXNnKG9iai5tc2dzKVxuICAgICAgLy8gICB9XG4gICAgICAvLyB9KVxuICAgICAgLy9cbiAgICAgIC8vIHNldE5pbShuaW0pXG5cbiAgICAgIC8vIOaLieWPluiBiuWkqeWupOWIl+ihqFxuICAgICAgY29uc3Qgcm9vbXMgPSBhd2FpdCBjaGF0cm9vbUFwaS5nZXRMaXN0KClcbiAgICAgIGNvbnN0IGlkcyA9IHJvb21zLm1hcChSLnByb3AoJ3Jvb21pZCcpKVxuICAgICAgY29uc3QgY2hhdHJvb21zID0gYXdhaXQgTklNLmdldENoYXRyb29tcyhpZHMpXG4gICAgICBjb25zdCBtZW1iZXJzID0gY2hhdHJvb21zLm1hcChSLnByb3AoJ29ubGluZXVzZXJjb3VudCcpKVxuICAgICAgdGhpcy5yb29tcyA9IHJvb21zLm1hcCgocm9vbSwgaW5kZXgpID0+ICh7XG4gICAgICAgIGlkOiByb29tLnJvb21pZCxcbiAgICAgICAgbmFtZTogcm9vbS5uYW1lLFxuICAgICAgICBjb3Zlcjogcm9vbS5waWNfdXJsLFxuICAgICAgICBtZW1lYmVyczogbWVtYmVyc1tpbmRleF0sXG4gICAgICAgIGFubm91bmNlbWVudDogcm9vbS5hbm5vdW5jZW1lbnRcbiAgICAgIH0pKVxuICAgICAgdGhpcy4kYXBwbHkoKVxuICAgICAgd2VweS5oaWRlTG9hZGluZygpXG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgbG9nLmVycm9yKHtcbiAgICAgICAgcGFnZTogJ2NoYXRyb29tcycsXG4gICAgICAgIG9wcjogJ2luaXQnLFxuICAgICAgICBpbmZvOiBlXG4gICAgICB9KVxuICAgICAgd2VweS5uYXZpZ2F0ZVRvKHtcbiAgICAgICAgdXJsOiAnL3BhZ2VzL3JlZ2lzdGVyJ1xuICAgICAgfSlcbiAgICB9XG4gIH1cbn1cbiJdfQ==