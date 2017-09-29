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
                  _context.next = 4;
                  return api.uploadImages(_this2.imgs, jfToken);

                case 4:
                  data = _context.sent;

                  console.log(data);

                  title = e.detail.value.title;
                  text = e.detail.value.content;
                  categoryId = _this2.categories[_this2.index].id;

                  console.log('data', data);
                  _this2.loading = true;
                  _this2.disabled = true;
                  _context.next = 14;
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

                case 14:
                  _this2.imgs = [];
                  _this2.loading = false;
                  _this2.disabled = false;
                  _wepy2.default.switchTab({
                    url: 'boards?categoryId=' + categoryId
                  });

                case 18:
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInB1Ymxpc2guanMiXSwibmFtZXMiOlsiYXBpIiwiUHVibGlzaCIsInVzZXIiLCJzdGF0ZSIsImNvbW1vbiIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCJkYXRhIiwiaW1ncyIsImNhdGVnb3JpZXMiLCJpbmRleCIsImxvYWRpbmciLCJkaXNhYmxlZCIsIm1ldGhvZHMiLCJnb0JhY2siLCJjb25zb2xlIiwibG9nIiwic3dpdGNoVGFiIiwidXJsIiwiYmluZFBpY2tlckNoYW5nZSIsImUiLCJkZXRhaWwiLCJ2YWx1ZSIsImhhbmRsZVVwbG9hZCIsInNlbGYiLCJjaG9vc2VJbWFnZSIsInRoZW4iLCJyZXMiLCJ0ZW1wRmlsZVBhdGhzIiwiJGFwcGx5IiwiaGFuZGxlQ2FuY2VsIiwic3BsaWNlIiwiY3VycmVudFRhcmdldCIsImRhdGFzZXQiLCJiaW5kRm9ybVN1Ym1pdCIsImpmVG9rZW4iLCJuaWNrTmFtZSIsInVwbG9hZEltYWdlcyIsInRpdGxlIiwidGV4dCIsImNvbnRlbnQiLCJjYXRlZ29yeUlkIiwiaWQiLCJib2FyZFB1Ymxpc2giLCJ0b2tlbiIsImNyZWF0b3IiLCJwaWNfdXJscyIsIm1hcCIsImNhdGVnb3J5X2lkIiwidXNlckRhdGEiLCJjYXRlZ29yeUxpc3QiLCJyZXN1bHRzIiwicmVMYXVuY2giLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7Ozs7QUFDQTs7QUFDQTs7SUFBWUEsRzs7Ozs7O0lBTVNDLE8sV0FMcEIsd0JBQVE7QUFDUEMsTUFETyxnQkFDRkMsS0FERSxFQUNLO0FBQ1YsV0FBT0EsTUFBTUMsTUFBTixDQUFhRixJQUFwQjtBQUNEO0FBSE0sQ0FBUixDOzs7Ozs7Ozs7Ozs7Ozs4TUFNQ0csTSxHQUFTO0FBQ1BDLDhCQUF3QjtBQURqQixLLFFBSVRDLEksR0FBTztBQUNMQyxZQUFNLEVBREQ7QUFFTEMsa0JBQVksRUFGUDtBQUdMQyxhQUFPLENBSEY7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QURPLFNBQWQ7QUFHRDtBQUNGOzs7RUEzQmtDLGVBQUttQyxJO2tCQUFyQnBELE8iLCJmaWxlIjoicHVibGlzaC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5pbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xyXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAnd2VweS1yZWR1eCdcclxuaW1wb3J0ICogYXMgYXBpIGZyb20gJy4uL2FwaXMvYm9hcmQnXHJcbkBjb25uZWN0KHtcclxuICB1c2VyKHN0YXRlKSB7XHJcbiAgICByZXR1cm4gc3RhdGUuY29tbW9uLnVzZXJcclxuICB9XHJcbn0pXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFB1Ymxpc2ggZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xyXG4gIGNvbmZpZyA9IHtcclxuICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICflj5HluIPmtojmga8nXHJcbiAgfVxyXG5cclxuICBkYXRhID0ge1xyXG4gICAgaW1nczogW10sXHJcbiAgICBjYXRlZ29yaWVzOiBbXSxcclxuICAgIGluZGV4OiAwLFxyXG4gICAgbG9hZGluZzogZmFsc2UsXHJcbiAgICBkaXNhYmxlZDogZmFsc2VcclxuICB9XHJcblxyXG4gIG9uTG9hZCAoKSB7XHJcbiAgICBsZXQgc2VsZiA9IHRoaXNcclxuICAgIHNlbGYuaW1ncyA9IFtdXHJcbiAgICBpZiAodGhpcy51c2VyLnVzZXJEYXRhKSB7XHJcbiAgICAgIGFwaS5jYXRlZ29yeUxpc3QoKS50aGVuKHJlc3VsdHMgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdyZXN1bHRzJywgcmVzdWx0cylcclxuICAgICAgICBzZWxmLmNhdGVnb3JpZXMgPSByZXN1bHRzXHJcbiAgICAgICAgc2VsZi4kYXBwbHkoKVxyXG4gICAgICB9KVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgd2VweS5yZUxhdW5jaCh7XHJcbiAgICAgICAgdXJsOiAnL3BhZ2VzL3JlZ2lzdGVyJ1xyXG4gICAgICB9KVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbWV0aG9kcyA9IHtcclxuICAgIGdvQmFjayAoKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKCfmiafooYzkuoYnKVxyXG4gICAgICB3ZXB5LnN3aXRjaFRhYih7XHJcbiAgICAgICAgdXJsOiBgYm9hcmRzYFxyXG4gICAgICB9KVxyXG4gICAgfSxcclxuICAgIGJpbmRQaWNrZXJDaGFuZ2UgKGUpIHtcclxuICAgICAgdGhpcy5pbmRleCA9IGUuZGV0YWlsLnZhbHVlXHJcbiAgICB9LFxyXG4gICAgaGFuZGxlVXBsb2FkICgpIHtcclxuICAgICAgbGV0IHNlbGYgPSB0aGlzXHJcbiAgICAgIHdlcHkuY2hvb3NlSW1hZ2UoKS50aGVuKHJlcyA9PiB7XHJcbiAgICAgICAgc2VsZi5pbWdzID0gcmVzLnRlbXBGaWxlUGF0aHNcclxuICAgICAgICBzZWxmLiRhcHBseSgpXHJcbiAgICAgIH0pXHJcbiAgICB9LFxyXG4gICAgaGFuZGxlQ2FuY2VsIChlKSB7XHJcbiAgICAgIHRoaXMuaW1ncy5zcGxpY2UoZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQuaW5kZXgsIDEpXHJcbiAgICB9LFxyXG4gICAgYXN5bmMgYmluZEZvcm1TdWJtaXQgKGUpIHtcclxuICAgICAgY29uc29sZS5sb2coJ+eCueWHu+S6huWPkeW4gycpXHJcbiAgICAgIGNvbnN0IHsgamZUb2tlbiwgbmlja05hbWUgfSA9IHRoaXMudXNlclxyXG4gICAgICBjb25zdCBkYXRhID0gYXdhaXQgYXBpLnVwbG9hZEltYWdlcyh0aGlzLmltZ3MsIGpmVG9rZW4pXHJcbiAgICAgIGNvbnNvbGUubG9nKGRhdGEpXHJcblxyXG4gICAgICBjb25zdCB0aXRsZSA9IGUuZGV0YWlsLnZhbHVlLnRpdGxlXHJcbiAgICAgIGNvbnN0IHRleHQgPSBlLmRldGFpbC52YWx1ZS5jb250ZW50XHJcbiAgICAgIGNvbnN0IGNhdGVnb3J5SWQgPSB0aGlzLmNhdGVnb3JpZXNbdGhpcy5pbmRleF0uaWRcclxuICAgICAgY29uc29sZS5sb2coJ2RhdGEnLCBkYXRhKVxyXG4gICAgICB0aGlzLmxvYWRpbmcgPSB0cnVlXHJcbiAgICAgIHRoaXMuZGlzYWJsZWQgPSB0cnVlXHJcbiAgICAgIGF3YWl0IGFwaS5ib2FyZFB1Ymxpc2goe1xyXG4gICAgICAgIHRpdGxlLFxyXG4gICAgICAgIHRleHQsXHJcbiAgICAgICAgdG9rZW46IGpmVG9rZW4sXHJcbiAgICAgICAgY3JlYXRvcjogbmlja05hbWUsXHJcbiAgICAgICAgcGljX3VybHM6IGRhdGEubWFwKCh7dXJsfSkgPT4gdXJsKSxcclxuICAgICAgICBjYXRlZ29yeV9pZDogY2F0ZWdvcnlJZFxyXG4gICAgICB9KVxyXG4gICAgICB0aGlzLmltZ3MgPSBbXVxyXG4gICAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZVxyXG4gICAgICB0aGlzLmRpc2FibGVkID0gZmFsc2VcclxuICAgICAgd2VweS5zd2l0Y2hUYWIoe1xyXG4gICAgICAgIHVybDogYGJvYXJkcz9jYXRlZ29yeUlkPSR7Y2F0ZWdvcnlJZH1gXHJcbiAgICAgIH0pXHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ==