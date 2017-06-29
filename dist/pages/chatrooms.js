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

var _ramda = require('./../libs/ramda.js');

var _ramda2 = _interopRequireDefault(_ramda);

var _config = require('./../config.js');

var _nim = require('./../utils/nim.js');

var _nim2 = _interopRequireDefault(_nim);

var _common = require('./../actions/common.js');

var _wepyRedux = require('./../npm/wepy-redux/lib/index.js');

var _account = require('./../apis/account.js');

var api = _interopRequireWildcard(_account);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

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
  setUser: _common.setUser,
  setNim: _common.setNim
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

        var _methods, setUser, setNim, _ref3, code, _ref4, data, openid, _ref5, userInfo, password, user, token, Token;

        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _methods = this.methods, setUser = _methods.setUser, setNim = _methods.setNim;

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
                password = _ramda2.default.takeLast(5)(openid);
                user = (0, _extends3.default)({}, userInfo, {
                  accid: openid
                });


                setUser(user);
                // 如果用户尚未在 网易云注册 则先注册
                _context.prev = 18;
                _context.next = 21;
                return _nim2.default.login(openid);

              case 21:
                token = _context.sent;
                _context.next = 24;
                return api.getToken(openid, password);

              case 24:
                Token = _context.sent;

                if (Token) {
                  _context.next = 27;
                  break;
                }

                throw new Error('user not exist');

              case 27:

                setUser((0, _extends3.default)({}, this.user, {
                  jfToken: Token
                }));

                setNim({
                  token: token
                });

                setTimeout(function () {
                  _this2.rooms = mockRooms;
                  _wepy2.default.hideLoading();
                  // 通过 $apply 强制脏检查
                  _this2.$apply();
                }, 2000);
                _context.next = 36;
                break;

              case 32:
                _context.prev = 32;
                _context.t0 = _context['catch'](18);

                console.error('app error', _context.t0);
                _wepy2.default.navigateTo({
                  url: '/pages/register'
                });

              case 36:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this, [[18, 32]]);
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoYXRyb29tcy5qcyJdLCJuYW1lcyI6WyJhcGkiLCJtb2NrUm9vbXMiLCJpZCIsImNvdmVyIiwidGl0bGUiLCJtZW1iZXJzIiwiY29uZmlnIiwiQ2hhdHJvb21zIiwidXNlciIsInN0YXRlIiwiY29tbW9uIiwibmltIiwic2V0VXNlciIsInNldE5pbSIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCJkYXRhIiwicm9vbXMiLCJtZXRob2RzIiwic2hvd0xvYWRpbmciLCJsb2dpbiIsImNvZGUiLCJyZXF1ZXN0IiwidXJsIiwiYXBwSWQiLCJhcHBTZWNyZXRlIiwib3BlbmlkIiwiZ2V0VXNlckluZm8iLCJ1c2VySW5mbyIsInBhc3N3b3JkIiwidGFrZUxhc3QiLCJhY2NpZCIsInRva2VuIiwiZ2V0VG9rZW4iLCJUb2tlbiIsIkVycm9yIiwiamZUb2tlbiIsInNldFRpbWVvdXQiLCJoaWRlTG9hZGluZyIsIiRhcHBseSIsImNvbnNvbGUiLCJlcnJvciIsIm5hdmlnYXRlVG8iLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWlDQTs7OztBQUNBOzs7O0FBRUE7O0FBSUE7Ozs7QUFFQTs7QUFLQTs7QUFJQTs7SUFBWUEsRzs7Ozs7O0FBbERaLElBQU1DLFlBQVksQ0FBQztBQUNqQkMsTUFBSSxDQURhO0FBRWpCQyxTQUFPLHNJQUZVO0FBR2pCQyxTQUFPLFVBSFU7QUFJakJDLFdBQVM7QUFKUSxDQUFELEVBS2Y7QUFDREgsTUFBSSxDQURIO0FBRURDLFNBQU8sc0lBRk47QUFHREMsU0FBTyxXQUhOO0FBSURDLFdBQVM7QUFKUixDQUxlLEVBVWY7QUFDREgsTUFBSSxDQURIO0FBRURDLFNBQU8sc0lBRk47QUFHREMsU0FBTyxXQUhOO0FBSURDLFdBQVM7QUFKUixDQVZlLEVBZWY7QUFDREgsTUFBSSxDQURIO0FBRURDLFNBQU8sc0lBRk47QUFHREMsU0FBTyxXQUhOO0FBSURDLFdBQVM7QUFKUixDQWZlLEVBb0JmO0FBQ0RILE1BQUksQ0FESDtBQUVEQyxTQUFPLHNJQUZOO0FBR0RDLFNBQU8sV0FITjtBQUlEQyxXQUFTO0FBSlIsQ0FwQmUsRUF5QmY7QUFDREgsTUFBSSxDQURIO0FBRURDLFNBQU8sc0lBRk47QUFHREMsU0FBTyxXQUhOO0FBSURDLFdBQVM7QUFKUixDQXpCZSxDQUFsQjs7QUFvREEsSUFBTUMsbUJBQU47O0lBYXFCQyxTLFdBWHBCLHdCQUFRO0FBQ1BDLE1BRE8sZ0JBQ0ZDLEtBREUsRUFDSztBQUNWLFdBQU9BLE1BQU1DLE1BQU4sQ0FBYUYsSUFBcEI7QUFDRCxHQUhNO0FBSVBHLEtBSk8sZUFJSEYsS0FKRyxFQUlJO0FBQ1QsV0FBT0EsTUFBTUMsTUFBTixDQUFhQyxHQUFwQjtBQUNEO0FBTk0sQ0FBUixFQU9FO0FBQ0RDLDBCQURDO0FBRURDO0FBRkMsQ0FQRixDOzs7Ozs7Ozs7Ozs7OztrTkFZQ1AsTSxHQUFTO0FBQ1BRLDhCQUF3QjtBQURqQixLLFFBSVRDLEksR0FBTztBQUNMQyxhQUFPO0FBREYsSzs7Ozs7Ozs7Ozs7Ozs7OzJCQUt1QixLQUFLQyxPLEVBQXpCTCxPLFlBQUFBLE8sRUFBU0MsTSxZQUFBQSxNOztBQUNqQiwrQkFBS0ssV0FBTDs7dUJBQ3VCLGVBQUtDLEtBQUwsRTs7OztBQUFmQyxvQixTQUFBQSxJOzt1QkFDZSxlQUFLQyxPQUFMLENBQWE7QUFDbENDLCtFQUEyRGhCLE9BQU9pQixLQUFsRSxnQkFBa0ZqQixPQUFPa0IsVUFBekYsaUJBQStHSixJQUEvRztBQURrQyxpQkFBYixDOzs7O0FBQWZMLG9CLFNBQUFBLEk7QUFHQVUsc0IsR0FBV1YsSSxDQUFYVSxNOzt1QkFDbUIsZUFBS0MsV0FBTCxFOzs7O0FBQW5CQyx3QixTQUFBQSxRO0FBRUZDLHdCLEdBQVcsZ0JBQUVDLFFBQUYsQ0FBVyxDQUFYLEVBQWNKLE1BQWQsQztBQUVYakIsb0IsOEJBQ0RtQixRO0FBQ0hHLHlCQUFPTDs7OztBQUdUYix3QkFBUUosSUFBUjtBQUNBOzs7dUJBRXNCLGNBQUlXLEtBQUosQ0FBVU0sTUFBVixDOzs7QUFBZE0scUI7O3VCQUNjL0IsSUFBSWdDLFFBQUosQ0FBYVAsTUFBYixFQUFxQkcsUUFBckIsQzs7O0FBQWRLLHFCOztvQkFFREEsSzs7Ozs7c0JBQ0csSUFBSUMsS0FBSixDQUFVLGdCQUFWLEM7Ozs7QUFHUnRCLG1EQUNLLEtBQUtKLElBRFY7QUFFRTJCLDJCQUFTRjtBQUZYOztBQUtBcEIsdUJBQU87QUFDTGtCO0FBREssaUJBQVA7O0FBSUFLLDJCQUFXLFlBQU07QUFDZix5QkFBS3BCLEtBQUwsR0FBYWYsU0FBYjtBQUNBLGlDQUFLb0MsV0FBTDtBQUNBO0FBQ0EseUJBQUtDLE1BQUw7QUFDRCxpQkFMRCxFQUtHLElBTEg7Ozs7Ozs7O0FBT0FDLHdCQUFRQyxLQUFSLENBQWMsV0FBZDtBQUNBLCtCQUFLQyxVQUFMLENBQWdCO0FBQ2RuQix1QkFBSztBQURTLGlCQUFoQjs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBckRpQyxlQUFLb0IsSTtrQkFBdkJuQyxTIiwiZmlsZSI6ImNoYXRyb29tcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuY29uc3QgbW9ja1Jvb21zID0gW3tcbiAgaWQ6IDAsXG4gIGNvdmVyOiAnaHR0cDovL2IuaGlwaG90b3MuYmFpZHUuY29tL2JhaWtlL3clM0QyNjglM0JnJTNEMC9zaWduPTZkMjRhMTRhZjgxZjNhMjk1YWM4ZDJjOGExMWVkYjBjL2U4MjRiODk5YTkwMTRjMDg4Zjc2MjgzMTAyN2IwMjA4N2FmNGY0ZDEuanBnJyxcbiAgdGl0bGU6ICfkuIDotbflk4jnmq7nmoTogYrlpKnlrqQnLFxuICBtZW1iZXJzOiA1MFxufSwge1xuICBpZDogMSxcbiAgY292ZXI6ICdodHRwOi8vYi5oaXBob3Rvcy5iYWlkdS5jb20vYmFpa2UvdyUzRDI2OCUzQmclM0QwL3NpZ249NmQyNGExNGFmODFmM2EyOTVhYzhkMmM4YTExZWRiMGMvZTgyNGI4OTlhOTAxNGMwODhmNzYyODMxMDI3YjAyMDg3YWY0ZjRkMS5qcGcnLFxuICB0aXRsZTogJ+S4gOi1t+WTiOearueahOiBiuWkqeWupDMnLFxuICBtZW1iZXJzOiA1MFxufSwge1xuICBpZDogMixcbiAgY292ZXI6ICdodHRwOi8vYi5oaXBob3Rvcy5iYWlkdS5jb20vYmFpa2UvdyUzRDI2OCUzQmclM0QwL3NpZ249NmQyNGExNGFmODFmM2EyOTVhYzhkMmM4YTExZWRiMGMvZTgyNGI4OTlhOTAxNGMwODhmNzYyODMxMDI3YjAyMDg3YWY0ZjRkMS5qcGcnLFxuICB0aXRsZTogJ+S4gOi1t+WTiOearueahOiBiuWkqeWupDQnLFxuICBtZW1iZXJzOiA1MFxufSwge1xuICBpZDogMyxcbiAgY292ZXI6ICdodHRwOi8vYi5oaXBob3Rvcy5iYWlkdS5jb20vYmFpa2UvdyUzRDI2OCUzQmclM0QwL3NpZ249NmQyNGExNGFmODFmM2EyOTVhYzhkMmM4YTExZWRiMGMvZTgyNGI4OTlhOTAxNGMwODhmNzYyODMxMDI3YjAyMDg3YWY0ZjRkMS5qcGcnLFxuICB0aXRsZTogJ+S4gOi1t+WTiOearueahOiBiuWkqeWupDUnLFxuICBtZW1iZXJzOiA1MFxufSwge1xuICBpZDogNCxcbiAgY292ZXI6ICdodHRwOi8vYi5oaXBob3Rvcy5iYWlkdS5jb20vYmFpa2UvdyUzRDI2OCUzQmclM0QwL3NpZ249NmQyNGExNGFmODFmM2EyOTVhYzhkMmM4YTExZWRiMGMvZTgyNGI4OTlhOTAxNGMwODhmNzYyODMxMDI3YjAyMDg3YWY0ZjRkMS5qcGcnLFxuICB0aXRsZTogJ+S4gOi1t+WTiOearueahOiBiuWkqeWupDYnLFxuICBtZW1iZXJzOiA1MFxufSwge1xuICBpZDogNSxcbiAgY292ZXI6ICdodHRwOi8vYi5oaXBob3Rvcy5iYWlkdS5jb20vYmFpa2UvdyUzRDI2OCUzQmclM0QwL3NpZ249NmQyNGExNGFmODFmM2EyOTVhYzhkMmM4YTExZWRiMGMvZTgyNGI4OTlhOTAxNGMwODhmNzYyODMxMDI3YjAyMDg3YWY0ZjRkMS5qcGcnLFxuICB0aXRsZTogJ+S4gOi1t+WTiOearueahOiBiuWkqeWupDcnLFxuICBtZW1iZXJzOiA1MFxufV1cblxuaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcbmltcG9ydCBSIGZyb20gJy4uL2xpYnMvcmFtZGEnXG5cbmltcG9ydCB7XG4gIHd4XG59IGZyb20gJy4uL2NvbmZpZydcblxuaW1wb3J0IE5JTSBmcm9tICcuLi91dGlscy9uaW0nXG5cbmltcG9ydCB7XG4gIHNldFVzZXIsXG4gIHNldE5pbVxufSBmcm9tICcuLi9hY3Rpb25zL2NvbW1vbidcblxuaW1wb3J0IHtcbiAgY29ubmVjdFxufSBmcm9tICd3ZXB5LXJlZHV4J1xuXG5pbXBvcnQgKiBhcyBhcGkgZnJvbSAnLi4vYXBpcy9hY2NvdW50J1xuXG5jb25zdCBjb25maWcgPSB3eFxuXG5AY29ubmVjdCh7XG4gIHVzZXIoc3RhdGUpIHtcbiAgICByZXR1cm4gc3RhdGUuY29tbW9uLnVzZXJcbiAgfSxcbiAgbmltKHN0YXRlKSB7XG4gICAgcmV0dXJuIHN0YXRlLmNvbW1vbi5uaW1cbiAgfVxufSwge1xuICBzZXRVc2VyLFxuICBzZXROaW1cbn0pXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDaGF0cm9vbXMgZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICBjb25maWcgPSB7XG4gICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+iBiuWkqeWupCdcbiAgfVxuXG4gIGRhdGEgPSB7XG4gICAgcm9vbXM6IFtdXG4gIH1cblxuICBhc3luYyBvbkxvYWQoKSB7XG4gICAgY29uc3QgeyBzZXRVc2VyLCBzZXROaW0gfSA9IHRoaXMubWV0aG9kc1xuICAgIHdlcHkuc2hvd0xvYWRpbmcoKVxuICAgIGNvbnN0IHsgY29kZSB9ID0gYXdhaXQgd2VweS5sb2dpbigpXG4gICAgY29uc3QgeyBkYXRhIH0gPSBhd2FpdCB3ZXB5LnJlcXVlc3Qoe1xuICAgICAgdXJsOiBgaHR0cHM6Ly9hcGkud2VpeGluLnFxLmNvbS9zbnMvanNjb2RlMnNlc3Npb24/YXBwaWQ9JHtjb25maWcuYXBwSWR9JnNlY3JldD0ke2NvbmZpZy5hcHBTZWNyZXRlfSZqc19jb2RlPSR7Y29kZX0mZ3JhbnRfdHlwZT1hdXRob3JpemF0aW9uX2NvZGVgXG4gICAgfSlcbiAgICBjb25zdCB7IG9wZW5pZCB9ID0gZGF0YVxuICAgIGNvbnN0IHsgdXNlckluZm8gfSA9IGF3YWl0IHdlcHkuZ2V0VXNlckluZm8oKVxuXG4gICAgY29uc3QgcGFzc3dvcmQgPSBSLnRha2VMYXN0KDUpKG9wZW5pZClcblxuICAgIGNvbnN0IHVzZXIgPSB7XG4gICAgICAuLi51c2VySW5mbyxcbiAgICAgIGFjY2lkOiBvcGVuaWRcbiAgICB9XG5cbiAgICBzZXRVc2VyKHVzZXIpXG4gICAgLy8g5aaC5p6c55So5oi35bCa5pyq5ZyoIOe9keaYk+S6keazqOWGjCDliJnlhYjms6jlhoxcbiAgICB0cnkge1xuICAgICAgY29uc3QgdG9rZW4gPSBhd2FpdCBOSU0ubG9naW4ob3BlbmlkKVxuICAgICAgY29uc3QgVG9rZW4gPSBhd2FpdCBhcGkuZ2V0VG9rZW4ob3BlbmlkLCBwYXNzd29yZClcblxuICAgICAgaWYgKCFUb2tlbikge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ3VzZXIgbm90IGV4aXN0JylcbiAgICAgIH1cblxuICAgICAgc2V0VXNlcih7XG4gICAgICAgIC4uLnRoaXMudXNlcixcbiAgICAgICAgamZUb2tlbjogVG9rZW5cbiAgICAgIH0pXG5cbiAgICAgIHNldE5pbSh7XG4gICAgICAgIHRva2VuXG4gICAgICB9KVxuXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgdGhpcy5yb29tcyA9IG1vY2tSb29tc1xuICAgICAgICB3ZXB5LmhpZGVMb2FkaW5nKClcbiAgICAgICAgLy8g6YCa6L+HICRhcHBseSDlvLrliLbohI/mo4Dmn6VcbiAgICAgICAgdGhpcy4kYXBwbHkoKVxuICAgICAgfSwgMjAwMClcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBjb25zb2xlLmVycm9yKCdhcHAgZXJyb3InLCBlKVxuICAgICAgd2VweS5uYXZpZ2F0ZVRvKHtcbiAgICAgICAgdXJsOiAnL3BhZ2VzL3JlZ2lzdGVyJ1xuICAgICAgfSlcbiAgICB9XG4gIH1cbn1cbiJdfQ==