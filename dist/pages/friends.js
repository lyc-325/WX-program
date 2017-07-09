'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


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

var _nim = require('./../utils/nim.js');

var _nim2 = _interopRequireDefault(_nim);

var _ramda = require('./../libs/ramda.js');

var _ramda2 = _interopRequireDefault(_ramda);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _filter = _ramda2.default.curry(function (name, friend) {
  return friend.nickname.includes(name);
});

var getFriend = function getFriend(friend) {
  return {
    nickname: friend.nick,
    avatar: friend.avatar,
    accid: friend.account
  };
};

var Friends = (_dec = (0, _wepyRedux.connect)({
  user: function user(state) {
    return state.common.user;
  },
  nim: function nim(state) {
    return state.common.nim;
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
      showedFriends: [],
      friends: [],
      notifications: 0
    }, _this.methods = {
      toAdd: function toAdd() {
        _wepy2.default.navigateTo({
          url: '/pages/add'
        });
      },
      toChat: function toChat(index) {
        var friend = this.showedFriends[index];
        _wepy2.default.navigateTo({
          url: 'pages/chat?faccid=' + friend.accid
        });
      },
      toNotification: function toNotification() {
        _wepy2.default.navigateTo({
          url: '/pages/notifications'
        });
      },
      filter: function filter(e) {
        var value = _ramda2.default.trim(e.detail.value);
        this.showedFriends = this.friends.filter(_filter(value));
      }
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(Friends, [{
    key: 'onShow',
    value: function onShow() {
      var _this2 = this;

      // 初始化 NIM 对象用于接收系统通知
      _nim2.default.getInstance({
        account: this.user.accid,
        token: this.nim.token,
        debug: true,
        onusers: function onusers(friends) {
          _this2.friends = friends.map(getFriend);
          _this2.showedFriends = _this2.friends.map(_ramda2.default.identity);
          _this2.$apply();
        }
      });
    }
  }]);
  return Friends;
}(_wepy2.default.page)) || _class);

Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Friends , 'pages/friends'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZyaWVuZHMuanMiXSwibmFtZXMiOlsiZmlsdGVyIiwiY3VycnkiLCJuYW1lIiwiZnJpZW5kIiwibmlja25hbWUiLCJpbmNsdWRlcyIsImdldEZyaWVuZCIsIm5pY2siLCJhdmF0YXIiLCJhY2NpZCIsImFjY291bnQiLCJGcmllbmRzIiwidXNlciIsInN0YXRlIiwiY29tbW9uIiwibmltIiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsImRhdGEiLCJzaG93ZWRGcmllbmRzIiwiZnJpZW5kcyIsIm5vdGlmaWNhdGlvbnMiLCJtZXRob2RzIiwidG9BZGQiLCJuYXZpZ2F0ZVRvIiwidXJsIiwidG9DaGF0IiwiaW5kZXgiLCJ0b05vdGlmaWNhdGlvbiIsImUiLCJ2YWx1ZSIsInRyaW0iLCJkZXRhaWwiLCJnZXRJbnN0YW5jZSIsInRva2VuIiwiZGVidWciLCJvbnVzZXJzIiwibWFwIiwiaWRlbnRpdHkiLCIkYXBwbHkiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBOzs7O0FBQ0E7O0FBQ0E7Ozs7QUFDQTs7Ozs7O0FBRUEsSUFBTUEsVUFBUyxnQkFBRUMsS0FBRixDQUFRLFVBQUNDLElBQUQsRUFBT0MsTUFBUDtBQUFBLFNBQWtCQSxPQUFPQyxRQUFQLENBQWdCQyxRQUFoQixDQUF5QkgsSUFBekIsQ0FBbEI7QUFBQSxDQUFSLENBQWY7O0FBRUEsSUFBTUksWUFBWSxTQUFaQSxTQUFZO0FBQUEsU0FBVztBQUMzQkYsY0FBVUQsT0FBT0ksSUFEVTtBQUUzQkMsWUFBUUwsT0FBT0ssTUFGWTtBQUczQkMsV0FBT04sT0FBT087QUFIYSxHQUFYO0FBQUEsQ0FBbEI7O0lBVXFCQyxPLFdBSnBCLHdCQUFRO0FBQ1BDLFFBQU07QUFBQSxXQUFTQyxNQUFNQyxNQUFOLENBQWFGLElBQXRCO0FBQUEsR0FEQztBQUVQRyxPQUFLO0FBQUEsV0FBU0YsTUFBTUMsTUFBTixDQUFhQyxHQUF0QjtBQUFBO0FBRkUsQ0FBUixDOzs7Ozs7Ozs7Ozs7Ozs4TUFLQ0MsTSxHQUFTO0FBQ1BDLDhCQUF3QjtBQURqQixLLFFBSVRDLEksR0FBTztBQUNMQyxxQkFBZSxFQURWO0FBRUxDLGVBQVMsRUFGSjtBQUdMQyxxQkFBZTtBQUhWLEssUUFNUEMsTyxHQUFVO0FBQ1JDLFdBRFEsbUJBQ0E7QUFDTix1QkFBS0MsVUFBTCxDQUFnQjtBQUNkQyxlQUFLO0FBRFMsU0FBaEI7QUFHRCxPQUxPO0FBTVJDLFlBTlEsa0JBTURDLEtBTkMsRUFNTTtBQUNaLFlBQU14QixTQUFTLEtBQUtnQixhQUFMLENBQW1CUSxLQUFuQixDQUFmO0FBQ0EsdUJBQUtILFVBQUwsQ0FBZ0I7QUFDZEMsc0NBQTBCdEIsT0FBT007QUFEbkIsU0FBaEI7QUFHRCxPQVhPO0FBWVJtQixvQkFaUSw0QkFZUztBQUNmLHVCQUFLSixVQUFMLENBQWdCO0FBQ2RDLGVBQUs7QUFEUyxTQUFoQjtBQUdELE9BaEJPO0FBaUJSekIsWUFqQlEsa0JBaUJENkIsQ0FqQkMsRUFpQkU7QUFDUixZQUFNQyxRQUFRLGdCQUFFQyxJQUFGLENBQU9GLEVBQUVHLE1BQUYsQ0FBU0YsS0FBaEIsQ0FBZDtBQUNBLGFBQUtYLGFBQUwsR0FBcUIsS0FBS0MsT0FBTCxDQUFhcEIsTUFBYixDQUFvQkEsUUFBTzhCLEtBQVAsQ0FBcEIsQ0FBckI7QUFDRDtBQXBCTyxLOzs7Ozs2QkF1QkQ7QUFBQTs7QUFDUDtBQUNBLG9CQUFJRyxXQUFKLENBQWdCO0FBQ2R2QixpQkFBUyxLQUFLRSxJQUFMLENBQVVILEtBREw7QUFFZHlCLGVBQU8sS0FBS25CLEdBQUwsQ0FBU21CLEtBRkY7QUFHZEMsZUFBTyxJQUhPO0FBSWRDLGlCQUFTLDBCQUFXO0FBQ2xCLGlCQUFLaEIsT0FBTCxHQUFlQSxRQUFRaUIsR0FBUixDQUFZL0IsU0FBWixDQUFmO0FBQ0EsaUJBQUthLGFBQUwsR0FBcUIsT0FBS0MsT0FBTCxDQUFhaUIsR0FBYixDQUFpQixnQkFBRUMsUUFBbkIsQ0FBckI7QUFDQSxpQkFBS0MsTUFBTDtBQUNEO0FBUmEsT0FBaEI7QUFVRDs7O0VBOUNrQyxlQUFLQyxJO2tCQUFyQjdCLE8iLCJmaWxlIjoiZnJpZW5kcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICd3ZXB5LXJlZHV4J1xuaW1wb3J0IE5JTSBmcm9tICcuLi91dGlscy9uaW0nXG5pbXBvcnQgUiBmcm9tICcuLi9saWJzL3JhbWRhJ1xuXG5jb25zdCBmaWx0ZXIgPSBSLmN1cnJ5KChuYW1lLCBmcmllbmQpID0+IGZyaWVuZC5uaWNrbmFtZS5pbmNsdWRlcyhuYW1lKSlcblxuY29uc3QgZ2V0RnJpZW5kID0gZnJpZW5kID0+ICh7XG4gIG5pY2tuYW1lOiBmcmllbmQubmljayxcbiAgYXZhdGFyOiBmcmllbmQuYXZhdGFyLFxuICBhY2NpZDogZnJpZW5kLmFjY291bnRcbn0pXG5cbkBjb25uZWN0KHtcbiAgdXNlcjogc3RhdGUgPT4gc3RhdGUuY29tbW9uLnVzZXIsXG4gIG5pbTogc3RhdGUgPT4gc3RhdGUuY29tbW9uLm5pbVxufSlcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZyaWVuZHMgZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICBjb25maWcgPSB7XG4gICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+WlveWPiydcbiAgfVxuXG4gIGRhdGEgPSB7XG4gICAgc2hvd2VkRnJpZW5kczogW10sXG4gICAgZnJpZW5kczogW10sXG4gICAgbm90aWZpY2F0aW9uczogMFxuICB9XG5cbiAgbWV0aG9kcyA9IHtcbiAgICB0b0FkZCgpIHtcbiAgICAgIHdlcHkubmF2aWdhdGVUbyh7XG4gICAgICAgIHVybDogJy9wYWdlcy9hZGQnXG4gICAgICB9KVxuICAgIH0sXG4gICAgdG9DaGF0KGluZGV4KSB7XG4gICAgICBjb25zdCBmcmllbmQgPSB0aGlzLnNob3dlZEZyaWVuZHNbaW5kZXhdXG4gICAgICB3ZXB5Lm5hdmlnYXRlVG8oe1xuICAgICAgICB1cmw6IGBwYWdlcy9jaGF0P2ZhY2NpZD0ke2ZyaWVuZC5hY2NpZH1gXG4gICAgICB9KVxuICAgIH0sXG4gICAgdG9Ob3RpZmljYXRpb24oKSB7XG4gICAgICB3ZXB5Lm5hdmlnYXRlVG8oe1xuICAgICAgICB1cmw6ICcvcGFnZXMvbm90aWZpY2F0aW9ucydcbiAgICAgIH0pXG4gICAgfSxcbiAgICBmaWx0ZXIoZSkge1xuICAgICAgY29uc3QgdmFsdWUgPSBSLnRyaW0oZS5kZXRhaWwudmFsdWUpXG4gICAgICB0aGlzLnNob3dlZEZyaWVuZHMgPSB0aGlzLmZyaWVuZHMuZmlsdGVyKGZpbHRlcih2YWx1ZSkpXG4gICAgfVxuICB9XG5cbiAgb25TaG93KCkge1xuICAgIC8vIOWIneWni+WMliBOSU0g5a+56LGh55So5LqO5o6l5pS257O757uf6YCa55+lXG4gICAgTklNLmdldEluc3RhbmNlKHtcbiAgICAgIGFjY291bnQ6IHRoaXMudXNlci5hY2NpZCxcbiAgICAgIHRva2VuOiB0aGlzLm5pbS50b2tlbixcbiAgICAgIGRlYnVnOiB0cnVlLFxuICAgICAgb251c2VyczogZnJpZW5kcyA9PiB7XG4gICAgICAgIHRoaXMuZnJpZW5kcyA9IGZyaWVuZHMubWFwKGdldEZyaWVuZClcbiAgICAgICAgdGhpcy5zaG93ZWRGcmllbmRzID0gdGhpcy5mcmllbmRzLm1hcChSLmlkZW50aXR5KVxuICAgICAgICB0aGlzLiRhcHBseSgpXG4gICAgICB9XG4gICAgfSlcbiAgfVxufVxuIl19