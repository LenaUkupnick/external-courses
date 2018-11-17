"use strict"
var result = 0;
var Calculator = { 
'multiply': function multiply (x) {
    if (x !== undefined) {
        Calculator.result *= x;
    }
    return multiply;
},

'divide': function divide (x) {
    if (x !== undefined) {
        Calculator.result /= x;
    }
    return divide;
},

'subtract': function subtract (x) {
    if (x !== undefined) {
        Calculator.result -= x;
    }
    return subtract;
},

'add': function add (x) {
    if (x !== undefined) {
        Calculator.result += x;
    }
    return add;
},

'getResult': function () {
    return this.result;
},
'reset': function () {
    this.result = 0;
    }
};
module.exports = Calculator;