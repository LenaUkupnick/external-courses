'use strict'
var array;
var i = 0;
var count;
function compareElements(array){
  for (i; i < array.length; i++) {
    for (count = i + 1; count < array.length; count++) {
      if (array [i] === array[count]) {
        return true
      }
    }
  }
  return false;
}
  module.exports = compareElements;