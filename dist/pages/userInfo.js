'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


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

var _config = require('./../config.js');

var _wepyRedux = require('./../npm/wepy-redux/lib/index.js');

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var UserInfo = (_dec = (0, _wepyRedux.connect)({
  user: function user(state) {
    return state.common.user;
  }
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
        var jfToken, self, resData, is_stared, accid, res, userId, banId;
        return _regenerator2.default.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                this.roomId = options.roomId;
                this.userId = options.id;
                jfToken = this.user.jfToken;

                if (options.type === "MANAGER" || options.type === "CREATOR") {
                  this.type = true;
                }
                self = this;
                _context5.next = 7;
                return api.getOtherUserInfo(options.id, jfToken);

              case 7:
                resData = _context5.sent;
                is_stared = resData.is_stared;
                accid = resData.accid;

                this.otherAccid = accid;
                this.isAdmin = this.user.userData.is_admin;
                this.isStar = is_stared;
                self.userData = resData;
                _context5.next = 16;
                return api.getMsgList(options.id);

              case 16:
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
                  _context5.next = 25;
                  break;
                }

                return _context5.abrupt('return', false);

              case 25:
                if (banId.indexOf(userId) === -1) {
                  this.isBan = false;
                } else {
                  this.isBan = true;
                }

              case 26:
              case 'end':
                return _context5.stop();
            }
          }
        }, _callee5, this);
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVzZXJJbmZvLmpzIl0sIm5hbWVzIjpbImFwaSIsImFjY291bnRBcGkiLCJjaGF0cm9vbUFwaSIsIlVzZXJJbmZvIiwidXNlciIsInN0YXRlIiwiY29tbW9uIiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsImRhdGEiLCJsaXN0IiwidXNlckRhdGEiLCJuYW1lIiwibGV2ZWxEYXRhIiwidXNlcklkIiwiaXNTdGFyIiwiaXNBZG1pbiIsImlzQmFuIiwidHlwZSIsIm1ldGhvZHMiLCJoYW5kbGVQdWJsaXNoVGFwIiwiZSIsIm5hdmlnYXRlVG8iLCJ1cmwiLCJoYW5kbGVJdGVtVGFwIiwiaWQiLCJjdXJyZW50VGFyZ2V0IiwiZGF0YXNldCIsImluZGV4IiwiY29sbGVjdFVzZXJUYXAiLCJ3eCIsInNob3dUb2FzdCIsInRpdGxlIiwiaWNvbiIsImR1cmF0aW9uIiwidXNlclN0YXIiLCIkYXBwbHkiLCJEZWxDb2xsZWN0VXNlclRhcCIsInVzZXJVbnN0YXIiLCJiYW5Tb21lb25lVGFwIiwiYWNjaWQiLCJvdGhlckFjY2lkIiwicm9vbUlkIiwiamZUb2tlbiIsIkJhblNvbWVvbmUiLCJkZWxCYW5Tb21lb25lVGFwIiwiY2hhbmdlUm9sZSIsIm9uU2hhcmVBcHBNZXNzYWdlIiwicmVzIiwib3B0aW9ucyIsInNlbGYiLCJnZXRPdGhlclVzZXJJbmZvIiwicmVzRGF0YSIsImlzX3N0YXJlZCIsImlzX2FkbWluIiwiZ2V0TXNnTGlzdCIsIm1hcCIsIml0ZW0iLCJjb250ZW50IiwidGV4dCIsImNyZWF0ZWRCeSIsImF1dGhvciIsImNyZWF0ZWRBdCIsImRhdGVsaW5lIiwiY292ZXIiLCJwaWNfdXJscyIsImJhc2VTZXJ2ZXIiLCJyZWFkIiwiY2xpY2tfbnVtIiwiYmFuSWQiLCJpbmRleE9mIiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBOzs7O0FBQ0E7O0lBQVlBLEc7O0FBQ1o7O0lBQVlD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Q0FBY3hELE1BQWQsTUFBMEIsQ0FBQyxDQUEvQixFQUFrQztBQUNoQyx1QkFBS0csS0FBTCxHQUFhLEtBQWI7QUFDRCxpQkFGRCxNQUVLO0FBQ0gsdUJBQUtBLEtBQUwsR0FBYSxJQUFiO0FBQ0Q7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQWpJK0IsZUFBS3NELEk7a0JBQXRCcEUsUSIsImZpbGUiOiJ1c2VySW5mby5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5pbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xyXG5pbXBvcnQgKiBhcyBhcGkgZnJvbSAnLi4vYXBpcy91c2VySW5mbydcclxuaW1wb3J0ICogYXMgYWNjb3VudEFwaSBmcm9tICcuLi9hcGlzL2FjY291bnQnXHJcbmltcG9ydCAqIGFzIGNoYXRyb29tQXBpIGZyb20gJy4uL2FwaXMvY2hhdHJvb20nXHJcbmltcG9ydCB7IGpmIH0gZnJvbSAnLi4vY29uZmlnJ1xyXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAnd2VweS1yZWR1eCdcclxuQGNvbm5lY3Qoe1xyXG4gIHVzZXIoc3RhdGUpIHtcclxuICAgIHJldHVybiBzdGF0ZS5jb21tb24udXNlclxyXG4gIH1cclxufSlcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVXNlckluZm8gZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xyXG4gIGNvbmZpZyA9IHtcclxuICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICfnlKjmiLfor6bmg4UnXHJcbiAgfVxyXG4gIGRhdGEgPSB7XHJcbiAgICBsaXN0OiBbXSxcclxuICAgIHVzZXJEYXRhOiB7XHJcbiAgICAgIG5hbWU6ICfliqDovb3kuK0uLi4nXHJcbiAgICB9LFxyXG4gICAgbGV2ZWxEYXRhOiAnJyxcclxuICAgIHVzZXJJZDogJycsXHJcbiAgICBpc1N0YXI6IG51bGwsXHJcbiAgICBpc0FkbWluOiBudWxsLFxyXG4gICAgaXNCYW46IG51bGwsXHJcbiAgICB0eXBlOiBudWxsLFxyXG4gIH1cclxuICBtZXRob2RzID0ge1xyXG4gICAgaGFuZGxlUHVibGlzaFRhcChlKSB7XHJcbiAgICAgIHdlcHkubmF2aWdhdGVUbyh7XHJcbiAgICAgICAgdXJsOiAncHVibGlzaCdcclxuICAgICAgfSlcclxuICAgIH0sXHJcbiAgICBoYW5kbGVJdGVtVGFwKGUpIHtcclxuICAgICAgY29uc3QgaWQgPSB0aGlzLmxpc3RbZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQuaW5kZXhdLmlkXHJcbiAgICAgIHdlcHkubmF2aWdhdGVUbyh7XHJcbiAgICAgICAgdXJsOiBgYm9hcmQ/aWQ9JHtpZH1gXHJcbiAgICAgIH0pXHJcbiAgICB9LFxyXG4gICAgYXN5bmMgY29sbGVjdFVzZXJUYXAoKXtcclxuICAgICAgbGV0IHVzZXJJZCA9ICt0aGlzLnVzZXJJZFxyXG4gICAgICBsZXQge2lkfSA9IHRoaXMudXNlci51c2VyRGF0YVxyXG4gICAgICBpZiAoaWQgPT09IHVzZXJJZCkge1xyXG4gICAgICAgIHd4LnNob3dUb2FzdCh7XHJcbiAgICAgICAgICB0aXRsZTogJ+aCqOS4jeiDveWFs+azqOiHquW3sScsXHJcbiAgICAgICAgICBpY29uOiAnbG9hZGluZycsXHJcbiAgICAgICAgICBkdXJhdGlvbjogMjAwMFxyXG4gICAgICAgIH0pXHJcbiAgICAgIH1lbHNle1xyXG4gICAgICAgIGF3YWl0IGFjY291bnRBcGkudXNlclN0YXIoaWQsdXNlcklkKVxyXG4gICAgICAgIHRoaXMuaXNTdGFyID0gdHJ1ZVxyXG4gICAgICAgIHd4LnNob3dUb2FzdCh7XHJcbiAgICAgICAgICB0aXRsZTogJ+W3suWFs+azqCcsXHJcbiAgICAgICAgICBpY29uOiAnc3VjY2VzcycsXHJcbiAgICAgICAgICBkdXJhdGlvbjogMjAwMFxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgdGhpcy4kYXBwbHkoKVxyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgYXN5bmMgRGVsQ29sbGVjdFVzZXJUYXAoKXtcclxuICAgICAgbGV0IHVzZXJJZCA9ICt0aGlzLnVzZXJJZFxyXG4gICAgICBsZXQge2lkfSA9IHRoaXMudXNlci51c2VyRGF0YVxyXG4gICAgICBhd2FpdCBhY2NvdW50QXBpLnVzZXJVbnN0YXIoaWQsdXNlcklkKVxyXG4gICAgICB0aGlzLmlzU3RhciA9IGZhbHNlXHJcbiAgICAgIHd4LnNob3dUb2FzdCh7XHJcbiAgICAgICAgdGl0bGU6ICflt7Llj5bmtojlhbPms6gnLFxyXG4gICAgICAgIGljb246ICdzdWNjZXNzJyxcclxuICAgICAgICBkdXJhdGlvbjogMjAwMFxyXG4gICAgICB9KVxyXG4gICAgICB0aGlzLiRhcHBseSgpXHJcbiAgICB9LFxyXG4gICAgYXN5bmMgYmFuU29tZW9uZVRhcCgpe1xyXG4gICAgICBsZXQge2FjY2lkfSA9IHRoaXMudXNlci51c2VyRGF0YVxyXG4gICAgICBsZXQgb3RoZXJBY2NpZCA9IHRoaXMub3RoZXJBY2NpZFxyXG4gICAgICBsZXQgcm9vbUlkID0gdGhpcy5yb29tSWRcclxuICAgICAgY29uc3Qge2pmVG9rZW59ID0gdGhpcy51c2VyXHJcbiAgICAgIGF3YWl0IGNoYXRyb29tQXBpLkJhblNvbWVvbmUocm9vbUlkLGFjY2lkLG90aGVyQWNjaWQsamZUb2tlbilcclxuICAgICAgd3guc2hvd1RvYXN0KHtcclxuICAgICAgICB0aXRsZTogJ+W3suemgeiogCcsXHJcbiAgICAgICAgaWNvbjogJ3N1Y2Nlc3MnLFxyXG4gICAgICAgIGR1cmF0aW9uOiAyMDAwXHJcbiAgICAgIH0pXHJcbiAgICAgIHRoaXMuaXNCYW4gPSB0cnVlXHJcbiAgICAgIHRoaXMuJGFwcGx5KClcclxuICAgIH0sXHJcbiAgICBhc3luYyBkZWxCYW5Tb21lb25lVGFwKCl7XHJcbiAgICAgIGxldCB7YWNjaWR9ID0gdGhpcy51c2VyLnVzZXJEYXRhXHJcbiAgICAgIGxldCByb29tSWQgPSB0aGlzLnJvb21JZFxyXG4gICAgICBsZXQgb3RoZXJBY2NpZCA9IHRoaXMub3RoZXJBY2NpZFxyXG4gICAgICBhd2FpdCBjaGF0cm9vbUFwaS5jaGFuZ2VSb2xlKHJvb21JZCxhY2NpZCxvdGhlckFjY2lkLDIpXHJcbiAgICAgIHd4LnNob3dUb2FzdCh7XHJcbiAgICAgICAgdGl0bGU6ICflt7LmgaLlpI0nLFxyXG4gICAgICAgIGljb246ICdzdWNjZXNzJyxcclxuICAgICAgICBkdXJhdGlvbjogMjAwMFxyXG4gICAgICB9KVxyXG4gICAgICB0aGlzLmlzQmFuID0gZmFsc2VcclxuICAgICAgdGhpcy4kYXBwbHkoKVxyXG4gICAgfSxcclxuICB9XHJcbiAgb25TaGFyZUFwcE1lc3NhZ2UgPSBmdW5jdGlvbiAocmVzKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICB0aXRsZTogdGhpcy51c2VyRGF0YS5uYW1lKyfnmoTkuKrkurrlkI3niYcnXHJcbiAgICB9XHJcbiAgfVxyXG4gIGFzeW5jIG9uTG9hZChvcHRpb25zKSB7XHJcbiAgICB0aGlzLnJvb21JZCA9IG9wdGlvbnMucm9vbUlkXHJcbiAgICB0aGlzLnVzZXJJZCA9IG9wdGlvbnMuaWRcclxuICAgIGNvbnN0IHsgamZUb2tlbiB9ID0gdGhpcy51c2VyXHJcbiAgICBpZiAob3B0aW9ucy50eXBlID09PSBcIk1BTkFHRVJcInx8b3B0aW9ucy50eXBlID09PSBcIkNSRUFUT1JcIikge1xyXG4gICAgICB0aGlzLnR5cGUgPSB0cnVlXHJcbiAgICB9XHJcbiAgICBsZXQgc2VsZiA9IHRoaXNcclxuICAgIGxldCByZXNEYXRhID0gYXdhaXQgYXBpLmdldE90aGVyVXNlckluZm8ob3B0aW9ucy5pZCxqZlRva2VuKVxyXG4gICAgY29uc3Qge2lzX3N0YXJlZH0gPSByZXNEYXRhXHJcbiAgICBsZXQge2FjY2lkfSA9IHJlc0RhdGFcclxuICAgIHRoaXMub3RoZXJBY2NpZCA9IGFjY2lkXHJcbiAgICB0aGlzLmlzQWRtaW4gPSB0aGlzLnVzZXIudXNlckRhdGEuaXNfYWRtaW4gXHJcbiAgICB0aGlzLmlzU3RhciA9IGlzX3N0YXJlZFxyXG4gICAgc2VsZi51c2VyRGF0YSA9IHJlc0RhdGFcclxuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGFwaS5nZXRNc2dMaXN0KG9wdGlvbnMuaWQpXHJcbiAgICB0aGlzLmxpc3QgPSByZXMubWFwKGl0ZW0gPT4gKHtcclxuICAgICAgaWQ6IGl0ZW0uaWQsXHJcbiAgICAgIHRpdGxlOiBpdGVtLnRpdGxlLFxyXG4gICAgICBjb250ZW50OiBpdGVtLnRleHQsXHJcbiAgICAgIGNyZWF0ZWRCeTogaXRlbS5hdXRob3IubmFtZSxcclxuICAgICAgY3JlYXRlZEF0OiBpdGVtLmRhdGVsaW5lLFxyXG4gICAgICBjb3ZlcjogaXRlbS5waWNfdXJsc1swXSA/IGAke2pmLmJhc2VTZXJ2ZXJ9JHtpdGVtLnBpY191cmxzWzBdfWAgOiAnJyxcclxuICAgICAgcmVhZDogaXRlbS5jbGlja19udW1cclxuICAgIH0pKVxyXG4gICAgdGhpcy4kYXBwbHkoKVxyXG4gICAgLy/liKTmlq3nlKjmiLfmnInmsqHmnInooqvnpoHoqIBcclxuICAgIGxldCB1c2VySWQgPSB0aGlzLnVzZXJJZFxyXG4gICAgbGV0IGJhbklkID0gb3B0aW9ucy5iYW5JZFxyXG4gICAgaWYgKGJhbklkID09IG51bGwpIHtcclxuICAgICAgcmV0dXJuIGZhbHNlXHJcbiAgICB9ZWxzZXtcclxuICAgICAgaWYgKGJhbklkLmluZGV4T2YodXNlcklkKSA9PT0gLTEpIHtcclxuICAgICAgICB0aGlzLmlzQmFuID0gZmFsc2VcclxuICAgICAgfWVsc2V7XHJcbiAgICAgICAgdGhpcy5pc0JhbiA9IHRydWVcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0=