/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var maxVowels = function (s, k) {
    const vowels = ["a", "e", "i", "o", "u"];
    let result = 0;
    let i = 0;
    let j = k;
    while (i <= s.length - k) {
        const newArr = s.slice(i, j).split('').filter(el => vowels.includes(el))
        result = Math.max(result , newArr.length)
        i++
        j++
    }
    return result
};

const s = "leetcode";
const k = 3;
console.log(maxVowels(s, k))

