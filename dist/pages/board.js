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

var _wepyRedux = require('./../npm/wepy-redux/lib/index.js');

var _board = require('./../apis/board.js');

var api = _interopRequireWildcard(_board);

var _config = require('./../config.js');

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Board = (_dec = (0, _wepyRedux.connect)({
  user: function user(state) {
    return state.common.user;
  }
}), _dec(_class = function (_wepy$page) {
  (0, _inherits3.default)(Board, _wepy$page);

  function Board() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, Board);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Board.__proto__ || (0, _getPrototypeOf2.default)(Board)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: '留言板'
    }, _this.data = {
      title: '',
      imgs: [],
      content: '',
      createdBy: '',
      createdAt: '',
      read: 200
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(Board, [{
    key: 'onLoad',
    value: function () {
      var _ref2 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(option) {
        var id, jfToken, res;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                id = option.id;
                // console.log('id', id)

                jfToken = this.user.jfToken;
                _context.next = 4;
                return api.boardDetail(id, jfToken);

              case 4:
                res = _context.sent;

                console.log(res);
                this.title = res.title;
                this.content = res.text;
                this.createdBy = res.creator;
                this.createdAt = res.dateline;
                this.imgs = res.pic_urls.map(function (url) {
                  return '' + _config.jf.baseServer + url;
                });
                this.$apply();

              case 12:
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
  return Board;
}(_wepy2.default.page)) || _class);

Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Board , 'pages/board'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJvYXJkLmpzIl0sIm5hbWVzIjpbImFwaSIsIkJvYXJkIiwidXNlciIsInN0YXRlIiwiY29tbW9uIiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsImRhdGEiLCJ0aXRsZSIsImltZ3MiLCJjb250ZW50IiwiY3JlYXRlZEJ5IiwiY3JlYXRlZEF0IiwicmVhZCIsIm9wdGlvbiIsImlkIiwiamZUb2tlbiIsImJvYXJkRGV0YWlsIiwicmVzIiwiY29uc29sZSIsImxvZyIsInRleHQiLCJjcmVhdG9yIiwiZGF0ZWxpbmUiLCJwaWNfdXJscyIsIm1hcCIsImJhc2VTZXJ2ZXIiLCJ1cmwiLCIkYXBwbHkiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7Ozs7QUFDQTs7QUFDQTs7SUFBWUEsRzs7QUFDWjs7Ozs7O0lBT3FCQyxLLFdBTHBCLHdCQUFRO0FBQ1BDLE1BRE8sZ0JBQ0ZDLEtBREUsRUFDSztBQUNWLFdBQU9BLE1BQU1DLE1BQU4sQ0FBYUYsSUFBcEI7QUFDRDtBQUhNLENBQVIsQzs7Ozs7Ozs7Ozs7Ozs7ME1BTUNHLE0sR0FBUztBQUNQQyw4QkFBd0I7QUFEakIsSyxRQUlUQyxJLEdBQU87QUFDTEMsYUFBTyxFQURGO0FBRUxDLFlBQU0sRUFGRDtBQUdMQyxlQUFTLEVBSEo7QUFJTEMsaUJBQVcsRUFKTjtBQUtMQyxpQkFBVyxFQUxOO0FBTUxDLFlBQU07QUFORCxLOzs7Ozs7OEZBUU1DLE07Ozs7OztBQUNIQyxrQixHQUFPRCxNLENBQVBDLEU7QUFDUjs7QUFDUUMsdUIsR0FBWSxLQUFLZCxJLENBQWpCYyxPOzt1QkFDVWhCLElBQUlpQixXQUFKLENBQWdCRixFQUFoQixFQUFvQkMsT0FBcEIsQzs7O0FBQVpFLG1COztBQUNOQyx3QkFBUUMsR0FBUixDQUFZRixHQUFaO0FBQ0EscUJBQUtWLEtBQUwsR0FBYVUsSUFBSVYsS0FBakI7QUFDQSxxQkFBS0UsT0FBTCxHQUFlUSxJQUFJRyxJQUFuQjtBQUNBLHFCQUFLVixTQUFMLEdBQWlCTyxJQUFJSSxPQUFyQjtBQUNBLHFCQUFLVixTQUFMLEdBQWlCTSxJQUFJSyxRQUFyQjtBQUNBLHFCQUFLZCxJQUFMLEdBQVlTLElBQUlNLFFBQUosQ0FBYUMsR0FBYixDQUFpQjtBQUFBLDhCQUFVLFdBQUdDLFVBQWIsR0FBMEJDLEdBQTFCO0FBQUEsaUJBQWpCLENBQVo7QUFDQSxxQkFBS0MsTUFBTDs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBeEIrQixlQUFLQyxJO2tCQUFuQjVCLEsiLCJmaWxlIjoiYm9hcmQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcclxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3dlcHktcmVkdXgnXHJcbmltcG9ydCAqIGFzIGFwaSBmcm9tICcuLi9hcGlzL2JvYXJkJ1xyXG5pbXBvcnQgeyBqZiB9IGZyb20gJy4uL2NvbmZpZydcclxuXHJcbkBjb25uZWN0KHtcclxuICB1c2VyKHN0YXRlKSB7XHJcbiAgICByZXR1cm4gc3RhdGUuY29tbW9uLnVzZXJcclxuICB9XHJcbn0pXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJvYXJkIGV4dGVuZHMgd2VweS5wYWdlIHtcclxuICBjb25maWcgPSB7XHJcbiAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn55WZ6KiA5p2/J1xyXG4gIH1cclxuXHJcbiAgZGF0YSA9IHtcclxuICAgIHRpdGxlOiAnJyxcclxuICAgIGltZ3M6IFtdLFxyXG4gICAgY29udGVudDogJycsXHJcbiAgICBjcmVhdGVkQnk6ICcnLFxyXG4gICAgY3JlYXRlZEF0OiAnJyxcclxuICAgIHJlYWQ6IDIwMFxyXG4gIH1cclxuICBhc3luYyBvbkxvYWQob3B0aW9uKSB7XHJcbiAgICBjb25zdCB7IGlkIH0gPSBvcHRpb25cclxuICAgIC8vIGNvbnNvbGUubG9nKCdpZCcsIGlkKVxyXG4gICAgY29uc3QgeyBqZlRva2VuIH0gPSB0aGlzLnVzZXJcclxuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGFwaS5ib2FyZERldGFpbChpZCwgamZUb2tlbilcclxuICAgIGNvbnNvbGUubG9nKHJlcylcclxuICAgIHRoaXMudGl0bGUgPSByZXMudGl0bGVcclxuICAgIHRoaXMuY29udGVudCA9IHJlcy50ZXh0XHJcbiAgICB0aGlzLmNyZWF0ZWRCeSA9IHJlcy5jcmVhdG9yXHJcbiAgICB0aGlzLmNyZWF0ZWRBdCA9IHJlcy5kYXRlbGluZVxyXG4gICAgdGhpcy5pbWdzID0gcmVzLnBpY191cmxzLm1hcCh1cmwgPT4gYCR7amYuYmFzZVNlcnZlcn0ke3VybH1gKVxyXG4gICAgdGhpcy4kYXBwbHkoKVxyXG4gIH1cclxufVxyXG4iXX0=