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

                if (options.accid && options.accid !== openid) {
                  _wepy2.default.setStorage({
                    key: 'backAccid',
                    data: options.accid });
                }
                _wepy2.default.setStorage({
                  key: 'jfUserId',
                  data: userId.id });
                _wepy2.default.setStorage({
                  key: 'jfToken',
                  data: Token });

                if (Token) {
                  _context2.next = 40;
                  break;
                }

                throw new Error('user not exist');

              case 40:

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
                _context2.next = 43;
                return chatroomApi.getList();

              case 43:
                rooms = _context2.sent;
                ids = rooms.map(_ramda2.default.prop('roomid'));
                _context2.next = 47;
                return _nim2.default.getChatrooms(ids);

              case 47:
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
                _context2.next = 58;
                break;

              case 54:
                _context2.prev = 54;
                _context2.t0 = _context2['catch'](26);

                log.error({
                  page: 'chatrooms',
                  opr: 'init',
                  info: _context2.t0
                });
                _wepy2.default.navigateTo({
                  url: '/pages/register'
                });

              case 58:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, this, [[26, 54]]);
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoYXRyb29tcy5qcyJdLCJuYW1lcyI6WyJsb2ciLCJjaGF0cm9vbUFwaSIsImFwaSIsIkNoYXRyb29tcyIsInVzZXIiLCJzdGF0ZSIsImNvbW1vbiIsIm5pbSIsImZyaWVuZHMiLCJtc2dzIiwiY2hhdCIsInNldFVzZXIiLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiZGF0YSIsInJvb21zIiwiamZVc2VyaWQiLCJtZXRob2RzIiwidG9DaGF0cm9vbSIsImluZGV4IiwiaWQiLCJwayIsImNvbnNvbGUiLCJuYXZpZ2F0ZVRvIiwidXJsIiwib25TaGFyZUFwcE1lc3NhZ2UiLCJyZXMiLCJnZXRTdG9yYWdlIiwia2V5Iiwic3VjY2VzcyIsImpmYWNjaWQiLCJ0aXRsZSIsInBhdGgiLCJvcHRpb25zIiwic2hvd0xvYWRpbmciLCJzaG93U2hhcmVNZW51Iiwid2l0aFNoYXJlVGlja2V0IiwibmV0d29yayIsImxvZ2luIiwiY29kZSIsInJlcXVlc3QiLCJhcHBJZCIsImFwcFNlY3JldGUiLCJvcGVuaWQiLCJzZXNzaW9uX2tleSIsInNldFN0b3JhZ2UiLCJnZXRVc2VySW5mbyIsInVzZXJJbmZvIiwicGFzc3dvcmQiLCJ0YWtlTGFzdCIsImFjY2lkIiwidG9Mb3dlckNhc2UiLCJ0b2tlbiIsImdldFRva2VuVXNlcklkIiwidXNlcklkIiwiVG9rZW4iLCJFcnJvciIsImpmVG9rZW4iLCJuaW1Ub2tlbiIsImdldExpc3QiLCJpZHMiLCJtYXAiLCJwcm9wIiwiZ2V0Q2hhdHJvb21zIiwiY2hhdHJvb21zIiwibWVtYmVycyIsInJvb20iLCJyb29taWQiLCJuYW1lIiwiY292ZXIiLCJwaWNfdXJsIiwibWVtZWJlcnMiLCJhbm5vdW5jZW1lbnQiLCIkYXBwbHkiLCJoaWRlTG9hZGluZyIsImVycm9yIiwicGFnZSIsIm9wciIsImluZm8iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0FB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LyBjb25zdCBnZXRGcmllbmQgPSBmdW5jdGlvbihmcmllbmQpIHtcbi8vICAgcmV0dXJuIHtcbi8vICAgICBuaWNrbmFtZTogZnJpZW5kLm5pY2ssXG4vLyAgICAgYXZhdGFyOiBmcmllbmQuYXZhdGFyLFxuLy8gICAgIGFjY2lkOiBmcmllbmQuYWNjb3VudFxuLy8gICB9XG4vLyB9XG5cbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG5pbXBvcnQgUiBmcm9tICcuLi9saWJzL3JhbWRhJ1xuaW1wb3J0ICogYXMgbG9nIGZyb20gJy4uL3V0aWxzL2xvZydcblxuaW1wb3J0IHtcbiAgd3ggYXMgY29uZmlnXG59IGZyb20gJy4uL2NvbmZpZydcblxuaW1wb3J0IE5JTSBmcm9tICcuLi91dGlscy9uaW0nXG5cbmltcG9ydCB7XG4gIHNldFVzZXJcbiAgLy8gc2V0TmltXG59IGZyb20gJy4uL2FjdGlvbnMvY29tbW9uJ1xuXG4vLyBpbXBvcnQge1xuLy8gICByZWZyZXNoU2Vzc2lvbnNcbi8vIH0gZnJvbSAnLi4vYWN0aW9ucy9zZXNzaW9ucydcbi8vXG4vLyBpbXBvcnQge1xuLy8gICByZWZyZXNoRnJpZW5kc1xuLy8gfSBmcm9tICcuLi9hY3Rpb25zL2ZyaWVuZHMnXG4vL1xuLy8gaW1wb3J0IHtcbi8vICAgcmVmcmVzaE1zZ3MsXG4vLyAgIHJlZnJlc2hNc2dzQnlUb1xuLy8gfSBmcm9tICcuLi9hY3Rpb25zL2NoYXQnXG5cbmltcG9ydCB7XG4gIGNvbm5lY3Rcbn0gZnJvbSAnd2VweS1yZWR1eCdcblxuaW1wb3J0ICogYXMgY2hhdHJvb21BcGkgZnJvbSAnLi4vYXBpcy9jaGF0cm9vbSdcbmltcG9ydCAqIGFzIGFwaSBmcm9tICcuLi9hcGlzL2FjY291bnQnXG5cbkBjb25uZWN0KHtcbiAgdXNlcjogc3RhdGUgPT4gc3RhdGUuY29tbW9uLnVzZXIsXG4gIG5pbTogc3RhdGUgPT4gc3RhdGUuY29tbW9uLm5pbSxcbiAgZnJpZW5kczogc3RhdGUgPT4gc3RhdGUuZnJpZW5kcy5mcmllbmRzLFxuICBtc2dzOiBzdGF0ZSA9PiBzdGF0ZS5jaGF0Lm1zZ3Ncbn0sIHtcbiAgc2V0VXNlclxuLy8gICBzZXROaW0sXG4vLyAgIHJlZnJlc2hGcmllbmRzLFxuLy8gICByZWZyZXNoU2Vzc2lvbnMsXG4vLyAgIHJlZnJlc2hNc2dzLFxuLy8gICByZWZyZXNoTXNnc0J5VG9cbn0pXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDaGF0cm9vbXMgZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICBjb25maWcgPSB7XG4gICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+iBiuWkqeWupCdcbiAgfVxuXG4gIGRhdGEgPSB7XG4gICAgcm9vbXM6IFtdLFxuICAgIGpmVXNlcmlkOiAnJ1xuICB9XG5cbiAgbWV0aG9kcyA9IHtcbiAgICAvLyBwdXNoTXNnOiBmdW5jdGlvbiAobXNncykge1xuICAgIC8vICAgY29uc3QgeyByZWZyZXNoTXNncywgcmVmcmVzaE1zZ3NCeVRvIH0gPSB0aGlzLm1ldGhvZHNcbiAgICAvLyAgIGNvbnN0IHsgbWVyZ2VNc2dzIH0gPSB0aGlzLm5pbVxuICAgIC8vICAgaWYgKCFBcnJheS5pc0FycmF5KG1zZ3MpKSB7XG4gICAgLy8gICAgIG1zZ3MgPSBbbXNnc11cbiAgICAvLyAgIH1cbiAgICAvLyAgIGNvbnN0IHNlc3Npb25JZCA9IG1zZ3NbMF0uc2Vzc2lvbklkXG4gICAgLy8gICBjb25zdCB0byA9IG1zZ3NbMF0udGFyZ2V0XG4gICAgLy8gICBjb25zdCBtZXJnZWQgPSBtZXJnZU1zZ3ModGhpcy5tc2dzW3Nlc3Npb25JZF0gfHwgW10sIG1zZ3MpXG4gICAgLy8gICBjb25zdCBtZXJnZWRCeVRvID0gbWVyZ2VNc2dzKHRoaXMubXNnc1t0b10gfHwgW10sIG1zZ3MpXG4gICAgLy8gICByZWZyZXNoTXNncyhzZXNzaW9uSWQsIG1lcmdlZClcbiAgICAvLyAgIHJlZnJlc2hNc2dzQnlUbyh0bywgbWVyZ2VkQnlUbylcbiAgICAvLyB9LFxuICAgIHRvQ2hhdHJvb206IGZ1bmN0aW9uKGluZGV4KSB7XG4gICAgICBjb25zdCBpZCA9IHRoaXMucm9vbXNbaW5kZXhdLmlkXG4gICAgICBjb25zdCBwayA9IHRoaXMucm9vbXNbaW5kZXhdLnBrXG4gICAgICBjb25zb2xlLmxvZyh0aGlzLnJvb21zW2luZGV4XSlcbiAgICAgIHdlcHkubmF2aWdhdGVUbyh7XG4gICAgICAgIHVybDogYC9wYWdlcy9jaGF0cm9vbT9pZD0ke2lkfSZwaz0ke3BrfWBcbiAgICAgIH0pXG4gICAgfVxuICB9XG4gIG9uU2hhcmVBcHBNZXNzYWdlID0gYXN5bmMgZnVuY3Rpb24gKHJlcykge1xuICAgIGNvbnNvbGUubG9nKCfmiafooYzkuobliIbkuqsyJylcbiAgICB2YXIgamZhY2NpZCA9IGF3YWl0IHdlcHkuZ2V0U3RvcmFnZSh7XG4gICAgICBrZXk6ICdqZkFjY2lkJyxcbiAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlcykge1xuICAgICAgICByZXR1cm4gcmVzLmRhdGFcbiAgICAgIH1cbiAgICB9KVxuICAgIHJldHVybiB7XG4gICAgICB0aXRsZTogJ+axn+WzsOWwj+eoi+W6jycsXG4gICAgICBwYXRoOiBgL3BhZ2VzL2NoYXRyb29tcz9hY2NpZD0ke2pmYWNjaWR9YFxuLy8gICAgICBzdWNjZXNzOiBhc3luYyBmdW5jdGlvbiAocmVzKSB7XG4vLyAgICAgICAgY29uc29sZS5sb2cocmVzLnNoYXJlVGlja2V0c1swXSlcbi8vICAgICAgICB2YXIgc2hhcmVJbmZvID0gYXdhaXQgd2VweS5nZXRTaGFyZUluZm8oe1xuLy8gICAgICAgICAgc2hhcmVUaWNrZXQ6IHJlcy5zaGFyZVRpY2tldHNbMF0sXG4vLyAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAocmVzKSB7XG4vLyAgICAgICAgICAgIHJldHVybiByZXNcbi8vICAgICAgICAgIH1cbi8vICAgICAgICB9KVxuLy8gICAgICAgIGNvbnNvbGUubG9nKHNoYXJlSW5mbylcbi8vICAgICAgICB2YXIgc2Vzc2lvbktleSA9IGF3YWl0IHdlcHkuZ2V0U3RvcmFnZSh7XG4vLyAgICAgICAgICBrZXk6ICdqZlNlc3Npb25LZXknLFxuLy8gICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24ocmVzKSB7XG4vLyAgICAgICAgICAgIHJldHVybiByZXMuZGF0YVxuLy8gICAgICAgICAgfVxuLy8gICAgICAgIH0pXG4vLyAgICAgICAgdmFyIHNoYXJlUGFyc2UgPSBhd2FpdCBhcGkuc2hhcmVQYXJzaW5nKHNlc3Npb25LZXksIHNoYXJlSW5mbylcbi8vICAgICAgICBjb25zb2xlLmxvZyhzaGFyZVBhcnNlKVxuLy8gICAgICAgIHZhciBzaGFyZVRva2VuID0gYXdhaXQgd2VweS5nZXRTdG9yYWdlKHtcbi8vICAgICAgICAgIGtleTogJ2pmVG9rZW4nLFxuLy8gICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24ocmVzKSB7XG4vLyAgICAgICAgICAgIHJldHVybiByZXMuZGF0YVxuLy8gICAgICAgICAgfVxuLy8gICAgICAgIH0pXG4vLyAgICAgICAgdmFyIHNoYXJlQWNjaWQgPSBhd2FpdCB3ZXB5LmdldFN0b3JhZ2Uoe1xuLy8gICAgICAgICAga2V5OiAnamZBY2NpZCcsXG4vLyAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbihyZXMpIHtcbi8vICAgICAgICAgICAgcmV0dXJuIHJlcy5kYXRhXG4vLyAgICAgICAgICB9XG4vLyAgICAgICAgfSlcbi8vICAgICAgICB2YXIgc2hhcmVPcGVuaWQgPSBhd2FpdCBhcGkuc2F2ZU9wZW5HaWQoc2hhcmVUb2tlbiwgc2hhcmVQYXJzZSwgc2hhcmVBY2NpZClcbi8vICAgICAgICBjb25zb2xlLmxvZyhzaGFyZU9wZW5pZClcbi8vICAgICAgfSxcbi8vICAgICAgZmFpbDogZnVuY3Rpb24gKHJlcykge1xuLy8gICAgICAgIGNvbnNvbGUubG9nKHJlcylcbi8vICAgICAgICAvLyDovazlj5HlpLHotKVcbi8vICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGFzeW5jIG9uTG9hZChvcHRpb25zKSB7XG4gICAgY29uc29sZS5sb2coJ+WIhuS6q+WbnuiwgzInKVxuICAgIGNvbnN0IHsgc2V0VXNlciB9ID0gdGhpcy5tZXRob2RzXG4gICAgLy8gY29uc3QgcHVzaE1zZyA9IHRoaXMubWV0aG9kcy5wdXNoTXNnLmJpbmQodGhpcylcbiAgICB3ZXB5LnNob3dMb2FkaW5nKClcbiAgICB2YXIgbmV0d29yayA9IGF3YWl0IHdlcHkuc2hvd1NoYXJlTWVudSh7XG4gICAgICB3aXRoU2hhcmVUaWNrZXQ6IHRydWVcbiAgICB9KVxuICAgIGNvbnNvbGUubG9nKG5ldHdvcmspXG4gICAgY29uc3QgeyBjb2RlIH0gPSBhd2FpdCB3ZXB5LmxvZ2luKClcbiAgICBjb25zdCB7IGRhdGEgfSA9IGF3YWl0IHdlcHkucmVxdWVzdCh7XG4gICAgICB1cmw6IGBodHRwczovL2FwaS53ZWl4aW4ucXEuY29tL3Nucy9qc2NvZGUyc2Vzc2lvbj9hcHBpZD0ke2NvbmZpZy5hcHBJZH0mc2VjcmV0PSR7Y29uZmlnLmFwcFNlY3JldGV9JmpzX2NvZGU9JHtjb2RlfSZncmFudF90eXBlPWF1dGhvcml6YXRpb25fY29kZWBcbiAgICB9KVxuICAgIGNvbnN0IHsgb3BlbmlkIH0gPSBkYXRhXG4gICAgY29uc3QgeyBzZXNzaW9uX2tleSB9ID0gZGF0YVxuICAgIHdlcHkuc2V0U3RvcmFnZSh7XG4gICAgICBrZXk6ICdqZlNlc3Npb25LZXknLFxuICAgICAgZGF0YTogc2Vzc2lvbl9rZXl9KVxuICAgIHdlcHkuc2V0U3RvcmFnZSh7XG4gICAgICBrZXk6ICdqZkFjY2lkJyxcbiAgICAgIGRhdGE6IG9wZW5pZH0pXG4gICAgY29uc3QgeyB1c2VySW5mbyB9ID0gYXdhaXQgd2VweS5nZXRVc2VySW5mbygpXG4gICAgY29uc3QgcGFzc3dvcmQgPSBSLnRha2VMYXN0KDUpKG9wZW5pZClcblxuICAgIGNvbnN0IHVzZXIgPSB7XG4gICAgICAuLi51c2VySW5mbyxcbiAgICAgIGFjY2lkOiBvcGVuaWQudG9Mb3dlckNhc2UoKVxuICAgIH1cbiAgICBzZXRVc2VyKHVzZXIpXG4gICAgLy8g5aaC5p6c55So5oi35bCa5pyq5ZyoIOe9keaYk+S6keazqOWGjCDliJnlhYjms6jlhoxcbiAgICB0cnkge1xuICAgICAgY29uc3QgdG9rZW4gPSBhd2FpdCBOSU0ubG9naW4ob3BlbmlkKVxuICAgICAgY29uc3QgdXNlcklkID0gYXdhaXQgYXBpLmdldFRva2VuVXNlcklkKG9wZW5pZCwgcGFzc3dvcmQudG9Mb3dlckNhc2UoKSlcbiAgICAgIHRoaXMuamZVc2VyaWQgPSB1c2VySWQuaWRcbiAgICAgIGNvbnN0IFRva2VuID0gdXNlcklkLlRva2VuXG4gICAgICBpZiAob3B0aW9ucy5hY2NpZCAmJiBvcHRpb25zLmFjY2lkICE9PSBvcGVuaWQpIHtcbiAgICAgICAgd2VweS5zZXRTdG9yYWdlKHtcbiAgICAgICAgICBrZXk6ICdiYWNrQWNjaWQnLFxuICAgICAgICAgIGRhdGE6IG9wdGlvbnMuYWNjaWR9KVxuICAgICAgfVxuICAgICAgd2VweS5zZXRTdG9yYWdlKHtcbiAgICAgICAga2V5OiAnamZVc2VySWQnLFxuICAgICAgICBkYXRhOiB1c2VySWQuaWR9KVxuICAgICAgd2VweS5zZXRTdG9yYWdlKHtcbiAgICAgICAga2V5OiAnamZUb2tlbicsXG4gICAgICAgIGRhdGE6IFRva2VufSlcbiAgICAgIGlmICghVG9rZW4pIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCd1c2VyIG5vdCBleGlzdCcpXG4gICAgICB9XG5cbiAgICAgIHNldFVzZXIoe1xuICAgICAgICAuLi50aGlzLnVzZXIsXG4gICAgICAgIGpmVG9rZW46IFRva2VuLFxuICAgICAgICBuaW1Ub2tlbjogdG9rZW5cbiAgICAgIH0pXG4gICAgICAvLyDliJ3lp4vljJYgbmltIOWvueixoVxuICAgICAgLy8gY29uc3QgbmltID0gTklNLmdldEluc3RhbmNlKHtcbiAgICAgIC8vICAgYWNjb3VudDogdGhpcy51c2VyLmFjY2lkLFxuICAgICAgLy8gICB0b2tlbjogdG9rZW4sXG4gICAgICAvLyAgIGRlYnVnOiB0cnVlLFxuICAgICAgLy8gICBvbnVzZXJzOiBmcmllbmRzID0+IHtcbiAgICAgIC8vICAgICByZWZyZXNoRnJpZW5kcyhmcmllbmRzLm1hcChnZXRGcmllbmQpKVxuICAgICAgLy8gICAgIHRoaXMuJGFwcGx5KClcbiAgICAgIC8vICAgfSxcbiAgICAgIC8vICAgb25zZXNzaW9uczogc2Vzc2lvbnMgPT4ge1xuICAgICAgLy8gICAgIGNvbnN0IG1lcmdlZCA9IG5pbS5tZXJnZVNlc3Npb25zKHRoaXMuc2Vzc2lvbnMsIHNlc3Npb25zKVxuICAgICAgLy8gICAgIHJlZnJlc2hTZXNzaW9ucyhtZXJnZWQpXG4gICAgICAvLyAgICAgdGhpcy4kYXBwbHkoKVxuICAgICAgLy8gICB9LFxuICAgICAgLy8gICBvbnVwZGF0ZXNlc3Npb246IHNlc3Npb24gPT4ge1xuICAgICAgLy8gICAgIGNvbnN0IG1lcmdlZCA9IG5pbS5tZXJnZVNlc3Npb25zKHRoaXMuc2Vzc2lvbnMsIHNlc3Npb24pXG4gICAgICAvLyAgICAgcmVmcmVzaFNlc3Npb25zKG1lcmdlZClcbiAgICAgIC8vICAgICB0aGlzLiRhcHBseSgpXG4gICAgICAvLyAgIH0sXG4gICAgICAvLyAgIG9ubXNnOiBtc2cgPT4ge1xuICAgICAgLy8gICAgIHB1c2hNc2cobXNnKVxuICAgICAgLy8gICAgIHRoaXMuJGFwcGx5KClcbiAgICAgIC8vICAgfSxcbiAgICAgIC8vICAgb25yb2FtaW5nbXNnczogb2JqID0+IHtcbiAgICAgIC8vICAgICBwdXNoTXNnKG9iai5tc2dzKVxuICAgICAgLy8gICB9LFxuICAgICAgLy8gICBvbm9mZmxpbmVtc2dzOiBvYmogPT4ge1xuICAgICAgLy8gICAgIHB1c2hNc2cob2JqLm1zZ3MpXG4gICAgICAvLyAgIH1cbiAgICAgIC8vIH0pXG4gICAgICAvL1xuICAgICAgLy8gc2V0TmltKG5pbSlcblxuICAgICAgLy8g5ouJ5Y+W6IGK5aSp5a6k5YiX6KGoXG4gICAgICBjb25zdCByb29tcyA9IGF3YWl0IGNoYXRyb29tQXBpLmdldExpc3QoKVxuICAgICAgY29uc3QgaWRzID0gcm9vbXMubWFwKFIucHJvcCgncm9vbWlkJykpXG4gICAgICBjb25zdCBjaGF0cm9vbXMgPSBhd2FpdCBOSU0uZ2V0Q2hhdHJvb21zKGlkcylcbiAgICAgIGNvbnN0IG1lbWJlcnMgPSBjaGF0cm9vbXMubWFwKFIucHJvcCgnb25saW5ldXNlcmNvdW50JykpXG4gICAgICB0aGlzLnJvb21zID0gcm9vbXMubWFwKChyb29tLCBpbmRleCkgPT4gKHtcbiAgICAgICAgaWQ6IHJvb20ucm9vbWlkLFxuICAgICAgICBuYW1lOiByb29tLm5hbWUsXG4gICAgICAgIGNvdmVyOiByb29tLnBpY191cmwsXG4gICAgICAgIG1lbWViZXJzOiBtZW1iZXJzW2luZGV4XSxcbiAgICAgICAgYW5ub3VuY2VtZW50OiByb29tLmFubm91bmNlbWVudCxcbiAgICAgICAgcGs6IHJvb20uaWRcbiAgICAgIH0pKVxuICAgICAgdGhpcy4kYXBwbHkoKVxuICAgICAgd2VweS5oaWRlTG9hZGluZygpXG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgbG9nLmVycm9yKHtcbiAgICAgICAgcGFnZTogJ2NoYXRyb29tcycsXG4gICAgICAgIG9wcjogJ2luaXQnLFxuICAgICAgICBpbmZvOiBlXG4gICAgICB9KVxuICAgICAgd2VweS5uYXZpZ2F0ZVRvKHtcbiAgICAgICAgdXJsOiAnL3BhZ2VzL3JlZ2lzdGVyJ1xuICAgICAgfSlcbiAgICB9XG4gIH1cbn1cbiJdfQ==