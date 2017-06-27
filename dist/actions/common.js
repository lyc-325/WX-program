'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.initNim = exports.initUser = exports.INIT_NIM = exports.INIT_USER = undefined;

var _reduxActions = require('./../npm/redux-actions/lib/index.js');

var INIT_USER = exports.INIT_USER = 'COMMON_INIT_USER';
var INIT_NIM = exports.INIT_NIM = 'COMMON_INIT_NIM';
var initUser = exports.initUser = (0, _reduxActions.createAction)(INIT_USER, function (user) {
  return user;
});
var initNim = exports.initNim = (0, _reduxActions.createAction)(INIT_NIM, function (nim) {
  return nim;
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbW1vbi5qcyJdLCJuYW1lcyI6WyJJTklUX1VTRVIiLCJJTklUX05JTSIsImluaXRVc2VyIiwidXNlciIsImluaXROaW0iLCJuaW0iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFFQTs7QUFGTyxJQUFNQSxnQ0FBWSxrQkFBbEI7QUFDQSxJQUFNQyw4QkFBVyxpQkFBakI7QUFHQSxJQUFNQyw4QkFBVyxnQ0FBYUYsU0FBYixFQUF3QjtBQUFBLFNBQVFHLElBQVI7QUFBQSxDQUF4QixDQUFqQjtBQUNBLElBQU1DLDRCQUFVLGdDQUFhSCxRQUFiLEVBQXVCO0FBQUEsU0FBT0ksR0FBUDtBQUFBLENBQXZCLENBQWhCIiwiZmlsZSI6ImNvbW1vbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBJTklUX1VTRVIgPSAnQ09NTU9OX0lOSVRfVVNFUidcbmV4cG9ydCBjb25zdCBJTklUX05JTSA9ICdDT01NT05fSU5JVF9OSU0nXG5pbXBvcnQgeyBjcmVhdGVBY3Rpb24gfSBmcm9tICdyZWR1eC1hY3Rpb25zJ1xuXG5leHBvcnQgY29uc3QgaW5pdFVzZXIgPSBjcmVhdGVBY3Rpb24oSU5JVF9VU0VSLCB1c2VyID0+IHVzZXIpXG5leHBvcnQgY29uc3QgaW5pdE5pbSA9IGNyZWF0ZUFjdGlvbihJTklUX05JTSwgbmltID0+IG5pbSlcbiJdfQ==