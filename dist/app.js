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
      // 留言板
      'pages/boards',
      // 聊天室
      //        'pages/chatrooms',
      // 消息
      'pages/userInfo',
      // 消息
      //        'pages/sessions',
      // 好犹豫
      //        'pages/friends',
      // 我的
      'pages/mine',
      // // 聊天
      //        'pages/chat',
      // 好友
      //        'pages/friend',
      // 好用申请消息
      //        'pages/notifications',
      // 留言板详情
      'pages/board',
      // 发布留言
      'pages/publish',
      // 添加好友
      //        'pages/add',
      // 申请
      //        'pages/apply',
      // 聊天室
      //        'pages/chatroom',
      // 注册
      'pages/register'],
      tabBar: {
        color: '#707070',
        selectedColor: '#1EB571',
        borderStyle: '#ccc',
        backgroundColor: '#fff',
        list: [
        //          {
        //            pagePath: 'pages/chatrooms',
        //            iconPath: 'static/icons/chatroom.png',
        //            selectedIconPath: 'static/icons/chatroom_selected.png',
        //            text: '聊天室'
        //          },
        {
          pagePath: 'pages/boards',
          iconPath: 'static/icons/board.png',
          selectedIconPath: 'static/icons/board_selected.png',
          text: '商友圈'
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6WyJzdG9yZSIsImNvbmZpZyIsInBhZ2VzIiwidGFiQmFyIiwiY29sb3IiLCJzZWxlY3RlZENvbG9yIiwiYm9yZGVyU3R5bGUiLCJiYWNrZ3JvdW5kQ29sb3IiLCJsaXN0IiwicGFnZVBhdGgiLCJpY29uUGF0aCIsInNlbGVjdGVkSWNvblBhdGgiLCJ0ZXh0Iiwid2luZG93IiwiYmFja2dyb3VuZFRleHRTdHlsZSIsIm5hdmlnYXRpb25CYXJCYWNrZ3JvdW5kQ29sb3IiLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwibmF2aWdhdGlvbkJhclRleHRTdHlsZSIsInVzZSIsImFwcCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDRTs7OztBQUNBOztBQUVBOztBQUlBOzs7Ozs7QUFDQSxJQUFNQSxRQUFRLCtCQUFkOztBQUVBLHlCQUFTQSxLQUFUOzs7OztBQWtGRSxzQkFBYztBQUFBOztBQUFBOztBQUFBLFVBL0VkQyxNQStFYyxHQS9FTDtBQUNQQyxhQUFPO0FBQ0w7QUFDQSxvQkFGSztBQUdMO0FBQ1I7QUFDUTtBQUNBLHNCQU5LO0FBT0w7QUFDUjtBQUNRO0FBQ1I7QUFDUTtBQUNBLGtCQVpLO0FBYUw7QUFDUjtBQUNRO0FBQ1I7QUFDUTtBQUNSO0FBQ1E7QUFDQSxtQkFwQks7QUFxQkw7QUFDQSxxQkF0Qks7QUF1Qkw7QUFDUjtBQUNRO0FBQ1I7QUFDUTtBQUNSO0FBQ1E7QUFDQSxzQkE5QkssQ0FEQTtBQWlDUEMsY0FBUTtBQUNOQyxlQUFPLFNBREQ7QUFFTkMsdUJBQWUsU0FGVDtBQUdOQyxxQkFBYSxNQUhQO0FBSU5DLHlCQUFpQixNQUpYO0FBS05DLGNBQU07QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDVTtBQUNFQyxvQkFBVSxjQURaO0FBRUVDLG9CQUFVLHdCQUZaO0FBR0VDLDRCQUFrQixpQ0FIcEI7QUFJRUMsZ0JBQU07QUFKUixTQVBJO0FBYUo7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDRUgsb0JBQVUsWUFEWjtBQUVFQyxvQkFBVSx1QkFGWjtBQUdFQyw0QkFBa0IsZ0NBSHBCO0FBSUVDLGdCQUFNO0FBSlIsU0F6Qkk7QUFMQSxPQWpDRDtBQXVFUEMsY0FBUTtBQUNOQyw2QkFBcUIsT0FEZjtBQUVOQyxzQ0FBOEIsTUFGeEI7QUFHTkMsZ0NBQXdCLFFBSGxCO0FBSU5DLGdDQUF3QjtBQUpsQjtBQXZFRCxLQStFSzs7QUFFWixVQUFLQyxHQUFMLENBQVMsWUFBVDtBQUNBLFVBQUtBLEdBQUwsQ0FBUyxXQUFUO0FBSFk7QUFJYjs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7RUFwRytCLGVBQUtDLEciLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG4gIGltcG9ydCAnd2VweS1hc3luYy1mdW5jdGlvbidcblxuICBpbXBvcnQge1xuICAgIHNldFN0b3JlXG4gIH0gZnJvbSAnd2VweS1yZWR1eCdcblxuICBpbXBvcnQgY29uZmlndXJlU3RvcmUgZnJvbSAnLi9jb25maWd1cmVTdG9yZSdcbiAgY29uc3Qgc3RvcmUgPSBjb25maWd1cmVTdG9yZSgpXG5cbiAgc2V0U3RvcmUoc3RvcmUpXG5cbiAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyB3ZXB5LmFwcCB7XG4gICAgY29uZmlnID0ge1xuICAgICAgcGFnZXM6IFtcbiAgICAgICAgLy8g55WZ6KiA5p2/XG4gICAgICAgICdwYWdlcy9ib2FyZHMnLFxuICAgICAgICAvLyDogYrlpKnlrqRcbi8vICAgICAgICAncGFnZXMvY2hhdHJvb21zJyxcbiAgICAgICAgLy8g5raI5oGvXG4gICAgICAgICdwYWdlcy91c2VySW5mbycsXG4gICAgICAgIC8vIOa2iOaBr1xuLy8gICAgICAgICdwYWdlcy9zZXNzaW9ucycsXG4gICAgICAgIC8vIOWlveeKueixq1xuLy8gICAgICAgICdwYWdlcy9mcmllbmRzJyxcbiAgICAgICAgLy8g5oiR55qEXG4gICAgICAgICdwYWdlcy9taW5lJyxcbiAgICAgICAgLy8gLy8g6IGK5aSpXG4vLyAgICAgICAgJ3BhZ2VzL2NoYXQnLFxuICAgICAgICAvLyDlpb3lj4tcbi8vICAgICAgICAncGFnZXMvZnJpZW5kJyxcbiAgICAgICAgLy8g5aW955So55Sz6K+35raI5oGvXG4vLyAgICAgICAgJ3BhZ2VzL25vdGlmaWNhdGlvbnMnLFxuICAgICAgICAvLyDnlZnoqIDmnb/or6bmg4VcbiAgICAgICAgJ3BhZ2VzL2JvYXJkJyxcbiAgICAgICAgLy8g5Y+R5biD55WZ6KiAXG4gICAgICAgICdwYWdlcy9wdWJsaXNoJyxcbiAgICAgICAgLy8g5re75Yqg5aW95Y+LXG4vLyAgICAgICAgJ3BhZ2VzL2FkZCcsXG4gICAgICAgIC8vIOeUs+ivt1xuLy8gICAgICAgICdwYWdlcy9hcHBseScsXG4gICAgICAgIC8vIOiBiuWkqeWupFxuLy8gICAgICAgICdwYWdlcy9jaGF0cm9vbScsXG4gICAgICAgIC8vIOazqOWGjFxuICAgICAgICAncGFnZXMvcmVnaXN0ZXInXG4gICAgICBdLFxuICAgICAgdGFiQmFyOiB7XG4gICAgICAgIGNvbG9yOiAnIzcwNzA3MCcsXG4gICAgICAgIHNlbGVjdGVkQ29sb3I6ICcjMUVCNTcxJyxcbiAgICAgICAgYm9yZGVyU3R5bGU6ICcjY2NjJyxcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiAnI2ZmZicsXG4gICAgICAgIGxpc3Q6IFtcbi8vICAgICAgICAgIHtcbi8vICAgICAgICAgICAgcGFnZVBhdGg6ICdwYWdlcy9jaGF0cm9vbXMnLFxuLy8gICAgICAgICAgICBpY29uUGF0aDogJ3N0YXRpYy9pY29ucy9jaGF0cm9vbS5wbmcnLFxuLy8gICAgICAgICAgICBzZWxlY3RlZEljb25QYXRoOiAnc3RhdGljL2ljb25zL2NoYXRyb29tX3NlbGVjdGVkLnBuZycsXG4vLyAgICAgICAgICAgIHRleHQ6ICfogYrlpKnlrqQnXG4vLyAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHBhZ2VQYXRoOiAncGFnZXMvYm9hcmRzJyxcbiAgICAgICAgICAgIGljb25QYXRoOiAnc3RhdGljL2ljb25zL2JvYXJkLnBuZycsXG4gICAgICAgICAgICBzZWxlY3RlZEljb25QYXRoOiAnc3RhdGljL2ljb25zL2JvYXJkX3NlbGVjdGVkLnBuZycsXG4gICAgICAgICAgICB0ZXh0OiAn5ZWG5Y+L5ZyIJ1xuICAgICAgICAgIH0sXG4gICAgICAgICAgLy8ge1xuICAgICAgICAgIC8vICAgcGFnZVBhdGg6ICdwYWdlcy9zZXNzaW9ucycsXG4gICAgICAgICAgLy8gICBpY29uUGF0aDogJ3N0YXRpYy9pY29ucy9tZXNzYWdlLnBuZycsXG4gICAgICAgICAgLy8gICBzZWxlY3RlZEljb25QYXRoOiAnc3RhdGljL2ljb25zL21lc3NhZ2Vfc2VsZWN0ZWQucG5nJyxcbiAgICAgICAgICAvLyAgIHRleHQ6ICfmtojmga8nXG4gICAgICAgICAgLy8gfSxcbiAgICAgICAgICAvLyB7XG4gICAgICAgICAgLy8gICBwYWdlUGF0aDogJ3BhZ2VzL2ZyaWVuZHMnLFxuICAgICAgICAgIC8vICAgaWNvblBhdGg6ICdzdGF0aWMvaWNvbnMvZnJpZW5kcy5wbmcnLFxuICAgICAgICAgIC8vICAgc2VsZWN0ZWRJY29uUGF0aDogJ3N0YXRpYy9pY29ucy9mcmllbmRzX3NlbGVjdGVkLnBuZycsXG4gICAgICAgICAgLy8gICB0ZXh0OiAn5aW95Y+LJ1xuICAgICAgICAgIC8vIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgcGFnZVBhdGg6ICdwYWdlcy9taW5lJyxcbiAgICAgICAgICAgIGljb25QYXRoOiAnc3RhdGljL2ljb25zL21pbmUucG5nJyxcbiAgICAgICAgICAgIHNlbGVjdGVkSWNvblBhdGg6ICdzdGF0aWMvaWNvbnMvbWluZV9zZWxlY3RlZC5wbmcnLFxuICAgICAgICAgICAgdGV4dDogJ+S4quS6uuS4reW/gydcbiAgICAgICAgICB9XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICB3aW5kb3c6IHtcbiAgICAgICAgYmFja2dyb3VuZFRleHRTdHlsZTogJ2xpZ2h0JyxcbiAgICAgICAgbmF2aWdhdGlvbkJhckJhY2tncm91bmRDb2xvcjogJyNmZmYnLFxuICAgICAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAnV2VDaGF0JyxcbiAgICAgICAgbmF2aWdhdGlvbkJhclRleHRTdHlsZTogJ2JsYWNrJ1xuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgc3VwZXIoKVxuICAgICAgdGhpcy51c2UoJ3JlcXVlc3RmaXgnKVxuICAgICAgdGhpcy51c2UoJ3Byb21pc2lmeScpXG4gICAgfVxuXG4vLyAgICBhc3luYyBvbkxhdW5jaCAob3B0aW9ucykge1xuLy8gICAgICBjb25zb2xlLmxvZyhvcHRpb25zKVxuLy8gICAgICBpZiAob3B0aW9ucy5zaGFyZVRpY2tldCkge1xuLy8gICAgICAgIGNvbnN0IHNoYXJlSW5mbyA9IGF3YWl0IHdlcHkuZ2V0U2hhcmVJbmZvKHtcbi8vICAgICAgICAgIHNoYXJlVGlja2V0OiBvcHRpb25zLnNoYXJlVGlja2V0LFxuLy8gICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKHJlcykge1xuLy8gICAgICAgICAgICByZXR1cm4gcmVzXG4vLyAgICAgICAgICB9XG4vLyAgICAgICAgfSlcbi8vICAgICAgICB3ZXB5LnNldFN0b3JhZ2Uoe1xuLy8gICAgICAgICAga2V5OiAnamZTaGFyZUluZm8nLFxuLy8gICAgICAgICAgZGF0YTogc2hhcmVJbmZvXG4vLyAgICAgICAgfSlcbi8vICAgICAgfVxuLy8gICAgfVxuICB9XG4iXX0=