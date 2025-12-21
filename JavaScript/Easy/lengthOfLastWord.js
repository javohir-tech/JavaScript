/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
    let arr = s.split(" ")
    let newArr = []
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== '') {
            newArr.push(arr[i])
        }
    }
    const lastWord = newArr[newArr.length - 1]
       return lastWord.split("").length
};

const s = "   fly me   to   the moon  "
console.log(lengthOfLastWord(s))