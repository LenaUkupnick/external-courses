'use strict'
var human = { 
    name: "Lena",  
    age: 21 
    }; 
var key;
    keys (human)
    function keys(human) { 
        for (key in human){
            if (human.hasOwnProperty(key)){
            console.log(key + ":" + human[key]);
        }      
    } 
 module.exports = keys;
