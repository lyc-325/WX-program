'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _extends2 = require('./../npm/babel-runtime/helpers/extends.js');

var _extends3 = _interopRequireDefault(_extends2);

var _regenerator = require('./../npm/babel-runtime/regenerator/index.js');

var _regenerator2 = _interopRequireDefault(_regenerator);

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
        var pk = this.rooms[index].pk;
        console.log(this.rooms[index]);
        _wepy2.default.navigateTo({
          url: '/pages/chatroom?id=' + id + '&pk=' + pk
        });
      }
    }, _this.onShareAppMessage = function () {
      var _ref2 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(res) {
        var jfaccid;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                console.log('执行了分享2');
                _context.next = 3;
                return _wepy2.default.getStorage({
                  key: 'jfAccid',
                  success: function success(res) {
                    return res.data;
                  }
                });

              case 3:
                jfaccid = _context.sent;
                return _context.abrupt('return', {
                  title: '江峰小程序',
                  path: '/pages/chatrooms?accid=' + jfaccid
                  //      success: async function (res) {
                  //        console.log(res.shareTickets[0])
                  //        var shareInfo = await wepy.getShareInfo({
                  //          shareTicket: res.shareTickets[0],
                  //          success: function (res) {
                  //            return res
                  //          }
                  //        })
                  //        console.log(shareInfo)
                  //        var sessionKey = await wepy.getStorage({
                  //          key: 'jfSessionKey',
                  //          success: function(res) {
                  //            return res.data
                  //          }
                  //        })
                  //        var shareParse = await api.shareParsing(sessionKey, shareInfo)
                  //        console.log(shareParse)
                  //        var shareToken = await wepy.getStorage({
                  //          key: 'jfToken',
                  //          success: function(res) {
                  //            return res.data
                  //          }
                  //        })
                  //        var shareAccid = await wepy.getStorage({
                  //          key: 'jfAccid',
                  //          success: function(res) {
                  //            return res.data
                  //          }
                  //        })
                  //        var shareOpenid = await api.saveOpenGid(shareToken, shareParse, shareAccid)
                  //        console.log(shareOpenid)
                  //      },
                  //      fail: function (res) {
                  //        console.log(res)
                  //        // 转发失败
                  //      }
                });

              case 5:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function (_x) {
        return _ref2.apply(this, arguments);
      };
    }(), _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(Chatrooms, [{
    key: 'onLoad',
    value: function () {
      var _ref3 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee2(options) {
        var setUser, network, _ref4, code, _ref5, data, openid, session_key, _ref6, userInfo, password, user, token, userId, Token, rooms, ids, chatrooms, members;

        return _regenerator2.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                console.log('分享回调2');
                setUser = this.methods.setUser;
                // const pushMsg = this.methods.pushMsg.bind(this)

                _wepy2.default.showLoading();
                _context2.next = 5;
                return _wepy2.default.showShareMenu({
                  withShareTicket: true
                });

              case 5:
                network = _context2.sent;

                console.log(network);
                //    var network1 = await wepy.getShareInfo({
                //      shareTicket: '1bb9af90-66d9-497c-b1bf-cda4d9040817',
                //      complete: function (res) {
                //        return res
                //      }
                //    })
                //    console.log(network1)
                _context2.next = 9;
                return _wepy2.default.login();

              case 9:
                _ref4 = _context2.sent;
                code = _ref4.code;
                _context2.next = 13;
                return _wepy2.default.request({
                  url: 'https://api.weixin.qq.com/sns/jscode2session?appid=' + _config.wx.appId + '&secret=' + _config.wx.appSecrete + '&js_code=' + code + '&grant_type=authorization_code'
                });

              case 13:
                _ref5 = _context2.sent;
                data = _ref5.data;
                openid = data.openid;
                session_key = data.session_key;

                _wepy2.default.setStorage({
                  key: 'jfSessionKey',
                  data: session_key });
                _wepy2.default.setStorage({
                  key: 'jfAccid',
                  data: openid });
                _context2.next = 21;
                return _wepy2.default.getUserInfo();

              case 21:
                _ref6 = _context2.sent;
                userInfo = _ref6.userInfo;
                password = _ramda2.default.takeLast(5)(openid);
                user = (0, _extends3.default)({}, userInfo, {
                  accid: openid.toLowerCase()
                });

                setUser(user);
                // 如果用户尚未在 网易云注册 则先注册
                _context2.prev = 26;
                _context2.next = 29;
                return _nim2.default.login(openid);

              case 29:
                token = _context2.sent;
                _context2.next = 32;
                return api.getTokenUserId(openid, password.toLowerCase());

              case 32:
                userId = _context2.sent;

                this.jfUserid = userId.id;
                Token = userId.Token;

                if (!(options.accid && options.accid !== openid)) {
                  _context2.next = 38;
                  break;
                }

                _context2.next = 38;
                return api.checkOpenGid(Token, options.accid);

              case 38:
                _wepy2.default.setStorage({
                  key: 'jfUserId',
                  data: userId.id });
                _wepy2.default.setStorage({
                  key: 'jfToken',
                  data: Token });

                if (Token) {
                  _context2.next = 42;
                  break;
                }

                throw new Error('user not exist');

              case 42:

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
                _context2.next = 45;
                return chatroomApi.getList();

              case 45:
                rooms = _context2.sent;
                ids = rooms.map(_ramda2.default.prop('roomid'));
                _context2.next = 49;
                return _nim2.default.getChatrooms(ids);

              case 49:
                chatrooms = _context2.sent;
                members = chatrooms.map(_ramda2.default.prop('onlineusercount'));

                this.rooms = rooms.map(function (room, index) {
                  return {
                    id: room.roomid,
                    name: room.name,
                    cover: room.pic_url,
                    memebers: members[index],
                    announcement: room.announcement,
                    pk: room.id
                  };
                });
                this.$apply();
                _wepy2.default.hideLoading();
                _context2.next = 60;
                break;

              case 56:
                _context2.prev = 56;
                _context2.t0 = _context2['catch'](26);

                log.error({
                  page: 'chatrooms',
                  opr: 'init',
                  info: _context2.t0
                });
                _wepy2.default.navigateTo({
                  url: '/pages/register'
                });

              case 60:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, this, [[26, 56]]);
      }));

      function onLoad(_x2) {
        return _ref3.apply(this, arguments);
      }

      return onLoad;
    }()
  }]);
  return Chatrooms;
}(_wepy2.default.page)) || _class);

Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Chatrooms , 'pages/chatrooms'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoYXRyb29tcy5qcyJdLCJuYW1lcyI6WyJsb2ciLCJjaGF0cm9vbUFwaSIsImFwaSIsIkNoYXRyb29tcyIsInVzZXIiLCJzdGF0ZSIsImNvbW1vbiIsIm5pbSIsImZyaWVuZHMiLCJtc2dzIiwiY2hhdCIsInNldFVzZXIiLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiZGF0YSIsInJvb21zIiwiamZVc2VyaWQiLCJtZXRob2RzIiwidG9DaGF0cm9vbSIsImluZGV4IiwiaWQiLCJwayIsImNvbnNvbGUiLCJuYXZpZ2F0ZVRvIiwidXJsIiwib25TaGFyZUFwcE1lc3NhZ2UiLCJyZXMiLCJnZXRTdG9yYWdlIiwia2V5Iiwic3VjY2VzcyIsImpmYWNjaWQiLCJ0aXRsZSIsInBhdGgiLCJvcHRpb25zIiwic2hvd0xvYWRpbmciLCJzaG93U2hhcmVNZW51Iiwid2l0aFNoYXJlVGlja2V0IiwibmV0d29yayIsImxvZ2luIiwiY29kZSIsInJlcXVlc3QiLCJhcHBJZCIsImFwcFNlY3JldGUiLCJvcGVuaWQiLCJzZXNzaW9uX2tleSIsInNldFN0b3JhZ2UiLCJnZXRVc2VySW5mbyIsInVzZXJJbmZvIiwicGFzc3dvcmQiLCJ0YWtlTGFzdCIsImFjY2lkIiwidG9Mb3dlckNhc2UiLCJ0b2tlbiIsImdldFRva2VuVXNlcklkIiwidXNlcklkIiwiVG9rZW4iLCJjaGVja09wZW5HaWQiLCJFcnJvciIsImpmVG9rZW4iLCJuaW1Ub2tlbiIsImdldExpc3QiLCJpZHMiLCJtYXAiLCJwcm9wIiwiZ2V0Q2hhdHJvb21zIiwiY2hhdHJvb21zIiwibWVtYmVycyIsInJvb20iLCJyb29taWQiLCJuYW1lIiwiY292ZXIiLCJwaWNfdXJsIiwibWVtZWJlcnMiLCJhbm5vdW5jZW1lbnQiLCIkYXBwbHkiLCJoaWRlTG9hZGluZyIsImVycm9yIiwicGFnZSIsIm9wciIsImluZm8iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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b3VyY2VzQ29udGVudCI6WyJcbi8vIGNvbnN0IGdldEZyaWVuZCA9IGZ1bmN0aW9uKGZyaWVuZCkge1xuLy8gICByZXR1cm4ge1xuLy8gICAgIG5pY2tuYW1lOiBmcmllbmQubmljayxcbi8vICAgICBhdmF0YXI6IGZyaWVuZC5hdmF0YXIsXG4vLyAgICAgYWNjaWQ6IGZyaWVuZC5hY2NvdW50XG4vLyAgIH1cbi8vIH1cblxuaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcbmltcG9ydCBSIGZyb20gJy4uL2xpYnMvcmFtZGEnXG5pbXBvcnQgKiBhcyBsb2cgZnJvbSAnLi4vdXRpbHMvbG9nJ1xuXG5pbXBvcnQge1xuICB3eCBhcyBjb25maWdcbn0gZnJvbSAnLi4vY29uZmlnJ1xuXG5pbXBvcnQgTklNIGZyb20gJy4uL3V0aWxzL25pbSdcblxuaW1wb3J0IHtcbiAgc2V0VXNlclxuICAvLyBzZXROaW1cbn0gZnJvbSAnLi4vYWN0aW9ucy9jb21tb24nXG5cbi8vIGltcG9ydCB7XG4vLyAgIHJlZnJlc2hTZXNzaW9uc1xuLy8gfSBmcm9tICcuLi9hY3Rpb25zL3Nlc3Npb25zJ1xuLy9cbi8vIGltcG9ydCB7XG4vLyAgIHJlZnJlc2hGcmllbmRzXG4vLyB9IGZyb20gJy4uL2FjdGlvbnMvZnJpZW5kcydcbi8vXG4vLyBpbXBvcnQge1xuLy8gICByZWZyZXNoTXNncyxcbi8vICAgcmVmcmVzaE1zZ3NCeVRvXG4vLyB9IGZyb20gJy4uL2FjdGlvbnMvY2hhdCdcblxuaW1wb3J0IHtcbiAgY29ubmVjdFxufSBmcm9tICd3ZXB5LXJlZHV4J1xuXG5pbXBvcnQgKiBhcyBjaGF0cm9vbUFwaSBmcm9tICcuLi9hcGlzL2NoYXRyb29tJ1xuaW1wb3J0ICogYXMgYXBpIGZyb20gJy4uL2FwaXMvYWNjb3VudCdcblxuQGNvbm5lY3Qoe1xuICB1c2VyOiBzdGF0ZSA9PiBzdGF0ZS5jb21tb24udXNlcixcbiAgbmltOiBzdGF0ZSA9PiBzdGF0ZS5jb21tb24ubmltLFxuICBmcmllbmRzOiBzdGF0ZSA9PiBzdGF0ZS5mcmllbmRzLmZyaWVuZHMsXG4gIG1zZ3M6IHN0YXRlID0+IHN0YXRlLmNoYXQubXNnc1xufSwge1xuICBzZXRVc2VyXG4vLyAgIHNldE5pbSxcbi8vICAgcmVmcmVzaEZyaWVuZHMsXG4vLyAgIHJlZnJlc2hTZXNzaW9ucyxcbi8vICAgcmVmcmVzaE1zZ3MsXG4vLyAgIHJlZnJlc2hNc2dzQnlUb1xufSlcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENoYXRyb29tcyBleHRlbmRzIHdlcHkucGFnZSB7XG4gIGNvbmZpZyA9IHtcbiAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn6IGK5aSp5a6kJ1xuICB9XG5cbiAgZGF0YSA9IHtcbiAgICByb29tczogW10sXG4gICAgamZVc2VyaWQ6ICcnXG4gIH1cblxuICBtZXRob2RzID0ge1xuICAgIC8vIHB1c2hNc2c6IGZ1bmN0aW9uIChtc2dzKSB7XG4gICAgLy8gICBjb25zdCB7IHJlZnJlc2hNc2dzLCByZWZyZXNoTXNnc0J5VG8gfSA9IHRoaXMubWV0aG9kc1xuICAgIC8vICAgY29uc3QgeyBtZXJnZU1zZ3MgfSA9IHRoaXMubmltXG4gICAgLy8gICBpZiAoIUFycmF5LmlzQXJyYXkobXNncykpIHtcbiAgICAvLyAgICAgbXNncyA9IFttc2dzXVxuICAgIC8vICAgfVxuICAgIC8vICAgY29uc3Qgc2Vzc2lvbklkID0gbXNnc1swXS5zZXNzaW9uSWRcbiAgICAvLyAgIGNvbnN0IHRvID0gbXNnc1swXS50YXJnZXRcbiAgICAvLyAgIGNvbnN0IG1lcmdlZCA9IG1lcmdlTXNncyh0aGlzLm1zZ3Nbc2Vzc2lvbklkXSB8fCBbXSwgbXNncylcbiAgICAvLyAgIGNvbnN0IG1lcmdlZEJ5VG8gPSBtZXJnZU1zZ3ModGhpcy5tc2dzW3RvXSB8fCBbXSwgbXNncylcbiAgICAvLyAgIHJlZnJlc2hNc2dzKHNlc3Npb25JZCwgbWVyZ2VkKVxuICAgIC8vICAgcmVmcmVzaE1zZ3NCeVRvKHRvLCBtZXJnZWRCeVRvKVxuICAgIC8vIH0sXG4gICAgdG9DaGF0cm9vbTogZnVuY3Rpb24oaW5kZXgpIHtcbiAgICAgIGNvbnN0IGlkID0gdGhpcy5yb29tc1tpbmRleF0uaWRcbiAgICAgIGNvbnN0IHBrID0gdGhpcy5yb29tc1tpbmRleF0ucGtcbiAgICAgIGNvbnNvbGUubG9nKHRoaXMucm9vbXNbaW5kZXhdKVxuICAgICAgd2VweS5uYXZpZ2F0ZVRvKHtcbiAgICAgICAgdXJsOiBgL3BhZ2VzL2NoYXRyb29tP2lkPSR7aWR9JnBrPSR7cGt9YFxuICAgICAgfSlcbiAgICB9XG4gIH1cbiAgb25TaGFyZUFwcE1lc3NhZ2UgPSBhc3luYyBmdW5jdGlvbiAocmVzKSB7XG4gICAgY29uc29sZS5sb2coJ+aJp+ihjOS6huWIhuS6qzInKVxuICAgIHZhciBqZmFjY2lkID0gYXdhaXQgd2VweS5nZXRTdG9yYWdlKHtcbiAgICAgIGtleTogJ2pmQWNjaWQnLFxuICAgICAgc3VjY2VzczogZnVuY3Rpb24ocmVzKSB7XG4gICAgICAgIHJldHVybiByZXMuZGF0YVxuICAgICAgfVxuICAgIH0pXG4gICAgcmV0dXJuIHtcbiAgICAgIHRpdGxlOiAn5rGf5bOw5bCP56iL5bqPJyxcbiAgICAgIHBhdGg6IGAvcGFnZXMvY2hhdHJvb21zP2FjY2lkPSR7amZhY2NpZH1gXG4vLyAgICAgIHN1Y2Nlc3M6IGFzeW5jIGZ1bmN0aW9uIChyZXMpIHtcbi8vICAgICAgICBjb25zb2xlLmxvZyhyZXMuc2hhcmVUaWNrZXRzWzBdKVxuLy8gICAgICAgIHZhciBzaGFyZUluZm8gPSBhd2FpdCB3ZXB5LmdldFNoYXJlSW5mbyh7XG4vLyAgICAgICAgICBzaGFyZVRpY2tldDogcmVzLnNoYXJlVGlja2V0c1swXSxcbi8vICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChyZXMpIHtcbi8vICAgICAgICAgICAgcmV0dXJuIHJlc1xuLy8gICAgICAgICAgfVxuLy8gICAgICAgIH0pXG4vLyAgICAgICAgY29uc29sZS5sb2coc2hhcmVJbmZvKVxuLy8gICAgICAgIHZhciBzZXNzaW9uS2V5ID0gYXdhaXQgd2VweS5nZXRTdG9yYWdlKHtcbi8vICAgICAgICAgIGtleTogJ2pmU2Vzc2lvbktleScsXG4vLyAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbihyZXMpIHtcbi8vICAgICAgICAgICAgcmV0dXJuIHJlcy5kYXRhXG4vLyAgICAgICAgICB9XG4vLyAgICAgICAgfSlcbi8vICAgICAgICB2YXIgc2hhcmVQYXJzZSA9IGF3YWl0IGFwaS5zaGFyZVBhcnNpbmcoc2Vzc2lvbktleSwgc2hhcmVJbmZvKVxuLy8gICAgICAgIGNvbnNvbGUubG9nKHNoYXJlUGFyc2UpXG4vLyAgICAgICAgdmFyIHNoYXJlVG9rZW4gPSBhd2FpdCB3ZXB5LmdldFN0b3JhZ2Uoe1xuLy8gICAgICAgICAga2V5OiAnamZUb2tlbicsXG4vLyAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbihyZXMpIHtcbi8vICAgICAgICAgICAgcmV0dXJuIHJlcy5kYXRhXG4vLyAgICAgICAgICB9XG4vLyAgICAgICAgfSlcbi8vICAgICAgICB2YXIgc2hhcmVBY2NpZCA9IGF3YWl0IHdlcHkuZ2V0U3RvcmFnZSh7XG4vLyAgICAgICAgICBrZXk6ICdqZkFjY2lkJyxcbi8vICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlcykge1xuLy8gICAgICAgICAgICByZXR1cm4gcmVzLmRhdGFcbi8vICAgICAgICAgIH1cbi8vICAgICAgICB9KVxuLy8gICAgICAgIHZhciBzaGFyZU9wZW5pZCA9IGF3YWl0IGFwaS5zYXZlT3BlbkdpZChzaGFyZVRva2VuLCBzaGFyZVBhcnNlLCBzaGFyZUFjY2lkKVxuLy8gICAgICAgIGNvbnNvbGUubG9nKHNoYXJlT3BlbmlkKVxuLy8gICAgICB9LFxuLy8gICAgICBmYWlsOiBmdW5jdGlvbiAocmVzKSB7XG4vLyAgICAgICAgY29uc29sZS5sb2cocmVzKVxuLy8gICAgICAgIC8vIOi9rOWPkeWksei0pVxuLy8gICAgICB9XG4gICAgfVxuICB9XG5cbiAgYXN5bmMgb25Mb2FkKG9wdGlvbnMpIHtcbiAgICBjb25zb2xlLmxvZygn5YiG5Lqr5Zue6LCDMicpXG4gICAgY29uc3QgeyBzZXRVc2VyIH0gPSB0aGlzLm1ldGhvZHNcbiAgICAvLyBjb25zdCBwdXNoTXNnID0gdGhpcy5tZXRob2RzLnB1c2hNc2cuYmluZCh0aGlzKVxuICAgIHdlcHkuc2hvd0xvYWRpbmcoKVxuICAgIHZhciBuZXR3b3JrID0gYXdhaXQgd2VweS5zaG93U2hhcmVNZW51KHtcbiAgICAgIHdpdGhTaGFyZVRpY2tldDogdHJ1ZVxuICAgIH0pXG4gICAgY29uc29sZS5sb2cobmV0d29yaylcbi8vICAgIHZhciBuZXR3b3JrMSA9IGF3YWl0IHdlcHkuZ2V0U2hhcmVJbmZvKHtcbi8vICAgICAgc2hhcmVUaWNrZXQ6ICcxYmI5YWY5MC02NmQ5LTQ5N2MtYjFiZi1jZGE0ZDkwNDA4MTcnLFxuLy8gICAgICBjb21wbGV0ZTogZnVuY3Rpb24gKHJlcykge1xuLy8gICAgICAgIHJldHVybiByZXNcbi8vICAgICAgfVxuLy8gICAgfSlcbi8vICAgIGNvbnNvbGUubG9nKG5ldHdvcmsxKVxuICAgIGNvbnN0IHsgY29kZSB9ID0gYXdhaXQgd2VweS5sb2dpbigpXG4gICAgY29uc3QgeyBkYXRhIH0gPSBhd2FpdCB3ZXB5LnJlcXVlc3Qoe1xuICAgICAgdXJsOiBgaHR0cHM6Ly9hcGkud2VpeGluLnFxLmNvbS9zbnMvanNjb2RlMnNlc3Npb24/YXBwaWQ9JHtjb25maWcuYXBwSWR9JnNlY3JldD0ke2NvbmZpZy5hcHBTZWNyZXRlfSZqc19jb2RlPSR7Y29kZX0mZ3JhbnRfdHlwZT1hdXRob3JpemF0aW9uX2NvZGVgXG4gICAgfSlcbiAgICBjb25zdCB7IG9wZW5pZCB9ID0gZGF0YVxuICAgIGNvbnN0IHsgc2Vzc2lvbl9rZXkgfSA9IGRhdGFcbiAgICB3ZXB5LnNldFN0b3JhZ2Uoe1xuICAgICAga2V5OiAnamZTZXNzaW9uS2V5JyxcbiAgICAgIGRhdGE6IHNlc3Npb25fa2V5fSlcbiAgICB3ZXB5LnNldFN0b3JhZ2Uoe1xuICAgICAga2V5OiAnamZBY2NpZCcsXG4gICAgICBkYXRhOiBvcGVuaWR9KVxuICAgIGNvbnN0IHsgdXNlckluZm8gfSA9IGF3YWl0IHdlcHkuZ2V0VXNlckluZm8oKVxuICAgIGNvbnN0IHBhc3N3b3JkID0gUi50YWtlTGFzdCg1KShvcGVuaWQpXG5cbiAgICBjb25zdCB1c2VyID0ge1xuICAgICAgLi4udXNlckluZm8sXG4gICAgICBhY2NpZDogb3BlbmlkLnRvTG93ZXJDYXNlKClcbiAgICB9XG4gICAgc2V0VXNlcih1c2VyKVxuICAgIC8vIOWmguaenOeUqOaIt+WwmuacquWcqCDnvZHmmJPkupHms6jlhowg5YiZ5YWI5rOo5YaMXG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHRva2VuID0gYXdhaXQgTklNLmxvZ2luKG9wZW5pZClcbiAgICAgIGNvbnN0IHVzZXJJZCA9IGF3YWl0IGFwaS5nZXRUb2tlblVzZXJJZChvcGVuaWQsIHBhc3N3b3JkLnRvTG93ZXJDYXNlKCkpXG4gICAgICB0aGlzLmpmVXNlcmlkID0gdXNlcklkLmlkXG4gICAgICBjb25zdCBUb2tlbiA9IHVzZXJJZC5Ub2tlblxuICAgICAgaWYgKG9wdGlvbnMuYWNjaWQgJiYgb3B0aW9ucy5hY2NpZCAhPT0gb3BlbmlkKSB7XG4gICAgICAgIGF3YWl0IGFwaS5jaGVja09wZW5HaWQoVG9rZW4sIG9wdGlvbnMuYWNjaWQpXG4gICAgICB9XG4gICAgICB3ZXB5LnNldFN0b3JhZ2Uoe1xuICAgICAgICBrZXk6ICdqZlVzZXJJZCcsXG4gICAgICAgIGRhdGE6IHVzZXJJZC5pZH0pXG4gICAgICB3ZXB5LnNldFN0b3JhZ2Uoe1xuICAgICAgICBrZXk6ICdqZlRva2VuJyxcbiAgICAgICAgZGF0YTogVG9rZW59KVxuICAgICAgaWYgKCFUb2tlbikge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ3VzZXIgbm90IGV4aXN0JylcbiAgICAgIH1cblxuICAgICAgc2V0VXNlcih7XG4gICAgICAgIC4uLnRoaXMudXNlcixcbiAgICAgICAgamZUb2tlbjogVG9rZW4sXG4gICAgICAgIG5pbVRva2VuOiB0b2tlblxuICAgICAgfSlcbiAgICAgIC8vIOWIneWni+WMliBuaW0g5a+56LGhXG4gICAgICAvLyBjb25zdCBuaW0gPSBOSU0uZ2V0SW5zdGFuY2Uoe1xuICAgICAgLy8gICBhY2NvdW50OiB0aGlzLnVzZXIuYWNjaWQsXG4gICAgICAvLyAgIHRva2VuOiB0b2tlbixcbiAgICAgIC8vICAgZGVidWc6IHRydWUsXG4gICAgICAvLyAgIG9udXNlcnM6IGZyaWVuZHMgPT4ge1xuICAgICAgLy8gICAgIHJlZnJlc2hGcmllbmRzKGZyaWVuZHMubWFwKGdldEZyaWVuZCkpXG4gICAgICAvLyAgICAgdGhpcy4kYXBwbHkoKVxuICAgICAgLy8gICB9LFxuICAgICAgLy8gICBvbnNlc3Npb25zOiBzZXNzaW9ucyA9PiB7XG4gICAgICAvLyAgICAgY29uc3QgbWVyZ2VkID0gbmltLm1lcmdlU2Vzc2lvbnModGhpcy5zZXNzaW9ucywgc2Vzc2lvbnMpXG4gICAgICAvLyAgICAgcmVmcmVzaFNlc3Npb25zKG1lcmdlZClcbiAgICAgIC8vICAgICB0aGlzLiRhcHBseSgpXG4gICAgICAvLyAgIH0sXG4gICAgICAvLyAgIG9udXBkYXRlc2Vzc2lvbjogc2Vzc2lvbiA9PiB7XG4gICAgICAvLyAgICAgY29uc3QgbWVyZ2VkID0gbmltLm1lcmdlU2Vzc2lvbnModGhpcy5zZXNzaW9ucywgc2Vzc2lvbilcbiAgICAgIC8vICAgICByZWZyZXNoU2Vzc2lvbnMobWVyZ2VkKVxuICAgICAgLy8gICAgIHRoaXMuJGFwcGx5KClcbiAgICAgIC8vICAgfSxcbiAgICAgIC8vICAgb25tc2c6IG1zZyA9PiB7XG4gICAgICAvLyAgICAgcHVzaE1zZyhtc2cpXG4gICAgICAvLyAgICAgdGhpcy4kYXBwbHkoKVxuICAgICAgLy8gICB9LFxuICAgICAgLy8gICBvbnJvYW1pbmdtc2dzOiBvYmogPT4ge1xuICAgICAgLy8gICAgIHB1c2hNc2cob2JqLm1zZ3MpXG4gICAgICAvLyAgIH0sXG4gICAgICAvLyAgIG9ub2ZmbGluZW1zZ3M6IG9iaiA9PiB7XG4gICAgICAvLyAgICAgcHVzaE1zZyhvYmoubXNncylcbiAgICAgIC8vICAgfVxuICAgICAgLy8gfSlcbiAgICAgIC8vXG4gICAgICAvLyBzZXROaW0obmltKVxuXG4gICAgICAvLyDmi4nlj5bogYrlpKnlrqTliJfooahcbiAgICAgIGNvbnN0IHJvb21zID0gYXdhaXQgY2hhdHJvb21BcGkuZ2V0TGlzdCgpXG4gICAgICBjb25zdCBpZHMgPSByb29tcy5tYXAoUi5wcm9wKCdyb29taWQnKSlcbiAgICAgIGNvbnN0IGNoYXRyb29tcyA9IGF3YWl0IE5JTS5nZXRDaGF0cm9vbXMoaWRzKVxuICAgICAgY29uc3QgbWVtYmVycyA9IGNoYXRyb29tcy5tYXAoUi5wcm9wKCdvbmxpbmV1c2VyY291bnQnKSlcbiAgICAgIHRoaXMucm9vbXMgPSByb29tcy5tYXAoKHJvb20sIGluZGV4KSA9PiAoe1xuICAgICAgICBpZDogcm9vbS5yb29taWQsXG4gICAgICAgIG5hbWU6IHJvb20ubmFtZSxcbiAgICAgICAgY292ZXI6IHJvb20ucGljX3VybCxcbiAgICAgICAgbWVtZWJlcnM6IG1lbWJlcnNbaW5kZXhdLFxuICAgICAgICBhbm5vdW5jZW1lbnQ6IHJvb20uYW5ub3VuY2VtZW50LFxuICAgICAgICBwazogcm9vbS5pZFxuICAgICAgfSkpXG4gICAgICB0aGlzLiRhcHBseSgpXG4gICAgICB3ZXB5LmhpZGVMb2FkaW5nKClcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBsb2cuZXJyb3Ioe1xuICAgICAgICBwYWdlOiAnY2hhdHJvb21zJyxcbiAgICAgICAgb3ByOiAnaW5pdCcsXG4gICAgICAgIGluZm86IGVcbiAgICAgIH0pXG4gICAgICB3ZXB5Lm5hdmlnYXRlVG8oe1xuICAgICAgICB1cmw6ICcvcGFnZXMvcmVnaXN0ZXInXG4gICAgICB9KVxuICAgIH1cbiAgfVxufVxuIl19