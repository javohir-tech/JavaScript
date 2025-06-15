/**
 * @param {string} word1
 * @param {string} word2
 * @return {boolean}
 */
var closeStrings = function (word1, word2) {
    if (word1.length !== word2.length) return false

    const fraq = str => {
        const map = new Map()

        for (let char of str) {
            map.set(char, (map.get(char) || 0) + 1)
        }

        return map
    }

    const fraq1 = fraq(word1);
    const fraq2 = fraq(word2);

    const keys1 = [...fraq1.keys()].sort().join('')
    const keys2 = [...fraq2.keys()].sort().join('')
    if (keys1 !== keys2) return false;

    const values1 = [...fraq1.values()].sort((a, b) => a - b);
    const values2 = [...fraq2.values()].sort((a, b) => a - b);
    return values1.join() === values2.join();
};

const word1 = "abc"
const word2 = "bca"
console.log(closeStrings(word1, word2))