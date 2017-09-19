'use strict';
var strong = require('./_collection-strong.js');
var validate = require('./_validate-collection.js');
var SET = 'Set';

// 23.2 Set Objects
module.exports = require('./_collection.js')(SET, function (get) {
  return function Set() { return get(this, arguments.length > 0 ? arguments[0] : undefined); };
}, {
  // 23.2.3.1 Set.prototype.add(value)
  add: function add(value) {
    return strong.def(validate(this, SET), value = value === 0 ? 0 : value, value);
  }
}, strong);
