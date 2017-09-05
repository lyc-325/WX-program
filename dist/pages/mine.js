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
          var id, postData;
          return _regenerator2.default.wrap(function _callee2$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  _this3.isEdit = false;
                  id = _this3.userData.id;
                  postData = {
                    name: _this3.userData.name,
                    company: _this3.userData.company,
                    phone: _this3.userData.phone,
                    token: _this3.userData.token,
                    ex: _this3.userData.ex
                  };
                  _context2.next = 5;
                  return api.modifyUserInfo(id, postData);

                case 5:
                  _this3.$apply();

                case 6:
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1pbmUuanMiXSwibmFtZXMiOlsiYXBpIiwiTWluZSIsInVzZXIiLCJzdGF0ZSIsImNvbW1vbiIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCJkYXRhIiwibGlzdCIsInVzZXJEYXRhIiwibmFtZSIsIm5ld1VzZXJEYXRhIiwibGV2ZWxEYXRhIiwiaXNFZGl0IiwibWV0aG9kcyIsImRlbGV0ZUl0ZW0iLCJpdGVtIiwiaW5kZXgiLCJkZWxJdGVtIiwiaWQiLCJqZlRva2VuIiwic3BsaWNlIiwiJGFwcGx5IiwibmFtZUtleUlucHV0IiwiZSIsInNldERhdGEiLCJkZXRhaWwiLCJ2YWx1ZSIsImNvbXBhbnlLZXlJbnB1dCIsImNvbXBhbnkiLCJwaG9uZUtleUlucHV0IiwicGhvbmUiLCJ0b2tlbktleUlucHV0IiwidG9rZW4iLCJleEtleUlucHV0IiwiZXgiLCJlZGl0VXNlckluZm9UYXAiLCJjbG9zZVVzZXJJbmZvVGFwIiwic2F2ZVVzZXJJbmZvVGFwIiwicG9zdERhdGEiLCJtb2RpZnlVc2VySW5mbyIsImhhbmRsZVB1Ymxpc2hUYXAiLCJuYXZpZ2F0ZVRvIiwidXJsIiwiaGFuZGxlSXRlbVRhcCIsIklkIiwib25TaGFyZUFwcE1lc3NhZ2UiLCJyZXMiLCJjb25zb2xlIiwibG9nIiwidGl0bGUiLCJwYXRoIiwic2hvd1NoYXJlTWVudSIsIndpdGhTaGFyZVRpY2tldCIsImdldE1zZ0xpc3QiLCJtYXAiLCJjb250ZW50IiwidGV4dCIsImNyZWF0ZWRCeSIsImF1dGhvciIsImNyZWF0ZWRBdCIsImRhdGVsaW5lIiwiY292ZXIiLCJwaWNfdXJscyIsImJhc2VTZXJ2ZXIiLCJyZWFkIiwiY2xpY2tfbnVtIiwicmVMYXVuY2giLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBOzs7O0FBQ0E7O0lBQVlBLEc7O0FBQ1o7O0FBQ0E7Ozs7OztJQU9xQkMsSSxXQUxwQix3QkFBUTtB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QyxJQUFMLEdBQVl1QyxJQUFJUSxHQUFKLENBQVE7QUFBQSx5QkFBUztBQUMzQnBDLHdCQUFJSCxLQUFLRyxFQURrQjtBQUUzQitCLDJCQUFPbEMsS0FBS2tDLEtBRmU7QUFHM0JNLDZCQUFTeEMsS0FBS3lDLElBSGE7QUFJM0JDLCtCQUFXMUMsS0FBSzJDLE1BQUwsQ0FBWWpELElBSkk7QUFLM0JrRCwrQkFBVzVDLEtBQUs2QyxRQUxXO0FBTTNCQywyQkFBTzlDLEtBQUsrQyxRQUFMLENBQWMsQ0FBZCxTQUFzQixXQUFHQyxVQUF6QixHQUFzQ2hELEtBQUsrQyxRQUFMLENBQWMsQ0FBZCxDQUF0QyxHQUEyRCxFQU52QztBQU8zQkUsMEJBQU1qRCxLQUFLa0Q7QUFQZ0IsbUJBQVQ7QUFBQSxpQkFBUixDQUFaO0FBU0EscUJBQUs1QyxNQUFMOzs7OztBQUVBLCtCQUFLNkMsUUFBTCxDQUFjO0FBQ1p4Qix1QkFBSztBQURPLGlCQUFkOzs7Ozs7Ozs7Ozs7Ozs7Ozs7RUFuSDRCLGVBQUt5QixJO2tCQUFsQm5FLEkiLCJmaWxlIjoibWluZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcbmltcG9ydCAqIGFzIGFwaSBmcm9tICcuLi9hcGlzL21pbmUnXG5pbXBvcnQgeyBqZiB9IGZyb20gJy4uL2NvbmZpZydcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICd3ZXB5LXJlZHV4J1xuXG5AY29ubmVjdCh7XG4gIHVzZXIoc3RhdGUpIHtcbiAgICByZXR1cm4gc3RhdGUuY29tbW9uLnVzZXJcbiAgfVxufSlcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1pbmUgZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICBjb25maWcgPSB7XG4gICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+S4quS6uuS4reW/gydcbiAgfVxuXG4gIGRhdGEgPSB7XG4gICAgbGlzdDogW10sXG4gICAgdXNlckRhdGE6IHtcbiAgICAgIG5hbWU6ICfliqDovb3kuK0uLi4nXG4gICAgfSxcbiAgICBuZXdVc2VyRGF0YToge30sXG4gICAgbGV2ZWxEYXRhOiAnJyxcbiAgICBpc0VkaXQ6IGZhbHNlXG4gIH1cblxuICBtZXRob2RzID0ge1xuICAgIGFzeW5jIGRlbGV0ZUl0ZW0oaXRlbSwgaW5kZXgpIHtcbiAgICAgIGF3YWl0IGFwaS5kZWxJdGVtKGl0ZW0uaWQsIHRoaXMudXNlci5qZlRva2VuKVxuICAgICAgdGhpcy5saXN0LnNwbGljZShpbmRleCwgMSlcbiAgICAgIHRoaXMuJGFwcGx5KClcbiAgICB9LFxuICAgIG5hbWVLZXlJbnB1dChlKSB7XG4gICAgICB0aGlzLnNldERhdGEoe1xuICAgICAgICBbYHVzZXJEYXRhLm5hbWVgXTogZS5kZXRhaWwudmFsdWVcbiAgICAgIH0pXG4gICAgICB0aGlzLnVzZXJEYXRhLm5hbWUgPSBlLmRldGFpbC52YWx1ZVxuICAgICAgdGhpcy4kYXBwbHkoKVxuICAgIH0sXG4gICAgY29tcGFueUtleUlucHV0KGUpIHtcbiAgICAgIHRoaXMuc2V0RGF0YSh7XG4gICAgICAgIFtgdXNlckRhdGEuY29tcGFueWBdOiBlLmRldGFpbC52YWx1ZVxuICAgICAgfSlcbiAgICAgIHRoaXMudXNlckRhdGEuY29tcGFueSA9IGUuZGV0YWlsLnZhbHVlXG4gICAgICB0aGlzLiRhcHBseSgpXG4gICAgfSxcbiAgICBwaG9uZUtleUlucHV0KGUpIHtcbiAgICAgIHRoaXMuc2V0RGF0YSh7XG4gICAgICAgIFtgdXNlckRhdGEucGhvbmVgXTogZS5kZXRhaWwudmFsdWVcbiAgICAgIH0pXG4gICAgICB0aGlzLnVzZXJEYXRhLnBob25lID0gZS5kZXRhaWwudmFsdWVcbiAgICAgIHRoaXMuJGFwcGx5KClcbiAgICB9LFxuICAgIHRva2VuS2V5SW5wdXQoZSkge1xuICAgICAgdGhpcy5zZXREYXRhKHtcbiAgICAgICAgW2B1c2VyRGF0YS50b2tlbmBdOiBlLmRldGFpbC52YWx1ZVxuICAgICAgfSlcbiAgICAgIHRoaXMudXNlckRhdGEudG9rZW4gPSBlLmRldGFpbC52YWx1ZVxuICAgICAgdGhpcy4kYXBwbHkoKVxuICAgIH0sXG4gICAgZXhLZXlJbnB1dChlKSB7XG4gICAgICB0aGlzLnNldERhdGEoe1xuICAgICAgICBbYHVzZXJEYXRhLmV4YF06IGUuZGV0YWlsLnZhbHVlXG4gICAgICB9KVxuICAgICAgdGhpcy51c2VyRGF0YS5leCA9IGUuZGV0YWlsLnZhbHVlXG4gICAgICB0aGlzLiRhcHBseSgpXG4gICAgfSxcbiAgICBlZGl0VXNlckluZm9UYXAoZSkge1xuICAgICAgdGhpcy5pc0VkaXQgPSB0cnVlXG4gICAgfSxcbiAgICBjbG9zZVVzZXJJbmZvVGFwKCkge1xuICAgICAgdGhpcy5pc0VkaXQgPSBmYWxzZVxuICAgICAgdGhpcy51c2VyRGF0YSA9IHRoaXMudXNlci51c2VyRGF0YVxuICAgICAgdGhpcy4kYXBwbHkoKVxuICAgIH0sXG4gICAgYXN5bmMgc2F2ZVVzZXJJbmZvVGFwKGUpIHtcbiAgICAgIHRoaXMuaXNFZGl0ID0gZmFsc2VcbiAgICAgIGNvbnN0IHsgaWQgfSA9IHRoaXMudXNlckRhdGFcbiAgICAgIHZhciBwb3N0RGF0YSA9IHtcbiAgICAgICAgbmFtZTogdGhpcy51c2VyRGF0YS5uYW1lLFxuICAgICAgICBjb21wYW55OiB0aGlzLnVzZXJEYXRhLmNvbXBhbnksXG4gICAgICAgIHBob25lOiB0aGlzLnVzZXJEYXRhLnBob25lLFxuICAgICAgICB0b2tlbjogdGhpcy51c2VyRGF0YS50b2tlbixcbiAgICAgICAgZXg6IHRoaXMudXNlckRhdGEuZXhcbiAgICAgIH1cbiAgICAgIGF3YWl0IGFwaS5tb2RpZnlVc2VySW5mbyhpZCwgcG9zdERhdGEpXG4gICAgICB0aGlzLiRhcHBseSgpXG4gICAgfSxcbiAgICBoYW5kbGVQdWJsaXNoVGFwKGUpIHtcbiAgICAgIHdlcHkubmF2aWdhdGVUbyh7XG4gICAgICAgIHVybDogJ3B1Ymxpc2gnXG4gICAgICB9KVxuICAgIH0sXG4gICAgaGFuZGxlSXRlbVRhcChJZCkge1xuICAgICAgY29uc3QgaWQgPSBJZFxuICAgICAgd2VweS5uYXZpZ2F0ZVRvKHtcbiAgICAgICAgdXJsOiBgYm9hcmQ/aWQ9JHtpZH1gXG4gICAgICB9KVxuICAgIH1cbiAgfVxuICBvblNoYXJlQXBwTWVzc2FnZSA9IGFzeW5jIGZ1bmN0aW9uIChyZXMpIHtcbiAgICBjb25zb2xlLmxvZygn5omn6KGM5LqG5YiG5LqrJylcbiAgICByZXR1cm4ge1xuICAgICAgdGl0bGU6ICfmsZ/ls7DlsI/nqIvluo8nLFxuICAgICAgcGF0aDogYC9wYWdlcy9ib2FyZHNgXG4gICAgfVxuICB9XG4gIGFzeW5jIG9uU2hvdygpIHtcbiAgICBhd2FpdCB3ZXB5LnNob3dTaGFyZU1lbnUoe1xuICAgICAgd2l0aFNoYXJlVGlja2V0OiB0cnVlXG4gICAgfSlcbiAgICBpZiAodGhpcy51c2VyLnVzZXJEYXRhKSB7XG4gICAgICBjb25zb2xlLmxvZygndGhpcy51c2VyJywgdGhpcy51c2VyKVxuICAgICAgdGhpcy51c2VyRGF0YSA9IHRoaXMudXNlci51c2VyRGF0YVxuICAgICAgY29uc3QgcmVzID0gYXdhaXQgYXBpLmdldE1zZ0xpc3QodGhpcy51c2VyLnVzZXJEYXRhLmlkKVxuICAgICAgdGhpcy5saXN0ID0gcmVzLm1hcChpdGVtID0+ICh7XG4gICAgICAgIGlkOiBpdGVtLmlkLFxuICAgICAgICB0aXRsZTogaXRlbS50aXRsZSxcbiAgICAgICAgY29udGVudDogaXRlbS50ZXh0LFxuICAgICAgICBjcmVhdGVkQnk6IGl0ZW0uYXV0aG9yLm5hbWUsXG4gICAgICAgIGNyZWF0ZWRBdDogaXRlbS5kYXRlbGluZSxcbiAgICAgICAgY292ZXI6IGl0ZW0ucGljX3VybHNbMF0gPyBgJHtqZi5iYXNlU2VydmVyfSR7aXRlbS5waWNfdXJsc1swXX1gIDogJycsXG4gICAgICAgIHJlYWQ6IGl0ZW0uY2xpY2tfbnVtXG4gICAgICB9KSlcbiAgICAgIHRoaXMuJGFwcGx5KClcbiAgICB9IGVsc2Uge1xuICAgICAgd2VweS5yZUxhdW5jaCh7XG4gICAgICAgIHVybDogJy9wYWdlcy9yZWdpc3RlcidcbiAgICAgIH0pXG4gICAgfVxuICB9XG59XG4iXX0=