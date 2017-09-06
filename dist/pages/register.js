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

var _wepyRedux = require('./../npm/wepy-redux/lib/index.js');

var _ramda = require('./../libs/ramda.js');

var _ramda2 = _interopRequireDefault(_ramda);

var _nim = require('./../utils/nim.js');

var _nim2 = _interopRequireDefault(_nim);

var _account = require('./../apis/account.js');

var api = _interopRequireWildcard(_account);

var _common = require('./../actions/common.js');

var _validator = require('./../utils/validator.js');

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// 校验规则配置
var rules = {
  company: {
    prompt: '公司名称在1-20字以内',
    validate: (0, _validator.validateLength)(1, 20)
  },
  name: {
    prompt: '昵称在1-10字以内',
    validate: (0, _validator.validateLength)(1, 10)
  },
  mobile: {
    prompt: '电话号码不合法',
    validate: _validator.validatePhone
  },
  token: {
    prompt: '职位名称在1-20字以内',
    validate: (0, _validator.validateLength)(1, 20)
  },
  ex: {
    prompt: '主要经营在1-20字以内',
    validate: (0, _validator.validateLength)(1, 20)
  }
};

var validate = (0, _validator.validator)(rules);

var Register = (_dec = (0, _wepyRedux.connect)({
  user: function user(state) {
    return state.common.user;
  }
}, {
  setUser: _common.setUser
}), _dec(_class = function (_wepy$page) {
  (0, _inherits3.default)(Register, _wepy$page);

  function Register() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, Register);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Register.__proto__ || (0, _getPrototypeOf2.default)(Register)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: '注册'
    }, _this.data = {
      requesting: false,
      formError: null,
      formErrorKey: null,
      showOpenId: '',
      userData: {}
    }, _this.methods = {
      bindFocus: function bindFocus(e) {
        this.formError = null;
        this.formErrorKey = null;
      },

      //    async showParsing(e) {
      //      var sessionKey = await wepy.getStorage({
      //        key: 'jfSessionKey',
      //        success: function(res) {
      //          return res.data
      //        }
      //      })
      //      var shareInfo = await wepy.getStorage({
      //        key: 'jfShareInfo',
      //        success: function(res) {
      //          return res.data
      //        }
      //      })
      //      const shareParse = await api.shareParsing(sessionKey, shareInfo.data)
      //      var shareToken = await wepy.getStorage({
      //        key: 'jfToken',
      //        success: function(res) {
      //          return res.data
      //        }
      //      })
      //      console.log(shareParse)
      //      var shareOpenid = await api.checkOpenGid(shareToken, shareParse)
      //      console.log(shareOpenid)
      //    },
      submit: function submit(e) {
        var _this2 = this;

        return (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee() {
          var errorKey, _e$detail$value, name, company, token, ex, mobile, setUser, _user, accid, avatarUrl, infos, _token, resp, _resp, password, user, Token;

          return _regenerator2.default.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  errorKey = validate(e.detail.value);

                  console.log(e.detail.value);
                  _e$detail$value = e.detail.value, name = _e$detail$value.name, company = _e$detail$value.company, token = _e$detail$value.token, ex = _e$detail$value.ex, mobile = _e$detail$value.mobile;
                  setUser = _this2.methods.setUser;

                  if (errorKey) {
                    _context.next = 38;
                    break;
                  }

                  _this2.requesting = true;

                  _user = _this2.user, accid = _user.accid, avatarUrl = _user.avatarUrl;
                  infos = {
                    name: name,
                    company: company,
                    token: _token,
                    mobile: mobile,
                    ex: ex
                  };
                  _token = void 0;
                  _context.prev = 9;
                  _context.next = 12;
                  return _nim2.default.create(accid, name, avatarUrl, infos);

                case 12:
                  resp = _context.sent;

                  _token = resp.token;
                  _context.next = 23;
                  break;

                case 16:
                  _context.prev = 16;
                  _context.t0 = _context['catch'](9);

                  if (!(_context.t0.code === 414)) {
                    _context.next = 23;
                    break;
                  }

                  _context.next = 21;
                  return _nim2.default.login(accid);

                case 21:
                  _resp = _context.sent;

                  _token = _resp.token;

                case 23:
                  _context.prev = 23;
                  password = _ramda2.default.takeLast(5)(accid);
                  _context.next = 27;
                  return api.createUser(accid, password, (0, _extends3.default)({}, infos, {
                    icon: avatarUrl
                  }));

                case 27:
                  user = _context.sent;
                  Token = user.Token;


                  setUser((0, _extends3.default)({}, _this2.user, user, {
                    jfToken: Token
                  }));

                  //          setNim({
                  //            token
                  //          })
                  //          var backAccid = await wepy.getStorage({
                  //            key: 'backAccid',
                  //            success: function(res) {
                  //              return res
                  //            }
                  //          })
                  // 回调 加积分
                  //          if (backAccid.data !== '123') {
                  //            await api.checkOpenGid(Token, backAccid.data)
                  //          }
                  _wepy2.default.reLaunch({
                    url: '/pages/chatrooms'
                  });
                  _context.next = 36;
                  break;

                case 33:
                  _context.prev = 33;
                  _context.t1 = _context['catch'](23);

                  console.error('create user', _context.t1);

                case 36:
                  _context.next = 41;
                  break;

                case 38:
                  _this2.formError = rules[errorKey].prompt;
                  _this2.formErrorKey = errorKey;
                  _this2.requesting = false;

                case 41:
                case 'end':
                  return _context.stop();
              }
            }
          }, _callee, _this2, [[9, 16], [23, 33]]);
        }))();
      }
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(Register, [{
    key: 'onLoad',
    value: function () {
      var _ref2 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee2() {
        var _ref3, userInfo;

        return _regenerator2.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return _wepy2.default.getUserInfo();

              case 2:
                _ref3 = _context2.sent;
                userInfo = _ref3.userInfo;

                this.userData = userInfo;
                //    var backAccid = await wepy.getStorage({
                //      key: 'backAccid',
                //      success: function(res) {
                //        return res
                //      }
                //    })
                //    console.log('加积分', backAccid)
                this.$apply();

              case 6:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function onLoad() {
        return _ref2.apply(this, arguments);
      }

      return onLoad;
    }()
  }]);
  return Register;
}(_wepy2.default.page)) || _class);

Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Register , 'pages/register'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlZ2lzdGVyLmpzIl0sIm5hbWVzIjpbImFwaSIsInJ1bGVzIiwiY29tcGFueSIsInByb21wdCIsInZhbGlkYXRlIiwibmFtZSIsIm1vYmlsZSIsInRva2VuIiwiZXgiLCJSZWdpc3RlciIsInVzZXIiLCJzdGF0ZSIsImNvbW1vbiIsInNldFVzZXIiLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiZGF0YSIsInJlcXVlc3RpbmciLCJmb3JtRXJyb3IiLCJmb3JtRXJyb3JLZXkiLCJzaG93T3BlbklkIiwidXNlckRhdGEiLCJtZXRob2RzIiwiYmluZEZvY3VzIiwiZSIsInN1Ym1pdCIsImVycm9yS2V5IiwiZGV0YWlsIiwidmFsdWUiLCJjb25zb2xlIiwibG9nIiwiYWNjaWQiLCJhdmF0YXJVcmwiLCJpbmZvcyIsImNyZWF0ZSIsInJlc3AiLCJjb2RlIiwibG9naW4iLCJwYXNzd29yZCIsInRha2VMYXN0IiwiY3JlYXRlVXNlciIsImljb24iLCJUb2tlbiIsImpmVG9rZW4iLCJyZUxhdW5jaCIsInVybCIsImVycm9yIiwiZ2V0VXNlckluZm8iLCJ1c2VySW5mbyIsIiRhcHBseSIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7Ozs7QUFDQTs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7O0lBQVlBLEc7O0FBRVo7O0FBSUE7Ozs7OztBQUVBO0FBQ0EsSUFBTUMsUUFBUTtBQUNaQyxXQUFTO0FBQ1BDLFlBQVEsY0FERDtBQUVQQyxjQUFVLCtCQUFlLENBQWYsRUFBa0IsRUFBbEI7QUFGSCxHQURHO0FBS1pDLFFBQU07QUFDSkYsWUFBUSxZQURKO0FBRUpDLGNBQVUsK0JBQWUsQ0FBZixFQUFrQixFQUFsQjtBQUZOLEdBTE07QUFTWkUsVUFBUTtBQUNOSCxZQUFRLFNBREY7QUFFTkM7QUFGTSxHQVRJO0FBYVpHLFNBQU87QUFDTEosWUFBUSxjQURIO0FBRUxDLGNBQVUsK0JBQWUs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T0FBS0gsSUFEVixFQUVLQSxJQUZMO0FBR0VpQyw2QkFBU0Q7QUFIWDs7QUFNVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDVTtBQUNWO0FBQ0E7QUFDQTtBQUNVLGlDQUFLRSxRQUFMLENBQWM7QUFDWkMseUJBQUs7QUFETyxtQkFBZDtBQTVEVTtBQUFBOztBQUFBO0FBQUE7QUFBQTs7QUFnRVZoQiwwQkFBUWlCLEtBQVIsQ0FBYyxhQUFkOztBQWhFVTtBQUFBO0FBQUE7O0FBQUE7QUFtRVoseUJBQUs1QixTQUFMLEdBQWlCakIsTUFBTXlCLFFBQU4sRUFBZ0J2QixNQUFqQztBQUNBLHlCQUFLZ0IsWUFBTCxHQUFvQk8sUUFBcEI7QUFDQSx5QkFBS1QsVUFBTCxHQUFrQixLQUFsQjs7QUFyRVk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUF1RWY7QUFwR08sSzs7Ozs7Ozs7Ozs7Ozs7dUJBdUdtQixlQUFLOEIsV0FBTCxFOzs7O0FBQW5CQyx3QixTQUFBQSxROztBQUNSLHFCQUFLM0IsUUFBTCxHQUFnQjJCLFFBQWhCO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDSSxxQkFBS0MsTUFBTDs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBN0hrQyxlQUFLQyxJO2tCQUF0QnpDLFEiLCJmaWxlIjoicmVnaXN0ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAnd2VweS1yZWR1eCdcbmltcG9ydCBSIGZyb20gJy4uL2xpYnMvcmFtZGEnXG5pbXBvcnQgTklNIGZyb20gJy4uL3V0aWxzL25pbSdcbmltcG9ydCAqIGFzIGFwaSBmcm9tICcuLi9hcGlzL2FjY291bnQnXG5cbmltcG9ydCB7XG4gIHNldFVzZXJcbn0gZnJvbSAnLi4vYWN0aW9ucy9jb21tb24nXG5cbmltcG9ydCB7IHZhbGlkYXRvciwgdmFsaWRhdGVMZW5ndGgsIHZhbGlkYXRlUGhvbmUgfSBmcm9tICcuLi91dGlscy92YWxpZGF0b3InXG5cbi8vIOagoemqjOinhOWImemFjee9rlxuY29uc3QgcnVsZXMgPSB7XG4gIGNvbXBhbnk6IHtcbiAgICBwcm9tcHQ6ICflhazlj7jlkI3np7DlnKgxLTIw5a2X5Lul5YaFJyxcbiAgICB2YWxpZGF0ZTogdmFsaWRhdGVMZW5ndGgoMSwgMjApXG4gIH0sXG4gIG5hbWU6IHtcbiAgICBwcm9tcHQ6ICfmmLXnp7DlnKgxLTEw5a2X5Lul5YaFJyxcbiAgICB2YWxpZGF0ZTogdmFsaWRhdGVMZW5ndGgoMSwgMTApXG4gIH0sXG4gIG1vYmlsZToge1xuICAgIHByb21wdDogJ+eUteivneWPt+eggeS4jeWQiOazlScsXG4gICAgdmFsaWRhdGU6IHZhbGlkYXRlUGhvbmVcbiAgfSxcbiAgdG9rZW46IHtcbiAgICBwcm9tcHQ6ICfogYzkvY3lkI3np7DlnKgxLTIw5a2X5Lul5YaFJyxcbiAgICB2YWxpZGF0ZTogdmFsaWRhdGVMZW5ndGgoMSwgMjApXG4gIH0sXG4gIGV4OiB7XG4gICAgcHJvbXB0OiAn5Li76KaB57uP6JCl5ZyoMS0yMOWtl+S7peWGhScsXG4gICAgdmFsaWRhdGU6IHZhbGlkYXRlTGVuZ3RoKDEsIDIwKVxuICB9XG59XG5cbmNvbnN0IHZhbGlkYXRlID0gdmFsaWRhdG9yKHJ1bGVzKVxuXG5AY29ubmVjdCh7XG4gIHVzZXIoc3RhdGUpIHtcbiAgICByZXR1cm4gc3RhdGUuY29tbW9uLnVzZXJcbiAgfVxufSwge1xuICBzZXRVc2VyXG59KVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmVnaXN0ZXIgZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICBjb25maWcgPSB7XG4gICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+azqOWGjCdcbiAgfVxuXG4gIGRhdGEgPSB7XG4gICAgcmVxdWVzdGluZzogZmFsc2UsXG4gICAgZm9ybUVycm9yOiBudWxsLFxuICAgIGZvcm1FcnJvcktleTogbnVsbCxcbiAgICBzaG93T3BlbklkOiAnJyxcbiAgICB1c2VyRGF0YToge31cbiAgfVxuXG4gIG1ldGhvZHMgPSB7XG4gICAgYmluZEZvY3VzKGUpIHtcbiAgICAgIHRoaXMuZm9ybUVycm9yID0gbnVsbFxuICAgICAgdGhpcy5mb3JtRXJyb3JLZXkgPSBudWxsXG4gICAgfSxcbi8vICAgIGFzeW5jIHNob3dQYXJzaW5nKGUpIHtcbi8vICAgICAgdmFyIHNlc3Npb25LZXkgPSBhd2FpdCB3ZXB5LmdldFN0b3JhZ2Uoe1xuLy8gICAgICAgIGtleTogJ2pmU2Vzc2lvbktleScsXG4vLyAgICAgICAgc3VjY2VzczogZnVuY3Rpb24ocmVzKSB7XG4vLyAgICAgICAgICByZXR1cm4gcmVzLmRhdGFcbi8vICAgICAgICB9XG4vLyAgICAgIH0pXG4vLyAgICAgIHZhciBzaGFyZUluZm8gPSBhd2FpdCB3ZXB5LmdldFN0b3JhZ2Uoe1xuLy8gICAgICAgIGtleTogJ2pmU2hhcmVJbmZvJyxcbi8vICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbihyZXMpIHtcbi8vICAgICAgICAgIHJldHVybiByZXMuZGF0YVxuLy8gICAgICAgIH1cbi8vICAgICAgfSlcbi8vICAgICAgY29uc3Qgc2hhcmVQYXJzZSA9IGF3YWl0IGFwaS5zaGFyZVBhcnNpbmcoc2Vzc2lvbktleSwgc2hhcmVJbmZvLmRhdGEpXG4vLyAgICAgIHZhciBzaGFyZVRva2VuID0gYXdhaXQgd2VweS5nZXRTdG9yYWdlKHtcbi8vICAgICAgICBrZXk6ICdqZlRva2VuJyxcbi8vICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbihyZXMpIHtcbi8vICAgICAgICAgIHJldHVybiByZXMuZGF0YVxuLy8gICAgICAgIH1cbi8vICAgICAgfSlcbi8vICAgICAgY29uc29sZS5sb2coc2hhcmVQYXJzZSlcbi8vICAgICAgdmFyIHNoYXJlT3BlbmlkID0gYXdhaXQgYXBpLmNoZWNrT3BlbkdpZChzaGFyZVRva2VuLCBzaGFyZVBhcnNlKVxuLy8gICAgICBjb25zb2xlLmxvZyhzaGFyZU9wZW5pZClcbi8vICAgIH0sXG4gICAgYXN5bmMgc3VibWl0KGUpIHtcbiAgICAgIGNvbnN0IGVycm9yS2V5ID0gdmFsaWRhdGUoZS5kZXRhaWwudmFsdWUpXG4gICAgICBjb25zb2xlLmxvZyhlLmRldGFpbC52YWx1ZSlcbiAgICAgIGNvbnN0IHsgbmFtZSwgY29tcGFueSwgdG9rZW4sIGV4LCBtb2JpbGUgfSA9IGUuZGV0YWlsLnZhbHVlXG4gICAgICBjb25zdCB7IHNldFVzZXIgfSA9IHRoaXMubWV0aG9kc1xuICAgICAgaWYgKCFlcnJvcktleSkge1xuICAgICAgICB0aGlzLnJlcXVlc3RpbmcgPSB0cnVlXG5cbiAgICAgICAgY29uc3QgeyBhY2NpZCwgYXZhdGFyVXJsIH0gPSB0aGlzLnVzZXJcblxuICAgICAgICBjb25zdCBpbmZvcyA9IHtcbiAgICAgICAgICBuYW1lLFxuICAgICAgICAgIGNvbXBhbnksXG4gICAgICAgICAgdG9rZW4sXG4gICAgICAgICAgbW9iaWxlLFxuICAgICAgICAgIGV4XG4gICAgICAgIH1cbiAgICAgICAgbGV0IHRva2VuXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgY29uc3QgcmVzcCA9IGF3YWl0IE5JTS5jcmVhdGUoXG4gICAgICAgICAgICBhY2NpZCxcbiAgICAgICAgICAgIG5hbWUsXG4gICAgICAgICAgICBhdmF0YXJVcmwsXG4gICAgICAgICAgICBpbmZvc1xuICAgICAgICAgIClcbiAgICAgICAgICB0b2tlbiA9IHJlc3AudG9rZW5cbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgIGlmIChlLmNvZGUgPT09IDQxNCkge1xuICAgICAgICAgICAgY29uc3QgcmVzcCA9IGF3YWl0IE5JTS5sb2dpbihhY2NpZClcbiAgICAgICAgICAgIHRva2VuID0gcmVzcC50b2tlblxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgY29uc3QgcGFzc3dvcmQgPSBSLnRha2VMYXN0KDUpKGFjY2lkKVxuICAgICAgICAgIGNvbnN0IHVzZXIgPSBhd2FpdCBhcGkuY3JlYXRlVXNlcihhY2NpZCwgcGFzc3dvcmQsIHtcbiAgICAgICAgICAgIC4uLmluZm9zLFxuICAgICAgICAgICAgaWNvbjogYXZhdGFyVXJsXG4gICAgICAgICAgfSlcbiAgICAgICAgICBjb25zdCB7IFRva2VuIH0gPSB1c2VyXG5cbiAgICAgICAgICBzZXRVc2VyKHtcbiAgICAgICAgICAgIC4uLnRoaXMudXNlcixcbiAgICAgICAgICAgIC4uLnVzZXIsXG4gICAgICAgICAgICBqZlRva2VuOiBUb2tlblxuICAgICAgICAgIH0pXG5cbi8vICAgICAgICAgIHNldE5pbSh7XG4vLyAgICAgICAgICAgIHRva2VuXG4vLyAgICAgICAgICB9KVxuLy8gICAgICAgICAgdmFyIGJhY2tBY2NpZCA9IGF3YWl0IHdlcHkuZ2V0U3RvcmFnZSh7XG4vLyAgICAgICAgICAgIGtleTogJ2JhY2tBY2NpZCcsXG4vLyAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlcykge1xuLy8gICAgICAgICAgICAgIHJldHVybiByZXNcbi8vICAgICAgICAgICAgfVxuLy8gICAgICAgICAgfSlcbiAgICAgICAgICAvLyDlm57osIMg5Yqg56ev5YiGXG4vLyAgICAgICAgICBpZiAoYmFja0FjY2lkLmRhdGEgIT09ICcxMjMnKSB7XG4vLyAgICAgICAgICAgIGF3YWl0IGFwaS5jaGVja09wZW5HaWQoVG9rZW4sIGJhY2tBY2NpZC5kYXRhKVxuLy8gICAgICAgICAgfVxuICAgICAgICAgIHdlcHkucmVMYXVuY2goe1xuICAgICAgICAgICAgdXJsOiAnL3BhZ2VzL2NoYXRyb29tcydcbiAgICAgICAgICB9KVxuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgY29uc29sZS5lcnJvcignY3JlYXRlIHVzZXInLCBlKVxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmZvcm1FcnJvciA9IHJ1bGVzW2Vycm9yS2V5XS5wcm9tcHRcbiAgICAgICAgdGhpcy5mb3JtRXJyb3JLZXkgPSBlcnJvcktleVxuICAgICAgICB0aGlzLnJlcXVlc3RpbmcgPSBmYWxzZVxuICAgICAgfVxuICAgIH1cbiAgfVxuICBhc3luYyBvbkxvYWQoKSB7XG4gICAgY29uc3QgeyB1c2VySW5mbyB9ID0gYXdhaXQgd2VweS5nZXRVc2VySW5mbygpXG4gICAgdGhpcy51c2VyRGF0YSA9IHVzZXJJbmZvXG4vLyAgICB2YXIgYmFja0FjY2lkID0gYXdhaXQgd2VweS5nZXRTdG9yYWdlKHtcbi8vICAgICAga2V5OiAnYmFja0FjY2lkJyxcbi8vICAgICAgc3VjY2VzczogZnVuY3Rpb24ocmVzKSB7XG4vLyAgICAgICAgcmV0dXJuIHJlc1xuLy8gICAgICB9XG4vLyAgICB9KVxuLy8gICAgY29uc29sZS5sb2coJ+WKoOenr+WIhicsIGJhY2tBY2NpZClcbiAgICB0aGlzLiRhcHBseSgpXG4gIH1cbn1cbiJdfQ==