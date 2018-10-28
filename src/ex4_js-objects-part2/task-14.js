'use strict' 
var min;
var max;
function randomNumber (min, max) { 
return Math.floor(min + Math.random() * (max + 1 - min)) 
} 
module.exports = randomNumber;