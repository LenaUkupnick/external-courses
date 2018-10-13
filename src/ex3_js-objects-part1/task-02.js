'use strict'
var user = { 
    name: "Lena",  
    age: 21 
    }; 
var key;
    keys (user)
    function keys(user) { 
        for (key in user){
            if (user.hasOwnProperty(key)){
            console.log(key + ":" + user[key]);
        }      
    }
    }
 module.exports = keys;
