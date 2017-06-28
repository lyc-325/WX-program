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

var _account2 = _interopRequireDefault(_account);

var _common = require('./../actions/common.js');

var _validator = require('./../utils/validator.js');

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
      formError: null
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
                    _context.next = 19;
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
                  _context.next = 9;
                  return _nim2.default.create({
                    accid: accid,
                    name: nickName,
                    icon: avatarUrl,
                    props: infos
                  });

                case 9:
                  _ref2 = _context.sent;
                  token = _ref2.token;
                  _context.next = 13;
                  return _account2.default.createUser(accid, token, infos);

                case 13:
                  user = _context.sent;


                  setUser((0, _extends3.default)({}, _this2.user, user));
                  (0, _common.setNim)({
                    token: token
                  });

                  _wepy2.default.navigateTo({
                    url: 'pages/chatroom'
                  });
                  _context.next = 22;
                  break;

                case 19:
                  _this2.formError = rules[errorKey].prompt;
                  _this2.formErrorKey = errorKey;
                  _this2.requesting = false;

                case 22:
                case 'end':
                  return _context.stop();
              }
            }
          }, _callee, _this2);
        }))();
      }
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  return Register;
}(_wepy2.default.page)) || _class);

Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Register , 'pages/register'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlZ2lzdGVyLmpzIl0sIm5hbWVzIjpbInJ1bGVzIiwiY29tcGFueSIsInByb21wdCIsInZhbGlkYXRlIiwiZW1haWwiLCJwaG9uZSIsIlJlZ2lzdGVyIiwidXNlciIsInN0YXRlIiwiY29tbW9uIiwic2V0VXNlciIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCJkYXRhIiwicmVxdWVzdGluZyIsImZvcm1FcnJvciIsIm1ldGhvZHMiLCJiaW5kRm9jdXMiLCJlIiwiZm9ybUVycm9yS2V5Iiwic3VibWl0IiwiZXJyb3JLZXkiLCJkZXRhaWwiLCJ2YWx1ZSIsImFjY2lkIiwibmlja05hbWUiLCJhdmF0YXJVcmwiLCJpbmZvcyIsImNyZWRpdHMiLCJjcmVhdGUiLCJuYW1lIiwiaWNvbiIsInByb3BzIiwidG9rZW4iLCJjcmVhdGVVc2VyIiwibmF2aWdhdGVUbyIsInVybCIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTs7OztBQUNBOztBQUNBOzs7O0FBQ0E7Ozs7QUFFQTs7QUFLQTs7OztBQUVBO0FBQ0EsSUFBTUEsUUFBUTtBQUNaQyxXQUFTO0FBQ1BDLFlBQVEsY0FERDtBQUVQQyxjQUFVLCtCQUFlLENBQWYsRUFBa0IsRUFBbEI7QUFGSCxHQURHO0FBS1pDLFNBQU87QUFDTEYsWUFBUSxPQURIO0FBRUxDO0FBRkssR0FMSztBQVNaRSxTQUFPO0FBQ0xILFlBQVEsU0FESDtBQUVMQztBQUZLO0FBVEssQ0FBZDs7QUFlQSxJQUFNQSxXQUFXLDBCQUFVSCxLQUFWLENBQWpCOztJQVNxQk0sUSxXQVBwQix3QkFBUTtBQUNQQyxNQURPLGdCQUNGQyxLQURFLEVBQ0s7QUFDVixXQUFPQSxNQUFNQyxNQUFOLENBQWFGLElBQXBCO0FBQ0Q7QUFITSxDQUFSLEVBSUU7QUFDREc7QUFEQyxDQUpGLEM7Ozs7Ozs7Ozs7Ozs7O2dOQVFDQyxNLEdBQVM7QUFDUEMsOEJBQXdCO0FBRGpCLEssUUFJVEMsSSxHQUFPO0FBQ0xDLGtCQUFZLEtBRFA7QUFFTEMsaUJBQVc7QUFGTixLLFFBS1BDLE8sR0FBVTtBQUNSQyxlQURRLHFCQUNFQyxDQURGLEVBQ0s7QUFDWCxhQUFLSCxTQUFMLEdBQWlCLElBQWpCO0FBQ0EsYUFBS0ksWUFBTCxHQUFvQixJQUFwQjtBQUNELE9BSk87QUFNRkMsWUFORSxrQkFNS0YsQ0FOTCxFQU1RO0FBQUE7O0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNSRywwQkFEUSxHQUNHbEIsU0FBU2UsRUFBRUksTUFBRixDQUFTQyxLQUFsQixDQURIO0FBQUEsb0NBRW9CTCxFQUFFSSxNQUFGLENBQVNDLEtBRjdCLEVBRU50QixPQUZNLG1CQUVOQSxPQUZNLEVBRUdJLEtBRkgsbUJBRUdBLEtBRkgsRUFFVUQsS0FGVixtQkFFVUEsS0FGVjtBQUdOTSx5QkFITSxHQUdNLE9BQUtNLE9BSFgsQ0FHTk4sT0FITTs7QUFBQSxzQkFJVFcsUUFKUztBQUFBO0FBQUE7QUFBQTs7QUFLWix5QkFBS1AsVUFBTCxHQUFrQixJQUFsQjs7QUFMWSwwQkFPMkIsT0FBS1AsSUFQaEMsRUFPSmlCLEtBUEksU0FPSkEsS0FQSSxFQU9HQyxRQVBILFNBT0dBLFFBUEgsRUFPYUMsU0FQYixTQU9hQSxTQVBiO0FBU05DLHVCQVRNLEdBU0U7QUFDWjFCLG9DQURZO0FBRVpJLGdDQUZZO0FBR1pELGdDQUhZO0FBSVp3Qiw2QkFBUztBQUpHLG1CQVRGO0FBQUE7QUFBQSx5QkFnQlksY0FBSUMsTUFBSixDQUFXO0FBQ2pDTCxnQ0FEaUM7QUFFakNNLDBCQUFNTCxRQUYyQjtBQUdqQ00sMEJBQU1MLFNBSDJCO0FBSWpDTSwyQkFBT0w7QUFKMEIsbUJBQVgsQ0FoQlo7O0FBQUE7QUFBQTtBQWdCSk0sdUJBaEJJLFNBZ0JKQSxLQWhCSTtBQUFBO0FBQUEseUJBdUJPLGtCQUFJQyxVQUFKLENBQWVWLEtBQWYsRUFBc0JTLEtBQXRCLEVBQTZCTixLQUE3QixDQXZCUDs7QUFBQTtBQXVCTnBCLHNCQXZCTTs7O0FBeUJaRyxxREFDSyxPQUFLSCxJQURWLEVBRUtBLElBRkw7QUFJQSxzQ0FBTztBQUNMMEI7QUFESyxtQkFBUDs7QUFJQSxpQ0FBS0UsVUFBTCxDQUFnQjtBQUNkQyx5QkFBSztBQURTLG1CQUFoQjtBQWpDWTtBQUFBOztBQUFBO0FBcUNaLHlCQUFLckIsU0FBTCxHQUFpQmYsTUFBTXFCLFFBQU4sRUFBZ0JuQixNQUFqQztBQUNBLHlCQUFLaUIsWUFBTCxHQUFvQkUsUUFBcEI7QUFDQSx5QkFBS1AsVUFBTCxHQUFrQixLQUFsQjs7QUF2Q1k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUF5Q2Y7QUEvQ08sSzs7OztFQVYwQixlQUFLdUIsSTtrQkFBdEIvQixRIiwiZmlsZSI6InJlZ2lzdGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3dlcHktcmVkdXgnXG5pbXBvcnQgTklNIGZyb20gJy4uL3V0aWxzL25pbSdcbmltcG9ydCBhcGkgZnJvbSAnLi4vYXBpcy9hY2NvdW50J1xuXG5pbXBvcnQge1xuICBzZXRVc2VyLFxuICBzZXROaW1cbn0gZnJvbSAnLi4vYWN0aW9ucy9jb21tb24nXG5cbmltcG9ydCB7IHZhbGlkYXRvciwgdmFsaWRhdGVMZW5ndGgsIHZhbGlkYXRlRW1haWwsIHZhbGlkYXRlUGhvbmUgfSBmcm9tICcuLi91dGlscy92YWxpZGF0b3InXG5cbi8vIOagoemqjOinhOWImemFjee9rlxuY29uc3QgcnVsZXMgPSB7XG4gIGNvbXBhbnk6IHtcbiAgICBwcm9tcHQ6ICflhazlj7jlkI3np7DlnKgxLTIw5a2X5Lul5YaFJyxcbiAgICB2YWxpZGF0ZTogdmFsaWRhdGVMZW5ndGgoMSwgMjApXG4gIH0sXG4gIGVtYWlsOiB7XG4gICAgcHJvbXB0OiAn6YKu566x5LiN5ZCI5rOVJyxcbiAgICB2YWxpZGF0ZTogdmFsaWRhdGVFbWFpbFxuICB9LFxuICBwaG9uZToge1xuICAgIHByb21wdDogJ+eUteivneWPt+eggeS4jeWQiOazlScsXG4gICAgdmFsaWRhdGU6IHZhbGlkYXRlUGhvbmVcbiAgfVxufVxuXG5jb25zdCB2YWxpZGF0ZSA9IHZhbGlkYXRvcihydWxlcylcblxuQGNvbm5lY3Qoe1xuICB1c2VyKHN0YXRlKSB7XG4gICAgcmV0dXJuIHN0YXRlLmNvbW1vbi51c2VyXG4gIH1cbn0sIHtcbiAgc2V0VXNlclxufSlcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJlZ2lzdGVyIGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgY29uZmlnID0ge1xuICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICfms6jlhownXG4gIH1cblxuICBkYXRhID0ge1xuICAgIHJlcXVlc3Rpbmc6IGZhbHNlLFxuICAgIGZvcm1FcnJvcjogbnVsbFxuICB9XG5cbiAgbWV0aG9kcyA9IHtcbiAgICBiaW5kRm9jdXMoZSkge1xuICAgICAgdGhpcy5mb3JtRXJyb3IgPSBudWxsXG4gICAgICB0aGlzLmZvcm1FcnJvcktleSA9IG51bGxcbiAgICB9LFxuXG4gICAgYXN5bmMgc3VibWl0KGUpIHtcbiAgICAgIGNvbnN0IGVycm9yS2V5ID0gdmFsaWRhdGUoZS5kZXRhaWwudmFsdWUpXG4gICAgICBjb25zdCB7IGNvbXBhbnksIHBob25lLCBlbWFpbCB9ID0gZS5kZXRhaWwudmFsdWVcbiAgICAgIGNvbnN0IHsgc2V0VXNlciB9ID0gdGhpcy5tZXRob2RzXG4gICAgICBpZiAoIWVycm9yS2V5KSB7XG4gICAgICAgIHRoaXMucmVxdWVzdGluZyA9IHRydWVcblxuICAgICAgICBjb25zdCB7IGFjY2lkLCBuaWNrTmFtZSwgYXZhdGFyVXJsIH0gPSB0aGlzLnVzZXJcblxuICAgICAgICBjb25zdCBpbmZvcyA9IHtcbiAgICAgICAgICBjb21wYW55LFxuICAgICAgICAgIHBob25lLFxuICAgICAgICAgIGVtYWlsLFxuICAgICAgICAgIGNyZWRpdHM6IDBcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHsgdG9rZW4gfSA9IGF3YWl0IE5JTS5jcmVhdGUoe1xuICAgICAgICAgIGFjY2lkLFxuICAgICAgICAgIG5hbWU6IG5pY2tOYW1lLFxuICAgICAgICAgIGljb246IGF2YXRhclVybCxcbiAgICAgICAgICBwcm9wczogaW5mb3NcbiAgICAgICAgfSlcblxuICAgICAgICBjb25zdCB1c2VyID0gYXdhaXQgYXBpLmNyZWF0ZVVzZXIoYWNjaWQsIHRva2VuLCBpbmZvcylcblxuICAgICAgICBzZXRVc2VyKHtcbiAgICAgICAgICAuLi50aGlzLnVzZXIsXG4gICAgICAgICAgLi4udXNlclxuICAgICAgICB9KVxuICAgICAgICBzZXROaW0oe1xuICAgICAgICAgIHRva2VuXG4gICAgICAgIH0pXG5cbiAgICAgICAgd2VweS5uYXZpZ2F0ZVRvKHtcbiAgICAgICAgICB1cmw6ICdwYWdlcy9jaGF0cm9vbSdcbiAgICAgICAgfSlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuZm9ybUVycm9yID0gcnVsZXNbZXJyb3JLZXldLnByb21wdFxuICAgICAgICB0aGlzLmZvcm1FcnJvcktleSA9IGVycm9yS2V5XG4gICAgICAgIHRoaXMucmVxdWVzdGluZyA9IGZhbHNlXG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iXX0=