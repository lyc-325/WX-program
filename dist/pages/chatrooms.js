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
    }, _this.onShareAppMessage = function (res) {
      console.log('执行了分享');
      return {
        title: '江峰小程序',
        path: '/page/chatrooms',
        success: function success(res) {
          console.log(res.shareTickets[0]);
          _wepy2.default.getShareInfo({
            shareTicket: res.shareTickets[0],
            success: function success(res) {
              console.log(res);
              console.log('不执行');
            }
          });
        },
        fail: function fail(res) {
          console.log(res);
          // 转发失败
        }
      };
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
                _wepy2.default.showShareMenu({
                  withShareTicket: true,
                  success: function success(res) {
                    console.log(res);
                  }
                });
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

                console.log(user);

                setUser(user);
                // 如果用户尚未在 网易云注册 则先注册
                _context.prev = 20;
                _context.next = 23;
                return _nim2.default.login(openid);

              case 23:
                token = _context.sent;
                _context.next = 26;
                return api.getToken(openid, password.toLowerCase());

              case 26:
                Token = _context.sent;

                if (Token) {
                  _context.next = 29;
                  break;
                }

                throw new Error('user not exist');

              case 29:

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
                _context.t0 = _context['catch'](20);

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
        }, _callee, this, [[20, 44]]);
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoYXRyb29tcy5qcyJdLCJuYW1lcyI6WyJsb2ciLCJjaGF0cm9vbUFwaSIsImFwaSIsIkNoYXRyb29tcyIsInVzZXIiLCJzdGF0ZSIsImNvbW1vbiIsIm5pbSIsImZyaWVuZHMiLCJtc2dzIiwiY2hhdCIsInNldFVzZXIiLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiZGF0YSIsInJvb21zIiwibWV0aG9kcyIsInRvQ2hhdHJvb20iLCJpbmRleCIsImlkIiwiY29uc29sZSIsIm5hdmlnYXRlVG8iLCJ1cmwiLCJvblNoYXJlQXBwTWVzc2FnZSIsInJlcyIsInRpdGxlIiwicGF0aCIsInN1Y2Nlc3MiLCJzaGFyZVRpY2tldHMiLCJnZXRTaGFyZUluZm8iLCJzaGFyZVRpY2tldCIsImZhaWwiLCJzaG93TG9hZGluZyIsInNob3dTaGFyZU1lbnUiLCJ3aXRoU2hhcmVUaWNrZXQiLCJsb2dpbiIsImNvZGUiLCJyZXF1ZXN0IiwiYXBwSWQiLCJhcHBTZWNyZXRlIiwib3BlbmlkIiwiZ2V0VXNlckluZm8iLCJ1c2VySW5mbyIsInBhc3N3b3JkIiwidGFrZUxhc3QiLCJhY2NpZCIsInRvTG93ZXJDYXNlIiwidG9rZW4iLCJnZXRUb2tlbiIsIlRva2VuIiwiRXJyb3IiLCJqZlRva2VuIiwibmltVG9rZW4iLCJnZXRMaXN0IiwiaWRzIiwibWFwIiwicHJvcCIsImdldENoYXRyb29tcyIsImNoYXRyb29tcyIsIm1lbWJlcnMiLCJyb29tIiwicm9vbWlkIiwibmFtZSIsImNvdmVyIiwicGljX3VybCIsIm1lbWViZXJzIiwiYW5ub3VuY2VtZW50IiwiJGFwcGx5IiwiaGlkZUxvYWRpbmciLCJlcnJvciIsInBhZ2UiLCJvcHIiLCJpbmZvIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBaUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtB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QUVBcEUsb0JBQUlxRSxLQUFKLENBQVU7QUFDUkMsd0JBQU0sV0FERTtBQUVSQyx1QkFBSyxNQUZHO0FBR1JDO0FBSFEsaUJBQVY7QUFLQSwrQkFBS25ELFVBQUwsQ0FBZ0I7QUFDZEMsdUJBQUs7QUFEUyxpQkFBaEI7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQWxKaUMsZUFBS2dELEk7a0JBQXZCbkUsUyIsImZpbGUiOiJjaGF0cm9vbXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbi8vIGNvbnN0IGdldEZyaWVuZCA9IGZ1bmN0aW9uKGZyaWVuZCkge1xuLy8gICByZXR1cm4ge1xuLy8gICAgIG5pY2tuYW1lOiBmcmllbmQubmljayxcbi8vICAgICBhdmF0YXI6IGZyaWVuZC5hdmF0YXIsXG4vLyAgICAgYWNjaWQ6IGZyaWVuZC5hY2NvdW50XG4vLyAgIH1cbi8vIH1cblxuaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcbmltcG9ydCBSIGZyb20gJy4uL2xpYnMvcmFtZGEnXG5pbXBvcnQgKiBhcyBsb2cgZnJvbSAnLi4vdXRpbHMvbG9nJ1xuXG5pbXBvcnQge1xuICB3eCBhcyBjb25maWdcbn0gZnJvbSAnLi4vY29uZmlnJ1xuXG5pbXBvcnQgTklNIGZyb20gJy4uL3V0aWxzL25pbSdcblxuaW1wb3J0IHtcbiAgc2V0VXNlclxuICAvLyBzZXROaW1cbn0gZnJvbSAnLi4vYWN0aW9ucy9jb21tb24nXG5cbi8vIGltcG9ydCB7XG4vLyAgIHJlZnJlc2hTZXNzaW9uc1xuLy8gfSBmcm9tICcuLi9hY3Rpb25zL3Nlc3Npb25zJ1xuLy9cbi8vIGltcG9ydCB7XG4vLyAgIHJlZnJlc2hGcmllbmRzXG4vLyB9IGZyb20gJy4uL2FjdGlvbnMvZnJpZW5kcydcbi8vXG4vLyBpbXBvcnQge1xuLy8gICByZWZyZXNoTXNncyxcbi8vICAgcmVmcmVzaE1zZ3NCeVRvXG4vLyB9IGZyb20gJy4uL2FjdGlvbnMvY2hhdCdcblxuaW1wb3J0IHtcbiAgY29ubmVjdFxufSBmcm9tICd3ZXB5LXJlZHV4J1xuXG5pbXBvcnQgKiBhcyBjaGF0cm9vbUFwaSBmcm9tICcuLi9hcGlzL2NoYXRyb29tJ1xuaW1wb3J0ICogYXMgYXBpIGZyb20gJy4uL2FwaXMvYWNjb3VudCdcblxuQGNvbm5lY3Qoe1xuICB1c2VyOiBzdGF0ZSA9PiBzdGF0ZS5jb21tb24udXNlcixcbiAgbmltOiBzdGF0ZSA9PiBzdGF0ZS5jb21tb24ubmltLFxuICBmcmllbmRzOiBzdGF0ZSA9PiBzdGF0ZS5mcmllbmRzLmZyaWVuZHMsXG4gIG1zZ3M6IHN0YXRlID0+IHN0YXRlLmNoYXQubXNnc1xufSwge1xuICBzZXRVc2VyXG4vLyAgIHNldE5pbSxcbi8vICAgcmVmcmVzaEZyaWVuZHMsXG4vLyAgIHJlZnJlc2hTZXNzaW9ucyxcbi8vICAgcmVmcmVzaE1zZ3MsXG4vLyAgIHJlZnJlc2hNc2dzQnlUb1xufSlcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENoYXRyb29tcyBleHRlbmRzIHdlcHkucGFnZSB7XG4gIGNvbmZpZyA9IHtcbiAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn6IGK5aSp5a6kJ1xuICB9XG5cbiAgZGF0YSA9IHtcbiAgICByb29tczogW11cbiAgfVxuXG4gIG1ldGhvZHMgPSB7XG4gICAgLy8gcHVzaE1zZzogZnVuY3Rpb24gKG1zZ3MpIHtcbiAgICAvLyAgIGNvbnN0IHsgcmVmcmVzaE1zZ3MsIHJlZnJlc2hNc2dzQnlUbyB9ID0gdGhpcy5tZXRob2RzXG4gICAgLy8gICBjb25zdCB7IG1lcmdlTXNncyB9ID0gdGhpcy5uaW1cbiAgICAvLyAgIGlmICghQXJyYXkuaXNBcnJheShtc2dzKSkge1xuICAgIC8vICAgICBtc2dzID0gW21zZ3NdXG4gICAgLy8gICB9XG4gICAgLy8gICBjb25zdCBzZXNzaW9uSWQgPSBtc2dzWzBdLnNlc3Npb25JZFxuICAgIC8vICAgY29uc3QgdG8gPSBtc2dzWzBdLnRhcmdldFxuICAgIC8vICAgY29uc3QgbWVyZ2VkID0gbWVyZ2VNc2dzKHRoaXMubXNnc1tzZXNzaW9uSWRdIHx8IFtdLCBtc2dzKVxuICAgIC8vICAgY29uc3QgbWVyZ2VkQnlUbyA9IG1lcmdlTXNncyh0aGlzLm1zZ3NbdG9dIHx8IFtdLCBtc2dzKVxuICAgIC8vICAgcmVmcmVzaE1zZ3Moc2Vzc2lvbklkLCBtZXJnZWQpXG4gICAgLy8gICByZWZyZXNoTXNnc0J5VG8odG8sIG1lcmdlZEJ5VG8pXG4gICAgLy8gfSxcbiAgICB0b0NoYXRyb29tOiBmdW5jdGlvbihpbmRleCkge1xuICAgICAgY29uc3QgaWQgPSB0aGlzLnJvb21zW2luZGV4XS5pZFxuICAgICAgY29uc29sZS5sb2coJ2NoYXRyb29taWQnLCBpZClcbiAgICAgIHdlcHkubmF2aWdhdGVUbyh7XG4gICAgICAgIHVybDogYC9wYWdlcy9jaGF0cm9vbT9pZD0ke2lkfWBcbiAgICAgIH0pXG4gICAgfVxuICB9XG4gIG9uU2hhcmVBcHBNZXNzYWdlID0gZnVuY3Rpb24gKHJlcykge1xuICAgIGNvbnNvbGUubG9nKCfmiafooYzkuobliIbkuqsnKVxuICAgIHJldHVybiB7XG4gICAgICB0aXRsZTogJ+axn+WzsOWwj+eoi+W6jycsXG4gICAgICBwYXRoOiAnL3BhZ2UvY2hhdHJvb21zJyxcbiAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChyZXMpIHtcbiAgICAgICAgY29uc29sZS5sb2cocmVzLnNoYXJlVGlja2V0c1swXSlcbiAgICAgICAgd2VweS5nZXRTaGFyZUluZm8oe1xuICAgICAgICAgIHNoYXJlVGlja2V0OiByZXMuc2hhcmVUaWNrZXRzWzBdLFxuICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChyZXMpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlcylcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCfkuI3miafooYwnKVxuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgIH0sXG4gICAgICBmYWlsOiBmdW5jdGlvbiAocmVzKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKHJlcylcbiAgICAgICAgLy8g6L2s5Y+R5aSx6LSlXG4gICAgICB9XG4gICAgfVxuICB9XG4gIGFzeW5jIG9uTG9hZCgpIHtcbiAgICBjb25zdCB7IHNldFVzZXIgfSA9IHRoaXMubWV0aG9kc1xuICAgIC8vIGNvbnN0IHB1c2hNc2cgPSB0aGlzLm1ldGhvZHMucHVzaE1zZy5iaW5kKHRoaXMpXG4gICAgd2VweS5zaG93TG9hZGluZygpXG4gICAgd2VweS5zaG93U2hhcmVNZW51KHtcbiAgICAgIHdpdGhTaGFyZVRpY2tldDogdHJ1ZSxcbiAgICAgIHN1Y2Nlc3M6IChyZXMpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2cocmVzKVxuICAgICAgfVxuICAgIH0pXG4gICAgY29uc3QgeyBjb2RlIH0gPSBhd2FpdCB3ZXB5LmxvZ2luKClcbiAgICBjb25zdCB7IGRhdGEgfSA9IGF3YWl0IHdlcHkucmVxdWVzdCh7XG4gICAgICB1cmw6IGBodHRwczovL2FwaS53ZWl4aW4ucXEuY29tL3Nucy9qc2NvZGUyc2Vzc2lvbj9hcHBpZD0ke2NvbmZpZy5hcHBJZH0mc2VjcmV0PSR7Y29uZmlnLmFwcFNlY3JldGV9JmpzX2NvZGU9JHtjb2RlfSZncmFudF90eXBlPWF1dGhvcml6YXRpb25fY29kZWBcbiAgICB9KVxuICAgIGNvbnN0IHsgb3BlbmlkIH0gPSBkYXRhXG4gICAgY29uc3QgeyB1c2VySW5mbyB9ID0gYXdhaXQgd2VweS5nZXRVc2VySW5mbygpXG4gICAgY29uc3QgcGFzc3dvcmQgPSBSLnRha2VMYXN0KDUpKG9wZW5pZClcblxuICAgIGNvbnN0IHVzZXIgPSB7XG4gICAgICAuLi51c2VySW5mbyxcbiAgICAgIGFjY2lkOiBvcGVuaWQudG9Mb3dlckNhc2UoKVxuICAgIH1cbiAgICBjb25zb2xlLmxvZyh1c2VyKVxuXG4gICAgc2V0VXNlcih1c2VyKVxuICAgIC8vIOWmguaenOeUqOaIt+WwmuacquWcqCDnvZHmmJPkupHms6jlhowg5YiZ5YWI5rOo5YaMXG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHRva2VuID0gYXdhaXQgTklNLmxvZ2luKG9wZW5pZClcbiAgICAgIGNvbnN0IFRva2VuID0gYXdhaXQgYXBpLmdldFRva2VuKG9wZW5pZCwgcGFzc3dvcmQudG9Mb3dlckNhc2UoKSlcblxuICAgICAgaWYgKCFUb2tlbikge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ3VzZXIgbm90IGV4aXN0JylcbiAgICAgIH1cblxuICAgICAgc2V0VXNlcih7XG4gICAgICAgIC4uLnRoaXMudXNlcixcbiAgICAgICAgamZUb2tlbjogVG9rZW4sXG4gICAgICAgIG5pbVRva2VuOiB0b2tlblxuICAgICAgfSlcblxuICAgICAgLy8g5Yid5aeL5YyWIG5pbSDlr7nosaFcbiAgICAgIC8vIGNvbnN0IG5pbSA9IE5JTS5nZXRJbnN0YW5jZSh7XG4gICAgICAvLyAgIGFjY291bnQ6IHRoaXMudXNlci5hY2NpZCxcbiAgICAgIC8vICAgdG9rZW46IHRva2VuLFxuICAgICAgLy8gICBkZWJ1ZzogdHJ1ZSxcbiAgICAgIC8vICAgb251c2VyczogZnJpZW5kcyA9PiB7XG4gICAgICAvLyAgICAgcmVmcmVzaEZyaWVuZHMoZnJpZW5kcy5tYXAoZ2V0RnJpZW5kKSlcbiAgICAgIC8vICAgICB0aGlzLiRhcHBseSgpXG4gICAgICAvLyAgIH0sXG4gICAgICAvLyAgIG9uc2Vzc2lvbnM6IHNlc3Npb25zID0+IHtcbiAgICAgIC8vICAgICBjb25zdCBtZXJnZWQgPSBuaW0ubWVyZ2VTZXNzaW9ucyh0aGlzLnNlc3Npb25zLCBzZXNzaW9ucylcbiAgICAgIC8vICAgICByZWZyZXNoU2Vzc2lvbnMobWVyZ2VkKVxuICAgICAgLy8gICAgIHRoaXMuJGFwcGx5KClcbiAgICAgIC8vICAgfSxcbiAgICAgIC8vICAgb251cGRhdGVzZXNzaW9uOiBzZXNzaW9uID0+IHtcbiAgICAgIC8vICAgICBjb25zdCBtZXJnZWQgPSBuaW0ubWVyZ2VTZXNzaW9ucyh0aGlzLnNlc3Npb25zLCBzZXNzaW9uKVxuICAgICAgLy8gICAgIHJlZnJlc2hTZXNzaW9ucyhtZXJnZWQpXG4gICAgICAvLyAgICAgdGhpcy4kYXBwbHkoKVxuICAgICAgLy8gICB9LFxuICAgICAgLy8gICBvbm1zZzogbXNnID0+IHtcbiAgICAgIC8vICAgICBwdXNoTXNnKG1zZylcbiAgICAgIC8vICAgICB0aGlzLiRhcHBseSgpXG4gICAgICAvLyAgIH0sXG4gICAgICAvLyAgIG9ucm9hbWluZ21zZ3M6IG9iaiA9PiB7XG4gICAgICAvLyAgICAgcHVzaE1zZyhvYmoubXNncylcbiAgICAgIC8vICAgfSxcbiAgICAgIC8vICAgb25vZmZsaW5lbXNnczogb2JqID0+IHtcbiAgICAgIC8vICAgICBwdXNoTXNnKG9iai5tc2dzKVxuICAgICAgLy8gICB9XG4gICAgICAvLyB9KVxuICAgICAgLy9cbiAgICAgIC8vIHNldE5pbShuaW0pXG5cbiAgICAgIC8vIOaLieWPluiBiuWkqeWupOWIl+ihqFxuICAgICAgY29uc3Qgcm9vbXMgPSBhd2FpdCBjaGF0cm9vbUFwaS5nZXRMaXN0KClcbiAgICAgIGNvbnN0IGlkcyA9IHJvb21zLm1hcChSLnByb3AoJ3Jvb21pZCcpKVxuICAgICAgY29uc3QgY2hhdHJvb21zID0gYXdhaXQgTklNLmdldENoYXRyb29tcyhpZHMpXG4gICAgICBjb25zdCBtZW1iZXJzID0gY2hhdHJvb21zLm1hcChSLnByb3AoJ29ubGluZXVzZXJjb3VudCcpKVxuICAgICAgdGhpcy5yb29tcyA9IHJvb21zLm1hcCgocm9vbSwgaW5kZXgpID0+ICh7XG4gICAgICAgIGlkOiByb29tLnJvb21pZCxcbiAgICAgICAgbmFtZTogcm9vbS5uYW1lLFxuICAgICAgICBjb3Zlcjogcm9vbS5waWNfdXJsLFxuICAgICAgICBtZW1lYmVyczogbWVtYmVyc1tpbmRleF0sXG4gICAgICAgIGFubm91bmNlbWVudDogcm9vbS5hbm5vdW5jZW1lbnRcbiAgICAgIH0pKVxuICAgICAgY29uc29sZS5sb2codGhpcy5yb29tcylcbiAgICAgIHRoaXMuJGFwcGx5KClcbiAgICAgIHdlcHkuaGlkZUxvYWRpbmcoKVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIGxvZy5lcnJvcih7XG4gICAgICAgIHBhZ2U6ICdjaGF0cm9vbXMnLFxuICAgICAgICBvcHI6ICdpbml0JyxcbiAgICAgICAgaW5mbzogZVxuICAgICAgfSlcbiAgICAgIHdlcHkubmF2aWdhdGVUbyh7XG4gICAgICAgIHVybDogJy9wYWdlcy9yZWdpc3RlcidcbiAgICAgIH0pXG4gICAgfVxuICB9XG59XG4iXX0=