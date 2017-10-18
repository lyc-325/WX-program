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

        return (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
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

        return (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2() {
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
      var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3() {
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlZ2lzdGVyLmpzIl0sIm5hbWVzIjpbImFwaSIsInJ1bGVzIiwiY29tcGFueSIsInByb21wdCIsInZhbGlkYXRlIiwibmFtZSIsIm1vYmlsZSIsInRva2VuIiwiZXgiLCJjYXB0Y2hhIiwiUmVnaXN0ZXIiLCJ1c2VyIiwic3RhdGUiLCJjb21tb24iLCJzZXRVc2VyIiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsImRhdGEiLCJyZXF1ZXN0aW5nIiwiZm9ybUVycm9yIiwiZm9ybUVycm9yS2V5Iiwic2hvd09wZW5JZCIsInVzZXJEYXRhIiwiY29kZUJ1dHRvbiIsImRpc2FibGVkIiwibmV3TW9iaWxlIiwibmV3TmFtZSIsIm1ldGhvZHMiLCJuYW1lS2V5SW5wdXQiLCJlIiwic2V0RGF0YSIsImRldGFpbCIsInZhbHVlIiwiJGFwcGx5IiwibW9iaWxlS2V5SW5wdXQiLCJnZXRDb2RlIiwiZ2V0Q29kZU51bSIsInRoYXQiLCJ0aW1lIiwic2V0SW50ZXJ2YWwiLCJwYXJzZUludCIsImNsZWFySW50ZXJ2YWwiLCJiaW5kRm9jdXMiLCJzdWJtaXQiLCJlcnJvcktleSIsImNvbnNvbGUiLCJsb2ciLCJhY2NpZCIsImF2YXRhclVybCIsImluZm9zIiwiY3JlYXRlIiwiY29kZSIsImxvZ2luIiwicGFzc3dvcmQiLCJ0YWtlTGFzdCIsImNyZWF0ZVVzZXIiLCJpY29uIiwiVG9rZW4iLCJqZlRva2VuIiwicmVMYXVuY2giLCJ1cmwiLCJlcnJvciIsImdldFVzZXJJbmZvIiwidXNlckluZm8iLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTs7OztBQUNBOztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7SUFBWUEsRzs7QUFDWjs7QUFHQTs7Ozs7O0FBQ0E7QUFDQSxJQUFNQyxRQUFRO0FBQ1pDLFdBQVM7QUFDUEMsWUFBUSxjQUREO0FBRVBDLGNBQVUsK0JBQWUsQ0FBZixFQUFrQixF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ZXNDb250ZW50IjpbIlxyXG5pbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xyXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAnd2VweS1yZWR1eCdcclxuaW1wb3J0IFIgZnJvbSAnLi4vbGlicy9yYW1kYSdcclxuaW1wb3J0IE5JTSBmcm9tICcuLi91dGlscy9uaW0nXHJcbmltcG9ydCAqIGFzIGFwaSBmcm9tICcuLi9hcGlzL2FjY291bnQnXHJcbmltcG9ydCB7XHJcbiAgc2V0VXNlclxyXG59IGZyb20gJy4uL2FjdGlvbnMvY29tbW9uJ1xyXG5pbXBvcnQgeyB2YWxpZGF0b3IsIHZhbGlkYXRlTGVuZ3RoLCB2YWxpZGF0ZVBob25lIH0gZnJvbSAnLi4vdXRpbHMvdmFsaWRhdG9yJ1xyXG4vLyDmoKHpqozop4TliJnphY3nva5cclxuY29uc3QgcnVsZXMgPSB7XHJcbiAgY29tcGFueToge1xyXG4gICAgcHJvbXB0OiAn5YWs5Y+45ZCN56ew5ZyoMS0yMOWtl+S7peWGhScsXHJcbiAgICB2YWxpZGF0ZTogdmFsaWRhdGVMZW5ndGgoMSwgMjApXHJcbiAgfSxcclxuICBuYW1lOiB7XHJcbiAgICBwcm9tcHQ6ICfmmLXnp7DlnKgxLTEw5a2X5Lul5YaFJyxcclxuICAgIHZhbGlkYXRlOiB2YWxpZGF0ZUxlbmd0aCgxLCAxMClcclxuICB9LFxyXG4gIG1vYmlsZToge1xyXG4gICAgcHJvbXB0OiAn55S16K+d5Y+356CB5LiN5ZCI5rOVJyxcclxuICAgIHZhbGlkYXRlOiB2YWxpZGF0ZVBob25lXHJcbiAgfSxcclxuICB0b2tlbjoge1xyXG4gICAgcHJvbXB0OiAn6IGM5L2N5ZCN56ew5ZyoMS0yMOWtl+S7peWGhScsXHJcbiAgICB2YWxpZGF0ZTogdmFsaWRhdGVMZW5ndGgoMSwgMjApXHJcbiAgfSxcclxuICBleDoge1xyXG4gICAgcHJvbXB0OiAn5Li76KaB57uP6JCl5ZyoMS0yMOWtl+S7peWGhScsXHJcbiAgICB2YWxpZGF0ZTogdmFsaWRhdGVMZW5ndGgoMSwgMjApXHJcbiAgfSxcclxuICBjYXB0Y2hhOiB7XHJcbiAgICBwcm9tcHQ6ICfor7floavlhpnpqozor4HnoIEnLFxyXG4gICAgdmFsaWRhdGU6IHZhbGlkYXRlTGVuZ3RoKDEsIDgpXHJcbiAgfVxyXG59XHJcbmNvbnN0IHZhbGlkYXRlID0gdmFsaWRhdG9yKHJ1bGVzKVxyXG5AY29ubmVjdCh7XHJcbiAgdXNlcihzdGF0ZSkge1xyXG4gICAgcmV0dXJuIHN0YXRlLmNvbW1vbi51c2VyXHJcbiAgfVxyXG59LCB7XHJcbiAgc2V0VXNlclxyXG59KVxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSZWdpc3RlciBleHRlbmRzIHdlcHkucGFnZSB7XHJcbiAgY29uZmlnID0ge1xyXG4gICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+azqOWGjCdcclxuICB9XHJcbiAgZGF0YSA9IHtcclxuICAgIHJlcXVlc3Rpbmc6IGZhbHNlLFxyXG4gICAgZm9ybUVycm9yOiBudWxsLFxyXG4gICAgZm9ybUVycm9yS2V5OiBudWxsLFxyXG4gICAgc2hvd09wZW5JZDogJycsXHJcbiAgICB1c2VyRGF0YToge30sXHJcbiAgICBjb2RlQnV0dG9uOiAn6I635Y+W6aqM6K+B56CBJyxcclxuICAgIGRpc2FibGVkOiBmYWxzZSxcclxuICAgIG5ld01vYmlsZTogJycsXHJcbiAgICBuZXdOYW1lOiAnJ1xyXG4gIH1cclxuICBtZXRob2RzID0ge1xyXG4gICAgbmFtZUtleUlucHV0KGUpIHtcclxuICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICBbYG5ld05hbWVgXTogZS5kZXRhaWwudmFsdWVcclxuICAgICAgfSlcclxuICAgICAgdGhpcy5uZXdOYW1lID0gZS5kZXRhaWwudmFsdWVcclxuICAgICAgdGhpcy4kYXBwbHkoKVxyXG4gICAgfSxcclxuICAgIG1vYmlsZUtleUlucHV0KGUpIHtcclxuICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICBbYG5ld01vYmlsZWBdOiBlLmRldGFpbC52YWx1ZVxyXG4gICAgICB9KVxyXG4gICAgICB0aGlzLm5ld01vYmlsZSA9IGUuZGV0YWlsLnZhbHVlXHJcbiAgICAgIHRoaXMuJGFwcGx5KClcclxuICAgIH0sXHJcbiAgICBhc3luYyBnZXRDb2RlKGUpIHtcclxuICAgICAgbGV0IG5hbWUgPSB0aGlzLm5ld05hbWVcclxuICAgICAgbGV0IG1vYmlsZSA9IHRoaXMubmV3TW9iaWxlXHJcbiAgICAgIGlmICghbmFtZSB8fCAhbW9iaWxlKSB7XHJcbiAgICAgICAgcmV0dXJuXHJcbiAgICAgIH1cclxuICAgICAgYXdhaXQgYXBpLmdldENvZGVOdW0obmFtZSwgbW9iaWxlKVxyXG4gICAgICB0aGlzLmNvZGVCdXR0b24gPSAnNjAnXHJcbiAgICAgIHRoaXMuZGlzYWJsZWQgPSB0cnVlXHJcbiAgICAgIGxldCB0aGF0ID0gdGhpc1xyXG4gICAgICBsZXQgdGltZSA9IHNldEludGVydmFsKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBpZiAocGFyc2VJbnQodGhhdC5jb2RlQnV0dG9uKSkge1xyXG4gICAgICAgICAgdGhhdC5jb2RlQnV0dG9uID0gcGFyc2VJbnQodGhhdC5jb2RlQnV0dG9uKSAtIDFcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgdGhhdC5jb2RlQnV0dG9uID0gJ+WPkemAgemqjOivgeeggSdcclxuICAgICAgICAgIHRoYXQuZGlzYWJsZWQgPSBmYWxzZVxyXG4gICAgICAgICAgY2xlYXJJbnRlcnZhbCh0aW1lKVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGF0LiRhcHBseSgpXHJcbiAgICAgIH0sIDEwMDApXHJcbiAgICB9LFxyXG4gICAgYmluZEZvY3VzKGUpIHtcclxuICAgICAgdGhpcy5mb3JtRXJyb3IgPSBudWxsXHJcbiAgICAgIHRoaXMuZm9ybUVycm9yS2V5ID0gbnVsbFxyXG4gICAgfSxcclxuLy8gICAgYXN5bmMgc2hvd1BhcnNpbmcoZSkge1xyXG4vLyAgICAgIHZhciBzZXNzaW9uS2V5ID0gYXdhaXQgd2VweS5nZXRTdG9yYWdlKHtcclxuLy8gICAgICAgIGtleTogJ2pmU2Vzc2lvbktleScsXHJcbi8vICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbihyZXMpIHtcclxuLy8gICAgICAgICAgcmV0dXJuIHJlcy5kYXRhXHJcbi8vICAgICAgICB9XHJcbi8vICAgICAgfSlcclxuLy8gICAgICB2YXIgc2hhcmVJbmZvID0gYXdhaXQgd2VweS5nZXRTdG9yYWdlKHtcclxuLy8gICAgICAgIGtleTogJ2pmU2hhcmVJbmZvJyxcclxuLy8gICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlcykge1xyXG4vLyAgICAgICAgICByZXR1cm4gcmVzLmRhdGFcclxuLy8gICAgICAgIH1cclxuLy8gICAgICB9KVxyXG4vLyAgICAgIGNvbnN0IHNoYXJlUGFyc2UgPSBhd2FpdCBhcGkuc2hhcmVQYXJzaW5nKHNlc3Npb25LZXksIHNoYXJlSW5mby5kYXRhKVxyXG4vLyAgICAgIHZhciBzaGFyZVRva2VuID0gYXdhaXQgd2VweS5nZXRTdG9yYWdlKHtcclxuLy8gICAgICAgIGtleTogJ2pmVG9rZW4nLFxyXG4vLyAgICAgICAgc3VjY2VzczogZnVuY3Rpb24ocmVzKSB7XHJcbi8vICAgICAgICAgIHJldHVybiByZXMuZGF0YVxyXG4vLyAgICAgICAgfVxyXG4vLyAgICAgIH0pXHJcbi8vICAgICAgY29uc29sZS5sb2coc2hhcmVQYXJzZSlcclxuLy8gICAgICB2YXIgc2hhcmVPcGVuaWQgPSBhd2FpdCBhcGkuY2hlY2tPcGVuR2lkKHNoYXJlVG9rZW4sIHNoYXJlUGFyc2UpXHJcbi8vICAgICAgY29uc29sZS5sb2coc2hhcmVPcGVuaWQpXHJcbi8vICAgIH0sXHJcbiAgICBhc3luYyBzdWJtaXQoZSkge1xyXG4gICAgICBjb25zdCBlcnJvcktleSA9IHZhbGlkYXRlKGUuZGV0YWlsLnZhbHVlKVxyXG4gICAgICBjb25zb2xlLmxvZyhlLmRldGFpbC52YWx1ZSlcclxuICAgICAgY29uc3QgeyBuYW1lLCBjb21wYW55LCB0b2tlbiwgZXgsIG1vYmlsZSwgY2FwdGNoYSB9ID0gZS5kZXRhaWwudmFsdWVcclxuICAgICAgY29uc3QgeyBzZXRVc2VyIH0gPSB0aGlzLm1ldGhvZHNcclxuICAgICAgaWYgKCFlcnJvcktleSkge1xyXG4gICAgICAgIHRoaXMucmVxdWVzdGluZyA9IHRydWVcclxuICAgICAgICBjb25zdCB7IGFjY2lkLCBhdmF0YXJVcmwgfSA9IHRoaXMudXNlclxyXG4gICAgICAgIGNvbnN0IGluZm9zID0ge1xyXG4gICAgICAgICAgbmFtZSxcclxuICAgICAgICAgIGNvbXBhbnksXHJcbiAgICAgICAgICB0b2tlbixcclxuICAgICAgICAgIG1vYmlsZSxcclxuICAgICAgICAgIGV4LFxyXG4gICAgICAgICAgY2FwdGNoYVxyXG4gICAgICAgIH1cclxuLy8gICAgICAgIGxldCB0b2tlblxyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGF3YWl0IE5JTS5jcmVhdGUoXHJcbiAgICAgICAgICAgIGFjY2lkLFxyXG4gICAgICAgICAgICBuYW1lLFxyXG4gICAgICAgICAgICBhdmF0YXJVcmwsXHJcbiAgICAgICAgICAgIGluZm9zXHJcbiAgICAgICAgICApXHJcbi8vICAgICAgICAgIHRva2VuID0gcmVzcC50b2tlblxyXG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICAgIGlmIChlLmNvZGUgPT09IDQxNCkge1xyXG4gICAgICAgICAgICBhd2FpdCBOSU0ubG9naW4oYWNjaWQpXHJcbi8vICAgICAgICAgICAgdG9rZW4gPSByZXNwLnRva2VuXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICBjb25zdCBwYXNzd29yZCA9IFIudGFrZUxhc3QoNSkoYWNjaWQpXHJcbiAgICAgICAgICBjb25zdCB1c2VyID0gYXdhaXQgYXBpLmNyZWF0ZVVzZXIoYWNjaWQsIHBhc3N3b3JkLCB7XHJcbiAgICAgICAgICAgIC4uLmluZm9zLFxyXG4gICAgICAgICAgICBpY29uOiBhdmF0YXJVcmxcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgICBjb25zdCB7IFRva2VuIH0gPSB1c2VyXHJcbiAgICAgICAgICBzZXRVc2VyKHtcclxuICAgICAgICAgICAgLi4udGhpcy51c2VyLFxyXG4gICAgICAgICAgICAuLi51c2VyLFxyXG4gICAgICAgICAgICBqZlRva2VuOiBUb2tlblxyXG4gICAgICAgICAgfSlcclxuICAgICAgICAgIHdlcHkucmVMYXVuY2goe1xyXG4gICAgICAgICAgICB1cmw6ICcvcGFnZXMvY2hhdHJvb21zJ1xyXG4gICAgICAgICAgfSlcclxuLy8gICAgICAgICAgc2V0TmltKHtcclxuLy8gICAgICAgICAgICB0b2tlblxyXG4vLyAgICAgICAgICB9KVxyXG4vLyAgICAgICAgICB2YXIgYmFja0FjY2lkID0gYXdhaXQgd2VweS5nZXRTdG9yYWdlKHtcclxuLy8gICAgICAgICAgICBrZXk6ICdiYWNrQWNjaWQnLFxyXG4vLyAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlcykge1xyXG4vLyAgICAgICAgICAgICAgcmV0dXJuIHJlc1xyXG4vLyAgICAgICAgICAgIH1cclxuLy8gICAgICAgICAgfSlcclxuICAgICAgICAgIC8vIOWbnuiwgyDliqDnp6/liIZcclxuLy8gICAgICAgICAgaWYgKGJhY2tBY2NpZC5kYXRhICE9PSAnMTIzJykge1xyXG4vLyAgICAgICAgICAgIGF3YWl0IGFwaS5jaGVja09wZW5HaWQoVG9rZW4sIGJhY2tBY2NpZC5kYXRhKVxyXG4vLyAgICAgICAgICB9XHJcbiAgICAgICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgY29uc29sZS5lcnJvcignY3JlYXRlIHVzZXInLCBlKVxyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLmZvcm1FcnJvciA9IHJ1bGVzW2Vycm9yS2V5XS5wcm9tcHRcclxuICAgICAgICB0aGlzLmZvcm1FcnJvcktleSA9IGVycm9yS2V5XHJcbiAgICAgICAgdGhpcy5yZXF1ZXN0aW5nID0gZmFsc2VcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICBhc3luYyBvbkxvYWQoKSB7XHJcbiAgICBjb25zdCB7IHVzZXJJbmZvIH0gPSBhd2FpdCB3ZXB5LmdldFVzZXJJbmZvKClcclxuICAgIHRoaXMudXNlckRhdGEgPSB1c2VySW5mb1xyXG4vLyAgICB2YXIgYmFja0FjY2lkID0gYXdhaXQgd2VweS5nZXRTdG9yYWdlKHtcclxuLy8gICAgICBrZXk6ICdiYWNrQWNjaWQnLFxyXG4vLyAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlcykge1xyXG4vLyAgICAgICAgcmV0dXJuIHJlc1xyXG4vLyAgICAgIH1cclxuLy8gICAgfSlcclxuLy8gICAgY29uc29sZS5sb2coJ+WKoOenr+WIhicsIGJhY2tBY2NpZClcclxuICAgIHRoaXMuJGFwcGx5KClcclxuICB9XHJcbn1cclxuIl19