function compareElemens(array) {
    for (i = 0; i < array.length; i++) {
      if (array[i] !== array[0]) {
        return false;
      }   
    }
    return true;
  }
  module.exports = compareElemens;