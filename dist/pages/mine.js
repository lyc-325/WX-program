'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _defineProperty2 = require('./../npm/babel-runtime/helpers/defineProperty.js');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _regenerator = require('./../npm/babel-runtime/regenerator/index.js');

var _regenerator2 = _interopRequireDefault(_regenerator);

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
      deleteItem: function deleteItem(item, index) {
        var _this2 = this;

        return (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee() {
          return _regenerator2.default.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  _context.next = 2;
                  return api.delItem(item.id, _this2.user.jfToken);

                case 2:
                  _this2.list.splice(index, 1);
                  _this2.$apply();

                case 4:
                case 'end':
                  return _context.stop();
              }
            }
          }, _callee, _this2);
        }))();
      },
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
        var _this3 = this;

        return (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee2() {
          var id, accid, postData;
          return _regenerator2.default.wrap(function _callee2$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  _this3.isEdit = false;
                  id = _this3.userData.id;
                  accid = _this3.userData.accid;
                  postData = {
                    name: _this3.userData.name,
                    company: _this3.userData.company,
                    phone: _this3.userData.phone,
                    token: _this3.userData.token,
                    ex: _this3.userData.ex
                  };
                  _context2.next = 6;
                  return api.changeYXName(accid, postData.name);

                case 6:
                  _context2.next = 8;
                  return api.modifyUserInfo(id, postData);

                case 8:
                  _this3.$apply();

                case 9:
                case 'end':
                  return _context2.stop();
              }
            }
          }, _callee2, _this3);
        }))();
      },
      handlePublishTap: function handlePublishTap(e) {
        _wepy2.default.navigateTo({
          url: 'publish'
        });
      },
      handleItemTap: function handleItemTap(Id) {
        var id = Id;
        _wepy2.default.navigateTo({
          url: 'board?id=' + id
        });
      }
    }, _this.onShareAppMessage = function () {
      var _ref2 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee3(res) {
        return _regenerator2.default.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                console.log('执行了分享');
                return _context3.abrupt('return', {
                  title: '江峰小程序',
                  path: '/pages/boards'
                });

              case 2:
              case 'end':
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      return function (_x) {
        return _ref2.apply(this, arguments);
      };
    }(), _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(Mine, [{
    key: 'onShow',
    value: function () {
      var _ref3 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee4() {
        var res;
        return _regenerator2.default.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return _wepy2.default.showShareMenu({
                  withShareTicket: true
                });

              case 2:
                if (!this.user.userData) {
                  _context4.next = 12;
                  break;
                }

                console.log('this.user', this.user);
                this.userData = this.user.userData;
                _context4.next = 7;
                return api.getMsgList(this.user.userData.id);

              case 7:
                res = _context4.sent;

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
                _context4.next = 13;
                break;

              case 12:
                _wepy2.default.reLaunch({
                  url: '/pages/register'
                });

              case 13:
              case 'end':
                return _context4.stop();
            }
          }
        }, _callee4, this);
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1pbmUuanMiXSwibmFtZXMiOlsiYXBpIiwiTWluZSIsInVzZXIiLCJzdGF0ZSIsImNvbW1vbiIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCJkYXRhIiwibGlzdCIsInVzZXJEYXRhIiwibmFtZSIsIm5ld1VzZXJEYXRhIiwibGV2ZWxEYXRhIiwiaXNFZGl0IiwibWV0aG9kcyIsImRlbGV0ZUl0ZW0iLCJpdGVtIiwiaW5kZXgiLCJkZWxJdGVtIiwiaWQiLCJqZlRva2VuIiwic3BsaWNlIiwiJGFwcGx5IiwibmFtZUtleUlucHV0IiwiZSIsInNldERhdGEiLCJkZXRhaWwiLCJ2YWx1ZSIsImNvbXBhbnlLZXlJbnB1dCIsImNvbXBhbnkiLCJwaG9uZUtleUlucHV0IiwicGhvbmUiLCJ0b2tlbktleUlucHV0IiwidG9rZW4iLCJleEtleUlucHV0IiwiZXgiLCJlZGl0VXNlckluZm9UYXAiLCJjbG9zZVVzZXJJbmZvVGFwIiwic2F2ZVVzZXJJbmZvVGFwIiwiYWNjaWQiLCJwb3N0RGF0YSIsImNoYW5nZVlYTmFtZSIsIm1vZGlmeVVzZXJJbmZvIiwiaGFuZGxlUHVibGlzaFRhcCIsIm5hdmlnYXRlVG8iLCJ1cmwiLCJoYW5kbGVJdGVtVGFwIiwiSWQiLCJvblNoYXJlQXBwTWVzc2FnZSIsInJlcyIsImNvbnNvbGUiLCJsb2ciLCJ0aXRsZSIsInBhdGgiLCJzaG93U2hhcmVNZW51Iiwid2l0aFNoYXJlVGlja2V0IiwiZ2V0TXNnTGlzdCIsIm1hcCIsImNvbnRlbnQiLCJ0ZXh0IiwiY3JlYXRlZEJ5IiwiYXV0aG9yIiwiY3JlYXRlZEF0IiwiZGF0ZWxpbmUiLCJjb3ZlciIsInBpY191cmxzIiwiYmFzZVNlcnZlciIsInJlYWQiLCJjbGlja19udW0iLCJyZUxhdW5jaCIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7Ozs7QUFDQTs7SUFBWUEsRzs7QUFDWjs7QUFDQTs7Ozs7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QUE5QjtBQUNBLHFCQUFLTyxRQUFMLEdBQWdCLEtBQUtQLElBQUwsQ0FBVU8sUUFBMUI7O3VCQUNrQlQsSUFBSXdELFVBQUosQ0FBZSxLQUFLdEQsSUFBTCxDQUFVTyxRQUFWLENBQW1CVSxFQUFsQyxDOzs7QUFBWjhCLG1COztBQUNOLHFCQUFLekMsSUFBTCxHQUFZeUMsSUFBSVEsR0FBSixDQUFRO0FBQUEseUJBQVM7QUFDM0J0Qyx3QkFBSUgsS0FBS0csRUFEa0I7QUFFM0JpQywyQkFBT3BDLEtBQUtvQyxLQUZlO0FBRzNCTSw2QkFBUzFDLEtBQUsyQyxJQUhhO0FBSTNCQywrQkFBVzVDLEtBQUs2QyxNQUFMLENBQVluRCxJQUpJO0FBSzNCb0QsK0JBQVc5QyxLQUFLK0MsUUFMVztBQU0zQkMsMkJBQU9oRCxLQUFLaUQsUUFBTCxDQUFjLENBQWQsU0FBc0IsV0FBR0MsVUFBekIsR0FBc0NsRCxLQUFLaUQsUUFBTCxDQUFjLENBQWQsQ0FBdEMsR0FBMkQsRUFOdkM7QUFPM0JFLDBCQUFNbkQsS0FBS29EO0FBUGdCLG1CQUFUO0FBQUEsaUJBQVIsQ0FBWjtBQVNBLHFCQUFLOUMsTUFBTDs7Ozs7QUFFQSwrQkFBSytDLFFBQUwsQ0FBYztBQUNaeEIsdUJBQUs7QUFETyxpQkFBZDs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBckg0QixlQUFLeUIsSTtrQkFBbEJyRSxJIiwiZmlsZSI6Im1pbmUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG5pbXBvcnQgKiBhcyBhcGkgZnJvbSAnLi4vYXBpcy9taW5lJ1xuaW1wb3J0IHsgamYgfSBmcm9tICcuLi9jb25maWcnXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAnd2VweS1yZWR1eCdcblxuQGNvbm5lY3Qoe1xuICB1c2VyKHN0YXRlKSB7XG4gICAgcmV0dXJuIHN0YXRlLmNvbW1vbi51c2VyXG4gIH1cbn0pXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNaW5lIGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgY29uZmlnID0ge1xuICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICfkuKrkurrkuK3lv4MnXG4gIH1cblxuICBkYXRhID0ge1xuICAgIGxpc3Q6IFtdLFxuICAgIHVzZXJEYXRhOiB7XG4gICAgICBuYW1lOiAn5Yqg6L295LitLi4uJ1xuICAgIH0sXG4gICAgbmV3VXNlckRhdGE6IHt9LFxuICAgIGxldmVsRGF0YTogJycsXG4gICAgaXNFZGl0OiBmYWxzZVxuICB9XG5cbiAgbWV0aG9kcyA9IHtcbiAgICBhc3luYyBkZWxldGVJdGVtKGl0ZW0sIGluZGV4KSB7XG4gICAgICBhd2FpdCBhcGkuZGVsSXRlbShpdGVtLmlkLCB0aGlzLnVzZXIuamZUb2tlbilcbiAgICAgIHRoaXMubGlzdC5zcGxpY2UoaW5kZXgsIDEpXG4gICAgICB0aGlzLiRhcHBseSgpXG4gICAgfSxcbiAgICBuYW1lS2V5SW5wdXQoZSkge1xuICAgICAgdGhpcy5zZXREYXRhKHtcbiAgICAgICAgW2B1c2VyRGF0YS5uYW1lYF06IGUuZGV0YWlsLnZhbHVlXG4gICAgICB9KVxuICAgICAgdGhpcy51c2VyRGF0YS5uYW1lID0gZS5kZXRhaWwudmFsdWVcbiAgICAgIHRoaXMuJGFwcGx5KClcbiAgICB9LFxuICAgIGNvbXBhbnlLZXlJbnB1dChlKSB7XG4gICAgICB0aGlzLnNldERhdGEoe1xuICAgICAgICBbYHVzZXJEYXRhLmNvbXBhbnlgXTogZS5kZXRhaWwudmFsdWVcbiAgICAgIH0pXG4gICAgICB0aGlzLnVzZXJEYXRhLmNvbXBhbnkgPSBlLmRldGFpbC52YWx1ZVxuICAgICAgdGhpcy4kYXBwbHkoKVxuICAgIH0sXG4gICAgcGhvbmVLZXlJbnB1dChlKSB7XG4gICAgICB0aGlzLnNldERhdGEoe1xuICAgICAgICBbYHVzZXJEYXRhLnBob25lYF06IGUuZGV0YWlsLnZhbHVlXG4gICAgICB9KVxuICAgICAgdGhpcy51c2VyRGF0YS5waG9uZSA9IGUuZGV0YWlsLnZhbHVlXG4gICAgICB0aGlzLiRhcHBseSgpXG4gICAgfSxcbiAgICB0b2tlbktleUlucHV0KGUpIHtcbiAgICAgIHRoaXMuc2V0RGF0YSh7XG4gICAgICAgIFtgdXNlckRhdGEudG9rZW5gXTogZS5kZXRhaWwudmFsdWVcbiAgICAgIH0pXG4gICAgICB0aGlzLnVzZXJEYXRhLnRva2VuID0gZS5kZXRhaWwudmFsdWVcbiAgICAgIHRoaXMuJGFwcGx5KClcbiAgICB9LFxuICAgIGV4S2V5SW5wdXQoZSkge1xuICAgICAgdGhpcy5zZXREYXRhKHtcbiAgICAgICAgW2B1c2VyRGF0YS5leGBdOiBlLmRldGFpbC52YWx1ZVxuICAgICAgfSlcbiAgICAgIHRoaXMudXNlckRhdGEuZXggPSBlLmRldGFpbC52YWx1ZVxuICAgICAgdGhpcy4kYXBwbHkoKVxuICAgIH0sXG4gICAgZWRpdFVzZXJJbmZvVGFwKGUpIHtcbiAgICAgIHRoaXMuaXNFZGl0ID0gdHJ1ZVxuICAgIH0sXG4gICAgY2xvc2VVc2VySW5mb1RhcCgpIHtcbiAgICAgIHRoaXMuaXNFZGl0ID0gZmFsc2VcbiAgICAgIHRoaXMudXNlckRhdGEgPSB0aGlzLnVzZXIudXNlckRhdGFcbiAgICAgIHRoaXMuJGFwcGx5KClcbiAgICB9LFxuICAgIGFzeW5jIHNhdmVVc2VySW5mb1RhcChlKSB7XG4gICAgICB0aGlzLmlzRWRpdCA9IGZhbHNlXG4gICAgICBjb25zdCB7IGlkIH0gPSB0aGlzLnVzZXJEYXRhXG4gICAgICBjb25zdCB7IGFjY2lkIH0gPSB0aGlzLnVzZXJEYXRhXG4gICAgICB2YXIgcG9zdERhdGEgPSB7XG4gICAgICAgIG5hbWU6IHRoaXMudXNlckRhdGEubmFtZSxcbiAgICAgICAgY29tcGFueTogdGhpcy51c2VyRGF0YS5jb21wYW55LFxuICAgICAgICBwaG9uZTogdGhpcy51c2VyRGF0YS5waG9uZSxcbiAgICAgICAgdG9rZW46IHRoaXMudXNlckRhdGEudG9rZW4sXG4gICAgICAgIGV4OiB0aGlzLnVzZXJEYXRhLmV4XG4gICAgICB9XG4gICAgICBhd2FpdCBhcGkuY2hhbmdlWVhOYW1lKGFjY2lkLCBwb3N0RGF0YS5uYW1lKVxuICAgICAgYXdhaXQgYXBpLm1vZGlmeVVzZXJJbmZvKGlkLCBwb3N0RGF0YSlcbiAgICAgIHRoaXMuJGFwcGx5KClcbiAgICB9LFxuICAgIGhhbmRsZVB1Ymxpc2hUYXAoZSkge1xuICAgICAgd2VweS5uYXZpZ2F0ZVRvKHtcbiAgICAgICAgdXJsOiAncHVibGlzaCdcbiAgICAgIH0pXG4gICAgfSxcbiAgICBoYW5kbGVJdGVtVGFwKElkKSB7XG4gICAgICBjb25zdCBpZCA9IElkXG4gICAgICB3ZXB5Lm5hdmlnYXRlVG8oe1xuICAgICAgICB1cmw6IGBib2FyZD9pZD0ke2lkfWBcbiAgICAgIH0pXG4gICAgfVxuICB9XG4gIG9uU2hhcmVBcHBNZXNzYWdlID0gYXN5bmMgZnVuY3Rpb24gKHJlcykge1xuICAgIGNvbnNvbGUubG9nKCfmiafooYzkuobliIbkuqsnKVxuICAgIHJldHVybiB7XG4gICAgICB0aXRsZTogJ+axn+WzsOWwj+eoi+W6jycsXG4gICAgICBwYXRoOiBgL3BhZ2VzL2JvYXJkc2BcbiAgICB9XG4gIH1cbiAgYXN5bmMgb25TaG93KCkge1xuICAgIGF3YWl0IHdlcHkuc2hvd1NoYXJlTWVudSh7XG4gICAgICB3aXRoU2hhcmVUaWNrZXQ6IHRydWVcbiAgICB9KVxuICAgIGlmICh0aGlzLnVzZXIudXNlckRhdGEpIHtcbiAgICAgIGNvbnNvbGUubG9nKCd0aGlzLnVzZXInLCB0aGlzLnVzZXIpXG4gICAgICB0aGlzLnVzZXJEYXRhID0gdGhpcy51c2VyLnVzZXJEYXRhXG4gICAgICBjb25zdCByZXMgPSBhd2FpdCBhcGkuZ2V0TXNnTGlzdCh0aGlzLnVzZXIudXNlckRhdGEuaWQpXG4gICAgICB0aGlzLmxpc3QgPSByZXMubWFwKGl0ZW0gPT4gKHtcbiAgICAgICAgaWQ6IGl0ZW0uaWQsXG4gICAgICAgIHRpdGxlOiBpdGVtLnRpdGxlLFxuICAgICAgICBjb250ZW50OiBpdGVtLnRleHQsXG4gICAgICAgIGNyZWF0ZWRCeTogaXRlbS5hdXRob3IubmFtZSxcbiAgICAgICAgY3JlYXRlZEF0OiBpdGVtLmRhdGVsaW5lLFxuICAgICAgICBjb3ZlcjogaXRlbS5waWNfdXJsc1swXSA/IGAke2pmLmJhc2VTZXJ2ZXJ9JHtpdGVtLnBpY191cmxzWzBdfWAgOiAnJyxcbiAgICAgICAgcmVhZDogaXRlbS5jbGlja19udW1cbiAgICAgIH0pKVxuICAgICAgdGhpcy4kYXBwbHkoKVxuICAgIH0gZWxzZSB7XG4gICAgICB3ZXB5LnJlTGF1bmNoKHtcbiAgICAgICAgdXJsOiAnL3BhZ2VzL3JlZ2lzdGVyJ1xuICAgICAgfSlcbiAgICB9XG4gIH1cbn1cbiJdfQ==