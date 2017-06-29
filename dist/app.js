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
      pages: ['pages/chatrooms', 'pages/sessions', 'pages/boards', 'pages/friends', 'pages/mine', 'pages/chat', 'pages/friend', 'pages/notification', 'pages/board', 'pages/publish', 'pages/apply', 'pages/chatroom', 'pages/register', 'pages/add'],
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6WyJzdG9yZSIsImNvbmZpZyIsInBhZ2VzIiwidGFiQmFyIiwiY29sb3IiLCJzZWxlY3RlZENvbG9yIiwiYm9yZGVyU3R5bGUiLCJiYWNrZ3JvdW5kQ29sb3IiLCJsaXN0IiwicGFnZVBhdGgiLCJpY29uUGF0aCIsInNlbGVjdGVkSWNvblBhdGgiLCJ0ZXh0Iiwid2luZG93IiwiYmFja2dyb3VuZFRleHRTdHlsZSIsIm5hdmlnYXRpb25CYXJCYWNrZ3JvdW5kQ29sb3IiLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwibmF2aWdhdGlvbkJhclRleHRTdHlsZSIsInVzZSIsImFwcCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTs7OztBQUNBOztBQUVBOztBQUlBOzs7Ozs7QUFDQSxJQUFNQSxRQUFRLCtCQUFkOztBQUVBLHlCQUFTQSxLQUFUOzs7OztBQWtFRSxzQkFBYztBQUFBOztBQUFBOztBQUFBLFVBL0RkQyxNQStEYyxHQS9ETDtBQUNQQyxhQUFPLENBQ0wsaUJBREssRUFFTCxnQkFGSyxFQUdMLGNBSEssRUFJTCxlQUpLLEVBS0wsWUFMSyxFQU1MLFlBTkssRUFPTCxjQVBLLEVBUUwsb0JBUkssRUFTTCxhQVRLLEVBVUwsZUFWSyxFQVdMLGFBWEssRUFZTCxnQkFaSyxFQWFMLGdCQWJLLEVBY0wsV0FkSyxDQURBO0FBaUJQQyxjQUFRO0FBQ05DLGVBQU8sU0FERDtBQUVOQyx1QkFBZSxTQUZUO0FBR05DLHFCQUFhLE1BSFA7QUFJTkMseUJBQWlCLE1BSlg7QUFLTkMsY0FBTSxDQUNKO0FBQ0VDLG9CQUFVLGlCQURaO0FBRUVDLG9CQUFVLDJCQUZaO0FBR0VDLDRCQUFrQixvQ0FIcEI7QUFJRUMsZ0JBQU07QUFKUixTQURJLEVBT0o7QUFDRUgsb0JBQVUsY0FEWjtBQUVFQyxvQkFBVSx3QkFGWjtBQUdFQyw0QkFBa0IsaUNBSHBCO0FBSUVDLGdCQUFNO0FBSlIsU0FQSSxFQWFKO0FBQ0VILG9CQUFVLGdCQURaO0FBRUVDLG9CQUFVLDBCQUZaO0FBR0VDLDRCQUFrQixtQ0FIcEI7QUFJRUMsZ0JBQU07QUFKUixTQWJJLEVBbUJKO0FBQ0VILG9CQUFVLGVBRFo7QUFFRUMsb0JBQVUsMEJBRlo7QUFHRUMsNEJBQWtCLG1DQUhwQjtBQUlFQyxnQkFBTTtBQUpSLFNBbkJJLEVBeUJKO0FBQ0VILG9CQUFVLFlBRFo7QUFFRUMsb0JBQVUsdUJBRlo7QUFHRUMsNEJBQWtCLGdDQUhwQjtBQUlFQyxnQkFBTTtBQUpSLFNBekJJO0FBTEEsT0FqQkQ7QUF1RFBDLGNBQVE7QUFDTkMsNkJBQXFCLE9BRGY7QUFFTkMsc0NBQThCLE1BRnhCO0FBR05DLGdDQUF3QixRQUhsQjtBQUlOQyxnQ0FBd0I7QUFKbEI7QUF2REQsS0ErREs7O0FBRVosVUFBS0MsR0FBTCxDQUFTLFlBQVQ7QUFDQSxVQUFLQSxHQUFMLENBQVMsV0FBVDtBQUhZO0FBSWI7OztFQXBFMEIsZUFBS0MsRyIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG5pbXBvcnQgJ3dlcHktYXN5bmMtZnVuY3Rpb24nXG5cbmltcG9ydCB7XG4gIHNldFN0b3JlXG59IGZyb20gJ3dlcHktcmVkdXgnXG5cbmltcG9ydCBjb25maWd1cmVTdG9yZSBmcm9tICcuL2NvbmZpZ3VyZVN0b3JlJ1xuY29uc3Qgc3RvcmUgPSBjb25maWd1cmVTdG9yZSgpXG5cbnNldFN0b3JlKHN0b3JlKVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIHdlcHkuYXBwIHtcbiAgY29uZmlnID0ge1xuICAgIHBhZ2VzOiBbXG4gICAgICAncGFnZXMvY2hhdHJvb21zJyxcbiAgICAgICdwYWdlcy9zZXNzaW9ucycsXG4gICAgICAncGFnZXMvYm9hcmRzJyxcbiAgICAgICdwYWdlcy9mcmllbmRzJyxcbiAgICAgICdwYWdlcy9taW5lJyxcbiAgICAgICdwYWdlcy9jaGF0JyxcbiAgICAgICdwYWdlcy9mcmllbmQnLFxuICAgICAgJ3BhZ2VzL25vdGlmaWNhdGlvbicsXG4gICAgICAncGFnZXMvYm9hcmQnLFxuICAgICAgJ3BhZ2VzL3B1Ymxpc2gnLFxuICAgICAgJ3BhZ2VzL2FwcGx5JyxcbiAgICAgICdwYWdlcy9jaGF0cm9vbScsXG4gICAgICAncGFnZXMvcmVnaXN0ZXInLFxuICAgICAgJ3BhZ2VzL2FkZCdcbiAgICBdLFxuICAgIHRhYkJhcjoge1xuICAgICAgY29sb3I6ICcjNzA3MDcwJyxcbiAgICAgIHNlbGVjdGVkQ29sb3I6ICcjMUVCNTcxJyxcbiAgICAgIGJvcmRlclN0eWxlOiAnI2NjYycsXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjZmZmJyxcbiAgICAgIGxpc3Q6IFtcbiAgICAgICAge1xuICAgICAgICAgIHBhZ2VQYXRoOiAncGFnZXMvY2hhdHJvb21zJyxcbiAgICAgICAgICBpY29uUGF0aDogJ3N0YXRpYy9pY29ucy9jaGF0cm9vbS5wbmcnLFxuICAgICAgICAgIHNlbGVjdGVkSWNvblBhdGg6ICdzdGF0aWMvaWNvbnMvY2hhdHJvb21fc2VsZWN0ZWQucG5nJyxcbiAgICAgICAgICB0ZXh0OiAn6IGK5aSp5a6kJ1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgcGFnZVBhdGg6ICdwYWdlcy9ib2FyZHMnLFxuICAgICAgICAgIGljb25QYXRoOiAnc3RhdGljL2ljb25zL2JvYXJkLnBuZycsXG4gICAgICAgICAgc2VsZWN0ZWRJY29uUGF0aDogJ3N0YXRpYy9pY29ucy9ib2FyZF9zZWxlY3RlZC5wbmcnLFxuICAgICAgICAgIHRleHQ6ICfnlZnoqIDmnb8nXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBwYWdlUGF0aDogJ3BhZ2VzL3Nlc3Npb25zJyxcbiAgICAgICAgICBpY29uUGF0aDogJ3N0YXRpYy9pY29ucy9tZXNzYWdlLnBuZycsXG4gICAgICAgICAgc2VsZWN0ZWRJY29uUGF0aDogJ3N0YXRpYy9pY29ucy9tZXNzYWdlX3NlbGVjdGVkLnBuZycsXG4gICAgICAgICAgdGV4dDogJ+a2iOaBrydcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIHBhZ2VQYXRoOiAncGFnZXMvZnJpZW5kcycsXG4gICAgICAgICAgaWNvblBhdGg6ICdzdGF0aWMvaWNvbnMvZnJpZW5kcy5wbmcnLFxuICAgICAgICAgIHNlbGVjdGVkSWNvblBhdGg6ICdzdGF0aWMvaWNvbnMvZnJpZW5kc19zZWxlY3RlZC5wbmcnLFxuICAgICAgICAgIHRleHQ6ICflpb3lj4snXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBwYWdlUGF0aDogJ3BhZ2VzL21pbmUnLFxuICAgICAgICAgIGljb25QYXRoOiAnc3RhdGljL2ljb25zL21pbmUucG5nJyxcbiAgICAgICAgICBzZWxlY3RlZEljb25QYXRoOiAnc3RhdGljL2ljb25zL21pbmVfc2VsZWN0ZWQucG5nJyxcbiAgICAgICAgICB0ZXh0OiAn5oiR55qEJ1xuICAgICAgICB9XG4gICAgICBdXG4gICAgfSxcbiAgICB3aW5kb3c6IHtcbiAgICAgIGJhY2tncm91bmRUZXh0U3R5bGU6ICdsaWdodCcsXG4gICAgICBuYXZpZ2F0aW9uQmFyQmFja2dyb3VuZENvbG9yOiAnI2ZmZicsXG4gICAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAnV2VDaGF0JyxcbiAgICAgIG5hdmlnYXRpb25CYXJUZXh0U3R5bGU6ICdibGFjaydcbiAgICB9XG4gIH1cblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpXG4gICAgdGhpcy51c2UoJ3JlcXVlc3RmaXgnKVxuICAgIHRoaXMudXNlKCdwcm9taXNpZnknKVxuICB9XG59XG4iXX0=