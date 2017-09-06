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
      var _ref2 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(option) {
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJvYXJkLmpzIl0sIm5hbWVzIjpbImFwaSIsIkJvYXJkIiwidXNlciIsInN0YXRlIiwiY29tbW9uIiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsImRhdGEiLCJ0aXRsZSIsImltZ3MiLCJjb250ZW50IiwiY3JlYXRlZEJ5IiwiY3JlYXRlZEF0IiwicmVhZCIsImF1dGhvcl9pZCIsIm1ldGhvZHMiLCJoYW5kbGVOYW1lIiwiZSIsIm5hdmlnYXRlVG8iLCJ1cmwiLCJpbWdQcmV2aWV3IiwiaXRlbXMiLCJpbmRleCIsImltZ0FyciIsIm51bSIsInByZXZpZXdJbWFnZSIsImN1cnJlbnQiLCJ1cmxzIiwic3VjY2VzcyIsInJlcyIsImNvbnNvbGUiLCJsb2ciLCJvcHRpb24iLCJpZCIsInVzZXJEYXRhIiwiamZUb2tlbiIsImFkZFJlYWROdW0iLCJib2FyZERldGFpbCIsInRleHQiLCJhdXRob3IiLCJkYXRlbGluZSIsImNsaWNrX251bSIsInBpY191cmxzIiwibWFwIiwiYmFzZVNlcnZlciIsIiRhcHBseSIsInJlTGF1bmNoIiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBOzs7O0FBQ0E7O0FBQ0E7O0lBQVlBLEc7O0FBQ1o7Ozs7OztJQU9xQkMsSyxXQUxwQix3QkFBUTtBQUNQQyxNQURPLGdCQUNGQyxLQURFLEVBQ0s7QUFDVixXQUFPQSxNQUFNQyxNQUFOLENBQWFGLElBQXBCO0FBQ0Q7QUFITSxDQUFSLEM7Ozs7Ozs7Ozs7Ozs7OzBNQU1DRyxNLEdBQVM7QUFDUEMsOEJBQXdCO0FBRGpCLEssUUFJVEMsSSxHQUFPO0FBQ0xDLGFBQU8sRUFERjtBQUVMQyxZQUFNLEVBRkQ7QUFHTEMsZUFBUyxFQUhKO0FBSUxDLGlCQUFXLEVBSk47QUFLTEMsaUJBQVcsRUFMTjtBQU1MQyxZQUFNLEVBTkQ7QUFPTEMsaUJBQVc7QUFQTixLLFFBU1BDLE8sR0FBVTtBQUNSQyxnQkFEUSxzQkFDSUMsQ0FESixFQUNPO0FBQ2IsdUJBQUtDLFVBQUwsQ0FBZ0I7QUFDZEMsZ0NBQW9CLEtBQUtMO0FBRFgsU0FBaEI7QUFHRCxPQUxPO0FBTVJNLGdCQU5RLHNCQU1JQyxLQU5KLEVBTVdDLEtBTlgsRUFNa0I7QUFDeEIsWUFBTUMsU0FBU0YsS0FBZjtBQUNBLFlBQU1HLE1BQU1GLEtBQVo7QUFDQSx1QkFBS0csWUFBTCxDQUFrQjtBQUNoQkMsbUJBQVNILE9BQU9DLEdBQVAsQ0FETztBQUVoQkcsZ0JBQU1KLE1BRlU7QUFHaEJLLG1CQUFTLGlCQUFVQyxHQUFWLEVBQWU7QUFDdEJDLG9CQUFRQyxHQUFSLENBQVlGLEdBQVo7QUFDRDtBQUxlLFNBQWxCO0FBT0Q7QUFoQk8sSzs7Ozs7OzhGQW1CR0csTTs7Ozs7O0FBQ0hDLGtCLEdBQU9ELE0sQ0FBUEMsRTs7QUFDUkgsd0JBQVFDLEdBQVIsQ0FBWSxNQUFaLEVBQW9CLEtBQUs3QixJQUF6Qjs7cUJBQ0ksS0FBS0EsSUFBTCxDQUFVZ0MsUTs7Ozs7QUFDSkMsdUIsR0FBWSxLQUFLakMsSSxDQUFqQmlDLE87O3VCQUNGbkMsSUFBSW9DLFVBQUosQ0FBZUgsRUFBZixFQUFtQkUsT0FBbkIsQzs7Ozt1QkFDWW5DLElBQUlxQyxXQUFKLENBQWdCSixFQUFoQixFQUFvQkUsT0FBcEIsQzs7O0FBQVpOLG1COztBQUNOQyx3QkFBUUMsR0FBUixDQUFZRixHQUFaO0FBQ0EscUJBQUtyQixLQUFMLEdBQWFxQixJQUFJckIsS0FBakI7QUFDQSxxQkFBS0UsT0FBTCxHQUFlbUIsSUFBSVMsSUFBbkI7QUFDQSxxQkFBSzNCLFNBQUwsR0FBaUJrQixJQUFJVSxNQUFyQjtBQUNBLHFCQUFLM0IsU0FBTCxHQUFpQmlCLElBQUlXLFFBQXJCO0FBQ0EscUJBQUszQixJQUFMLEdBQVlnQixJQUFJWSxTQUFoQjtBQUNBLHFCQUFLM0IsU0FBTCxHQUFpQmUsSUFBSWYsU0FBckI7QUFDQSxxQkFBS0wsSUFBTCxHQUFZb0IsSUFBSWEsUUFBSixDQUFhQyxHQUFiLENBQWlCO0FBQUEsOEJBQVUsV0FBR0MsVUFBYixHQUEwQnpCLEdBQTFCO0FBQUEsaUJBQWpCLENBQVo7QUFDQSxxQkFBSzBCLE1BQUw7Ozs7O0FBRUEsK0JBQUtDLFFBQUwsQ0FBYztBQUNaM0IsdUJBQUs7QUFETyxpQkFBZDs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBbEQ2QixlQUFLNEIsSTtrQkFBbkI5QyxLIiwiZmlsZSI6ImJvYXJkLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3dlcHktcmVkdXgnXG5pbXBvcnQgKiBhcyBhcGkgZnJvbSAnLi4vYXBpcy9ib2FyZCdcbmltcG9ydCB7IGpmIH0gZnJvbSAnLi4vY29uZmlnJ1xuXG5AY29ubmVjdCh7XG4gIHVzZXIoc3RhdGUpIHtcbiAgICByZXR1cm4gc3RhdGUuY29tbW9uLnVzZXJcbiAgfVxufSlcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJvYXJkIGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgY29uZmlnID0ge1xuICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICfllYblj4vlnIgnXG4gIH1cblxuICBkYXRhID0ge1xuICAgIHRpdGxlOiAnJyxcbiAgICBpbWdzOiBbXSxcbiAgICBjb250ZW50OiAnJyxcbiAgICBjcmVhdGVkQnk6ICcnLFxuICAgIGNyZWF0ZWRBdDogJycsXG4gICAgcmVhZDogJycsXG4gICAgYXV0aG9yX2lkOiAnJ1xuICB9XG4gIG1ldGhvZHMgPSB7XG4gICAgaGFuZGxlTmFtZSAoZSkge1xuICAgICAgd2VweS5uYXZpZ2F0ZVRvKHtcbiAgICAgICAgdXJsOiBgdXNlckluZm8/aWQ9JHt0aGlzLmF1dGhvcl9pZH1gXG4gICAgICB9KVxuICAgIH0sXG4gICAgaW1nUHJldmlldyAoaXRlbXMsIGluZGV4KSB7XG4gICAgICBjb25zdCBpbWdBcnIgPSBpdGVtc1xuICAgICAgY29uc3QgbnVtID0gaW5kZXhcbiAgICAgIHdlcHkucHJldmlld0ltYWdlKHtcbiAgICAgICAgY3VycmVudDogaW1nQXJyW251bV0sXG4gICAgICAgIHVybHM6IGltZ0FycixcbiAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKHJlcykge1xuICAgICAgICAgIGNvbnNvbGUubG9nKHJlcylcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9XG5cbiAgfVxuICBhc3luYyBvbkxvYWQob3B0aW9uKSB7XG4gICAgY29uc3QgeyBpZCB9ID0gb3B0aW9uXG4gICAgY29uc29sZS5sb2coJ3VzZXInLCB0aGlzLnVzZXIpXG4gICAgaWYgKHRoaXMudXNlci51c2VyRGF0YSkge1xuICAgICAgY29uc3QgeyBqZlRva2VuIH0gPSB0aGlzLnVzZXJcbiAgICAgIGF3YWl0IGFwaS5hZGRSZWFkTnVtKGlkLCBqZlRva2VuKVxuICAgICAgY29uc3QgcmVzID0gYXdhaXQgYXBpLmJvYXJkRGV0YWlsKGlkLCBqZlRva2VuKVxuICAgICAgY29uc29sZS5sb2cocmVzKVxuICAgICAgdGhpcy50aXRsZSA9IHJlcy50aXRsZVxuICAgICAgdGhpcy5jb250ZW50ID0gcmVzLnRleHRcbiAgICAgIHRoaXMuY3JlYXRlZEJ5ID0gcmVzLmF1dGhvclxuICAgICAgdGhpcy5jcmVhdGVkQXQgPSByZXMuZGF0ZWxpbmVcbiAgICAgIHRoaXMucmVhZCA9IHJlcy5jbGlja19udW1cbiAgICAgIHRoaXMuYXV0aG9yX2lkID0gcmVzLmF1dGhvcl9pZFxuICAgICAgdGhpcy5pbWdzID0gcmVzLnBpY191cmxzLm1hcCh1cmwgPT4gYCR7amYuYmFzZVNlcnZlcn0ke3VybH1gKVxuICAgICAgdGhpcy4kYXBwbHkoKVxuICAgIH0gZWxzZSB7XG4gICAgICB3ZXB5LnJlTGF1bmNoKHtcbiAgICAgICAgdXJsOiAnL3BhZ2VzL3JlZ2lzdGVyJ1xuICAgICAgfSlcbiAgICB9XG4gIH1cbn1cbiJdfQ==