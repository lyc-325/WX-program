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

var _log2 = _interopRequireDefault(_log);

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

                _log2.default.error({
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoYXRyb29tcy5qcyJdLCJuYW1lcyI6WyJjaGF0cm9vbUFwaSIsImFwaSIsIkNoYXRyb29tcyIsInVzZXIiLCJzdGF0ZSIsImNvbW1vbiIsIm5pbSIsImZyaWVuZHMiLCJtc2dzIiwiY2hhdCIsInNldFVzZXIiLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiZGF0YSIsInJvb21zIiwibWV0aG9kcyIsInRvQ2hhdHJvb20iLCJpbmRleCIsImlkIiwiY29uc29sZSIsImxvZyIsIm5hdmlnYXRlVG8iLCJ1cmwiLCJzaG93TG9hZGluZyIsImxvZ2luIiwiY29kZSIsInJlcXVlc3QiLCJhcHBJZCIsImFwcFNlY3JldGUiLCJvcGVuaWQiLCJnZXRVc2VySW5mbyIsInVzZXJJbmZvIiwicGFzc3dvcmQiLCJ0YWtlTGFzdCIsImFjY2lkIiwidG9Mb3dlckNhc2UiLCJ0b2tlbiIsImdldFRva2VuIiwiVG9rZW4iLCJFcnJvciIsImpmVG9rZW4iLCJuaW1Ub2tlbiIsImdldExpc3QiLCJpZHMiLCJtYXAiLCJwcm9wIiwiZ2V0Q2hhdHJvb21zIiwiY2hhdHJvb21zIiwibWVtYmVycyIsInJvb20iLCJyb29taWQiLCJuYW1lIiwiY292ZXIiLCJwaWNfdXJsIiwibWVtZWJlcnMiLCIkYXBwbHkiLCJoaWRlTG9hZGluZyIsImVycm9yIiwicGFnZSIsIm9wciIsImluZm8iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFpQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQTFCQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFFQTs7QUFJQTs7OztBQUVBOztBQWtCQTs7QUFJQTs7SUFBWUEsVzs7QUFDWjs7SUFBWUMsRzs7Ozs7O0lBZVNDLFMsV0FicEIsd0JBQVE7QUFDUEMsUUFBTTtBQUFBLFdBQVNDLE1BQU1DLE1BQU4sQ0FBYUYsSUFBdEI7QUFBQSxHQURDO0FBRVBHLE9BQUs7QUFBQSxXQUFTRixNQUFNQyxNQUFOLENBQWFDLEdBQXRCO0FBQUEsR0FGRTtBQUdQQyxXQUFTO0FBQUEsV0FBU0gsTUFBTUcsT0FBTixDQUFjQSxPQUF2QjtBQUFBLEdBSEY7QUFJUEMsUUFBTTtBQUFBLFdBQVNKLE1BQU1LLElBQU4sQ0FBV0QsSUFBcEI7QUFBQTtBQUpDLENBQVIsRUFLRTtBQUNERTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFORyxDQUxGLEM7Ozs7Ozs7Ozs7Ozs7O2tOQWNDQyxNLEdBQVM7QUFDUEMsOEJBQXdCO0FBRGpCLEssUUFJVEMsSSxHQUFPO0FBQ0xDLGFBQU87QUFERixLLFFBSVBDLE8sR0FBVTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0FDLGtCQUFZLG9CQUFTQyxLQUFULEVBQWdCO0FBQzFCLFlBQU1DLEtBQUssS0FBS0osS0FBTCxDQUFXRyxLQUFYLEVBQWtCQyxFQUE3QjtBQUNBQyxnQkFBUUMsR0FBUixDQUFZLFlBQVosRUFBMEJGLEVBQTFCO0FBQ0EsdUJBQUtHLFVBQUwsQ0FBZ0I7QUFDZEMsdUNBQTJCSjtBQURiLFNBQWhCO0FBR0Q7QUFwQk8sSzs7Ozs7Ozs7Ozs7OztBQXdCQVIsdUIsR0FBWSxLQUFLSyxPLENBQWpCTCxPO0FBQ1I7O0FBQ0EsK0JBQUthLFdBQUw7O3VCQUN1QixlQUFLQyxLQUFMLEU7Ozs7QUFBZkMsb0IsU0FBQUEsSTs7dUJBQ2UsZUFBS0MsT0FBTCxDQUFhO0FBQ2xDSiwrRUFBMkQsV0FBT0ssS0FBbEUsZ0JBQWtGLFdBQU9DLFVBQXpGLGlCQUErR0gsSUFBL0c7QUFEa0MsaUJBQWIsQzs7OztBQUFmWixvQixTQUFBQSxJO0FBR0FnQixzQixHQUFXaEIsSSxDQUFYZ0IsTTs7dUJBQ21CLGVBQUtDLFdBQUwsRTs7OztBQUFuQkMsd0IsU0FBQUEsUTtBQUVGQyx3QixHQUFXLGdCQUFFQyxRQUFGLENBQVcsQ0FBWCxFQUFjSixNQUFkLEM7QUFFWDFCLG9CLDhCQUNENEIsUTtBQUNIRyx5QkFBT0wsT0FBT00sV0FBUDs7OztBQUdUekIsd0JBQVFQLElBQVI7QUFDQTs7O3VCQUVzQixjQUFJcUIsS0FBSixDQUFVSyxNQUFWLEM7OztBQUFkTyxxQjs7dUJBQ2NuQyxJQUFJb0MsUUFBSixDQUFhUixNQUFiLEVBQXFCRyxTQUFTRyxXQUFULEVBQXJCLEM7OztBQUFkRyxxQjs7b0JBRURBLEs7Ozs7O3NCQUNHLElBQUlDLEtBQUosQ0FBVSxnQkFBVixDOzs7O0FBR1I3QixtREFDSyxLQUFLUCxJQURWO0FBRUVxQywyQkFBU0YsS0FGWDtBQUdFRyw0QkFBVUw7QUFIWjs7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzt1QkFDb0JwQyxZQUFZMEMsT0FBWixFOzs7QUFBZDVCLHFCO0FBQ0E2QixtQixHQUFNN0IsTUFBTThCLEdBQU4sQ0FBVSxnQkFBRUMsSUFBRixDQUFPLFFBQVAsQ0FBVixDOzt1QkFDWSxjQUFJQyxZQUFKLENBQWlCSCxHQUFqQixDOzs7QUFBbEJJLHlCO0FBQ0FDLHVCLEdBQVVELFVBQVVILEdBQVYsQ0FBYyxnQkFBRUMsSUFBRixDQUFPLGlCQUFQLENBQWQsQzs7QUFDaEIscUJBQUsvQixLQUFMLEdBQWFBLE1BQU04QixHQUFOLENBQVUsVUFBQ0ssSUFBRCxFQUFPaEMsS0FBUDtBQUFBLHlCQUFrQjtBQUN2Q0Msd0JBQUkrQixLQUFLQyxNQUQ4QjtBQUV2Q0MsMEJBQU1GLEtBQUtFLElBRjRCO0FBR3ZDQywyQkFBT0gsS0FBS0ksT0FIMkI7QUFJdkNDLDhCQUFVTixRQUFRL0IsS0FBUjtBQUo2QixtQkFBbEI7QUFBQSxpQkFBVixDQUFiO0FBTUEscUJBQUtzQyxNQUFMO0FBQ0EsK0JBQUtDLFdBQUw7Ozs7Ozs7O0FBRUEsOEJBQUlDLEtBQUosQ0FBVTtBQUNSQyx3QkFBTSxXQURFO0FBRVJDLHVCQUFLLE1BRkc7QUFHUkM7QUFIUSxpQkFBVjtBQUtBLCtCQUFLdkMsVUFBTCxDQUFnQjtBQUNkQyx1QkFBSztBQURTLGlCQUFoQjs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBdEhpQyxlQUFLb0MsSTtrQkFBdkJ4RCxTIiwiZmlsZSI6ImNoYXRyb29tcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuLy8gY29uc3QgZ2V0RnJpZW5kID0gZnVuY3Rpb24oZnJpZW5kKSB7XG4vLyAgIHJldHVybiB7XG4vLyAgICAgbmlja25hbWU6IGZyaWVuZC5uaWNrLFxuLy8gICAgIGF2YXRhcjogZnJpZW5kLmF2YXRhcixcbi8vICAgICBhY2NpZDogZnJpZW5kLmFjY291bnRcbi8vICAgfVxuLy8gfVxuXG5pbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuaW1wb3J0IFIgZnJvbSAnLi4vbGlicy9yYW1kYSdcbmltcG9ydCBsb2cgZnJvbSAnLi4vdXRpbHMvbG9nJ1xuXG5pbXBvcnQge1xuICB3eCBhcyBjb25maWdcbn0gZnJvbSAnLi4vY29uZmlnJ1xuXG5pbXBvcnQgTklNIGZyb20gJy4uL3V0aWxzL25pbSdcblxuaW1wb3J0IHtcbiAgc2V0VXNlclxuICAvLyBzZXROaW1cbn0gZnJvbSAnLi4vYWN0aW9ucy9jb21tb24nXG5cbi8vIGltcG9ydCB7XG4vLyAgIHJlZnJlc2hTZXNzaW9uc1xuLy8gfSBmcm9tICcuLi9hY3Rpb25zL3Nlc3Npb25zJ1xuLy9cbi8vIGltcG9ydCB7XG4vLyAgIHJlZnJlc2hGcmllbmRzXG4vLyB9IGZyb20gJy4uL2FjdGlvbnMvZnJpZW5kcydcbi8vXG4vLyBpbXBvcnQge1xuLy8gICByZWZyZXNoTXNncyxcbi8vICAgcmVmcmVzaE1zZ3NCeVRvXG4vLyB9IGZyb20gJy4uL2FjdGlvbnMvY2hhdCdcblxuaW1wb3J0IHtcbiAgY29ubmVjdFxufSBmcm9tICd3ZXB5LXJlZHV4J1xuXG5pbXBvcnQgKiBhcyBjaGF0cm9vbUFwaSBmcm9tICcuLi9hcGlzL2NoYXRyb29tJ1xuaW1wb3J0ICogYXMgYXBpIGZyb20gJy4uL2FwaXMvYWNjb3VudCdcblxuQGNvbm5lY3Qoe1xuICB1c2VyOiBzdGF0ZSA9PiBzdGF0ZS5jb21tb24udXNlcixcbiAgbmltOiBzdGF0ZSA9PiBzdGF0ZS5jb21tb24ubmltLFxuICBmcmllbmRzOiBzdGF0ZSA9PiBzdGF0ZS5mcmllbmRzLmZyaWVuZHMsXG4gIG1zZ3M6IHN0YXRlID0+IHN0YXRlLmNoYXQubXNnc1xufSwge1xuICBzZXRVc2VyXG4vLyAgIHNldE5pbSxcbi8vICAgcmVmcmVzaEZyaWVuZHMsXG4vLyAgIHJlZnJlc2hTZXNzaW9ucyxcbi8vICAgcmVmcmVzaE1zZ3MsXG4vLyAgIHJlZnJlc2hNc2dzQnlUb1xufSlcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENoYXRyb29tcyBleHRlbmRzIHdlcHkucGFnZSB7XG4gIGNvbmZpZyA9IHtcbiAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn6IGK5aSp5a6kJ1xuICB9XG5cbiAgZGF0YSA9IHtcbiAgICByb29tczogW11cbiAgfVxuXG4gIG1ldGhvZHMgPSB7XG4gICAgLy8gcHVzaE1zZzogZnVuY3Rpb24gKG1zZ3MpIHtcbiAgICAvLyAgIGNvbnN0IHsgcmVmcmVzaE1zZ3MsIHJlZnJlc2hNc2dzQnlUbyB9ID0gdGhpcy5tZXRob2RzXG4gICAgLy8gICBjb25zdCB7IG1lcmdlTXNncyB9ID0gdGhpcy5uaW1cbiAgICAvLyAgIGlmICghQXJyYXkuaXNBcnJheShtc2dzKSkge1xuICAgIC8vICAgICBtc2dzID0gW21zZ3NdXG4gICAgLy8gICB9XG4gICAgLy8gICBjb25zdCBzZXNzaW9uSWQgPSBtc2dzWzBdLnNlc3Npb25JZFxuICAgIC8vICAgY29uc3QgdG8gPSBtc2dzWzBdLnRhcmdldFxuICAgIC8vICAgY29uc3QgbWVyZ2VkID0gbWVyZ2VNc2dzKHRoaXMubXNnc1tzZXNzaW9uSWRdIHx8IFtdLCBtc2dzKVxuICAgIC8vICAgY29uc3QgbWVyZ2VkQnlUbyA9IG1lcmdlTXNncyh0aGlzLm1zZ3NbdG9dIHx8IFtdLCBtc2dzKVxuICAgIC8vICAgcmVmcmVzaE1zZ3Moc2Vzc2lvbklkLCBtZXJnZWQpXG4gICAgLy8gICByZWZyZXNoTXNnc0J5VG8odG8sIG1lcmdlZEJ5VG8pXG4gICAgLy8gfSxcbiAgICB0b0NoYXRyb29tOiBmdW5jdGlvbihpbmRleCkge1xuICAgICAgY29uc3QgaWQgPSB0aGlzLnJvb21zW2luZGV4XS5pZFxuICAgICAgY29uc29sZS5sb2coJ2NoYXRyb29taWQnLCBpZClcbiAgICAgIHdlcHkubmF2aWdhdGVUbyh7XG4gICAgICAgIHVybDogYC9wYWdlcy9jaGF0cm9vbT9pZD0ke2lkfWBcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgYXN5bmMgb25Mb2FkKCkge1xuICAgIGNvbnN0IHsgc2V0VXNlciB9ID0gdGhpcy5tZXRob2RzXG4gICAgLy8gY29uc3QgcHVzaE1zZyA9IHRoaXMubWV0aG9kcy5wdXNoTXNnLmJpbmQodGhpcylcbiAgICB3ZXB5LnNob3dMb2FkaW5nKClcbiAgICBjb25zdCB7IGNvZGUgfSA9IGF3YWl0IHdlcHkubG9naW4oKVxuICAgIGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgd2VweS5yZXF1ZXN0KHtcbiAgICAgIHVybDogYGh0dHBzOi8vYXBpLndlaXhpbi5xcS5jb20vc25zL2pzY29kZTJzZXNzaW9uP2FwcGlkPSR7Y29uZmlnLmFwcElkfSZzZWNyZXQ9JHtjb25maWcuYXBwU2VjcmV0ZX0manNfY29kZT0ke2NvZGV9JmdyYW50X3R5cGU9YXV0aG9yaXphdGlvbl9jb2RlYFxuICAgIH0pXG4gICAgY29uc3QgeyBvcGVuaWQgfSA9IGRhdGFcbiAgICBjb25zdCB7IHVzZXJJbmZvIH0gPSBhd2FpdCB3ZXB5LmdldFVzZXJJbmZvKClcblxuICAgIGNvbnN0IHBhc3N3b3JkID0gUi50YWtlTGFzdCg1KShvcGVuaWQpXG5cbiAgICBjb25zdCB1c2VyID0ge1xuICAgICAgLi4udXNlckluZm8sXG4gICAgICBhY2NpZDogb3BlbmlkLnRvTG93ZXJDYXNlKClcbiAgICB9XG5cbiAgICBzZXRVc2VyKHVzZXIpXG4gICAgLy8g5aaC5p6c55So5oi35bCa5pyq5ZyoIOe9keaYk+S6keazqOWGjCDliJnlhYjms6jlhoxcbiAgICB0cnkge1xuICAgICAgY29uc3QgdG9rZW4gPSBhd2FpdCBOSU0ubG9naW4ob3BlbmlkKVxuICAgICAgY29uc3QgVG9rZW4gPSBhd2FpdCBhcGkuZ2V0VG9rZW4ob3BlbmlkLCBwYXNzd29yZC50b0xvd2VyQ2FzZSgpKVxuXG4gICAgICBpZiAoIVRva2VuKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcigndXNlciBub3QgZXhpc3QnKVxuICAgICAgfVxuXG4gICAgICBzZXRVc2VyKHtcbiAgICAgICAgLi4udGhpcy51c2VyLFxuICAgICAgICBqZlRva2VuOiBUb2tlbixcbiAgICAgICAgbmltVG9rZW46IHRva2VuXG4gICAgICB9KVxuXG4gICAgICAvLyDliJ3lp4vljJYgbmltIOWvueixoVxuICAgICAgLy8gY29uc3QgbmltID0gTklNLmdldEluc3RhbmNlKHtcbiAgICAgIC8vICAgYWNjb3VudDogdGhpcy51c2VyLmFjY2lkLFxuICAgICAgLy8gICB0b2tlbjogdG9rZW4sXG4gICAgICAvLyAgIGRlYnVnOiB0cnVlLFxuICAgICAgLy8gICBvbnVzZXJzOiBmcmllbmRzID0+IHtcbiAgICAgIC8vICAgICByZWZyZXNoRnJpZW5kcyhmcmllbmRzLm1hcChnZXRGcmllbmQpKVxuICAgICAgLy8gICAgIHRoaXMuJGFwcGx5KClcbiAgICAgIC8vICAgfSxcbiAgICAgIC8vICAgb25zZXNzaW9uczogc2Vzc2lvbnMgPT4ge1xuICAgICAgLy8gICAgIGNvbnN0IG1lcmdlZCA9IG5pbS5tZXJnZVNlc3Npb25zKHRoaXMuc2Vzc2lvbnMsIHNlc3Npb25zKVxuICAgICAgLy8gICAgIHJlZnJlc2hTZXNzaW9ucyhtZXJnZWQpXG4gICAgICAvLyAgICAgdGhpcy4kYXBwbHkoKVxuICAgICAgLy8gICB9LFxuICAgICAgLy8gICBvbnVwZGF0ZXNlc3Npb246IHNlc3Npb24gPT4ge1xuICAgICAgLy8gICAgIGNvbnN0IG1lcmdlZCA9IG5pbS5tZXJnZVNlc3Npb25zKHRoaXMuc2Vzc2lvbnMsIHNlc3Npb24pXG4gICAgICAvLyAgICAgcmVmcmVzaFNlc3Npb25zKG1lcmdlZClcbiAgICAgIC8vICAgICB0aGlzLiRhcHBseSgpXG4gICAgICAvLyAgIH0sXG4gICAgICAvLyAgIG9ubXNnOiBtc2cgPT4ge1xuICAgICAgLy8gICAgIHB1c2hNc2cobXNnKVxuICAgICAgLy8gICAgIHRoaXMuJGFwcGx5KClcbiAgICAgIC8vICAgfSxcbiAgICAgIC8vICAgb25yb2FtaW5nbXNnczogb2JqID0+IHtcbiAgICAgIC8vICAgICBwdXNoTXNnKG9iai5tc2dzKVxuICAgICAgLy8gICB9LFxuICAgICAgLy8gICBvbm9mZmxpbmVtc2dzOiBvYmogPT4ge1xuICAgICAgLy8gICAgIHB1c2hNc2cob2JqLm1zZ3MpXG4gICAgICAvLyAgIH1cbiAgICAgIC8vIH0pXG4gICAgICAvL1xuICAgICAgLy8gc2V0TmltKG5pbSlcblxuICAgICAgLy8g5ouJ5Y+W6IGK5aSp5a6k5YiX6KGoXG4gICAgICBjb25zdCByb29tcyA9IGF3YWl0IGNoYXRyb29tQXBpLmdldExpc3QoKVxuICAgICAgY29uc3QgaWRzID0gcm9vbXMubWFwKFIucHJvcCgncm9vbWlkJykpXG4gICAgICBjb25zdCBjaGF0cm9vbXMgPSBhd2FpdCBOSU0uZ2V0Q2hhdHJvb21zKGlkcylcbiAgICAgIGNvbnN0IG1lbWJlcnMgPSBjaGF0cm9vbXMubWFwKFIucHJvcCgnb25saW5ldXNlcmNvdW50JykpXG4gICAgICB0aGlzLnJvb21zID0gcm9vbXMubWFwKChyb29tLCBpbmRleCkgPT4gKHtcbiAgICAgICAgaWQ6IHJvb20ucm9vbWlkLFxuICAgICAgICBuYW1lOiByb29tLm5hbWUsXG4gICAgICAgIGNvdmVyOiByb29tLnBpY191cmwsXG4gICAgICAgIG1lbWViZXJzOiBtZW1iZXJzW2luZGV4XVxuICAgICAgfSkpXG4gICAgICB0aGlzLiRhcHBseSgpXG4gICAgICB3ZXB5LmhpZGVMb2FkaW5nKClcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBsb2cuZXJyb3Ioe1xuICAgICAgICBwYWdlOiAnY2hhdHJvb21zJyxcbiAgICAgICAgb3ByOiAnaW5pdCcsXG4gICAgICAgIGluZm86IGVcbiAgICAgIH0pXG4gICAgICB3ZXB5Lm5hdmlnYXRlVG8oe1xuICAgICAgICB1cmw6ICcvcGFnZXMvcmVnaXN0ZXInXG4gICAgICB9KVxuICAgIH1cbiAgfVxufVxuIl19