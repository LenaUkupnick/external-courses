"use strict"
var i = 0;
var arr;
function someAnalogue(arr, callback) {
    for ( i; i < arr.length; i++) {
        if (callback(arr[i], i, arr)) {
            return true;  
        }           
    } 
    return false;
}
module.exports = someAnalogue;