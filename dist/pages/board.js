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

var _wepyRedux = require('./../npm/wepy-redux/lib/index.js');

var _board = require('./../apis/board.js');

var api = _interopRequireWildcard(_board);

var _account = require('./../apis/account.js');

var accountApi = _interopRequireWildcard(_account);

var _config = require('./../config.js');

var _ramda = require('./../libs/ramda.js');

var _ramda2 = _interopRequireDefault(_ramda);

var _log = require('./../utils/log.js');

var log = _interopRequireWildcard(_log);

var _nim = require('./../utils/nim.js');

var _nim2 = _interopRequireDefault(_nim);

var _common = require('./../actions/common.js');

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Board = (_dec = (0, _wepyRedux.connect)({
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
}), _dec(_class = function (_wepy$page) {
  (0, _inherits3.default)(Board, _wepy$page);

  function Board() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, Board);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Board.__proto__ || (0, _getPrototypeOf2.default)(Board)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: '商友圈'
    }, _this.data = {
      title: '',
      imgs: [],
      content: '',
      createdBy: '',
      createdAt: '',
      read: '',
      author_id: '',
      isStar: null
    }, _this.methods = {
      handleName: function handleName(e) {
        _wepy2.default.navigateTo({
          url: 'userInfo?id=' + this.author_id
        });
      },
      handeCollection: function handeCollection() {
        var _this2 = this;

        return (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
          var id, boardId;
          return _regenerator2.default.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  id = _this2.user.userData.id;
                  boardId = _this2.boardId;
                  _context.next = 4;
                  return accountApi.articleStar(id, boardId);

                case 4:
                  _this2.isStar = true, wx.showToast({
                    title: '已收藏',
                    icon: 'success',
                    duration: 2000
                  });
                  _this2.$apply();

                case 6:
                case 'end':
                  return _context.stop();
              }
            }
          }, _callee, _this2);
        }))();
      },
      DelCollection: function DelCollection() {
        var _this3 = this;

        return (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2() {
          var id, boardId;
          return _regenerator2.default.wrap(function _callee2$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  id = _this3.user.userData.id;
                  boardId = _this3.boardId;
                  _context2.next = 4;
                  return accountApi.articleUnstar(id, boardId);

                case 4:
                  wx.showToast({
                    title: '已取消',
                    icon: 'success',
                    duration: 2000
                  });
                  _this3.isStar = false;
                  _this3.$apply();

                case 7:
                case 'end':
                  return _context2.stop();
              }
            }
          }, _callee2, _this3);
        }))();
      },
      imgPreview: function imgPreview(items, index) {
        var imgArr = items;
        var num = index;
        _wepy2.default.previewImage({
          current: imgArr[num],
          urls: imgArr,
          success: function success(res) {
            console.log(res);
          }
        });
      }
    }, _this.onShareAppMessage = function (res) {
      return {
        title: this.category[0]
      };
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(Board, [{
    key: 'onLoad',
    value: function () {
      var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3(option) {
        var setUser, _ref3, code, data, openid, _ref4, userInfo, password, user, token, userId, Token, id, jfToken, res;

        return _regenerator2.default.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                setUser = this.methods.setUser;
                // const pushMsg = this.methods.pushMsg.bind(this)

                _wepy2.default.showLoading();
                _context3.next = 4;
                return _wepy2.default.login();

              case 4:
                _ref3 = _context3.sent;
                code = _ref3.code;
                _context3.next = 8;
                return accountApi.getSession(code, _config.wx.appId, _config.wx.appSecrete);

              case 8:
                data = _context3.sent;
                openid = data.openid;
                _context3.next = 12;
                return _wepy2.default.getUserInfo();

              case 12:
                _ref4 = _context3.sent;
                userInfo = _ref4.userInfo;
                password = _ramda2.default.takeLast(5)(openid);
                user = (0, _extends3.default)({}, userInfo, {
                  accid: openid.toLowerCase()
                });


                setUser(user);
                // 如果用户尚未在 网易云注册 则先注册
                _context3.prev = 17;
                _context3.next = 20;
                return _nim2.default.login(openid);

              case 20:
                token = _context3.sent;
                _context3.next = 23;
                return accountApi.getToken(openid, password.toLowerCase());

              case 23:
                userId = _context3.sent;
                Token = userId.Token;

                if (Token) {
                  _context3.next = 27;
                  break;
                }

                throw new Error('user not exist');

              case 27:

                setUser((0, _extends3.default)({}, this.user, {
                  jfToken: Token,
                  nimToken: token,
                  userData: userId
                }));

                // 获取文章信息
                id = option.id;
                jfToken = this.user.jfToken;
                _context3.next = 32;
                return api.addReadNum(id, jfToken);

              case 32:
                _context3.next = 34;
                return api.boardDetail(id, jfToken);

              case 34:
                res = _context3.sent;

                this.title = res.title;
                this.content = res.text;
                this.boardId = res.id;
                this.createdBy = res.author;
                this.createdAt = res.dateline;
                this.read = res.click_num;
                this.author_id = res.author_id;
                this.category = res.category;
                this.isStar = res.is_stared;
                this.imgs = res.pic_urls.map(function (url) {
                  return '' + _config.jf.baseServer + url;
                });
                this.$apply();
                _wepy2.default.hideLoading();
                _context3.next = 53;
                break;

              case 49:
                _context3.prev = 49;
                _context3.t0 = _context3['catch'](17);

                log.error({
                  page: 'chatrooms',
                  opr: 'init',
                  info: _context3.t0
                });
                _wepy2.default.navigateTo({
                  url: '/pages/register'
                });

              case 53:
              case 'end':
                return _context3.stop();
            }
          }
        }, _callee3, this, [[17, 49]]);
      }));

      function onLoad(_x) {
        return _ref2.apply(this, arguments);
      }

      return onLoad;
    }()
  }]);
  return Board;
}(_wepy2.default.page)) || _class);

Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Board , 'pages/board'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJvYXJkLmpzIl0sIm5hbWVzIjpbImFwaSIsImFjY291bnRBcGkiLCJsb2ciLCJCb2FyZCIsInVzZXIiLCJzdGF0ZSIsImNvbW1vbiIsIm5pbSIsImZyaWVuZHMiLCJtc2dzIiwiY2hhdCIsInNldFVzZXIiLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiZGF0YSIsInRpdGxlIiwiaW1ncyIsImNvbnRlbnQiLCJjcmVhdGVkQnkiLCJjcmVhdGVkQXQiLCJyZWFkIiwiYXV0aG9yX2lkIiwiaXNTdGFyIiwibWV0aG9kcyIsImhhbmRsZU5hbWUiLCJlIiwibmF2aWdhdGVUbyIsInVybCIsImhhbmRlQ29sbGVjdGlvbiIsImlkIiwidXNlckRhdGEiLCJib2FyZElkIiwiYXJ0aWNsZVN0YXIiLCJ3eCIsInNob3dUb2FzdCIsImljb24iLCJkdXJhdGlvbiIsIiRhcHBseSIsIkRlbENvbGxlY3Rpb24iLCJhcnRpY2xlVW5zdGFyIiwiaW1nUHJldmlldyIsIml0ZW1zIiwiaW5kZXgiLCJpbWdBcnIiLCJudW0iLCJwcmV2aWV3SW1hZ2UiLCJjdXJyZW50IiwidXJscyIsInN1Y2Nlc3MiLCJyZXMiLCJjb25zb2xlIiwib25TaGFyZUFwcE1lc3NhZ2UiLCJjYXRlZ29yeSIsIm9wdGlvbiIsInNob3dMb2FkaW5nIiwibG9naW4iLCJjb2RlIiwiZ2V0U2Vzc2lvbiIsImFwcElkIiwiYXBwU2VjcmV0ZSIsIm9wZW5pZCIsImdldFVzZXJJbmZvIiwidXNlckluZm8iLCJwYXNzd29yZCIsInRha2VMYXN0IiwiYWNjaWQiLCJ0b0xvd2VyQ2FzZSIsInRva2VuIiwiZ2V0VG9rZW4iLCJ1c2VySWQiLCJUb2tlbiIsIkVycm9yIiwiamZUb2tlbiIsIm5pbVRva2VuIiwiYWRkUmVhZE51bSIsImJvYXJkRGV0YWlsIiwidGV4dCIsImF1dGhvciIsImRhdGVsaW5lIiwiY2xpY2tfbnVtIiwiaXNfc3RhcmVkIiwicGljX3VybHMiLCJtYXAiLCJiYXNlU2VydmVyIiwiaGlk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QUFwQixDOzs7QUFBWnZCLG1COztBQUNOLHFCQUFLbEMsS0FBTCxHQUFha0MsSUFBSWxDLEtBQWpCO0FBQ0EscUJBQUtFLE9BQUwsR0FBZWdDLElBQUkyQixJQUFuQjtBQUNBLHFCQUFLN0MsT0FBTCxHQUFla0IsSUFBSXBCLEVBQW5CO0FBQ0EscUJBQUtYLFNBQUwsR0FBaUIrQixJQUFJNEIsTUFBckI7QUFDQSxxQkFBSzFELFNBQUwsR0FBaUI4QixJQUFJNkIsUUFBckI7QUFDQSxxQkFBSzFELElBQUwsR0FBWTZCLElBQUk4QixTQUFoQjtBQUNBLHFCQUFLMUQsU0FBTCxHQUFpQjRCLElBQUk1QixTQUFyQjtBQUNBLHFCQUFLK0IsUUFBTCxHQUFnQkgsSUFBSUcsUUFBcEI7QUFDQSxxQkFBSzlCLE1BQUwsR0FBYzJCLElBQUkrQixTQUFsQjtBQUNBLHFCQUFLaEUsSUFBTCxHQUFZaUMsSUFBSWdDLFFBQUosQ0FBYUMsR0FBYixDQUFpQjtBQUFBLDhCQUFVLFdBQUdDLFVBQWIsR0FBMEJ4RCxHQUExQjtBQUFBLGlCQUFqQixDQUFaO0FBQ0EscUJBQUtVLE1BQUw7QUFDQSwrQkFBSytDLFdBQUw7Ozs7Ozs7O0FBRUFsRixvQkFBSW1GLEtBQUosQ0FBVTtBQUNSQyx3QkFBTSxXQURFO0FBRVJDLHVCQUFLLE1BRkc7QUFHUkM7QUFIUSxpQkFBVjtBQUtBLCtCQUFLOUQsVUFBTCxDQUFnQjtBQUNkQyx1QkFBSztBQURTLGlCQUFoQjs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBM0gyQixlQUFLMkQsSTtrQkFBbkJuRixLIiwiZmlsZSI6ImJvYXJkLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXHJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICd3ZXB5LXJlZHV4J1xyXG5pbXBvcnQgKiBhcyBhcGkgZnJvbSAnLi4vYXBpcy9ib2FyZCdcclxuaW1wb3J0ICogYXMgYWNjb3VudEFwaSBmcm9tICcuLi9hcGlzL2FjY291bnQnXHJcbmltcG9ydCB7IGpmIH0gZnJvbSAnLi4vY29uZmlnJ1xyXG5pbXBvcnQgUiBmcm9tICcuLi9saWJzL3JhbWRhJ1xyXG5pbXBvcnQgKiBhcyBsb2cgZnJvbSAnLi4vdXRpbHMvbG9nJ1xyXG5pbXBvcnQgTklNIGZyb20gJy4uL3V0aWxzL25pbSdcclxuaW1wb3J0IHsgc2V0VXNlciB9IGZyb20gJy4uL2FjdGlvbnMvY29tbW9uJ1xyXG5pbXBvcnQge1xyXG4gICAgd3ggYXMgY29uZmlnXHJcbiAgfSBmcm9tICcuLi9jb25maWcnXHJcbkBjb25uZWN0KHtcclxuICAgIHVzZXI6IHN0YXRlID0+IHN0YXRlLmNvbW1vbi51c2VyLFxyXG4gICAgbmltOiBzdGF0ZSA9PiBzdGF0ZS5jb21tb24ubmltLFxyXG4gICAgZnJpZW5kczogc3RhdGUgPT4gc3RhdGUuZnJpZW5kcy5mcmllbmRzLFxyXG4gICAgbXNnczogc3RhdGUgPT4gc3RhdGUuY2hhdC5tc2dzXHJcbiAgfSwge1xyXG4gICAgc2V0VXNlclxyXG4gIH0pXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJvYXJkIGV4dGVuZHMgd2VweS5wYWdlIHtcclxuICBjb25maWcgPSB7XHJcbiAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn5ZWG5Y+L5ZyIJ1xyXG4gIH1cclxuICBkYXRhID0ge1xyXG4gICAgdGl0bGU6ICcnLFxyXG4gICAgaW1nczogW10sXHJcbiAgICBjb250ZW50OiAnJyxcclxuICAgIGNyZWF0ZWRCeTogJycsXHJcbiAgICBjcmVhdGVkQXQ6ICcnLFxyXG4gICAgcmVhZDogJycsXHJcbiAgICBhdXRob3JfaWQ6ICcnLFxyXG4gICAgaXNTdGFyOiBudWxsLFxyXG4gIH1cclxuICBtZXRob2RzID0ge1xyXG4gICAgaGFuZGxlTmFtZSAoZSkge1xyXG4gICAgICB3ZXB5Lm5hdmlnYXRlVG8oe1xyXG4gICAgICAgIHVybDogYHVzZXJJbmZvP2lkPSR7dGhpcy5hdXRob3JfaWR9YFxyXG4gICAgICB9KVxyXG4gICAgfSxcclxuICAgIGFzeW5jIGhhbmRlQ29sbGVjdGlvbiAoKSB7XHJcbiAgICAgIGxldCB7aWR9ID0gdGhpcy51c2VyLnVzZXJEYXRhXHJcbiAgICAgIGxldCBib2FyZElkID0gdGhpcy5ib2FyZElkXHJcbiAgICAgIGF3YWl0IGFjY291bnRBcGkuYXJ0aWNsZVN0YXIoaWQsYm9hcmRJZClcclxuICAgICAgdGhpcy5pc1N0YXIgPSB0cnVlLFxyXG4gICAgICB3eC5zaG93VG9hc3Qoe1xyXG4gICAgICAgIHRpdGxlOiAn5bey5pS26JePJyxcclxuICAgICAgICBpY29uOiAnc3VjY2VzcycsXHJcbiAgICAgICAgZHVyYXRpb246IDIwMDBcclxuICAgICAgfSlcclxuICAgICAgdGhpcy4kYXBwbHkoKVxyXG4gICAgfSxcclxuICAgIGFzeW5jIERlbENvbGxlY3Rpb24gKCkge1xyXG4gICAgICBsZXQge2lkfSA9IHRoaXMudXNlci51c2VyRGF0YVxyXG4gICAgICBsZXQgYm9hcmRJZCA9IHRoaXMuYm9hcmRJZFxyXG4gICAgICBhd2FpdCBhY2NvdW50QXBpLmFydGljbGVVbnN0YXIoaWQsYm9hcmRJZClcclxuICAgICAgd3guc2hvd1RvYXN0KHtcclxuICAgICAgICB0aXRsZTogJ+W3suWPlua2iCcsXHJcbiAgICAgICAgaWNvbjogJ3N1Y2Nlc3MnLFxyXG4gICAgICAgIGR1cmF0aW9uOiAyMDAwXHJcbiAgICAgIH0pXHJcbiAgICAgIHRoaXMuaXNTdGFyID0gZmFsc2VcclxuICAgICAgdGhpcy4kYXBwbHkoKVxyXG4gICAgfSxcclxuICAgIGltZ1ByZXZpZXcgKGl0ZW1zLCBpbmRleCkge1xyXG4gICAgICBjb25zdCBpbWdBcnIgPSBpdGVtc1xyXG4gICAgICBjb25zdCBudW0gPSBpbmRleFxyXG4gICAgICB3ZXB5LnByZXZpZXdJbWFnZSh7XHJcbiAgICAgICAgY3VycmVudDogaW1nQXJyW251bV0sXHJcbiAgICAgICAgdXJsczogaW1nQXJyLFxyXG4gICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChyZXMpIHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKHJlcylcclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcbiAgICB9LFxyXG4gIH1cclxuXHJcbiAgb25TaGFyZUFwcE1lc3NhZ2UgPSBmdW5jdGlvbiAocmVzKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICB0aXRsZTogdGhpcy5jYXRlZ29yeVswXVxyXG4gICAgfVxyXG4gIH1cclxuICBhc3luYyBvbkxvYWQob3B0aW9uKSB7XHJcbiAgICBjb25zdCB7IHNldFVzZXIgfSA9IHRoaXMubWV0aG9kc1xyXG4gICAgICAvLyBjb25zdCBwdXNoTXNnID0gdGhpcy5tZXRob2RzLnB1c2hNc2cuYmluZCh0aGlzKVxyXG4gICAgICB3ZXB5LnNob3dMb2FkaW5nKClcclxuICAgICAgY29uc3QgeyBjb2RlIH0gPSBhd2FpdCB3ZXB5LmxvZ2luKClcclxuICAgICAgLy8gLy8gY29uc3QgeyBkYXRhIH0gPSBhd2FpdCB3ZXB5LnJlcXVlc3Qoe1xyXG4gICAgICAvLyAvLyAgIHVybDogYGh0dHBzOi8vYXBpLndlaXhpbi5xcS5jb20vc25zL2pzY29kZTJzZXNzaW9uP2FwcGlkPSR7Y29uZmlnLmFwcElkfSZzZWNyZXQ9JHtjb25maWcuYXBwU2VjcmV0ZX0manNfY29kZT0ke2NvZGV9JmdyYW50X3R5cGU9YXV0aG9yaXphdGlvbl9jb2RlYFxyXG4gICAgICAvLyAvLyB9KVxyXG4gICAgICBjb25zdCBkYXRhID0gYXdhaXQgYWNjb3VudEFwaS5nZXRTZXNzaW9uKGNvZGUsY29uZmlnLmFwcElkLGNvbmZpZy5hcHBTZWNyZXRlKVxyXG4gICAgICBjb25zdCB7IG9wZW5pZCB9ID0gZGF0YSBcclxuXHJcbiAgICAgIGNvbnN0IHsgdXNlckluZm8gfSA9IGF3YWl0IHdlcHkuZ2V0VXNlckluZm8oKVxyXG5cclxuICAgICAgY29uc3QgcGFzc3dvcmQgPSBSLnRha2VMYXN0KDUpKG9wZW5pZClcclxuXHJcbiAgICAgIGNvbnN0IHVzZXIgPSB7XHJcbiAgICAgICAgLi4udXNlckluZm8sXHJcbiAgICAgICAgYWNjaWQ6IG9wZW5pZC50b0xvd2VyQ2FzZSgpXHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHNldFVzZXIodXNlcilcclxuICAgICAgLy8g5aaC5p6c55So5oi35bCa5pyq5ZyoIOe9keaYk+S6keazqOWGjCDliJnlhYjms6jlhoxcclxuICAgICAgdHJ5IHtcclxuICAgICAgICBjb25zdCB0b2tlbiA9IGF3YWl0IE5JTS5sb2dpbihvcGVuaWQpXHJcbiAgICAgICAgY29uc3QgdXNlcklkID0gYXdhaXQgYWNjb3VudEFwaS5nZXRUb2tlbihvcGVuaWQsIHBhc3N3b3JkLnRvTG93ZXJDYXNlKCkpXHJcbiAgICAgICAgY29uc3Qge1Rva2VufSA9IHVzZXJJZFxyXG5cclxuICAgICAgICBpZiAoIVRva2VuKSB7XHJcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ3VzZXIgbm90IGV4aXN0JylcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHNldFVzZXIoe1xyXG4gICAgICAgICAgLi4udGhpcy51c2VyLFxyXG4gICAgICAgICAgamZUb2tlbjogVG9rZW4sXHJcbiAgICAgICAgICBuaW1Ub2tlbjogdG9rZW4sXHJcbiAgICAgICAgICB1c2VyRGF0YTogdXNlcklkXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgLy8g6I635Y+W5paH56ug5L+h5oGvXHJcbiAgICAgICAgY29uc3QgeyBpZCB9ID0gb3B0aW9uXHJcbiAgICAgICAgY29uc3QgeyBqZlRva2VuIH0gPSB0aGlzLnVzZXJcclxuICAgICAgICBhd2FpdCBhcGkuYWRkUmVhZE51bShpZCwgamZUb2tlbilcclxuICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBhcGkuYm9hcmREZXRhaWwoaWQsIGpmVG9rZW4pXHJcbiAgICAgICAgdGhpcy50aXRsZSA9IHJlcy50aXRsZVxyXG4gICAgICAgIHRoaXMuY29udGVudCA9IHJlcy50ZXh0XHJcbiAgICAgICAgdGhpcy5ib2FyZElkID0gcmVzLmlkXHJcbiAgICAgICAgdGhpcy5jcmVhdGVkQnkgPSByZXMuYXV0aG9yXHJcbiAgICAgICAgdGhpcy5jcmVhdGVkQXQgPSByZXMuZGF0ZWxpbmVcclxuICAgICAgICB0aGlzLnJlYWQgPSByZXMuY2xpY2tfbnVtXHJcbiAgICAgICAgdGhpcy5hdXRob3JfaWQgPSByZXMuYXV0aG9yX2lkXHJcbiAgICAgICAgdGhpcy5jYXRlZ29yeSA9IHJlcy5jYXRlZ29yeVxyXG4gICAgICAgIHRoaXMuaXNTdGFyID0gcmVzLmlzX3N0YXJlZFxyXG4gICAgICAgIHRoaXMuaW1ncyA9IHJlcy5waWNfdXJscy5tYXAodXJsID0+IGAke2pmLmJhc2VTZXJ2ZXJ9JHt1cmx9YClcclxuICAgICAgICB0aGlzLiRhcHBseSgpXHJcbiAgICAgICAgd2VweS5oaWRlTG9hZGluZygpXHJcbiAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICBsb2cuZXJyb3Ioe1xyXG4gICAgICAgICAgcGFnZTogJ2NoYXRyb29tcycsXHJcbiAgICAgICAgICBvcHI6ICdpbml0JyxcclxuICAgICAgICAgIGluZm86IGVcclxuICAgICAgICB9KVxyXG4gICAgICAgIHdlcHkubmF2aWdhdGVUbyh7XHJcbiAgICAgICAgICB1cmw6ICcvcGFnZXMvcmVnaXN0ZXInXHJcbiAgICAgICAgfSlcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICB9XHJcblxyXG4gICJdfQ==