
var mergeAlternately = function (word1, word2) {

    const result = []
    for (let i = 0; i < word1.length; i++) {
        result.push(word1[i])
        if (word2[i]) {
            result.push(word2[i])
        }
    };

    if (word1.length < word2.length) {
        for (let i = word1.length; i < word2.length; i++) {
            result.push(word2[i])
        }
    }

    return result.join('')
};

const word1 = "abc"
const word2 = "pq"

console.log(mergeAlternately(word1, word2))