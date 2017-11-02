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

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _userInfo = require('./../apis/userInfo.js');

var api = _interopRequireWildcard(_userInfo);

var _account = require('./../apis/account.js');

var accountApi = _interopRequireWildcard(_account);

var _chatroom = require('./../apis/chatroom.js');

var chatroomApi = _interopRequireWildcard(_chatroom);

var _ramda = require('./../libs/ramda.js');

var _ramda2 = _interopRequireDefault(_ramda);

var _log = require('./../utils/log.js');

var log = _interopRequireWildcard(_log);

var _nim = require('./../utils/nim.js');

var _nim2 = _interopRequireDefault(_nim);

var _config = require('./../config.js');

var _wepyRedux = require('./../npm/wepy-redux/lib/index.js');

var _common = require('./../actions/common.js');

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var UserInfo = (_dec = (0, _wepyRedux.connect)({
  user: function user(state) {
    return state.common.user;
  }
}, {
  setUser: _common.setUser
}), _dec(_class = function (_wepy$page) {
  (0, _inherits3.default)(UserInfo, _wepy$page);

  function UserInfo() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, UserInfo);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = UserInfo.__proto__ || (0, _getPrototypeOf2.default)(UserInfo)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: '用户详情'
    }, _this.data = {
      list: [],
      userData: {
        name: '加载中...'
      },
      levelData: '',
      userId: '',
      isStar: null,
      isAdmin: null,
      isBan: null,
      type: null
    }, _this.methods = {
      handlePublishTap: function handlePublishTap(e) {
        _wepy2.default.navigateTo({
          url: 'publish'
        });
      },
      handleItemTap: function handleItemTap(e) {
        var id = this.list[e.currentTarget.dataset.index].id;
        _wepy2.default.navigateTo({
          url: 'board?id=' + id
        });
      },
      collectUserTap: function collectUserTap() {
        var _this2 = this;

        return (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
          var userId, id;
          return _regenerator2.default.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  userId = +_this2.userId;
                  id = _this2.user.userData.id;

                  if (!(id === userId)) {
                    _context.next = 6;
                    break;
                  }

                  wx.showToast({
                    title: '您不能关注自己',
                    icon: 'loading',
                    duration: 2000
                  });
                  _context.next = 11;
                  break;

                case 6:
                  _context.next = 8;
                  return accountApi.userStar(id, userId);

                case 8:
                  _this2.isStar = true;
                  wx.showToast({
                    title: '已关注',
                    icon: 'success',
                    duration: 2000
                  });
                  _this2.$apply();

                case 11:
                case 'end':
                  return _context.stop();
              }
            }
          }, _callee, _this2);
        }))();
      },
      DelCollectUserTap: function DelCollectUserTap() {
        var _this3 = this;

        return (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2() {
          var userId, id;
          return _regenerator2.default.wrap(function _callee2$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  userId = +_this3.userId;
                  id = _this3.user.userData.id;
                  _context2.next = 4;
                  return accountApi.userUnstar(id, userId);

                case 4:
                  _this3.isStar = false;
                  wx.showToast({
                    title: '已取消关注',
                    icon: 'success',
                    duration: 2000
                  });
                  _this3.$apply();

                case 7:
                case 'end':
                  return _context2.stop();
              }
            }
          }, _callee2, _this3);
        }))();
      },
      banSomeoneTap: function banSomeoneTap() {
        var _this4 = this;

        return (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3() {
          var accid, otherAccid, roomId, jfToken;
          return _regenerator2.default.wrap(function _callee3$(_context3) {
            while (1) {
              switch (_context3.prev = _context3.next) {
                case 0:
                  accid = _this4.user.userData.accid;
                  otherAccid = _this4.otherAccid;
                  roomId = _this4.roomId;
                  jfToken = _this4.user.jfToken;
                  _context3.next = 6;
                  return chatroomApi.BanSomeone(roomId, accid, otherAccid, jfToken);

                case 6:
                  wx.showToast({
                    title: '已禁言',
                    icon: 'success',
                    duration: 2000
                  });
                  _this4.isBan = true;
                  _this4.$apply();

                case 9:
                case 'end':
                  return _context3.stop();
              }
            }
          }, _callee3, _this4);
        }))();
      },
      delBanSomeoneTap: function delBanSomeoneTap() {
        var _this5 = this;

        return (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee4() {
          var accid, roomId, otherAccid;
          return _regenerator2.default.wrap(function _callee4$(_context4) {
            while (1) {
              switch (_context4.prev = _context4.next) {
                case 0:
                  accid = _this5.user.userData.accid;
                  roomId = _this5.roomId;
                  otherAccid = _this5.otherAccid;
                  _context4.next = 5;
                  return chatroomApi.changeRole(roomId, accid, otherAccid, 2);

                case 5:
                  wx.showToast({
                    title: '已恢复',
                    icon: 'success',
                    duration: 2000
                  });
                  _this5.isBan = false;
                  _this5.$apply();

                case 8:
                case 'end':
                  return _context4.stop();
              }
            }
          }, _callee4, _this5);
        }))();
      }
    }, _this.onShareAppMessage = function (res) {
      return {
        title: this.userData.name + '的个人名片'
      };
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(UserInfo, [{
    key: 'onLoad',
    value: function () {
      var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee5(options) {
        var setUser, _ref3, code, data, openid, _ref4, userInfo, password, user, token, _userId, Token, jfToken, self, resData, is_stared, accid, res, userId, banId;

        return _regenerator2.default.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                setUser = this.methods.setUser;
                _context5.next = 3;
                return _wepy2.default.login();

              case 3:
                _ref3 = _context5.sent;
                code = _ref3.code;
                _context5.next = 7;
                return accountApi.getSession(code, _config.wx.appId, _config.wx.appSecrete);

              case 7:
                data = _context5.sent;
                openid = data.openid;
                _context5.next = 11;
                return _wepy2.default.getUserInfo();

              case 11:
                _ref4 = _context5.sent;
                userInfo = _ref4.userInfo;
                password = _ramda2.default.takeLast(5)(openid);
                user = (0, _extends3.default)({}, userInfo, {
                  accid: openid.toLowerCase()
                });


                setUser(user);
                // 如果用户尚未在 网易云注册 则先注册
                _context5.prev = 16;
                _context5.next = 19;
                return _nim2.default.login(openid);

              case 19:
                token = _context5.sent;
                _context5.next = 22;
                return accountApi.getToken(openid, password.toLowerCase());

              case 22:
                _userId = _context5.sent;
                Token = _userId.Token;

                if (Token) {
                  _context5.next = 26;
                  break;
                }

                throw new Error('user not exist');

              case 26:

                setUser((0, _extends3.default)({}, this.user, {
                  jfToken: Token,
                  nimToken: token,
                  userData: _userId
                }));
                _context5.next = 33;
                break;

              case 29:
                _context5.prev = 29;
                _context5.t0 = _context5['catch'](16);

                log.error({
                  page: 'chatroom',
                  opr: 'init',
                  info: _context5.t0
                });
                _wepy2.default.navigateTo({
                  url: '/pages/register'
                });

              case 33:

                this.roomId = options.roomId;
                this.userId = options.id;
                jfToken = this.user.jfToken;

                if (options.type === "MANAGER" || options.type === "CREATOR") {
                  this.type = true;
                }
                self = this;
                _context5.next = 40;
                return api.getOtherUserInfo(options.id, jfToken);

              case 40:
                resData = _context5.sent;
                is_stared = resData.is_stared;
                accid = resData.accid;

                this.otherAccid = accid;
                this.isAdmin = this.user.userData.is_admin;
                this.isStar = is_stared;
                self.userData = resData;
                _context5.next = 49;
                return api.getMsgList(options.id);

              case 49:
                res = _context5.sent;

                this.list = res.map(function (item) {
                  return {
                    id: item.id,
                    title: item.title,
                    content: item.text,
                    createdBy: item.author.name,
                    createdAt: item.dateline,
                    cover: item.pic_urls[0] ? '' + _config.jf.baseServer + item.pic_urls[0] : '',
                    read: item.click_num
                  };
                });
                this.$apply();
                //判断用户有没有被禁言
                userId = this.userId;
                banId = options.banId;

                if (!(banId == null)) {
                  _context5.next = 58;
                  break;
                }

                return _context5.abrupt('return', false);

              case 58:
                if (banId.indexOf(userId) === -1) {
                  this.isBan = false;
                } else {
                  this.isBan = true;
                }

              case 59:
              case 'end':
                return _context5.stop();
            }
          }
        }, _callee5, this, [[16, 29]]);
      }));

      function onLoad(_x) {
        return _ref2.apply(this, arguments);
      }

      return onLoad;
    }()
  }]);
  return UserInfo;
}(_wepy2.default.page)) || _class);

Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(UserInfo , 'pages/userInfo'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVzZXJJbmZvLmpzIl0sIm5hbWVzIjpbImFwaSIsImFjY291bnRBcGkiLCJjaGF0cm9vbUFwaSIsImxvZyIsIlVzZXJJbmZvIiwidXNlciIsInN0YXRlIiwiY29tbW9uIiwic2V0VXNlciIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCJkYXRhIiwibGlzdCIsInVzZXJEYXRhIiwibmFtZSIsImxldmVsRGF0YSIsInVzZXJJZCIsImlzU3RhciIsImlzQWRtaW4iLCJpc0JhbiIsInR5cGUiLCJtZXRob2RzIiwiaGFuZGxlUHVibGlzaFRhcCIsImUiLCJuYXZpZ2F0ZVRvIiwidXJsIiwiaGFuZGxlSXRlbVRhcCIsImlkIiwiY3VycmVudFRhcmdldCIsImRhdGFzZXQiLCJpbmRleCIsImNvbGxlY3RVc2VyVGFwIiwid3giLCJzaG93VG9hc3QiLCJ0aXRsZSIsImljb24iLCJkdXJhdGlvbiIsInVzZXJTdGFyIiwiJGFwcGx5IiwiRGVsQ29sbGVjdFVzZXJUYXAiLCJ1c2VyVW5zdGFyIiwiYmFuU29tZW9uZVRhcCIsImFjY2lkIiwib3RoZXJBY2NpZCIsInJvb21JZCIsImpmVG9rZW4iLCJCYW5Tb21lb25lIiwiZGVsQmFuU29tZW9uZVRhcCIsImNoYW5nZVJvbGUiLCJvblNoYXJlQXBwTWVzc2FnZSIsInJlcyIsIm9wdGlvbnMiLCJsb2dpbiIsImNvZGUiLCJnZXRTZXNzaW9uIiwiYXBwSWQiLCJhcHBTZWNyZXRlIiwib3BlbmlkIiwiZ2V0VXNlckluZm8iLCJ1c2VySW5mbyIsInBhc3N3b3JkIiwidGFrZUxhc3QiLCJ0b0xvd2VyQ2FzZSIsInRva2VuIiwiZ2V0VG9rZW4iLCJUb2tlbiIsIkVycm9yIiwibmltVG9rZW4iLCJlcnJvciIsInBhZ2UiLCJvcHIiLCJpbmZvIiwic2VsZiIsImdldE90aGVyVXNlckluZm8iLCJyZXNEYXRhIiwiaXNfc3RhcmVkIiwiaXNfYWRtaW4iLCJnZXRNc2dMaXN0IiwibWFwIiwiaXRlbSIsImNvbnRlbnQiLCJ0ZXh0IiwiY3JlYXRlZEJ5IiwiYXV0aG9yIiwiY3JlYXRlZEF0IiwiZGF0ZWxpbmUiLCJjb3ZlciIsInBpY191cmxzIiwiYmFzZVNlcnZlciIsInJlYWQiLCJjbGlja19udW0iLCJiYW5JZCIsImluZGV4T2YiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7Ozs7QUFDQTs7SUFBWUEsRzs7QUFDWjs7SUFBWUMsVTs7QUFDWjs7SUFBWUMsVzs7QUFDWjs7OztBQUNBOztJQUFZQyxHOztBQUNaOzs7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7OztJQVdxQkMsUSxXQVBwQix3QkFBUTtBQUNQQyxNQURPLGdCQUNGQyxLQURFLEVBQ0s7QUFDVixXQUFPQSxNQUFNQyxNQUFOLENBQWFGLElBQXBCO0FBQ0Q7QUFITSxDQUFSLEVBSUU7QUFDREc7QUFEQyxDQUpGLEM7Ozs7Ozs7Ozs7Ozs7O2dOQVFDQyxNLEdBQVM7QUFDUEMsOEJBQXdCO0FBRGpCLEssUUFHVEMsSSxHQUFPO0FBQ0xDLFlBQU0sRUFERDtBQUVMQyxnQkFBVTtBQUNSQyxjQUFNO0FBREUsT0FGTDtBQUtMQyxpQkFBVyxFQUxOO0FBTUxDLGNBQVEsRUFOSDtBQU9MQyxjQUFRLElBUEg7QUFRTEMsZUFBUyxJQVJKO0FBU0xDLGFBQU8sSUFURjtBQVVMQyxZQUFNO0FBVkQsSyxRQVlQQyxPLEdBQVU7QUFDUkMsc0JBRFEsNEJBQ1NDLENBRFQsRUFDWTtBQUNsQix1QkFBS0MsVUFBTCxDQUFnQjtBQUNkQyxlQUFLO0FBRFMsU0FBaEI7QUFHRCxPQUxPO0FBTVJDLG1CQU5RLHlCQU1NSCxDQU5OLEVBTVM7QUFDZixZQUFNSSxLQUFLLEtBQUtmLElBQUwsQ0FBVVcsRUFBRUssYUFBRixDQUFnQkMsT0FBaEIsQ0FBd0JDLEtBQWxDLEVBQXlDSCxFQUFwRDtBQUNBLHVCQUFLSCxVQUFMLENBQWdCO0FBQ2RDLDZCQUFpQkU7QUFESCxTQUFoQjtBQUdELE9BWE87QUFZRkksb0JBWkUsNEJBWWM7QUFBQTs7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WjtBQVNBLHFCQUFLcEQsTUFBTDtBQUNBO0FBQ0l0QixzQixHQUFTLEtBQUtBLE07QUFDZDJFLHFCLEdBQVF4QyxRQUFRd0MsSzs7c0JBQ2hCQSxTQUFTLEk7Ozs7O2tEQUNKLEs7OztBQUVQLG9CQUFJQSxNQUFNQyxPQUFOLENBQWM1RSxNQUFkLE1BQTBCLENBQUMsQ0FBL0IsRUFBa0M7QUFDaEMsdUJBQUtHLEtBQUwsR0FBYSxLQUFiO0FBQ0QsaUJBRkQsTUFFSztBQUNILHVCQUFLQSxLQUFMLEdBQWEsSUFBYjtBQUNEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7RUF4SytCLGVBQUtrRCxJO2tCQUF0QmpFLFEiLCJmaWxlIjoidXNlckluZm8uanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcclxuaW1wb3J0ICogYXMgYXBpIGZyb20gJy4uL2FwaXMvdXNlckluZm8nXHJcbmltcG9ydCAqIGFzIGFjY291bnRBcGkgZnJvbSAnLi4vYXBpcy9hY2NvdW50J1xyXG5pbXBvcnQgKiBhcyBjaGF0cm9vbUFwaSBmcm9tICcuLi9hcGlzL2NoYXRyb29tJ1xyXG5pbXBvcnQgUiBmcm9tICcuLi9saWJzL3JhbWRhJ1xyXG5pbXBvcnQgKiBhcyBsb2cgZnJvbSAnLi4vdXRpbHMvbG9nJ1xyXG5pbXBvcnQgTklNIGZyb20gJy4uL3V0aWxzL25pbSdcclxuaW1wb3J0IHsgamYgfSBmcm9tICcuLi9jb25maWcnXHJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICd3ZXB5LXJlZHV4J1xyXG5pbXBvcnQgeyBzZXRVc2VyIH0gZnJvbSAnLi4vYWN0aW9ucy9jb21tb24nXHJcbmltcG9ydCB7XHJcbiAgd3ggYXMgY29uZmlnXHJcbn0gZnJvbSAnLi4vY29uZmlnJ1xyXG5AY29ubmVjdCh7XHJcbiAgdXNlcihzdGF0ZSkge1xyXG4gICAgcmV0dXJuIHN0YXRlLmNvbW1vbi51c2VyXHJcbiAgfVxyXG59LCB7XHJcbiAgc2V0VXNlclxyXG59KVxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBVc2VySW5mbyBleHRlbmRzIHdlcHkucGFnZSB7XHJcbiAgY29uZmlnID0ge1xyXG4gICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+eUqOaIt+ivpuaDhSdcclxuICB9XHJcbiAgZGF0YSA9IHtcclxuICAgIGxpc3Q6IFtdLFxyXG4gICAgdXNlckRhdGE6IHtcclxuICAgICAgbmFtZTogJ+WKoOi9veS4rS4uLidcclxuICAgIH0sXHJcbiAgICBsZXZlbERhdGE6ICcnLFxyXG4gICAgdXNlcklkOiAnJyxcclxuICAgIGlzU3RhcjogbnVsbCxcclxuICAgIGlzQWRtaW46IG51bGwsXHJcbiAgICBpc0JhbjogbnVsbCxcclxuICAgIHR5cGU6IG51bGwsXHJcbiAgfVxyXG4gIG1ldGhvZHMgPSB7XHJcbiAgICBoYW5kbGVQdWJsaXNoVGFwKGUpIHtcclxuICAgICAgd2VweS5uYXZpZ2F0ZVRvKHtcclxuICAgICAgICB1cmw6ICdwdWJsaXNoJ1xyXG4gICAgICB9KVxyXG4gICAgfSxcclxuICAgIGhhbmRsZUl0ZW1UYXAoZSkge1xyXG4gICAgICBjb25zdCBpZCA9IHRoaXMubGlzdFtlLmN1cnJlbnRUYXJnZXQuZGF0YXNldC5pbmRleF0uaWRcclxuICAgICAgd2VweS5uYXZpZ2F0ZVRvKHtcclxuICAgICAgICB1cmw6IGBib2FyZD9pZD0ke2lkfWBcclxuICAgICAgfSlcclxuICAgIH0sXHJcbiAgICBhc3luYyBjb2xsZWN0VXNlclRhcCgpe1xyXG4gICAgICBsZXQgdXNlcklkID0gK3RoaXMudXNlcklkXHJcbiAgICAgIGxldCB7aWR9ID0gdGhpcy51c2VyLnVzZXJEYXRhXHJcbiAgICAgIGlmIChpZCA9PT0gdXNlcklkKSB7XHJcbiAgICAgICAgd3guc2hvd1RvYXN0KHtcclxuICAgICAgICAgIHRpdGxlOiAn5oKo5LiN6IO95YWz5rOo6Ieq5bexJyxcclxuICAgICAgICAgIGljb246ICdsb2FkaW5nJyxcclxuICAgICAgICAgIGR1cmF0aW9uOiAyMDAwXHJcbiAgICAgICAgfSlcclxuICAgICAgfWVsc2V7XHJcbiAgICAgICAgYXdhaXQgYWNjb3VudEFwaS51c2VyU3RhcihpZCx1c2VySWQpXHJcbiAgICAgICAgdGhpcy5pc1N0YXIgPSB0cnVlXHJcbiAgICAgICAgd3guc2hvd1RvYXN0KHtcclxuICAgICAgICAgIHRpdGxlOiAn5bey5YWz5rOoJyxcclxuICAgICAgICAgIGljb246ICdzdWNjZXNzJyxcclxuICAgICAgICAgIGR1cmF0aW9uOiAyMDAwXHJcbiAgICAgICAgfSlcclxuICAgICAgICB0aGlzLiRhcHBseSgpXHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBhc3luYyBEZWxDb2xsZWN0VXNlclRhcCgpe1xyXG4gICAgICBsZXQgdXNlcklkID0gK3RoaXMudXNlcklkXHJcbiAgICAgIGxldCB7aWR9ID0gdGhpcy51c2VyLnVzZXJEYXRhXHJcbiAgICAgIGF3YWl0IGFjY291bnRBcGkudXNlclVuc3RhcihpZCx1c2VySWQpXHJcbiAgICAgIHRoaXMuaXNTdGFyID0gZmFsc2VcclxuICAgICAgd3guc2hvd1RvYXN0KHtcclxuICAgICAgICB0aXRsZTogJ+W3suWPlua2iOWFs+azqCcsXHJcbiAgICAgICAgaWNvbjogJ3N1Y2Nlc3MnLFxyXG4gICAgICAgIGR1cmF0aW9uOiAyMDAwXHJcbiAgICAgIH0pXHJcbiAgICAgIHRoaXMuJGFwcGx5KClcclxuICAgIH0sXHJcbiAgICBhc3luYyBiYW5Tb21lb25lVGFwKCl7XHJcbiAgICAgIGxldCB7YWNjaWR9ID0gdGhpcy51c2VyLnVzZXJEYXRhXHJcbiAgICAgIGxldCBvdGhlckFjY2lkID0gdGhpcy5vdGhlckFjY2lkXHJcbiAgICAgIGxldCByb29tSWQgPSB0aGlzLnJvb21JZFxyXG4gICAgICBjb25zdCB7amZUb2tlbn0gPSB0aGlzLnVzZXJcclxuICAgICAgYXdhaXQgY2hhdHJvb21BcGkuQmFuU29tZW9uZShyb29tSWQsYWNjaWQsb3RoZXJBY2NpZCxqZlRva2VuKVxyXG4gICAgICB3eC5zaG93VG9hc3Qoe1xyXG4gICAgICAgIHRpdGxlOiAn5bey56aB6KiAJyxcclxuICAgICAgICBpY29uOiAnc3VjY2VzcycsXHJcbiAgICAgICAgZHVyYXRpb246IDIwMDBcclxuICAgICAgfSlcclxuICAgICAgdGhpcy5pc0JhbiA9IHRydWVcclxuICAgICAgdGhpcy4kYXBwbHkoKVxyXG4gICAgfSxcclxuICAgIGFzeW5jIGRlbEJhblNvbWVvbmVUYXAoKXtcclxuICAgICAgbGV0IHthY2NpZH0gPSB0aGlzLnVzZXIudXNlckRhdGFcclxuICAgICAgbGV0IHJvb21JZCA9IHRoaXMucm9vbUlkXHJcbiAgICAgIGxldCBvdGhlckFjY2lkID0gdGhpcy5vdGhlckFjY2lkXHJcbiAgICAgIGF3YWl0IGNoYXRyb29tQXBpLmNoYW5nZVJvbGUocm9vbUlkLGFjY2lkLG90aGVyQWNjaWQsMilcclxuICAgICAgd3guc2hvd1RvYXN0KHtcclxuICAgICAgICB0aXRsZTogJ+W3suaBouWkjScsXHJcbiAgICAgICAgaWNvbjogJ3N1Y2Nlc3MnLFxyXG4gICAgICAgIGR1cmF0aW9uOiAyMDAwXHJcbiAgICAgIH0pXHJcbiAgICAgIHRoaXMuaXNCYW4gPSBmYWxzZVxyXG4gICAgICB0aGlzLiRhcHBseSgpXHJcbiAgICB9LFxyXG4gIH1cclxuICBvblNoYXJlQXBwTWVzc2FnZSA9IGZ1bmN0aW9uIChyZXMpIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHRpdGxlOiB0aGlzLnVzZXJEYXRhLm5hbWUrJ+eahOS4quS6uuWQjeeJhydcclxuICAgIH1cclxuICB9XHJcbiAgYXN5bmMgb25Mb2FkKG9wdGlvbnMpIHtcclxuICAgIGNvbnN0IHsgc2V0VXNlciB9ID0gdGhpcy5tZXRob2RzXHJcbiAgICBjb25zdCB7IGNvZGUgfSA9IGF3YWl0IHdlcHkubG9naW4oKVxyXG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IGFjY291bnRBcGkuZ2V0U2Vzc2lvbihjb2RlLGNvbmZpZy5hcHBJZCxjb25maWcuYXBwU2VjcmV0ZSlcclxuICAgIGNvbnN0IHsgb3BlbmlkIH0gPSBkYXRhIFxyXG4gICAgY29uc3QgeyB1c2VySW5mbyB9ID0gYXdhaXQgd2VweS5nZXRVc2VySW5mbygpXHJcbiAgICBjb25zdCBwYXNzd29yZCA9IFIudGFrZUxhc3QoNSkob3BlbmlkKVxyXG4gICAgY29uc3QgdXNlciA9IHtcclxuICAgICAgLi4udXNlckluZm8sXHJcbiAgICAgIGFjY2lkOiBvcGVuaWQudG9Mb3dlckNhc2UoKVxyXG4gICAgfVxyXG5cclxuICAgIHNldFVzZXIodXNlcilcclxuICAgICAgLy8g5aaC5p6c55So5oi35bCa5pyq5ZyoIOe9keaYk+S6keazqOWGjCDliJnlhYjms6jlhoxcclxuICAgICAgdHJ5IHtcclxuICAgICAgICBjb25zdCB0b2tlbiA9IGF3YWl0IE5JTS5sb2dpbihvcGVuaWQpXHJcbiAgICAgICAgY29uc3QgdXNlcklkID0gYXdhaXQgYWNjb3VudEFwaS5nZXRUb2tlbihvcGVuaWQsIHBhc3N3b3JkLnRvTG93ZXJDYXNlKCkpXHJcbiAgICAgICAgY29uc3Qge1Rva2VufSA9IHVzZXJJZFxyXG5cclxuICAgICAgICBpZiAoIVRva2VuKSB7XHJcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ3VzZXIgbm90IGV4aXN0JylcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHNldFVzZXIoe1xyXG4gICAgICAgICAgLi4udGhpcy51c2VyLFxyXG4gICAgICAgICAgamZUb2tlbjogVG9rZW4sXHJcbiAgICAgICAgICBuaW1Ub2tlbjogdG9rZW4sXHJcbiAgICAgICAgICB1c2VyRGF0YTogdXNlcklkXHJcbiAgICAgICAgfSlcclxuICAgICAgfWNhdGNoIChlKSB7XHJcbiAgICAgICAgbG9nLmVycm9yKHtcclxuICAgICAgICAgIHBhZ2U6ICdjaGF0cm9vbScsXHJcbiAgICAgICAgICBvcHI6ICdpbml0JyxcclxuICAgICAgICAgIGluZm86IGVcclxuICAgICAgICB9KVxyXG4gICAgICAgIHdlcHkubmF2aWdhdGVUbyh7XHJcbiAgICAgICAgICB1cmw6ICcvcGFnZXMvcmVnaXN0ZXInXHJcbiAgICAgICAgfSlcclxuICAgICAgfVxyXG5cclxuICAgIHRoaXMucm9vbUlkID0gb3B0aW9ucy5yb29tSWRcclxuICAgIHRoaXMudXNlcklkID0gb3B0aW9ucy5pZFxyXG4gICAgY29uc3QgeyBqZlRva2VuIH0gPSB0aGlzLnVzZXJcclxuICAgIGlmIChvcHRpb25zLnR5cGUgPT09IFwiTUFOQUdFUlwifHxvcHRpb25zLnR5cGUgPT09IFwiQ1JFQVRPUlwiKSB7XHJcbiAgICAgIHRoaXMudHlwZSA9IHRydWVcclxuICAgIH1cclxuICAgIGxldCBzZWxmID0gdGhpc1xyXG4gICAgbGV0IHJlc0RhdGEgPSBhd2FpdCBhcGkuZ2V0T3RoZXJVc2VySW5mbyhvcHRpb25zLmlkLGpmVG9rZW4pXHJcbiAgICBjb25zdCB7aXNfc3RhcmVkfSA9IHJlc0RhdGFcclxuICAgIGxldCB7YWNjaWR9ID0gcmVzRGF0YVxyXG4gICAgdGhpcy5vdGhlckFjY2lkID0gYWNjaWRcclxuICAgIHRoaXMuaXNBZG1pbiA9IHRoaXMudXNlci51c2VyRGF0YS5pc19hZG1pbiBcclxuICAgIHRoaXMuaXNTdGFyID0gaXNfc3RhcmVkXHJcbiAgICBzZWxmLnVzZXJEYXRhID0gcmVzRGF0YVxyXG4gICAgY29uc3QgcmVzID0gYXdhaXQgYXBpLmdldE1zZ0xpc3Qob3B0aW9ucy5pZClcclxuICAgIHRoaXMubGlzdCA9IHJlcy5tYXAoaXRlbSA9PiAoe1xyXG4gICAgICBpZDogaXRlbS5pZCxcclxuICAgICAgdGl0bGU6IGl0ZW0udGl0bGUsXHJcbiAgICAgIGNvbnRlbnQ6IGl0ZW0udGV4dCxcclxuICAgICAgY3JlYXRlZEJ5OiBpdGVtLmF1dGhvci5uYW1lLFxyXG4gICAgICBjcmVhdGVkQXQ6IGl0ZW0uZGF0ZWxpbmUsXHJcbiAgICAgIGNvdmVyOiBpdGVtLnBpY191cmxzWzBdID8gYCR7amYuYmFzZVNlcnZlcn0ke2l0ZW0ucGljX3VybHNbMF19YCA6ICcnLFxyXG4gICAgICByZWFkOiBpdGVtLmNsaWNrX251bVxyXG4gICAgfSkpXHJcbiAgICB0aGlzLiRhcHBseSgpXHJcbiAgICAvL+WIpOaWreeUqOaIt+acieayoeacieiiq+emgeiogFxyXG4gICAgbGV0IHVzZXJJZCA9IHRoaXMudXNlcklkXHJcbiAgICBsZXQgYmFuSWQgPSBvcHRpb25zLmJhbklkXHJcbiAgICBpZiAoYmFuSWQgPT0gbnVsbCkge1xyXG4gICAgICByZXR1cm4gZmFsc2VcclxuICAgIH1lbHNle1xyXG4gICAgICBpZiAoYmFuSWQuaW5kZXhPZih1c2VySWQpID09PSAtMSkge1xyXG4gICAgICAgIHRoaXMuaXNCYW4gPSBmYWxzZVxyXG4gICAgICB9ZWxzZXtcclxuICAgICAgICB0aGlzLmlzQmFuID0gdHJ1ZVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ==