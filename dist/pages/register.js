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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlZ2lzdGVyLmpzIl0sIm5hbWVzIjpbImFwaSIsInJ1bGVzIiwiY29tcGFueSIsInByb21wdCIsInZhbGlkYXRlIiwiZW1haWwiLCJwaG9uZSIsIlJlZ2lzdGVyIiwidXNlciIsInN0YXRlIiwiY29tbW9uIiwic2V0VXNlciIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCJkYXRhIiwicmVxdWVzdGluZyIsImZvcm1FcnJvciIsImZvcm1FcnJvcktleSIsIm1ldGhvZHMiLCJiaW5kRm9jdXMiLCJlIiwic3VibWl0IiwiZXJyb3JLZXkiLCJkZXRhaWwiLCJ2YWx1ZSIsImFjY2lkIiwibmlja05hbWUiLCJhdmF0YXJVcmwiLCJnZW5kZXIiLCJpbmZvcyIsImNyZWRpdHMiLCJ0b2tlbiIsImNyZWF0ZSIsInJlc3AiLCJjb2RlIiwibG9naW4iLCJwYXNzd29yZCIsInRha2VMYXN0IiwiY3JlYXRlVXNlciIsIm5hbWUiLCJpY29uIiwiVG9rZW4iLCJqZlRva2VuIiwicmVMYXVuY2giLCJ1cmwiLCJjb25zb2xlIiwiZXJyb3IiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7Ozs7QUFDQTs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7O0lBQVlBLEc7O0FBRVo7O0FBS0E7Ozs7OztBQUVBO0FBQ0EsSUFBTUMsUUFBUTtBQUNaQyxXQUFTO0FBQ1BDLFlBQVEsY0FERDtBQUVQQyxjQUFVLCtCQUFlLENBQWYsRUFBa0IsRUFBbEI7QUFGSCxHQURHO0FBS1pDLFNBQU87QUFDTEYsWUFBUSxPQURIO0FBRUxDO0FBRkssR0FMSztBQVNaRSxTQUFPO0FBQ0xILFlBQVEsU0FESDtBQUVMQztBQUZLO0FBVEssQ0FBZDs7QUFlQSxJQUFNQSxXQUFXLDBCQUFVSCxLQUFWLENBQWpCOztJQVNxQk0sUSxXQVBwQix3QkFBUTtBQUNQQyxNQURPLGdCQUNGQyxLQURFLEVBQ0s7QUFDVixXQUFPQSxNQUFNQyxN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Iiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3dlcHktcmVkdXgnXG5pbXBvcnQgUiBmcm9tICcuLi9saWJzL3JhbWRhJ1xuaW1wb3J0IE5JTSBmcm9tICcuLi91dGlscy9uaW0nXG5pbXBvcnQgKiBhcyBhcGkgZnJvbSAnLi4vYXBpcy9hY2NvdW50J1xuXG5pbXBvcnQge1xuICBzZXRVc2VyLFxuICBzZXROaW1cbn0gZnJvbSAnLi4vYWN0aW9ucy9jb21tb24nXG5cbmltcG9ydCB7IHZhbGlkYXRvciwgdmFsaWRhdGVMZW5ndGgsIHZhbGlkYXRlRW1haWwsIHZhbGlkYXRlUGhvbmUgfSBmcm9tICcuLi91dGlscy92YWxpZGF0b3InXG5cbi8vIOagoemqjOinhOWImemFjee9rlxuY29uc3QgcnVsZXMgPSB7XG4gIGNvbXBhbnk6IHtcbiAgICBwcm9tcHQ6ICflhazlj7jlkI3np7DlnKgxLTIw5a2X5Lul5YaFJyxcbiAgICB2YWxpZGF0ZTogdmFsaWRhdGVMZW5ndGgoMSwgMjApXG4gIH0sXG4gIGVtYWlsOiB7XG4gICAgcHJvbXB0OiAn6YKu566x5LiN5ZCI5rOVJyxcbiAgICB2YWxpZGF0ZTogdmFsaWRhdGVFbWFpbFxuICB9LFxuICBwaG9uZToge1xuICAgIHByb21wdDogJ+eUteivneWPt+eggeS4jeWQiOazlScsXG4gICAgdmFsaWRhdGU6IHZhbGlkYXRlUGhvbmVcbiAgfVxufVxuXG5jb25zdCB2YWxpZGF0ZSA9IHZhbGlkYXRvcihydWxlcylcblxuQGNvbm5lY3Qoe1xuICB1c2VyKHN0YXRlKSB7XG4gICAgcmV0dXJuIHN0YXRlLmNvbW1vbi51c2VyXG4gIH1cbn0sIHtcbiAgc2V0VXNlclxufSlcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJlZ2lzdGVyIGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgY29uZmlnID0ge1xuICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICfms6jlhownXG4gIH1cblxuICBkYXRhID0ge1xuICAgIHJlcXVlc3Rpbmc6IGZhbHNlLFxuICAgIGZvcm1FcnJvcjogbnVsbCxcbiAgICBmb3JtRXJyb3JLZXk6IG51bGxcbiAgfVxuXG4gIG1ldGhvZHMgPSB7XG4gICAgYmluZEZvY3VzKGUpIHtcbiAgICAgIHRoaXMuZm9ybUVycm9yID0gbnVsbFxuICAgICAgdGhpcy5mb3JtRXJyb3JLZXkgPSBudWxsXG4gICAgfSxcblxuICAgIGFzeW5jIHN1Ym1pdChlKSB7XG4gICAgICBjb25zdCBlcnJvcktleSA9IHZhbGlkYXRlKGUuZGV0YWlsLnZhbHVlKVxuICAgICAgY29uc3QgeyBjb21wYW55LCBwaG9uZSwgZW1haWwgfSA9IGUuZGV0YWlsLnZhbHVlXG4gICAgICBjb25zdCB7IHNldFVzZXIgfSA9IHRoaXMubWV0aG9kc1xuICAgICAgaWYgKCFlcnJvcktleSkge1xuICAgICAgICB0aGlzLnJlcXVlc3RpbmcgPSB0cnVlXG5cbiAgICAgICAgY29uc3QgeyBhY2NpZCwgbmlja05hbWUsIGF2YXRhclVybCwgZ2VuZGVyIH0gPSB0aGlzLnVzZXJcblxuICAgICAgICBjb25zdCBpbmZvcyA9IHtcbiAgICAgICAgICBjb21wYW55LFxuICAgICAgICAgIHBob25lLFxuICAgICAgICAgIGVtYWlsLFxuICAgICAgICAgIGdlbmRlcixcbiAgICAgICAgICBjcmVkaXRzOiAwXG4gICAgICAgIH1cbiAgICAgICAgbGV0IHRva2VuXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgY29uc3QgcmVzcCA9IGF3YWl0IE5JTS5jcmVhdGUoXG4gICAgICAgICAgICBhY2NpZCxcbiAgICAgICAgICAgIG5pY2tOYW1lLFxuICAgICAgICAgICAgYXZhdGFyVXJsLFxuICAgICAgICAgICAgaW5mb3NcbiAgICAgICAgICApXG4gICAgICAgICAgdG9rZW4gPSByZXNwLnRva2VuXG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICBpZiAoZS5jb2RlID09PSA0MTQpIHtcbiAgICAgICAgICAgIGNvbnN0IHJlc3AgPSBhd2FpdCBOSU0ubG9naW4oYWNjaWQpXG4gICAgICAgICAgICB0b2tlbiA9IHJlc3AudG9rZW5cbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB0cnkge1xuICAgICAgICAgIGNvbnN0IHBhc3N3b3JkID0gUi50YWtlTGFzdCg1KShhY2NpZClcbiAgICAgICAgICBjb25zdCB1c2VyID0gYXdhaXQgYXBpLmNyZWF0ZVVzZXIoYWNjaWQsIHBhc3N3b3JkLCB7XG4gICAgICAgICAgICAuLi5pbmZvcyxcbiAgICAgICAgICAgIG5hbWU6IG5pY2tOYW1lLFxuICAgICAgICAgICAgaWNvbjogYXZhdGFyVXJsXG4gICAgICAgICAgfSlcbiAgICAgICAgICBjb25zdCB7IFRva2VuIH0gPSB1c2VyXG5cbiAgICAgICAgICBzZXRVc2VyKHtcbiAgICAgICAgICAgIC4uLnRoaXMudXNlcixcbiAgICAgICAgICAgIC4uLnVzZXIsXG4gICAgICAgICAgICBqZlRva2VuOiBUb2tlblxuICAgICAgICAgIH0pXG5cbiAgICAgICAgICBzZXROaW0oe1xuICAgICAgICAgICAgdG9rZW5cbiAgICAgICAgICB9KVxuXG4gICAgICAgICAgd2VweS5yZUxhdW5jaCh7XG4gICAgICAgICAgICB1cmw6ICcvcGFnZXMvY2hhdHJvb21zJ1xuICAgICAgICAgIH0pXG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICBjb25zb2xlLmVycm9yKCdjcmVhdGUgdXNlcicsIGUpXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuZm9ybUVycm9yID0gcnVsZXNbZXJyb3JLZXldLnByb21wdFxuICAgICAgICB0aGlzLmZvcm1FcnJvcktleSA9IGVycm9yS2V5XG4gICAgICAgIHRoaXMucmVxdWVzdGluZyA9IGZhbHNlXG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iXX0=