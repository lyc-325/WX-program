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

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import api from '../apis/board'
// import { connect } from 'wepy-redux'

var list = [{
  cover: 'http://b.hiphotos.baidu.com/baike/w%3D268%3Bg%3D0/sign=6d24a14af81f3a295ac8d2c8a11edb0c/e824b899a9014c088f762831027b02087af4f4d1.jpg',
  title: '2017年8月江风通讯正式上线',
  content: '在支持数据库时并且启用了多 tab 同时登录, 那么如果多个 tab 页同时断线重连之后, 只会有一个 tab 页负责存储漫游消息和离线消息, 即只会有一个 tab 页会收到 onroamingmsgs 和 onofflinemsgs 回调, 其它 tab 页在同步完成之后, 需要调用获取本地历史记录来从本地缓存中拉取消息记录',
  createdBy: '李四',
  createdAt: '2014-05-06 13:33',
  read: 200
}, {
  cover: 'http://b.hiphotos.baidu.com/baike/w%3D268%3Bg%3D0/sign=6d24a14af81f3a295ac8d2c8a11edb0c/e824b899a9014c088f762831027b02087af4f4d1.jpg',
  title: '2017年8月江风通讯正式上线',
  content: '在支持数据库时并且启用了多 tab 同时登录, 那么如果多个 tab 页同时断线重连之后, 只会有一个 tab 页负责存储漫游消息和离线消息, 即只会有一个 tab 页会收到 onroamingmsgs 和 onofflinemsgs 回调, 其它 tab 页在同步完成之后, 需要调用获取本地历史记录来从本地缓存中拉取消息记录',
  createdBy: '李四',
  createdAt: '2014-05-06 13:33',
  read: 200
}, {
  cover: 'http://b.hiphotos.baidu.com/baike/w%3D268%3Bg%3D0/sign=6d24a14af81f3a295ac8d2c8a11edb0c/e824b899a9014c088f762831027b02087af4f4d1.jpg',
  title: '2017年8月江风通讯正式上线',
  content: '在支持数据库时并且启用了多 tab 同时登录, 那么如果多个 tab 页同时断线重连之后, 只会有一个 tab 页负责存储漫游消息和离线消息, 即只会有一个 tab 页会收到 onroamingmsgs 和 onofflinemsgs 回调, 其它 tab 页在同步完成之后, 需要调用获取本地历史记录来从本地缓存中拉取消息记录',
  createdBy: '李四',
  createdAt: '2014-05-06 13:33',
  read: 200
}, {
  cover: 'http://b.hiphotos.baidu.com/baike/w%3D268%3Bg%3D0/sign=6d24a14af81f3a295ac8d2c8a11edb0c/e824b899a9014c088f762831027b02087af4f4d1.jpg',
  title: '2017年8月江风通讯正式上线',
  content: '在支持数据库时并且启用了多 tab 同时登录, 那么如果多个 tab 页同时断线重连之后, 只会有一个 tab 页负责存储漫游消息和离线消息, 即只会有一个 tab 页会收到 onroamingmsgs 和 onofflinemsgs 回调, 其它 tab 页在同步完成之后, 需要调用获取本地历史记录来从本地缓存中拉取消息记录',
  createdBy: '李四',
  createdAt: '2014-05-06 13:33',
  read: 200
}];

