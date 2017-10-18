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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJvYXJkLmpzIl0sIm5hbWVzIjpbImFwaSIsImFjY291bnRBcGkiLCJCb2FyZCIsInVzZXIiLCJzdGF0ZSIsImNvbW1vbiIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCJkYXRhIiwidGl0bGUiLCJpbWdzIiwiY29udGVudCIsImNyZWF0ZWRCeSIsImNyZWF0ZWRBdCIsInJlYWQiLCJhdXRob3JfaWQiLCJpc1N0YXIiLCJtZXRob2RzIiwiaGFuZGxlTmFtZSIsImUiLCJuYXZpZ2F0ZVRvIiwidXJsIiwiaGFuZGVDb2xsZWN0aW9uIiwiaWQiLCJ1c2VyRGF0YSIsImJvYXJkSWQiLCJhcnRpY2xlU3RhciIsInd4Iiwic2hvd1RvYXN0IiwiaWNvbiIsImR1cmF0aW9uIiwiJGFwcGx5IiwiRGVsQ29sbGVjdGlvbiIsImFydGljbGVVbnN0YXIiLCJpbWdQcmV2aWV3IiwiaXRlbXMiLCJpbmRleCIsImltZ0FyciIsIm51bSIsInByZXZpZXdJbWFnZSIsImN1cnJlbnQiLCJ1cmxzIiwic3VjY2VzcyIsInJlcyIsImNvbnNvbGUiLCJsb2ciLCJvblNoYXJlQXBwTWVzc2FnZSIsImNhdGVnb3J5Iiwib3B0aW9uIiwiamZUb2tlbiIsImFkZFJlYWROdW0iLCJib2FyZERldGFpbCIsInRleHQiLCJhdXRob3IiLCJkYXRlbGluZSIsImNsaWNrX251bSIsImlzX3N0YXJlZCIsInBpY191cmxzIiwibWFwIiwiYmFzZVNlcnZlciIsInJlTGF1bmNoIiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBOzs7O0FBQ0E7O0FBQ0E7O0lBQVlBLEc7O0FBQ1o7O0lBQVlDLFU7O0FBQ1o7Ozs7OztJQU1xQkMsSyxXQUxwQix3QkFBUTtBQUNQQyxNQURPLGdCQUNGQyxLQURFLEVBQ0s7QUFDVixXQUFPQSxNQUFNQyxNQUFOLENBQWFGLElBQXBCO0FBQ0Q7QUFITSxDQUFSLEM7Ozs7Ozs7Ozs7Ozs7OzBNQU1D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QUFpQjhCLElBQUlXLFFBQXJCO0FBQ0EscUJBQUt4QyxJQUFMLEdBQVk2QixJQUFJWSxTQUFoQjtBQUNBLHFCQUFLeEMsU0FBTCxHQUFpQjRCLElBQUk1QixTQUFyQjtBQUNBLHFCQUFLZ0MsUUFBTCxHQUFnQkosSUFBSUksUUFBcEI7QUFDQSxxQkFBSy9CLE1BQUwsR0FBYzJCLElBQUlhLFNBQWxCO0FBQ0EscUJBQUs5QyxJQUFMLEdBQVlpQyxJQUFJYyxRQUFKLENBQWFDLEdBQWIsQ0FBaUI7QUFBQSw4QkFBVSxXQUFHQyxVQUFiLEdBQTBCdEMsR0FBMUI7QUFBQSxpQkFBakIsQ0FBWjtBQUNBLHFCQUFLVSxNQUFMOzs7OztBQUVBLCtCQUFLNkIsUUFBTCxDQUFjO0FBQ1p2Qyx1QkFBSztBQURPLGlCQUFkOzs7Ozs7Ozs7Ozs7Ozs7Ozs7RUEvRTZCLGVBQUt3QyxJO2tCQUFuQjNELEsiLCJmaWxlIjoiYm9hcmQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcclxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3dlcHktcmVkdXgnXHJcbmltcG9ydCAqIGFzIGFwaSBmcm9tICcuLi9hcGlzL2JvYXJkJ1xyXG5pbXBvcnQgKiBhcyBhY2NvdW50QXBpIGZyb20gJy4uL2FwaXMvYWNjb3VudCdcclxuaW1wb3J0IHsgamYgfSBmcm9tICcuLi9jb25maWcnXHJcbkBjb25uZWN0KHtcclxuICB1c2VyKHN0YXRlKSB7XHJcbiAgICByZXR1cm4gc3RhdGUuY29tbW9uLnVzZXJcclxuICB9XHJcbn0pXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJvYXJkIGV4dGVuZHMgd2VweS5wYWdlIHtcclxuICBjb25maWcgPSB7XHJcbiAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn5ZWG5Y+L5ZyIJ1xyXG4gIH1cclxuICBkYXRhID0ge1xyXG4gICAgdGl0bGU6ICcnLFxyXG4gICAgaW1nczogW10sXHJcbiAgICBjb250ZW50OiAnJyxcclxuICAgIGNyZWF0ZWRCeTogJycsXHJcbiAgICBjcmVhdGVkQXQ6ICcnLFxyXG4gICAgcmVhZDogJycsXHJcbiAgICBhdXRob3JfaWQ6ICcnLFxyXG4gICAgaXNTdGFyOiBudWxsLFxyXG4gIH1cclxuICBtZXRob2RzID0ge1xyXG4gICAgaGFuZGxlTmFtZSAoZSkge1xyXG4gICAgICB3ZXB5Lm5hdmlnYXRlVG8oe1xyXG4gICAgICAgIHVybDogYHVzZXJJbmZvP2lkPSR7dGhpcy5hdXRob3JfaWR9YFxyXG4gICAgICB9KVxyXG4gICAgfSxcclxuICAgIGFzeW5jIGhhbmRlQ29sbGVjdGlvbiAoKSB7XHJcbiAgICAgIGxldCB7aWR9ID0gdGhpcy51c2VyLnVzZXJEYXRhXHJcbiAgICAgIGxldCBib2FyZElkID0gdGhpcy5ib2FyZElkXHJcbiAgICAgIGF3YWl0IGFjY291bnRBcGkuYXJ0aWNsZVN0YXIoaWQsYm9hcmRJZClcclxuICAgICAgdGhpcy5pc1N0YXIgPSB0cnVlLFxyXG4gICAgICB3eC5zaG93VG9hc3Qoe1xyXG4gICAgICAgICAgdGl0bGU6ICflt7LmlLbol48nLFxyXG4gICAgICAgICAgaWNvbjogJ3N1Y2Nlc3MnLFxyXG4gICAgICAgICAgZHVyYXRpb246IDIwMDBcclxuICAgICAgICB9KVxyXG4gICAgICB0aGlzLiRhcHBseSgpXHJcbiAgICB9LFxyXG4gICAgYXN5bmMgRGVsQ29sbGVjdGlvbiAoKSB7XHJcbiAgICAgIGxldCB7aWR9ID0gdGhpcy51c2VyLnVzZXJEYXRhXHJcbiAgICAgIGxldCBib2FyZElkID0gdGhpcy5ib2FyZElkXHJcbiAgICAgIGF3YWl0IGFjY291bnRBcGkuYXJ0aWNsZVVuc3RhcihpZCxib2FyZElkKVxyXG4gICAgICB3eC5zaG93VG9hc3Qoe1xyXG4gICAgICAgICAgdGl0bGU6ICflt7Llj5bmtognLFxyXG4gICAgICAgICAgaWNvbjogJ3N1Y2Nlc3MnLFxyXG4gICAgICAgICAgZHVyYXRpb246IDIwMDBcclxuICAgICAgfSlcclxuICAgICAgdGhpcy5pc1N0YXIgPSBmYWxzZVxyXG4gICAgICB0aGlzLiRhcHBseSgpXHJcbiAgICB9LFxyXG4gICAgaW1nUHJldmlldyAoaXRlbXMsIGluZGV4KSB7XHJcbiAgICAgIGNvbnN0IGltZ0FyciA9IGl0ZW1zXHJcbiAgICAgIGNvbnN0IG51bSA9IGluZGV4XHJcbiAgICAgIHdlcHkucHJldmlld0ltYWdlKHtcclxuICAgICAgICBjdXJyZW50OiBpbWdBcnJbbnVtXSxcclxuICAgICAgICB1cmxzOiBpbWdBcnIsXHJcbiAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKHJlcykge1xyXG4gICAgICAgICAgY29uc29sZS5sb2cocmVzKVxyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuICAgIH0sXHJcbiAgfVxyXG4gIG9uU2hhcmVBcHBNZXNzYWdlID0gZnVuY3Rpb24gKHJlcykge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgdGl0bGU6IHRoaXMuY2F0ZWdvcnlbMF1cclxuICAgIH1cclxuICB9XHJcbiAgYXN5bmMgb25Mb2FkKG9wdGlvbikge1xyXG4gICAgY29uc3QgeyBpZCB9ID0gb3B0aW9uXHJcbiAgICBpZiAodGhpcy51c2VyLnVzZXJEYXRhICkge1xyXG4gICAgICBjb25zdCB7IGpmVG9rZW4gfSA9IHRoaXMudXNlclxyXG4gICAgICBhd2FpdCBhcGkuYWRkUmVhZE51bShpZCwgamZUb2tlbilcclxuICAgICAgY29uc3QgcmVzID0gYXdhaXQgYXBpLmJvYXJkRGV0YWlsKGlkLCBqZlRva2VuKVxyXG4gICAgICB0aGlzLnRpdGxlID0gcmVzLnRpdGxlXHJcbiAgICAgIHRoaXMuY29udGVudCA9IHJlcy50ZXh0XHJcbiAgICAgIHRoaXMuYm9hcmRJZCA9IHJlcy5pZFxyXG4gICAgICB0aGlzLmNyZWF0ZWRCeSA9IHJlcy5hdXRob3JcclxuICAgICAgdGhpcy5jcmVhdGVkQXQgPSByZXMuZGF0ZWxpbmVcclxuICAgICAgdGhpcy5yZWFkID0gcmVzLmNsaWNrX251bVxyXG4gICAgICB0aGlzLmF1dGhvcl9pZCA9IHJlcy5hdXRob3JfaWRcclxuICAgICAgdGhpcy5jYXRlZ29yeSA9IHJlcy5jYXRlZ29yeVxyXG4gICAgICB0aGlzLmlzU3RhciA9IHJlcy5pc19zdGFyZWRcclxuICAgICAgdGhpcy5pbWdzID0gcmVzLnBpY191cmxzLm1hcCh1cmwgPT4gYCR7amYuYmFzZVNlcnZlcn0ke3VybH1gKVxyXG4gICAgICB0aGlzLiRhcHBseSgpXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB3ZXB5LnJlTGF1bmNoKHtcclxuICAgICAgICB1cmw6ICcvcGFnZXMvcmVnaXN0ZXInXHJcbiAgICAgIH0pXHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ==