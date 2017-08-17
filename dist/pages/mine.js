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
                  return api.delItem(item.id);

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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1pbmUuanMiXSwibmFtZXMiOlsiYXBpIiwiTWluZSIsInVzZXIiLCJzdGF0ZSIsImNvbW1vbiIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCJkYXRhIiwibGlzdCIsInVzZXJEYXRhIiwibmFtZSIsIm5ld1VzZXJEYXRhIiwibGV2ZWxEYXRhIiwiaXNFZGl0IiwibWV0aG9kcyIsImRlbGV0ZUl0ZW0iLCJpdGVtIiwiaW5kZXgiLCJkZWxJdGVtIiwiaWQiLCJzcGxpY2UiLCIkYXBwbHkiLCJuYW1lS2V5SW5wdXQiLCJlIiwic2V0RGF0YSIsImRldGFpbCIsInZhbHVlIiwiY29tcGFueUtleUlucHV0IiwiY29tcGFueSIsInBob25lS2V5SW5wdXQiLCJwaG9uZSIsInRva2VuS2V5SW5wdXQiLCJ0b2tlbiIsImV4S2V5SW5wdXQiLCJleCIsImVkaXRVc2VySW5mb1RhcCIsImNsb3NlVXNlckluZm9UYXAiLCJzYXZlVXNlckluZm9UYXAiLCJwb3N0RGF0YSIsIm1vZGlmeVVzZXJJbmZvIiwiaGFuZGxlUHVibGlzaFRhcCIsIm5hdmlnYXRlVG8iLCJ1cmwiLCJoYW5kbGVJdGVtVGFwIiwiSWQiLCJvblNoYXJlQXBwTWVzc2FnZSIsInJlcyIsImNvbnNvbGUiLCJsb2ciLCJ0aXRsZSIsInBhdGgiLCJzaG93U2hhcmVNZW51Iiwid2l0aFNoYXJlVGlja2V0IiwiZ2V0TXNnTGlzdCIsIm1hcCIsImNvbnRlbnQiLCJ0ZXh0IiwiY3JlYXRlZEJ5IiwiYXV0aG9yIiwiY3JlYXRlZEF0IiwiZGF0ZWxpbmUiLCJjb3ZlciIsInBpY191cmxzIiwiYmFzZVNlcnZlciIsInJlYWQiLCJjbGlja19udW0iLCJyZUxhdW5jaCIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7Ozs7QUFDQTs7SUFBWUEsRzs7QUFDWjs7QUFDQTs7Ozs7O0lBT3FCQyxJLFdBTHBCLHdCQUFRO0FBQ1BDLE1BRE8s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QUFDM0JuQyx3QkFBSUgsS0FBS0csRUFEa0I7QUFFM0I4QiwyQkFBT2pDLEtBQUtpQyxLQUZlO0FBRzNCTSw2QkFBU3ZDLEtBQUt3QyxJQUhhO0FBSTNCQywrQkFBV3pDLEtBQUswQyxNQUFMLENBQVloRCxJQUpJO0FBSzNCaUQsK0JBQVczQyxLQUFLNEMsUUFMVztBQU0zQkMsMkJBQU83QyxLQUFLOEMsUUFBTCxDQUFjLENBQWQsU0FBc0IsV0FBR0MsVUFBekIsR0FBc0MvQyxLQUFLOEMsUUFBTCxDQUFjLENBQWQsQ0FBdEMsR0FBMkQsRUFOdkM7QUFPM0JFLDBCQUFNaEQsS0FBS2lEO0FBUGdCLG1CQUFUO0FBQUEsaUJBQVIsQ0FBWjtBQVNBLHFCQUFLNUMsTUFBTDs7Ozs7QUFFQSwrQkFBSzZDLFFBQUwsQ0FBYztBQUNaeEIsdUJBQUs7QUFETyxpQkFBZDs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBbkg0QixlQUFLeUIsSTtrQkFBbEJsRSxJIiwiZmlsZSI6Im1pbmUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG5pbXBvcnQgKiBhcyBhcGkgZnJvbSAnLi4vYXBpcy9taW5lJ1xuaW1wb3J0IHsgamYgfSBmcm9tICcuLi9jb25maWcnXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAnd2VweS1yZWR1eCdcblxuQGNvbm5lY3Qoe1xuICB1c2VyKHN0YXRlKSB7XG4gICAgcmV0dXJuIHN0YXRlLmNvbW1vbi51c2VyXG4gIH1cbn0pXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNaW5lIGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgY29uZmlnID0ge1xuICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICfkuKrkurrkuK3lv4MnXG4gIH1cblxuICBkYXRhID0ge1xuICAgIGxpc3Q6IFtdLFxuICAgIHVzZXJEYXRhOiB7XG4gICAgICBuYW1lOiAn5Yqg6L295LitLi4uJ1xuICAgIH0sXG4gICAgbmV3VXNlckRhdGE6IHt9LFxuICAgIGxldmVsRGF0YTogJycsXG4gICAgaXNFZGl0OiBmYWxzZVxuICB9XG5cbiAgbWV0aG9kcyA9IHtcbiAgICBhc3luYyBkZWxldGVJdGVtKGl0ZW0sIGluZGV4KSB7XG4gICAgICBhd2FpdCBhcGkuZGVsSXRlbShpdGVtLmlkKVxuICAgICAgdGhpcy5saXN0LnNwbGljZShpbmRleCwgMSlcbiAgICAgIHRoaXMuJGFwcGx5KClcbiAgICB9LFxuICAgIG5hbWVLZXlJbnB1dChlKSB7XG4gICAgICB0aGlzLnNldERhdGEoe1xuICAgICAgICBbYHVzZXJEYXRhLm5hbWVgXTogZS5kZXRhaWwudmFsdWVcbiAgICAgIH0pXG4gICAgICB0aGlzLnVzZXJEYXRhLm5hbWUgPSBlLmRldGFpbC52YWx1ZVxuICAgICAgdGhpcy4kYXBwbHkoKVxuICAgIH0sXG4gICAgY29tcGFueUtleUlucHV0KGUpIHtcbiAgICAgIHRoaXMuc2V0RGF0YSh7XG4gICAgICAgIFtgdXNlckRhdGEuY29tcGFueWBdOiBlLmRldGFpbC52YWx1ZVxuICAgICAgfSlcbiAgICAgIHRoaXMudXNlckRhdGEuY29tcGFueSA9IGUuZGV0YWlsLnZhbHVlXG4gICAgICB0aGlzLiRhcHBseSgpXG4gICAgfSxcbiAgICBwaG9uZUtleUlucHV0KGUpIHtcbiAgICAgIHRoaXMuc2V0RGF0YSh7XG4gICAgICAgIFtgdXNlckRhdGEucGhvbmVgXTogZS5kZXRhaWwudmFsdWVcbiAgICAgIH0pXG4gICAgICB0aGlzLnVzZXJEYXRhLnBob25lID0gZS5kZXRhaWwudmFsdWVcbiAgICAgIHRoaXMuJGFwcGx5KClcbiAgICB9LFxuICAgIHRva2VuS2V5SW5wdXQoZSkge1xuICAgICAgdGhpcy5zZXREYXRhKHtcbiAgICAgICAgW2B1c2VyRGF0YS50b2tlbmBdOiBlLmRldGFpbC52YWx1ZVxuICAgICAgfSlcbiAgICAgIHRoaXMudXNlckRhdGEudG9rZW4gPSBlLmRldGFpbC52YWx1ZVxuICAgICAgdGhpcy4kYXBwbHkoKVxuICAgIH0sXG4gICAgZXhLZXlJbnB1dChlKSB7XG4gICAgICB0aGlzLnNldERhdGEoe1xuICAgICAgICBbYHVzZXJEYXRhLmV4YF06IGUuZGV0YWlsLnZhbHVlXG4gICAgICB9KVxuICAgICAgdGhpcy51c2VyRGF0YS5leCA9IGUuZGV0YWlsLnZhbHVlXG4gICAgICB0aGlzLiRhcHBseSgpXG4gICAgfSxcbiAgICBlZGl0VXNlckluZm9UYXAoZSkge1xuICAgICAgdGhpcy5pc0VkaXQgPSB0cnVlXG4gICAgfSxcbiAgICBjbG9zZVVzZXJJbmZvVGFwKCkge1xuICAgICAgdGhpcy5pc0VkaXQgPSBmYWxzZVxuICAgICAgdGhpcy51c2VyRGF0YSA9IHRoaXMudXNlci51c2VyRGF0YVxuICAgICAgdGhpcy4kYXBwbHkoKVxuICAgIH0sXG4gICAgYXN5bmMgc2F2ZVVzZXJJbmZvVGFwKGUpIHtcbiAgICAgIHRoaXMuaXNFZGl0ID0gZmFsc2VcbiAgICAgIGNvbnN0IHsgaWQgfSA9IHRoaXMudXNlckRhdGFcbiAgICAgIHZhciBwb3N0RGF0YSA9IHtcbiAgICAgICAgbmFtZTogdGhpcy51c2VyRGF0YS5uYW1lLFxuICAgICAgICBjb21wYW55OiB0aGlzLnVzZXJEYXRhLmNvbXBhbnksXG4gICAgICAgIHBob25lOiB0aGlzLnVzZXJEYXRhLnBob25lLFxuICAgICAgICB0b2tlbjogdGhpcy51c2VyRGF0YS50b2tlbixcbiAgICAgICAgZXg6IHRoaXMudXNlckRhdGEuZXhcbiAgICAgIH1cbiAgICAgIGF3YWl0IGFwaS5tb2RpZnlVc2VySW5mbyhpZCwgcG9zdERhdGEpXG4gICAgICB0aGlzLiRhcHBseSgpXG4gICAgfSxcbiAgICBoYW5kbGVQdWJsaXNoVGFwKGUpIHtcbiAgICAgIHdlcHkubmF2aWdhdGVUbyh7XG4gICAgICAgIHVybDogJ3B1Ymxpc2gnXG4gICAgICB9KVxuICAgIH0sXG4gICAgaGFuZGxlSXRlbVRhcChJZCkge1xuICAgICAgY29uc3QgaWQgPSBJZFxuICAgICAgd2VweS5uYXZpZ2F0ZVRvKHtcbiAgICAgICAgdXJsOiBgYm9hcmQ/aWQ9JHtpZH1gXG4gICAgICB9KVxuICAgIH1cbiAgfVxuICBvblNoYXJlQXBwTWVzc2FnZSA9IGFzeW5jIGZ1bmN0aW9uIChyZXMpIHtcbiAgICBjb25zb2xlLmxvZygn5omn6KGM5LqG5YiG5LqrJylcbiAgICByZXR1cm4ge1xuICAgICAgdGl0bGU6ICfmsZ/ls7DlsI/nqIvluo8nLFxuICAgICAgcGF0aDogYC9wYWdlcy9ib2FyZHNgXG4gICAgfVxuICB9XG4gIGFzeW5jIG9uU2hvdygpIHtcbiAgICBhd2FpdCB3ZXB5LnNob3dTaGFyZU1lbnUoe1xuICAgICAgd2l0aFNoYXJlVGlja2V0OiB0cnVlXG4gICAgfSlcbiAgICBpZiAodGhpcy51c2VyLnVzZXJEYXRhKSB7XG4gICAgICBjb25zb2xlLmxvZygndGhpcy51c2VyJywgdGhpcy51c2VyKVxuICAgICAgdGhpcy51c2VyRGF0YSA9IHRoaXMudXNlci51c2VyRGF0YVxuICAgICAgY29uc3QgcmVzID0gYXdhaXQgYXBpLmdldE1zZ0xpc3QodGhpcy51c2VyLnVzZXJEYXRhLmlkKVxuICAgICAgdGhpcy5saXN0ID0gcmVzLm1hcChpdGVtID0+ICh7XG4gICAgICAgIGlkOiBpdGVtLmlkLFxuICAgICAgICB0aXRsZTogaXRlbS50aXRsZSxcbiAgICAgICAgY29udGVudDogaXRlbS50ZXh0LFxuICAgICAgICBjcmVhdGVkQnk6IGl0ZW0uYXV0aG9yLm5hbWUsXG4gICAgICAgIGNyZWF0ZWRBdDogaXRlbS5kYXRlbGluZSxcbiAgICAgICAgY292ZXI6IGl0ZW0ucGljX3VybHNbMF0gPyBgJHtqZi5iYXNlU2VydmVyfSR7aXRlbS5waWNfdXJsc1swXX1gIDogJycsXG4gICAgICAgIHJlYWQ6IGl0ZW0uY2xpY2tfbnVtXG4gICAgICB9KSlcbiAgICAgIHRoaXMuJGFwcGx5KClcbiAgICB9IGVsc2Uge1xuICAgICAgd2VweS5yZUxhdW5jaCh7XG4gICAgICAgIHVybDogJy9wYWdlcy9yZWdpc3RlcidcbiAgICAgIH0pXG4gICAgfVxuICB9XG59XG4iXX0=