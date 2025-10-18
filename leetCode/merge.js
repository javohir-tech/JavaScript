/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function (word1, word2) {
    const result = [];
    let i = 0 ;

    while (i < word1.length) {
        result.push(word1[i]);
        result.push(word2[i]);
        i++
    }

    console.log(result.join())
};

const word1 = "bc";
const word2 = "pqr"

mergeAlternately(word1, word2);