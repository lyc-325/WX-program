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
    return state.common.sessions;
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
      toChat: function toChat(index) {
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlc3Npb25zLmpzIl0sIm5hbWVzIjpbImdldEluZGV4IiwiY29tcG9zZSIsInByb3AiLCJCVVRUT05TX1dJRFRIIiwiTEFTVF9XSURUSCIsIlNlc3Npb25zIiwidXNlciIsInN0YXRlIiwiY29tbW9uIiwibmltIiwic2Vzc2lvbnMiLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiZGF0YSIsIm5hdnMiLCJjdXJyZW50TmF2IiwibWV0aG9kcyIsImhhbmRsZVRvdWNoU3RhcnQiLCJldnQiLCJpc09uZVBvaW50VG91Y2giLCJzdGFydFgiLCJnZXRDbGllbnRYIiwiaGFuZGxlVG91Y2hNb3ZlIiwiY3VyclgiLCJkaXN0WCIsImluZGV4Iiwid2lkdGgiLCJjb25kIiwiYWx3YXlzIiwiVCIsInN0eWxlIiwiaGFuZGxlVG91Y2hFbmQiLCJzaG93RGVsZXRlTW9kYWwiLCJzaG93TW9kYWwiLCJ0aXRsZSIsImNvbnRlbnQiLCJzdWNjZXNzIiwiY29uc29sZSIsImxvZyIsInJlcyIsImUiLCJlcnJvciIsInBhZ2UiLCJvcHIiLCJpbmZvIiwidG9DaGF0IiwidG8iLCJuYXZpZ2F0ZVRvIiwidXJsIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTs7OztBQUNBOztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7O0FBRUE7Ozs7QUFJQSxJQUFNQSxXQUFXLGdCQUFFQyxPQUFGLENBQ2YsZ0JBQUVDLElBQUYsQ0FBTyxPQUFQLENBRGUsRUFFZixnQkFBRUEsSUFBRixDQUFPLFNBQVAsQ0FGZSxFQUdmLGdCQUFFQSxJQUFGLENBQU8sZUFBUCxDQUhlLENBQWpCOztBQU1BO0FBQ0EsSUFBTUMsZ0JBQWdCLEdBQXRCO0FBQ0E7QUFDQSxJQUFNQyxhQUFhLEdBQW5COztJQU9xQkMsUSxXQUxwQix3QkFBUTtBQUNQQyxRQUFNO0FBQUEsV0FBU0MsTUFBTUMsTUFBTixDQUFhRixJQUF0QjtBQUFBLEdBREM7QUFFUEcsT0FB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QVY7QUFLRDs7QUFuQndCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBb0IxQixPQXpETztBQTBEUkssWUExRFEsa0JBMEREcEIsS0ExREMsRUEwRE07QUFBQSxZQUNKcUIsRUFESSxHQUNHLEtBQUtwQyxRQUFMLENBQWNlLEtBQWQsQ0FESCxDQUNKcUIsRUFESTs7QUFFWix1QkFBS0MsVUFBTCxDQUFnQjtBQUNkQyx1Q0FBMkJGO0FBRGIsU0FBaEI7QUFHRDtBQS9ETyxLOzs7O0VBVjBCLGVBQUtKLEk7a0JBQXRCckMsUSIsImZpbGUiOiJzZXNzaW9ucy5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICd3ZXB5LXJlZHV4J1xuaW1wb3J0IFIgZnJvbSAnLi4vbGlicy9yYW1kYSdcbmltcG9ydCB0b3VjaCBmcm9tICcuLi91dGlscy90b3VjaCdcbmltcG9ydCBsb2cgZnJvbSAnLi4vdXRpbHMvbG9nJ1xuXG4vKipcbiAqIOiOt+W+l+WIl+ihqCBpbmRleFxuICogQHBhcmFtIGV2dCBFdmVudFxuICovXG5jb25zdCBnZXRJbmRleCA9IFIuY29tcG9zZShcbiAgUi5wcm9wKCdpbmRleCcpLFxuICBSLnByb3AoJ2RhdGFzZXQnKSxcbiAgUi5wcm9wKCdjdXJyZW50VGFyZ2V0JylcbilcblxuLy8g5omA5pyJ6ZqQ6JeP5oyJ6ZKu55qE5a695bqmXG5jb25zdCBCVVRUT05TX1dJRFRIID0gMjAwXG4vLyDmnIDlkI7kuIDkuKrpmpDol4/mjInpkq7nmoTlrr3luqZcbmNvbnN0IExBU1RfV0lEVEggPSAyMDBcblxuQGNvbm5lY3Qoe1xuICB1c2VyOiBzdGF0ZSA9PiBzdGF0ZS5jb21tb24udXNlcixcbiAgbmltOiBzdGF0ZSA9PiBzdGF0ZS5jb21tb24ubmltLFxuICBzZXNzaW9uczogc3RhdGUgPT4gc3RhdGUuY29tbW9uLnNlc3Npb25zXG59KVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2Vzc2lvbnMgZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICBjb25maWcgPSB7XG4gICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+a2iOaBrydcbiAgfVxuXG4gIGRhdGEgPSB7XG4gICAgbmF2czogWyflpb3lj4vmtojmga8nLCAn57O757uf5raI5oGvJ10sXG4gICAgY3VycmVudE5hdjogMFxuICB9XG5cbiAgbWV0aG9kcyA9IHtcbiAgICBoYW5kbGVUb3VjaFN0YXJ0KGV2dCkge1xuICAgICAgLy8g6Kem5pG45p2h55uu5pe277yM6K6w5b2V6Kem5pG454K55L2N572uXG4gICAgICB0b3VjaC5pc09uZVBvaW50VG91Y2goZmFsc2UpKGV2dCkgJiYgKHRoaXMuc3RhcnRYID0gdG91Y2guZ2V0Q2xpZW50WChmYWxzZSkoZXZ0KSlcbiAgICB9LFxuICAgIGhhbmRsZVRvdWNoTW92ZShldnQpIHtcbiAgICAgIGlmICh0b3VjaC5pc09uZVBvaW50VG91Y2goZXZ0KSkge1xuICAgICAgICBjb25zdCB7XG4gICAgICAgICAgc3RhcnRYLFxuICAgICAgICAgIHNlc3Npb25zXG4gICAgICAgIH0gPSB0aGlzXG4gICAgICAgIGNvbnN0IGN1cnJYID0gdG91Y2guZ2V0Q2xpZW50WChmYWxzZSkoZXZ0KVxuICAgICAgICBjb25zdCBkaXN0WCA9IHN0YXJ0WCAtIGN1cnJYXG4gICAgICAgIC8vIOiOt+W+l+aJi+aMh+inpuaRuOeahOadoeebru+8jOWIt+aWsOagt1xuICAgICAgICBjb25zdCBpbmRleCA9IGdldEluZGV4KGV2dClcbiAgICAgICAgY29uc3Qgd2lkdGggPSBSLmNvbmQoW1xuICAgICAgICAgIFtkaXN0WCA9PiBkaXN0WCA8PSAwLCBSLmFsd2F5cygwKV0sXG4gICAgICAgICAgW1IuVCwgZGlzdFggPT4gZGlzdFggPj0gTEFTVF9XSURUSCA/IC1CVVRUT05TX1dJRFRIIDogLWRpc3RYXVxuICAgICAgICBdKShkaXN0WClcbiAgICAgICAgc2Vzc2lvbnNbaW5kZXhdLnN0eWxlID0gYGxlZnQ6JHt3aWR0aH1ycHhgXG4gICAgICAgIHRoaXMuc2Vzc2lvbnMgPSBzZXNzaW9uc1xuICAgICAgfVxuICAgIH0sXG4gICAgaGFuZGxlVG91Y2hFbmQoZXZ0KSB7XG4gICAgICBpZiAodG91Y2guaXNPbmVQb2ludFRvdWNoKHRydWUpKGV2dCkpIHtcbiAgICAgICAgY29uc3Qge1xuICAgICAgICAgIHN0YXJ0WCxcbiAgICAgICAgICBzZXNzaW9uc1xuICAgICAgICB9ID0gdGhpc1xuICAgICAgICBjb25zdCBjdXJyWCA9IHRvdWNoLmdldENsaWVudFgodHJ1ZSkoZXZ0KVxuICAgICAgICBjb25zdCBkaXN0WCA9IHN0YXJ0WCAtIGN1cnJYXG4gICAgICAgIGNvbnN0IGluZGV4ID0gZ2V0SW5kZXgoZXZ0KVxuICAgICAgICBjb25zdCB3aWR0aCA9IGRpc3RYID4gTEFTVF9XSURUSCAvIDIgPyAtQlVUVE9OU19XSURUSCA6IDBcbiAgICAgICAgc2Vzc2lvbnNbaW5kZXhdLnN0eWxlID0gYGxlZnQ6JHt3aWR0aH1ycHhgXG4gICAgICAgIHRoaXMuc2Vzc2lvbnMgPSBzZXNzaW9uc1xuICAgICAgfVxuICAgIH0sXG4gICAgYXN5bmMgc2hvd0RlbGV0ZU1vZGFsKGV2dCkge1xuICAgICAgLy8g5Yig6Zmk5raI5oGv5q2l6aqkXG4gICAgICAvLyAxLiDmmL7npLrliKDpmaTnoa7orqRcbiAgICAgIC8vIDIuIOi/m+ihjOWIoOmZpFxuICAgICAgLy8gMy4g6YeN5paw5riy5p+T5YiX6KGoXG4gICAgICB0cnkge1xuICAgICAgICB3ZXB5LnNob3dNb2RhbCh7XG4gICAgICAgICAgdGl0bGU6ICforablkYonLFxuICAgICAgICAgIGNvbnRlbnQ6ICfnoa7orqTliKDpmaTor6XkvJror53vvJ8nLFxuICAgICAgICAgIHN1Y2Nlc3M6IHJlcyA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhyZXMpXG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBsb2cuZXJyb3Ioe1xuICAgICAgICAgIHBhZ2U6ICdzZXNzaW9ucycsXG4gICAgICAgICAgb3ByOiAnZGVsZXRlIG1lc3NhZ2UnLFxuICAgICAgICAgIGluZm86IGVcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9LFxuICAgIHRvQ2hhdChpbmRleCkge1xuICAgICAgY29uc3QgeyB0byB9ID0gdGhpcy5zZXNzaW9uc1tpbmRleF1cbiAgICAgIHdlcHkubmF2aWdhdGVUbyh7XG4gICAgICAgIHVybDogYC9wYWdlcy9jaGF0P2ZhY2NpZD0ke3RvfWBcbiAgICAgIH0pXG4gICAgfVxuICB9XG59XG4iXX0=