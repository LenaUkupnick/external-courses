'use strict'
var i = 0;
function compareElemens(array) {
    for (i; i < array.length; i++) {
      if (array[i] !== array[i+1]) {
        return false;
      }   
    }
    return true;
  }
  module.exports = compareElemens;
