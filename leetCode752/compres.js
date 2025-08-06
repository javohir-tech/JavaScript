/**
 * @param {character[]} chars
 * @return {number}
 */
var compress = function (chars) {

    const result = [];
    let i = 0;

    while (i < chars.length) {
        let count = 1;
        let currentChar = chars[i];
        let j = i + 1;

        while (j < chars.length && chars[j] === currentChar) {
            count++;
            j++
        }

        result.push(currentChar)
        if (count > 1) {
            result.push(`${count}`)
        }

        i=j;
    }

    return result

};

const chars = ["a", "a", "b", "b", "c", "c", "c"];
console.log(compress(chars))