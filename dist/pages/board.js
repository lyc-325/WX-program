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
      navigationBarTitleText: '留言板'
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
                this.createdBy = res.author.name;
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJvYXJkLmpzIl0sIm5hbWVzIjpbImFwaSIsIkJvYXJkIiwidXNlciIsInN0YXRlIiwiY29tbW9uIiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsImRhdGEiLCJ0aXRsZSIsImltZ3MiLCJjb250ZW50IiwiY3JlYXRlZEJ5IiwiY3JlYXRlZEF0IiwicmVhZCIsImF1dGhvcl9pZCIsIm1ldGhvZHMiLCJoYW5kbGVOYW1lIiwiZSIsIm5hdmlnYXRlVG8iLCJ1cmwiLCJvcHRpb24iLCJpZCIsImNvbnNvbGUiLCJsb2ciLCJ1c2VyRGF0YSIsImpmVG9rZW4iLCJhZGRSZWFkTnVtIiwiYm9hcmREZXRhaWwiLCJyZXMiLCJ0ZXh0IiwiYXV0aG9yIiwibmFtZSIsImRhdGVsaW5lIiwiY2xpY2tfbnVtIiwicGljX3VybHMiLCJtYXAiLCJiYXNlU2VydmVyIiwiJGFwcGx5IiwicmVMYXVuY2giLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7Ozs7QUFDQTs7QUFDQTs7SUFBWUEsRzs7QUFDWjs7Ozs7O0lBT3FCQyxLLFdBTHBCLHdCQUFRO0FBQ1BDLE1BRE8sZ0JBQ0ZDLEtBREUsRUFDSztBQUNWLFdBQU9BLE1BQU1DLE1BQU4sQ0FBYUYsSUFBcEI7QUFDRDtBQUhNLENBQVIsQzs7Ozs7Ozs7Ozs7Ozs7ME1BTUNHLE0sR0FBUztBQUNQQyw4QkFBd0I7QUFEakIsSyxRQUlUQyxJLEdBQU87QUFDTEMsYUFBTyxFQURGO0FBRUxDLFlBQU0sRUFGRDtBQUdMQyxlQUFTLEVBSEo7QUFJTEMsaUJBQVcsRUFKTjtBQUtMQyxpQkFBVyxFQUxOO0FBTUxDLFlBQU0sRUFORDtBQU9MQyxpQkFBVztBQVBOLEssUUFTUEMsTyxHQUFVO0FBQ1JDLGdCQURRLHNCQUNJQyxDQURKLEVBQ087QUFDYix1QkFBS0MsVUFBTCxDQUFnQjtBQUNkQyxnQ0FBb0IsS0FBS0w7QUFEWCxTQUFoQjtBQUdEO0FBTE8sSzs7Ozs7OzhGQU9HTSxNOzs7Ozs7QUFDSEMsa0IsR0FBT0QsTSxDQUFQQyxFOztBQUNSQyx3QkFBUUMsR0FBUixDQUFZLE1BQVosRUFBb0IsS0FBS3JCLElBQXpCOztxQkFDSSxLQUFLQSxJQUFMLENBQVVzQixROzs7OztBQUNKQyx1QixHQUFZLEtBQUt2QixJLENBQWpCdUIsTzs7dUJBQ0Z6QixJQUFJMEIsVUFBSixDQUFlTCxFQUFmLEVBQW1CSSxPQUFuQixDOzs7O3VCQUNZekIsSUFBSTJCLFdBQUosQ0FBZ0JOLEVBQWhCLEVBQW9CSSxPQUFwQixDOzs7QUFBWkcsbUI7O0FBQ05OLHdCQUFRQyxHQUFSLENBQVlLLEdBQVo7QUFDQSxxQkFBS3BCLEtBQUwsR0FBYW9CLElBQUlwQixLQUFqQjtBQUNBLHFCQUFLRSxPQUFMLEdBQWVrQixJQUFJQyxJQUFuQjtBQUNBLHFCQUFLbEIsU0FBTCxHQUFpQmlCLElBQUlFLE1BQUosQ0FBV0MsSUFBNUI7QUFDQSxxQkFBS25CLFNBQUwsR0FBaUJnQixJQUFJSSxRQUFyQjtBQUNBLHFCQUFLbkIsSUFBTCxHQUFZZSxJQUFJSyxTQUFoQjtBQUNBLHFCQUFLbkIsU0FBTCxHQUFpQmMsSUFBSWQsU0FBckI7QUFDQSxxQkFBS0wsSUFBTCxHQUFZbUIsSUFBSU0sUUFBSixDQUFhQyxHQUFiLENBQWlCO0FBQUEsOEJBQVUsV0FBR0MsVUFBYixHQUEwQmpCLEdBQTFCO0FBQUEsaUJBQWpCLENBQVo7QUFDQSxxQkFBS2tCLE1BQUw7Ozs7O0FBRUEsK0JBQUtDLFFBQUwsQ0FBYztBQUNabkIsdUJBQUs7QUFETyxpQkFBZDs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBdEM2QixlQUFLb0IsSTtrQkFBbkJ0QyxLIiwiZmlsZSI6ImJvYXJkLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3dlcHktcmVkdXgnXG5pbXBvcnQgKiBhcyBhcGkgZnJvbSAnLi4vYXBpcy9ib2FyZCdcbmltcG9ydCB7IGpmIH0gZnJvbSAnLi4vY29uZmlnJ1xuXG5AY29ubmVjdCh7XG4gIHVzZXIoc3RhdGUpIHtcbiAgICByZXR1cm4gc3RhdGUuY29tbW9uLnVzZXJcbiAgfVxufSlcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJvYXJkIGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgY29uZmlnID0ge1xuICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICfnlZnoqIDmnb8nXG4gIH1cblxuICBkYXRhID0ge1xuICAgIHRpdGxlOiAnJyxcbiAgICBpbWdzOiBbXSxcbiAgICBjb250ZW50OiAnJyxcbiAgICBjcmVhdGVkQnk6ICcnLFxuICAgIGNyZWF0ZWRBdDogJycsXG4gICAgcmVhZDogJycsXG4gICAgYXV0aG9yX2lkOiAnJ1xuICB9XG4gIG1ldGhvZHMgPSB7XG4gICAgaGFuZGxlTmFtZSAoZSkge1xuICAgICAgd2VweS5uYXZpZ2F0ZVRvKHtcbiAgICAgICAgdXJsOiBgdXNlckluZm8/aWQ9JHt0aGlzLmF1dGhvcl9pZH1gXG4gICAgICB9KVxuICAgIH1cbiAgfVxuICBhc3luYyBvbkxvYWQob3B0aW9uKSB7XG4gICAgY29uc3QgeyBpZCB9ID0gb3B0aW9uXG4gICAgY29uc29sZS5sb2coJ3VzZXInLCB0aGlzLnVzZXIpXG4gICAgaWYgKHRoaXMudXNlci51c2VyRGF0YSkge1xuICAgICAgY29uc3QgeyBqZlRva2VuIH0gPSB0aGlzLnVzZXJcbiAgICAgIGF3YWl0IGFwaS5hZGRSZWFkTnVtKGlkLCBqZlRva2VuKVxuICAgICAgY29uc3QgcmVzID0gYXdhaXQgYXBpLmJvYXJkRGV0YWlsKGlkLCBqZlRva2VuKVxuICAgICAgY29uc29sZS5sb2cocmVzKVxuICAgICAgdGhpcy50aXRsZSA9IHJlcy50aXRsZVxuICAgICAgdGhpcy5jb250ZW50ID0gcmVzLnRleHRcbiAgICAgIHRoaXMuY3JlYXRlZEJ5ID0gcmVzLmF1dGhvci5uYW1lXG4gICAgICB0aGlzLmNyZWF0ZWRBdCA9IHJlcy5kYXRlbGluZVxuICAgICAgdGhpcy5yZWFkID0gcmVzLmNsaWNrX251bVxuICAgICAgdGhpcy5hdXRob3JfaWQgPSByZXMuYXV0aG9yX2lkXG4gICAgICB0aGlzLmltZ3MgPSByZXMucGljX3VybHMubWFwKHVybCA9PiBgJHtqZi5iYXNlU2VydmVyfSR7dXJsfWApXG4gICAgICB0aGlzLiRhcHBseSgpXG4gICAgfSBlbHNlIHtcbiAgICAgIHdlcHkucmVMYXVuY2goe1xuICAgICAgICB1cmw6ICcvcGFnZXMvcmVnaXN0ZXInXG4gICAgICB9KVxuICAgIH1cbiAgfVxufVxuIl19