/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function (s, t) {
    let read1 = 0;
    let read2 = 0
    while (read1 < s.length && read2 < t.length) {
        if(s[read1]===t[read2]){
            i++
        }
        j++
    }
};

const s = "abc"
const t = "ahbgdc"
isSubsequence(s, t)