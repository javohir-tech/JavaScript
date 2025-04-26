/**
 * @param {string[]} strs
 * @return {string}
 */

function longestCommonPrefix(strs) {
    let current = strs[0]

    for (let i = 0; i < strs.length; i++) {
        while (strs[i].indexOf(current) !== 0) {
            current = current.slice(0, -1)
            if(current === "") return " "
        }
    }

    return current
}

let strs = ["flower", "flow", "flight"]

console.log(longestCommonPrefix(strs))

