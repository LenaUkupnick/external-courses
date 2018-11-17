"use strict"
var i = 0;
var arr;
function everyAnalogue(arr,callback) {
    for (i; i < arr.length; i++) {
        if (!callback (arr[i], i, arr)) {
            return false;
        }
    }
return true;
}
module.exports = everyAnalogue;