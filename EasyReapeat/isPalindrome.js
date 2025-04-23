/**
 * @param {number} x
 * @return {boolean}
 */

function isPalindrome(x) {
    let current = 0
    let plaindromNumber = x.toString().split("")
    let rever = [...plaindromNumber].reverse()
    for (let i = 0; i < plaindromNumber.length; i++) {
        if (plaindromNumber[i] !== rever[i]) {
            current++
        }
    }
    return current === 0
}

const x = 1212

console.log(isPalindrome(x))