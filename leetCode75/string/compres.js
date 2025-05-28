/**
 * @param {character[]} chars
 * @return {number}
 */
var compress = function (chars) {
    const result = [];
    let count = 1;
    for (let i = 0; i < chars.length - 1; i++) {
        if (chars[i] === chars[i + 1]) {
            count++
        } else {
            count = 1;
        }
        console.log(count)
        if (!result.includes(chars[i])) {
            result.push(chars[i])
        }
    }
    return result
};

const chars = ["a", "a", "b", "b", "a", "c", "c", "c"];

console.log(compress(chars))