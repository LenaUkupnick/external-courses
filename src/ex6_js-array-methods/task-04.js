
"use strict" 
var arr;
var i, result; 
    function analogueFilter (array, callback) { 
        arr = []; 
        for (i = 0; i < array.length; i++) { 
result = callback(array[i], i, array); 
if (result === true) { 
arr.push(array[i]); 
} 
} 
return arr; 
}; 
module.exports = analogueFilter;
