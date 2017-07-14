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

var _nim = require('./../utils/nim.js');

var _nim2 = _interopRequireDefault(_nim);

var _log = require('./../utils/log.js');

var log = _interopRequireWildcard(_log);

var _ramda = require('./../libs/ramda.js');

var _ramda2 = _interopRequireDefault(_ramda);

var _chat = require('./../actions/chat.js');

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Chat = (_dec = (0, _wepyRedux.connect)({
  user: function user(state) {
    return state.common.user;
  },
  nim: function nim(state) {
    return state.common.nim;
  },
  msgs: function msgs(state) {
    return state.chat.msgs[this.to] || [];
  },
  intoView: function intoView(state) {
    var msgs = state.chat.msgs[this.to] || [];
    var last = _ramda2.default.last(msgs);
    return last ? last.idServer : '';
  }
}, {
  refreshMsgsByTo: _chat.refreshMsgsByTo
}), _dec(_class = function (_wepy$page) {
  (0, _inherits3.default)(Chat, _wepy$page);

  function Chat() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, Chat);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Chat.__proto__ || (0, _getPrototypeOf2.default)(Chat)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: '聊天'
    }, _this.data = {
      text: '',
      friend: null,
      sended: false
    }, _this.methods = {
      chooseImage: function chooseImage() {
        var _this2 = this;

        return (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee() {
          var pushMsg, res, file, msg;
          return _regenerator2.default.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  // 进行图片选择并上传
                  pushMsg = _this2.methods.pushMsg.bind(_this2);
                  _context.next = 3;
                  return _wepy2.default.chooseImage({
                    count: 1
                  });

                case 3:
                  res = _context.sent;
                  _context.prev = 4;
                  _context.next = 7;
                  return _this2.nim.previewFile({
                    type: 'image',
                    wxFilePath: res.tempFilePaths[0]
                  });

                case 7:
                  file = _context.sent;
                  _context.next = 10;
                  return _this2.nim.sendFile({
                    scene: 'p2p',
                    type: 'image',
                    to: _this2.friend.accid,
                    file: file
                  });

                case 10:
                  msg = _context.sent;

                  pushMsg(msg);
                  _context.next = 17;
                  break;

                case 14:
                  _context.prev = 14;
                  _context.t0 = _context['catch'](4);

                  log.error({
                    page: 'chatrooms',
                    opr: 'sendFile',
                    info: _context.t0
                  });

                case 17:
                case 'end':
                  return _context.stop();
              }
            }
          }, _callee, _this2, [[4, 14]]);
        }))();
      },
      send: function send() {
        var _this3 = this;

        return (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee2() {
          var pushMsg, text, msg;
          return _regenerator2.default.wrap(function _callee2$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  // ? why bind
                  pushMsg = _this3.methods.pushMsg.bind(_this3);
                  text = _ramda2.default.trim(_this3.text);

                  _this3.text = '';

                  if (!text.length) {
                    _context2.next = 15;
                    break;
                  }

                  _context2.prev = 4;
                  _context2.next = 7;
                  return _this3.nim.sendText({
                    text: text,
                    scene: 'p2p',
                    to: _this3.friend.accid
                  });

                case 7:
                  msg = _context2.sent;

                  _this3.text = '';
                  pushMsg(msg);
                  _context2.next = 15;
                  break;

                case 12:
                  _context2.prev = 12;
                  _context2.t0 = _context2['catch'](4);

                  log.error({
                    page: 'chat',
                    opr: 'sendText',
                    info: _context2.t0
                  });

                case 15:
                case 'end':
                  return _context2.stop();
              }
            }
          }, _callee2, _this3, [[4, 12]]);
        }))();
      },
      setText: function setText(e) {
        this.text = e.detail.value;
      },
      pushMsg: function pushMsg(msg) {
        // 新消息放入
        var refreshMsgsByTo = this.methods.refreshMsgsByTo;
        var mergeMsgs = this.nim.mergeMsgs;

        var to = msg.target;
        var mergedByTo = mergeMsgs(this.msgs || [], msg);
        refreshMsgsByTo(to, mergedByTo);
        this.sended = true;
        this.$apply();
      },
      handleFocus: function handleFocus() {
        this.sended = false;
      }
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(Chat, [{
    key: 'onLoad',
    value: function () {
      var _ref2 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee3(options) {
        var faccid, friend;
        return _regenerator2.default.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                faccid = options.faccid;

                this.to = faccid;
                // 获得好友对象
                _context3.next = 4;
                return _nim2.default.getUserInfo(faccid);

              case 4:
                friend = _context3.sent;

                this.friend = {
                  accid: friend.accid,
                  avatar: friend.icon,
                  nickname: friend.name
                };

              case 6:
              case 'end':
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function onLoad(_x) {
        return _ref2.apply(this, arguments);
      }

      return onLoad;
    }()
  }, {
    key: 'onShow',
    value: function onShow() {

      // const query = wepy.createSelectorQuery()
      // query.select('#list').boundingClientRect(rect => {
      //   console.log('rectangle', rect)
      //   this.scrollTop = rect.bottom
      //   this.$apply()
      // }).exec()
    }
  }]);
  return Chat;
}(_wepy2.default.page)) || _class);

Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Chat , 'pages/chat'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoYXQuanMiXSwibmFtZXMiOlsibG9nIiwiQ2hhdCIsInVzZXIiLCJzdGF0ZSIsImNvbW1vbiIsIm5pbSIsIm1zZ3MiLCJjaGF0IiwidG8iLCJpbnRvVmlldyIsImxhc3QiLCJpZFNlcnZlciIsInJlZnJlc2hNc2dzQnlUbyIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCJkYXRhIiwidGV4dCIsImZyaWVuZCIsInNlbmRlZCIsIm1ldGhvZHMiLCJjaG9vc2VJbWFnZSIsInB1c2hNc2ciLCJiaW5kIiwiY291bnQiLCJyZXMiLCJwcmV2aWV3RmlsZSIsInR5cGUiLCJ3eEZpbGVQYXRoIiwidGVtcEZpbGVQYXRocyIsImZpbGUiLCJzZW5kRmlsZSIsInNjZW5lIiwiYWNjaWQiLCJtc2ciLCJlcnJvciIsInBhZ2UiLCJvcHIiLCJpbmZvIiwic2VuZCIsInRyaW0iLCJsZW5ndGgiLCJzZW5kVGV4dCIsInNldFRleHQiLCJlIiwiZGV0YWlsIiwidmFsdWUiLCJtZXJnZU1zZ3MiLCJ0YXJnZXQiLCJtZXJnZWRCeVRvIiwiJGFwcGx5IiwiaGFuZGxlRm9jdXMiLCJvcHRpb25zIiwiZmFjY2lkIiwiZ2V0VXNlckluZm8iLCJhdmF0YXIiLCJpY29uIiwibmlja25hbWUiLCJuYW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7Ozs7QUFDQTs7QUFHQTs7OztBQUNBOztJQUFZQSxHOztBQUNaOzs7O0FBQ0E7Ozs7OztJQWtCcUJDLEksV0FkcEIsd0JBQVE7QUFDUEMsUUFBTTtBQUFBLFdBQVNDLE1BQU1DLE1BQU4sQ0FBYUYsSUFBdEI7QUFBQSxHQURDO0FBRVBHLE9BQUs7QUFBQSxXQUFTRixNQUFNQyxNQUFOLENBQWFDLEdBQXRCO0FBQUEsR0FGRTtBQUdQQyxRQUFNLGNBQVNILEtBQVQsRUFBZ0I7QUFDcEIsV0FBT0EsTUFBTUksSUFBTixDQUFXRCxJQUFYLENBQWdCLEtBQUtFLEVBQXJCLEtBQTRCLEVBQW5DO0FBQ0QsR0FMTTtBQU1QQyxZQUFVLGtCQUFTTixLQUFULEVBQWdCO0FBQ3hCLFFBQU1HLE9BQU9ILE1BQU1JLElBQU4sQ0FBV0QsSUFBWCxDQUFnQixLQUFLRSxFQUFyQixLQUE0QixFQUF6QztBQUNBLFFBQU1FLE9BQU8sZ0JBQUVBLElBQUYsQ0FBT0osSUFBUCxDQUFiO0FBQ0EsV0FBT0ksT0FBT0EsS0FBS0MsUUFBWixHQUF1QixFQUE5QjtBQUNEO0FBVk0sQ0FBUixFQVdFO0FBQ0RDO0FBREMsQ0FYRixDOzs7Ozs7Ozs7Ozs7Ozt3TUFlQ0MsTSxHQUFTO0FBQ1BDLDhCQUF3QjtBQURqQixLLFFBSVRDLEksR0FBTztBQUNMQyxZQUFNLEVBREQ7QUFFTEMsY0FBUSxJQUZIO0FBR0xDLGNBQVE7QUFISCxLLFFBTVBDLE8sR0FBVTtBQUNGQyxpQkFERSx5QkFDWTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNsQjtBQUNNQyx5QkFGWSxHQUVGLE9BQUtGLE9BQUwsQ0FBYUUsT0FBYixDQUFxQkMsSUFBckIsUUFGRTtBQUFBO0FBQUEseUJBR0EsZUFBS0YsV0FBTCxDQUFpQjtBQUNqQ0csMkJBQU87QUFEMEIsbUJBQWpCLENBSEE7O0FBQUE7QUFHWkMscUJBSFk7QUFBQTtBQUFBO0FBQUEseUJBUUcsT0FBS25CLEdBQUwsQ0FBU29CLFdBQVQsQ0FBcUI7QUFDdENDLDBCQUFNLE9BRGdDO0FBRXRDQyxnQ0FBWUgsSUFBSUksYUFBSixDQUFrQixDQUFsQjtBQUYwQixtQkFBckIsQ0FSSDs7QUFBQTtBQVFWQyxzQkFSVTtBQUFBO0FBQUEseUJBWUUsT0FBS3hCLEdBQUwsQ0FBU3lCLFFBQVQsQ0FBa0I7QUFDbENDLDJCQUFPLEtBRDJCO0FBRWxDTCwwQkFBTSxPQUY0QjtBQUdsQ2xCLHdCQUFJLE9BQUtTLE1BQUwsQ0FBWWUsS0FIa0I7QUFJbENILDBCQUFNQTtBQUo0QixtQkFBbEIsQ0FaRjs7QUFBQTtBQVlWSSxxQkFaVTs7QUFrQmhCWiwwQkFBUVksR0FBUjtBQWxCZ0I7QUFBQTs7QUFBQTtBQUFBO0FBQUE7O0FBb0JoQmpDLHNCQUFJa0MsS0FBSixDQUFVO0FBQ1JDLDBCQUFNLFdBREU7QUFFUkMseUJBQUssVUFGRztBQUdSQztBQUhRLG1CQUFWOztBQXBCZ0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUEwQm5CLE9BM0JPO0FBNEJGQyxVQTVCRSxrQkE0Qks7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDWDtBQUNNakIseUJBRkssR0FFSyxPQUFLRixPQUFMLENBQWFFLE9BQWIsQ0FBcUJDLElBQXJCLFFBRkw7QUFHTE4sc0JBSEssR0FHRSxnQkFBRXVCLElBQUYsQ0FBTyxPQUFLdkIsSUFBWixDQUhGOztBQUlYLHlCQUFLQSxJQUFMLEdBQVksRUFBWjs7QUFKVyx1QkFLUEEsS0FBS3dCLE1BTEU7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBLHlCQU9XLE9BQUtuQyxHQUFMLENBQVNvQyxRQUFULENBQWtCO0FBQ2xDekIsOEJBRGtDO0FBRWxDZSwyQkFBTyxLQUYyQjtBQUdsQ3ZCLHdCQUFJLE9BQUtTLE1BQUwsQ0FBWWU7QUFIa0IsbUJBQWxCLENBUFg7O0FBQUE7QUFPREMscUJBUEM7O0FBWVAseUJBQUtqQixJQUFMLEdBQVksRUFBWjtBQUNBSywwQkFBUVksR0FBUjtBQWJPO0FBQUE7O0FBQUE7QUFBQTtBQUFBOztBQWVQakMsc0JBQUlrQyxLQUFKLENBQVU7QUFDUkMsMEJBQU0sTUFERTtBQUVSQyx5QkFBSyxVQUZHO0FBR1JDO0FBSFEsbUJBQVY7O0FBZk87QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFzQlosT0FsRE87QUFtRFJLLGFBbkRRLG1CQW1EQUMsQ0FuREEsRUFtREc7QUFDVCxhQUFLM0IsSUFBTCxHQUFZMkIsRUFBRUMsTUFBRixDQUFTQyxLQUFyQjtBQUNELE9BckRPO0FBc0RSeEIsYUF0RFEsbUJBc0RDWSxHQXRERCxFQXNETTtBQUNaO0FBRFksWUFFSnJCLGVBRkksR0FFZ0IsS0FBS08sT0FGckIsQ0FFSlAsZUFGSTtBQUFBLFlBR0prQyxTQUhJLEdBR1UsS0FBS3pDLEdBSGYsQ0FHSnlDLFNBSEk7O0FBSVosWUFBTXRDLEtBQUt5QixJQUFJYyxNQUFmO0FBQ0EsWUFBTUMsYUFBYUYsVUFBVSxLQUFLeEMsSUFBTCxJQUFhLEVBQXZCLEVBQTJCMkIsR0FBM0IsQ0FBbkI7QUFDQXJCLHdCQUFnQkosRUFBaEIsRUFBb0J3QyxVQUFwQjtBQUNBLGFBQUs5QixNQUFMLEdBQWMsSUFBZDtBQUNBLGFBQUsrQixNQUFMO0FBQ0QsT0EvRE87QUFnRVJDLGlCQWhFUSx5QkFnRU07QUFDWixhQUFLaEMsTUFBTCxHQUFjLEtBQWQ7QUFDRDtBQWxFTyxLOzs7Ozs7K0ZBcUVHaUMsTzs7Ozs7O0FBRVRDLHNCLEdBQ0VELE8sQ0FERkMsTTs7QUFFRixxQkFBSzVDLEVBQUwsR0FBVTRDLE1BQVY7QUFDQTs7dUJBQ3FCLGNBQUlDLFdBQUosQ0FBZ0JELE1BQWhCLEM7OztBQUFmbkMsc0I7O0FBQ04scUJBQUtBLE1BQUwsR0FBYztBQUNaZSx5QkFBT2YsT0FBT2UsS0FERjtBQUVac0IsMEJBQVFyQyxPQUFPc0MsSUFGSDtBQUdaQyw0QkFBVXZDLE9BQU93QztBQUhMLGlCQUFkOzs7Ozs7Ozs7Ozs7Ozs7Ozs7NkJBT087O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Q7OztFQXRHK0IsZUFBS3RCLEk7a0JBQWxCbEMsSSIsImZpbGUiOiJjaGF0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuaW1wb3J0IHtcbiAgY29ubmVjdFxufSBmcm9tICd3ZXB5LXJlZHV4J1xuaW1wb3J0IE5JTSBmcm9tICcuLi91dGlscy9uaW0nXG5pbXBvcnQgKiBhcyBsb2cgZnJvbSAnLi4vdXRpbHMvbG9nJ1xuaW1wb3J0IFIgZnJvbSAnLi4vbGlicy9yYW1kYSdcbmltcG9ydCB7XG4gIHJlZnJlc2hNc2dzQnlUb1xufSBmcm9tICcuLi9hY3Rpb25zL2NoYXQnXG5cbkBjb25uZWN0KHtcbiAgdXNlcjogc3RhdGUgPT4gc3RhdGUuY29tbW9uLnVzZXIsXG4gIG5pbTogc3RhdGUgPT4gc3RhdGUuY29tbW9uLm5pbSxcbiAgbXNnczogZnVuY3Rpb24oc3RhdGUpIHtcbiAgICByZXR1cm4gc3RhdGUuY2hhdC5tc2dzW3RoaXMudG9dIHx8IFtdXG4gIH0sXG4gIGludG9WaWV3OiBmdW5jdGlvbihzdGF0ZSkge1xuICAgIGNvbnN0IG1zZ3MgPSBzdGF0ZS5jaGF0Lm1zZ3NbdGhpcy50b10gfHwgW11cbiAgICBjb25zdCBsYXN0ID0gUi5sYXN0KG1zZ3MpXG4gICAgcmV0dXJuIGxhc3QgPyBsYXN0LmlkU2VydmVyIDogJydcbiAgfVxufSwge1xuICByZWZyZXNoTXNnc0J5VG9cbn0pXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDaGF0IGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgY29uZmlnID0ge1xuICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICfogYrlpKknXG4gIH1cblxuICBkYXRhID0ge1xuICAgIHRleHQ6ICcnLFxuICAgIGZyaWVuZDogbnVsbCxcbiAgICBzZW5kZWQ6IGZhbHNlXG4gIH1cblxuICBtZXRob2RzID0ge1xuICAgIGFzeW5jIGNob29zZUltYWdlKCkge1xuICAgICAgLy8g6L+b6KGM5Zu+54mH6YCJ5oup5bm25LiK5LygXG4gICAgICBjb25zdCBwdXNoTXNnID0gdGhpcy5tZXRob2RzLnB1c2hNc2cuYmluZCh0aGlzKVxuICAgICAgY29uc3QgcmVzID0gYXdhaXQgd2VweS5jaG9vc2VJbWFnZSh7XG4gICAgICAgIGNvdW50OiAxXG4gICAgICB9KVxuXG4gICAgICB0cnkge1xuICAgICAgICBjb25zdCBmaWxlID0gYXdhaXQgdGhpcy5uaW0ucHJldmlld0ZpbGUoe1xuICAgICAgICAgIHR5cGU6ICdpbWFnZScsXG4gICAgICAgICAgd3hGaWxlUGF0aDogcmVzLnRlbXBGaWxlUGF0aHNbMF1cbiAgICAgICAgfSlcbiAgICAgICAgY29uc3QgbXNnID0gYXdhaXQgdGhpcy5uaW0uc2VuZEZpbGUoe1xuICAgICAgICAgIHNjZW5lOiAncDJwJyxcbiAgICAgICAgICB0eXBlOiAnaW1hZ2UnLFxuICAgICAgICAgIHRvOiB0aGlzLmZyaWVuZC5hY2NpZCxcbiAgICAgICAgICBmaWxlOiBmaWxlXG4gICAgICAgIH0pXG4gICAgICAgIHB1c2hNc2cobXNnKVxuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgbG9nLmVycm9yKHtcbiAgICAgICAgICBwYWdlOiAnY2hhdHJvb21zJyxcbiAgICAgICAgICBvcHI6ICdzZW5kRmlsZScsXG4gICAgICAgICAgaW5mbzogZXJyb3JcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9LFxuICAgIGFzeW5jIHNlbmQoKSB7XG4gICAgICAvLyA/IHdoeSBiaW5kXG4gICAgICBjb25zdCBwdXNoTXNnID0gdGhpcy5tZXRob2RzLnB1c2hNc2cuYmluZCh0aGlzKVxuICAgICAgY29uc3QgdGV4dCA9IFIudHJpbSh0aGlzLnRleHQpXG4gICAgICB0aGlzLnRleHQgPSAnJ1xuICAgICAgaWYgKHRleHQubGVuZ3RoKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgY29uc3QgbXNnID0gYXdhaXQgdGhpcy5uaW0uc2VuZFRleHQoe1xuICAgICAgICAgICAgdGV4dCxcbiAgICAgICAgICAgIHNjZW5lOiAncDJwJyxcbiAgICAgICAgICAgIHRvOiB0aGlzLmZyaWVuZC5hY2NpZFxuICAgICAgICAgIH0pXG4gICAgICAgICAgdGhpcy50ZXh0ID0gJydcbiAgICAgICAgICBwdXNoTXNnKG1zZylcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgIGxvZy5lcnJvcih7XG4gICAgICAgICAgICBwYWdlOiAnY2hhdCcsXG4gICAgICAgICAgICBvcHI6ICdzZW5kVGV4dCcsXG4gICAgICAgICAgICBpbmZvOiBlXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG4gICAgc2V0VGV4dChlKSB7XG4gICAgICB0aGlzLnRleHQgPSBlLmRldGFpbC52YWx1ZVxuICAgIH0sXG4gICAgcHVzaE1zZyAobXNnKSB7XG4gICAgICAvLyDmlrDmtojmga/mlL7lhaVcbiAgICAgIGNvbnN0IHsgcmVmcmVzaE1zZ3NCeVRvIH0gPSB0aGlzLm1ldGhvZHNcbiAgICAgIGNvbnN0IHsgbWVyZ2VNc2dzIH0gPSB0aGlzLm5pbVxuICAgICAgY29uc3QgdG8gPSBtc2cudGFyZ2V0XG4gICAgICBjb25zdCBtZXJnZWRCeVRvID0gbWVyZ2VNc2dzKHRoaXMubXNncyB8fCBbXSwgbXNnKVxuICAgICAgcmVmcmVzaE1zZ3NCeVRvKHRvLCBtZXJnZWRCeVRvKVxuICAgICAgdGhpcy5zZW5kZWQgPSB0cnVlXG4gICAgICB0aGlzLiRhcHBseSgpXG4gICAgfSxcbiAgICBoYW5kbGVGb2N1cygpIHtcbiAgICAgIHRoaXMuc2VuZGVkID0gZmFsc2VcbiAgICB9XG4gIH1cblxuICBhc3luYyBvbkxvYWQob3B0aW9ucykge1xuICAgIGNvbnN0IHtcbiAgICAgIGZhY2NpZFxuICAgIH0gPSBvcHRpb25zXG4gICAgdGhpcy50byA9IGZhY2NpZFxuICAgIC8vIOiOt+W+l+WlveWPi+WvueixoVxuICAgIGNvbnN0IGZyaWVuZCA9IGF3YWl0IE5JTS5nZXRVc2VySW5mbyhmYWNjaWQpXG4gICAgdGhpcy5mcmllbmQgPSB7XG4gICAgICBhY2NpZDogZnJpZW5kLmFjY2lkLFxuICAgICAgYXZhdGFyOiBmcmllbmQuaWNvbixcbiAgICAgIG5pY2tuYW1lOiBmcmllbmQubmFtZVxuICAgIH1cbiAgfVxuXG4gIG9uU2hvdygpIHtcblxuICAgIC8vIGNvbnN0IHF1ZXJ5ID0gd2VweS5jcmVhdGVTZWxlY3RvclF1ZXJ5KClcbiAgICAvLyBxdWVyeS5zZWxlY3QoJyNsaXN0JykuYm91bmRpbmdDbGllbnRSZWN0KHJlY3QgPT4ge1xuICAgIC8vICAgY29uc29sZS5sb2coJ3JlY3RhbmdsZScsIHJlY3QpXG4gICAgLy8gICB0aGlzLnNjcm9sbFRvcCA9IHJlY3QuYm90dG9tXG4gICAgLy8gICB0aGlzLiRhcHBseSgpXG4gICAgLy8gfSkuZXhlYygpXG4gIH1cbn1cbiJdfQ==