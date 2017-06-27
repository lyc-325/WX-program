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
        console.log('start', _touch2.default.getClientX(false)(evt));
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlc3Npb25zLmpzIl0sIm5hbWVzIjpbImdldEluZGV4IiwiY29tcG9zZSIsInByb3AiLCJCVVRUT05TX1dJRFRIIiwiTEFTVF9XSURUSCIsIlNlc3Npb25zIiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsImRhdGEiLCJsaXN0IiwiZnJvbSIsImF2YXRhciIsIm1zZyIsIm5hdnMiLCJjdXJyZW50TmF2IiwibWV0aG9kcyIsImhhbmRsZVRvdWNoU3RhcnQiLCJldnQiLCJjb25zb2xlIiwibG9nIiwiZ2V0Q2xpZW50WCIsImlzT25lUG9pbnRUb3VjaCIsInN0YXJ0WCIsImhhbmRsZVRvdWNoTW92ZSIsImN1cnJYIiwiZGlzdFgiLCJpbmRleCIsIndpZHRoIiwiY29uZCIsImFsd2F5cyIsIlQiLCJzdHlsZSIsImhhbmRsZVRvdWNoRW5kIiwic2hvd0RlbGV0ZU1vZGFsIiwic2hvd01vZGFsIiwidGl0bGUiLCJjb250ZW50Iiwic3VjY2VzcyIsInJlcyIsInRvQ2hhdCIsIm5hdmlnYXRlVG8iLCJ1cmwiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7O0FBRUE7Ozs7QUFJQSxJQUFNQSxXQUFXLGdCQUFFQyxPQUFGLENBQ2YsZ0JBQUVDLElBQUYsQ0FBTyxPQUFQLENBRGUsRUFFZixnQkFBRUEsSUFBRixDQUFPLFNBQVAsQ0FGZSxFQUdmLGdCQUFFQSxJQUFGLENBQU8sZUFBUCxDQUhlLENBQWpCOztBQU1BO0FBQ0EsSUFBTUMsZ0JBQWdCLEdBQXRCO0FBQ0E7QUFDQSxJQUFNQyxhQUFhLEdBQW5COztJQUVxQkMsUTs7Ozs7Ozs7Ozs7Ozs7Z05BQ25CQyxNLEdBQVM7QUFDUEMsOEJBQXdCO0FBRGpCLEssUUFJVEMsSSxHQUFPO0FBQ0xDLFlBQU0sQ0FDSjtBQUNFQyxjQUFNLElBRFI7QUFFRUMsZ0JBQVEsdUdBRlY7QUFHRUMsYUFBSztBQUhQLE9BREksRUFNSjtBQUNF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c2Vzc2lvbnMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG5pbXBvcnQgUiBmcm9tICcuLi9saWJzL3JhbWRhJ1xuaW1wb3J0IHRvdWNoIGZyb20gJy4uL3V0aWxzL3RvdWNoJ1xuXG4vKipcbiAqIOiOt+W+l+WIl+ihqCBpbmRleFxuICogQHBhcmFtIGV2dCBFdmVudFxuICovXG5jb25zdCBnZXRJbmRleCA9IFIuY29tcG9zZShcbiAgUi5wcm9wKCdpbmRleCcpLFxuICBSLnByb3AoJ2RhdGFzZXQnKSxcbiAgUi5wcm9wKCdjdXJyZW50VGFyZ2V0JylcbilcblxuLy8g5omA5pyJ6ZqQ6JeP5oyJ6ZKu55qE5a695bqmXG5jb25zdCBCVVRUT05TX1dJRFRIID0gMjAwXG4vLyDmnIDlkI7kuIDkuKrpmpDol4/mjInpkq7nmoTlrr3luqZcbmNvbnN0IExBU1RfV0lEVEggPSAyMDBcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2Vzc2lvbnMgZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICBjb25maWcgPSB7XG4gICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+a2iOaBrydcbiAgfVxuXG4gIGRhdGEgPSB7XG4gICAgbGlzdDogW1xuICAgICAge1xuICAgICAgICBmcm9tOiAn6ICB5bygJyxcbiAgICAgICAgYXZhdGFyOiAnaHR0cHM6Ly9hdmF0YXJzMS5naXRodWJ1c2VyY29udGVudC5jb20vdS84MzM4NDM2P3Y9MyZ1PTZkYTViYzhkMGZlYTg3NTMxMmM4OGI5ZTk3OTcyNmJkZWFmY2Q0MWEmcz00MDAnLFxuICAgICAgICBtc2c6ICflubLlmJvlkaLvvJ8nXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBmcm9tOiAn6ICB6LW1JyxcbiAgICAgICAgYXZhdGFyOiAnaHR0cHM6Ly9hdmF0YXJzMS5naXRodWJ1c2VyY29udGVudC5jb20vdS84MzM4NDM2P3Y9MyZ1PTZkYTViYzhkMGZlYTg3NTMxMmM4OGI5ZTk3OTcyNmJkZWFmY2Q0MWEmcz00MDAnLFxuICAgICAgICBtc2c6ICflubLlmJvlkaLvvJ8nXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBmcm9tOiAn6ICB5LqOJyxcbiAgICAgICAgYXZhdGFyOiAnaHR0cHM6Ly9hdmF0YXJzMS5naXRodWJ1c2VyY29udGVudC5jb20vdS84MzM4NDM2P3Y9MyZ1PTZkYTViYzhkMGZlYTg3NTMxMmM4OGI5ZTk3OTcyNmJkZWFmY2Q0MWEmcz00MDAnLFxuICAgICAgICBtc2c6ICflubLlmJvlkaLvvJ8nXG4gICAgICB9XG4gICAgXSxcbiAgICBuYXZzOiBbJ+WlveWPi+a2iOaBrycsICfns7vnu5/mtojmga8nXSxcbiAgICBjdXJyZW50TmF2OiAwXG4gIH1cblxuICBtZXRob2RzID0ge1xuICAgIGhhbmRsZVRvdWNoU3RhcnQoZXZ0KSB7XG4gICAgICBjb25zb2xlLmxvZygnc3RhcnQnLCB0b3VjaC5nZXRDbGllbnRYKGZhbHNlKShldnQpKVxuICAgICAgLy8g6Kem5pG45p2h55uu5pe277yM6K6w5b2V6Kem5pG454K55L2N572uXG4gICAgICB0b3VjaC5pc09uZVBvaW50VG91Y2goZmFsc2UpKGV2dCkgJiYgKHRoaXMuc3RhcnRYID0gdG91Y2guZ2V0Q2xpZW50WChmYWxzZSkoZXZ0KSlcbiAgICB9LFxuICAgIGhhbmRsZVRvdWNoTW92ZShldnQpIHtcbiAgICAgIGlmICh0b3VjaC5pc09uZVBvaW50VG91Y2goZXZ0KSkge1xuICAgICAgICBjb25zdCB7XG4gICAgICAgICAgc3RhcnRYLFxuICAgICAgICAgIGxpc3RcbiAgICAgICAgfSA9IHRoaXNcbiAgICAgICAgY29uc3QgY3VyclggPSB0b3VjaC5nZXRDbGllbnRYKGZhbHNlKShldnQpXG4gICAgICAgIGNvbnN0IGRpc3RYID0gc3RhcnRYIC0gY3VyclhcbiAgICAgICAgLy8g6I635b6X5omL5oyH6Kem5pG455qE5p2h55uu77yM5Yi35paw5qC3XG4gICAgICAgIGNvbnN0IGluZGV4ID0gZ2V0SW5kZXgoZXZ0KVxuICAgICAgICBjb25zdCB3aWR0aCA9IFIuY29uZChbXG4gICAgICAgICAgW2Rpc3RYID0+IGRpc3RYIDw9IDAsIFIuYWx3YXlzKDApXSxcbiAgICAgICAgICBbUi5ULCBkaXN0WCA9PiBkaXN0WCA+PSBMQVNUX1dJRFRIID8gLUJVVFRPTlNfV0lEVEggOiAtZGlzdFhdXG4gICAgICAgIF0pKGRpc3RYKVxuICAgICAgICBsaXN0W2luZGV4XS5zdHlsZSA9IGBsZWZ0OiR7d2lkdGh9cnB4YFxuICAgICAgICB0aGlzLmxpc3QgPSBsaXN0XG4gICAgICB9XG4gICAgfSxcbiAgICBoYW5kbGVUb3VjaEVuZChldnQpIHtcbiAgICAgIGlmICh0b3VjaC5pc09uZVBvaW50VG91Y2godHJ1ZSkoZXZ0KSkge1xuICAgICAgICBjb25zdCB7XG4gICAgICAgICAgc3RhcnRYLFxuICAgICAgICAgIGxpc3RcbiAgICAgICAgfSA9IHRoaXNcbiAgICAgICAgY29uc3QgY3VyclggPSB0b3VjaC5nZXRDbGllbnRYKHRydWUpKGV2dClcbiAgICAgICAgY29uc3QgZGlzdFggPSBzdGFydFggLSBjdXJyWFxuICAgICAgICBjb25zdCBpbmRleCA9IGdldEluZGV4KGV2dClcbiAgICAgICAgY29uc3Qgd2lkdGggPSBkaXN0WCA+IExBU1RfV0lEVEggLyAyID8gLUJVVFRPTlNfV0lEVEggOiAwXG4gICAgICAgIGxpc3RbaW5kZXhdLnN0eWxlID0gYGxlZnQ6JHt3aWR0aH1ycHhgXG4gICAgICAgIHRoaXMubGlzdCA9IGxpc3RcbiAgICAgIH1cbiAgICB9LFxuICAgIHNob3dEZWxldGVNb2RhbChldnQpIHtcbiAgICAgIC8vIOWIoOmZpOa2iOaBr+atpemqpFxuICAgICAgLy8gMS4g5pi+56S65Yig6Zmk56Gu6K6kXG4gICAgICAvLyAyLiDov5vooYzliKDpmaRcbiAgICAgIC8vIDMuIOmHjeaWsOa4suafk+WIl+ihqFxuICAgICAgd2VweS5zaG93TW9kYWwoe1xuICAgICAgICB0aXRsZTogJ+itpuWRiicsXG4gICAgICAgIGNvbnRlbnQ6ICfnoa7orqTliKDpmaTor6Xmtojmga/vvJ8nLFxuICAgICAgICBzdWNjZXNzOiByZXMgPT4ge1xuICAgICAgICAgIGNvbnNvbGUubG9nKHJlcylcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9LFxuICAgIHRvQ2hhdCgpIHtcbiAgICAgIHdlcHkubmF2aWdhdGVUbyh7XG4gICAgICAgIHVybDogJy4uL2NoYXQvY2hhdD9pZD0xJm5pY2tuYW1lPXdlcHlqJ1xuICAgICAgfSlcbiAgICB9XG4gIH1cbn1cbiJdfQ==