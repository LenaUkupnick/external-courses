var result;
function typeofArguments(a) {
    if (typeof a === "number"){ 
        result = "number";
    }
    else if (typeof a === "string") {
        result = "string";
    }
        else if ( typeof a === "otherwise"){
        result = "underfined";
        }
    return result;
}
console.log (typeofArguments(35));
module.exports = typeofArguments;
