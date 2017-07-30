'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setNim = exports.setUser = exports.SET_NIM = exports.SET_USER = undefined;

var _reduxActions = require('./../npm/redux-actions/lib/index.js');

var SET_USER = exports.SET_USER = 'COMMON_SET_USER';
var SET_NIM = exports.SET_NIM = 'COMMON_SET_NIM';
var setUser = exports.setUser = (0, _reduxActions.createAction)(SET_USER, function (user) {
  return user;
});
var setNim = exports.setNim = (0, _reduxActions.createAction)(SET_NIM, function (nim) {
  return nim;
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbW1vbi5qcyJdLCJuYW1lcyI6WyJTRVRfVVNFUiIsIlNFVF9OSU0iLCJzZXRVc2VyIiwidXNlciIsInNldE5pbSIsIm5pbSJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUVBOztBQUZPLElBQU1BLDhCQUFXLGlCQUFqQjtBQUNBLElBQU1DLDRCQUFVLGdCQUFoQjtBQUdBLElBQU1DLDRCQUFVLGdDQUFhRixRQUFiLEVBQXVCO0FBQUEsU0FBUUcsSUFBUjtBQUFBLENBQXZCLENBQWhCO0FBQ0EsSUFBTUMsMEJBQVMsZ0NBQWFILE9BQWIsRUFBc0I7QUFBQSxTQUFPSSxHQUFQO0FBQUEsQ0FBdEIsQ0FBZiIsImZpbGUiOiJjb21tb24uanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgU0VUX1VTRVIgPSAnQ09NTU9OX1NFVF9VU0VSJ1xyXG5leHBvcnQgY29uc3QgU0VUX05JTSA9ICdDT01NT05fU0VUX05JTSdcclxuaW1wb3J0IHsgY3JlYXRlQWN0aW9uIH0gZnJvbSAncmVkdXgtYWN0aW9ucydcclxuXHJcbmV4cG9ydCBjb25zdCBzZXRVc2VyID0gY3JlYXRlQWN0aW9uKFNFVF9VU0VSLCB1c2VyID0+IHVzZXIpXHJcbmV4cG9ydCBjb25zdCBzZXROaW0gPSBjcmVhdGVBY3Rpb24oU0VUX05JTSwgbmltID0+IG5pbSlcclxuIl19