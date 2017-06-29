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
  email: {
    prompt: '邮箱不合法',
    validate: _validator.validateEmail
  },
  phone: {
    prompt: '电话号码不合法',
    validate: _validator.validatePhone
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
      formErrorKey: null
    }, _this.methods = {
      bindFocus: function bindFocus(e) {
        this.formError = null;
        this.formErrorKey = null;
      },
      submit: function submit(e) {
        var _this2 = this;

        return (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee() {
          var errorKey, _e$detail$value, company, phone, email, setUser, _user, accid, nickName, avatarUrl, gender, infos, token, resp, _resp, password, user, Token;

          return _regenerator2.default.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  errorKey = validate(e.detail.value);
                  _e$detail$value = e.detail.value, company = _e$detail$value.company, phone = _e$detail$value.phone, email = _e$detail$value.email;
                  setUser = _this2.methods.setUser;

                  if (errorKey) {
                    _context.next = 38;
                    break;
                  }

                  _this2.requesting = true;

                  _user = _this2.user, accid = _user.accid, nickName = _user.nickName, avatarUrl = _user.avatarUrl, gender = _user.gender;
                  infos = {
                    company: company,
                    phone: phone,
                    email: email,
                    gender: gender,
                    credits: 0
                  };
                  token = void 0;
                  _context.prev = 8;
                  _context.next = 11;
                  return _nim2.default.create({
                    accid: accid,
                    name: nickName,
                    icon: avatarUrl,
                    props: infos
                  });

                case 11:
                  resp = _context.sent;

                  token = resp.token;
                  _context.next = 22;
                  break;

                case 15:
                  _context.prev = 15;
                  _context.t0 = _context['catch'](8);

                  if (!(_context.t0.code === 414)) {
                    _context.next = 22;
                    break;
                  }

                  _context.next = 20;
                  return _nim2.default.login(accid);

                case 20:
                  _resp = _context.sent;

                  token = _resp.token;

                case 22:
                  _context.prev = 22;
                  password = _ramda2.default.takeLast(5)(accid);
                  _context.next = 26;
                  return api.createUser(accid, password, infos);

                case 26:
                  user = _context.sent;
                  Token = user.Token;


                  setUser((0, _extends3.default)({}, _this2.user, user, {
                    jfToken: Token
                  }));

                  (0, _common.setNim)({
                    token: token
                  });

                  _wepy2.default.reLaunch({
                    url: '/pages/chatrooms'
                  });
                  _context.next = 36;
                  break;

                case 33:
                  _context.prev = 33;
                  _context.t1 = _context['catch'](22);

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
          }, _callee, _this2, [[8, 15], [22, 33]]);
        }))();
      }
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  return Register;
}(_wepy2.default.page)) || _class);

Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Register , 'pages/register'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlZ2lzdGVyLmpzIl0sIm5hbWVzIjpbImFwaSIsInJ1bGVzIiwiY29tcGFueSIsInByb21wdCIsInZhbGlkYXRlIiwiZW1haWwiLCJwaG9uZSIsIlJlZ2lzdGVyIiwidXNlciIsInN0YXRlIiwiY29tbW9uIiwic2V0VXNlciIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCJkYXRhIiwicmVxdWVzdGluZyIsImZvcm1FcnJvciIsImZvcm1FcnJvcktleSIsIm1ldGhvZHMiLCJiaW5kRm9jdXMiLCJlIiwic3VibWl0IiwiZXJyb3JLZXkiLCJkZXRhaWwiLCJ2YWx1ZSIsImFjY2lkIiwibmlja05hbWUiLCJhdmF0YXJVcmwiLCJnZW5kZXIiLCJpbmZvcyIsImNyZWRpdHMiLCJ0b2tlbiIsImNyZWF0ZSIsIm5hbWUiLCJpY29uIiwicHJvcHMiLCJyZXNwIiwiY29kZSIsImxvZ2luIiwicGFzc3dvcmQiLCJ0YWtlTGFzdCIsImNyZWF0ZVVzZXIiLCJUb2tlbiIsImpmVG9rZW4iLCJyZUxhdW5jaCIsInVybCIsImNvbnNvbGUiLCJlcnJvciIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTs7OztBQUNBOztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7SUFBWUEsRzs7QUFFWjs7QUFLQTs7Ozs7O0FBRUE7QUFDQSxJQUFNQyxRQUFRO0FBQ1pDLFdBQVM7QUFDUEMsWUFBUSxjQUREO0FBRVBDLGNBQVUsK0JBQWUsQ0FBZixFQUFrQixFQUFsQjtBQUZILEdBREc7QUFLWkMsU0FBTztBQUNMRixZQUFRLE9BREg7QUFFTEM7QUFGSyxHQUxLO0FBU1pFLFNBQU87QUFDTEgsWUFBUSxTQURIO0FBRUxDO0FBRks7QUFUSyxDQUFkOztBQWVBLElBQU1BLFdBQVcsMEJBQVVILEtBQVYsQ0FBakI7O0lBU3FCTSxRLFdBUHBCLHdCQUFRO0FBQ1BDLE1BRE8sZ0JBQ0ZDLEtBREUsRUFDSztBQUNWLFdBQU9BLE1BQU1DLE1BQU4sQ0FBYUYsSUFBcEI7QUFDRDtBQUhNLENBQVIsRUFJRTtBQUNERztBQURDLENBSkYsQzs7Ozs7Ozs7Ozs7Ozs7Z05BUUNDLE0sR0FBUztBQUNQQyw4QkFBd0I7QUFEakIsSyxRQUlUQyxJLEdBQU87QUFDTEMsa0JBQVksS0FEUDtBQUVMQyxpQkFBVyxJQUZOO0FBR0xDLG9CQUFjO0FBSFQsSyxRQU1QQyxPLEdBQVU7QUFDUkMsZUFEUSxxQkFDRUMsQ0FERixFQUNLO0FBQ1gsYUFBS0osU0FBTCxHQUFpQixJQUFqQjtBQUNBLGFBQUtDLFlBQUwsR0FBb0IsSUFBcEI7QUFDRCxPQUpPO0FBTUZJLFlBTkUsa0JBTUtELENBTkwsRUFNUTtBQUFBOztBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDUkUsMEJBRFEsR0FDR2xCLFNBQVNnQixFQUFFRyxNQUFGLENBQVNDLEtBQWxCLENBREg7QUFBQSxvQ0FFb0JKLEVBQUVHLE1BQUYsQ0FBU0MsS0FGN0IsRUFFTnRCLE9BRk0sbUJBRU5BLE9BRk0sRUFFR0ksS0FGSCxtQkFFR0EsS0FGSCxFQUVVRCxLQUZWLG1CQUVVQSxLQUZWO0FBR05NLHlCQUhNLEdBR00sT0FBS08sT0FIWCxDQUdOUCxPQUhNOztBQUFBLHNCQUlUVyxRQUpTO0FBQUE7QUFBQTtBQUFBOztBQUtaLHlCQUFLUCxVQUFMLEdBQWtCLElBQWxCOztBQUxZLDBCQU9tQyxPQUFLUCxJQVB4QyxFQU9KaUIsS0FQSSxTQU9KQSxLQVBJLEVBT0dDLFFBUEgsU0FPR0EsUUFQSCxFQU9hQyxTQVBiLFNBT2FBLFNBUGIsRUFPd0JDLE1BUHhCLFNBT3dCQSxNQVB4QjtBQVNOQyx1QkFUTSxHQVNFO0FBQ1ozQixvQ0FEWTtBQUVaSSxnQ0FGWTtBQUdaRCxnQ0FIWTtBQUladUIsa0NBSlk7QUFLWkUsNkJBQVM7QUFMRyxtQkFURjtBQWdCUkMsdUJBaEJRO0FBQUE7QUFBQTtBQUFBLHlCQWtCUyxjQUFJQyxNQUFKLENBQVc7QUFDNUJQLGdDQUQ0QjtBQUU1QlEsMEJBQU1QLFFBRnNCO0FBRzVCUSwwQkFBTVAsU0FIc0I7QUFJNUJRLDJCQUFPTjtBQUpxQixtQkFBWCxDQWxCVDs7QUFBQTtBQWtCSk8sc0JBbEJJOztBQXdCVkwsMEJBQVFLLEtBQUtMLEtBQWI7QUF4QlU7QUFBQTs7QUFBQTtBQUFBO0FBQUE7O0FBQUEsd0JBMEJOLFlBQUVNLElBQUYsS0FBVyxHQTFCTDtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBLHlCQTJCVyxjQUFJQyxLQUFKLENBQVViLEtBQVYsQ0EzQlg7O0FBQUE7QUEyQkZXLHVCQTNCRTs7QUE0QlJMLDBCQUFRSyxNQUFLTCxLQUFiOztBQTVCUTtBQUFBO0FBaUNKUSwwQkFqQ0ksR0FpQ08sZ0JBQUVDLFFBQUYsQ0FBVyxDQUFYLEVBQWNmLEtBQWQsQ0FqQ1A7QUFBQTtBQUFBLHlCQWtDU3pCLElBQUl5QyxVQUFKLENBQWVoQixLQUFmLEVBQXNCYyxRQUF0QixFQUFnQ1YsS0FBaEMsQ0FsQ1Q7O0FBQUE7QUFrQ0pyQixzQkFsQ0k7QUFtQ0ZrQyx1QkFuQ0UsR0FtQ1FsQyxJQW5DUixDQW1DRmtDLEtBbkNFOzs7QUFxQ1YvQixxREFDSyxPQUFLSCxJQURWLEVBRUtBLElBRkw7QUFHRW1DLDZCQUFTRDtBQUhYOztBQU1BLHNDQUFPO0FBQ0xYO0FBREssbUJBQVA7O0FBSUEsaUNBQUthLFFBQUwsQ0FBYztBQUNaQyx5QkFBSztBQURPLG1CQUFkO0FBL0NVO0FBQUE7O0FBQUE7QUFBQTtBQUFBOztBQW1EVkMsMEJBQVFDLEtBQVIsQ0FBYyxhQUFkOztBQW5EVTtBQUFBO0FBQUE7O0FBQUE7QUFzRFoseUJBQUsvQixTQUFMLEdBQWlCZixNQUFNcUIsUUFBTixFQUFnQm5CLE1BQWpDO0FBQ0EseUJBQUtjLFlBQUwsR0FBb0JLLFFBQXBCO0FBQ0EseUJBQUtQLFVBQUwsR0FBa0IsS0FBbEI7O0FBeERZO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBMERmO0FBaEVPLEs7Ozs7RUFYMEIsZUFBS2lDLEk7a0JBQXRCekMsUSIsImZpbGUiOiJyZWdpc3Rlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICd3ZXB5LXJlZHV4J1xuaW1wb3J0IFIgZnJvbSAnLi4vbGlicy9yYW1kYSdcbmltcG9ydCBOSU0gZnJvbSAnLi4vdXRpbHMvbmltJ1xuaW1wb3J0ICogYXMgYXBpIGZyb20gJy4uL2FwaXMvYWNjb3VudCdcblxuaW1wb3J0IHtcbiAgc2V0VXNlcixcbiAgc2V0TmltXG59IGZyb20gJy4uL2FjdGlvbnMvY29tbW9uJ1xuXG5pbXBvcnQgeyB2YWxpZGF0b3IsIHZhbGlkYXRlTGVuZ3RoLCB2YWxpZGF0ZUVtYWlsLCB2YWxpZGF0ZVBob25lIH0gZnJvbSAnLi4vdXRpbHMvdmFsaWRhdG9yJ1xuXG4vLyDmoKHpqozop4TliJnphY3nva5cbmNvbnN0IHJ1bGVzID0ge1xuICBjb21wYW55OiB7XG4gICAgcHJvbXB0OiAn5YWs5Y+45ZCN56ew5ZyoMS0yMOWtl+S7peWGhScsXG4gICAgdmFsaWRhdGU6IHZhbGlkYXRlTGVuZ3RoKDEsIDIwKVxuICB9LFxuICBlbWFpbDoge1xuICAgIHByb21wdDogJ+mCrueuseS4jeWQiOazlScsXG4gICAgdmFsaWRhdGU6IHZhbGlkYXRlRW1haWxcbiAgfSxcbiAgcGhvbmU6IHtcbiAgICBwcm9tcHQ6ICfnlLXor53lj7fnoIHkuI3lkIjms5UnLFxuICAgIHZhbGlkYXRlOiB2YWxpZGF0ZVBob25lXG4gIH1cbn1cblxuY29uc3QgdmFsaWRhdGUgPSB2YWxpZGF0b3IocnVsZXMpXG5cbkBjb25uZWN0KHtcbiAgdXNlcihzdGF0ZSkge1xuICAgIHJldHVybiBzdGF0ZS5jb21tb24udXNlclxuICB9XG59LCB7XG4gIHNldFVzZXJcbn0pXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSZWdpc3RlciBleHRlbmRzIHdlcHkucGFnZSB7XG4gIGNvbmZpZyA9IHtcbiAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn5rOo5YaMJ1xuICB9XG5cbiAgZGF0YSA9IHtcbiAgICByZXF1ZXN0aW5nOiBmYWxzZSxcbiAgICBmb3JtRXJyb3I6IG51bGwsXG4gICAgZm9ybUVycm9yS2V5OiBudWxsXG4gIH1cblxuICBtZXRob2RzID0ge1xuICAgIGJpbmRGb2N1cyhlKSB7XG4gICAgICB0aGlzLmZvcm1FcnJvciA9IG51bGxcbiAgICAgIHRoaXMuZm9ybUVycm9yS2V5ID0gbnVsbFxuICAgIH0sXG5cbiAgICBhc3luYyBzdWJtaXQoZSkge1xuICAgICAgY29uc3QgZXJyb3JLZXkgPSB2YWxpZGF0ZShlLmRldGFpbC52YWx1ZSlcbiAgICAgIGNvbnN0IHsgY29tcGFueSwgcGhvbmUsIGVtYWlsIH0gPSBlLmRldGFpbC52YWx1ZVxuICAgICAgY29uc3QgeyBzZXRVc2VyIH0gPSB0aGlzLm1ldGhvZHNcbiAgICAgIGlmICghZXJyb3JLZXkpIHtcbiAgICAgICAgdGhpcy5yZXF1ZXN0aW5nID0gdHJ1ZVxuXG4gICAgICAgIGNvbnN0IHsgYWNjaWQsIG5pY2tOYW1lLCBhdmF0YXJVcmwsIGdlbmRlciB9ID0gdGhpcy51c2VyXG5cbiAgICAgICAgY29uc3QgaW5mb3MgPSB7XG4gICAgICAgICAgY29tcGFueSxcbiAgICAgICAgICBwaG9uZSxcbiAgICAgICAgICBlbWFpbCxcbiAgICAgICAgICBnZW5kZXIsXG4gICAgICAgICAgY3JlZGl0czogMFxuICAgICAgICB9XG4gICAgICAgIGxldCB0b2tlblxuICAgICAgICB0cnkge1xuICAgICAgICAgIGNvbnN0IHJlc3AgPSBhd2FpdCBOSU0uY3JlYXRlKHtcbiAgICAgICAgICAgIGFjY2lkLFxuICAgICAgICAgICAgbmFtZTogbmlja05hbWUsXG4gICAgICAgICAgICBpY29uOiBhdmF0YXJVcmwsXG4gICAgICAgICAgICBwcm9wczogaW5mb3NcbiAgICAgICAgICB9KVxuICAgICAgICAgIHRva2VuID0gcmVzcC50b2tlblxuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgaWYgKGUuY29kZSA9PT0gNDE0KSB7XG4gICAgICAgICAgICBjb25zdCByZXNwID0gYXdhaXQgTklNLmxvZ2luKGFjY2lkKVxuICAgICAgICAgICAgdG9rZW4gPSByZXNwLnRva2VuXG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBjb25zdCBwYXNzd29yZCA9IFIudGFrZUxhc3QoNSkoYWNjaWQpXG4gICAgICAgICAgY29uc3QgdXNlciA9IGF3YWl0IGFwaS5jcmVhdGVVc2VyKGFjY2lkLCBwYXNzd29yZCwgaW5mb3MpXG4gICAgICAgICAgY29uc3QgeyBUb2tlbiB9ID0gdXNlclxuXG4gICAgICAgICAgc2V0VXNlcih7XG4gICAgICAgICAgICAuLi50aGlzLnVzZXIsXG4gICAgICAgICAgICAuLi51c2VyLFxuICAgICAgICAgICAgamZUb2tlbjogVG9rZW5cbiAgICAgICAgICB9KVxuXG4gICAgICAgICAgc2V0TmltKHtcbiAgICAgICAgICAgIHRva2VuXG4gICAgICAgICAgfSlcblxuICAgICAgICAgIHdlcHkucmVMYXVuY2goe1xuICAgICAgICAgICAgdXJsOiAnL3BhZ2VzL2NoYXRyb29tcydcbiAgICAgICAgICB9KVxuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgY29uc29sZS5lcnJvcignY3JlYXRlIHVzZXInLCBlKVxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmZvcm1FcnJvciA9IHJ1bGVzW2Vycm9yS2V5XS5wcm9tcHRcbiAgICAgICAgdGhpcy5mb3JtRXJyb3JLZXkgPSBlcnJvcktleVxuICAgICAgICB0aGlzLnJlcXVlc3RpbmcgPSBmYWxzZVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIl19