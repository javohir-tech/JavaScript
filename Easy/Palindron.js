/**
 * @param {number} x
 * @return {boolean}
 */

const a = 1214;

var isPalindrome = function (x) {
    const arr = x.toString().split("")
    const reverse = [...arr].reverse()
    let count =  0
    for(let i=0; i<arr.length ; i++){
        if(arr[i]===reverse[i]){
            count++
        }
    }
    if(count===arr.length){
        return  true
    }else{
        return false
    }
};

console.log(isPalindrome(a))