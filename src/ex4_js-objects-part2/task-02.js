'use strict' 
var noPrototype; 
function objWithoutPrototype() { 
noPrototype = Object.create(null); 
return noPrototype; 
}; 
module.exports = objWithoutPrototype;