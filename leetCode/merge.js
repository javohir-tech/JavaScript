/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function (word1, word2) {
    let i = 0;
    const maxLen = Math.max(word1.length, word2.length)
    const result = []
    while (i < maxLen) {
        if(word1[i]){
            result.push(word1[i])
        }

        if(word2[i]){
            result.push(word2[i])
        }
        i++
    }
    return result.join('')
};


const word1 = "ab"
const word2 = "pqr"

console.log(mergeAlternately(word1, word2))