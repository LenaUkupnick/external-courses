'use strict' 
var arr;
var str;
function newString (str) { 
var arr = str.split('') 
arr = arr.reverse() 
return arr.join('') 
} 
module.exports = newString