'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.refreshFriends = exports.REFRESH_FRIENDS = undefined;

var _reduxActions = require('./../npm/redux-actions/lib/index.js');

var REFRESH_FRIENDS = exports.REFRESH_FRIENDS = 'FRIENDS_REFRESH_FRIENDS';
var refreshFriends = exports.refreshFriends = (0, _reduxActions.createAction)(REFRESH_FRIENDS, function (friends) {
  return friends;
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZyaWVuZHMuanMiXSwibmFtZXMiOlsiUkVGUkVTSF9GUklFTkRTIiwicmVmcmVzaEZyaWVuZHMiLCJmcmllbmRzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBQ08sSUFBTUEsNENBQWtCLHlCQUF4QjtBQUNBLElBQU1DLDBDQUFpQixnQ0FBYUQsZUFBYixFQUE4QjtBQUFBLFNBQVdFLE9BQVg7QUFBQSxDQUE5QixDQUF2QiIsImZpbGUiOiJmcmllbmRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlQWN0aW9uIH0gZnJvbSAncmVkdXgtYWN0aW9ucydcbmV4cG9ydCBjb25zdCBSRUZSRVNIX0ZSSUVORFMgPSAnRlJJRU5EU19SRUZSRVNIX0ZSSUVORFMnXG5leHBvcnQgY29uc3QgcmVmcmVzaEZyaWVuZHMgPSBjcmVhdGVBY3Rpb24oUkVGUkVTSF9GUklFTkRTLCBmcmllbmRzID0+IGZyaWVuZHMpXG4iXX0=