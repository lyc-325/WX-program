'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _getPrototypeOf = require('./../npm/babel-runtime/core-js/object/get-prototype-of.js');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('./../npm/babel-runtime/helpers/classCallCheck.js');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var filter = _ramda2.default.curry(function (name, friend) {
  return friend.nickname.includes(name);
});

var Friends = (_dec = (0, _wepyRedux.connect)({
  user: function user(state) {
    return state.common.user;
  },
  nim: function nim(state) {
    return state.common.nim;
  },
  showedFriends: function showedFriends(state) {
    return state.friends.friends.filter(filter(this.filter));
  }
}), _dec(_class = function (_wepy$page) {
  (0, _inherits3.default)(Friends, _wepy$page);

  function Friends() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, Friends);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Friends.__proto__ || (0, _getPrototypeOf2.default)(Friends)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: '好友'
    }, _this.data = {
      notifications: 0,
      filter: ''
    }, _this.methods = {
      toAdd: function toAdd() {
        _wepy2.default.navigateTo({
          url: '/pages/add'
        });
      },
      toChat: function toChat(index) {
        var friend = this.showedFriends[index];
        _wepy2.default.navigateTo({
          url: '/pages/chat?faccid=' + friend.accid
        });
      },
      toNotification: function toNotification() {
        _wepy2.default.navigateTo({
          url: '/pages/notifications'
        });
      },
      filter: function filter(e) {
        var value = _ramda2.default.trim(e.detail.value);
        this.filter = value;
      }
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  return Friends;
}(_wepy2.default.page)) || _class);

Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Friends , 'pages/friends'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZyaWVuZHMuanMiXSwibmFtZXMiOlsiZmlsdGVyIiwiY3VycnkiLCJuYW1lIiwiZnJpZW5kIiwibmlja25hbWUiLCJpbmNsdWRlcyIsIkZyaWVuZHMiLCJ1c2VyIiwic3RhdGUiLCJjb21tb24iLCJuaW0iLCJzaG93ZWRGcmllbmRzIiwiZnJpZW5kcyIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCJkYXRhIiwibm90aWZpY2F0aW9ucyIsIm1ldGhvZHMiLCJ0b0FkZCIsIm5hdmlnYXRlVG8iLCJ1cmwiLCJ0b0NoYXQiLCJpbmRleCIsImFjY2lkIiwidG9Ob3RpZmljYXRpb24iLCJlIiwidmFsdWUiLCJ0cmltIiwiZGV0YWlsIiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBOzs7O0FBQ0E7O0FBQ0E7Ozs7OztBQUVBLElBQU1BLFNBQVMsZ0JBQUVDLEtBQUYsQ0FBUSxVQUFDQyxJQUFELEVBQU9DLE1BQVA7QUFBQSxTQUFrQkEsT0FBT0MsUUFBUCxDQUFnQkMsUUFBaEIsQ0FBeUJILElBQXpCLENBQWxCO0FBQUEsQ0FBUixDQUFmOztJQVNxQkksTyxXQVBwQix3QkFBUTtBQUNQQyxRQUFNO0FBQUEsV0FBU0MsTUFBTUMsTUFBTixDQUFhRixJQUF0QjtBQUFBLEdBREM7QUFFUEcsT0FBSztBQUFBLFdBQVNGLE1BQU1DLE1BQU4sQ0FBYUMsR0FBdEI7QUFBQSxHQUZFO0FBR1BDLGlCQUFlLHVCQUFVSCxLQUFWLEVBQWlCO0FBQzlCLFdBQU9BLE1BQU1JLE9BQU4sQ0FBY0EsT0FBZCxDQUFzQlosTUFBdEIsQ0FBNkJBLE9BQU8sS0FBS0EsTUFBWixDQUE3QixDQUFQO0FBQ0Q7QUFMTSxDQUFSLEM7Ozs7Ozs7Ozs7Ozs7OzhNQVFDYSxNLEdBQVM7QUFDUEMsOEJBQXdCO0FBRGpCLEssUUFJVEMsSSxHQUFPO0FBQ0xDLHFCQUFlLENBRFY7QUFFTGhCLGNBQVE7QUFGSCxLLFFBS1BpQixPLEdBQVU7QUFDUkMsV0FEUSxtQkFDQTtBQUNOLHVCQUFLQyxVQUFMLENBQWdCO0FBQ2RDLGVBQUs7QUFEUyxTQUFoQjtBQUdELE9BTE87QUFNUkMsWUFOUSxrQkFNREMsS0FOQyxFQU1NO0FBQ1osWUFBTW5CLFNBQVMsS0FBS1EsYUFBTCxDQUFtQlcsS0FBbkIsQ0FBZjtBQUNBLHVCQUFLSCxVQUFMLENBQWdCO0FBQ2RDLHVDQUEyQmpCLE9BQU9vQjtBQURwQixTQUFoQjtBQUdELE9BWE87QUFZUkMsb0JBWlEsNEJBWVM7QUFDZix1QkFBS0wsVUFBTCxDQUFnQjtBQUNkQyxlQUFLO0FBRFMsU0FBaEI7QUFHRCxPQWhCTztBQWlCUnBCLFlBakJRLGtCQWlCRHlCLENBakJDLEVBaUJFO0FBQ1IsWUFBTUMsUUFBUSxnQkFBRUMsSUFBRixDQUFPRixFQUFFRyxNQUFGLENBQVNGLEtBQWhCLENBQWQ7QUFDQSxhQUFLMUIsTUFBTCxHQUFjMEIsS0FBZDtBQUNEO0FBcEJPLEs7Ozs7RUFWeUIsZUFBS0csSTtrQkFBckJ2QixPIiwiZmlsZSI6ImZyaWVuZHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAnd2VweS1yZWR1eCdcbmltcG9ydCBSIGZyb20gJy4uL2xpYnMvcmFtZGEnXG5cbmNvbnN0IGZpbHRlciA9IFIuY3VycnkoKG5hbWUsIGZyaWVuZCkgPT4gZnJpZW5kLm5pY2tuYW1lLmluY2x1ZGVzKG5hbWUpKVxuXG5AY29ubmVjdCh7XG4gIHVzZXI6IHN0YXRlID0+IHN0YXRlLmNvbW1vbi51c2VyLFxuICBuaW06IHN0YXRlID0+IHN0YXRlLmNvbW1vbi5uaW0sXG4gIHNob3dlZEZyaWVuZHM6IGZ1bmN0aW9uIChzdGF0ZSkge1xuICAgIHJldHVybiBzdGF0ZS5mcmllbmRzLmZyaWVuZHMuZmlsdGVyKGZpbHRlcih0aGlzLmZpbHRlcikpXG4gIH1cbn0pXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGcmllbmRzIGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgY29uZmlnID0ge1xuICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICflpb3lj4snXG4gIH1cblxuICBkYXRhID0ge1xuICAgIG5vdGlmaWNhdGlvbnM6IDAsXG4gICAgZmlsdGVyOiAnJ1xuICB9XG5cbiAgbWV0aG9kcyA9IHtcbiAgICB0b0FkZCgpIHtcbiAgICAgIHdlcHkubmF2aWdhdGVUbyh7XG4gICAgICAgIHVybDogJy9wYWdlcy9hZGQnXG4gICAgICB9KVxuICAgIH0sXG4gICAgdG9DaGF0KGluZGV4KSB7XG4gICAgICBjb25zdCBmcmllbmQgPSB0aGlzLnNob3dlZEZyaWVuZHNbaW5kZXhdXG4gICAgICB3ZXB5Lm5hdmlnYXRlVG8oe1xuICAgICAgICB1cmw6IGAvcGFnZXMvY2hhdD9mYWNjaWQ9JHtmcmllbmQuYWNjaWR9YFxuICAgICAgfSlcbiAgICB9LFxuICAgIHRvTm90aWZpY2F0aW9uKCkge1xuICAgICAgd2VweS5uYXZpZ2F0ZVRvKHtcbiAgICAgICAgdXJsOiAnL3BhZ2VzL25vdGlmaWNhdGlvbnMnXG4gICAgICB9KVxuICAgIH0sXG4gICAgZmlsdGVyKGUpIHtcbiAgICAgIGNvbnN0IHZhbHVlID0gUi50cmltKGUuZGV0YWlsLnZhbHVlKVxuICAgICAgdGhpcy5maWx0ZXIgPSB2YWx1ZVxuICAgIH1cbiAgfVxufVxuIl19