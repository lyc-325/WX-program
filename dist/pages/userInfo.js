'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


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

var _userInfo = require('./../apis/userInfo.js');

var api = _interopRequireWildcard(_userInfo);

var _config = require('./../config.js');

var _wepyRedux = require('./../npm/wepy-redux/lib/index.js');

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var UserInfo = (_dec = (0, _wepyRedux.connect)({
  user: function user(state) {
    return state.common.user;
  }
}), _dec(_class = function (_wepy$page) {
  (0, _inherits3.default)(UserInfo, _wepy$page);

  function UserInfo() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, UserInfo);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = UserInfo.__proto__ || (0, _getPrototypeOf2.default)(UserInfo)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: '用户详情'
    }, _this.data = {
      list: [],
      userData: {
        name: '加载中...'
      },
      levelData: ''
    }, _this.methods = {
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
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(UserInfo, [{
    key: 'onLoad',
    value: function () {
      var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(options) {
        var self, resData, res;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                self = this;
                _context.next = 3;
                return api.getOtherUserInfo(options.id);

              case 3:
                resData = _context.sent;

                self.userData = resData;
                _context.next = 7;
                return api.getMsgList(options.id);

              case 7:
                res = _context.sent;

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
                self.$apply();

              case 10:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function onLoad(_x) {
        return _ref2.apply(this, arguments);
      }

      return onLoad;
    }()
  }]);
  return UserInfo;
}(_wepy2.default.page)) || _class);

Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(UserInfo , 'pages/userInfo'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVzZXJJbmZvLmpzIl0sIm5hbWVzIjpbImFwaSIsIlVzZXJJbmZvIiwidXNlciIsInN0YXRlIiwiY29tbW9uIiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsImRhdGEiLCJsaXN0IiwidXNlckRhdGEiLCJuYW1lIiwibGV2ZWxEYXRhIiwibWV0aG9kcyIsImhhbmRsZVB1Ymxpc2hUYXAiLCJlIiwibmF2aWdhdGVUbyIsInVybCIsImhhbmRsZUl0ZW1UYXAiLCJpZCIsImN1cnJlbnRUYXJnZXQiLCJkYXRhc2V0IiwiaW5kZXgiLCJvcHRpb25zIiwic2VsZiIsImdldE90aGVyVXNlckluZm8iLCJyZXNEYXRhIiwiZ2V0TXNnTGlzdCIsInJlcyIsIm1hcCIsIml0ZW0iLCJ0aXRsZSIsImNvbnRlbnQiLCJ0ZXh0IiwiY3JlYXRlZEJ5IiwiYXV0aG9yIiwiY3JlYXRlZEF0IiwiZGF0ZWxpbmUiLCJjb3ZlciIsInBpY191cmxzIiwiYmFzZVNlcnZlciIsInJlYWQiLCJjbGlja19udW0iLCIkYXBwbHkiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0U7Ozs7QUFDQTs7SUFBWUEsRzs7QUFDWjs7QUFDQTs7Ozs7O0lBT3FCQyxRLFdBTHBCLHdCQUFRO0FBQ1BDLE1BRE8sZ0JBQ0ZDLEtBREUsRUFDSztBQUNWLFdBQU9BLE1BQU1DLE1BQU4sQ0FBYUYsSUFBcEI7QUFDRDtBQUhNLENBQVIsQzs7Ozs7Ozs7Ozs7Ozs7Z05BTUNHLE0sR0FBUztBQUNQQyw4QkFBd0I7QUFEakIsSyxRQUlUQyxJLEdBQU87QUFDTEMsWUFBTSxFQUREO0FBRUxDLGdCQUFVO0FBQ1JDLGNBQU07QUFERSxPQUZMO0FBS0xDLGlCQUFXO0FBTE4sSyxRQVFQQyxPLEdBQVU7QUFDUkMsc0JBRFEsNEJBQ1NDLENBRFQsRUFDWTtBQUNsQix1QkFBS0MsVUFBTCxDQUFnQjtBQUNkQyxlQUFLO0FBRFMsU0FBaEI7QUFHRCxPQUxPO0FBTVJDLG1CQU5RLHlCQU1NSCxDQU5OLEVBTVM7QUFDZixZQUFNSSxLQUFLLEtBQUtWLElBQUwsQ0FBVU0sRUFBRUssYUFBRixDQUFnQkMsT0FBaEIsQ0FBd0JDLEtBQWxDLEVBQXlDSCxFQUFwRDtBQUNBLHVCQUFLSCxVQUFMLENBQWdCO0FBQ2RDLDZCQUFpQkU7QUFESCxTQUFoQjtBQUdEO0FBWE8sSzs7Ozs7OzRHQWFHSSxPOzs7Ozs7QUFDUEMsb0IsR0FBTyxJOzt1QkFDU3ZCLElBQUl3QixnQkFBSixDQUFxQkYsUUFBUUosRUFBN0IsQzs7O0FBQWhCTyx1Qjs7QUFDSkYscUJBQUtkLFFBQUwsR0FBZ0JnQixPQUFoQjs7dUJBQ2tCekIsSUFBSTBCLFVBQUosQ0FBZUosUUFBUUosRUFBdkIsQzs7O0FBQVpTLG1COztBQUNOLHFCQUFLbkIsSUFBTCxHQUFZbUIsSUFBSUMsR0FBSixDQUFRO0FBQUEseUJBQVM7QUFDM0JWLHdCQUFJVyxLQUFLWCxFQURrQjtBQUUzQlksMkJBQU9ELEtBQUtDLEtBRmU7QUFHM0JDLDZCQUFTRixLQUFLRyxJQUhhO0FBSTNCQywrQkFBV0osS0FBS0ssTUFBTCxDQUFZeEIsSUFKSTtBQUszQnlCLCtCQUFXTixLQUFLTyxRQUxXO0FBTTNCQywyQkFBT1IsS0FBS1MsUUFBTCxDQUFjLENBQWQsU0FBc0IsV0FBR0MsVUFBekIsR0FBc0NWLEtBQUtTLFFBQUwsQ0FBYyxDQUFkLENBQXRDLEdBQTJELEVBTnZDO0FBTzNCRSwwQkFBTVgsS0FBS1k7QUFQZ0IsbUJBQVQ7QUFBQSxpQkFBUixDQUFaO0FBU0FsQixxQkFBS21CLE1BQUw7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQXhDa0MsZUFBS0MsSTtrQkFBdEIxQyxRIiwiZmlsZSI6InVzZXJJbmZvLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbiAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcclxuICBpbXBvcnQgKiBhcyBhcGkgZnJvbSAnLi4vYXBpcy91c2VySW5mbydcclxuICBpbXBvcnQgeyBqZiB9IGZyb20gJy4uL2NvbmZpZydcclxuICBpbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAnd2VweS1yZWR1eCdcclxuXHJcbiAgQGNvbm5lY3Qoe1xyXG4gICAgdXNlcihzdGF0ZSkge1xyXG4gICAgICByZXR1cm4gc3RhdGUuY29tbW9uLnVzZXJcclxuICAgIH1cclxuICB9KVxyXG4gIGV4cG9ydCBkZWZhdWx0IGNsYXNzIFVzZXJJbmZvIGV4dGVuZHMgd2VweS5wYWdlIHtcclxuICAgIGNvbmZpZyA9IHtcclxuICAgICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+eUqOaIt+ivpuaDhSdcclxuICAgIH1cclxuXHJcbiAgICBkYXRhID0ge1xyXG4gICAgICBsaXN0OiBbXSxcclxuICAgICAgdXNlckRhdGE6IHtcclxuICAgICAgICBuYW1lOiAn5Yqg6L295LitLi4uJ1xyXG4gICAgICB9LFxyXG4gICAgICBsZXZlbERhdGE6ICcnXHJcbiAgICB9XHJcblxyXG4gICAgbWV0aG9kcyA9IHtcclxuICAgICAgaGFuZGxlUHVibGlzaFRhcChlKSB7XHJcbiAgICAgICAgd2VweS5uYXZpZ2F0ZVRvKHtcclxuICAgICAgICAgIHVybDogJ3B1Ymxpc2gnXHJcbiAgICAgICAgfSlcclxuICAgICAgfSxcclxuICAgICAgaGFuZGxlSXRlbVRhcChlKSB7XHJcbiAgICAgICAgY29uc3QgaWQgPSB0aGlzLmxpc3RbZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQuaW5kZXhdLmlkXHJcbiAgICAgICAgd2VweS5uYXZpZ2F0ZVRvKHtcclxuICAgICAgICAgIHVybDogYGJvYXJkP2lkPSR7aWR9YFxyXG4gICAgICAgIH0pXHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGFzeW5jIG9uTG9hZChvcHRpb25zKSB7XHJcbiAgICAgIGxldCBzZWxmID0gdGhpc1xyXG4gICAgICB2YXIgcmVzRGF0YSA9IGF3YWl0IGFwaS5nZXRPdGhlclVzZXJJbmZvKG9wdGlvbnMuaWQpXHJcbiAgICAgIHNlbGYudXNlckRhdGEgPSByZXNEYXRhXHJcbiAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGFwaS5nZXRNc2dMaXN0KG9wdGlvbnMuaWQpXHJcbiAgICAgIHRoaXMubGlzdCA9IHJlcy5tYXAoaXRlbSA9PiAoe1xyXG4gICAgICAgIGlkOiBpdGVtLmlkLFxyXG4gICAgICAgIHRpdGxlOiBpdGVtLnRpdGxlLFxyXG4gICAgICAgIGNvbnRlbnQ6IGl0ZW0udGV4dCxcclxuICAgICAgICBjcmVhdGVkQnk6IGl0ZW0uYXV0aG9yLm5hbWUsXHJcbiAgICAgICAgY3JlYXRlZEF0OiBpdGVtLmRhdGVsaW5lLFxyXG4gICAgICAgIGNvdmVyOiBpdGVtLnBpY191cmxzWzBdID8gYCR7amYuYmFzZVNlcnZlcn0ke2l0ZW0ucGljX3VybHNbMF19YCA6ICcnLFxyXG4gICAgICAgIHJlYWQ6IGl0ZW0uY2xpY2tfbnVtXHJcbiAgICAgIH0pKVxyXG4gICAgICBzZWxmLiRhcHBseSgpXHJcbiAgICB9XHJcbiAgfVxyXG4iXX0=