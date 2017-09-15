'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _extends2 = require('./../npm/babel-runtime/helpers/extends.js');

var _extends3 = _interopRequireDefault(_extends2);

var _regenerator = require('./../npm/babel-runtime/regenerator/index.js');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('./../npm/babel-runtime/helpers/asyncToGenerator.js');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _defineProperty2 = require('./../npm/babel-runtime/helpers/defineProperty.js');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

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
  },
  captcha: {
    prompt: '请填写验证码',
    validate: (0, _validator.validateLength)(1, 8)
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
      userData: {},
      codeButton: '获取验证码',
      disabled: false,
      newMobile: '',
      newName: ''
    }, _this.methods = {
      nameKeyInput: function nameKeyInput(e) {
        this.setData((0, _defineProperty3.default)({}, 'newName', e.detail.value));
        this.newName = e.detail.value;
        this.$apply();
      },
      mobileKeyInput: function mobileKeyInput(e) {
        this.setData((0, _defineProperty3.default)({}, 'newMobile', e.detail.value));
        this.newMobile = e.detail.value;
        this.$apply();
      },
      getCode: function getCode(e) {
        var _this2 = this;

        return (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee() {
          var name, mobile, that, time;
          return _regenerator2.default.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  name = _this2.newName;
                  mobile = _this2.newMobile;

                  if (!(!name || !mobile)) {
                    _context.next = 4;
                    break;
                  }

                  return _context.abrupt('return');

                case 4:
                  _context.next = 6;
                  return api.getCodeNum(name, mobile);

                case 6:
                  _this2.codeButton = '60';
                  _this2.disabled = true;
                  that = _this2;
                  time = setInterval(function () {
                    if (parseInt(that.codeButton)) {
                      that.codeButton = parseInt(that.codeButton) - 1;
                    } else {
                      that.codeButton = '发送验证码';
                      that.disabled = false;
                      clearInterval(time);
                    }
                    that.$apply();
                  }, 1000);

                case 10:
                case 'end':
                  return _context.stop();
              }
            }
          }, _callee, _this2);
        }))();
      },
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
        var _this3 = this;

        return (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee2() {
          var errorKey, _e$detail$value, name, company, token, ex, mobile, captcha, setUser, _user, accid, avatarUrl, infos, password, user, Token;

          return _regenerator2.default.wrap(function _callee2$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  errorKey = validate(e.detail.value);

                  console.log(e.detail.value);
                  _e$detail$value = e.detail.value, name = _e$detail$value.name, company = _e$detail$value.company, token = _e$detail$value.token, ex = _e$detail$value.ex, mobile = _e$detail$value.mobile, captcha = _e$detail$value.captcha;
                  setUser = _this3.methods.setUser;

                  if (errorKey) {
                    _context2.next = 33;
                    break;
                  }

                  _this3.requesting = true;

                  _user = _this3.user, accid = _user.accid, avatarUrl = _user.avatarUrl;
                  infos = {
                    name: name,
                    company: company,
                    token: token,
                    mobile: mobile,
                    ex: ex,
                    captcha: captcha
                    //        let token
                  };
                  _context2.prev = 8;
                  _context2.next = 11;
                  return _nim2.default.create(accid, name, avatarUrl, infos);

                case 11:
                  _context2.next = 18;
                  break;

                case 13:
                  _context2.prev = 13;
                  _context2.t0 = _context2['catch'](8);

                  if (!(_context2.t0.code === 414)) {
                    _context2.next = 18;
                    break;
                  }

                  _context2.next = 18;
                  return _nim2.default.login(accid);

                case 18:
                  _context2.prev = 18;
                  password = _ramda2.default.takeLast(5)(accid);
                  _context2.next = 22;
                  return api.createUser(accid, password, (0, _extends3.default)({}, infos, {
                    icon: avatarUrl
                  }));

                case 22:
                  user = _context2.sent;
                  Token = user.Token;


                  setUser((0, _extends3.default)({}, _this3.user, user, {
                    jfToken: Token
                  }));
                  _wepy2.default.reLaunch({
                    url: '/pages/chatrooms'
                  });
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
                  _context2.next = 31;
                  break;

                case 28:
                  _context2.prev = 28;
                  _context2.t1 = _context2['catch'](18);

                  console.error('create user', _context2.t1);

                case 31:
                  _context2.next = 36;
                  break;

                case 33:
                  _this3.formError = rules[errorKey].prompt;
                  _this3.formErrorKey = errorKey;
                  _this3.requesting = false;

                case 36:
                case 'end':
                  return _context2.stop();
              }
            }
          }, _callee2, _this3, [[8, 13], [18, 28]]);
        }))();
      }
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(Register, [{
    key: 'onLoad',
    value: function () {
      var _ref2 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee3() {
        var _ref3, userInfo;

        return _regenerator2.default.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return _wepy2.default.getUserInfo();

              case 2:
                _ref3 = _context3.sent;
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
                return _context3.stop();
            }
          }
        }, _callee3, this);
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlZ2lzdGVyLmpzIl0sIm5hbWVzIjpbImFwaSIsInJ1bGVzIiwiY29tcGFueSIsInByb21wdCIsInZhbGlkYXRlIiwibmFtZSIsIm1vYmlsZSIsInRva2VuIiwiZXgiLCJjYXB0Y2hhIiwiUmVnaXN0ZXIiLCJ1c2VyIiwic3RhdGUiLCJjb21tb24iLCJzZXRVc2VyIiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsImRhdGEiLCJyZXF1ZXN0aW5nIiwiZm9ybUVycm9yIiwiZm9ybUVycm9yS2V5Iiwic2hvd09wZW5JZCIsInVzZXJEYXRhIiwiY29kZUJ1dHRvbiIsImRpc2FibGVkIiwibmV3TW9iaWxlIiwibmV3TmFtZSIsIm1ldGhvZHMiLCJuYW1lS2V5SW5wdXQiLCJlIiwic2V0RGF0YSIsImRldGFpbCIsInZhbHVlIiwiJGFwcGx5IiwibW9iaWxlS2V5SW5wdXQiLCJnZXRDb2RlIiwiZ2V0Q29kZU51bSIsInRoYXQiLCJ0aW1lIiwic2V0SW50ZXJ2YWwiLCJwYXJzZUludCIsImNsZWFySW50ZXJ2YWwiLCJiaW5kRm9jdXMiLCJzdWJtaXQiLCJlcnJvcktleSIsImNvbnNvbGUiLCJsb2ciLCJhY2NpZCIsImF2YXRhclVybCIsImluZm9zIiwiY3JlYXRlIiwiY29kZSIsImxvZ2luIiwicGFzc3dvcmQiLCJ0YWtlTGFzdCIsImNyZWF0ZVVzZXIiLCJpY29uIiwiVG9rZW4iLCJqZlRva2VuIiwicmVMYXVuY2giLCJ1cmwiLCJlcnJvciIsImdldFVzZXJJbmZvIiwidXNlckluZm8iLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTs7OztBQUNBOztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7SUFBWUEsRzs7QUFFWjs7QUFJQTs7Ozs7O0FBRUE7QUFDQSxJQUFNQyxRQUFRO0FBQ1pDLFdBQVM7QUFDUEMsWUFBUSxjQUREO0FBRVBDLGNBQVUsK0JBQWUsQ0FBZixFQUFrQixF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b3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAnd2VweS1yZWR1eCdcbmltcG9ydCBSIGZyb20gJy4uL2xpYnMvcmFtZGEnXG5pbXBvcnQgTklNIGZyb20gJy4uL3V0aWxzL25pbSdcbmltcG9ydCAqIGFzIGFwaSBmcm9tICcuLi9hcGlzL2FjY291bnQnXG5cbmltcG9ydCB7XG4gIHNldFVzZXJcbn0gZnJvbSAnLi4vYWN0aW9ucy9jb21tb24nXG5cbmltcG9ydCB7IHZhbGlkYXRvciwgdmFsaWRhdGVMZW5ndGgsIHZhbGlkYXRlUGhvbmUgfSBmcm9tICcuLi91dGlscy92YWxpZGF0b3InXG5cbi8vIOagoemqjOinhOWImemFjee9rlxuY29uc3QgcnVsZXMgPSB7XG4gIGNvbXBhbnk6IHtcbiAgICBwcm9tcHQ6ICflhazlj7jlkI3np7DlnKgxLTIw5a2X5Lul5YaFJyxcbiAgICB2YWxpZGF0ZTogdmFsaWRhdGVMZW5ndGgoMSwgMjApXG4gIH0sXG4gIG5hbWU6IHtcbiAgICBwcm9tcHQ6ICfmmLXnp7DlnKgxLTEw5a2X5Lul5YaFJyxcbiAgICB2YWxpZGF0ZTogdmFsaWRhdGVMZW5ndGgoMSwgMTApXG4gIH0sXG4gIG1vYmlsZToge1xuICAgIHByb21wdDogJ+eUteivneWPt+eggeS4jeWQiOazlScsXG4gICAgdmFsaWRhdGU6IHZhbGlkYXRlUGhvbmVcbiAgfSxcbiAgdG9rZW46IHtcbiAgICBwcm9tcHQ6ICfogYzkvY3lkI3np7DlnKgxLTIw5a2X5Lul5YaFJyxcbiAgICB2YWxpZGF0ZTogdmFsaWRhdGVMZW5ndGgoMSwgMjApXG4gIH0sXG4gIGV4OiB7XG4gICAgcHJvbXB0OiAn5Li76KaB57uP6JCl5ZyoMS0yMOWtl+S7peWGhScsXG4gICAgdmFsaWRhdGU6IHZhbGlkYXRlTGVuZ3RoKDEsIDIwKVxuICB9LFxuICBjYXB0Y2hhOiB7XG4gICAgcHJvbXB0OiAn6K+35aGr5YaZ6aqM6K+B56CBJyxcbiAgICB2YWxpZGF0ZTogdmFsaWRhdGVMZW5ndGgoMSwgOClcbiAgfVxufVxuXG5jb25zdCB2YWxpZGF0ZSA9IHZhbGlkYXRvcihydWxlcylcblxuQGNvbm5lY3Qoe1xuICB1c2VyKHN0YXRlKSB7XG4gICAgcmV0dXJuIHN0YXRlLmNvbW1vbi51c2VyXG4gIH1cbn0sIHtcbiAgc2V0VXNlclxufSlcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJlZ2lzdGVyIGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgY29uZmlnID0ge1xuICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICfms6jlhownXG4gIH1cblxuICBkYXRhID0ge1xuICAgIHJlcXVlc3Rpbmc6IGZhbHNlLFxuICAgIGZvcm1FcnJvcjogbnVsbCxcbiAgICBmb3JtRXJyb3JLZXk6IG51bGwsXG4gICAgc2hvd09wZW5JZDogJycsXG4gICAgdXNlckRhdGE6IHt9LFxuICAgIGNvZGVCdXR0b246ICfojrflj5bpqozor4HnoIEnLFxuICAgIGRpc2FibGVkOiBmYWxzZSxcbiAgICBuZXdNb2JpbGU6ICcnLFxuICAgIG5ld05hbWU6ICcnXG4gIH1cblxuICBtZXRob2RzID0ge1xuICAgIG5hbWVLZXlJbnB1dChlKSB7XG4gICAgICB0aGlzLnNldERhdGEoe1xuICAgICAgICBbYG5ld05hbWVgXTogZS5kZXRhaWwudmFsdWVcbiAgICAgIH0pXG4gICAgICB0aGlzLm5ld05hbWUgPSBlLmRldGFpbC52YWx1ZVxuICAgICAgdGhpcy4kYXBwbHkoKVxuICAgIH0sXG4gICAgbW9iaWxlS2V5SW5wdXQoZSkge1xuICAgICAgdGhpcy5zZXREYXRhKHtcbiAgICAgICAgW2BuZXdNb2JpbGVgXTogZS5kZXRhaWwudmFsdWVcbiAgICAgIH0pXG4gICAgICB0aGlzLm5ld01vYmlsZSA9IGUuZGV0YWlsLnZhbHVlXG4gICAgICB0aGlzLiRhcHBseSgpXG4gICAgfSxcbiAgICBhc3luYyBnZXRDb2RlKGUpIHtcbiAgICAgIGxldCBuYW1lID0gdGhpcy5uZXdOYW1lXG4gICAgICBsZXQgbW9iaWxlID0gdGhpcy5uZXdNb2JpbGVcbiAgICAgIGlmICghbmFtZSB8fCAhbW9iaWxlKSB7XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuICAgICAgYXdhaXQgYXBpLmdldENvZGVOdW0obmFtZSwgbW9iaWxlKVxuICAgICAgdGhpcy5jb2RlQnV0dG9uID0gJzYwJ1xuICAgICAgdGhpcy5kaXNhYmxlZCA9IHRydWVcbiAgICAgIGxldCB0aGF0ID0gdGhpc1xuICAgICAgbGV0IHRpbWUgPSBzZXRJbnRlcnZhbChmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmIChwYXJzZUludCh0aGF0LmNvZGVCdXR0b24pKSB7XG4gICAgICAgICAgdGhhdC5jb2RlQnV0dG9uID0gcGFyc2VJbnQodGhhdC5jb2RlQnV0dG9uKSAtIDFcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGF0LmNvZGVCdXR0b24gPSAn5Y+R6YCB6aqM6K+B56CBJ1xuICAgICAgICAgIHRoYXQuZGlzYWJsZWQgPSBmYWxzZVxuICAgICAgICAgIGNsZWFySW50ZXJ2YWwodGltZSlcbiAgICAgICAgfVxuICAgICAgICB0aGF0LiRhcHBseSgpXG4gICAgICB9LCAxMDAwKVxuICAgIH0sXG4gICAgYmluZEZvY3VzKGUpIHtcbiAgICAgIHRoaXMuZm9ybUVycm9yID0gbnVsbFxuICAgICAgdGhpcy5mb3JtRXJyb3JLZXkgPSBudWxsXG4gICAgfSxcbi8vICAgIGFzeW5jIHNob3dQYXJzaW5nKGUpIHtcbi8vICAgICAgdmFyIHNlc3Npb25LZXkgPSBhd2FpdCB3ZXB5LmdldFN0b3JhZ2Uoe1xuLy8gICAgICAgIGtleTogJ2pmU2Vzc2lvbktleScsXG4vLyAgICAgICAgc3VjY2VzczogZnVuY3Rpb24ocmVzKSB7XG4vLyAgICAgICAgICByZXR1cm4gcmVzLmRhdGFcbi8vICAgICAgICB9XG4vLyAgICAgIH0pXG4vLyAgICAgIHZhciBzaGFyZUluZm8gPSBhd2FpdCB3ZXB5LmdldFN0b3JhZ2Uoe1xuLy8gICAgICAgIGtleTogJ2pmU2hhcmVJbmZvJyxcbi8vICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbihyZXMpIHtcbi8vICAgICAgICAgIHJldHVybiByZXMuZGF0YVxuLy8gICAgICAgIH1cbi8vICAgICAgfSlcbi8vICAgICAgY29uc3Qgc2hhcmVQYXJzZSA9IGF3YWl0IGFwaS5zaGFyZVBhcnNpbmcoc2Vzc2lvbktleSwgc2hhcmVJbmZvLmRhdGEpXG4vLyAgICAgIHZhciBzaGFyZVRva2VuID0gYXdhaXQgd2VweS5nZXRTdG9yYWdlKHtcbi8vICAgICAgICBrZXk6ICdqZlRva2VuJyxcbi8vICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbihyZXMpIHtcbi8vICAgICAgICAgIHJldHVybiByZXMuZGF0YVxuLy8gICAgICAgIH1cbi8vICAgICAgfSlcbi8vICAgICAgY29uc29sZS5sb2coc2hhcmVQYXJzZSlcbi8vICAgICAgdmFyIHNoYXJlT3BlbmlkID0gYXdhaXQgYXBpLmNoZWNrT3BlbkdpZChzaGFyZVRva2VuLCBzaGFyZVBhcnNlKVxuLy8gICAgICBjb25zb2xlLmxvZyhzaGFyZU9wZW5pZClcbi8vICAgIH0sXG4gICAgYXN5bmMgc3VibWl0KGUpIHtcbiAgICAgIGNvbnN0IGVycm9yS2V5ID0gdmFsaWRhdGUoZS5kZXRhaWwudmFsdWUpXG4gICAgICBjb25zb2xlLmxvZyhlLmRldGFpbC52YWx1ZSlcbiAgICAgIGNvbnN0IHsgbmFtZSwgY29tcGFueSwgdG9rZW4sIGV4LCBtb2JpbGUsIGNhcHRjaGEgfSA9IGUuZGV0YWlsLnZhbHVlXG4gICAgICBjb25zdCB7IHNldFVzZXIgfSA9IHRoaXMubWV0aG9kc1xuICAgICAgaWYgKCFlcnJvcktleSkge1xuICAgICAgICB0aGlzLnJlcXVlc3RpbmcgPSB0cnVlXG5cbiAgICAgICAgY29uc3QgeyBhY2NpZCwgYXZhdGFyVXJsIH0gPSB0aGlzLnVzZXJcblxuICAgICAgICBjb25zdCBpbmZvcyA9IHtcbiAgICAgICAgICBuYW1lLFxuICAgICAgICAgIGNvbXBhbnksXG4gICAgICAgICAgdG9rZW4sXG4gICAgICAgICAgbW9iaWxlLFxuICAgICAgICAgIGV4LFxuICAgICAgICAgIGNhcHRjaGFcbiAgICAgICAgfVxuLy8gICAgICAgIGxldCB0b2tlblxuICAgICAgICB0cnkge1xuICAgICAgICAgICAgYXdhaXQgTklNLmNyZWF0ZShcbiAgICAgICAgICAgIGFjY2lkLFxuICAgICAgICAgICAgbmFtZSxcbiAgICAgICAgICAgIGF2YXRhclVybCxcbiAgICAgICAgICAgIGluZm9zXG4gICAgICAgICAgKVxuLy8gICAgICAgICAgdG9rZW4gPSByZXNwLnRva2VuXG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICBpZiAoZS5jb2RlID09PSA0MTQpIHtcbiAgICAgICAgICAgIGF3YWl0IE5JTS5sb2dpbihhY2NpZClcbi8vICAgICAgICAgICAgdG9rZW4gPSByZXNwLnRva2VuXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgY29uc3QgcGFzc3dvcmQgPSBSLnRha2VMYXN0KDUpKGFjY2lkKVxuICAgICAgICAgIGNvbnN0IHVzZXIgPSBhd2FpdCBhcGkuY3JlYXRlVXNlcihhY2NpZCwgcGFzc3dvcmQsIHtcbiAgICAgICAgICAgIC4uLmluZm9zLFxuICAgICAgICAgICAgaWNvbjogYXZhdGFyVXJsXG4gICAgICAgICAgfSlcbiAgICAgICAgICBjb25zdCB7IFRva2VuIH0gPSB1c2VyXG5cbiAgICAgICAgICBzZXRVc2VyKHtcbiAgICAgICAgICAgIC4uLnRoaXMudXNlcixcbiAgICAgICAgICAgIC4uLnVzZXIsXG4gICAgICAgICAgICBqZlRva2VuOiBUb2tlblxuICAgICAgICAgIH0pXG4gICAgICAgICAgd2VweS5yZUxhdW5jaCh7XG4gICAgICAgICAgICB1cmw6ICcvcGFnZXMvY2hhdHJvb21zJ1xuICAgICAgICAgIH0pXG4vLyAgICAgICAgICBzZXROaW0oe1xuLy8gICAgICAgICAgICB0b2tlblxuLy8gICAgICAgICAgfSlcbi8vICAgICAgICAgIHZhciBiYWNrQWNjaWQgPSBhd2FpdCB3ZXB5LmdldFN0b3JhZ2Uoe1xuLy8gICAgICAgICAgICBrZXk6ICdiYWNrQWNjaWQnLFxuLy8gICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbihyZXMpIHtcbi8vICAgICAgICAgICAgICByZXR1cm4gcmVzXG4vLyAgICAgICAgICAgIH1cbi8vICAgICAgICAgIH0pXG4gICAgICAgICAgLy8g5Zue6LCDIOWKoOenr+WIhlxuLy8gICAgICAgICAgaWYgKGJhY2tBY2NpZC5kYXRhICE9PSAnMTIzJykge1xuLy8gICAgICAgICAgICBhd2FpdCBhcGkuY2hlY2tPcGVuR2lkKFRva2VuLCBiYWNrQWNjaWQuZGF0YSlcbi8vICAgICAgICAgIH1cbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ2NyZWF0ZSB1c2VyJywgZSlcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5mb3JtRXJyb3IgPSBydWxlc1tlcnJvcktleV0ucHJvbXB0XG4gICAgICAgIHRoaXMuZm9ybUVycm9yS2V5ID0gZXJyb3JLZXlcbiAgICAgICAgdGhpcy5yZXF1ZXN0aW5nID0gZmFsc2VcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgYXN5bmMgb25Mb2FkKCkge1xuICAgIGNvbnN0IHsgdXNlckluZm8gfSA9IGF3YWl0IHdlcHkuZ2V0VXNlckluZm8oKVxuICAgIHRoaXMudXNlckRhdGEgPSB1c2VySW5mb1xuLy8gICAgdmFyIGJhY2tBY2NpZCA9IGF3YWl0IHdlcHkuZ2V0U3RvcmFnZSh7XG4vLyAgICAgIGtleTogJ2JhY2tBY2NpZCcsXG4vLyAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlcykge1xuLy8gICAgICAgIHJldHVybiByZXNcbi8vICAgICAgfVxuLy8gICAgfSlcbi8vICAgIGNvbnNvbGUubG9nKCfliqDnp6/liIYnLCBiYWNrQWNjaWQpXG4gICAgdGhpcy4kYXBwbHkoKVxuICB9XG59XG4iXX0=