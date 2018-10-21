"use strict"
var str = "hi people";
function upperCase (str){
        return str[0].toUpperCase() + str.slice(1);
    }
module.exports = upperCase;