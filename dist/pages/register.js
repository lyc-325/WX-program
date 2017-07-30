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
                  return _nim2.default.create(accid, nickName, avatarUrl, infos);

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
                  return api.createUser(accid, password, (0, _extends3.default)({}, infos, {
                    name: nickName,
                    icon: avatarUrl
                  }));

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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlZ2lzdGVyLmpzIl0sIm5hbWVzIjpbImFwaSIsInJ1bGVzIiwiY29tcGFueSIsInByb21wdCIsInZhbGlkYXRlIiwiZW1haWwiLCJwaG9uZSIsIlJlZ2lzdGVyIiwidXNlciIsInN0YXRlIiwiY29tbW9uIiwic2V0VXNlciIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCJkYXRhIiwicmVxdWVzdGluZyIsImZvcm1FcnJvciIsImZvcm1FcnJvcktleSIsIm1ldGhvZHMiLCJiaW5kRm9jdXMiLCJlIiwic3VibWl0IiwiZXJyb3JLZXkiLCJkZXRhaWwiLCJ2YWx1ZSIsImFjY2lkIiwibmlja05hbWUiLCJhdmF0YXJVcmwiLCJnZW5kZXIiLCJpbmZvcyIsImNyZWRpdHMiLCJ0b2tlbiIsImNyZWF0ZSIsInJlc3AiLCJjb2RlIiwibG9naW4iLCJwYXNzd29yZCIsInRha2VMYXN0IiwiY3JlYXRlVXNlciIsIm5hbWUiLCJpY29uIiwiVG9rZW4iLCJqZlRva2VuIiwicmVMYXVuY2giLCJ1cmwiLCJjb25zb2xlIiwiZXJyb3IiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7Ozs7QUFDQTs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7O0lBQVlBLEc7O0FBRVo7O0FBS0E7Ozs7OztBQUVBO0FBQ0EsSUFBTUMsUUFBUTtBQUNaQyxXQUFTO0FBQ1BDLFlBQVEsY0FERDtBQUVQQyxjQUFVLCtCQUFlLENBQWYsRUFBa0IsRUFBbEI7QUFGSCxHQURHO0FBS1pDLFNBQU87QUFDTEYsWUFBUSxPQURIO0FBRUxDO0FBRkssR0FMSztBQVNaRSxTQUFPO0FBQ0xILFlBQVEsU0FESDtBQUVMQztBQUZLO0FBVEssQ0FBZDs7QUFlQSxJQUFNQSxXQUFXLDBCQUFVSCxLQUFWLENBQWpCOztJQVNxQk0sUSxXQVBwQix3QkFBUTtBQUNQQyxNQURPLGdCQUNGQyxLQURFLEVBQ0s7QUFDVixXQUFPQSxNQUFNQyxN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Iiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXHJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICd3ZXB5LXJlZHV4J1xyXG5pbXBvcnQgUiBmcm9tICcuLi9saWJzL3JhbWRhJ1xyXG5pbXBvcnQgTklNIGZyb20gJy4uL3V0aWxzL25pbSdcclxuaW1wb3J0ICogYXMgYXBpIGZyb20gJy4uL2FwaXMvYWNjb3VudCdcclxuXHJcbmltcG9ydCB7XHJcbiAgc2V0VXNlcixcclxuICBzZXROaW1cclxufSBmcm9tICcuLi9hY3Rpb25zL2NvbW1vbidcclxuXHJcbmltcG9ydCB7IHZhbGlkYXRvciwgdmFsaWRhdGVMZW5ndGgsIHZhbGlkYXRlRW1haWwsIHZhbGlkYXRlUGhvbmUgfSBmcm9tICcuLi91dGlscy92YWxpZGF0b3InXHJcblxyXG4vLyDmoKHpqozop4TliJnphY3nva5cclxuY29uc3QgcnVsZXMgPSB7XHJcbiAgY29tcGFueToge1xyXG4gICAgcHJvbXB0OiAn5YWs5Y+45ZCN56ew5ZyoMS0yMOWtl+S7peWGhScsXHJcbiAgICB2YWxpZGF0ZTogdmFsaWRhdGVMZW5ndGgoMSwgMjApXHJcbiAgfSxcclxuICBlbWFpbDoge1xyXG4gICAgcHJvbXB0OiAn6YKu566x5LiN5ZCI5rOVJyxcclxuICAgIHZhbGlkYXRlOiB2YWxpZGF0ZUVtYWlsXHJcbiAgfSxcclxuICBwaG9uZToge1xyXG4gICAgcHJvbXB0OiAn55S16K+d5Y+356CB5LiN5ZCI5rOVJyxcclxuICAgIHZhbGlkYXRlOiB2YWxpZGF0ZVBob25lXHJcbiAgfVxyXG59XHJcblxyXG5jb25zdCB2YWxpZGF0ZSA9IHZhbGlkYXRvcihydWxlcylcclxuXHJcbkBjb25uZWN0KHtcclxuICB1c2VyKHN0YXRlKSB7XHJcbiAgICByZXR1cm4gc3RhdGUuY29tbW9uLnVzZXJcclxuICB9XHJcbn0sIHtcclxuICBzZXRVc2VyXHJcbn0pXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJlZ2lzdGVyIGV4dGVuZHMgd2VweS5wYWdlIHtcclxuICBjb25maWcgPSB7XHJcbiAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn5rOo5YaMJ1xyXG4gIH1cclxuXHJcbiAgZGF0YSA9IHtcclxuICAgIHJlcXVlc3Rpbmc6IGZhbHNlLFxyXG4gICAgZm9ybUVycm9yOiBudWxsLFxyXG4gICAgZm9ybUVycm9yS2V5OiBudWxsXHJcbiAgfVxyXG5cclxuICBtZXRob2RzID0ge1xyXG4gICAgYmluZEZvY3VzKGUpIHtcclxuICAgICAgdGhpcy5mb3JtRXJyb3IgPSBudWxsXHJcbiAgICAgIHRoaXMuZm9ybUVycm9yS2V5ID0gbnVsbFxyXG4gICAgfSxcclxuXHJcbiAgICBhc3luYyBzdWJtaXQoZSkge1xyXG4gICAgICBjb25zdCBlcnJvcktleSA9IHZhbGlkYXRlKGUuZGV0YWlsLnZhbHVlKVxyXG4gICAgICBjb25zdCB7IGNvbXBhbnksIHBob25lLCBlbWFpbCB9ID0gZS5kZXRhaWwudmFsdWVcclxuICAgICAgY29uc3QgeyBzZXRVc2VyIH0gPSB0aGlzLm1ldGhvZHNcclxuICAgICAgaWYgKCFlcnJvcktleSkge1xyXG4gICAgICAgIHRoaXMucmVxdWVzdGluZyA9IHRydWVcclxuXHJcbiAgICAgICAgY29uc3QgeyBhY2NpZCwgbmlja05hbWUsIGF2YXRhclVybCwgZ2VuZGVyIH0gPSB0aGlzLnVzZXJcclxuXHJcbiAgICAgICAgY29uc3QgaW5mb3MgPSB7XHJcbiAgICAgICAgICBjb21wYW55LFxyXG4gICAgICAgICAgcGhvbmUsXHJcbiAgICAgICAgICBlbWFpbCxcclxuICAgICAgICAgIGdlbmRlcixcclxuICAgICAgICAgIGNyZWRpdHM6IDBcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IHRva2VuXHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgIGNvbnN0IHJlc3AgPSBhd2FpdCBOSU0uY3JlYXRlKFxyXG4gICAgICAgICAgICBhY2NpZCxcclxuICAgICAgICAgICAgbmlja05hbWUsXHJcbiAgICAgICAgICAgIGF2YXRhclVybCxcclxuICAgICAgICAgICAgaW5mb3NcclxuICAgICAgICAgIClcclxuICAgICAgICAgIHRva2VuID0gcmVzcC50b2tlblxyXG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICAgIGlmIChlLmNvZGUgPT09IDQxNCkge1xyXG4gICAgICAgICAgICBjb25zdCByZXNwID0gYXdhaXQgTklNLmxvZ2luKGFjY2lkKVxyXG4gICAgICAgICAgICB0b2tlbiA9IHJlc3AudG9rZW5cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICBjb25zdCBwYXNzd29yZCA9IFIudGFrZUxhc3QoNSkoYWNjaWQpXHJcbiAgICAgICAgICBjb25zdCB1c2VyID0gYXdhaXQgYXBpLmNyZWF0ZVVzZXIoYWNjaWQsIHBhc3N3b3JkLCB7XHJcbiAgICAgICAgICAgIC4uLmluZm9zLFxyXG4gICAgICAgICAgICBuYW1lOiBuaWNrTmFtZSxcclxuICAgICAgICAgICAgaWNvbjogYXZhdGFyVXJsXHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgICAgY29uc3QgeyBUb2tlbiB9ID0gdXNlclxyXG5cclxuICAgICAgICAgIHNldFVzZXIoe1xyXG4gICAgICAgICAgICAuLi50aGlzLnVzZXIsXHJcbiAgICAgICAgICAgIC4uLnVzZXIsXHJcbiAgICAgICAgICAgIGpmVG9rZW46IFRva2VuXHJcbiAgICAgICAgICB9KVxyXG5cclxuICAgICAgICAgIHNldE5pbSh7XHJcbiAgICAgICAgICAgIHRva2VuXHJcbiAgICAgICAgICB9KVxyXG5cclxuICAgICAgICAgIHdlcHkucmVMYXVuY2goe1xyXG4gICAgICAgICAgICB1cmw6ICcvcGFnZXMvY2hhdHJvb21zJ1xyXG4gICAgICAgICAgfSlcclxuICAgICAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgICBjb25zb2xlLmVycm9yKCdjcmVhdGUgdXNlcicsIGUpXHJcbiAgICAgICAgfVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMuZm9ybUVycm9yID0gcnVsZXNbZXJyb3JLZXldLnByb21wdFxyXG4gICAgICAgIHRoaXMuZm9ybUVycm9yS2V5ID0gZXJyb3JLZXlcclxuICAgICAgICB0aGlzLnJlcXVlc3RpbmcgPSBmYWxzZVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ==