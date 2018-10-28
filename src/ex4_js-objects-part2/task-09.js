"use strict"
var str;
var str1;
var arr;
var a;
function newString( str, str1, a) {
    var arr = str.split(' ')
    arr.splice (a + 1, 0, str1)
    return arr.join (' ');
}
module.exports = newString;
