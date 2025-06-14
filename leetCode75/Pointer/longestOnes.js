/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var longestOnes = function (nums, k) {
    let left = 0;
    for (let rigth = 0; rigth < nums.length; rigth++) {
        if (nums[rigth] === 0) k--;

        if (k < 0) {
            if (nums[left]===0) k++ ;
            left++
        }
    }
    return nums.length - left
};

const nums = [0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 1, 1, 0, 0, 0, 1, 1, 1, 1]
const k = 3;
// console.log(nums.length)
console.log(longestOnes(nums, k))