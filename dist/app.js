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
      'pages/register', 'pages/collection'],
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
          pagePath: 'pages/collection',
          iconPath: 'static/icons/message.png',
          selectedIconPath: 'static/icons/message.png',
          text: '我的收藏'
        }, {
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6WyJzdG9yZSIsImNvbmZpZyIsInBhZ2VzIiwidGFiQmFyIiwiY29sb3IiLCJzZWxlY3RlZENvbG9yIiwiYm9yZGVyU3R5bGUiLCJiYWNrZ3JvdW5kQ29sb3IiLCJsaXN0IiwicGFnZVBhdGgiLCJpY29uUGF0aCIsInNlbGVjdGVkSWNvblBhdGgiLCJ0ZXh0Iiwid2luZG93IiwiYmFja2dyb3VuZFRleHRTdHlsZSIsIm5hdmlnYXRpb25CYXJCYWNrZ3JvdW5kQ29sb3IiLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwibmF2aWdhdGlvbkJhclRleHRTdHlsZSIsInVzZSIsImFwcCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDRTs7OztBQUNBOztBQUVBOztBQUlBOzs7Ozs7QUFDQSxJQUFNQSxRQUFRLCtCQUFkOztBQUVBLHlCQUFTQSxLQUFUOzs7OztBQTBGRSxzQkFBYztBQUFBOztBQUFBOztBQUFBLFVBdkZkQyxNQXVGYyxHQXZGTDtBQUNQQyxhQUFPO0FBQ0w7QUFDQSx1QkFGSztBQUdMO0FBQ0Esb0JBSks7QUFLTDtBQUNBLHNCQU5LO0FBT0w7QUFDUjtBQUNRO0FBQ1I7QUFDUTtBQUNBLGtCQVpLO0FBYUw7QUFDUjtBQUNRO0FBQ1I7QUFDUTtBQUNSO0FBQ1E7QUFDQSxtQkFwQks7QUFxQkw7QUFDQSxxQkF0Qks7QUF1Qkw7QUFDUjtBQUNRO0FBQ1I7QUFDUTtBQUNBLHNCQTVCSztBQTZCTDtBQUNBLHNCQTlCSyxFQStCTCxrQkEvQkssQ0FEQTtBQWtDUEMsY0FBUTtBQUNOQyxlQUFPLFNBREQ7QUFFTkMsdUJBQWUsU0FGVDtBQUdOQyxxQkFBYSxNQUhQO0FBSU5DLHlCQUFpQixNQUpYO0FBS05DLGNBQU0sQ0FDSjtBQUNFQyxvQkFBVSxpQkFEWjtBQUVFQyxvQkFBVSwyQkFGWjtBQUdFQyw0QkFBa0Isb0NBSHBCO0FBSUVDLGdCQUFNO0FBSlIsU0FESSxFQU9KO0FBQ0VILG9CQUFVLGNBRFo7QUFFRUMsb0JBQVUsd0JBRlo7QUFHRUMsNEJBQWtCLGlDQUhwQjtBQUlFQyxnQkFBTTtBQUpSLFNBUEk7QUFhSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNFSCxvQkFBVSxrQkFEWjtBQUVFQyxvQkFBVSwwQkFGWjtBQUdFQyw0QkFBa0IsMEJBSHBCO0FBSUVDLGdCQUFNO0FBSlIsU0F6QkksRUErQko7QUFDRUgsb0JBQVUsWUFEWjtBQUVFQyxvQkFBVSx1QkFGWjtBQUdFQyw0QkFBa0IsZ0NBSHBCO0FBSUVDLGdCQUFNO0FBSlIsU0EvQkk7QUFMQSxPQWxDRDtBQStFUEMsY0FBUTtBQUNOQyw2QkFBcUIsT0FEZjtBQUVOQyxzQ0FBOEIsTUFGeEI7QUFHTkMsZ0NBQXdCLFFBSGxCO0FBSU5DLGdDQUF3QjtBQUpsQjtBQS9FRCxLQXVGSzs7QUFFWixVQUFLQyxHQUFMLENBQVMsWUFBVDtBQUNBLFVBQUtBLEdBQUwsQ0FBUyxXQUFUO0FBSFk7QUFJYjs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7RUE1RytCLGVBQUtDLEciLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbiAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcclxuICBpbXBvcnQgJ3dlcHktYXN5bmMtZnVuY3Rpb24nXHJcblxyXG4gIGltcG9ydCB7XHJcbiAgICBzZXRTdG9yZVxyXG4gIH0gZnJvbSAnd2VweS1yZWR1eCdcclxuXHJcbiAgaW1wb3J0IGNvbmZpZ3VyZVN0b3JlIGZyb20gJy4vY29uZmlndXJlU3RvcmUnXHJcbiAgY29uc3Qgc3RvcmUgPSBjb25maWd1cmVTdG9yZSgpXHJcblxyXG4gIHNldFN0b3JlKHN0b3JlKVxyXG5cclxuICBleHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIHdlcHkuYXBwIHtcclxuICAgIGNvbmZpZyA9IHtcclxuICAgICAgcGFnZXM6IFtcclxuICAgICAgICAvLyDogYrlpKnlrqRcclxuICAgICAgICAncGFnZXMvY2hhdHJvb21zJyxcclxuICAgICAgICAvLyDnlZnoqIDmnb9cclxuICAgICAgICAncGFnZXMvYm9hcmRzJyxcclxuICAgICAgICAvLyDmtojmga9cclxuICAgICAgICAncGFnZXMvdXNlckluZm8nLFxyXG4gICAgICAgIC8vIOa2iOaBr1xyXG4vLyAgICAgICAgJ3BhZ2VzL3Nlc3Npb25zJyxcclxuICAgICAgICAvLyDlpb3nirnosatcclxuLy8gICAgICAgICdwYWdlcy9mcmllbmRzJyxcclxuICAgICAgICAvLyDmiJHnmoRcclxuICAgICAgICAncGFnZXMvbWluZScsXHJcbiAgICAgICAgLy8gLy8g6IGK5aSpXHJcbi8vICAgICAgICAncGFnZXMvY2hhdCcsXHJcbiAgICAgICAgLy8g5aW95Y+LXHJcbi8vICAgICAgICAncGFnZXMvZnJpZW5kJyxcclxuICAgICAgICAvLyDlpb3nlKjnlLPor7fmtojmga9cclxuLy8gICAgICAgICdwYWdlcy9ub3RpZmljYXRpb25zJyxcclxuICAgICAgICAvLyDnlZnoqIDmnb/or6bmg4VcclxuICAgICAgICAncGFnZXMvYm9hcmQnLFxyXG4gICAgICAgIC8vIOWPkeW4g+eVmeiogFxyXG4gICAgICAgICdwYWdlcy9wdWJsaXNoJyxcclxuICAgICAgICAvLyDmt7vliqDlpb3lj4tcclxuLy8gICAgICAgICdwYWdlcy9hZGQnLFxyXG4gICAgICAgIC8vIOeUs+ivt1xyXG4vLyAgICAgICAgJ3BhZ2VzL2FwcGx5JyxcclxuICAgICAgICAvLyDogYrlpKnlrqRcclxuICAgICAgICAncGFnZXMvY2hhdHJvb20nLFxyXG4gICAgICAgIC8vIOazqOWGjFxyXG4gICAgICAgICdwYWdlcy9yZWdpc3RlcicsXHJcbiAgICAgICAgJ3BhZ2VzL2NvbGxlY3Rpb24nLFxyXG4gICAgICBdLFxyXG4gICAgICB0YWJCYXI6IHtcclxuICAgICAgICBjb2xvcjogJyM3MDcwNzAnLFxyXG4gICAgICAgIHNlbGVjdGVkQ29sb3I6ICcjMUVCNTcxJyxcclxuICAgICAgICBib3JkZXJTdHlsZTogJyNjY2MnLFxyXG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogJyNmZmYnLFxyXG4gICAgICAgIGxpc3Q6IFtcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgcGFnZVBhdGg6ICdwYWdlcy9jaGF0cm9vbXMnLFxyXG4gICAgICAgICAgICBpY29uUGF0aDogJ3N0YXRpYy9pY29ucy9jaGF0cm9vbS5wbmcnLFxyXG4gICAgICAgICAgICBzZWxlY3RlZEljb25QYXRoOiAnc3RhdGljL2ljb25zL2NoYXRyb29tX3NlbGVjdGVkLnBuZycsXHJcbiAgICAgICAgICAgIHRleHQ6ICfogYrlpKnlrqQnXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBwYWdlUGF0aDogJ3BhZ2VzL2JvYXJkcycsXHJcbiAgICAgICAgICAgIGljb25QYXRoOiAnc3RhdGljL2ljb25zL2JvYXJkLnBuZycsXHJcbiAgICAgICAgICAgIHNlbGVjdGVkSWNvblBhdGg6ICdzdGF0aWMvaWNvbnMvYm9hcmRfc2VsZWN0ZWQucG5nJyxcclxuICAgICAgICAgICAgdGV4dDogJ+WVhuWPi+WciCdcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICAvLyB7XHJcbiAgICAgICAgICAvLyAgIHBhZ2VQYXRoOiAncGFnZXMvc2Vzc2lvbnMnLFxyXG4gICAgICAgICAgLy8gICBpY29uUGF0aDogJ3N0YXRpYy9pY29ucy9tZXNzYWdlLnBuZycsXHJcbiAgICAgICAgICAvLyAgIHNlbGVjdGVkSWNvblBhdGg6ICdzdGF0aWMvaWNvbnMvbWVzc2FnZV9zZWxlY3RlZC5wbmcnLFxyXG4gICAgICAgICAgLy8gICB0ZXh0OiAn5raI5oGvJ1xyXG4gICAgICAgICAgLy8gfSxcclxuICAgICAgICAgIC8vIHtcclxuICAgICAgICAgIC8vICAgcGFnZVBhdGg6ICdwYWdlcy9mcmllbmRzJyxcclxuICAgICAgICAgIC8vICAgaWNvblBhdGg6ICdzdGF0aWMvaWNvbnMvZnJpZW5kcy5wbmcnLFxyXG4gICAgICAgICAgLy8gICBzZWxlY3RlZEljb25QYXRoOiAnc3RhdGljL2ljb25zL2ZyaWVuZHNfc2VsZWN0ZWQucG5nJyxcclxuICAgICAgICAgIC8vICAgdGV4dDogJ+WlveWPiydcclxuICAgICAgICAgIC8vIH0sXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIHBhZ2VQYXRoOiAncGFnZXMvY29sbGVjdGlvbicsXHJcbiAgICAgICAgICAgIGljb25QYXRoOiAnc3RhdGljL2ljb25zL21lc3NhZ2UucG5nJyxcclxuICAgICAgICAgICAgc2VsZWN0ZWRJY29uUGF0aDogJ3N0YXRpYy9pY29ucy9tZXNzYWdlLnBuZycsXHJcbiAgICAgICAgICAgIHRleHQ6ICfmiJHnmoTmlLbol48nXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBwYWdlUGF0aDogJ3BhZ2VzL21pbmUnLFxyXG4gICAgICAgICAgICBpY29uUGF0aDogJ3N0YXRpYy9pY29ucy9taW5lLnBuZycsXHJcbiAgICAgICAgICAgIHNlbGVjdGVkSWNvblBhdGg6ICdzdGF0aWMvaWNvbnMvbWluZV9zZWxlY3RlZC5wbmcnLFxyXG4gICAgICAgICAgICB0ZXh0OiAn5Liq5Lq65Lit5b+DJ1xyXG4gICAgICAgICAgfSxcclxuXHJcbiAgICAgICAgXVxyXG4gICAgICB9LFxyXG4gICAgICB3aW5kb3c6IHtcclxuICAgICAgICBiYWNrZ3JvdW5kVGV4dFN0eWxlOiAnbGlnaHQnLFxyXG4gICAgICAgIG5hdmlnYXRpb25CYXJCYWNrZ3JvdW5kQ29sb3I6ICcjZmZmJyxcclxuICAgICAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAnV2VDaGF0JyxcclxuICAgICAgICBuYXZpZ2F0aW9uQmFyVGV4dFN0eWxlOiAnYmxhY2snXHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgc3VwZXIoKVxyXG4gICAgICB0aGlzLnVzZSgncmVxdWVzdGZpeCcpXHJcbiAgICAgIHRoaXMudXNlKCdwcm9taXNpZnknKVxyXG4gICAgfVxyXG5cclxuLy8gICAgYXN5bmMgb25MYXVuY2ggKG9wdGlvbnMpIHtcclxuLy8gICAgICBjb25zb2xlLmxvZyhvcHRpb25zKVxyXG4vLyAgICAgIGlmIChvcHRpb25zLnNoYXJlVGlja2V0KSB7XHJcbi8vICAgICAgICBjb25zdCBzaGFyZUluZm8gPSBhd2FpdCB3ZXB5LmdldFNoYXJlSW5mbyh7XHJcbi8vICAgICAgICAgIHNoYXJlVGlja2V0OiBvcHRpb25zLnNoYXJlVGlja2V0LFxyXG4vLyAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAocmVzKSB7XHJcbi8vICAgICAgICAgICAgcmV0dXJuIHJlc1xyXG4vLyAgICAgICAgICB9XHJcbi8vICAgICAgICB9KVxyXG4vLyAgICAgICAgd2VweS5zZXRTdG9yYWdlKHtcclxuLy8gICAgICAgICAga2V5OiAnamZTaGFyZUluZm8nLFxyXG4vLyAgICAgICAgICBkYXRhOiBzaGFyZUluZm9cclxuLy8gICAgICAgIH0pXHJcbi8vICAgICAgfVxyXG4vLyAgICB9XHJcbiAgfVxyXG4iXX0=