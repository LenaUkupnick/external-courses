var arr = [3, 9, 45];
    max = arr[0];
arr.forEach (function(item, i,arr){
    if (arr [i]> max) max = arr[i];
});
console.log (max);