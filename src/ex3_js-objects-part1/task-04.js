var surname = "Barinova"; 
const human = { 
    name: "Lena", 
    age: 21 
    }; 
addProperty (surname,human);
function addProperty(surname, human) { 
    for( key in human) { 
        if(key === surname) { 
    return human; 
        } 
    } 
    human[surname] = "new"; 

    return human; 
}

module.exports = addProperty;
