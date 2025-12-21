/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    return s.trim().replace(/\s+/g , " ").split(" ").reverse().join(" ")
};

const s = "     Hello      World    " 


console.log(reverseWords(s))