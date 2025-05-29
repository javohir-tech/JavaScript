/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function (s, t) {
    let index = 0

    for (let char of s) {
        index = t.indexOf(char , index);
        if(index ===  -1) return false
        index++
    }
    return true
}

const s = "abc"
const t = "ahbgdc"
console.log(isSubsequence(s, t))