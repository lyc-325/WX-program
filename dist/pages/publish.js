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

        return (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
          var _user, jfToken, nickName, data, title, text, categoryId;

          return _regenerator2.default.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  console.log('点击了发布');
                  _user = _this2.user, jfToken = _user.jfToken, nickName = _user.nickName;

                  console.log(_this2.user);
                  _context.next = 5;
                  return api.uploadImages(_this2.imgs, jfToken);

                case 5:
                  data = _context.sent;

                  console.log(data);

                  title = e.detail.value.title;
                  text = e.detail.value.content;
                  categoryId = _this2.categories[_this2.index].id;

                  console.log('data', data);
                  _this2.loading = true;
                  _this2.disabled = true;
                  _context.next = 15;
                  return api.boardPublish({
                    title: title,
                    text: text,
                    token: jfToken,
                    creator: nickName,
                    pic_urls: data.map(function (_ref2) {
                      var url = _ref2.url;
                      return url;
                    }),
                    category_id: categoryId
                  });

                case 15:
                  _this2.imgs = [];
                  _this2.loading = false;
                  _this2.disabled = false;
                  _wepy2.default.switchTab({
                    url: 'boards?categoryId=' + categoryId
                  });

                case 19:
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
      if (this.user.userData) {
        api.categoryList().then(function (results) {
          console.log('results', results);
          self.categories = results;
          self.$apply();
        });
      } else {
        _wepy2.default.reLaunch({
          url: '/pages/register'
        });
      }
    }
  }]);
  return Publish;
}(_wepy2.default.page)) || _class);

Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Publish , 'pages/publish'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInB1Ymxpc2guanMiXSwibmFtZXMiOlsiYXBpIiwiUHVibGlzaCIsInVzZXIiLCJzdGF0ZSIsImNvbW1vbiIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCJkYXRhIiwiaW1ncyIsImNhdGVnb3JpZXMiLCJpbmRleCIsImxvYWRpbmciLCJkaXNhYmxlZCIsIm1ldGhvZHMiLCJnb0JhY2siLCJjb25zb2xlIiwibG9nIiwic3dpdGNoVGFiIiwidXJsIiwiYmluZFBpY2tlckNoYW5nZSIsImUiLCJkZXRhaWwiLCJ2YWx1ZSIsImhhbmRsZVVwbG9hZCIsInNlbGYiLCJjaG9vc2VJbWFnZSIsInRoZW4iLCJyZXMiLCJ0ZW1wRmlsZVBhdGhzIiwiJGFwcGx5IiwiaGFuZGxlQ2FuY2VsIiwic3BsaWNlIiwiY3VycmVudFRhcmdldCIsImRhdGFzZXQiLCJiaW5kRm9ybVN1Ym1pdCIsImpmVG9rZW4iLCJuaWNrTmFtZSIsInVwbG9hZEltYWdlcyIsInRpdGxlIiwidGV4dCIsImNvbnRlbnQiLCJjYXRlZ29yeUlkIiwiaWQiLCJib2FyZFB1Ymxpc2giLCJ0b2tlbiIsImNyZWF0b3IiLCJwaWNfdXJscyIsIm1hcCIsImNhdGVnb3J5X2lkIiwidXNlckRhdGEiLCJjYXRlZ29yeUxpc3QiLCJyZXN1bHRzIiwicmVMYXVuY2giLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7Ozs7QUFDQTs7QUFDQTs7SUFBWUEsRzs7Ozs7O0lBTVNDLE8sV0FMcEIsd0JBQVE7QUFDUEMsTUFETyxnQkFDRkMsS0FERSxFQUNLO0FBQ1YsV0FBT0EsTUFBTUMsTUFBTixDQUFhRixJQUFwQjtBQUNEO0FBSE0sQ0FBUixDOzs7Ozs7Ozs7Ozs7Ozs4TUFNQ0csTSxHQUFTO0FBQ1BDLDhCQUF3QjtBQURqQixLLFFBSVRDLEksR0FBTztBQUNMQyxZQUFNLEVBREQ7QUFFTEMsa0JBQVksRUFGUDtBQUdMQyxhQUFPLENBSEY7QUFJTEMsZUFBUyxLQUpKO0FBS0xDLGdCQUFVO0FBTEwsSyxRQXdCUEMsTyxHQUFVO0FBQ1JDLFlBRFEsb0JBQ0U7QUFDUkMsZ0JBQVFDLEdBQVIsQ0FBWSxLQUFaO0FBQ0EsdUJBQUtDLFNBQUwsQ0FBZTtBQUNiQztBQURhLFNBQWY7QUFHRCxPQU5PO0FBT1JDLHNCQVBRLDRCQU9VQyxDQVBWLEVBT2E7QUFDbkIsYUFBS1YsS0FBTCxHQUFhVSxFQUFFQyxNQUFGLENBQVNDLEtBQXRCO0FBQ0QsT0FUTztBQVVSQyxrQkFWUSwwQkFVUTtBQUNkLFlBQUlDLE9BQU8sSUFBWDtBQUNBLHVCQUFLQyxXQUFMLEdBQW1CQyxJQUFuQixDQUF3QixlQUFPO0FBQzdCRixlQUFLaEIsSUFBTCxHQUFZbUIsSUFBSUMsYUFBaEI7QUFDQUosZUFBS0ssTUFBTDtBQUNELFNBSEQ7QUFJRCxPQWhCTztBQWlCUkMsa0JBakJRLHdCQWlCTVYsQ0FqQk4sRUFpQlM7QUFDZixhQUFLWixJQUFMLENBQVV1QixNQUFWLENBQWlCWCxFQUFFWSxhQUFGLENBQWdCQyxPQUFoQixDQUF3QnZCLEtBQXpDLEVBQWdELENBQWhEO0FBQ0QsT0FuQk87QUFvQkZ3QixvQkFwQkUsMEJBb0JjZCxDQXBCZCxFQW9CaUI7QUFBQTs7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ3ZCTCwwQkFBUUMsR0FBUixDQUFZLE9BQVo7QUFEdUIsMEJBRU8sT0FBS2QsSUFGWixFQUVmaUMsT0FGZSxTQUVmQSxPQUZlLEVBRU5DLFFBRk0sU0FFTkEsUUFGTTs7QUFHdkJyQiwwQkFBUUMsR0FBUixDQUFZLE9BQUtkLElBQWpCO0FBSHVCO0FBQUEseUJBSUpGLElBQUlxQyxZQUFKLENBQWlCLE9BQUs3QixJQUF0QixFQUE0QjJCLE9BQTVCLENBSkk7O0FBQUE7QUFJakI1QixzQkFKaUI7O0FBS3ZCUSwwQkFBUUMsR0FBUixDQUFZVCxJQUFaOztBQUVNK0IsdUJBUGlCLEdBT1RsQixFQUFFQyxNQUFGLENBQVNDLEtBQVQsQ0FBZWdCLEtBUE47QUFRakJDLHNCQVJpQixHQVFWbkIsRUFBRUMsTUFBRixDQUFTQyxLQUFULENBQWVrQixPQVJMO0FBU2pCQyw0QkFUaUIsR0FTSixPQUFLaEMsVUFBTCxDQUFnQixPQUFLQyxLQUFyQixFQUE0QmdDLEVBVHhCOztBQVV2QjNCLDBCQUFRQyxHQUFSLENBQVksTUFBWixFQUFvQlQsSUFBcEI7QUFDQSx5QkFBS0ksT0FBTCxHQUFlLElBQWY7QUFDQSx5QkFBS0MsUUFBTCxHQUFnQixJQUFoQjtBQVp1QjtBQUFBLHlCQWFqQlosSUFBSTJDLFlBQUosQ0FBaUI7QUFDckJMLGdDQURxQjtBQUVyQkMsOEJBRnFCO0FBR3JCSywyQkFBT1QsT0FIYztBQUlyQlUsNkJBQVNULFFBSlk7QUFLckJVLDhCQUFVdkMsS0FBS3dDLEdBQUwsQ0FBUztBQUFBLDBCQUFFN0IsR0FBRixTQUFFQSxHQUFGO0FBQUEsNkJBQVdBLEdBQVg7QUFBQSxxQkFBVCxDQUxXO0FBTXJCOEIsaUNBQWFQO0FBTlEsbUJBQWpCLENBYmlCOztBQUFBO0FBcUJ2Qix5QkFBS2pDLElBQUwsR0FBWSxFQUFaO0FBQ0EseUJBQUtHLE9BQUwsR0FBZSxLQUFmO0FBQ0EseUJBQUtDLFFBQUwsR0FBZ0IsS0FBaEI7QUFDQSxpQ0FBS0ssU0FBTCxDQUFlO0FBQ2JDLGdEQUEwQnVCO0FBRGIsbUJBQWY7O0FBeEJ1QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQTJCeEI7QUEvQ08sSzs7Ozs7NkJBaEJBO0FBQ1IsVUFBSWpCLE9BQU8sSUFBWDtBQUNBQSxXQUFLaEIsSUFBTCxHQUFZLEVBQVo7QUFDQSxVQUFJLEtBQUtOLElBQUwsQ0FBVStDLFFBQWQsRUFBd0I7QUFDdEJqRCxZQUFJa0QsWUFBSixHQUFtQnhCLElBQW5CLENBQXdCLG1CQUFXO0FBQ2pDWCxrQkFBUUMsR0FBUixDQUFZLFNBQVosRUFBdUJtQyxPQUF2QjtBQUNBM0IsZUFBS2YsVUFBTCxHQUFrQjBDLE9BQWxCO0FBQ0EzQixlQUFLSyxNQUFMO0FBQ0QsU0FKRDtBQUtELE9BTkQsTUFNTztBQUNMLHVCQUFLdUIsUUFBTCxDQUFjO0FBQ1psQyxlQUFLO0FBRE8sU0FBZDtBQUdEO0FBQ0Y7OztFQTNCa0MsZUFBS21DLEk7a0JBQXJCcEQsTyIsImZpbGUiOiJwdWJsaXNoLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXHJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICd3ZXB5LXJlZHV4J1xyXG5pbXBvcnQgKiBhcyBhcGkgZnJvbSAnLi4vYXBpcy9ib2FyZCdcclxuQGNvbm5lY3Qoe1xyXG4gIHVzZXIoc3RhdGUpIHtcclxuICAgIHJldHVybiBzdGF0ZS5jb21tb24udXNlclxyXG4gIH1cclxufSlcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHVibGlzaCBleHRlbmRzIHdlcHkucGFnZSB7XHJcbiAgY29uZmlnID0ge1xyXG4gICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+WPkeW4g+a2iOaBrydcclxuICB9XHJcblxyXG4gIGRhdGEgPSB7XHJcbiAgICBpbWdzOiBbXSxcclxuICAgIGNhdGVnb3JpZXM6IFtdLFxyXG4gICAgaW5kZXg6IDAsXHJcbiAgICBsb2FkaW5nOiBmYWxzZSxcclxuICAgIGRpc2FibGVkOiBmYWxzZVxyXG4gIH1cclxuXHJcbiAgb25Mb2FkICgpIHtcclxuICAgIGxldCBzZWxmID0gdGhpc1xyXG4gICAgc2VsZi5pbWdzID0gW11cclxuICAgIGlmICh0aGlzLnVzZXIudXNlckRhdGEpIHtcclxuICAgICAgYXBpLmNhdGVnb3J5TGlzdCgpLnRoZW4ocmVzdWx0cyA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ3Jlc3VsdHMnLCByZXN1bHRzKVxyXG4gICAgICAgIHNlbGYuY2F0ZWdvcmllcyA9IHJlc3VsdHNcclxuICAgICAgICBzZWxmLiRhcHBseSgpXHJcbiAgICAgIH0pXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB3ZXB5LnJlTGF1bmNoKHtcclxuICAgICAgICB1cmw6ICcvcGFnZXMvcmVnaXN0ZXInXHJcbiAgICAgIH0pXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBtZXRob2RzID0ge1xyXG4gICAgZ29CYWNrICgpIHtcclxuICAgICAgY29uc29sZS5sb2coJ+aJp+ihjOS6hicpXHJcbiAgICAgIHdlcHkuc3dpdGNoVGFiKHtcclxuICAgICAgICB1cmw6IGBib2FyZHNgXHJcbiAgICAgIH0pXHJcbiAgICB9LFxyXG4gICAgYmluZFBpY2tlckNoYW5nZSAoZSkge1xyXG4gICAgICB0aGlzLmluZGV4ID0gZS5kZXRhaWwudmFsdWVcclxuICAgIH0sXHJcbiAgICBoYW5kbGVVcGxvYWQgKCkge1xyXG4gICAgICBsZXQgc2VsZiA9IHRoaXNcclxuICAgICAgd2VweS5jaG9vc2VJbWFnZSgpLnRoZW4ocmVzID0+IHtcclxuICAgICAgICBzZWxmLmltZ3MgPSByZXMudGVtcEZpbGVQYXRoc1xyXG4gICAgICAgIHNlbGYuJGFwcGx5KClcclxuICAgICAgfSlcclxuICAgIH0sXHJcbiAgICBoYW5kbGVDYW5jZWwgKGUpIHtcclxuICAgICAgdGhpcy5pbWdzLnNwbGljZShlLmN1cnJlbnRUYXJnZXQuZGF0YXNldC5pbmRleCwgMSlcclxuICAgIH0sXHJcbiAgICBhc3luYyBiaW5kRm9ybVN1Ym1pdCAoZSkge1xyXG4gICAgICBjb25zb2xlLmxvZygn54K55Ye75LqG5Y+R5biDJylcclxuICAgICAgY29uc3QgeyBqZlRva2VuLCBuaWNrTmFtZSB9ID0gdGhpcy51c2VyXHJcbiAgICAgIGNvbnNvbGUubG9nKHRoaXMudXNlcilcclxuICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IGFwaS51cGxvYWRJbWFnZXModGhpcy5pbWdzLCBqZlRva2VuKVxyXG4gICAgICBjb25zb2xlLmxvZyhkYXRhKVxyXG5cclxuICAgICAgY29uc3QgdGl0bGUgPSBlLmRldGFpbC52YWx1ZS50aXRsZVxyXG4gICAgICBjb25zdCB0ZXh0ID0gZS5kZXRhaWwudmFsdWUuY29udGVudFxyXG4gICAgICBjb25zdCBjYXRlZ29yeUlkID0gdGhpcy5jYXRlZ29yaWVzW3RoaXMuaW5kZXhdLmlkXHJcbiAgICAgIGNvbnNvbGUubG9nKCdkYXRhJywgZGF0YSlcclxuICAgICAgdGhpcy5sb2FkaW5nID0gdHJ1ZVxyXG4gICAgICB0aGlzLmRpc2FibGVkID0gdHJ1ZVxyXG4gICAgICBhd2FpdCBhcGkuYm9hcmRQdWJsaXNoKHtcclxuICAgICAgICB0aXRsZSxcclxuICAgICAgICB0ZXh0LFxyXG4gICAgICAgIHRva2VuOiBqZlRva2VuLFxyXG4gICAgICAgIGNyZWF0b3I6IG5pY2tOYW1lLFxyXG4gICAgICAgIHBpY191cmxzOiBkYXRhLm1hcCgoe3VybH0pID0+IHVybCksXHJcbiAgICAgICAgY2F0ZWdvcnlfaWQ6IGNhdGVnb3J5SWRcclxuICAgICAgfSlcclxuICAgICAgdGhpcy5pbWdzID0gW11cclxuICAgICAgdGhpcy5sb2FkaW5nID0gZmFsc2VcclxuICAgICAgdGhpcy5kaXNhYmxlZCA9IGZhbHNlXHJcbiAgICAgIHdlcHkuc3dpdGNoVGFiKHtcclxuICAgICAgICB1cmw6IGBib2FyZHM/Y2F0ZWdvcnlJZD0ke2NhdGVnb3J5SWR9YFxyXG4gICAgICB9KVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0=