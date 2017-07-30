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
          pagePath: 'pages/boards',
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
  //    onLaunch() {
  //      console.log('这个执行了吗')
  //      wepy.showShareMenu({
  //        withShareTicket: true,
  //        success: (res) => {
  //          console.log(res)
  //        },
  //        complete: (res) => {
  //          console.log(res)
  //        }
  //      })
  //    }


  return _default;
}(_wepy2.default.app);


App(require('./npm/wepy/lib/wepy.js').default.$createApp(_default));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6WyJzdG9yZSIsImNvbmZpZyIsInBhZ2VzIiwidGFiQmFyIiwiY29sb3IiLCJzZWxlY3RlZENvbG9yIiwiYm9yZGVyU3R5bGUiLCJiYWNrZ3JvdW5kQ29sb3IiLCJsaXN0IiwicGFnZVBhdGgiLCJpY29uUGF0aCIsInNlbGVjdGVkSWNvblBhdGgiLCJ0ZXh0Iiwid2luZG93IiwiYmFja2dyb3VuZFRleHRTdHlsZSIsIm5hdmlnYXRpb25CYXJCYWNrZ3JvdW5kQ29sb3IiLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwibmF2aWdhdGlvbkJhclRleHRTdHlsZSIsInVzZSIsImFwcCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDRTs7OztBQUNBOztBQUVBOztBQUlBOzs7Ozs7QUFDQSxJQUFNQSxRQUFRLCtCQUFkOztBQUVBLHlCQUFTQSxLQUFUOzs7OztBQWdGRSxzQkFBYztBQUFBOztBQUFBOztBQUFBLFVBN0VkQyxNQTZFYyxHQTdFTDtBQUNQQyxhQUFPO0FBQ0w7QUFDQSx1QkFGSztBQUdMO0FBQ0Esc0JBSks7QUFLTDtBQUNBLG9CQU5LO0FBT0w7QUFDQSxxQkFSSztBQVNMO0FBQ0Esa0JBVks7QUFXTDtBQUNBLGtCQVpLO0FBYUw7QUFDQSxvQkFkSztBQWVMO0FBQ0EsMkJBaEJLO0FBaUJMO0FBQ0EsbUJBbEJLO0FBbUJMO0FBQ0EscUJBcEJLO0FBcUJMO0FBQ0EsaUJBdEJLO0FBdUJMO0FBQ0EsbUJBeEJLO0FBeUJMO0FBQ0Esc0JBMUJLO0FBMkJMO0FBQ0Esc0JBNUJLLENBREE7QUErQlBDLGNBQVE7QUFDTkMsZUFBTyxTQUREO0FBRU5DLHVCQUFlLFNBRlQ7QUFHTkMscUJBQWEsTUFIUDtBQUlOQyx5QkFBaUIsTUFKWDtBQUtOQyxjQUFNLENBQ0o7QUFDRUMsb0JBQVUsaUJBRFo7QUFFRUMsb0JBQVUsMkJBRlo7QUFHRUMsNEJBQWtCLG9DQUhwQjtBQUlFQyxnQkFBTTtBQUpSLFNBREksRUFPSjtBQUNFSCxvQkFBVSxjQURaO0FBRUVDLG9CQUFVLHdCQUZaO0FBR0VDLDRCQUFrQixpQ0FIcEI7QUFJRUMsZ0JBQU07QUFKUixTQVBJO0FBYUo7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDRUgsb0JBQVUsWUFEWjtBQUVFQyxvQkFBVSx1QkFGWjtBQUdFQyw0QkFBa0IsZ0NBSHBCO0FBSUVDLGdCQUFNO0FBSlIsU0F6Qkk7QUFMQSxPQS9CRDtBQXFFUEMsY0FBUTtBQUNOQyw2QkFBcUIsT0FEZjtBQUVOQyxzQ0FBOEIsTUFGeEI7QUFHTkMsZ0NBQXdCLFFBSGxCO0FBSU5DLGdDQUF3QjtBQUpsQjtBQXJFRCxLQTZFSzs7QUFFWixVQUFLQyxHQUFMLENBQVMsWUFBVDtBQUNBLFVBQUtBLEdBQUwsQ0FBUyxXQUFUO0FBSFk7QUFJYjtBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztFQTlGK0IsZUFBS0MsRyIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcbiAgaW1wb3J0ICd3ZXB5LWFzeW5jLWZ1bmN0aW9uJ1xuXG4gIGltcG9ydCB7XG4gICAgc2V0U3RvcmVcbiAgfSBmcm9tICd3ZXB5LXJlZHV4J1xuXG4gIGltcG9ydCBjb25maWd1cmVTdG9yZSBmcm9tICcuL2NvbmZpZ3VyZVN0b3JlJ1xuICBjb25zdCBzdG9yZSA9IGNvbmZpZ3VyZVN0b3JlKClcblxuICBzZXRTdG9yZShzdG9yZSlcblxuICBleHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIHdlcHkuYXBwIHtcbiAgICBjb25maWcgPSB7XG4gICAgICBwYWdlczogW1xuICAgICAgICAvLyDogYrlpKnlrqRcbiAgICAgICAgJ3BhZ2VzL2NoYXRyb29tcycsXG4gICAgICAgIC8vIOa2iOaBr1xuICAgICAgICAncGFnZXMvc2Vzc2lvbnMnLFxuICAgICAgICAvLyDnlZnoqIDmnb9cbiAgICAgICAgJ3BhZ2VzL2JvYXJkcycsXG4gICAgICAgIC8vIOWlveeKueixq1xuICAgICAgICAncGFnZXMvZnJpZW5kcycsXG4gICAgICAgIC8vIOaIkeeahFxuICAgICAgICAncGFnZXMvbWluZScsXG4gICAgICAgIC8vIC8vIOiBiuWkqVxuICAgICAgICAncGFnZXMvY2hhdCcsXG4gICAgICAgIC8vIOWlveWPi1xuICAgICAgICAncGFnZXMvZnJpZW5kJyxcbiAgICAgICAgLy8g5aW955So55Sz6K+35raI5oGvXG4gICAgICAgICdwYWdlcy9ub3RpZmljYXRpb25zJyxcbiAgICAgICAgLy8g55WZ6KiA5p2/6K+m5oOFXG4gICAgICAgICdwYWdlcy9ib2FyZCcsXG4gICAgICAgIC8vIOWPkeW4g+eVmeiogFxuICAgICAgICAncGFnZXMvcHVibGlzaCcsXG4gICAgICAgIC8vIOa3u+WKoOWlveWPi1xuICAgICAgICAncGFnZXMvYWRkJyxcbiAgICAgICAgLy8g55Sz6K+3XG4gICAgICAgICdwYWdlcy9hcHBseScsXG4gICAgICAgIC8vIOiBiuWkqeWupFxuICAgICAgICAncGFnZXMvY2hhdHJvb20nLFxuICAgICAgICAvLyDms6jlhoxcbiAgICAgICAgJ3BhZ2VzL3JlZ2lzdGVyJ1xuICAgICAgXSxcbiAgICAgIHRhYkJhcjoge1xuICAgICAgICBjb2xvcjogJyM3MDcwNzAnLFxuICAgICAgICBzZWxlY3RlZENvbG9yOiAnIzFFQjU3MScsXG4gICAgICAgIGJvcmRlclN0eWxlOiAnI2NjYycsXG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogJyNmZmYnLFxuICAgICAgICBsaXN0OiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgcGFnZVBhdGg6ICdwYWdlcy9jaGF0cm9vbXMnLFxuICAgICAgICAgICAgaWNvblBhdGg6ICdzdGF0aWMvaWNvbnMvY2hhdHJvb20ucG5nJyxcbiAgICAgICAgICAgIHNlbGVjdGVkSWNvblBhdGg6ICdzdGF0aWMvaWNvbnMvY2hhdHJvb21fc2VsZWN0ZWQucG5nJyxcbiAgICAgICAgICAgIHRleHQ6ICfogYrlpKnlrqQnXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBwYWdlUGF0aDogJ3BhZ2VzL2JvYXJkcycsXG4gICAgICAgICAgICBpY29uUGF0aDogJ3N0YXRpYy9pY29ucy9ib2FyZC5wbmcnLFxuICAgICAgICAgICAgc2VsZWN0ZWRJY29uUGF0aDogJ3N0YXRpYy9pY29ucy9ib2FyZF9zZWxlY3RlZC5wbmcnLFxuICAgICAgICAgICAgdGV4dDogJ+eVmeiogOadvydcbiAgICAgICAgICB9LFxuICAgICAgICAgIC8vIHtcbiAgICAgICAgICAvLyAgIHBhZ2VQYXRoOiAncGFnZXMvc2Vzc2lvbnMnLFxuICAgICAgICAgIC8vICAgaWNvblBhdGg6ICdzdGF0aWMvaWNvbnMvbWVzc2FnZS5wbmcnLFxuICAgICAgICAgIC8vICAgc2VsZWN0ZWRJY29uUGF0aDogJ3N0YXRpYy9pY29ucy9tZXNzYWdlX3NlbGVjdGVkLnBuZycsXG4gICAgICAgICAgLy8gICB0ZXh0OiAn5raI5oGvJ1xuICAgICAgICAgIC8vIH0sXG4gICAgICAgICAgLy8ge1xuICAgICAgICAgIC8vICAgcGFnZVBhdGg6ICdwYWdlcy9mcmllbmRzJyxcbiAgICAgICAgICAvLyAgIGljb25QYXRoOiAnc3RhdGljL2ljb25zL2ZyaWVuZHMucG5nJyxcbiAgICAgICAgICAvLyAgIHNlbGVjdGVkSWNvblBhdGg6ICdzdGF0aWMvaWNvbnMvZnJpZW5kc19zZWxlY3RlZC5wbmcnLFxuICAgICAgICAgIC8vICAgdGV4dDogJ+WlveWPiydcbiAgICAgICAgICAvLyB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHBhZ2VQYXRoOiAncGFnZXMvbWluZScsXG4gICAgICAgICAgICBpY29uUGF0aDogJ3N0YXRpYy9pY29ucy9taW5lLnBuZycsXG4gICAgICAgICAgICBzZWxlY3RlZEljb25QYXRoOiAnc3RhdGljL2ljb25zL21pbmVfc2VsZWN0ZWQucG5nJyxcbiAgICAgICAgICAgIHRleHQ6ICfkuKrkurrkuK3lv4MnXG4gICAgICAgICAgfVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgd2luZG93OiB7XG4gICAgICAgIGJhY2tncm91bmRUZXh0U3R5bGU6ICdsaWdodCcsXG4gICAgICAgIG5hdmlnYXRpb25CYXJCYWNrZ3JvdW5kQ29sb3I6ICcjZmZmJyxcbiAgICAgICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ1dlQ2hhdCcsXG4gICAgICAgIG5hdmlnYXRpb25CYXJUZXh0U3R5bGU6ICdibGFjaydcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgIHN1cGVyKClcbiAgICAgIHRoaXMudXNlKCdyZXF1ZXN0Zml4JylcbiAgICAgIHRoaXMudXNlKCdwcm9taXNpZnknKVxuICAgIH1cbi8vICAgIG9uTGF1bmNoKCkge1xuLy8gICAgICBjb25zb2xlLmxvZygn6L+Z5Liq5omn6KGM5LqG5ZCXJylcbi8vICAgICAgd2VweS5zaG93U2hhcmVNZW51KHtcbi8vICAgICAgICB3aXRoU2hhcmVUaWNrZXQ6IHRydWUsXG4vLyAgICAgICAgc3VjY2VzczogKHJlcykgPT4ge1xuLy8gICAgICAgICAgY29uc29sZS5sb2cocmVzKVxuLy8gICAgICAgIH0sXG4vLyAgICAgICAgY29tcGxldGU6IChyZXMpID0+IHtcbi8vICAgICAgICAgIGNvbnNvbGUubG9nKHJlcylcbi8vICAgICAgICB9XG4vLyAgICAgIH0pXG4vLyAgICB9XG4gIH1cbiJdfQ==