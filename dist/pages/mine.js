'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


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

var _mine = require('./../apis/mine.js');

var api = _interopRequireWildcard(_mine);

var _config = require('./../config.js');

var _wepyRedux = require('./../npm/wepy-redux/lib/index.js');

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Mine = (_dec = (0, _wepyRedux.connect)({
  user: function user(state) {
    return state.common.user;
  }
}), _dec(_class = function (_wepy$page) {
  (0, _inherits3.default)(Mine, _wepy$page);

  function Mine() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, Mine);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Mine.__proto__ || (0, _getPrototypeOf2.default)(Mine)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: '个人中心'
    }, _this.data = {
      list: [],
      userData: {
        name: '加载中...'
      },
      newUserData: {},
      levelData: '',
      isEdit: false
    }, _this.methods = {
      nameKeyInput: function nameKeyInput(e) {
        this.setData((0, _defineProperty3.default)({}, 'userData.name', e.detail.value));
        this.userData.name = e.detail.value;
        this.$apply();
      },
      companyKeyInput: function companyKeyInput(e) {
        this.setData((0, _defineProperty3.default)({}, 'userData.company', e.detail.value));
        this.userData.company = e.detail.value;
        this.$apply();
      },
      phoneKeyInput: function phoneKeyInput(e) {
        this.setData((0, _defineProperty3.default)({}, 'userData.phone', e.detail.value));
        this.userData.phone = e.detail.value;
        this.$apply();
      },
      tokenKeyInput: function tokenKeyInput(e) {
        this.setData((0, _defineProperty3.default)({}, 'userData.token', e.detail.value));
        this.userData.token = e.detail.value;
        this.$apply();
      },
      exKeyInput: function exKeyInput(e) {
        this.setData((0, _defineProperty3.default)({}, 'userData.ex', e.detail.value));
        this.userData.ex = e.detail.value;
        this.$apply();
      },
      editUserInfoTap: function editUserInfoTap(e) {
        this.isEdit = true;
      },
      closeUserInfoTap: function closeUserInfoTap() {
        this.isEdit = false;
        this.userData = this.user.userData;
        this.$apply();
      },
      saveUserInfoTap: function saveUserInfoTap(e) {
        var _this2 = this;

        return (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee() {
          var id, postData;
          return _regenerator2.default.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  _this2.isEdit = false;
                  id = _this2.userData.id;
                  postData = {
                    name: _this2.userData.name,
                    company: _this2.userData.company,
                    phone: _this2.userData.phone,
                    token: _this2.userData.token,
                    ex: _this2.userData.ex
                  };
                  _context.next = 5;
                  return api.modifyUserInfo(id, postData);

                case 5:
                  _this2.$apply();

                case 6:
                case 'end':
                  return _context.stop();
              }
            }
          }, _callee, _this2);
        }))();
      },
      handlePublishTap: function handlePublishTap(e) {
        _wepy2.default.navigateTo({
          url: 'publish'
        });
      },
      handleItemTap: function handleItemTap(e) {
        var id = this.list[e.currentTarget.dataset.index].id;
        _wepy2.default.navigateTo({
          url: 'board?id=' + id
        });
      }
    }, _this.onShareAppMessage = function () {
      var _ref2 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee2(res) {
        return _regenerator2.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                console.log('执行了分享');
                return _context2.abrupt('return', {
                  title: '江峰小程序',
                  path: '/pages/boards'
                });

              case 2:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      return function (_x) {
        return _ref2.apply(this, arguments);
      };
    }(), _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(Mine, [{
    key: 'onShow',
    value: function () {
      var _ref3 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee3() {
        var res;
        return _regenerator2.default.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return _wepy2.default.showShareMenu({
                  withShareTicket: true
                });

              case 2:
                if (!this.user.userData) {
                  _context3.next = 12;
                  break;
                }

                console.log('this.user', this.user);
                this.userData = this.user.userData;
                _context3.next = 7;
                return api.getMsgList(this.user.userData.id);

              case 7:
                res = _context3.sent;

                this.list = res.map(function (item) {
                  return {
                    id: item.id,
                    title: item.title,
                    content: item.text,
                    createdBy: item.author.name,
                    createdAt: item.dateline,
                    cover: item.pic_urls[0] ? '' + _config.jf.baseServer + item.pic_urls[0] : '',
                    read: item.click_num
                  };
                });
                this.$apply();
                _context3.next = 13;
                break;

              case 12:
                _wepy2.default.reLaunch({
                  url: '/pages/register'
                });

              case 13:
              case 'end':
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function onShow() {
        return _ref3.apply(this, arguments);
      }

      return onShow;
    }()
  }]);
  return Mine;
}(_wepy2.default.page)) || _class);

Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Mine , 'pages/mine'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1pbmUuanMiXSwibmFtZXMiOlsiYXBpIiwiTWluZSIsInVzZXIiLCJzdGF0ZSIsImNvbW1vbiIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCJkYXRhIiwibGlzdCIsInVzZXJEYXRhIiwibmFtZSIsIm5ld1VzZXJEYXRhIiwibGV2ZWxEYXRhIiwiaXNFZGl0IiwibWV0aG9kcyIsIm5hbWVLZXlJbnB1dCIsImUiLCJzZXREYXRhIiwiZGV0YWlsIiwidmFsdWUiLCIkYXBwbHkiLCJjb21wYW55S2V5SW5wdXQiLCJjb21wYW55IiwicGhvbmVLZXlJbnB1dCIsInBob25lIiwidG9rZW5LZXlJbnB1dCIsInRva2VuIiwiZXhLZXlJbnB1dCIsImV4IiwiZWRpdFVzZXJJbmZvVGFwIiwiY2xvc2VVc2VySW5mb1RhcCIsInNhdmVVc2VySW5mb1RhcCIsImlkIiwicG9zdERhdGEiLCJtb2RpZnlVc2VySW5mbyIsImhhbmRsZVB1Ymxpc2hUYXAiLCJuYXZpZ2F0ZVRvIiwidXJsIiwiaGFuZGxlSXRlbVRhcCIsImN1cnJlbnRUYXJnZXQiLCJkYXRhc2V0IiwiaW5kZXgiLCJvblNoYXJlQXBwTWVzc2FnZSIsInJlcyIsImNvbnNvbGUiLCJsb2ciLCJ0aXRsZSIsInBhdGgiLCJzaG93U2hhcmVNZW51Iiwid2l0aFNoYXJlVGlja2V0IiwiZ2V0TXNnTGlzdCIsIm1hcCIsIml0ZW0iLCJjb250ZW50IiwidGV4dCIsImNyZWF0ZWRCeSIsImF1dGhvciIsImNyZWF0ZWRBdCIsImRhdGVsaW5lIiwiY292ZXIiLCJwaWNfdXJscyIsImJhc2VTZXJ2ZXIiLCJyZWFkIiwiY2xpY2tfbnVtIiwicmVMYXVuY2giLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBOzs7O0FBQ0E7O0lBQVlBLEc7O0FBQ1o7O0FBQ0E7Ozs7OztJQU9xQkMsSSxXQUxwQix3QkFBUTtBQUNQQyxNQURPLGdCQUNGQyxLQURF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QUF0QyxHQUEyRCxFQU52QztBQU8zQkUsMEJBQU1WLEtBQUtXO0FBUGdCLG1CQUFUO0FBQUEsaUJBQVIsQ0FBWjtBQVNBLHFCQUFLM0MsTUFBTDs7Ozs7QUFFQSwrQkFBSzRDLFFBQUwsQ0FBYztBQUNaM0IsdUJBQUs7QUFETyxpQkFBZDs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBOUc0QixlQUFLNEIsSTtrQkFBbEJoRSxJIiwiZmlsZSI6Im1pbmUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG5pbXBvcnQgKiBhcyBhcGkgZnJvbSAnLi4vYXBpcy9taW5lJ1xuaW1wb3J0IHsgamYgfSBmcm9tICcuLi9jb25maWcnXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAnd2VweS1yZWR1eCdcblxuQGNvbm5lY3Qoe1xuICB1c2VyKHN0YXRlKSB7XG4gICAgcmV0dXJuIHN0YXRlLmNvbW1vbi51c2VyXG4gIH1cbn0pXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNaW5lIGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgY29uZmlnID0ge1xuICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICfkuKrkurrkuK3lv4MnXG4gIH1cblxuICBkYXRhID0ge1xuICAgIGxpc3Q6IFtdLFxuICAgIHVzZXJEYXRhOiB7XG4gICAgICBuYW1lOiAn5Yqg6L295LitLi4uJ1xuICAgIH0sXG4gICAgbmV3VXNlckRhdGE6IHt9LFxuICAgIGxldmVsRGF0YTogJycsXG4gICAgaXNFZGl0OiBmYWxzZVxuICB9XG5cbiAgbWV0aG9kcyA9IHtcbiAgICBuYW1lS2V5SW5wdXQoZSkge1xuICAgICAgdGhpcy5zZXREYXRhKHtcbiAgICAgICAgW2B1c2VyRGF0YS5uYW1lYF06IGUuZGV0YWlsLnZhbHVlXG4gICAgICB9KVxuICAgICAgdGhpcy51c2VyRGF0YS5uYW1lID0gZS5kZXRhaWwudmFsdWVcbiAgICAgIHRoaXMuJGFwcGx5KClcbiAgICB9LFxuICAgIGNvbXBhbnlLZXlJbnB1dChlKSB7XG4gICAgICB0aGlzLnNldERhdGEoe1xuICAgICAgICBbYHVzZXJEYXRhLmNvbXBhbnlgXTogZS5kZXRhaWwudmFsdWVcbiAgICAgIH0pXG4gICAgICB0aGlzLnVzZXJEYXRhLmNvbXBhbnkgPSBlLmRldGFpbC52YWx1ZVxuICAgICAgdGhpcy4kYXBwbHkoKVxuICAgIH0sXG4gICAgcGhvbmVLZXlJbnB1dChlKSB7XG4gICAgICB0aGlzLnNldERhdGEoe1xuICAgICAgICBbYHVzZXJEYXRhLnBob25lYF06IGUuZGV0YWlsLnZhbHVlXG4gICAgICB9KVxuICAgICAgdGhpcy51c2VyRGF0YS5waG9uZSA9IGUuZGV0YWlsLnZhbHVlXG4gICAgICB0aGlzLiRhcHBseSgpXG4gICAgfSxcbiAgICB0b2tlbktleUlucHV0KGUpIHtcbiAgICAgIHRoaXMuc2V0RGF0YSh7XG4gICAgICAgIFtgdXNlckRhdGEudG9rZW5gXTogZS5kZXRhaWwudmFsdWVcbiAgICAgIH0pXG4gICAgICB0aGlzLnVzZXJEYXRhLnRva2VuID0gZS5kZXRhaWwudmFsdWVcbiAgICAgIHRoaXMuJGFwcGx5KClcbiAgICB9LFxuICAgIGV4S2V5SW5wdXQoZSkge1xuICAgICAgdGhpcy5zZXREYXRhKHtcbiAgICAgICAgW2B1c2VyRGF0YS5leGBdOiBlLmRldGFpbC52YWx1ZVxuICAgICAgfSlcbiAgICAgIHRoaXMudXNlckRhdGEuZXggPSBlLmRldGFpbC52YWx1ZVxuICAgICAgdGhpcy4kYXBwbHkoKVxuICAgIH0sXG4gICAgZWRpdFVzZXJJbmZvVGFwKGUpIHtcbiAgICAgIHRoaXMuaXNFZGl0ID0gdHJ1ZVxuICAgIH0sXG4gICAgY2xvc2VVc2VySW5mb1RhcCgpIHtcbiAgICAgIHRoaXMuaXNFZGl0ID0gZmFsc2VcbiAgICAgIHRoaXMudXNlckRhdGEgPSB0aGlzLnVzZXIudXNlckRhdGFcbiAgICAgIHRoaXMuJGFwcGx5KClcbiAgICB9LFxuICAgIGFzeW5jIHNhdmVVc2VySW5mb1RhcChlKSB7XG4gICAgICB0aGlzLmlzRWRpdCA9IGZhbHNlXG4gICAgICBjb25zdCB7IGlkIH0gPSB0aGlzLnVzZXJEYXRhXG4gICAgICB2YXIgcG9zdERhdGEgPSB7XG4gICAgICAgIG5hbWU6IHRoaXMudXNlckRhdGEubmFtZSxcbiAgICAgICAgY29tcGFueTogdGhpcy51c2VyRGF0YS5jb21wYW55LFxuICAgICAgICBwaG9uZTogdGhpcy51c2VyRGF0YS5waG9uZSxcbiAgICAgICAgdG9rZW46IHRoaXMudXNlckRhdGEudG9rZW4sXG4gICAgICAgIGV4OiB0aGlzLnVzZXJEYXRhLmV4XG4gICAgICB9XG4gICAgICBhd2FpdCBhcGkubW9kaWZ5VXNlckluZm8oaWQsIHBvc3REYXRhKVxuICAgICAgdGhpcy4kYXBwbHkoKVxuICAgIH0sXG4gICAgaGFuZGxlUHVibGlzaFRhcChlKSB7XG4gICAgICB3ZXB5Lm5hdmlnYXRlVG8oe1xuICAgICAgICB1cmw6ICdwdWJsaXNoJ1xuICAgICAgfSlcbiAgICB9LFxuICAgIGhhbmRsZUl0ZW1UYXAoZSkge1xuICAgICAgY29uc3QgaWQgPSB0aGlzLmxpc3RbZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQuaW5kZXhdLmlkXG4gICAgICB3ZXB5Lm5hdmlnYXRlVG8oe1xuICAgICAgICB1cmw6IGBib2FyZD9pZD0ke2lkfWBcbiAgICAgIH0pXG4gICAgfVxuICB9XG4gIG9uU2hhcmVBcHBNZXNzYWdlID0gYXN5bmMgZnVuY3Rpb24gKHJlcykge1xuICAgIGNvbnNvbGUubG9nKCfmiafooYzkuobliIbkuqsnKVxuICAgIHJldHVybiB7XG4gICAgICB0aXRsZTogJ+axn+WzsOWwj+eoi+W6jycsXG4gICAgICBwYXRoOiBgL3BhZ2VzL2JvYXJkc2BcbiAgICB9XG4gIH1cbiAgYXN5bmMgb25TaG93KCkge1xuICAgIGF3YWl0IHdlcHkuc2hvd1NoYXJlTWVudSh7XG4gICAgICB3aXRoU2hhcmVUaWNrZXQ6IHRydWVcbiAgICB9KVxuICAgIGlmICh0aGlzLnVzZXIudXNlckRhdGEpIHtcbiAgICAgIGNvbnNvbGUubG9nKCd0aGlzLnVzZXInLCB0aGlzLnVzZXIpXG4gICAgICB0aGlzLnVzZXJEYXRhID0gdGhpcy51c2VyLnVzZXJEYXRhXG4gICAgICBjb25zdCByZXMgPSBhd2FpdCBhcGkuZ2V0TXNnTGlzdCh0aGlzLnVzZXIudXNlckRhdGEuaWQpXG4gICAgICB0aGlzLmxpc3QgPSByZXMubWFwKGl0ZW0gPT4gKHtcbiAgICAgICAgaWQ6IGl0ZW0uaWQsXG4gICAgICAgIHRpdGxlOiBpdGVtLnRpdGxlLFxuICAgICAgICBjb250ZW50OiBpdGVtLnRleHQsXG4gICAgICAgIGNyZWF0ZWRCeTogaXRlbS5hdXRob3IubmFtZSxcbiAgICAgICAgY3JlYXRlZEF0OiBpdGVtLmRhdGVsaW5lLFxuICAgICAgICBjb3ZlcjogaXRlbS5waWNfdXJsc1swXSA/IGAke2pmLmJhc2VTZXJ2ZXJ9JHtpdGVtLnBpY191cmxzWzBdfWAgOiAnJyxcbiAgICAgICAgcmVhZDogaXRlbS5jbGlja19udW1cbiAgICAgIH0pKVxuICAgICAgdGhpcy4kYXBwbHkoKVxuICAgIH0gZWxzZSB7XG4gICAgICB3ZXB5LnJlTGF1bmNoKHtcbiAgICAgICAgdXJsOiAnL3BhZ2VzL3JlZ2lzdGVyJ1xuICAgICAgfSlcbiAgICB9XG4gIH1cbn1cbiJdfQ==