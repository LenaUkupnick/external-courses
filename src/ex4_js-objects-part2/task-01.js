'use strict' 
var property;
var obj;
function propertyInPrototype (property, obj) { 
if (!obj.hasOwnProperty(property) && property in obj) { 
return obj[property]; 
} 
return undefined; 
} 
module.exports = propertyInPrototype;