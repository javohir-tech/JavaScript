/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
var gcdOfStrings = function (str1, str2) {
    if(str1+str2!==str2+str1) return ""
    const a = str1.length;
    const b = str2.length;
    const gcd = (a, b) => b === 0 ? a : gcd(b, a % b)
    const len = gcd(a, b)
    return str1.slice(0, len)
};

const str1 = "LEET"
const str2 = "CODE"
console.log(gcdOfStrings(str1, str2))