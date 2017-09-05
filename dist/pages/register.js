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
          var errorKey, _e$detail$value, name, company, token, ex, mobile, setUser, _user, accid, nickName, avatarUrl, infos, _token, resp, _resp, password, user, Token;

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

                  _user = _this2.user, accid = _user.accid, nickName = _user.nickName, avatarUrl = _user.avatarUrl;
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
                  return _nim2.default.create(accid, nickName, avatarUrl, infos);

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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlZ2lzdGVyLmpzIl0sIm5hbWVzIjpbImFwaSIsInJ1bGVzIiwiY29tcGFueSIsInByb21wdCIsInZhbGlkYXRlIiwibmFtZSIsIm1vYmlsZSIsInRva2VuIiwiZXgiLCJSZWdpc3RlciIsInVzZXIiLCJzdGF0ZSIsImNvbW1vbiIsInNldFVzZXIiLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiZGF0YSIsInJlcXVlc3RpbmciLCJmb3JtRXJyb3IiLCJmb3JtRXJyb3JLZXkiLCJzaG93T3BlbklkIiwidXNlckRhdGEiLCJtZXRob2RzIiwiYmluZEZvY3VzIiwiZSIsInN1Ym1pdCIsImVycm9yS2V5IiwiZGV0YWlsIiwidmFsdWUiLCJjb25zb2xlIiwibG9nIiwiYWNjaWQiLCJuaWNrTmFtZSIsImF2YXRhclVybCIsImluZm9zIiwiY3JlYXRlIiwicmVzcCIsImNvZGUiLCJsb2dpbiIsInBhc3N3b3JkIiwidGFrZUxhc3QiLCJjcmVhdGVVc2VyIiwiaWNvbiIsIlRva2VuIiwiamZUb2tlbiIsInJlTGF1bmNoIiwidXJsIiwiZXJyb3IiLCJnZXRVc2VySW5mbyIsInVzZXJJbmZvIiwiJGFwcGx5IiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTs7OztBQUNBOztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7SUFBWUEsRzs7QUFFWjs7QUFJQTs7Ozs7O0FBRUE7QUFDQSxJQUFNQyxRQUFRO0FBQ1pDLFdBQVM7QUFDUEMsWUFBUSxjQUREO0FBRVBDLGNBQVUsK0JBQWUsQ0FBZixFQUFrQixFQUFsQjtBQUZILEdBREc7QUFLWkMsUUFBTTtBQUNKRixZQUFRLFlBREo7QUFFSkMsY0FBVSwrQkFBZSxDQUFmLEVBQWtCLEVBQWxCO0FBRk4sR0FMTTtBQVNaRSxVQUFRO0FBQ05ILFlBQVEsU0FERjtBQUVOQztBQUZNLEdBVEk7QUFhWkcsU0FBTztBQUNMSixZQUFRLGNBREg7QUFFTEMs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LENBdUNGaUMsS0F2Q0U7OztBQXlDVjlCLHFEQUNLLE9BQUtILElBRFYsRUFFS0EsSUFGTDtBQUdFa0MsNkJBQVNEO0FBSFg7O0FBTVY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ1U7QUFDVjtBQUNBO0FBQ0E7QUFDVSxpQ0FBS0UsUUFBTCxDQUFjO0FBQ1pDLHlCQUFLO0FBRE8sbUJBQWQ7QUE1RFU7QUFBQTs7QUFBQTtBQUFBO0FBQUE7O0FBZ0VWakIsMEJBQVFrQixLQUFSLENBQWMsYUFBZDs7QUFoRVU7QUFBQTtBQUFBOztBQUFBO0FBbUVaLHlCQUFLN0IsU0FBTCxHQUFpQmpCLE1BQU15QixRQUFOLEVBQWdCdkIsTUFBakM7QUFDQSx5QkFBS2dCLFlBQUwsR0FBb0JPLFFBQXBCO0FBQ0EseUJBQUtULFVBQUwsR0FBa0IsS0FBbEI7O0FBckVZO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBdUVmO0FBcEdPLEs7Ozs7Ozs7Ozs7Ozs7O3VCQXVHbUIsZUFBSytCLFdBQUwsRTs7OztBQUFuQkMsd0IsU0FBQUEsUTs7QUFDUixxQkFBSzVCLFFBQUwsR0FBZ0I0QixRQUFoQjtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0kscUJBQUtDLE1BQUw7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQTdIa0MsZUFBS0MsSTtrQkFBdEIxQyxRIiwiZmlsZSI6InJlZ2lzdGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3dlcHktcmVkdXgnXG5pbXBvcnQgUiBmcm9tICcuLi9saWJzL3JhbWRhJ1xuaW1wb3J0IE5JTSBmcm9tICcuLi91dGlscy9uaW0nXG5pbXBvcnQgKiBhcyBhcGkgZnJvbSAnLi4vYXBpcy9hY2NvdW50J1xuXG5pbXBvcnQge1xuICBzZXRVc2VyXG59IGZyb20gJy4uL2FjdGlvbnMvY29tbW9uJ1xuXG5pbXBvcnQgeyB2YWxpZGF0b3IsIHZhbGlkYXRlTGVuZ3RoLCB2YWxpZGF0ZVBob25lIH0gZnJvbSAnLi4vdXRpbHMvdmFsaWRhdG9yJ1xuXG4vLyDmoKHpqozop4TliJnphY3nva5cbmNvbnN0IHJ1bGVzID0ge1xuICBjb21wYW55OiB7XG4gICAgcHJvbXB0OiAn5YWs5Y+45ZCN56ew5ZyoMS0yMOWtl+S7peWGhScsXG4gICAgdmFsaWRhdGU6IHZhbGlkYXRlTGVuZ3RoKDEsIDIwKVxuICB9LFxuICBuYW1lOiB7XG4gICAgcHJvbXB0OiAn5pi156ew5ZyoMS0xMOWtl+S7peWGhScsXG4gICAgdmFsaWRhdGU6IHZhbGlkYXRlTGVuZ3RoKDEsIDEwKVxuICB9LFxuICBtb2JpbGU6IHtcbiAgICBwcm9tcHQ6ICfnlLXor53lj7fnoIHkuI3lkIjms5UnLFxuICAgIHZhbGlkYXRlOiB2YWxpZGF0ZVBob25lXG4gIH0sXG4gIHRva2VuOiB7XG4gICAgcHJvbXB0OiAn6IGM5L2N5ZCN56ew5ZyoMS0yMOWtl+S7peWGhScsXG4gICAgdmFsaWRhdGU6IHZhbGlkYXRlTGVuZ3RoKDEsIDIwKVxuICB9LFxuICBleDoge1xuICAgIHByb21wdDogJ+S4u+imgee7j+iQpeWcqDEtMjDlrZfku6XlhoUnLFxuICAgIHZhbGlkYXRlOiB2YWxpZGF0ZUxlbmd0aCgxLCAyMClcbiAgfVxufVxuXG5jb25zdCB2YWxpZGF0ZSA9IHZhbGlkYXRvcihydWxlcylcblxuQGNvbm5lY3Qoe1xuICB1c2VyKHN0YXRlKSB7XG4gICAgcmV0dXJuIHN0YXRlLmNvbW1vbi51c2VyXG4gIH1cbn0sIHtcbiAgc2V0VXNlclxufSlcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJlZ2lzdGVyIGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgY29uZmlnID0ge1xuICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICfms6jlhownXG4gIH1cblxuICBkYXRhID0ge1xuICAgIHJlcXVlc3Rpbmc6IGZhbHNlLFxuICAgIGZvcm1FcnJvcjogbnVsbCxcbiAgICBmb3JtRXJyb3JLZXk6IG51bGwsXG4gICAgc2hvd09wZW5JZDogJycsXG4gICAgdXNlckRhdGE6IHt9XG4gIH1cblxuICBtZXRob2RzID0ge1xuICAgIGJpbmRGb2N1cyhlKSB7XG4gICAgICB0aGlzLmZvcm1FcnJvciA9IG51bGxcbiAgICAgIHRoaXMuZm9ybUVycm9yS2V5ID0gbnVsbFxuICAgIH0sXG4vLyAgICBhc3luYyBzaG93UGFyc2luZyhlKSB7XG4vLyAgICAgIHZhciBzZXNzaW9uS2V5ID0gYXdhaXQgd2VweS5nZXRTdG9yYWdlKHtcbi8vICAgICAgICBrZXk6ICdqZlNlc3Npb25LZXknLFxuLy8gICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlcykge1xuLy8gICAgICAgICAgcmV0dXJuIHJlcy5kYXRhXG4vLyAgICAgICAgfVxuLy8gICAgICB9KVxuLy8gICAgICB2YXIgc2hhcmVJbmZvID0gYXdhaXQgd2VweS5nZXRTdG9yYWdlKHtcbi8vICAgICAgICBrZXk6ICdqZlNoYXJlSW5mbycsXG4vLyAgICAgICAgc3VjY2VzczogZnVuY3Rpb24ocmVzKSB7XG4vLyAgICAgICAgICByZXR1cm4gcmVzLmRhdGFcbi8vICAgICAgICB9XG4vLyAgICAgIH0pXG4vLyAgICAgIGNvbnN0IHNoYXJlUGFyc2UgPSBhd2FpdCBhcGkuc2hhcmVQYXJzaW5nKHNlc3Npb25LZXksIHNoYXJlSW5mby5kYXRhKVxuLy8gICAgICB2YXIgc2hhcmVUb2tlbiA9IGF3YWl0IHdlcHkuZ2V0U3RvcmFnZSh7XG4vLyAgICAgICAga2V5OiAnamZUb2tlbicsXG4vLyAgICAgICAgc3VjY2VzczogZnVuY3Rpb24ocmVzKSB7XG4vLyAgICAgICAgICByZXR1cm4gcmVzLmRhdGFcbi8vICAgICAgICB9XG4vLyAgICAgIH0pXG4vLyAgICAgIGNvbnNvbGUubG9nKHNoYXJlUGFyc2UpXG4vLyAgICAgIHZhciBzaGFyZU9wZW5pZCA9IGF3YWl0IGFwaS5jaGVja09wZW5HaWQoc2hhcmVUb2tlbiwgc2hhcmVQYXJzZSlcbi8vICAgICAgY29uc29sZS5sb2coc2hhcmVPcGVuaWQpXG4vLyAgICB9LFxuICAgIGFzeW5jIHN1Ym1pdChlKSB7XG4gICAgICBjb25zdCBlcnJvcktleSA9IHZhbGlkYXRlKGUuZGV0YWlsLnZhbHVlKVxuICAgICAgY29uc29sZS5sb2coZS5kZXRhaWwudmFsdWUpXG4gICAgICBjb25zdCB7IG5hbWUsIGNvbXBhbnksIHRva2VuLCBleCwgbW9iaWxlIH0gPSBlLmRldGFpbC52YWx1ZVxuICAgICAgY29uc3QgeyBzZXRVc2VyIH0gPSB0aGlzLm1ldGhvZHNcbiAgICAgIGlmICghZXJyb3JLZXkpIHtcbiAgICAgICAgdGhpcy5yZXF1ZXN0aW5nID0gdHJ1ZVxuXG4gICAgICAgIGNvbnN0IHsgYWNjaWQsIG5pY2tOYW1lLCBhdmF0YXJVcmwgfSA9IHRoaXMudXNlclxuXG4gICAgICAgIGNvbnN0IGluZm9zID0ge1xuICAgICAgICAgIG5hbWUsXG4gICAgICAgICAgY29tcGFueSxcbiAgICAgICAgICB0b2tlbixcbiAgICAgICAgICBtb2JpbGUsXG4gICAgICAgICAgZXhcbiAgICAgICAgfVxuICAgICAgICBsZXQgdG9rZW5cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBjb25zdCByZXNwID0gYXdhaXQgTklNLmNyZWF0ZShcbiAgICAgICAgICAgIGFjY2lkLFxuICAgICAgICAgICAgbmlja05hbWUsXG4gICAgICAgICAgICBhdmF0YXJVcmwsXG4gICAgICAgICAgICBpbmZvc1xuICAgICAgICAgIClcbiAgICAgICAgICB0b2tlbiA9IHJlc3AudG9rZW5cbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgIGlmIChlLmNvZGUgPT09IDQxNCkge1xuICAgICAgICAgICAgY29uc3QgcmVzcCA9IGF3YWl0IE5JTS5sb2dpbihhY2NpZClcbiAgICAgICAgICAgIHRva2VuID0gcmVzcC50b2tlblxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgY29uc3QgcGFzc3dvcmQgPSBSLnRha2VMYXN0KDUpKGFjY2lkKVxuICAgICAgICAgIGNvbnN0IHVzZXIgPSBhd2FpdCBhcGkuY3JlYXRlVXNlcihhY2NpZCwgcGFzc3dvcmQsIHtcbiAgICAgICAgICAgIC4uLmluZm9zLFxuICAgICAgICAgICAgaWNvbjogYXZhdGFyVXJsXG4gICAgICAgICAgfSlcbiAgICAgICAgICBjb25zdCB7IFRva2VuIH0gPSB1c2VyXG5cbiAgICAgICAgICBzZXRVc2VyKHtcbiAgICAgICAgICAgIC4uLnRoaXMudXNlcixcbiAgICAgICAgICAgIC4uLnVzZXIsXG4gICAgICAgICAgICBqZlRva2VuOiBUb2tlblxuICAgICAgICAgIH0pXG5cbi8vICAgICAgICAgIHNldE5pbSh7XG4vLyAgICAgICAgICAgIHRva2VuXG4vLyAgICAgICAgICB9KVxuLy8gICAgICAgICAgdmFyIGJhY2tBY2NpZCA9IGF3YWl0IHdlcHkuZ2V0U3RvcmFnZSh7XG4vLyAgICAgICAgICAgIGtleTogJ2JhY2tBY2NpZCcsXG4vLyAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlcykge1xuLy8gICAgICAgICAgICAgIHJldHVybiByZXNcbi8vICAgICAgICAgICAgfVxuLy8gICAgICAgICAgfSlcbiAgICAgICAgICAvLyDlm57osIMg5Yqg56ev5YiGXG4vLyAgICAgICAgICBpZiAoYmFja0FjY2lkLmRhdGEgIT09ICcxMjMnKSB7XG4vLyAgICAgICAgICAgIGF3YWl0IGFwaS5jaGVja09wZW5HaWQoVG9rZW4sIGJhY2tBY2NpZC5kYXRhKVxuLy8gICAgICAgICAgfVxuICAgICAgICAgIHdlcHkucmVMYXVuY2goe1xuICAgICAgICAgICAgdXJsOiAnL3BhZ2VzL2NoYXRyb29tcydcbiAgICAgICAgICB9KVxuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgY29uc29sZS5lcnJvcignY3JlYXRlIHVzZXInLCBlKVxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmZvcm1FcnJvciA9IHJ1bGVzW2Vycm9yS2V5XS5wcm9tcHRcbiAgICAgICAgdGhpcy5mb3JtRXJyb3JLZXkgPSBlcnJvcktleVxuICAgICAgICB0aGlzLnJlcXVlc3RpbmcgPSBmYWxzZVxuICAgICAgfVxuICAgIH1cbiAgfVxuICBhc3luYyBvbkxvYWQoKSB7XG4gICAgY29uc3QgeyB1c2VySW5mbyB9ID0gYXdhaXQgd2VweS5nZXRVc2VySW5mbygpXG4gICAgdGhpcy51c2VyRGF0YSA9IHVzZXJJbmZvXG4vLyAgICB2YXIgYmFja0FjY2lkID0gYXdhaXQgd2VweS5nZXRTdG9yYWdlKHtcbi8vICAgICAga2V5OiAnYmFja0FjY2lkJyxcbi8vICAgICAgc3VjY2VzczogZnVuY3Rpb24ocmVzKSB7XG4vLyAgICAgICAgcmV0dXJuIHJlc1xuLy8gICAgICB9XG4vLyAgICB9KVxuLy8gICAgY29uc29sZS5sb2coJ+WKoOenr+WIhicsIGJhY2tBY2NpZClcbiAgICB0aGlzLiRhcHBseSgpXG4gIH1cbn1cbiJdfQ==