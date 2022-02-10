// write a function that counts the number of duplicate characters.
//     example input: "adsjfdsfsfjsdjfhacabcsbajda"
// expected output: { a: 5, b: 2, c: 2, d: 4, f: 4, j: 4, s: 5 }
//
//

function duplicateCount(str) {
    if(str) {
        var array = {};
        for(let i = 0; i < str.length; i++) {
            if(array[str[i]]){
                array[str[i]] += array[str[i]];
            }else {
                array[str[i]] = 1;
            }
        }
        console.log(array);
    }
}
duplicateCount("adsjfdsfsfjsdjfhacabcsbajda")