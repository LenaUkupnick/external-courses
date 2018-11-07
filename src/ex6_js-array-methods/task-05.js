"use strict"
var arr;
var i = 0;
result = [];
function mapAnalogue(arr, callback) {
    for (i; i < length; i++) {
      result[i] = callback( arr[i], i, arr);
    }
    return result;
  };
  module.exports = mapAnalogue;