'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _getPrototypeOf = require('./npm/babel-runtime/core-js/object/get-prototype-of.js');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('./npm/babel-runtime/helpers/classCallCheck.js');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require('./npm/babel-runtime/helpers/possibleConstructorReturn.js');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('./npm/babel-runtime/helpers/inherits.js');

var _inherits3 = _interopRequireDefault(_inherits2);

var _wepy = require('./npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

require('./npm/wepy-async-function/index.js');

var _wepyRedux = require('./npm/wepy-redux/lib/index.js');

var _configureStore = require('./configureStore.js');

var _configureStore2 = _interopRequireDefault(_configureStore);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var store = (0, _configureStore2.default)();

(0, _wepyRedux.setStore)(store);

var _default = function (_wepy$app) {
  (0, _inherits3.default)(_default, _wepy$app);

  function _default() {
    (0, _classCallCheck3.default)(this, _default);

    var _this = (0, _possibleConstructorReturn3.default)(this, (_default.__proto__ || (0, _getPrototypeOf2.default)(_default)).call(this));

    _this.config = {
      pages: [
      // 聊天室
      'pages/chatrooms',
      // 消息
      'pages/sessions',
      // 留言板
      'pages/boards',
      // 好犹豫
      'pages/friends',
      // 我的
      'pages/mine',
      // // 聊天
      // 'pages/chat',
      // 好友
      'pages/friend',
      // 好用申请消息
      'pages/notifications',
      // 留言板详情
      'pages/board',
      // 发布留言
      'pages/publish',
      // 添加好友
      'pages/add',
      // 申请
      'pages/apply',
      // 聊天室
      'pages/chatroom',
      // 注册
      'pages/register'],
      tabBar: {
        color: '#707070',
        selectedColor: '#1EB571',
        borderStyle: '#ccc',
        backgroundColor: '#fff',
        list: [{
          pagePath: 'pages/chatrooms',
          iconPath: 'static/icons/chatroom.png',
          selectedIconPath: 'static/icons/chatroom_selected.png',
          text: '聊天室'
        }, {
          pagePath: 'pages/boards',
          iconPath: 'static/icons/board.png',
          selectedIconPath: 'static/icons/board_selected.png',
          text: '留言板'
        }, {
          pagePath: 'pages/sessions',
          iconPath: 'static/icons/message.png',
          selectedIconPath: 'static/icons/message_selected.png',
          text: '消息'
        }, {
          pagePath: 'pages/friends',
          iconPath: 'static/icons/friends.png',
          selectedIconPath: 'static/icons/friends_selected.png',
          text: '好友'
        }, {
          pagePath: 'pages/mine',
          iconPath: 'static/icons/mine.png',
          selectedIconPath: 'static/icons/mine_selected.png',
          text: '我的'
        }]
      },
      window: {
        backgroundTextStyle: 'light',
        navigationBarBackgroundColor: '#fff',
        navigationBarTitleText: 'WeChat',
        navigationBarTextStyle: 'black'
      }
    };

    _this.use('requestfix');
    _this.use('promisify');
    return _this;
  }

  return _default;
}(_wepy2.default.app);


App(require('./npm/wepy/lib/wepy.js').default.$createApp(_default));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6WyJzdG9yZSIsImNvbmZpZyIsInBhZ2VzIiwidGFiQmFyIiwiY29sb3IiLCJzZWxlY3RlZENvbG9yIiwiYm9yZGVyU3R5bGUiLCJiYWNrZ3JvdW5kQ29sb3IiLCJsaXN0IiwicGFnZVBhdGgiLCJpY29uUGF0aCIsInNlbGVjdGVkSWNvblBhdGgiLCJ0ZXh0Iiwid2luZG93IiwiYmFja2dyb3VuZFRleHRTdHlsZSIsIm5hdmlnYXRpb25CYXJCYWNrZ3JvdW5kQ29sb3IiLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwibmF2aWdhdGlvbkJhclRleHRTdHlsZSIsInVzZSIsImFwcCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTs7OztBQUNBOztBQUVBOztBQUlBOzs7Ozs7QUFDQSxJQUFNQSxRQUFRLCtCQUFkOztBQUVBLHlCQUFTQSxLQUFUOzs7OztBQWdGRSxzQkFBYztBQUFBOztBQUFBOztBQUFBLFVBN0VkQyxNQTZFYyxHQTdFTDtBQUNQQyxhQUFPO0FBQ0w7QUFDQSx1QkFGSztBQUdMO0FBQ0Esc0JBSks7QUFLTDtBQUNBLG9CQU5LO0FBT0w7QUFDQSxxQkFSSztBQVNMO0FBQ0Esa0JBVks7QUFXTDtBQUNBO0FBQ0E7QUFDQSxvQkFkSztBQWVMO0FBQ0EsMkJBaEJLO0FBaUJMO0FBQ0EsbUJBbEJLO0FBbUJMO0FBQ0EscUJBcEJLO0FBcUJMO0FBQ0EsaUJBdEJLO0FBdUJMO0FBQ0EsbUJBeEJLO0FBeUJMO0FBQ0Esc0JBMUJLO0FBMkJMO0FBQ0Esc0JBNUJLLENBREE7QUErQlBDLGNBQVE7QUFDTkMsZUFBTyxTQUREO0FBRU5DLHVCQUFlLFNBRlQ7QUFHTkMscUJBQWEsTUFIUDtBQUlOQyx5QkFBaUIsTUFKWDtBQUtOQyxjQUFNLENBQ0o7QUFDRUMsb0JBQVUsaUJBRFo7QUFFRUMsb0JBQVUsMkJBRlo7QUFHRUMsNEJBQWtCLG9DQUhwQjtBQUlFQyxnQkFBTTtBQUpSLFNBREksRUFPSjtBQUNFSCxvQkFBVSxjQURaO0FBRUVDLG9CQUFVLHdCQUZaO0FBR0VDLDRCQUFrQixpQ0FIcEI7QUFJRUMsZ0JBQU07QUFKUixTQVBJLEVBYUo7QUFDRUgsb0JBQVUsZ0JBRFo7QUFFRUMsb0JBQVUsMEJBRlo7QUFHRUMsNEJBQWtCLG1DQUhwQjtBQUlFQyxnQkFBTTtBQUpSLFNBYkksRUFtQko7QUFDRUgsb0JBQVUsZUFEWjtBQUVFQyxvQkFBVSwwQkFGWjtBQUdFQyw0QkFBa0IsbUNBSHBCO0FBSUVDLGdCQUFNO0FBSlIsU0FuQkksRUF5Qko7QUFDRUgsb0JBQVUsWUFEWjtBQUVFQyxvQkFBVSx1QkFGWjtBQUdFQyw0QkFBa0IsZ0NBSHBCO0FBSUVDLGdCQUFNO0FBSlIsU0F6Qkk7QUFMQSxPQS9CRDtBQXFFUEMsY0FBUTtBQUNOQyw2QkFBcUIsT0FEZjtBQUVOQyxzQ0FBOEIsTUFGeEI7QUFHTkMsZ0NBQXdCLFFBSGxCO0FBSU5DLGdDQUF3QjtBQUpsQjtBQXJFRCxLQTZFSzs7QUFFWixVQUFLQyxHQUFMLENBQVMsWUFBVDtBQUNBLFVBQUtBLEdBQUwsQ0FBUyxXQUFUO0FBSFk7QUFJYjs7O0VBbEYwQixlQUFLQyxHIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcbmltcG9ydCAnd2VweS1hc3luYy1mdW5jdGlvbidcblxuaW1wb3J0IHtcbiAgc2V0U3RvcmVcbn0gZnJvbSAnd2VweS1yZWR1eCdcblxuaW1wb3J0IGNvbmZpZ3VyZVN0b3JlIGZyb20gJy4vY29uZmlndXJlU3RvcmUnXG5jb25zdCBzdG9yZSA9IGNvbmZpZ3VyZVN0b3JlKClcblxuc2V0U3RvcmUoc3RvcmUpXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgd2VweS5hcHAge1xuICBjb25maWcgPSB7XG4gICAgcGFnZXM6IFtcbiAgICAgIC8vIOiBiuWkqeWupFxuICAgICAgJ3BhZ2VzL2NoYXRyb29tcycsXG4gICAgICAvLyDmtojmga9cbiAgICAgICdwYWdlcy9zZXNzaW9ucycsXG4gICAgICAvLyDnlZnoqIDmnb9cbiAgICAgICdwYWdlcy9ib2FyZHMnLFxuICAgICAgLy8g5aW954q56LGrXG4gICAgICAncGFnZXMvZnJpZW5kcycsXG4gICAgICAvLyDmiJHnmoRcbiAgICAgICdwYWdlcy9taW5lJyxcbiAgICAgIC8vIC8vIOiBiuWkqVxuICAgICAgLy8gJ3BhZ2VzL2NoYXQnLFxuICAgICAgLy8g5aW95Y+LXG4gICAgICAncGFnZXMvZnJpZW5kJyxcbiAgICAgIC8vIOWlveeUqOeUs+ivt+a2iOaBr1xuICAgICAgJ3BhZ2VzL25vdGlmaWNhdGlvbnMnLFxuICAgICAgLy8g55WZ6KiA5p2/6K+m5oOFXG4gICAgICAncGFnZXMvYm9hcmQnLFxuICAgICAgLy8g5Y+R5biD55WZ6KiAXG4gICAgICAncGFnZXMvcHVibGlzaCcsXG4gICAgICAvLyDmt7vliqDlpb3lj4tcbiAgICAgICdwYWdlcy9hZGQnLFxuICAgICAgLy8g55Sz6K+3XG4gICAgICAncGFnZXMvYXBwbHknLFxuICAgICAgLy8g6IGK5aSp5a6kXG4gICAgICAncGFnZXMvY2hhdHJvb20nLFxuICAgICAgLy8g5rOo5YaMXG4gICAgICAncGFnZXMvcmVnaXN0ZXInXG4gICAgXSxcbiAgICB0YWJCYXI6IHtcbiAgICAgIGNvbG9yOiAnIzcwNzA3MCcsXG4gICAgICBzZWxlY3RlZENvbG9yOiAnIzFFQjU3MScsXG4gICAgICBib3JkZXJTdHlsZTogJyNjY2MnLFxuICAgICAgYmFja2dyb3VuZENvbG9yOiAnI2ZmZicsXG4gICAgICBsaXN0OiBbXG4gICAgICAgIHtcbiAgICAgICAgICBwYWdlUGF0aDogJ3BhZ2VzL2NoYXRyb29tcycsXG4gICAgICAgICAgaWNvblBhdGg6ICdzdGF0aWMvaWNvbnMvY2hhdHJvb20ucG5nJyxcbiAgICAgICAgICBzZWxlY3RlZEljb25QYXRoOiAnc3RhdGljL2ljb25zL2NoYXRyb29tX3NlbGVjdGVkLnBuZycsXG4gICAgICAgICAgdGV4dDogJ+iBiuWkqeWupCdcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIHBhZ2VQYXRoOiAncGFnZXMvYm9hcmRzJyxcbiAgICAgICAgICBpY29uUGF0aDogJ3N0YXRpYy9pY29ucy9ib2FyZC5wbmcnLFxuICAgICAgICAgIHNlbGVjdGVkSWNvblBhdGg6ICdzdGF0aWMvaWNvbnMvYm9hcmRfc2VsZWN0ZWQucG5nJyxcbiAgICAgICAgICB0ZXh0OiAn55WZ6KiA5p2/J1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgcGFnZVBhdGg6ICdwYWdlcy9zZXNzaW9ucycsXG4gICAgICAgICAgaWNvblBhdGg6ICdzdGF0aWMvaWNvbnMvbWVzc2FnZS5wbmcnLFxuICAgICAgICAgIHNlbGVjdGVkSWNvblBhdGg6ICdzdGF0aWMvaWNvbnMvbWVzc2FnZV9zZWxlY3RlZC5wbmcnLFxuICAgICAgICAgIHRleHQ6ICfmtojmga8nXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBwYWdlUGF0aDogJ3BhZ2VzL2ZyaWVuZHMnLFxuICAgICAgICAgIGljb25QYXRoOiAnc3RhdGljL2ljb25zL2ZyaWVuZHMucG5nJyxcbiAgICAgICAgICBzZWxlY3RlZEljb25QYXRoOiAnc3RhdGljL2ljb25zL2ZyaWVuZHNfc2VsZWN0ZWQucG5nJyxcbiAgICAgICAgICB0ZXh0OiAn5aW95Y+LJ1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgcGFnZVBhdGg6ICdwYWdlcy9taW5lJyxcbiAgICAgICAgICBpY29uUGF0aDogJ3N0YXRpYy9pY29ucy9taW5lLnBuZycsXG4gICAgICAgICAgc2VsZWN0ZWRJY29uUGF0aDogJ3N0YXRpYy9pY29ucy9taW5lX3NlbGVjdGVkLnBuZycsXG4gICAgICAgICAgdGV4dDogJ+aIkeeahCdcbiAgICAgICAgfVxuICAgICAgXVxuICAgIH0sXG4gICAgd2luZG93OiB7XG4gICAgICBiYWNrZ3JvdW5kVGV4dFN0eWxlOiAnbGlnaHQnLFxuICAgICAgbmF2aWdhdGlvbkJhckJhY2tncm91bmRDb2xvcjogJyNmZmYnLFxuICAgICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ1dlQ2hhdCcsXG4gICAgICBuYXZpZ2F0aW9uQmFyVGV4dFN0eWxlOiAnYmxhY2snXG4gICAgfVxuICB9XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKVxuICAgIHRoaXMudXNlKCdyZXF1ZXN0Zml4JylcbiAgICB0aGlzLnVzZSgncHJvbWlzaWZ5JylcbiAgfVxufVxuIl19