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
        var id, jfToken, jfuserToken, res;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                id = option.id;
                //    console.log('id', id)

                jfToken = this.user.jfToken;
                _context.next = 4;
                return _wepy2.default.getStorage({
                  key: 'jfToken',
                  success: function success(res) {
                    return res.data;
                  }
                });

              case 4:
                jfuserToken = _context.sent;

                console.log(jfuserToken);
                _context.next = 8;
                return api.addReadNum(id, jfuserToken);

              case 8:
                _context.next = 10;
                return api.boardDetail(id, jfToken);

              case 10:
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

              case 18:
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJvYXJkLmpzIl0sIm5hbWVzIjpbImFwaSIsIkJvYXJkIiwidXNlciIsInN0YXRlIiwiY29tbW9uIiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsImRhdGEiLCJ0aXRsZSIsImltZ3MiLCJjb250ZW50IiwiY3JlYXRlZEJ5IiwiY3JlYXRlZEF0IiwicmVhZCIsIm9wdGlvbiIsImlkIiwiamZUb2tlbiIsImdldFN0b3JhZ2UiLCJrZXkiLCJzdWNjZXNzIiwicmVzIiwiamZ1c2VyVG9rZW4iLCJjb25zb2xlIiwibG9nIiwiYWRkUmVhZE51bSIsImJvYXJkRGV0YWlsIiwidGV4dCIsImNyZWF0b3IiLCJkYXRlbGluZSIsInBpY191cmxzIiwibWFwIiwiYmFzZVNlcnZlciIsInVybCIsIiRhcHBseSIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTs7OztBQUNBOztBQUNBOztJQUFZQSxHOztBQUNaOzs7Ozs7SUFPcUJDLEssV0FMcEIsd0JBQVE7QUFDUEMsTUFETyxnQkFDRkMsS0FERSxFQUNLO0FBQ1YsV0FBT0EsTUFBTUMsTUFBTixDQUFhRixJQUFwQjtBQUNEO0FBSE0sQ0FBUixDOzs7Ozs7Ozs7Ozs7OzswTUFNQ0csTSxHQUFTO0FBQ1BDLDhCQUF3QjtBQURqQixLLFFBSVRDLEksR0FBTztBQUNMQyxhQUFPLEVBREY7QUFFTEMsWUFBTSxFQUZEO0FBR0xDLGVBQVMsRUFISjtBQUlMQyxpQkFBVyxFQUpOO0FBS0xDLGlCQUFXLEVBTE47QUFNTEMsWUFBTTtBQU5ELEs7Ozs7Ozs4RkFRTUMsTTs7Ozs7O0FBQ0hDLGtCLEdBQU9ELE0sQ0FBUEMsRTtBQUNaOztBQUNZQyx1QixHQUFZLEtBQUtkLEksQ0FBakJjLE87O3VCQUNnQixlQUFLQyxVQUFMLENBQWdCO0FBQ3RDQyx1QkFBSyxTQURpQztBQUV0Q0MsMkJBQVMsaUJBQVNDLEdBQVQsRUFBYztBQUNyQiwyQkFBT0EsSUFBSWIsSUFBWDtBQUNEO0FBSnFDLGlCQUFoQixDOzs7QUFBcEJjLDJCOztBQU1KQyx3QkFBUUMsR0FBUixDQUFZRixXQUFaOzt1QkFDTXJCLElBQUl3QixVQUFKLENBQWVULEVBQWYsRUFBbUJNLFdBQW5CLEM7Ozs7dUJBRVlyQixJQUFJeUIsV0FBSixDQUFnQlYsRUFBaEIsRUFBb0JDLE9BQXBCLEM7OztBQUFaSSxtQjs7QUFDTkUsd0JBQVFDLEdBQVIsQ0FBWUgsR0FBWjtBQUNBLHFCQUFLWixLQUFMLEdBQWFZLElBQUlaLEtBQWpCO0FBQ0EscUJBQUtFLE9BQUwsR0FBZVUsSUFBSU0sSUFBbkI7QUFDQSxxQkFBS2YsU0FBTCxHQUFpQlMsSUFBSU8sT0FBckI7QUFDQSxxQkFBS2YsU0FBTCxHQUFpQlEsSUFBSVEsUUFBckI7QUFDQSxxQkFBS25CLElBQUwsR0FBWVcsSUFBSVMsUUFBSixDQUFhQyxHQUFiLENBQWlCO0FBQUEsOEJBQVUsV0FBR0MsVUFBYixHQUEwQkMsR0FBMUI7QUFBQSxpQkFBakIsQ0FBWjtBQUNBLHFCQUFLQyxNQUFMOzs7Ozs7Ozs7Ozs7Ozs7Ozs7RUFqQytCLGVBQUtDLEk7a0JBQW5CakMsSyIsImZpbGUiOiJib2FyZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICd3ZXB5LXJlZHV4J1xuaW1wb3J0ICogYXMgYXBpIGZyb20gJy4uL2FwaXMvYm9hcmQnXG5pbXBvcnQgeyBqZiB9IGZyb20gJy4uL2NvbmZpZydcblxuQGNvbm5lY3Qoe1xuICB1c2VyKHN0YXRlKSB7XG4gICAgcmV0dXJuIHN0YXRlLmNvbW1vbi51c2VyXG4gIH1cbn0pXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCb2FyZCBleHRlbmRzIHdlcHkucGFnZSB7XG4gIGNvbmZpZyA9IHtcbiAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn55WZ6KiA5p2/J1xuICB9XG5cbiAgZGF0YSA9IHtcbiAgICB0aXRsZTogJycsXG4gICAgaW1nczogW10sXG4gICAgY29udGVudDogJycsXG4gICAgY3JlYXRlZEJ5OiAnJyxcbiAgICBjcmVhdGVkQXQ6ICcnLFxuICAgIHJlYWQ6IDIwMFxuICB9XG4gIGFzeW5jIG9uTG9hZChvcHRpb24pIHtcbiAgICBjb25zdCB7IGlkIH0gPSBvcHRpb25cbi8vICAgIGNvbnNvbGUubG9nKCdpZCcsIGlkKVxuICAgIGNvbnN0IHsgamZUb2tlbiB9ID0gdGhpcy51c2VyXG4gICAgdmFyIGpmdXNlclRva2VuID0gYXdhaXQgd2VweS5nZXRTdG9yYWdlKHtcbiAgICAgIGtleTogJ2pmVG9rZW4nLFxuICAgICAgc3VjY2VzczogZnVuY3Rpb24ocmVzKSB7XG4gICAgICAgIHJldHVybiByZXMuZGF0YVxuICAgICAgfVxuICAgIH0pXG4gICAgY29uc29sZS5sb2coamZ1c2VyVG9rZW4pXG4gICAgYXdhaXQgYXBpLmFkZFJlYWROdW0oaWQsIGpmdXNlclRva2VuKVxuLy8gICAgY29uc29sZS5sb2coYWRkTlVtKVxuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGFwaS5ib2FyZERldGFpbChpZCwgamZUb2tlbilcbiAgICBjb25zb2xlLmxvZyhyZXMpXG4gICAgdGhpcy50aXRsZSA9IHJlcy50aXRsZVxuICAgIHRoaXMuY29udGVudCA9IHJlcy50ZXh0XG4gICAgdGhpcy5jcmVhdGVkQnkgPSByZXMuY3JlYXRvclxuICAgIHRoaXMuY3JlYXRlZEF0ID0gcmVzLmRhdGVsaW5lXG4gICAgdGhpcy5pbWdzID0gcmVzLnBpY191cmxzLm1hcCh1cmwgPT4gYCR7amYuYmFzZVNlcnZlcn0ke3VybH1gKVxuICAgIHRoaXMuJGFwcGx5KClcbiAgfVxufVxuIl19