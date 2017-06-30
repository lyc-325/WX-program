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

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Friends = function (_wepy$page) {
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
      list: [{
        id: 1,
        avatar: 'https://avatars1.githubusercontent.com/u/8338436?v=3&u=6da5bc8d0fea875312c88b9e979726bdeafcd41a&s=400',
        nickname: '小张'
      }, {
        id: 2,
        avatar: 'https://avatars1.githubusercontent.com/u/8338436?v=3&u=6da5bc8d0fea875312c88b9e979726bdeafcd41a&s=400',
        nickname: '安德烈舍甫琴科'
      }]
    }, _this.methods = {
      toAdd: function toAdd() {
        _wepy2.default.navigateTo({
          url: '/pages/add'
        });
      }
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  return Friends;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Friends , 'pages/friends'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZyaWVuZHMuanMiXSwibmFtZXMiOlsiRnJpZW5kcyIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCJkYXRhIiwibGlzdCIsImlkIiwiYXZhdGFyIiwibmlja25hbWUiLCJtZXRob2RzIiwidG9BZGQiLCJuYXZpZ2F0ZVRvIiwidXJsIiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTs7Ozs7O0lBQ3FCQSxPOzs7Ozs7Ozs7Ozs7Ozs4TUFDbkJDLE0sR0FBUztBQUNQQyw4QkFBd0I7QUFEakIsSyxRQUlUQyxJLEdBQU87QUFDTEMsWUFBTSxDQUFDO0FBQ0xDLFlBQUksQ0FEQztBQUVMQyxnQkFBUSx1R0FGSDtBQUdMQyxrQkFBVTtBQUhMLE9BQUQsRUFJSDtBQUNERixZQUFJLENBREg7QUFFREMsZ0JBQVEsdUdBRlA7QUFHREMsa0JBQVU7QUFIVCxPQUpHO0FBREQsSyxRQVlQQyxPLEdBQVU7QUFDUkMsV0FEUSxtQkFDQTtBQUNOLHVCQUFLQyxVQUFMLENBQWdCO0FBQ2RDLGVBQUs7QUFEUyxTQUFoQjtBQUdEO0FBTE8sSzs7OztFQWpCeUIsZUFBS0MsSTs7a0JBQXJCWixPIiwiZmlsZSI6ImZyaWVuZHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGcmllbmRzIGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgY29uZmlnID0ge1xuICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICflpb3lj4snXG4gIH1cblxuICBkYXRhID0ge1xuICAgIGxpc3Q6IFt7XG4gICAgICBpZDogMSxcbiAgICAgIGF2YXRhcjogJ2h0dHBzOi8vYXZhdGFyczEuZ2l0aHVidXNlcmNvbnRlbnQuY29tL3UvODMzODQzNj92PTMmdT02ZGE1YmM4ZDBmZWE4NzUzMTJjODhiOWU5Nzk3MjZiZGVhZmNkNDFhJnM9NDAwJyxcbiAgICAgIG5pY2tuYW1lOiAn5bCP5bygJ1xuICAgIH0sIHtcbiAgICAgIGlkOiAyLFxuICAgICAgYXZhdGFyOiAnaHR0cHM6Ly9hdmF0YXJzMS5naXRodWJ1c2VyY29udGVudC5jb20vdS84MzM4NDM2P3Y9MyZ1PTZkYTViYzhkMGZlYTg3NTMxMmM4OGI5ZTk3OTcyNmJkZWFmY2Q0MWEmcz00MDAnLFxuICAgICAgbmlja25hbWU6ICflronlvrfng4joiI3nlKvnkLTnp5EnXG4gICAgfV1cbiAgfVxuXG4gIG1ldGhvZHMgPSB7XG4gICAgdG9BZGQoKSB7XG4gICAgICB3ZXB5Lm5hdmlnYXRlVG8oe1xuICAgICAgICB1cmw6ICcvcGFnZXMvYWRkJ1xuICAgICAgfSlcbiAgICB9XG4gIH1cbn1cbiJdfQ==