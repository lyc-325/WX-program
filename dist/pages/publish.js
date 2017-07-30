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

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Publish = (_dec = (0, _wepyRedux.connect)({
  user: function user(state) {
    return state.common.user;
  }
}), _dec(_class = function (_wepy$page) {
  (0, _inherits3.default)(Publish, _wepy$page);

  function Publish() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, Publish);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Publish.__proto__ || (0, _getPrototypeOf2.default)(Publish)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: '发布消息'
    }, _this.data = {
      imgs: [],
      categories: [],
      index: 0,
      loading: false,
      disabled: false
    }, _this.methods = {
      goBack: function goBack() {
        console.log('执行了');
        _wepy2.default.switchTab({
          url: 'boards'
        });
      },
      bindPickerChange: function bindPickerChange(e) {
        this.index = e.detail.value;
      },
      handleUpload: function handleUpload() {
        var self = this;
        _wepy2.default.chooseImage().then(function (res) {
          self.imgs = res.tempFilePaths;
          self.$apply();
        });
      },
      handleCancel: function handleCancel(e) {
        this.imgs.splice(e.currentTarget.dataset.index, 1);
      },
      bindFormSubmit: function bindFormSubmit(e) {
        var _this2 = this;

        return (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee() {
          var _user, jfToken, username, data, title, text, categoryId;

          return _regenerator2.default.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  _user = _this2.user, jfToken = _user.jfToken, username = _user.username;
                  _context.next = 3;
                  return api.uploadImages(_this2.imgs, jfToken);

                case 3:
                  data = _context.sent;
                  title = e.detail.value.title;
                  text = e.detail.value.content;
                  categoryId = _this2.categories[_this2.index].id;

                  console.log('data', data);
                  _this2.loading = true;
                  _this2.disabled = true;
                  _context.next = 12;
                  return api.boardPublish({
                    title: title,
                    text: text,
                    token: jfToken,
                    creator: username,
                    pic_urls: data.map(function (_ref2) {
                      var url = _ref2.url;
                      return url;
                    }),
                    category_id: categoryId
                  });

                case 12:
                  _this2.imgs = [];
                  _this2.loading = false;
                  _this2.disabled = false;
                  _wepy2.default.switchTab({
                    url: 'boards?categoryId=' + categoryId
                  });

                case 16:
                case 'end':
                  return _context.stop();
              }
            }
          }, _callee, _this2);
        }))();
      }
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(Publish, [{
    key: 'onLoad',
    value: function onLoad() {
      var self = this;
      self.imgs = [];
      api.categoryList().then(function (results) {
        console.log('results', results);
        self.categories = results;
        self.$apply();
      });
    }
  }]);
  return Publish;
}(_wepy2.default.page)) || _class);

Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Publish , 'pages/publish'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInB1Ymxpc2guanMiXSwibmFtZXMiOlsiYXBpIiwiUHVibGlzaCIsInVzZXIiLCJzdGF0ZSIsImNvbW1vbiIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCJkYXRhIiwiaW1ncyIsImNhdGVnb3JpZXMiLCJpbmRleCIsImxvYWRpbmciLCJkaXNhYmxlZCIsIm1ldGhvZHMiLCJnb0JhY2siLCJjb25zb2xlIiwibG9nIiwic3dpdGNoVGFiIiwidXJsIiwiYmluZFBpY2tlckNoYW5nZSIsImUiLCJkZXRhaWwiLCJ2YWx1ZSIsImhhbmRsZVVwbG9hZCIsInNlbGYiLCJjaG9vc2VJbWFnZSIsInRoZW4iLCJyZXMiLCJ0ZW1wRmlsZVBhdGhzIiwiJGFwcGx5IiwiaGFuZGxlQ2FuY2VsIiwic3BsaWNlIiwiY3VycmVudFRhcmdldCIsImRhdGFzZXQiLCJiaW5kRm9ybVN1Ym1pdCIsImpmVG9rZW4iLCJ1c2VybmFtZSIsInVwbG9hZEltYWdlcyIsInRpdGxlIiwidGV4dCIsImNvbnRlbnQiLCJjYXRlZ29yeUlkIiwiaWQiLCJib2FyZFB1Ymxpc2giLCJ0b2tlbiIsImNyZWF0b3IiLCJwaWNfdXJscyIsIm1hcCIsImNhdGVnb3J5X2lkIiwiY2F0ZWdvcnlMaXN0IiwicmVzdWx0cyIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTs7OztBQUNBOztBQUNBOztJQUFZQSxHOzs7Ozs7SUFNU0MsTyxXQUxwQix3QkFBUTtBQUNQQyxNQURPLGdCQUNGQyxLQURFLEVBQ0s7QUFDVixXQUFPQSxNQUFNQyxNQUFOLENBQWFGLElBQXBCO0FBQ0Q7QUFITSxDQUFSLEM7Ozs7Ozs7Ozs7Ozs7OzhNQU1DRyxNLEdBQVM7QUFDUEMsOEJBQXdCO0FBRGpCLEssUUFJVEMsSSxHQUFPO0FBQ0xDLFlBQU0sRUFERDtBQUVMQyxrQkFBWSxFQUZQO0FBR0xDLGFBQU8sQ0FIRjtBQUlMQyxlQUFTLEtBSko7QUFLTEMsZ0JBQVU7QUFMTCxLLFFBa0JQQyxPLEdBQVU7QUFDUkMsWUFEUSxvQkFDRTtBQUNSQyxnQkFBUUMsR0FBUixDQUFZLEtBQVo7QUFDQSx1QkFBS0MsU0FBTCxDQUFlO0FBQ2JDO0FBRGEsU0FBZjtBQUdELE9BTk87QUFPUkMsc0JBUFEsNEJBT1VDLENBUFYsRUFPYTtBQUNuQixhQUFLVixLQUFMLEdBQWFVLEVBQUVDLE1BQUYsQ0FBU0MsS0FBdEI7QUFDRCxPQVRPO0FBVVJDLGtCQVZRLDBCQVVRO0FBQ2QsWUFBSUMsT0FBTyxJQUFYO0FBQ0EsdUJBQUtDLFdBQUwsR0FBbUJDLElBQW5CLENBQXdCLGVBQU87QUFDN0JGLGVBQUtoQixJQUFMLEdBQVltQixJQUFJQyxhQUFoQjtBQUNBSixlQUFLSyxNQUFMO0FBQ0QsU0FIRDtBQUlELE9BaEJPO0FBaUJSQyxrQkFqQlEsd0JBaUJNVixDQWpCTixFQWlCUztBQUNmLGFBQUtaLElBQUwsQ0FBVXVCLE1BQVYsQ0FBaUJYLEVBQUVZLGFBQUYsQ0FBZ0JDLE9BQWhCLENBQXdCdkIsS0FBekMsRUFBZ0QsQ0FBaEQ7QUFDRCxPQW5CTztBQW9CRndCLG9CQXBCRSwwQkFvQmNkLENBcEJkLEVBb0JpQjtBQUFBOztBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwwQkFDTyxPQUFLbEIsSUFEWixFQUNmaUMsT0FEZSxTQUNmQSxPQURlLEVBQ05DLFFBRE0sU0FDTkEsUUFETTtBQUFBO0FBQUEseUJBRUpwQyxJQUFJcUMsWUFBSixDQUFpQixPQUFLN0IsSUFBdEIsRUFBNEIyQixPQUE1QixDQUZJOztBQUFBO0FBRWpCNUIsc0JBRmlCO0FBR2pCK0IsdUJBSGlCLEdBR1RsQixFQUFFQyxNQUFGLENBQVNDLEtBQVQsQ0FBZWdCLEtBSE47QUFJakJDLHNCQUppQixHQUlWbkIsRUFBRUMsTUFBRixDQUFTQyxLQUFULENBQWVrQixPQUpMO0FBS2pCQyw0QkFMaUIsR0FLSixPQUFLaEMsVUFBTCxDQUFnQixPQUFLQyxLQUFyQixFQUE0QmdDLEVBTHhCOztBQU12QjNCLDBCQUFRQyxHQUFSLENBQVksTUFBWixFQUFvQlQsSUFBcEI7QUFDQSx5QkFBS0ksT0FBTCxHQUFlLElBQWY7QUFDQSx5QkFBS0MsUUFBTCxHQUFnQixJQUFoQjtBQVJ1QjtBQUFBLHlCQVNqQlosSUFBSTJDLFlBQUosQ0FBaUI7QUFDckJMLGdDQURxQjtBQUVyQkMsOEJBRnFCO0FBR3JCSywyQkFBT1QsT0FIYztBQUlyQlUsNkJBQVNULFFBSlk7QUFLckJVLDhCQUFVdkMsS0FBS3dDLEdBQUwsQ0FBUztBQUFBLDBCQUFFN0IsR0FBRixTQUFFQSxHQUFGO0FBQUEsNkJBQVdBLEdBQVg7QUFBQSxxQkFBVCxDQUxXO0FBTXJCOEIsaUNBQWFQO0FBTlEsbUJBQWpCLENBVGlCOztBQUFBO0FBaUJ2Qix5QkFBS2pDLElBQUwsR0FBWSxFQUFaO0FBQ0EseUJBQUtHLE9BQUwsR0FBZSxLQUFmO0FBQ0EseUJBQUtDLFFBQUwsR0FBZ0IsS0FBaEI7QUFDQSxpQ0FBS0ssU0FBTCxDQUFlO0FBQ2JDLGdEQUEwQnVCO0FBRGIsbUJBQWY7O0FBcEJ1QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQXVCeEI7QUEzQ08sSzs7Ozs7NkJBVkE7QUFDUixVQUFJakIsT0FBTyxJQUFYO0FBQ0FBLFdBQUtoQixJQUFMLEdBQVksRUFBWjtBQUNBUixVQUFJaUQsWUFBSixHQUFtQnZCLElBQW5CLENBQXdCLG1CQUFXO0FBQ2pDWCxnQkFBUUMsR0FBUixDQUFZLFNBQVosRUFBdUJrQyxPQUF2QjtBQUNBMUIsYUFBS2YsVUFBTCxHQUFrQnlDLE9BQWxCO0FBQ0ExQixhQUFLSyxNQUFMO0FBQ0QsT0FKRDtBQUtEOzs7RUFyQmtDLGVBQUtzQixJO2tCQUFyQmxELE8iLCJmaWxlIjoicHVibGlzaC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICd3ZXB5LXJlZHV4J1xuaW1wb3J0ICogYXMgYXBpIGZyb20gJy4uL2FwaXMvYm9hcmQnXG5AY29ubmVjdCh7XG4gIHVzZXIoc3RhdGUpIHtcbiAgICByZXR1cm4gc3RhdGUuY29tbW9uLnVzZXJcbiAgfVxufSlcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFB1Ymxpc2ggZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICBjb25maWcgPSB7XG4gICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+WPkeW4g+a2iOaBrydcbiAgfVxuXG4gIGRhdGEgPSB7XG4gICAgaW1nczogW10sXG4gICAgY2F0ZWdvcmllczogW10sXG4gICAgaW5kZXg6IDAsXG4gICAgbG9hZGluZzogZmFsc2UsXG4gICAgZGlzYWJsZWQ6IGZhbHNlXG4gIH1cblxuICBvbkxvYWQgKCkge1xuICAgIGxldCBzZWxmID0gdGhpc1xuICAgIHNlbGYuaW1ncyA9IFtdXG4gICAgYXBpLmNhdGVnb3J5TGlzdCgpLnRoZW4ocmVzdWx0cyA9PiB7XG4gICAgICBjb25zb2xlLmxvZygncmVzdWx0cycsIHJlc3VsdHMpXG4gICAgICBzZWxmLmNhdGVnb3JpZXMgPSByZXN1bHRzXG4gICAgICBzZWxmLiRhcHBseSgpXG4gICAgfSlcbiAgfVxuXG4gIG1ldGhvZHMgPSB7XG4gICAgZ29CYWNrICgpIHtcbiAgICAgIGNvbnNvbGUubG9nKCfmiafooYzkuoYnKVxuICAgICAgd2VweS5zd2l0Y2hUYWIoe1xuICAgICAgICB1cmw6IGBib2FyZHNgXG4gICAgICB9KVxuICAgIH0sXG4gICAgYmluZFBpY2tlckNoYW5nZSAoZSkge1xuICAgICAgdGhpcy5pbmRleCA9IGUuZGV0YWlsLnZhbHVlXG4gICAgfSxcbiAgICBoYW5kbGVVcGxvYWQgKCkge1xuICAgICAgbGV0IHNlbGYgPSB0aGlzXG4gICAgICB3ZXB5LmNob29zZUltYWdlKCkudGhlbihyZXMgPT4ge1xuICAgICAgICBzZWxmLmltZ3MgPSByZXMudGVtcEZpbGVQYXRoc1xuICAgICAgICBzZWxmLiRhcHBseSgpXG4gICAgICB9KVxuICAgIH0sXG4gICAgaGFuZGxlQ2FuY2VsIChlKSB7XG4gICAgICB0aGlzLmltZ3Muc3BsaWNlKGUuY3VycmVudFRhcmdldC5kYXRhc2V0LmluZGV4LCAxKVxuICAgIH0sXG4gICAgYXN5bmMgYmluZEZvcm1TdWJtaXQgKGUpIHtcbiAgICAgIGNvbnN0IHsgamZUb2tlbiwgdXNlcm5hbWUgfSA9IHRoaXMudXNlclxuICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IGFwaS51cGxvYWRJbWFnZXModGhpcy5pbWdzLCBqZlRva2VuKVxuICAgICAgY29uc3QgdGl0bGUgPSBlLmRldGFpbC52YWx1ZS50aXRsZVxuICAgICAgY29uc3QgdGV4dCA9IGUuZGV0YWlsLnZhbHVlLmNvbnRlbnRcbiAgICAgIGNvbnN0IGNhdGVnb3J5SWQgPSB0aGlzLmNhdGVnb3JpZXNbdGhpcy5pbmRleF0uaWRcbiAgICAgIGNvbnNvbGUubG9nKCdkYXRhJywgZGF0YSlcbiAgICAgIHRoaXMubG9hZGluZyA9IHRydWVcbiAgICAgIHRoaXMuZGlzYWJsZWQgPSB0cnVlXG4gICAgICBhd2FpdCBhcGkuYm9hcmRQdWJsaXNoKHtcbiAgICAgICAgdGl0bGUsXG4gICAgICAgIHRleHQsXG4gICAgICAgIHRva2VuOiBqZlRva2VuLFxuICAgICAgICBjcmVhdG9yOiB1c2VybmFtZSxcbiAgICAgICAgcGljX3VybHM6IGRhdGEubWFwKCh7dXJsfSkgPT4gdXJsKSxcbiAgICAgICAgY2F0ZWdvcnlfaWQ6IGNhdGVnb3J5SWRcbiAgICAgIH0pXG4gICAgICB0aGlzLmltZ3MgPSBbXVxuICAgICAgdGhpcy5sb2FkaW5nID0gZmFsc2VcbiAgICAgIHRoaXMuZGlzYWJsZWQgPSBmYWxzZVxuICAgICAgd2VweS5zd2l0Y2hUYWIoe1xuICAgICAgICB1cmw6IGBib2FyZHM/Y2F0ZWdvcnlJZD0ke2NhdGVnb3J5SWR9YFxuICAgICAgfSlcbiAgICB9XG4gIH1cbn1cbiJdfQ==