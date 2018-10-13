// function doesPropertyExist(propertyName, object) {
//     return object[propertyName] != undefined
//     }
    
//    console.log (doesPropertyExist("pussy", {pussy:5}))
//     console.log (doesPropertyExist("pusy", {pussy:5}))
    'use strict'
    var obj;
    var name;
    function findKeys(name, obj) {
        if (obj === null) {
            return false
        }
            return obj[name] !== undefined
        }
        
        module.exports = findKeys;

  
    