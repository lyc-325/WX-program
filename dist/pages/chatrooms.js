'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _regenerator = require('./../npm/babel-runtime/regenerator/index.js');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _extends2 = require('./../npm/babel-runtime/helpers/extends.js');

var _extends3 = _interopRequireDefault(_extends2);

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

var _config = require('./../config.js');

var _nim = require('./../utils/nim.js');

var _nim2 = _interopRequireDefault(_nim);

var _common = require('./../actions/common.js');

var _wepyRedux = require('./../npm/wepy-redux/lib/index.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mockRooms = [{
  id: 0,
  cover: 'http://b.hiphotos.baidu.com/baike/w%3D268%3Bg%3D0/sign=6d24a14af81f3a295ac8d2c8a11edb0c/e824b899a9014c088f762831027b02087af4f4d1.jpg',
  title: '一起哈皮的聊天室',
  members: 50
}, {
  id: 1,
  cover: 'http://b.hiphotos.baidu.com/baike/w%3D268%3Bg%3D0/sign=6d24a14af81f3a295ac8d2c8a11edb0c/e824b899a9014c088f762831027b02087af4f4d1.jpg',
  title: '一起哈皮的聊天室3',
  members: 50
}, {
  id: 2,
  cover: 'http://b.hiphotos.baidu.com/baike/w%3D268%3Bg%3D0/sign=6d24a14af81f3a295ac8d2c8a11edb0c/e824b899a9014c088f762831027b02087af4f4d1.jpg',
  title: '一起哈皮的聊天室4',
  members: 50
}, {
  id: 3,
  cover: 'http://b.hiphotos.baidu.com/baike/w%3D268%3Bg%3D0/sign=6d24a14af81f3a295ac8d2c8a11edb0c/e824b899a9014c088f762831027b02087af4f4d1.jpg',
  title: '一起哈皮的聊天室5',
  members: 50
}, {
  id: 4,
  cover: 'http://b.hiphotos.baidu.com/baike/w%3D268%3Bg%3D0/sign=6d24a14af81f3a295ac8d2c8a11edb0c/e824b899a9014c088f762831027b02087af4f4d1.jpg',
  title: '一起哈皮的聊天室6',
  members: 50
}, {
  id: 5,
  cover: 'http://b.hiphotos.baidu.com/baike/w%3D268%3Bg%3D0/sign=6d24a14af81f3a295ac8d2c8a11edb0c/e824b899a9014c088f762831027b02087af4f4d1.jpg',
  title: '一起哈皮的聊天室7',
  members: 50
}];

var config = _config.wx;

