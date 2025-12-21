/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function (s) {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    let rigth = 0;
    let left = s.length - 1;
    const result = s.split('')
    while (rigth < left) {
        if (!vowels.includes(result[rigth].toLowerCase())) {
            rigth++
        }
        
        if (!vowels.includes(result[left].toLowerCase())) {
            left--
        }
        
        if(vowels.includes(result[rigth].toLowerCase()) && vowels.includes(result[left].toLowerCase())){
            [result[rigth] , result[left]] = [result[left] , result[rigth]]
            rigth++
            left--
        }
    }
    return result.join("")
};


const s = "IceCreAm";

console.log(reverseVowels(s))
