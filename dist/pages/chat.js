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
  }
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
      friend: null
    }, _this.methods = {
      chooseImage: function chooseImage() {
        var _this2 = this;

        return (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee() {
          var result;
          return _regenerator2.default.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  result = _wepy2.default.chooseImage();

                  console.log('images', result);

                case 2:
                case 'end':
                  return _context.stop();
              }
            }
          }, _callee, _this2);
        }))();
      },
      send: function send() {
        var _this3 = this;

        return (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee2() {
          var text;
          return _regenerator2.default.wrap(function _callee2$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  text = _ramda2.default.trim(_this3.text);

                  _this3.text = '';

                  if (!text.length) {
                    _context2.next = 14;
                    break;
                  }

                  _context2.prev = 3;
                  _context2.next = 6;
                  return _this3.nim.sendText({
                    text: text,
                    scene: 'p2p',
                    to: _this3.friend.accid
                  });

                case 6:
                  _this3.text = '';
                  _this3.$apply();
                  _context2.next = 14;
                  break;

                case 10:
                  _context2.prev = 10;
                  _context2.t0 = _context2['catch'](3);

                  log.error({
                    page: 'chat',
                    opr: 'sendText',
                    info: _context2.t0
                  });
                  _this3.$apply();

                case 14:
                case 'end':
                  return _context2.stop();
              }
            }
          }, _callee2, _this3, [[3, 10]]);
        }))();
      },
      setText: function setText(e) {
        this.text = e.detail.value;
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
                this.$apply();

              case 7:
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
  }]);
  return Chat;
}(_wepy2.default.page)) || _class);

Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Chat , 'pages/chat'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoYXQuanMiXSwibmFtZXMiOlsibG9nIiwiQ2hhdCIsInVzZXIiLCJzdGF0ZSIsImNvbW1vbiIsIm5pbSIsIm1zZ3MiLCJjaGF0IiwidG8iLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiZGF0YSIsInRleHQiLCJmcmllbmQiLCJtZXRob2RzIiwiY2hvb3NlSW1hZ2UiLCJyZXN1bHQiLCJjb25zb2xlIiwic2VuZCIsInRyaW0iLCJsZW5ndGgiLCJzZW5kVGV4dCIsInNjZW5lIiwiYWNjaWQiLCIkYXBwbHkiLCJlcnJvciIsInBhZ2UiLCJvcHIiLCJpbmZvIiwic2V0VGV4dCIsImUiLCJkZXRhaWwiLCJ2YWx1ZSIsIm9wdGlvbnMiLCJmYWNjaWQiLCJnZXRVc2VySW5mbyIsImF2YXRhciIsImljb24iLCJuaWNrbmFtZSIsIm5hbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTs7OztBQUNBOztBQUNBOzs7O0FBQ0E7O0lBQVlBLEc7O0FBQ1o7Ozs7Ozs7O0lBU3FCQyxJLFdBUHBCLHdCQUFRO0FBQ1BDLFFBQU07QUFBQSxXQUFTQyxNQUFNQyxNQUFOLENBQWFGLElBQXRCO0FBQUEsR0FEQztBQUVQRyxPQUFLO0FBQUEsV0FBU0YsTUFBTUMsTUFBTixDQUFhQyxHQUF0QjtBQUFBLEdBRkU7QUFHUEMsUUFBTSxjQUFVSCxLQUFWLEVBQWlCO0FBQ3JCLFdBQU9BLE1BQU1JLElBQU4sQ0FBV0QsSUFBWCxDQUFnQixLQUFLRSxFQUFyQixLQUE0QixFQUFuQztBQUNEO0FBTE0sQ0FBUixDOzs7Ozs7Ozs7Ozs7Ozt3TUFRQ0MsTSxHQUFTO0FBQ1BDLDhCQUF3QjtBQURqQixLLFFBSVRDLEksR0FBTztBQUNMQyxZQUFNLEVBREQ7QUFFTEMsY0FBUTtBQUZILEssUUFLUEMsTyxHQUFVO0FBQ0ZDLGlCQURFLHlCQUNZO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ1pDLHdCQURZLEdBQ0gsZUFBS0QsV0FBTCxFQURHOztBQUVsQkUsMEJBQVFqQixHQUFSLENBQVksUUFBWixFQUFzQmdCLE1BQXRCOztBQUZrQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUduQixPQUpPO0FBS0ZFLFVBTEUsa0JBS0s7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDTE4sc0JBREssR0FDRSxnQkFBRU8sSUFBRixDQUFPLE9BQUtQLElBQVosQ0FERjs7QUFFWCx5QkFBS0EsSUFBTCxHQUFZLEVBQVo7O0FBRlcsdUJBR1BBLEtBQUtRLE1BSEU7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBLHlCQUtELE9BQUtmLEdBQUwsQ0FBU2dCLFFBQVQsQ0FBa0I7QUFDdEJULDhCQURzQjtBQUV0QlUsMkJBQU8sS0FGZTtBQUd0QmQsd0JBQUksT0FBS0ssTUFBTCxDQUFZVTtBQUhNLG1CQUFsQixDQUxDOztBQUFBO0FBVVAseUJBQUtYLElBQUwsR0FBWSxFQUFaO0FBQ0EseUJBQUtZLE1BQUw7QUFYTztBQUFBOztBQUFBO0FBQUE7QUFBQTs7QUFhUHhCLHNCQUFJeUIsS0FBSixDQUFVO0FBQ1JDLDBCQUFNLE1BREU7QUFFUkMseUJBQUssVUFGRztBQUdSQztBQUhRLG1CQUFWO0FBS0EseUJBQUtKLE1BQUw7O0FBbEJPO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBcUJaLE9BMUJPO0FBMkJSSyxhQTNCUSxtQkEyQkFDLENBM0JBLEVBMkJHO0FBQ1QsYUFBS2xCLElBQUwsR0FBWWtCLEVBQUVDLE1BQUYsQ0FBU0MsS0FBckI7QUFDRDtBQTdCTyxLOzs7Ozs7K0ZBZ0NHQyxPOzs7Ozs7QUFDSEMsc0IsR0FBV0QsTyxDQUFYQyxNOztBQUNSLHFCQUFLMUIsRUFBTCxHQUFVMEIsTUFBVjtBQUNBOzt1QkFDcUIsY0FBSUMsV0FBSixDQUFnQkQsTUFBaEIsQzs7O0FBQWZyQixzQjs7QUFDTixxQkFBS0EsTUFBTCxHQUFjO0FBQ1pVLHlCQUFPVixPQUFPVSxLQURGO0FBRVphLDBCQUFRdkIsT0FBT3dCLElBRkg7QUFHWkMsNEJBQVV6QixPQUFPMEI7QUFITCxpQkFBZDtBQUtBLHFCQUFLZixNQUFMOzs7Ozs7Ozs7Ozs7Ozs7Ozs7RUFwRDhCLGVBQUtFLEk7a0JBQWxCekIsSSIsImZpbGUiOiJjaGF0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3dlcHktcmVkdXgnXG5pbXBvcnQgTklNIGZyb20gJy4uL3V0aWxzL25pbSdcbmltcG9ydCAqIGFzIGxvZyBmcm9tICcuLi91dGlscy9sb2cnXG5pbXBvcnQgUiBmcm9tICcuLi9saWJzL3JhbWRhJ1xuXG5AY29ubmVjdCh7XG4gIHVzZXI6IHN0YXRlID0+IHN0YXRlLmNvbW1vbi51c2VyLFxuICBuaW06IHN0YXRlID0+IHN0YXRlLmNvbW1vbi5uaW0sXG4gIG1zZ3M6IGZ1bmN0aW9uIChzdGF0ZSkge1xuICAgIHJldHVybiBzdGF0ZS5jaGF0Lm1zZ3NbdGhpcy50b10gfHwgW11cbiAgfVxufSlcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENoYXQgZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICBjb25maWcgPSB7XG4gICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+iBiuWkqSdcbiAgfVxuXG4gIGRhdGEgPSB7XG4gICAgdGV4dDogJycsXG4gICAgZnJpZW5kOiBudWxsXG4gIH1cblxuICBtZXRob2RzID0ge1xuICAgIGFzeW5jIGNob29zZUltYWdlKCkge1xuICAgICAgY29uc3QgcmVzdWx0ID0gd2VweS5jaG9vc2VJbWFnZSgpXG4gICAgICBjb25zb2xlLmxvZygnaW1hZ2VzJywgcmVzdWx0KVxuICAgIH0sXG4gICAgYXN5bmMgc2VuZCgpIHtcbiAgICAgIGNvbnN0IHRleHQgPSBSLnRyaW0odGhpcy50ZXh0KVxuICAgICAgdGhpcy50ZXh0ID0gJydcbiAgICAgIGlmICh0ZXh0Lmxlbmd0aCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIGF3YWl0IHRoaXMubmltLnNlbmRUZXh0KHtcbiAgICAgICAgICAgIHRleHQsXG4gICAgICAgICAgICBzY2VuZTogJ3AycCcsXG4gICAgICAgICAgICB0bzogdGhpcy5mcmllbmQuYWNjaWRcbiAgICAgICAgICB9KVxuICAgICAgICAgIHRoaXMudGV4dCA9ICcnXG4gICAgICAgICAgdGhpcy4kYXBwbHkoKVxuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgbG9nLmVycm9yKHtcbiAgICAgICAgICAgIHBhZ2U6ICdjaGF0JyxcbiAgICAgICAgICAgIG9wcjogJ3NlbmRUZXh0JyxcbiAgICAgICAgICAgIGluZm86IGVcbiAgICAgICAgICB9KVxuICAgICAgICAgIHRoaXMuJGFwcGx5KClcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG4gICAgc2V0VGV4dChlKSB7XG4gICAgICB0aGlzLnRleHQgPSBlLmRldGFpbC52YWx1ZVxuICAgIH1cbiAgfVxuXG4gIGFzeW5jIG9uTG9hZChvcHRpb25zKSB7XG4gICAgY29uc3QgeyBmYWNjaWQgfSA9IG9wdGlvbnNcbiAgICB0aGlzLnRvID0gZmFjY2lkXG4gICAgLy8g6I635b6X5aW95Y+L5a+56LGhXG4gICAgY29uc3QgZnJpZW5kID0gYXdhaXQgTklNLmdldFVzZXJJbmZvKGZhY2NpZClcbiAgICB0aGlzLmZyaWVuZCA9IHtcbiAgICAgIGFjY2lkOiBmcmllbmQuYWNjaWQsXG4gICAgICBhdmF0YXI6IGZyaWVuZC5pY29uLFxuICAgICAgbmlja25hbWU6IGZyaWVuZC5uYW1lXG4gICAgfVxuICAgIHRoaXMuJGFwcGx5KClcbiAgfVxufVxuIl19