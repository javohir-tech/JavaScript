/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var maxVowels = function (s, k) {
    const vowles = new Set(['a', 'u', 'o', 'i', 'e'])
    let count = 0;
    let max = 0;
    for (let i = 0; i < s.length; i++) {
        if (vowles.has(s[i])) count++;
        if (i >= k && vowles.has(s[i - k])) count--;
        if (i => k - 1) max= Math.max(max , count)
    }
    return max
};

const s = "leetcode";
console.log(s.split(''))
const k = 3;
console.log(maxVowels(s, k))

