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

        return (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
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

        return (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2() {
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
    }, _this.onShareAppMessage = function (res) {
      return {
        title: this.userData.name + '的个人名片'
      };
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(Mine, [{
    key: 'onShow',
    value: function () {
      var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3() {
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
                  _context3.next = 11;
                  break;
                }

                // console.log('this.user', this.user)
                this.userData = this.user.userData;
                _context3.next = 6;
                return api.getMsgList(this.user.userData.id);

              case 6:
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
                _context3.next = 12;
                break;

              case 11:
                _wepy2.default.reLaunch({
                  url: '/pages/register'
                });

              case 12:
              case 'end':
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function onShow() {
        return _ref2.apply(this, arguments);
      }

      return onShow;
    }()
  }]);
  return Mine;
}(_wepy2.default.page)) || _class);

Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Mine , 'pages/mine'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1pbmUuanMiXSwibmFtZXMiOlsiYXBpIiwiTWluZSIsInVzZXIiLCJzdGF0ZSIsImNvbW1vbiIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCJkYXRhIiwibGlzdCIsInVzZXJEYXRhIiwibmFtZSIsIm5ld1VzZXJEYXRhIiwibGV2ZWxEYXRhIiwiaXNFZGl0IiwibWV0aG9kcyIsImRlbGV0ZUl0ZW0iLCJpdGVtIiwiaW5kZXgiLCJkZWxJdGVtIiwiaWQiLCJqZlRva2VuIiwic3BsaWNlIiwiJGFwcGx5IiwibmFtZUtleUlucHV0IiwiZSIsInNldERhdGEiLCJkZXRhaWwiLCJ2YWx1ZSIsImNvbXBhbnlLZXlJbnB1dCIsImNvbXBhbnkiLCJwaG9uZUtleUlucHV0IiwicGhvbmUiLCJ0b2tlbktleUlucHV0IiwidG9rZW4iLCJleEtleUlucHV0IiwiZXgiLCJlZGl0VXNlckluZm9UYXAiLCJjbG9zZVVzZXJJbmZvVGFwIiwic2F2ZVVzZXJJbmZvVGFwIiwiYWNjaWQiLCJwb3N0RGF0YSIsImNoYW5nZVlYTmFtZSIsIm1vZGlmeVVzZXJJbmZvIiwiaGFuZGxlUHVibGlzaFRhcCIsIm5hdmlnYXRlVG8iLCJ1cmwiLCJoYW5kbGVJdGVtVGFwIiwiSWQiLCJvblNoYXJlQXBwTWVzc2FnZSIsInJlcyIsInRpdGxlIiwic2hvd1NoYXJlTWVudSIsIndpdGhTaGFyZVRpY2tldCIsImdldE1zZ0xpc3QiLCJtYXAiLCJjb250ZW50IiwidGV4dCIsImNyZWF0ZWRCeSIsImF1dGhvciIsImNyZWF0ZWRBdCIsImRhdGVsaW5lIiwiY292ZXIiLCJwaWNfdXJscyIsImJhc2VTZXJ2ZXIiLCJyZWFkIiwiY2xpY2tfbnVtIiwicmVMYXVuY2giLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBOzs7O0FBQ0E7O0lBQVlBLEc7O0FBQ1o7O0FBQ0E7Ozs7OztJQU9xQkMsSSxXQUxwQix3QkFBUTtB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cUJBQUt6QyxJQUFMLEdBQVl5QyxJQUFJSyxHQUFKLENBQVE7QUFBQSx5QkFBUztBQUMzQm5DLHdCQUFJSCxLQUFLRyxFQURrQjtBQUUzQitCLDJCQUFPbEMsS0FBS2tDLEtBRmU7QUFHM0JLLDZCQUFTdkMsS0FBS3dDLElBSGE7QUFJM0JDLCtCQUFXekMsS0FBSzBDLE1BQUwsQ0FBWWhELElBSkk7QUFLM0JpRCwrQkFBVzNDLEtBQUs0QyxRQUxXO0FBTTNCQywyQkFBTzdDLEtBQUs4QyxRQUFMLENBQWMsQ0FBZCxTQUFzQixXQUFHQyxVQUF6QixHQUFzQy9DLEtBQUs4QyxRQUFMLENBQWMsQ0FBZCxDQUF0QyxHQUEyRCxFQU52QztBQU8zQkUsMEJBQU1oRCxLQUFLaUQ7QUFQZ0IsbUJBQVQ7QUFBQSxpQkFBUixDQUFaO0FBU0EscUJBQUszQyxNQUFMOzs7OztBQUVBLCtCQUFLNEMsUUFBTCxDQUFjO0FBQ1pyQix1QkFBSztBQURPLGlCQUFkOzs7Ozs7Ozs7Ozs7Ozs7Ozs7RUFuSDRCLGVBQUtzQixJO2tCQUFsQmxFLEkiLCJmaWxlIjoibWluZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5pbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xyXG5pbXBvcnQgKiBhcyBhcGkgZnJvbSAnLi4vYXBpcy9taW5lJ1xyXG5pbXBvcnQgeyBqZiB9IGZyb20gJy4uL2NvbmZpZydcclxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3dlcHktcmVkdXgnXHJcblxyXG5AY29ubmVjdCh7XHJcbiAgdXNlcihzdGF0ZSkge1xyXG4gICAgcmV0dXJuIHN0YXRlLmNvbW1vbi51c2VyXHJcbiAgfVxyXG59KVxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNaW5lIGV4dGVuZHMgd2VweS5wYWdlIHtcclxuICBjb25maWcgPSB7XHJcbiAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn5Liq5Lq65Lit5b+DJ1xyXG4gIH1cclxuXHJcbiAgZGF0YSA9IHtcclxuICAgIGxpc3Q6IFtdLFxyXG4gICAgdXNlckRhdGE6IHtcclxuICAgICAgbmFtZTogJ+WKoOi9veS4rS4uLidcclxuICAgIH0sXHJcbiAgICBuZXdVc2VyRGF0YToge30sXHJcbiAgICBsZXZlbERhdGE6ICcnLFxyXG4gICAgaXNFZGl0OiBmYWxzZVxyXG4gIH1cclxuXHJcbiAgbWV0aG9kcyA9IHtcclxuICAgIGFzeW5jIGRlbGV0ZUl0ZW0oaXRlbSwgaW5kZXgpIHtcclxuICAgICAgYXdhaXQgYXBpLmRlbEl0ZW0oaXRlbS5pZCwgdGhpcy51c2VyLmpmVG9rZW4pXHJcbiAgICAgIHRoaXMubGlzdC5zcGxpY2UoaW5kZXgsIDEpXHJcbiAgICAgIHRoaXMuJGFwcGx5KClcclxuICAgIH0sXHJcbiAgICBuYW1lS2V5SW5wdXQoZSkge1xyXG4gICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgIFtgdXNlckRhdGEubmFtZWBdOiBlLmRldGFpbC52YWx1ZVxyXG4gICAgICB9KVxyXG4gICAgICB0aGlzLnVzZXJEYXRhLm5hbWUgPSBlLmRldGFpbC52YWx1ZVxyXG4gICAgICB0aGlzLiRhcHBseSgpXHJcbiAgICB9LFxyXG4gICAgY29tcGFueUtleUlucHV0KGUpIHtcclxuICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICBbYHVzZXJEYXRhLmNvbXBhbnlgXTogZS5kZXRhaWwudmFsdWVcclxuICAgICAgfSlcclxuICAgICAgdGhpcy51c2VyRGF0YS5jb21wYW55ID0gZS5kZXRhaWwudmFsdWVcclxuICAgICAgdGhpcy4kYXBwbHkoKVxyXG4gICAgfSxcclxuICAgIHBob25lS2V5SW5wdXQoZSkge1xyXG4gICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgIFtgdXNlckRhdGEucGhvbmVgXTogZS5kZXRhaWwudmFsdWVcclxuICAgICAgfSlcclxuICAgICAgdGhpcy51c2VyRGF0YS5waG9uZSA9IGUuZGV0YWlsLnZhbHVlXHJcbiAgICAgIHRoaXMuJGFwcGx5KClcclxuICAgIH0sXHJcbiAgICB0b2tlbktleUlucHV0KGUpIHtcclxuICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICBbYHVzZXJEYXRhLnRva2VuYF06IGUuZGV0YWlsLnZhbHVlXHJcbiAgICAgIH0pXHJcbiAgICAgIHRoaXMudXNlckRhdGEudG9rZW4gPSBlLmRldGFpbC52YWx1ZVxyXG4gICAgICB0aGlzLiRhcHBseSgpXHJcbiAgICB9LFxyXG4gICAgZXhLZXlJbnB1dChlKSB7XHJcbiAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgW2B1c2VyRGF0YS5leGBdOiBlLmRldGFpbC52YWx1ZVxyXG4gICAgICB9KVxyXG4gICAgICB0aGlzLnVzZXJEYXRhLmV4ID0gZS5kZXRhaWwudmFsdWVcclxuICAgICAgdGhpcy4kYXBwbHkoKVxyXG4gICAgfSxcclxuICAgIGVkaXRVc2VySW5mb1RhcChlKSB7XHJcbiAgICAgIHRoaXMuaXNFZGl0ID0gdHJ1ZVxyXG4gICAgfSxcclxuICAgIGNsb3NlVXNlckluZm9UYXAoKSB7XHJcbiAgICAgIHRoaXMuaXNFZGl0ID0gZmFsc2VcclxuICAgICAgdGhpcy51c2VyRGF0YSA9IHRoaXMudXNlci51c2VyRGF0YVxyXG4gICAgICB0aGlzLiRhcHBseSgpXHJcbiAgICB9LFxyXG4gICAgYXN5bmMgc2F2ZVVzZXJJbmZvVGFwKGUpIHtcclxuICAgICAgdGhpcy5pc0VkaXQgPSBmYWxzZVxyXG4gICAgICBjb25zdCB7IGlkIH0gPSB0aGlzLnVzZXJEYXRhXHJcbiAgICAgIGNvbnN0IHsgYWNjaWQgfSA9IHRoaXMudXNlckRhdGFcclxuICAgICAgdmFyIHBvc3REYXRhID0ge1xyXG4gICAgICAgIG5hbWU6IHRoaXMudXNlckRhdGEubmFtZSxcclxuICAgICAgICBjb21wYW55OiB0aGlzLnVzZXJEYXRhLmNvbXBhbnksXHJcbiAgICAgICAgcGhvbmU6IHRoaXMudXNlckRhdGEucGhvbmUsXHJcbiAgICAgICAgdG9rZW46IHRoaXMudXNlckRhdGEudG9rZW4sXHJcbiAgICAgICAgZXg6IHRoaXMudXNlckRhdGEuZXhcclxuICAgICAgfVxyXG4gICAgICBhd2FpdCBhcGkuY2hhbmdlWVhOYW1lKGFjY2lkLCBwb3N0RGF0YS5uYW1lKVxyXG4gICAgICBhd2FpdCBhcGkubW9kaWZ5VXNlckluZm8oaWQsIHBvc3REYXRhKVxyXG4gICAgICB0aGlzLiRhcHBseSgpXHJcbiAgICB9LFxyXG4gICAgaGFuZGxlUHVibGlzaFRhcChlKSB7XHJcbiAgICAgIHdlcHkubmF2aWdhdGVUbyh7XHJcbiAgICAgICAgdXJsOiAncHVibGlzaCdcclxuICAgICAgfSlcclxuICAgIH0sXHJcbiAgICBoYW5kbGVJdGVtVGFwKElkKSB7XHJcbiAgICAgIGNvbnN0IGlkID0gSWRcclxuICAgICAgd2VweS5uYXZpZ2F0ZVRvKHtcclxuICAgICAgICB1cmw6IGBib2FyZD9pZD0ke2lkfWBcclxuICAgICAgfSlcclxuICAgIH1cclxuICB9XHJcbiAgb25TaGFyZUFwcE1lc3NhZ2UgPSAgZnVuY3Rpb24gKHJlcykge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgdGl0bGU6IHRoaXMudXNlckRhdGEubmFtZSsn55qE5Liq5Lq65ZCN54mHJyxcclxuICAgIH1cclxuICB9XHJcbiAgYXN5bmMgb25TaG93KCkge1xyXG4gICAgYXdhaXQgd2VweS5zaG93U2hhcmVNZW51KHtcclxuICAgICAgd2l0aFNoYXJlVGlja2V0OiB0cnVlXHJcbiAgICB9KVxyXG4gICAgaWYgKHRoaXMudXNlci51c2VyRGF0YSkge1xyXG4gICAgICAvLyBjb25zb2xlLmxvZygndGhpcy51c2VyJywgdGhpcy51c2VyKVxyXG4gICAgICB0aGlzLnVzZXJEYXRhID0gdGhpcy51c2VyLnVzZXJEYXRhXHJcbiAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGFwaS5nZXRNc2dMaXN0KHRoaXMudXNlci51c2VyRGF0YS5pZClcclxuICAgICAgdGhpcy5saXN0ID0gcmVzLm1hcChpdGVtID0+ICh7XHJcbiAgICAgICAgaWQ6IGl0ZW0uaWQsXHJcbiAgICAgICAgdGl0bGU6IGl0ZW0udGl0bGUsXHJcbiAgICAgICAgY29udGVudDogaXRlbS50ZXh0LFxyXG4gICAgICAgIGNyZWF0ZWRCeTogaXRlbS5hdXRob3IubmFtZSxcclxuICAgICAgICBjcmVhdGVkQXQ6IGl0ZW0uZGF0ZWxpbmUsXHJcbiAgICAgICAgY292ZXI6IGl0ZW0ucGljX3VybHNbMF0gPyBgJHtqZi5iYXNlU2VydmVyfSR7aXRlbS5waWNfdXJsc1swXX1gIDogJycsXHJcbiAgICAgICAgcmVhZDogaXRlbS5jbGlja19udW1cclxuICAgICAgfSkpXHJcbiAgICAgIHRoaXMuJGFwcGx5KClcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHdlcHkucmVMYXVuY2goe1xyXG4gICAgICAgIHVybDogJy9wYWdlcy9yZWdpc3RlcidcclxuICAgICAgfSlcclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19