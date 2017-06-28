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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbW1vbi5qcyJdLCJuYW1lcyI6WyJTRVRfVVNFUiIsIlNFVF9OSU0iLCJzZXRVc2VyIiwidXNlciIsInNldE5pbSIsIm5pbSJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUVBOztBQUZPLElBQU1BLDhCQUFXLGlCQUFqQjtBQUNBLElBQU1DLDRCQUFVLGdCQUFoQjtBQUdBLElBQU1DLDRCQUFVLGdDQUFhRixRQUFiLEVBQXVCO0FBQUEsU0FBUUcsSUFBUjtBQUFBLENBQXZCLENBQWhCO0FBQ0EsSUFBTUMsMEJBQVMsZ0NBQWFILE9BQWIsRUFBc0I7QUFBQSxTQUFPSSxHQUFQO0FBQUEsQ0FBdEIsQ0FBZiIsImZpbGUiOiJjb21tb24uanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgU0VUX1VTRVIgPSAnQ09NTU9OX1NFVF9VU0VSJ1xuZXhwb3J0IGNvbnN0IFNFVF9OSU0gPSAnQ09NTU9OX1NFVF9OSU0nXG5pbXBvcnQgeyBjcmVhdGVBY3Rpb24gfSBmcm9tICdyZWR1eC1hY3Rpb25zJ1xuXG5leHBvcnQgY29uc3Qgc2V0VXNlciA9IGNyZWF0ZUFjdGlvbihTRVRfVVNFUiwgdXNlciA9PiB1c2VyKVxuZXhwb3J0IGNvbnN0IHNldE5pbSA9IGNyZWF0ZUFjdGlvbihTRVRfTklNLCBuaW0gPT4gbmltKVxuIl19