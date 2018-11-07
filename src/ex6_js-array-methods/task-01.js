'use strict' 
var i; 
var array; 
    function sliceAnalogue (arr, num, num1) { 
        array = []; 
            if (num === undefined && num1 === undefined) { 
                for (i = 0; i < arr.length; i++) { 
                    array.push(arr[i]); 
                } 
                return array; 
            } 
            if (num1 === undefined && num > 0) { 
                for (i = num; i < arr.length; i++) { 
                    array.push(arr[i]); 
                } 
                return array; 
            } 
            if (num < 0 && num1 === undefined) { 
                for (i = (num + arr.length); i < arr.length; i++) { 
                    array.push(arr[i]); 
                } 
                return array; 
            } 
            if (num < 0 && num1 < 0) { 
                for (i = (num + arr.length); i < (num1 + arr.length); i++) { 
                   array.push(arr[i]); 
                } 
                    return array; 
                } 
                for (i = num; i < num1; i++) { 
                    array.push(arr[i]); 
                } 
                    return array; 
    }; 
module.exports = sliceAnalogue;