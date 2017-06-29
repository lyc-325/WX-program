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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import api from '../apis/board'
// import { connect } from 'wepy-redux'
var Boards = (_dec = (0, _wepyRedux.connect)({
  user: function user(state) {
    return state.common.user;
  }
}), _dec(_class = function (_wepy$page) {
  (0, _inherits3.default)(Boards, _wepy$page);

  function Boards() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, Boards);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Boards.__proto__ || (0, _getPrototypeOf2.default)(Boards)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: '留言板2'
    }, _this.data = {
      list: [],
      navs: ['金融', '哲学', '体育', '政治'],
      currentNav: 1
    }, _this.methods = {
      handlePublishTap: function handlePublishTap() {
        _wepy2.default.navigateTo({
          url: 'publish'
        });
      },
      handleItemTap: function handleItemTap() {
        _wepy2.default.navigateTo({
          url: 'board'
        });
      }
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(Boards, [{
    key: 'onLoad',
    value: function () {
      var _ref2 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee() {
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                console.log(this.user);
                // const token = await getToken()
                // const res = await api.boardList(token)
                // const boards = res.data;
                // const reses = await api.downloadImages(boards.map(({ cover_img }) => cover_img))
                // const tempFiles = reses.map(({tempFilePath}) => tempFilePath)
                // this.list = boards.map(board => ({title, text, creator, author, cover_img}) => ({ title, content: text, createdBy: creator, author: read, cover: cover_img }))

              case 1:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function onLoad() {
        return _ref2.apply(this, arguments);
      }

      return onLoad;
    }()
  }]);
  return Boards;
}(_wepy2.default.page)) || _class);

Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Boards , 'pages/boards'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJvYXJkcy5qcyJdLCJuYW1lcyI6WyJCb2FyZHMiLCJ1c2VyIiwic3RhdGUiLCJjb21tb24iLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiZGF0YSIsImxpc3QiLCJuYXZzIiwiY3VycmVudE5hdiIsIm1ldGhvZHMiLCJoYW5kbGVQdWJsaXNoVGFwIiwibmF2aWdhdGVUbyIsInVybCIsImhhbmRsZUl0ZW1UYXAiLCJjb25zb2xlIiwibG9nIiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTtBQUNBO0lBT3FCQSxNLFdBTnBCLHdCQUFRO0FBQ1BDLE1BRE8sZ0JBQ0ZDLEtBREUsRUFDSztBQUNWLFdBQU9BLE1BQU1DLE1BQU4sQ0FBYUYsSUFBcEI7QUFDRDtBQUhNLENBQVIsQzs7Ozs7Ozs7Ozs7Ozs7NE1BT0NHLE0sR0FBUztBQUNQQyw4QkFBd0I7QUFEakIsSyxRQUlUQyxJLEdBQU87QUFDTEMsWUFBTSxFQUREO0FBRUxDLFlBQU0sQ0FBQyxJQUFELEVBQU8sSUFBUCxFQUFhLElBQWIsRUFBbUIsSUFBbkIsQ0FGRDtBQUdMQyxrQkFBWTtBQUhQLEssUUFNUEMsTyxHQUFVO0FBQ1JDLHNCQURRLDhCQUNXO0FBQ2pCLHVCQUFLQyxVQUFMLENBQWdCO0FBQ2RDLGVBQUs7QUFEUyxTQUFoQjtBQUdELE9BTE87QUFNUkMsbUJBTlEsMkJBTVE7QUFDZCx1QkFBS0YsVUFBTCxDQUFnQjtBQUNkQyxlQUFLO0FBRFMsU0FBaEI7QUFHRDtBQVZPLEs7Ozs7Ozs7Ozs7O0FBY1JFLHdCQUFRQyxHQUFSLENBQVksS0FBS2YsSUFBakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQS9CZ0MsZUFBS2dCLEk7a0JBQXBCakIsTSIsImZpbGUiOiJib2FyZHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAnd2VweS1yZWR1eCdcbi8vIGltcG9ydCBhcGkgZnJvbSAnLi4vYXBpcy9ib2FyZCdcbi8vIGltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICd3ZXB5LXJlZHV4J1xuQGNvbm5lY3Qoe1xuICB1c2VyKHN0YXRlKSB7XG4gICAgcmV0dXJuIHN0YXRlLmNvbW1vbi51c2VyXG4gIH1cbn0pXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJvYXJkcyBleHRlbmRzIHdlcHkucGFnZSB7XG4gIGNvbmZpZyA9IHtcbiAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn55WZ6KiA5p2/MidcbiAgfVxuXG4gIGRhdGEgPSB7XG4gICAgbGlzdDogW10sXG4gICAgbmF2czogWyfph5Hono0nLCAn5ZOy5a2mJywgJ+S9k+iCsicsICfmlL/msrsnXSxcbiAgICBjdXJyZW50TmF2OiAxXG4gIH1cblxuICBtZXRob2RzID0ge1xuICAgIGhhbmRsZVB1Ymxpc2hUYXAoKSB7XG4gICAgICB3ZXB5Lm5hdmlnYXRlVG8oe1xuICAgICAgICB1cmw6ICdwdWJsaXNoJ1xuICAgICAgfSlcbiAgICB9LFxuICAgIGhhbmRsZUl0ZW1UYXAoKSB7XG4gICAgICB3ZXB5Lm5hdmlnYXRlVG8oe1xuICAgICAgICB1cmw6ICdib2FyZCdcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgYXN5bmMgb25Mb2FkKCkge1xuICAgIGNvbnNvbGUubG9nKHRoaXMudXNlcilcbiAgICAvLyBjb25zdCB0b2tlbiA9IGF3YWl0IGdldFRva2VuKClcbiAgICAvLyBjb25zdCByZXMgPSBhd2FpdCBhcGkuYm9hcmRMaXN0KHRva2VuKVxuICAgIC8vIGNvbnN0IGJvYXJkcyA9IHJlcy5kYXRhO1xuICAgIC8vIGNvbnN0IHJlc2VzID0gYXdhaXQgYXBpLmRvd25sb2FkSW1hZ2VzKGJvYXJkcy5tYXAoKHsgY292ZXJfaW1nIH0pID0+IGNvdmVyX2ltZykpXG4gICAgLy8gY29uc3QgdGVtcEZpbGVzID0gcmVzZXMubWFwKCh7dGVtcEZpbGVQYXRofSkgPT4gdGVtcEZpbGVQYXRoKVxuICAgIC8vIHRoaXMubGlzdCA9IGJvYXJkcy5tYXAoYm9hcmQgPT4gKHt0aXRsZSwgdGV4dCwgY3JlYXRvciwgYXV0aG9yLCBjb3Zlcl9pbWd9KSA9PiAoeyB0aXRsZSwgY29udGVudDogdGV4dCwgY3JlYXRlZEJ5OiBjcmVhdG9yLCBhdXRob3I6IHJlYWQsIGNvdmVyOiBjb3Zlcl9pbWcgfSkpXG4gIH1cbn1cbiJdfQ==