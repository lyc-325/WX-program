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
        //replace(/_thumbnail\./,'.')
        // const nImgArr = items.map((item) => item.replace(/_thumbnail\./,'.'))
        // console.log(items)
        // console.log(nImgArr,2)
        _wepy2.default.previewImage({
          urls: items,
          current: items[index],
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
                  return ('' + _config.jf.baseServer + url).replace(/\.[^\.]+$/, '_thumbnail.jpg');
                });
                this.$apply();
                _wepy2.default.hideLoading();
                _context3.next = 53;
                break;

              case 49:
                _context3.prev = 49;
                _context3.t0 = _context3['catch'](17);

                log.error({
                  page: 'chatroom',
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJvYXJkLmpzIl0sIm5hbWVzIjpbImFwaSIsImFjY291bnRBcGkiLCJsb2ciLCJCb2FyZCIsInVzZXIiLCJzdGF0ZSIsImNvbW1vbiIsIm5pbSIsImZyaWVuZHMiLCJtc2dzIiwiY2hhdCIsInNldFVzZXIiLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiZGF0YSIsInRpdGxlIiwiaW1ncyIsImNvbnRlbnQiLCJjcmVhdGVkQnkiLCJjcmVhdGVkQXQiLCJyZWFkIiwiYXV0aG9yX2lkIiwiaXNTdGFyIiwibWV0aG9kcyIsImhhbmRsZU5hbWUiLCJlIiwibmF2aWdhdGVUbyIsInVybCIsImhhbmRlQ29sbGVjdGlvbiIsImlkIiwidXNlckRhdGEiLCJib2FyZElkIiwiYXJ0aWNsZVN0YXIiLCJ3eCIsInNob3dUb2FzdCIsImljb24iLCJkdXJhdGlvbiIsIiRhcHBseSIsIkRlbENvbGxlY3Rpb24iLCJhcnRpY2xlVW5zdGFyIiwiaW1nUHJldmlldyIsIml0ZW1zIiwiaW5kZXgiLCJwcmV2aWV3SW1hZ2UiLCJ1cmxzIiwiY3VycmVudCIsInN1Y2Nlc3MiLCJyZXMiLCJjb25zb2xlIiwib25TaGFyZUFwcE1lc3NhZ2UiLCJjYXRlZ29yeSIsIm9wdGlvbiIsInNob3dMb2FkaW5nIiwibG9naW4iLCJjb2RlIiwiZ2V0U2Vzc2lvbiIsImFwcElkIiwiYXBwU2VjcmV0ZSIsIm9wZW5pZCIsImdldFVzZXJJbmZvIiwidXNlckluZm8iLCJwYXNzd29yZCIsInRha2VMYXN0IiwiYWNjaWQiLCJ0b0xvd2VyQ2FzZSIsInRva2VuIiwiZ2V0VG9rZW4iLCJ1c2VySWQiLCJUb2tlbiIsIkVycm9yIiwiamZUb2tlbiIsIm5pbVRva2VuIiwiYWRkUmVhZE51bSIsImJvYXJkRGV0YWlsIiwidGV4dCIsImF1dGhvciIsImRhdGVsaW5lIiwiY2xpY2tfbnVtIiwiaXNfc3RhcmVkIiwicGljX3VybHMiLCJtYXAiLCJiYXNlU2VydmVyIiwicmVwbGFjZSIsImhpZGVMb2Fk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QUFMLEdBQWFnQyxJQUFJaEMsS0FBakI7QUFDQSxxQkFBS0UsT0FBTCxHQUFlOEIsSUFBSTJCLElBQW5CO0FBQ0EscUJBQUszQyxPQUFMLEdBQWVnQixJQUFJbEIsRUFBbkI7QUFDQSxxQkFBS1gsU0FBTCxHQUFpQjZCLElBQUk0QixNQUFyQjtBQUNBLHFCQUFLeEQsU0FBTCxHQUFpQjRCLElBQUk2QixRQUFyQjtBQUNBLHFCQUFLeEQsSUFBTCxHQUFZMkIsSUFBSThCLFNBQWhCO0FBQ0EscUJBQUt4RCxTQUFMLEdBQWlCMEIsSUFBSTFCLFNBQXJCO0FBQ0EscUJBQUs2QixRQUFMLEdBQWdCSCxJQUFJRyxRQUFwQjtBQUNBLHFCQUFLNUIsTUFBTCxHQUFjeUIsSUFBSStCLFNBQWxCO0FBQ0EscUJBQUs5RCxJQUFMLEdBQVkrQixJQUFJZ0MsUUFBSixDQUFhQyxHQUFiLENBQWlCO0FBQUEseUJBQU8sTUFBRyxXQUFHQyxVQUFOLEdBQW1CdEQsR0FBbkIsRUFBeUJ1RCxPQUF6QixDQUFpQyxXQUFqQyxFQUE2QyxnQkFBN0MsQ0FBUDtBQUFBLGlCQUFqQixDQUFaO0FBQ0EscUJBQUs3QyxNQUFMO0FBQ0EsK0JBQUs4QyxXQUFMOzs7Ozs7OztBQUVBakYsb0JBQUlrRixLQUFKLENBQVU7QUFDUkMsd0JBQU0sVUFERTtBQUVSQyx1QkFBSyxNQUZHO0FBR1JDO0FBSFEsaUJBQVY7QUFLQSwrQkFBSzdELFVBQUwsQ0FBZ0I7QUFDZEMsdUJBQUs7QUFEUyxpQkFBaEI7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQXRIMkIsZUFBSzBELEk7a0JBQW5CbEYsSyIsImZpbGUiOiJib2FyZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5pbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xyXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAnd2VweS1yZWR1eCdcclxuaW1wb3J0ICogYXMgYXBpIGZyb20gJy4uL2FwaXMvYm9hcmQnXHJcbmltcG9ydCAqIGFzIGFjY291bnRBcGkgZnJvbSAnLi4vYXBpcy9hY2NvdW50J1xyXG5pbXBvcnQgeyBqZiB9IGZyb20gJy4uL2NvbmZpZydcclxuaW1wb3J0IFIgZnJvbSAnLi4vbGlicy9yYW1kYSdcclxuaW1wb3J0ICogYXMgbG9nIGZyb20gJy4uL3V0aWxzL2xvZydcclxuaW1wb3J0IE5JTSBmcm9tICcuLi91dGlscy9uaW0nXHJcbmltcG9ydCB7IHNldFVzZXIgfSBmcm9tICcuLi9hY3Rpb25zL2NvbW1vbidcclxuaW1wb3J0IHtcclxuICB3eCBhcyBjb25maWdcclxufSBmcm9tICcuLi9jb25maWcnXHJcbkBjb25uZWN0KHtcclxuICB1c2VyOiBzdGF0ZSA9PiBzdGF0ZS5jb21tb24udXNlcixcclxuICBuaW06IHN0YXRlID0+IHN0YXRlLmNvbW1vbi5uaW0sXHJcbiAgZnJpZW5kczogc3RhdGUgPT4gc3RhdGUuZnJpZW5kcy5mcmllbmRzLFxyXG4gIG1zZ3M6IHN0YXRlID0+IHN0YXRlLmNoYXQubXNnc1xyXG59LCB7XHJcbiAgc2V0VXNlclxyXG59KVxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCb2FyZCBleHRlbmRzIHdlcHkucGFnZSB7XHJcbiAgY29uZmlnID0ge1xyXG4gICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+WVhuWPi+WciCdcclxuICB9XHJcbiAgZGF0YSA9IHtcclxuICAgIHRpdGxlOiAnJyxcclxuICAgIGltZ3M6IFtdLFxyXG4gICAgY29udGVudDogJycsXHJcbiAgICBjcmVhdGVkQnk6ICcnLFxyXG4gICAgY3JlYXRlZEF0OiAnJyxcclxuICAgIHJlYWQ6ICcnLFxyXG4gICAgYXV0aG9yX2lkOiAnJyxcclxuICAgIGlzU3RhcjogbnVsbCxcclxuICB9XHJcbiAgbWV0aG9kcyA9IHtcclxuICAgIGhhbmRsZU5hbWUgKGUpIHtcclxuICAgICAgd2VweS5uYXZpZ2F0ZVRvKHtcclxuICAgICAgICB1cmw6IGB1c2VySW5mbz9pZD0ke3RoaXMuYXV0aG9yX2lkfWBcclxuICAgICAgfSlcclxuICAgIH0sXHJcbiAgICBhc3luYyBoYW5kZUNvbGxlY3Rpb24gKCkge1xyXG4gICAgICBsZXQge2lkfSA9IHRoaXMudXNlci51c2VyRGF0YVxyXG4gICAgICBsZXQgYm9hcmRJZCA9IHRoaXMuYm9hcmRJZFxyXG4gICAgICBhd2FpdCBhY2NvdW50QXBpLmFydGljbGVTdGFyKGlkLGJvYXJkSWQpXHJcbiAgICAgIHRoaXMuaXNTdGFyID0gdHJ1ZSxcclxuICAgICAgd3guc2hvd1RvYXN0KHtcclxuICAgICAgICB0aXRsZTogJ+W3suaUtuiXjycsXHJcbiAgICAgICAgaWNvbjogJ3N1Y2Nlc3MnLFxyXG4gICAgICAgIGR1cmF0aW9uOiAyMDAwXHJcbiAgICAgIH0pXHJcbiAgICAgIHRoaXMuJGFwcGx5KClcclxuICAgIH0sXHJcbiAgICBhc3luYyBEZWxDb2xsZWN0aW9uICgpIHtcclxuICAgICAgbGV0IHtpZH0gPSB0aGlzLnVzZXIudXNlckRhdGFcclxuICAgICAgbGV0IGJvYXJkSWQgPSB0aGlzLmJvYXJkSWRcclxuICAgICAgYXdhaXQgYWNjb3VudEFwaS5hcnRpY2xlVW5zdGFyKGlkLGJvYXJkSWQpXHJcbiAgICAgIHd4LnNob3dUb2FzdCh7XHJcbiAgICAgICAgdGl0bGU6ICflt7Llj5bmtognLFxyXG4gICAgICAgIGljb246ICdzdWNjZXNzJyxcclxuICAgICAgICBkdXJhdGlvbjogMjAwMFxyXG4gICAgICB9KVxyXG4gICAgICB0aGlzLmlzU3RhciA9IGZhbHNlXHJcbiAgICAgIHRoaXMuJGFwcGx5KClcclxuICAgIH0sXHJcbiAgICBpbWdQcmV2aWV3IChpdGVtcywgaW5kZXgpIHtcclxuICAgICAgLy9yZXBsYWNlKC9fdGh1bWJuYWlsXFwuLywnLicpXHJcbiAgICAgIC8vIGNvbnN0IG5JbWdBcnIgPSBpdGVtcy5tYXAoKGl0ZW0pID0+IGl0ZW0ucmVwbGFjZSgvX3RodW1ibmFpbFxcLi8sJy4nKSlcclxuICAgICAgLy8gY29uc29sZS5sb2coaXRlbXMpXHJcbiAgICAgIC8vIGNvbnNvbGUubG9nKG5JbWdBcnIsMilcclxuICAgICAgd2VweS5wcmV2aWV3SW1hZ2Uoe1xyXG4gICAgICAgIHVybHM6IGl0ZW1zLFxyXG4gICAgICAgIGN1cnJlbnQ6IGl0ZW1zW2luZGV4XSxcclxuICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAocmVzKSB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhyZXMpXHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG4gICAgfSxcclxuICB9XHJcblxyXG4gIG9uU2hhcmVBcHBNZXNzYWdlID0gZnVuY3Rpb24gKHJlcykge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgdGl0bGU6IHRoaXMuY2F0ZWdvcnlbMF1cclxuICAgIH1cclxuICB9XHJcbiAgYXN5bmMgb25Mb2FkKG9wdGlvbikge1xyXG4gICAgY29uc3QgeyBzZXRVc2VyIH0gPSB0aGlzLm1ldGhvZHNcclxuICAgIHdlcHkuc2hvd0xvYWRpbmcoKVxyXG4gICAgY29uc3QgeyBjb2RlIH0gPSBhd2FpdCB3ZXB5LmxvZ2luKClcclxuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBhY2NvdW50QXBpLmdldFNlc3Npb24oY29kZSxjb25maWcuYXBwSWQsY29uZmlnLmFwcFNlY3JldGUpXHJcbiAgICBjb25zdCB7IG9wZW5pZCB9ID0gZGF0YSBcclxuICAgIGNvbnN0IHsgdXNlckluZm8gfSA9IGF3YWl0IHdlcHkuZ2V0VXNlckluZm8oKVxyXG4gICAgY29uc3QgcGFzc3dvcmQgPSBSLnRha2VMYXN0KDUpKG9wZW5pZClcclxuICAgIGNvbnN0IHVzZXIgPSB7XHJcbiAgICAgIC4uLnVzZXJJbmZvLFxyXG4gICAgICBhY2NpZDogb3BlbmlkLnRvTG93ZXJDYXNlKClcclxuICAgIH1cclxuXHJcbiAgICBzZXRVc2VyKHVzZXIpXHJcbiAgICAgIC8vIOWmguaenOeUqOaIt+WwmuacquWcqCDnvZHmmJPkupHms6jlhowg5YiZ5YWI5rOo5YaMXHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgdG9rZW4gPSBhd2FpdCBOSU0ubG9naW4ob3BlbmlkKVxyXG4gICAgICAgIGNvbnN0IHVzZXJJZCA9IGF3YWl0IGFjY291bnRBcGkuZ2V0VG9rZW4ob3BlbmlkLCBwYXNzd29yZC50b0xvd2VyQ2FzZSgpKVxyXG4gICAgICAgIGNvbnN0IHtUb2tlbn0gPSB1c2VySWRcclxuXHJcbiAgICAgICAgaWYgKCFUb2tlbikge1xyXG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCd1c2VyIG5vdCBleGlzdCcpXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBzZXRVc2VyKHtcclxuICAgICAgICAgIC4uLnRoaXMudXNlcixcclxuICAgICAgICAgIGpmVG9rZW46IFRva2VuLFxyXG4gICAgICAgICAgbmltVG9rZW46IHRva2VuLFxyXG4gICAgICAgICAgdXNlckRhdGE6IHVzZXJJZFxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIC8vIOiOt+WPluaWh+eroOS/oeaBr1xyXG4gICAgICAgIGNvbnN0IHsgaWQgfSA9IG9wdGlvblxyXG4gICAgICAgIGNvbnN0IHsgamZUb2tlbiB9ID0gdGhpcy51c2VyXHJcbiAgICAgICAgYXdhaXQgYXBpLmFkZFJlYWROdW0oaWQsIGpmVG9rZW4pXHJcbiAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgYXBpLmJvYXJkRGV0YWlsKGlkLCBqZlRva2VuKVxyXG4gICAgICAgIHRoaXMudGl0bGUgPSByZXMudGl0bGVcclxuICAgICAgICB0aGlzLmNvbnRlbnQgPSByZXMudGV4dFxyXG4gICAgICAgIHRoaXMuYm9hcmRJZCA9IHJlcy5pZFxyXG4gICAgICAgIHRoaXMuY3JlYXRlZEJ5ID0gcmVzLmF1dGhvclxyXG4gICAgICAgIHRoaXMuY3JlYXRlZEF0ID0gcmVzLmRhdGVsaW5lXHJcbiAgICAgICAgdGhpcy5yZWFkID0gcmVzLmNsaWNrX251bVxyXG4gICAgICAgIHRoaXMuYXV0aG9yX2lkID0gcmVzLmF1dGhvcl9pZFxyXG4gICAgICAgIHRoaXMuY2F0ZWdvcnkgPSByZXMuY2F0ZWdvcnlcclxuICAgICAgICB0aGlzLmlzU3RhciA9IHJlcy5pc19zdGFyZWRcclxuICAgICAgICB0aGlzLmltZ3MgPSByZXMucGljX3VybHMubWFwKHVybCA9PiBgJHtqZi5iYXNlU2VydmVyfSR7dXJsfWAucmVwbGFjZSgvXFwuW15cXC5dKyQvLCdfdGh1bWJuYWlsLmpwZycpKVxyXG4gICAgICAgIHRoaXMuJGFwcGx5KClcclxuICAgICAgICB3ZXB5LmhpZGVMb2FkaW5nKClcclxuICAgICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgIGxvZy5lcnJvcih7XHJcbiAgICAgICAgICBwYWdlOiAnY2hhdHJvb20nLFxyXG4gICAgICAgICAgb3ByOiAnaW5pdCcsXHJcbiAgICAgICAgICBpbmZvOiBlXHJcbiAgICAgICAgfSlcclxuICAgICAgICB3ZXB5Lm5hdmlnYXRlVG8oe1xyXG4gICAgICAgICAgdXJsOiAnL3BhZ2VzL3JlZ2lzdGVyJ1xyXG4gICAgICAgIH0pXHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgfVxyXG5cclxuICAiXX0=