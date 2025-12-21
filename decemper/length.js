/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    // const obj = {}
    let sum = []
    let res = []
    for(let i=0 ; i<s.length ;i++){
        if(!sum.includes(s[i])){
            sum.push(s[i])
            if(sum.length > res.length){
                 res = sum
            }
        }else{
           sum = []
        }
    }

    return res.length
};

let s = "bbbbb"


console.log(lengthOfLongestSubstring(s))
