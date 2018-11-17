"use strict"
var str;
var max;
function cutString (str,max){
    if (str.length < max) {
        return str;
        
}
return str.slice(0, max - 1) + "…";
}
module.exports = cutString;