/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function (s) {
    const unli = ['a', 'e', 'i', 'o', "u"]

    let left = 0;
    let rigth = s.length - 1;
    let arr = s.split('')
    while (left < rigth) {
        if (!unli.includes(s[left].toLowerCase())) {
            left++
        }
        if (!unli.includes(s[rigth].toLowerCase())) {
            rigth--
        }
        if(unli.includes(s[rigth].toLowerCase()) && unli.includes(s[left].toLowerCase())){
            [arr[left] , arr[rigth]] = [arr[rigth] , arr[left]];
            left++
            rigth--
        }
       
    }

    return arr.join("")
};

const s = "leetcode";
console.log(reverseVowels(s))