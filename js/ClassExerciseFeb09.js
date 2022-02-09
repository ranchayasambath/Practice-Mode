// write a function that takes a string as argument and returns the number of vowels contained in that string.
//     The vowels are “a”, “e”, “i”, “o”, “u”.
// input: "helicopter"
// output: 4
// reason: there are 4 vowels in the input word helicopter

function countVowels(str){
    let vCount = 0
    let vowels = [ "a","e","i","o","u"]
    for (let char of str) {
        if (vowels.includes(char)){
            vCount++
        }
    }return vCount
}

console.log(countVowels("hello there"))
// let vCount = vowels.reduce((previous,current ) => {
//         if(!previous.includes(vowels)) {
//             previous.push(vowels);
//     }
//     return previous;
// }, []);
//
// console.log(vCount);