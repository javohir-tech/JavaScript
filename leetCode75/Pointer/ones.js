/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var longestOnes = function (nums, k) {
    let rigth = 0;
    let left = 0;
    let maxLength = 0;

    while (rigth < nums.length) {
        if (nums[rigth] === 0) {
            k--
        }

        if (k < 0) {
            if (nums[left] === 0) k++
            left++
        }
        maxLength = Math.max(maxLength, rigth - left + 1)
        rigth++
    }
    return maxLength
};

const sonlar = [0,0,1,1,0,0,1,1,1,0,1,1,0,0,0,1,1,1,1], k = 3;

console.log(longestOnes(sonlar, k))