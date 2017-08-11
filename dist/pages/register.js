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
  phone: {
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
          var errorKey, _e$detail$value, name, company, token, ex, phone, setUser, _user, accid, avatarUrl, gender, infos, password, user, Token;

          return _regenerator2.default.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  errorKey = validate(e.detail.value);
                  _e$detail$value = e.detail.value, name = _e$detail$value.name, company = _e$detail$value.company, token = _e$detail$value.token, ex = _e$detail$value.ex, phone = _e$detail$value.phone;
                  setUser = _this2.methods.setUser;

                  if (errorKey) {
                    _context.next = 22;
                    break;
                  }

                  _this2.requesting = true;

                  _user = _this2.user, accid = _user.accid, avatarUrl = _user.avatarUrl, gender = _user.gender;
                  infos = {
                    name: name,
                    company: company,
                    token: token,
                    phone: phone,
                    ex: ex,
                    gender: gender,
                    credits: 0
                    //        let token
                    //        try {
                    //          const resp = await NIM.create(
                    //            accid,
                    //            nickName,
                    //            avatarUrl,
                    //            infos
                    //          )
                    //          token = resp.token
                    //        } catch (e) {
                    //          if (e.code === 414) {
                    //            const resp = await NIM.login(accid)
                    //            token = resp.token
                    //          }
                    //        }

                  };
                  _context.prev = 7;
                  password = _ramda2.default.takeLast(5)(accid);
                  _context.next = 11;
                  return api.createUser(accid, password, (0, _extends3.default)({}, infos, {
                    icon: avatarUrl
                  }));

                case 11:
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
                    url: '/pages/boards'
                  });
                  _context.next = 20;
                  break;

                case 17:
                  _context.prev = 17;
                  _context.t0 = _context['catch'](7);

                  console.error('create user', _context.t0);

                case 20:
                  _context.next = 25;
                  break;

                case 22:
                  _this2.formError = rules[errorKey].prompt;
                  _this2.formErrorKey = errorKey;
                  _this2.requesting = false;

                case 25:
                case 'end':
                  return _context.stop();
              }
            }
          }, _callee, _this2, [[7, 17]]);
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlZ2lzdGVyLmpzIl0sIm5hbWVzIjpbImFwaSIsInJ1bGVzIiwiY29tcGFueSIsInByb21wdCIsInZhbGlkYXRlIiwibmFtZSIsInBob25lIiwidG9rZW4iLCJleCIsIlJlZ2lzdGVyIiwidXNlciIsInN0YXRlIiwiY29tbW9uIiwic2V0VXNlciIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCJkYXRhIiwicmVxdWVzdGluZyIsImZvcm1FcnJvciIsImZvcm1FcnJvcktleSIsInNob3dPcGVuSWQiLCJ1c2VyRGF0YSIsIm1ldGhvZHMiLCJiaW5kRm9jdXMiLCJlIiwic3VibWl0IiwiZXJyb3JLZXkiLCJkZXRhaWwiLCJ2YWx1ZSIsImFjY2lkIiwiYXZhdGFyVXJsIiwiZ2VuZGVyIiwiaW5mb3MiLCJjcmVkaXRzIiwicGFzc3dvcmQiLCJ0YWtlTGFzdCIsImNyZWF0ZVVzZXIiLCJpY29uIiwiVG9rZW4iLCJqZlRva2VuIiwicmVMYXVuY2giLCJ1cmwiLCJjb25zb2xlIiwiZXJyb3IiLCJnZXRVc2VySW5mbyIsInVzZXJJbmZvIiwiJGFwcGx5IiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTs7OztBQUNBOztBQUNBOzs7O0FBQ0E7O0lBQVlBLEc7O0FBRVo7O0FBSUE7Ozs7OztBQUVBO0FBQ0EsSUFBTUMsUUFBUTtBQUNaQyxXQUFTO0FBQ1BDLFlBQVEsY0FERDtBQUVQQyxjQUFVLCtCQUFlLENBQWYsRUFBa0IsRUFBbEI7QUFGSCxHQURHO0FBS1pDLFFBQU07QUFDSkYsWUFBUSxZQURKO0FBRUpDLGNBQVUsK0JBQWUsQ0FBZixFQUFrQixFQUFsQjtBQUZOLEdBTE07QUFTWkUsU0FBTztBQUNMSCxZQUFRLFNBREg7QUFFTEM7QUFGSyxHQVRLO0FBYVpHLFNBQU87QUFDTEosWUFBUSxjQURIO0FBRUxDLGNBQVUsK0JBQWUsQ0FBZixFQUFrQixFQUFsQjtBQUZMLEdBYks7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QWpDO0FBQ0EseUJBQUtnQixZQUFMLEdBQW9CTyxRQUFwQjtBQUNBLHlCQUFLVCxVQUFMLEdBQWtCLEtBQWxCOztBQXRFWTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQXdFZjtBQXJHTyxLOzs7Ozs7Ozs7Ozs7Ozt1QkF3R21CLGVBQUsyQixXQUFMLEU7Ozs7QUFBbkJDLHdCLFNBQUFBLFE7O0FBQ1IscUJBQUt4QixRQUFMLEdBQWdCd0IsUUFBaEI7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNJLHFCQUFLQyxNQUFMOzs7Ozs7Ozs7Ozs7Ozs7Ozs7RUE5SGtDLGVBQUtDLEk7a0JBQXRCdEMsUSIsImZpbGUiOiJyZWdpc3Rlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICd3ZXB5LXJlZHV4J1xuaW1wb3J0IFIgZnJvbSAnLi4vbGlicy9yYW1kYSdcbmltcG9ydCAqIGFzIGFwaSBmcm9tICcuLi9hcGlzL2FjY291bnQnXG5cbmltcG9ydCB7XG4gIHNldFVzZXJcbn0gZnJvbSAnLi4vYWN0aW9ucy9jb21tb24nXG5cbmltcG9ydCB7IHZhbGlkYXRvciwgdmFsaWRhdGVMZW5ndGgsIHZhbGlkYXRlUGhvbmUgfSBmcm9tICcuLi91dGlscy92YWxpZGF0b3InXG5cbi8vIOagoemqjOinhOWImemFjee9rlxuY29uc3QgcnVsZXMgPSB7XG4gIGNvbXBhbnk6IHtcbiAgICBwcm9tcHQ6ICflhazlj7jlkI3np7DlnKgxLTIw5a2X5Lul5YaFJyxcbiAgICB2YWxpZGF0ZTogdmFsaWRhdGVMZW5ndGgoMSwgMjApXG4gIH0sXG4gIG5hbWU6IHtcbiAgICBwcm9tcHQ6ICfmmLXnp7DlnKgxLTEw5a2X5Lul5YaFJyxcbiAgICB2YWxpZGF0ZTogdmFsaWRhdGVMZW5ndGgoMSwgMTApXG4gIH0sXG4gIHBob25lOiB7XG4gICAgcHJvbXB0OiAn55S16K+d5Y+356CB5LiN5ZCI5rOVJyxcbiAgICB2YWxpZGF0ZTogdmFsaWRhdGVQaG9uZVxuICB9LFxuICB0b2tlbjoge1xuICAgIHByb21wdDogJ+iBjOS9jeWQjeensOWcqDEtMjDlrZfku6XlhoUnLFxuICAgIHZhbGlkYXRlOiB2YWxpZGF0ZUxlbmd0aCgxLCAyMClcbiAgfSxcbiAgZXg6IHtcbiAgICBwcm9tcHQ6ICfkuLvopoHnu4/okKXlnKgxLTIw5a2X5Lul5YaFJyxcbiAgICB2YWxpZGF0ZTogdmFsaWRhdGVMZW5ndGgoMSwgMjApXG4gIH1cbn1cblxuY29uc3QgdmFsaWRhdGUgPSB2YWxpZGF0b3IocnVsZXMpXG5cbkBjb25uZWN0KHtcbiAgdXNlcihzdGF0ZSkge1xuICAgIHJldHVybiBzdGF0ZS5jb21tb24udXNlclxuICB9XG59LCB7XG4gIHNldFVzZXJcbn0pXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSZWdpc3RlciBleHRlbmRzIHdlcHkucGFnZSB7XG4gIGNvbmZpZyA9IHtcbiAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn5rOo5YaMJ1xuICB9XG5cbiAgZGF0YSA9IHtcbiAgICByZXF1ZXN0aW5nOiBmYWxzZSxcbiAgICBmb3JtRXJyb3I6IG51bGwsXG4gICAgZm9ybUVycm9yS2V5OiBudWxsLFxuICAgIHNob3dPcGVuSWQ6ICcnLFxuICAgIHVzZXJEYXRhOiB7fVxuICB9XG5cbiAgbWV0aG9kcyA9IHtcbiAgICBiaW5kRm9jdXMoZSkge1xuICAgICAgdGhpcy5mb3JtRXJyb3IgPSBudWxsXG4gICAgICB0aGlzLmZvcm1FcnJvcktleSA9IG51bGxcbiAgICB9LFxuLy8gICAgYXN5bmMgc2hvd1BhcnNpbmcoZSkge1xuLy8gICAgICB2YXIgc2Vzc2lvbktleSA9IGF3YWl0IHdlcHkuZ2V0U3RvcmFnZSh7XG4vLyAgICAgICAga2V5OiAnamZTZXNzaW9uS2V5Jyxcbi8vICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbihyZXMpIHtcbi8vICAgICAgICAgIHJldHVybiByZXMuZGF0YVxuLy8gICAgICAgIH1cbi8vICAgICAgfSlcbi8vICAgICAgdmFyIHNoYXJlSW5mbyA9IGF3YWl0IHdlcHkuZ2V0U3RvcmFnZSh7XG4vLyAgICAgICAga2V5OiAnamZTaGFyZUluZm8nLFxuLy8gICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlcykge1xuLy8gICAgICAgICAgcmV0dXJuIHJlcy5kYXRhXG4vLyAgICAgICAgfVxuLy8gICAgICB9KVxuLy8gICAgICBjb25zdCBzaGFyZVBhcnNlID0gYXdhaXQgYXBpLnNoYXJlUGFyc2luZyhzZXNzaW9uS2V5LCBzaGFyZUluZm8uZGF0YSlcbi8vICAgICAgdmFyIHNoYXJlVG9rZW4gPSBhd2FpdCB3ZXB5LmdldFN0b3JhZ2Uoe1xuLy8gICAgICAgIGtleTogJ2pmVG9rZW4nLFxuLy8gICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlcykge1xuLy8gICAgICAgICAgcmV0dXJuIHJlcy5kYXRhXG4vLyAgICAgICAgfVxuLy8gICAgICB9KVxuLy8gICAgICBjb25zb2xlLmxvZyhzaGFyZVBhcnNlKVxuLy8gICAgICB2YXIgc2hhcmVPcGVuaWQgPSBhd2FpdCBhcGkuY2hlY2tPcGVuR2lkKHNoYXJlVG9rZW4sIHNoYXJlUGFyc2UpXG4vLyAgICAgIGNvbnNvbGUubG9nKHNoYXJlT3BlbmlkKVxuLy8gICAgfSxcbiAgICBhc3luYyBzdWJtaXQoZSkge1xuICAgICAgY29uc3QgZXJyb3JLZXkgPSB2YWxpZGF0ZShlLmRldGFpbC52YWx1ZSlcbiAgICAgIGNvbnN0IHsgbmFtZSwgY29tcGFueSwgdG9rZW4sIGV4LCBwaG9uZSB9ID0gZS5kZXRhaWwudmFsdWVcbiAgICAgIGNvbnN0IHsgc2V0VXNlciB9ID0gdGhpcy5tZXRob2RzXG4gICAgICBpZiAoIWVycm9yS2V5KSB7XG4gICAgICAgIHRoaXMucmVxdWVzdGluZyA9IHRydWVcblxuICAgICAgICBjb25zdCB7IGFjY2lkLCBhdmF0YXJVcmwsIGdlbmRlciB9ID0gdGhpcy51c2VyXG5cbiAgICAgICAgY29uc3QgaW5mb3MgPSB7XG4gICAgICAgICAgbmFtZSxcbiAgICAgICAgICBjb21wYW55LFxuICAgICAgICAgIHRva2VuLFxuICAgICAgICAgIHBob25lLFxuICAgICAgICAgIGV4LFxuICAgICAgICAgIGdlbmRlcixcbiAgICAgICAgICBjcmVkaXRzOiAwXG4gICAgICAgIH1cbi8vICAgICAgICBsZXQgdG9rZW5cbi8vICAgICAgICB0cnkge1xuLy8gICAgICAgICAgY29uc3QgcmVzcCA9IGF3YWl0IE5JTS5jcmVhdGUoXG4vLyAgICAgICAgICAgIGFjY2lkLFxuLy8gICAgICAgICAgICBuaWNrTmFtZSxcbi8vICAgICAgICAgICAgYXZhdGFyVXJsLFxuLy8gICAgICAgICAgICBpbmZvc1xuLy8gICAgICAgICAgKVxuLy8gICAgICAgICAgdG9rZW4gPSByZXNwLnRva2VuXG4vLyAgICAgICAgfSBjYXRjaCAoZSkge1xuLy8gICAgICAgICAgaWYgKGUuY29kZSA9PT0gNDE0KSB7XG4vLyAgICAgICAgICAgIGNvbnN0IHJlc3AgPSBhd2FpdCBOSU0ubG9naW4oYWNjaWQpXG4vLyAgICAgICAgICAgIHRva2VuID0gcmVzcC50b2tlblxuLy8gICAgICAgICAgfVxuLy8gICAgICAgIH1cblxuICAgICAgICB0cnkge1xuICAgICAgICAgIGNvbnN0IHBhc3N3b3JkID0gUi50YWtlTGFzdCg1KShhY2NpZClcbiAgICAgICAgICBjb25zdCB1c2VyID0gYXdhaXQgYXBpLmNyZWF0ZVVzZXIoYWNjaWQsIHBhc3N3b3JkLCB7XG4gICAgICAgICAgICAuLi5pbmZvcyxcbiAgICAgICAgICAgIGljb246IGF2YXRhclVybFxuICAgICAgICAgIH0pXG4gICAgICAgICAgY29uc3QgeyBUb2tlbiB9ID0gdXNlclxuXG4gICAgICAgICAgc2V0VXNlcih7XG4gICAgICAgICAgICAuLi50aGlzLnVzZXIsXG4gICAgICAgICAgICAuLi51c2VyLFxuICAgICAgICAgICAgamZUb2tlbjogVG9rZW5cbiAgICAgICAgICB9KVxuXG4vLyAgICAgICAgICBzZXROaW0oe1xuLy8gICAgICAgICAgICB0b2tlblxuLy8gICAgICAgICAgfSlcbi8vICAgICAgICAgIHZhciBiYWNrQWNjaWQgPSBhd2FpdCB3ZXB5LmdldFN0b3JhZ2Uoe1xuLy8gICAgICAgICAgICBrZXk6ICdiYWNrQWNjaWQnLFxuLy8gICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbihyZXMpIHtcbi8vICAgICAgICAgICAgICByZXR1cm4gcmVzXG4vLyAgICAgICAgICAgIH1cbi8vICAgICAgICAgIH0pXG4gICAgICAgICAgLy8g5Zue6LCDIOWKoOenr+WIhlxuLy8gICAgICAgICAgaWYgKGJhY2tBY2NpZC5kYXRhICE9PSAnMTIzJykge1xuLy8gICAgICAgICAgICBhd2FpdCBhcGkuY2hlY2tPcGVuR2lkKFRva2VuLCBiYWNrQWNjaWQuZGF0YSlcbi8vICAgICAgICAgIH1cbiAgICAgICAgICB3ZXB5LnJlTGF1bmNoKHtcbiAgICAgICAgICAgIHVybDogJy9wYWdlcy9ib2FyZHMnXG4gICAgICAgICAgfSlcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ2NyZWF0ZSB1c2VyJywgZSlcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5mb3JtRXJyb3IgPSBydWxlc1tlcnJvcktleV0ucHJvbXB0XG4gICAgICAgIHRoaXMuZm9ybUVycm9yS2V5ID0gZXJyb3JLZXlcbiAgICAgICAgdGhpcy5yZXF1ZXN0aW5nID0gZmFsc2VcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgYXN5bmMgb25Mb2FkKCkge1xuICAgIGNvbnN0IHsgdXNlckluZm8gfSA9IGF3YWl0IHdlcHkuZ2V0VXNlckluZm8oKVxuICAgIHRoaXMudXNlckRhdGEgPSB1c2VySW5mb1xuLy8gICAgdmFyIGJhY2tBY2NpZCA9IGF3YWl0IHdlcHkuZ2V0U3RvcmFnZSh7XG4vLyAgICAgIGtleTogJ2JhY2tBY2NpZCcsXG4vLyAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlcykge1xuLy8gICAgICAgIHJldHVybiByZXNcbi8vICAgICAgfVxuLy8gICAgfSlcbi8vICAgIGNvbnNvbGUubG9nKCfliqDnp6/liIYnLCBiYWNrQWNjaWQpXG4gICAgdGhpcy4kYXBwbHkoKVxuICB9XG59XG4iXX0=