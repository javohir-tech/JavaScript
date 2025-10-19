/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
var gcdOfStrings = function (str1, str2) {
    let cache = str1[0];
    let i = 0;
    const result = [];
    while (i < str2.length) {
        if (cache === str2[i]) {
            console.log(cache)
            result.push(str2[i])
            cache =  str1[i+1]
        }
        // console.log(i)
        i++
    }

    return result.join("") || ""

};

const str1 = "ABABAB"
const str2 = "ABA"

console.log(gcdOfStrings(str1, str2));