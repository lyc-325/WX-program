'use strict';

var _promise = require('./../npm/babel-runtime/core-js/promise.js');

var _promise2 = _interopRequireDefault(_promise);

var _NIM_Web_Chatroom_v = require('./../libs/NIM_Web_Chatroom_v3.8.0.js');

var _NIM_Web_Chatroom_v2 = _interopRequireDefault(_NIM_Web_Chatroom_v);

var _promisify = require('./promisify.js');

var _promisify2 = _interopRequireDefault(_promisify);

var _config = require('./../config.js');

var _config2 = _interopRequireDefault(_config);

var _ramda = require('./../libs/ramda.js');

var _ramda2 = _interopRequireDefault(_ramda);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * getInstance
 * @param account String
 * @param token String
 * @param id String
 * @param addresses Array
 */
function getInstance(account, token, id, addresses) {
  return new _promise2.default(function (resolve, reject) {
    var chatroom = _NIM_Web_Chatroom_v2.default.getInstance({
      appKey: _config2.default.appKey,
      account: account,
      token: token,
      chatroomId: id,
      chatroomAddresses: addresses,
      onerror: function onerror(error) {
        reject(error);
      },
      onconnect: function onconnect(obj) {
        // Promisify chatrrom functions
        _ramda2.default.forEach(function (key) {
          chatroom[key] = (0, _promisify2.default)(chatroom[key].bind(chatroom));
        }, promisedFunctions);
        resolve(chatroom);
      }
    });
  });
}

var promisedFunctions = ['getChatroom', 'updateChatroom', 'updateMyChatroomMemberInfo', 'sendText', 'sendFile', 'getHistoryMsgs', 'getChatroomMembers', 'markChatroomManager'];

