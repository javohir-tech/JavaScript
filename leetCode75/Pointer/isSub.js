/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function (s, t) {
    let pattern  = s.split('').join('.*');
    let regex = new RegExp(pattern);
    return regex.test(t)
}

const s = "abc"
const t = "ahbgdc"
console.log(isSubsequence(s, t))