var Boards = function (_wepy$page) {
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
      list: list,
      navs: ['金融', '哲学', '体育', '政治'],
      currentNav: 1
    }, _this.methods = {
      handlePublishTap: function handlePublishTap() {
        _wepy2.default.navigateTo({
          url: '../publish/publish'
        });
      },
      handleItemTap: function handleItemTap() {
        _wepy2.default.navigateTo({
          url: '../board/board'
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
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Boards , 'pages/boards'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJvYXJkcy5qcyJdLCJuYW1lcyI6WyJsaXN0IiwiY292ZXIiLCJ0aXRsZSIsImNvbnRlbnQiLCJjcmVhdGVkQnkiLCJjcmVhdGVkQXQiLCJyZWFkIiwiQm9hcmRzIiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsImRhdGEiLCJuYXZzIiwiY3VycmVudE5hdiIsIm1ldGhvZHMiLCJoYW5kbGVQdWJsaXNoVGFwIiwibmF2aWdhdGVUbyIsInVybCIsImhhbmRsZUl0ZW1UYXAiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBOzs7Ozs7QUFDQTtBQUNBOztBQUVBLElBQU1BLE9BQU8sQ0FBQztBQUNaQyxTQUFPLHNJQURLO0FBRVpDLFNBQU8saUJBRks7QUFHWkMsV0FBUyxzS0FIRztBQUlaQyxhQUFXLElBSkM7QUFLWkMsYUFBVyxrQkFMQztBQU1aQyxRQUFNO0FBTk0sQ0FBRCxFQU9WO0FBQ0RMLFNBQU8sc0lBRE47QUFFREMsU0FBTyxpQkFGTjtBQUdEQyxXQUFTLHNLQUhSO0FBSURDLGFBQVcsSUFKVjtBQUtEQyxhQUFXLGtCQUxWO0FBTURDLFFBQU07QUFOTCxDQVBVLEVBY1Y7QUFDREwsU0FBTyxzSUFETjtBQUVEQyxTQUFPLGlCQUZOO0FBR0RDLFdBQVMsc0tBSFI7QUFJREMsYUFBVyxJQUpWO0FBS0RDLGFBQVcsa0JBTFY7QUFNREMsUUFBTTtBQU5MLENBZFUsRUFxQlY7QUFDREwsU0FBTyxzSUFETjtBQUVEQyxTQUFPLGlCQUZOO0FBR0RDLFdBQVMsc0tBSFI7QUFJREMsYUFBVyxJQUpWO0FBS0RDLGFBQVcsa0JBTFY7QUFNREMsUUFBTTtBQU5MLENBckJVLENBQWI7O0lBOEJxQkMsTTs7Ozs7Ozs7Ozs7Ozs7NE1BQ25CQyxNLEdBQVM7QUFDUEMsOEJBQXdCO0FBRGpCLEssUUFJVEMsSSxHQUFPO0FBQ0xWLGdCQURLO0FBRUxXLFlBQU0sQ0FBQyxJQUFELEVBQU8sSUFBUCxFQUFhLElBQWIsRUFBbUIsSUFBbkIsQ0FGRDtBQUdMQyxrQkFBWTtBQUhQLEssUUFNUEMsTyxHQUFVO0FBQ1JDLHNCQURRLDhCQUNXO0FBQ2pCLHVCQUFLQyxVQUFMLENBQWdCO0FBQ2RDLGVBQUs7QUFEUyxTQUFoQjtBQUdELE9BTE87QUFNUkMsbUJBTlEsMkJBTVE7QUFDZCx1QkFBS0YsVUFBTCxDQUFnQjtBQUNkQyxlQUFLO0FBRFMsU0FBaEI7QUFHRDtBQVZPLEs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBWHdCLGVBQUtFLEk7O2tCQUFwQlgsTSIsImZpbGUiOiJib2FyZHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG4vLyBpbXBvcnQgYXBpIGZyb20gJy4uL2FwaXMvYm9hcmQnXG4vLyBpbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAnd2VweS1yZWR1eCdcblxuY29uc3QgbGlzdCA9IFt7XG4gIGNvdmVyOiAnaHR0cDovL2IuaGlwaG90b3MuYmFpZHUuY29tL2JhaWtlL3clM0QyNjglM0JnJTNEMC9zaWduPTZkMjRhMTRhZjgxZjNhMjk1YWM4ZDJjOGExMWVkYjBjL2U4MjRiODk5YTkwMTRjMDg4Zjc2MjgzMTAyN2IwMjA4N2FmNGY0ZDEuanBnJyxcbiAgdGl0bGU6ICcyMDE35bm0OOaciOaxn+mjjumAmuiur+ato+W8j+S4iue6vycsXG4gIGNvbnRlbnQ6ICflnKjmlK/mjIHmlbDmja7lupPml7blubbkuJTlkK/nlKjkuoblpJogdGFiIOWQjOaXtueZu+W9lSwg6YKj5LmI5aaC5p6c5aSa5LiqIHRhYiDpobXlkIzml7bmlq3nur/ph43ov57kuYvlkI4sIOWPquS8muacieS4gOS4qiB0YWIg6aG16LSf6LSj5a2Y5YKo5ryr5ri45raI5oGv5ZKM56a757q/5raI5oGvLCDljbPlj6rkvJrmnInkuIDkuKogdGFiIOmhteS8muaUtuWIsCBvbnJvYW1pbmdtc2dzIOWSjCBvbm9mZmxpbmVtc2dzIOWbnuiwgywg5YW25a6DIHRhYiDpobXlnKjlkIzmraXlrozmiJDkuYvlkI4sIOmcgOimgeiwg+eUqOiOt+WPluacrOWcsOWOhuWPsuiusOW9leadpeS7juacrOWcsOe8k+WtmOS4reaLieWPlua2iOaBr+iusOW9lScsXG4gIGNyZWF0ZWRCeTogJ+adjuWbmycsXG4gIGNyZWF0ZWRBdDogJzIwMTQtMDUtMDYgMTM6MzMnLFxuICByZWFkOiAyMDBcbn0sIHtcbiAgY292ZXI6ICdodHRwOi8vYi5oaXBob3Rvcy5iYWlkdS5jb20vYmFpa2UvdyUzRDI2OCUzQmclM0QwL3NpZ249NmQyNGExNGFmODFmM2EyOTVhYzhkMmM4YTExZWRiMGMvZTgyNGI4OTlhOTAxNGMwODhmNzYyODMxMDI3YjAyMDg3YWY0ZjRkMS5qcGcnLFxuICB0aXRsZTogJzIwMTflubQ45pyI5rGf6aOO6YCa6K6v5q2j5byP5LiK57q/JyxcbiAgY29udGVudDogJ+WcqOaUr+aMgeaVsOaNruW6k+aXtuW5tuS4lOWQr+eUqOS6huWkmiB0YWIg5ZCM5pe255m75b2VLCDpgqPkuYjlpoLmnpzlpJrkuKogdGFiIOmhteWQjOaXtuaWree6v+mHjei/nuS5i+WQjiwg5Y+q5Lya5pyJ5LiA5LiqIHRhYiDpobXotJ/otKPlrZjlgqjmvKvmuLjmtojmga/lkoznprvnur/mtojmga8sIOWNs+WPquS8muacieS4gOS4qiB0YWIg6aG15Lya5pS25YiwIG9ucm9hbWluZ21zZ3Mg5ZKMIG9ub2ZmbGluZW1zZ3Mg5Zue6LCDLCDlhbblroMgdGFiIOmhteWcqOWQjOatpeWujOaIkOS5i+WQjiwg6ZyA6KaB6LCD55So6I635Y+W5pys5Zyw5Y6G5Y+y6K6w5b2V5p2l5LuO5pys5Zyw57yT5a2Y5Lit5ouJ5Y+W5raI5oGv6K6w5b2VJyxcbiAgY3JlYXRlZEJ5OiAn5p2O5ZubJyxcbiAgY3JlYXRlZEF0OiAnMjAxNC0wNS0wNiAxMzozMycsXG4gIHJlYWQ6IDIwMFxufSwge1xuICBjb3ZlcjogJ2h0dHA6Ly9iLmhpcGhvdG9zLmJhaWR1LmNvbS9iYWlrZS93JTNEMjY4JTNCZyUzRDAvc2lnbj02ZDI0YTE0YWY4MWYzYTI5NWFjOGQyYzhhMTFlZGIwYy9lODI0Yjg5OWE5MDE0YzA4OGY3NjI4MzEwMjdiMDIwODdhZjRmNGQxLmpwZycsXG4gIHRpdGxlOiAnMjAxN+W5tDjmnIjmsZ/po47pgJrorq/mraPlvI/kuIrnur8nLFxuICBjb250ZW50OiAn5Zyo5pSv5oyB5pWw5o2u5bqT5pe25bm25LiU5ZCv55So5LqG5aSaIHRhYiDlkIzml7bnmbvlvZUsIOmCo+S5iOWmguaenOWkmuS4qiB0YWIg6aG15ZCM5pe25pat57q/6YeN6L+e5LmL5ZCOLCDlj6rkvJrmnInkuIDkuKogdGFiIOmhtei0n+i0o+WtmOWCqOa8q+a4uOa2iOaBr+WSjOemu+e6v+a2iOaBrywg5Y2z5Y+q5Lya5pyJ5LiA5LiqIHRhYiDpobXkvJrmlLbliLAgb25yb2FtaW5nbXNncyDlkowgb25vZmZsaW5lbXNncyDlm57osIMsIOWFtuWugyB0YWIg6aG15Zyo5ZCM5q2l5a6M5oiQ5LmL5ZCOLCDpnIDopoHosIPnlKjojrflj5bmnKzlnLDljoblj7LorrDlvZXmnaXku47mnKzlnLDnvJPlrZjkuK3mi4nlj5bmtojmga/orrDlvZUnLFxuICBjcmVhdGVkQnk6ICfmnY7lm5snLFxuICBjcmVhdGVkQXQ6ICcyMDE0LTA1LTA2IDEzOjMzJyxcbiAgcmVhZDogMjAwXG59LCB7XG4gIGNvdmVyOiAnaHR0cDovL2IuaGlwaG90b3MuYmFpZHUuY29tL2JhaWtlL3clM0QyNjglM0JnJTNEMC9zaWduPTZkMjRhMTRhZjgxZjNhMjk1YWM4ZDJjOGExMWVkYjBjL2U4MjRiODk5YTkwMTRjMDg4Zjc2MjgzMTAyN2IwMjA4N2FmNGY0ZDEuanBnJyxcbiAgdGl0bGU6ICcyMDE35bm0OOaciOaxn+mjjumAmuiur+ato+W8j+S4iue6vycsXG4gIGNvbnRlbnQ6ICflnKjmlK/mjIHmlbDmja7lupPml7blubbkuJTlkK/nlKjkuoblpJogdGFiIOWQjOaXtueZu+W9lSwg6YKj5LmI5aaC5p6c5aSa5LiqIHRhYiDpobXlkIzml7bmlq3nur/ph43ov57kuYvlkI4sIOWPquS8muacieS4gOS4qiB0YWIg6aG16LSf6LSj5a2Y5YKo5ryr5ri45raI5oGv5ZKM56a757q/5raI5oGvLCDljbPlj6rkvJrmnInkuIDkuKogdGFiIOmhteS8muaUtuWIsCBvbnJvYW1pbmdtc2dzIOWSjCBvbm9mZmxpbmVtc2dzIOWbnuiwgywg5YW25a6DIHRhYiDpobXlnKjlkIzmraXlrozmiJDkuYvlkI4sIOmcgOimgeiwg+eUqOiOt+WPluacrOWcsOWOhuWPsuiusOW9leadpeS7juacrOWcsOe8k+WtmOS4reaLieWPlua2iOaBr+iusOW9lScsXG4gIGNyZWF0ZWRCeTogJ+adjuWbmycsXG4gIGNyZWF0ZWRBdDogJzIwMTQtMDUtMDYgMTM6MzMnLFxuICByZWFkOiAyMDBcbn1dXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJvYXJkcyBleHRlbmRzIHdlcHkucGFnZSB7XG4gIGNvbmZpZyA9IHtcbiAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn55WZ6KiA5p2/MidcbiAgfVxuXG4gIGRhdGEgPSB7XG4gICAgbGlzdCxcbiAgICBuYXZzOiBbJ+mHkeiejScsICflk7LlraYnLCAn5L2T6IKyJywgJ+aUv+ayuyddLFxuICAgIGN1cnJlbnROYXY6IDFcbiAgfVxuXG4gIG1ldGhvZHMgPSB7XG4gICAgaGFuZGxlUHVibGlzaFRhcCgpIHtcbiAgICAgIHdlcHkubmF2aWdhdGVUbyh7XG4gICAgICAgIHVybDogJy4uL3B1Ymxpc2gvcHVibGlzaCdcbiAgICAgIH0pXG4gICAgfSxcbiAgICBoYW5kbGVJdGVtVGFwKCkge1xuICAgICAgd2VweS5uYXZpZ2F0ZVRvKHtcbiAgICAgICAgdXJsOiAnLi4vYm9hcmQvYm9hcmQnXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIGFzeW5jIG9uTG9hZCgpIHtcbiAgICAvLyBjb25zdCB0b2tlbiA9IGF3YWl0IGdldFRva2VuKClcbiAgICAvLyBjb25zdCByZXMgPSBhd2FpdCBhcGkuYm9hcmRMaXN0KHRva2VuKVxuICAgIC8vIGNvbnN0IGJvYXJkcyA9IHJlcy5kYXRhO1xuICAgIC8vIGNvbnN0IHJlc2VzID0gYXdhaXQgYXBpLmRvd25sb2FkSW1hZ2VzKGJvYXJkcy5tYXAoKHsgY292ZXJfaW1nIH0pID0+IGNvdmVyX2ltZykpXG4gICAgLy8gY29uc3QgdGVtcEZpbGVzID0gcmVzZXMubWFwKCh7dGVtcEZpbGVQYXRofSkgPT4gdGVtcEZpbGVQYXRoKVxuICAgIC8vIHRoaXMubGlzdCA9IGJvYXJkcy5tYXAoYm9hcmQgPT4gKHt0aXRsZSwgdGV4dCwgY3JlYXRvciwgYXV0aG9yLCBjb3Zlcl9pbWd9KSA9PiAoeyB0aXRsZSwgY29udGVudDogdGV4dCwgY3JlYXRlZEJ5OiBjcmVhdG9yLCBhdXRob3I6IHJlYWQsIGNvdmVyOiBjb3Zlcl9pbWcgfSkpXG4gIH1cbn1cbiJdfQ==