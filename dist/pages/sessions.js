'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


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

var _ramda = require('./../libs/ramda.js');

var _ramda2 = _interopRequireDefault(_ramda);

var _touch = require('./../utils/touch.js');

var _touch2 = _interopRequireDefault(_touch);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * 获得列表 index
 * @param evt Event
 */
var getIndex = _ramda2.default.compose(_ramda2.default.prop('index'), _ramda2.default.prop('dataset'), _ramda2.default.prop('currentTarget'));

// 所有隐藏按钮的宽度
var BUTTONS_WIDTH = 200;
// 最后一个隐藏按钮的宽度
var LAST_WIDTH = 200;

var Sessions = function (_wepy$page) {
  (0, _inherits3.default)(Sessions, _wepy$page);

  function Sessions() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, Sessions);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Sessions.__proto__ || (0, _getPrototypeOf2.default)(Sessions)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: '消息'
    }, _this.data = {
      list: [{
        from: '老张',
        avatar: 'https://avatars1.githubusercontent.com/u/8338436?v=3&u=6da5bc8d0fea875312c88b9e979726bdeafcd41a&s=400',
        msg: '干嘛呢？'
      }, {
        from: '老赵',
        avatar: 'https://avatars1.githubusercontent.com/u/8338436?v=3&u=6da5bc8d0fea875312c88b9e979726bdeafcd41a&s=400',
        msg: '干嘛呢？'
      }, {
        from: '老于',
        avatar: 'https://avatars1.githubusercontent.com/u/8338436?v=3&u=6da5bc8d0fea875312c88b9e979726bdeafcd41a&s=400',
        msg: '干嘛呢？'
      }],
      navs: ['好友消息', '系统消息'],
      currentNav: 0
    }, _this.methods = {
      handleTouchStart: function handleTouchStart(evt) {
        // 触摸条目时，记录触摸点位置
        _touch2.default.isOnePointTouch(false)(evt) && (this.startX = _touch2.default.getClientX(false)(evt));
      },
      handleTouchMove: function handleTouchMove(evt) {
        if (_touch2.default.isOnePointTouch(evt)) {
          var startX = this.startX,
              list = this.list;

          var currX = _touch2.default.getClientX(false)(evt);
          var distX = startX - currX;
          // 获得手指触摸的条目，刷新样
          var index = getIndex(evt);
          var width = _ramda2.default.cond([[function (distX) {
            return distX <= 0;
          }, _ramda2.default.always(0)], [_ramda2.default.T, function (distX) {
            return distX >= LAST_WIDTH ? -BUTTONS_WIDTH : -distX;
          }]])(distX);
          list[index].style = 'left:' + width + 'rpx';
          this.list = list;
        }
      },
      handleTouchEnd: function handleTouchEnd(evt) {
        if (_touch2.default.isOnePointTouch(true)(evt)) {
          var startX = this.startX,
              list = this.list;

          var currX = _touch2.default.getClientX(true)(evt);
          var distX = startX - currX;
          var index = getIndex(evt);
          var width = distX > LAST_WIDTH / 2 ? -BUTTONS_WIDTH : 0;
          list[index].style = 'left:' + width + 'rpx';
          this.list = list;
        }
      },
      showDeleteModal: function showDeleteModal(evt) {
        // 删除消息步骤
        // 1. 显示删除确认
        // 2. 进行删除
        // 3. 重新渲染列表
        _wepy2.default.showModal({
          title: '警告',
          content: '确认删除该消息？',
          success: function success(res) {
            console.log(res);
          }
        });
      },
      toChat: function toChat() {
        _wepy2.default.navigateTo({
          url: '../chat/chat?id=1&nickname=wepyj'
        });
      }
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  return Sessions;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Sessions , 'pages/sessions'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlc3Npb25zLmpzIl0sIm5hbWVzIjpbImdldEluZGV4IiwiY29tcG9zZSIsInByb3AiLCJCVVRUT05TX1dJRFRIIiwiTEFTVF9XSURUSCIsIlNlc3Npb25zIiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsImRhdGEiLCJsaXN0IiwiZnJvbSIsImF2YXRhciIsIm1zZyIsIm5hdnMiLCJjdXJyZW50TmF2IiwibWV0aG9kcyIsImhhbmRsZVRvdWNoU3RhcnQiLCJldnQiLCJpc09uZVBvaW50VG91Y2giLCJzdGFydFgiLCJnZXRDbGllbnRYIiwiaGFuZGxlVG91Y2hNb3ZlIiwiY3VyclgiLCJkaXN0WCIsImluZGV4Iiwid2lkdGgiLCJjb25kIiwiYWx3YXlzIiwiVCIsInN0eWxlIiwiaGFuZGxlVG91Y2hFbmQiLCJzaG93RGVsZXRlTW9kYWwiLCJzaG93TW9kYWwiLCJ0aXRsZSIsImNvbnRlbnQiLCJzdWNjZXNzIiwiY29uc29sZSIsImxvZyIsInJlcyIsInRvQ2hhdCIsIm5hdmlnYXRlVG8iLCJ1cmwiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7O0FBRUE7Ozs7QUFJQSxJQUFNQSxXQUFXLGdCQUFFQyxPQUFGLENBQ2YsZ0JBQUVDLElBQUYsQ0FBTyxPQUFQLENBRGUsRUFFZixnQkFBRUEsSUFBRixDQUFPLFNBQVAsQ0FGZSxFQUdmLGdCQUFFQSxJQUFGLENBQU8sZUFBUCxDQUhlLENBQWpCOztBQU1BO0FBQ0EsSUFBTUMsZ0JBQWdCLEdBQXRCO0FBQ0E7QUFDQSxJQUFNQyxhQUFhLEdBQW5COztJQUVxQkMsUTs7Ozs7Ozs7Ozs7Ozs7Z05BQ25CQyxNLEdBQVM7QUFDUEMsOEJBQXdCO0FBRGpCLEssUUFJVEMsSSxHQUFPO0FBQ0xDLFlBQU0sQ0FDSjtBQUNFQyxjQUFNLElBRFI7QUFFRUMsZ0JBQVEsdUdBRlY7QUFHRUMsYUFBSztBQUhQLE9BREksRUFNSjtBQUNFRixjQUFNLElBRFI7QUFFRUMsZ0JBQVEsdUdBRlY7QUFHRUMsYUFBSztBQUhQLE9BTkksRUFXSjtBQUNFRixjQUFNLElBRFI7QUFFRUMsZ0JBQVEsdUdBRlY7QUFHRUMsYUFBSztBQUhQLE9BWEksQ0FERDtBQWtCTEMsWUFBTSxDQUFDLE1BQUQsRUFBUyxNQUFULENBbEJEO0FBbUJMQyxrQkFBWTtBQW5CUCxLLFFBc0JQQyxPLEdBQVU7QUFDUkMsc0JBRFEsNEJBQ1NDLEdBRFQsRUFDYztBQUNwQjtBQUNBLHdCQUFNQyxlQUFOLENBQXNCLEtBQXRCLEVBQTZCRCxHQUE3QixNQUFzQyxLQUFLRSxNQUFMLEdBQWMsZ0JBQU1DLFVBQU4sQ0FBaUIsS0FBakIsRUFBd0JILEdBQXhCLENBQXBEO0FBQ0QsT0FKTztBQUtSSSxxQkFMUSwyQkFLUUosR0FMUixFQUthO0FBQ25CLFlBQUksZ0JBQU1DLGVBQU4sQ0FBc0JELEdBQXRCLENBQUosRUFBZ0M7QUFBQSxjQUU1QkUsTUFGNEIsR0FJMUIsSUFKMEIsQ0FFNUJBLE1BRjRCO0FBQUEsY0FHNUJWLElBSDRCLEdBSTFCLElBSjBCLENBRzVCQSxJQUg0Qjs7QUFLOUIsY0FBTWEsUUFBUSxnQkFBTUYsVUFBTixDQUFpQixLQUFqQixFQUF3QkgsR0FBeEIsQ0FBZDtBQUNBLGNBQU1NLFFBQVFKLFNBQVNHLEtBQXZCO0FBQ0E7QUFDQSxjQUFNRSxRQUFReEIsU0FBU2lCLEdBQVQsQ0FBZDtBQUNBLGNBQU1RLFFBQVEsZ0JBQUVDLElBQUYsQ0FBTyxDQUNuQixDQUFDO0FBQUEsbUJBQVNILFNBQVMsQ0FBbEI7QUFBQSxXQUFELEVBQXNCLGdCQUFFSSxNQUFGLENBQVMsQ0FBVCxDQUF0QixDQURtQixFQUVuQixDQUFDLGdCQUFFQyxDQUFILEVBQU07QUFBQSxtQkFBU0wsU0FBU25CLFVBQVQsR0FBc0IsQ0FBQ0QsYUFBdkIsR0FBdUMsQ0FBQ29CLEtBQWpEO0FBQUEsV0FBTixDQUZtQixDQUFQLEVBR1hBLEtBSFcsQ0FBZDtBQUlBZCxlQUFLZSxLQUFMLEVBQVlLLEtBQVosYUFBNEJKLEtBQTVCO0FBQ0EsZUFBS2hCLElBQUwsR0FBWUEsSUFBWjtBQUNEO0FBQ0YsT0F0Qk87QUF1QlJxQixvQkF2QlEsMEJBdUJPYixHQXZCUCxFQXVCWTtBQUNsQixZQUFJLGdCQUFNQyxlQUFOLENBQXNCLElBQXRCLEVBQTRCRCxHQUE1QixDQUFKLEVBQXNDO0FBQUEsY0FFbENFLE1BRmtDLEdBSWhDLElBSmdDLENBRWxDQSxNQUZrQztBQUFBLGNBR2xDVixJQUhrQyxHQUloQyxJQUpnQyxDQUdsQ0EsSUFIa0M7O0FBS3BDLGNBQU1hLFFBQVEsZ0JBQU1GLFVBQU4sQ0FBaUIsSUFBakIsRUFBdUJILEdBQXZCLENBQWQ7QUFDQSxjQUFNTSxRQUFRSixTQUFTRyxLQUF2QjtBQUNBLGNBQU1FLFFBQVF4QixTQUFTaUIsR0FBVCxDQUFkO0FBQ0EsY0FBTVEsUUFBUUYsUUFBUW5CLGFBQWEsQ0FBckIsR0FBeUIsQ0FBQ0QsYUFBMUIsR0FBMEMsQ0FBeEQ7QUFDQU0sZUFBS2UsS0FBTCxFQUFZSyxLQUFaLGFBQTRCSixLQUE1QjtBQUNBLGVBQUtoQixJQUFMLEdBQVlBLElBQVo7QUFDRDtBQUNGLE9BcENPO0FBcUNSc0IscUJBckNRLDJCQXFDUWQsR0FyQ1IsRUFxQ2E7QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBS2UsU0FBTCxDQUFlO0FBQ2JDLGlCQUFPLElBRE07QUFFYkMsbUJBQVMsVUFGSTtBQUdiQyxtQkFBUyxzQkFBTztBQUNkQyxvQkFBUUMsR0FBUixDQUFZQyxHQUFaO0FBQ0Q7QUFMWSxTQUFmO0FBT0QsT0FqRE87QUFrRFJDLFlBbERRLG9CQWtEQztBQUNQLHVCQUFLQyxVQUFMLENBQWdCO0FBQ2RDLGVBQUs7QUFEUyxTQUFoQjtBQUdEO0FBdERPLEs7Ozs7RUEzQjBCLGVBQUtDLEk7O2tCQUF0QnJDLFEiLCJmaWxlIjoic2Vzc2lvbnMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG5pbXBvcnQgUiBmcm9tICcuLi9saWJzL3JhbWRhJ1xuaW1wb3J0IHRvdWNoIGZyb20gJy4uL3V0aWxzL3RvdWNoJ1xuXG4vKipcbiAqIOiOt+W+l+WIl+ihqCBpbmRleFxuICogQHBhcmFtIGV2dCBFdmVudFxuICovXG5jb25zdCBnZXRJbmRleCA9IFIuY29tcG9zZShcbiAgUi5wcm9wKCdpbmRleCcpLFxuICBSLnByb3AoJ2RhdGFzZXQnKSxcbiAgUi5wcm9wKCdjdXJyZW50VGFyZ2V0JylcbilcblxuLy8g5omA5pyJ6ZqQ6JeP5oyJ6ZKu55qE5a695bqmXG5jb25zdCBCVVRUT05TX1dJRFRIID0gMjAwXG4vLyDmnIDlkI7kuIDkuKrpmpDol4/mjInpkq7nmoTlrr3luqZcbmNvbnN0IExBU1RfV0lEVEggPSAyMDBcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2Vzc2lvbnMgZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICBjb25maWcgPSB7XG4gICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+a2iOaBrydcbiAgfVxuXG4gIGRhdGEgPSB7XG4gICAgbGlzdDogW1xuICAgICAge1xuICAgICAgICBmcm9tOiAn6ICB5bygJyxcbiAgICAgICAgYXZhdGFyOiAnaHR0cHM6Ly9hdmF0YXJzMS5naXRodWJ1c2VyY29udGVudC5jb20vdS84MzM4NDM2P3Y9MyZ1PTZkYTViYzhkMGZlYTg3NTMxMmM4OGI5ZTk3OTcyNmJkZWFmY2Q0MWEmcz00MDAnLFxuICAgICAgICBtc2c6ICflubLlmJvlkaLvvJ8nXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBmcm9tOiAn6ICB6LW1JyxcbiAgICAgICAgYXZhdGFyOiAnaHR0cHM6Ly9hdmF0YXJzMS5naXRodWJ1c2VyY29udGVudC5jb20vdS84MzM4NDM2P3Y9MyZ1PTZkYTViYzhkMGZlYTg3NTMxMmM4OGI5ZTk3OTcyNmJkZWFmY2Q0MWEmcz00MDAnLFxuICAgICAgICBtc2c6ICflubLlmJvlkaLvvJ8nXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBmcm9tOiAn6ICB5LqOJyxcbiAgICAgICAgYXZhdGFyOiAnaHR0cHM6Ly9hdmF0YXJzMS5naXRodWJ1c2VyY29udGVudC5jb20vdS84MzM4NDM2P3Y9MyZ1PTZkYTViYzhkMGZlYTg3NTMxMmM4OGI5ZTk3OTcyNmJkZWFmY2Q0MWEmcz00MDAnLFxuICAgICAgICBtc2c6ICflubLlmJvlkaLvvJ8nXG4gICAgICB9XG4gICAgXSxcbiAgICBuYXZzOiBbJ+WlveWPi+a2iOaBrycsICfns7vnu5/mtojmga8nXSxcbiAgICBjdXJyZW50TmF2OiAwXG4gIH1cblxuICBtZXRob2RzID0ge1xuICAgIGhhbmRsZVRvdWNoU3RhcnQoZXZ0KSB7XG4gICAgICAvLyDop6bmkbjmnaHnm67ml7bvvIzorrDlvZXop6bmkbjngrnkvY3nva5cbiAgICAgIHRvdWNoLmlzT25lUG9pbnRUb3VjaChmYWxzZSkoZXZ0KSAmJiAodGhpcy5zdGFydFggPSB0b3VjaC5nZXRDbGllbnRYKGZhbHNlKShldnQpKVxuICAgIH0sXG4gICAgaGFuZGxlVG91Y2hNb3ZlKGV2dCkge1xuICAgICAgaWYgKHRvdWNoLmlzT25lUG9pbnRUb3VjaChldnQpKSB7XG4gICAgICAgIGNvbnN0IHtcbiAgICAgICAgICBzdGFydFgsXG4gICAgICAgICAgbGlzdFxuICAgICAgICB9ID0gdGhpc1xuICAgICAgICBjb25zdCBjdXJyWCA9IHRvdWNoLmdldENsaWVudFgoZmFsc2UpKGV2dClcbiAgICAgICAgY29uc3QgZGlzdFggPSBzdGFydFggLSBjdXJyWFxuICAgICAgICAvLyDojrflvpfmiYvmjIfop6bmkbjnmoTmnaHnm67vvIzliLfmlrDmoLdcbiAgICAgICAgY29uc3QgaW5kZXggPSBnZXRJbmRleChldnQpXG4gICAgICAgIGNvbnN0IHdpZHRoID0gUi5jb25kKFtcbiAgICAgICAgICBbZGlzdFggPT4gZGlzdFggPD0gMCwgUi5hbHdheXMoMCldLFxuICAgICAgICAgIFtSLlQsIGRpc3RYID0+IGRpc3RYID49IExBU1RfV0lEVEggPyAtQlVUVE9OU19XSURUSCA6IC1kaXN0WF1cbiAgICAgICAgXSkoZGlzdFgpXG4gICAgICAgIGxpc3RbaW5kZXhdLnN0eWxlID0gYGxlZnQ6JHt3aWR0aH1ycHhgXG4gICAgICAgIHRoaXMubGlzdCA9IGxpc3RcbiAgICAgIH1cbiAgICB9LFxuICAgIGhhbmRsZVRvdWNoRW5kKGV2dCkge1xuICAgICAgaWYgKHRvdWNoLmlzT25lUG9pbnRUb3VjaCh0cnVlKShldnQpKSB7XG4gICAgICAgIGNvbnN0IHtcbiAgICAgICAgICBzdGFydFgsXG4gICAgICAgICAgbGlzdFxuICAgICAgICB9ID0gdGhpc1xuICAgICAgICBjb25zdCBjdXJyWCA9IHRvdWNoLmdldENsaWVudFgodHJ1ZSkoZXZ0KVxuICAgICAgICBjb25zdCBkaXN0WCA9IHN0YXJ0WCAtIGN1cnJYXG4gICAgICAgIGNvbnN0IGluZGV4ID0gZ2V0SW5kZXgoZXZ0KVxuICAgICAgICBjb25zdCB3aWR0aCA9IGRpc3RYID4gTEFTVF9XSURUSCAvIDIgPyAtQlVUVE9OU19XSURUSCA6IDBcbiAgICAgICAgbGlzdFtpbmRleF0uc3R5bGUgPSBgbGVmdDoke3dpZHRofXJweGBcbiAgICAgICAgdGhpcy5saXN0ID0gbGlzdFxuICAgICAgfVxuICAgIH0sXG4gICAgc2hvd0RlbGV0ZU1vZGFsKGV2dCkge1xuICAgICAgLy8g5Yig6Zmk5raI5oGv5q2l6aqkXG4gICAgICAvLyAxLiDmmL7npLrliKDpmaTnoa7orqRcbiAgICAgIC8vIDIuIOi/m+ihjOWIoOmZpFxuICAgICAgLy8gMy4g6YeN5paw5riy5p+T5YiX6KGoXG4gICAgICB3ZXB5LnNob3dNb2RhbCh7XG4gICAgICAgIHRpdGxlOiAn6K2m5ZGKJyxcbiAgICAgICAgY29udGVudDogJ+ehruiupOWIoOmZpOivpea2iOaBr++8nycsXG4gICAgICAgIHN1Y2Nlc3M6IHJlcyA9PiB7XG4gICAgICAgICAgY29uc29sZS5sb2cocmVzKVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH0sXG4gICAgdG9DaGF0KCkge1xuICAgICAgd2VweS5uYXZpZ2F0ZVRvKHtcbiAgICAgICAgdXJsOiAnLi4vY2hhdC9jaGF0P2lkPTEmbmlja25hbWU9d2VweWonXG4gICAgICB9KVxuICAgIH1cbiAgfVxufVxuIl19