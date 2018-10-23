'use strict'
var city = "Ryazan"; 
const human = { 
    name: "Lena", 
    age: 21 
    }; 
var key;
addProperty (city,human);
function addProperty(city, human) { 
    var city2 = city;
    var human2 = human;
        for( key in human2) { 
        if(key === city2) { 
    return human2; 
        } 
    }
       human2[city2] = "new";
    return human2; 
}
module.exports = addProperty;
