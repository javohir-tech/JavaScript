/**
 * @param {character[]} chars
 * @return {number}
 */
var compress = function (chars) {
    let write = 0;
    let read = 0;

    while (read < chars.length) {
        let currentChar = chars[read];
        let count = 0;

        while (read < chars.length && chars[read] === currentChar) {
            read++;
            count++;
        }

        chars[write] = currentChar;
        write++;
        if (count > 1) {
            const countStr = count.toString();

            for(let i=0 ; i<countStr.length ; i++){
                chars[write] = countStr[i];
                write++
            }
        }
    }
    return write

};

const chars = ["a", "a", "b", "b", "c", "c", "c"];

const len = compress(chars)
console.log(chars.slice(0, len))