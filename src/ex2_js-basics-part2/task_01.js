var a = 45;
function typeofArguments(a) {
    if (typeof a == "number")
        return " This is number";
    else if (typeof a == "string")
        return "This is string";
}
console.log (typeofArguments(a));