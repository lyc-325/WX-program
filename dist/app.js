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
      // 留言板
      'pages/boards',
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


App(require('./npm/wepy/lib/wepy.js').default.$createApp(_default, {"promisifyAPI":{"createSelectorQuery":false}}));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6WyJzdG9yZSIsImNvbmZpZyIsInBhZ2VzIiwidGFiQmFyIiwiY29sb3IiLCJzZWxlY3RlZENvbG9yIiwiYm9yZGVyU3R5bGUiLCJiYWNrZ3JvdW5kQ29sb3IiLCJsaXN0IiwicGFnZVBhdGgiLCJpY29uUGF0aCIsInNlbGVjdGVkSWNvblBhdGgiLCJ0ZXh0Iiwid2luZG93IiwiYmFja2dyb3VuZFRleHRTdHlsZSIsIm5hdmlnYXRpb25CYXJCYWNrZ3JvdW5kQ29sb3IiLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwibmF2aWdhdGlvbkJhclRleHRTdHlsZSIsInVzZSIsImFwcCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDRTs7OztBQUNBOztBQUVBOztBQUlBOzs7Ozs7QUFDQSxJQUFNQSxRQUFRLCtCQUFkOztBQUVBLHlCQUFTQSxLQUFUOzs7OztBQWtGRSxzQkFBYztBQUFBOztBQUFBOztBQUFBLFVBL0VkQyxNQStFYyxHQS9FTDtBQUNQQyxhQUFPO0FBQ0w7QUFDQSx1QkFGSztBQUdMO0FBQ0Esb0JBSks7QUFLTDtBQUNBLHNCQU5LO0FBT0w7QUFDUjtBQUNRO0FBQ1I7QUFDUTtBQUNBLGtCQVpLO0FBYUw7QUFDUjtBQUNRO0FBQ1I7QUFDUTtBQUNSO0FBQ1E7QUFDQSxtQkFwQks7QUFxQkw7QUFDQSxxQkF0Qks7QUF1Qkw7QUFDUjtBQUNRO0FBQ1I7QUFDUTtBQUNBLHNCQTVCSztBQTZCTDtBQUNBLHNCQTlCSyxDQURBO0FBaUNQQyxjQUFRO0FBQ05DLGVBQU8sU0FERDtBQUVOQyx1QkFBZSxTQUZUO0FBR05DLHFCQUFhLE1BSFA7QUFJTkMseUJBQWlCLE1BSlg7QUFLTkMsY0FBTSxDQUNKO0FBQ0VDLG9CQUFVLGlCQURaO0FBRUVDLG9CQUFVLDJCQUZaO0FBR0VDLDRCQUFrQixvQ0FIcEI7QUFJRUMsZ0JBQU07QUFKUixTQURJLEVBT0o7QUFDRUgsb0JBQVUsY0FEWjtBQUVFQyxvQkFBVSx3QkFGWjtBQUdFQyw0QkFBa0IsaUNBSHBCO0FBSUVDLGdCQUFNO0FBSlIsU0FQSTtBQWFKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0VILG9CQUFVLFlBRFo7QUFFRUMsb0JBQVUsdUJBRlo7QUFHRUMsNEJBQWtCLGdDQUhwQjtBQUlFQyxnQkFBTTtBQUpSLFNBekJJO0FBTEEsT0FqQ0Q7QUF1RVBDLGNBQVE7QUFDTkMsNkJBQXFCLE9BRGY7QUFFTkMsc0NBQThCLE1BRnhCO0FBR05DLGdDQUF3QixRQUhsQjtBQUlOQyxnQ0FBd0I7QUFKbEI7QUF2RUQsS0ErRUs7O0FBRVosVUFBS0MsR0FBTCxDQUFTLFlBQVQ7QUFDQSxVQUFLQSxHQUFMLENBQVMsV0FBVDtBQUhZO0FBSWI7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0VBcEcrQixlQUFLQyxHIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4gIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXHJcbiAgaW1wb3J0ICd3ZXB5LWFzeW5jLWZ1bmN0aW9uJ1xyXG5cclxuICBpbXBvcnQge1xyXG4gICAgc2V0U3RvcmVcclxuICB9IGZyb20gJ3dlcHktcmVkdXgnXHJcblxyXG4gIGltcG9ydCBjb25maWd1cmVTdG9yZSBmcm9tICcuL2NvbmZpZ3VyZVN0b3JlJ1xyXG4gIGNvbnN0IHN0b3JlID0gY29uZmlndXJlU3RvcmUoKVxyXG5cclxuICBzZXRTdG9yZShzdG9yZSlcclxuXHJcbiAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyB3ZXB5LmFwcCB7XHJcbiAgICBjb25maWcgPSB7XHJcbiAgICAgIHBhZ2VzOiBbXHJcbiAgICAgICAgLy8g6IGK5aSp5a6kXHJcbiAgICAgICAgJ3BhZ2VzL2NoYXRyb29tcycsXHJcbiAgICAgICAgLy8g55WZ6KiA5p2/XHJcbiAgICAgICAgJ3BhZ2VzL2JvYXJkcycsXHJcbiAgICAgICAgLy8g5raI5oGvXHJcbiAgICAgICAgJ3BhZ2VzL3VzZXJJbmZvJyxcclxuICAgICAgICAvLyDmtojmga9cclxuLy8gICAgICAgICdwYWdlcy9zZXNzaW9ucycsXHJcbiAgICAgICAgLy8g5aW954q56LGrXHJcbi8vICAgICAgICAncGFnZXMvZnJpZW5kcycsXHJcbiAgICAgICAgLy8g5oiR55qEXHJcbiAgICAgICAgJ3BhZ2VzL21pbmUnLFxyXG4gICAgICAgIC8vIC8vIOiBiuWkqVxyXG4vLyAgICAgICAgJ3BhZ2VzL2NoYXQnLFxyXG4gICAgICAgIC8vIOWlveWPi1xyXG4vLyAgICAgICAgJ3BhZ2VzL2ZyaWVuZCcsXHJcbiAgICAgICAgLy8g5aW955So55Sz6K+35raI5oGvXHJcbi8vICAgICAgICAncGFnZXMvbm90aWZpY2F0aW9ucycsXHJcbiAgICAgICAgLy8g55WZ6KiA5p2/6K+m5oOFXHJcbiAgICAgICAgJ3BhZ2VzL2JvYXJkJyxcclxuICAgICAgICAvLyDlj5HluIPnlZnoqIBcclxuICAgICAgICAncGFnZXMvcHVibGlzaCcsXHJcbiAgICAgICAgLy8g5re75Yqg5aW95Y+LXHJcbi8vICAgICAgICAncGFnZXMvYWRkJyxcclxuICAgICAgICAvLyDnlLPor7dcclxuLy8gICAgICAgICdwYWdlcy9hcHBseScsXHJcbiAgICAgICAgLy8g6IGK5aSp5a6kXHJcbiAgICAgICAgJ3BhZ2VzL2NoYXRyb29tJyxcclxuICAgICAgICAvLyDms6jlhoxcclxuICAgICAgICAncGFnZXMvcmVnaXN0ZXInXHJcbiAgICAgIF0sXHJcbiAgICAgIHRhYkJhcjoge1xyXG4gICAgICAgIGNvbG9yOiAnIzcwNzA3MCcsXHJcbiAgICAgICAgc2VsZWN0ZWRDb2xvcjogJyMxRUI1NzEnLFxyXG4gICAgICAgIGJvcmRlclN0eWxlOiAnI2NjYycsXHJcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiAnI2ZmZicsXHJcbiAgICAgICAgbGlzdDogW1xyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBwYWdlUGF0aDogJ3BhZ2VzL2NoYXRyb29tcycsXHJcbiAgICAgICAgICAgIGljb25QYXRoOiAnc3RhdGljL2ljb25zL2NoYXRyb29tLnBuZycsXHJcbiAgICAgICAgICAgIHNlbGVjdGVkSWNvblBhdGg6ICdzdGF0aWMvaWNvbnMvY2hhdHJvb21fc2VsZWN0ZWQucG5nJyxcclxuICAgICAgICAgICAgdGV4dDogJ+iBiuWkqeWupCdcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIHBhZ2VQYXRoOiAncGFnZXMvYm9hcmRzJyxcclxuICAgICAgICAgICAgaWNvblBhdGg6ICdzdGF0aWMvaWNvbnMvYm9hcmQucG5nJyxcclxuICAgICAgICAgICAgc2VsZWN0ZWRJY29uUGF0aDogJ3N0YXRpYy9pY29ucy9ib2FyZF9zZWxlY3RlZC5wbmcnLFxyXG4gICAgICAgICAgICB0ZXh0OiAn5ZWG5Y+L5ZyIJ1xyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIC8vIHtcclxuICAgICAgICAgIC8vICAgcGFnZVBhdGg6ICdwYWdlcy9zZXNzaW9ucycsXHJcbiAgICAgICAgICAvLyAgIGljb25QYXRoOiAnc3RhdGljL2ljb25zL21lc3NhZ2UucG5nJyxcclxuICAgICAgICAgIC8vICAgc2VsZWN0ZWRJY29uUGF0aDogJ3N0YXRpYy9pY29ucy9tZXNzYWdlX3NlbGVjdGVkLnBuZycsXHJcbiAgICAgICAgICAvLyAgIHRleHQ6ICfmtojmga8nXHJcbiAgICAgICAgICAvLyB9LFxyXG4gICAgICAgICAgLy8ge1xyXG4gICAgICAgICAgLy8gICBwYWdlUGF0aDogJ3BhZ2VzL2ZyaWVuZHMnLFxyXG4gICAgICAgICAgLy8gICBpY29uUGF0aDogJ3N0YXRpYy9pY29ucy9mcmllbmRzLnBuZycsXHJcbiAgICAgICAgICAvLyAgIHNlbGVjdGVkSWNvblBhdGg6ICdzdGF0aWMvaWNvbnMvZnJpZW5kc19zZWxlY3RlZC5wbmcnLFxyXG4gICAgICAgICAgLy8gICB0ZXh0OiAn5aW95Y+LJ1xyXG4gICAgICAgICAgLy8gfSxcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgcGFnZVBhdGg6ICdwYWdlcy9taW5lJyxcclxuICAgICAgICAgICAgaWNvblBhdGg6ICdzdGF0aWMvaWNvbnMvbWluZS5wbmcnLFxyXG4gICAgICAgICAgICBzZWxlY3RlZEljb25QYXRoOiAnc3RhdGljL2ljb25zL21pbmVfc2VsZWN0ZWQucG5nJyxcclxuICAgICAgICAgICAgdGV4dDogJ+S4quS6uuS4reW/gydcclxuICAgICAgICAgIH1cclxuICAgICAgICBdXHJcbiAgICAgIH0sXHJcbiAgICAgIHdpbmRvdzoge1xyXG4gICAgICAgIGJhY2tncm91bmRUZXh0U3R5bGU6ICdsaWdodCcsXHJcbiAgICAgICAgbmF2aWdhdGlvbkJhckJhY2tncm91bmRDb2xvcjogJyNmZmYnLFxyXG4gICAgICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICdXZUNoYXQnLFxyXG4gICAgICAgIG5hdmlnYXRpb25CYXJUZXh0U3R5bGU6ICdibGFjaydcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICBzdXBlcigpXHJcbiAgICAgIHRoaXMudXNlKCdyZXF1ZXN0Zml4JylcclxuICAgICAgdGhpcy51c2UoJ3Byb21pc2lmeScpXHJcbiAgICB9XHJcblxyXG4vLyAgICBhc3luYyBvbkxhdW5jaCAob3B0aW9ucykge1xyXG4vLyAgICAgIGNvbnNvbGUubG9nKG9wdGlvbnMpXHJcbi8vICAgICAgaWYgKG9wdGlvbnMuc2hhcmVUaWNrZXQpIHtcclxuLy8gICAgICAgIGNvbnN0IHNoYXJlSW5mbyA9IGF3YWl0IHdlcHkuZ2V0U2hhcmVJbmZvKHtcclxuLy8gICAgICAgICAgc2hhcmVUaWNrZXQ6IG9wdGlvbnMuc2hhcmVUaWNrZXQsXHJcbi8vICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChyZXMpIHtcclxuLy8gICAgICAgICAgICByZXR1cm4gcmVzXHJcbi8vICAgICAgICAgIH1cclxuLy8gICAgICAgIH0pXHJcbi8vICAgICAgICB3ZXB5LnNldFN0b3JhZ2Uoe1xyXG4vLyAgICAgICAgICBrZXk6ICdqZlNoYXJlSW5mbycsXHJcbi8vICAgICAgICAgIGRhdGE6IHNoYXJlSW5mb1xyXG4vLyAgICAgICAgfSlcclxuLy8gICAgICB9XHJcbi8vICAgIH1cclxuICB9XHJcbiJdfQ==