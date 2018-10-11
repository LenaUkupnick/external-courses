function typeofArguments(a) {
    if (typeof a === "number"){ 
        return "number";
    }
    else if (typeof a === "string") {
        return "string";
    }
        else if ( typeof a === "otherwise"){
        return "underfined";
        }
}
console.log (typeofArguments(35));
module.exports = typeofArguments;
