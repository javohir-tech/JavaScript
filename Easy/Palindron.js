/**
 * @param {number} x
 * @return {boolean}
 */

const a = 121;


var isPalindrome = function (x) {
    const numbers = x.toString().split("").map(Number);
    const reverseNumbers = [...numbers].reverse();
    console.log(numbers.length)
    let count = 0;
    for (let i = 0; i < numbers.length; i++) {
        if(numbers[i]===reverseNumbers[i]){
           count++
        }
    }
    if(count=== numbers.length){
        return true
    }else{
       return false
    }
    // return count
};

console.log(isPalindrome(a))