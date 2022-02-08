var arr = [2,3,5,8,3,1,2,6,3,2,7,8,2,4,7];

arr = arr.filter(function( first, second, third ) {
    return third.indexOf(first) === second;
});
console.log(arr.toString())

