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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInB1Ymxpc2guanMiXSwibmFtZXMiOlsiYXBpIiwiUHVibGlzaCIsInVzZXIiLCJzdGF0ZSIsImNvbW1vbiIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCJkYXRhIiwiaW1ncyIsImNhdGVnb3JpZXMiLCJpbmRleCIsImxvYWRpbmciLCJkaXNhYmxlZCIsIm1ldGhvZHMiLCJnb0JhY2siLCJjb25zb2xlIiwibG9nIiwic3dpdGNoVGFiIiwidXJsIiwiYmluZFBpY2tlckNoYW5nZSIsImUiLCJkZXRhaWwiLCJ2YWx1ZSIsImhhbmRsZVVwbG9hZCIsInNlbGYiLCJjaG9vc2VJbWFnZSIsInRoZW4iLCJyZXMiLCJ0ZW1wRmlsZVBhdGhzIiwiJGFwcGx5IiwiaGFuZGxlQ2FuY2VsIiwic3BsaWNlIiwiY3VycmVudFRhcmdldCIsImRhdGFzZXQiLCJiaW5kRm9ybVN1Ym1pdCIsImpmVG9rZW4iLCJuaWNrTmFtZSIsInVwbG9hZEltYWdlcyIsInRpdGxlIiwidGV4dCIsImNvbnRlbnQiLCJjYXRlZ29yeUlkIiwiaWQiLCJib2FyZFB1Ymxpc2giLCJ0b2tlbiIsImNyZWF0b3IiLCJwaWNfdXJscyIsIm1hcCIsImNhdGVnb3J5X2lkIiwidXNlckRhdGEiLCJjYXRlZ29yeUxpc3QiLCJyZXN1bHRzIiwicmVMYXVuY2giLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7Ozs7QUFDQTs7QUFDQTs7SUFBWUEsRzs7Ozs7O0lBTVNDLE8sV0FMcEIsd0JBQVE7QUFDUEMsTUFETyxnQkFDRkMsS0FERSxFQUNLO0FBQ1YsV0FBT0EsTUFBTUMsTUFBTixDQUFhRixJQUFwQjtBQUNEO0FBSE0sQ0FBUixDOzs7Ozs7Ozs7Ozs7Ozs4TUFNQ0csTSxHQUFTO0FBQ1BDLDhCQUF3QjtBQURqQixLLFFBSVRDLEksR0FBTztBQUNMQyxZQUFNLEVBREQ7QUFFTEMsa0JBQVksRUFGUDtBQUdMQyxhQUFPLENBSEY7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LGVBQUs7QUFETyxTQUFkO0FBR0Q7QUFDRjs7O0VBM0JrQyxlQUFLbUMsSTtrQkFBckJwRCxPIiwiZmlsZSI6InB1Ymxpc2guanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAnd2VweS1yZWR1eCdcbmltcG9ydCAqIGFzIGFwaSBmcm9tICcuLi9hcGlzL2JvYXJkJ1xuQGNvbm5lY3Qoe1xuICB1c2VyKHN0YXRlKSB7XG4gICAgcmV0dXJuIHN0YXRlLmNvbW1vbi51c2VyXG4gIH1cbn0pXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQdWJsaXNoIGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgY29uZmlnID0ge1xuICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICflj5HluIPmtojmga8nXG4gIH1cblxuICBkYXRhID0ge1xuICAgIGltZ3M6IFtdLFxuICAgIGNhdGVnb3JpZXM6IFtdLFxuICAgIGluZGV4OiAwLFxuICAgIGxvYWRpbmc6IGZhbHNlLFxuICAgIGRpc2FibGVkOiBmYWxzZVxuICB9XG5cbiAgb25Mb2FkICgpIHtcbiAgICBsZXQgc2VsZiA9IHRoaXNcbiAgICBzZWxmLmltZ3MgPSBbXVxuICAgIGlmICh0aGlzLnVzZXIudXNlckRhdGEpIHtcbiAgICAgIGFwaS5jYXRlZ29yeUxpc3QoKS50aGVuKHJlc3VsdHMgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZygncmVzdWx0cycsIHJlc3VsdHMpXG4gICAgICAgIHNlbGYuY2F0ZWdvcmllcyA9IHJlc3VsdHNcbiAgICAgICAgc2VsZi4kYXBwbHkoKVxuICAgICAgfSlcbiAgICB9IGVsc2Uge1xuICAgICAgd2VweS5yZUxhdW5jaCh7XG4gICAgICAgIHVybDogJy9wYWdlcy9yZWdpc3RlcidcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgbWV0aG9kcyA9IHtcbiAgICBnb0JhY2sgKCkge1xuICAgICAgY29uc29sZS5sb2coJ+aJp+ihjOS6hicpXG4gICAgICB3ZXB5LnN3aXRjaFRhYih7XG4gICAgICAgIHVybDogYGJvYXJkc2BcbiAgICAgIH0pXG4gICAgfSxcbiAgICBiaW5kUGlja2VyQ2hhbmdlIChlKSB7XG4gICAgICB0aGlzLmluZGV4ID0gZS5kZXRhaWwudmFsdWVcbiAgICB9LFxuICAgIGhhbmRsZVVwbG9hZCAoKSB7XG4gICAgICBsZXQgc2VsZiA9IHRoaXNcbiAgICAgIHdlcHkuY2hvb3NlSW1hZ2UoKS50aGVuKHJlcyA9PiB7XG4gICAgICAgIHNlbGYuaW1ncyA9IHJlcy50ZW1wRmlsZVBhdGhzXG4gICAgICAgIHNlbGYuJGFwcGx5KClcbiAgICAgIH0pXG4gICAgfSxcbiAgICBoYW5kbGVDYW5jZWwgKGUpIHtcbiAgICAgIHRoaXMuaW1ncy5zcGxpY2UoZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQuaW5kZXgsIDEpXG4gICAgfSxcbiAgICBhc3luYyBiaW5kRm9ybVN1Ym1pdCAoZSkge1xuICAgICAgY29uc29sZS5sb2coJ+eCueWHu+S6huWPkeW4gycpXG4gICAgICBjb25zdCB7IGpmVG9rZW4sIG5pY2tOYW1lIH0gPSB0aGlzLnVzZXJcbiAgICAgIGNvbnNvbGUubG9nKHRoaXMudXNlcilcbiAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBhcGkudXBsb2FkSW1hZ2VzKHRoaXMuaW1ncywgamZUb2tlbilcbiAgICAgIGNvbnN0IHRpdGxlID0gZS5kZXRhaWwudmFsdWUudGl0bGVcbiAgICAgIGNvbnN0IHRleHQgPSBlLmRldGFpbC52YWx1ZS5jb250ZW50XG4gICAgICBjb25zdCBjYXRlZ29yeUlkID0gdGhpcy5jYXRlZ29yaWVzW3RoaXMuaW5kZXhdLmlkXG4gICAgICBjb25zb2xlLmxvZygnZGF0YScsIGRhdGEpXG4gICAgICB0aGlzLmxvYWRpbmcgPSB0cnVlXG4gICAgICB0aGlzLmRpc2FibGVkID0gdHJ1ZVxuICAgICAgYXdhaXQgYXBpLmJvYXJkUHVibGlzaCh7XG4gICAgICAgIHRpdGxlLFxuICAgICAgICB0ZXh0LFxuICAgICAgICB0b2tlbjogamZUb2tlbixcbiAgICAgICAgY3JlYXRvcjogbmlja05hbWUsXG4gICAgICAgIHBpY191cmxzOiBkYXRhLm1hcCgoe3VybH0pID0+IHVybCksXG4gICAgICAgIGNhdGVnb3J5X2lkOiBjYXRlZ29yeUlkXG4gICAgICB9KVxuICAgICAgdGhpcy5pbWdzID0gW11cbiAgICAgIHRoaXMubG9hZGluZyA9IGZhbHNlXG4gICAgICB0aGlzLmRpc2FibGVkID0gZmFsc2VcbiAgICAgIHdlcHkuc3dpdGNoVGFiKHtcbiAgICAgICAgdXJsOiBgYm9hcmRzP2NhdGVnb3J5SWQ9JHtjYXRlZ29yeUlkfWBcbiAgICAgIH0pXG4gICAgfVxuICB9XG59XG4iXX0=