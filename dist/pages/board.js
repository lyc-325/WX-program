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
      author_id: ''
    }, _this.methods = {
      handleName: function handleName(e) {
        _wepy2.default.navigateTo({
          url: 'userInfo?id=' + this.author_id
        });
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
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(Board, [{
    key: 'onLoad',
    value: function () {
      var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(option) {
        var id, jfToken, res;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                id = option.id;

                console.log('user', this.user);

                if (!this.user.userData) {
                  _context.next = 20;
                  break;
                }

                jfToken = this.user.jfToken;
                _context.next = 6;
                return api.addReadNum(id, jfToken);

              case 6:
                _context.next = 8;
                return api.boardDetail(id, jfToken);

              case 8:
                res = _context.sent;

                console.log(res);
                this.title = res.title;
                this.content = res.text;
                this.createdBy = res.author;
                this.createdAt = res.dateline;
                this.read = res.click_num;
                this.author_id = res.author_id;
                this.imgs = res.pic_urls.map(function (url) {
                  return '' + _config.jf.baseServer + url;
                });
                this.$apply();
                _context.next = 21;
                break;

              case 20:
                _wepy2.default.reLaunch({
                  url: '/pages/register'
                });

              case 21:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJvYXJkLmpzIl0sIm5hbWVzIjpbImFwaSIsIkJvYXJkIiwidXNlciIsInN0YXRlIiwiY29tbW9uIiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsImRhdGEiLCJ0aXRsZSIsImltZ3MiLCJjb250ZW50IiwiY3JlYXRlZEJ5IiwiY3JlYXRlZEF0IiwicmVhZCIsImF1dGhvcl9pZCIsIm1ldGhvZHMiLCJoYW5kbGVOYW1lIiwiZSIsIm5hdmlnYXRlVG8iLCJ1cmwiLCJpbWdQcmV2aWV3IiwiaXRlbXMiLCJpbmRleCIsImltZ0FyciIsIm51bSIsInByZXZpZXdJbWFnZSIsImN1cnJlbnQiLCJ1cmxzIiwic3VjY2VzcyIsInJlcyIsImNvbnNvbGUiLCJsb2ciLCJvcHRpb24iLCJpZCIsInVzZXJEYXRhIiwiamZUb2tlbiIsImFkZFJlYWROdW0iLCJib2FyZERldGFpbCIsInRleHQiLCJhdXRob3IiLCJkYXRlbGluZSIsImNsaWNrX251bSIsInBpY191cmxzIiwibWFwIiwiYmFzZVNlcnZlciIsIiRhcHBseSIsInJlTGF1bmNoIiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBOzs7O0FBQ0E7O0FBQ0E7O0lBQVlBLEc7O0FBQ1o7Ozs7OztJQU9xQkMsSyxXQUxwQix3QkFBUTtBQUNQQyxNQURPLGdCQUNGQyxLQURFLEVBQ0s7QUFDVixXQUFPQSxNQUFNQyxNQUFOLENBQWFGLElBQXBCO0FBQ0Q7QUFITSxDQUFSLEM7Ozs7Ozs7Ozs7Ozs7OzBNQU1DRyxNLEdBQVM7QUFDUEMsOEJBQXdCO0FBRGpCLEssUUFJVEMsSSxHQUFPO0FBQ0xDLGFBQU8sRUFERjtBQUVMQyxZQUFNLEVBRkQ7QUFHTEMsZUFBUyxFQUhKO0FBSUxDLGlCQUFXLEVBSk47QUFLTEMsaUJBQVcsRUFMTjtBQU1MQyxZQUFNLEVBTkQ7QUFPTEMsaUJBQVc7QUFQTixLLFFBU1BDLE8sR0FBVTtBQUNSQyxnQkFEUSxzQkFDSUMsQ0FESixFQUNPO0FBQ2IsdUJBQUtDLFVBQUwsQ0FBZ0I7QUFDZEMsZ0NBQW9CLEtBQUtMO0FBRFgsU0FBaEI7QUFHRCxPQUxPO0FBTVJNLGdCQU5RLHNCQU1JQyxLQU5KLEVBTVdDLEtBTlgsRUFNa0I7QUFDeEIsWUFBTUMsU0FBU0YsS0FBZjtBQUNBLFlBQU1HLE1BQU1GLEtBQVo7QUFDQSx1QkFBS0csWUFBTCxDQUFrQjtBQUNoQkMsbUJBQVNILE9BQU9DLEdBQVAsQ0FETztBQUVoQkcsZ0JBQU1KLE1BRlU7QUFHaEJLLG1CQUFTLGlCQUFVQyxHQUFWLEVBQWU7QUFDdEJDLG9CQUFRQyxHQUFSLENBQVlGLEdBQVo7QUFDRDtBQUxlLFNBQWxCO0FBT0Q7QUFoQk8sSzs7Ozs7OzRHQW1CR0csTTs7Ozs7O0FBQ0hDLGtCLEdBQU9ELE0sQ0FBUEMsRTs7QUFDUkgsd0JBQVFDLEdBQVIsQ0FBWSxNQUFaLEVBQW9CLEtBQUs3QixJQUF6Qjs7cUJBQ0ksS0FBS0EsSUFBTCxDQUFVZ0MsUTs7Ozs7QUFDSkMsdUIsR0FBWSxLQUFLakMsSSxDQUFqQmlDLE87O3VCQUNGbkMsSUFBSW9DLFVBQUosQ0FBZUgsRUFBZixFQUFtQkUsT0FBbkIsQzs7Ozt1QkFDWW5DLElBQUlxQyxXQUFKLENBQWdCSixFQUFoQixFQUFvQkUsT0FBcEIsQzs7O0FBQVpOLG1COztBQUNOQyx3QkFBUUMsR0FBUixDQUFZRixHQUFaO0FBQ0EscUJBQUtyQixLQUFMLEdBQWFxQixJQUFJckIsS0FBakI7QUFDQSxxQkFBS0UsT0FBTCxHQUFlbUIsSUFBSVMsSUFBbkI7QUFDQSxxQkFBSzNCLFNBQUwsR0FBaUJrQixJQUFJVSxNQUFyQjtBQUNBLHFCQUFLM0IsU0FBTCxHQUFpQmlCLElBQUlXLFFBQXJCO0FBQ0EscUJBQUszQixJQUFMLEdBQVlnQixJQUFJWSxTQUFoQjtBQUNBLHFCQUFLM0IsU0FBTCxHQUFpQmUsSUFBSWYsU0FBckI7QUFDQSxxQkFBS0wsSUFBTCxHQUFZb0IsSUFBSWEsUUFBSixDQUFhQyxHQUFiLENBQWlCO0FBQUEsOEJBQVUsV0FBR0MsVUFBYixHQUEwQnpCLEdBQTFCO0FBQUEsaUJBQWpCLENBQVo7QUFDQSxxQkFBSzBCLE1BQUw7Ozs7O0FBRUEsK0JBQUtDLFFBQUwsQ0FBYztBQUNaM0IsdUJBQUs7QUFETyxpQkFBZDs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBbEQ2QixlQUFLNEIsSTtrQkFBbkI5QyxLIiwiZmlsZSI6ImJvYXJkLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXHJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICd3ZXB5LXJlZHV4J1xyXG5pbXBvcnQgKiBhcyBhcGkgZnJvbSAnLi4vYXBpcy9ib2FyZCdcclxuaW1wb3J0IHsgamYgfSBmcm9tICcuLi9jb25maWcnXHJcblxyXG5AY29ubmVjdCh7XHJcbiAgdXNlcihzdGF0ZSkge1xyXG4gICAgcmV0dXJuIHN0YXRlLmNvbW1vbi51c2VyXHJcbiAgfVxyXG59KVxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCb2FyZCBleHRlbmRzIHdlcHkucGFnZSB7XHJcbiAgY29uZmlnID0ge1xyXG4gICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+WVhuWPi+WciCdcclxuICB9XHJcblxyXG4gIGRhdGEgPSB7XHJcbiAgICB0aXRsZTogJycsXHJcbiAgICBpbWdzOiBbXSxcclxuICAgIGNvbnRlbnQ6ICcnLFxyXG4gICAgY3JlYXRlZEJ5OiAnJyxcclxuICAgIGNyZWF0ZWRBdDogJycsXHJcbiAgICByZWFkOiAnJyxcclxuICAgIGF1dGhvcl9pZDogJydcclxuICB9XHJcbiAgbWV0aG9kcyA9IHtcclxuICAgIGhhbmRsZU5hbWUgKGUpIHtcclxuICAgICAgd2VweS5uYXZpZ2F0ZVRvKHtcclxuICAgICAgICB1cmw6IGB1c2VySW5mbz9pZD0ke3RoaXMuYXV0aG9yX2lkfWBcclxuICAgICAgfSlcclxuICAgIH0sXHJcbiAgICBpbWdQcmV2aWV3IChpdGVtcywgaW5kZXgpIHtcclxuICAgICAgY29uc3QgaW1nQXJyID0gaXRlbXNcclxuICAgICAgY29uc3QgbnVtID0gaW5kZXhcclxuICAgICAgd2VweS5wcmV2aWV3SW1hZ2Uoe1xyXG4gICAgICAgIGN1cnJlbnQ6IGltZ0FycltudW1dLFxyXG4gICAgICAgIHVybHM6IGltZ0FycixcclxuICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAocmVzKSB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhyZXMpXHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG4gICAgfVxyXG5cclxuICB9XHJcbiAgYXN5bmMgb25Mb2FkKG9wdGlvbikge1xyXG4gICAgY29uc3QgeyBpZCB9ID0gb3B0aW9uXHJcbiAgICBjb25zb2xlLmxvZygndXNlcicsIHRoaXMudXNlcilcclxuICAgIGlmICh0aGlzLnVzZXIudXNlckRhdGEpIHtcclxuICAgICAgY29uc3QgeyBqZlRva2VuIH0gPSB0aGlzLnVzZXJcclxuICAgICAgYXdhaXQgYXBpLmFkZFJlYWROdW0oaWQsIGpmVG9rZW4pXHJcbiAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGFwaS5ib2FyZERldGFpbChpZCwgamZUb2tlbilcclxuICAgICAgY29uc29sZS5sb2cocmVzKVxyXG4gICAgICB0aGlzLnRpdGxlID0gcmVzLnRpdGxlXHJcbiAgICAgIHRoaXMuY29udGVudCA9IHJlcy50ZXh0XHJcbiAgICAgIHRoaXMuY3JlYXRlZEJ5ID0gcmVzLmF1dGhvclxyXG4gICAgICB0aGlzLmNyZWF0ZWRBdCA9IHJlcy5kYXRlbGluZVxyXG4gICAgICB0aGlzLnJlYWQgPSByZXMuY2xpY2tfbnVtXHJcbiAgICAgIHRoaXMuYXV0aG9yX2lkID0gcmVzLmF1dGhvcl9pZFxyXG4gICAgICB0aGlzLmltZ3MgPSByZXMucGljX3VybHMubWFwKHVybCA9PiBgJHtqZi5iYXNlU2VydmVyfSR7dXJsfWApXHJcbiAgICAgIHRoaXMuJGFwcGx5KClcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHdlcHkucmVMYXVuY2goe1xyXG4gICAgICAgIHVybDogJy9wYWdlcy9yZWdpc3RlcidcclxuICAgICAgfSlcclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19