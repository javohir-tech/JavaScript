/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function (s, t) {
    let read1 = 0;
    let read2 = 0
    while (read1 < s.length) {
        const current = s[read1]
        while (read2 < t.length && current !== t[read2]){
            read2++
        }
        console.log(t[read2])
        read1++
    }
};

const s = "abc"
const t = "ahbgdc"
isSubsequence(s, t)