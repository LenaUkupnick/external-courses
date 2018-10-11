'use strict'
function countElements(arr) {
    var even = 0;
    var notEven = 0;
    var nulls = 0;
    var i = 0;
        for (i; i < arr.length; i++) {
            if (arr[i] % 2 === 0 && arr[i] !== 0 && arr[i] !== null) {
                 even += 1;
            }
            else if (arr[i] === 0) {
                nulls += 1;
            }
            else if (arr[i] % 2 !== 0) {
                notEven += 1;
            }
        }
    return [even, notEven, nulls];
}
console.log (countElements ([1,0]));
module.exports = countElements;
