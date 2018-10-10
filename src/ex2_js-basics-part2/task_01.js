function typeofArguments(a) {
    if (typeof a == "number") 
        return " This is number";
    else if (typeof a == "string")
        return "This is string";
    else 
        return "Underfind";
}
console.log (typeofArguments(45));