/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    return s.trim().split(" ").filter(word => word  !== "").reverse().join(" ")
};

const s = "a good   example";
console.log(reverseWords(s))