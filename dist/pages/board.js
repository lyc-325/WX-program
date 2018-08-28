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
        var nImgArr = items.map(function (item) {
          return item.replace(/_thumbnail\./, '.');
        });
        // console.log(items)
        // console.log(nImgArr,2)
        _wepy2.default.previewImage({
          urls: nImgArr,
          current: nImgArr[index],
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJvYXJkLmpzIl0sIm5hbWVzIjpbImFwaSIsImFjY291bnRBcGkiLCJsb2ciLCJCb2FyZCIsInVzZXIiLCJzdGF0ZSIsImNvbW1vbiIsIm5pbSIsImZyaWVuZHMiLCJtc2dzIiwiY2hhdCIsInNldFVzZXIiLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiZGF0YSIsInRpdGxlIiwiaW1ncyIsImNvbnRlbnQiLCJjcmVhdGVkQnkiLCJjcmVhdGVkQXQiLCJyZWFkIiwiYXV0aG9yX2lkIiwiaXNTdGFyIiwibWV0aG9kcyIsImhhbmRsZU5hbWUiLCJlIiwibmF2aWdhdGVUbyIsInVybCIsImhhbmRlQ29sbGVjdGlvbiIsImlkIiwidXNlckRhdGEiLCJib2FyZElkIiwiYXJ0aWNsZVN0YXIiLCJ3eCIsInNob3dUb2FzdCIsImljb24iLCJkdXJhdGlvbiIsIiRhcHBseSIsIkRlbENvbGxlY3Rpb24iLCJhcnRpY2xlVW5zdGFyIiwiaW1nUHJldmlldyIsIml0ZW1zIiwiaW5kZXgiLCJuSW1nQXJyIiwibWFwIiwiaXRlbSIsInJlcGxhY2UiLCJwcmV2aWV3SW1hZ2UiLCJ1cmxzIiwiY3VycmVudCIsInN1Y2Nlc3MiLCJyZXMiLCJjb25zb2xlIiwib25TaGFyZUFwcE1lc3NhZ2UiLCJjYXRlZ29yeSIsIm9wdGlvbiIsInNob3dMb2FkaW5nIiwibG9naW4iLCJjb2RlIiwiZ2V0U2Vzc2lvbiIsImFwcElkIiwiYXBwU2VjcmV0ZSIsIm9wZW5pZCIsImdldFVzZXJJbmZvIiwidXNlckluZm8iLCJwYXNzd29yZCIsInRha2VMYXN0IiwiYWNjaWQiLCJ0b0xvd2VyQ2FzZSIsInRva2VuIiwiZ2V0VG9rZW4iLCJ1c2VySWQiLCJUb2tlbiIsIkVycm9yIiwiamZUb2tlbiIsIm5pbVRva2VuIiwiYWRkUmVhZE51bSIsImJvYXJkRGV0YWlsIiwidGV4dCIsImF1dGhvciIsImRhdGVsaW5lIiwiY2xpY2tfbnVtIiwiaXNfc3RhcmVkIiwicGljX3VybHMiLCJiYXNlU2VydmVyIiwiaGlkZUxvYWRpbmciLCJlcnJvciIsInBhZ2UiLCJvcHIiLCJpbmZvIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBOzs7O0FBQ0E7O0FBQ0E7O0lBQVlBLEc7O0FBQ1o7O0lBQVlDLFU7O0FBQ1o7O0FBQ0E7Ozs7QUFDQTs7SUFBWUMsRzs7QUFDWjs7OztBQUNBOzs7Ozs7SUFZcUJDLEssV0FScEIsd0JBQVE7QUFDUEMsUUFBTTtBQUFBLFdBQVNDLE1BQU1DLE1BQU4sQ0FBYUYsSUFBdEI7QUFBQSxHQURDO0FBRVBHLE9BQUs7QUFBQSxXQUFTRixNQUFNQyxNQUFOLENBQWFDLEdBQXRCO0FBQUEsR0FGRTtBQUdQQyxXQUFTO0FBQUEsV0FBU0gsTUFBTUcsT0FBTixDQUFjQSxPQUF2QjtBQUFBLEdBSEY7QUFJUEMsUUFBTTtBQUFBLFdBQVNKLE1BQU1LLElBQU4sQ0FBV0QsSUFBcEI7QUFBQTtBQUpDLENBQVIsRUFLRTtBQUNERTtBQURDLENBTEYsQzs7Ozs7Ozs7Ozs7Ozs7ME1BU0NDLE0sR0FBUztBQUNQQyw4QkFBd0I7QUFEakIsSyxRQUdUQyxJLEdBQU87QUFDTEMsYUFBTyxFQURGO0FBRUxDLFlBQU0sRUFGRDtBQUdMQyxlQUFTLEVBSEo7QUFJTEMsaUJBQVcsRUFKTjtBQUtMQyxpQkFBVyxFQUxOO0FBTUxDLFlBQU0sRUFORDtBQU9MQyxpQkFBVyxFQVBOO0FBUUxDLGNBQVE7QUFSSCxLLFFBVVBDLE8sR0FBVTtBQUNSQyxnQkFEUSxzQkFDSUMsQ0FESixFQUNPO0FBQ2IsdUJBQUtDLFVBQUwsQ0FBZ0I7QUFDZEMsZ0NBQW9CLEtBQUtOO0FBRFgsU0FBaEI7QUFHRCxPQUxPO0FBTUZPLHFCQU5FLDZCQU1pQjtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNsQkMsb0JBRGtCLEdBQ1osT0FBS3pCLElBQUwsQ0FBVTBCLFFBREUsQ0FDbEJELEVBRGtCO0FBRW5CRSx5QkFGbUIsR0FFVCxPQUFLQSxPQUZJO0FBQUE7QUFBQSx5QkFHakI5QixXQUFXK0IsV0FBWCxDQUF1QkgsRUFBdkIsRUFBMEJFLE9BQTFCLENBSGlCOztBQUFBO0FBSXZCLHlCQUFLVCxNQUFMLEdBQWMsSUFBZCxFQUNBVyxHQUFHQyxTQUFILENBQWE7QUFDWG5CLDJCQUFPLEtBREk7QUFFWG9CLDBCQUFNLFNBRks7QUFHWEMsOEJBQVU7QUFIQyxtQkFBYixDQURBO0FBTUEseUJBQUtDLE1BQUw7O0FBVnVCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBV3hCLE9BakJPO0FBa0JGQyxtQkFsQkUsMkJBa0JlO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ2hCVCxvQkFEZ0IsR0FDVixPQUFLekIsSUFBTCxDQUFVMEIsUUFEQSxDQUNoQkQsRUFEZ0I7QUFFakJFLHlCQUZpQixHQUVQLE9BQUtBLE9BRkU7QUFBQTtBQUFBLHlCQUdmOUIsV0FBV3NDLGFBQVgsQ0FBeUJWLEVBQXpCLEVBQTRCRSxPQUE1QixDQUhlOztBQUFBO0FBSXJCRSxxQkFBR0MsU0FBSCxDQUFhO0FBQ1huQiwyQkFBTyxLQURJO0FBRVhvQiwwQkFBTSxTQUZLO0FBR1hDLDhCQUFVO0FBSEMsbUJBQWI7QUFLQSx5QkFBS2QsTUFBTCxHQUFjLEtBQWQ7QUFDQSx5QkFBS2UsTUFBTDs7QUFWcUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFXdEIsT0E3Qk87QUE4QlJHLGdCQTlCUSxzQkE4QklDLEtBOUJKLEVBOEJXQyxLQTlCWCxFQThCa0I7QUFDeEI7QUFDQSxZQUFNQyxVQUFVRixNQUFNRyxHQUFOLENBQVUsVUFBQ0MsSUFBRDtBQUFBLGlCQUFVQSxLQUFLQyxPQUFMLENBQWEsY0FBYixFQUE0QixHQUE1QixDQUFWO0FBQUEsU0FBVixDQUFoQjtBQUNBO0FBQ0E7QUFDQSx1QkFBS0MsWUFBTCxDQUFrQjtBQUNoQkMsZ0JBQU1MLE9BRFU7QUFFaEJNLG1CQUFTTixRQUFRRCxLQUFSLENBRk87QUFHaEJRLG1CQUFTLGlCQUFVQyxHQUFWLEVBQWU7QUFDdEJDLG9CQUFRbEQsR0FBUixDQUFZaUQsR0FBWjtBQUNEO0FBTGUsU0FBbEI7QUFPRDtBQTFDTyxLLFFBNkNWRSxpQixHQUFvQixVQUFVRixHQUFWLEVBQWU7QUFDakMsYUFBTztBQUNMcEMsZUFBTyxLQUFLdUMsUUFBTCxDQUFjLENBQWQ7QUFERixPQUFQO0FBR0QsSzs7Ozs7OzZHQUNZQyxNOzs7Ozs7O0FBQ0g1Qyx1QixHQUFZLEtBQUtZLE8sQ0FBakJaLE87O0FBQ1IsK0JBQUs2QyxXQUFMOzt1QkFDdUIsZUFBS0MsS0FBTCxFOzs7O0FBQWZDLG9CLFNBQUFBLEk7O3VCQUNXekQsV0FBVzBELFVBQVgsQ0FBc0JELElBQXRCLEVBQTJCLFdBQU9FLEtBQWxDLEVBQXdDLFdBQU9DLFVBQS9DLEM7OztBQUFiL0Msb0I7QUFDRWdELHNCLEdBQVdoRCxJLENBQVhnRCxNOzt1QkFDbUIsZUFBS0MsV0FBTCxFOzs7O0FBQW5CQyx3QixTQUFBQSxRO0FBQ0ZDLHdCLEdBQVcsZ0JBQUVDLFFBQUYsQ0FBVyxDQUFYLEVBQWNKLE1BQWQsQztBQUNYMUQsb0IsOEJBQ0Q0RCxRO0FBQ0hHLHlCQUFPTCxPQUFPTSxXQUFQOzs7O0FBR1R6RCx3QkFBUVAsSUFBUjtBQUNFOzs7dUJBRXNCLGNBQUlxRCxLQUFKLENBQVVLLE1BQVYsQzs7O0FBQWRPLHFCOzt1QkFDZXBFLFdBQVdxRSxRQUFYLENBQW9CUixNQUFwQixFQUE0QkcsU0FBU0csV0FBVCxFQUE1QixDOzs7QUFBZkcsc0I7QUFDQ0MscUIsR0FBU0QsTSxDQUFUQyxLOztvQkFFRkEsSzs7Ozs7c0JBQ0csSUFBSUMsS0FBSixDQUFVLGdCQUFWLEM7Ozs7QUFHUjlELG1EQUNLLEtBQUtQLElBRFY7QUFFRXNFLDJCQUFTRixLQUZYO0FBR0VHLDRCQUFVTixLQUhaO0FBSUV2Qyw0QkFBVXlDO0FBSlo7O0FBT0E7QUFDUTFDLGtCLEdBQU8wQixNLENBQVAxQixFO0FBQ0E2Qyx1QixHQUFZLEtBQUt0RSxJLENBQWpCc0UsTzs7dUJBQ0YxRSxJQUFJNEUsVUFBSixDQUFlL0MsRUFBZixFQUFtQjZDLE9BQW5CLEM7Ozs7dUJBQ1kxRSxJQUFJNkUsV0FBSixDQUFnQmhELEVBQWhCLEVBQW9CNkMsT0FBcEIsQzs7O0FBQVp2QixtQjs7QUFDTixxQkFBS3BDLEtBQUwsR0FBYW9DLElBQUlwQyxLQUFqQjtBQUNBLHFCQUFLRSxPQUFMLEdBQWVrQyxJQUFJMkIsSUFBbkI7QUFDQSxxQkFBSy9DLE9BQUwsR0FBZW9CLElBQUl0QixFQUFuQjtBQUNBLHFCQUFLWCxTQUFMLEdBQWlCaUMsSUFBSTRCLE1BQXJCO0FBQ0EscUJBQUs1RCxTQUFMLEdBQWlCZ0MsSUFBSTZCLFFBQXJCO0FBQ0EscUJBQUs1RCxJQUFMLEdBQVkrQixJQUFJOEIsU0FBaEI7QUFDQSxxQkFBSzVELFNBQUwsR0FBaUI4QixJQUFJOUIsU0FBckI7QUFDQSxxQkFBS2lDLFFBQUwsR0FBZ0JILElBQUlHLFFBQXBCO0FBQ0EscUJBQUtoQyxNQUFMLEdBQWM2QixJQUFJK0IsU0FBbEI7QUFDQSxxQkFBS2xFLElBQUwsR0FBWW1DLElBQUlnQyxRQUFKLENBQWF2QyxHQUFiLENBQWlCO0FBQUEseUJBQU8sTUFBRyxXQUFHd0MsVUFBTixHQUFtQnpELEdBQW5CLEVBQXlCbUIsT0FBekIsQ0FBaUMsV0FBakMsRUFBNkMsZ0JBQTdDLENBQVA7QUFBQSxpQkFBakIsQ0FBWjtBQUNBLHFCQUFLVCxNQUFMO0FBQ0EsK0JBQUtnRCxXQUFMOzs7Ozs7OztBQUVBbkYsb0JBQUlvRixLQUFKLENBQVU7QUFDUkMsd0JBQU0sVUFERTtBQUVSQyx1QkFBSyxNQUZHO0FBR1JDO0FBSFEsaUJBQVY7QUFLQSwrQkFBSy9ELFVBQUwsQ0FBZ0I7QUFDZEMsdUJBQUs7QUFEUyxpQkFBaEI7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQXRIMkIsZUFBSzRELEk7a0JBQW5CcEYsSyIsImZpbGUiOiJib2FyZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5pbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xyXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAnd2VweS1yZWR1eCdcclxuaW1wb3J0ICogYXMgYXBpIGZyb20gJy4uL2FwaXMvYm9hcmQnXHJcbmltcG9ydCAqIGFzIGFjY291bnRBcGkgZnJvbSAnLi4vYXBpcy9hY2NvdW50J1xyXG5pbXBvcnQgeyBqZiB9IGZyb20gJy4uL2NvbmZpZydcclxuaW1wb3J0IFIgZnJvbSAnLi4vbGlicy9yYW1kYSdcclxuaW1wb3J0ICogYXMgbG9nIGZyb20gJy4uL3V0aWxzL2xvZydcclxuaW1wb3J0IE5JTSBmcm9tICcuLi91dGlscy9uaW0nXHJcbmltcG9ydCB7IHNldFVzZXIgfSBmcm9tICcuLi9hY3Rpb25zL2NvbW1vbidcclxuaW1wb3J0IHtcclxuICB3eCBhcyBjb25maWdcclxufSBmcm9tICcuLi9jb25maWcnXHJcbkBjb25uZWN0KHtcclxuICB1c2VyOiBzdGF0ZSA9PiBzdGF0ZS5jb21tb24udXNlcixcclxuICBuaW06IHN0YXRlID0+IHN0YXRlLmNvbW1vbi5uaW0sXHJcbiAgZnJpZW5kczogc3RhdGUgPT4gc3RhdGUuZnJpZW5kcy5mcmllbmRzLFxyXG4gIG1zZ3M6IHN0YXRlID0+IHN0YXRlLmNoYXQubXNnc1xyXG59LCB7XHJcbiAgc2V0VXNlclxyXG59KVxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCb2FyZCBleHRlbmRzIHdlcHkucGFnZSB7XHJcbiAgY29uZmlnID0ge1xyXG4gICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+WVhuWPi+WciCdcclxuICB9XHJcbiAgZGF0YSA9IHtcclxuICAgIHRpdGxlOiAnJyxcclxuICAgIGltZ3M6IFtdLFxyXG4gICAgY29udGVudDogJycsXHJcbiAgICBjcmVhdGVkQnk6ICcnLFxyXG4gICAgY3JlYXRlZEF0OiAnJyxcclxuICAgIHJlYWQ6ICcnLFxyXG4gICAgYXV0aG9yX2lkOiAnJyxcclxuICAgIGlzU3RhcjogbnVsbCxcclxuICB9XHJcbiAgbWV0aG9kcyA9IHtcclxuICAgIGhhbmRsZU5hbWUgKGUpIHtcclxuICAgICAgd2VweS5uYXZpZ2F0ZVRvKHtcclxuICAgICAgICB1cmw6IGB1c2VySW5mbz9pZD0ke3RoaXMuYXV0aG9yX2lkfWBcclxuICAgICAgfSlcclxuICAgIH0sXHJcbiAgICBhc3luYyBoYW5kZUNvbGxlY3Rpb24gKCkge1xyXG4gICAgICBsZXQge2lkfSA9IHRoaXMudXNlci51c2VyRGF0YVxyXG4gICAgICBsZXQgYm9hcmRJZCA9IHRoaXMuYm9hcmRJZFxyXG4gICAgICBhd2FpdCBhY2NvdW50QXBpLmFydGljbGVTdGFyKGlkLGJvYXJkSWQpXHJcbiAgICAgIHRoaXMuaXNTdGFyID0gdHJ1ZSxcclxuICAgICAgd3guc2hvd1RvYXN0KHtcclxuICAgICAgICB0aXRsZTogJ+W3suaUtuiXjycsXHJcbiAgICAgICAgaWNvbjogJ3N1Y2Nlc3MnLFxyXG4gICAgICAgIGR1cmF0aW9uOiAyMDAwXHJcbiAgICAgIH0pXHJcbiAgICAgIHRoaXMuJGFwcGx5KClcclxuICAgIH0sXHJcbiAgICBhc3luYyBEZWxDb2xsZWN0aW9uICgpIHtcclxuICAgICAgbGV0IHtpZH0gPSB0aGlzLnVzZXIudXNlckRhdGFcclxuICAgICAgbGV0IGJvYXJkSWQgPSB0aGlzLmJvYXJkSWRcclxuICAgICAgYXdhaXQgYWNjb3VudEFwaS5hcnRpY2xlVW5zdGFyKGlkLGJvYXJkSWQpXHJcbiAgICAgIHd4LnNob3dUb2FzdCh7XHJcbiAgICAgICAgdGl0bGU6ICflt7Llj5bmtognLFxyXG4gICAgICAgIGljb246ICdzdWNjZXNzJyxcclxuICAgICAgICBkdXJhdGlvbjogMjAwMFxyXG4gICAgICB9KVxyXG4gICAgICB0aGlzLmlzU3RhciA9IGZhbHNlXHJcbiAgICAgIHRoaXMuJGFwcGx5KClcclxuICAgIH0sXHJcbiAgICBpbWdQcmV2aWV3IChpdGVtcywgaW5kZXgpIHtcclxuICAgICAgLy9yZXBsYWNlKC9fdGh1bWJuYWlsXFwuLywnLicpXHJcbiAgICAgIGNvbnN0IG5JbWdBcnIgPSBpdGVtcy5tYXAoKGl0ZW0pID0+IGl0ZW0ucmVwbGFjZSgvX3RodW1ibmFpbFxcLi8sJy4nKSlcclxuICAgICAgLy8gY29uc29sZS5sb2coaXRlbXMpXHJcbiAgICAgIC8vIGNvbnNvbGUubG9nKG5JbWdBcnIsMilcclxuICAgICAgd2VweS5wcmV2aWV3SW1hZ2Uoe1xyXG4gICAgICAgIHVybHM6IG5JbWdBcnIsXHJcbiAgICAgICAgY3VycmVudDogbkltZ0FycltpbmRleF0sXHJcbiAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKHJlcykge1xyXG4gICAgICAgICAgY29uc29sZS5sb2cocmVzKVxyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuICAgIH0sXHJcbiAgfVxyXG5cclxuICBvblNoYXJlQXBwTWVzc2FnZSA9IGZ1bmN0aW9uIChyZXMpIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHRpdGxlOiB0aGlzLmNhdGVnb3J5WzBdXHJcbiAgICB9XHJcbiAgfVxyXG4gIGFzeW5jIG9uTG9hZChvcHRpb24pIHtcclxuICAgIGNvbnN0IHsgc2V0VXNlciB9ID0gdGhpcy5tZXRob2RzXHJcbiAgICB3ZXB5LnNob3dMb2FkaW5nKClcclxuICAgIGNvbnN0IHsgY29kZSB9ID0gYXdhaXQgd2VweS5sb2dpbigpXHJcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgYWNjb3VudEFwaS5nZXRTZXNzaW9uKGNvZGUsY29uZmlnLmFwcElkLGNvbmZpZy5hcHBTZWNyZXRlKVxyXG4gICAgY29uc3QgeyBvcGVuaWQgfSA9IGRhdGEgXHJcbiAgICBjb25zdCB7IHVzZXJJbmZvIH0gPSBhd2FpdCB3ZXB5LmdldFVzZXJJbmZvKClcclxuICAgIGNvbnN0IHBhc3N3b3JkID0gUi50YWtlTGFzdCg1KShvcGVuaWQpXHJcbiAgICBjb25zdCB1c2VyID0ge1xyXG4gICAgICAuLi51c2VySW5mbyxcclxuICAgICAgYWNjaWQ6IG9wZW5pZC50b0xvd2VyQ2FzZSgpXHJcbiAgICB9XHJcblxyXG4gICAgc2V0VXNlcih1c2VyKVxyXG4gICAgICAvLyDlpoLmnpznlKjmiLflsJrmnKrlnKgg572R5piT5LqR5rOo5YaMIOWImeWFiOazqOWGjFxyXG4gICAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHRva2VuID0gYXdhaXQgTklNLmxvZ2luKG9wZW5pZClcclxuICAgICAgICBjb25zdCB1c2VySWQgPSBhd2FpdCBhY2NvdW50QXBpLmdldFRva2VuKG9wZW5pZCwgcGFzc3dvcmQudG9Mb3dlckNhc2UoKSlcclxuICAgICAgICBjb25zdCB7VG9rZW59ID0gdXNlcklkXHJcblxyXG4gICAgICAgIGlmICghVG9rZW4pIHtcclxuICAgICAgICAgIHRocm93IG5ldyBFcnJvcigndXNlciBub3QgZXhpc3QnKVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgc2V0VXNlcih7XHJcbiAgICAgICAgICAuLi50aGlzLnVzZXIsXHJcbiAgICAgICAgICBqZlRva2VuOiBUb2tlbixcclxuICAgICAgICAgIG5pbVRva2VuOiB0b2tlbixcclxuICAgICAgICAgIHVzZXJEYXRhOiB1c2VySWRcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICAvLyDojrflj5bmlofnq6Dkv6Hmga9cclxuICAgICAgICBjb25zdCB7IGlkIH0gPSBvcHRpb25cclxuICAgICAgICBjb25zdCB7IGpmVG9rZW4gfSA9IHRoaXMudXNlclxyXG4gICAgICAgIGF3YWl0IGFwaS5hZGRSZWFkTnVtKGlkLCBqZlRva2VuKVxyXG4gICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGFwaS5ib2FyZERldGFpbChpZCwgamZUb2tlbilcclxuICAgICAgICB0aGlzLnRpdGxlID0gcmVzLnRpdGxlXHJcbiAgICAgICAgdGhpcy5jb250ZW50ID0gcmVzLnRleHRcclxuICAgICAgICB0aGlzLmJvYXJkSWQgPSByZXMuaWRcclxuICAgICAgICB0aGlzLmNyZWF0ZWRCeSA9IHJlcy5hdXRob3JcclxuICAgICAgICB0aGlzLmNyZWF0ZWRBdCA9IHJlcy5kYXRlbGluZVxyXG4gICAgICAgIHRoaXMucmVhZCA9IHJlcy5jbGlja19udW1cclxuICAgICAgICB0aGlzLmF1dGhvcl9pZCA9IHJlcy5hdXRob3JfaWRcclxuICAgICAgICB0aGlzLmNhdGVnb3J5ID0gcmVzLmNhdGVnb3J5XHJcbiAgICAgICAgdGhpcy5pc1N0YXIgPSByZXMuaXNfc3RhcmVkXHJcbiAgICAgICAgdGhpcy5pbWdzID0gcmVzLnBpY191cmxzLm1hcCh1cmwgPT4gYCR7amYuYmFzZVNlcnZlcn0ke3VybH1gLnJlcGxhY2UoL1xcLlteXFwuXSskLywnX3RodW1ibmFpbC5qcGcnKSlcclxuICAgICAgICB0aGlzLiRhcHBseSgpXHJcbiAgICAgICAgd2VweS5oaWRlTG9hZGluZygpXHJcbiAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICBsb2cuZXJyb3Ioe1xyXG4gICAgICAgICAgcGFnZTogJ2NoYXRyb29tJyxcclxuICAgICAgICAgIG9wcjogJ2luaXQnLFxyXG4gICAgICAgICAgaW5mbzogZVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgd2VweS5uYXZpZ2F0ZVRvKHtcclxuICAgICAgICAgIHVybDogJy9wYWdlcy9yZWdpc3RlcidcclxuICAgICAgICB9KVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gIH1cclxuXHJcbiAgIl19