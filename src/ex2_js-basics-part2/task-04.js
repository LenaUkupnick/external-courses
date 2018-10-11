'use strict'
var i = 0;
function compareElemens(array) {
    for (i; i < array.length; i++) {
      if (array[i] === array[i++]) {
        return true;
      }   
    }

    return false;
  }

  module.exports = compareElemens;
