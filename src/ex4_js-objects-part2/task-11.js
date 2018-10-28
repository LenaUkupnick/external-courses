'use strict' 
var arr; 
var result = {};
var i = 0; 
var key;
function howManyTimes(str) { 
 arr = str.split(''); 
    for (i; i < arr.length; i++) { 
        if (result[arr[i]] !== undefined) { 
            result[arr[i]]++ ; 
        }    
        else {
          result[arr[i]] = 1; 
        } 
    }
  for (key in result) { 
        if (result.hasOwnProperty(key)){ 
    console.log(key + ' ' + result[key]); 
        } 
    } 
}; 
module.exports = howManyTimes;
