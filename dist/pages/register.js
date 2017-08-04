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
          var errorKey, _e$detail$value, company, phone, email, setUser, _user, accid, nickName, avatarUrl, gender, infos, token, resp, _resp, password, user, Token, backAccid;

          return _regenerator2.default.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  errorKey = validate(e.detail.value);
                  _e$detail$value = e.detail.value, company = _e$detail$value.company, phone = _e$detail$value.phone, email = _e$detail$value.email;
                  setUser = _this2.methods.setUser;

                  if (errorKey) {
                    _context.next = 44;
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
                  _context.next = 32;
                  return _wepy2.default.getStorage({
                    key: 'backAccid',
                    success: function success(res) {
                      return res.data;
                    }
                  });

                case 32:
                  backAccid = _context.sent;

                  if (!backAccid) {
                    _context.next = 36;
                    break;
                  }

                  _context.next = 36;
                  return api.checkOpenGid(Token, backAccid.data);

                case 36:
                  _wepy2.default.reLaunch({
                    url: '/pages/chatrooms'
                  });
                  _context.next = 42;
                  break;

                case 39:
                  _context.prev = 39;
                  _context.t1 = _context['catch'](22);

                  console.error('create user', _context.t1);

                case 42:
                  _context.next = 47;
                  break;

                case 44:
                  _this2.formError = rules[errorKey].prompt;
                  _this2.formErrorKey = errorKey;
                  _this2.requesting = false;

                case 47:
                case 'end':
                  return _context.stop();
              }
            }
          }, _callee, _this2, [[8, 15], [22, 39]]);
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlZ2lzdGVyLmpzIl0sIm5hbWVzIjpbImFwaSIsInJ1bGVzIiwiY29tcGFueSIsInByb21wdCIsInZhbGlkYXRlIiwiZW1haWwiLCJwaG9uZSIsIlJlZ2lzdGVyIiwidXNlciIsInN0YXRlIiwiY29tbW9uIiwic2V0VXNlciIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCJkYXRhIiwicmVxdWVzdGluZyIsImZvcm1FcnJvciIsImZvcm1FcnJvcktleSIsInNob3dPcGVuSWQiLCJ1c2VyRGF0YSIsIm1ldGhvZHMiLCJiaW5kRm9jdXMiLCJlIiwic3VibWl0IiwiZXJyb3JLZXkiLCJkZXRhaWwiLCJ2YWx1ZSIsImFjY2lkIiwibmlja05hbWUiLCJhdmF0YXJVcmwiLCJnZW5kZXIiLCJpbmZvcyIsImNyZWRpdHMiLCJ0b2tlbiIsImNyZWF0ZSIsInJlc3AiLCJjb2RlIiwibG9naW4iLCJwYXNzd29yZCIsInRha2VMYXN0IiwiY3JlYXRlVXNlciIsIm5hbWUiLCJpY29uIiwiVG9rZW4iLCJqZlRva2VuIiwiZ2V0U3RvcmFnZSIsImtleSIsInN1Y2Nlc3MiLCJyZXMiLCJiYWNrQWNjaWQiLCJjaGVja09wZW5HaWQiLCJyZUxhdW5jaCIsInVybCIsImNvbnNvbGUiLCJlcnJvciIsImdldFVzZXJJbmZvIiwidXNlckluZm8iLCIkYXBwbHkiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBOzs7O0FBQ0E7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOztJQUFZQSxHOztBQUVaOztBQUtBOzs7Ozs7QUFFQTtBQUNBLElBQU1DLFFBQVE7QUFDWkMsV0FBUztBQUNQQyxZQUFRLGNBREQ7QUFFUEMsY0FBVSwrQkFBZSxDQUFmLEVBQWtCLEVBQWxCO0FBRkgsR0FERztBQUtaQyxTQUFPO0FBQ0xGLFlBQVEsT0FESDtBQUVMQztBQUZLLEdBTEs7QUFTWkUsU0FBTztBQUNMSCxZQUFRLFNBREg7QUFFTEM7QUFGSztBQVRLLENBQWQ7O0FBZUEsSUFBTUEsV0FBVywwQkFBVUgsS0FBVixDQUFqQjs7SUFTcUJNLFEsV0FQcEIsd0JBQVE7QUFDUEMsTUFETyxnQkFDRkMsS0FERSxFQUNLO0FBQ1YsV0FBT0EsTUFBTUMsTUFBTixDQUFhRixJQUFwQjtBQUNEO0FBSE0sQ0FBUixFQUlFO0FBQ0RHO0FBREMsQ0FKRixDOzs7Ozs7Ozs7Ozs7OztnTkFRQ0MsTSxHQUFTO0FBQ1BDLDhCQUF3QjtBQURqQixLLFFBSVRDLEksR0FBTztBQUNMQyxrQkFBWSxLQURQO0FBRUxDLGlCQUFXLElBRk47QUFHTEMsb0JBQWMsSUFIVDtBQUlMQyxrQkFBWSxFQUpQO0FBS0xDLGdCQUFVO0FBTEwsSyxRQVFQQyxPLEdBQVU7QUFDUkMsZUFEUSxxQkFDRUMsQ0FERixFQUNLO0FBQ1gsYUFBS04sU0FBTCxHQUFpQixJQUFqQjtBQUNBLGFBQUtDLFlBQUwsR0FBb0IsSUFBcEI7QUFDRCxPQUpPOztBQUtaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNVTSxZQTdCRSxrQkE2QktELENBN0JMLEVBNkJRO0FBQUE7O0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNSRSwwQkFEUSxHQUNHcEIsU0FBU2tCLEVBQUVHLE1BQUYsQ0FBU0MsS0FBbEIsQ0FESDtBQUFBLG9DQUVvQkosRUFBRUcsTUFBRixDQUFTQyxLQUY3QixFQUVOeEIsT0FGTSxtQkFFTkEsT0FGTSxFQUVHSSxLQUZILG1CQUVHQSxLQUZILEVBRVVELEtBRlYsbUJBRVVBLEtBRlY7QUFHTk0seUJBSE0sR0FHTSxPQUFLUyxPQUhYLENBR05ULE9BSE07O0FBQUEsc0JBSVRhLFFBSlM7QUFBQTtBQUFBO0FBQUE7O0FBS1oseUJBQUtULFVBQUwsR0FBa0IsSUFBbEI7O0FBTFksMEJBT21DLE9BQUtQLElBUHhDLEVBT0ptQixLQVBJLFNBT0pBLEtBUEksRUFPR0MsUUFQSCxTQU9HQSxRQVBILEVBT2FDLFNBUGIsU0FPYUEsU0FQYixFQU93QkMsTUFQeEIsU0FPd0JBLE1BUHhCO0FBU05DLHVCQVRNLEdBU0U7QUFDWjdCLG9DQURZO0FBRVpJLGdDQUZZO0FBR1pELGdDQUhZO0FBSVp5QixrQ0FKWTtBQUtaRSw2QkFBUztBQUxHLG1CQVRGO0FBZ0JSQyx1QkFoQlE7QUFBQTtBQUFBO0FBQUEseUJBa0JTLGNBQUlDLE1BQUosQ0FDakJQLEtBRGlCLEVBRWpCQyxRQUZpQixFQUdqQkMsU0FIaUIsRUFJakJFLEtBSmlCLENBbEJUOztBQUFBO0FBa0JKSSxzQkFsQkk7O0FBd0JWRiwwQkFBUUUsS0FBS0YsS0FBYjtBQXhCVTtBQUFBOztBQUFBO0FBQUE7QUFBQTs7QUFBQSx3QkEwQk4sWUFBRUcsSUFBRixLQUFXLEdBMUJMO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUEseUJBMkJXLGNBQUlDLEtBQUosQ0FBVVYsS0FBVixDQTNCWDs7QUFBQTtBQTJCRlEsdUJBM0JFOztBQTRCUkYsMEJBQVFFLE1BQUtGLEtBQWI7O0FBNUJRO0FBQUE7QUFpQ0pLLDBCQWpDSSxHQWlDTyxnQkFBRUMsUUFBRixDQUFXLENBQVgsRUFBY1osS0FBZCxDQWpDUDtBQUFBO0FBQUEseUJBa0NTM0IsSUFBSXdDLFVBQUosQ0FBZWIsS0FBZixFQUFzQlcsUUFBdEIsNkJBQ2RQLEtBRGM7QUFFakJVLDBCQUFNYixRQUZXO0FBR2pCYywwQkFBTWI7QUFIVyxxQkFsQ1Q7O0FBQUE7QUFrQ0pyQixzQkFsQ0k7QUF1Q0ZtQyx1QkF2Q0UsR0F1Q1FuQyxJQXZDUixDQXVDRm1DLEtBdkNFOzs7QUF5Q1ZoQyxxREFDSyxPQUFLSCxJQURWLEVBRUtBLElBRkw7QUFHRW9DLDZCQUFTRDtBQUhYOztBQU1BLHNDQUFPO0FBQ0xWO0FBREssbUJBQVA7QUEvQ1U7QUFBQSx5QkFrRFksZUFBS1ksVUFBTCxDQUFnQjtBQUNwQ0MseUJBQUssV0FEK0I7QUFFcENDLDZCQUFTLGlCQUFTQyxHQUFULEVBQWM7QUFDckIsNkJBQU9BLElBQUlsQyxJQUFYO0FBQ0Q7QUFKbUMsbUJBQWhCLENBbERaOztBQUFBO0FBa0RObUMsMkJBbERNOztBQUFBLHVCQXlETkEsU0F6RE07QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQSx5QkEwREZqRCxJQUFJa0QsWUFBSixDQUFpQlAsS0FBakIsRUFBd0JNLFVBQVVuQyxJQUFsQyxDQTFERTs7QUFBQTtBQTREVixpQ0FBS3FDLFFBQUwsQ0FBYztBQUNaQyx5QkFBSztBQURPLG1CQUFkO0FBNURVO0FBQUE7O0FBQUE7QUFBQTtBQUFBOztBQWdFVkMsMEJBQVFDLEtBQVIsQ0FBYyxhQUFkOztBQWhFVTtBQUFBO0FBQUE7O0FBQUE7QUFtRVoseUJBQUt0QyxTQUFMLEdBQWlCZixNQUFNdUIsUUFBTixFQUFnQnJCLE1BQWpDO0FBQ0EseUJBQUtjLFlBQUwsR0FBb0JPLFFBQXBCO0FBQ0EseUJBQUtULFVBQUwsR0FBa0IsS0FBbEI7O0FBckVZO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBdUVmO0FBcEdPLEs7Ozs7Ozs7Ozs7Ozs7O3VCQXVHbUIsZUFBS3dDLFdBQUwsRTs7OztBQUFuQkMsd0IsU0FBQUEsUTs7QUFDUixxQkFBS3JDLFFBQUwsR0FBZ0JxQyxRQUFoQjtBQUNBLHFCQUFLQyxNQUFMOzs7Ozs7Ozs7Ozs7Ozs7Ozs7RUF0SGtDLGVBQUtDLEk7a0JBQXRCbkQsUSIsImZpbGUiOiJyZWdpc3Rlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICd3ZXB5LXJlZHV4J1xuaW1wb3J0IFIgZnJvbSAnLi4vbGlicy9yYW1kYSdcbmltcG9ydCBOSU0gZnJvbSAnLi4vdXRpbHMvbmltJ1xuaW1wb3J0ICogYXMgYXBpIGZyb20gJy4uL2FwaXMvYWNjb3VudCdcblxuaW1wb3J0IHtcbiAgc2V0VXNlcixcbiAgc2V0TmltXG59IGZyb20gJy4uL2FjdGlvbnMvY29tbW9uJ1xuXG5pbXBvcnQgeyB2YWxpZGF0b3IsIHZhbGlkYXRlTGVuZ3RoLCB2YWxpZGF0ZUVtYWlsLCB2YWxpZGF0ZVBob25lIH0gZnJvbSAnLi4vdXRpbHMvdmFsaWRhdG9yJ1xuXG4vLyDmoKHpqozop4TliJnphY3nva5cbmNvbnN0IHJ1bGVzID0ge1xuICBjb21wYW55OiB7XG4gICAgcHJvbXB0OiAn5YWs5Y+45ZCN56ew5ZyoMS0yMOWtl+S7peWGhScsXG4gICAgdmFsaWRhdGU6IHZhbGlkYXRlTGVuZ3RoKDEsIDIwKVxuICB9LFxuICBlbWFpbDoge1xuICAgIHByb21wdDogJ+mCrueuseS4jeWQiOazlScsXG4gICAgdmFsaWRhdGU6IHZhbGlkYXRlRW1haWxcbiAgfSxcbiAgcGhvbmU6IHtcbiAgICBwcm9tcHQ6ICfnlLXor53lj7fnoIHkuI3lkIjms5UnLFxuICAgIHZhbGlkYXRlOiB2YWxpZGF0ZVBob25lXG4gIH1cbn1cblxuY29uc3QgdmFsaWRhdGUgPSB2YWxpZGF0b3IocnVsZXMpXG5cbkBjb25uZWN0KHtcbiAgdXNlcihzdGF0ZSkge1xuICAgIHJldHVybiBzdGF0ZS5jb21tb24udXNlclxuICB9XG59LCB7XG4gIHNldFVzZXJcbn0pXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSZWdpc3RlciBleHRlbmRzIHdlcHkucGFnZSB7XG4gIGNvbmZpZyA9IHtcbiAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn5rOo5YaMJ1xuICB9XG5cbiAgZGF0YSA9IHtcbiAgICByZXF1ZXN0aW5nOiBmYWxzZSxcbiAgICBmb3JtRXJyb3I6IG51bGwsXG4gICAgZm9ybUVycm9yS2V5OiBudWxsLFxuICAgIHNob3dPcGVuSWQ6ICcnLFxuICAgIHVzZXJEYXRhOiB7fVxuICB9XG5cbiAgbWV0aG9kcyA9IHtcbiAgICBiaW5kRm9jdXMoZSkge1xuICAgICAgdGhpcy5mb3JtRXJyb3IgPSBudWxsXG4gICAgICB0aGlzLmZvcm1FcnJvcktleSA9IG51bGxcbiAgICB9LFxuLy8gICAgYXN5bmMgc2hvd1BhcnNpbmcoZSkge1xuLy8gICAgICB2YXIgc2Vzc2lvbktleSA9IGF3YWl0IHdlcHkuZ2V0U3RvcmFnZSh7XG4vLyAgICAgICAga2V5OiAnamZTZXNzaW9uS2V5Jyxcbi8vICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbihyZXMpIHtcbi8vICAgICAgICAgIHJldHVybiByZXMuZGF0YVxuLy8gICAgICAgIH1cbi8vICAgICAgfSlcbi8vICAgICAgdmFyIHNoYXJlSW5mbyA9IGF3YWl0IHdlcHkuZ2V0U3RvcmFnZSh7XG4vLyAgICAgICAga2V5OiAnamZTaGFyZUluZm8nLFxuLy8gICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlcykge1xuLy8gICAgICAgICAgcmV0dXJuIHJlcy5kYXRhXG4vLyAgICAgICAgfVxuLy8gICAgICB9KVxuLy8gICAgICBjb25zdCBzaGFyZVBhcnNlID0gYXdhaXQgYXBpLnNoYXJlUGFyc2luZyhzZXNzaW9uS2V5LCBzaGFyZUluZm8uZGF0YSlcbi8vICAgICAgdmFyIHNoYXJlVG9rZW4gPSBhd2FpdCB3ZXB5LmdldFN0b3JhZ2Uoe1xuLy8gICAgICAgIGtleTogJ2pmVG9rZW4nLFxuLy8gICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlcykge1xuLy8gICAgICAgICAgcmV0dXJuIHJlcy5kYXRhXG4vLyAgICAgICAgfVxuLy8gICAgICB9KVxuLy8gICAgICBjb25zb2xlLmxvZyhzaGFyZVBhcnNlKVxuLy8gICAgICB2YXIgc2hhcmVPcGVuaWQgPSBhd2FpdCBhcGkuY2hlY2tPcGVuR2lkKHNoYXJlVG9rZW4sIHNoYXJlUGFyc2UpXG4vLyAgICAgIGNvbnNvbGUubG9nKHNoYXJlT3BlbmlkKVxuLy8gICAgfSxcbiAgICBhc3luYyBzdWJtaXQoZSkge1xuICAgICAgY29uc3QgZXJyb3JLZXkgPSB2YWxpZGF0ZShlLmRldGFpbC52YWx1ZSlcbiAgICAgIGNvbnN0IHsgY29tcGFueSwgcGhvbmUsIGVtYWlsIH0gPSBlLmRldGFpbC52YWx1ZVxuICAgICAgY29uc3QgeyBzZXRVc2VyIH0gPSB0aGlzLm1ldGhvZHNcbiAgICAgIGlmICghZXJyb3JLZXkpIHtcbiAgICAgICAgdGhpcy5yZXF1ZXN0aW5nID0gdHJ1ZVxuXG4gICAgICAgIGNvbnN0IHsgYWNjaWQsIG5pY2tOYW1lLCBhdmF0YXJVcmwsIGdlbmRlciB9ID0gdGhpcy51c2VyXG5cbiAgICAgICAgY29uc3QgaW5mb3MgPSB7XG4gICAgICAgICAgY29tcGFueSxcbiAgICAgICAgICBwaG9uZSxcbiAgICAgICAgICBlbWFpbCxcbiAgICAgICAgICBnZW5kZXIsXG4gICAgICAgICAgY3JlZGl0czogMFxuICAgICAgICB9XG4gICAgICAgIGxldCB0b2tlblxuICAgICAgICB0cnkge1xuICAgICAgICAgIGNvbnN0IHJlc3AgPSBhd2FpdCBOSU0uY3JlYXRlKFxuICAgICAgICAgICAgYWNjaWQsXG4gICAgICAgICAgICBuaWNrTmFtZSxcbiAgICAgICAgICAgIGF2YXRhclVybCxcbiAgICAgICAgICAgIGluZm9zXG4gICAgICAgICAgKVxuICAgICAgICAgIHRva2VuID0gcmVzcC50b2tlblxuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgaWYgKGUuY29kZSA9PT0gNDE0KSB7XG4gICAgICAgICAgICBjb25zdCByZXNwID0gYXdhaXQgTklNLmxvZ2luKGFjY2lkKVxuICAgICAgICAgICAgdG9rZW4gPSByZXNwLnRva2VuXG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBjb25zdCBwYXNzd29yZCA9IFIudGFrZUxhc3QoNSkoYWNjaWQpXG4gICAgICAgICAgY29uc3QgdXNlciA9IGF3YWl0IGFwaS5jcmVhdGVVc2VyKGFjY2lkLCBwYXNzd29yZCwge1xuICAgICAgICAgICAgLi4uaW5mb3MsXG4gICAgICAgICAgICBuYW1lOiBuaWNrTmFtZSxcbiAgICAgICAgICAgIGljb246IGF2YXRhclVybFxuICAgICAgICAgIH0pXG4gICAgICAgICAgY29uc3QgeyBUb2tlbiB9ID0gdXNlclxuXG4gICAgICAgICAgc2V0VXNlcih7XG4gICAgICAgICAgICAuLi50aGlzLnVzZXIsXG4gICAgICAgICAgICAuLi51c2VyLFxuICAgICAgICAgICAgamZUb2tlbjogVG9rZW5cbiAgICAgICAgICB9KVxuXG4gICAgICAgICAgc2V0TmltKHtcbiAgICAgICAgICAgIHRva2VuXG4gICAgICAgICAgfSlcbiAgICAgICAgICB2YXIgYmFja0FjY2lkID0gYXdhaXQgd2VweS5nZXRTdG9yYWdlKHtcbiAgICAgICAgICAgIGtleTogJ2JhY2tBY2NpZCcsXG4gICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbihyZXMpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHJlcy5kYXRhXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSlcbiAgICAgICAgICAvLyDlm57osIMg5Yqg56ev5YiGXG4gICAgICAgICAgaWYgKGJhY2tBY2NpZCkge1xuICAgICAgICAgICAgYXdhaXQgYXBpLmNoZWNrT3BlbkdpZChUb2tlbiwgYmFja0FjY2lkLmRhdGEpXG4gICAgICAgICAgfVxuICAgICAgICAgIHdlcHkucmVMYXVuY2goe1xuICAgICAgICAgICAgdXJsOiAnL3BhZ2VzL2NoYXRyb29tcydcbiAgICAgICAgICB9KVxuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgY29uc29sZS5lcnJvcignY3JlYXRlIHVzZXInLCBlKVxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmZvcm1FcnJvciA9IHJ1bGVzW2Vycm9yS2V5XS5wcm9tcHRcbiAgICAgICAgdGhpcy5mb3JtRXJyb3JLZXkgPSBlcnJvcktleVxuICAgICAgICB0aGlzLnJlcXVlc3RpbmcgPSBmYWxzZVxuICAgICAgfVxuICAgIH1cbiAgfVxuICBhc3luYyBvbkxvYWQoKSB7XG4gICAgY29uc3QgeyB1c2VySW5mbyB9ID0gYXdhaXQgd2VweS5nZXRVc2VySW5mbygpXG4gICAgdGhpcy51c2VyRGF0YSA9IHVzZXJJbmZvXG4gICAgdGhpcy4kYXBwbHkoKVxuICB9XG59XG4iXX0=