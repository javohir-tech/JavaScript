/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
var gcdOfStrings = function (str1, str2) {
    const a = str1.length;
    const b = str2.length;
    const gcd = (a, b) => b === 0 ? a : gcd(b, a % b)
    const len = gcd(a, b)
    return len
};

const str1 = "ABCABC"
const str2 = "ABC"
console.log(gcdOfStrings(str1, str2))