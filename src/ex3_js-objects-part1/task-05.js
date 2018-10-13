'use strict'
var obj = {
    name:'Lena',
    age: 21
};
var key;
var clone ={};
cloneTheObject (obj)
function cloneTheObject (obj) {
    for (key in obj) {
        clone[key] = obj[key];
    }
}
module.exports = cloneTheObject
