'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _regenerator = require('./../npm/babel-runtime/regenerator/index.js');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('./../npm/babel-runtime/helpers/asyncToGenerator.js');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

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

var _account = require('./../apis/account.js');

var api = _interopRequireWildcard(_account);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Add = function (_wepy$page) {
  (0, _inherits3.default)(Add, _wepy$page);

  function Add() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, Add);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Add.__proto__ || (0, _getPrototypeOf2.default)(Add)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: '添加好友'
    }, _this.data = {
      friends: []
    }, _this.methods = {
      toApply: function toApply(index) {
        var accid = this.friends[index].accid;

        _wepy2.default.navigateTo({
          url: '/pages/apply?accid=' + accid
        });
      },
      search: function search(e) {
        var _this2 = this;

        return (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee() {
          var nickname, result;
          return _regenerator2.default.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  nickname = e.detail.value;
                  _context.next = 3;
                  return api.search(nickname);

                case 3:
                  result = _context.sent;

                  _this2.friends = result.map(function (friend) {
                    return {
                      accid: friend.accid,
                      avatar: friend.icon,
                      nickname: friend.name
                    };
                  });
                  _this2.$apply();

                case 6:
                case 'end':
                  return _context.stop();
              }
            }
          }, _callee, _this2);
        }))();
      }
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  return Add;
}(_wepy2.default.page);

exports.default = Add;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkZC5qcyJdLCJuYW1lcyI6WyJhcGkiLCJBZGQiLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiZGF0YSIsImZyaWVuZHMiLCJtZXRob2RzIiwidG9BcHBseSIsImluZGV4IiwiYWNjaWQiLCJuYXZpZ2F0ZVRvIiwidXJsIiwic2VhcmNoIiwiZSIsIm5pY2tuYW1lIiwiZGV0YWlsIiwidmFsdWUiLCJyZXN1bHQiLCJtYXAiLCJmcmllbmQiLCJhdmF0YXIiLCJpY29uIiwibmFtZSIsIiRhcHBseSIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTs7OztBQUNBOztJQUFZQSxHOzs7Ozs7SUFDU0MsRzs7Ozs7Ozs7Ozs7Ozs7c01BQ25CQyxNLEdBQVM7QUFDUEMsOEJBQXdCO0FBRGpCLEssUUFJVEMsSSxHQUFPO0FBQ0xDLGVBQVM7QUFESixLLFFBSVBDLE8sR0FBVTtBQUNSQyxhQURRLG1CQUNBQyxLQURBLEVBQ087QUFBQSxZQUNMQyxLQURLLEdBQ0ssS0FBS0osT0FBTCxDQUFhRyxLQUFiLENBREwsQ0FDTEMsS0FESzs7QUFFYix1QkFBS0MsVUFBTCxDQUFnQjtBQUNkQyx1Q0FBMkJGO0FBRGIsU0FBaEI7QUFHRCxPQU5PO0FBT0ZHLFlBUEUsa0JBT0tDLENBUEwsRUFPUTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNSQywwQkFEUSxHQUNHRCxFQUFFRSxNQUFGLENBQVNDLEtBRFo7QUFBQTtBQUFBLHlCQUVPaEIsSUFBSVksTUFBSixDQUFXRSxRQUFYLENBRlA7O0FBQUE7QUFFUkcsd0JBRlE7O0FBR2QseUJBQUtaLE9BQUwsR0FBZVksT0FBT0MsR0FBUCxDQUFXO0FBQUEsMkJBQVc7QUFDbkNULDZCQUFPVSxPQUFPVixLQURxQjtBQUVuQ1csOEJBQVFELE9BQU9FLElBRm9CO0FBR25DUCxnQ0FBVUssT0FBT0c7QUFIa0IscUJBQVg7QUFBQSxtQkFBWCxDQUFmO0FBS0EseUJBQUtDLE1BQUw7O0FBUmM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFTZjtBQWhCTyxLOzs7O0VBVHFCLGVBQUtDLEk7O2tCQUFqQnZCLEciLCJmaWxlIjoiYWRkLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXHJcbmltcG9ydCAqIGFzIGFwaSBmcm9tICcuLi9hcGlzL2FjY291bnQnXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFkZCBleHRlbmRzIHdlcHkucGFnZSB7XHJcbiAgY29uZmlnID0ge1xyXG4gICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+a3u+WKoOWlveWPiydcclxuICB9XHJcblxyXG4gIGRhdGEgPSB7XHJcbiAgICBmcmllbmRzOiBbXVxyXG4gIH1cclxuXHJcbiAgbWV0aG9kcyA9IHtcclxuICAgIHRvQXBwbHkoaW5kZXgpIHtcclxuICAgICAgY29uc3QgeyBhY2NpZCB9ID0gdGhpcy5mcmllbmRzW2luZGV4XVxyXG4gICAgICB3ZXB5Lm5hdmlnYXRlVG8oe1xyXG4gICAgICAgIHVybDogYC9wYWdlcy9hcHBseT9hY2NpZD0ke2FjY2lkfWBcclxuICAgICAgfSlcclxuICAgIH0sXHJcbiAgICBhc3luYyBzZWFyY2goZSkge1xyXG4gICAgICBjb25zdCBuaWNrbmFtZSA9IGUuZGV0YWlsLnZhbHVlXHJcbiAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGFwaS5zZWFyY2gobmlja25hbWUpXHJcbiAgICAgIHRoaXMuZnJpZW5kcyA9IHJlc3VsdC5tYXAoZnJpZW5kID0+ICh7XHJcbiAgICAgICAgYWNjaWQ6IGZyaWVuZC5hY2NpZCxcclxuICAgICAgICBhdmF0YXI6IGZyaWVuZC5pY29uLFxyXG4gICAgICAgIG5pY2tuYW1lOiBmcmllbmQubmFtZVxyXG4gICAgICB9KSlcclxuICAgICAgdGhpcy4kYXBwbHkoKVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0=