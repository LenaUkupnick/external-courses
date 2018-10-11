'use strict'
var i = 0;
function compareElemens(array) {
    for (i; i < array.length; i++) {
      if (array[i] === array[i++]) {
        return true;
      }   
      if (array[i] !== array[i++]) {
    return false;
      }
  }
}
  module.exports = compareElemens;
