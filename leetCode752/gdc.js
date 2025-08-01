/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
var gcdOfStrings = function (str1, str2) {
    const minLen = Math.min(str1.length, str2.length);
    let i = 0;
    const result = []
    while (i < minLen) {
        if (str1[i] === str2[i]) {
            result.push(str1[i])
        }
        i++
    }

    return result.join("")
};

const str1 = "ABABAB";
const str2 = "ABAB"
console.log(gcdOfStrings(str1 , str2))