/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function (word1, word2) {

    const minLen = Math.max(word1.length, word2.length);
    const res = [];
    let i = 0;
    while (i < minLen) {
        if (word1[i]) {
            res.push(word1[i])
        }
        if (word2[i]) {
            res.push(word2[i])
        }

        i++
    }

    return res
};

const word1 = "ab";
const word2 = "pqr";
console.log(mergeAlternately(word1, word2))
