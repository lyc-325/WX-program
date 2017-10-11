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

var _wepyRedux = require('./../npm/wepy-redux/lib/index.js');

var _board = require('./../apis/board.js');

var api = _interopRequireWildcard(_board);

var _account = require('./../apis/account.js');

var accountApi = _interopRequireWildcard(_account);

var _config = require('./../config.js');

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Board = (_dec = (0, _wepyRedux.connect)({
  user: function user(state) {
    return state.common.user;
  }
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
        var id, jfToken, res;
        return _regenerator2.default.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                id = option.id;

                if (!this.user.userData) {
                  _context3.next = 21;
                  break;
                }

                jfToken = this.user.jfToken;
                _context3.next = 5;
                return api.addReadNum(id, jfToken);

              case 5:
                _context3.next = 7;
                return api.boardDetail(id, jfToken);

              case 7:
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
                _context3.next = 22;
                break;

              case 21:
                _wepy2.default.reLaunch({
                  url: '/pages/register'
                });

              case 22:
              case 'end':
                return _context3.stop();
            }
          }
        }, _callee3, this);
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJvYXJkLmpzIl0sIm5hbWVzIjpbImFwaSIsImFjY291bnRBcGkiLCJCb2FyZCIsInVzZXIiLCJzdGF0ZSIsImNvbW1vbiIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCJkYXRhIiwidGl0bGUiLCJpbWdzIiwiY29udGVudCIsImNyZWF0ZWRCeSIsImNyZWF0ZWRBdCIsInJlYWQiLCJhdXRob3JfaWQiLCJpc1N0YXIiLCJtZXRob2RzIiwiaGFuZGxlTmFtZSIsImUiLCJuYXZpZ2F0ZVRvIiwidXJsIiwiaGFuZGVDb2xsZWN0aW9uIiwiaWQiLCJ1c2VyRGF0YSIsImJvYXJkSWQiLCJhcnRpY2xlU3RhciIsInd4Iiwic2hvd1RvYXN0IiwiaWNvbiIsImR1cmF0aW9uIiwiJGFwcGx5IiwiRGVsQ29sbGVjdGlvbiIsImFydGljbGVVbnN0YXIiLCJpbWdQcmV2aWV3IiwiaXRlbXMiLCJpbmRleCIsImltZ0FyciIsIm51bSIsInByZXZpZXdJbWFnZSIsImN1cnJlbnQiLCJ1cmxzIiwic3VjY2VzcyIsInJlcyIsImNvbnNvbGUiLCJsb2ciLCJvblNoYXJlQXBwTWVzc2FnZSIsImNhdGVnb3J5Iiwib3B0aW9uIiwiamZUb2tlbiIsImFkZFJlYWROdW0iLCJib2FyZERldGFpbCIsInRleHQiLCJhdXRob3IiLCJkYXRlbGluZSIsImNsaWNrX251bSIsImlzX3N0YXJlZCIsInBpY191cmxzIiwibWFwIiwiYmFzZVNlcnZlciIsInJlTGF1bmNoIiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBOzs7O0FBQ0E7O0FBQ0E7O0lBQVlBLEc7O0FBQ1o7O0lBQVlDLFU7O0FBQ1o7Ozs7OztJQU9xQkMsSyxXQUxwQix3QkFBUTtBQUNQQyxNQURPLGdCQUNGQyxLQURFLEVBQ0s7QUFDVixXQUFPQSxNQUFNQyxNQUFOLENBQWFGLElBQXBCO0FBQ0Q7QUFITSxDQUFSLEM7Ozs7Ozs7Ozs7Ozs7OzBNQU1D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QUFpQjhCLElBQUlXLFFBQXJCO0FBQ0EscUJBQUt4QyxJQUFMLEdBQVk2QixJQUFJWSxTQUFoQjtBQUNBLHFCQUFLeEMsU0FBTCxHQUFpQjRCLElBQUk1QixTQUFyQjtBQUNBLHFCQUFLZ0MsUUFBTCxHQUFnQkosSUFBSUksUUFBcEI7QUFDQSxxQkFBSy9CLE1BQUwsR0FBYzJCLElBQUlhLFNBQWxCO0FBQ0EscUJBQUs5QyxJQUFMLEdBQVlpQyxJQUFJYyxRQUFKLENBQWFDLEdBQWIsQ0FBaUI7QUFBQSw4QkFBVSxXQUFHQyxVQUFiLEdBQTBCdEMsR0FBMUI7QUFBQSxpQkFBakIsQ0FBWjtBQUNBLHFCQUFLVSxNQUFMOzs7OztBQUVBLCtCQUFLNkIsUUFBTCxDQUFjO0FBQ1p2Qyx1QkFBSztBQURPLGlCQUFkOzs7Ozs7Ozs7Ozs7Ozs7Ozs7RUFqRjZCLGVBQUt3QyxJO2tCQUFuQjNELEsiLCJmaWxlIjoiYm9hcmQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcclxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3dlcHktcmVkdXgnXHJcbmltcG9ydCAqIGFzIGFwaSBmcm9tICcuLi9hcGlzL2JvYXJkJ1xyXG5pbXBvcnQgKiBhcyBhY2NvdW50QXBpIGZyb20gJy4uL2FwaXMvYWNjb3VudCdcclxuaW1wb3J0IHsgamYgfSBmcm9tICcuLi9jb25maWcnXHJcblxyXG5AY29ubmVjdCh7XHJcbiAgdXNlcihzdGF0ZSkge1xyXG4gICAgcmV0dXJuIHN0YXRlLmNvbW1vbi51c2VyXHJcbiAgfVxyXG59KVxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCb2FyZCBleHRlbmRzIHdlcHkucGFnZSB7XHJcbiAgY29uZmlnID0ge1xyXG4gICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+WVhuWPi+WciCdcclxuICB9XHJcblxyXG4gIGRhdGEgPSB7XHJcbiAgICB0aXRsZTogJycsXHJcbiAgICBpbWdzOiBbXSxcclxuICAgIGNvbnRlbnQ6ICcnLFxyXG4gICAgY3JlYXRlZEJ5OiAnJyxcclxuICAgIGNyZWF0ZWRBdDogJycsXHJcbiAgICByZWFkOiAnJyxcclxuICAgIGF1dGhvcl9pZDogJycsXHJcbiAgICBpc1N0YXI6IG51bGwsXHJcbiAgfVxyXG4gIG1ldGhvZHMgPSB7XHJcbiAgICBoYW5kbGVOYW1lIChlKSB7XHJcbiAgICAgIHdlcHkubmF2aWdhdGVUbyh7XHJcbiAgICAgICAgdXJsOiBgdXNlckluZm8/aWQ9JHt0aGlzLmF1dGhvcl9pZH1gXHJcbiAgICAgIH0pXHJcbiAgICB9LFxyXG4gICAgYXN5bmMgaGFuZGVDb2xsZWN0aW9uICgpIHtcclxuICAgICAgbGV0IHtpZH0gPSB0aGlzLnVzZXIudXNlckRhdGFcclxuICAgICAgbGV0IGJvYXJkSWQgPSB0aGlzLmJvYXJkSWRcclxuICAgICAgYXdhaXQgYWNjb3VudEFwaS5hcnRpY2xlU3RhcihpZCxib2FyZElkKVxyXG4gICAgICB0aGlzLmlzU3RhciA9IHRydWUsXHJcbiAgICAgIHd4LnNob3dUb2FzdCh7XHJcbiAgICAgICAgICB0aXRsZTogJ+W3suaUtuiXjycsXHJcbiAgICAgICAgICBpY29uOiAnc3VjY2VzcycsXHJcbiAgICAgICAgICBkdXJhdGlvbjogMjAwMFxyXG4gICAgICAgIH0pXHJcbiAgICAgIHRoaXMuJGFwcGx5KClcclxuICAgIH0sXHJcbiAgICBhc3luYyBEZWxDb2xsZWN0aW9uICgpIHtcclxuICAgICAgbGV0IHtpZH0gPSB0aGlzLnVzZXIudXNlckRhdGFcclxuICAgICAgbGV0IGJvYXJkSWQgPSB0aGlzLmJvYXJkSWRcclxuICAgICAgYXdhaXQgYWNjb3VudEFwaS5hcnRpY2xlVW5zdGFyKGlkLGJvYXJkSWQpXHJcbiAgICAgIHd4LnNob3dUb2FzdCh7XHJcbiAgICAgICAgICB0aXRsZTogJ+W3suWPlua2iCcsXHJcbiAgICAgICAgICBpY29uOiAnc3VjY2VzcycsXHJcbiAgICAgICAgICBkdXJhdGlvbjogMjAwMFxyXG4gICAgICB9KVxyXG4gICAgICB0aGlzLmlzU3RhciA9IGZhbHNlXHJcbiAgICAgIHRoaXMuJGFwcGx5KClcclxuICAgIH0sXHJcbiAgICBpbWdQcmV2aWV3IChpdGVtcywgaW5kZXgpIHtcclxuICAgICAgY29uc3QgaW1nQXJyID0gaXRlbXNcclxuICAgICAgY29uc3QgbnVtID0gaW5kZXhcclxuICAgICAgd2VweS5wcmV2aWV3SW1hZ2Uoe1xyXG4gICAgICAgIGN1cnJlbnQ6IGltZ0FycltudW1dLFxyXG4gICAgICAgIHVybHM6IGltZ0FycixcclxuICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAocmVzKSB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhyZXMpXHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG4gICAgfSxcclxuXHJcbiAgfVxyXG4gIG9uU2hhcmVBcHBNZXNzYWdlID0gZnVuY3Rpb24gKHJlcykge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgdGl0bGU6IHRoaXMuY2F0ZWdvcnlbMF1cclxuICAgIH1cclxuICB9XHJcbiAgYXN5bmMgb25Mb2FkKG9wdGlvbikge1xyXG4gICAgY29uc3QgeyBpZCB9ID0gb3B0aW9uXHJcbiAgICBpZiAodGhpcy51c2VyLnVzZXJEYXRhKSB7XHJcbiAgICAgIGNvbnN0IHsgamZUb2tlbiB9ID0gdGhpcy51c2VyXHJcbiAgICAgIGF3YWl0IGFwaS5hZGRSZWFkTnVtKGlkLCBqZlRva2VuKVxyXG4gICAgICBjb25zdCByZXMgPSBhd2FpdCBhcGkuYm9hcmREZXRhaWwoaWQsIGpmVG9rZW4pXHJcbiAgICAgIHRoaXMudGl0bGUgPSByZXMudGl0bGVcclxuICAgICAgdGhpcy5jb250ZW50ID0gcmVzLnRleHRcclxuICAgICAgdGhpcy5ib2FyZElkID0gcmVzLmlkXHJcbiAgICAgIHRoaXMuY3JlYXRlZEJ5ID0gcmVzLmF1dGhvclxyXG4gICAgICB0aGlzLmNyZWF0ZWRBdCA9IHJlcy5kYXRlbGluZVxyXG4gICAgICB0aGlzLnJlYWQgPSByZXMuY2xpY2tfbnVtXHJcbiAgICAgIHRoaXMuYXV0aG9yX2lkID0gcmVzLmF1dGhvcl9pZFxyXG4gICAgICB0aGlzLmNhdGVnb3J5ID0gcmVzLmNhdGVnb3J5XHJcbiAgICAgIHRoaXMuaXNTdGFyID0gcmVzLmlzX3N0YXJlZFxyXG4gICAgICB0aGlzLmltZ3MgPSByZXMucGljX3VybHMubWFwKHVybCA9PiBgJHtqZi5iYXNlU2VydmVyfSR7dXJsfWApXHJcbiAgICAgIHRoaXMuJGFwcGx5KClcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHdlcHkucmVMYXVuY2goe1xyXG4gICAgICAgIHVybDogJy9wYWdlcy9yZWdpc3RlcidcclxuICAgICAgfSlcclxuICAgIH1cclxuICB9XHJcblxyXG5cclxufVxyXG4iXX0=