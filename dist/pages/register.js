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
          var errorKey, _e$detail$value, company, phone, email, setUser, _user, accid, nickName, avatarUrl, infos, _ref2, token, user;

          return _regenerator2.default.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  errorKey = validate(e.detail.value);
                  _e$detail$value = e.detail.value, company = _e$detail$value.company, phone = _e$detail$value.phone, email = _e$detail$value.email;
                  setUser = _this2.methods.setUser;

                  if (errorKey) {
                    _context.next = 25;
                    break;
                  }

                  _this2.requesting = true;

                  _user = _this2.user, accid = _user.accid, nickName = _user.nickName, avatarUrl = _user.avatarUrl;
                  infos = {
                    company: company,
                    phone: phone,
                    email: email,
                    credits: 0
                  };
                  _context.prev = 7;
                  _context.next = 10;
                  return _nim2.default.create({
                    accid: accid,
                    name: nickName,
                    icon: avatarUrl,
                    props: infos
                  });

                case 10:
                  _ref2 = _context.sent;
                  token = _ref2.token;
                  _context.next = 14;
                  return api.createUser(accid, token, infos);

                case 14:
                  user = _context.sent;


                  setUser((0, _extends3.default)({}, _this2.user, user));
                  (0, _common.setNim)({
                    token: token
                  });

                  _wepy2.default.switchTab({
                    url: '/pages/chatrooms'
                  });
                  _context.next = 23;
                  break;

                case 20:
                  _context.prev = 20;
                  _context.t0 = _context['catch'](7);

                  console.error('create user', _context.t0);

                case 23:
                  _context.next = 28;
                  break;

                case 25:
                  _this2.formError = rules[errorKey].prompt;
                  _this2.formErrorKey = errorKey;
                  _this2.requesting = false;

                case 28:
                case 'end':
                  return _context.stop();
              }
            }
          }, _callee, _this2, [[7, 20]]);
        }))();
      }
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  return Register;
}(_wepy2.default.page)) || _class);

Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Register , 'pages/register'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlZ2lzdGVyLmpzIl0sIm5hbWVzIjpbImFwaSIsInJ1bGVzIiwiY29tcGFueSIsInByb21wdCIsInZhbGlkYXRlIiwiZW1haWwiLCJwaG9uZSIsIlJlZ2lzdGVyIiwidXNlciIsInN0YXRlIiwiY29tbW9uIiwic2V0VXNlciIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCJkYXRhIiwicmVxdWVzdGluZyIsImZvcm1FcnJvciIsImZvcm1FcnJvcktleSIsIm1ldGhvZHMiLCJiaW5kRm9jdXMiLCJlIiwic3VibWl0IiwiZXJyb3JLZXkiLCJkZXRhaWwiLCJ2YWx1ZSIsImFjY2lkIiwibmlja05hbWUiLCJhdmF0YXJVcmwiLCJpbmZvcyIsImNyZWRpdHMiLCJjcmVhdGUiLCJuYW1lIiwiaWNvbiIsInByb3BzIiwidG9rZW4iLCJjcmVhdGVVc2VyIiwic3dpdGNoVGFiIiwidXJsIiwiY29uc29sZSIsImVycm9yIiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBOzs7O0FBQ0E7O0FBQ0E7Ozs7QUFDQTs7SUFBWUEsRzs7QUFFWjs7QUFLQTs7Ozs7O0FBRUE7QUFDQSxJQUFNQyxRQUFRO0FBQ1pDLFdBQVM7QUFDUEMsWUFBUSxjQUREO0FBRVBDLGNBQVUsK0JBQWUsQ0FBZixFQUFrQixFQUFsQjtBQUZILEdBREc7QUFLWkMsU0FBTztBQUNMRixZQUFRLE9BREg7QUFFTEM7QUFGSyxHQUxLO0FBU1pFLFNBQU87QUFDTEgsWUFBUSxTQURIO0FBRUxDO0FBRks7QUFUSyxDQUFkOztBQWVBLElBQU1BLFdBQVcsMEJBQVVILEtBQVYsQ0FBakI7O0lBU3FCTSxRLFdBUHBCLHdCQUFRO0FBQ1BDLE1BRE8sZ0JBQ0ZDLEtBREUsRUFDSztBQUNWLFdBQU9BLE1BQU1DLE1BQU4sQ0FBYUYsSUFBcEI7QUFDRDtBQUhNLENBQVIsRUFJRTtBQUNERztBQURDLENBSkYsQzs7Ozs7Ozs7Ozs7Ozs7Z05BUUNDLE0sR0FBUztBQUNQQyw4QkFBd0I7QUFEakIsSyxRQUlUQyxJLEdBQU87QUFDTEMsa0JBQVksS0FEUDtBQUVMQyxpQkFBVyxJQUZOO0FBR0xDLG9CQUFjO0FBSFQsSyxRQU1QQyxPLEdBQVU7QUFDUkMsZUFEUSxxQkFDRUMsQ0FERixFQUNLO0FBQ1gsYUFBS0osU0FBTCxHQUFpQixJQUFqQjtBQUNBLGFBQUtDLFlBQUwsR0FBb0IsSUFBcEI7QUFDRCxPQUpPO0FBTUZJLFlBTkUsa0JBTUtELENBTkwsRUFNUTtBQUFBOztBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDUkUsMEJBRFEsR0FDR2xCLFNBQVNnQixFQUFFRyxNQUFGLENBQVNDLEtBQWxCLENBREg7QUFBQSxvQ0FFb0JKLEVBQUVHLE1BQUYsQ0FBU0MsS0FGN0IsRUFFTnRCLE9BRk0sbUJBRU5BLE9BRk0sRUFFR0ksS0FGSCxtQkFFR0EsS0FGSCxFQUVVRCxLQUZWLG1CQUVVQSxLQUZWO0FBR05NLHlCQUhNLEdBR00sT0FBS08sT0FIWCxDQUdOUCxPQUhNOztBQUFBLHNCQUlUVyxRQUpTO0FBQUE7QUFBQTtBQUFBOztBQUtaLHlCQUFLUCxVQUFMLEdBQWtCLElBQWxCOztBQUxZLDBCQU8yQixPQUFLUCxJQVBoQyxFQU9KaUIsS0FQSSxTQU9KQSxLQVBJLEVBT0dDLFFBUEgsU0FPR0EsUUFQSCxFQU9hQyxTQVBiLFNBT2FBLFNBUGI7QUFTTkMsdUJBVE0sR0FTRTtBQUNaMUIsb0NBRFk7QUFFWkksZ0NBRlk7QUFHWkQsZ0NBSFk7QUFJWndCLDZCQUFTO0FBSkcsbUJBVEY7QUFBQTtBQUFBO0FBQUEseUJBaUJjLGNBQUlDLE1BQUosQ0FBVztBQUNqQ0wsZ0NBRGlDO0FBRWpDTSwwQkFBTUwsUUFGMkI7QUFHakNNLDBCQUFNTCxTQUgyQjtBQUlqQ00sMkJBQU9MO0FBSjBCLG1CQUFYLENBakJkOztBQUFBO0FBQUE7QUFpQkZNLHVCQWpCRSxTQWlCRkEsS0FqQkU7QUFBQTtBQUFBLHlCQXdCU2xDLElBQUltQyxVQUFKLENBQWVWLEtBQWYsRUFBc0JTLEtBQXRCLEVBQTZCTixLQUE3QixDQXhCVDs7QUFBQTtBQXdCSnBCLHNCQXhCSTs7O0FBMEJWRyxxREFDSyxPQUFLSCxJQURWLEVBRUtBLElBRkw7QUFJQSxzQ0FBTztBQUNMMEI7QUFESyxtQkFBUDs7QUFJQSxpQ0FBS0UsU0FBTCxDQUFlO0FBQ2JDLHlCQUFLO0FBRFEsbUJBQWY7QUFsQ1U7QUFBQTs7QUFBQTtBQUFBO0FBQUE7O0FBc0NWQywwQkFBUUMsS0FBUixDQUFjLGFBQWQ7O0FBdENVO0FBQUE7QUFBQTs7QUFBQTtBQXlDWix5QkFBS3ZCLFNBQUwsR0FBaUJmLE1BQU1xQixRQUFOLEVBQWdCbkIsTUFBakM7QUFDQSx5QkFBS2MsWUFBTCxHQUFvQkssUUFBcEI7QUFDQSx5QkFBS1AsVUFBTCxHQUFrQixLQUFsQjs7QUEzQ1k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUE2Q2Y7QUFuRE8sSzs7OztFQVgwQixlQUFLeUIsSTtrQkFBdEJqQyxRIiwiZmlsZSI6InJlZ2lzdGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3dlcHktcmVkdXgnXG5pbXBvcnQgTklNIGZyb20gJy4uL3V0aWxzL25pbSdcbmltcG9ydCAqIGFzIGFwaSBmcm9tICcuLi9hcGlzL2FjY291bnQnXG5cbmltcG9ydCB7XG4gIHNldFVzZXIsXG4gIHNldE5pbVxufSBmcm9tICcuLi9hY3Rpb25zL2NvbW1vbidcblxuaW1wb3J0IHsgdmFsaWRhdG9yLCB2YWxpZGF0ZUxlbmd0aCwgdmFsaWRhdGVFbWFpbCwgdmFsaWRhdGVQaG9uZSB9IGZyb20gJy4uL3V0aWxzL3ZhbGlkYXRvcidcblxuLy8g5qCh6aqM6KeE5YiZ6YWN572uXG5jb25zdCBydWxlcyA9IHtcbiAgY29tcGFueToge1xuICAgIHByb21wdDogJ+WFrOWPuOWQjeensOWcqDEtMjDlrZfku6XlhoUnLFxuICAgIHZhbGlkYXRlOiB2YWxpZGF0ZUxlbmd0aCgxLCAyMClcbiAgfSxcbiAgZW1haWw6IHtcbiAgICBwcm9tcHQ6ICfpgq7nrrHkuI3lkIjms5UnLFxuICAgIHZhbGlkYXRlOiB2YWxpZGF0ZUVtYWlsXG4gIH0sXG4gIHBob25lOiB7XG4gICAgcHJvbXB0OiAn55S16K+d5Y+356CB5LiN5ZCI5rOVJyxcbiAgICB2YWxpZGF0ZTogdmFsaWRhdGVQaG9uZVxuICB9XG59XG5cbmNvbnN0IHZhbGlkYXRlID0gdmFsaWRhdG9yKHJ1bGVzKVxuXG5AY29ubmVjdCh7XG4gIHVzZXIoc3RhdGUpIHtcbiAgICByZXR1cm4gc3RhdGUuY29tbW9uLnVzZXJcbiAgfVxufSwge1xuICBzZXRVc2VyXG59KVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmVnaXN0ZXIgZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICBjb25maWcgPSB7XG4gICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+azqOWGjCdcbiAgfVxuXG4gIGRhdGEgPSB7XG4gICAgcmVxdWVzdGluZzogZmFsc2UsXG4gICAgZm9ybUVycm9yOiBudWxsLFxuICAgIGZvcm1FcnJvcktleTogbnVsbFxuICB9XG5cbiAgbWV0aG9kcyA9IHtcbiAgICBiaW5kRm9jdXMoZSkge1xuICAgICAgdGhpcy5mb3JtRXJyb3IgPSBudWxsXG4gICAgICB0aGlzLmZvcm1FcnJvcktleSA9IG51bGxcbiAgICB9LFxuXG4gICAgYXN5bmMgc3VibWl0KGUpIHtcbiAgICAgIGNvbnN0IGVycm9yS2V5ID0gdmFsaWRhdGUoZS5kZXRhaWwudmFsdWUpXG4gICAgICBjb25zdCB7IGNvbXBhbnksIHBob25lLCBlbWFpbCB9ID0gZS5kZXRhaWwudmFsdWVcbiAgICAgIGNvbnN0IHsgc2V0VXNlciB9ID0gdGhpcy5tZXRob2RzXG4gICAgICBpZiAoIWVycm9yS2V5KSB7XG4gICAgICAgIHRoaXMucmVxdWVzdGluZyA9IHRydWVcblxuICAgICAgICBjb25zdCB7IGFjY2lkLCBuaWNrTmFtZSwgYXZhdGFyVXJsIH0gPSB0aGlzLnVzZXJcblxuICAgICAgICBjb25zdCBpbmZvcyA9IHtcbiAgICAgICAgICBjb21wYW55LFxuICAgICAgICAgIHBob25lLFxuICAgICAgICAgIGVtYWlsLFxuICAgICAgICAgIGNyZWRpdHM6IDBcbiAgICAgICAgfVxuXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgY29uc3QgeyB0b2tlbiB9ID0gYXdhaXQgTklNLmNyZWF0ZSh7XG4gICAgICAgICAgICBhY2NpZCxcbiAgICAgICAgICAgIG5hbWU6IG5pY2tOYW1lLFxuICAgICAgICAgICAgaWNvbjogYXZhdGFyVXJsLFxuICAgICAgICAgICAgcHJvcHM6IGluZm9zXG4gICAgICAgICAgfSlcblxuICAgICAgICAgIGNvbnN0IHVzZXIgPSBhd2FpdCBhcGkuY3JlYXRlVXNlcihhY2NpZCwgdG9rZW4sIGluZm9zKVxuXG4gICAgICAgICAgc2V0VXNlcih7XG4gICAgICAgICAgICAuLi50aGlzLnVzZXIsXG4gICAgICAgICAgICAuLi51c2VyXG4gICAgICAgICAgfSlcbiAgICAgICAgICBzZXROaW0oe1xuICAgICAgICAgICAgdG9rZW5cbiAgICAgICAgICB9KVxuXG4gICAgICAgICAgd2VweS5zd2l0Y2hUYWIoe1xuICAgICAgICAgICAgdXJsOiAnL3BhZ2VzL2NoYXRyb29tcydcbiAgICAgICAgICB9KVxuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgY29uc29sZS5lcnJvcignY3JlYXRlIHVzZXInLCBlKVxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmZvcm1FcnJvciA9IHJ1bGVzW2Vycm9yS2V5XS5wcm9tcHRcbiAgICAgICAgdGhpcy5mb3JtRXJyb3JLZXkgPSBlcnJvcktleVxuICAgICAgICB0aGlzLnJlcXVlc3RpbmcgPSBmYWxzZVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIl19