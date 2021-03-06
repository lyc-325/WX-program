'use strict';
// https://tc39.github.io/proposal-setmap-offrom/
var $export = require('./_export.js');

module.exports = function (COLLECTION) {
  $export($export.S, COLLECTION, { of: function of() {
    var length = arguments.length;
    var A = Array(length);
    while (length--) A[length] = arguments[length];
    return new this(A);
  } });
};
