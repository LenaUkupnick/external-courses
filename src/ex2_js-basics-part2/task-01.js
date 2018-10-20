'use strict'
var a;
function typeofArguments(a) {
    if (typeof a === "number"){ 
        return "number";
    }
    else if (typeof a === "string") {
        return "string";
    }
   
    return undefined;
}
module.exports = typeofArguments;