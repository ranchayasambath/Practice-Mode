
function sumStr(str){
    let strArr = str.split("");
    console.log(strArr);
    return strArr.reduce(function(total,num) {
        return parseInt(total) + parseInt(num);
    });
}
console.log(sumStr("123456"))