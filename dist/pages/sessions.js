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

var _dec, _class;

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _wepyRedux = require('./../npm/wepy-redux/lib/index.js');

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

var Sessions = (_dec = (0, _wepyRedux.connect)({
  user: function user(state) {
    return state.common.user;
  },
  nim: function nim(state) {
    return state.common.nim;
  }
}), _dec(_class = function (_wepy$page) {
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
          url: 'pages/chat?id=1&nickname=wepyj'
        });
      }
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  return Sessions;
}(_wepy2.default.page)) || _class);

Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Sessions , 'pages/sessions'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlc3Npb25zLmpzIl0sIm5hbWVzIjpbImdldEluZGV4IiwiY29tcG9zZSIsInByb3AiLCJCVVRUT05TX1dJRFRIIiwiTEFTVF9XSURUSCIsIlNlc3Npb25zIiwidXNlciIsInN0YXRlIiwiY29tbW9uIiwibmltIiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsImRhdGEiLCJsaXN0IiwiZnJvbSIsImF2YXRhciIsIm1zZyIsIm5hdnMiLCJjdXJyZW50TmF2IiwibWV0aG9kcyIsImhhbmRsZVRvdWNoU3RhcnQiLCJldnQiLCJpc09uZVBvaW50VG91Y2giLCJzdGFydFgiLCJnZXRDbGllbnRYIiwiaGFuZGxlVG91Y2hNb3ZlIiwiY3VyclgiLCJkaXN0WCIsImluZGV4Iiwid2lkdGgiLCJjb25kIiwiYWx3YXlzIiwiVCIsInN0eWxlIiwiaGFuZGxlVG91Y2hFbmQiLCJzaG93RGVsZXRlTW9kYWwiLCJzaG93TW9kYWwiLCJ0aXRsZSIsImNvbnRlbnQiLCJzdWNjZXNzIiwiY29uc29sZSIsImxvZyIsInJlcyIsInRvQ2hhdCIsIm5hdmlnYXRlVG8iLCJ1cmwiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7Ozs7QUFDQTs7QUFDQTs7OztBQUNBOzs7Ozs7QUFFQTs7OztBQUlBLElBQU1BLFdBQVcsZ0JBQUVDLE9BQUYsQ0FDZixnQkFBRUMsSUFBRixDQUFPLE9BQVAsQ0FEZSxFQUVmLGdCQUFFQSxJQUFGLENBQU8sU0FBUCxDQUZlLEVBR2YsZ0JBQUVBLElBQUYsQ0FBTyxlQUFQLENBSGUsQ0FBakI7O0FBTUE7QUFDQSxJQUFNQyxnQkFBZ0IsR0FBdEI7QUFDQTtBQUNBLElBQU1DLGFBQWEsR0FBbkI7O0lBVXFCQyxRLFdBUnBCLHdCQUFRO0FBQ1BDLE1BRE8sZ0JBQ0ZDLEtBREUsRUFDSztBQUNWLFdBQU9BLE1BQU1DLE1BQU4sQ0FBYUYsSUFBcEI7QUFDRCxHQUhNO0FBSVBHLEtBSk8sZUFJSEYsS0FK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a0RSQyxZQWxEUSxvQkFrREM7QUFDUCx1QkFBS0MsVUFBTCxDQUFnQjtBQUNkQyxlQUFLO0FBRFMsU0FBaEI7QUFHRDtBQXRETyxLOzs7O0VBM0IwQixlQUFLQyxJO2tCQUF0QnpDLFEiLCJmaWxlIjoic2Vzc2lvbnMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAnd2VweS1yZWR1eCdcbmltcG9ydCBSIGZyb20gJy4uL2xpYnMvcmFtZGEnXG5pbXBvcnQgdG91Y2ggZnJvbSAnLi4vdXRpbHMvdG91Y2gnXG5cbi8qKlxuICog6I635b6X5YiX6KGoIGluZGV4XG4gKiBAcGFyYW0gZXZ0IEV2ZW50XG4gKi9cbmNvbnN0IGdldEluZGV4ID0gUi5jb21wb3NlKFxuICBSLnByb3AoJ2luZGV4JyksXG4gIFIucHJvcCgnZGF0YXNldCcpLFxuICBSLnByb3AoJ2N1cnJlbnRUYXJnZXQnKVxuKVxuXG4vLyDmiYDmnInpmpDol4/mjInpkq7nmoTlrr3luqZcbmNvbnN0IEJVVFRPTlNfV0lEVEggPSAyMDBcbi8vIOacgOWQjuS4gOS4qumakOiXj+aMiemSrueahOWuveW6plxuY29uc3QgTEFTVF9XSURUSCA9IDIwMFxuXG5AY29ubmVjdCh7XG4gIHVzZXIoc3RhdGUpIHtcbiAgICByZXR1cm4gc3RhdGUuY29tbW9uLnVzZXJcbiAgfSxcbiAgbmltKHN0YXRlKSB7XG4gICAgcmV0dXJuIHN0YXRlLmNvbW1vbi5uaW1cbiAgfVxufSlcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNlc3Npb25zIGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgY29uZmlnID0ge1xuICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICfmtojmga8nXG4gIH1cblxuICBkYXRhID0ge1xuICAgIGxpc3Q6IFtcbiAgICAgIHtcbiAgICAgICAgZnJvbTogJ+iAgeW8oCcsXG4gICAgICAgIGF2YXRhcjogJ2h0dHBzOi8vYXZhdGFyczEuZ2l0aHVidXNlcmNvbnRlbnQuY29tL3UvODMzODQzNj92PTMmdT02ZGE1YmM4ZDBmZWE4NzUzMTJjODhiOWU5Nzk3MjZiZGVhZmNkNDFhJnM9NDAwJyxcbiAgICAgICAgbXNnOiAn5bmy5Zib5ZGi77yfJ1xuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgZnJvbTogJ+iAgei1tScsXG4gICAgICAgIGF2YXRhcjogJ2h0dHBzOi8vYXZhdGFyczEuZ2l0aHVidXNlcmNvbnRlbnQuY29tL3UvODMzODQzNj92PTMmdT02ZGE1YmM4ZDBmZWE4NzUzMTJjODhiOWU5Nzk3MjZiZGVhZmNkNDFhJnM9NDAwJyxcbiAgICAgICAgbXNnOiAn5bmy5Zib5ZGi77yfJ1xuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgZnJvbTogJ+iAgeS6jicsXG4gICAgICAgIGF2YXRhcjogJ2h0dHBzOi8vYXZhdGFyczEuZ2l0aHVidXNlcmNvbnRlbnQuY29tL3UvODMzODQzNj92PTMmdT02ZGE1YmM4ZDBmZWE4NzUzMTJjODhiOWU5Nzk3MjZiZGVhZmNkNDFhJnM9NDAwJyxcbiAgICAgICAgbXNnOiAn5bmy5Zib5ZGi77yfJ1xuICAgICAgfVxuICAgIF0sXG4gICAgbmF2czogWyflpb3lj4vmtojmga8nLCAn57O757uf5raI5oGvJ10sXG4gICAgY3VycmVudE5hdjogMFxuICB9XG5cbiAgbWV0aG9kcyA9IHtcbiAgICBoYW5kbGVUb3VjaFN0YXJ0KGV2dCkge1xuICAgICAgLy8g6Kem5pG45p2h55uu5pe277yM6K6w5b2V6Kem5pG454K55L2N572uXG4gICAgICB0b3VjaC5pc09uZVBvaW50VG91Y2goZmFsc2UpKGV2dCkgJiYgKHRoaXMuc3RhcnRYID0gdG91Y2guZ2V0Q2xpZW50WChmYWxzZSkoZXZ0KSlcbiAgICB9LFxuICAgIGhhbmRsZVRvdWNoTW92ZShldnQpIHtcbiAgICAgIGlmICh0b3VjaC5pc09uZVBvaW50VG91Y2goZXZ0KSkge1xuICAgICAgICBjb25zdCB7XG4gICAgICAgICAgc3RhcnRYLFxuICAgICAgICAgIGxpc3RcbiAgICAgICAgfSA9IHRoaXNcbiAgICAgICAgY29uc3QgY3VyclggPSB0b3VjaC5nZXRDbGllbnRYKGZhbHNlKShldnQpXG4gICAgICAgIGNvbnN0IGRpc3RYID0gc3RhcnRYIC0gY3VyclhcbiAgICAgICAgLy8g6I635b6X5omL5oyH6Kem5pG455qE5p2h55uu77yM5Yi35paw5qC3XG4gICAgICAgIGNvbnN0IGluZGV4ID0gZ2V0SW5kZXgoZXZ0KVxuICAgICAgICBjb25zdCB3aWR0aCA9IFIuY29uZChbXG4gICAgICAgICAgW2Rpc3RYID0+IGRpc3RYIDw9IDAsIFIuYWx3YXlzKDApXSxcbiAgICAgICAgICBbUi5ULCBkaXN0WCA9PiBkaXN0WCA+PSBMQVNUX1dJRFRIID8gLUJVVFRPTlNfV0lEVEggOiAtZGlzdFhdXG4gICAgICAgIF0pKGRpc3RYKVxuICAgICAgICBsaXN0W2luZGV4XS5zdHlsZSA9IGBsZWZ0OiR7d2lkdGh9cnB4YFxuICAgICAgICB0aGlzLmxpc3QgPSBsaXN0XG4gICAgICB9XG4gICAgfSxcbiAgICBoYW5kbGVUb3VjaEVuZChldnQpIHtcbiAgICAgIGlmICh0b3VjaC5pc09uZVBvaW50VG91Y2godHJ1ZSkoZXZ0KSkge1xuICAgICAgICBjb25zdCB7XG4gICAgICAgICAgc3RhcnRYLFxuICAgICAgICAgIGxpc3RcbiAgICAgICAgfSA9IHRoaXNcbiAgICAgICAgY29uc3QgY3VyclggPSB0b3VjaC5nZXRDbGllbnRYKHRydWUpKGV2dClcbiAgICAgICAgY29uc3QgZGlzdFggPSBzdGFydFggLSBjdXJyWFxuICAgICAgICBjb25zdCBpbmRleCA9IGdldEluZGV4KGV2dClcbiAgICAgICAgY29uc3Qgd2lkdGggPSBkaXN0WCA+IExBU1RfV0lEVEggLyAyID8gLUJVVFRPTlNfV0lEVEggOiAwXG4gICAgICAgIGxpc3RbaW5kZXhdLnN0eWxlID0gYGxlZnQ6JHt3aWR0aH1ycHhgXG4gICAgICAgIHRoaXMubGlzdCA9IGxpc3RcbiAgICAgIH1cbiAgICB9LFxuICAgIHNob3dEZWxldGVNb2RhbChldnQpIHtcbiAgICAgIC8vIOWIoOmZpOa2iOaBr+atpemqpFxuICAgICAgLy8gMS4g5pi+56S65Yig6Zmk56Gu6K6kXG4gICAgICAvLyAyLiDov5vooYzliKDpmaRcbiAgICAgIC8vIDMuIOmHjeaWsOa4suafk+WIl+ihqFxuICAgICAgd2VweS5zaG93TW9kYWwoe1xuICAgICAgICB0aXRsZTogJ+itpuWRiicsXG4gICAgICAgIGNvbnRlbnQ6ICfnoa7orqTliKDpmaTor6Xmtojmga/vvJ8nLFxuICAgICAgICBzdWNjZXNzOiByZXMgPT4ge1xuICAgICAgICAgIGNvbnNvbGUubG9nKHJlcylcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9LFxuICAgIHRvQ2hhdCgpIHtcbiAgICAgIHdlcHkubmF2aWdhdGVUbyh7XG4gICAgICAgIHVybDogJ3BhZ2VzL2NoYXQ/aWQ9MSZuaWNrbmFtZT13ZXB5aidcbiAgICAgIH0pXG4gICAgfVxuICB9XG59XG4iXX0=