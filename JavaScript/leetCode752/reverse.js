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
        while (left < rigth && !unli.includes(arr[left].toLowerCase())) left++
        while (left < rigth && !unli.includes(arr[rigth].toLowerCase())) rigth--

        [arr[left] , arr[rigth]] = [arr[rigth] , arr[left]];
        left++
        rigth--

    }

    return arr.join("")
};

const s = "IceCreAm";
console.log(reverseVowels(s))