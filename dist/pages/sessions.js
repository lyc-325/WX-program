'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

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

        return (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
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
exports.default = Sessions;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlc3Npb25zLmpzIl0sIm5hbWVzIjpbImdldEluZGV4IiwiY29tcG9zZSIsInByb3AiLCJCVVRUT05TX1dJRFRIIiwiTEFTVF9XSURUSCIsIlNlc3Npb25zIiwidXNlciIsInN0YXRlIiwiY29tbW9uIiwibmltIiwic2Vzc2lvbnMiLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiZGF0YSIsIm5hdnMiLCJjdXJyZW50TmF2IiwibWV0aG9kcyIsImhhbmRsZVRvdWNoU3RhcnQiLCJldnQiLCJpc09uZVBvaW50VG91Y2giLCJzdGFydFgiLCJnZXRDbGllbnRYIiwiaGFuZGxlVG91Y2hNb3ZlIiwiY3VyclgiLCJkaXN0WCIsImluZGV4Iiwid2lkdGgiLCJjb25kIiwiYWx3YXlzIiwiVCIsInN0eWxlIiwiaGFuZGxlVG91Y2hFbmQiLCJzaG93RGVsZXRlTW9kYWwiLCJzaG93TW9kYWwiLCJ0aXRsZSIsImNvbnRlbnQiLCJzdWNjZXNzIiwiY29uc29sZSIsImxvZyIsInJlcyIsImUiLCJlcnJvciIsInBhZ2UiLCJvcHIiLCJpbmZvIiwidG9DaGF0IiwidG8iLCJuYXZpZ2F0ZVRvIiwidXJsIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTs7OztBQUNBOztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7O0FBRUE7Ozs7QUFJQSxJQUFNQSxXQUFXLGdCQUFFQyxPQUFGLENBQ2YsZ0JBQUVDLElBQUYsQ0FBTyxPQUFQLENBRGUsRUFFZixnQkFBRUEsSUFBRixDQUFPLFNBQVAsQ0FGZSxFQUdmLGdCQUFFQSxJQUFGLENBQU8sZUFBUCxDQUhlLENBQWpCOztBQU1BO0FBQ0EsSUFBTUMsZ0JBQWdCLEdBQXRCO0FBQ0E7QUFDQSxJQUFNQyxhQUFhLEdBQW5COztJQU9xQkMsUSxXQUxwQix3QkFBUTtBQUNQQyxRQUFNO0FBQUEsV0FBU0MsTUFBTUMsTUFBTixDQUFhRixJQUF0QjtBQUFBLEdBREM7QUFFUEcsT0FB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QVY7QUFLRDs7QUFuQndCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBb0IxQixPQXpETztBQTBEUkssWUExRFEsa0JBMEREM0IsR0ExREMsRUEwREk7QUFDVixZQUFNTyxRQUFRekIsU0FBU2tCLEdBQVQsQ0FBZDtBQURVLFlBRUY0QixFQUZFLEdBRUssS0FBS3BDLFFBQUwsQ0FBY2UsS0FBZCxDQUZMLENBRUZxQixFQUZFOztBQUdWLHVCQUFLQyxVQUFMLENBQWdCO0FBQ2RDLHVDQUEyQkY7QUFEYixTQUFoQjtBQUdEO0FBaEVPLEs7Ozs7RUFWMEIsZUFBS0osSTtrQkFBdEJyQyxRIiwiZmlsZSI6InNlc3Npb25zLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXHJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICd3ZXB5LXJlZHV4J1xyXG5pbXBvcnQgUiBmcm9tICcuLi9saWJzL3JhbWRhJ1xyXG5pbXBvcnQgdG91Y2ggZnJvbSAnLi4vdXRpbHMvdG91Y2gnXHJcbmltcG9ydCBsb2cgZnJvbSAnLi4vdXRpbHMvbG9nJ1xyXG5cclxuLyoqXHJcbiAqIOiOt+W+l+WIl+ihqCBpbmRleFxyXG4gKiBAcGFyYW0gZXZ0IEV2ZW50XHJcbiAqL1xyXG5jb25zdCBnZXRJbmRleCA9IFIuY29tcG9zZShcclxuICBSLnByb3AoJ2luZGV4JyksXHJcbiAgUi5wcm9wKCdkYXRhc2V0JyksXHJcbiAgUi5wcm9wKCdjdXJyZW50VGFyZ2V0JylcclxuKVxyXG5cclxuLy8g5omA5pyJ6ZqQ6JeP5oyJ6ZKu55qE5a695bqmXHJcbmNvbnN0IEJVVFRPTlNfV0lEVEggPSAyMDBcclxuLy8g5pyA5ZCO5LiA5Liq6ZqQ6JeP5oyJ6ZKu55qE5a695bqmXHJcbmNvbnN0IExBU1RfV0lEVEggPSAyMDBcclxuXHJcbkBjb25uZWN0KHtcclxuICB1c2VyOiBzdGF0ZSA9PiBzdGF0ZS5jb21tb24udXNlcixcclxuICBuaW06IHN0YXRlID0+IHN0YXRlLmNvbW1vbi5uaW0sXHJcbiAgc2Vzc2lvbnM6IHN0YXRlID0+IHN0YXRlLnNlc3Npb25zLnNlc3Npb25zXHJcbn0pXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNlc3Npb25zIGV4dGVuZHMgd2VweS5wYWdlIHtcclxuICBjb25maWcgPSB7XHJcbiAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn5raI5oGvJ1xyXG4gIH1cclxuXHJcbiAgZGF0YSA9IHtcclxuICAgIG5hdnM6IFsn5aW95Y+L5raI5oGvJywgJ+ezu+e7n+a2iOaBryddLFxyXG4gICAgY3VycmVudE5hdjogMFxyXG4gIH1cclxuXHJcbiAgbWV0aG9kcyA9IHtcclxuICAgIGhhbmRsZVRvdWNoU3RhcnQoZXZ0KSB7XHJcbiAgICAgIC8vIOinpuaRuOadoeebruaXtu+8jOiusOW9leinpuaRuOeCueS9jee9rlxyXG4gICAgICB0b3VjaC5pc09uZVBvaW50VG91Y2goZmFsc2UpKGV2dCkgJiYgKHRoaXMuc3RhcnRYID0gdG91Y2guZ2V0Q2xpZW50WChmYWxzZSkoZXZ0KSlcclxuICAgIH0sXHJcbiAgICBoYW5kbGVUb3VjaE1vdmUoZXZ0KSB7XHJcbiAgICAgIGlmICh0b3VjaC5pc09uZVBvaW50VG91Y2goZXZ0KSkge1xyXG4gICAgICAgIGNvbnN0IHtcclxuICAgICAgICAgIHN0YXJ0WCxcclxuICAgICAgICAgIHNlc3Npb25zXHJcbiAgICAgICAgfSA9IHRoaXNcclxuICAgICAgICBjb25zdCBjdXJyWCA9IHRvdWNoLmdldENsaWVudFgoZmFsc2UpKGV2dClcclxuICAgICAgICBjb25zdCBkaXN0WCA9IHN0YXJ0WCAtIGN1cnJYXHJcbiAgICAgICAgLy8g6I635b6X5omL5oyH6Kem5pG455qE5p2h55uu77yM5Yi35paw5qC3XHJcbiAgICAgICAgY29uc3QgaW5kZXggPSBnZXRJbmRleChldnQpXHJcbiAgICAgICAgY29uc3Qgd2lkdGggPSBSLmNvbmQoW1xyXG4gICAgICAgICAgW2Rpc3RYID0+IGRpc3RYIDw9IDAsIFIuYWx3YXlzKDApXSxcclxuICAgICAgICAgIFtSLlQsIGRpc3RYID0+IGRpc3RYID49IExBU1RfV0lEVEggPyAtQlVUVE9OU19XSURUSCA6IC1kaXN0WF1cclxuICAgICAgICBdKShkaXN0WClcclxuICAgICAgICBzZXNzaW9uc1tpbmRleF0uc3R5bGUgPSBgbGVmdDoke3dpZHRofXJweGBcclxuICAgICAgICB0aGlzLnNlc3Npb25zID0gc2Vzc2lvbnNcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIGhhbmRsZVRvdWNoRW5kKGV2dCkge1xyXG4gICAgICBpZiAodG91Y2guaXNPbmVQb2ludFRvdWNoKHRydWUpKGV2dCkpIHtcclxuICAgICAgICBjb25zdCB7XHJcbiAgICAgICAgICBzdGFydFgsXHJcbiAgICAgICAgICBzZXNzaW9uc1xyXG4gICAgICAgIH0gPSB0aGlzXHJcbiAgICAgICAgY29uc3QgY3VyclggPSB0b3VjaC5nZXRDbGllbnRYKHRydWUpKGV2dClcclxuICAgICAgICBjb25zdCBkaXN0WCA9IHN0YXJ0WCAtIGN1cnJYXHJcbiAgICAgICAgY29uc3QgaW5kZXggPSBnZXRJbmRleChldnQpXHJcbiAgICAgICAgY29uc3Qgd2lkdGggPSBkaXN0WCA+IExBU1RfV0lEVEggLyAyID8gLUJVVFRPTlNfV0lEVEggOiAwXHJcbiAgICAgICAgc2Vzc2lvbnNbaW5kZXhdLnN0eWxlID0gYGxlZnQ6JHt3aWR0aH1ycHhgXHJcbiAgICAgICAgdGhpcy5zZXNzaW9ucyA9IHNlc3Npb25zXHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBhc3luYyBzaG93RGVsZXRlTW9kYWwoZXZ0KSB7XHJcbiAgICAgIC8vIOWIoOmZpOa2iOaBr+atpemqpFxyXG4gICAgICAvLyAxLiDmmL7npLrliKDpmaTnoa7orqRcclxuICAgICAgLy8gMi4g6L+b6KGM5Yig6ZmkXHJcbiAgICAgIC8vIDMuIOmHjeaWsOa4suafk+WIl+ihqFxyXG4gICAgICB0cnkge1xyXG4gICAgICAgIHdlcHkuc2hvd01vZGFsKHtcclxuICAgICAgICAgIHRpdGxlOiAn6K2m5ZGKJyxcclxuICAgICAgICAgIGNvbnRlbnQ6ICfnoa7orqTliKDpmaTor6XkvJror53vvJ8nLFxyXG4gICAgICAgICAgc3VjY2VzczogcmVzID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2cocmVzKVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICBsb2cuZXJyb3Ioe1xyXG4gICAgICAgICAgcGFnZTogJ3Nlc3Npb25zJyxcclxuICAgICAgICAgIG9wcjogJ2RlbGV0ZSBtZXNzYWdlJyxcclxuICAgICAgICAgIGluZm86IGVcclxuICAgICAgICB9KVxyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgdG9DaGF0KGV2dCkge1xyXG4gICAgICBjb25zdCBpbmRleCA9IGdldEluZGV4KGV2dClcclxuICAgICAgY29uc3QgeyB0byB9ID0gdGhpcy5zZXNzaW9uc1tpbmRleF1cclxuICAgICAgd2VweS5uYXZpZ2F0ZVRvKHtcclxuICAgICAgICB1cmw6IGAvcGFnZXMvY2hhdD9mYWNjaWQ9JHt0b31gXHJcbiAgICAgIH0pXHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ==