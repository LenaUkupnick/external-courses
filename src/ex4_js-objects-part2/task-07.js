"use strict"
var str;
var max;
function cutString (str,max){
    if (str.length < max) {
        return str;
        
}
return str.slice(0, max - 3) + "…";
}
module.exports = cutString;