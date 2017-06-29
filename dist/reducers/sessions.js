'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defineProperty2 = require('./../npm/babel-runtime/helpers/defineProperty.js');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _extends2 = require('./../npm/babel-runtime/helpers/extends.js');

var _extends3 = _interopRequireDefault(_extends2);

var _reduxActions = require('./../npm/redux-actions/lib/index.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _require = require('./../actions/sessions.js'),
    REFRESH_SESSIONS = _require.REFRESH_SESSIONS;

exports.default = (0, _reduxActions.handleActions)((0, _defineProperty3.default)({}, REFRESH_SESSIONS, function (state, action) {
  return (0, _extends3.default)({}, state, {
    sessions: action.payload
  });
}), {
  sessions: [{
    cover: 'http://b.hiphotos.baidu.com/baike/w%3D268%3Bg%3D0/sign=6d24a14af81f3a295ac8d2c8a11edb0c/e824b899a9014c088f762831027b02087af4f4d1.jpg',
    title: '一起哈皮的聊天室5',
    members: 50
  }, {
    cover: 'http://b.hiphotos.baidu.com/baike/w%3D268%3Bg%3D0/sign=6d24a14af81f3a295ac8d2c8a11edb0c/e824b899a9014c088f762831027b02087af4f4d1.jpg',
    title: '一起哈皮的聊天室6',
    members: 50
  }, {
    cover: 'http://b.hiphotos.baidu.com/baike/w%3D268%3Bg%3D0/sign=6d24a14af81f3a295ac8d2c8a11edb0c/e824b899a9014c088f762831027b02087af4f4d1.jpg',
    title: '一起哈皮的聊天室7',
    members: 50
  }]
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlc3Npb25zLmpzIl0sIm5hbWVzIjpbInJlcXVpcmUiLCJSRUZSRVNIX1NFU1NJT05TIiwic3RhdGUiLCJhY3Rpb24iLCJzZXNzaW9ucyIsInBheWxvYWQiLCJjb3ZlciIsInRpdGxlIiwibWVtYmVycyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztlQUdJQSxRQUFRLHFCQUFSLEM7SUFERkMsZ0IsWUFBQUEsZ0I7O2tCQUdhLG1FQUNaQSxnQkFEWSxZQUNNQyxLQUROLEVBQ2FDLE1BRGIsRUFDcUI7QUFDaEMsb0NBQ0tELEtBREw7QUFFRUUsY0FBVUQsT0FBT0U7QUFGbkI7QUFJRCxDQU5ZLEdBT1o7QUFDREQsWUFBVSxDQUFDO0FBQ1RFLFdBQU8sc0lBREU7QUFFVEMsV0FBTyxXQUZFO0FBR1RDLGFBQVM7QUFIQSxHQUFELEVBSVA7QUFDREYsV0FBTyxzSUFETjtBQUVEQyxXQUFPLFdBRk47QUFHREMsYUFBUztBQUhSLEdBSk8sRUFRUDtBQUNERixXQUFPLHNJQUROO0FBRURDLFdBQU8sV0FGTjtBQUdEQyxhQUFTO0FBSFIsR0FSTztBQURULENBUFksQyIsImZpbGUiOiJzZXNzaW9ucy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGhhbmRsZUFjdGlvbnMgfSBmcm9tICdyZWR1eC1hY3Rpb25zJ1xuY29uc3Qge1xuICBSRUZSRVNIX1NFU1NJT05TXG59ID0gcmVxdWlyZSgnLi4vYWN0aW9ucy9zZXNzaW9ucycpXG5cbmV4cG9ydCBkZWZhdWx0IGhhbmRsZUFjdGlvbnMoe1xuICBbUkVGUkVTSF9TRVNTSU9OU10oc3RhdGUsIGFjdGlvbikge1xuICAgIHJldHVybiB7XG4gICAgICAuLi5zdGF0ZSxcbiAgICAgIHNlc3Npb25zOiBhY3Rpb24ucGF5bG9hZFxuICAgIH1cbiAgfVxufSwge1xuICBzZXNzaW9uczogW3tcbiAgICBjb3ZlcjogJ2h0dHA6Ly9iLmhpcGhvdG9zLmJhaWR1LmNvbS9iYWlrZS93JTNEMjY4JTNCZyUzRDAvc2lnbj02ZDI0YTE0YWY4MWYzYTI5NWFjOGQyYzhhMTFlZGIwYy9lODI0Yjg5OWE5MDE0YzA4OGY3NjI4MzEwMjdiMDIwODdhZjRmNGQxLmpwZycsXG4gICAgdGl0bGU6ICfkuIDotbflk4jnmq7nmoTogYrlpKnlrqQ1JyxcbiAgICBtZW1iZXJzOiA1MFxuICB9LCB7XG4gICAgY292ZXI6ICdodHRwOi8vYi5oaXBob3Rvcy5iYWlkdS5jb20vYmFpa2UvdyUzRDI2OCUzQmclM0QwL3NpZ249NmQyNGExNGFmODFmM2EyOTVhYzhkMmM4YTExZWRiMGMvZTgyNGI4OTlhOTAxNGMwODhmNzYyODMxMDI3YjAyMDg3YWY0ZjRkMS5qcGcnLFxuICAgIHRpdGxlOiAn5LiA6LW35ZOI55qu55qE6IGK5aSp5a6kNicsXG4gICAgbWVtYmVyczogNTBcbiAgfSwge1xuICAgIGNvdmVyOiAnaHR0cDovL2IuaGlwaG90b3MuYmFpZHUuY29tL2JhaWtlL3clM0QyNjglM0JnJTNEMC9zaWduPTZkMjRhMTRhZjgxZjNhMjk1YWM4ZDJjOGExMWVkYjBjL2U4MjRiODk5YTkwMTRjMDg4Zjc2MjgzMTAyN2IwMjA4N2FmNGY0ZDEuanBnJyxcbiAgICB0aXRsZTogJ+S4gOi1t+WTiOearueahOiBiuWkqeWupDcnLFxuICAgIG1lbWJlcnM6IDUwXG4gIH1dXG59KVxuIl19