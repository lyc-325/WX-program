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

var _userInfo = require('./../apis/userInfo.js');

var api = _interopRequireWildcard(_userInfo);

var _account = require('./../apis/account.js');

var accountApi = _interopRequireWildcard(_account);

var _config = require('./../config.js');

var _wepyRedux = require('./../npm/wepy-redux/lib/index.js');

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var UserInfo = (_dec = (0, _wepyRedux.connect)({
  user: function user(state) {
    return state.common.user;
  }
}), _dec(_class = function (_wepy$page) {
  (0, _inherits3.default)(UserInfo, _wepy$page);

  function UserInfo() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, UserInfo);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = UserInfo.__proto__ || (0, _getPrototypeOf2.default)(UserInfo)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: '用户详情'
    }, _this.data = {
      list: [],
      userData: {
        name: '加载中...'
      },
      levelData: '',
      userId: '',
      isStar: null
    }, _this.methods = {
      handlePublishTap: function handlePublishTap(e) {
        _wepy2.default.navigateTo({
          url: 'publish'
        });
      },
      handleItemTap: function handleItemTap(e) {
        var id = this.list[e.currentTarget.dataset.index].id;
        _wepy2.default.navigateTo({
          url: 'board?id=' + id
        });
      },
      collectUserTap: function collectUserTap(options) {
        var _this2 = this;

        return (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
          var userId, id;
          return _regenerator2.default.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  userId = +_this2.userId;
                  id = _this2.user.userData.id;

                  if (!(id === userId)) {
                    _context.next = 6;
                    break;
                  }

                  wx.showToast({
                    title: '您不能关注自己',
                    icon: 'loading',
                    duration: 2000
                  });
                  _context.next = 11;
                  break;

                case 6:
                  _context.next = 8;
                  return accountApi.userStar(id, userId);

                case 8:
                  _this2.isStar = true;
                  wx.showToast({
                    title: '已关注',
                    icon: 'success',
                    duration: 2000
                  });
                  _this2.$apply();

                case 11:
                case 'end':
                  return _context.stop();
              }
            }
          }, _callee, _this2);
        }))();
      },
      DelCollectUserTap: function DelCollectUserTap(options) {
        var _this3 = this;

        return (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2() {
          var userId, id;
          return _regenerator2.default.wrap(function _callee2$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  userId = +_this3.userId;
                  id = _this3.user.userData.id;
                  _context2.next = 4;
                  return accountApi.userUnstar(id, userId);

                case 4:
                  _this3.isStar = false;
                  wx.showToast({
                    title: '已取消关注',
                    icon: 'success',
                    duration: 2000
                  });
                  _this3.$apply();

                case 7:
                case 'end':
                  return _context2.stop();
              }
            }
          }, _callee2, _this3);
        }))();
      }
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(UserInfo, [{
    key: 'onLoad',
    value: function () {
      var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3(options) {
        var jfToken, self, resData, is_stared, res;
        return _regenerator2.default.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                this.userId = options.id;
                jfToken = this.user.jfToken;
                self = this;
                _context3.next = 5;
                return api.getOtherUserInfo(options.id, jfToken);

              case 5:
                resData = _context3.sent;
                is_stared = resData.is_stared;


                this.isStar = is_stared;
                self.userData = resData;
                _context3.next = 11;
                return api.getMsgList(options.id);

              case 11:
                res = _context3.sent;

                this.list = res.map(function (item) {
                  return {
                    id: item.id,
                    title: item.title,
                    content: item.text,
                    createdBy: item.author.name,
                    createdAt: item.dateline,
                    cover: item.pic_urls[0] ? '' + _config.jf.baseServer + item.pic_urls[0] : '',
                    read: item.click_num
                  };
                });
                self.$apply();

              case 14:
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
  return UserInfo;
}(_wepy2.default.page)) || _class);

Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(UserInfo , 'pages/userInfo'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVzZXJJbmZvLmpzIl0sIm5hbWVzIjpbImFwaSIsImFjY291bnRBcGkiLCJVc2VySW5mbyIsInVzZXIiLCJzdGF0ZSIsImNvbW1vbiIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCJkYXRhIiwibGlzdCIsInVzZXJEYXRhIiwibmFtZSIsImxldmVsRGF0YSIsInVzZXJJZCIsImlzU3RhciIsIm1ldGhvZHMiLCJoYW5kbGVQdWJsaXNoVGFwIiwiZSIsIm5hdmlnYXRlVG8iLCJ1cmwiLCJoYW5kbGVJdGVtVGFwIiwiaWQiLCJjdXJyZW50VGFyZ2V0IiwiZGF0YXNldCIsImluZGV4IiwiY29sbGVjdFVzZXJUYXAiLCJvcHRpb25zIiwid3giLCJzaG93VG9hc3QiLCJ0aXRsZSIsImljb24iLCJkdXJhdGlvbiIsInVzZXJTdGFyIiwiJGFwcGx5IiwiRGVsQ29sbGVjdFVzZXJUYXAiLCJ1c2VyVW5zdGFyIiwiamZUb2tlbiIsInNlbGYiLCJnZXRPdGhlclVzZXJJbmZvIiwicmVzRGF0YSIsImlzX3N0YXJlZCIsImdldE1zZ0xpc3QiLCJyZXMiLCJtYXAiLCJpdGVtIiwiY29udGVudCIsInRleHQiLCJjcmVhdGVkQnkiLCJhdXRob3IiLCJjcmVhdGVkQXQiLCJkYXRlbGluZSIsImNvdmVyIiwicGljX3VybHMiLCJiYXNlU2VydmVyIiwicmVhZCIsImNsaWNrX251bSIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTs7OztBQUNBOztJQUFZQSxHOztBQUNaOztJQUFZQyxVOztBQUNaOztBQUNBOzs7Ozs7SUFPcUJDLFEsV0FMcEIsd0JBQVE7QUFDUEMsTUFETyxnQkFDRkMsS0FERSxFQUNLO0FBQ1YsV0FBT0EsTUFBTUMsTUFBTixDQUFhRixJQUFwQjtBQUNEO0FBSE0sQ0FBUixDOzs7Ozs7Ozs7Ozs7OztnTkFNQ0csTSxHQUFTO0FBQ1BDLDhCQUF3QjtBQURqQixLLFFBSVRDLEksR0FBTztBQUNMQyxZQUFNLEVBREQ7QUFFTEMsZ0JBQVU7QUFDUkMsY0FBTTtBQURFLE9BRkw7QUFLTEMsaUJBQVcsRUFMTjtBQU1MQyxjQUFRLEVBTkg7QUFPTEMsY0FBUTtBQVBILEssUUFVUEMsTyxHQUFVO0FBQ1JDLHNCQURRLDRCQUNTQyxDQURULEVBQ1k7QUFDbEIsdUJBQUtDLFVBQUwsQ0FBZ0I7QUFDZEMsZUFBSztBQURTLFNBQWhCO0FBR0QsT0FMTztBQU1SQyxtQkFOUSx5QkFNTUgsQ0FOTixFQU1TO0FBQ2YsWUFBTUksS0FBSyxLQUFLWixJQUFMLENBQVVRLEVBQUVLLGFBQUYsQ0FBZ0JDLE9BQWhCLENBQXdCQyxLQUFsQyxFQUF5Q0gsRUFBcEQ7QUFDQSx1QkFBS0gsVUFBTCxDQUFnQjtBQUNkQyw2QkFBaUJFO0FBREgsU0FBaEI7QUFHRCxPQVhPO0FBWUZJLG9CQVpFLDBCQVlhQyxPQVpiLEVBWXFCO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ3ZCYix3QkFEdUIsR0FDZCxDQUFDLE9BQUtBLE1BRFE7QUFFdEJRLG9CQUZzQixHQUVoQixPQUFLbEIsSUFBTCxDQUFVTyxRQUZNLENBRXRCVyxFQUZzQjs7QUFBQSx3QkFHdkJBLE9BQU9SLE1BSGdCO0FBQUE7QUFBQTtBQUFBOztBQUl6QmMscUJBQUdDLFNBQUgsQ0FBYTtBQUNYQywyQkFBTyxTQURJO0FBRVhDLDBCQUFNLFNBRks7QUFHWEMsOEJBQVU7QUFIQyxtQkFBYjtBQUp5QjtBQUFBOztBQUFBO0FBQUE7QUFBQSx5QkFVbkI5QixXQUFXK0IsUUFBWCxDQUFvQlgsRUFBcEIsRUFBdUJSLE1BQXZCLENBVm1COztBQUFBO0FBV3pCLHlCQUFLQyxNQUFMLEdBQWMsSUFBZDtBQUNBYSxxQkFBR0MsU0FBSCxDQUFhO0FBQ1hDLDJCQUFPLEtBREk7QUFFWEMsMEJBQU0sU0FGSztBQUdYQyw4QkFBVTtBQUhDLG1CQUFiO0FBS0EseUJBQUtFLE1BQUw7O0FBakJ5QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQW1CNUIsT0EvQk87QUFnQ0ZDLHVCQWhDRSw2QkFnQ2dCUixPQWhDaEIsRUFnQ3dCO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQzFCYix3QkFEMEIsR0FDakIsQ0FBQyxPQUFLQSxNQURXO0FBRXpCUSxvQkFGeUIsR0FFbkIsT0FBS2xCLElBQUwsQ0FBVU8sUUFGUyxDQUV6QlcsRUFGeUI7QUFBQTtBQUFBLHlCQUd4QnBCLFdBQVdrQyxVQUFYLENBQXNCZCxFQUF0QixFQUF5QlIsTUFBekIsQ0FId0I7O0FBQUE7QUFJOUIseUJBQUtDLE1BQUwsR0FBYyxLQUFkO0FBQ0FhLHFCQUFHQyxTQUFILENBQWE7QUFDWEMsMkJBQU8sT0FESTtBQUVYQywwQkFBTSxTQUZLO0FBR1hDLDhCQUFVO0FBSEMsbUJBQWI7QUFLQSx5QkFBS0UsTUFBTDs7QUFWOEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFXL0I7QUEzQ08sSzs7Ozs7OzZHQTZDR1AsTzs7Ozs7O0FBQ1gscUJBQUtiLE1BQUwsR0FBY2EsUUFBUUwsRUFBdEI7QUFDUWUsdUIsR0FBWSxLQUFLakMsSSxDQUFqQmlDLE87QUFDSkMsb0IsR0FBTyxJOzt1QkFDU3JDLElBQUlzQyxnQkFBSixDQUFxQlosUUFBUUwsRUFBN0IsRUFBZ0NlLE9BQWhDLEM7OztBQUFoQkcsdUI7QUFDR0MseUIsR0FBYUQsTyxDQUFiQyxTOzs7QUFFUCxxQkFBSzFCLE1BQUwsR0FBYzBCLFNBQWQ7QUFDQUgscUJBQUszQixRQUFMLEdBQWdCNkIsT0FBaEI7O3VCQUNrQnZDLElBQUl5QyxVQUFKLENBQWVmLFFBQVFMLEVBQXZCLEM7OztBQUFacUIsbUI7O0FBQ04scUJBQUtqQyxJQUFMLEdBQVlpQyxJQUFJQyxHQUFKLENBQVE7QUFBQSx5QkFBUztBQUMzQnRCLHdCQUFJdUIsS0FBS3ZCLEVBRGtCO0FBRTNCUSwyQkFBT2UsS0FBS2YsS0FGZTtBQUczQmdCLDZCQUFTRCxLQUFLRSxJQUhhO0FBSTNCQywrQkFBV0gsS0FBS0ksTUFBTCxDQUFZckMsSUFKSTtBQUszQnNDLCtCQUFXTCxLQUFLTSxRQUxXO0FBTTNCQywyQkFBT1AsS0FBS1EsUUFBTCxDQUFjLENBQWQsU0FBc0IsV0FBR0MsVUFBekIsR0FBc0NULEtBQUtRLFFBQUwsQ0FBYyxDQUFkLENBQXRDLEdBQTJELEVBTnZDO0FBTzNCRSwwQkFBTVYsS0FBS1c7QUFQZ0IsbUJBQVQ7QUFBQSxpQkFBUixDQUFaO0FBU0FsQixxQkFBS0osTUFBTDs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBL0VrQyxlQUFLdUIsSTtrQkFBdEJ0RCxRIiwiZmlsZSI6InVzZXJJbmZvLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXHJcbmltcG9ydCAqIGFzIGFwaSBmcm9tICcuLi9hcGlzL3VzZXJJbmZvJ1xyXG5pbXBvcnQgKiBhcyBhY2NvdW50QXBpIGZyb20gJy4uL2FwaXMvYWNjb3VudCdcclxuaW1wb3J0IHsgamYgfSBmcm9tICcuLi9jb25maWcnXHJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICd3ZXB5LXJlZHV4J1xyXG5cclxuQGNvbm5lY3Qoe1xyXG4gIHVzZXIoc3RhdGUpIHtcclxuICAgIHJldHVybiBzdGF0ZS5jb21tb24udXNlclxyXG4gIH1cclxufSlcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVXNlckluZm8gZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xyXG4gIGNvbmZpZyA9IHtcclxuICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICfnlKjmiLfor6bmg4UnXHJcbiAgfVxyXG5cclxuICBkYXRhID0ge1xyXG4gICAgbGlzdDogW10sXHJcbiAgICB1c2VyRGF0YToge1xyXG4gICAgICBuYW1lOiAn5Yqg6L295LitLi4uJ1xyXG4gICAgfSxcclxuICAgIGxldmVsRGF0YTogJycsXHJcbiAgICB1c2VySWQ6ICcnLFxyXG4gICAgaXNTdGFyOiBudWxsLFxyXG4gIH1cclxuXHJcbiAgbWV0aG9kcyA9IHtcclxuICAgIGhhbmRsZVB1Ymxpc2hUYXAoZSkge1xyXG4gICAgICB3ZXB5Lm5hdmlnYXRlVG8oe1xyXG4gICAgICAgIHVybDogJ3B1Ymxpc2gnXHJcbiAgICAgIH0pXHJcbiAgICB9LFxyXG4gICAgaGFuZGxlSXRlbVRhcChlKSB7XHJcbiAgICAgIGNvbnN0IGlkID0gdGhpcy5saXN0W2UuY3VycmVudFRhcmdldC5kYXRhc2V0LmluZGV4XS5pZFxyXG4gICAgICB3ZXB5Lm5hdmlnYXRlVG8oe1xyXG4gICAgICAgIHVybDogYGJvYXJkP2lkPSR7aWR9YFxyXG4gICAgICB9KVxyXG4gICAgfSxcclxuICAgIGFzeW5jIGNvbGxlY3RVc2VyVGFwKG9wdGlvbnMpe1xyXG4gICAgICBsZXQgdXNlcklkID0gK3RoaXMudXNlcklkXHJcbiAgICAgIGxldCB7aWR9ID0gdGhpcy51c2VyLnVzZXJEYXRhXHJcbiAgICAgIGlmIChpZCA9PT0gdXNlcklkKSB7XHJcbiAgICAgICAgd3guc2hvd1RvYXN0KHtcclxuICAgICAgICAgIHRpdGxlOiAn5oKo5LiN6IO95YWz5rOo6Ieq5bexJyxcclxuICAgICAgICAgIGljb246ICdsb2FkaW5nJyxcclxuICAgICAgICAgIGR1cmF0aW9uOiAyMDAwXHJcbiAgICAgICAgfSlcclxuICAgICAgfWVsc2V7XHJcbiAgICAgICAgYXdhaXQgYWNjb3VudEFwaS51c2VyU3RhcihpZCx1c2VySWQpXHJcbiAgICAgICAgdGhpcy5pc1N0YXIgPSB0cnVlXHJcbiAgICAgICAgd3guc2hvd1RvYXN0KHtcclxuICAgICAgICAgIHRpdGxlOiAn5bey5YWz5rOoJyxcclxuICAgICAgICAgIGljb246ICdzdWNjZXNzJyxcclxuICAgICAgICAgIGR1cmF0aW9uOiAyMDAwXHJcbiAgICAgICAgfSlcclxuICAgICAgICB0aGlzLiRhcHBseSgpXHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBhc3luYyBEZWxDb2xsZWN0VXNlclRhcChvcHRpb25zKXtcclxuICAgICAgbGV0IHVzZXJJZCA9ICt0aGlzLnVzZXJJZFxyXG4gICAgICBsZXQge2lkfSA9IHRoaXMudXNlci51c2VyRGF0YVxyXG4gICAgICBhd2FpdCBhY2NvdW50QXBpLnVzZXJVbnN0YXIoaWQsdXNlcklkKVxyXG4gICAgICB0aGlzLmlzU3RhciA9IGZhbHNlXHJcbiAgICAgIHd4LnNob3dUb2FzdCh7XHJcbiAgICAgICAgdGl0bGU6ICflt7Llj5bmtojlhbPms6gnLFxyXG4gICAgICAgIGljb246ICdzdWNjZXNzJyxcclxuICAgICAgICBkdXJhdGlvbjogMjAwMFxyXG4gICAgICB9KVxyXG4gICAgICB0aGlzLiRhcHBseSgpXHJcbiAgICB9XHJcbiAgfVxyXG4gIGFzeW5jIG9uTG9hZChvcHRpb25zKSB7XHJcbiAgICB0aGlzLnVzZXJJZCA9IG9wdGlvbnMuaWRcclxuICAgIGNvbnN0IHsgamZUb2tlbiB9ID0gdGhpcy51c2VyXHJcbiAgICBsZXQgc2VsZiA9IHRoaXNcclxuICAgIHZhciByZXNEYXRhID0gYXdhaXQgYXBpLmdldE90aGVyVXNlckluZm8ob3B0aW9ucy5pZCxqZlRva2VuKVxyXG4gICAgY29uc3Qge2lzX3N0YXJlZH0gPSByZXNEYXRhXHJcblxyXG4gICAgdGhpcy5pc1N0YXIgPSBpc19zdGFyZWRcclxuICAgIHNlbGYudXNlckRhdGEgPSByZXNEYXRhXHJcbiAgICBjb25zdCByZXMgPSBhd2FpdCBhcGkuZ2V0TXNnTGlzdChvcHRpb25zLmlkKVxyXG4gICAgdGhpcy5saXN0ID0gcmVzLm1hcChpdGVtID0+ICh7XHJcbiAgICAgIGlkOiBpdGVtLmlkLFxyXG4gICAgICB0aXRsZTogaXRlbS50aXRsZSxcclxuICAgICAgY29udGVudDogaXRlbS50ZXh0LFxyXG4gICAgICBjcmVhdGVkQnk6IGl0ZW0uYXV0aG9yLm5hbWUsXHJcbiAgICAgIGNyZWF0ZWRBdDogaXRlbS5kYXRlbGluZSxcclxuICAgICAgY292ZXI6IGl0ZW0ucGljX3VybHNbMF0gPyBgJHtqZi5iYXNlU2VydmVyfSR7aXRlbS5waWNfdXJsc1swXX1gIDogJycsXHJcbiAgICAgIHJlYWQ6IGl0ZW0uY2xpY2tfbnVtXHJcbiAgICB9KSlcclxuICAgIHNlbGYuJGFwcGx5KClcclxuICB9XHJcbn1cclxuIl19