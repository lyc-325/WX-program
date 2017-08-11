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
      var _ref2 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(options) {
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVzZXJJbmZvLmpzIl0sIm5hbWVzIjpbImFwaSIsIlVzZXJJbmZvIiwidXNlciIsInN0YXRlIiwiY29tbW9uIiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsImRhdGEiLCJsaXN0IiwidXNlckRhdGEiLCJuYW1lIiwibGV2ZWxEYXRhIiwibWV0aG9kcyIsImhhbmRsZVB1Ymxpc2hUYXAiLCJlIiwibmF2aWdhdGVUbyIsInVybCIsImhhbmRsZUl0ZW1UYXAiLCJpZCIsImN1cnJlbnRUYXJnZXQiLCJkYXRhc2V0IiwiaW5kZXgiLCJvcHRpb25zIiwic2VsZiIsImdldE90aGVyVXNlckluZm8iLCJyZXNEYXRhIiwiZ2V0TXNnTGlzdCIsInJlcyIsIm1hcCIsIml0ZW0iLCJ0aXRsZSIsImNvbnRlbnQiLCJ0ZXh0IiwiY3JlYXRlZEJ5IiwiYXV0aG9yIiwiY3JlYXRlZEF0IiwiZGF0ZWxpbmUiLCJjb3ZlciIsInBpY191cmxzIiwiYmFzZVNlcnZlciIsInJlYWQiLCJjbGlja19udW0iLCIkYXBwbHkiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0U7Ozs7QUFDQTs7SUFBWUEsRzs7QUFDWjs7QUFDQTs7Ozs7O0lBT3FCQyxRLFdBTHBCLHdCQUFRO0FBQ1BDLE1BRE8sZ0JBQ0ZDLEtBREUsRUFDSztBQUNWLFdBQU9BLE1BQU1DLE1BQU4sQ0FBYUYsSUFBcEI7QUFDRDtBQUhNLENBQVIsQzs7Ozs7Ozs7Ozs7Ozs7Z05BTUNHLE0sR0FBUztBQUNQQyw4QkFBd0I7QUFEakIsSyxRQUlUQyxJLEdBQU87QUFDTEMsWUFBTSxFQUREO0FBRUxDLGdCQUFVO0FBQ1JDLGNBQU07QUFERSxPQUZMO0FBS0xDLGlCQUFXO0FBTE4sSyxRQVFQQyxPLEdBQVU7QUFDUkMsc0JBRFEsNEJBQ1NDLENBRFQsRUFDWTtBQUNsQix1QkFBS0MsVUFBTCxDQUFnQjtBQUNkQyxlQUFLO0FBRFMsU0FBaEI7QUFHRCxPQUxPO0FBTVJDLG1CQU5RLHlCQU1NSCxDQU5OLEVBTVM7QUFDZixZQUFNSSxLQUFLLEtBQUtWLElBQUwsQ0FBVU0sRUFBRUssYUFBRixDQUFnQkMsT0FBaEIsQ0FBd0JDLEtBQWxDLEVBQXlDSCxFQUFwRDtBQUNBLHVCQUFLSCxVQUFMLENBQWdCO0FBQ2RDLDZCQUFpQkU7QUFESCxTQUFoQjtBQUdEO0FBWE8sSzs7Ozs7OzhGQWFHSSxPOzs7Ozs7QUFDUEMsb0IsR0FBTyxJOzt1QkFDU3ZCLElBQUl3QixnQkFBSixDQUFxQkYsUUFBUUosRUFBN0IsQzs7O0FBQWhCTyx1Qjs7QUFDSkYscUJBQUtkLFFBQUwsR0FBZ0JnQixPQUFoQjs7dUJBQ2tCekIsSUFBSTBCLFVBQUosQ0FBZUosUUFBUUosRUFBdkIsQzs7O0FBQVpTLG1COztBQUNOLHFCQUFLbkIsSUFBTCxHQUFZbUIsSUFBSUMsR0FBSixDQUFRO0FBQUEseUJBQVM7QUFDM0JWLHdCQUFJVyxLQUFLWCxFQURrQjtBQUUzQlksMkJBQU9ELEtBQUtDLEtBRmU7QUFHM0JDLDZCQUFTRixLQUFLRyxJQUhhO0FBSTNCQywrQkFBV0osS0FBS0ssTUFBTCxDQUFZeEIsSUFKSTtBQUszQnlCLCtCQUFXTixLQUFLTyxRQUxXO0FBTTNCQywyQkFBT1IsS0FBS1MsUUFBTCxDQUFjLENBQWQsU0FBc0IsV0FBR0MsVUFBekIsR0FBc0NWLEtBQUtTLFFBQUwsQ0FBYyxDQUFkLENBQXRDLEdBQTJELEVBTnZDO0FBTzNCRSwwQkFBTVgsS0FBS1k7QUFQZ0IsbUJBQVQ7QUFBQSxpQkFBUixDQUFaO0FBU0FsQixxQkFBS21CLE1BQUw7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQXhDa0MsZUFBS0MsSTtrQkFBdEIxQyxRIiwiZmlsZSI6InVzZXJJbmZvLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG4gIGltcG9ydCAqIGFzIGFwaSBmcm9tICcuLi9hcGlzL3VzZXJJbmZvJ1xuICBpbXBvcnQgeyBqZiB9IGZyb20gJy4uL2NvbmZpZydcbiAgaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3dlcHktcmVkdXgnXG5cbiAgQGNvbm5lY3Qoe1xuICAgIHVzZXIoc3RhdGUpIHtcbiAgICAgIHJldHVybiBzdGF0ZS5jb21tb24udXNlclxuICAgIH1cbiAgfSlcbiAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgVXNlckluZm8gZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICAgIGNvbmZpZyA9IHtcbiAgICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICfnlKjmiLfor6bmg4UnXG4gICAgfVxuXG4gICAgZGF0YSA9IHtcbiAgICAgIGxpc3Q6IFtdLFxuICAgICAgdXNlckRhdGE6IHtcbiAgICAgICAgbmFtZTogJ+WKoOi9veS4rS4uLidcbiAgICAgIH0sXG4gICAgICBsZXZlbERhdGE6ICcnXG4gICAgfVxuXG4gICAgbWV0aG9kcyA9IHtcbiAgICAgIGhhbmRsZVB1Ymxpc2hUYXAoZSkge1xuICAgICAgICB3ZXB5Lm5hdmlnYXRlVG8oe1xuICAgICAgICAgIHVybDogJ3B1Ymxpc2gnXG4gICAgICAgIH0pXG4gICAgICB9LFxuICAgICAgaGFuZGxlSXRlbVRhcChlKSB7XG4gICAgICAgIGNvbnN0IGlkID0gdGhpcy5saXN0W2UuY3VycmVudFRhcmdldC5kYXRhc2V0LmluZGV4XS5pZFxuICAgICAgICB3ZXB5Lm5hdmlnYXRlVG8oe1xuICAgICAgICAgIHVybDogYGJvYXJkP2lkPSR7aWR9YFxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH1cbiAgICBhc3luYyBvbkxvYWQob3B0aW9ucykge1xuICAgICAgbGV0IHNlbGYgPSB0aGlzXG4gICAgICB2YXIgcmVzRGF0YSA9IGF3YWl0IGFwaS5nZXRPdGhlclVzZXJJbmZvKG9wdGlvbnMuaWQpXG4gICAgICBzZWxmLnVzZXJEYXRhID0gcmVzRGF0YVxuICAgICAgY29uc3QgcmVzID0gYXdhaXQgYXBpLmdldE1zZ0xpc3Qob3B0aW9ucy5pZClcbiAgICAgIHRoaXMubGlzdCA9IHJlcy5tYXAoaXRlbSA9PiAoe1xuICAgICAgICBpZDogaXRlbS5pZCxcbiAgICAgICAgdGl0bGU6IGl0ZW0udGl0bGUsXG4gICAgICAgIGNvbnRlbnQ6IGl0ZW0udGV4dCxcbiAgICAgICAgY3JlYXRlZEJ5OiBpdGVtLmF1dGhvci5uYW1lLFxuICAgICAgICBjcmVhdGVkQXQ6IGl0ZW0uZGF0ZWxpbmUsXG4gICAgICAgIGNvdmVyOiBpdGVtLnBpY191cmxzWzBdID8gYCR7amYuYmFzZVNlcnZlcn0ke2l0ZW0ucGljX3VybHNbMF19YCA6ICcnLFxuICAgICAgICByZWFkOiBpdGVtLmNsaWNrX251bVxuICAgICAgfSkpXG4gICAgICBzZWxmLiRhcHBseSgpXG4gICAgfVxuICB9XG4iXX0=