module.exports = {
  getInstance: getInstance
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoYXRyb29tLmpzIl0sIm5hbWVzIjpbImdldEluc3RhbmNlIiwiYWNjb3VudCIsInRva2VuIiwiaWQiLCJhZGRyZXNzZXMiLCJyZXNvbHZlIiwicmVqZWN0IiwiY2hhdHJvb20iLCJhcHBLZXkiLCJjaGF0cm9vbUlkIiwiY2hhdHJvb21BZGRyZXNzZXMiLCJvbmVycm9yIiwiZXJyb3IiLCJvbmNvbm5lY3QiLCJvYmoiLCJmb3JFYWNoIiwia2V5IiwiYmluZCIsInByb21pc2VkRnVuY3Rpb25zIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7OztBQUVBOzs7Ozs7O0FBT0EsU0FBU0EsV0FBVCxDQUFxQkMsT0FBckIsRUFBOEJDLEtBQTlCLEVBQXFDQyxFQUFyQyxFQUF5Q0MsU0FBekMsRUFBb0Q7QUFDbEQsU0FBTyxzQkFBWSxVQUFDQyxPQUFELEVBQVVDLE1BQVYsRUFBcUI7QUFDdEMsUUFBTUMsV0FBVyw2QkFBU1AsV0FBVCxDQUFxQjtBQUNwQ1EsY0FBUSxpQkFBT0EsTUFEcUI7QUFFcENQLHNCQUZvQztBQUdwQ0Msa0JBSG9DO0FBSXBDTyxrQkFBWU4sRUFKd0I7QUFLcENPLHlCQUFtQk4sU0FMaUI7QUFNcENPLGFBTm9DLG1CQU01QkMsS0FONEIsRUFNckI7QUFDYk4sZUFBT00sS0FBUDtBQUNELE9BUm1DO0FBU3BDQyxlQVRvQyxxQkFTMUJDLEdBVDBCLEVBU3JCO0FBQ2I7QUFDQSx3QkFBRUMsT0FBRixDQUFVLFVBQUNDLEdBQUQsRUFBUztBQUNqQlQsbUJBQVNTLEdBQVQsSUFBZ0IseUJBQVVULFNBQVNTLEdBQVQsRUFBY0MsSUFBZCxDQUFtQlYsUUFBbkIsQ0FBVixDQUFoQjtBQUNELFNBRkQsRUFFR1csaUJBRkg7QUFHQWIsZ0JBQVFFLFFBQVI7QUFDRDtBQWZtQyxLQUFyQixDQUFqQjtBQWlCRCxHQWxCTSxDQUFQO0FBbUJEOztBQUVELElBQU1XLG9CQUFvQixDQUN4QixhQUR3QixFQUV4QixnQkFGd0IsRUFHeEIsNEJBSHdCLEVBS3hCLFVBTHdCLEVBTXhCLFVBTndCLEVBT3hCLGdCQVB3QixFQVN4QixvQkFUd0IsRUFVeEIscUJBVndCLENBQTFCOztBQWFBQyxPQUFPQyxPQUFQLEdBQWlCO0FBQ2ZwQjtBQURlLENBQWpCIiwiZmlsZSI6ImNoYXRyb29tLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IENoYXRyb29tIGZyb20gJy4uL2xpYnMvTklNX1dlYl9DaGF0cm9vbV92My44LjAnXG5pbXBvcnQgcHJvbWlzaWZ5IGZyb20gJy4vcHJvbWlzaWZ5J1xuaW1wb3J0IGNvbmZpZyBmcm9tICcuLi9jb25maWcnXG5pbXBvcnQgUiBmcm9tICcuLi9saWJzL3JhbWRhJ1xuXG4vKipcbiAqIGdldEluc3RhbmNlXG4gKiBAcGFyYW0gYWNjb3VudCBTdHJpbmdcbiAqIEBwYXJhbSB0b2tlbiBTdHJpbmdcbiAqIEBwYXJhbSBpZCBTdHJpbmdcbiAqIEBwYXJhbSBhZGRyZXNzZXMgQXJyYXlcbiAqL1xuZnVuY3Rpb24gZ2V0SW5zdGFuY2UoYWNjb3VudCwgdG9rZW4sIGlkLCBhZGRyZXNzZXMpIHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICBjb25zdCBjaGF0cm9vbSA9IENoYXRyb29tLmdldEluc3RhbmNlKHtcbiAgICAgIGFwcEtleTogY29uZmlnLmFwcEtleSxcbiAgICAgIGFjY291bnQsXG4gICAgICB0b2tlbixcbiAgICAgIGNoYXRyb29tSWQ6IGlkLFxuICAgICAgY2hhdHJvb21BZGRyZXNzZXM6IGFkZHJlc3NlcyxcbiAgICAgIG9uZXJyb3IoZXJyb3IpIHtcbiAgICAgICAgcmVqZWN0KGVycm9yKVxuICAgICAgfSxcbiAgICAgIG9uY29ubmVjdChvYmopIHtcbiAgICAgICAgLy8gUHJvbWlzaWZ5IGNoYXRycm9tIGZ1bmN0aW9uc1xuICAgICAgICBSLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgICAgIGNoYXRyb29tW2tleV0gPSBwcm9taXNpZnkoY2hhdHJvb21ba2V5XS5iaW5kKGNoYXRyb29tKSlcbiAgICAgICAgfSwgcHJvbWlzZWRGdW5jdGlvbnMpXG4gICAgICAgIHJlc29sdmUoY2hhdHJvb20pXG4gICAgICB9XG4gICAgfSlcbiAgfSlcbn1cblxuY29uc3QgcHJvbWlzZWRGdW5jdGlvbnMgPSBbXG4gICdnZXRDaGF0cm9vbScsXG4gICd1cGRhdGVDaGF0cm9vbScsXG4gICd1cGRhdGVNeUNoYXRyb29tTWVtYmVySW5mbycsXG5cbiAgJ3NlbmRUZXh0JyxcbiAgJ3NlbmRGaWxlJyxcbiAgJ2dldEhpc3RvcnlNc2dzJyxcblxuICAnZ2V0Q2hhdHJvb21NZW1iZXJzJyxcbiAgJ21hcmtDaGF0cm9vbU1hbmFnZXInXG5dXG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBnZXRJbnN0YW5jZVxufVxuIl19