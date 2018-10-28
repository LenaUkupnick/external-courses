"use strict"
var str;
var arr;
var i = 0;
function upperCases(str) {
    var arr = str.split(' ');
    for (i; i < arr.length; i++) {
        if(arr[i].toLowerCase()) {
            arr[i] = arr[i][0].toUpperCase() + arr[i].slice(1);
        }  
    }
    return arr.join (' ');
}
module.exports = upperCases;


