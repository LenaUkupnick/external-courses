"use strict"
var str;
var str2;
function findString(str,str2) {
    if (~ str.indexOf(str2)) {
        return true;
    } 
    else if (str === " ");
    return false;
}
module.exports = findString;