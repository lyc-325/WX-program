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

var _ramda = require('./../libs/ramda.js');

var _ramda2 = _interopRequireDefault(_ramda);

var _touch = require('./../utils/touch.js');

var _touch2 = _interopRequireDefault(_touch);

var _nim = require('./../utils/nim.js');

var _nim2 = _interopRequireDefault(_nim);

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
      sessions: [],
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

  (0, _createClass3.default)(Sessions, [{
    key: 'onLoad',
    value: function () {
      var _ref2 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee2() {
        var _this3 = this;

        var nimInstance;
        return _regenerator2.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                nimInstance = _nim2.default.getInstance({
                  account: this.user.accid,
                  token: this.nim.token,
                  onSessions: function onSessions(sessions) {
                    var merged = nimInstance.mergeSessions(_this3.sessions, sessions);
                    _this3.sessions = merged;
                    _this3.$apply();
                  },
                  onUpdateSession: function onUpdateSession(session) {
                    var merged = nimInstance.mergeSessions(_this3.sessions, session);
                    _this3.sessions = merged;
                    _this3.$apply();
                  }
                });

              case 1:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function onLoad() {
        return _ref2.apply(this, arguments);
      }

      return onLoad;
    }()
  }]);
  return Sessions;
}(_wepy2.default.page)) || _class);

Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Sessions , 'pages/sessions'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlc3Npb25zLmpzIl0sIm5hbWVzIjpbImdldEluZGV4IiwiY29tcG9zZSIsInByb3AiLCJCVVRUT05TX1dJRFRIIiwiTEFTVF9XSURUSCIsIlNlc3Npb25zIiwidXNlciIsInN0YXRlIiwiY29tbW9uIiwibmltIiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsImRhdGEiLCJzZXNzaW9ucyIsIm5hdnMiLCJjdXJyZW50TmF2IiwibWV0aG9kcyIsImhhbmRsZVRvdWNoU3RhcnQiLCJldnQiLCJpc09uZVBvaW50VG91Y2giLCJzdGFydFgiLCJnZXRDbGllbnRYIiwiaGFuZGxlVG91Y2hNb3ZlIiwiY3VyclgiLCJkaXN0WCIsImluZGV4Iiwid2lkdGgiLCJjb25kIiwiYWx3YXlzIiwiVCIsInN0eWxlIiwiaGFuZGxlVG91Y2hFbmQiLCJzaG93RGVsZXRlTW9kYWwiLCJzaG93TW9kYWwiLCJ0aXRsZSIsImNvbnRlbnQiLCJzdWNjZXNzIiwiY29uc29sZSIsImxvZyIsInJlcyIsImUiLCJlcnJvciIsInBhZ2UiLCJvcHIiLCJpbmZvIiwidG9DaGF0IiwidG8iLCJuYXZpZ2F0ZVRvIiwidXJsIiwibmltSW5zdGFuY2UiLCJnZXRJbnN0YW5jZSIsImFjY291bnQiLCJhY2NpZCIsInRva2VuIiwib25TZXNzaW9ucyIsIm1lcmdlZCIsIm1lcmdlU2Vzc2lvbnMiLCIkYXBwbHkiLCJvblVwZGF0ZVNlc3Npb24iLCJzZXNzaW9uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7Ozs7QUFDQTs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7O0FBRUE7Ozs7QUFJQSxJQUFNQSxXQUFXLGdCQUFFQyxPQUFGLENBQ2YsZ0JBQUVDLElBQUYsQ0FBTyxPQUFQLENBRGUsRUFFZixnQkFBRUEsSUFBRixDQUFPLFNBQVAsQ0FGZSxFQUdmLGdCQUFFQSxJQUFGLENBQU8sZUFBUCxDQUhlLENBQWpCOztB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QVlDLEdBQVo7QUFDRDtBQUxZLHFCQUFmO0FBT0QsbUJBUkQsQ0FRRSxPQUFPQyxDQUFQLEVBQVU7QUFDVixrQ0FBSUMsS0FBSixDQUFVO0FBQ1JDLDRCQUFNLFVBREU7QUFFUkMsMkJBQUssZ0JBRkc7QUFHUkMsNEJBQU1KO0FBSEUscUJBQVY7QUFLRDs7QUFuQndCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBb0IxQixPQXpETztBQTBEUkssWUExRFEsa0JBMEREcEIsS0ExREMsRUEwRE07QUFBQSxZQUNKcUIsRUFESSxHQUNHLEtBQUtqQyxRQUFMLENBQWNZLEtBQWQsQ0FESCxDQUNKcUIsRUFESTs7QUFFWix1QkFBS0MsVUFBTCxDQUFnQjtBQUNkQyx1Q0FBMkJGO0FBRGIsU0FBaEI7QUFHRDtBQS9ETyxLOzs7Ozs7Ozs7Ozs7OztBQWhCRkcsMkIsR0FBYyxjQUFJQyxXQUFKLENBQWdCO0FBQ2xDQywyQkFBUyxLQUFLN0MsSUFBTCxDQUFVOEMsS0FEZTtBQUVsQ0MseUJBQU8sS0FBSzVDLEdBQUwsQ0FBUzRDLEtBRmtCO0FBR2xDQyw4QkFBWSw4QkFBWTtBQUN0Qix3QkFBTUMsU0FBU04sWUFBWU8sYUFBWixDQUEwQixPQUFLM0MsUUFBL0IsRUFBeUNBLFFBQXpDLENBQWY7QUFDQSwyQkFBS0EsUUFBTCxHQUFnQjBDLE1BQWhCO0FBQ0EsMkJBQUtFLE1BQUw7QUFDRCxtQkFQaUM7QUFRbENDLG1DQUFpQixrQ0FBVztBQUMxQix3QkFBTUgsU0FBU04sWUFBWU8sYUFBWixDQUEwQixPQUFLM0MsUUFBL0IsRUFBeUM4QyxPQUF6QyxDQUFmO0FBQ0EsMkJBQUs5QyxRQUFMLEdBQWdCMEMsTUFBaEI7QUFDQSwyQkFBS0UsTUFBTDtBQUNEO0FBWmlDLGlCQUFoQixDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7RUFaYyxlQUFLZixJO2tCQUF0QnJDLFEiLCJmaWxlIjoic2Vzc2lvbnMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAnd2VweS1yZWR1eCdcbmltcG9ydCBSIGZyb20gJy4uL2xpYnMvcmFtZGEnXG5pbXBvcnQgdG91Y2ggZnJvbSAnLi4vdXRpbHMvdG91Y2gnXG5pbXBvcnQgTklNIGZyb20gJy4uL3V0aWxzL25pbSdcbmltcG9ydCBsb2cgZnJvbSAnLi4vdXRpbHMvbG9nJ1xuXG4vKipcbiAqIOiOt+W+l+WIl+ihqCBpbmRleFxuICogQHBhcmFtIGV2dCBFdmVudFxuICovXG5jb25zdCBnZXRJbmRleCA9IFIuY29tcG9zZShcbiAgUi5wcm9wKCdpbmRleCcpLFxuICBSLnByb3AoJ2RhdGFzZXQnKSxcbiAgUi5wcm9wKCdjdXJyZW50VGFyZ2V0JylcbilcblxuLy8g5omA5pyJ6ZqQ6JeP5oyJ6ZKu55qE5a695bqmXG5jb25zdCBCVVRUT05TX1dJRFRIID0gMjAwXG4vLyDmnIDlkI7kuIDkuKrpmpDol4/mjInpkq7nmoTlrr3luqZcbmNvbnN0IExBU1RfV0lEVEggPSAyMDBcblxuQGNvbm5lY3Qoe1xuICB1c2VyKHN0YXRlKSB7XG4gICAgcmV0dXJuIHN0YXRlLmNvbW1vbi51c2VyXG4gIH0sXG4gIG5pbShzdGF0ZSkge1xuICAgIHJldHVybiBzdGF0ZS5jb21tb24ubmltXG4gIH1cbn0pXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTZXNzaW9ucyBleHRlbmRzIHdlcHkucGFnZSB7XG4gIGNvbmZpZyA9IHtcbiAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn5raI5oGvJ1xuICB9XG5cbiAgZGF0YSA9IHtcbiAgICBzZXNzaW9uczogW10sXG4gICAgbmF2czogWyflpb3lj4vmtojmga8nLCAn57O757uf5raI5oGvJ10sXG4gICAgY3VycmVudE5hdjogMFxuICB9XG5cbiAgYXN5bmMgb25Mb2FkKCkge1xuICAgIGNvbnN0IG5pbUluc3RhbmNlID0gTklNLmdldEluc3RhbmNlKHtcbiAgICAgIGFjY291bnQ6IHRoaXMudXNlci5hY2NpZCxcbiAgICAgIHRva2VuOiB0aGlzLm5pbS50b2tlbixcbiAgICAgIG9uU2Vzc2lvbnM6IHNlc3Npb25zID0+IHtcbiAgICAgICAgY29uc3QgbWVyZ2VkID0gbmltSW5zdGFuY2UubWVyZ2VTZXNzaW9ucyh0aGlzLnNlc3Npb25zLCBzZXNzaW9ucylcbiAgICAgICAgdGhpcy5zZXNzaW9ucyA9IG1lcmdlZFxuICAgICAgICB0aGlzLiRhcHBseSgpXG4gICAgICB9LFxuICAgICAgb25VcGRhdGVTZXNzaW9uOiBzZXNzaW9uID0+IHtcbiAgICAgICAgY29uc3QgbWVyZ2VkID0gbmltSW5zdGFuY2UubWVyZ2VTZXNzaW9ucyh0aGlzLnNlc3Npb25zLCBzZXNzaW9uKVxuICAgICAgICB0aGlzLnNlc3Npb25zID0gbWVyZ2VkXG4gICAgICAgIHRoaXMuJGFwcGx5KClcbiAgICAgIH1cbiAgICB9KVxuICB9XG5cbiAgbWV0aG9kcyA9IHtcbiAgICBoYW5kbGVUb3VjaFN0YXJ0KGV2dCkge1xuICAgICAgLy8g6Kem5pG45p2h55uu5pe277yM6K6w5b2V6Kem5pG454K55L2N572uXG4gICAgICB0b3VjaC5pc09uZVBvaW50VG91Y2goZmFsc2UpKGV2dCkgJiYgKHRoaXMuc3RhcnRYID0gdG91Y2guZ2V0Q2xpZW50WChmYWxzZSkoZXZ0KSlcbiAgICB9LFxuICAgIGhhbmRsZVRvdWNoTW92ZShldnQpIHtcbiAgICAgIGlmICh0b3VjaC5pc09uZVBvaW50VG91Y2goZXZ0KSkge1xuICAgICAgICBjb25zdCB7XG4gICAgICAgICAgc3RhcnRYLFxuICAgICAgICAgIHNlc3Npb25zXG4gICAgICAgIH0gPSB0aGlzXG4gICAgICAgIGNvbnN0IGN1cnJYID0gdG91Y2guZ2V0Q2xpZW50WChmYWxzZSkoZXZ0KVxuICAgICAgICBjb25zdCBkaXN0WCA9IHN0YXJ0WCAtIGN1cnJYXG4gICAgICAgIC8vIOiOt+W+l+aJi+aMh+inpuaRuOeahOadoeebru+8jOWIt+aWsOagt1xuICAgICAgICBjb25zdCBpbmRleCA9IGdldEluZGV4KGV2dClcbiAgICAgICAgY29uc3Qgd2lkdGggPSBSLmNvbmQoW1xuICAgICAgICAgIFtkaXN0WCA9PiBkaXN0WCA8PSAwLCBSLmFsd2F5cygwKV0sXG4gICAgICAgICAgW1IuVCwgZGlzdFggPT4gZGlzdFggPj0gTEFTVF9XSURUSCA/IC1CVVRUT05TX1dJRFRIIDogLWRpc3RYXVxuICAgICAgICBdKShkaXN0WClcbiAgICAgICAgc2Vzc2lvbnNbaW5kZXhdLnN0eWxlID0gYGxlZnQ6JHt3aWR0aH1ycHhgXG4gICAgICAgIHRoaXMuc2Vzc2lvbnMgPSBzZXNzaW9uc1xuICAgICAgfVxuICAgIH0sXG4gICAgaGFuZGxlVG91Y2hFbmQoZXZ0KSB7XG4gICAgICBpZiAodG91Y2guaXNPbmVQb2ludFRvdWNoKHRydWUpKGV2dCkpIHtcbiAgICAgICAgY29uc3Qge1xuICAgICAgICAgIHN0YXJ0WCxcbiAgICAgICAgICBzZXNzaW9uc1xuICAgICAgICB9ID0gdGhpc1xuICAgICAgICBjb25zdCBjdXJyWCA9IHRvdWNoLmdldENsaWVudFgodHJ1ZSkoZXZ0KVxuICAgICAgICBjb25zdCBkaXN0WCA9IHN0YXJ0WCAtIGN1cnJYXG4gICAgICAgIGNvbnN0IGluZGV4ID0gZ2V0SW5kZXgoZXZ0KVxuICAgICAgICBjb25zdCB3aWR0aCA9IGRpc3RYID4gTEFTVF9XSURUSCAvIDIgPyAtQlVUVE9OU19XSURUSCA6IDBcbiAgICAgICAgc2Vzc2lvbnNbaW5kZXhdLnN0eWxlID0gYGxlZnQ6JHt3aWR0aH1ycHhgXG4gICAgICAgIHRoaXMuc2Vzc2lvbnMgPSBzZXNzaW9uc1xuICAgICAgfVxuICAgIH0sXG4gICAgYXN5bmMgc2hvd0RlbGV0ZU1vZGFsKGV2dCkge1xuICAgICAgLy8g5Yig6Zmk5raI5oGv5q2l6aqkXG4gICAgICAvLyAxLiDmmL7npLrliKDpmaTnoa7orqRcbiAgICAgIC8vIDIuIOi/m+ihjOWIoOmZpFxuICAgICAgLy8gMy4g6YeN5paw5riy5p+T5YiX6KGoXG4gICAgICB0cnkge1xuICAgICAgICB3ZXB5LnNob3dNb2RhbCh7XG4gICAgICAgICAgdGl0bGU6ICforablkYonLFxuICAgICAgICAgIGNvbnRlbnQ6ICfnoa7orqTliKDpmaTor6XkvJror53vvJ8nLFxuICAgICAgICAgIHN1Y2Nlc3M6IHJlcyA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhyZXMpXG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBsb2cuZXJyb3Ioe1xuICAgICAgICAgIHBhZ2U6ICdzZXNzaW9ucycsXG4gICAgICAgICAgb3ByOiAnZGVsZXRlIG1lc3NhZ2UnLFxuICAgICAgICAgIGluZm86IGVcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9LFxuICAgIHRvQ2hhdChpbmRleCkge1xuICAgICAgY29uc3QgeyB0byB9ID0gdGhpcy5zZXNzaW9uc1tpbmRleF1cbiAgICAgIHdlcHkubmF2aWdhdGVUbyh7XG4gICAgICAgIHVybDogYC9wYWdlcy9jaGF0P2ZhY2NpZD0ke3RvfWBcbiAgICAgIH0pXG4gICAgfVxuICB9XG59XG4iXX0=