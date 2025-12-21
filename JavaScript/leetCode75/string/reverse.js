/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    const arr = s.split(" ")
    return  arr
    .reverse()
    .join(" ")
    .trim()
    .split(/\s+/)
    .join(" ")
};

const s = "  hello world  "
console.log(reverseWords(s))