var Chatrooms = (_dec = (0, _wepyRedux.connect)({
  user: function user(state) {
    return state.common.user;
  },
  nim: function nim(state) {
    return state.common.nim;
  }
}, {
  initUser: _common.initUser,
  initNim: _common.initNim
}), _dec(_class = function (_wepy$page) {
  (0, _inherits3.default)(Chatrooms, _wepy$page);

  function Chatrooms() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, Chatrooms);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Chatrooms.__proto__ || (0, _getPrototypeOf2.default)(Chatrooms)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: '聊天室'
    }, _this.data = {
      rooms: []
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(Chatrooms, [{
    key: 'onLoad',
    value: function () {
      var _ref2 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee() {
        var _this2 = this;

        var _methods, initUser, initNim, _ref3, code, _ref4, data, openid, _ref5, userInfo, user, token, nim;

        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _methods = this.methods, initUser = _methods.initUser, initNim = _methods.initNim;

                _wepy2.default.showLoading();
                _context.next = 4;
                return _wepy2.default.login();

              case 4:
                _ref3 = _context.sent;
                code = _ref3.code;
                _context.next = 8;
                return _wepy2.default.request({
                  url: 'https://api.weixin.qq.com/sns/jscode2session?appid=' + config.appId + '&secret=' + config.appSecrete + '&js_code=' + code + '&grant_type=authorization_code'
                });

              case 8:
                _ref4 = _context.sent;
                data = _ref4.data;
                openid = data.openid;
                _context.next = 13;
                return _wepy2.default.getUserInfo();

              case 13:
                _ref5 = _context.sent;
                userInfo = _ref5.userInfo;
                user = (0, _extends3.default)({}, userInfo, {
                  openid: openid
                });

                initUser(user);
                _context.prev = 17;
                _context.next = 20;
                return _nim2.default.login(openid);

              case 20:
                token = _context.sent;

                initNim(token);
                nim = _nim2.default.getInstance({
                  account: openid,
                  token: token
                });

                setTimeout(function () {
                  _this2.rooms = mockRooms;
                  _wepy2.default.hideLoading();
                  // 通过 $apply 强制脏检查
                  _this2.$apply();
                }, 2000);
                _context.next = 30;
                break;

              case 26:
                _context.prev = 26;
                _context.t0 = _context['catch'](17);

                console.error('app error', _context.t0);
                _wepy2.default.navigateTo({
                  url: '/pages/register'
                });

              case 30:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this, [[17, 26]]);
      }));

      function onLoad() {
        return _ref2.apply(this, arguments);
      }

      return onLoad;
    }()
  }]);
  return Chatrooms;
}(_wepy2.default.page)) || _class);

Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Chatrooms , 'pages/chatrooms'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoYXRyb29tcy5qcyJdLCJuYW1lcyI6WyJtb2NrUm9vbXMiLCJpZCIsImNvdmVyIiwidGl0bGUiLCJtZW1iZXJzIiwiY29uZmlnIiwiQ2hhdHJvb21zIiwidXNlciIsInN0YXRlIiwiY29tbW9uIiwibmltIiwiaW5pdFVzZXIiLCJpbml0TmltIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsImRhdGEiLCJyb29tcyIsIm1ldGhvZHMiLCJzaG93TG9hZGluZyIsImxvZ2luIiwiY29kZSIsInJlcXVlc3QiLCJ1cmwiLCJhcHBJZCIsImFwcFNlY3JldGUiLCJvcGVuaWQiLCJnZXRVc2VySW5mbyIsInVzZXJJbmZvIiwidG9rZW4iLCJnZXRJbnN0YW5jZSIsImFjY291bnQiLCJzZXRUaW1lb3V0IiwiaGlkZUxvYWRpbmciLCIkYXBwbHkiLCJjb25zb2xlIiwiZXJyb3IiLCJuYXZpZ2F0ZVRvIiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFpQ0E7Ozs7QUFDQTs7QUFHQTs7OztBQUNBOztBQUtBOzs7O0FBMUNBLElBQU1BLFlBQVksQ0FBQztBQUNqQkMsTUFBSSxDQURhO0FBRWpCQyxTQUFPLHNJQUZVO0FBR2pCQyxTQUFPLFVBSFU7QUFJakJDLFdBQVM7QUFKUSxDQUFELEVBS2Y7QUFDREgsTUFBSSxDQURIO0FBRURDLFNBQU8sc0lBRk47QUFHREMsU0FBTyxXQUhOO0FBSURDLFdBQVM7QUFKUixDQUxlLEVBVWY7QUFDREgsTUFBSSxDQURIO0FBRURDLFNBQU8sc0lBRk47QUFHREMsU0FBTyxXQUhOO0FBSURDLFdBQVM7QUFKUixDQVZlLEVBZWY7QUFDREgsTUFBSSxDQURIO0FBRURDLFNBQU8sc0lBRk47QUFHREMsU0FBTyxXQUhOO0FBSURDLFdBQVM7QUFKUixDQWZlLEVBb0JmO0FBQ0RILE1BQUksQ0FESDtBQUVEQyxTQUFPLHNJQUZOO0FBR0RDLFNBQU8sV0FITjtBQUlEQyxXQUFTO0FBSlIsQ0FwQmUsRUF5QmY7QUFDREgsTUFBSSxDQURIO0FBRURDLFNBQU8sc0lBRk47QUFHREMsU0FBTyxXQUhOO0FBSURDLFdBQVM7QUFKUixDQXpCZSxDQUFsQjs7QUE4Q0EsSUFBTUMsbUJBQU47O0lBYXFCQyxTLFdBWHBCLHdCQUFRO0FBQ1BDLE1BRE8sZ0JBQ0ZDLEtBREUsRUFDSztBQUNWLFdBQU9BLE1BQU1DLE1BQU4sQ0FBYUYsSUFBcEI7QUFDRCxHQUhNO0FBSVBHLEtBSk8sZUFJSEYsS0FKRyxFQUlJO0FBQ1QsV0FBT0EsTUFBTUMsTUFBTixDQUFhQyxHQUFwQjtBQUNEO0FBTk0sQ0FBUixFQU9FO0FBQ0RDLDRCQURDO0FBRURDO0FBRkMsQ0FQRixDOzs7Ozs7Ozs7Ozs7OztrTkFZQ1AsTSxHQUFTO0FBQ1BRLDhCQUF3QjtBQURqQixLLFFBSVRDLEksR0FBTztBQUNMQyxhQUFPO0FBREYsSzs7Ozs7Ozs7Ozs7Ozs7OzJCQUt5QixLQUFLQyxPLEVBQTNCTCxRLFlBQUFBLFEsRUFBVUMsTyxZQUFBQSxPOztBQUNsQiwrQkFBS0ssV0FBTDs7dUJBQ3VCLGVBQUtDLEtBQUwsRTs7OztBQUFmQyxvQixTQUFBQSxJOzt1QkFDZSxlQUFLQyxPQUFMLENBQWE7QUFDbENDLCtFQUEyRGhCLE9BQU9pQixLQUFsRSxnQkFBa0ZqQixPQUFPa0IsVUFBekYsaUJBQStHSixJQUEvRztBQURrQyxpQkFBYixDOzs7O0FBQWZMLG9CLFNBQUFBLEk7QUFHQVUsc0IsR0FBV1YsSSxDQUFYVSxNOzt1QkFDbUIsZUFBS0MsV0FBTCxFOzs7O0FBQW5CQyx3QixTQUFBQSxRO0FBQ0ZuQixvQiw4QkFDRG1CLFE7QUFDSEY7OztBQUVGYix5QkFBU0osSUFBVDs7O3VCQUVzQixjQUFJVyxLQUFKLENBQVVNLE1BQVYsQzs7O0FBQWRHLHFCOztBQUNOZix3QkFBUWUsS0FBUjtBQUNNakIsbUIsR0FBTSxjQUFJa0IsV0FBSixDQUFnQjtBQUMxQkMsMkJBQVNMLE1BRGlCO0FBRTFCRztBQUYwQixpQkFBaEIsQzs7QUFJWkcsMkJBQVcsWUFBTTtBQUNmLHlCQUFLZixLQUFMLEdBQWFmLFNBQWI7QUFDQSxpQ0FBSytCLFdBQUw7QUFDQTtBQUNBLHlCQUFLQyxNQUFMO0FBQ0QsaUJBTEQsRUFLRyxJQUxIOzs7Ozs7OztBQU9BQyx3QkFBUUMsS0FBUixDQUFjLFdBQWQ7QUFDQSwrQkFBS0MsVUFBTCxDQUFnQjtBQUNkZCx1QkFBSztBQURTLGlCQUFoQjs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBdENpQyxlQUFLZSxJO2tCQUF2QjlCLFMiLCJmaWxlIjoiY2hhdHJvb21zLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5jb25zdCBtb2NrUm9vbXMgPSBbe1xuICBpZDogMCxcbiAgY292ZXI6ICdodHRwOi8vYi5oaXBob3Rvcy5iYWlkdS5jb20vYmFpa2UvdyUzRDI2OCUzQmclM0QwL3NpZ249NmQyNGExNGFmODFmM2EyOTVhYzhkMmM4YTExZWRiMGMvZTgyNGI4OTlhOTAxNGMwODhmNzYyODMxMDI3YjAyMDg3YWY0ZjRkMS5qcGcnLFxuICB0aXRsZTogJ+S4gOi1t+WTiOearueahOiBiuWkqeWupCcsXG4gIG1lbWJlcnM6IDUwXG59LCB7XG4gIGlkOiAxLFxuICBjb3ZlcjogJ2h0dHA6Ly9iLmhpcGhvdG9zLmJhaWR1LmNvbS9iYWlrZS93JTNEMjY4JTNCZyUzRDAvc2lnbj02ZDI0YTE0YWY4MWYzYTI5NWFjOGQyYzhhMTFlZGIwYy9lODI0Yjg5OWE5MDE0YzA4OGY3NjI4MzEwMjdiMDIwODdhZjRmNGQxLmpwZycsXG4gIHRpdGxlOiAn5LiA6LW35ZOI55qu55qE6IGK5aSp5a6kMycsXG4gIG1lbWJlcnM6IDUwXG59LCB7XG4gIGlkOiAyLFxuICBjb3ZlcjogJ2h0dHA6Ly9iLmhpcGhvdG9zLmJhaWR1LmNvbS9iYWlrZS93JTNEMjY4JTNCZyUzRDAvc2lnbj02ZDI0YTE0YWY4MWYzYTI5NWFjOGQyYzhhMTFlZGIwYy9lODI0Yjg5OWE5MDE0YzA4OGY3NjI4MzEwMjdiMDIwODdhZjRmNGQxLmpwZycsXG4gIHRpdGxlOiAn5LiA6LW35ZOI55qu55qE6IGK5aSp5a6kNCcsXG4gIG1lbWJlcnM6IDUwXG59LCB7XG4gIGlkOiAzLFxuICBjb3ZlcjogJ2h0dHA6Ly9iLmhpcGhvdG9zLmJhaWR1LmNvbS9iYWlrZS93JTNEMjY4JTNCZyUzRDAvc2lnbj02ZDI0YTE0YWY4MWYzYTI5NWFjOGQyYzhhMTFlZGIwYy9lODI0Yjg5OWE5MDE0YzA4OGY3NjI4MzEwMjdiMDIwODdhZjRmNGQxLmpwZycsXG4gIHRpdGxlOiAn5LiA6LW35ZOI55qu55qE6IGK5aSp5a6kNScsXG4gIG1lbWJlcnM6IDUwXG59LCB7XG4gIGlkOiA0LFxuICBjb3ZlcjogJ2h0dHA6Ly9iLmhpcGhvdG9zLmJhaWR1LmNvbS9iYWlrZS93JTNEMjY4JTNCZyUzRDAvc2lnbj02ZDI0YTE0YWY4MWYzYTI5NWFjOGQyYzhhMTFlZGIwYy9lODI0Yjg5OWE5MDE0YzA4OGY3NjI4MzEwMjdiMDIwODdhZjRmNGQxLmpwZycsXG4gIHRpdGxlOiAn5LiA6LW35ZOI55qu55qE6IGK5aSp5a6kNicsXG4gIG1lbWJlcnM6IDUwXG59LCB7XG4gIGlkOiA1LFxuICBjb3ZlcjogJ2h0dHA6Ly9iLmhpcGhvdG9zLmJhaWR1LmNvbS9iYWlrZS93JTNEMjY4JTNCZyUzRDAvc2lnbj02ZDI0YTE0YWY4MWYzYTI5NWFjOGQyYzhhMTFlZGIwYy9lODI0Yjg5OWE5MDE0YzA4OGY3NjI4MzEwMjdiMDIwODdhZjRmNGQxLmpwZycsXG4gIHRpdGxlOiAn5LiA6LW35ZOI55qu55qE6IGK5aSp5a6kNycsXG4gIG1lbWJlcnM6IDUwXG59XVxuXG5pbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuaW1wb3J0IHtcbiAgd3hcbn0gZnJvbSAnLi4vY29uZmlnJ1xuaW1wb3J0IE5JTSBmcm9tICcuLi91dGlscy9uaW0nXG5pbXBvcnQge1xuICBpbml0VXNlcixcbiAgaW5pdE5pbVxufSBmcm9tICcuLi9hY3Rpb25zL2NvbW1vbidcblxuaW1wb3J0IHtcbiAgY29ubmVjdFxufSBmcm9tICd3ZXB5LXJlZHV4J1xuXG5jb25zdCBjb25maWcgPSB3eFxuXG5AY29ubmVjdCh7XG4gIHVzZXIoc3RhdGUpIHtcbiAgICByZXR1cm4gc3RhdGUuY29tbW9uLnVzZXJcbiAgfSxcbiAgbmltKHN0YXRlKSB7XG4gICAgcmV0dXJuIHN0YXRlLmNvbW1vbi5uaW1cbiAgfVxufSwge1xuICBpbml0VXNlcixcbiAgaW5pdE5pbVxufSlcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENoYXRyb29tcyBleHRlbmRzIHdlcHkucGFnZSB7XG4gIGNvbmZpZyA9IHtcbiAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn6IGK5aSp5a6kJ1xuICB9XG5cbiAgZGF0YSA9IHtcbiAgICByb29tczogW11cbiAgfVxuXG4gIGFzeW5jIG9uTG9hZCgpIHtcbiAgICBjb25zdCB7IGluaXRVc2VyLCBpbml0TmltIH0gPSB0aGlzLm1ldGhvZHNcbiAgICB3ZXB5LnNob3dMb2FkaW5nKClcbiAgICBjb25zdCB7IGNvZGUgfSA9IGF3YWl0IHdlcHkubG9naW4oKVxuICAgIGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgd2VweS5yZXF1ZXN0KHtcbiAgICAgIHVybDogYGh0dHBzOi8vYXBpLndlaXhpbi5xcS5jb20vc25zL2pzY29kZTJzZXNzaW9uP2FwcGlkPSR7Y29uZmlnLmFwcElkfSZzZWNyZXQ9JHtjb25maWcuYXBwU2VjcmV0ZX0manNfY29kZT0ke2NvZGV9JmdyYW50X3R5cGU9YXV0aG9yaXphdGlvbl9jb2RlYFxuICAgIH0pXG4gICAgY29uc3QgeyBvcGVuaWQgfSA9IGRhdGFcbiAgICBjb25zdCB7IHVzZXJJbmZvIH0gPSBhd2FpdCB3ZXB5LmdldFVzZXJJbmZvKClcbiAgICBjb25zdCB1c2VyID0ge1xuICAgICAgLi4udXNlckluZm8sXG4gICAgICBvcGVuaWRcbiAgICB9XG4gICAgaW5pdFVzZXIodXNlcilcbiAgICB0cnkge1xuICAgICAgY29uc3QgdG9rZW4gPSBhd2FpdCBOSU0ubG9naW4ob3BlbmlkKVxuICAgICAgaW5pdE5pbSh0b2tlbilcbiAgICAgIGNvbnN0IG5pbSA9IE5JTS5nZXRJbnN0YW5jZSh7XG4gICAgICAgIGFjY291bnQ6IG9wZW5pZCxcbiAgICAgICAgdG9rZW5cbiAgICAgIH0pXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgdGhpcy5yb29tcyA9IG1vY2tSb29tc1xuICAgICAgICB3ZXB5LmhpZGVMb2FkaW5nKClcbiAgICAgICAgLy8g6YCa6L+HICRhcHBseSDlvLrliLbohI/mo4Dmn6VcbiAgICAgICAgdGhpcy4kYXBwbHkoKVxuICAgICAgfSwgMjAwMClcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBjb25zb2xlLmVycm9yKCdhcHAgZXJyb3InLCBlKVxuICAgICAgd2VweS5uYXZpZ2F0ZVRvKHtcbiAgICAgICAgdXJsOiAnL3BhZ2VzL3JlZ2lzdGVyJ1xuICAgICAgfSlcbiAgICB9XG4gIH1cbn1cbiJdfQ==