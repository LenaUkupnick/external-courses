'use strict'
var city = "Ryazan"; 
const human = { 
    name: "Lena", 
    age: 21 
    }; 
var key;
addProperty (city,human);
function addProperty(city, human) { 
    for( key in human) { 
        if(key === city) { 
    return human; 
        } 
    }  else   {  
       human[city] = "new";
    return human; }
}
module.exports = addProperty;
