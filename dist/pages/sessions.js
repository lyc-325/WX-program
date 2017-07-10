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

var _log = require('./../utils/log.js');

var _log2 = _interopRequireDefault(_log);

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
  },
  sessions: function sessions(state) {
    return state.sessions.sessions;
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
              sessions = this.sessions;

          var currX = _touch2.default.getClientX(false)(evt);
          var distX = startX - currX;
          // 获得手指触摸的条目，刷新样
          var index = getIndex(evt);
          var width = _ramda2.default.cond([[function (distX) {
            return distX <= 0;
          }, _ramda2.default.always(0)], [_ramda2.default.T, function (distX) {
            return distX >= LAST_WIDTH ? -BUTTONS_WIDTH : -distX;
          }]])(distX);
          sessions[index].style = 'left:' + width + 'rpx';
          this.sessions = sessions;
        }
      },
      handleTouchEnd: function handleTouchEnd(evt) {
        if (_touch2.default.isOnePointTouch(true)(evt)) {
          var startX = this.startX,
              sessions = this.sessions;

          var currX = _touch2.default.getClientX(true)(evt);
          var distX = startX - currX;
          var index = getIndex(evt);
          var width = distX > LAST_WIDTH / 2 ? -BUTTONS_WIDTH : 0;
          sessions[index].style = 'left:' + width + 'rpx';
          this.sessions = sessions;
        }
      },
      showDeleteModal: function showDeleteModal(evt) {
        var _this2 = this;

        return (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee() {
          return _regenerator2.default.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  // 删除消息步骤
                  // 1. 显示删除确认
                  // 2. 进行删除
                  // 3. 重新渲染列表
                  try {
                    _wepy2.default.showModal({
                      title: '警告',
                      content: '确认删除该会话？',
                      success: function success(res) {
                        console.log(res);
                      }
                    });
                  } catch (e) {
                    _log2.default.error({
                      page: 'sessions',
                      opr: 'delete message',
                      info: e
                    });
                  }

                case 1:
                case 'end':
                  return _context.stop();
              }
            }
          }, _callee, _this2);
        }))();
      },
      toChat: function toChat(evt) {
        var index = getIndex(evt);
        var to = this.sessions[index].to;

        _wepy2.default.navigateTo({
          url: '/pages/chat?faccid=' + to
        });
      }
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  return Sessions;
}(_wepy2.default.page)) || _class);

Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Sessions , 'pages/sessions'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlc3Npb25zLmpzIl0sIm5hbWVzIjpbImdldEluZGV4IiwiY29tcG9zZSIsInByb3AiLCJCVVRUT05TX1dJRFRIIiwiTEFTVF9XSURUSCIsIlNlc3Npb25zIiwidXNlciIsInN0YXRlIiwiY29tbW9uIiwibmltIiwic2Vzc2lvbnMiLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiZGF0YSIsIm5hdnMiLCJjdXJyZW50TmF2IiwibWV0aG9kcyIsImhhbmRsZVRvdWNoU3RhcnQiLCJldnQiLCJpc09uZVBvaW50VG91Y2giLCJzdGFydFgiLCJnZXRDbGllbnRYIiwiaGFuZGxlVG91Y2hNb3ZlIiwiY3VyclgiLCJkaXN0WCIsImluZGV4Iiwid2lkdGgiLCJjb25kIiwiYWx3YXlzIiwiVCIsInN0eWxlIiwiaGFuZGxlVG91Y2hFbmQiLCJzaG93RGVsZXRlTW9kYWwiLCJzaG93TW9kYWwiLCJ0aXRsZSIsImNvbnRlbnQiLCJzdWNjZXNzIiwiY29uc29sZSIsImxvZyIsInJlcyIsImUiLCJlcnJvciIsInBhZ2UiLCJvcHIiLCJpbmZvIiwidG9DaGF0IiwidG8iLCJuYXZpZ2F0ZVRvIiwidXJsIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTs7OztBQUNBOztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7O0FBRUE7Ozs7QUFJQSxJQUFNQSxXQUFXLGdCQUFFQyxPQUFGLENBQ2YsZ0JBQUVDLElBQUYsQ0FBTyxPQUFQLENBRGUsRUFFZixnQkFBRUEsSUFBRixDQUFPLFNBQVAsQ0FGZSxFQUdmLGdCQUFFQSxJQUFGLENBQU8sZUFBUCxDQUhlLENBQWpCOztBQU1BO0FBQ0EsSUFBTUMsZ0JBQWdCLEdBQXRCO0FBQ0E7QUFDQSxJQUFNQyxhQUFhLEdBQW5COztJQU9xQkMsUSxXQUxwQix3QkFBUTtBQUNQQyxRQUFNO0FBQUEsV0FBU0MsTUFBTUMsTUFBTixDQUFhRixJQUF0QjtBQUFBLEdBREM7QUFFUEcsT0FB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QVY7QUFLRDs7QUFuQndCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBb0IxQixPQXpETztBQTBEUkssWUExRFEsa0JBMEREM0IsR0ExREMsRUEwREk7QUFDVixZQUFNTyxRQUFRekIsU0FBU2tCLEdBQVQsQ0FBZDtBQURVLFlBRUY0QixFQUZFLEdBRUssS0FBS3BDLFFBQUwsQ0FBY2UsS0FBZCxDQUZMLENBRUZxQixFQUZFOztBQUdWLHVCQUFLQyxVQUFMLENBQWdCO0FBQ2RDLHVDQUEyQkY7QUFEYixTQUFoQjtBQUdEO0FBaEVPLEs7Ozs7RUFWMEIsZUFBS0osSTtrQkFBdEJyQyxRIiwiZmlsZSI6InNlc3Npb25zLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3dlcHktcmVkdXgnXG5pbXBvcnQgUiBmcm9tICcuLi9saWJzL3JhbWRhJ1xuaW1wb3J0IHRvdWNoIGZyb20gJy4uL3V0aWxzL3RvdWNoJ1xuaW1wb3J0IGxvZyBmcm9tICcuLi91dGlscy9sb2cnXG5cbi8qKlxuICog6I635b6X5YiX6KGoIGluZGV4XG4gKiBAcGFyYW0gZXZ0IEV2ZW50XG4gKi9cbmNvbnN0IGdldEluZGV4ID0gUi5jb21wb3NlKFxuICBSLnByb3AoJ2luZGV4JyksXG4gIFIucHJvcCgnZGF0YXNldCcpLFxuICBSLnByb3AoJ2N1cnJlbnRUYXJnZXQnKVxuKVxuXG4vLyDmiYDmnInpmpDol4/mjInpkq7nmoTlrr3luqZcbmNvbnN0IEJVVFRPTlNfV0lEVEggPSAyMDBcbi8vIOacgOWQjuS4gOS4qumakOiXj+aMiemSrueahOWuveW6plxuY29uc3QgTEFTVF9XSURUSCA9IDIwMFxuXG5AY29ubmVjdCh7XG4gIHVzZXI6IHN0YXRlID0+IHN0YXRlLmNvbW1vbi51c2VyLFxuICBuaW06IHN0YXRlID0+IHN0YXRlLmNvbW1vbi5uaW0sXG4gIHNlc3Npb25zOiBzdGF0ZSA9PiBzdGF0ZS5zZXNzaW9ucy5zZXNzaW9uc1xufSlcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNlc3Npb25zIGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgY29uZmlnID0ge1xuICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICfmtojmga8nXG4gIH1cblxuICBkYXRhID0ge1xuICAgIG5hdnM6IFsn5aW95Y+L5raI5oGvJywgJ+ezu+e7n+a2iOaBryddLFxuICAgIGN1cnJlbnROYXY6IDBcbiAgfVxuXG4gIG1ldGhvZHMgPSB7XG4gICAgaGFuZGxlVG91Y2hTdGFydChldnQpIHtcbiAgICAgIC8vIOinpuaRuOadoeebruaXtu+8jOiusOW9leinpuaRuOeCueS9jee9rlxuICAgICAgdG91Y2guaXNPbmVQb2ludFRvdWNoKGZhbHNlKShldnQpICYmICh0aGlzLnN0YXJ0WCA9IHRvdWNoLmdldENsaWVudFgoZmFsc2UpKGV2dCkpXG4gICAgfSxcbiAgICBoYW5kbGVUb3VjaE1vdmUoZXZ0KSB7XG4gICAgICBpZiAodG91Y2guaXNPbmVQb2ludFRvdWNoKGV2dCkpIHtcbiAgICAgICAgY29uc3Qge1xuICAgICAgICAgIHN0YXJ0WCxcbiAgICAgICAgICBzZXNzaW9uc1xuICAgICAgICB9ID0gdGhpc1xuICAgICAgICBjb25zdCBjdXJyWCA9IHRvdWNoLmdldENsaWVudFgoZmFsc2UpKGV2dClcbiAgICAgICAgY29uc3QgZGlzdFggPSBzdGFydFggLSBjdXJyWFxuICAgICAgICAvLyDojrflvpfmiYvmjIfop6bmkbjnmoTmnaHnm67vvIzliLfmlrDmoLdcbiAgICAgICAgY29uc3QgaW5kZXggPSBnZXRJbmRleChldnQpXG4gICAgICAgIGNvbnN0IHdpZHRoID0gUi5jb25kKFtcbiAgICAgICAgICBbZGlzdFggPT4gZGlzdFggPD0gMCwgUi5hbHdheXMoMCldLFxuICAgICAgICAgIFtSLlQsIGRpc3RYID0+IGRpc3RYID49IExBU1RfV0lEVEggPyAtQlVUVE9OU19XSURUSCA6IC1kaXN0WF1cbiAgICAgICAgXSkoZGlzdFgpXG4gICAgICAgIHNlc3Npb25zW2luZGV4XS5zdHlsZSA9IGBsZWZ0OiR7d2lkdGh9cnB4YFxuICAgICAgICB0aGlzLnNlc3Npb25zID0gc2Vzc2lvbnNcbiAgICAgIH1cbiAgICB9LFxuICAgIGhhbmRsZVRvdWNoRW5kKGV2dCkge1xuICAgICAgaWYgKHRvdWNoLmlzT25lUG9pbnRUb3VjaCh0cnVlKShldnQpKSB7XG4gICAgICAgIGNvbnN0IHtcbiAgICAgICAgICBzdGFydFgsXG4gICAgICAgICAgc2Vzc2lvbnNcbiAgICAgICAgfSA9IHRoaXNcbiAgICAgICAgY29uc3QgY3VyclggPSB0b3VjaC5nZXRDbGllbnRYKHRydWUpKGV2dClcbiAgICAgICAgY29uc3QgZGlzdFggPSBzdGFydFggLSBjdXJyWFxuICAgICAgICBjb25zdCBpbmRleCA9IGdldEluZGV4KGV2dClcbiAgICAgICAgY29uc3Qgd2lkdGggPSBkaXN0WCA+IExBU1RfV0lEVEggLyAyID8gLUJVVFRPTlNfV0lEVEggOiAwXG4gICAgICAgIHNlc3Npb25zW2luZGV4XS5zdHlsZSA9IGBsZWZ0OiR7d2lkdGh9cnB4YFxuICAgICAgICB0aGlzLnNlc3Npb25zID0gc2Vzc2lvbnNcbiAgICAgIH1cbiAgICB9LFxuICAgIGFzeW5jIHNob3dEZWxldGVNb2RhbChldnQpIHtcbiAgICAgIC8vIOWIoOmZpOa2iOaBr+atpemqpFxuICAgICAgLy8gMS4g5pi+56S65Yig6Zmk56Gu6K6kXG4gICAgICAvLyAyLiDov5vooYzliKDpmaRcbiAgICAgIC8vIDMuIOmHjeaWsOa4suafk+WIl+ihqFxuICAgICAgdHJ5IHtcbiAgICAgICAgd2VweS5zaG93TW9kYWwoe1xuICAgICAgICAgIHRpdGxlOiAn6K2m5ZGKJyxcbiAgICAgICAgICBjb250ZW50OiAn56Gu6K6k5Yig6Zmk6K+l5Lya6K+d77yfJyxcbiAgICAgICAgICBzdWNjZXNzOiByZXMgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2cocmVzKVxuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgbG9nLmVycm9yKHtcbiAgICAgICAgICBwYWdlOiAnc2Vzc2lvbnMnLFxuICAgICAgICAgIG9wcjogJ2RlbGV0ZSBtZXNzYWdlJyxcbiAgICAgICAgICBpbmZvOiBlXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfSxcbiAgICB0b0NoYXQoZXZ0KSB7XG4gICAgICBjb25zdCBpbmRleCA9IGdldEluZGV4KGV2dClcbiAgICAgIGNvbnN0IHsgdG8gfSA9IHRoaXMuc2Vzc2lvbnNbaW5kZXhdXG4gICAgICB3ZXB5Lm5hdmlnYXRlVG8oe1xuICAgICAgICB1cmw6IGAvcGFnZXMvY2hhdD9mYWNjaWQ9JHt0b31gXG4gICAgICB9KVxuICAgIH1cbiAgfVxufVxuIl19