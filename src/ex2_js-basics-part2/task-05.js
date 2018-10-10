
var arr = [1, -100, 100];
var max = 0;
function maxElement(arr) {
    for(i = 0; i < arr.length; i++ ){
        if (arr [i] > max){
            max = arr [i];
        }
    }
    return max;
}
console.log (maxElement(arr));
module.exports = maxElement;