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
      navigationBarTitleText: '发布'
    }, _this.data = {
      imgs: [],
      categories: [],
      index: 0,
      loading: false,
      disabled: false
    }, _this.methods = {
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
                  _this2.loading = false;
                  _this2.disabled = false;
                  _wepy2.default.switchTab({
                    url: 'boards?categoryId=' + categoryId
                  });

                case 15:
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInB1Ymxpc2guanMiXSwibmFtZXMiOlsiYXBpIiwiUHVibGlzaCIsInVzZXIiLCJzdGF0ZSIsImNvbW1vbiIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCJkYXRhIiwiaW1ncyIsImNhdGVnb3JpZXMiLCJpbmRleCIsImxvYWRpbmciLCJkaXNhYmxlZCIsIm1ldGhvZHMiLCJiaW5kUGlja2VyQ2hhbmdlIiwiZSIsImRldGFpbCIsInZhbHVlIiwiaGFuZGxlVXBsb2FkIiwic2VsZiIsImNob29zZUltYWdlIiwidGhlbiIsInJlcyIsInRlbXBGaWxlUGF0aHMiLCIkYXBwbHkiLCJoYW5kbGVDYW5jZWwiLCJzcGxpY2UiLCJjdXJyZW50VGFyZ2V0IiwiZGF0YXNldCIsImJpbmRGb3JtU3VibWl0IiwiamZUb2tlbiIsInVzZXJuYW1lIiwidXBsb2FkSW1hZ2VzIiwidGl0bGUiLCJ0ZXh0IiwiY29udGVudCIsImNhdGVnb3J5SWQiLCJpZCIsImNvbnNvbGUiLCJsb2ciLCJib2FyZFB1Ymxpc2giLCJ0b2tlbiIsImNyZWF0b3IiLCJwaWNfdXJscyIsIm1hcCIsInVybCIsImNhdGVnb3J5X2lkIiwic3dpdGNoVGFiIiwiY2F0ZWdvcnlMaXN0IiwicmVzdWx0cyIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTs7OztBQUNBOztBQUNBOztJQUFZQSxHOzs7Ozs7SUFNU0MsTyxXQUxwQix3QkFBUTtBQUNQQyxNQURPLGdCQUNGQyxLQURFLEVBQ0s7QUFDVixXQUFPQSxNQUFNQyxNQUFOLENBQWFGLElBQXBCO0FBQ0Q7QUFITSxDQUFSLEM7Ozs7Ozs7Ozs7Ozs7OzhNQU1DRyxNLEdBQVM7QUFDUEMsOEJBQXdCO0FBRGpCLEssUUFJVEMsSSxHQUFPO0FBQ0xDLFlBQU0sRUFERDtBQUVMQyxrQkFBWSxFQUZQO0FBR0xDLGFBQU8sQ0FIRjtBQUlMQyxlQUFTLEtBSko7QUFLTEMsZ0JBQVU7QUFMTCxLLFFBaUJQQyxPLEdBQVU7QUFDUkMsc0JBRFEsNEJBQ1VDLENBRFYsRUFDYTtBQUNuQixhQUFLTCxLQUFMLEdBQWFLLEVBQUVDLE1BQUYsQ0FBU0MsS0FBdEI7QUFDRCxPQUhPO0FBSVJDLGtCQUpRLDBCQUlRO0FBQ2QsWUFBSUMsT0FBTyxJQUFYO0FBQ0EsdUJBQUtDLFdBQUwsR0FBbUJDLElBQW5CLENBQXdCLGVBQU87QUFDN0JGLGVBQUtYLElBQUwsR0FBWWMsSUFBSUMsYUFBaEI7QUFDQUosZUFBS0ssTUFBTDtBQUNELFNBSEQ7QUFJRCxPQVZPO0FBV1JDLGtCQVhRLHdCQVdNVixDQVhOLEVBV1M7QUFDZixhQUFLUCxJQUFMLENBQVVrQixNQUFWLENBQWlCWCxFQUFFWSxhQUFGLENBQWdCQyxPQUFoQixDQUF3QmxCLEtBQXpDLEVBQWdELENBQWhEO0FBQ0QsT0FiTztBQWNGbUIsb0JBZEUsMEJBY2NkLENBZGQsRUFjaUI7QUFBQTs7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsMEJBQ08sT0FBS2IsSUFEWixFQUNmNEIsT0FEZSxTQUNmQSxPQURlLEVBQ05DLFFBRE0sU0FDTkEsUUFETTtBQUFBO0FBQUEseUJBRUovQixJQUFJZ0MsWUFBSixDQUFpQixPQUFLeEIsSUFBdEIsRUFBNEJzQixPQUE1QixDQUZJOztBQUFBO0FBRWpCdkIsc0JBRmlCO0FBR2pCMEIsdUJBSGlCLEdBR1RsQixFQUFFQyxNQUFGLENBQVNDLEtBQVQsQ0FBZWdCLEtBSE47QUFJakJDLHNCQUppQixHQUlWbkIsRUFBRUMsTUFBRixDQUFTQyxLQUFULENBQWVrQixPQUpMO0FBS2pCQyw0QkFMaUIsR0FLSixPQUFLM0IsVUFBTCxDQUFnQixPQUFLQyxLQUFyQixFQUE0QjJCLEVBTHhCOztBQU12QkMsMEJBQVFDLEdBQVIsQ0FBWSxNQUFaLEVBQW9CaEMsSUFBcEI7QUFDQSx5QkFBS0ksT0FBTCxHQUFlLElBQWY7QUFDQSx5QkFBS0MsUUFBTCxHQUFnQixJQUFoQjtBQVJ1QjtBQUFBLHlCQVNqQlosSUFBSXdDLFlBQUosQ0FBaUI7QUFDckJQLGdDQURxQjtBQUVyQkMsOEJBRnFCO0FBR3JCTywyQkFBT1gsT0FIYztBQUlyQlksNkJBQVNYLFFBSlk7QUFLckJZLDhCQUFVcEMsS0FBS3FDLEdBQUwsQ0FBUztBQUFBLDBCQUFFQyxHQUFGLFNBQUVBLEdBQUY7QUFBQSw2QkFBV0EsR0FBWDtBQUFBLHFCQUFULENBTFc7QUFNckJDLGlDQUFhVjtBQU5RLG1CQUFqQixDQVRpQjs7QUFBQTtBQWlCdkIseUJBQUt6QixPQUFMLEdBQWUsS0FBZjtBQUNBLHlCQUFLQyxRQUFMLEdBQWdCLEtBQWhCO0FBQ0EsaUNBQUttQyxTQUFMLENBQWU7QUFDYkYsZ0RBQTBCVDtBQURiLG1CQUFmOztBQW5CdUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFzQnhCO0FBcENPLEs7Ozs7OzZCQVRBO0FBQ1IsVUFBSWpCLE9BQU8sSUFBWDtBQUNBbkIsVUFBSWdELFlBQUosR0FBbUIzQixJQUFuQixDQUF3QixtQkFBVztBQUNqQ2lCLGdCQUFRQyxHQUFSLENBQVksU0FBWixFQUF1QlUsT0FBdkI7QUFDQTlCLGFBQUtWLFVBQUwsR0FBa0J3QyxPQUFsQjtBQUNBOUIsYUFBS0ssTUFBTDtBQUNELE9BSkQ7QUFLRDs7O0VBcEJrQyxlQUFLMEIsSTtrQkFBckJqRCxPIiwiZmlsZSI6InB1Ymxpc2guanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAnd2VweS1yZWR1eCdcbmltcG9ydCAqIGFzIGFwaSBmcm9tICcuLi9hcGlzL2JvYXJkJ1xuQGNvbm5lY3Qoe1xuICB1c2VyKHN0YXRlKSB7XG4gICAgcmV0dXJuIHN0YXRlLmNvbW1vbi51c2VyXG4gIH1cbn0pXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQdWJsaXNoIGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgY29uZmlnID0ge1xuICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICflj5HluIMnXG4gIH1cblxuICBkYXRhID0ge1xuICAgIGltZ3M6IFtdLFxuICAgIGNhdGVnb3JpZXM6IFtdLFxuICAgIGluZGV4OiAwLFxuICAgIGxvYWRpbmc6IGZhbHNlLFxuICAgIGRpc2FibGVkOiBmYWxzZVxuICB9XG5cbiAgb25Mb2FkICgpIHtcbiAgICBsZXQgc2VsZiA9IHRoaXNcbiAgICBhcGkuY2F0ZWdvcnlMaXN0KCkudGhlbihyZXN1bHRzID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKCdyZXN1bHRzJywgcmVzdWx0cylcbiAgICAgIHNlbGYuY2F0ZWdvcmllcyA9IHJlc3VsdHNcbiAgICAgIHNlbGYuJGFwcGx5KClcbiAgICB9KVxuICB9XG5cbiAgbWV0aG9kcyA9IHtcbiAgICBiaW5kUGlja2VyQ2hhbmdlIChlKSB7XG4gICAgICB0aGlzLmluZGV4ID0gZS5kZXRhaWwudmFsdWVcbiAgICB9LFxuICAgIGhhbmRsZVVwbG9hZCAoKSB7XG4gICAgICBsZXQgc2VsZiA9IHRoaXNcbiAgICAgIHdlcHkuY2hvb3NlSW1hZ2UoKS50aGVuKHJlcyA9PiB7XG4gICAgICAgIHNlbGYuaW1ncyA9IHJlcy50ZW1wRmlsZVBhdGhzXG4gICAgICAgIHNlbGYuJGFwcGx5KClcbiAgICAgIH0pXG4gICAgfSxcbiAgICBoYW5kbGVDYW5jZWwgKGUpIHtcbiAgICAgIHRoaXMuaW1ncy5zcGxpY2UoZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQuaW5kZXgsIDEpXG4gICAgfSxcbiAgICBhc3luYyBiaW5kRm9ybVN1Ym1pdCAoZSkge1xuICAgICAgY29uc3QgeyBqZlRva2VuLCB1c2VybmFtZSB9ID0gdGhpcy51c2VyXG4gICAgICBjb25zdCBkYXRhID0gYXdhaXQgYXBpLnVwbG9hZEltYWdlcyh0aGlzLmltZ3MsIGpmVG9rZW4pXG4gICAgICBjb25zdCB0aXRsZSA9IGUuZGV0YWlsLnZhbHVlLnRpdGxlXG4gICAgICBjb25zdCB0ZXh0ID0gZS5kZXRhaWwudmFsdWUuY29udGVudFxuICAgICAgY29uc3QgY2F0ZWdvcnlJZCA9IHRoaXMuY2F0ZWdvcmllc1t0aGlzLmluZGV4XS5pZFxuICAgICAgY29uc29sZS5sb2coJ2RhdGEnLCBkYXRhKVxuICAgICAgdGhpcy5sb2FkaW5nID0gdHJ1ZVxuICAgICAgdGhpcy5kaXNhYmxlZCA9IHRydWVcbiAgICAgIGF3YWl0IGFwaS5ib2FyZFB1Ymxpc2goe1xuICAgICAgICB0aXRsZSxcbiAgICAgICAgdGV4dCxcbiAgICAgICAgdG9rZW46IGpmVG9rZW4sXG4gICAgICAgIGNyZWF0b3I6IHVzZXJuYW1lLFxuICAgICAgICBwaWNfdXJsczogZGF0YS5tYXAoKHt1cmx9KSA9PiB1cmwpLFxuICAgICAgICBjYXRlZ29yeV9pZDogY2F0ZWdvcnlJZFxuICAgICAgfSlcbiAgICAgIHRoaXMubG9hZGluZyA9IGZhbHNlXG4gICAgICB0aGlzLmRpc2FibGVkID0gZmFsc2VcbiAgICAgIHdlcHkuc3dpdGNoVGFiKHtcbiAgICAgICAgdXJsOiBgYm9hcmRzP2NhdGVnb3J5SWQ9JHtjYXRlZ29yeUlkfWBcbiAgICAgIH0pXG4gICAgfVxuICB9XG59XG4iXX0=