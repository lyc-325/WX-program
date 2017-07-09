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
          var res, file;
          return _regenerator2.default.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  _context.next = 2;
                  return _wepy2.default.chooseImage({
                    count: 1
                  });

                case 2:
                  res = _context.sent;

                  console.log('tmp file paths', res);
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
                  _context.next = 15;
                  break;

                case 12:
                  _context.prev = 12;
                  _context.t0 = _context['catch'](4);

                  log.error({
                    page: 'chatrooms',
                    opr: 'sendFile',
                    info: _context.t0
                  });

                case 15:
                case 'end':
                  return _context.stop();
              }
            }
          }, _callee, _this2, [[4, 12]]);
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoYXQuanMiXSwibmFtZXMiOlsibG9nIiwiQ2hhdCIsInVzZXIiLCJzdGF0ZSIsImNvbW1vbiIsIm5pbSIsIm1zZ3MiLCJjaGF0IiwidG8iLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiZGF0YSIsInRleHQiLCJmcmllbmQiLCJtZXRob2RzIiwiY2hvb3NlSW1hZ2UiLCJjb3VudCIsInJlcyIsImNvbnNvbGUiLCJwcmV2aWV3RmlsZSIsInR5cGUiLCJ3eEZpbGVQYXRoIiwidGVtcEZpbGVQYXRocyIsImZpbGUiLCJzZW5kRmlsZSIsInNjZW5lIiwiYWNjaWQiLCJlcnJvciIsInBhZ2UiLCJvcHIiLCJpbmZvIiwic2VuZCIsInRyaW0iLCJsZW5ndGgiLCJzZW5kVGV4dCIsIiRhcHBseSIsInNldFRleHQiLCJlIiwiZGV0YWlsIiwidmFsdWUiLCJvcHRpb25zIiwiZmFjY2lkIiwiZ2V0VXNlckluZm8iLCJhdmF0YXIiLCJpY29uIiwibmlja25hbWUiLCJuYW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7Ozs7QUFDQTs7QUFHQTs7OztBQUNBOztJQUFZQSxHOztBQUNaOzs7Ozs7OztJQVNxQkMsSSxXQVBwQix3QkFBUTtBQUNQQyxRQUFNO0FBQUEsV0FBU0MsTUFBTUMsTUFBTixDQUFhRixJQUF0QjtBQUFBLEdBREM7QUFFUEcsT0FBSztBQUFBLFdBQVNGLE1BQU1DLE1BQU4sQ0FBYUMsR0FBdEI7QUFBQSxHQUZFO0FBR1BDLFFBQU0sY0FBU0gsS0FBVCxFQUFnQjtBQUNwQixXQUFPQSxNQUFNSSxJQUFOLENBQVdELElBQVgsQ0FBZ0IsS0FBS0UsRUFBckIsS0FBNEIsRUFBbkM7QUFDRDtBQUxNLENBQVIsQzs7Ozs7Ozs7Ozs7Ozs7d01BUUNDLE0sR0FBUztBQUNQQyw4QkFBd0I7QUFEakIsSyxRQUlUQyxJLEdBQU87QUFDTEMsWUFBTSxFQUREO0FBRUxDLGNBQVE7QUFGSCxLLFFBS1BDLE8sR0FBVTtBQUNGQyxpQkFERSx5QkFDWTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBQ0EsZUFBS0EsV0FBTCxDQUFpQjtBQUNqQ0MsMkJBQU87QUFEMEIsbUJBQWpCLENBREE7O0FBQUE7QUFDWkMscUJBRFk7O0FBSWxCQywwQkFBUWxCLEdBQVIsQ0FBWSxnQkFBWixFQUE4QmlCLEdBQTlCO0FBSmtCO0FBQUE7QUFBQSx5QkFNRyxPQUFLWixHQUFMLENBQVNjLFdBQVQsQ0FBcUI7QUFDdENDLDBCQUFNLE9BRGdDO0FBRXRDQyxnQ0FBWUosSUFBSUssYUFBSixDQUFrQixDQUFsQjtBQUYwQixtQkFBckIsQ0FOSDs7QUFBQTtBQU1WQyxzQkFOVTtBQUFBO0FBQUEseUJBVVYsT0FBS2xCLEdBQUwsQ0FBU21CLFFBQVQsQ0FBa0I7QUFDdEJDLDJCQUFPLEtBRGU7QUFFdEJMLDBCQUFNLE9BRmdCO0FBR3RCWix3QkFBSSxPQUFLSyxNQUFMLENBQVlhLEtBSE07QUFJdEJILDBCQUFNQTtBQUpnQixtQkFBbEIsQ0FWVTs7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBOztBQWlCaEJ2QixzQkFBSTJCLEtBQUosQ0FBVTtBQUNSQywwQkFBTSxXQURFO0FBRVJDLHlCQUFLLFVBRkc7QUFHUkM7QUFIUSxtQkFBVjs7QUFqQmdCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBdUJuQixPQXhCTztBQXlCRkMsVUF6QkUsa0JBeUJLO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0xuQixzQkFESyxHQUNFLGdCQUFFb0IsSUFBRixDQUFPLE9BQUtwQixJQUFaLENBREY7O0FBRVgseUJBQUtBLElBQUwsR0FBWSxFQUFaOztBQUZXLHVCQUdQQSxLQUFLcUIsTUFIRTtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUEseUJBS0QsT0FBSzVCLEdBQUwsQ0FBUzZCLFFBQVQsQ0FBa0I7QUFDdEJ0Qiw4QkFEc0I7QUFFdEJhLDJCQUFPLEtBRmU7QUFHdEJqQix3QkFBSSxPQUFLSyxNQUFMLENBQVlhO0FBSE0sbUJBQWxCLENBTEM7O0FBQUE7QUFVUCx5QkFBS2QsSUFBTCxHQUFZLEVBQVo7QUFDQSx5QkFBS3VCLE1BQUw7QUFYTztBQUFBOztBQUFBO0FBQUE7QUFBQTs7QUFhUG5DLHNCQUFJMkIsS0FBSixDQUFVO0FBQ1JDLDBCQUFNLE1BREU7QUFFUkMseUJBQUssVUFGRztBQUdSQztBQUhRLG1CQUFWO0FBS0EseUJBQUtLLE1BQUw7O0FBbEJPO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBcUJaLE9BOUNPO0FBK0NSQyxhQS9DUSxtQkErQ0FDLENBL0NBLEVBK0NHO0FBQ1QsYUFBS3pCLElBQUwsR0FBWXlCLEVBQUVDLE1BQUYsQ0FBU0MsS0FBckI7QUFDRDtBQWpETyxLOzs7Ozs7K0ZBb0RHQyxPOzs7Ozs7QUFFVEMsc0IsR0FDRUQsTyxDQURGQyxNOztBQUVGLHFCQUFLakMsRUFBTCxHQUFVaUMsTUFBVjtBQUNBOzt1QkFDcUIsY0FBSUMsV0FBSixDQUFnQkQsTUFBaEIsQzs7O0FBQWY1QixzQjs7QUFDTixxQkFBS0EsTUFBTCxHQUFjO0FBQ1phLHlCQUFPYixPQUFPYSxLQURGO0FBRVppQiwwQkFBUTlCLE9BQU8rQixJQUZIO0FBR1pDLDRCQUFVaEMsT0FBT2lDO0FBSEwsaUJBQWQ7QUFLQSxxQkFBS1gsTUFBTDs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBMUU4QixlQUFLUCxJO2tCQUFsQjNCLEkiLCJmaWxlIjoiY2hhdC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcbmltcG9ydCB7XG4gIGNvbm5lY3Rcbn0gZnJvbSAnd2VweS1yZWR1eCdcbmltcG9ydCBOSU0gZnJvbSAnLi4vdXRpbHMvbmltJ1xuaW1wb3J0ICogYXMgbG9nIGZyb20gJy4uL3V0aWxzL2xvZydcbmltcG9ydCBSIGZyb20gJy4uL2xpYnMvcmFtZGEnXG5cbkBjb25uZWN0KHtcbiAgdXNlcjogc3RhdGUgPT4gc3RhdGUuY29tbW9uLnVzZXIsXG4gIG5pbTogc3RhdGUgPT4gc3RhdGUuY29tbW9uLm5pbSxcbiAgbXNnczogZnVuY3Rpb24oc3RhdGUpIHtcbiAgICByZXR1cm4gc3RhdGUuY2hhdC5tc2dzW3RoaXMudG9dIHx8IFtdXG4gIH1cbn0pXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDaGF0IGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgY29uZmlnID0ge1xuICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICfogYrlpKknXG4gIH1cblxuICBkYXRhID0ge1xuICAgIHRleHQ6ICcnLFxuICAgIGZyaWVuZDogbnVsbFxuICB9XG5cbiAgbWV0aG9kcyA9IHtcbiAgICBhc3luYyBjaG9vc2VJbWFnZSgpIHtcbiAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IHdlcHkuY2hvb3NlSW1hZ2Uoe1xuICAgICAgICBjb3VudDogMVxuICAgICAgfSlcbiAgICAgIGNvbnNvbGUubG9nKCd0bXAgZmlsZSBwYXRocycsIHJlcylcbiAgICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IGZpbGUgPSBhd2FpdCB0aGlzLm5pbS5wcmV2aWV3RmlsZSh7XG4gICAgICAgICAgdHlwZTogJ2ltYWdlJyxcbiAgICAgICAgICB3eEZpbGVQYXRoOiByZXMudGVtcEZpbGVQYXRoc1swXVxuICAgICAgICB9KVxuICAgICAgICBhd2FpdCB0aGlzLm5pbS5zZW5kRmlsZSh7XG4gICAgICAgICAgc2NlbmU6ICdwMnAnLFxuICAgICAgICAgIHR5cGU6ICdpbWFnZScsXG4gICAgICAgICAgdG86IHRoaXMuZnJpZW5kLmFjY2lkLFxuICAgICAgICAgIGZpbGU6IGZpbGVcbiAgICAgICAgfSlcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGxvZy5lcnJvcih7XG4gICAgICAgICAgcGFnZTogJ2NoYXRyb29tcycsXG4gICAgICAgICAgb3ByOiAnc2VuZEZpbGUnLFxuICAgICAgICAgIGluZm86IGVycm9yXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfSxcbiAgICBhc3luYyBzZW5kKCkge1xuICAgICAgY29uc3QgdGV4dCA9IFIudHJpbSh0aGlzLnRleHQpXG4gICAgICB0aGlzLnRleHQgPSAnJ1xuICAgICAgaWYgKHRleHQubGVuZ3RoKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgYXdhaXQgdGhpcy5uaW0uc2VuZFRleHQoe1xuICAgICAgICAgICAgdGV4dCxcbiAgICAgICAgICAgIHNjZW5lOiAncDJwJyxcbiAgICAgICAgICAgIHRvOiB0aGlzLmZyaWVuZC5hY2NpZFxuICAgICAgICAgIH0pXG4gICAgICAgICAgdGhpcy50ZXh0ID0gJydcbiAgICAgICAgICB0aGlzLiRhcHBseSgpXG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICBsb2cuZXJyb3Ioe1xuICAgICAgICAgICAgcGFnZTogJ2NoYXQnLFxuICAgICAgICAgICAgb3ByOiAnc2VuZFRleHQnLFxuICAgICAgICAgICAgaW5mbzogZVxuICAgICAgICAgIH0pXG4gICAgICAgICAgdGhpcy4kYXBwbHkoKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcbiAgICBzZXRUZXh0KGUpIHtcbiAgICAgIHRoaXMudGV4dCA9IGUuZGV0YWlsLnZhbHVlXG4gICAgfVxuICB9XG5cbiAgYXN5bmMgb25Mb2FkKG9wdGlvbnMpIHtcbiAgICBjb25zdCB7XG4gICAgICBmYWNjaWRcbiAgICB9ID0gb3B0aW9uc1xuICAgIHRoaXMudG8gPSBmYWNjaWRcbiAgICAvLyDojrflvpflpb3lj4vlr7nosaFcbiAgICBjb25zdCBmcmllbmQgPSBhd2FpdCBOSU0uZ2V0VXNlckluZm8oZmFjY2lkKVxuICAgIHRoaXMuZnJpZW5kID0ge1xuICAgICAgYWNjaWQ6IGZyaWVuZC5hY2NpZCxcbiAgICAgIGF2YXRhcjogZnJpZW5kLmljb24sXG4gICAgICBuaWNrbmFtZTogZnJpZW5kLm5hbWVcbiAgICB9XG4gICAgdGhpcy4kYXBwbHkoKVxuICB9XG59XG4iXX0=