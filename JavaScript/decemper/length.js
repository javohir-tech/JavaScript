/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    let result = new Map();
    let max = 0;
    let letter = s.split('')

    for (let i = 0; i < letter.length; i++) {
        if(!result.has(letter[i])){
            result.set(letter[i] , i)
        }else{
            console.log(i)
            i = result.get(letter[i])
            result.clear()
        }

        if(max < result.size){
            max = result.size
        }
    }

    return max
};

const s = 'abcabcbb'
const a = 'pwwkew'

console.log(lengthOfLongestSubstring("dvdf"))