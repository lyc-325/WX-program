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
      formErrorKey: null,
      showOpenId: ''
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlZ2lzdGVyLmpzIl0sIm5hbWVzIjpbImFwaSIsInJ1bGVzIiwiY29tcGFueSIsInByb21wdCIsInZhbGlkYXRlIiwiZW1haWwiLCJwaG9uZSIsIlJlZ2lzdGVyIiwidXNlciIsInN0YXRlIiwiY29tbW9uIiwic2V0VXNlciIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCJkYXRhIiwicmVxdWVzdGluZyIsImZvcm1FcnJvciIsImZvcm1FcnJvcktleSIsInNob3dPcGVuSWQiLCJtZXRob2RzIiwiYmluZEZvY3VzIiwiZSIsInN1Ym1pdCIsImVycm9yS2V5IiwiZGV0YWlsIiwidmFsdWUiLCJhY2NpZCIsIm5pY2tOYW1lIiwiYXZhdGFyVXJsIiwiZ2VuZGVyIiwiaW5mb3MiLCJjcmVkaXRzIiwidG9rZW4iLCJjcmVhdGUiLCJyZXNwIiwiY29kZSIsImxvZ2luIiwicGFzc3dvcmQiLCJ0YWtlTGFzdCIsImNyZWF0ZVVzZXIiLCJuYW1lIiwiaWNvbiIsIlRva2VuIiwiamZUb2tlbiIsInJlTGF1bmNoIiwidXJsIiwiY29uc29sZSIsImVycm9yIiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBOzs7O0FBQ0E7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOztJQUFZQSxHOztBQUVaOztBQUtBOzs7Ozs7QUFFQTtBQUNBLElBQU1DLFFBQVE7QUFDWkMsV0FBUztBQUNQQyxZQUFRLGNBREQ7QUFFUEMsY0FBVSwrQkFBZSxDQUFmLEVBQWtCLEVBQWxCO0FBRkgsR0FERztBQUtaQyxTQUFPO0FBQ0xGLFlBQVEsT0FESDtBQUVMQztBQUZLLEdBTEs7QUFTWkUsU0FBTztBQUNMSCxZQUFRLFNBREg7QUFFTEM7QUFGSztBQVRLLENBQWQ7O0FBZUEsSUFBTUEsV0FBVywwQkFBVUgsS0FBVixDQUFqQjs7SUFTcUJNLFEsV0FQcEIsd0JBQVE7QUFDUEMsTUFETyxnQkFDRkMsS0FERSxFQUNLO0FBQ1Ys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LHlCQUFLYyxZQUFMLEdBQW9CTSxRQUFwQjtBQUNBLHlCQUFLUixVQUFMLEdBQWtCLEtBQWxCOztBQTVEWTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQThEZjtBQTNGTyxLOzs7O0VBWjBCLGVBQUtpQyxJO2tCQUF0QnpDLFEiLCJmaWxlIjoicmVnaXN0ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAnd2VweS1yZWR1eCdcbmltcG9ydCBSIGZyb20gJy4uL2xpYnMvcmFtZGEnXG5pbXBvcnQgTklNIGZyb20gJy4uL3V0aWxzL25pbSdcbmltcG9ydCAqIGFzIGFwaSBmcm9tICcuLi9hcGlzL2FjY291bnQnXG5cbmltcG9ydCB7XG4gIHNldFVzZXIsXG4gIHNldE5pbVxufSBmcm9tICcuLi9hY3Rpb25zL2NvbW1vbidcblxuaW1wb3J0IHsgdmFsaWRhdG9yLCB2YWxpZGF0ZUxlbmd0aCwgdmFsaWRhdGVFbWFpbCwgdmFsaWRhdGVQaG9uZSB9IGZyb20gJy4uL3V0aWxzL3ZhbGlkYXRvcidcblxuLy8g5qCh6aqM6KeE5YiZ6YWN572uXG5jb25zdCBydWxlcyA9IHtcbiAgY29tcGFueToge1xuICAgIHByb21wdDogJ+WFrOWPuOWQjeensOWcqDEtMjDlrZfku6XlhoUnLFxuICAgIHZhbGlkYXRlOiB2YWxpZGF0ZUxlbmd0aCgxLCAyMClcbiAgfSxcbiAgZW1haWw6IHtcbiAgICBwcm9tcHQ6ICfpgq7nrrHkuI3lkIjms5UnLFxuICAgIHZhbGlkYXRlOiB2YWxpZGF0ZUVtYWlsXG4gIH0sXG4gIHBob25lOiB7XG4gICAgcHJvbXB0OiAn55S16K+d5Y+356CB5LiN5ZCI5rOVJyxcbiAgICB2YWxpZGF0ZTogdmFsaWRhdGVQaG9uZVxuICB9XG59XG5cbmNvbnN0IHZhbGlkYXRlID0gdmFsaWRhdG9yKHJ1bGVzKVxuXG5AY29ubmVjdCh7XG4gIHVzZXIoc3RhdGUpIHtcbiAgICByZXR1cm4gc3RhdGUuY29tbW9uLnVzZXJcbiAgfVxufSwge1xuICBzZXRVc2VyXG59KVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmVnaXN0ZXIgZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICBjb25maWcgPSB7XG4gICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+azqOWGjCdcbiAgfVxuXG4gIGRhdGEgPSB7XG4gICAgcmVxdWVzdGluZzogZmFsc2UsXG4gICAgZm9ybUVycm9yOiBudWxsLFxuICAgIGZvcm1FcnJvcktleTogbnVsbCxcbiAgICBzaG93T3BlbklkOiAnJ1xuICB9XG5cbiAgbWV0aG9kcyA9IHtcbiAgICBiaW5kRm9jdXMoZSkge1xuICAgICAgdGhpcy5mb3JtRXJyb3IgPSBudWxsXG4gICAgICB0aGlzLmZvcm1FcnJvcktleSA9IG51bGxcbiAgICB9LFxuLy8gICAgYXN5bmMgc2hvd1BhcnNpbmcoZSkge1xuLy8gICAgICB2YXIgc2Vzc2lvbktleSA9IGF3YWl0IHdlcHkuZ2V0U3RvcmFnZSh7XG4vLyAgICAgICAga2V5OiAnamZTZXNzaW9uS2V5Jyxcbi8vICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbihyZXMpIHtcbi8vICAgICAgICAgIHJldHVybiByZXMuZGF0YVxuLy8gICAgICAgIH1cbi8vICAgICAgfSlcbi8vICAgICAgdmFyIHNoYXJlSW5mbyA9IGF3YWl0IHdlcHkuZ2V0U3RvcmFnZSh7XG4vLyAgICAgICAga2V5OiAnamZTaGFyZUluZm8nLFxuLy8gICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlcykge1xuLy8gICAgICAgICAgcmV0dXJuIHJlcy5kYXRhXG4vLyAgICAgICAgfVxuLy8gICAgICB9KVxuLy8gICAgICBjb25zdCBzaGFyZVBhcnNlID0gYXdhaXQgYXBpLnNoYXJlUGFyc2luZyhzZXNzaW9uS2V5LCBzaGFyZUluZm8uZGF0YSlcbi8vICAgICAgdmFyIHNoYXJlVG9rZW4gPSBhd2FpdCB3ZXB5LmdldFN0b3JhZ2Uoe1xuLy8gICAgICAgIGtleTogJ2pmVG9rZW4nLFxuLy8gICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlcykge1xuLy8gICAgICAgICAgcmV0dXJuIHJlcy5kYXRhXG4vLyAgICAgICAgfVxuLy8gICAgICB9KVxuLy8gICAgICBjb25zb2xlLmxvZyhzaGFyZVBhcnNlKVxuLy8gICAgICB2YXIgc2hhcmVPcGVuaWQgPSBhd2FpdCBhcGkuY2hlY2tPcGVuR2lkKHNoYXJlVG9rZW4sIHNoYXJlUGFyc2UpXG4vLyAgICAgIGNvbnNvbGUubG9nKHNoYXJlT3BlbmlkKVxuLy8gICAgfSxcbiAgICBhc3luYyBzdWJtaXQoZSkge1xuICAgICAgY29uc3QgZXJyb3JLZXkgPSB2YWxpZGF0ZShlLmRldGFpbC52YWx1ZSlcbiAgICAgIGNvbnN0IHsgY29tcGFueSwgcGhvbmUsIGVtYWlsIH0gPSBlLmRldGFpbC52YWx1ZVxuICAgICAgY29uc3QgeyBzZXRVc2VyIH0gPSB0aGlzLm1ldGhvZHNcbiAgICAgIGlmICghZXJyb3JLZXkpIHtcbiAgICAgICAgdGhpcy5yZXF1ZXN0aW5nID0gdHJ1ZVxuXG4gICAgICAgIGNvbnN0IHsgYWNjaWQsIG5pY2tOYW1lLCBhdmF0YXJVcmwsIGdlbmRlciB9ID0gdGhpcy51c2VyXG5cbiAgICAgICAgY29uc3QgaW5mb3MgPSB7XG4gICAgICAgICAgY29tcGFueSxcbiAgICAgICAgICBwaG9uZSxcbiAgICAgICAgICBlbWFpbCxcbiAgICAgICAgICBnZW5kZXIsXG4gICAgICAgICAgY3JlZGl0czogMFxuICAgICAgICB9XG4gICAgICAgIGxldCB0b2tlblxuICAgICAgICB0cnkge1xuICAgICAgICAgIGNvbnN0IHJlc3AgPSBhd2FpdCBOSU0uY3JlYXRlKFxuICAgICAgICAgICAgYWNjaWQsXG4gICAgICAgICAgICBuaWNrTmFtZSxcbiAgICAgICAgICAgIGF2YXRhclVybCxcbiAgICAgICAgICAgIGluZm9zXG4gICAgICAgICAgKVxuICAgICAgICAgIHRva2VuID0gcmVzcC50b2tlblxuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgaWYgKGUuY29kZSA9PT0gNDE0KSB7XG4gICAgICAgICAgICBjb25zdCByZXNwID0gYXdhaXQgTklNLmxvZ2luKGFjY2lkKVxuICAgICAgICAgICAgdG9rZW4gPSByZXNwLnRva2VuXG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBjb25zdCBwYXNzd29yZCA9IFIudGFrZUxhc3QoNSkoYWNjaWQpXG4gICAgICAgICAgY29uc3QgdXNlciA9IGF3YWl0IGFwaS5jcmVhdGVVc2VyKGFjY2lkLCBwYXNzd29yZCwge1xuICAgICAgICAgICAgLi4uaW5mb3MsXG4gICAgICAgICAgICBuYW1lOiBuaWNrTmFtZSxcbiAgICAgICAgICAgIGljb246IGF2YXRhclVybFxuICAgICAgICAgIH0pXG4gICAgICAgICAgY29uc3QgeyBUb2tlbiB9ID0gdXNlclxuXG4gICAgICAgICAgc2V0VXNlcih7XG4gICAgICAgICAgICAuLi50aGlzLnVzZXIsXG4gICAgICAgICAgICAuLi51c2VyLFxuICAgICAgICAgICAgamZUb2tlbjogVG9rZW5cbiAgICAgICAgICB9KVxuXG4gICAgICAgICAgc2V0TmltKHtcbiAgICAgICAgICAgIHRva2VuXG4gICAgICAgICAgfSlcblxuICAgICAgICAgIHdlcHkucmVMYXVuY2goe1xuICAgICAgICAgICAgdXJsOiAnL3BhZ2VzL2NoYXRyb29tcydcbiAgICAgICAgICB9KVxuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgY29uc29sZS5lcnJvcignY3JlYXRlIHVzZXInLCBlKVxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmZvcm1FcnJvciA9IHJ1bGVzW2Vycm9yS2V5XS5wcm9tcHRcbiAgICAgICAgdGhpcy5mb3JtRXJyb3JLZXkgPSBlcnJvcktleVxuICAgICAgICB0aGlzLnJlcXVlc3RpbmcgPSBmYWxzZVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIl19