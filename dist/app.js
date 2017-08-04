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
      'pages/chat',
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
          pagePath: 'pages/register',
          iconPath: 'static/icons/board.png',
          selectedIconPath: 'static/icons/board_selected.png',
          text: '留言板'
        },
        // {
        //   pagePath: 'pages/sessions',
        //   iconPath: 'static/icons/message.png',
        //   selectedIconPath: 'static/icons/message_selected.png',
        //   text: '消息'
        // },
        // {
        //   pagePath: 'pages/friends',
        //   iconPath: 'static/icons/friends.png',
        //   selectedIconPath: 'static/icons/friends_selected.png',
        //   text: '好友'
        // },
        {
          pagePath: 'pages/mine',
          iconPath: 'static/icons/mine.png',
          selectedIconPath: 'static/icons/mine_selected.png',
          text: '个人中心'
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

  //    async onLaunch (options) {
  //      console.log(options)
  //      if (options.shareTicket) {
  //        const shareInfo = await wepy.getShareInfo({
  //          shareTicket: options.shareTicket,
  //          success: function (res) {
  //            return res
  //          }
  //        })
  //        wepy.setStorage({
  //          key: 'jfShareInfo',
  //          data: shareInfo
  //        })
  //      }
  //    }


  return _default;
}(_wepy2.default.app);


App(require('./npm/wepy/lib/wepy.js').default.$createApp(_default));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6WyJzdG9yZSIsImNvbmZpZyIsInBhZ2VzIiwidGFiQmFyIiwiY29sb3IiLCJzZWxlY3RlZENvbG9yIiwiYm9yZGVyU3R5bGUiLCJiYWNrZ3JvdW5kQ29sb3IiLCJsaXN0IiwicGFnZVBhdGgiLCJpY29uUGF0aCIsInNlbGVjdGVkSWNvblBhdGgiLCJ0ZXh0Iiwid2luZG93IiwiYmFja2dyb3VuZFRleHRTdHlsZSIsIm5hdmlnYXRpb25CYXJCYWNrZ3JvdW5kQ29sb3IiLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwibmF2aWdhdGlvbkJhclRleHRTdHlsZSIsInVzZSIsImFwcCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDRTs7OztBQUNBOztBQUVBOztBQUlBOzs7Ozs7QUFDQSxJQUFNQSxRQUFRLCtCQUFkOztBQUVBLHlCQUFTQSxLQUFUOzs7OztBQWdGRSxzQkFBYztBQUFBOztBQUFBOztBQUFBLFVBN0VkQyxNQTZFYyxHQTdFTDtBQUNQQyxhQUFPO0FBQ0w7QUFDQSx1QkFGSztBQUdMO0FBQ0Esc0JBSks7QUFLTDtBQUNBLG9CQU5LO0FBT0w7QUFDQSxxQkFSSztBQVNMO0FBQ0Esa0JBVks7QUFXTDtBQUNBLGtCQVpLO0FBYUw7QUFDQSxvQkFkSztBQWVMO0FBQ0EsMkJBaEJLO0FBaUJMO0FBQ0EsbUJBbEJLO0FBbUJMO0FBQ0EscUJBcEJLO0FBcUJMO0FBQ0EsaUJBdEJLO0FBdUJMO0FBQ0EsbUJBeEJLO0FBeUJMO0FBQ0Esc0JBMUJLO0FBMkJMO0FBQ0Esc0JBNUJLLENBREE7QUErQlBDLGNBQVE7QUFDTkMsZUFBTyxTQUREO0FBRU5DLHVCQUFlLFNBRlQ7QUFHTkMscUJBQWEsTUFIUDtBQUlOQyx5QkFBaUIsTUFKWDtBQUtOQyxjQUFNLENBQ0o7QUFDRUMsb0JBQVUsaUJBRFo7QUFFRUMsb0JBQVUsMkJBRlo7QUFHRUMsNEJBQWtCLG9DQUhwQjtBQUlFQyxnQkFBTTtBQUpSLFNBREksRUFPSjtBQUNFSCxvQkFBVSxnQkFEWjtBQUVFQyxvQkFBVSx3QkFGWjtBQUdFQyw0QkFBa0IsaUNBSHBCO0FBSUVDLGdCQUFNO0FBSlIsU0FQSTtBQWFKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0VILG9CQUFVLFlBRFo7QUFFRUMsb0JBQVUsdUJBRlo7QUFHRUMsNEJBQWtCLGdDQUhwQjtBQUlFQyxnQkFBTTtBQUpSLFNBekJJO0FBTEEsT0EvQkQ7QUFxRVBDLGNBQVE7QUFDTkMsNkJBQXFCLE9BRGY7QUFFTkMsc0NBQThCLE1BRnhCO0FBR05DLGdDQUF3QixRQUhsQjtBQUlOQyxnQ0FBd0I7QUFKbEI7QUFyRUQsS0E2RUs7O0FBRVosVUFBS0MsR0FBTCxDQUFTLFlBQVQ7QUFDQSxVQUFLQSxHQUFMLENBQVMsV0FBVDtBQUhZO0FBSWI7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0VBbEcrQixlQUFLQyxHIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuICBpbXBvcnQgJ3dlcHktYXN5bmMtZnVuY3Rpb24nXG5cbiAgaW1wb3J0IHtcbiAgICBzZXRTdG9yZVxuICB9IGZyb20gJ3dlcHktcmVkdXgnXG5cbiAgaW1wb3J0IGNvbmZpZ3VyZVN0b3JlIGZyb20gJy4vY29uZmlndXJlU3RvcmUnXG4gIGNvbnN0IHN0b3JlID0gY29uZmlndXJlU3RvcmUoKVxuXG4gIHNldFN0b3JlKHN0b3JlKVxuXG4gIGV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgd2VweS5hcHAge1xuICAgIGNvbmZpZyA9IHtcbiAgICAgIHBhZ2VzOiBbXG4gICAgICAgIC8vIOiBiuWkqeWupFxuICAgICAgICAncGFnZXMvY2hhdHJvb21zJyxcbiAgICAgICAgLy8g5raI5oGvXG4gICAgICAgICdwYWdlcy9zZXNzaW9ucycsXG4gICAgICAgIC8vIOeVmeiogOadv1xuICAgICAgICAncGFnZXMvYm9hcmRzJyxcbiAgICAgICAgLy8g5aW954q56LGrXG4gICAgICAgICdwYWdlcy9mcmllbmRzJyxcbiAgICAgICAgLy8g5oiR55qEXG4gICAgICAgICdwYWdlcy9taW5lJyxcbiAgICAgICAgLy8gLy8g6IGK5aSpXG4gICAgICAgICdwYWdlcy9jaGF0JyxcbiAgICAgICAgLy8g5aW95Y+LXG4gICAgICAgICdwYWdlcy9mcmllbmQnLFxuICAgICAgICAvLyDlpb3nlKjnlLPor7fmtojmga9cbiAgICAgICAgJ3BhZ2VzL25vdGlmaWNhdGlvbnMnLFxuICAgICAgICAvLyDnlZnoqIDmnb/or6bmg4VcbiAgICAgICAgJ3BhZ2VzL2JvYXJkJyxcbiAgICAgICAgLy8g5Y+R5biD55WZ6KiAXG4gICAgICAgICdwYWdlcy9wdWJsaXNoJyxcbiAgICAgICAgLy8g5re75Yqg5aW95Y+LXG4gICAgICAgICdwYWdlcy9hZGQnLFxuICAgICAgICAvLyDnlLPor7dcbiAgICAgICAgJ3BhZ2VzL2FwcGx5JyxcbiAgICAgICAgLy8g6IGK5aSp5a6kXG4gICAgICAgICdwYWdlcy9jaGF0cm9vbScsXG4gICAgICAgIC8vIOazqOWGjFxuICAgICAgICAncGFnZXMvcmVnaXN0ZXInXG4gICAgICBdLFxuICAgICAgdGFiQmFyOiB7XG4gICAgICAgIGNvbG9yOiAnIzcwNzA3MCcsXG4gICAgICAgIHNlbGVjdGVkQ29sb3I6ICcjMUVCNTcxJyxcbiAgICAgICAgYm9yZGVyU3R5bGU6ICcjY2NjJyxcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiAnI2ZmZicsXG4gICAgICAgIGxpc3Q6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBwYWdlUGF0aDogJ3BhZ2VzL2NoYXRyb29tcycsXG4gICAgICAgICAgICBpY29uUGF0aDogJ3N0YXRpYy9pY29ucy9jaGF0cm9vbS5wbmcnLFxuICAgICAgICAgICAgc2VsZWN0ZWRJY29uUGF0aDogJ3N0YXRpYy9pY29ucy9jaGF0cm9vbV9zZWxlY3RlZC5wbmcnLFxuICAgICAgICAgICAgdGV4dDogJ+iBiuWkqeWupCdcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHBhZ2VQYXRoOiAncGFnZXMvcmVnaXN0ZXInLFxuICAgICAgICAgICAgaWNvblBhdGg6ICdzdGF0aWMvaWNvbnMvYm9hcmQucG5nJyxcbiAgICAgICAgICAgIHNlbGVjdGVkSWNvblBhdGg6ICdzdGF0aWMvaWNvbnMvYm9hcmRfc2VsZWN0ZWQucG5nJyxcbiAgICAgICAgICAgIHRleHQ6ICfnlZnoqIDmnb8nXG4gICAgICAgICAgfSxcbiAgICAgICAgICAvLyB7XG4gICAgICAgICAgLy8gICBwYWdlUGF0aDogJ3BhZ2VzL3Nlc3Npb25zJyxcbiAgICAgICAgICAvLyAgIGljb25QYXRoOiAnc3RhdGljL2ljb25zL21lc3NhZ2UucG5nJyxcbiAgICAgICAgICAvLyAgIHNlbGVjdGVkSWNvblBhdGg6ICdzdGF0aWMvaWNvbnMvbWVzc2FnZV9zZWxlY3RlZC5wbmcnLFxuICAgICAgICAgIC8vICAgdGV4dDogJ+a2iOaBrydcbiAgICAgICAgICAvLyB9LFxuICAgICAgICAgIC8vIHtcbiAgICAgICAgICAvLyAgIHBhZ2VQYXRoOiAncGFnZXMvZnJpZW5kcycsXG4gICAgICAgICAgLy8gICBpY29uUGF0aDogJ3N0YXRpYy9pY29ucy9mcmllbmRzLnBuZycsXG4gICAgICAgICAgLy8gICBzZWxlY3RlZEljb25QYXRoOiAnc3RhdGljL2ljb25zL2ZyaWVuZHNfc2VsZWN0ZWQucG5nJyxcbiAgICAgICAgICAvLyAgIHRleHQ6ICflpb3lj4snXG4gICAgICAgICAgLy8gfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBwYWdlUGF0aDogJ3BhZ2VzL21pbmUnLFxuICAgICAgICAgICAgaWNvblBhdGg6ICdzdGF0aWMvaWNvbnMvbWluZS5wbmcnLFxuICAgICAgICAgICAgc2VsZWN0ZWRJY29uUGF0aDogJ3N0YXRpYy9pY29ucy9taW5lX3NlbGVjdGVkLnBuZycsXG4gICAgICAgICAgICB0ZXh0OiAn5Liq5Lq65Lit5b+DJ1xuICAgICAgICAgIH1cbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIHdpbmRvdzoge1xuICAgICAgICBiYWNrZ3JvdW5kVGV4dFN0eWxlOiAnbGlnaHQnLFxuICAgICAgICBuYXZpZ2F0aW9uQmFyQmFja2dyb3VuZENvbG9yOiAnI2ZmZicsXG4gICAgICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICdXZUNoYXQnLFxuICAgICAgICBuYXZpZ2F0aW9uQmFyVGV4dFN0eWxlOiAnYmxhY2snXG4gICAgICB9XG4gICAgfVxuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICBzdXBlcigpXG4gICAgICB0aGlzLnVzZSgncmVxdWVzdGZpeCcpXG4gICAgICB0aGlzLnVzZSgncHJvbWlzaWZ5JylcbiAgICB9XG5cbi8vICAgIGFzeW5jIG9uTGF1bmNoIChvcHRpb25zKSB7XG4vLyAgICAgIGNvbnNvbGUubG9nKG9wdGlvbnMpXG4vLyAgICAgIGlmIChvcHRpb25zLnNoYXJlVGlja2V0KSB7XG4vLyAgICAgICAgY29uc3Qgc2hhcmVJbmZvID0gYXdhaXQgd2VweS5nZXRTaGFyZUluZm8oe1xuLy8gICAgICAgICAgc2hhcmVUaWNrZXQ6IG9wdGlvbnMuc2hhcmVUaWNrZXQsXG4vLyAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAocmVzKSB7XG4vLyAgICAgICAgICAgIHJldHVybiByZXNcbi8vICAgICAgICAgIH1cbi8vICAgICAgICB9KVxuLy8gICAgICAgIHdlcHkuc2V0U3RvcmFnZSh7XG4vLyAgICAgICAgICBrZXk6ICdqZlNoYXJlSW5mbycsXG4vLyAgICAgICAgICBkYXRhOiBzaGFyZUluZm9cbi8vICAgICAgICB9KVxuLy8gICAgICB9XG4vLyAgICB9XG4gIH1cbiJdfQ==