'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

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
        var _ref3, data;

        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                console.log('执行了分享2');
                _context.next = 3;
                return _wepy2.default.getStorage({ key: 'jfAccid' });

              case 3:
                _ref3 = _context.sent;
                data = _ref3.data;

                //    var jfaccid = await wepy.getStorage({
                //      key: 'jfAccid',
                //      success: function(res) {
                //        return res
                //      }
                //    })
                console.log('/pages/chatrooms?accid=' + data);
                return _context.abrupt('return', {
                  title: '江峰小程序',
                  path: '/pages/chatrooms?id=1212'
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

              case 7:
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
      var _ref4 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee2(options) {
        var setUser, network, _ref5, code, _ref6, data, openid, _ref7, userInfo, password, user, token, userId, Token, rooms, ids, chatrooms, members;

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
                _context2.next = 9;
                return _wepy2.default.login();

              case 9:
                _ref5 = _context2.sent;
                code = _ref5.code;
                _context2.next = 13;
                return _wepy2.default.request({
                  url: 'https://api.weixin.qq.com/sns/jscode2session?appid=' + _config.wx.appId + '&secret=' + _config.wx.appSecrete + '&js_code=' + code + '&grant_type=authorization_code'
                });

              case 13:
                _ref6 = _context2.sent;
                data = _ref6.data;
                openid = data.openid;
                //    const { session_key } = data
                //    wepy.setStorage({
                //      key: 'jfSessionKey',
                //      data: session_key})
                //    wepy.setStorage({
                //      key: 'jfAccid',
                //      data: openid})

                _context2.next = 18;
                return _wepy2.default.getUserInfo();

              case 18:
                _ref7 = _context2.sent;
                userInfo = _ref7.userInfo;
                password = _ramda2.default.takeLast(5)(openid);
                user = (0, _extends3.default)({}, userInfo, {
                  accid: openid.toLowerCase()
                });

                setUser(user);
                // 如果用户尚未在 网易云注册 则先注册
                _context2.prev = 23;
                _context2.next = 26;
                return _nim2.default.login(openid);

              case 26:
                token = _context2.sent;
                _context2.next = 29;
                return api.getTokenUserId(openid, password.toLowerCase());

              case 29:
                userId = _context2.sent;

                this.jfUserid = userId.id;
                Token = userId.Token;

                console.log('accid', options);
                if (options.accid && options.accid !== openid) {
                  _wepy2.default.setStorage({
                    key: 'backAccid',
                    data: options.accid });
                  console.log('加积分1', options.accid);
                } else {
                  _wepy2.default.setStorage({
                    key: 'backAccid',
                    data: '123' });
                }
                //      wepy.setStorage({
                //        key: 'jfUserId',
                //        data: userId.id})
                //      wepy.setStorage({
                //        key: 'jfToken',
                //        data: Token})

                if (Token) {
                  _context2.next = 36;
                  break;
                }

                throw new Error('user not exist');

              case 36:

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
                _context2.next = 39;
                return chatroomApi.getList();

              case 39:
                rooms = _context2.sent;
                ids = rooms.map(_ramda2.default.prop('roomid'));
                _context2.next = 43;
                return _nim2.default.getChatrooms(ids);

              case 43:
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
                _context2.next = 54;
                break;

              case 50:
                _context2.prev = 50;
                _context2.t0 = _context2['catch'](23);

                log.error({
                  page: 'chatrooms',
                  opr: 'init',
                  info: _context2.t0
                });
                _wepy2.default.navigateTo({
                  url: '/pages/register'
                });

              case 54:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, this, [[23, 50]]);
      }));

      function onLoad(_x2) {
        return _ref4.apply(this, arguments);
      }

      return onLoad;
    }()
  }, {
    key: 'onShow',
    value: function () {
      var _ref8 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee3(options) {
        return _regenerator2.default.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                console.log('accidShow', options);
                //    if (options.accid && options.accid !== openid) {
                //      wepy.setStorage({
                //        key: 'backAccid',
                //        data: options.accid})
                //      console.log('加积分1', options.accid)
                //    } else {
                //      wepy.setStorage({
                //        key: 'backAccid',
                //        data: '123'})
                //    }

              case 1:
              case 'end':
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function onShow(_x3) {
        return _ref8.apply(this, arguments);
      }

      return onShow;
    }()
  }]);
  return Chatrooms;
}(_wepy2.default.page)) || _class);
exports.default = Chatrooms;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoYXRyb29tcy5qcyJdLCJuYW1lcyI6WyJsb2ciLCJjaGF0cm9vbUFwaSIsImFwaSIsIkNoYXRyb29tcyIsInVzZXIiLCJzdGF0ZSIsImNvbW1vbiIsIm5pbSIsImZyaWVuZHMiLCJtc2dzIiwiY2hhdCIsInNldFVzZXIiLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiZGF0YSIsInJvb21zIiwiamZVc2VyaWQiLCJtZXRob2RzIiwidG9DaGF0cm9vbSIsImluZGV4IiwiaWQiLCJwayIsImNvbnNvbGUiLCJuYXZpZ2F0ZVRvIiwidXJsIiwib25TaGFyZUFwcE1lc3NhZ2UiLCJyZXMiLCJnZXRTdG9yYWdlIiwia2V5IiwidGl0bGUiLCJwYXRoIiwib3B0aW9ucyIsInNob3dMb2FkaW5nIiwic2hvd1NoYXJlTWVudSIsIndpdGhTaGFyZVRpY2tldCIsIm5ldHdvcmsiLCJsb2dpbiIsImNvZGUiLCJyZXF1ZXN0IiwiYXBwSWQiLCJhcHBTZWNyZXRlIiwib3BlbmlkIiwiZ2V0VXNlckluZm8iLCJ1c2VySW5mbyIsInBhc3N3b3JkIiwidGFrZUxhc3QiLCJhY2NpZCIsInRvTG93ZXJDYXNlIiwidG9rZW4iLCJnZXRUb2tlblVzZXJJZCIsInVzZXJJZCIsIlRva2VuIiwic2V0U3RvcmFnZSIsIkVycm9yIiwiamZUb2tlbiIsIm5pbVRva2VuIiwidXNlckRhdGEiLCJnZXRMaXN0IiwiaWRzIiwibWFwIiwicHJvcCIsImdldENoYXRyb29tcyIsImNoYXRyb29tcyIsIm1lbWJlcnMiLCJyb29tIiwicm9vbWlkIiwibmFtZSIsImNvdmVyIiwicGljX3VybCIsIm1lbWViZXJzIiwiYW5ub3VuY2VtZW50IiwiJGFwcGx5IiwiaGlkZUxvYWRpbmciLCJlcnJvciIsInBhZ2UiLCJvcHIiLCJpbmZvIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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QkFBdkJ2RSxTIiwiZmlsZSI6ImNoYXRyb29tcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuLy8gY29uc3QgZ2V0RnJpZW5kID0gZnVuY3Rpb24oZnJpZW5kKSB7XG4vLyAgIHJldHVybiB7XG4vLyAgICAgbmlja25hbWU6IGZyaWVuZC5uaWNrLFxuLy8gICAgIGF2YXRhcjogZnJpZW5kLmF2YXRhcixcbi8vICAgICBhY2NpZDogZnJpZW5kLmFjY291bnRcbi8vICAgfVxuLy8gfVxuXG5pbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuaW1wb3J0IFIgZnJvbSAnLi4vbGlicy9yYW1kYSdcbmltcG9ydCAqIGFzIGxvZyBmcm9tICcuLi91dGlscy9sb2cnXG5cbmltcG9ydCB7XG4gIHd4IGFzIGNvbmZpZ1xufSBmcm9tICcuLi9jb25maWcnXG5cbmltcG9ydCBOSU0gZnJvbSAnLi4vdXRpbHMvbmltJ1xuXG5pbXBvcnQge1xuICBzZXRVc2VyXG4gIC8vIHNldE5pbVxufSBmcm9tICcuLi9hY3Rpb25zL2NvbW1vbidcblxuLy8gaW1wb3J0IHtcbi8vICAgcmVmcmVzaFNlc3Npb25zXG4vLyB9IGZyb20gJy4uL2FjdGlvbnMvc2Vzc2lvbnMnXG4vL1xuLy8gaW1wb3J0IHtcbi8vICAgcmVmcmVzaEZyaWVuZHNcbi8vIH0gZnJvbSAnLi4vYWN0aW9ucy9mcmllbmRzJ1xuLy9cbi8vIGltcG9ydCB7XG4vLyAgIHJlZnJlc2hNc2dzLFxuLy8gICByZWZyZXNoTXNnc0J5VG9cbi8vIH0gZnJvbSAnLi4vYWN0aW9ucy9jaGF0J1xuXG5pbXBvcnQge1xuICBjb25uZWN0XG59IGZyb20gJ3dlcHktcmVkdXgnXG5cbmltcG9ydCAqIGFzIGNoYXRyb29tQXBpIGZyb20gJy4uL2FwaXMvY2hhdHJvb20nXG5pbXBvcnQgKiBhcyBhcGkgZnJvbSAnLi4vYXBpcy9hY2NvdW50J1xuXG5AY29ubmVjdCh7XG4gIHVzZXI6IHN0YXRlID0+IHN0YXRlLmNvbW1vbi51c2VyLFxuICBuaW06IHN0YXRlID0+IHN0YXRlLmNvbW1vbi5uaW0sXG4gIGZyaWVuZHM6IHN0YXRlID0+IHN0YXRlLmZyaWVuZHMuZnJpZW5kcyxcbiAgbXNnczogc3RhdGUgPT4gc3RhdGUuY2hhdC5tc2dzXG59LCB7XG4gIHNldFVzZXJcbi8vICAgc2V0TmltLFxuLy8gICByZWZyZXNoRnJpZW5kcyxcbi8vICAgcmVmcmVzaFNlc3Npb25zLFxuLy8gICByZWZyZXNoTXNncyxcbi8vICAgcmVmcmVzaE1zZ3NCeVRvXG59KVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2hhdHJvb21zIGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgY29uZmlnID0ge1xuICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICfogYrlpKnlrqQnXG4gIH1cblxuICBkYXRhID0ge1xuICAgIHJvb21zOiBbXSxcbiAgICBqZlVzZXJpZDogJydcbiAgfVxuXG4gIG1ldGhvZHMgPSB7XG4gICAgLy8gcHVzaE1zZzogZnVuY3Rpb24gKG1zZ3MpIHtcbiAgICAvLyAgIGNvbnN0IHsgcmVmcmVzaE1zZ3MsIHJlZnJlc2hNc2dzQnlUbyB9ID0gdGhpcy5tZXRob2RzXG4gICAgLy8gICBjb25zdCB7IG1lcmdlTXNncyB9ID0gdGhpcy5uaW1cbiAgICAvLyAgIGlmICghQXJyYXkuaXNBcnJheShtc2dzKSkge1xuICAgIC8vICAgICBtc2dzID0gW21zZ3NdXG4gICAgLy8gICB9XG4gICAgLy8gICBjb25zdCBzZXNzaW9uSWQgPSBtc2dzWzBdLnNlc3Npb25JZFxuICAgIC8vICAgY29uc3QgdG8gPSBtc2dzWzBdLnRhcmdldFxuICAgIC8vICAgY29uc3QgbWVyZ2VkID0gbWVyZ2VNc2dzKHRoaXMubXNnc1tzZXNzaW9uSWRdIHx8IFtdLCBtc2dzKVxuICAgIC8vICAgY29uc3QgbWVyZ2VkQnlUbyA9IG1lcmdlTXNncyh0aGlzLm1zZ3NbdG9dIHx8IFtdLCBtc2dzKVxuICAgIC8vICAgcmVmcmVzaE1zZ3Moc2Vzc2lvbklkLCBtZXJnZWQpXG4gICAgLy8gICByZWZyZXNoTXNnc0J5VG8odG8sIG1lcmdlZEJ5VG8pXG4gICAgLy8gfSxcbiAgICB0b0NoYXRyb29tOiBmdW5jdGlvbihpbmRleCkge1xuICAgICAgY29uc3QgaWQgPSB0aGlzLnJvb21zW2luZGV4XS5pZFxuICAgICAgY29uc3QgcGsgPSB0aGlzLnJvb21zW2luZGV4XS5wa1xuICAgICAgY29uc29sZS5sb2codGhpcy5yb29tc1tpbmRleF0pXG4gICAgICB3ZXB5Lm5hdmlnYXRlVG8oe1xuICAgICAgICB1cmw6IGAvcGFnZXMvY2hhdHJvb20/aWQ9JHtpZH0mcGs9JHtwa31gXG4gICAgICB9KVxuICAgIH1cbiAgfVxuICBvblNoYXJlQXBwTWVzc2FnZSA9IGFzeW5jIGZ1bmN0aW9uIChyZXMpIHtcbiAgICBjb25zb2xlLmxvZygn5omn6KGM5LqG5YiG5LqrMicpXG4gICAgdmFyIHsgZGF0YSB9ID0gYXdhaXQgd2VweS5nZXRTdG9yYWdlKHtrZXk6ICdqZkFjY2lkJ30pXG4vLyAgICB2YXIgamZhY2NpZCA9IGF3YWl0IHdlcHkuZ2V0U3RvcmFnZSh7XG4vLyAgICAgIGtleTogJ2pmQWNjaWQnLFxuLy8gICAgICBzdWNjZXNzOiBmdW5jdGlvbihyZXMpIHtcbi8vICAgICAgICByZXR1cm4gcmVzXG4vLyAgICAgIH1cbi8vICAgIH0pXG4gICAgY29uc29sZS5sb2coYC9wYWdlcy9jaGF0cm9vbXM/YWNjaWQ9JHtkYXRhfWApXG4gICAgcmV0dXJuIHtcbiAgICAgIHRpdGxlOiAn5rGf5bOw5bCP56iL5bqPJyxcbiAgICAgIHBhdGg6IGAvcGFnZXMvY2hhdHJvb21zP2lkPTEyMTJgXG4vLyAgICAgIHN1Y2Nlc3M6IGFzeW5jIGZ1bmN0aW9uIChyZXMpIHtcbi8vICAgICAgICBjb25zb2xlLmxvZyhyZXMuc2hhcmVUaWNrZXRzWzBdKVxuLy8gICAgICAgIHZhciBzaGFyZUluZm8gPSBhd2FpdCB3ZXB5LmdldFNoYXJlSW5mbyh7XG4vLyAgICAgICAgICBzaGFyZVRpY2tldDogcmVzLnNoYXJlVGlja2V0c1swXSxcbi8vICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChyZXMpIHtcbi8vICAgICAgICAgICAgcmV0dXJuIHJlc1xuLy8gICAgICAgICAgfVxuLy8gICAgICAgIH0pXG4vLyAgICAgICAgY29uc29sZS5sb2coc2hhcmVJbmZvKVxuLy8gICAgICAgIHZhciBzZXNzaW9uS2V5ID0gYXdhaXQgd2VweS5nZXRTdG9yYWdlKHtcbi8vICAgICAgICAgIGtleTogJ2pmU2Vzc2lvbktleScsXG4vLyAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbihyZXMpIHtcbi8vICAgICAgICAgICAgcmV0dXJuIHJlcy5kYXRhXG4vLyAgICAgICAgICB9XG4vLyAgICAgICAgfSlcbi8vICAgICAgICB2YXIgc2hhcmVQYXJzZSA9IGF3YWl0IGFwaS5zaGFyZVBhcnNpbmcoc2Vzc2lvbktleSwgc2hhcmVJbmZvKVxuLy8gICAgICAgIGNvbnNvbGUubG9nKHNoYXJlUGFyc2UpXG4vLyAgICAgICAgdmFyIHNoYXJlVG9rZW4gPSBhd2FpdCB3ZXB5LmdldFN0b3JhZ2Uoe1xuLy8gICAgICAgICAga2V5OiAnamZUb2tlbicsXG4vLyAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbihyZXMpIHtcbi8vICAgICAgICAgICAgcmV0dXJuIHJlcy5kYXRhXG4vLyAgICAgICAgICB9XG4vLyAgICAgICAgfSlcbi8vICAgICAgICB2YXIgc2hhcmVBY2NpZCA9IGF3YWl0IHdlcHkuZ2V0U3RvcmFnZSh7XG4vLyAgICAgICAgICBrZXk6ICdqZkFjY2lkJyxcbi8vICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlcykge1xuLy8gICAgICAgICAgICByZXR1cm4gcmVzLmRhdGFcbi8vICAgICAgICAgIH1cbi8vICAgICAgICB9KVxuLy8gICAgICAgIHZhciBzaGFyZU9wZW5pZCA9IGF3YWl0IGFwaS5zYXZlT3BlbkdpZChzaGFyZVRva2VuLCBzaGFyZVBhcnNlLCBzaGFyZUFjY2lkKVxuLy8gICAgICAgIGNvbnNvbGUubG9nKHNoYXJlT3BlbmlkKVxuLy8gICAgICB9LFxuLy8gICAgICBmYWlsOiBmdW5jdGlvbiAocmVzKSB7XG4vLyAgICAgICAgY29uc29sZS5sb2cocmVzKVxuLy8gICAgICAgIC8vIOi9rOWPkeWksei0pVxuLy8gICAgICB9XG4gICAgfVxuICB9XG5cbiAgYXN5bmMgb25Mb2FkKG9wdGlvbnMpIHtcbiAgICBjb25zb2xlLmxvZygn5YiG5Lqr5Zue6LCDMicpXG4gICAgY29uc3QgeyBzZXRVc2VyIH0gPSB0aGlzLm1ldGhvZHNcbiAgICAvLyBjb25zdCBwdXNoTXNnID0gdGhpcy5tZXRob2RzLnB1c2hNc2cuYmluZCh0aGlzKVxuICAgIHdlcHkuc2hvd0xvYWRpbmcoKVxuICAgIHZhciBuZXR3b3JrID0gYXdhaXQgd2VweS5zaG93U2hhcmVNZW51KHtcbiAgICAgIHdpdGhTaGFyZVRpY2tldDogdHJ1ZVxuICAgIH0pXG4gICAgY29uc29sZS5sb2cobmV0d29yaylcbiAgICBjb25zdCB7IGNvZGUgfSA9IGF3YWl0IHdlcHkubG9naW4oKVxuICAgIGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgd2VweS5yZXF1ZXN0KHtcbiAgICAgIHVybDogYGh0dHBzOi8vYXBpLndlaXhpbi5xcS5jb20vc25zL2pzY29kZTJzZXNzaW9uP2FwcGlkPSR7Y29uZmlnLmFwcElkfSZzZWNyZXQ9JHtjb25maWcuYXBwU2VjcmV0ZX0manNfY29kZT0ke2NvZGV9JmdyYW50X3R5cGU9YXV0aG9yaXphdGlvbl9jb2RlYFxuICAgIH0pXG4gICAgY29uc3QgeyBvcGVuaWQgfSA9IGRhdGFcbi8vICAgIGNvbnN0IHsgc2Vzc2lvbl9rZXkgfSA9IGRhdGFcbi8vICAgIHdlcHkuc2V0U3RvcmFnZSh7XG4vLyAgICAgIGtleTogJ2pmU2Vzc2lvbktleScsXG4vLyAgICAgIGRhdGE6IHNlc3Npb25fa2V5fSlcbi8vICAgIHdlcHkuc2V0U3RvcmFnZSh7XG4vLyAgICAgIGtleTogJ2pmQWNjaWQnLFxuLy8gICAgICBkYXRhOiBvcGVuaWR9KVxuICAgIGNvbnN0IHsgdXNlckluZm8gfSA9IGF3YWl0IHdlcHkuZ2V0VXNlckluZm8oKVxuICAgIGNvbnN0IHBhc3N3b3JkID0gUi50YWtlTGFzdCg1KShvcGVuaWQpXG5cbiAgICBjb25zdCB1c2VyID0ge1xuICAgICAgLi4udXNlckluZm8sXG4gICAgICBhY2NpZDogb3BlbmlkLnRvTG93ZXJDYXNlKClcbiAgICB9XG4gICAgc2V0VXNlcih1c2VyKVxuICAgIC8vIOWmguaenOeUqOaIt+WwmuacquWcqCDnvZHmmJPkupHms6jlhowg5YiZ5YWI5rOo5YaMXG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHRva2VuID0gYXdhaXQgTklNLmxvZ2luKG9wZW5pZClcbiAgICAgIGNvbnN0IHVzZXJJZCA9IGF3YWl0IGFwaS5nZXRUb2tlblVzZXJJZChvcGVuaWQsIHBhc3N3b3JkLnRvTG93ZXJDYXNlKCkpXG4gICAgICB0aGlzLmpmVXNlcmlkID0gdXNlcklkLmlkXG4gICAgICBjb25zdCBUb2tlbiA9IHVzZXJJZC5Ub2tlblxuICAgICAgY29uc29sZS5sb2coJ2FjY2lkJywgb3B0aW9ucylcbiAgICAgIGlmIChvcHRpb25zLmFjY2lkICYmIG9wdGlvbnMuYWNjaWQgIT09IG9wZW5pZCkge1xuICAgICAgICB3ZXB5LnNldFN0b3JhZ2Uoe1xuICAgICAgICAgIGtleTogJ2JhY2tBY2NpZCcsXG4gICAgICAgICAgZGF0YTogb3B0aW9ucy5hY2NpZH0pXG4gICAgICAgIGNvbnNvbGUubG9nKCfliqDnp6/liIYxJywgb3B0aW9ucy5hY2NpZClcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHdlcHkuc2V0U3RvcmFnZSh7XG4gICAgICAgICAga2V5OiAnYmFja0FjY2lkJyxcbiAgICAgICAgICBkYXRhOiAnMTIzJ30pXG4gICAgICB9XG4vLyAgICAgIHdlcHkuc2V0U3RvcmFnZSh7XG4vLyAgICAgICAga2V5OiAnamZVc2VySWQnLFxuLy8gICAgICAgIGRhdGE6IHVzZXJJZC5pZH0pXG4vLyAgICAgIHdlcHkuc2V0U3RvcmFnZSh7XG4vLyAgICAgICAga2V5OiAnamZUb2tlbicsXG4vLyAgICAgICAgZGF0YTogVG9rZW59KVxuICAgICAgaWYgKCFUb2tlbikge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ3VzZXIgbm90IGV4aXN0JylcbiAgICAgIH1cblxuICAgICAgc2V0VXNlcih7XG4gICAgICAgIC4uLnRoaXMudXNlcixcbiAgICAgICAgamZUb2tlbjogVG9rZW4sXG4gICAgICAgIG5pbVRva2VuOiB0b2tlbixcbiAgICAgICAgdXNlckRhdGE6IHVzZXJJZFxuICAgICAgfSlcbiAgICAgIC8vIOWIneWni+WMliBuaW0g5a+56LGhXG4gICAgICAvLyBjb25zdCBuaW0gPSBOSU0uZ2V0SW5zdGFuY2Uoe1xuICAgICAgLy8gICBhY2NvdW50OiB0aGlzLnVzZXIuYWNjaWQsXG4gICAgICAvLyAgIHRva2VuOiB0b2tlbixcbiAgICAgIC8vICAgZGVidWc6IHRydWUsXG4gICAgICAvLyAgIG9udXNlcnM6IGZyaWVuZHMgPT4ge1xuICAgICAgLy8gICAgIHJlZnJlc2hGcmllbmRzKGZyaWVuZHMubWFwKGdldEZyaWVuZCkpXG4gICAgICAvLyAgICAgdGhpcy4kYXBwbHkoKVxuICAgICAgLy8gICB9LFxuICAgICAgLy8gICBvbnNlc3Npb25zOiBzZXNzaW9ucyA9PiB7XG4gICAgICAvLyAgICAgY29uc3QgbWVyZ2VkID0gbmltLm1lcmdlU2Vzc2lvbnModGhpcy5zZXNzaW9ucywgc2Vzc2lvbnMpXG4gICAgICAvLyAgICAgcmVmcmVzaFNlc3Npb25zKG1lcmdlZClcbiAgICAgIC8vICAgICB0aGlzLiRhcHBseSgpXG4gICAgICAvLyAgIH0sXG4gICAgICAvLyAgIG9udXBkYXRlc2Vzc2lvbjogc2Vzc2lvbiA9PiB7XG4gICAgICAvLyAgICAgY29uc3QgbWVyZ2VkID0gbmltLm1lcmdlU2Vzc2lvbnModGhpcy5zZXNzaW9ucywgc2Vzc2lvbilcbiAgICAgIC8vICAgICByZWZyZXNoU2Vzc2lvbnMobWVyZ2VkKVxuICAgICAgLy8gICAgIHRoaXMuJGFwcGx5KClcbiAgICAgIC8vICAgfSxcbiAgICAgIC8vICAgb25tc2c6IG1zZyA9PiB7XG4gICAgICAvLyAgICAgcHVzaE1zZyhtc2cpXG4gICAgICAvLyAgICAgdGhpcy4kYXBwbHkoKVxuICAgICAgLy8gICB9LFxuICAgICAgLy8gICBvbnJvYW1pbmdtc2dzOiBvYmogPT4ge1xuICAgICAgLy8gICAgIHB1c2hNc2cob2JqLm1zZ3MpXG4gICAgICAvLyAgIH0sXG4gICAgICAvLyAgIG9ub2ZmbGluZW1zZ3M6IG9iaiA9PiB7XG4gICAgICAvLyAgICAgcHVzaE1zZyhvYmoubXNncylcbiAgICAgIC8vICAgfVxuICAgICAgLy8gfSlcbiAgICAgIC8vXG4gICAgICAvLyBzZXROaW0obmltKVxuXG4gICAgICAvLyDmi4nlj5bogYrlpKnlrqTliJfooahcbiAgICAgIGNvbnN0IHJvb21zID0gYXdhaXQgY2hhdHJvb21BcGkuZ2V0TGlzdCgpXG4gICAgICBjb25zdCBpZHMgPSByb29tcy5tYXAoUi5wcm9wKCdyb29taWQnKSlcbiAgICAgIGNvbnN0IGNoYXRyb29tcyA9IGF3YWl0IE5JTS5nZXRDaGF0cm9vbXMoaWRzKVxuICAgICAgY29uc3QgbWVtYmVycyA9IGNoYXRyb29tcy5tYXAoUi5wcm9wKCdvbmxpbmV1c2VyY291bnQnKSlcbiAgICAgIHRoaXMucm9vbXMgPSByb29tcy5tYXAoKHJvb20sIGluZGV4KSA9PiAoe1xuICAgICAgICBpZDogcm9vbS5yb29taWQsXG4gICAgICAgIG5hbWU6IHJvb20ubmFtZSxcbiAgICAgICAgY292ZXI6IHJvb20ucGljX3VybCxcbiAgICAgICAgbWVtZWJlcnM6IG1lbWJlcnNbaW5kZXhdLFxuICAgICAgICBhbm5vdW5jZW1lbnQ6IHJvb20uYW5ub3VuY2VtZW50LFxuICAgICAgICBwazogcm9vbS5pZFxuICAgICAgfSkpXG4gICAgICB0aGlzLiRhcHBseSgpXG4gICAgICB3ZXB5LmhpZGVMb2FkaW5nKClcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBsb2cuZXJyb3Ioe1xuICAgICAgICBwYWdlOiAnY2hhdHJvb21zJyxcbiAgICAgICAgb3ByOiAnaW5pdCcsXG4gICAgICAgIGluZm86IGVcbiAgICAgIH0pXG4gICAgICB3ZXB5Lm5hdmlnYXRlVG8oe1xuICAgICAgICB1cmw6ICcvcGFnZXMvcmVnaXN0ZXInXG4gICAgICB9KVxuICAgIH1cbiAgfVxuICBhc3luYyBvblNob3cob3B0aW9ucykge1xuICAgIGNvbnNvbGUubG9nKCdhY2NpZFNob3cnLCBvcHRpb25zKVxuLy8gICAgaWYgKG9wdGlvbnMuYWNjaWQgJiYgb3B0aW9ucy5hY2NpZCAhPT0gb3BlbmlkKSB7XG4vLyAgICAgIHdlcHkuc2V0U3RvcmFnZSh7XG4vLyAgICAgICAga2V5OiAnYmFja0FjY2lkJyxcbi8vICAgICAgICBkYXRhOiBvcHRpb25zLmFjY2lkfSlcbi8vICAgICAgY29uc29sZS5sb2coJ+WKoOenr+WIhjEnLCBvcHRpb25zLmFjY2lkKVxuLy8gICAgfSBlbHNlIHtcbi8vICAgICAgd2VweS5zZXRTdG9yYWdlKHtcbi8vICAgICAgICBrZXk6ICdiYWNrQWNjaWQnLFxuLy8gICAgICAgIGRhdGE6ICcxMjMnfSlcbi8vICAgIH1cbiAgfVxufVxuXG4iXX0=