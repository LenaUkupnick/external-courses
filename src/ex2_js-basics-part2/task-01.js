
function typeofArguments(a) {
    if (typeof a === "number"){ 
        return "number";
    }
    else if (typeof a === "string") {
        return "string";
    }
   
    return undefined;
}
console.log (typeofArguments(null));
module.exports = typeofArguments;